'use client'

import { useQRCode } from 'next-qrcode'
import { ISubscribe } from './getSubscribe'


export default function SubscribeList({ rows }: { rows: ISubscribe[] }) {
  const { SVG } = useQRCode()

  return (
    <ul className='grid grid-cols-5'>
      {rows.length > 0 && rows.map((item, index) => {
        return (
          <li key={index} className='flex flex-col justify-center items-center'>
            <p className='text-center'>{item.name}</p>
            <SVG text={item.url} options={{ width: 200 }} />
          </li>
        )
      })}
    </ul>
  )
}
