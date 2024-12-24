"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function College(){

  

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
      <a href="/FinancialCalculators" className="btn btn-primary mt-2 ">Calculators &gt; College</a>
    </div>
  </div>

  {/* Content split into individual rows */}
  <div className="row">
    {/* First Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=col01" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  How Much Should I Be Saving For College?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
       With college costs increasing at twice the rate of inflation, it is important to start saving early. Interest working for you now in a regular savings program is much better than having interest work against you in the future in the form of education loans.
      </p>
    </div>

    {/* Second Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=col02" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Feasibility Of Student Loan Repayment
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     When you borrow money for college you might not be thinking about your ability to repay the loan once you graduate. Outstanding student loan balances may infringe upon your ability to qualify for a home, auto and other personal loans.
      </p>
    </div>

    {/* Third Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=col03" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Are The Advantages Of A Coverdell ESA?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     Tax-deferral can have a dramatic effect on the growth of an investment. With the new Coverdell ESA (formerly known as the Education IRA) your contributions can grow tax-deferred and distributed income tax-free as long as distributions are used for qualified education expenses. These costs can include school uniforms, computers, and transportation for elementary or secondary school, public, private or religious.
      </p>
    </div>

    {/* Fourth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=col04" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Are The Advantages Of A 529 College Savings Plan?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      Tax-deferral can have a dramatic effect on the growth of an investment. With a state-sponsored 529 College Savings Plan your contributions can grow tax-deferred (some states allow contributions to be partially or completely deductible) and distributed income tax-free as long as distributions are used for qualified education expenses such as tuition, fees, room and board at higher education institutions.
      </p>
    </div>

    {/* Fifth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=col05" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Is The Value Of A College Education?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     It may surprise you that, on average, an individual with a bachelor's degree earns more than fifty percent more than a worker with a high school diploma. Use this calculator to see the value of a college education.
      </p>
    </div>

    {/* Sixth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=col06" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  What Are The Payments On A Parental (PLUS) Loan?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     PLUS loans are low-interest federally insured loans for parents of undergraduate students to help pay a dependent student's college cost. PLUS loans are also available to graduate and professional students.
      </p>
    </div>

    {/* Seventh Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=col07" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  Should I Live At Home, On Campus, Or Off Campus?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
     Before deciding on room and board options when attending college, it may help to itemize and project expenses. These expenses will vary depending on whether you will commute from home, stay on campus or rent an apartment off campus.
      </p>
    </div>

    {/* Eighth Item */}
    <div className="col-12 mb-4">
    <a 
  href="https://www.nybcpa.com/calcloader.php?calc=col08" 
  className="h4 text-center text-lg-start" 
  style={{ lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw" }}
  target="_blank" 
  rel="noopener noreferrer"
>
  When Should I Begin Saving For A Child's College?
</a>

      <p className="h5 text-center text-lg-start d-flex d-lg-block justify-content-center" 
    style={{ lineHeight: "30px", fontWeight: "300", width: "100%", maxWidth: "53vw", margin: "0 auto" }} >
      When saving for college, compound interest can be your friend. However, the longer you wait to start saving the less interest you will accumulate and the more you will have to save.
      </p>
    </div>

    {/* Ninth Item */}

  </div>
</div>


  
     
      </div>
    </div>
    
    
      </ul>
    </div>
    
    
    
    </div>


    
</div>



}

