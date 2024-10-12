"use client";

import Link from "next/link";
import "./policy.css";

import { useRouter } from "next/navigation";

export default function Policy(){


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
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Privacy Policy</p>
    
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
    
    <div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-3 justify-content-center   ">
    <div className="mt-3 text-center text-md-start me-md-4"> {/* Increased right margin for more gap */}
        <ul className="list-unstyled">
          <li className="h5 mt-5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
            Quick Links:
          </li>
    
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            Financial Calculators
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            Send Us A File
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            Track Your Refund
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            IRS Tax Forms
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            State Tax Forms
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            Tax Due Dates
          </li>
        </ul>
      </div>
      
      <div className=" text-center text-md-start"  >
    
    
         {/* Center text on small screens and align left on medium and larger screens */}
      <ul className="list-unstyled mt-3">
    
      <div className="container">
      <div className="d-flex flex-column align-items-center align-items-lg-start">
    
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start mt-5" style={{ width: "100%" }}>
        <div >
    </div>
    
    </div>
    
        <div className="d-flex justify-content-center justify-content-lg-start mt-2 " style={{ width: "100%" }}>
          <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
      
Here is our Privacy Policy required by the Gramm-Leach-Bliley Act of 1999.
          </p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-3 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        We collect nonpublic personal information about you from the following sources:
</p>

        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
       <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Information we receive from you on applications, tax organizers, worksheets and other documents;</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Information about your transactions with us, our affiliates, or others;</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Information we receive from a consumer-reporting agency.</li>
       </ul>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        We do not disclose any nonpublic personal information about our clients or former clients to anyone, except as permitted by law.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        We restrict access to nonpublic personal information about you to those members of our firm who need to know that information to provide services to you. We maintain physical, electronic, and procedural safeguards that comply with federal regulations to guard your nonpublic personal information.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
  Online information is stored on secure servers located in 
  <Link href="https://cgs.com.pk/" target="_blank" rel="noopener noreferrer">AHN CORPORATES GENERAL SOLUTIONS</Link> 
  SOC 1 certified datacenters.
</p>

        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4  mb-5 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        If you have any questions about this policy, please do not hesitate to contact us.
</p>
        </div>
       
  
  
       
    
      </div>
    </div>
    
    
      </ul>
    </div>
    
    
    
    </div>







</div>




}



