import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
/*画像*/
import mito from '../images/mito.gif'
import icon from '../images/icon.jpg'
import back from '../images/back.png'
import Link from 'next/link'
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

export default function pets() {
  return (
    <div className={styles.main}>
      <header>
      
          <div className="header">
            <div className="header_icon">
            <Link href="./"><Image src={icon} width={60} height={60} alt="small icon"/></Link>
            </div>
            <p className="header_title">
              まーくんの部屋
            </p>
          </div>
        
      </header>
      <div className="profile">
        <div className="koumoku">
          <div className="profile_header">
            <h2>ペット</h2>
          </div>
          <div className="profile_art">
            <p>今は飼っている生き物はそれほど多くないが、昔は色々ないきものを飼育していたのでどれほど飼っていたのか一覧にしてみたいと思う</p>
            <h3>現在飼っている動物</h3>
            <div className="koumoku_list">
              <li>雑種犬</li>
              <li>グッピー</li>
              <li>クサガメ</li>
              <li>ミナミヌマエビ</li>
              <li>シマドジョウ</li>
            </div>
            <h3>過去（１週間以上飼育した動物、昔のことなので間違いの可能性あり）</h3>
            <div className="koumoku_list">
              <li>フナ</li>
              <li>クチボソ（正式名称知らない）</li>
              <li>ブルーギル</li>
              <li>ハゼ系のなにか</li>
              <li>和金</li>
              <li>出目金</li>
              <li>その他よくわからん金魚</li>
              <li>ヒメダカ</li>
              <li>アナゴ（マアナゴ？クロアナゴ？）</li>
              <li>その他よくわからない魚類複数</li>
              <li>アカハライモリ</li>
              <li>アマガエル</li>
              <li>ジムグリ（蛇）</li>
              <li>アオダイショウ</li>
              <li>シロマダラヘビ</li>
              <li>ミシシッピアカミミガメ</li>
              <li>ニホントカゲ</li>
              <li>カナヘビ</li>
              <li>ヤモリ</li>
              <li>セキセイインコ</li>
              <li>ジャービル（ネズミ）</li>
              <li>ジャンガリアンハムスター</li>
              <li>プラナリア</li>
              <li>ツノヒラムシ</li>
              <li>ミミズ（シマミミズ？）</li>
              <li>クリオネ</li>
              <li>しじみ</li>
              <li>タニシ</li>
              <li>イシマキガイ</li>
              <li>サカマキガイ</li>
              <li>カタツムリ（種類不明）</li>
              <li>ナメクジ（種類不明）</li>
              <li>ミジンコ</li>
              <li>オカダンゴムシ</li>
              <li>ワラジムシ</li>
              <li>ジグモ</li>
              <li>テナガエビ（川）</li>
              <li>サワガニ</li>
              <li>ナナフシ</li>
              <li>ナナホシテントウ</li>
              <li>アゲハチョウ</li>
              <li>カナブン</li>
              <li>コガネムシ</li>
              <li>ハラビロカマキリ</li>
              <li>オオカマキリ</li>
              <li>カブトムシ</li>
              <li>ノコギリクワガタ</li>
              <li>スズムシ</li>
              <li>ウスバカゲロウ（蟻地獄）</li>
              <li>アリ複数種</li>
              <li>トンボ複数種</li>
              <li>その他</li>
            </div>
            <p>多！人生で初めて列挙してみたがこんなにいたのか<br/>、、、なんでこんなに飼ってたの？</p>
          </div>
        </div>
        <div className="back">
        <Link href="./"><Image src={back} width={50} height={50} alt="back"/></Link>
        </div>
      </div>
      </div>
  )
}