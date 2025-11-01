import React from 'react'
import Navbar from '../component/Navbar'
import First from '../component/first'
import Second from '../component/Second'
import Third from '../component/Third'
import Footer from '../component/Footer'
import Four from '../component/Four'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <First/>
      <Second/>
      <Third/>
      <Four/>
      <Footer/>
    </div>
  )
}
