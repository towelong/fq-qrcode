import { verifyEnterCode, recordEnterCode } from '@/db/queries/user'
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
  const body = await request.json()
  const success = await verifyEnterCode(body.code)

  if (success) {
    await recordEnterCode(body.code)
  }

  return NextResponse.json({ success })
}
