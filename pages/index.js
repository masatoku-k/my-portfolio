
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
/*画像*/
import real from '../images/real.jpg'
import icon from '../images/icon.jpg'
import pet from '../images/pet.jpg'
import youtubelink from '../images/youtube.webp'

import ultra from '../images/ultra.jpg'


/*
git config user.email "akaharaimori2000@gmail.com"git config user.name "masatoku-k"
git add -A
git commit -m “first commit”
git push origin main
git remote add origin https://github.com/masatoku-k/my-portfolio.git
npm run dev
ctrl+c
C:\Users\ia21021\my-portfolio
npm run dev   ローカルで表示
<Image src={real} width={200} height={200} alt="this is masatoku"/>
<div classNameNameName={styles.main}>*/

export default function Home() {
  return (
    <div className={styles.main}>
      <header>
        <div className="header">
          <div className="header_icon">
            <Image src={icon} width={60} height={60} alt="small icon"/>
          </div>
          <p className="header_title">
            まーくんの部屋
          </p>
        </div>
      </header>

      <div className="name">
        <div className="name_img">
          <Image src={real} width={200} height={250} alt="this is masatoku"/>
        </div>
        <div className="name_name">
          <div className="name_furigana">
            <p>カイヅカ マサトク</p>
          </div>
          <div className="masatoku">
            <h1>皆塚昌徳</h1>
          </div>
          <div className="gakka">
            <h2>情報学部 情報社会学科 ２年</h2>
          </div>
          <div className="zikoshoukai">
            <p>ミナヅカと呼ばれたり、貝塚と書かれることには慣れている。
            <br/>ちなみにこの苗字は40人くらいしかおらず、
            <br/>若い男の皆塚は今のところ自分以外確認できていないため
            <br/>僕の代で皆塚が消滅する可能性がある。
            <br/>
            <br/>毎日好きなことをやって生きてます
            </p>
          </div>
        </div>
      </div>

      <div className="profile">
        <div className="koumoku">
          <div className="profile_header">
            <h2>所属しているサークルなど</h2>
          </div>
          <div className="koumoku_list">
            <li><b>KSC（キッズサイエンスカフェ）</b><br/>小学生などに工作を教えるサークル</li>
            <li><b>Cue-FM</b><br/>ラジオサークル、あまり参加できてない</li>
            <li><b>ITソルーション室（サークルではない）</b><br/>PC相談室的なところ</li>
          </div>
        </div>
        <div className="koumoku">
          <div className="profile_header">
            <h2>生息地</h2>
          </div>
          <div className="profile_art">
            <p>普段はTwitterに生息<br/>
            SNS系のアカウントは基本的に名前は「まーくん」、アイコンは上のイラストを使用している<br/>
            このイラストは友人に描いてもらった僕のイラストを参考に自分で描き直したもの<br/><br/>
            <a href="https://twitter.com/markn_chansan" className="profile_Twitter">僕のTwitterアカウント</a><br/><br/>
            </p>
            <div className="profile_icon">
              <Image src={icon} width={200} height={200} alt="icon"/>
            </div>
            <p>
            現実世界では愛知県の蒲郡市に住んでいる（横浜そだち）<br/>
            蒲郡市は「古見さんは、コミュ症です。」の作者の出身地<br/>
            </p>
            
          </div>
        </div>
        <div className="koumoku">
          <div className="profile_header">
            <h2>将来の夢</h2>
          </div>
          <div className="profile_art">
            <p>・・・なんだろう、何ならなれるのか？</p>
          </div>
        </div>

        <div className="hobby">
        <div className="profile_header">
            <h2>趣味</h2>
            </div>
          <div className="hobby_list">
            <li><a href="/picture"><Image src={icon} width={100} height={100} alt="small icon"/><br/>イラスト</a></li>
            <li><a href="/pets"><Image src={pet} width={100} height={100} alt="ペット"/><br/>ペット</a></li>
            <li><a href="/youtube"><Image src={youtubelink} width={100} height={100} alt="YouTube"/><br/>youtube</a></li>
            <li><a href="/diy"><Image src={ultra} width={100} height={100} alt="diy"/><br/>工作</a></li>
          </div>
        </div>
      </div>
    </div>
  )
}