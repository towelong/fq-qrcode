import type { CodeDto } from '@/db/dto/user'
import { db } from '@/db/index'

export async function verifyEnterCode(code: string): Promise<boolean> {
  const result = await db.query<CodeDto[]>(
    'select code from fql_code where code = ? limit 1',
    [code],
  )

  if (result.length === 0)
    return false
  return result[0].code !== ''
}

export async function recordEnterCode(code: string) {
  await db.query(
    'insert into fql_used_log(`code`) values (?)',
    [code],
  )
}
