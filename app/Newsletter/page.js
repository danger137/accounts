"use client"

import Link from "next/link";
import "./Newsletter.css";

import { useRouter } from "next/navigation";

export default function Newsletter(){

  
  let move = useRouter();

  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = [
    ['', '', '', '', '1', '2', '3'],
    ['4', '5', '6', '7', '8', '9', '10'],
    ['11', '12', '13', '14', '15', '16', '17'],
    ['18', '19', '20', '21', '22', '23', '24'],
    ['25', '26', '27', '28', '29', '30', ''],
  ];

  const headerStyle = {
    padding: '5px',
    backgroundColor: '#0078A5',
    color: 'white',
    fontSize: '16px', // Reduced font size for better fit
    fontWeight: 'bold',
    textAlign: 'center', // Center align header text
  };
  
  const tableStyle = {
    width: '100%',
    maxWidth: '250px', // Maintained size
    margin: '10px auto', // Center the table with margin
    borderCollapse: 'collapse',
    backgroundColor: '#0078A5',
    color: 'white',
  };
  
  const headerCellStyle = {
    backgroundColor: '#0078A5',
    color: 'white',
    padding: '5px', // Kept smaller padding
    fontSize: '12px', // Further reduced font size for day names
    textAlign: 'center', // Center align header cell text
  };
  
  const cellStyle = {
    width: '14%', // Adjusted width for better fit in 250px
    textAlign: 'center',
    padding: '5px', // Reduced padding for day cells
    border: '1px solid #0078A5',
    fontSize: '12px', // Further reduced font size for day numbers
  };
  

return <div>




<div class="background-image2">
    <div class="bottom-overlay">
    <div className="container">
    <div className="row text-center text-md-start">
        <div className="col mb-3 d-flex align-items-center">
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Newsletter</p>

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
      <li className="h5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        IN THIS SECTION:
      </li>

      <li  className="text-lg-end"  >
      <Link href={"/Newsletter"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      This Month's Newsletter
</Link>
      </li>

      <li  className="text-lg-end mt-1 "  >
      <Link href={"/Previous"} className="h5 text-center text-lg-end hover-text-gold  " style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Previous Newsletters
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/Newsletter"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Today's News and Weather
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
  <div className="mt-3 text-center text-md-start"  > {/* Center text on small screens and align left on medium and larger screens */}
  <ul className="list-unstyled">
 <div>
<div style={{borderBottom: "2px solid #0078A5"}} >
<div id="sh" className="mt-3 d-flex justify-content-center align-items-center">
  <p className="h3" style={{fontWeight: "500", lineHeight: "30px", color: "#0078A5"}}>
    SEPTEMBER 2024
  </p>
</div>
</div>

  <p className="h5 mt-2 " style={{fontWeight:"400",lineHeight:"30px"}} >
  FEATURE ARTICLES
  </p>
<ul>
<li style={{ color: "black" }} className="mt-3">
  <Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection2').scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >
    Are You Aware of the Business Credits and Other <br /> Tax Benefits Available?
  </Link>
</li>
<li style={{color:"black"}} className="mt-3" >
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection3').scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >Business Succession and Estate Planning Should<br/> Be Inseparable  </Link>
    </li>
<li style={{color:"black"}} className="mt-3" >
    <Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection4').scrollIntoView({
        behavior: 'smooth',
      });
    }} >Home Sale: Failure to Plan may Raise Your Tax Bill</Link>
    </li>
</ul>
  <p className="h5 mt-2 pt-2 " style={{fontWeight:"400",lineHeight:"30px"}} >
  Tax Tips
  </p>
<ul>
<li style={{color:"black"}} className="mt-2" >
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection5').scrollIntoView({
        behavior: 'smooth',
      });
    }} >Medicare Premiums may Lead to Tax Savings</Link>
    </li>
<li style={{color:"black"}} className="mt-3" >
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection6').scrollIntoView({
        behavior: 'smooth',
      });
    }} >Don't Wait Until the Last Minute to File Your<br/> Extended Return!</Link>
    </li>
<li style={{color:"black"}} className="mt-3" >
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection7').scrollIntoView({
        behavior: 'smooth',
      });
    }} >An Employee Benefit with Possible Magnetic Power</Link>
    </li>
</ul>
  <p className="h5 mt-2 pt-2 " style={{fontWeight:"400",lineHeight:"30px"}} >
  QuickBooks Tips
  </p>
