"use client"
import Link from "next/link";
import "./june.css";
import { useRouter } from "next/navigation";



export default function June(){

  let move = useRouter();
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
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Previous Newsletters</p>

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
                                              {/* <i 
                        className="fa-solid fa-lock mt-2"
                        style={{ cursor: 'pointer' }} // To indicate the icon is clickable
                        onClick={()=>{
                          move.push("/Login2");
                        }}
                      ></i> */}
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

      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
      This Month's Newsletter
      </li>

      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
      Previous Newsletters
      </li>

      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
      Today's News and Weather
      </li>

 

      <li className="h5 mt-5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        Quick Links:
      </li>

      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
        Financial Calculators
      </li>
      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
        Send Us A File
      </li>
      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
        Track Your Refund
      </li>
      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
        IRS Tax Forms
      </li>
      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
        State Tax Forms
      </li>
      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
        Tax Due Dates
      </li>
    </ul>
  </div>
  
  <div className="mt-3 text-center text-md-start"  >
  <div>
  <p
    className="h6"
    style={{
      fontWeight: "400",
      lineHeight: "20px",
      width: "100%", // Default to full width
      maxWidth: "480px", // Maximum width for larger screens
      margin: "0 auto", // Center text
    }}
  >
    Miss last month's newsletter? No problem. We keep the last 6 months of newsletters here for you to read.
  </p>
</div>

     {/* Center text on small screens and align left on medium and larger screens */}
  <ul className="list-unstyled mt-5 ">

 <div>
 
<div style={{borderBottom: "2px solid #0078A5"}} >
<div id="sh4" className="mt-3 d-flex justify-content-center align-items-center">
  <p className="h3" style={{fontWeight: "500", lineHeight: "30px", color: "#0078A5"}}>
  June 2024
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
Does the Corporate Transparency Act Apply to Your <br></br> Business?
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
  >What Expenses Can't Be Written Off by Your <br></br> Business? </Link>
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
    }} >Sending the Kids to Day Camp May Bring a Tax <br></br> Break</Link>
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
    }} >
Help Prevent Financial Scams Aimed at Older <br></br> People</Link>
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
    }} >Boost Your Home Improvements with Tax Credits</Link>
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
    }} >Tax Breaks for Increasing Accessibility</Link>
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
Why You Should Be Using the Bill Pay Tools in <br></br>QuickBooks Desktop
  </Link>
</li>





</ul>




 </div>
  </ul>
