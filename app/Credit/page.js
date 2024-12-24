"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Credit(){

  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };


  let move = useRouter();



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
      <a href="/FinancialCalculators" className="btn btn-primary mt-2 ">Calculators &gt; Credit</a>
    </div>
  </div>

  {/* Content split into individual rows */}
  <div className="row">
    {/* First Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det01" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Long Will It Take To Pay Off My Credit Card?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
       Americans today owe more money than ever before. The fact that 'interest never sleeps' means that the situation will continue to worsen unless steps are taken at the individual level to reduce or eliminate debt.
      </p>
    </div>

    {/* Second Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det10" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Should I Pay Off Debt Or Invest?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
    When you receive some extra money it may be difficult to determine whether you should invest the funds or use them to pay towards liabilities. Financial theory recommends that if your after-tax return on investments is greater than your after-tax cost of debt then you should invest.
      </p>
    </div>

    {/* Third Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det11" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Should I Transfer My Credit Card Balances?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
    You might realize significant monthly interest savings by transferring your higher rate credit card balances to a lower rate credit card.
      </p>
    </div>

    {/* Fourth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.calcxml.com/calculators/credit-score-calculator?skn=481" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Credit Score Estimator
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      Although credit scores are calculated differently by the various credit bureaus, you can get an estimate of what your score may be by using this calculator. The three main things that help you have a good credit score are first, having a long history of making all debt payments on time, second using the proper mix of credit, and third not maxing out on available credit.
      </p>
    </div>

    {/* Fifth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det02" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Long Until My Loan Is Paid Off?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     By making consistent regular payments toward debt service you will eventually pay off your loan.
      </p>
    </div>

    {/* Sixth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det03" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Would My Loan Payments Be?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     What Would My Loan Payments Be?
      </p>
    </div>

    {/* Seventh Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det04" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Do I Have Too Much Debt?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      How much debt is too much?
      </p>
    </div>

    {/* Eighth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det05" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Is The Balance On My Loan?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     If you know your current payment, the interest rate and the term remaining, you can calculate your outstanding loan balance.
      </p>
    </div>

    {/* Ninth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det06" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Should I Consolidate My Personal Debt Into A New Loan?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }}  >
      With interest rates at historical lows, it may make sense to consolidate some of your credit card and other personal debt into a new consolidated loan, typically a home-equity loan. Consolidation loans can significantly reduce your required monthly payment because they are generally amortized over 10 or 15 years.
      </p>
    </div>

    {/* Tenth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det07" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Restructuring Debts For Accelerated Payoff
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     Over the last couple of years with interest rates at a 40-year low, many people refinanced their mortgages. Use this calculator to find out if refinancing makes sense for you.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det08" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Which Is Better: Cash Up Front Or Payments Over Time?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     Use this calculator to help determine whether you are better off receiving a lump sum payment and investing it yourself or receiving equal payments over time from a third party.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=det09" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Is The Impact Of Making Extra Payments On My Debt?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
       Over the course of a loan amortization you will spend hundreds, thousands, and maybe even hundreds of thousands in interest. By making a small additional monthly payment toward principal, you can greatly accelerate the term of the loan and, thereby, realize tremendous savings in interest payments.
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

