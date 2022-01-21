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
        <div className = 'product_class'>
          <Product
            id = "1"
            title = "A Orphan's War"
            price = {10}
            rating= {4}
            image = "https://m.media-amazon.com/images/I/51seH-SzjuL.jpg"
          />
        </div>
          <Product
          id = "1"
          title = "A Orphan's War"
          price = {10}
          rating= {4}
          image = "https://m.media-amazon.com/images/I/51seH-SzjuL.jpg"
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
        title = "A Orphan's War"
        price = {10}
        rating= {4}
        image = "https://m.media-amazon.com/images/I/51seH-SzjuL.jpg"
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
        title = "A Orphan's War"
        price = {10}
        rating= {4}
        image = "https://m.media-amazon.com/images/I/51seH-SzjuL.jpg"
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
        title = "A Orphan's War"
        price = {10}
        rating= {4}
        image = "https://m.media-amazon.com/images/I/51seH-SzjuL.jpg"
      />

      </div>
    </div>
    
  )
}