</div>
<div className="mt-5" >
<div className="mt-5 text-center text-md-start d-none d-md-block" style={{borderLeft: "2px solid rgb(153, 153, 153)"}} > 
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
Does the Corporate Transparency Act Apply to Your Business?
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Under the Corporate Transparency Act (CTA), many businesses are subject to new reporting requirements that went into effect on January 1, 2024. That means certain companies are required to provide information related to their “beneficial owners,” that is, the individuals who ultimately own or control the company, to the Financial Crimes Enforcement Network (FinCEN). Failure to submit a beneficial ownership information (BOI) report may result in civil or criminal penalties, or both.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Subsequent Developments</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >On March 1, 2024, the U.S. District Court for the Northern District of Alabama ruled that the CTA is unconstitutional. Does that mean that businesses no longer need to comply? Not necessarily. The federal government filed an appeal on March 11, 2024, in the U.S. Court of Appeals for the 11th Circuit. That same day, FinCEN announced that the law’s requirements are still in effect for those not involved in the court case.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >“While this litigation is ongoing, FinCEN will continue to implement the Corporate Transparency Act as required by Congress, while complying with the court’s order,” FinCEN stated. “Other than the particular individuals and entities subject to the court’s injunction … reporting companies are still required to comply with the law and file beneficial ownership reports as provided in FinCEN’s regulations.”</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >More About the CTA</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The CTA is intended to curb illicit finance, including terrorist financing, money laundering and other illegal activities. But it could also open the door to the inspection of family offices, investment angels and other private individuals who may have been shielded from scrutiny in the past.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The CTA’s rules generally apply to both domestic and foreign privately held reporting companies. For these purposes, a reporting company includes any corporation, limited liability company or other legal entity created through documents filed with the appropriate state authorities. A foreign entity includes any private entity formed in a foreign country that is properly registered to do business in the United States.</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The complete list of entities that are exempt from the reporting rules is too lengthy to include here, ranging from government units to not-for-profit organizations to insurance companies and more. Notably, an exemption was created for a “large operating company” that employs more than 20 persons on a full-time basis, has more than $5 million in gross receipts or sales (not including receipts and sales from foreign sources), and physically operates in the United States. However, many of these companies already must meet other reporting requirements providing comparable information.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If an entity initially qualifies for the large operating company exemption but subsequently falls short, it must then file a BOI report. On the other hand, an entity that might not currently qualify for an exemption can update its status with FinCEN to potentially gain exemption status.</p>
</div>
<div className="mt-3" >
 
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Compliance Deadlines</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The deadline to comply depends on the entity’s date of formation. Reporting companies created or registered prior to January 1, 2024, have one year to comply by filing initial reports. Those created or registered on or after January 1, 2024, but before January 1, 2025, will have 90 days upon receipt of their creation or registration documents to file their initial reports. Entities created or registered on or after January 1, 2025, will have 30 days upon receipt of their creation or registration documents to file their initial reports.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > But stay tuned for more developments as the CTA case noted above goes through the appeals process. There could be other litigation as well, or Congress could make changes to the law.</p>
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
What Expenses Can't Be Written Off by Your Business?
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you check the Internal Revenue Code, you may be surprised to find that most business deductions aren’t specifically listed there. For example, the tax law doesn’t explicitly state that you can deduct office supplies and certain other expenses. Some expenses are detailed in the tax code, but the general rule is contained in the first sentence of Section 162, which states you can write off “all the ordinary and necessary expenses paid or incurred during the taxable year in carrying on any trade or business.”</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Basic Definitions</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > In general, an expense is ordinary if it’s considered common or customary in the particular trade or business. For example, insurance premiums to protect a store would be an ordinary business expense in the retail industry.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > A necessary expense is one that’s helpful or appropriate. For example, a car dealership may purchase an automatic defibrillator. It may not be necessary for the business operation, but it might be helpful if an employee or customer suffers a heart attack. It’s possible for an ordinary expense to be unnecessary. But to be deductible, an expense must be ordinary and necessary.</p>
</div>
<div className="mt-3" >

