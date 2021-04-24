import React from 'react'
import './rating.css'

export default function Rating(props) {

    //adding stars to be displayed on review
    let stars=[]
    for (let i=0; i < 5; i++){
        if(i < props.stars){
            stars.push(<i className="fa fa-star" key={i}></i>)
        }
        else{
            stars.push(<i className="far fa-star" key={i}></i>)
        }
    }

    return (
        <div className="rating">
            <div className="left-wrapper">
                <div className="username">
                    {props.username}
                </div>
                <div className="stars">
                    {stars}
                </div>
            </div>
            <div className="right-wrapper">
                <div className="review-text">
                    {props.ratingtext} 
                </div>
            </div>
        </div>
    )
}