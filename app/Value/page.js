"use client";
import "./Value.css";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Value(){

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
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Our Values</p>

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
  Our firm provides outstanding service to our clients because of our dedication to the <br></br> three underlying principles of professionalism, responsiveness and quality.
  </p>
  <p className="h5 mt-4 pt-2 " style={{fontWeight:"300",lineHeight:"30px"}} >
  Professionalism
  </p>
  <p className="h5 mt-3 " style={{fontWeight:"300",lineHeight:"30px"}} >
  Our firm is one of the leading firms in the area. By combining our expertise, <br></br> experience and the energy of our staff, each client receives close personal and <br></br> professional attention.
  </p>
  <p className="h5 mt-5 pt-2  " style={{fontWeight:"300",lineHeight:"30px"}} >
  Our high standards, service and specialized staff spell the difference between our <br></br> outstanding performance, and other firms. We make sure that every client is served <br></br> by the expertise of our whole firm.
  </p>
  <p className="h5 mt-4 pt-3 " style={{fontWeight:"300",lineHeight:"30px"}} >
  Responsiveness
  </p>
  <p className="h5 mt-3  " style={{fontWeight:"300",lineHeight:"30px"}} >
  Our firm is responsive. Companies who choose our firm rely on competent advice <br></br> and fast, accurate personnel. We provide total financial services to individuals, large <br></br> and small businesses and other agencies.
  </p>
  <p className="h5 mt-4  " style={{fontWeight:"300",lineHeight:"30px"}} >
  To see a listing of our services, please take a moment and look at our services page. <br></br> Because we get new business from the people who know us best, client referrals <br></br> have fueled our growth in the recent years.
  </p>
  <p className="h5 mt-4  " style={{fontWeight:"300",lineHeight:"30px"}} >
  Through hard work, we have earned the respect of the business and financial <br></br> communities. This respect illustrates our diverse talents, dedication and ability to <br></br> respond quickly.
  </p>
  <p className="h5 mt-4 pt-3 " style={{fontWeight:"300",lineHeight:"30px"}} >
  Quality
  </p>
  <p className="h5 mt-3  " style={{fontWeight:"300",lineHeight:"30px"}} >
  An accounting firm is known for the quality of its service. Our firm's reputation <br></br> reflects the high standards we demand of ourselves.
  </p>
  <p className="h5 mt-4  " style={{fontWeight:"300",lineHeight:"30px"}} >
  Our primary goal as a trusted advisor is to be available and to provide insightful <br></br> advice to enable our clients to make informed financial decisions. We do not accept <br></br> anything less from ourselves and this is what we deliver to you.
  </p>
  <p className="h5 mt-4  " style={{fontWeight:"300",lineHeight:"30px"}} >
  We feel it is extremely important to continually professionally educate ourselves to <br></br> improve our technical expertise, financial knowledge and service to our clients.
  </p>
  <p className="h5 mt-4  " style={{fontWeight:"300",lineHeight:"30px"}} >
  Our high service quality and "raving fan" clients are the result of our commitment to <br></br> excellence.
  </p>
  <p className="h5 mt-4 mb-5 " style={{fontWeight:"300",lineHeight:"30px"}} >
  We will answer all of your questions, as they impact both your tax and financial <br></br> situations. We welcome you to contact us anytime.
  </p>
 </div>
  </ul>
</div>

</div>






    
</div>




}


