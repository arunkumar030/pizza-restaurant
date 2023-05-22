import React from 'react';
import pizza from '../assets/pizza.jpeg';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about">
        <div className='aboutTop'
        style={{ backgroundImage:`url(${pizza})`}}>      
        </div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <br/>
            <p>
            <i><b>Eating pizza is a predictable experience, 
            so one of the best ways to grab attention to your pizzeria is to offer something... unpredictable.
           In 2012, a india-based pizza chain called Hell’s Pizza launched the “Pizza Roulette” challenge. 
           This promotion involved inviting customers to order a pizza with 2 drops of ghost pepper chili sauce added to one, undisclosed slice. 
            Whoever happened upon that slice would experience the world’s hottest chili sauce, and the potential pain involved in this challenge caused it to make headlines around the world. 
            The results were massive.<br/><br/>

Not only did Hell Pizza have its biggest sales day of all time during this advertising campaign, 
but the previously unknown chain became a global tourist attraction for visitors who were unable to visit New Zealand during the two-month promotion window.

This is the power that unpredictability and advertising can have on a small brand.

It cost Hell Pizza very little to run this promotional event — just the cost of the chili sauce and some advertising spend to get the word out 
initially — and it resulted in a multi-year boost to their revenue and overall brand awareness.

What sort of wild, unpredictable food challenge could you run at your pizzeria?
        </b>  </i>
        </p>
        </div>

    </div>
  )
}
