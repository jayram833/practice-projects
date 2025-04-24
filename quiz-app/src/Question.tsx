function Question({ question, questionNumber }) {
    return (
        <div>
            <h3>Q.{questionNumber + 1} {question}</h3>
        </div>
    )
}

export default Question
