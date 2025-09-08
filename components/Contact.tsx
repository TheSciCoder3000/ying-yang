import React from "react";
import "@/styles/css/Contact.css";
import { CalendarDays, Check } from "lucide-react";
import Image from "./Image";
import ContactForm from "./ContactForm";

const Checklists = [
  {
    label: "Lorem NDA? Ipsum vero, simpliciter pete.",
  },
  {
    label: "Lorem NDA? Ipsum vero, simpliciter pete.",
  },
  {
    label: "Lorem NDA? Ipsum vero, simpliciter pete.",
  },
];

const Contact = () => {
  return (
    <div className="contact-cont">
      <div className="left">
        <div className="header">
          <h1>Have a Project?</h1>
          <h1>Let&apos;s talk</h1>
        </div>

        <div className="checklist-cont">
          {Checklists.map((item, indx) => (
            <ChecklistItem key={indx} text={item.label} />
          ))}
        </div>

        <div className="schedule-cont">
          <h3>Schedule a call:</h3>

          <div className="profile-cont">
            <Image className="profile-img" src="/profile.jpg" alt="profile" />
            <div className="profile-info">
              <h2>Tanisha M Jain</h2>
              <p>Founder & CEO</p>
            </div>
            <button>
              <CalendarDays size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="right">
        <ContactForm />
      </div>
    </div>
  );
};

interface ChecklistItemProps {
  text: string;
}
const ChecklistItem: React.FC<ChecklistItemProps> = ({ text }) => {
  return (
    <div className="checklist-item">
      <Check size={15} />
      {text}
    </div>
  );
};

export default Contact;
