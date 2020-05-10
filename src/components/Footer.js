import React from 'react'

const Footer = () => (
  <footer className='footer'>
    <div className="columns">
      <div className="column">
        <h4>会社概要</h4>
        <p>株式会社もばらぶ</p>
        <p>・設立: 2013年6月</p>
        <p>・本店所在地: 千葉県茂原市</p>
      </div>
      <div className="column">
        <h4>業務内容</h4>
        <p><a href="https://mobalab.net/services/" target="_blank" rel="noopener noreferrer">Webサービス開発</a></p>
        <p><a href="https://mobalab.net/services/" target="_blank" rel="noopener noreferrer">自社サービス</a></p>
        <p><a href="https://mobalab.net/services/" target="_blank" rel="noopener noreferrer">受託開発</a></p>
        <p><a href="https://mobalab.net/services/" target="_blank" rel="noopener noreferrer">中小企業のIT化支援</a></p>
      </div>
      <div className="column">
        <h4>リンク</h4>
        <p><a href="https://mobalab.net" target="_blank" rel="noopener noreferrer">株式会社もばらぶウェブサイト</a></p>
        <p><a href="https://blog.mobalab.net/" target="_blank" rel="noopener noreferrer">公式ブログ「もばらぶん」</a></p>
      </div>
      <div className="column">
        <h4>採用情報</h4>
        <p><a href="https://mobalab.net/recruit/" target="_blank" rel="noopener noreferrer">プロジェクトマネージャー(リモート)</a></p>
        <p><a href="https://mobalab.net/recruit/" target="_blank" rel="noopener noreferrer">ソフトウェアエンジニア(リモート)</a></p>
        <p><a href="https://mobalab.net/recruit/" target="_blank" rel="noopener noreferrer">デザイナー(リモート)</a></p>
      </div>
    </div>
  </footer>
)

export default Footer
