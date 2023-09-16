"use client"

import { MouseEvent, useState } from "react"
import { useRouter } from 'next/navigation'
import { setCookie } from "cookies-next"

export default function EntryInput() {
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)
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
      setInput('')
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
      {!show && <p>禁止进入，请输入进入码</p>}
      <form className="flex flex-col gap-2">
        <input className="border p-2" onChange={e => setInput(e.target.value)} />
        <button className="border bg-blue-400 text-white p-2" onClick={handleClick}>点击进入</button>
      </form>
    </div>
  )
}
