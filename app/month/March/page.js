"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";




export default function March(){
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
<div id="sh4" className="mt-3 d-flex justify-content-center align-items-center">
  <p className="h3" style={{fontWeight: "500", lineHeight: "30px", color: "#0078A5"}}>
  March 2024
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
Retirement Saving Options for Your Small Business
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
  >Hiring? How to Benefit from the Work Opportunity<br></br>Tax Credit </Link>
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
    }} >Have You Recently Reviewed Your Life Insurance <br></br>Needs?</Link>
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
A Strategy to Raise Your Medical Expense<br></br>Deduction</Link>
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
    }} >Handling Large Cash Transactions</Link>
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
    }} >Erroneous Refund</Link>
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
How Do You Set Up Users in QuickBooks?
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
Retirement Saving Options for Your Small Business
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you’re looking for a retirement plan for yourself and your employees but worried about the financial commitment and administrative burdens involved, there are some options to consider. One possibility is a Simplified Employee Pension (SEP). This plan, which comes with relative ease of administration and the discretion to make or not make annual contributions, is especially attractive for small businesses.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >There’s still time to see tax savings on your 2023 tax return by establishing and contributing to a 2023 SEP, right up to the extended due date of the return. For example, if you’re a sole proprietor who extends your 2023 Form 1040 to October 15, 2024, you have until that date to establish a SEP and make the initial contribution, which you can then deduct on your 2023 return.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >SEP Involves Easy Setup</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You can set up a SEP easily using the IRS model SEP, Form 5305-SEP. This form, which doesn’t have to be filed with the IRS, satisfies the SEP requirements. (You can opt for an individually designed SEP instead, depending on your needs.)</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >As the employer, you’ll get a current income tax deduction for contributions you make on behalf of your employees. Your employees won’t be taxed when the contributions are made but will be taxed later when distributions are made, usually at retirement.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > The maximum deductible contribution that you can make to a SEP-IRA, and that can be excluded from taxable income, is the lesser of: 1) 25% of compensation, or 2) $69,000 for 2024 (up from $66,000 for 2023) per employee. Note, however, that if you, as the business owner, don’t receive a W-2 from the business (for instance, you’re an unincorporated sole proprietor), the calculation for the contribution to be made on behalf of yourself varies slightly. The deduction for your contributions to employees’ SEP-IRAs isn’t limited by the deduction ceiling applicable to an individual’s own contribution to a regular IRA.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Your employees control their individual SEP IRAs and the investments in them as well as the tax-deferred earnings. However, they can’t contribute.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >There are other requirements you’ll have to meet to be eligible to establish and make contributions to a SEP. Essentially, all regular employees must elect to participate in the program, and contributions can’t discriminate in favor of highly compensated employees. But these requirements are minor compared to the bookkeeping and other administrative burdens connected with traditional qualified retirement and profit-sharing plans.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >SEPS don’t require the detailed records that traditional plans must maintain. Also, there are no annual reports to file with the IRS, and the recordkeeping that is required can be done by a trustee of the SEP-IRA, usually a bank or mutual fund.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Another Option: SIMPLEs</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If your business has 100 or fewer employees, you may want to consider a Savings Incentive Match Plan for Employees (SIMPLE). An advantage is that employees can also contribute. A disadvantage is that you, as the employer, are required to make certain annual contributions. Also, a SIMPLE has more limitations on when it can be set up and when it can be contributed to than a SEP.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You establish a SIMPLE IRA for each eligible employee, generally making matching contributions based on amounts elected by participating employees under a qualified salary reduction arrangement. The SIMPLE is also subject to much less stringent requirements than traditional qualified retirement plans.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Another option: An employer can adopt a SIMPLE 401(k) plan, with similar features to a SIMPLE IRA. It’s not subject to the otherwise complex nondiscrimination rules that apply to regular 401(k) plans.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For 2024, SIMPLE employee deferrals are limited to $16,000 (up from $15,500 for 2023). Additional $3,500 catch-up contributions are also allowed for employees ages 50 and older.</p>
</div>
<div className="mt-3" >
 
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >More Information</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Additional rules and limits apply to both SEPs and SIMPLEs. Contact the office for more information.</p>
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
Hiring? How to Benefit from the Work Opportunity Tax Credit
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you’re a business owner or manager who is seeking to hire, you should be aware of the details of a valuable tax credit for hiring individuals from one or more targeted groups. Employers can qualify for the Work Opportunity Tax Credit (WOTC), which is worth as much as $2,400 for most eligible employees (higher or lower for certain employees). The credit is limited to eligible employees who begin work for an employer before January 1, 2026.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Who is Eligible?</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Generally, an employer is eligible for the WOTC only for qualified wages paid to members of a targeted group. These groups are:</p>
</div>
<div className="mt-3" >
<ul style={{listStyleType:"none"}} >
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >1. Qualified members of families receiving assistance under the Temporary Assistance for Needy Families (TANF) program,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >2. Qualified veterans,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >3. Qualified ex-felons,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >4. Designated community residents,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >5. Vocational rehabilitation referrals,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >6. Qualified summer youth employees,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >7. Qualified members of families in the Supplemental Nutritional Assistance Program (SNAP),</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >8. Qualified Supplemental Security Income recipients</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >9. Long-term family assistance recipients, and</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >10. Long-term unemployed individuals.</li>
</ul>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > To claim the WOTC, an employer must first get certification that the person hired is a member of one of the targeted groups above. An employer can do so by submitting Form 8850, Pre-Screening Notice and Certification Request for the WOTC, to their state agency within 28 days after the eligible worker begins work.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >You Must Meet Certain Requirements</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >There are several requirements to qualify for the credit. For example, each employee must have completed a specific number of hours of service for the employer. Also, the credit isn’t available for employees who are related to or who previously worked for the employer.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >There are different rules and credit amounts for certain employees. The maximum credit available for first-year wages generally is $2,400 per employee. But it’s $4,000 for long-term family assistance recipients, and it’s $4,800, $5,600 or $9,600 for certain veterans. Additionally, for long-term family assistance recipients, there’s a 50% credit for up to $10,000 of second-year wages, resulting in a total maximum credit, over two years, of $9,000.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For summer youth employees, the wages must be paid for services performed during any 90-day period between May 1 and September 15. The maximum WOTC credit available for summer youth employees is $1,200 per employee.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >An eligible employer claims the WOTC on its federal income tax return. The credit value is limited to the business’s income tax liability.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >A Valuable Credit</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >There are additional rules and requirements. In some cases, employers may elect not to claim the WOTC. And in limited circumstances, the rules may prohibit the credit or require an allocation of it. However, for most employers hiring from targeted groups, the credit can be worthwhile. Contact the office with questions or for more information about your situation.</p>
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
Have You Recently Reviewed Your Life Insurance Needs?
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> At one time, life insurance played a much larger part in an estate plan than it does now. Why? Families would often use life insurance payouts to pay estate taxes. But with the federal gift and estate tax exemption at $13.61 million for 2024, far fewer families currently are affected by estate tax.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> However, life insurance remains a powerful tool to help provide for your loved ones in the event of your death. The amount of life insurance that’s right for you depends on your personal circumstances, so it’s critical to review your life insurance needs regularly in light of changing circumstances.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}>Reasons to Reevaluate</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> In addition to watching for changes to the estate tax exemption amount, consider reevaluating your insurance coverage if you’re:</p>
</div>
<div className="mt-3" >
<ul>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Buying a home or paying off a mortgage,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Getting married or divorced,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Having children,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Approaching retirement, or</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Facing health issues.</li>
</ul>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The right amount of insurance depends on your family’s current and expected future income and expenses, as well as the amount of income your family would lose should you pass away. The events listed above can change the equation, so it’s a good idea to revisit your life insurance needs as you reach these milestones. For example, if you have kids, your current and future obligations are likely to increase significantly for expenses related not only to providing for their needs on a day-to-day basis but also potentially for childcare and college tuition.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>As you get older, your expenses may go up or down, depending on your circumstances. For example, as your children become financially independent, they’ll no longer rely on you for financial support.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> On the other hand, your health care expenses may increase. When you retire, you’ll no longer have a salary, but you may have new sources of income from retirement plans and Social Security. You may or may not have paid off your mortgage, student loans or other debts. And you may or may not have accumulated sufficient wealth to provide for your family.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Periodic Reassessment a Must</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >There are many factors that affect your need for life insurance, and these factors change over time. To make sure you’re not over- or underinsured, reassess your insurance needs periodically, especially when your life circumstances change. Also keep in mind that, absent Congressional action, the gift and estate tax exemption will drop to an inflation-adjusted $5 million in 2026. Contact the office for assessing whether you have an adequate amount of life insurance coverage.</p>
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
   Payable-on-Death Accounts: Beneficial Tools if Used Correctly
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Payable-on-death (POD) accounts can be a quick, simple and inexpensive way to transfer assets outside of probate. They can be used for bank or credit union accounts, certificates of deposit and even brokerage accounts. Setting up such an account is as easy as providing the financial institution with a signed POD beneficiary designation form. Upon your death, your beneficiaries just need to present identification to the bank, with a certified copy of a death certificate, and the money or securities will be theirs.</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >  Be aware that POD accounts can backfire unless they’ve been coordinated carefully with your estate plan. For example, suppose Jack divides his assets equally among his three children in his will. He also sets up a POD account leaving $50,000 to his oldest child. That creates a conflict that may have to be resolved in court.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Another potential problem with POD accounts is that if you use them for most of your assets, the remaining assets may be insufficient to pay debts, taxes or other expenses. One way to bypass this problem is to use a POD account to hold a modest amount of funds to pay for pressing needs while your estate is administered.</p>
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
A Strategy to Raise Your Medical Expense Deduction
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >With a little planning, you may be able to boost your itemized medical expense deduction when you file your 2024 tax return next year. Only eligible expenses exceeding 7.5% of your adjusted gross income are deductible. It’s not an easy hurdle to clear, short of a major medical disaster, which, of course, you want to avoid. But you can use a strategy called “bunching” medical expenses to exceed the 7.5% threshold.</p>