<ul>
<li style={{ color: "black" }} className="mt-3">
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection8').scrollIntoView({
        behavior: 'smooth',
      });
    }}>
   How to See Who Owes You in QuickBooks Online
  </Link>
</li>





</ul>




 </div>
  </ul>
</div>
<div className="mt-3 text-center text-md-start d-none d-md-block" style={{borderLeft: "2px solid rgb(153, 153, 153)"}} > 
  {/* This div will be hidden on small screens and visible on medium and larger screens */}
  <ul className="list-unstyled">
  <div id="E" style={{ background: "#0078A5", maxWidth: "250px", margin: "0 auto" }} className="p-3 ms-2 d-flex flex-column align-items-center text-center">
  <div className="d-md-flex gap-2 align-items-center">
    <img src="https://www.cpasitesolutions.com/images/galleries/style/icons/new_mail-0056.png" alt="Email Icon" />
    <h6 className="h5 pt-2" style={{ color: "white" }}>Email Updates</h6>
  </div>
  <h6 className="h5 pt-2" style={{ color: "white" }}>
    Enter your email <br /> below <br /> to subscribe to our <br /> monthly newsletter.<br />Email
  </h6>
  <div className="d-flex justify-content-center" style={{ width: "100%" }}>
    <input placeholder="Email" className="form-control w-80" />
  </div>
  <div className="mt-2 d-flex justify-content-center">
    <button className="h5">Subscribe</button>
  </div>
</div>


    <div className="mt-4 d-flex justify-content-center">
  <div className="text-center">
    <img src="https://www.nybcpa.com/images/galleries/Icons/feedIcon.png" alt="RSS Feed Icon" className="mx-auto d-block" />
    <p className="mt-3" style={{color:"#0078A5"}} >RSS Feed</p>
  </div>
</div>
    <div className="mt-4 d-flex justify-content-center">
  <div className="text-center">
    <img src="https://www.cpasitesolutions.com/images/galleries/style/newsletter/images/printer.png" alt="RSS Feed Icon" className="mx-auto d-block" />
    <p className="mt-3" style={{color:"#0078A5"}} >Print This Page</p>
  </div>
