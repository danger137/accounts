
"use client";
import Link from "next/link"
import "./financial.css";

export default function FinancialCalculators(){


  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };





return <div>



<div class="background-image2">
        <div class="bottom-overlay">
        <div className="container">
        <div className="row text-center text-md-start">
            <div className="col mb-3 d-flex align-items-center">
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Calculators</p>
    
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
    
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start mt-4" style={{ width: "100%" }}>
        <div >
    </div>
    
    </div>
    <div style={{ padding: '20px' }}>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}} >
      Please try our wide variety of interactive financial problem solvers. Simply enter your criteria and you'll get your questions answered with dynamic graphs and personalized reports.
      </p>     
      </div>
      <div className="container text-center my-4">
      <div className="row">
      <div className="col-12 col-sm-4 mb-3">
  <img
    src="https://www.nybcpa.com/images/galleries/header/square/Money/money07_isp.jpg"
    alt="Cash Flow"
    className="img-fluid border rounded p-2 "
  />
  <Link href="/Cashflow" className="d-block mt-2 text-primary">
    Cash Flow
  </Link>
</div>


        <div className="col-12 col-sm-4 mb-3">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/College/gradcap2.jpg"
            alt="College"
            className="img-fluid border p-2 rounded"
          />
            <Link href="/College" className="d-block mt-2 text-primary">
            College
  </Link>
         
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/CreditCards/credit_card01_isp.jpg"
            alt="Credit"
            className="img-fluid border p-2 rounded"
          />
                      <Link href="/Credit" className="d-block mt-2 text-primary">
                      Credit
  </Link>
          
         
        </div>
      </div>
    </div>
    <div className="container text-center my-4">
      <div className="row">
        <div className="col-12 col-sm-4 mb-3  ">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/Mortgage/money06_isp.jpg"
            alt="Cash Flow"
            className="img-fluid border p-2 rounded"
          />
            <Link href="/HomeandMortgage" className="d-block mt-2 text-primary">
            Home and Mortgage
  </Link>
         
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/Forms/writing15_isp.jpg"
            alt="College"
            className="img-fluid border p-2 rounded"
          />
            <a href="/Insurance" className="d-block mt-2 text-primary">
            Insurance
  </a>
          
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/Investment/stocks01_isp.jpg"
            alt="Credit"
            className="img-fluid border p-2 rounded"
          />
            <a href="/Investment" className="d-block mt-2 text-primary">
            Investment
  </a>
         
        </div>
      </div>
    </div>
    <div className="container text-center my-4">
      <div className="row">
        <div className="col-12 col-sm-4 mb-3  ">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/Taxes/pen_calc01_isp.jpg"
            alt="Cash Flow"
            className="img-fluid border p-2 rounded"
          />
                     <a href="/PaycheckandBenefits" className="d-block mt-2 text-primary">
                     Paycheck and Benefits
  </a>
          
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/PersonalFinance/figures02_isp.jpg"
            alt="Credit"
            className="img-fluid border p-2 rounded"
          />
                     <a href="/QualifiedPlans" className="d-block mt-2 text-primary">
                     Qualified Plans
  </a>
         
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/Retirement/couple_on_shore02_isp.jpg"
            alt="College"
            className="img-fluid border p-2 rounded"
          />
                     <a href="/Retirement" className="d-block mt-2 text-primary">
                     Retirement
  </a>
         
        </div>
      
      </div>
    </div>
    <div className="container text-center my-4">
      <div className="row">
        <div className="col-12 col-sm-4 mb-3  ">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/Bank/bank01_isp.png"
            alt="Cash Flow"
            className="img-fluid border p-2 rounded"
          />
                               <a href="/Saving" className="d-block mt-2 text-primary">
                               Saving
  </a>
         
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/Taxes/taxforms24_isp.jpg"
            alt="College"
            className="img-fluid border p-2 rounded"
          />
                               <a href="/Taxation" className="d-block mt-2 text-primary">
                               Taxation
  </a>
          
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/CarLoan/cars02_isp.jpg"
            alt="Credit"
            className="img-fluid border p-2 rounded"
          />
                               <a href="/Auto" className="d-block mt-2 text-primary">
                               Auto
  </a>
         
        </div>
      </div>
    </div>
    <div className="container text-center my-4">
      <div className="row">
        <div className="col-12 col-sm-4 mb-3  ">
          <img
            src="https://www.nybcpa.com/images/galleries/header/square/People/conference2.png"
            alt="Cash Flow"
            className="img-fluid border p-2 rounded"
          />
                                     <a href="/Business" className="d-block mt-2 text-primary">
                                     Business
  </a>
         
        </div>
   
      </div>
    </div>
     
      </div>
    </div>
    
    
      </ul>
    </div>
    
    
    
    </div>


    
</div>



}