</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Say, for example, that you’ve already scheduled surgery that will involve out-of-pocket expenses but you still fall short of the deductible threshold. Think about scheduling elective procedures, such as dental work or Lasik surgery, and making qualified purchases</p>
<Link href={"Topic no. 502, Medical and dental expenses | Internal Revenue Service (irs.gov)"} id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >[Topic no. 502, Medical and dental expenses | Internal Revenue Service (irs.gov)]</Link>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}  >that will push you over the threshold for the year.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Remember, only the expenses over that amount and that aren’t covered by insurance or paid through a tax-advantaged account will be deductible. Contact the office for help running the numbers.</p>

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
Handling Large Cash Transactions
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >A reminder for businesses: Within 15 days of a $10,000 transaction, you must use IRS Form 8300 to report the transactions. If you file electronically, forms are delivered to the Financial Crimes Enforcement Network. Paper forms are submitted to the IRS.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > You also generally should provide written statements to parties whose names you’ve reported by January 31 of the year following the transactions. However, if a transaction you report is suspicious, don’t provide a statement to the individual involved.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Although you aren’t required to file Form 8300 for cash transactions of less than $10,000, the IRS encourages you to report suspicious transactions of any amount.</p>
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
Erroneous Refund
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Mistakes happen. What if you receive a refund from the IRS that you’re not entitled to? Or what if you receive one that’s more than you’re entitled to? How you must handle it depends on the details. A paper check refund should be voided and returned within 21 days of receipt to the address in the link below. But suppose you cashed the check. In that case, submit a personal check within 21 days to that address.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If the refund was by direct deposit, contact your bank to have them return the deposit. Also contact the IRS at the phone number in the link. Be aware that if the IRS intentionally changed your refund amount from what was on the return you filed, it will mail you a notice of explanation.</p>
</div>

