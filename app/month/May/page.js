"use client"
import Link from "next/link";
import "./may.css";
import { useRouter } from "next/navigation";



export default function May(){

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
                        <a href="/Online" className="text-reset text-white">Ahashmi@live.com</a>
                    </li>
                    <li style={{ color: "white" }}>
                        <div className="d-flex justify-content-center gap-2">
                            <i className="fa-brands fa-facebook-f mt-2"></i>
                            <i className="fa-brands fa-linkedin-in mt-2"></i>
                            <i className="fa-brands fa-twitter mt-2"></i>
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
  May 2024
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
The Advantages of Hiring Your Minor Children for <br></br> Summer Jobs
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
  >To Get an "Early" Refund, Adjust Your Withholding </Link>
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
    }} >3 Ways Your Business Can Uncover Cost Cuts</Link>
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
The "Nanny Tax" Must Be Paid for Nannies and <br></br>Other Household Employees</Link>
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
    }} >Discovering a Mistake After Your Tax Return Is Filed</Link>
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
    }} >What to Do if Your Business's Data Security Is <br></br>Breached</Link>
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
Who Are Your Customers? QuickBooks Online Can <br></br>Tell You
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
The Advantages of Hiring Your Minor Children for Summer Jobs
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you’re a small-business owner and you hire your children this summer, you may be able to secure tax breaks and other nontax benefits. The kids can gain bona fide on-the-job experience, save for college and learn how to manage money. You may be able to shift some of your high-taxed income into tax-free or low-taxed income, and, depending on the situation, you may realize payroll tax savings. Perhaps best of all, your kids will spend time with you.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >A Legitimate Job and Tax Savings, Too</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you hire your child, you’ll get a business tax deduction for employee wage expenses. In turn, the deduction reduces your federal income tax bill and possibly your self-employment tax bill and your state income tax bill if they apply. However, for the wages to be a deductible business expense, the work performed by the child must be legitimate and the child’s pay must be reasonable</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Let’s say you operate as a sole proprietor in the 37% tax bracket. You hire your 16-year-old daughter to help with office work full-time during the summer and part-time in the fall. She earns $10,000 during 2024 and doesn’t have any other earnings.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You save $3,700 (37% of $10,000) in income taxes at no tax cost to your daughter. That’s because she can use her $14,600 standard deduction for 2024 to completely shelter her earnings.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Your family’s taxes are lower even if your daughter’s earnings exceed her standard deduction. Why? The unsheltered earnings will be taxed to her beginning at a rate of 10% instead of being taxed at your higher rate.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Reduced Payroll Taxes</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If your business isn’t incorporated and certain conditions are met, your child’s wages are exempt from Social Security, Medicare and federal unemployment taxes. Your child must be under age 18 for this to apply (or under age 21 for the federal unemployment tax exemption). Contact the office to learn how this works.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Be aware that there’s no payroll tax exemption for employing your child if your business is incorporated or is a partnership that includes nonparent partners. And payments for the services of your child are subject to income tax withholding, regardless of age, no matter what type of entity you operate.</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Extra Time to Make Your Child’s Retirement Garden Grow</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >An early start on saving for retirement can be key to building wealth. A child who earns income from a job can contribute to a traditional IRA or a Roth IRA and begin funding a nest egg. For the 2024 tax year, a working child can contribute the lesser of his or her earned income or $7,000 to a traditional or Roth IRA. And the money may be tapped penalty-free for certain eligible reasons, such as paying education costs and making a down payment of up to $10,000 on a first home.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >What if your business has a retirement plan? Depending on its terms, your child may qualify to begin earning retirement benefits that can grow for many decades.</p>
</div>
<div className="mt-3" >
 
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >The Importance of Accurate Records</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Hiring your child can be a tax-smart idea. Be sure to keep the same records (such as timesheets and job descriptions) as you would for other employees to substantiate the hours worked and duties performed. Also issue your child a Form W-2. Contact the office with questions about how these rules apply to your situation.</p>
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
To Get an "Early" Refund, Adjust Your Withholding
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you received a large refund this year, you may want to adjust your withholding. Each year, millions of taxpayers claim an income tax refund. To be sure, receiving a payment from the IRS for a few thousand dollars can be a pleasant influx of cash. But it means you were essentially giving the government an interest-free loan for close to a year, which isn’t the best use of your money.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Fortunately, there’s a way to begin collecting your 2024 refund now: You can review the amounts you’re having withheld — and any estimated tax payments you’re making — and adjust them to keep more money in your pocket during the year.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Choosing to Adjust</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > It’s particularly important to check your withholding and/or estimated tax payments if you have:</p>
</div>
<div className="mt-3" >

    <ul>
        <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>Received an especially large 2023 refund,</li>
        <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>Gotten married, divorced or added a dependent,</li>
        <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>Bought a home, or</li>
        <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>Started or lost a job.</li>
    </ul>

