
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function IRS(){

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
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">IRS Tax Forms and Publications</p>

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

<div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-2 justify-content-center"> {/* Decreased gap here */}
<div className="mt-3 text-center text-md-start me-md-5"> {/* Increased right margin for more gap */}
    <ul className="list-unstyled">
  
    
      <li className="h5 mt-3 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
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

  <div className="text-md-start mt-md-0 mt-5"> {/* Added top margin for small screens */}
    <ul className="list-unstyled mt-3"> {/* Reduced margin on top of the second list */}
   <div className="mt-2 pt-3" >
   <div id="octoberContainer" >
   <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
        
   <div   className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "50px", marginBottom: "10px" }}>
    <div className="col d-flex flex-column flex-sm-row align-items-center">
        <div className="d-flex">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0", whiteSpace: "nowrap", fontSize: "1.2rem" }}>Find IRS Tax Forms</p>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", marginLeft: "5px", whiteSpace: "nowrap", fontSize: "1.2rem" }}> . Enter keywords here:</p>
        </div>

        {/* Input group that moves to the next line on small screens */}
        <div className="input-group ms-3 mt-2 mt-sm-0 d-md-flex  justify-content-center ">
            <input 
                type="text" 
                className="form-control form-control-sm"  
                id="taxFormSearch" 
                placeholder="Enter keywords here" 
                aria-label="Tax form search"
                style={{ padding: "0.25rem 0.5rem", fontSize: "0.8rem", width: "150px" }} // Adjust size here
            />
            <a href="https://www.irs.gov/site-index-search?field_pup_historical_1=1&field_pup_historical=1&search=&Go.x=5&Go.y=9" className="btn btn-primary btn-sm" type="button" style={{ padding: "0.25rem 0.5rem", fontSize: "0.8rem" }}>Go</a> {/* Adjust padding and font size */}
        </div>
    </div>

    {/* View or Print section */}
    <div className="col d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
    <div className="d-flex justify-content-center justify-content-md-start">
        <p className="h5" style={{ fontWeight: "300", marginBottom: "0", whiteSpace: "nowrap", fontSize: "1.2rem" }}>
            View or Print
        </p>
        <Link href={""} className="h5" style={{ fontWeight: "300", marginBottom: "0", marginLeft: "5px", whiteSpace: "nowrap", fontSize: "1.2rem" }}>
            State Tax Forms here.
        </Link>
    </div>
</div>


</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "15px", marginBottom: "5px" }}>
    <div className="col d-flex flex-column flex-sm-row align-items-center">
        <div className="d-flex">
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", marginLeft: "3px", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
                The publications listed below are located on the IRS Web site and require 
                Adobe Acrobat Reader to view. Visit the 
                <a className="mx-1" href="https://www.adobe.com/" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
                    Adobe Web Site 
                </a> 
                to install the latest version of Acrobat Reader. Click a publication to view it online.
            </p>
        </div>
    </div>
</div>

