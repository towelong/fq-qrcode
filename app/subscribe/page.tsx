// import { redirect } from 'next/navigation'
// import { cookies } from 'next/headers'
import { getSubscribe } from './getSubscribe'
import SubscribeList from './SubscribeList'

export default async function Subscribe() {
  // const cookiesList = cookies()
  // if (!cookiesList.has('token')) {
  //   redirect('/')
  // }
  const rows = await getSubscribe()

  return (
    <div>
      <p className='text-center py-6 text-xl'>总共 {rows.length}</p>
      <SubscribeList rows={rows} />
    </div>
  )
}