</div>
<div className="mt-3" >

<p id="res" className="h4" style={{lineHeight:"30px",fontWeight:"300"}} >Withholding or estimated tax payment changes might also be warranted if your investment income has changed significantly.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} > Making a Change</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You can modify your withholding at any time during the year, or even more than once a year. To do so, simply submit a new Form W-4 to your employer. Changes typically will go into effect several weeks after the new Form W-4 is submitted. For estimated tax payments, you can adjust each time quarterly payments are due.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > While reducing your withholding or estimated tax payments will put more money in your pocket now, you also need to be careful that you don’t reduce them too much. If you don’t pay enough tax throughout the year on a timely basis, you could end up owing interest and penalties when you file your return, even if you pay your outstanding tax liability by the deadline in April 2025.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Getting Help</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >One reason to consider adjusting your withholding is the passage of any new tax legislation. For example, several years ago when the Tax Cuts and Jobs Act was enacted, the IRS needed to revise withholding tables to account for the increased standard deductions, suspension of personal exemptions, and changes in tax rates and brackets. If you’d like help determining your withholding or estimated tax payments for the rest of the year, please contact the office.</p>
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
     3 Ways Your Business Can Uncover Cost Cuts
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> Every business wants to cut costs, but it isn't easy. We're talking about clear and substantial ways to lower expenses, thereby strengthening cash flow and giving you a better shot at strong profitability.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> Obvious places to slash costs (such as wages, benefits and overhead) often aren't viable options because the very stability of your operation may depend on them. But there might be other ways to lower expenses if you dig deeply enough. Here are three possibilities.</p>
</div>
<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >1. Study Your Suppliers</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > Many companies find that just a few suppliers account for the bulk of their spending. By identifying these vendors and consolidating spending with them, you may be able to put yourself in a stronger position to negotiate volume discounts. This may also help to streamline the purchasing process.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> On a related note, how well do you know your suppliers? It might be a good idea to conduct a supplier audit. This involves collecting key data regarding a supplier's performance to manage quality control and ensure you're getting an acceptable return on investment.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}}> 2. Go Green</p>
</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Operating an environmentally friendly company is generally a good idea, and it might save you money. Instead of purchasing brand-new computers and office equipment, you may find refurbished items at substantial savings that still fully meet your business's needs. And when you no longer need certain equipment and office furniture, consider selling it to a liquidator or dealer. You'll not only make some money, but also free up the space you're using to store and maintain them.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >In addition, if you own the property on which you operate, research energy-efficient upgrades to the HVAC and lighting systems. Naturally, there will be an initial cost outlay, but over the long term, you may lower your energy costs. You might also qualify for tax credits for installing certain items.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400",}} >3. Explore Outsourcing and Tech Upgrades</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Many business owners try to economize by doing everything in-house, from accounting to payroll to HR. But if the staffing and expertise just aren't there, these companies often suffer losses because of mistakes, mismanagement and wasted time. Although you'll incur costs when outsourcing, the time and labor it saves you could end up being a net gain.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Carefully chosen and implemented technology upgrades can serve a similar purpose. Many products on the market today are so robust and fully featured that upgrading to them may be almost comparable to outsourcing. The same may be true with a customer relationship management system that can help generate sales leads and allow you to focus on your most profitable existing customers. Again, there will be an initial cost that could eventually lower your cost of doing business.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400",}} >Snip, Snip, Snip</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Lowering expenses is difficult, but keeping an eye out for ways to do it is important, especially now that inflation is a major factor in the economic landscape. Please contact the office for help identifying and lowering your company's most "cuttable" costs.</p>
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
   The "Nanny Tax" Must Be Paid for Nannies and Other Household Employees
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you employ a household worker who isn't an independent contractor, you may be required to pay employment taxes on the worker's cash wages. This is commonly referred to as the "nanny tax."</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >In 2024, when a household employee's cash wages reach at least $2,700, you must pay the employer share of Social Security (6.2%) and Medicare (1.45%) taxes and withhold the employee share of these taxes (also 6.2% and 1.45%, respectively). You aren't required to withhold federal income tax, but you must pay federal unemployment tax on wages of $1,000 or more. This tax is assessed only on the first $7,000 of wages paid.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To pay these obligations, increase your quarterly estimated tax payments or increase withholding from your wages. Additional requirements will apply when you file your tax return for the year. Contact the office with questions.</p>
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
 Discovering a Mistake After Your Tax Return Is Filed
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Did you file your 2023 tax return and then realize you'd made a mistake? Perhaps you completed your return yourself and made an error in math or neglected to include a schedule that should've been attached. Or maybe you recently remembered some large, potentially deductible, charitable donations you'd made in early 2023 that you'd forgotten to tell your tax professional about. Now you may be wondering if you need to file an amended return.</p>

