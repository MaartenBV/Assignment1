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
                        text="Project: Pluswonen"
                        label='Architectuurontwerp III'
                        path='/projects'
                        />
                        <CardItem 
                        src="./images/project2.jpg"
                        text="Project: De Groene Halte"
                        label='Architectuurontwerp II'
                        path='/projects'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="./images/project3.jpg"
                        text="Project: Polychroom"
                        label='Architectuurontwerp II'
                        path='/projects'
                        />
                        <CardItem 
                        src="./images/project4.jpg"
                        text="Project: De Leerplek"
                        label='Architectuurontwerp III'
                        path='/projects'
                        />
                        <CardItem 
                        src="./images/project5.jpg"
                        text="Project: Dienstencentrum 2.0"
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
