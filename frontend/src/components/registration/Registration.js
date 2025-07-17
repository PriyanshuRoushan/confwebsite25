import React from "react";
import "./Registration.css";

const Registration = () => {
  return (
    <section className="registration-section" id="main-registration">
      <h2 className="reg-heading">🎓 Conference Registration</h2>

      <div className="reg-table-container">
       <table className="reg-table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Early Bird Rate<br />(Upto October 15, 2025)</th>
      <th>Standard Rate<br />(After October 15, 2025)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Indian Author (Academia/Industry)</td><td>₹10620</td><td>₹11800</td></tr>
    <tr><td>Indian Student Author</td><td>₹8260</td><td>₹8850</td></tr>
    <tr><td>Indian Student Attendee (Non-Author)</td><td>₹4130</td><td>₹4720</td></tr>
    <tr><td>Indian Professional Attendee (Non-Author)</td><td>₹6490</td><td>₹6490</td></tr>
    <tr><td>Tutorial only (Indian Student)</td><td>₹750</td><td>₹1000</td></tr>
    <tr><td>Foreign Author (Academia/Industry)</td><td>$400</td><td>$450</td></tr>
    <tr><td>Foreign Student Attendee (Non-Author)</td><td>$150</td><td>$200</td></tr>
    <tr><td>Foreign Professional Attendee (Add. Page)</td><td>$15/Page</td><td>$15/Page</td></tr>
    <tr><td>Indian Professional Author (Add. Page)</td><td>₹1000/Page</td><td>₹1000/Page</td></tr>
    <tr><td>Foreign Professional Attendee (Non-Author)</td><td>$200</td><td>$250</td></tr>
    <tr><td>Tutorial only (Foreign Student)</td><td>$30</td><td>$50</td></tr>
  </tbody>
</table>


        <p className="note">
          * All rates are inclusive of GST 18% <br />
          <strong>One full author registration can register up to 2 papers</strong> <br />
          Extra page charge: ₹1000/page (Indian) or $15/page (International)
        </p>
      </div>

      {/* Account Details Section */}
      <div className="account-details">
        <h3 className="account-heading">🏦 Account Details</h3>
        <table className="account-table">
          <tbody>
            <tr>
              <td><strong>Name of Account</strong></td>
              <td>ROORKEE INSTITUTE OF TECHNOLOGY</td>
            </tr>
            <tr>
              <td><strong>Account Number</strong></td>
              <td>4044000100147399</td>
            </tr>
            <tr>
              <td><strong>IFSC Code</strong></td>
              <td>PUNB0404400</td>
            </tr>
            <tr>
              <td><strong>Bank Name</strong></td>
              <td>Punjab National Bank, IIT ROORKEE</td>
            </tr>
            <tr>
              <td><strong>SWIFT Code</strong></td>
              <td>PUNBINBB(Head Office)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Registration;
