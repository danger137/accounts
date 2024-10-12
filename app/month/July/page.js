"use client"
import Link from "next/link";
import "./july.css";
import { useRouter } from "next/navigation";



export default function July(){

  

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
  July 2024
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
Independent Contractors: Classify Carefully
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
  >5 Strategies for Improving Collections </Link>
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
    }} >Renting to Family Members</Link>
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
HSAs Can Be Powerful Retirement Saving Tools</Link>
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
    }} >Handle Your 401(k) Rollover With Care</Link>
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
    }} >Valuable Tax Credit Available for Energy-Efficient<br></br>Homes</Link>
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
  Having Trouble Budgeting? QuickBooks Online Can<br></br>Help
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
Independent Contractors: Classify Carefully
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Many businesses use independent contractors to help keep their costs down and provide flexibility for short-term needs. But the question of whether a worker is an employee or an independent contractor is complex. Be careful that your independent contractors are properly classified for federal tax and employment tax purposes, because if the IRS reclassifies them as employees, it can be an expensive mistake.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Differing Obligations</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If a worker is an employee, your company must withhold federal income tax and the employee’s share of Social Security and Medicare taxes, pay the employer’s share of Social Security and Medicare taxes, and pay federal unemployment tax. State tax obligations may also apply. A business generally must also provide that worker with fringe benefits if it makes them available to other employees.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >However, if a worker is an independent contractor, these obligations don’t apply. In that case, the business simply sends the contractor a Form 1099-NEC for the year showing the amount paid (if it’s $600 or more). The contractor is responsible for paying self-employment tax and, generally, making estimated tax payments for income tax purposes in relation to the amount paid.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Key Factors</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Who’s an “employee?” Unfortunately, there’s no one definition of the term. The IRS and courts have generally ruled that one of the key factors that determines the difference between an employee and a contractor is the right to control and direct the person in the jobs they’re performing, even if that control isn’t exercised. The issue of control is evaluated by asking several questions, including:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Who sets the worker’s schedule?</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Are the worker’s activities subject to supervision?</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Is the work technical in nature?</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Is the worker free to work for others?</li>
</ul>

</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Another important factor is whether the worker has the opportunity for profit or loss based on his or her managerial skills. That is, can the worker apply independent judgment and business acumen to affect the success or failure of the work being performed? If there’s a lack of such opportunity, that’s one indication of employee status.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Some employers that have misclassified workers as independent contractors may get some relief from employment tax liabilities under Section 530. This protection generally applies only if an employer meets certain requirements. For example, the employer must file all federal returns consistent with its treatment of a worker as a contractor and it must treat all similarly situated workers as contractors. Be aware, Section 530 doesn’t apply to certain types of workers.</p>
</div>
<div className="mt-3" >
 
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Think Carefully Before Asking the IRS</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You can ask the IRS (on Form SS-8) to rule on whether a worker is an independent contractor or employee. However, you should also be aware that the IRS has a history of classifying workers as employees rather than independent contractors.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > So, before you file Form SS-8, contact the office for a consultation. Filing this form may alert the IRS that your business has worker classification issues, and it may unintentionally trigger an employment tax audit. It may be better to properly set up a relationship with workers to treat them as independent contractors so that your business complies with the tax rules.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Workers who want an official determination of their status can also file Form SS-8. Dissatisfied workers you’ve treated as independent contractors may do so because they feel entitled to employee benefits and want to eliminate their self-employment tax liabilities. If a worker files Form SS-8, the IRS will notify the business with a letter that identifies the worker and includes a blank Form SS-8. The business will be asked to complete and return the form to the IRS, which will render a classification decision.</p>
</div>
<div className="mt-3" >
 
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Need More Help?</p>
</div>
<div className="mt-3" >
 
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Worker classification is complex. In addition to what’s been discussed here, there are differing rules that apply for labor law purposes, which can impact minimum wage and overtime pay requirements. If you have questions, contact the office to assist you in ensuring that your workers are properly classified.</p>
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
5 Strategies for Improving Collections
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Businesses that operate in the retail or restaurant spheres have it relatively easy when it comes to collections. They generally take payments right at a point-of-sale terminal and customers go on their merry way. For other types of companies, it’s not so easy. Collections can be particularly difficult for business-to-business operations, which often find themselves in complex relationships with key customers. In these businesses, it’s often not as simple as “pay up or hit the road.”</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If your company is dealing with slow-paying customers, which isn’t uncommon in today’s economic environment where everyone is trying to preserve cash flow, it helps to review the basics. Here are five tried-and-true strategies for increasing your chances of getting paid</p>
</div>
<div className="mt-3" >
    <div id="res" className="d-md-flex gap-2" >
