"use client";

import axios from "axios";
import "./Review.css";
import Link from "next/link";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useRef } from "react";

export default function Review(){

  
  let move = useRouter();
  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };

    const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  // Function to handle hover and dynamically change star colors
  const handleMouseEnter = (index) => {
    setHoveredStars(index);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  // Function to handle star selection and log review to console
  const handleStarClick = (index) => {
    setSelectedStars(index);
    console.log(`Review submitted with ${index} stars!`);
  };


let {register} = useForm();

// const signup = (meraUser)=>{


//   meraUser.stras = selectedStars;

// axios.post("/api/Review",meraUser).then((resp)=>{

//   if(resp.data){
//     toast.success("Thans for  your review ")
//   }

// })

// }
const scriptURL = 'https://script.google.com/macros/s/AKfycbxkq7QhqnOAXzov6KBzQEZT0-5f9hKUvO_0lc5vFQlH4JrUU1AX-ohffFObQwW0tjcTSQ/exec';
const formRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  
  const form = formRef.current;
  form.stars = selectedStars;
  console.log(form);
  

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => toast.success("Thanks for your reviews"))
    .then(() => window.location.reload())
    .catch((error) => console.error('Error!', error.message));
};


return <div>




<div class="background-image2">
    <div class="bottom-overlay">
    <div className="container">
    <div className="row text-center text-md-start">
        <div className="col mb-3 d-flex align-items-center">
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Client Reviews</p>

        </div>

        <div className="col mb-3 d-flex align-items-center mt-3 gap-3">
         
        </div>

        <div className="col mb-3 d-flex align-items-center mt-3  gap-3">
         
        </div>

        {/* Fourth Item with Increased Top Margin */}
        <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
           
        <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
            <i className="fa-solid fa-message"></i>
            <div>
                <ul className="list-unstyled pt-2 mb-0 text-center">
                    <li style={{ color: "white" }}>T: 703-953-6184</li>
                    <li style={{ color: "white" }}>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" className="text-reset text-white">Ahashmi@live.com</a>


                    </li>
                    <li style={{ color: "white" }}>
                    <div className="d-flex justify-content-center gap-2">
                        
                        <i style={{cursor:"pointer"}} onClick={openFacebook} className="fa-brands fa-facebook-f mt-2"></i>
                    
                      
                                            
                        <a href="https://wa.me/17039536184" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-whatsapp mt-2 " style={{ color: 'white' }}></i>
</a>

                  
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" rel="noopener noreferrer">
<i class="fa-solid fa-envelope mt-2 " style={{ color: 'white',cursor:"pointer" }} ></i>
</a>

                                              <i className="fa-solid fa-wifi mt-2"></i>
               
                                          </div>
                  
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</div>


    </div>
    
</div>
<form ref={formRef} name="product" onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}> 
<div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-1 justify-content-center   ">
<div className="mt-3 text-center text-md-start me-md-5"> {/* Increased right margin for more gap */}
    <ul className="list-unstyled">
      <li className="h5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        IN THIS SECTION:
      </li>

      <li  className="text-lg-end"  >
      <Link href={"/Meet"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
        Meet the Staff
</Link>
      </li>

      <li  className="text-lg-end mt-1 "  >
      <Link href={"/Value"} className="h5 text-center text-lg-end hover-text-gold  " style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Our Values
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/Employ"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Employment Opportunities
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/Review"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Client Reviews
</Link>
      </li>


    
      <li className="h5 mt-5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        Quick Links:
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/FinancialCalculators"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Financial Calculators
</Link>
      </li>

      <li  className="text-lg-end mt-1 "  >
      <Link href={"/SecureSend"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Send Us A File
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/IRS"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      IRS Tax Forms
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/State"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      State Tax Forms
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/TaxDueDate"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Tax Due Dates
</Link>
      </li>
   
    </ul>
  </div>
  <div className="mt-3 text-center text-md-start"> {/* Center text on small screens and align left on medium and larger screens */}
  <ul className="list-unstyled">
 <div>
  <p className="h5" style={{fontWeight:"300",lineHeight:"30px"}} >
  
  We strive to provide the best possible service for our clients. Please leave a review to <br></br> let us know how we are doing and to share your experience with others.
  </p>
  <p className="h3 mt-5 pt-5 " style={{fontWeight:"400",lineHeight:"30px",color:"#0078A5"}} >
  Write Your Review

  </p>
  <div className="d-md-flex mt-5 pt-5">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <i
          key={index}
          style={{ 
            cursor:"pointer",
            fontSize: "xx-large", 
            color: (hoveredStars >= star || selectedStars >= star) ? "#f39c12" : "gray" 
          }}
          className="fa-solid fa-star"
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleStarClick(star)}
        ></i>
      ))}
    </div>
  <p className="h5 mt-3" style={{fontWeight:"300",lineHeight:"30px"}} >
  Click on a star to change your rating 1 - 5, where 5 = great! and 1 = room for <br></br> improvement
  </p>
  <div className="d-md-flex flex-column flex-md-row" style={{ gap: "20px" }}>
 
  <div className="d-flex align-items-end" style={{ gap: "10px" }}>
    <p className="h5 mb-0" style={{ fontWeight: "300" }}>Your Review:</p>
    <textarea
      placeholder="Your Review" 
       name="Review"
      {...register("review",{required:true})}
      style={{ height: "220px", padding: "10px", verticalAlign: "top", resize: "none" }} 
    />
  </div>

  <p className="h5 mb-0" style={{ fontWeight: "300", lineHeight: "30px" }}>999 Characters remaining</p>