<p id="res" className="h4" style={{lineHeight:"30px",fontWeight:"300"}} > A deductible amount must be reasonable in relation to the benefit expected. For example, if you’re attempting to land a $3,000 deal, a $65 lunch with the potential client should be OK with the IRS. (The Tax Cuts and Jobs Act eliminated most deductions for entertainment expenses but retained a 50% deduction for business meals.)</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} > How the Courts May View Expenses</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > The deductibility of some expenses is clear, while others are more complicated. Not surprisingly, the IRS and courts don’t always agree with taxpayers about what is ordinary and necessary. To illustrate, here are three recent U.S. Tax Court cases in which specific taxpayer deductions were disallowed:</p>
</div>
<div className="mt-3" >
<ul style={{listStyleType:"none"}} >
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >1. A married couple owned an engineering firm. For two tax years, they claimed depreciation of $76,264 on three vehicles, but didn’t provide required details, including each vehicle’s ownership, cost and useful life. They claimed $34,197 in mileage deductions and provided receipts and mileage logs, but the court found they didn’t show related business purposes. The court also found the mileage claimed included commuting costs, which can’t be written off. The court disallowed these deductions and assessed taxes and penalties. (TC Memo 2023-39) </li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >2. The court ruled that a married couple wasn’t entitled to business tax deductions because the husband’s consulting company failed to show that it was engaged in a trade or business. In fact, invoices produced by the consulting company predated its incorporation. And the court ruled that even if the expenses were legitimate, they weren’t properly substantiated. (TC Memo 2023-80)</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >3. A physician specializing in gene therapy deducted legal expenses of $360,295 for two years on Schedule C of his joint tax returns. The court found that most of the legal fees were to defend the husband against personal conduct issues. The court denied the deduction for personal legal expenses but allowed a deduction for $13,000 for business-related legal expenses. (TC Memo 2023-42)  </li>
</ul>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >These cases and others should show the importance of maintaining careful, detailed records. Make sure that only business costs are claimed.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Proceed with Caution!</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If an expense seems like it’s not normal in your industry or could be considered personal or extravagant, proceed with caution. Contact the office with questions about deductibility and proper documentation.</p>
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
     Sending the Kids to Day Camp May Bring a Tax Break
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> Among the many challenges of parenthood is childcare for kids when school lets out. Babysitters are one option, or you might consider sending them to a day camp. There’s no one-size-fits-all answer, but if you do choose a day camp, you could be eligible for a tax break. (Unfortunately, overnight camps don’t qualify.)</p>
</div>
<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Dollar-for-dollar Savings</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Day camp can be a qualified expense under the child and dependent care tax credit. The credit is worth 20% to 35% of the qualifying costs, subject to an income cap. The maximum amount of expenses that can be claimed is $3,000 for one qualifying child or $6,000 for two or more children, multiplied by the percentage that applies to your income level.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> For those qualifying for the 35% rate with maximum expenses of $3,000, the credit equals $1,050, or $2,100 for two children with expenses of at least $6,000. The applicable credit percentage drops as adjusted gross income (AGI) rises. When AGI exceeds $43,000, the percentage is 20% of qualified expenses, subject to the $3,000 or $6,000 limit.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> Tax credits are particularly valuable because they reduce your tax liability dollar-for-dollar, that is, $1 of tax credit saves $1 of taxes. This is compared to deductions, which simply reduce the amount of income subject to tax. So, if you’re in the 24% tax bracket, a $1 deduction saves you only $0.24 of taxes.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Qualifying for the Credit</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Only dependents under age 13 generally qualify. However, the credit may also be claimed for expenses paid to care for a dependent relative, such as an in-law or parent, who is incapable of self-care. Eligible care costs are those incurred while you work or look for wor</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Expenses paid from, or reimbursed by, an employer-sponsored Flexible Spending Account can’t be used to claim the credit. The same is true for a dependent care assistance program.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400",}} >Determining Eligibility</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Additional rules apply to this credit. Contact the office if you have questions about your eligibility for the credit and the exceptions.</p>
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
   Sending the Kids to Day Camp May Bring a Tax Break
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Among the many challenges of parenthood is childcare for kids when school lets out. Babysitters are one option, or you might consider sending them to a day camp. There’s no one-size-fits-all answer, but if you do choose a day camp, you could be eligible for a tax break. (Unfortunately, overnight camps don’t qualify.)</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Dollar-for-dollar Savings</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Day camp can be a qualified expense under the child and dependent care tax credit. The credit is worth 20% to 35% of the qualifying costs, subject to an income cap. The maximum amount of expenses that can be claimed is $3,000 for one qualifying child or $6,000 for two or more children, multiplied by the percentage that applies to your income level.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For those qualifying for the 35% rate with maximum expenses of $3,000, the credit equals $1,050, or $2,100 for two children with expenses of at least $6,000. The applicable credit percentage drops as adjusted gross income (AGI) rises. When AGI exceeds $43,000, the percentage is 20% of qualified expenses, subject to the $3,000 or $6,000 limit.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Tax credits are particularly valuable because they reduce your tax liability dollar-for-dollar, that is, $1 of tax credit saves $1 of taxes. This is compared to deductions, which simply reduce the amount of income subject to tax. So, if you’re in the 24% tax bracket, a $1 deduction saves you only $0.24 of taxes.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Qualifying for the Credit</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Only dependents under age 13 generally qualify. However, the credit may also be claimed for expenses paid to care for a dependent relative, such as an in-law or parent, who is incapable of self-care. Eligible care costs are those incurred while you work or look for work.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Expenses paid from, or reimbursed by, an employer-sponsored Flexible Spending Account can’t be used to claim the credit. The same is true for a dependent care assistance program.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Determining Eligibility</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Additional rules apply to this credit. Contact the office if you have questions about your eligibility for the credit and the exceptions</p>
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
  Help Prevent Financial Scams Aimed at Older People
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >In any season, scam artists are seeking new ways to steal financial data and money from vulnerable people. Such fraudulent activities often target older adults. Here are three ways to help prevent elder financial abuse and fraud, whether you’re in this age bracket or you share them with senior loved ones:</p>

