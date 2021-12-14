import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { 
  ChevronRightIcon, 
    ChevronLeftIcon, 
} from '@heroicons/react/outline'

import {useState, useEffect} from 'react';
import Header from '../components/Header'
import OfferCard from '../components/OfferCard'

export default function Home() {


  const coverImgPrefix = 'am-b-';

  const [coverIndex, updateCover] = useState(1);


  const fourOffer = (first, second, third, forth) => (
    <div className="grid grid-rows-2 grid-cols-2 gap-x-2 gap-y-5"> 
      {[first, second, third, forth].map(op => <div className="grid-span-1"> {op} </div>)}
    </div>
  )

  const offer = ( img, title, description) => (
    <div className="flex flex-col "> 
      <img src={img} className="w-full object-contain grow min-h-[100px]"/>
      <span className={"text-lg text-ellipsis "+(title == null ? "hidden" : "inline")}>{title}</span>
      <span className={"text-md text-ellipsis "+(description == null ? "hidden" : "inline")}>{description}</span>
    </div>
  )


  const offers = [
    ["Keep shopping for", fourOffer(offer('am-of-gift.jpg',"For You"),offer('am-of-gift.jpg',"For Them"),offer('am-of-gift.jpg',"For Him"),offer('am-of-gift.jpg',"For Her"))],
    ["Stocking stuffers for All",offer('am-of-mic.jpg',"Elgato Mic", "Up to 25% off ")],
    ["Deals on most-loved gifts",fourOffer(offer('am-of-wf.jpg',"Women's Fashion"),offer('am-of-mf.jpg',"Men's Fashion"),offer('am-of-but.jpg',"Beauty"),offer('am-of-home.jpg',"Home"))],
    ["Deal of the Day",offer('am-of-pic.jpg',"$125 - $149", "Up to 25% off Nixplay Display Photo Frames")],
  ]


  useEffect(() => {})


  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon.com FRAPP</title>
        <meta name="description" content="AmazonFrapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <div className={styles.banner}>
          <img src={coverImgPrefix+coverIndex+".jpg"} className="flex object-cover w-full h-[500px]" />
        </div>
        <div className="w-full flex text-white pl-10 pr-10 relative h-[150px] ">
          <ChevronLeftIcon className="w-[30px] " onClick={() => updateCover(coverIndex == 1 ? 4 : coverIndex - 1)}/>
          <div className="grow"/>
          <ChevronRightIcon className="w-[30px]" onClick={() => updateCover(coverIndex == 4 ? 1 : coverIndex + 1)}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 p-5">
          {offers.map(of => <OfferCard title={of[0]} className=" grid-span-1"> {of[1]} </OfferCard> )}
        </div>
         
      </main>

      <footer className={styles.footer}>
      </footer>
        }
    </div>
  )
}
