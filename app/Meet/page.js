

"use client";
import "./Meet.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function(){

  
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
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Meet the Staff</p>
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

<div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-1 justify-content-center   ">
<div className="mt-3 text-center text-md-start me-md-5"> {/* Increased right margin for more gap */}
    <ul className="list-unstyled">
      <li className="h5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        IN THIS SECTION:
      </li>

      <li  className="text-lg-end"  >
      <Link href={"/Meet"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
        Meet the Staff
</Link>
      </li>

      <li  className="text-lg-end mt-1 "  >
      <Link href={"/Value"} className="h5 text-center text-lg-end hover-text-gold  " style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Our Values
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/Employ"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Employment Opportunities
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/Review"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Client Reviews
</Link>
      </li>


    
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
  <div className="mt-3 text-center text-md-start"> {/* Center text on small screens and align left on medium and larger screens */}
  <ul className="list-unstyled">
  <div className="d-md-flex flex-column flex-md-row align-items-center">
  <div className="text-center  ">
    <img
      style={{ width: "400px", height: "424px" }}
      className="mt-4"
      src="/WhatsApp Image 2024-10-03 at 06.40.14.jpeg"
      alt="Natanel Benisti"
    />
  </div>
  <div className="text-md-start">
    <p className="h4 pt-3 ps-4" style={{ color: "#0078A5", fontWeight: "400" }}>
      MANAGING PARTNER - <br /> NATANEL BENISTI, CPA
    </p>
    <p className="h5 mt-3 ms-4" style={{ fontWeight: "300", lineHeight: "30px" }}>
      Natanel Benisti is a seasoned <br />
      financial professional with over a <br />
      decade of experience in tax, <br />
      advisory, and back-office <br />
      accounting services. He <br />
      graduated with a BA in <br />
      Accounting from Baruch College <br />
      and an MS in Taxation from <br />
      Zicklin School of Business. <br />
      Natanel specializes in Virtual CFO <br />
      services for small/medium <br />
      businesses, with other areas of
    </p>
  </div>
</div>

 <div>
  <p className="h5" style={{fontWeight:"300",lineHeight:"30px"}} >
  focus including tax preparation for industries such as Real Estate, Professional <br></br> Services, Retail/Wholesale, online businesses, as well as international taxpayers and <br></br> expats. Natanel works with clients across the United States, delivering expert <br></br> guidance on everything from tax strategy and financial reporting to business <br></br> planning and growth strategy.
  </p>
  <p className="h5 mt-5 " style={{fontWeight:"300",lineHeight:"30px"}} >
  Natanel's hands-on approach and personalized attention treat all clients like family, <br></br> with a focus on providing exceptional service and expertise in tax planning and <br></br> financial management. He is a member of the American Institute of Certified Public <br></br> Accountants and remains dedicated to staying up-to-date with the latest industry <br></br> trends and regulations.
  </p>
  <p className="h5 mt-5 " style={{fontWeight:"300",lineHeight:"30px"}} >
  Natanel's passion for delivering exceptional results has earned him a reputation as a <br></br> trusted advisor and financial expert. He currently acts as CFO for multiple companies <br></br> operating nationwide, offering expert support and guidance on financial strategy, <br></br>  budgeting, cash flow management, and risk assessment. Natanel has achieved many <br></br> accomplishments, including saving clients thousands in taxes through strategic <br></br> planning and putting together customized plans that align with their unique lifestyle <br></br> and business goals.
  </p>
  <p className="h5 mt-5 mb-5 " style={{fontWeight:"300",lineHeight:"30px"}} >
  Overall, Natanel's expertise in tax and financial management, coupled with his <br></br> commitment to delivering personalized and attentive service, make him a valuable <br></br> partner to clients across a wide range of industries. His passion for helping <br></br> businesses succeed and achieve their goals has made him a sought-after financial <br></br> expert and trusted advisor to high net worth individuals and companies throughout <br></br> the United States.
  </p>
  <p className="h2 pt-3 text-center" style={{color:"#0078A5",fontWeight:"400"}} >Staff Members</p>
 </div>
 <div className="d-md-flex gap-5 " >
    <div  className="d-flex-justify-content-centr" >
    <img style={{width:"400px",height:"424px"}} className="mt-4" src="/WhatsApp Image 2024-10-03 at 06.58.19.jpeg" >
    </img>
    </div>
    <div  className="d-flex-justify-content-centr"  >
    <img style={{width:"400px",height:"424px"}} className="mt-4" src="/WhatsApp Image 2024-10-03 at 06.38.51.jpeg" >
    </img>
    </div>
    </div>
 
  </ul>
</div>

</div>







</div>






}