</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Taxpayers usually don't need to file amended returns for certain issues. For example, the IRS will correct any math errors while processing tax returns and notify the taxpayers. And if a form or schedule is missing, the tax agency will send a letter requesting it. Certain other changes, however, require an amended return to be filed. They include: a change of filing status, missing income, incorrect deductions or credits, and an inaccurate tax liability. Contact the office for help filing an amended return.</p>

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
What to Do if Your Business's Data Security Is Breached
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Most businesses store sensitive information about employees and customers, such as names, addresses, Social Security numbers (SSNs), banking information and more. If lost or stolen, this data could put individuals at risk for identity theft and other types of damage.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > What should you do if this happens to your business? The IRS recommends these steps to take:</p>
</div>
<div className="mt-3" >
<ul style={{listStyleType:"none"}} >
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >1. If a breach could pose harm to a person or business, notify local police and report the potential risk of identity theft.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >2. If a breach includes names and SSNs or could affect other businesses, contact the major credit bureaus and notify the businesses.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >3. If the breach puts individuals at risk, notify those individuals so they can take steps to mitigate the misuse of their data, including checking out the IRS Taxpayer Guide to Identity Theft.</li>

</ul>

</div>

<div  className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
    <p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For that Guide and more, click here:</p>
<Link className="h5" style={{lineHeight:"30px",fontWeight:"300"}} href={"https://www.irs.gov/identity-theft-fraud-scams/has-your-business-become-the-victim-of-a-data-security-breach"} >https://www.irs.gov/identity-theft-fraud-</Link>
</div>
<Link  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} href={"https://www.irs.gov/identity-theft-fraud-scams/has-your-business-become-the-victim-of-a-data-security-breach"} >scams/has-your-business-become-the-victim-of-a-data-security-breach</Link>
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
Who Are Your Customers? QuickBooks Online Can Tell You
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Creating comprehensive, accurate customer profiles in QuickBooks Online takes time. So it's tempting to enter just the minimum information required to process transactions. But there are numerous benefits to including every possible detail that QuickBooks Online allows, and making sure those details are correct. For example</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >You can do deeper, more insightful searches.</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Your reports can be filtered by more criteria, making them more focused.</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Your marketing efforts can be more targeted.</li>
    <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Your communication with customers will be more informed.</li>
