"use client"
import Link from "next/link";



import { useRouter } from "next/navigation";



export default function Client(){

  

  let move = useRouter();

  const openFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com', '_blank');
  };


  const openTwitter = () => {
    window.open('https://www.twitter.com', '_blank');
  };
    
 




return <div>

    
<div class="background-image2">
    <div class="bottom-overlay">
    <div className="container">
    <div className="row text-center text-md-start">
        <div className="col mb-3 d-flex align-items-center">
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Client Portal</p>

        </div>

        <div className="col mb-3 d-flex align-items-center mt-3 gap-3">
         
        </div>

        <div className="col mb-3 d-flex align-items-center mt-3  gap-3">
         
        </div>

        {/* Fourth Item with Increased Top Margin */}
        <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
           
        <div>
                <ul className="list-unstyled pt-2 mb-0 text-center">
                    <li style={{ color: "white" }}>T: 703-953-6184</li>
                    <li style={{ color: "white" }}>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" className="text-reset text-white">Ahashmi@live.com</a>


                    </li>
                    <li style={{ color: "white" }}>
                    <div className="d-flex justify-content-center gap-2">
                        
                        <i onClick={openFacebook} className="fa-brands fa-facebook-f mt-2"></i>
                    
                      
                        <i onClick={openLinkedIn} className="fa-brands fa-linkedin-in mt-2"></i>
                  
                                              <i onClick={openTwitter}  className="fa-brands fa-twitter mt-2"></i>
                                              <i className="fa-solid fa-wifi mt-2"></i>
                                              <i 
                        className="fa-solid fa-lock mt-2"
                        style={{ cursor: 'pointer' }} // To indicate the icon is clickable
                        onClick={()=>{
                          move.push("/Login2");
                        }}
                      ></i>
                                          </div>
                  
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


    </div>
    
</div>

<div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-3 justify-content-center   ">
<div className="mt-3 text-center text-md-start me-md-5"> {/* Increased right margin for more gap */}
    <ul className="list-unstyled">
      <li className="h5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        IN THIS SECTION:
      </li>

      <li  className="text-lg-end"  >
      <Link href={"/ClientPortal"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Client Portal
</Link>
      </li>

      <li  className="text-lg-end mt-1 "  >
      <Link href={"/SecureSend"} className="h5 text-center text-lg-end hover-text-gold  " style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      SecureSend
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
  
  <div   className=" text-center text-md-start"  >


     {/* Center text on small screens and align left on medium and larger screens */}
  <ul id="octoberContainer" className="list-unstyled mt-3">

  <div  className="container">
  <div  className="d-flex flex-column align-items-center align-items-lg-start">
    
    {/* First Paragraph */}
    <div className="d-flex justify-content-center justify-content-lg-start" style={{ width: "100%" }}>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
        As a valued client, you get a secure, password-protected portal to store and access your important financial documents from anywhere at any time.
      </p>
    </div>

    {/* Second Paragraph */}
    <div className="d-flex justify-content-center justify-content-lg-start mt-3" style={{ width: "100%" }}>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
        Whether you're at work, at home, or on vacation, you always have access to your tax returns, financial work papers, or accounting database.
      </p>
    </div>

    {/* Third Paragraph */}
    <div className="d-flex justify-content-center justify-content-lg-start mt-3" style={{ width: "100%" }}>
      <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
        This portal also allows us to work together efficiently by securely exchanging working documents, scanned receipts, and very large QuickBooks files.
      </p>
    </div>

    {/* Portal and Link */}
    <div className="d-flex justify-content-center justify-content-lg-start mt-3" style={{ width: "100%" }}>
      <div className="mt-3">
        <p id="res" className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300"}}>
          Check out this video to see the portal in action. See how to use the SecureSend feature to quickly and easily send files to the secure portal environment. (View client
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start align-items-center" style={{lineHeight: "30px", fontWeight: "300", width: "100%"}}>
          <p className="h5 mb-0" style={{lineHeight: "30px", fontWeight: "300"}}>
            portal
          </p>
          <Link href={""} className="h5 mx-1" style={{lineHeight: "30px", fontWeight: "300"}}>
            security measures.
          </Link>
          <p className="h5 mb-0" style={{lineHeight: "30px", fontWeight: "300"}}>
            )
          </p>
        </div>
      </div>
    </div>

    {/* Registration and Login */}
    <div className="mt-3 d-flex flex-column align-items-center align-items-lg-start" style={{ width: "100%" }}>
      <div style={{lineHeight: "30px", fontWeight: "300"}} className="d-md-flex gap-2 text-center text-lg-start">
        <p className="h5" style={{lineHeight: "30px", fontWeight: "300"}}>To start using the client portal please log in above or</p>
        <Link href={""} className="h5" style={{lineHeight: "30px", fontWeight: "300"}}>register here.</Link>
      </div>
    </div>

    {/* SecureSend Link */}
    <div className="mt-3 d-flex flex-column align-items-center align-items-lg-start" style={{ width: "100%" }}>
      <div style={{lineHeight: "30px", fontWeight: "300"}} className="d-md-flex gap-2 text-center text-lg-start">
        <p className="h5" style={{lineHeight: "30px", fontWeight: "300"}}>To send a file without creating an account use the</p>
        <Link href={""} className="h5" style={{lineHeight: "30px", fontWeight: "300"}}>SecureSend page.</Link>
      </div>
    </div>

    {/* Video */}
    <div className="mt-3 d-flex justify-content-center justify-content-lg-start" style={{ width: "100%" }}>
      <video controls style={{width: "50vw"}} src="/Using the Secure File Exchange720p.mp4"></video>
    </div>

  </div>
</div>


  </ul>
</div>



</div>








</div>




}