</div>



  <p className="h3 mt-5  " style={{fontWeight:"400",lineHeight:"30px",color:"#0078A5"}} >
  YOUR INFO:
  </p>
 <div>
    <div className="d-md-flex mt-4 gap-2 " >
    <p className="h5  " style={{fontWeight:"300",lineHeight:"30px"}} >
    First Name:
  </p>
  <input 
  name="name"
  placeholder="First Name" 
  {...register("name",{required:true})}
  style={{ textAlign: "left", width: "100%", maxWidth: "200px",borderRadius: "5px", border: "1px solid #ccc" }} 
/>



    </div>
    <div className="d-md-flex mt-2 gap-2 " >
    <p className="h5  " style={{fontWeight:"300",lineHeight:"30px"}} >
    City:
  </p>

  <input
  name="city" 
  {...register("city",{required:true})}
  placeholder="City" 
  style={{ textAlign: "left", width: "100%", maxWidth: "200px",borderRadius: "5px", border: "1px solid #ccc" }} 
/>


    </div>
    <div className="d-md-flex mt-2 gap-2 " >
    <p className="h5  " style={{fontWeight:"300",lineHeight:"30px"}} >
    Email:
  </p>
  <input 
  {...register("email",{required:true})}
  placeholder="Email" 
  name="Email"
  style={{ textAlign: "left", width: "100%", maxWidth: "200px",borderRadius: "5px", border: "1px solid #ccc" }} 
/>


    </div>
    <div>
        <img src="https://www.nybcpa.com/securimage/securimage_show.php" ></img>
    </div>
<div>
<input 
    className="mt-3"
  placeholder="Type the text" 
  style={{ textAlign: "left", width: "100%", maxWidth: "200px",borderRadius: "5px", border: "1px solid #ccc" }} 
/>
</div>
<div className="mt-3 gap-2 d-md-flex "  >
<button type="submit" >Submit My Review</button>
<p className="h5" style={{fontWeight:"100"}} >By clicking Submit, I authorize the sharing of my name and</p>
</div>

<div>
<p className="h5" style={{fontWeight:"100"}} >review on the web. (email will not be shared)</p>
</div>
 </div>
 <p className="h3 mt-4 " style={{fontWeight:"400",lineHeight:"30px",color:"#0078A5"}} >
 Read what others have to say:
  </p>
  
  <div className="container text-center">
  <div className="mt-4 d-flex justify-content-center flex-wrap" style={{ gap: '5px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="rgb(243, 156, 18)"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.208-6.0 5.865 1.416 8.265L12 18.897l-7.416 3.885L6 15.363 0 9.5l8.332-1.208z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="rgb(243, 156, 18)"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.208-6.0 5.865 1.416 8.265L12 18.897l-7.416 3.885L6 15.363 0 9.5l8.332-1.208z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="rgb(243, 156, 18)"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.208-6.0 5.865 1.416 8.265L12 18.897l-7.416 3.885L6 15.363 0 9.5l8.332-1.208z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="rgb(243, 156, 18)"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.208-6.0 5.865 1.416 8.265L12 18.897l-7.416 3.885L6 15.363 0 9.5l8.332-1.208z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="rgb(243, 156, 18)"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.208-6.0 5.865 1.416 8.265L12 18.897l-7.416 3.885L6 15.363 0 9.5l8.332-1.208z" />
    </svg>
  </div>
  <div className="mt-3">
    <p className="h5" style={{ fontWeight: "300" }}>Great service and assistance</p>
  </div>
  <div className="mt-3 p-3" style={{ background: "black" }}>
    <p className="h5 text-white" style={{ fontWeight: "300" }}>- Alexey, New York</p>
  </div>
</div>

 </div>
  </ul>
</div>

</div>

</form>

</div>




}


