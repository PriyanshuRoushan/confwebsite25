import React from "react";
import "./preparing.css";

const Preparing = () => {
  return(
    <section className="preparing-section">
      <h2 className="prep-heading">📄 Preparing Papers</h2>

      <p className="prep-intro">
        <strong>AIP Conference Proceedings</strong> uses author-prepared PDFs for all published content and will not send out author proofs prior to publication. Therefore, it is important to ensure that all manuscripts are submitted in their final form and that all fonts are embedded.
      </p>

      <p className="prep-note">
        AIP author template packages contain comprehensive advice and guidelines for authors—including a Do’s and Don’ts checklist—all papers must be prepared abiding by these guidelines. Well-prepared manuscripts enable rapid publication.
      </p>

      <h3 className="prep-subheading">📌 When preparing your manuscript for AIP Conference Proceedings, please abide by the following requests:</h3>
      <ul className="prep-list">
        <li>Download your template package for <strong>Word</strong> or <strong>LaTeX</strong>.</li>
        <li>Do not add page numbers or headers/footers.</li>
        <li>Do not alter the margins of our templates.</li>
        <li>Paper size must be <strong>8.5 x 11 inches</strong>.</li>
        <li>Include author name and full affiliation address including country.</li>
        <li>Use clear, legible graphics and diagrams contained within the margins.</li>
        <li>Do not use copyrighted material without permission and proper crediting.</li>
        <li>All pages must be in <strong>portrait</strong> orientation.</li>
        <li>Follow our sample reference guidelines (available in the template package).</li>
        <li><strong>Embed all fonts</strong> into your manuscript PDF.</li>
      </ul>

      <h3 className="prep-subheading">📤 What to send to your conference organizer</h3>
      <ul className="prep-list">
        <li>A final PDF file of your paper with fonts embedded.</li>
        <li>Copies of permissions to re-use copyrighted material.</li>
      </ul>
    </section>
  );
};

export default Preparing;
