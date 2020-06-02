import React from 'react'

const Widget = ({title, children}) => {
  return (
    <div className="widget">
      { title !== undefined && (
      <h4 className="widget__title">{ title }</h4>
      )}
      <div className="widget__contents">
        { children }
      </div>
    </div>
  )
}

export default Widget