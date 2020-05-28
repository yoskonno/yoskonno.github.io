import React from 'react'
import logo from '../img/logo.svg'

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <div className="footer__column">
        <div className="footer__logo-wrapper">
          <img className="footer__logo-image" src={logo} alt="もばらぶ" />
        </div>
      </div>
      <div className="footer__column">
        <h4 className="footer__column-title">会社概要</h4>
        <p>株式会社もばらぶ</p>
        <p>設立: 2013年6月</p>
      </div>
      <div className="footer__column">
        <h4 className="footer__column-title">業務内容</h4>
        <p><a href="https://mobalab.net/services/" target="_blank" rel="noopener noreferrer">Webサービス開発</a></p>
        <p><a href="https://mobalab.net/services/" target="_blank" rel="noopener noreferrer">自社サービス</a></p>
        <p><a href="https://mobalab.net/services/" target="_blank" rel="noopener noreferrer">受託開発</a></p>
        <p><a href="https://mobalab.net/services/" target="_blank" rel="noopener noreferrer">中小企業のIT化支援</a></p>
      </div>
      <div className="footer__column">
        <h4 className="footer__column-title">リンク</h4>
        <p><a href="https://mobalab.net" target="_blank" rel="noopener noreferrer">株式会社もばらぶウェブサイト</a></p>
        <p><a href="https://blog.mobalab.net/" target="_blank" rel="noopener noreferrer">公式ブログ「もばらぶん」</a></p>
      </div>
      <div className="footer__column">
        <h4 className="footer__column-title">採用情報</h4>
        <p><a href="https://mobalab.net/recruit/" target="_blank" rel="noopener noreferrer">プロジェクトマネージャー(リモート)</a></p>
        <p><a href="https://mobalab.net/recruit/" target="_blank" rel="noopener noreferrer">ソフトウェアエンジニア(リモート)</a></p>
        <p><a href="https://mobalab.net/recruit/" target="_blank" rel="noopener noreferrer">デザイナー(リモート)</a></p>
      </div>
    </div>
  </footer>
)

export default Footer
