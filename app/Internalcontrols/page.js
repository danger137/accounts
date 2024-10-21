"use client";
import Link from "next/link"
import SubscriptionForm from "../checkoutForm/chechout";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from "next/navigation";

export default function Internalcontrols(){

  let move = useRouter();
  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };

  const stripePromise = loadStripe("pk_test_51PycwuP0ebickvSnk2QWol9dU5s4BDsNkiUYF5KjoUnNgjcazHmbLTVz1T97SFNm14rRhFRgyeOL37J3yddbj66X00di2vs6Gq");



return <div>



<div class="background-image2">
        <div class="bottom-overlay">
        <div className="container">
        <div className="row text-center text-md-start">
            <div className="col mb-3 d-flex align-items-center">
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Internal Controls</p>
    
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
      
      <div id="octoberContainer" className=" text-center text-md-start"  >
    
    
         {/* Center text on small screens and align left on medium and larger screens */}
      <ul className="list-unstyled mt-3">
    
      <div className="container">
      <div className="d-flex flex-column align-items-center align-items-lg-start">
    
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start mt-5" style={{ width: "100%" }}>
        <div >
    </div>
    
    </div>
    <div style={{ padding: '20px' }}>
      <h1 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Internal Controls</h1>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Internal Controls are the policies, procedures, and processes that organizations implement to ensure 
        the accuracy and integrity of their financial reporting, operational efficiency, and compliance with 
        laws and regulations.
      </p>
      
      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Key Objectives of Internal Controls</h2>
      <ul>
        <li className="h5 text-center text-lg-start " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", color:"black",  maxWidth: "53vw"}}>Accuracy of Financial Reporting</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", color:"black", maxWidth: "53vw"}}>Compliance with Laws and Regulations</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", color:"black", maxWidth: "53vw"}}>Operational Efficiency</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", color:"black", maxWidth: "53vw"}}>Fraud Prevention</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", color:"black", maxWidth: "53vw"}}>Safeguarding Assets</li>
      </ul>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Components of Internal Controls (COSO Framework)</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Control Environment</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Risk Assessment</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Control Activities</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Information and Communication</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Monitoring Activities</li>
      </ul>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>1. Control Environment</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        The control environment sets the tone of an organization, influencing the control consciousness of 
        its people. It includes the integrity, ethical values, and the environment in which the company operates.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>2. Risk Assessment</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Risk assessment involves identifying, analyzing, and managing the risks that could prevent the organization 
        from achieving its objectives.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>3. Control Activities</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Control activities are the policies and procedures that ensure management directives are carried out. 
        They include approvals, authorizations, and verifications.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>4. Information and Communication</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Effective communication ensures that all personnel understand their role in the internal control system. 
        It also involves the accurate flow of information across the organization.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>5. Monitoring Activities</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Monitoring ensures that internal controls are functioning as intended. It includes regular reviews and 
        internal audits.
      </p>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Types of Internal Controls</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Preventive Controls</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Detective Controls</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Corrective Controls</li>
      </ul>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Benefits of Internal Controls</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Improved Financial Reporting</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Reduced Fraud Risk</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Enhanced Compliance</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Operational Efficiency</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Asset Protection</li>
      </ul>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Challenges of Implementing Internal Controls</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Cost</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Complexity</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Resistance to Change</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>Over-Reliance on Controls</li>
      </ul>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Conclusion</h2>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Internal controls are essential for the effective functioning of any organization. They ensure the accuracy 
        of financial reporting, compliance with laws, and safeguard against fraud. Despite challenges, implementing 
        internal controls provides long-term benefits in terms of security, efficiency, and organizational success.
      </p>
    </div>  
    <div className="d-flex justify-content-center justify-content-lg-start mt-4" style={{ width: "100%" }}>
        <p className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        If you want to buy this service Click below the button
</p>

        </div>
    
      </div>

      
      <div className="d-flex justify-content-center mt-5 mb-5">
      <Link href={"/Contact"} className="form-button" style={{ textDecoration: 'none', borderBottom: 'none' }}>
  Subscribe Now
</Link>

</div>
    </div>
    
    
      </ul>
    </div>
    
    
    
    </div>


    
</div>



}

