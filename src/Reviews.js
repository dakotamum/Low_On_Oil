import React, {useState} from 'react'
import {useEffect} from 'react'
import Rating from './Rating'
import firebase from './firebase/firebaseConfig'
import './reviews.css'

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
                <Rating username="unicorndog" stars="3" ratingtext="Wow what a terrible place to eat."/>
                <Rating username="emdawg" stars="1" ratingtext="I'm disappointed in the lack of oil variety. I am strictly vegan and was startled that this company does not offer natural, organic peanut oil."/>
                {reviewsList ? reviewsList.map((review)=>(
                    <Rating username = {review.username} stars = {review.stars} ratingtext = {review.reviewtext}/>
                )) : ''}
                <div className="reviewsubmition">
                    Leave us a review!
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
                </div>
            </div>
        </div>
    )
}