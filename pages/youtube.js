import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
/*画像*/
import vmarkn from '../images/3d.jpg'
import youtubelink from '../images/youtube.webp'
import prtsc from '../images/prtsc.jpg'
import icon from '../images/icon.jpg'
import back from '../images/back.png'
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
<div classNameName={styles.main}>*/

export default function youtube() {
  return (
    <div className={styles.main}>
      <header>
      <Link href="./">
          <div className="header">
            <div className="header_icon">
              <Image src={icon} width={60} height={60} alt="small icon"/>
            </div>
            <p className="header_title">
              まーくんの部屋
            </p>
          </div>
        </Link>
      </header>
      <div className="profile">
        <div className="koumoku">
          <div className="profile_header">
            <h2>YouTube</h2>
          </div>
          <div className="profile_art">
            <p>初めてこのアプリ開発チームに参加した日に「VTuberになれば」と言われたのでその日の夜に動画を作ってYouTuberになった<br/><br/>
              僕の持っている使えそうなアバターは下の２つのみなのだが、見た目がリアルと結びついて嫌なので今のところアバターは使わずに配信している
            </p>
              <div className="v_img">
                <Image src={vmarkn} alt="3d"/>
                <Image src={icon}alt="icon"/>
              </div>
              <br/><br/>
            <p>この授業がきっかけで始めたチャンネルなのでチャンネル</p>
            <Image src={prtsc}alt="icon"/>
            <div className="back">
          <a href="./"><Image src={youtubelink} width={130} height={130} alt="back"/><br/>YouTubeチャンネル<br/>のリンク</a>
        </div>
          </div>
        </div>
        <div className="back">
        <Link href="./"><Image src={back} width={50} height={50} alt="back"/><br/>ホームに戻る</Link>
        </div>
      </div>
      </div>
  )
}