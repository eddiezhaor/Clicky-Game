import React from "react";

const Header = props => (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Clicky Game</a>
                        <a className="title title2">Click an image to begin!</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                        
                        <ul className="navbar-nav ml-auto">
                            <a className="title">Score {props.score} | </a>
                            <a className="title"> Top Score {props.topScore}</a>
                        </ul>
                        </div>
                    </div>
                </nav>
                <header>
                    <h1>Evil Morties!</h1>
                    <h2>Click on an image to earn points, but don't click on any more than once!</h2>
                </header>
            </div>
 )

export default Header