"use client";
import Link from "next/link"
import "./State.css";
import { useRouter } from "next/navigation";
export default function State(){



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
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">State Tax Forms</p>

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
    <ul className="list-unstyled mt-4"> {/* Reduced margin on top of the second list */}
   <div className="mt-2 pt-3" >
   <div id="octoberContainer" >
   <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
        


<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.revenue.alabama.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
  Alabama Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://tax.alaska.gov/programs/forms.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Alaska Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://azdor.gov/forms"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Arizona Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.ftb.ca.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Arkansas Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.ftb.ca.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    California Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://tax.colorado.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Colorado Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://drs.ct.gov/eservices/_/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Connecticut Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://revenue.delaware.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Delaware Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://floridarevenue.com/Pages/forms_index.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Florida Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://dor.georgia.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Georgia Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://tax.hawaii.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Hawaii Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://tax.idaho.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Idaho Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://tax.illinois.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Illinois Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.in.gov/dor/3489.htm"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Indiana Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://revenue.iowa.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Indiana Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.ksrevenue.org/forms.html"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Kansas Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://revenue.ky.gov/Pages/index.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Kentucky Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://revenue.louisiana.gov/forms"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Louisiana Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.maine.gov/revenue/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Maine State Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://taxes.marylandtaxes.com/Individual_Taxes/General_Information/Individual_Tax_Forms_and_Instructions/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Maryland Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.mass.gov/dor/forms/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Massachusetts Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.michigan.gov/treasury"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Michigan Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.revenue.state.mn.us/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Minnesota Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.dor.ms.gov/Pages/default.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Mississippi Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://dor.mo.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Missouri Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.revenue.state.ne.us/tax/current/current.html"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Montana Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://tax.nv.gov/Forms/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Nebraska Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.revenue.nh.gov/resource-center/current-year-forms-and-instructions"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Nevada Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.tax.newmexico.gov/forms-publications/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    New Hampshire Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.tax.ny.gov/forms/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    New Jersey Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.ncdor.gov/taxes-forms/download-tax-forms-and-instructions"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    New Mexico Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.nd.gov/tax/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    New York State Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.tax.ohio.gov/Forms.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    North Carolina Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.ok.gov/tax"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    North Dakota Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.oregon.gov/dor/forms/pages/default.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Ohio Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.revenue.pa.gov/LookingFor/TaxForms-Info/Pages/default.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Oklahoma Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://tax.ri.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Oregon Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.sctax.org/tax/index"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Pennsylvania Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://dor.sd.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Rhode Island Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://www.sctax.org/tax/index"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    South Carolina Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://dor.sd.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    South Dakota Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.tn.gov/revenue/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Tennessee Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://comptroller.texas.gov/taxes/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Texas Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://tax.utah.gov/forms/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Utah Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://tax.vermont.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Vermont State Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.tax.virginia.gov/forms"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Virginia Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://otr.cfo.dc.gov/page/tax-forms-and-publications"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Washington DC Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://dor.wa.gov/"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Washington Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"http://tax.wv.gov/Pages/default.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    West Virginia Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container" style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://www.revenue.wi.gov/Pages/Home.aspx"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Wisconsin Tax Forms
</Link>

     
    </ul>
        </div>
      
    </div>
</div>
<div className="container mb-5 " style={{ borderBottom: "1px solid #cccccc", paddingBottom: "13px", marginBottom: "10px" }}>
    <div className="row align-items-center" style={{ margin: "0 -5px" }}>
        <div className="col d-flex align-items-center" style={{ padding: "0 5px" }}>
        <ul className="list-unstyled">
   
    <Link href={"https://revenue.wyo.gov/home"} className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
    Wyoming Tax Forms
</Link>

     
    </ul>
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

