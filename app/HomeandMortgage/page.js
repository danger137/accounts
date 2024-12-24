"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";


export default function HomeandMortgage(){



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
      <a href="/FinancialCalculators" className="btn btn-primary mt-2 ">Calculators &gt; Home and Mortgage</a>
    </div>
  </div>

  {/* Content split into individual rows */}
  <div className="row">
    {/* First Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom01" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Much Home Can I Afford?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
       When you're buying a home, mortgage lenders don't look just at your income, assets, and the down payment you have. They look at all of your liabilities and obligations as well, including auto loans, credit card debt, child support, potential property taxes and insurance, and your overall credit rating.
      </p>
    </div>

    {/* Second Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom10" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Which Is Better: Fixed Or Adjustable-Rate Mortgage?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      It is a difficult decision to decide between a fixed and an adjustable-rate mortgage. Factors such as loan duration, the index used by the lender, the number and timing of rate adjustments, and your assumption about the increase/decrease of future interest rates all have an impact.
      </p>
    </div>

    {/* Third Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom11" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Adjustable Rate Mortgage Calculator
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     Unlike fixed rate mortgages, the payments on an adjustable rate mortgage will vary as interest rates change.
      </p>
    </div>

    {/* Fourth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom12" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Do Closing Costs Impact The Interest Rate?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
       If you choose to finance your closing costs, the monthly loan payments will be higher than if you had paid the closing costs out-of-pocket. In order to help borrowers compare loans, lenders use a standard calculation called annual percentage rates (APR) which takes into account the closing costs.
      </p>
    </div>

    {/* Fifth Item */}
 

    {/* Sixth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom13" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Compare An Interest-Only Versus Traditional Mortgage
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      An interest-only mortgage may be enticing due to lower initial payments than a traditional mortgage. However, when the interest-only loan begins to amortize after 5, 10 or 20 years then your monthly payments will be higher.
      </p>
    </div>

    {/* Seventh Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom14" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Much Can I Borrow From My Home Equity (HELOC)?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     Depending upon the market value of your home, outstanding mortgage balance, credit history and other factors, you may qualify for a home equity line of credit. Monthly payments on a HELOC are variable as they fluctuate with interest rate changes.
      </p>
    </div>

    {/* Eighth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom02" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Restructuring Debts For Accelerated Payoff
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      Over the last couple of years with interest rates at a 40-year low, many people refinanced their mortgages. Even though rates have crept up over the last couple of months, refinancing may make sense for you.
      </p>
    </div>

    {/* Ninth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom03" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Comprehensive Mortgage Calculator
</a>

      <p v >
      The loan amount, the interest rate, and the term of the mortgage can have a dramatic effect on the total amount you will eventually pay for the property. Further, mortgage payments typically will include monthly allocations of property taxes, hazard insurance, and (if applicable) private mortgage insurance (PMI).
      </p>
    </div>

    {/* Tenth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom04" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Comparing Mortgage Terms (i.e. 15, 20, 30 Year)
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     Different mortgage terms and rates can make the loan selection process confusing, especially if you don't plan on keeping the loan for the full term.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom05" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Should I Pay Discount Points For A Lower Interest Rate?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     In some cases, it may benefit you to 'buy down the interest rate' by paying extra money up front in the form of discount points.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom06" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Should I Rent Or Buy A Home?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
       With interest rates near 40-year lows, the decision to rent versus buy becomes difficult.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom07" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Should I Convert To A Bi-Weekly Payment Schedule?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      It may surprise you that most banks and mortgage companies collect two to three dollars for every dollar that you borrow! However, there is a way to accelerate mortgage payoff using a method called Bi-Weekly Mortgage Payments.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom08" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Compare A 'No-Cost' Versus Traditional Mortgage
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      Many lenders will offer a 'no-cost' loan in lieu of a traditional mortgage. 'No-cost' loans are generally priced at a higher interest rate than a traditional mortgage. The higher rate allows the lender to make enough money on the interest rate spread from the underwriter to pay for all your closing costs and provide them with their profit.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=hom09" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Are The Tax Savings Generated By My Mortgage?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     With the interest on a mortgage being deductible when you itemize deductions, it may surprise you how much you can save in taxes.
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

