"use client"
import Link from "next/link";

import "./Contact.css";




export default function Contact(){

  
    
 




return <div>

    
<div class="background-image2">
    <div class="bottom-overlay">
    <div className="container">
    <div className="row text-center text-md-start">
        <div className="col mb-3 d-flex align-items-center">
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Contact</p>

        </div>

        <div className="col mb-3 d-flex align-items-center mt-3 gap-3">
         
        </div>

        <div className="col mb-3 d-flex align-items-center mt-3  gap-3">
         
        </div>

        {/* Fourth Item with Increased Top Margin */}
        <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
           
            <div>
                <ul className="list-unstyled pt-2 mb-0 text-center">
                    <li style={{ color: "white" }}>T: 703-953-6184</li>
                    <li style={{ color: "white" }}>
                        <a href="/Online" className="text-reset text-white">Ahashmi@live.com</a>
                    </li>
                    <li style={{ color: "white" }}>
                        <div className="d-flex justify-content-center gap-2">
                            <i className="fa-brands fa-facebook-f mt-2"></i>
                            <i className="fa-brands fa-linkedin-in mt-2"></i>
                            <i className="fa-brands fa-twitter mt-2"></i>
                            <i className="fa-solid fa-wifi mt-2"></i>
                            <i className="fa-solid fa-lock mt-2"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


    </div>
    
</div>

<div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-3 justify-content-center   ">
<div className="mt-3 text-center text-md-start me-md-5"> {/* Increased right margin for more gap */}
    <ul className="list-unstyled">


    
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
  
  <div className=" text-center text-md-start"  >


     {/* Center text on small screens and align left on medium and larger screens */}
  <ul className="list-unstyled mt-3">

  <div className="container">
  <div className="d-flex flex-column align-items-center align-items-lg-start">
    
    {/* First Paragraph */}
    <div className="d-flex justify-content-center justify-content-lg-start mt-4 pt-2" style={{ width: "100%" }}>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
       
If you have any unanswered questions, please let us know.
      </p>
    </div>

    {/* Second Paragraph */}
    <div className="d-flex justify-content-center justify-content-lg-start mt-3" style={{ width: "100%" }}>
    <div>
    <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "50vw"}}>
      JCB CPA PC
      </p>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
      Exchange place
      </p>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
      Jersey City, JC 07305
      </p>
      <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="h5 text-center text-lg-start hover-text-gold " 
  style={{ lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw" }}
>
  Ahashmi@live.com
</a>

      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
      Phone: 703-953-6184
      </p>
      
    </div>
    </div>

    {/* Third Paragraph */}
  

    {/* Portal and Link */}


    {/* Video */}
    <div className="mt-3 d-flex justify-content-center " style={{ width: "100%" }}>
    <div style={{ width: "100%", height: "400px" }}>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9858177128634!2d-74.0894674845923!3d40.68978197933306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b009e0525bb%3A0x558490629df78b4b!2s24%20Pinecrest%20Rd%2C%20Jersey%20City%2C%20NJ%2007305!5e0!3m2!1sen!2sus!4v1696114109705!5m2!1sen!2sus" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy"
  ></iframe>
</div>

    </div>
    <div 
  className="mt-5 d-flex justify-content-center" 
  style={{ width: "100%" }}
>
  <div 
    className="d-flex justify-content-center align-items-center mt-5 p-3" 
    style={{ 
      width: "fit-content", 
      height: "fit-content", 
      background: "#0078A5" 
    }}
  >
    <h5 className="h5 text-white text-center">
      Fill out the form below to e-mail us.
    </h5>
  </div>
</div>
<div 
  className="d-flex flex-column justify-content-center align-items-center mt-3"
  style={{ width: "100%" }}
>
  <div className="d-flex justify-content-between align-items-center gap-2 mt-3" style={{ width: "100%", maxWidth: "600px" }}>
    <h5 style={{ flex: "0 0 30%" }}>Name</h5>
    <input className="form-control" style={{ flex: "1" }} />
  </div>

  <div className="d-flex justify-content-between align-items-center gap-2 mt-3" style={{ width: "100%", maxWidth: "600px" }}>
    <h5 style={{ flex: "0 0 30%" }}>Email</h5>
    <input className="form-control" style={{ flex: "1" }} />
  </div>

  <div className="d-flex justify-content-between align-items-center gap-2 mt-3" style={{ width: "100%", maxWidth: "600px" }}>
    <h5 style={{ flex: "0 0 30%" }}>Phone Number</h5>
    <input className="form-control" style={{ flex: "1" }} />
  </div>

  <div className="d-flex justify-content-between align-items-center gap-2 mt-3" style={{ width: "100%", maxWidth: "600px" }}>
    <h5 style={{ flex: "0 0 30%" }}>Best Time To Call</h5>
    <input className="form-control" style={{ flex: "1" }} />
  </div>

  <div className="d-flex justify-content-between align-items-center gap-2 mt-3" style={{ width: "100%", maxWidth: "600px" }}>
    <h5 style={{ flex: "0 0 30%" }}>Comments</h5>
    <input className="form-control" style={{ flex: "1" }} />
  </div>

  <button 
    className="btn btn-primary mt-4 px-4 h5"
    style={{ lineHeight: "30px", fontWeight: "500" }} 
  >
    Send
  </button>
</div>





  </div>
</div>


  </ul>
</div>



</div>








</div>




}



