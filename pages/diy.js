import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
/*画像*/
import icon from '../images/icon.jpg'
import ultraman from '../images/ultraman.jpg'
import kuturogi from '../images/kuturogi.jpg'
import me from '../images/me.jpg'
import hannda from '../images/hannda.jpg'
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

export default function diy() {
  return (
    <div className={styles.main}>
      <header>
        <a href="./">
          <div className="header">
            <div className="header_icon">
              <Image src={icon} width={60} height={60} alt="small icon"/>
            </div>
            <p className="header_title">
              まーくんの部屋
            </p>
          </div>
        </a>
      </header>
      <div className="profile">
        <div className="koumoku">
          <div className="profile_header">
            <h2>工作</h2>
          </div>
          <div className="profile_art">
            <p>ジュワッ！！<br/>私は光の国から来たウルトラマンだ
            </p>
              <Image src={ultraman}  alt="ultraman"/>
            <p>訳あって今は皆塚という男と肉体を共有している
            <br/>
            <br/>ん？いつもの皆塚はこんな見た目していないって？
            <br/>これは変身後の姿なのだよ
            <br/>普段は皆塚の姿になることで私は人間界に溶け込んでいる。
            <br/>そしていざという時に「変身」を行うことでこの姿になることができるのだ。
            <Image src={kuturogi} width={437} height={613} alt="kuturogi_ultraman"/>
            <br/>世間では何故か「光る棒」のボタンを押すだけで変身できるという虚偽の情報が蔓延しているが、
            <br/>実際の方法はもっと原始的だ。
            <br/>そう、マスクを作ってかぶるのだ！
            <br/>
            <br/>では皆にも本当の変身の仕方を伝授しよう
            <br/>
            <br/>まずは3Dプリンターでマスクの印刷だ！
            <br/>はじめに3Dデータ配布サイトでモデルを入手しよう！
            <br/><a href="https://www.thingiverse.com/thing:2969438"><b><u>私が使用したファイル</u></b></a>
            <br/>
            <br/>そして気に入らない部分はblenderなどを使って自分でモデリングしよう！
            <Image src={me} alt="me"/>
            <br/>モデルが用意できたら3dプリンター用のスライサーソフトでプリント用データに変換だ
            <br/>あとは3Dプリンターで印刷して第一段階は完了だ
            <br/>
            <br/>次は接着と塗装だ！
            <br/>接着には2液混合型のエポキシ接着剤が使い勝手がよくて安くて接着力も強くておすすめだ
            <br/>プリントしたマスクの表面にはプリント時にできた積層痕があるため
            <br/>これもさっきの接着剤で埋めてしまおう（専用のパテがあればそれを使おう）
            <br/>塗装は100均のラッカー塗料で十分だ
            <br/>これが終わったらフェイスマスク（ショッカー戦闘員が被ってそうなやつ）の赤いものを接着しよう。
            <br/>そのまま接着するとすぐに剥がれてしまうかもしれない。
            <br/>だからマジックテープを介して接着する。
            <br/>
            <br/>最後は目にLEDを実装しよう
            <br/>100均の高輝度ライトを分解してledのついた基盤を目の裏に貼り付ける
            <br/>ただ電池式だと重いしかさばるしめんどうだ、
            <br/>だからノートpcからもぎ取った18650バッテリーにTP4056充電器モジュールとDC-DC昇圧コンバータをつなげ
usbで充電できるようにする。
            <Image src={hannda} alt="hannda"/>
            <br/>
            <br/>できたマスクをかぶれば君もウルトラマンだ！
            <br/>
            </p>
          </div>
        </div>

        <div className="back">
          <a href="./"><Image src={back} width={50} height={50} alt="back"/><br/>ホームに戻る</a>
        </div>
      </div>
      </div>
  )
}