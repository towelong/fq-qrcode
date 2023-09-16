import { getSubscribe } from './getSubscribe'
import Subscribe from './Subscribe'

export default async function Home() {
  const rows = await getSubscribe()

  return (
    <main>
      <div className="23">总共 {rows.length}</div>
      <Subscribe subscribes={rows} />
    </main>
  )
}