<p className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >1. Request payment up front.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > For new customers or those with a  </p>
    </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > documented history of collection issues, consider asking for a deposit on each order. This would generally be a small but noticeable percentage of the contract or order price. You could also explore the concept of asking for a service retainer fee, similar to how law firms typically operate.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
<p className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >2. Charge fees.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Most customers are likely familiar with </p>
    </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > the concept of late-payment fees from dealing with their credit card companies. Consider implementing fees or finance charges on past due accounts. Place extremely delinquent accounts on credit hold or adjust their payment terms to cash on delivery.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
<p className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >3. Reward timely payments.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >An effective collection strategy </p>
    </div>
<p id="res" className="h4" style={{lineHeight:"30px",fontWeight:"300"}} > isn’t only about “penalizing” slow-paying customers. It’s also about incentivizing those who pay on time or who represent a potentially lucrative long-term relationship. Crunch the numbers to determine the feasibility of giving discounts to customers with strong payment histories or to those who have improved the timeliness of payments over a given period.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
<p className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >4. Communicate proactively.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Set up regular e-mail reminders </p>
    </div>

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > and place live phone calls to customers who haven’t settled their accounts. If the employees who work directly with the delinquent customers can’t resolve payment issues, elevate the matter to a manager or even to you, the business owner. If necessary, consider executing a promissory note to prevent the customer from disputing the charges in the future.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
<p className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >5. Get external help.</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If, after repeated tries, your collection </p>
    </div>
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > efforts appear unsuccessful, it might be time to get outside help. This typically means engaging either an attorney who specializes in debt collection or a collections agency. View this as a last resort, however, because third-party fees may consume much of the collected amount and you’re unlikely to continue doing business with the customer.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >One last important point about collections: If an outstanding debt is uncollectible, you may be able to write it off on your tax return. Be sure to document each customer’s promises to pay, details of your collection efforts and why you believe the debt is worthless.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Contact the office if you have questions about tax deductions and other collection activity. Or call for help improving your overall accounts receivable processes.</p>
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
     Renting to Family Members
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >As rents continue to rise in many areas, you may decide to help your financially challenged family members by renting a property to them at a discount. But this can lead to the loss of significant tax deductions. Here's a look at the tax treatment that applies when you rent to unrelated parties and how the rules change when you rent to relatives.</p>
</div>
<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Business vs. Personal</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you use real estate strictly for business purposes, that is, as a rental property, you must report the income and can deduct mortgage interest, property taxes, utilities, depreciation, maintenance and other expenses. You may claim a loss (subject to limitations) if your expenses exceed your rental income.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> Suppose you use a property as a personal residence (such as your primary residence or a vacation home) and rent it out for fewer than 15 days per year. In that case, you don't need to report the rental income, but you can't deduct related expenses. If you itemize, you can still claim personal deductions, to the extent allowable, for mortgage interest and property taxes.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> Suppose instead that you rent out the residence for 15 or more days per year. In that case, it's treated as a mixed-use property. You must report the rental income and allocate your expenses between the property's personal and business uses. You generally can claim the personal use portion as itemized deductions. The business use portion of these and other expenses are deductible as rental expenses, but they can't create a loss. Disallowed deductions may be carried forward to future years.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Family Matters</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Renting property to family members means you risk losing the ability to deduct rental expenses. That's because use by family members is considered personal use, even if your relative pays rent, unless two requirements are met. The family member:</p>
</div>
<div className="mt-3" >
<ul style={{listStyleType:"none"}} >
<li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >1. Uses the property as a principal residence, and</li>
<li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >2. Pays fair market rent (not discounted).</li>
</ul>

