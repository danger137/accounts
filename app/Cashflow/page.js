"use client";
import Link from "next/link"

import { useRouter } from "next/navigation";

export default function Cashflow(){


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
      <a href="/FinancialCalculators" className="btn btn-primary mt-2 ">Calculators &gt; Cash Flow</a>
    </div>
  </div>

  {/* Content split into individual rows */}
  <div className="row">
    {/* First Item */}
    <div className="col-12 mb-4">
    <a
  href="https://www.nybcpa.com/calcloader.php?calc=bud01" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Does Inflation Impact My Standard Of Living?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
        Use this calculator to determine the impact inflation may have on your standard of living.
      </p>
    </div>

    {/* Second Item */}
    <div className="col-12 mb-4">
    <a
  href="https://www.nybcpa.com/calcloader.php?calc=bud10" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Is My Projected Cash Flow?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      A projected cash flow statement can help you evaluate your personal income and expenses and see if you potentially may run 'in the red or the black' at a future date.
      </p>
    </div>

    {/* Third Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud11" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Is The Value Of Reducing, Postponing Or Foregoing Expenses?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      Use this calculator to help determine what you could accumulate by reducing or eliminating discretionary monthly expenses.
      </p>
    </div>

    {/* Fourth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud12"  
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Historical Inflation - Compare Purchasing Power
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
       If your income does not keep pace with increasing consumer prices then your standard of living can be reduced.
      </p>
    </div>

    {/* Fifth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud02" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Much Am I Spending?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      Where does all the money go? An itemization of your living expenses may help you budget better and plan for future expenses.
      </p>
    </div>

    {/* Sixth Item */}
    <div className="col-12 mb-4">
    <a 
  href="/https://www.nybcpa.com/calcloader.php?calc=bud03" 

  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
How Much Do I Need For Emergencies?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      It is prudent planning to have at least three to six months of liquid/cash assets set aside in the event of a loss of job, medical emergency, short-term disability, etc.
      </p>
    </div>

    {/* Seventh Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud03" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Much Do I Need For Emergencies?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      When you receive some extra money it may be difficult to determine whether you should invest the funds or use them to retire debt. Financial theory recommends that if your after-tax return on investments is greater than your after-tax cost of debt then you should invest.
      </p>
    </div>

    {/* Eighth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud05"  
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Long Will My Money Last With Systematic Withdrawals?
</a>
      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      You have worked hard to accumulate your savings. Use this calculator to determine how long those funds will last given regular withdrawals.
      </p>
    </div>

    {/* Ninth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud06" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Should My Spouse Enter The Work Force?
</a>

      <p v >
      A working spouse can provide additional needed household income. However, when making your decision, you need to look at the net income generated by a working spouse not simply the gross income. Factors such as health insurance savings, increased daycare expenses, additional transportation costs, etc. need to be considered.
      </p>
    </div>

    {/* Tenth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud07" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Is My Current Net Worth?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      In order to get where you want to go, you need to know where you are. You can get a view of your financial position by generating a personal net worth statement.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud08"  
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Is My Projected Net Worth?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      Over time your net worth will change as your assets earn interest or are depleted and your liabilities increase or decrease. Use this calculator to estimate what your net worth could be in the future based on specified growth rates.
      </p>
    </div>
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=bud09" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Is My Current Cash Flow?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
        Businesses generate a sources and uses of cash statement to evaluate their income and expenses and to check profitability. Similarly, a cash flow statement can help you evaluate your personal income and expenses and see if you are running 'in the red or the black' each month.
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