</div>
<div className="mt-3" >
<ul style={{listStyleType:"none"}} >
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >1. Exercise caution when making financial decisions. If someone exerts pressure or promises unreasonably high or guaranteed returns, walk away. </li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >2. Be alert for phony phone calls. The IRS doesn’t collect money this way. Another scam involves someone pretending to be a grandchild who’s in trouble and needs money. Don’t provide confidential information or send money until you can verify the caller’s identity. </li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >3. Beware of emails requesting personal data, even if they appear to be from a real financial institution. Remember, your banker or financial professional already has your personal information. Ignore contact information provided in emails. Instead, contact financial institutions through phone numbers you look up yourself. </li>
</ul>

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
Boost Your Home Improvements with Tax Credits
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >For many homeowners, summer means it’s time to tackle home improvement projects. By investing in certain energy-efficient updates, taxpayers not only can lower their power bills but also can score some tax breaks.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > The Energy Efficient Home Improvement Credit equals 30% of qualified expenses (up to $3,200) incurred to improve a home after Jan. 1, 2023. Examples include insulation and exterior doors or windows.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The Residential Clean Energy Credit is equal to 30% of qualified property installed in a U.S. home from 2022 through 2032. Examples include solar electric panels, solar water heaters and wind turbines.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Additional rules and limits apply to these credits. Here’s more:</p>

</div>
<div id="res" className="mt-3" >
<Link id="res" href={"https://www.irs.gov/newsroom/irs-home-improvements-could-help-taxpayers-qualify-for-home-energy-credits"}  className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >https://www.irs.gov/newsroom/irs-home-improvements-could-help-taxpayers-qualify-for-home-energy-credits</Link>

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
  Tax Breaks for Increasing Accessibility
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Certain small business owners may qualify for tax breaks by making their premises accessible to people with disabilities. The CDC reports that 61 million people in the United States are affected by disabilities.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The Disabled Access Credit is a nonrefundable credit for up to 50% of eligible access expenditures made by qualifying small businesses in each year the costs are incurred. Also available is a barrier removal tax deduction when a business removes an architectural barrier and the removal improves access for persons with disabilities and the elderly.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Both tax benefits can be used in the same year if the requirements are met. To learn more:</p>

</div>
<div id="res" className="mt-3" >
<Link href={" https://www.irs.gov/newsroom/tax-benefits-to-help-offset-the-cost-of-making-businesses-accessible-to-people-with-disabilities"}  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > https://www.irs.gov/newsroom/tax-benefits-to-help-offset-the-cost-of-making-businesses-accessible-to-people-with-disabilities</Link>

</div>


 </div>

</div>
<div id="targetSection10" className="d-md-flex justify-content-center">
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
 Why You Should Be Using the Bill Pay Tools in QuickBooks Desktop
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Thirty years ago, we didn’t have a choice: We either mailed off checks immediately or put the paper bills in a folder or on a stack. Maybe we marked their due dates on a calendar or clipped them to calendar pages a few days before the due date so we wouldn’t forget.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >But we sometimes forgot anyway, especially if we didn’t have a system for organizing our accounts payable. When this happened, it could lead to late fees and uncomfortable relationships with the people and companies to whom we owed money.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >These days, of course, you may pay your bills directly on the website of your biller or your bank. You still need to keep track of when they’re due (for example, by making a notation in Google Calendar or Outlook) and you must remember that you paid them.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >QuickBooks can prevent problems associated with fulfilling your accounts payable obligations. You can enter bills when they come in, get reminders of upcoming due dates, and either mark the bills as paid or pay them online, directly from the software. There’s really no downside.
Here’s how it works</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Set Reminders First</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The first reason you should be using QuickBooks to manage your AP is because it won’t let you miss a bill payment (as long as you follow through the process). It does this by allowing you to set up Reminders. You can use these for all kinds of actions that you want to schedule, like printing checks and reordering inventory. Open the Edit menu and select Preferences, then Reminders. Click the My Preferences tab and check the box in front of Show Reminders List when opening a Company file. Then click the Company Preferences tab.</p>

