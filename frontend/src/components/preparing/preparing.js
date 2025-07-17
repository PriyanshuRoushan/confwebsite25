import React from "react";
import "./preparing.css";

const Preparing = () => {
  return (
    <section className="preparing-section">
      <h2 className="prep-heading">📄 Preparing Papers</h2>

      <p className="prep-intro">
        <strong>AIP Conference Proceedings</strong> uses author-prepared PDFs for all published content and will not send out author proofs prior to publication. It’s crucial to submit manuscripts in final form with all fonts embedded to ensure rapid publication.
      </p>

      <p className="prep-intro">
        Author template packages provide detailed instructions, formatting tips, and a Do’s and Don’ts checklist. Use them to make sure your submission meets all requirements.
      </p>

      <h3 className="prep-subheading">&rarr;Key Preparation Steps</h3>
      <ul className="prep-list">
        <li>Download the template package for <strong>Word</strong></li>
        <li>Use standard paper size: <strong>8.5 x 11 inches</strong>.</li>
        <li>Include author name and full affiliation address including <strong>country</strong>.</li>
        <li>Use clear graphics/diagrams that fit within the margins.</li>
        <li>Embed all fonts in your PDF.</li>
        <li>Do not add page numbers, headers, or footers.</li>
        <li>Do not alter the margins of the template.</li>
        <li>Ensure all content is in <strong>portrait orientation</strong>.</li>
        <li>Use only properly credited or permitted content.</li>
        <li>Follow the reference style in the template.</li>
      </ul>

      <h3 className="prep-subheading">&rarr;Submit to Conference Organizer</h3>
      <ul className="prep-list">
        <li>Your final PDF with fonts embedded.</li>
        <li>Permission documents for any reused copyrighted material.</li>
      </ul>

      <h3 className="prep-subheading">&rarr;Template Downloads</h3>
      <p>Use the following links to download official AIP templates:</p>
      <ul className="prep-list">
        <li><a href="https://drive.google.com/file/d/1TasS_J9-KUrUHjxmLA4d-1Y52mirz0R4/view?usp=sharing" download="RIT_CONFERENCE_Template.zip">
        Download zip file
      </a>
</li>
      </ul>
    </section>
  );
};

export default Preparing;
