import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container-fluid  footer">
                <div className="row">
                    <div className="col s12 m3 marginxs">
                        <h5 className="center white-text" data-aos="zoom-in-down">ABOUT PROJECT</h5>
                        <p className="justify white-text" data-aos="zoom-in-down">This project is a landing page using Materialize</p>
                    </div>

                    <div className="col s12 m3 marginxs">
                        <h5 className="center white-text" data-aos="zoom-in-down">OUR PROJECTS</h5>
                        <ul className="center white-text" data-aos="zoom-in-down">
                            <li><a href="https://github.com/tiagosousaeti/jquery-showcase" className="center white-text" target="_blank" rel="noopener noreferrer">Jquery Showcase</a></li>
                        </ul>
                    </div>

                    <div className="col s12 m3 marginxs">
                        <h5 className="center white-text" data-aos="zoom-in-down">EXTERNAL RESOURCES</h5>
                        <ul className="center white-text" data-aos="zoom-in-down">
                            <li><a href="https://michalsnik.github.io/aos/" className="center white-text" target="_blank" rel="noopener noreferrer">Animate On Scroll</a></li>
                            <li><a href="http://materializecss.com/" className="center white-text" target="_blank" rel="noopener noreferrer">Materialize</a></li>
                        </ul>
                    </div>

                    <div className="col s12 m3 marginxs">
                        <h5 className="center white-text" data-aos="zoom-in-down">FIND US</h5>
                        <ul className="center white-text" data-aos="zoom-in-down">
                            <li><a href="https://www.facebook.com/tiaguins" className="center white-text" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com/tiaguins" className="center white-text" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/tiago-sousa-67903385/" className="center white-text" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col s12">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
