import React, {useState} from 'react'
import {useEffect} from 'react'
import Rating from './Rating'
import firebase from '../firebase/firebaseConfig'
import { Card } from 'react-bootstrap'
import '../styles/reviews.css'

export default function Reviews() {

    var [username, setUser] = useState('');
    var [stars, setStars] = useState('');
    var [reviewtext, setReview] = useState('');
    var [reviewsList, setReviewsList] = useState()

    const handleUsernameOnChange = (e) => {
        setUser(e.target.value);
    };
    const handleStarsOnChange = (e) => {
        setStars(e.target.value);
    };
    const handleReviewOnChange = (e) => {
        setReview(e.target.value);
    };

    const createReview = () =>{
        const reviewRef = firebase.database().ref("Review")
        const review = {
            username,
            stars,
            reviewtext
        }
        reviewRef.push(review)
        setUser('')
        setStars('')
        setReview('')
    };

    useEffect(() => {
        const reviewsRef = firebase.database().ref("Review")
        reviewsRef.on('value', (snapshot)=>{
            const reviews = snapshot.val()
            const reviewsList = []
            for (let id in reviews){
                reviewsList.push(reviews[id])
            }
            setReviewsList(reviewsList)
        });
    }, []);

    return (
        <div>
            <div className='reviews'>
                Look at our great reviews!
                {reviewsList ? reviewsList.map((review)=>(
                    <Rating username = {review.username} stars = {review.stars} ratingtext = {review.reviewtext}/>
                )) : ''}
                <Card className="reviewsubmition">
                    Leave us a review! (But please keep it appropriate, Connor)
                    <br></br>
                    <br></br>
                    User:
                    <br></br>
                    <input type="text" onChange={handleUsernameOnChange} value={username}></input>
                    <br></br>
                    Stars:
                    <br></br>
                    <input type="text" name="stars" onChange={handleStarsOnChange} value={stars}></input>
                    <br></br>
                    Tell us about your experience:
                    <br></br>
                    <input type="text" onChange={handleReviewOnChange} value={reviewtext}></input>
                    <br></br>
                    <button onClick={createReview}>Submit</button>
                </Card>
            </div>
        </div>
    )
}