<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-center" style={{ padding: "0 5px" }}>
            <Link href={"https://apps.irs.gov/app/vita/glossary.jsp"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
                Tax Glossary  
            </Link>
        </div>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
            <p className="h5  " style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
                Tax Glossary  
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/f1065sk1.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
                Schedule K-1 (Form 1065) 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
                Schedule K-1 (Form 1065) 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/f1120ssk.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Schedule K-1 (Form 1120)  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Schedule K-1 (Form 1120)  
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/f1041sk1.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Schedule K-1 (Form 1041)  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Schedule K-1 (Form 1041)  
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p1.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 1  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Your Rights As a Taxpayer
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p3.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 3  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
Armed Forces' Tax Guide 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p15.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 15 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
Circular E, Employer's Tax Guide
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p15a.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 15A  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
Employer's Supplemental Tax Guide
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p15b.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 15B
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Employer's Tax Guide to Fringe Benefits 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p17.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 17  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Your Federal Income Tax  
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p51.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 51  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
Circular A, Agricultural Employer's Tax Guide 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p54.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 54
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
Tax Guide for U.S. Citizens and Resident Aliens Abroad 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p80.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 80 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Circular SS - Federal Tax Guide for Employers in the U.S. Virgin Islands, Guam, American Samoa, and the Commonwealth of the Northern Mariana Islands
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p225.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 225 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
Farmer's Tax Guide
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p334.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 334 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Tax Guide for Small Business 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p463.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 463  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
Travel, Entertainment, Gift, and Car Expenses  
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p501.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 501 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
Exemptions, Standard Deduction, and Filing Information 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p502.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 502
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
             	
Medical and Dental Expenses
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p503.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 503 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Child and Dependent Care Expenses
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p504.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 504  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
Divorced or Separated Individuals
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p505.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 505 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
              	
            Tax Withholding and Estimated Tax
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p509.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 509  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
Tax Calendars 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p510.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 510  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Excise Taxes (Including Fuel Tax Credits and Refunds)
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p514.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 514
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
             	
Foreign Tax Credit for Individuals
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p515.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 515 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
             	
Withholding of Tax on Nonresident Aliens and Foreign Corporations
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p516.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 516  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            U.S. Government Civilian Employees Stationed Abroad
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p517.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 517  	
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           
            Social Security and Other Information for Members of the Clergy & Religious Workers
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p519.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 519  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            U.S. Tax Guide for Aliens
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p523.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 523   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
Selling Your Home 
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p524.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 524  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            	
            Credit for the Elderly or the Disabled
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p525.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 525  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
          	
            Taxable and Nontaxable Income
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p526.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 526   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         	
            Charitable Contributions
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p527.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 527  	 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           
            Residential Rental Property (Including Rental of Vacation Homes)
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p529.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 529    
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            Miscellaneous Deductions
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p530.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 530   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Tax Information for First-Time Homeowners
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p531.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 531    
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Reporting Tip Income
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/forms-pubs/guide-to-business-expense-resources"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 535   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Business Expenses
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p536.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 536 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
             	
            Net Operating Losses
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p537.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 537  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         	
            Installment Sales
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p538.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 538  	
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         
            Accounting Periods and Methods
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p541.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 541  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            Partnerships
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p542.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 542  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Corporations
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p544.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 544 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Sales and other Dispositions of Assets
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p547.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 547
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            	
Casualties, Disasters, and Thefts
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p550.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 550  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
           	
            Investment Income and Expenses (Including Capital Gains and Losses and Mutual fund Distributions)
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p554.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 554 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
Tax Guide for Seniors
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p555.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
       
            Publication 555   	
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         
        	
            Community Property
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p556.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 556  	
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          
            Examination of Returns, Appeal Rights, and Claims for Refund
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p557.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 557    
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Tax-Exempt Status for Your Organization
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p559.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 559  	 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          
            Survivors, Executors and Administrators
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p560.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 560    
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         	
            Retirement Plans for Small Business
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p570.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 570  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            	
            Tax Guide for Individuals With Income from U.S. Possessions
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p571.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 571  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         	
            Tax-Sheltered Annuity Programs for Employees of Public Schools and Certain Tax-Exempt Organizations
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p575.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 575  	
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           
            Pension and Annuity Income
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p583.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 583    
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Starting a Business and Keeping Records
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p587.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 587 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            Business Use of Your Home (Including Use by Day-Care Providers)
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p590a.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 590-A   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Contributions to Individual Retirement Arrangements (IRAs)
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p590b.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 590-B  	 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
        
            Distributions to Individual Retirement Arrangements (IRAs)
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p595.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 595  	   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         
            Capital Construction Fund for Commercial Fishermen
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p596.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 596  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Earned Income Credit
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p598.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 598   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Tax on Unrelated Business Income of Exempt Organizations
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p721.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 721 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            Tax Guide to U.S. Civil Service Retirement Benefits
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p901.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 901 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            U.S. Tax Treaties
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p907.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 907  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Tax Highlights for Persons With Disabilities
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/f911.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Form 911  	 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
       
            Request for Taxpayer Advocate Service Assistance
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p915.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 915  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Social Security and Equivalent Railroad Retirement Benefits
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p925.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 925   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Passive Activity and At-Risk Rules
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p926.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 926  	   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
        
            Household Employers Tax Guide
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p936.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 936  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Home Mortgage Interest Deduction
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p939.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 939 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
             	
            General Rule for Pensions and Annuities
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p946.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 946    
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            How to Depreciate Property
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p957.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 957  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Reporting Back Pay and Special Wage Payments to the Social Security Administration
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/f8839.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Form 8839  	
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         
            Qualified Adoption Expenses
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p969.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 969  	  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
         
            Health Savings Accounts and Other Tax-Favored Health Plans
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p970.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 970 
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           	
            Tax Benefits for Education
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p1212.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 1212  	   
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           
            Guide to Original Issue Discount (OID) Instruments
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p1345.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 1345  	
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           
            Handbook for Authorized IRS e-file Providers of Individual Income Tax Returns
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p1544.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 1544  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            Reporting Cash Payments of Over $10,000
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p1771.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 1771  	
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
           
            Charitable Contributions - Substantiation and Disclosure Requirements
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p1828.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 1828  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            	
            Tax Guide for Churches and Religious Organizations
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p3079.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 3079  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Tax-Exempt Organizations and Gaming
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p3402.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 3402  	  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          
            Taxation of Limited Liability Companies
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p4221pc.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 4221-PC    
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
             	
            Compliance Guide For 501(c)(3) Public Charities
            </p>
        </div>
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p4221nc.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 4221-NC    
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Compliance Guide for Tax Exempt Organizations (other than 501(c)(3) Public Charities and Private Foundations)
            </p>
        </div>
    </div>
</div>
<div className="container mb-5 " style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-start" style={{ margin: "0 -5px" }}>
        <div className="col-3 d-flex align-items-start" style={{ padding: "0 5px" }}>
            <Link href={"https://www.irs.gov/pub/irs-pdf/p4557.pdf"} className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
            Publication 4557  
            </Link>
        </div>
        <div className="col d-flex align-items-start" style={{ padding: "0 5px" }}>
            <p className="h5" style={{ fontWeight: "300", marginBottom: "0", fontSize: "1.2rem", whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "98%" }}>
          	
            Safeguarding Taxpayer Data - A Guide for Your Business
            </p>
        </div>
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

