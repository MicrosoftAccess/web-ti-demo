import Head from 'next/head'
import Image from 'next/image'

import Product from '../components/Product'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'



export default function Home({ games }: any) {

  const products = games.results
  return (
    <Layout>
      <div className='h-full w-full flex  justify-center container'>
        <div className='h-full bg-white flex-row rounded-xl flex'>

          <div className='h-full items-center justify-center overflow-y-auto gap-8 p-2 w-full flex flex-row flex-wrap rounded bg-indigo-500' id='style-3'>

            {
              games.data.map((item: any) => (
                <div key={item.appid}>
                  <Product props={item}></Product>
                </div>
              ))
            }

            <div>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  )
}
export const getServerSideProps = async (context: any) => {
  const res = await fetch(' https://cs-steam-game-api.herokuapp.com/games?limit=50')
  const games = await res.json()
  // const res = await fetch(' http://store.steampowered.com/api/appdetails?appids=10')



  return {
    props: {
      games: games
    }
  }
}

// https://api.rawg.io/api/games?key=f073a56242394b98bcadbf57165d2eb7&dates=2019-09-01,2019-09-30&platforms=18,1,7