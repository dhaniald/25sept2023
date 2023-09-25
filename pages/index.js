//1. Import area
 
import Head from 'next/head'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
 


//2. Defenatin Area
export default function Home() {
  return (
    <div className="container p-0 g_tbdr">
      <Head>
        <title>Find Businesses Near You on Local Search Engine - Justdial</title>
        <meta name="description" content="Justdial, India's No. 1 local search engine, for Restaurants, Hotels, Salons, Real Estate, Travel, Healthcare, Education, B2B Businesses and more. Find addresses, phone numbers, reviews and ratings, photos, maps of businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
       <Header></Header>
      
      <main>

        Main Component
      </main>
      <Footer/>
    </div>
  )
}
//3. Export Area