import { Buffer } from 'buffer'

export interface ISubscribe {
  name: string
  url: string
}

export async function getSubscribe() {
  const res = await fetch(process.env.SUBSCRIBE_URL!, { next: { revalidate: 60 } })
  const str = await res.text()
  const decodedData = Buffer.from(str, 'base64')
  const listText = decodedData.toString('utf-8')
  const rows: ISubscribe[] = []
  listText.split('\r\n').forEach((url) => {
    const name = getTypeFromUrl(url)
    if (url !== '' && name.includes('专线')) {
      rows.push({
        url,
        name,
      })
    }
  })
  return rows
}

function getTypeFromUrl(url: string): string {
  // 解码整个URL
  const decodedURL = decodeURIComponent(url)
  const decoded = decodedURL.split('#')
  return decoded.length === 2 ? decoded[1] : ''
}
