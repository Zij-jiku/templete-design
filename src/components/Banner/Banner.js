import React from 'react'
import './banner.css';

function Banner() {
  return (
    <>
      <div className='container'>
        <div className='banner-section'>
          <div className='banner-left'>
            <h1 className='bannerheading'>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
            <p className='bannerpara'>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>


            <form className="example" action="">
              <i className="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>



            <div className='count-down-group'>
              <div className='box-one'>
                <h4>200<span className='plus'>+</span> </h4>
                <span>Residental grup telah bergabung</span>
              </div>

              <div className='box-one'>
                <h4>10<span className='plus'>+</span> </h4>
                <span>Sudah berpengalaman </span>
              </div>

              <div className='box-one'>
                <h4>999<span className='plus'>+</span> </h4>
                <span>Properti tersedia di berbagai Kota</span>
              </div>
            </div>
          </div>

          <div className='banner-right'>
            <img src='images/banner_right_img.png' alt = "banner_right_img.png"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner;