export type FileType = 'png' | 'jpeg'
export type Theme = 'light' | 'dark'

export interface ParsedRequest {
  fileType: FileType
  text: string
}

export interface TokenData {
  fileType: FileType
  username: string
  rank: string
  price: string
  weeklyChange: string
}
