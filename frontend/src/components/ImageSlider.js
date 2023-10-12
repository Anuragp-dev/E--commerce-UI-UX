
import "./Css/ImageSlider.css";









const ImageSlider = () => {

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
}


  return (
    <div className="relative bg-slate-100">
      
      <div className="absolute">
        <div className="textwith"><h2 style={{fontSize:"30px"}}><b>Classified<br/>Products on <br/>the week</b></h2></div>
        <div className="arrow">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white" style={{fontSize:"30px"}}>
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white " style={{fontSize:"30px"}}>
          <FiChevronRight />
        </button>
        </div>
      </div>
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide ">
        
        <div className="main-c">
        <div className="card bg-white w-[278px] h-[354px] m-2 rounded-lg shadow-lg rounded-3xl">
        <div className="top">
          <img
            className="w-[283px] h-[215px] object-cover  p-2 rounded-3xl"
            src="./drone.png"
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 ">
          <div className="title font-semibold text-xs my-1">
          Holy Stone HS470 Foldable GPS RC Drone
          </div> 

          <div className="pricing flex items-center">
            
            <div className="price " style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="ml-2 text-xs " style={{color: "#3187ee"}}>
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="flex items-center my-2  ml-18px">
            <button className="border px-3 py-1 text-xs rounded-lg mr-1 " style={{color: "#3187ee"}}>
             <b> Buy Now</b>
            </button>
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
           
            
          </div>
          <div>
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


        <div className="main-c">
        <div className="card bg-white w-[278px] h-[354px] m-2 rounded-lg shadow-lg rounded-3xl">
        <div className="top">
          <img
            className="w-[283px] h-[215px] object-cover  p-2 rounded-3xl"
            src="./drone.png"
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">
          Holy Stone HS470 Foldable GPS RC Drone
          </div> 

          <div className="pricing flex items-center">
            
            <div className="price " style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="ml-2 text-xs " style={{color: "#3187ee"}}>
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="flex items-center my-2  ml-18px">
            <button className="border px-3 py-1 text-xs rounded-lg mr-1 " style={{color: "#3187ee"}}>
             <b> Buy Now</b>
            </button>
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
           
            
          </div>
          <div>
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



        <div className="main-c">
        <div className="card bg-white w-[278px] h-[354px] m-2 rounded-lg shadow-lg rounded-3xl">
        <div className="top">
          <img
            className="w-[283px] h-[215px] object-cover  p-2 rounded-3xl"
            src="./drone.png"
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">
          Holy Stone HS470 Foldable GPS RC Drone
          </div> 

          <div className="pricing flex items-center">
            
            <div className="price " style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="ml-2 text-xs " style={{color: "#3187ee"}}>
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="flex items-center my-2  ml-18px">
            <button className="border px-3 py-1 text-xs rounded-lg mr-1 " style={{color: "#3187ee"}}>
             <b> Buy Now</b>
            </button>
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
           
            
          </div>
          <div>
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






        <div className="main-c">
        <div className="card bg-white w-[278px] h-[354px] m-2 rounded-lg shadow-lg rounded-3xl">
        <div className="top">
          <img
            className="w-[283px] h-[215px] object-cover  p-2 rounded-3xl"
            src="./drone.png"
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">
          Holy Stone HS470 Foldable GPS RC Drone
          </div> 

          <div className="pricing flex items-center">
            
            <div className="price " style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="ml-2 text-xs " style={{color: "#3187ee"}}>
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="flex items-center my-2  ml-18px">
            <button className="border px-3 py-1 text-xs rounded-lg mr-1 " style={{color: "#3187ee"}}>
             <b> Buy Now</b>
            </button>
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
           
            
          </div>
          <div>
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




        <div className="main-c">
        <div className="card bg-white w-[278px] h-[354px] m-2 rounded-lg shadow-lg rounded-3xl">
        <div className="top">
          <img
            className="w-[283px] h-[215px] object-cover  p-2 rounded-3xl"
            src="./drone.png"
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">
          Holy Stone HS470 Foldable GPS RC Drone
          </div> 

          <div className="pricing flex items-center">
            
            <div className="price " style={{color: "#3187ee"}}><b>$300</b></div>
            <div className="ml-2 text-xs " style={{color: "#3187ee"}}>
             <b>$</b><del><b>400</b></del>
            </div>
          </div>
          <div className="flex items-center my-2  ml-18px">
            <button className="border px-3 py-1 text-xs rounded-lg mr-1 " style={{color: "#3187ee"}}>
             <b> Buy Now</b>
            </button>
            <button className="border px-3 py-1 text-xs rounded-lg" style={{color: "#3187ee"}}>
             <b> Add to Cart <i class="fa-solid fa-cart-plus"></i></b>
            </button>
           
            
          </div>
          <div>
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
    </div>
  );


  
}

export default ImageSlider

