"use client";
import Link from "next/link"
import SubscriptionForm from "../checkoutForm/chechout";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from "next/navigation";
export default function InternalAuditing(){

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
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Internal Auditing</p>
    
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
      <h1 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Internal Auditing</h1>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Internal auditing is an independent, objective assurance and consulting activity designed to add value and improve an organization's operations. It helps an organization accomplish its objectives by bringing a systematic, disciplined approach to evaluate and improve the effectiveness of risk management, control, and governance processes.
      </p>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Key Objectives of Internal Auditing</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black",  fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Evaluate Internal Controls</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Risk Management Assessment</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Ensure Regulatory Compliance</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Improve Organizational Efficiency</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Fraud Prevention and Detection</li>
      </ul>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Components of Internal Auditing</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Risk Assessment</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Audit Planning</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Fieldwork</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Reporting</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Follow-Up</li>
      </ul>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>1. Risk Assessment</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Internal auditing begins with a risk assessment to identify areas within an organization that pose significant risks. This process helps auditors focus on areas that are most likely to impact the organization’s objectives.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>2. Audit Planning</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        During audit planning, auditors develop a comprehensive audit plan, outlining the scope, objectives, and methodologies to be used in the audit. This plan guides the audit process to ensure all key areas are reviewed.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>3. Fieldwork</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Fieldwork involves the collection and analysis of data through interviews, observation, and testing of records and controls. Auditors examine how well internal controls are functioning and whether policies are being followed.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>4. Reporting</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        After completing fieldwork, auditors prepare a report that summarizes the findings, identifies issues, and makes recommendations for improvement. The report is shared with management and relevant stakeholders.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>5. Follow-Up</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Follow-up is a crucial step in the auditing process. Auditors verify that management has taken appropriate actions to address any issues or recommendations outlined in the audit report.
      </p>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Types of Internal Audits</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Operational Audits</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Compliance Audits</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Financial Audits</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >IT Audits</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Environmental Audits</li>
      </ul>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Operational Audits</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Focuses on the efficiency and effectiveness of an organization’s operations and processes.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Compliance Audits</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Ensures that the organization is following laws, regulations, and internal policies.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Financial Audits</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Reviews the accuracy of financial reporting and ensures that financial statements are free from material misstatements.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>IT Audits</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Evaluates the organization's information technology infrastructure, including data security, cybersecurity controls, and IT processes.
      </p>

      <h3 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Environmental Audits</h3>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Assesses the impact of an organization’s operations on the environment and ensures compliance with environmental laws and regulations.
      </p>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Benefits of Internal Auditing</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Improved Risk Management</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Enhanced Compliance</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Increased Operational Efficiency</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Improved Financial Accuracy</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Fraud Detection and Prevention</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px",color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Objective and Independent Insights</li>
      </ul>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Challenges of Internal Auditing</h2>
      <ul>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Maintaining Independence</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Resource Constraints</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Resistance from Employees</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", color:"black", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >Staying Updated with Regulations</li>
      </ul>

      <h2 className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>Conclusion</h2>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
        Internal auditing plays a critical role in ensuring the effective governance, risk management, and internal control processes within an organization. By providing independent and objective evaluations, internal auditors help organizations improve operations, ensure compliance, and mitigate risks.
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

