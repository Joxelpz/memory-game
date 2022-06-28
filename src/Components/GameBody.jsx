import React, { useEffect, useState } from 'react'
import "../css/gbody.css"
import arrCard from '../logic/createArrCard'
import { Button } from './Button'
import { Card } from './Card'


export const GameBody = (props) => {

  const [cardsArr, setCardsArr] = useState([])
  const [moves, setMoves] = useState(props.movesDificultad)

  //Generamos array de cards aleatorios

  useEffect(()=>{
    setCardsArr( arrCard(props.numCard) )
  },[props.numCard])

  //Funcion para rotar las card
  
  const rotate = (id) => {
      setCardsArr(prevArr => {
        prevArr[id].rotate = true;
        prevArr[id].validating = 1;
        return [... prevArr]
      })
      setTimeout( () => validation(), 2000 )
  }

  //Validacion de igualdad entre cards

  const validation = () => {
    const validationCards = cardsArr.filter( card => card.validating === 1 )

    if( validationCards.length === 2 ){
      if(validationCards[0].bind !== validationCards[1].bind) {
        setCardsArr( prevArr => {
          prevArr[validationCards[0].id].rotate = false;
          prevArr[validationCards[0].id].validating = 0;
          prevArr[validationCards[1].id].rotate = false;
          prevArr[validationCards[1].id].validating = 0;
          setMoves( moves - 1)
          return [...prevArr]
        })
      } else {
        setCardsArr( prevArr => {
          prevArr[validationCards[0].id].permanent = 1;
          prevArr[validationCards[0].id].validating = 0;
          prevArr[validationCards[1].id].permanent = 1;
          prevArr[validationCards[1].id].validating = 0;
          setMoves( moves - 1)
          return [...prevArr]
        })
      }
    }

    const finishCard = cardsArr.filter( card => card.permanent === 0 ).length
    if( finishCard === 0) props.setFinish(2)
    if(moves === 1) props.setFinish(3)
  }

  return (
    <div className='wrapper-start'>
        <div className='strat-wrapper'>
          <div className='header-body'>
            <p className='p-body'>Movimientos: {moves}</p>
            <p className='p-body'>Dificultad: {props.levels}</p>
          </div>
          <div className='card-body'>
            {
              cardsArr
              .sort( (a,b) => a.id - b.id)
              .map( card => {
                return <Card 
                  key={card.id} 
                  id={card.id}
                  rotate={card.rotate}
                  symbol={card.symbol}
                  bind={card.bind}
                  permanent={card.permanent}
                  actRotate={rotate}
                  />
              })
            }
          </div>
          <div className='button-body'>
            <Button label="Reiniciar" action={props.setRest}/>
          </div>
        </div>
    </div>
  )
}