</div>
<div className="d-md-flex justify-content-center ms-2">
  <div
    id="C"
    style={{
      background: "#0078A5",
      maxWidth: "250px", // Set the desired maximum width
      width: "100%", // Allow it to be responsive
      padding: "10px", // Optional: Add some padding for better aesthetics
    }}
    className="mt-4"
  >
    <div style={{ textAlign: 'center' }}>
      <div className="calendar-header" style={{ ...headerStyle, fontSize: '1.2rem' }}>
        September 2024
      </div>
      <table className="calendar" style={tableStyle}>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} style={{ ...headerCellStyle, fontSize: '0.8rem' }}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysInMonth.map((week, index) => (
            <tr key={index}>
              {week.map((day, i) => (
                <td key={i} style={{ ...cellStyle, fontSize: '0.8rem' }}>
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>



  </ul>
</div>


</div>

<div className="d-md-flex justify-content-center mt-4 px-3 px-sm-5">
  <div className="p-3 mb-4 mx-auto" 
       style={{
         background: "#ffc", 
         width: "fit-content", 
         borderTop: "2px solid #FC0",  // Top border
         borderBottom: "2px solid #FC0"  // Bottom border
       }}>
    <p className="h5" 
       style={{
         fontWeight: "300", 
         lineHeight: "30px"
       }}>
      Any accounting, business or tax advice contained in this <br />
      communication, including attachments and enclosures, is not <br />
      intended as a thorough, in-depth analysis of specific issues, nor a <br />
      substitute for a formal opinion, nor is it sufficient to avoid tax- <br />
      related penalties. If desired, we would be pleased to perform the <br />
      requisite research and provide you with a detailed written analysis. <br />
      Such an engagement may be the subject of a separate engagement <br />
      letter that would define the scope and limits of the desired <br />
      consultation services.
    </p>
  </div>
</div>
<div id="targetSection2" className="d-md-flex justify-content-center mt-5">
 <div >
 <div id="res" style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
  <p id="res" className="h3 text-start"
   style={{
     fontWeight: "400", 
     lineHeight: "1.2",
     color: "#0078A5", 
     textTransform: "uppercase",
     textAlign: "center",
    // Default for small screens
   }}
>
Are You Aware of the Business Credits and Other Tax Benefits Available?
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >It’s a challenging time for many businesses. Therefore, any help you can get, such as tax incentives and sales tax exemptions, can make a big difference. Unfortunately, these benefits often go unclaimed because businesses don’t know about them or erroneously think they’re ineligible.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >1. Statutory Incentives</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Some credits are available “as of right.” That is, if your business meets the specified requirements, you just need to claim the benefit on a timely filed tax return to receive it.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >State and federal tax credits and exemptions are designed as incentives for businesses to engage in certain activities or invest in specific economically distressed areas. Here are a few:</p>
</div>
<div className="mt-3" >
  <div  id="res" className="d-md-flex gap-2 " >
<p   className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Work Opportunity Tax Credit (WOTC).</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > The WOTC is a federal credit ranging from</p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >$2,400 to $9,600 per eligible new hire from certain disadvantaged groups. Examples include convicted felons, welfare recipients, veterans and workers with disabilities. Other steps must also be taken, such as completing paperwork.</p>
</div>
<div className="mt-3" >
  <div  id="res" className="d-md-flex gap-2 " >
<p   className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >State and federal research and development tax credits.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > These credits may be</p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >available to an eligible business that invests in developing new products or techniques, improving processes, or developing software for internal use, regardless of size. The federal “increasing research activities” credit is generally equal to 20% of the amount by which the business increases qualified research expenditures, compared to a base amount.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The credit is available even to businesses with no income tax liability and may be carried forward to offset taxable income in future years. If eligible, a start-up company can claim the federal research credit against up to $500,000 in employer-paid payroll taxes.</p>
</div>
<div className="mt-3" >
  <div  id="res" className="d-md-flex gap-2 " >
<p   className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Empowerment zone incentives.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >  Certain tax breaks are available to companies that</p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >operate in federally designated, economically distressed “empowerment zones.” Tax credits may be worth up to $3,000 for each eligible employee.</p>
</div>
<div className="mt-3" >
  <div  id="res" className="d-md-flex gap-2 " >
<p   className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Industry-based and investment credits.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > Many states and other jurisdictions offer tax</p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >credits and other incentives to attract certain types of businesses, such as manufacturing or film and television production. Jurisdictions may also offer investment tax credits for capital investments within their borders.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >2. Discretionary Incentives</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Discretionary tax breaks must be negotiated with government representatives. Typically, these incentives are intended to persuade a business to stay in or relocate to a certain state or locality.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To secure these incentives, a business must show it’ll bring benefits to the jurisdiction, such as job creation and revenue generation. Discretionary incentives may include income and payroll tax credits, property tax abatements and utility rate reductions.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >3. Sales Tax Exemptions</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >States with sales taxes provide exemptions for some business purchases. Common exemptions include purchases by:</p>
</div>
<div className="mt-3" >
<ul>
  <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Retailers for the purpose of resale,</li>
  <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Manufacturers of equipment, raw materials or components used in the manufacturing process,</li>
  <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Specific tax-exempt entities, and</li>
  <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Agricultural businesses that buy such items as farming equipment and fuel, feed, seeds, fertilizer, and chemical sprays.</li>
</ul>

</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Businesses should familiarize themselves with the exemptions available where they do business and what it takes to qualify. For example, they may need to prove to the sellers that they have a resale or exemption certificate.</p>
</div>

<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Don't Miss These Opportunities</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Every year, a vast amount of tax credits and incentives aren’t claimed because businesses are unaware of them or erroneously believe they’re ineligible. Many more examples exist. Contact the office for help ensuring that your business receives all the tax breaks it deserves.</p>
</div>
 </div>

</div>
<div id="targetSection3" className="d-md-flex justify-content-center">
 <div >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
  <p id="res" className="h3 text-start"
   style={{
     fontWeight: "400", 
     lineHeight: "1.2",
     color: "#0078A5", 
     textTransform: "uppercase",
     textAlign: "center",
    // Default for small screens
   }}
>
  Business Succession and Estate Planning Should Be
  Inseparable
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you’re a business owner, your company is likely your most valuable asset. To ensure it survives after you’re gone, you first need a succession plan that will provide a smooth transition of the business to one or more of your children (assuming you want to keep it in the family). In addition, you need an estate plan that effectively addresses the tax impact of transferring your ownership interests to the next generation.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Consider Who’ll Take the Reins</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you’re like many business owners, you may dream of the day you can transfer ownership to your children. A succession plan can provide a smooth transition of power when you retire and be used in the event of unexpected death before retirement.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Typically, a succession plan will outline the structure going forward and prepare for the eventual transfer of ownership interests in the business, whether through selling, gifting or a combination of the two. Make sure the plan is in writing. Identify training opportunities and special compensation arrangements for your successors. Include in the plan financial details reflecting assets, liabilities and current value, and update the plan periodically. Also, coordinate your succession plan with your estate plan.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Ensure Key Estate Planning Documents Are in Place</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >A comprehensive estate plan should be supported by several key documents, starting with a basic will. A will specifies how your assets will be distributed to designated beneficiaries and meets other objectives. Without a will or having assets otherwise titled, your business and other assets will be distributed under the prevailing state law, regardless of your wishes.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >A financial power of attorney (POA) appoints someone to manage your affairs in case you become incapacitated and allows this “attorney-in-fact” to conduct business transactions. (Other important documents include health care powers of attorney and advanced directives.)</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Make Use of Tax Breaks</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you own significant business assets, consider taking maximum advantage of currently available federal estate tax breaks. These include the unlimited marital deduction and the federal gift and estate tax exemption, which in 2024 shields up to $13.61 million. Some states also impose their own state estate or inheritance taxes.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You may be able to minimize federal and state taxes by using trusts or setting up a family limited partnership (FLP). With a tax-favored FLP, assets are removed from your taxable estate and limited partner interests can be gifted to loved ones, often at a discounted value.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Bypass Potential Family Conflicts</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >As you develop your succession and estate plans, you may face family challenges. Unfortunately, elevating one child to run the business and leaving another out, or giving someone a secondary role, may create hard feelings.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >One estate planning strategy is to attempt to even things out. For example, let’s say that you own a business valued at $5 million and you have $5 million in other assets. You might give $5 million in business assets to the child who’s taking the helm of your business and give other assets worth $5 million to the child who isn’t active (or is less active) in the business.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Relax and Enjoy a Smooth Transition</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >There’s no universal plan for family business succession. What’s right depends on your circumstances and goals. Contact the office for help.</p>
</div>
 </div>

</div>
<div id="targetSection4" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
     Home Sale: Failure to Plan may Raise Your Tax Bill
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >As the saying goes, there’s nothing certain in life except for death and taxes. But when it comes to selling your home, proactive tax planning can help you reduce your federal income tax bill.</p>
</div>
<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >A Costly Mistake to Avoid</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Let’s say Tom is a soon-to-be married homeowner who’s looking to sell his principal residence. If certain tests are met, an unmarried individual may be able to exclude up to $250,000 of taxable gain.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Just before the wedding, Tom sells the home he’d purchased 20 years earlier. The home had appreciated by $500,000. He and his future wife, Stacy, plan to move into her much smaller fixer-upper home after the wedding.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >As an unmarried taxpayer, Tom can exclude $250,000 of the gain from the sale of his home, leaving a taxable gain of $250,000 ($500,000 minus the $250,000 federal home sale gain exclusion). He owes 15% federal income tax on the gain, plus the 3.8% net investment income tax and state income tax.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Instead, suppose that Tom and Stacy had taken the time to seek tax planning advice. Their tax advisor would have let them know that the home sale gain exclusion for married couples is $500,000 if various tests are met, including that both spouses have resided in the home as their principal residence for at least two years.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Rather than sell Tom’s house before the wedding, they might have kept it and lived in it as a married couple for two years. That would have allowed them to avoid the full $500,000 in taxable gain and the resulting taxes when they later sold it. Even if Stacy had sold her fixer-upper home before the wedding, the gain would likely have been much smaller and may have been fully sheltered with her $250,000 home sale gain exclusion.</p>
</div>

<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Slow Down and Seek Advice</p>
</div>
<div className="mt-3" >
<p id="res"  className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Proactive tax planning is generally worth the effort, especially if you have a lot at stake and/or tax rates increase. Even if you don’t need advice on the subject of home sales, other issues may be much more complicated and a lack of knowledge could lead to costly mistakes. Contact the office to get the best tax planning results for your circumstances.</p>
</div>


 </div>

</div>
<div id="targetSection5" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
    Medicare Premiums may Lead to Tax Savings
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you pay premiums for Medicare health insurance, you may be able to combine them with other qualifying expenses and claim them as an itemized deduction for medical expenses on your tax return. This includes amounts for “Medigap” insurance and Medicare Advantage plans, which cover some costs that Medicare Parts A and B don’t cover.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Generally, you can deduct medical expenses only if you itemize deductions and only to the extent that total qualifying health care expenses exceeded 7.5% of your adjusted gross income. But, if you’re self-employed people or a shareholder-employees of an S corporation, you can generally claim an above-the-line deduction for your health insurance premiums, including Medicare premiums. That means it’s not necessary for you to itemize deductions to get the tax savings.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Contact the office with questions about claiming medical expense deductions on your personal tax return. Also, be sure to ask for help identifying an optimal overall tax-planning strategy based on your personal circumstances.</p>
</div>


 </div>

</div>
<div id="targetSection6" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
    Don't Wait Until the Last Minute to File Your Extended Return!
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you requested an extension to file your 2023 tax return, you probably know that the extended deadline is coming up soon, on Oct. 15. If you have the information you need, consider filing now.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >There’s no advantage to waiting, and last-minute filing may lead to worry. If you’re concerned about paying any tax owed, the IRS offers short- and long-term payment plans, as well as installment agreements, to taxpayers who qualify. It’s important to act quickly if you owe because any amount that was due April 15 accrues interest until the balance is paid. As soon as possible, gather your 2023 tax year records and contact the office for a tax preparation appointment or to ask questions you may have.</p>
</div>



 </div>

</div>
<div id="targetSection7" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
    An Employee Benefit with Possible Magnetic Power
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Employers seeking to attract new recruits and retain talent should consider offering educational assistance programs to their employees. The plans aren’t new, but they temporarily offer greater flexibility in how they work.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > Through Dec. 31, 2025, the funds can be used to help employees pay their federal student loan debts. According to the U.S. Dept. of Education, the average borrower in 2024 has federal student loan debt of $37,850. Student loan payments can be made directly to employees or lenders. These tax-free benefits are limited to $5,250 per employee, per year. Benefits that exceed that amount are taxable as wages.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If your company doesn’t offer an educational assistance program, it might be a good idea to consider establishing one while this additional feature is still in force. In today’s tight labor market, fringe benefits like this one may be a magnet that gives your company an advantage. To learn more about adding this program to your</p>
<div id="res" className="d-md-flex gap-2" >
  <p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >benefit package:</p>
</div>
<div id="res" >
<Link  href={"https://www.irs.gov/newsroom/employer-offered-educational-assistance-programs-can-help-pay-for-college"} className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > https://www.irs.gov/newsroom/employer-offered-educational-assistance-programs-can-help-pay-for-college</Link>
</div>
</div>


 </div>

</div>

<div id="targetSection8" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
    How to See Who Owes You in QuickBooks Online
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >What do you do first when you sign on to QuickBooks Online? The site opens to your Dashboard, which provides a quick overview of your company’s finances. It’s easy enough to branch out from there to take care of business, whether it’s paying bills or categorizing newly downloaded transactions from your bank or checking your account balances.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Those tasks are all important, but you probably don’t do all of them every time you have a QuickBooks Online session. One thing you should do frequently — every time you access the site, really — is check to see who you owe and who owes you. We’re going to focus on the latter, because it has such an impact on your overall cash flow.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >QuickBooks Online provides several ways to ensure you’re getting paid for your goods and services and to identify any late payments. This information is vital for understanding how your receivables compare to your payables, helping you determine whether you’re making a profit, breaking even, or losing money.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Here’s an overview of the tools available.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Dashboard Insight</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >QuickBooks Online’s Dashboard consists of three elements, accessible by clicking tabs. Home is just what it sounds like. It’s a home base for the most important numbers in your company file. Pay special attention to the Income widget (block of data). It gives you an abbreviated look at your open and overdue invoices and your incoming payments over the last 30 days.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5 ps-5 " style={{lineHeight:"30px",fontWeight:"200",color:"#28A54C"}} >TIP: Click the Customize layout bar if you want to move these widgets around to make them more prominent.</p>

</div>
<div className="mt-3" >
<img id="res" src="https://www.cpasitesolutions.com/content/newsletter/images/092024/DESKTOP-0924-image-1.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Click the next tab, Cash flow, and scroll down to MONEY IN. Here, you’ll see the current month’s Upcoming and Paid invoices in a graph, and a list of Overdue and Open invoices. You can create and view invoices here, too, and see a cash flow chart at the top of the page that goes six months both forward and back.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The Planner tab opens the more comprehensive Cash flow planner, displaying a 1 to 24-month interactive graphic based on transactions you’ve already entered in QuickBooks Online. (They’re listed below.) You can toggle between Money in/out and Cash balance. On both, you can move your cursor on the chart to see details from individual days and months. You can edit future transactions and add them to see what impact those actions would have on your cash flow.</p>
</div>
<div className="mt-3" >
  <div id="res" className="d-md-flex gap-2" >
<p className="h5" style={{lineHeight:"30px",fontWeight:"300",borderBottom:"1px solid black"}} >This does not change your QuickBooks Online data.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >It’s merely for demonstration</p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >purposes. You could see what would happen to your future cash flow if, for example, you planned to make a major purchase or expected to receive an influx of revenue.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >The Sales Page</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Your home base for checking on your outstanding cash is the Sales page. Hover over Sales in the toolbar and select All sales. This page provides a visual display of the status of your invoices as they travel through QuickBooks Online. Colored bars represent the five stages in the process: Estimates, Unbilled income, Overdue invoices, Open invoices and credits, and Recently paid.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Each shows you the dollar amount involved and sometimes the number of transactions. So you can see instantly what needs to be moved along and whether you need to nudge a customer to pay. Click any of these, and the list of related transactions appears below.</p>
</div>
<div className="mt-3" >
<img id="res" src="https://www.cpasitesolutions.com/content/newsletter/images/092024/DESKTOP-0924-image-2.png" ></img>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The list is interactive. That is, there’s an Action column at the end of each row that tells you what your action options are for that particular transaction. For example, for Unbilled income, you can View/Edit, View activity, and Create invoice. You can also print the list and export it to Excel.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Detailed Reporting</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To gain a deeper understanding of who owes you money, run detailed reports in QuickBooks Online. Click Reports in the toolbar and scroll to the Who owes you section. Here, you’ll find a variety of pre-formatted reports that can be customized to suit your needs and should be run regularly, depending on your business volume.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The A/R Aging Summary report, for example, shows which customers have current balances and which are overdue by 1-30, 31-60, 61-90, or 91+ days. You can customize this report further by selecting options like Report period, Aging method, and Days per aging period. Other key reports include Open Invoices, Unbilled Time, Unbilled Charges, and Customer Balance Summary, which collectively provide a comprehensive view of your receivables.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >In addition to these, advanced financial reports like the Statement of Cash Flows, Profit and Loss, and Balance Sheet are crucial for assessing your overall financial health. These reports should be generated monthly or quarterly.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Contact the office anytime, including if you need:</p>
</div>
<ul>
  <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Assistance running and analyzing financial reports to ensure you have a complete understanding of your financial status, especially if you’re applying for a loan or seeking investors.</li>
  <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Advice on managing your receivables — or if your cash flow has grown troubling.</li>
  <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Help understanding the ways QuickBooks Online can assist as you explore the flow of your incoming revenue and try to accelerate it.</li>
</ul>

 </div>

</div>
<div id="targetSection9" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
 Upcoming Tax Due Dates
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> September 16</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Pay the third installment of 2024 estimated taxes (Form 1040-ES), if not</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> paying income tax through withholding or not paying sufficient income tax through withholding.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year corporations:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Pay the third installment of 2024 estimated income</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >taxes, completing Form 1120-W for the corporation’s records.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year S corporations:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 income tax return (Form 1120-S) and</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >provide each shareholder with a copy of Schedule K-1 (Form 1120S) or a substitute Schedule K-1 if an automatic six-month extension was filed. Pay any tax, interest and penalties due.</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year S corporations:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Make contributions for 2023 to certain employer-</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >sponsored retirement plans if an automatic six-month extension was filed.</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit Social Security, Medicare and withheld income taxes for August</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >if the monthly deposit rule applies.</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withheld income tax for August if the monthly</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >deposit rule applies.</p>

</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >September 30</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year trusts and estates: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >File a 2023 income tax return (Form 1041) if an</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >automatic five-and-a-half-month extension was filed. Pay any tax, interest and penalties due.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >October 10</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report September tip income of $20 or more to employers (Form 4070).</p>
</div>
</div>
<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>



</div>




}


