/*import Head from 'next/head'
import Image from 'next/image'*/
/*画像*/
import real from '../images/real.jpg'
import styles from '../styles/Home.module.css'
/*
git config user.email "akaharaimori2000@gmail.com"git config user.name "masatoku-k"
git add -A
git commit -m “first commit”
git push origin main
git remote add origin https://github.com/masatoku-k/my-portfolio.git
npm run dev
C:\Users\ia21021\my-portfolio
npm run dev   ローカルで表示
<Image src={real} width={200} height={200} alt="this is masatoku"/>
<div className={styles.main}>*/

export default function Home() {
  return (
    <div className={styles.container}>
    <main>
      <header>
        <h1>
          まーくんの部屋
        </h1>
      </header>
      <body></body>
      <hobbies></hobbies>
    </main>
    </div>
  )
}
