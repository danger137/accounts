import Link from "next/link"
import "./Service.css";



export default function Services(){








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

