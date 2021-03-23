export type FileType = 'png' | 'jpeg'
export type Theme = 'light' | 'dark'

export interface ParsedRequest {
  fileType: FileType
  text: string
  price: string
  deposits: string
  supply: string
  holders: string
  dailyVolume: string
  dailyChange: string
}