<div className="mt-3" >
<div id="res" className="d-md-flex gap-2 " >
<p  className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>You can find more information here:</p>
<Link  className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} href={"https://www.irs.gov/taxtopics/tc161"} >https://www.irs.gov/taxtopics/tc161</Link>
</div>

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
How Do You Set Up Users in QuickBooks?
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >It’s a necessity to ensure the safety of your critical accounting information when you grant employees access to QuickBooks. You trust your staff members, or you wouldn’t have hired them. But it’s just good business practice to protect your financial data as much as you can. After all, your company file contains details about your customers’ and vendors’ businesses that you must keep confidential.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >QuickBooks contains built-in tools for assigning user permissions to employees. Here’s how it works.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Setting Up Users</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >You’ll start by opening the Company menu and selecting Set Up Users and Passwords | Set Up Users. The User List window opens. You should see yourself listed as Admin. Click Add User. The window pictured below will open.</p>
</div>
<div className="mt-3" >
<img id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/032024/DESKTOP_0324_image1.png" ></img>
</div>
<div className="mt-3" >
<p id="res" className="h5 ps-5  " style={{lineHeight:"30px",fontWeight:"300",color:"#28A54C"}} >TIP: If you don’t know how many licenses you have, click F2 and look in the upper left corner. If you need to add a user to your QuickBooks license, go to Help | Manage My License | Buy Additional User License.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Enter a User Name and Password for your new user, then click Next to see what this individual’s access options are. You can choose from:</p>
</div>
<div className="mt-3" >
<ul>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >All areas of QuickBooks,</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Selected areas of QuickBooks (which will appear in the next window), or</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >External Accountant (access to all areas of QuickBooks except sensitive customer data, such as credit card numbers).</li>
</ul>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Click the button in front of Selected areas of QuickBooks, then click Next.</p>
</div>
<div className="mt-3" >
<img id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/032024/DESKTOP_0324_image2.png" ></img>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >As you can see, you have three options here: No Access, Full Access and Selective Access. If you go with Selected Access, indicate what the limitations are here. You’ll also have to decide whether this employee will be able to see complete customer credit card numbers.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5 text-center " style={{lineHeight:"30px",fontWeight:"300",color:"#28A54C"}} >WARNING: It goes without saying that you should consider two of these options very carefully. Generally, you as the Admin should be the only person who has Full Access and who can view complete customer credit card numbers. You should grant these permissions to an employee only if you trust the individual as much as you trust yourself. Even then, you should do some auditing.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Click Next when you’re done here. You’ll have to make similar decisions over the next several windows, which divide QuickBooks into multiple task types: Purchases and Accounts Payable, Checking and Credit Cards, Inventory, and Payroll and Employees. The two windows after them will again require a lot of consideration and caution. They are:</p>
</div>
<div className="mt-3" >
<ul>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Sensitive Accounting Activities. This refers to activities like transferring funds between accounts and doing online banking.</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Sensitive Financial Reporting. What kind of access do you want to grant this user to financial reports? Your selection here will override other reporting restrictions placed on the user.</li>
</ul>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Here again, you can choose between No, Full and Selective Access.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Finally, you’ll have to specify whether this employee can change or delete transactions in their areas. Will they be allowed to do so to transactions that were recorded before the closing date? When you click Next after completing this window, you’ll come to a summary of the access and activity rights given to this employee. Check this table carefully, then click Finish.</p>
</div>
<div className="mt-3" >
<img id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/032024/DESKTOP_0324_image3.png" ></img>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >You can get to your User List at any time, where you can Add, Edit, Delete and View users by going to Company | Set Up Users and Passwords | Set Up Users.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Critical Decisions</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Allowing employees to access your QuickBooks company file is a big decision. Determining just how much access they’ll have deserves equal consideration. But if you simply don’t have time anymore to do your accounting tasks or you just want to spend more time away from it so you can work on growing your business, granting QuickBooks access to one or more employees may be a necessity.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >We’re sure you noticed earlier that you can give your accountant limited access to your QuickBooks company file. So there’s another option if you don’t want to bring an employee in. If you’re interested, please contact the office to find ways to lighten your load.</p>
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
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> March 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year S corporations: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >  File a 2023 income tax return (Form 1120-S) and</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> provide each shareholder with a copy of Schedule K-1 (Form 1120S) or a substitute Schedule K-1 or file for an automatic six-month extension (Form 7004). Pay any tax due.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> March 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year partnerships: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 income tax return (Form 1065 or Form 1065-</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> B) and provide each partner with a copy of Schedule K1 (Form 1065) or a substitute Schedule K1 or request an automatic six-month extension (Form 7004).</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> March 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit Social Security, Medicare and withheld income taxes for </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>February if the monthly deposit rule applies</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> March 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withheld income tax for February if the monthly</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>deposit rule applies.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> April 1</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Electronically file 2023 Form 1097, Form 1098, Form 1099 (other than</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>those with an earlier deadline) and Form W-2G.</p>
</div>


<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >April 10</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Report March tip income of $20 or more to employers (Form 4070).</p>
</div>
</div>


<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>





</div>




}



