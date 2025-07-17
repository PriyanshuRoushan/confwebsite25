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
              <th rowSpan="2">Category</th>
              <th colSpan="2">Early Bird Rates (Upto October 15, 2025)</th>
              <th colSpan="2">Standard Rates (After October 15, 2025)</th>
            </tr>
            <tr>
              <th>IEEE Member</th>
              <th>Non-IEEE Member</th>
              <th>IEEE Member</th>
              <th>Non-IEEE Member</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Indian Author (Academia/Industry)</td><td>₹9500</td><td>₹10620</td><td>₹10620</td><td>₹11800</td></tr>
            <tr><td>Indian Student Author</td><td>₹7080</td><td>₹8260</td><td>₹8260</td><td>₹8850</td></tr>
            <tr><td>Indian Student Attendee (Non-Author)</td><td>₹3540</td><td>₹4130</td><td>₹4130</td><td>₹4720</td></tr>
            <tr><td>Indian Professional Attendee (Non-Author)</td><td>₹5900</td><td>₹6490</td><td>₹6490</td><td>₹6490</td></tr>
            <tr><td>Tutorial only (Indian Student)</td><td>₹500</td><td>₹750</td><td>₹750</td><td>₹1000</td></tr>
            <tr><td>Foreign Author (Academia/Industry)</td><td>$350</td><td>$400</td><td>$400</td><td>$450</td></tr>
            <tr><td>Foreign Student Attendee (Non-Author)</td><td>$100</td><td>$150</td><td>$150</td><td>$200</td></tr>
            <tr><td>Foreign Professional Attendee (Add. Page)</td><td>$15/Page</td><td>$15/Page</td><td>$15/Page</td><td>$15/Page</td></tr>
            <tr><td>Indian Professional Author (Add. Page)</td><td>₹1000/Page</td><td>₹1000/Page</td><td>₹1000/Page</td><td>₹1000/Page</td></tr>
            <tr><td>Foreign Professional Attendee (Non-Author)</td><td>$150</td><td>$200</td><td>$200</td><td>$250</td></tr>
            <tr><td>Tutorial only (Foreign Student)</td><td>$15</td><td>$30</td><td>$30</td><td>$50</td></tr>
          </tbody>
        </table>
        <p className="note">
          * All rates are inclusive of GST 18% <br />
          <strong>One full author registration can register up to 2 papers</strong> <br />
          Extra page charge: ₹1000/page (Indian) or $15/page (International)
        </p>
      </div>
    </section>
  );
};

export default Registration;
