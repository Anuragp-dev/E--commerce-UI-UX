import React from 'react';
import "../App.css"

const Navbar = () => {
  return (



    <div>
        <div className='nav-top w-100 '>
            <div className='nav-top-content'>
                <div className='nav-para'>
                <a id='nav-a1' ><i className="fa-solid fa-phone" ></i> +221 33 66 22</a>
                <a id='nav-a2'>  <i className="fa-solid fa-envelope"></i> support@elextra.io</a>
                </div>
                <div className='nav-loc'>
                    
                    <a style={{marginRight:"2.5rem"}}>  <i className="fa-solid fa-location-dot"> </i>  Location </a>

                    <div className='v1'></div>
                   
                    
                    <select  className="select-coun">
                        <option>$Dollar(US)</option>
                        <option>₹ INR</option>
                    </select>
                    

                    
                    <select  className="select-lan">
                        <option>EN</option>
                        <option>HI</option>
                        <option>ML</option>

                    </select>
                    
                    </div>
                  </div>
                
            
            

      </div>
      <div className='main-div '>
        
       <nav className="navbar navbar-expand-lg  navbar navbar-light bg-light" id='sub-div' >
  <div className="container-fluid">
    <img style={{width:"2rem",height:"2rem", marginRight:"0.5rem"}} src="../logov.png" alt="" />
    <a className="navbar-brand" style={{fontSize:"24.5px"}} ><b>logoipsum</b><sup> •</sup></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
       
      <div className='nav-midd-select'>
            <select style={{fontSize:"19px", }} className='nav-midd-select1' name="" id="">
              <option  value="">classifieds</option>
            </select>
          </div>


       
        <form style={{ marginLeft:"1.1rem", width:"25rem"}} className =" search d-flex ">
          
        <input style={{padding:"0.8rem", borderRadius:"8px", backgroundColor:"#f0f3f3", border:"none",fontSize:"19px"}} className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" />
        <button className="searchbtn" type="submit"><i style={{color:'rgba(49,135,238,255)',fontSize:'1.3rem'}} className="fa-solid fa-magnifying-glass"></i></button>
        
      </form>
      </ul>
      <div className='icon'>
      <i className="fa-regular fa-heart"></i>
    <i className="fa-solid fa-basket-shopping"></i>
        <i className="fa-solid fa-circle-user"></i>
      </div>

      <button className='btn-classifi'>Classified</button>

      
    </div>
  </div>
</nav>
    </div>
    </div>
    
  )
  }

export default Navbar