import React from 'react'

const Features = () => {
    return (
        <div className="container">
			<div className="row">			
				<a id="freatures" className="line"><h4 className="margin h1" data-aos="zoom-out" data-aos-duration="500">Services</h4></a>
				<div className="col s12 m4">
		        	<div className="icon-block">
		            	<h2 className="center light-blue-text"><i className="material-icons" data-aos="zoom-in-down" data-aos-duration="500">settings</i></h2>
		            	<h5 className="center" data-aos="zoom-in-down" data-aos-duration="500">Materialize</h5>

		            	<p className="light justify" data-aos="zoom-in-down" data-aos-duration="500">Created and designed by Google, Material Design is a design language that combines the classic principles of successful projects along with innovation and technology.</p>
		          	</div>
		        </div>

		        <div className="col s12 m4">
		        	<div className="icon-block">
			            <h2 className="center light-blue-text"><i className="material-icons" data-aos="zoom-in-down" data-aos-duration="500">extension</i></h2>
			            <h5 className="center" data-aos="zoom-in-down" data-aos-duration="500">Animate On Scroll Library</h5>

			            <p className="light justify" data-aos="zoom-in-down" data-aos-duration="500">Small library to animate elements on your page as you scroll. CSS3 driven scroll animation library. AOS allows you to animate elements as you scroll down, and up.</p>
		          	</div>
		        </div>

		        <div className="col s12 m4">
		        	<div className="icon-block">
			            <h2 className="center light-blue-text"><i className="material-icons" data-aos="zoom-in-down" data-aos-duration="500">build</i></h2>
			            <h5 className="center" data-aos="zoom-in-down" data-aos-duration="500">Easy to work</h5>

			            <p className="light justify" data-aos="zoom-in-down" data-aos-duration="500">All project files are included in the repository. Just download and open the html file in your favorite browser. Tested on Chrome, Firefox, IE and Safary.</p>
			        </div>
		        </div>
			</div>
		</div>
    )
}

export default Features
