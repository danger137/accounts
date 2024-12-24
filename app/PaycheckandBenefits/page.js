"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";


export default function PaycheckandBenefits(){

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
    
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start mt-1" style={{ width: "100%" }}>
        <div >
    </div>
    
    </div>
    <div className="container my-5">
  {/* Introductory Text */}
  <div className="row mb-4">
    <div className="col">
      <h2 className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >Please try our wide variety of interactive financial problem solvers</h2>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
        Simply enter your criteria and you'll get your questions answered with dynamic graphs and personalized reports.
      </p>
      <a href="/FinancialCalculators" className="btn btn-primary mt-2 ">Calculators &gt; Paycheck and Benefits</a>
    </div>
  </div>

  {/* Content split into individual rows */}
  <div className="row">
    {/* First Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay01" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Much Will My Company Bonus Net After Taxes?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
    A bonus from your employer is always a good, however, you may want to estimate what you will actually take-home after federal withholding taxes, social security taxes and other deductions are taken out.
      </p>
    </div>

    {/* Second Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay10" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Is The Impact Of Increasing My 457 Plan Contribution?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
   It may surprise you how significant your retirement accumulation may be simply by increasing the percent of your salary that you save each month in your 457 Plan.
      </p>
    </div>

    {/* Third Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay11" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What May My 403(b) Plan Be Worth?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
   It may surprise you how significant your retirement accumulation may become simply by saving a small percentage of your salary each month in your 403(b) Plan.
      </p>
    </div>

    {/* Fourth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay12" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Is The Impact Of Increasing My 403(b) Contribution?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
    It may surprise you how significant your retirement accumulation may be simply by increasing the percent of your salary that you save each month in your 403(b).
      </p>
    </div>

    {/* Fifth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://nybcpa.com/calcloader.php?calc=pay02" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Will Payroll Adjustments Affect My Take-Home Pay?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
   Many factors can affect your eligibility and contribution limits to either the Traditional IRA or Roth IRA - tax filing status, your current earned income level and whether or not you participate in a retirement plan at work.
      </p>
    </div>

    {/* Sixth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay03" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Convert My Salary To An Equivalent Hourly Wage
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Use this calculator to determine what your hourly wage equates to when given your annual salary - it may surprise you what you make on an hourly basis.
      </p>
    </div>

    {/* Seventh Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay04" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Convert My Hourly Wage To An Equivalent Annual Salary
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Use this calculator to determine your equivalent annual salary when given what you get paid per hour - it may surprise you what you make on a yearly basis.
      </p>
    </div>

    {/* Eighth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay05" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Is The Future Value Of My Employee Stock Options?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Your company-issued employee stock options may not be 'in-the-money' today but assuming an investment growth rate may be worth some money in the future.
      </p>
    </div>

    {/* Ninth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay06" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Should I Exercise My 'In-The-Money' Stock Options?
</a>
      <p v >
      When your employee stock options become 'in-the-money', where the current price is greater than the strike price, you can choose from one of three basic sell strategies.
      </p>
    </div>

    {/* Tenth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay07" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What May My 401(k) Be Worth?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
   It may surprise you how significant your retirement accumulation may become simply by saving a small percentage of your salary each month in your 401(k) plan.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay08" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Is The Impact Of Increasing My 401(k) Contribution?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  It may surprise you how significant your retirement accumulation may be simply by increasing the percent of your salary that you save each month in your 401(k).
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=pay09" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What May My 457 Plan Be Worth?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 It may surprise you how significant your retirement accumulation may become simply by saving a small percentage of your salary each month in your 457 Plan. Use this calculator to estimate how much your plan may accumulate for retirement.
      </p>
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

