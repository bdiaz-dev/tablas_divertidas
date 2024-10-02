import { useEffect, useState } from 'react'
import { useGameData } from '../context/gameDataContext'

export const useFinalText = () => {
  const { isFinal, wrongAnswers, gameQuestions } = useGameData()
  const [title, setTitle] = useState()
  const finalTitle = {
    bad: 'No te rindas!',
    normal: 'Bien hecho!',
    great: 'Fantástico'
  }

  useEffect(() => {
    if (isFinal) {
      if (wrongAnswers === 0) {
        setTitle(finalTitle.great)
      } else if (wrongAnswers !== 0 && wrongAnswers < gameQuestions.length) {
        setTitle(finalTitle.normal)
      } else if (wrongAnswers >= gameQuestions.length) {
        setTitle(finalTitle.bad)
      }
    }
  }, [isFinal])

  const errorsText = <h2>
    {wrongAnswers === 0 &&
      <span className='finalNoWrong'>No has cometido ningún error!</span>
    }
    {wrongAnswers > 0 &&
      <>
        <span>Has cometido </span>
        <span className='finalWrong'>{wrongAnswers} </span>
        <span>{wrongAnswers > 1 ? 'Errores' : 'Error'}</span>
      </>
    }
    {/* {`Has cometido - ${wrongAnswers} - Errores`} */}
  </h2>

  return { title, errorsText }
}
