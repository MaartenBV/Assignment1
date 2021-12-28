import React from 'react';
import '../../App.css';

export default function Team() {
    return (
        <>
        <div className="aboutus-container">
        <h1>ABOUT US</h1>
        <div>
        <table className="table">
            <tbody>
             <tr>
                <th className="aboutus-info">
                <div>Hello, my name is Maarten Lauwereys.</div>
                <div>At the moment, I am a civil engineering and architecture student at the University of Ghent. I am currently in the second year of my masters degree.</div>
                <div>During the previous five years, I have worked on a lot of different projects for different courses. Most of these projects were architectural excercises for the courses on architecture design. On this website, you can look at some of these designs, along with a description of the excercise and some plans or photos from the finished product.</div>
                <div>If you would like to contact for some reason, my contact info can be found on the Contacts page (as you would've already guessed I suppose).</div>
                </th>
                <th className="aboutus-image"></th>
             </tr>
            </tbody>
        </table>
    </div>
    </div>
        </>
    )
}