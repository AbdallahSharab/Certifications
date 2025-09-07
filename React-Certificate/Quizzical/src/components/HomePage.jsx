
export default function HomePage(props) {

    function toggleStart() {
        props.setQuizStart((prevQuizStart) => (!prevQuizStart))
    }

    return (
        <main className="home-page">
            <h1>Quizzical</h1>
            <p>Test your knowledge with Quizzical — a quick and fun general knowledge trivia app that challenges you with multiple-choice questions across various categories.</p>
            <button onClick={toggleStart}>Start Quiz</button>
        </main>
    )
}