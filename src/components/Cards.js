import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out some of my projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="./images/project1.jpg"
                        text="slightly longer sentence to see if the width changes if i just type more and also kind of to check if there is a maximum width because i don't know that either"
                        label='Architectuurontwerp III'
                        path='/projects'
                        />
                        <CardItem 
                        src="./images/project2.jpg"
                        text="Project 2 description"
                        label='Architectuurontwerp II'
                        path='/projects'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="./images/project3.jpg"
                        text="Project 3 description"
                        label='Architectuurontwerp II'
                        path='/projects'
                        />
                        <CardItem 
                        src="./images/project4.jpg"
                        text="Project 4 description"
                        label='Architectuurontwerp III'
                        path='/projects'
                        />
                        <CardItem 
                        src="./images/project5.jpg"
                        text="Project 5 description"
                        label='Architectuurontwerp III'
                        path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
