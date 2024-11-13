import React from 'react';

const TermsAndConditions = () => {
  return (
    <div id='#terms' style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Terms and Conditions</h1>
      <p>Welcome to [Your Company Name]!</p>
      <p>
        These terms and conditions outline the rules and regulations for the use of [Your Company Name]'s Website, located at [your website URL].
      </p>
      <p>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your Company Name] if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2>License</h2>
      <p>
        Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights for all material on [Your Company Name]. All intellectual property rights are reserved. You may access this from [Your Company Name] for your own personal use subject to restrictions set in these terms and conditions.
      </p>

      <h2>Restrictions</h2>
      <p>You are specifically restricted from the following:</p>
      <ul>
        <li>Publishing any material from [Your Company Name] in any other media</li>
        <li>Selling, sublicensing, or otherwise commercializing any material from [Your Company Name]</li>
        <li>Using this website in any way that is or may be damaging to [Your Company Name]</li>
        <li>Using this website contrary to applicable laws and regulations</li>
      </ul>

      <h2>User Content</h2>
      <p>
        Certain areas of this website offer users the opportunity to post and exchange opinions and information. [Your Company Name] does not filter, edit, or review user content before it appears on the website. However, [Your Company Name] reserves the right to remove any content that it considers inappropriate or offensive.
      </p>

      <h2>Your Privacy</h2>
      <p>
        Please read our <a href="/privacy-policy" style={{ color: '#007BFF', textDecoration: 'none' }}>Privacy Policy</a>.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        In no event shall [Your Company Name], nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
      </p>

      <h2>Indemnification</h2>
      <p>
        You hereby indemnify to the fullest extent [Your Company Name] from and against any and all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these terms.
      </p>

      <h2>Severability</h2>
      <p>
        If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        [Your Company Name] reserves the right to revise these terms and conditions at any time as it sees fit. By using this website, you are expected to review these terms regularly.
      </p>

      <p style={{ marginTop: '20px', textAlign: 'center' }}>If you have any questions about these terms, please contact us at [Your Contact Information].</p>
    </div>
  );
};

export default TermsAndConditions;
