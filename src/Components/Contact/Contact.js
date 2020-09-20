import React from 'react'

const Contact = () => {
    return (
        <div className="container">
			<div className="row">
				<a href="jsx-a11y/anchor-is-valid" id="contact" className="line"><h4 className="margin h1" data-aos="zoom-out" data-aos-duration="500">Contact</h4></a>
				<div className="col s12 m4">
		        	<div className="icon-block">
		            	<h2 className="center light-blue-text"><i className="material-icons" data-aos="zoom-in-down" data-aos-duration="500">location_on</i></h2>
		            	<p className="center" data-aos="zoom-in-down" data-aos-duration="500">Avenida Clemente Santana, 390</p>
		            	<p className="center" data-aos="zoom-in-down" data-aos-duration="500">São Tomas de Aquino/MG</p>

		            	<h2 className="center light-blue-text"><i className="material-icons" data-aos="zoom-in-down" data-aos-duration="500">phone</i></h2>
		            	<p className="center" data-aos="zoom-in-down" data-aos-duration="500">(35) 3535-1406</p>

		            	<h2 className="center light-blue-text"><i className="material-icons" data-aos="zoom-in-down" data-aos-duration="500">mail</i></h2>
		            	<p className="center" data-aos="zoom-in-down" data-aos-duration="500">contato@tiagosousa.eti.br</p>
		          	</div>
		        </div>

		        <div className="col s12 m8">
		        	<div className="icon-block">
			            <iframe className="jsx-a11y/iframe-has-title" title="myFrame" data-aos="zoom-in-down" data-aos-duration="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.3666257754144!2d-47.102626284984844!3d-20.776450586135557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b7383472345677%3A0x1a1dcbeec2ed4d3e!2sR.+Clemente+Santana%2C+390%2C+S%C3%A3o+Tom%C3%A1s+de+Aquino+-+MG%2C+37960-000!5e0!3m2!1spt-BR!2sbr!4v1516072353646" width="100%" height="340" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
		          	</div>
		        </div>
			</div>
		</div>
    )
}

export default Contact