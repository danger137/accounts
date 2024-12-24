"use client";
import "./twx.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Tax(){

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
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Tax Due Dates</p>

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

  <div className="text-md-start mt-md-0 mt-5"> {/* Added top margin for small screens */}
    <ul className="list-unstyled mt-3"> {/* Reduced margin on top of the second list */}
   <div className="mt-2 pt-3" >
   <div id="octoberContainer" className="container mt-5"> {/* Reduced margin */}
        <div style={{ background: "rgb(0, 0, 128)", color: "white" }} className="p-1">
          <h5 className="h5">October 2024</h5>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 10</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Individuals</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Report September tip income of $20 or more to employers (Form 4070).</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Individuals</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - File a 2023 income tax return (Form 1040 or Form 1040-SR) if an automatic six-month extension was filed (or if an automatic four-month extension was filed by a taxpayer living outside the United States and Puerto Rico). Pay any tax, interest and penalties due.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Individuals</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Make contributions for 2023 to certain existing retirement plans or establish and contribute to a SEP for 2023 if an automatic six-month extension was filed.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Individuals</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> File a 2023 gift tax return (Form 709) and pay any tax, interest and penalties due if an automatic six-month extension was filed.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Calendar-year bankruptcy estates</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}>  - File a 2023 income tax return (Form 1041) if an automatic six-month extension was filed. Pay any tax, interest and penalties due.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>	Calendar-year C corporations</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - File a 2023 income tax return (Form 1120) if an automatic six-month extension was filed. Pay any tax, interest and penalties due.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>	Calendar-year C corporations</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Make contributions for 2023 to certain employer-sponsored retirement plans if an automatic six-month extension was filed.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Employers</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}>  - Deposit Social Security, Medicare and withheld income taxes for September if the monthly deposit rule applies.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Employers</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Deposit nonpayroll withheld income tax for September if the monthly deposit rule applies.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>October 31</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Employers</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}>  - Report Social Security and Medicare taxes and income tax withholding for third quarter 2024 (Form 941) and pay any tax due if all of the associated taxes due weren’t deposited on time and in full.</p>
          </div>
        </div>
      </div>
   <div id="octoberContainer" className="container mt-5"> {/* Reduced margin */}
        <div style={{ background: "rgb(0, 0, 128)", color: "white" }} className="p-1">
          <h5 className="h5">November 2024</h5>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>November 12</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Individuals</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Report October tip income of $20 or more to employers (Form 4070).</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>November 12</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Employers</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}>- Report Social Security and Medicare taxes and income tax withholding for third quarter 2024 (Form 941) if all of the associated taxes due were deposited on time and in full.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>November 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Employers</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Deposit Social Security, Medicare and withheld income taxes for October if the monthly deposit rule applies.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>November 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>	Employers</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Deposit nonpayroll withheld income tax for October if the monthly deposit rule applies.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>November 15</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Calendar-year exempt organizations</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}>  - File a 2023 information return (Form 990, Form 990-EZ or Form 990-PF) if a six-month extension was filed. Pay any tax, interest and penalties due.</p>
          </div>
        </div>
       
      </div>
   <div id="octoberContainer" className="container mt-5 mb-5 "> {/* Reduced margin */}
        <div style={{ background: "rgb(0, 0, 128)", color: "white" }} className="p-1">
          <h5 className="h5"> December 2024</h5>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>December 10</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Individuals</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}>- Report November tip income of $20 or more to employers (Form 4070).</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>December 16</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Calendar-year corporations </p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}>- Pay the fourth installment of 2024 estimated income taxes, completing Form 1120-W for the corporation’s records.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>December 16</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>Employers</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Deposit Social Security, Medicare and withheld income taxes for November if the monthly deposit rule applies.</p>
          </div>
        </div>
        <div className="row align-items-start mt-5 d-flex"> {/* Changed to d-flex and align-items-start */}
          <div className="col-auto">
            <p className="h5" style={{ fontWeight: "500", marginBottom: "0" }}>December 16</p> {/* Removed bottom margin */}
          </div>
          <div className="col">
            <p className="h5" style={{ fontWeight: "500", display: "inline", marginBottom: "0" }}>	Employers</p>
            <p className="h5" style={{ fontWeight: "300", display: "inline" }}> - Deposit nonpayroll withheld income tax for November if the monthly deposit rule applies.</p>
          </div>
        </div>
     
       
      </div>
   </div>
    </ul>
  </div>
</div>



</div>



}

