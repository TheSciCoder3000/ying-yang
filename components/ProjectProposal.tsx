import { ArrowUpRight } from "lucide-react";
import React from "react";
import "@/styles/css/ProjectProposal.css";

const AddressData = [
  {
    title: "ABC",
    email: "hello@abc.com",
    number: "+9112398438498",
    address: "Oriental Gofur Tower, 88/KA.",
  },
  {
    title: "ABC",
    email: "hello@abc.com",
    number: "+9112398438498",
    address: "Podomoro Park",
  },
  {
    title: "ABC",
    email: "hello@abc.com",
    number: "+9112398438498",
    address: "75 E 3rd St Sheridan, USA.",
  },
];

const ProjectProposal = () => {
  return (
    <div className="proposal-cont">
      <div className="proposal-body">
        <div className="header">
          <h1>
            Got a project in mind? <br />
            Let&apos;s talk
          </h1>

          <button>
            Book a call <ArrowUpRight className="arrow" size={15} />
          </button>
        </div>

        <div className="proposal-info">
          <div className="address-items">
            {AddressData.map((item, indx) => (
              <AddressItem key={indx} {...item} />
            ))}
          </div>

          <div className="proposal-inquiry">
            <div className="inquiry-field">
              <h2>Business Inquiry</h2>
              <div className="inquiry-info">
                <p className="label">Email</p>
                <p className="value">abc@gmail.com</p>
              </div>
            </div>
            <div className="inquiry-field">
              <h2>Career</h2>
              <div className="inquiry-info">
                <p className="label">Join Us</p>
                <p className="value">abc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AddressItemProps {
  title: string;
  email: string;
  number: string;
  address: string;
}
const AddressItem: React.FC<AddressItemProps> = ({
  title,
  email,
  number,
  address,
}) => {
  return (
    <div className="address-item-cont">
      <h2>{title}</h2>
      <div className="contact-info">
        <p className="email">{email}</p>
        <p className="number">{number}</p>
      </div>
      <h3>{address}</h3>
    </div>
  );
};

export default ProjectProposal;
