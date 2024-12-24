
"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";



export default function QualifiedPlans(){
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
      <a href="/FinancialCalculators" className="btn btn-primary mt-2 ">Calculators &gt; Qualified Plans</a>
    </div>
  </div>

  {/* Content split into individual rows */}
  <div className="row">
    {/* First Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua01" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Evaluate My Company Pension Payout Options
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  When you reach retirement, and if your company provides a pension program, you will be offered a number of payout options. Typically, they will be the Single Life and the Joint Survivor payout options.
      </p>
    </div>

    {/* Second Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua10" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Is The Impact Of Borrowing From My 401(k) Plan?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Some qualified retirement plans include the option for qualifying participants to a take a loan against their retirement account balance. Many people borrow from their retirement plan to pay off high-interest debt or to make a major purchase.
      </p>
    </div>

    {/* Third Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua11" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Is The Impact Of Early Withdrawal From My 401(k)?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Many people feel the need to withdraw funds from their 401(k) plan due to hardship or other emergency.
      </p>
    </div>

    {/* Fourth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua12" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Self-Employed Retirement Plan Maximum Contribution Calculator
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
   Compensation for a self-employed individual (sole proprietor or partner) is that person's earned income. The starting point to determine the individual's earned income is the net profit amount from the Schedule C (or Schedule K-1 for a partnership).
      </p>
    </div>

    {/* Fifth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua13" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Net Unrealized Appreciation (NUA) Versus IRA Rollover
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Consideration of NUA strategy is important if you are distributing highly appreciated employer securities from your prior employer's qualified plan, such as 401(k). Cost basis, the value of the employer contribution on your behalf is subject to ordinary income tax upon distribution.
      </p>
    </div>

    {/* Sixth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua14" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Are My Stretch IRA Distributions?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 By naming a beneficiary on your IRA account it will provide the beneficiary the opportunity to "stretch" out the IRA proceeds over his/her life expectancy. This gives the beneficiary more time to take advantage of tax-deferral status of the IRA assets.
      </p>
    </div>

    {/* Seventh Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua02" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Much Can I Contribute To An IRA?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
  Many factors can affect your eligibility and contribution limits to either the Traditional IRA or Roth IRA - tax filing status, your current earned income level and whether or not you participate in a retirement plan at work.
      </p>
    </div>

    {/* Eighth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua03" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Much Retirement Income May My IRA Provide?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 Your retirement income can vary widely depending on what type of IRA holds your savings and what assumptions you make about return and tax rates during the accumulation and withdrawal periods.
      </p>
    </div>

    {/* Ninth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua04" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
Should I Convert To A Roth IRA?
</a>
      <p v >
      Roth IRA is a great way for clients to create tax-free income from their retirement assets. Yet, keep in mind that when you convert your taxable retirement assets into a Roth IRA you will generally pay ordinary income tax on the taxable amount that is converted.
      </p>
    </div>

    {/* Tenth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua05" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Will My Qualified Plan(s) Be Worth At Retirement?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
   It may surprise you how significant your retirement accumulation may be simply by contributing regularly to a qualified plan.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua06" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Is My Current Year Required Minimum Distribution?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 Current tax law specifies that once you reach a certain age, you must begin taking RMDs annually from your IRAs and other retirement plans. Generally, the RMD amount is determined based on your prior year's IRA balance of all of your IRA assets divided by your life expectancy
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua07" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Is My Projected Required Minimum Distribution?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 Current tax law specifies that once you reach a certain age, you must begin making taxable withdrawals from your Traditional IRAs and many other retirement plans. These minimum distributions are calculated annually based on your age, account balance at the end of the previous year, marital status and spouse's age.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua08" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
What Are My Lump Sum Distribution Options?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
 You've spent a long time accumulating funds in your retirement account. When you retire and take distribution of your funds you have many options to consider.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=qua09" 
  className="h4 text-center text-lg-start" 
  style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}
>
How Do I Maximize My Employer 401(k) Match?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
Many employees are not taking full advantage of their employer's matching contributions. Use this calculator to figure out how.
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