</ul>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Importing Customer Files</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you have customer files in CSV, Excel, or Google Sheets format, you should be able to import them directly into QuickBooks Online. Click Sales in the toolbar, then Customers. In the upper right corner, click the down arrow next to New customer and select Import customers.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You can look at a sample file before you import CSV or Excel files. Your file must contain a header title for each column in the top row. Customer Name is the only required field, so don't worry if your database isn't completely filled in.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >After you've browsed for and selected your data file, click Next to open the "mapping" page, where you'll match the fields in your own file to QuickBooks Online fields, as shown in the image below:</p>

</div>
<div className="mt-3" >
<img  id="res"  src="https://www.cpasitesolutions.com/content/newsletter/images/052024/DESKTOP-0524-Image-1.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Click Next again to see your customer data in a table. If it looks OK, click Import to bring the file into QuickBooks Online.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >You'll connect directly to Google Sheets to import a customer file.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >And you can import your email contacts from Outlook or Gmail after you've exported them from those applications as Excel or Google Sheets files.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Creating Customer Records Manually</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you don't have an existing database of customers (or you don't want to deal with the import process), you can enter the information manually using QuickBooks Online's customer record templates. Return to Sales | Customers and click New customer in the upper right. A vertical panel slides out from the right side of the page containing labeled blank field for your customer data.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The only field that's required to create and save a customer record is Customer display name. But you're going to want to complete more fields. If you're not sure about some things, or you get additional information later, you can always come back and edit the record. The icons in the upper right help you navigate quickly to other sections of the record.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Some of these fields are to be used for information that will appear automatically on invoices. If you specify, for example, what the customer's default Primary payment method, Terms, and Sales form delivery options are, they will be automatically selected when you create a sales form, though you can change them on the fly.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You don't have to complete every field. There are some, though, that must be filled out, such as:</p>

</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Tax rate,</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Tax exempt status, and</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Opening balance.</li>
</ul>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Viewing Your Completed Customer Records</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Once you've completed and saved a record, it will show up in the Customers list, which appears as a table. The last column on this page, the Action column, provides links to all the actions you can take related to that customer, like Create sales receipt and Send reminder.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Click anywhere in the row to open the customer's "homepage." This contains the information you just entered plus related QuickBooks Online data that is displayed automatically. You click tabs to see lists of things like the customer's Transactions, Statements and Customer Details. You can create new transactions from this page, too.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Designating Sub-Customers</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You may have noticed a line at the bottom of the Name and contact section that reads Is a sub-customer. You'll create sub-customer records if you want to "nest" a customer or job under a "parent" customer. If you're a contractor, for example, you might want to set up different properties (like "Guest House") as sub-customers and assign billable products and services to them. You can choose to have the billing go to the parent customer, of course, as pictured in the image below:</p>

</div>
<div className="mt-3" >
<img id="res" style={{width:"auto"}} src="https://www.cpasitesolutions.com/content/newsletter/images/052024/DESKTOP-0524-Image-3.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Answering Customers' Questions</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you're conscientious about creating comprehensive customer records, it will be easier to answer customers' questions quickly. In fact, these pages will be helpful to you anytime you have to look up customer details. And as stated earlier, your search results and your reports will be more focused and insightful because of the filters you can apply.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Contact the office with questions about customer records or about any other elements of QuickBooks</p>

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
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> May 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Deposit Social Security, Medicare and withheld income taxes for April if</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>  the monthly deposit rule applies.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withheld income tax for April if the monthly deposit</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >rule applies.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year exempt organizations: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >  File a 2023 information return (Form </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> 990, Form 990-EZ or Form 990-PF) or file for an automatic six-month extension (Form 8868). Pay any tax due.</p>
</div>
<div className="mt-3" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year small exempt organizations (with gross receipts normally of $50,000</p>
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >or less:</p>
<p   className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >File a 2023 e-Postcard (Form 990-N) if not filing Form 990 or </p>
<p   className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Form 990-EZ. </p>
</div>
</div>

<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >June 10</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report May tip income of $20 or more to employers (Form 4070).</p>
</div>
</div>

<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>





</div>




}



