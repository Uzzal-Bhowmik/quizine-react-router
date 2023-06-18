import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./TopicCard.css";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ topic }) => {
    const { id, name, logo, total } = topic;

    const navigate = useNavigate();
    const handleExploreTopic = () => navigate(`/topic/${id}`);

    return (
        <div className="col-12 col-md-3 topic-card gy-5 gy-md-0 mx-auto ">
            <Card style={{ width: '19rem', border: "none", margin: "0 auto" }}>
                <Card.Img variant="top" src={logo} className='img-fluid' />
                <Card.Body>
                    <Card.Title className='topic-title'>{name}</Card.Title>
                    <Card.Text className='text-muted fw-semibold ps-2 py-2'>
                        Quiz Questions: {total}
                    </Card.Text>
                    <Button className="px-5 py-2 fw-bolder" onClick={handleExploreTopic}>
                        Explore Topic
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "25px", height: "25px", margin: "0 0 2px 5px" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Button>

                </Card.Body>
            </Card>
        </div>
    );
};



export default TopicCard;