import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,

  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share'

const SharingButtons = () => {
  const shareUrl = "https://stg-engineering.mobalab.net";
  // TODO: need to add correct URL
  const title = "mobalab | もばらぶ";

  return (
    <div className="sharing-buttons">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="sharing-buttons__item"
      >
        <FacebookIcon
          size={48}
          round
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="sharing-buttons__item"
      >
        <TwitterIcon
          size={48}
          round
        />
      </TwitterShareButton>
      <EmailShareButton
        url={shareUrl}
        subject={title}
        body="body"
        className="sharing-buttons__item"
      >
        <EmailIcon
          size={48}
          round
        />
      </EmailShareButton>
    </div>
  )
}

export default SharingButtons
