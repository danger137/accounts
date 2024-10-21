"use client";
import Link from "next/link";
import "./About.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function About(){




  let move = useRouter();

  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };


return <div>





<div class="background-image2">
    <div class="bottom-overlay">
    <div className="container">
    <div className="row text-center text-md-start">
        <div className="col mb-3 d-flex align-items-center">
            <p style={{fontWeight:"100"}} className="h1 ms-5 ps-5 ">About</p>
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

<div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-1 justify-content-center  ">
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
    <li className="h5" style={{ color: "black", fontWeight: "400", lineHeight: "31px" }}>
      We'd like to provide you with an opportunity to get to know our staff as well as our <br /> firm's values before you come to see us. The following pages should give you an <br /> idea of what we're all about. We hope you enjoy them!
    </li>
    <li className="mt-5 h5">
      <Link href={"/Meet"} className="h5 hover-text-gold" style={{ color: "#0078A5", cursor: "pointer" }}>
        Meet the Staff
      </Link>
    </li>
    <li className="mt-5 h5" style={{ color: "#0078A5" }}>
      <Link href={"/Value"} className="h5 hover-text-gold" style={{ color: "#0078A5", cursor: "pointer" }}>
        Our Values
      </Link>
    </li>
    <li className="h5" style={{ color: "black", fontWeight: "400", lineHeight: "31px" }}>
      Our firm provides outstanding service to our clients because of our dedication to the <br /> three underlying principles.
    </li>
    <li className="mt-3 h5" style={{ color: "#0078A5" }}>
      <Link href={"/Value"} className="h5 hover-text-gold" style={{ color: "#0078A5", cursor: "pointer" }}>
        Employment Opportunities
      </Link>
    </li>
    <li className="h5" style={{ color: "black", fontWeight: "400", lineHeight: "31px" }}>
      Check this page from time to time for specific employment opportunities.
    </li>
    <li className="mt-4 pt-2 h5" style={{ color: "#0078A5" }}>
      <Link href={"/Review"} className="h5 hover-text-gold" style={{ color: "#0078A5", cursor: "pointer" }}>
        Client Reviews
      </Link>
    </li>
    <li className="h5" style={{ color: "black", fontWeight: "400", lineHeight: "31px" }}>
      We strive to provide the best possible service for our clients. Please leave a review to <br /> let us know how we are doing and to share your experience with others.
    </li>
  </ul>
</div>

</div>

<div style={{ padding: "20px" }} className="d-flex flex-column flex-md-row gap-5 justify-content-center text-white">
    <div className="mt-5 text-center text-md-start me-md-5"> {/* Increased right margin for more gap */}
        <h5 className="h3 pt-5 ">New York, NY CPA, <br></br> NYB CPA PC</h5>
    </div>
    <div className="mt-5"> {/* This can stay as is */}
        <ul className="list-unstyled">
            <li className="h5" >We are a full-service Accounting firm licensed in NY. We offer a broad range of <br /> services for business owners, executives, and independent professionals. We are <br /> affordable, experienced, and friendly.</li>
            <li className="mt-3 h5 ">We provide outstanding service to our clients because of our dedication to <br /> professionalism, responsiveness, and quality.</li>
            <li className="mt-3 h5 ">Please call us today - we'll be happy to offer you a free initial consultation. Thanks <br /> for visiting!</li>
        </ul>
        <ul className="list-unstyled pt-2 mb-0">
            <li>
                <a  href="/Online" className=" h6 text-reset text-white">Learn more about our CPA firm in New York, NY...</a>
            </li>
        </ul>
    </div>
</div>


</div>




}

