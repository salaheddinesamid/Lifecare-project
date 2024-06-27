
import React from 'react';
import './Help.css';

export function Help(){
  return (
    <div className="help">
      <h1>Help</h1>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="question">
          <h3>How do I add a new patient?</h3>
          <p>To add a new patient, go to the "Patients" section and click on the "Add Patient" button. Fill out the required information and click "Save".</p>
        </div>
        <div className="question">
          <h3>How do I schedule an appointment?</h3>
          <p>To schedule an appointment, go to the "Appointments" section and click on the "Schedule Appointment" button. Select the patient and the desired time slot, then click "Confirm".</p>
        </div>
        <div className="question">
          <h3>How do I contact support?</h3>
          <p>You can contact support by emailing us at support@lifecare.com or by calling our support line at (123) 456-7890.</p>
        </div>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any further questions or need additional assistance, please reach out to us:</p>
        <ul>
          <li>Email: support@lifecare.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Health St, Wellness City, HealthyState, 12345</li>
        </ul>
      </div>
    </div>
    
  );
};
