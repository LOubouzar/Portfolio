import React from "react";
import colorPop from "./colorPop.PNG";
import "./card.css";

const Card = () => (
    <div class="container">
        {/* <article class="media">
            <div class="media-left">
                <figure class="image is-16by9">
                    <img src={colorPop} href="https://sleepy-cliffs-28194.herokuapp.com/"/>
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>ColorPop</strong>
                        <br />
                        This app is powered by the Clarifai API to pull 
                    </p>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                        <a class="level-item" aria-label="github" href="https://github.com/LOubouzar/Project1">
                            <span class="icon">
                            <i class="fab fa-github" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </article> */}

        {/* <header class="header">
            <div class="container">
                <div class="header-left">
                    <a class="header-item brand" href="#">
                        <span class="brand-title">Portfolio</span>
                    </a>
                    <a class="header-tab" href="#">
                        Apps
                    </a>
                    <a class="header-tab is-active" href="#">
                        Games
                    </a>
                </div>
            </div> 
            </header>
        */}

        <div class="tabs is-centered">
            <ul>
                <li class="is-active"><a>Node.js</a></li>
                <li><a>React</a></li>
                <li><a>JavaScript</a></li>
                <li><a>Mongo</a></li>
                <li><a>MySQL</a></li>
            </ul>
        </div>

        <section class="section cards">
            <div class="container">
                <div class="columns is-multiline">
                    <a class="column colorpop is-quarter" href="">
                        <p>colorPop</p>
                    </a>
                    <a class="column wanderlist is-quarter" href="">
                        <p>Wanderlist</p>
                    </a>
                    <a class="column cuisin is-quarter" href="">
                        <p>cuisin.try</p>
                    </a>
                    <a class="column crystalguesser is-quarter" href="">
                        <p>Crystal Guesser</p>
                    </a>
                    <a class="column reaction is-quarter" href="">
                        <p>Reaction Generator</p>
                    </a>
                    <a class="column ezCycle is-quarter" href="">
                        <p>ezCycle</p>
                    </a>
                </div>
            </div>
        </section>
    </div>

)

export default Card;