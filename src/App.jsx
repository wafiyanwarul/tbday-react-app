import React, { useState, useRef, useEffect } from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import BirthdayCard from './components/BirthdayCard'
import WishesForm from './components/WishesForm'
import './App.css'

const App = () => {
  const [step, setStep] = useState(-1)
  const [prayerMessage, setPrayerMessage] = useState('')

  const [audioReady, setAudioReady] = useState(false) // State untuk menunggu interaksi
  const audioRef = useRef(null) // Reference untuk tag audio
  const [currentSong, setCurrentSong] = useState('happy-birthday-piano.mp3') // Lagu pertama yang diputar

  // Function to change the song when one ends
  const handleAudioEnd = () => {
    if (currentSong === 'happy-birthday-piano.mp3') {
      setCurrentSong('beautiful-in-white-piano.mp3')
    } else if (currentSong === 'beautiful-in-white-piano.mp3') {
      setCurrentSong('happy-birthday-piano.mp3') // Loop back to the first song
    }
  }

  const handleNext = () => setStep(step + 1)
  const handlePrayerSubmit = (prayer) => {
    setPrayerMessage(prayer)
    console.log('Alhamdulillah', prayer)
  }

  // const handlePrayerSubmit = prayer => {
  //   setPrayerMessage(prayer)
  //   console.log('Alhamdulillah', prayer) // Sementara untuk backend nanti
  // }

  // Fungsi untuk memulai musik setelah interaksi pengguna

  const startAudio = () => {
    setAudioReady(true)
    setStep(0) // Move to the first step when starting
  }

  useEffect(() => {
    if (audioReady) {
      const audioElement = audioRef.current
      audioElement.src = `/assets/songs/${currentSong}` // Update the source dynamically
      audioElement.play()
      audioElement.onended = handleAudioEnd
    }
  }, [audioReady, currentSong])

  return (
    <div className='App'>
      {step === -1 ? (
        <div className='blurred-screen'>
          <div className='start-container'>
            <button className='start-button' onClick={startAudio}>
              Mulai
            </button>
            {/* <div className="play-icon">▶️</div> */}
          </div>
        </div>
      ) : (
        <>
          <Header />
          {/* Audio player for background music */}
          <audio ref={audioRef}>
            <source src={`/assets/songs/${currentSong}`} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>

          {step === 0 && <LandingPage onNext={handleNext} />}
          {step === 1 && (
            <BirthdayCard
              message='Hai TIKK. Sebelumnya aku bikin ini karena tiba-tiba pingin bikin aja buat ucapan ulang tahun kamu. Haha plis jangan anggap ini modus atau apapun yang negatif yaa.'
              onShowForm={handleNext}
            />
          )}
          {step === 2 && (
            <BirthdayCard
              message='Ada yang ulang tahun yaa, hehe. Udah 21 tahun aja tik. Selamat ulang tahun yang ke-21 tahun TIKAA. Sebelumnya aku mau minta maaf kalo selama menjadi staff di SI IFL Malang tahun 2024 ini masih banyak kurangnya. Aku masih belajar dan akan terus belajar lebih baik lagi. Kadang sikapku kurang berkenan terutama buat kamu yang posisinya manager divisi ini. Harusnya kita sebagai staff lebih peduli juga kepada manajer kita ini.'
              onShowForm={handleNext}
            />
          )}
          {step === 3 && (
            <BirthdayCard
              message='Pesanku buat TIKA di hari ulang tahun yang ke-21 ini.... Pertama, Semoga TIKA terus diberikan kesehatan, kelancaran dalam semua hal, dan dimudahkan mencapai mimpi serta cita-citanya. Semoga TIKA bisa terus menjadi kebanggaan orang tua, membuat mereka tersenyum dan bahagia. Menjadi contoh yang baik buat adiknya. Menjadi lebih dewasa dalam menyikapi berbagai persoalan kehidupan yang kita ngga bakal tahu kedepannya seperti apa.'
              onShowForm={handleNext}
            />
          )}
          {step === 4 && (
            <BirthdayCard
              message='Kedua, Semoga TIKA senantiasa ingat tujuan utama kuliah di Malang ini untuk apa. Ada orang tua yang senantiasa banting tulang bekerja keras demi kita di perantauan untuk menempuh pendidikan dan mencapai mimpinya 💖. Dari banyaknya berita di Malang sampai hari ini semoga Tika bisa mengambil pelajaran bahwa mencari ilmu itu berat dan penuh tantangan serta cobaan. Maka-nya Allah itu akan mengangkat derajat orang-orang yang berilmu'
              onShowForm={handleNext}
            />
          )}
          {step === 5 && (
            <BirthdayCard
              message='Ketiga, jangan pernah takut untuk mulai apapun Tik. Ngga ada yang bakal mampu melawan batas kamu kecuali pikiran kamu sendiri. Selama kamu percaya dan bertekad pasti bisa. Kalau ada yang mencoba mengomentari prosesmu biarkan saja. Mereka tidak menjalaninya dan anggap mereka itu penonton. Karena sejatinya ketika kita sukses kita juga butuh penonton. Jadi tetaplah berjalan.'
              onShowForm={handleNext}
            />
          )}
          {step === 6 && (
            <BirthdayCard
              message='Eh udah mau akhir aja nii. Kira-kira itu aja doa dan pesan dari aku buat Tikaa. Semoga TIKA diberikan yang TERBAIK BTW kalo ada kesulitan apapun jangan ragu buat tanya ke aku Tik! Aku akan terus terbuka kok buat kamu wkwk. Mungkin aku belum yang sering banget ngobrol sm kamu sebelumnya karena ya paling bisa ngobrol langsung waktu di Weekly Meeting Divisi dan kalo ada kumpul CDSI kan dan itupun bahas-nya proker bukan yang ngobrol ttg satu sama lain.'
              onShowForm={handleNext}
            />
          )}
          {step === 7 && (
            <BirthdayCard
              message='Sorry juga kalo misal kamu ada ngerasa waktu makrab atau pas proker kemarin aku keasikan sama teman-teman beda divisi karena emang biar circle nya makin luas dan ngga canggung satu sama lain. Ngga ada niat buat mencuekkan divisi SI kok apalagi kamu haha, canda. Jadi kalo mau ngobrol apapun atau mau kemana feel free aja. Kan katanya kamu mau coba bonceng aku kan kemarin wkwk.'
              onShowForm={handleNext}
            />
          )}
          {step === 8 && (
            <BirthdayCard
              message='Last banget, terus semangat menjalankan role as Manager Sistem Informasi ya Tik. Semoga staff-staff mu ini dapat bertahan sampai akhir bareng-bareng melewati sisa quarter 3 & 4 yang ada dan terus mengukir kisah-kisah yang keren.'
              onShowForm={handleNext}
            />
          )}
          {step === 9 && (
            <BirthdayCard
              message='Kalo misalkan di SI selama ini kamu ngerasa kita sebagai staff terlalu biasa aja dan kurang memperhatikan kamu as Manajer maaf banget yang sebesar-besarnya. Tegur aja gapapa tik. Kamu pasti juga pernah merasa cape karena sikap kita yang mungkin ga seperti divisi-divisi lainnya di IFL Malang ini. Dikit lagi, KITA HEBAT SUDAH BISA SAMPAI DI TITIK INI. DAN AKU BANGGA BANGET KETEMU SAMA KALIAN ANAK-ANAK UB YANG KEREN BANGET YANG MUNGKIN GA BAKAL AKU TEMUI DI SINI. SEMOGA BISA TERUS BERTEMU DI TITIK YANG LEBIH BAIK LAGI.'
              onShowForm={handleNext}
            />
          )}
          {step === 10 && <WishesForm onSubmit={handlePrayerSubmit} />}
        </>
      )}
    </div>
  )
}

export default App
