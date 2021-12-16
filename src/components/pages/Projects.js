import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { SliderData1 } from '../SliderData1';
import { SliderData2 } from '../SliderData2';

export default function Projects() {
    return (
    <>
    <h1 className="project-title">PLUSWONEN</h1>
    <div className="app-container">
        <table className="table">
            <tbody>
             <tr>
                <th style={{verticalAlign: "top"}}>
                <div className="project-info">Project: Pluswonen</div>
                <div className="project-info">Architects: Arne De Ridder and Maarten Lauwereys</div>
                <div className="project-info">Under the supervision of: Trice and Tilke</div>
                <div className="project-info">Course: Architectuurontwerp III</div>
                <div className="project-info">Year: 3rd bachelor civil engineering and architecture (2020)</div>
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
                <th style={{verticalAlign: "top"}}>
                <div className="project-info">Project: De Groene Halte</div>
                <div className="project-info">Architect:Maarten Lauwereys</div>
                <div className="project-info">Under the supervision of: Kris </div>
                <div className="project-info">Course: Architectuurontwerp II</div>
                <div className="project-info">Year: 2nd bachelor civil engineering and architecture (2019)</div>
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

    <ImageSlider slides={SliderData2}/>
    </>
    )
}
