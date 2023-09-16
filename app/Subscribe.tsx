'use client'
import { useQRCode } from 'next-qrcode'
import type { ISubscribe } from './getSubscribe'

interface SubscribeProps {
  subscribes: ISubscribe[]
}

export default function Subscribe({ subscribes }: SubscribeProps) {
  const { SVG } = useQRCode()
  return (
    <div>
      <ul className='grid grid-cols-5'>
        {subscribes.map((item, index) => {
          return (
            <li key={index} className='flex flex-col justify-center items-center'>
              <p className='text-center'>{item.name}</p>
              <SVG text={item.url} options={{ width: 200 }} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