</div>
<div className="mt-3" >
<img  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/062024/DESKTOP-0624-image-1.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Bills to Pay is near the bottom of the list. You can click in the columns to request a Summary or List of upcoming bills and enter a number in front of days before due date. Click OK when you’re done with this window.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Enter Bills Second</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The second reason you should be using QuickBooks’ to manage AP is because you’ll have records of the bills themselves and of their payments, all of them, in one place.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Before you can pay bills, you’ll have to record them. Open the Vendors menu and click Enter Bills. In the window that opens, you’ll need to select a Vendor from the drop-down list and complete the fields in the top half of the window to match your bill. These include Date, Terms, and Amount. The other fields are optional or will fill in automatically. Check the box in front of Bill Received if applicable. If you want a scanned copy of the bill available, click Attach File in the toolbar and select it from your PC’s directory.</p>

</div>
<div className="mt-3" >
<img id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/062024/DESKTOP-0624-image-2.png"  ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The bottom half of the window displays a table with two tabs. If your bill is for an expense, such as a utility bill, make sure the Expenses tab is highlighted. If it’s for products, click the Items tab. The Amount field will be filled in, but you’ll need to select an Account. If the bill is for products or services you’ve purchased on behalf of a customer, select the correct one from the drop-down list under Customer: Job and put a checkmark in the Billable field. When you’ve finished, save the bill.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Accessible and Organized</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >How do you find the bill you just entered? Open the Vendors menu and select Vendor Center. With the Vendors tab highlighted, click on the correct name to open their information window. The bill you just paid should be at the top of the list, along with all of that vendor’s other transactions.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you’ve never explored a vendor record, take some time to look around and see what you can see and do there. Vendor records give you a comprehensive look at your history with each vendor. Right-click on a name to see what your options are there, as pictured below.</p>

</div>
<div className="mt-3" >
<img  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/062024/DESKTOP-0624-image-3.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If a particular vendor is very active and this list grows too unwieldy, click the down arrow in the Show field in the upper left. You’ll be able to view individual transactions by type.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Convenient and Quick</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >What is the third reason you should be using QuickBooks for your bill-paying tasks? When it’s time to pay a bill, there’s no scrambling around, trying to find a piece of paper or an email. It’s a couple clicks away in the software.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you’re using QuickBooks 2021, you’ve probably noticed that some of your financial services have stopped working. As of May 31, Intuit stopped supporting that version, which means you also won’t get security updates or have access to technical support. If you’re in this position, contact the office as soon as possible to talk about your next moves.</p>

</div>


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
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> June 17</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 individual income tax return (Form 1040 or Form 1040-SR) or</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>  file for a four-month extension (Form 4868) if you live outside the United States and Puerto Rico or you serve in the military outside those two locations. Pay any tax, interest and penalties due.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Pay the second installment of 2024 estimated taxes (Form 1040-ES) if not</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >paying income tax through withholding or not paying sufficient income tax through withholding.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year corporations: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Pay the second installment of 2024 estimated income</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>  taxes, completing Form 1120-W for the corporation’s records.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit Social Security, Medicare and withheld income taxes for May if</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >the monthly deposit rule applies.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withheld income tax for May if the monthly deposit</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >rule applies.</p>
</div>
<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >July 10</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report June tip income of $20 or more to employers (Form 4070).</p>
</div>
</div>

<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>





</div>




}



