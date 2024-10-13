
"use client";
import { useRouter } from "next/navigation";

import "./Employ.css";
import Link from "next/link";


export default function Employ(){
  
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
  <p className="h1 text-sm-start ms-4" style={{ fontWeight: "100", whiteSpace: "nowrap" }}>
    Employment Opportunities
  </p>
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
 <div>
  <p className="h5" style={{fontWeight:"300",lineHeight:"30px"}} >
  
JCB CPA PC is seeking professional, hard-working, licensed CPAs with at least four <br></br> years of experience.
  </p>
  <p className="h5 mt-4 pt-4 " style={{fontWeight:"300",lineHeight:"30px"}} >
  The Firm demands independence, integrity, objectivity, competence and due care <br></br> from all of its personnel in the conduct of its engagements. Our Firm is structured to <br></br> provide leadership in achieving high quality professional performance while <br></br> maintaining the concept of individual responsibility. Policies and procedures have <br></br> been established providing assurance that professional engagements are properly <br></br> planned and executed. Decisions are based on the substance of issues, not on form.
  </p>
  <p className="h5 mt-5 pt-3 " style={{fontWeight:"300",lineHeight:"30px"}} >
  Our policies and procedures designate Partners of the Firm for consultation on <br></br> significant ethical, technical and industry questions. The policies and procedures are <br></br> designed to assure that clients receive the best professional services we can provide. <br></br> We continually keep in mind the public interest. We expect our Partners and <br></br> Associates to identify and resolve all important engagement issues.
  </p>
  <p className="h5 mt-5 " style={{fontWeight:"300",lineHeight:"30px"}} >
  The job requires high level tax preparation skills, superior tax research and problem <br></br> solving abilities, broad software knowledge, and excellent written and oral <br></br> communication skills. We have a team approach to provide high quality client <br></br> service for tax compliance, planning, financial statements, and general business <br></br> consulting.
  </p>
  <p className="h5 mt-4" style={{fontWeight: "300", lineHeight: "30px", borderBottom: "1px solid #9a9a9a", paddingBottom: "30px", marginBottom: "0"}}>
  Fax resume and references to or email Ahashmi@live.com.
</p>


  <p className="h5 mt-3  " style={{fontWeight:"300",lineHeight:"30px"}} >
  Check this page from time to time for specific employment opportunities for <br></br> Certified Public Accountants, small business accountants and administrative staff.
  </p>
  <p className="h5 mt-5  " style={{fontWeight:"300",lineHeight:"30px"}} >
  Please mail resume to:
  </p>
  <p className="h5 mt-4  " style={{fontWeight:"300"}} >
  JCB CPA PC
  </p>
  <p className="h5  " style={{fontWeight:"300"}} >
  24 Pinecrest Road
</p>
  <p className="h5 mb-5 " style={{fontWeight:"300"}} >
  Jersey City, NJ 07305
</p>
 </div>
  </ul>
</div>

</div>


</div>




}

