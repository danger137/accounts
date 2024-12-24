"use client";
'./Disclaimer.css';
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Disclaimer(){

  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };
  let move = useRouter();

return <div>


<div class="background-image2">
        <div class="bottom-overlay">
        <div className="container">
        <div className="row text-center text-md-start">
            <div className="col mb-3 d-flex align-items-center">
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Disclaimer</p>
    
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
    
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
          <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
          No Rendering of Advice
          </p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-1 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        The information contained within this website is provided for informational purposes only and is not intended to substitute for obtaining accounting, tax, or financial advice from a professional accountant.
</p>

        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-5 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Presentation of the information via the Internet is not intended to create, and receipt does not constitute, an accountant-client relationship. Internet subscribers, users and online readers are advised not to act upon this information without seeking the service of a professional accountant.
</p>

        </div>
       
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Any U.S. federal tax advice contained in this website is not intended to be used for the purpose of avoiding penalties under U.S. federal tax law.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        Accuracy of Information
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-1 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        While we use reasonable efforts to furnish accurate and up-to-date information, we do not warrant that any information contained in or made available through this website is accurate, complete, reliable, current or error-free.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
  We assume no liability or responsibility for any errors or omissions in the content of this website or such other materials or communications. If you wish to contact the webmaster of this website, please call 
  <a className="text-center text-lg-start mx-2 "  href="703-953-6184">AHN CORPORATES GENERAL SOLUTIONS</a> at 703-953-6184.
</p>


        </div>
       
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        Disclaimer of Warranties and Limitations of Liability
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-1 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        This website is provided on an "as is" and "as available" basis. Use of this website is at your own risk. We and our suppliers disclaim all warranties. Neither we nor our suppliers shall be liable for any damages of any kind with the use of this website.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-5 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        Links to Third Party Websites
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-1 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        For your convenience, this website may contain hyperlinks to websites and servers maintained by third parties. We do not control, evaluate, endorse or guarantee content found in those sites. We do not assume any responsibility or liability for the actions, products, services and content of these sites or the parties that operate them. Your use of such sites is entirely at your own risk.
</p>
        </div>
  
  
       
    
      </div>
    </div>
    
    
      </ul>
    </div>
    
    
    
    </div>








    
</div>







}


