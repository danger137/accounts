"use client"
import Link from "next/link";

import { useRouter } from "next/navigation";




export default function Feb(){
  
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
<div id="sh2" className="mt-3 p-2 d-flex justify-content-center align-items-center">
  <p className="h3" style={{fontWeight: "500", lineHeight: "30px", color: "#0078A5"}}>
  February 2024
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
Traveling for Business in 2024? What's Deductible?
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
  >How to Secure a Tax Benefit with the QBI Deduction </Link>
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
    }} >Tracking Down Donation Substantiation</Link>
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
There May Still Be Time to Lower Your 2023 Tax Bill</Link>
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
    }} >Deductions vs. Credits: What's the Difference?</Link>
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
    }} >ERC Voluntary Disclosure Program Available for a <br></br>Limited Time</Link>
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
Customers Paying Late? Consider Finance Charges
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
Traveling for Business in 2024? What's Deductible?
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you and your employees will be traveling for business this year, there are many factors to keep in mind. Under the tax law, certain requirements for out-of-town business travel within the United States must be met before you can claim a deduction. The rules apply if the business conducted reasonably requires an overnight stay.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Note: Under the Tax Cuts and Jobs Act, employees can't deduct their unreimbursed travel expenses through 2025 on their own tax returns. That's because unreimbursed employee business expenses are "miscellaneous itemized deductions" that aren't deductible through 2025. Self-employed individuals can continue to deduct business expenses, including away-from-home travel expenses.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Rules That Come Into Play</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The actual costs of travel (for example, plane fare and cabs to the airport) are generally deductible for out-of-town business trips. You're also allowed to deduct the cost of lodging. And a percentage of your meals is deductible even if the meals aren't connected to a business conversation or other business function. For 2024, the law allows a 50% deduction for business meals. No deduction is allowed for meal or lodging expenses that are "lavish or extravagant," a term that generally means "unreasonable." Also, personal entertainment costs on trips aren't deductible, but business-related costs such as those for dry cleaning, phone calls and computer rentals can be written off.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Mixing Business With Pleasure</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Some allocations may be required if the trip is a combined business/pleasure trip; for example, if you fly to a location for four days of business meetings and stay on for an additional three days of vacation. Only the costs of meals, lodging and so on incurred during the business days are deductible, not those incurred for the personal vacation days.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >On the other hand, with respect to the cost of the travel itself (for example, plane fare), if the trip is primarily for business purposes, the travel cost can be deducted in its entirety and no allocation is required. Conversely, if the trip is primarily personal, none of the travel costs are deductible. An important factor in determining if the trip is primarily business or personal is the amount of time spent on each (though this isn't the sole factor).</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Suppose a trip isn't for the actual conduct of business but is for the purpose of attending a convention or seminar. The IRS may check the nature of the meetings carefully to make sure they aren't vacations in disguise, so retain all material helpful in establishing the business or professional nature of this travel.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Also, personal expenses you incur at home related to the trip aren't deductible. This might include costs such as boarding a pet while you're away.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Is Your Spouse Joining You?</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The rules for deducting the costs of a spouse who accompanies you on a business trip are very restrictive. No deduction is allowed unless the spouse is an employee of yours or of your company. If that isn't the case, then even if there's a bona fide business purpose for having your spouse make the trip, you probably won't be able to fully deduct his or her travel costs (though you can deduct some costs).</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Specifically, the restrictions apply only to additional costs incurred by having your non-employee spouse travel with you. For example, the expense of a hotel room or for traveling by car would likely be fully deductible since the cost to rent the room or to travel alone or with another person would be the same, even in a rented car.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Before You Hit the Road</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Contact the office with any questions you may have about travel deductions to help you stay in the right lane.</p>
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
How to Secure a Tax Benefit with the QBI Deduction
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >QBI may sound like the name of a TV quiz show. But it's actually the acronym for "qualified business income," which can trigger a tax deduction for some small business owners or self-employed individuals. The QBI deduction was authorized by the Tax Cuts and Jobs Act (TCJA), and it took effect in 2018.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >How It Works</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >The deduction is still available to owners of pass-through entities - such as S corporations, partnerships and limited liability companies - as well as self-employed individuals. But it is scheduled to expire after 2025 unless Congress acts to extend it.</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > The maximum deduction is equal to 20% of QBI. Generally, QBI refers to your net profit, excluding capital gains and losses, dividends and interest income, employee compensation and guaranteed payments to partners. The deduction can be claimed whether or not you itemize.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Notably, the QBI deduction is subject to a phaseout based on your income. If your total taxable income is below the lowest threshold, you may be entitled to the full 20% deduction, although other limitations do apply:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >For 2023, the thresholds are $182,100 for single filers and $364,200 for joint filers.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >For 2024, the thresholds are $191,950 for single filers and $383,900 for joint filers.</li>
</ul>

</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >But things get tricky if your income exceeds the applicable threshold. In that case, your ability to claim the QBI deduction depends on the nature of your business.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Specifically, the rules are different for regular business owners of pass-through entities, sole proprietors and those who are in "specified service trades or businesses" (SSTBs). This covers most businesspeople who provide personal services to the public, such as physicians, attorneys, financial planners and accountants. (Engineers and architects are excluded.) Professionals in this group forfeit the QBI deduction entirely if income exceeds another set of limits:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For 2023, these upper limits are $232,100 for single filers and $464,200 for joint filers.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For 2024, these upper limits are $241,950 for single filers and $483,900 for joint filers.</li>
</ul>

</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If your income falls between the thresholds stated above, your QBI deduction may be reduced, regardless of whether you're in an SSTB or not. For taxpayers who are in SSTBs, the deduction is phased out until it disappears at the upper income threshold. For other taxpayers, the deduction is limited to the lesser of 20% of QBI or the greater of 1) 50% of the wages paid to employees on W-2s, or 2) 25% of wages plus 2.5% of the unadjusted basis of the qualified property owned by the business.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Available for a Limited Time</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The QBI deduction provides a valuable tax break for small business owners, so if it expires, their taxes are likely to go up. It's unclear at this time what the chance is of the deduction being extended. Contact the office for guidance in determining the best strategy for your personal situation.</p>
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
Tracking Down Donation Substantiation
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> If you're like many Americans, your mailbox may have been filling up in recent weeks with letters from your favorite charities acknowledging your 2023 donations. But what happens if you haven't received such a letter for a contribution? Can you still claim a deduction on your 2023 income tax return for the gift? It depends.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> What's Required</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>To support a charitable deduction, you need to comply with IRS substantiation requirements. This generally includes obtaining a contemporaneous written acknowledgment from the charity stating the amount of the donation if it's cash. If the donation is property, the acknowledgment must describe the property, but the charity isn't required to provide a value. The donor must determine the property's value.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> "Contemporaneous" means the earlier of the date you file your tax return or the extended due date of your return. So, if you donated in 2023 but haven't yet received substantiation from the charity, it's not too late, as long as you haven't filed your 2023 return. Contact the charity and request a written acknowledgment.</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Keep in mind that, if you made a cash gift of under $250 with a check or credit card, generally a canceled check, bank statement or credit card statement is sufficient to support your donation. However, if you received something in return for the donation, you generally must reduce your deduction by its value and the charity is required to provide you a written acknowledgment as described earlier, listing the value of the item you received.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}}>Itemized Deductions or Standard?</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> You may remember that in recent tax years (2020 and 2021) there was a special provision of tax law that allowed taxpayers who take the standard deduction on their tax returns to claim a limited deduction.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>Many people don't realize that this provision wasn't reauthorized for subsequent years. Since the tax break has expired, it's no longer available to nonitemizers. So, to deduct your charitable donations, you must opt to itemize deductions on your tax return, rather than taking the standard deduction.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Ask Questions</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >If you aren't sure about some of your donations, contact the office for answers to your questions and help determining whether you have sufficient substantiation for the donations you hope to deduct on your 2023 return. It's also important to have the substantiation you'll need for charitable gifts you're planning this year to ensure you can enjoy the desired deductions when you file your 2024 tax return.</p>
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
  There May Still Be Time to Lower Your 2023 Tax Bill
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you're preparing to file your 2023 tax return, you may still be able to lower your tax bill - or increase your refund. If you qualify, you can make a deductible contribution to a traditional IRA right up until the original filing deadline, April 15, 2024, and see tax savings on your 2023 return.</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > For eligible taxpayers, the 2023 contribution limit has increased to $6,500, or $7,500 for taxpayers aged 50 and up on Dec. 31, 2023. If you're a small business owner, you can establish and contribute to a Simplified Employee Pension (SEP) plan up to the extended due date of your return. The maximum SEP contribution you can make for 2023 is $66,000.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >What determines eligibility? To make a fully deductible contribution to a traditional IRA, you (and your spouse, if you're married) must not be active participants in an employer-sponsored retirement plan or, if you are, your 2023 modified adjusted gross income (MAGI) must not exceed the applicable limits:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For single taxpayers covered by a workplace plan, $73,000 (partial deduction available up to $83,000 MAGI).</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For a married couple filing jointly, where the spouse making IRA contributions is covered by a workplace plan, $116,000 (partial deduction available up to $136,000 MAGI).</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If the spouse making the IRA contributions isn't covered by a workplace plan but his or her spouse is, $218,000 (partial deduction available up to $228,000 MAGI).</li>
</ul>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For married couples filing separately, where at least one spouse is covered by a workplace plan, the ability to deduct IRA contributions is extremely limited.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Contact the office if you want more information about this important topic to help you save the maximum tax-advantaged amount for retirement.</p>
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
Deductions vs. Credits: What's the Difference?
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >One of the most common misunderstandings about filing an income tax return is the difference between deductions and credits. Deductions reduce the amount of a taxpayer's income before tax is calculated. For example, on your individual return, you can either take the standard deduction or itemize deductions, if it will reduce your taxable income more. Credits, on the other hand, reduce the actual tax due, dollar-for-dollar, generally making them more valuable than deductions.</p>

</div>
<div className="mt-3" >

<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}  >For example, the tax savings from a $1,000 deduction would depend on your tax bracket; it would save you $150 if you're in the 15% tax bracket but it would save you $350 if you're in the 35% tax bracket. A $1,000 credit, on the other hand would save you $1,000 in taxes regardless of your tax bracket. (These examples assume no income-based phaseout or limit applies to the deduction or credit.)</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Some credits, such as the Child Tax Credit, are partially or fully refundable. This means that if a taxpayer's tax liability is less than the amount of the credit, the taxpayer can possibly receive the difference as a refund.</p>

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
ERC Voluntary Disclosure Program Available for a Limited Time
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >As part of an ongoing initiative to combat questionable Employee Retention Credit (ERC) claims, the IRS has launched a voluntary disclosure program. It allows eligible businesses to pay back money they received after filing ERC claims in error.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > The disclosure program runs through March 22, 2024, and requires only 80% of the claim received to be repaid. It's part of a larger IRS effort to stop aggressive marketing around the ERC that misled some employers into filing claims they were ineligible for.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The IRS has another program that allows employers to withdraw pending ERC claims with no interest or penalty. More than $100 million in withdrawals has already been received.</p>
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
Customers Paying Late? Consider Finance Charges
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Now that we're past the holidays and you've had January to catch up on the December work that didn't get done, how's your financial workflow? Are you caught up on bills and invoices?</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >You may be, but your customers might not be. You can find out by creating an Open Invoices report (Reports | Customers & Receivables) and looking in the Aging column to see how many days invoices are past due.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Some ways you can encourage your customers to pay faster include:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Allowing them to pay using credit cards and bank transfers,</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Sending invoices immediately after a sale, and</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Offering a premium for paying bills on time 12 months in a row, like a discount on future sales.</li>
</ul>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >There's another tool in your QuickBooks toolbox: finance charges.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Laying the Groundwork for Finance Charges</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Before you can start charging customers late fees, you have some setup work to do. Open the Edit menu and select Preferences. Scroll down and click Finance Charges, then Company Preferences.</p>
</div>
<div className="mt-3" >
<img id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/022024/DESKTOP-0224-image-1.jpg" ></img>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >There are several questions you'll have to answer, including:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >What will you charge as an annual interest rate?</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >What will your minimum finance charge be?</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >How long will the grace period be? How many days can pass before the finance charges kick in? 15-21 days is typical.</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >When you collect interest on past-due payments, where should the funds go? In the above example, we've selected Other Income.</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Do you plan to assess finance charges on overdue finance charges? You'll need to find out what your local laws are. In some jurisdictions, you're limited on what interest you can charge on overdue finance charges.</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Will you calculate charges from the due date or invoice/billed date? When do you want QuickBooks to consider that a payment is past due and eligible for finance charges?</li>
    </ul>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >How Are Finance Charges Billed?</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >You may be accustomed to seeing finance charges included on a bill. QuickBooks doesn't work this way. You'll have to print separate invoices for finance charges alone. If you want to use this option, check the box in front of Mark finance charge invoices "To be printed." If you leave that box blank, finance charges will appear on each customer's next statement. So if you don't send statements on a regular basis, it's best to let the charges be printed separately. Click OK when you're done with this window.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Not sure when statements should be sent or how to create them in QuickBooks? Contact the office for guidance.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >How Do You Assess Finance Charges?</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >When you're ready to see who owes interest on late payments, open the Customers menu and click Assess Finance Charges. QuickBooks will open a window like the one pictured below. Be sure the date showing at the top is the actual Assessment Date, which may or may not be the current date. Create a checkmark in the first column in front of all the customers who should receive finance charges.</p>
</div>
<div className="mt-3" >
<img id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/022024/DESKTOP-0224-image-2.jpg" ></img>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Two buttons at the bottom of this window open the Settings page from QuickBooks' Preferences and the Collection History for individual customers. As you did before, check the box in front of Mark invoices "To be printed" if you want QuickBooks to print individual invoices for these finance charges. When you're ready, click Assess Charges.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you're going to allow the charges to be included in the customers' next statements, you don't have to do anything else for now. But if you want to print the finance charge invoices, open the File menu and click Print Forms | Invoices. The window that opens will display any invoices you have specified "To be printed." In the number (NO) column, any entry that begins with FC is a finance charge invoice. Put a checkmark in front of any invoice that you want to print, then click OK.</p>
</div>
<div className="mt-3" >
<img id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/022024/DESKTOP-0224-image-3.jpg" ></img>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Warn Your Customers</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Be sure you notify your customers in advance if you plan to start assessing finance charges. Don't just drop a note in the customer message field. Send an email, or print and send a document, that spells out the terms and conditions, the amount of interest that will be charged, and the grace period. Remember to check with the appropriate jurisdiction to make sure you understand the laws before you begin.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >As mentioned earlier, there are many ways you can encourage customers to pay faster, and finance charges may not be the best fit for your company. But if you'd like to get them set-up in QuickBooks, don't hesitate to contact the office for help.</p>
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
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> February 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a new Form W-4 to continue exemption for another year if you</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> claimed exemption from federal income tax withholding in 2023.</p>
</div>

<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Businesses: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Provide Form 1099-B, 1099-S and certain Forms 1099-MISC (those in</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>which payments in Box 8 or Box 10 are being reported) to recipients.</p>
</div>

<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit Social Security, Medicare and withheld income taxes for January </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>if the monthly deposit rule applies</p>
</div>

<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withheld income tax for January if the monthly</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>deposit rule applies.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> February 28</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Businesses: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File Form 1098, Form 1099 (other than those with a January 31 deadline),</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>Form W-2G and transmittal Form 1096 for interest, dividends and miscellaneous payments made during 2023. (Electronic filers can defer filing to April 1.)</p>
</div>


<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >March 11</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report February tip income of $20 or more to employers (Form 4070).</p>
</div>
</div>


<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>





</div>




}



