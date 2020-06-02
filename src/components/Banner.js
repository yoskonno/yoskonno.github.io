import React from 'react'
import Widget from './Widget'

const Banner = ({ isSmall }) => {

  const currentPath = window !== 'undefined' ? window.location.pathname : ''
  const showSidebarBanner = window !== 'undefined' ? window.innerWidth > 767
    || currentPath === '/'
    || currentPath.startsWith('/pages/')
    || currentPath.startsWith('/archives/')
    : false

  return (
    <>
      { isSmall && showSidebarBanner && (
        <a
          className="banner__image-wrapper"
          href="https://mobalab.net/recruit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="banner__image"
            src="/img/recruit-banner-medium.jpg"
            alt="we are hiring"
          />
        </a>
      )}
      { !isSmall && (
        <>
          <a
            className="banner__image-wrapper"
            href="https://mobalab.net/recruit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="banner__image banner__image--medium"
              src="/img/recruit-banner-medium.jpg"
              alt="we are hiring"
            />
          </a>
          <h2>優秀な技術者と一緒に、好きな場所で働きませんか</h2>
          <p>株式会社もばらぶでは、優秀で意欲に溢れる方を常に求めています。働く場所は自由、働く時間も柔軟に選択可能です。</p>
          <p>現在、以下の職種を募集中です。ご興味のある方は、リンク先をご参照下さい。</p>
          <ul>
            <li>
              <a
                href="https://mobalab.net/recruit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ソフトウェアエンジニア
              </a>
            </li>
            <li>
              <a
                href="https://mobalab.net/recruit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                デザイナー
              </a>
            </li>
            <li>
              <a
                href="https://mobalab.net/recruit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                プロジェクトマネージャー
              </a>
            </li>
          </ul>
        </>
      )}
    </>
  )
}

export const BannerWidget = () => {
  return (
    <Widget>
      <Banner isSmall />
    </Widget>
  )
}

export const BannerInPost = () => (
  <Banner />
)
