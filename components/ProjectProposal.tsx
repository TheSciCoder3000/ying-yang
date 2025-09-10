import { ArrowUpRight } from "lucide-react";
import React from "react";

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
    <div className="w-full -mt-40">
      <div className="max-w-[70rem] mx-auto">
        <div className="flex justify-between">
          <h1 className="text-5xl/[1.5em]">
            Got a project in mind? <br />
            Let&apos;s talk
          </h1>

          <button className="text-white bg-[#008080] rounded-4xl h-fit px-5 py-2 flex items-center justify-center gap-1">
            Book a call <ArrowUpRight className="arrow" size={15} />
          </button>
        </div>

        <div className="mt-20 flex">
          <div className="flex-1 flex gap-4 border-r-1 border-white">
            {AddressData.map((item, indx) => (
              <AddressItem key={indx} {...item} />
            ))}
          </div>

          <div className="ml-20 flex flex-col justify-between gap-10">
            <div className="inquiry-field">
              <h2 className="text-lg mb-3">Business Inquiry</h2>
              <div className="inquiry-info">
                <p className="font-light text-[0.8em] mb-1">Email</p>
                <p className="font-light text-[0.8em] ml-6">abc@gmail.com</p>
              </div>
            </div>
            <div className="inquiry-field">
              <h2 className="text-lg mb-3">Career</h2>
              <div className="inquiry-info">
                <p className="font-light text-[0.8em] mb-1">Join Us</p>
                <p className="font-light text-[0.8em] ml-6">abc@gmail.com</p>
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
    <div className="flex-1">
      <h2 className="text-lg mb-4">{title}</h2>
      <div className="mb-6 ml-4 text-sm">
        <p className="email">{email}</p>
        <p className="mt-2 underline">{number}</p>
      </div>
      <h3 className="text-[0.9em] font-extralight">{address}</h3>
    </div>
  );
};

export default ProjectProposal;
