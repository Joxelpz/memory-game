import React from 'react'
import { Button } from './Button'
import "../css/start.css"

export const GameStart = ( props ) => {

  const levelTitle = [ "Principiante", "Facil", "Normal", "Dificil", ]


  return (
    <div className='wrapper-start'>
        <div className='strat-wrapper'>
          <h1 className='title-start'>Juego de memoria</h1>
          <div className='start-body'>
            <p className='description-start'>Click para cambiar la dificultad</p>
            <div className='button-start'>
              <Button label={levelTitle[props.dificultad]} action={props.changeDificultad}/><br />
              <Button label="Iniciar" action={()=> props.setStart(1)}/>
            </div>
          </div>
          <p className='footer-start'>Hecho con React js</p>
        </div>
    </div>
  )
}
