"use client";
import Link from "next/link"
import "./Service.css";

import { useRouter } from "next/navigation";
export default function Services(){


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
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Services</p>
    
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
      
      <div id="octoberContainer" className="mt-5 pt-3 ">
  <ul className="list-unstyled row row-cols-2 g-3">
    <li className="col">
      <Link className="dropdown-item" href="/BookKeeping" style={{ cursor: 'pointer' }}>Book keeping</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/TaxPractice" style={{ cursor: 'pointer' }}>Tax practices</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/Internalcontrols" style={{ cursor: 'pointer' }}>Internal controls</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/InternalAuditing" style={{ cursor: 'pointer' }}>Internal Auditing</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/ExternalAudits" style={{ cursor: 'pointer' }}>External Audits</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/FixedAssetsManagement" style={{ cursor: 'pointer' }}>Fixed Assets Management</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/Secerterialpractices" style={{ cursor: 'pointer' }}>Secerterial practices</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/Corporatesolutions" style={{ cursor: 'pointer' }}>Corporate solutions</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/ManagementSolutions" style={{ cursor: 'pointer' }}>Management Solutions</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/IRSS" style={{ cursor: 'pointer' }}>IRS</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/Taxreturnsindibiduals,corporatereturns" style={{ cursor: 'pointer' }}>
        Tax returns individuals, corporate returns
      </Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/PayrollManagementsystems" style={{ cursor: 'pointer' }}>Payroll Management systems</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/Feasibilityofnewprojects" style={{ cursor: 'pointer' }}>Feasibility of new projects</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/Acuiquistionsandmergers" style={{ cursor: 'pointer' }}>Acquisitions and mergers</Link>
    </li>
    <li className="col">
      <Link className="dropdown-item" href="/Investmentportfolio" style={{ cursor: 'pointer' }}>Investment portfolio</Link>
    </li>
  </ul>
</div>


    
    
    
    </div>


    
</div>



}