</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >If these requirements aren't met, then you must report the rental income (if you rented the property for 15 days or more per year). But related expenses won't be deductible.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you want to avoid losing valuable tax benefits, set the rent at or above fair market value and document fair market rent with comparable local rental rates. If you give family members financial gifts to help with the rent, the IRS will likely view this as discounted rent.</p>
</div>
<div className="mt-3" >
<p id="res"  className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Know What You're Getting Into</p>
</div>
<div className="mt-3" >
<p id="res"  className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Helping family members with housing expenses is a nice thing to do. But be aware of the tax consequences of renting to relatives. Contact the office for assistance with these decisions.</p>
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
   HSAs Can Be Powerful Retirement Saving Tools
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Health Savings Accounts (HSAs) are tax-advantaged savings vehicles for funding health care expenses not covered by insurance. And for those in relatively good health, they also may serve as attractive retirement savings vehicles.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To be eligible to contribute, an individual must be covered by a high-deductible health plan (HDHP). In 2024, an HDHP must have a deductible of at least $1,600 for individual coverage or $3,200 for family coverage. For 2024, you can contribute up to $4,150 to an HSA, $8,300 if you have family coverage (plus an additional $1,000 if you'll be 55 or older this year). Contributions are tax-deductible and withdrawals used to pay for qualified unreimbursed medical expenses are tax-free.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Any funds you don't need for medical expenses will continue to grow on a tax-deferred basis, providing a valuable supplement to your other retirement accounts. In general, once you reach age 65, you can use your HSA funds to pay for anything. Amounts spent that aren’t for qualified medical expenses will be subject to state and federal taxes, but not subject to a penalty. Contact the office with questions about adding an HSA to your plans for retirement.</p>
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
  Handle Your 401(k) Rollover With Care
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Leaving a job? You may want to roll over funds in your former employer’s 401(k) plan to an IRA. But there’s a tax trap for the unwary. If you receive a 401(k) plan check that’s payable to you personally or if you have a distribution put into a personal account electronically, 20% of the taxable amount of the payout will be withheld for federal tax.</p>
<div id="res" className="d-md-flex gap-2 " >
    
    <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If that happens, you have 60 days to come up with the missing 20% and get it (along with the amount distributed to you) into your IRA. If by that deadline you transfer to your IRA only the amount distributed to you, you’ll owe income tax on the 20% withheld amount plus a 10% early withdrawal penalty if you’re under 59½.You can dodge this tax trap by arranging for a direct trustee-to-trustee transfer from the 401(k) plan to your IRA.</p>

</div>
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
 Valuable Tax Credit Available for Energy-Efficient Homes
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Under the Inflation Reduction Act, construction contractors who build or rehab energy-efficient homes may be eligible for a federal tax credit of up to $5,000 per project. To claim the credit, builders are required to construct or substantially rehab a qualified home and own it during the construction process.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > To be qualified, a home must be a U.S. single-family dwelling that’s purchased or rented for use as a residence. It also must be certified to meet energy-saving requirements before it’s sold or leased.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The credit value is based on whether the contractor acquired the home before or after 2023, and the certification and standards the home meets following construction. Contact the office for more information.</p>

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
   Having Trouble Budgeting? QuickBooks Online Can Help
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Creating a budget that works may be the most challenging task you take on as you manage your company’s accounting. Income can be unpredictable, and expenses are hard to estimate. But a well-crafted budget is key to running a successful business.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Maybe you’ve tried before and given up. But maybe you haven’t had the right tools or approached the process with the right mindset. Try using QuickBooks Online’s budgeting tools and following these tips to create and maintain a budget that can serve as a roadmap for your spending.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Creating Your Budget</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Click the gear icon in the upper right corner, then select Budgeting under Tools. Click Create budget in the upper right. For Budget type, select Profit and Loss. This is most typical. It allows you to plan your budget around income and expenses over a specific period.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >You’ll have to make other decisions about your new budget:</p>

</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Time period. We’re going to create our budget for the upcoming fiscal year that starts in October of 2024. So we’ll select FY_2024_2025. Not sure when your fiscal year starts? Click the gear icon in the upper right and click Account and settings, then Advanced.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >What Budget format do you want to use? We’ll select Consolidated, because we want an organization-wide plan. A Subdivided budget would allow you to create individual budgets based on location, class, department, or customer.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Do you want QuickBooks Online to Pre-fill data? You won’t make a selection here if you’re starting from scratch. Otherwise, you can have numbers from a previous budget plugged into your new budget, which you can then edit.</li>
</ul>

</div>
<div className="mt-3" >
<img  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/072024/DESKTOP-0724-image-1.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Click Next when you’re done. Your budget table will open.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Filling In Your Budget</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Before you start filling in your budget, make sure the information at the top of the page is accurate. Is the fiscal year correct? The button in front of Compare reference data should be turned off, because we’re starting from scratch. If you have past budget data or a year’s worth of income and expenses you want to bring in, make sure this option is turned on. QuickBooks Online will then ask you whether you want to transfer your Actuals (real money you received or spent) or your budget, and for what year.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Make sure the time span is set correctly for your initial work (Yearly, Quarterly, or Monthly), though you can switch back and forth among them without losing data. Click the gear icon in the upper right to see your options there. You can Autosave budget (recommended), Hide empty rows (you won’t want to do this until you have your budget set up), and make the Display density compact.</p>

</div>



<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To create your budget, you simply enter numbers in the small boxes supplied. Columns are divided by months or quarters, depending on what you specified, and rows are labeled with budget items (Advertising, Gross Receipts, Legal & Professional Fees, etc.). You simply enter numbers in the boxes that apply. You can either:</p>
</div>
<div className="mt-3" >
<ul>
    <li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Enter an annual total in the Budget totals box and let QuickBooks Online divide it into 12 monthly numbers (click the small “split” icon), or</li>
    <li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Put the monthly amount in the first month’s (or quarter’s) column, and QuickBooks Online will multiply it by 12 and enter the annual number (click the small arrow).</li>
</ul>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You can also, of course, enter different numbers in each box to reflect changing budget needs.</p>
</div>
<div className="mt-3" >
<img id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/072024/DESKTOP-0724-image-2.png"  ></img>
</div>


<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >When you’re done working with your budget, save it. You can come back anytime and make adjustments as needed.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >7 Budget Tips</p>
</div>
<div className="mt-3" >
<ul style={{listStyleType:"none"}} >
<li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >1. Remember seasonal upswings and downswings.</li>
<li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >2. Make your goals as realistic as possible and distinguish between essential and nonessential expenses. Enter your budget items for the bills and other expenses that must be covered before you add optional categories.</li>
<li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >3. Keep it simple. Don’t budget down to the last paper clip. You risk budget burnout, and your reports will be unwieldy.</li>
<li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >4. Build in some backup funding. Just as you’re supposed to have an emergency fund in your personal life, try to create one for your business.</li>
<li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >5. Overestimate your expenses, at least a little. This can help prevent “borrowing” from one budget category to make up for a shortfall in another.</li>
<li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >6. Make your employees part of the process. Don’t be secretive about the expense element of your budget. Try to get input from staff in areas where they have knowledge.</li>
<li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >7. Revisit your budget frequently. Evaluate your progress at least once a month. In fact, you could even start by budgeting for only a couple of months at a time. You’ll learn a lot about your spending and sales patterns that you can use for future periods. The Budget Overview report displays all the data in your budget(s). Budget vs. Actuals shows you how you’re adhering to your budget.</li>
</ul>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Contact the office for help with budgeting or to answer questions you might have about creating and modifying budgets in QuickBooks Online. You can also contact the office with other accounting issues you may be having.</p>
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
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> July 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit Social Security, Medicare and withheld income tax for June if the</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> monthly deposit rule applies.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withhold income tax for June if the monthly deposit</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >rule applies.</p>
</div>
<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >July 31</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report Social Security and Medicare taxes and income tax withholding</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >for the second quarter of 2024 (Form 941) and pay any tax due if all of the associated taxes due weren’t deposited on time and in full.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >File a 2023 calendar-year retirement plan report (Form 5500 or Form</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > 5500- EZ) or request an extension.</p>
</div>
<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >August 12</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report July tip income of $20 or more to employers (Form 4070).</p>
</div>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Report Social Security and Medicare taxes and income tax withholding</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >for second quarter of 2024 (Form 941) if all associated taxes due were deposited on time and in full.</p>
</div>
<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>





</div>




}



