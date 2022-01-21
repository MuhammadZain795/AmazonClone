import React from 'react'
import Product from '../components/Product';
import '../css/home.css';

export default function Home() {
  return (
    <div className='home'>
      <img
        className='home_image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner image"
      />
      <div className='products'>
          <Product
            id = "1"
            title = "A Orphan's War"
            price = {10}
            rating= {4}
            image = "https://m.media-amazon.com/images/I/51seH-SzjuL.jpg"
          />
          <Product
          id = "1"
          title = "The War Between Us"
          price = {12}
          rating= {4}
          image = "https://m.media-amazon.com/images/I/51kjvCihacL.jpg"
        />
          <Product
          id = "1"
          title = "The Book Thief"
          price = {20}
          rating= {4}
          image = "http://mindjoggle.com/wp-content/uploads/2020/07/the-book-thief.png"
        />
          <Product
          id = "1"
          title = "The Last Magician"
          price = {9}
          rating= {4}
          image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3vajBV5Ss777kiaS_AGibICC28-TWR3ZUg&usqp=CAU"
        />
        <Product
            id = "1"
            title = "A Orphan's War"
            price = {10}
            rating= {4}
            image = "https://m.media-amazon.com/images/I/51seH-SzjuL.jpg"
          />
          <Product
          id = "1"
          title = "The War Between Us"
          price = {12}
          rating= {4}
          image = "https://m.media-amazon.com/images/I/51kjvCihacL.jpg"
        />
          <Product
          id = "1"
          title = "The Book Thief"
          price = {20}
          rating= {4}
          image = "http://mindjoggle.com/wp-content/uploads/2020/07/the-book-thief.png"
        />
          <Product
          id = "1"
          title = "The Last Magician"
          price = {9}
          rating= {4}
          image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3vajBV5Ss777kiaS_AGibICC28-TWR3ZUg&usqp=CAU"
        />

      </div>
    </div>
    
  )
}
