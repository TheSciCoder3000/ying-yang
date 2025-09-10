import React from "react";
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
    <div className="max-w-[70rem] my-30 mx-auto p-4 flex gap-20 ">
      <div className="flex-1">
        <div className="mb-8 space-y-5">
          <h1 className="text-5xl font-[500]">Have a Project?</h1>
          <h1 className="text-5xl font-[500]">Let&apos;s talk</h1>
        </div>

        <div className="mb-[6rem]">
          {Checklists.map((item, indx) => (
            <ChecklistItem key={indx} text={item.label} />
          ))}
        </div>

        <div className="schedule-cont">
          <h3 className="font-light mb-4">Schedule a call:</h3>

          <div className="flex gap-5 items-center">
            <Image
              className="profile-img aspect-square w-16 h-full"
              src="/profile.jpg"
              alt="profile"
            />
            <div>
              <h2 className="text-xl mb-2">Tanisha M Jain</h2>
              <p className="text-xs text-gray-400 font-light">Founder & CEO</p>
            </div>
            <button className="cursor-pointer bg-[#402fed] rounded-full aspect-square w-10 h-10 text-white flex items-center justify-center">
              <CalendarDays size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
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
    <div className="flex gap-2 items-center mb-[2px] text-sm text-gray-400 font-light">
      <Check size={15} />
      {text}
    </div>
  );
};

export default Contact;
