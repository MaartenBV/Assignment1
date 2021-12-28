import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { SliderData1 } from '../SliderData1';
import { SliderData2 } from '../SliderData2';
import { SliderData3 } from '../SliderData3';
import { SliderData4 } from '../SliderData4';
import { SliderData5 } from '../SliderData5';

export default function Projects() {
    return (
    <>
    <h1 className="project-title">PLUSWONEN</h1>
    <div className="app-container">
        <table className="table">
            <tbody>
             <tr>
                <th className="project-info">
                <div>Project: Pluswonen</div>
                <div>Architects: Arne De Ridder and Maarten Lauwereys</div>
                <div>Under the supervision of: Trice and Tilke</div>
                <div>Course: Architectuurontwerp III</div>
                <div>Year: 3rd bachelor civil engineering and architecture (2020)</div>
                </th>
                <th>
                    <div className="project-description">The concept of spatial efficiency is the starting point for a design study into new organisations/forms of living beyond the classic single-family dwelling with a careful and integrated elaboration.</div>
                    <div className="project-description">The assignment is to design an innovative house with increased spatial efficiency on a classic plot in the city. In the context of this assignment, intensification, interpretability and interweaving are particularly relevant parameters for achieving an increased return. In concrete terms, this means that we start from the housing needs of an average family (parent with two children). We are asked to provide space that can be flexibly filled according to changing circumstances and needs. This can range from grandparents living at home to students, a change in family composition (children leaving home, own practice, co-working), or the desire to temporarily accommodate one or more people on the basis of a social commitment.</div>
                    <div className="project-description">Increasing the spatial efficiency should increase the quality of life as much as possible and certainly not affect it. Therefore, it is not a matter of simply adding extra surface area to a traditional family home, but of researching an intelligent linking/interchangeability/flexibility whereby the transitions/separations/access can be differentiated according to the filling in.</div>
                    <div className="project-description">The aim of this design is to integrate all parameters into an intelligent and spatial design with a high experiential and visual value. Since it is about living, it is about the experience of domesticity.</div>
                </th>
             </tr>
            </tbody>
        </table>
    </div>

    <ImageSlider slides={SliderData1}/>

    <h1 className="project-title">DE GROENE HALTE</h1>
    <div className="app-container">
        <table className="table">
            <tbody>
             <tr>
                <th className="project-info">
                <div>Project: De Groene Halte</div>
                <div>Architect:Maarten Lauwereys</div>
                <div>Under the supervision of: Kris </div>
                <div>Course: Architectuurontwerp II</div>
                <div>Year: 2nd bachelor civil engineering and architecture (2019)</div>
                </th>
                <th>
                    <div className="project-description">This excercise focuses on an empty grassfield in the north of Ghent. This site has no function as of now, and should be activated in the future.</div>
                    <div className="project-description">The question of how the the city and the farming industry can work together is one that becomes more important with time. The program of this project tries to form the basis of an answer to this question.</div>
                    <div className="project-description">The project consists of an urban farm, maintained by the farmer, who functions as a permanent worker. The food that is produced is also processed here. Apart from this farm, a neighbourhood center is also created, along with a workshop kitchen and café. Lastly, a bed and breakfast is added to the program.</div>
                    <div className="project-description">The aim of this design is to make a new community center, while also combined this with an urban farm.</div>
                </th>
             </tr>
            </tbody>
        </table>
    </div>

    <ImageSlider slides={SliderData2}/>

    <h1 className="project-title">POLYCHROOM</h1>
    <div className="app-container">
        <table className="table">
            <tbody>
             <tr>
                <th className="project-info">
                <div>Project: Polychroom</div>
                <div>Architect:Maarten Lauwereys</div>
                <div>Under the supervision of: Kris and Pieter </div>
                <div>Course: Architectuurontwerp II</div>
                <div>Year: 2nd bachelor civil engineering and architecture (2019)</div>
                </th>
                <th>
                    <div className="project-description">The point of this excercise was to renovate an existing facade using a certain material and an architectural expression. In this way, the students will start a design, not starting from a function or program (like is more usual), but from a material, and its technicalities and limitations.</div>
                    <div className="project-description">The face I worked with is that of the Filature, an old storage building in the north of Ghent. The expression was 'stacking' and the materials to use were ceramic materials.</div>
                    <div className="project-description">The design started with an exploration of the different kinds of ceramic materials, and their proporties. For example, as opposed to concrete, ceramic materials cannot be cast. They have to be shaped into a certain form, and baked after. This limits the ways in which these materials can be used. It was however very useful that the tecontic expression was 'stacking', since bricks and other ceramics are mostly used in this way.</div>
                    <div className="project-description">The images below show the final design, where the original facade itself is left unchanged. Instead, a curtain wall of open glazed ceramic blocks is placed before it. The different depths of these blocks form a print of the original facade behind it.</div>
                </th>
             </tr>
            </tbody>
        </table>
    </div>

    <ImageSlider slides={SliderData3}/>

    <h1 className="project-title">DE LEERPLEK</h1>
    <div className="app-container">
        <table className="table">
            <tbody>
             <tr>
                <th className="project-info">
                <div>Project: De Leerplek</div>
                <div>Architect: Maarten Lauwereys and Arne De Ridder</div>
                <div>Under the supervision of: Trice and Tilke </div>
                <div>Course: Architectuurontwerp III</div>
                <div>Year: 3rd bachelor civil engineering and architecture (2020)</div>
                </th>
                <th>
                    <div className="project-description">This excercise deals with the fact that during the covid-crisis, lots of people need to work from home. Especially for children in poorer families, this poses problems, because many of these children do not have their own place in the house to use for school. How can a temporary and cheap 'piece of furniture' create a studying place for these children, that they can set up and take down themselves in a matter of minutes?</div>
                    <div className="project-description">Our design starts from the idea of manufacturability and flexibility. By offering the user a large array of of options, we ensure a great freedom of use, so that the user can choose his/her own place in the house. 
                                                         can choose his/her own place in the house.
                                                        We also focus on cheap and recyclable materials that are easy to find and ensure easy assembly. Each living situation is different and therefore requires an adaptable design. 
                                                        With our design we would like to show that it is equally possible to provide a quality learning environment with cheap materials and a simple concept.</div>
                    <div className="project-description">Our learning space consists of a simple cardboard plate that can be hung on a closet, door or other surface with rope and clamps. 
                                                        or other surface. Furthermore, we also provide a cloth, attached to a flexible PVC tube, to close off the learning space from the space around it and to create its own space.</div>
                    <div className="project-description">The images below show how this can all be made at home in four easy steps. Then we also included a few photos to give you an idea of how what this looks like in real life.</div>
                </th>
             </tr>
            </tbody>
        </table>
    </div>
    
    <ImageSlider slides={SliderData4}/>

    <h1 className="project-title">DIENSTENCENTRUM 2.0</h1>
    <div className="app-container">
        <table className="table">
            <tbody>
             <tr>
                <th className="project-info">
                <div>Project: Dienstencentrum 2.0</div>
                <div>Architect:Maarten Lauwereys and Abdul-Malik Dalsaev</div>
                <div>Under the supervision of: Trice and Bert </div>
                <div>Course: Architectuurontwerp III</div>
                <div>Year: 3rd bachelor civil engineering and architecture (2020)</div>
                </th>
                <th>
                    <div className="project-description">The exercise handles the optional renovation of a primary school along the Groendreef in Ghent. The building has a long facade along the Olijfstraat and connects to the Groendreef through a three story building. In the centre of the plot, there is a big courtyard.</div>
                    <div className="project-description">The new program giving to this building consists of a few things. The main program is a service center for residents in the neighbourhood, where people can pick up a new passport, or file a report to the police. Along with this, a small library and children games shop are added. There is also a cafetaria that can be opened regardless of other activities. There are also three activity rooms, which can be rented out be random people. The students are given the choice. They can either use the existing building and structure to house this program, or start again from zero.</div>
                    <div className="project-description">For our design, Malik and I decided to use the existing structure to house all of the program. We make a cutout in the facade along the Olijfstraat so that the central courtyard can be accessed without having to go trhough the building. A part of the original structure is also used as a studying terrace, with plants hanging from the roof structure.</div>
                    <div className="project-description">The images below show photos of the model of our design.</div>
                </th>
             </tr>
            </tbody>
        </table>
    </div>
    
    <ImageSlider slides={SliderData5}/>
    </>
    )
}
