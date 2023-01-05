import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Electrikfum.ro</title>
        <link rel="icon" href="" />
      </Head>

      <main>
        <Header title="In lucru" />
        <p className="description">
        Electrikfum este in lucru.
        </p>
      </main>

    </div>
  )
}
