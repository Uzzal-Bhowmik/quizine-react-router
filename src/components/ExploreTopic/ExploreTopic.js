import React, { useState } from 'react';
import "./ExploreTopic.css";
import { useLoaderData } from "react-router-dom";
import quizBg from "../../images/quiz-bg.jpg";
import QuizQuestionCard from '../QuizQuestionCard/QuizQuestionCard';
import { ToastContainer, toast } from 'react-toastify';


const ExploreTopic = () => {
    const { name, questions } = useLoaderData().data;

    const [correctAnsCounter, setCorrectAnsCounter] = useState(0);

    // show answer when clicked on eye button
    const handleShowAnswer = (e, correctAns) => {
        e.stopPropagation();

        toast.success(
            <div className='text-center m-0 p-0'>
                <p className='m-0 p-0'>Correct Answer:</p>
                <p className='m-0 p-0'>{correctAns}</p>
            </div>

            ,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        );
    }

    // when clicked a option check if the choiced answer is right
    const handleAnswerChoice = (e, option, correctAns) => {
        const choice = option;

        if (choice === correctAns) {
            toast.success("Your answer is correct 👏");
            setCorrectAnsCounter(correctAnsCounter + 1);
        }
        else {
            toast.error(<p className='p-0 m-0 text-center'>Your answer is wrong. <br />Try again 👍</p>)
        }
    }

    return (
        <div className='explore-topic' style={{ backgroundImage: `url("${quizBg}")` }}>

            <div className='quiz pt-5' >

                {/* topic title */}
                <div className="topic-name w-50 mx-auto text-center py-3 rounded-4 shadow bg-white">
                    <div>
                        <h1 style={{ fontFamily: "Unbounded", color: "rgb(143, 34, 221)", marginBottom: "16px" }}>{name}</h1>
                        <p className='text-muted'>Answer the trivia to enrich your knowledge on the topic!</p>
                    </div>
                </div>


                {/* correct answer counter */}
                <div className='correct-ans-counter border text-center py-3 rounded-4 shadow bg-white text-success'>
                    <div>
                        <h5>Correct Answers</h5>
                    </div>

                    <div className='border border-primary w-75 mx-auto py-2 bg-success text-white rounded-pill'>
                        <h5 className='fs-3 fw-semibold'>{correctAnsCounter}</h5>
                    </div>
                </div>

                {/* topic quizzes */}
                <div>
                    {
                        questions.map((qs, idx) => <QuizQuestionCard
                            key={qs.id}
                            questionObj={qs}
                            handleShowAnswer={handleShowAnswer}
                            handleAnswerChoice={handleAnswerChoice}
                        />)
                    }
                </div>
            </div>


            <ToastContainer />
        </div>
    );
};

export default ExploreTopic;