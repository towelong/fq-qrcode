"use client"

import { MouseEvent, useState } from "react"
import { useRouter } from 'next/navigation'
import { setCookie } from "cookies-next"
import clsx from "clsx"

export default function EntryInput() {
  const [input, setInput] = useState('')
  const [tip, setTip] = useState('禁止进入，请输入进入码')
  const [show, setShow] = useState(true)
  const router = useRouter()

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ "code": input }),
      next: { revalidate: 60 }
    })
    const data = await res.json()
    if (data.success) {
      setCookie("token", Buffer.from(input).toString('base64'), { maxAge: 60 * 60 * 24 })
      router.push("/subscribe")
    } else {
      setShow(false)
      setTip('进入码错误')
      setInput('')
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <p className={clsx(!show && 'text-red-500')}>{tip}</p>
      <form className="flex flex-col gap-2">
        <input
          className={clsx('border p-2', !show && 'border-red-500')}
          value={input}
          onChange={e => setInput(e.target.value)} />
        <button className="border bg-blue-400 text-white p-2" onClick={handleClick}>点击进入</button>
      </form>
    </div>
  )
}
