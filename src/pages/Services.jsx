import Header from '../components/Header'
import Footer from '../components/Footer'

function Services() {
  return (
    <>
        <Header />
      <div className="m-0 p-0 border-box">
        <div className="flex flex-col gap-[clamp(60px,8vw,128px)] px-[clamp(16px,5vw,32px)] pt-[clamp(20px,4vw,32px)] pb-[clamp(40px,8vw,96px)]">
          <div className="flex flex-col lg:flex-row gap-[clamp(24px,6vw,98px)] items-start">
            <div className="flex flex-col gap-[clamp(16px,3vw,24px)] w-full lg:w-[130%]">
              <div className="text-xs font-inter font-light tracking-wide text-[#131B2E]">
                CAPABILITIES
              </div>
              <div className="text-[clamp(32px,5vw,72px)] font-manrope font-light leading-[1.2] text-[#131B2E]">
                Precision in <span className="text-[#003EC7]">Execution</span>,
                Innovation in Thought.
              </div>
            </div>
            <div className="text-[clamp(14px,2vw,18px)] font-inter font-light text-[#434656] leading-[1.6] tracking-[0.5px] max-w-112.5g:mt-[clamp(16px,4.5vw,65px)]">
              We curate digital experiences that transcend the ordinary. Our
              services are the architectural pillars of modern brand authority.
            </div>
          </div>
          <div className="flex flex-col gap-[clamp(48px,8vw,192px)]">
            <div className="flex flex-col lg:flex-row gap-[clamp(24px,5vw,64px)]">
              <div className="flex flex-col flex-1 gap-[clamp(4px,1.2vw,16px)]">
                <div className="text-xs tracking-[1.2px] font-inter font-light text-[#C3C5D9]">
                  01 / NARRATIVE
                </div>
                <div className="text-[clamp(24px,4vw,36px)] font-manrope font-light text-[#131B2E] leading-[1.2] tracking-[-0.9px]">
                  Script Writing
                </div>
                <div className="text-[clamp(16px,2.5vw,20px)] font-inter font-light text-[#434656] leading-[1.8] pt-2 lg:w-[86%]">
                  Transforming complex ideas into compelling human narratives.
                  We don't just write scripts; we build the emotional
                  scaffolding for your brand's story.
                </div>
                <div className="flex flex-col gap-[clamp(4px,1.2vw,16px)] pt-[clamp(5px,1.8vw,25px)]">
                  <div className="flex gap-4 items-center">
                    <img
                      src={`${import.meta.env.BASE_URL}images/services-overview/icons/icon1.png`}
                      className="w-3.5 h-5"
                    ></img>
                    <div className="text-[#131B2E] font-inter text-base font-normal">
                      Conceptual Storyboarding
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img
                      src={`${import.meta.env.BASE_URL}images/services-overview/icons/Icon2.png`}
                      className="w-5 h-5"
                    ></img>
                    <div className="text-[#131B2E] font-inter text-base font-normal">
                      Brand Voice Development
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img
                      src={`${import.meta.env.BASE_URL}images/services-overview/icons/Icon3.png`}
                      className="w-5 h-5"
                    ></img>
                    <div className="text-[#131B2E] font-inter text-base font-normal">
                      Multi-channel Dialogue
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={`${import.meta.env.BASE_URL}images/services-overview/image2.png`}
                className="w-full lg:w-1/2 object-cover"
              ></img>
            </div>
            <div className="flex flex-col lg:flex-row gap-[clamp(24px,5vw,64px)] items-center">
              <img
                src={`${import.meta.env.BASE_URL}images/services-overview/image1.png`}
                className="w-full lg:w-[55%] h-75 sm:h-100 object-cover object-center pt-[clamp(16px,3vw,48px)]"
              ></img>
              <div className="flex flex-col gap-[clamp(4px,1.2vw,16px)]">
                <div className="text-xs tracking-[1.2px] font-inter font-light text-[#C3C5D9]">
                  02 / VISUALS
                </div>
                <div className="text-[clamp(24px,4vw,36px)] font-manrope font-light text-[#131B2E] leading-[1.2] tracking-[-0.9px]">
                  Video Editing
                </div>
                <div className="text-[clamp(16px,2.5vw,20px)] font-inter font-light text-[#434656] leading-normal lg:w-[85%]">
                  Precision-cut visuals that command attention. Our editing
                  process focuses on rhythm, pacing, and color science to evoke
                  specific psychological responses.
                </div>
                <div className="flex flex-col gap-6 pt-6">
                  <div className="flex flex-col gap-1">
                    <div className="text-[#003EC7] font-inter text-base font-light">
                      Dynamic Pacing
                    </div>
                    <div className="text-[#434656] font-inter text-sm font-light">
                      Cinematic flow optimized for short-form and feature
                      content.
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[#003EC7] font-inter text-base font-light">
                      Advanced Color Grading
                    </div>
                    <div className="text-[#434656] font-inter text-sm font-light">
                      Defining a unique visual palette for your brand's filmic
                      presence.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-between bg-[#F2F3FF] rounded-lg p-[clamp(24px,5vw,48px)]">
                <div className="flex flex-col gap-4 pb-[clamp(16px,2.3vw,32px)]">
                  <div className="text-xs tracking-[1.2px] font-inter font-light text-[#C3C5D9]">
                    03 / GROWTH
                  </div>
                  <div className="text-[clamp(22px,3.5vw,30px)] font-manrope font-light text-[#131B2E] leading-[1.2]">
                    Digital Marketing
                  </div>
                  <div className="text-[clamp(14px,2.2vw,16px)] font-inter font-light text-[#434656] leading-normal">
                    Integrated ecosystem management focusing on community
                    engagement and high-quality lead generation through creative
                    organic strategies.
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <div className="text-xs font-inter font-semibold text-[#003EC7] bg-[#DAE2FD] px-4 py-1.5 rounded-full tracking-wide">
                    SEO STRATEGY
                  </div>
                  <div className="text-xs font-inter font-semibold text-[#003EC7] bg-[#DAE2FD] px-4 py-1.5 rounded-full tracking-wide">
                    SOCIAL ARCHITECTURE
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-[#003EC7] rounded-lg p-[clamp(24px,5vw,48px)]">
                <div className="flex flex-col gap-4 pb-[clamp(16px,2.3vw,32px)]">
                  <div className="text-xs tracking-[1.2px] font-inter font-light text-[#B7C4FF]">
                    04 / SCALABILITY
                  </div>
                  <div className="text-[clamp(22px,3.5vw,30px)] font-manrope font-light text-white leading-[1.2]">
                    Performance Marketing
                  </div>
                  <div className="text-[clamp(14px,2.2vw,16px)] font-inter font-light text-[#DFE3FF] leading-normal">
                    Data-driven aggression. We leverage proprietary analytics
                    and rapid A/B testing to ensure every dollar spent
                    translates to exponential ROI.
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-white/20 pt-6">
                  <div className="text-white font-inter font-semibold text-base">
                    Real-time Attribution
                  </div>
                  <img
                    src={`${import.meta.env.BASE_URL}images/services-overview/icons/Icon-trend.png`}
                    className="h-3 w-auto"
                  ></img>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[clamp(32px,6vw,64px)] px-[clamp(16px,11.5vw,159px)] py-[clamp(32px,7vw,96px)] border-2 border-[#C3C5D91A] rounded-lg">
              <div className="flex flex-col items-center text-center gap-[clamp(3px,1vw,16px)]">
                <div className="text-[12px] font-medium tracking-[1.2px] text-[#005A3C] font-inter">
                  05 / INNOVATION
                </div>
                <div className="text-[clamp(28px,5vw,48px)] font-medium tracking-[-2.4px] text-[#131B2E] font-manrope leading-[1.2]">
                  Product Design
                </div>
                <div className="text-[clamp(16px,2.5vw,20px)] font-light text-[#434656] font-inter leading-normall pt-2 w-full md:w-[60%]">
                  Creating intuitive digital products that marry ergonomic
                  function with museum-grade aesthetics.
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(14px,4.3vw,48px)]">
                <div className="flex flex-col gap-3.5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/services-overview/icons/Icon-pg1.png`}
                    className="w-12 p-[15px_18px] bg-[#E2E7FF] rounded-xl"
                  ></img>
                  <div className="text-[18px] font-light font-manrope text-[#131B2E] leading-[1.4]">
                    UX Blueprinting
                  </div>
                  <div className="text-[14px] font-light text-[#434656] font-inter leading-[1.6]">
                    Mapping journeys that eliminate friction and spark delight
                    at every touchpoint.
                  </div>
                </div>
                <div className="flex flex-col gap-3.5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/services-overview/icons/Icon-pg2.png`}
                    className="w-12 p-3.5 bg-[#E2E7FF] rounded-xl"
                  />
                  <div className="text-[18px] font-light font-manrope text-[#131B2E] leading-[1.4]">
                    UI Aesthetics
                  </div>
                  <div className="text-[14px] font-light text-[#434656] font-inter leading-[1.6]">
                    Developing design systems that serve as a scalable source of
                    truth for your digital identity.
                  </div>
                </div>
                <div className="flex flex-col gap-3.5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/services-overview/icons/Icon-pg3.png`}
                    className="w-12 p-[14px_15px] bg-[#E2E7FF] rounded-xl"
                  />
                  <div className="text-[18px] font-light font-manrope text-[#131B2E] leading-[1.4]">
                    Prototyping
                  </div>
                  <div className="text-[14px] font-light text-[#434656] font-inter leading-[1.6]">
                    High-fidelity interactive models that visualize the future
                    of your product before a single line of code is written.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E2E7FF] rounded-lg flex flex-col items-center text-center gap-[clamp(16px,3vw,32px)] p-[clamp(40px,8vw,128px)]">
          <div className="text-[clamp(28px,4.3vw,60px)] font-bold tracking-[-1.5px] font-manrope text-[#131B2E] leading-tight">
            Ready to redefine your{" "}
            <span className="text-[#0145d7]">Precision</span>?
          </div>
          <div className="text-[clamp(14px,1.3vw,18px)] font-light text-[#434656] font-inter leading-relaxed max-w-2xl">
            Join the ranks of market leaders who prioritize intentional design
            and strategic clarity.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-[clamp(8px,1.5vw,24px)] pt-4">
            <div className="text-[clamp(14px,1.5vw,18px)] font-semibold text-white font-inter leading-normal px-[clamp(16px,2.5vw,25px)] py-[clamp(10px,1.5vw,15px)] bg-[#003EC7] rounded">
              Book Strategy Call
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[clamp(14px,1.5vw,18px)] font-semibold text-[#005A3C] font-inter leading-normal">
                Download Portfolio
              </div>
              <div className="h-0.5 w-8 bg-[#005A3C]"></div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
}

export default Services;
