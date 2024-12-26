import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './WishesForm.css'
import PhotoGallery from './PhotoGallery'

const WishesForm = ({ onSubmit }) => {
  const [prayer, setPrayer] = useState('')

  const handleSubmit = async () => {
    if (prayer.length >= 50) {
      try {
        const response = await fetch('https://birthday-backend-production-78b3.up.railway.app/api/prayers', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prayer_text: prayer })
        });

        const data = await response.json()

        if (response.ok) {
          onSubmit(prayer) // Tetap panggil onSubmit untuk update UI
          Swal.fire(
            'Alhamdulillah! 🎉',
            'Dan apabila hamba-hamba-Ku bertanya kepadamu (Muhammad) tentang Aku, maka sesungguhnya Aku dekat. Aku Kabulkan permohonan orang yang berdoa apabila dia berdoa kepada-Ku. Hendaklah mereka itu memenuhi (perintah)-Ku dan beriman kepada-Ku, agar mereka memperoleh kebenaran. (QS. Al-Baqarah: 186)',
            'success'
          )
          setPrayer('') // Reset form setelah berhasil
        } else {
          Swal.fire(
            'Error!',
            data.message || 'Terjadi kesalahan saat mengirim doa',
            'error'
          )
        }
      } catch (error) {
        console.error('Error:', error)
        Swal.fire('Error!', 'Terjadi kesalahan saat mengirim doa', 'error')
      }
    } else {
      Swal.fire(
        'Doa Terlalu Pendek!',
        'Minimal 50 karakter, ya Tik hehe😊',
        'error'
      )
    }
  }

  return (
    <div className='flex flex-col items-center w-full max-w-4xl mx-auto px-4'>
      {/* Photo Gallery */}
      <div className='w-full mb-8'>
        <h3
          className='text-2xl font-semibold text-center'
          style={{
            color: '#ff6f61' // Warna sama dengan tombol
          }}
        >
          SI IFL Chapter Malang 2024/2025 So Far...
        </h3>
        <PhotoGallery />
      </div>

      {/* Prayer Form */}
      <div className='wishes-form w-full max-w-2xl'>
        <textarea
          placeholder='Tulis doa dan harapan TIKA di sini...'
          value={prayer}
          onChange={e => setPrayer(e.target.value)}
        />
        <button onClick={handleSubmit} className='submit-button'>
          Doa dan Harapanku ✨
        </button>
      </div>
    </div>
  )
}

export default WishesForm
