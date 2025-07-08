import React from "react";
import "./schedule.css";


function Schedule() {
    return(
    <div id="main-schedule">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="title">Rules for submission</h1>
          <p className="schedule-head">Paper submission date:- --/--/2025</p>
          <p className="schedule-head">Acceptance Notification:- --/--/2025</p>
        <p>
            <ul>
                <li className="rule-list">All papers must be written in English, with a maximum of 6 pages (10pt font, double-column format).</li>
                <li className="rule-list">The paper format template will be uploaded shortly</li>
                <li className="rule-list">An additional charge of Rs. 1,000/- per page will apply beyond the 6th page.</li>
                <li className="rule-list">The paper format template will be uploaded shortly</li>
                <li className="rule-list">Only original, unpublished work should be submitted in PDF or MS Word format to RIT-Conf 2025.</li>
                <li className="rule-list">Submitted papers must not be under review for any other conferences or journals.</li>
                <li className="rule-list">Acceptance decisions will be made by the Technical Program Committee.</li>
                <li className="rule-list">Authors must register on Microsoft CMT to submit their papers</li>
                <li className="rule-list">The similarity score of the submitted paper should not exceed 15%.</li>
            </ul>
        </p>
    </div>
    )
};

export default Schedule;