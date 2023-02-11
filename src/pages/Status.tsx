import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status(){
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState( [
    'concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])
  function createNewAnswer (event: FormEvent) {
    event?.preventDefault()


    setAnswers ([newAnswer, ...answers])
    setNewAnswer('')
  }
  function handleHotKeySubmit(event:KeyboardEvent){
    if (event.key ==='Enter' &&  (event.ctrlKey || event.metaKey)){
      setAnswers ([newAnswer, ...answers])
      setNewAnswer('')
    }
  }


  return (
    <main className="status">
        <Header title='Tweet' />

          <Tweet content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />

          <Separator />

        <form  onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Fasano18.png" alt="Leo Fasano"/>
            <textarea id="tweet" 
            placeholder="Tweet you answer" 
            value = {newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            />
          </label>
 
          <button type='submit'>
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>
        
        {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
      </main>
  )
}