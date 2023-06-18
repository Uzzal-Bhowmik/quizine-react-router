import "./QuizQuestionCard.css";

const QuizQuestionCard = ({ questionObj, handleShowAnswer, handleAnswerChoice }) => {
    const { question, options, correctAnswer } = questionObj;

    return (
        <div className='w-50 mx-auto pb-3 rounded-4 shadow bg-white my-5'>

            <div className='bg-light py-5 px-4 rounded-top-4 text-center position-relative'>

                {/* eye icons */}
                <div className='icons' title="Show Correct Answer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="eye" onClick={(e) => handleShowAnswer(e, correctAnswer)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>



                <h3>{question}</h3>
            </div>

            {/* options */}
            <div className='mt-3'>
                <form className='options p-3'>
                    {
                        options.map((option, idx) => (
                            <label key={idx} className='radio-label'>
                                <input type="radio" name="option" value={option} onClick={(e) => handleAnswerChoice(e, option, correctAnswer)} />
                                {option}
                            </label>
                        ))
                    }
                </form>
            </div>
        </div>
    );
};

export default QuizQuestionCard;