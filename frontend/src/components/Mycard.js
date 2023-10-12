import "./Css/Mycard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {CustomButtonGroup,} from "./CustomArrow";


const Mycard = () => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
    
   

    <div>
    
   <div className="classif">
    <h2 style={{fontSize:"30px"}}><b>Classified<br/>Products on <br/>the week</b></h2>
    </div>

    <div className="explore1">
      <button className=" btn btn-lg" style={{backgroundColor:"rgba(0,198,215,255)", color:"white"}}>Explore &nbsp;   <i class="fa-solid fa-greater-than fa-sm"></i></button>
    </div>
    
    <div className="App-mycard">
     
   
      <Carousel  responsive={responsive}
       
        arrows={false}
        infinite={true}
      
        autoPlaySpeed={1000}
        
       

      

        renderButtonGroupOutside={true} 
        customButtonGroup={<CustomButtonGroup />}
        
        >
 

    
  <div className="all-div-card">
  <div className="main-c" >
        <div className="card1 bg-white">
        <div className="top">
          <img
            className="product-image"
            src="./drone.png"
            alt="img"
          />
        </div>
        <div className="">
          <div className="font1">
          <p class="text-justify">Holy Stone HS470 <br/>Foldable GPS RC Drone</p>
          </div> 

          <div className="pricing">
            
            <div className="price" style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="subprice">
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="btn11">
            <button  style={{color: "#3187ee", border:'none',height:"31px"}}>
             <b> Buy Now</b>
            </button>
            </div>
            <div className="btn22"> 
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
            </div>
           
            
          
          <div className="ava">
            <small ><b>Available (5)</b> </small>
            <small style={{marginLeft:"40px"}}>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            (15)
            </small>
            
            
            
            </div>
        </div>
      </div>
        </div>
  </div>


  <div className="all-div-card">
  <div className="main-c" >
        <div className="card1 bg-white">
        <div className="top">
          <img
            className="product-image"
            src="./marshal.png"
            alt="img"
          />
        </div>
        <div className="">
          <div className="font1">
          <p class="text-justify">Marshal Bluetooth <br/>SS60 Super Nova </p>
          </div> 

          <div className="pricing">
            
            <div className="price" style={{color: "#3187ee"}}><b>$250</b></div>
            <div className="subprice">
             <b>$</b><del><b>300</b></del>
            </div>
          </div>
          <div className="btn11">
            <button  style={{color: "#3187ee", border:'none',height:"31px"}}>
             <b> Buy Now</b>
            </button>
            </div>
            <div className="btn22"> 
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
            </div>
           
            
          
          <div className="ava">
            <small ><b>Available (5)</b> </small>
            <small style={{marginLeft:"40px"}}>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            (15)
            </small>
            
            
            
            </div>
        </div>
      </div>
        </div>
  </div>




  <div className="all-div-card">
  <div className="main-c" >
        <div className="card1 bg-white">
        <div className="top">
          <img
            className="product-image"
            src="./boots.jpg"
            alt="img"
          />
        </div>
        <div className="">
          <div className="font1">
          <p class="text-justify">Holy Stone HS470 <br/>Foldable GPS RC Drone</p>
          </div> 

          <div className="pricing">
            
            <div className="price" style={{color: "#3187ee"}}><b>$100</b></div>
            <div className="subprice">
             <b>$</b><del><b>200</b></del>
            </div>
          </div>
          <div className="btn11">
            <button  style={{color: "#3187ee", border:'none',height:"31px"}}>
             <b> Buy Now</b>
            </button>
            </div>
            <div className="btn22"> 
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
            </div>
           
            
          
          <div className="ava">
            <small ><b>Available (5)</b> </small>
            <small style={{marginLeft:"40px"}}>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            (15)
            </small>
            
            
            
            </div>
        </div>
      </div>
        </div>
  </div>



  <div className="all-div-card">
  <div className="main-c">
        <div className="card1 bg-white">
        <div className="top">
          <img
            className="product-image"
            src="./pc.jpg"
            alt="img"
          />
        </div>
        <div className="">
          <div className="font1">
          <p class="text-justify">Holy Stone HS470 <br/>Foldable GPS RC Drone</p>
          </div> 

          <div className="pricing">
            
            <div className="price" style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="subprice">
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="btn11">
            <button  style={{color: "#3187ee", border:'none',height:"31px"}}>
             <b> Buy Now</b>
            </button>
            </div>
            <div className="btn22"> 
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
            </div>
           
            
          
          <div className="ava">
            <small ><b>Available (5)</b> </small>
            <small style={{marginLeft:"40px"}}>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            (15)
            </small>
            
            
            
            </div>
        </div>
      </div>
        </div>
  </div>






  <div className="all-div-card">
  <div className="main-c">
        <div className="card1 bg-white">
        <div className="top">
          <img
            className="product-image"
            src="./drone.png"
            alt="img"
          />
        </div>
        <div className="">
          <div className="font1">
          <p class="text-justify">Holy Stone HS470 <br/>Foldable GPS RC Drone</p>
          </div> 

          <div className="pricing">
            
            <div className="price" style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="subprice">
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="btn11">
            <button  style={{color: "#3187ee", border:'none',height:"31px"}}>
             <b> Buy Now</b>
            </button>
            </div>
            <div className="btn22"> 
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
            </div>
           
            
          
          <div className="ava">
            <small ><b>Available (5)</b> </small>
            <small style={{marginLeft:"40px"}}>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            (15)
            </small>
            
            
            
            </div>
        </div>
      </div>
        </div>
  </div>




  <div className="all-div-card">
  <div className="main-c">
        <div className="card1 bg-white">
        <div className="top">
          <img
            className="product-image"
            src="./drone.png"
            alt="img"
          />
        </div>
        <div className="">
          <div className="font1">
          <p class="text-justify">Holy Stone HS470 <br/>Foldable GPS RC Drone</p>
          </div> 

          <div className="pricing">
            
            <div className="price" style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="subprice">
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="btn11">
            <button  style={{color: "#3187ee", border:'none',height:"31px"}}>
             <b> Buy Now</b>
            </button>
            </div>
            <div className="btn22"> 
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
            </div>
           
            
          
          <div className="ava">
            <small ><b>Available (5)</b> </small>
            <small style={{marginLeft:"40px"}}>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            <i class="fa-solid fa-star" style={{color: "#3187ee",fontSize:"11px"}}></i>
            (15)
            </small>
            
            
            
            </div>
        </div>
      </div>
        </div>
  </div>




  






 
</Carousel>
    </div>
    </div>
  )
  
}

export default Mycard