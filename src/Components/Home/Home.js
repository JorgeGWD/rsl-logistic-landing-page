import React from 'react'

const Home = () => {
    return (
        <>
            <a id="home"></a>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper  black">
                        <div className="container">
                            <ul id="nav-mobile" className="hide-on-med-and-down">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About us</a></li>
                                <li><a href="#freatures">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <form>
                                        <div className="input-field">
                                        <input id="search" type="search" style={{paddingTop: 24 + "px", paddingBottom: 24 + "px"}} placeholder="Pesquisa..." required />
                                        <label className="label-icon" htmlFor="search"><i className="material-icons" style={{marginTop: -15}}>search</i></label>
                                        <i className="material-icons">close</i>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>		
            <div className="bg" style={{height: 100+'vh'}}></div>
            <div className="title">
                <span className="subtitle  white-text"><h2 data-aos="fade-down">RSL LOGISTIC</h2></span><br/>
                <a href="#about" style={{marginRight: 4 +"px"}} className="waves-effect waves-light btn-large blue" data-aos="fade-right">About</a>
                <a className="waves-effect waves-light btn-large green accent-4" data-aos="fade-left">Register</a>
            </div>
        </>
    )
}

export default Home
