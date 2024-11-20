import { useEffect } from "react";
import { assets } from "../assets/assets";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-5">
      <h4 className="text-center uppercase text-3xl">
        <span className="text-[#757c82]">about</span> us
      </h4>
      <div className="py-5 flex items-center gap-5 flex-col sm:flex-row">
        <div className="sm:w-1/4">
          <img
            src={assets.about_image}
            loading="lazy"
            className="h-80 rounded"
            alt="about_image"
          />
        </div>
        <div className=" flex flex-col gap-5 text-sm text-[#4B5563] sm:w-[80%]">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you re booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <span className="font-bold capitalize">Our Vision</span>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h3 className=" uppercase">
          WHY <span className="font-bold"> CHOOSE US</span>
        </h3>
        <div className="my-5 flex flex-col md:flex-row gap-2">
          <div className="border p-16 flex flex-col gap-3 hover:bg-main duration-300 hover:text-white group">
            <h3 className="uppercase font-semibold">EFFICIENCY:</h3>
            <p className="text-[#4B5563] group-hover:text-white">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border p-16 flex flex-col gap-3 hover:bg-main duration-300 hover:text-white group">
            <h3 className="uppercase font-semibold">CONVENIENCE:</h3>
            <p className="text-[#4B5563] group-hover:text-white">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border p-16 flex flex-col gap-3 hover:bg-main duration-300 hover:text-white group">
            <h3 className="uppercase font-semibold">PERSONALIZATION:</h3>
            <p className="text-[#4B5563] group-hover:text-white">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
