
"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";


export default function Retirement(){


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
      <a href="/FinancialCalculators" className="btn btn-primary mt-2 ">Calculators &gt;  Retirement</a>
    </div>
  </div>

  {/* Content split into individual rows */}
  <div className="row">
    {/* First Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret01" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Will Retirement Impact My Living Expenses?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Your living expenses may increase or decrease at retirement but will likely not stay the same. You may travel more, reduce business expenses such as eating out and transportation costs, perhaps your house will be paid off.
      </p>
    </div>

    {/* Second Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret10" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Compare The Roth 401(k) To A Traditional 401(k)
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Your retirement income can vary widely depending on what type of account holds your savings and what assumptions you make about return and tax rates during the accumulation and withdrawal periods.
      </p>
    </div>

    {/* Third Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret02" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Much Will I Need To Save For Retirement?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 Retirement can be the saddest or happiest day of your life. This pre-retirement calculator will help you determine how well you have prepared and what you can do to improve your retirement outlook. It is important that you re-evaluate your preparedness on an ongoing basis.
      </p>
    </div>

    {/* Fourth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret03" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Are My Current Retirement Savings Sufficient?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  One method of retirement planning is to project what you are currently saving and have accumulated to date and see if you will have enough to meet your retirement objectives.
      </p>
    </div>

    {/* Fifth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret04" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Social Security Retirement Income Estimator
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 Depending upon your current earnings, Social Security can be a significant part of your retirement income. However, many factors will impact the benefit you may receive. Use this calculator to approximate your Social Security benefit.
      </p>
    </div>

    {/* Sixth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret05" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Does Inflation Impact My Retirement Income Needs?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 It may surprise you how the much inflation can erode purchasing power.
      </p>
    </div>

    {/* Seventh Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret06" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
I'm Retired, How Long Will My Savings Last?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Due to increasing life expectancies, many are running into the problem of outlasting their savings. Use this calculator to help determine when your retirement savings account may be depleted given a specified monthly income target.
      </p>
    </div>

    {/* Eighth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret07" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
When Should I Begin Saving For Retirement?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 A penny saved is a penny earned, but a penny saved today is a penny potentially earning more.
      </p>
    </div>

    {/* Ninth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret08" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Should I Convert Discretionary Expenses To Savings?
</a>
      <p v >
      It may surprise you how much you can accumulate for retirement simply by foregoing a few luxuries such as a one-time purchase of a boat or cabin, or trimming back recurring monthly expenses such as eating out, movies, magazine subscriptions, cable tv programming, video rentals, vending machines, etc.
      </p>
    </div>

    {/* Tenth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=ret09" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Much Retirement Income May My 401(k) Provide?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  It may surprise you how significant your retirement accumulation may become simply by saving a small percentage of your salary each month in your 401(k) plan.
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

