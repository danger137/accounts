
import Link from "next/link";
import "./Header.css";


export default function Header(){






return <div>
<div id="head" className="d-md-flex justify-content-center" >
<nav  className="navbar navbar-expand-lg navbar-light text-white">
  <div className="container-fluid d-flex flex-column flex-lg-row align-items-lg-start mt-2">
  <div className="navbar-brand d-flex align-items-center mb-2 mb-lg-0 ms-lg-5"> 
  {/* Maintain left alignment on large screens */}
  <div className="navbar-brand d-flex align-items-center mb-2 mb-lg-0 ms-lg-5"> 
  {/* Maintain left alignment on large screens */}
  <div className="navbar-brand d-flex align-items-center mb-2 mb-lg-0 ms-lg-5"> 
  {/* Maintain left alignment on large screens */}
  <div style={{ 
    color: '#ffffff', 
    fontFamily: 'sans-serif', 
    padding: '20px 20px',  // Reduced padding from 40px to 20px to decrease overall space
    display: 'flex', 
    alignItems: 'center' 
  }}>
    {/* NYB and CPA Container, now stacked vertically */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h1 style={{ 
        margin: 0, 
        fontSize: '3rem',  // Large font size for "NYB"
        fontWeight: '500', 
        letterSpacing: '0.1em' 
      }}>
        JCB
      </h1>
      <h3 className="ps-5 ms-3" style={{ 
        marginTop: '5px',  // Small margin to create space between NYB and CPA
        fontSize: '1.3rem',  // Adjusted size for CPA
        fontWeight: '300' ,
        color:"#b3b5b7",
      }}>
        CPA
      </h3>
    </div>
    <div style={{ 
      borderLeft: '2px solid #ffffff', 
      height: '80px', 
      margin: '0 10px'  // Reduced margin between the two sections from 20px to 10px
    }}></div>
    <div style={{ lineHeight: '1.2' }}>
      {/* Split TAX and ACCOUNTING into two lines */}
      <h2 style={{ 
         color:"#b3b5b7",
        margin: 0, 
        fontSize: '1.5rem', 
        fontWeight: '300' 
      }}>
        TAX &
      </h2>
      <h2 style={{ 
         color:"#b3b5b7",
        margin: 0, 
        fontSize: '1.5rem', 
        fontWeight: '300' 
      }}>
        ACCOUNTING
      </h2>
      <h3 style={{ 
        color:"#b3b5b7",
        margin: 0, 
        fontSize: '1.2rem', 
        fontWeight: '300r' 
      }}>
        SERVICES
      </h3>
    </div>
  </div>
</div>


</div>

</div>

    <div className="ms-auto d-flex align-items-center  ">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
      </button>
    </div>
    <div className="collapse navbar-collapse mt-3 pt-1 " id="navbarNavDropdown">
      <ul className="navbar-nav flex-column flex-lg-row align-items-start align-items-lg-center justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active text-white pt-3" aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white pt-3" href="/About" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
          <li><Link className="dropdown-item" href="/About">About</Link></li>
            <li><Link className="dropdown-item" href="/Meet">Meet The Staff </Link></li>
            <li><Link className="dropdown-item" href="/Value">Our Value</Link></li>
            <li><Link className="dropdown-item" href="/Employ">Employment Opportunities</Link></li>
            <li><Link className="dropdown-item" href="/Review">Client Reviews</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white pt-3" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
          <li><Link className="dropdown-item" href="/Services">Services</Link></li>
            
            <li><Link className="dropdown-item" href="/BookKeeping">Book keeping</Link></li>
            <li><Link className="dropdown-item" href="/TaxPractice">Tax practices</Link></li>
            <li><Link className="dropdown-item" href="/Internalcontrols">Internal controls</Link></li>
            <li><Link className="dropdown-item" href="/InternalAuditing">Internal Auditing</Link></li>
            <li><Link className="dropdown-item" href="/ExternalAudits">External Audits</Link></li>
            <li><Link className="dropdown-item" href="/FixedAssetsManagement">Fixed Assets Management</Link></li>
            <li><Link className="dropdown-item" href="/Secerterialpractices">Secerterial practices</Link></li>
            <li><Link className="dropdown-item" href="/Corporatesolutions">Corporate solutions</Link></li>
            <li><Link className="dropdown-item" href="/ManagementSolutions">Management Solutions</Link></li>
            <li><Link className="dropdown-item" href="/IRSS">IRS</Link></li>
            <li><Link className="dropdown-item" href="/Taxreturnsindibiduals,corporatereturns">Tax returns indibiduals, corporate returns</Link></li>
            <li><Link className="dropdown-item" href="/PayrollManagementsystems">Payroll Management systems</Link></li>
            <li><Link className="dropdown-item" href="/Feasibilityofnewprojects">Feasibility of new projects</Link></li>
            <li><Link className="dropdown-item" href="/Acuiquistionsandmergers">Acuiquistions and mergers</Link></li>
            <li><Link className="dropdown-item" href="/Investmentportfolio">Investment portfolio</Link></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white pt-3" href="#" id="newsletterDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Newsletter
          </a>
          <ul className="dropdown-menu" aria-labelledby="newsletterDropdown">
          <li><Link className="dropdown-item" href="/Newsletter">This Month Newsletter</Link></li>
          <li><Link className="dropdown-item" href="/Previous">Previous Newsletters</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white pt-3" href="#" id="newsletterDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul className="dropdown-menu" aria-labelledby="newsletterDropdown">
          <li><Link className="dropdown-item" href="/Resources">Resources</Link></li>
          <li><Link className="dropdown-item" href="/ClientPortal">Client Portal</Link></li>
            <li><Link className="dropdown-item" href="/SecureSend">SecureSend</Link></li>
          </ul>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link text-white pt-3" href="/BlogUS">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white pt-3" href="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>



























</div>




}
