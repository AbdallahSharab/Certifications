import { decode } from "html-entities"
import { useState, useEffect } from "react"
import { clsx } from "clsx"

export default function QuestionsPage(props) {

    const [selectedAnswers, setSelectedAnswers] = useState({})
    const [shuffledAnswers, setShuffledAnswers] = useState([])
    const [ansChecked, setAnsChecked] = useState(false)
    const [score, setScore] = useState(0)

    useEffect(() => {
            const shuffledAns = props.questions.map((question) => {
                const correctAnswer = question.correct_answer.trim()
                const answers = [...question.incorrect_answers, correctAnswer]
                for (let i = answers.length - 1 ; i > 0 ; i--) {
                    const randIndex = Math.floor(Math.random() * (i + 1));
                    [answers[i], answers[randIndex]] = [answers[randIndex], answers[i]]
                }
                return answers
            })
            setShuffledAnswers(shuffledAns)
    }, [props.questions])

    const questionsArr = props.questions.map((question, index) => {

            function getSelectedAnswer(selectedAnswer) {
                if (selectedAnswers[index] === true) return

                setSelectedAnswers((prevSelectedAnswers) => ({
                    ...prevSelectedAnswers,
                    [index]: selectedAnswer
                }))
            }
            
            const answers = shuffledAnswers[index] || []

            return (
                <section key={index}>
                    <h4 key={index}>{index + 1}.  {decode(question.question)}</h4>
                    <div className="answer-container">
                      {answers.map((answer) => {
                        const isSelected = selectedAnswers[index] === answer
                        const isCorrect = answer === question.correct_answer.trim()
                        const isIncorrect = ansChecked && !isSelected && selectedAnswers[index] !== isCorrect  && isCorrect 
                        return (
                          <button 
                            className={clsx("answer-btn", isSelected && "answer-btn-selected", isIncorrect && "answer-btn-correct")}  
                            key={index + answer} 
                            onClick={() => getSelectedAnswer(answer)}>
                                {decode(answer)}
                        </button>
                      )})}
                    </div>
                    <hr></hr>
                </section>
            )
        })


    function checkAnswers() {
            let score = 0
            props.questions.forEach((question, index) => {
                const correctAnswer = question.correct_answer.trim()
                if (selectedAnswers[index] === correctAnswer) {
                    score += 1
                }
            })
            return score
    }     

    function playAgain() {
        props.setQuizStart((prevQuizStart) => (!prevQuizStart))
    }
    
    console.log(selectedAnswers)

    return (
        <section className="questions-page">
            {questionsArr}
            {ansChecked && <span className="score">You scored {score}/{props.questions.length} correct answers </span>}
            {ansChecked ? <button className="check-answer-btn" onClick={playAgain} >Play Again</button> : 
                <button className="check-answer-btn" onClick={() => {setScore(checkAnswers()); setAnsChecked(true)}} >Check Answers</button>}
        </section>
    )
}