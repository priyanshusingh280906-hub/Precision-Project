import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="m-0 p-0 border-box bg-[#FAF8FF]">
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="text-xs tracking-widest text-[#003EC7] bg-[#EAEDFF] px-3 py-1 rounded-lg w-fit font-inter">
              LET'S CONNECT
            </div>

            <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-manrope text-[#131B2E] leading-tight max-w-3xl">
              Let's Create Something{" "}
              <span className="text-[#086203]">Extraordinary</span>
            </div>

            <div className="text-sm sm:text-base md:text-lg text-[#434656] font-inter leading-relaxed max-w-xl pt-1">
              Whether you're starting from zero or scaling to the next billion,
              we're here to curate your digital presence with surgical
              precision.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-lg p-10">
          <div className="lg:col-span-7 bg-white px-6 sm:px-10 py-10 sm:py-14 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white">
              <div className="flex flex-col gap-2 bg-white">
                <label className="text-xs tracking-wide text-gray-600 font-inter">
                  FULL NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#EAEDFF] border border-black rounded px-4 py-3 text-gray-600 font-inter text-base"
                />
              </div>

              <div className="flex flex-col gap-2 bg-white">
                <label className="text-xs tracking-wide text-gray-600 font-inter">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-[#EAEDFF] border border-black rounded px-4 py-3 text-gray-600 font-inter text-base"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 bg-white">
              <label className="text-xs tracking-wide text-gray-600 font-inter">
                SERVICE OF INTEREST
              </label>
              <select
                name="service"
                value={formData.service || ""}
                onChange={handleChange}
                className="w-full bg-[#EAEDFF] border border-black rounded px-4 py-3 text-gray-600 font-inter text-base"
              >
                <option value="">Select a service</option>
                <option value="digital-strategy">Digital Strategy</option>
                <option value="script-writing">Script Writing</option>
                <option value="video-editing">Video Editing</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="product-design">Product Design</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 bg-white">
              <label className="text-xs tracking-wide text-gray-600 font-inter">
                YOUR MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your vision..."
                className="w-full bg-[#EAEDFF] border border-black rounded px-4 py-4 text-gray-600 font-inter text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-[30%] bg-linear-to-r from-[#003EC7] to-[#0052FF] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Send Brief
            </button>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 pt-10">
            <div className="bg-[#F2F3FF] p-6 rounded-lg flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="bg-[#E2E7FF] p-3 rounded-lg flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/contact-us-img/icon/Icon.png`}
                    className="w-5 h-5"
                  ></img>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-semibold text-[#131B2E] font-manrope">
                    Email Us
                  </div>
                  <div className="text-sm text-gray-600 font-inter">
                    hello@precision.agency
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#E2E7FF] p-3 rounded-lg flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/contact-us-img/icon/Icon1.png`}
                    className="w-5 h-5"
                  ></img>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-semibold text-[#131B2E] font-manrope">
                    Our Studio
                  </div>
                  <div className="text-sm text-gray-600 font-inter">
                    1221 Creative Way, Austin, TX 78701
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#E2E7FF] p-3 rounded-lg flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/contact-us-img/icon/Icon2.png`}
                    className="w-5 h-5"
                  ></img>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-semibold text-[#131B2E] font-manrope">
                    Voice
                  </div>
                  <div className="text-sm text-gray-600 font-inter">
                    +1 (555) 234-8900
                  </div>
                </div>
              </div>
            </div>

            <div
              className="h-75 sm:h-100 lg:h-75 bg-cover bg-center flex items-end justify-center rounded-lg"
              style={{backgroundImage: `url('${import.meta.env.BASE_URL}images/contact-us-img/image1.png')`}}
            >
              <div className="bg-white/80 w-[85%] mb-5 p-4 rounded flex flex-col gap-2">
                <div className="text-sm tracking-widest text-[#005A3C] font-inter">
                  IN-PERSON
                </div>

                <div className="text-sm text-[#131B2E] font-inter">
                  "We host curated strategy sessions every Friday. Stop by for
                  coffee."
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] my-[clamp(16px,7vw,100px)] p-10">
          <div
            className="h-75 sm:h-100 lg:h-125 w-full rounded-2xl bg-cover bg-center flex items-center justify-center"
            style={{backgroundImage: `url('${import.meta.env.BASE_URL}images/contact-us-img/image1.png')`}}
          >
            <div className="bg-white flex items-center gap-4 px-6 py-4 rounded-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/contact-us-img/icon/Icon2.png`}
                className="h-5 w-5 p-2 bg-[#003EC7] rounded-full"
              ></img>

              <div className="text-[#131B2E] font-manrope font-semibold text-base">
                Precision Austin HQ
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
