"use client";
import Link from "next/link"
import "./Home.css"
import { useRouter } from "next/navigation"
import { useEffect } from "react";


export default function Home(){


    useEffect(()=>{

        document.title = "Home";
     
     },[])


let move = useRouter();


const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };






return <div>


<div class="background-image">
    <div class="center-text">
        <p id="tex">The Sky's The Limit</p>
    </div>
    <div class="bottom-overlay">
    <div className="container">
    <div className="row text-center text-md-start">
        <div className="col mb-3 d-flex align-items-center">
            <h6 className="h5">Our Firm</h6>
        </div>

        <div className="col mb-3 d-flex align-items-center mt-3 gap-3">
            <i className="fa-solid fa-chart-pie"></i>
            <div>
                <ul className="list-unstyled pt-2 mb-0">
                    <li style={{ color: "white" }}>
                        <a href="/BookKeeping" className="text-reset text-white">Book Keeping</a>
                    </li>
                    <li style={{ color: "white" }}>
                        <a href="/TaxPractice" className="text-reset text-white">Tax Practice</a>
                    </li>
                    <li style={{ color: "white" }}>
                        <a href="/Internalcontrols" className="text-reset text-white">Internal Controls</a>
                    </li>
                  
                </ul>
            </div>
        </div>

        <div className="col mb-3 d-flex align-items-center mt-3  gap-3">
            <i className="fa-solid fa-location-dot"></i>
            <div>
                <ul className="list-unstyled pt-2 mb-0">
                    <li style={{ color: "white" }}>Exchange place</li>
                    <li style={{ color: "white" }}>Jersey City,JC</li>
                    <li style={{ color: "white" }}>07305</li>
                </ul>
            </div>
        </div>

        {/* Fourth Item with Increased Top Margin */}
        <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
            <i className="fa-solid fa-message"></i>
            <div>
                <ul className="list-unstyled pt-2 mb-0 text-center">
                    <li style={{ color: "white" }}>T: +1 (571) 682-9050</li>
                    <li style={{ color: "white" }}>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" className="text-reset text-white">Ahashmi@live.com</a>


                    </li>
                    <li style={{ color: "white" }}>
                    <div className="d-flex justify-content-center gap-2">
                        
                        <i style={{cursor:"pointer"}} onClick={openFacebook} className="fa-brands fa-facebook-f mt-2"></i>
                    
                      
                                            
                        <a href="https://wa.me/15716829050" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-whatsapp mt-2" style={{ color: 'white' }}></i>
</a>

                  
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" rel="noopener noreferrer">
<i class="fa-solid fa-envelope mt-2 " style={{ color: 'white',cursor:"pointer" }} ></i>
</a>
<Link href="/login3"  rel="noopener noreferrer">
<i style={{ color: 'white',cursor:"pointer" }}  class="fa-solid fa-lock mt-2 "></i>
</Link>


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
<div style={{ background: "#0078a5", padding: "20px" }} className="d-flex flex-column flex-md-row gap-5 justify-content-center text-white">
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

