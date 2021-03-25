import { IncomingMessage } from 'http'
import { parse } from 'url'
import { MarketType, ParsedRequest } from './types'

export function parseRequest(req: IncomingMessage) {
  console.log('HTTP ' + req.url)
  const { pathname } = parse(req.url || '/', true)

  const arr = (pathname || '/').slice(1).split('.')
  let extension = ''
  let text = ''
  let market = ''
  if (arr.length === 0) {
    text = ''
  } else if (arr.length === 1) {
    ;[market, text] = arr[0].split('/')
  } else {
    extension = arr.pop() as string
    ;[market, text] = arr.join('.').split('/')
  }

  const parsedRequest: ParsedRequest = {
    fileType: extension === 'jpeg' ? extension : 'png',
    text: decodeURIComponent(text),
    market: market as MarketType,
  }
  return parsedRequest
}
