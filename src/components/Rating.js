import React from 'react'
import { Card } from 'react-bootstrap'
import '../styles/rating.css'

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
        <Card className="rating">
            <div>
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
        </Card>
    )
}