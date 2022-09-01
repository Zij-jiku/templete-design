import React from 'react'
import './properti.css';

function Properti() {
  return (
    <div className='container'>
      <h2 className='properti_heading'>Tahapan Pembelian Properti yang Mudah dan Cepat</h2>

      <div className='properti_box'>
         <div className='main_box'>
            <h4>Pilih Properti</h4>
            <p>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
            <router-link to=''> <span> Baca lebih Lanjut</span> <i class="fa-solid fa-arrow-right"></i> </router-link>
         </div>

         <div className='main_box'>
            <h4>Pilih Properti</h4>
            <p>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
            <router-link to=''> <span> Baca lebih Lanjut</span> <i class="fa-solid fa-arrow-right"></i> </router-link>
         </div>

         <div className='main_box'>
            <h4>Pilih Properti</h4>
            <p>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
            <router-link to=''> <span> Baca lebih Lanjut</span> <i class="fa-solid fa-arrow-right"></i> </router-link>
         </div>
         
      </div>
    </div>
  )
}

export default Properti;