import React from 'react'
import Rating from './Rating'
import './reviews.css'

export default function Reviews() {
    return (
        <div className='reviews'>
            Look at our great reviews!
            <Rating username="unicorndog" stars="3" ratingtext="Wow what a terrible place to eat."/>
            <Rating username="emdawg" stars="1" ratingtext="I'm disappointed in the lack of oil variety. I am strictly vegan and was startled that this company does not offer natural, organic peanut oil."/>
        </div>
    )
}