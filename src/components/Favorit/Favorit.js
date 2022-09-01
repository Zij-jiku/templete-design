import React from 'react'
import './favorit.css';

function Favorit() {
  return (
    <div className='container'>
      <h2 className='favorit_heading'>Residen Favorit</h2>
      <div className='favorit_box'>
        <div className='favorit_left_box'>
          <img src='images/favorit1.png' className='favoritimg-1' alt='favorit-img'/>
          <img src='images/favorit2.png' className='favoritimg-2' alt='favorit-img'/>
        </div>
        <div className='favorit_right_box'>
          <h4>Bangunan yang dirancang oleh Aristektur Handal</h4>
          <p>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>

          <router-link to=""> <span>Hubungi Kami</span> </router-link>
          <router-link to=""> <span>Hubungi Kami</span> </router-link>
        </div>
      </div>
    </div>
  )
}

export default Favorit;