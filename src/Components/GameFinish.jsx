import React from 'react'
import { Button } from './Button'
import { Win } from './Win'

export const GameFinish = (props) => {
  return (
    <div className='wrapper-start'>
      <div className='strat-wrapper'>
        <div className='title-start'>
          <p>Juego terminado</p>   
        </div>
        <div className='body-finish'>
          <Win title={props.title} />
        </div>
        <div className='button-body'>
          <Button label="Reiniciar Juego" action={props.setRest}/>
        </div>
        </div>
      </div>
  ) 
}
