import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="py-5">
      <h4 className="text-center uppercase text-3xl">
        <span className="text-[#757c82]">contact</span> us
      </h4>
      <div className="py-5 flex items-center gap-5 flex-col sm:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={assets.contact_image}
            loading="lazy"
            className="rounded"
            alt="contact_image"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <span className="font-bold uppercase">OUR OFFICE</span>
          <ul>
            <li>
              00000 Willms Station <br /> Suite 000, Washington, USA
            </li>
            <li>
              Tel: (000) 000-0000 <br /> Email: mohamedDemo@gmail.com
            </li>
          </ul>
          <span className="font-bold uppercase">CAREERS AT PRESCRIPTO</span>
          <p>Learn more about our teams and job openings.</p>
          <a
            href="https://web.whatsapp.com/"
            className="p-2 bg-green-500 rounded text-white w-fit"
            target="_blank"
          >
            whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
