import { IncomingMessage, ServerResponse } from 'http'
import { parseRequest } from './_lib/parser'
import { getScreenshot } from './_lib/chromium'
import { getHtml } from './_lib/template'
import fetch from 'isomorphic-fetch'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1'

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const currentTs = Math.floor(Date.now() / 1000)
    const weekBack = currentTs - 604800
    const parsedReq = parseRequest(req)
    const response = await fetch(
      'https://subgraph.backend.ideamarket.io:8080/subgraphs/name/Ideamarket/Ideamarket',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              ideaMarkets(where: { name: "Twitter" }) {
                tokens(where: { name: "@${parsedReq.text}" }) {
                  id
                  tokenID
                  name
                  supply
                  holders
                  marketCap
                  tokenOwner
                  daiInToken
                  invested
                  listedAt
                  lockedAmount
                  rank
                  latestPricePoint {
                    timestamp
                    counter
                    oldPrice
                    price
                  }
                  pricePoints(where:{timestamp_gt:${weekBack}} orderBy:timestamp) {
                    timestamp
                    oldPrice
                    price
                  }
                  dayVolume
                  dayChange
                }
              }
            }`,
        }),
      }
    )
    const result = await response.json()
    const token = result.data.ideaMarkets[0].tokens[0]
    const weeklyPricePoints = token.pricePoints
    let weeklyChange = '0'
    if (weeklyPricePoints.length > 0) {
      const weeklyCurrentPrice = Number(
        weeklyPricePoints[weeklyPricePoints.length - 1].price
      )
      const weeklyOldPrice = Number(weeklyPricePoints[0].oldPrice)
      weeklyChange = Number(
        ((weeklyCurrentPrice - weeklyOldPrice) * 100) / weeklyOldPrice
      ).toFixed(2)
    }

    console.log(parsedReq)
    console.log(token)
    let html
    if (token) {
      html = getHtml({
        rank: token.rank,
        username: token.name,
        weeklyChange,
        price: Number(token.latestPricePoint.price).toFixed(2),
        fileType: parsedReq.fileType,
      })
    } else {
      html = getHtml({
        rank: '0',
        username: parsedReq.text,
        weeklyChange: '0',
        price: '0',
        fileType: parsedReq.fileType,
      })
    }

    if (isHtmlDebug) {
      res.setHeader('Content-Type', 'text/html')
      res.end(html)
      return
    }
    const { fileType } = parsedReq
    const file = await getScreenshot(html, fileType, isDev)
    res.statusCode = 200
    res.setHeader('Content-Type', `image/${fileType}`)
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    )
    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>')
    console.error(e)
  }
}
