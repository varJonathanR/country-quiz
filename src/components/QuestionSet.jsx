import React, { useState } from 'react'
import quizData from '../data/quizData'

export default function QuestionSet({ score, setScore, setIsFinished }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isEnable, setIsEnable] = useState(false);

    /* Apply changes when user chooses an answer */
    const handleSubmit = (isCorrect, e) => {
        /* Select the container button to apply classes, if don´t, the class is applied to the element clicked instead parent button */
        const button = e.target.closest("button");
        button.classList.add(isCorrect ? "correct" : "incorrect");
        if(currentQuestion === quizData.length - 1 || !isCorrect) setTimeout(() => {
            setIsFinished(true)
        }, 1000); 
        else setIsEnable(isCorrect);
    };

    /* Apply changes when user click next button */
    const handleNext = () => {
        setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1);
        setIsEnable(!isEnable);

        const buttons = document.querySelectorAll('.answers button');
        buttons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
        });
    };

    return (
        <section className='questions-set'>
            <h2 className='question'>{quizData[currentQuestion].question}</h2>
            <section className="answers">
                { quizData[currentQuestion].answers.map((data, i) => (
                    <button key={i} onClick={e => handleSubmit(data.isCorrect, e)}>
                        <p><span className='literal'>{data.literal}</span> {data.answer}</p>
                        <i className={data.icon}></i>
                    </button>
                )) }
            </section>
            <div className="control-btn">
                <button className={`nextBtn ${isEnable ? "enable" : ""}`} onClick={() => handleNext()}>Next</button>
            </div>
        </section>
    )
}
