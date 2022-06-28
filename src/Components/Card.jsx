import React from 'react'
import "../css/card.css"


export const Card = (props) => {
  return (
    <div className={` card ${props.rotate ? "rotate" : ""}`}
        data-id={props.id}
        data-bind={props.bind}
        onClick={ () => props.actRotate(props.id, props.permanent)}
        >
      <div className='card-wrapper'>
        <div className='card-front'><p className='fas fa-question'></p></div>
        <div className='card-back'><p className={props.symbol}></p></div>
      </div>
    </div>
  )
}
