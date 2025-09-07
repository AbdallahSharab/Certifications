import "/src/App.css"
import HomePage from "/src/components/HomePage.jsx"
import QuestionsPage from "/src/components/QuestionsPage.jsx"
import { useState, useEffect } from "react"
import blob1 from "/src/assets/blob1.svg"
import blob2 from "/src/assets/blob2.svg"


export default function App() {

    const [questions, setQuesions] = useState([])
    const [quizStarted, setQuizStarted] = useState(false)    

    async function getQuestions() {
            const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
            const data = await response.json()
            setQuesions(data.results)
        }

    useEffect(() => {
        quizStarted ? getQuestions() : null
    }, [quizStarted])

    console.log(questions)
    
    return (
        <>
            <main className="main-body">
                <img src={blob1} id="blob1" alt="decorative blob" ></img>
                {!quizStarted ? 
                    <HomePage setQuizStart={setQuizStarted} /> : 
                    <QuestionsPage questions={questions} setQuizStart={setQuizStarted} />
                }
                <img src={blob2} id="blob2" alt="decorative blob" ></img>
            </main>
        </>
    )
}