import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className="m-0 p-0 box-border">
        <div className="w-full flex box-border bg-linear-to-b from-white to-[#f8f0fc] gap-[clamp(20px,5vw,64px)] flex-col md:flex-row md:items-center p-10">
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <div className="text-xs font-bold font-[Inter] text-[#005A3C] bg-[#EAEDFF] px-4 py-1.5 rounded-full w-fit">
              DIGITAL CURATORS
            </div>
            <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal font-[Manrope] text-[#0F172A] leading-tight">
              Elevating
              <p className="text-7xl md:text-8xl lg:text-9xl font-normal font-[Inter] text-[#015405] mt-5">Brand Stories</p>
              With Intent.
            </div>
            <div className="text-lg md:text-xl font-[Inter] text-gray-600 w-full md:w-4/5 leading-relaxed">
              We don't just build interfaces. We curate experiences through rigorous precision and editorial authority.
            </div>
            <div className="flex flex-wrap gap-4 mt-2.5">
              <div className="px-8 py-4 bg-linear-to-r from-blue-700 to-blue-500 text-white rounded-md font-medium text-lg font-[Manrope] hover:scale-105 hover:shadow-lg transition duration-200 md:content-center cursor-pointer">
                View Showcase
              </div>
              <div className="px-8 py-4 bg-blue-100 text-blue-700 text-lg font-medium font-[Manrope] rounded-md hover:scale-105 hover:shadow-md transition duration-200 cursor-pointer">
                The Methodology
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid">
            <img
              src={`${import.meta.env.BASE_URL}images/homepage-img/image2.png`}
              alt="Hero Image 2"
              className="col-start-1 row-start-1 w-full max-w-xl min-h-175 rounded-[5px] z-2 -rotate-2 object-cover"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/homepage-img/image1.png`}
              alt="Hero Image 1"
              className="col-start-1 row-start-1 w-full max-w-xl min-h-175 rounded-[5px] z-1 translate-x-12.5 rotate-3 opacity-40 object-cover"
            />
          </div>
        </div>

        <div className="box-border flex flex-col mx-4 sm:mx-6 md:mx-10 my-16 sm:my-20 md:my-32 gap-10 sm:gap-16 md:gap-24">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div className="flex flex-col gap-5">
              <div className="text-xs font-[Inter] text-gray-500 w-fit">
                EXPERTISE
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-[Manrope] text-[#131B2E]">
                The Precision Toolkit
              </div>
            </div>
            <div className="max-w-xs text-sm font-[Inter] text-gray-600">
              A curated selection of technical and creative disciplines aimed at total brand transformation.
            </div>
          </div>
          <div className="flex justify-evenly gap-5 sm:gap-6 md:gap-8 md:flex-row flex-col">
            <div className="flex flex-col pb-6 gap-8">
              <div className="flex flex-col gap-3.5 sm:gap-4 bg-[#F2F3FF] p-5 sm:p-6 md:p-10 rounded-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/homepage-img/icons/Icon1.png`}
                  alt="Script Writing Icon"
                  className="w-6 h-6"
                />
                <div className="text-2xl font-normal font-[Manrope]">
                  Script Writing
                </div>
                <div className="text-sm font-[Inter] text-gray-600">
                  Articulating the core narrative of your brand through cinematic dialogue and strategic storytelling.
                </div>
              </div>
              <div className="flex flex-col gap-3.5 sm:gap-4 bg-[#F2F3FF] p-10 rounded-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/homepage-img/icons/Icon2.png`}
                  alt="Video Editing Icon"
                  className="w-6 h-6"
                />
                <div className="text-2xl font-normal font-[Manrope]">
                  Video Editing
                </div>
                <div className="text-sm font-[Inter] text-gray-600">
                  High-end post-production that maintains the integrity of your visual language.
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-12 gap-8 md:pt-0">
              <div className="flex flex-col gap-4 bg-[#F2F3FF] p-10 rounded-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/homepage-img/icons/Icon3.png`}
                  alt="Digital Marketing Icon"
                  className="w-6 h-6"
                />
                <div className="text-2xl font-normal font-[Manrope]">
                  Digital Marketing
                </div>
                <div className="text-sm font-[Inter] text-gray-600">
                  Omnichannel strategies that place your message in the hands of the right curators.
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-[#F2F3FF] p-10 rounded-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/homepage-img/icons/Icon4.png`}
                  alt="Performance Icon"
                  className="w-6 h-6"
                />
                <div className="text-2xl font-normal font-[Manrope]">
                  Performance
                </div>
                <div className="text-sm font-[Inter] text-gray-600">
                  Data-driven scaling that respects the aesthetic soul of your campaigns.
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#F2F3FF] px-5 sm:px-6 md:px-10 py-10 sm:py-16 md:py-24 lg:py-40 gap-5 rounded-md">
              <img
                src={`${import.meta.env.BASE_URL}images/homepage-img/icons/Icon5.png`}
                alt="Product Design Icon"
                className="w-4.5 h-6"
              />
              <div className="text-2xl font-normal font-[Manrope]">
                Product Design
              </div>
              <div className="text-sm font-[Inter] text-gray-600">
                Architecting digital ecosystems that prioritize user focus and high-end visual utility.
              </div>
              <div className="pt-5 text-base font-[Inter] text-green-700 hover:underline cursor-pointer">
                Explore our design ethos →
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full bg-[#FAF8FF] gap-[clamp(32px,6vw,64px)] px-4 sm:px-6 md:px-10 lg:px-12 py-[clamp(60px,10vw,128px)]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 h-px bg-[#C3C5D933]"></div>
            <div className="text-xs tracking-[2.4px] font-[Inter] text-[#737688] whitespace-nowrap px-4">
              SELECTED CASE STUDIES
            </div>
            <div className="flex-1 h-px bg-[#C3C5D933]"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col gap-8">
              <img
                src={`${import.meta.env.BASE_URL}images/homepage-img/image3.png`}
                alt="LUMIÈRE ATELIER case study"
                className="w-full max-w-139 min-h-100 rounded-[5px] object-cover"
              />
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-normal font-[Manrope] text-[#131B2E]">
                    LUMIÈRE ATELIER
                  </div>
                  <div className="text-sm font-[Inter] text-[#434656]">
                    EDITORIAL WEB DESIGN / BRANDING
                  </div>
                </div>
                <div className="text-xs font-bold font-[Inter] text-[#005A3C]">
                  2024
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:mt-24">
              <img
                src={`${import.meta.env.BASE_URL}images/homepage-img/image4.png`}
                alt="KINETIC RETAIL case study"
                className="w-full max-w-139 min-h-100 rounded-[5px] object-cover"
              />
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold font-[Manrope] text-[#131B2E]">
                    KINETIC RETAIL
                  </div>
                  <div className="text-sm font-[Inter] text-[#434656]">
                    PERFORMANCE MARKETING / CONTENT
                  </div>
                </div>
                <div className="text-xs font-bold font-[Inter] text-[#005A3C]">
                  2023
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[clamp(16px,5vw,32px)] py-[clamp(60px,10vw,112px)]">
          <div className="flex flex-col items-center gap-7 bg-[#0052FF] rounded-4xl px-[clamp(40px,8vw,96px)] py-[clamp(40px,8vw,96px)]">
            <div className="text-[clamp(28px,5vw,60px)] font-extrabold font-[Manrope] tracking-[-3px] text-white max-w-125 text-center leading-tight">
              Ready to refine your narrative?
            </div>
            <div className="text-lg font-normal font-[Inter] text-white max-w-137.5 text-center p-3">
              We are currently accepting new projects for Q3 2024. Let's build something intentional together.
            </div>
            <div className="text-lg font-medium font-[Manrope] text-[#003EC7] bg-white rounded-xl min-w-40 text-center px-[clamp(24px,5vw,40px)] py-[clamp(12px,3vw,15px)] cursor-pointer hover:shadow-lg transition">
              Start a Project
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home