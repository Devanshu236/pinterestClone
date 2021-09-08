import React from 'react'

import PropTypes from 'prop-types'


export default function Navbar(props) {

    let style1={
        fontWeight: "1000",
         color: "white",
         border: '2px' ,
         borderStyle:"solid",
         borderColor: "black",
         backgroundColor: "black",
         borderRadius: "145px",
         height: "48px",
         width: "80px",
         textAlign: "center"

    };
    let style2={
        fontWeight:"1000",
        color: "black"

    };
    let style3={

        width:"1300px",
        backgroundColor:"rgb(235, 231, 231)",
        border: '2px' ,
        borderStyle:"solid",
        borderColor: "white",
        borderRadius: "145px",
        height: "48px",
        padding: "-100px"

    };
    let stylenavbar={
        height: "25px" ,
         width: "25px"
    };

    
    return (
       <>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="pinterest.png" alt="" style={stylenavbar}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"  style={style1}>{props.Home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bachu" href="/" style={style2}>{props.Today}</a>
              </li>
             
            </ul>
            <form className="d-flex">
                <svg className="gUZ B9u U9O kVc searchba" height="16" width="16" viewBox="0 0 24 24" aria-label="Search icon" role="img"><path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path></svg>
                
              <input className="form-control me-2" type="search" placeholder="   Search" aria-label="Search" style={style3}/>
            
            </form>
          </div>
        </div>
      </nav>
      
            </div>


       </>
    )
}

Navbar.defaultProps = {
    Home: 'Home',
    Today: 'Today'
  };