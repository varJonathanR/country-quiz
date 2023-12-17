import React, { useEffect, useState } from 'react'
import QuestionSet from './QuestionSet'

export default function Quiz() {
    /* Score and finish state */
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    return (
        /* Render content depending isFinished state */
        <section className={`questions-container ${isFinished ? "finished" : ""}`}>
            { isFinished ? (
                <>
                    <img className='result' src="/undraw_winners_ao2o 2.svg" alt="Results logo" />
                    <h1>Results</h1>
                    <p>You got <span className='score'>{score}</span> correct {score > 1 || score === 0 ? "answers" : "answer"}</p>
                    <button onClick={() => (window.location.href = "/")}>Try again</button>
                </>
            ) : (
                <>
                    <img className='logo' src="/undraw_adventure_4hum 1.svg" alt="Quiz logo" />
                    <QuestionSet score={score} setScore={setScore} setIsFinished={setIsFinished} />
                </>
            ) }
        </section>
    )
}
