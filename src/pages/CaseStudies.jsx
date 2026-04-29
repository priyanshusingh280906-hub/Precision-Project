import Header from '../components/Header'
import Footer from '../components/Footer'

function CaseStudies() {
  return (
    <>
        <Header />
     <div className="m-0 p-0 border-box">
    <div className="main">
        <div className="flex flex-col gap-4 sm:gap-5 max-w-3xl px-4 sm:px-6 md:px-10 py-10">

            <div className="text-xs sm:text-sm tracking-wide text-[#005A3C] font-inter leading-4.5">
                OUR PORTFOLIO
            </div>

            <div
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light font-manrope text-[#131B2E] leading-tight tracking-tighter max-w-xl">
                Crafting digital <span className="text-[#003EC7] leading-none">authority</span> for global brands.
            </div>

            <div className="pt-4 text-base sm:text-lg md:text-xl text-[#434656] font-inter leading-relaxed">
                We don't just build websites; we curate digital experiences that command attention. Explore how we've
                helped market leaders redefine their digital presence through intentional design and technical
                precision.
            </div>

        </div>
        <div className="grid md:grid-cols-2 gap-10 px-4 sm:px-6 md:px-10 py-10">

            <div className="flex flex-col gap-6">

                <img src={`${import.meta.env.BASE_URL}images/case-studies-img/image1.png`} className="w-full max-w-xl rounded-xl object-cover" />

                <div className="flex flex-col gap-2">

                    <div className="text-xs tracking-widest text-gray-500">
                        UI/UX STRATEGY & DATA VIZ
                    </div>

                    <div className="text-xl sm:text-2xl font-manrope font-light text-[#131B2E]">
                        Lumina Analytics
                    </div>

                    <div className="text-sm sm:text-base text-[#434656] leading-relaxed max-w-md">
                        A transformative redesign of an enterprise data platform, resulting in a 40% increase in user
                        retention.
                    </div>

                </div>

            </div>


            <div className="flex flex-col gap-6 md:pt-20">

                <img src={`${import.meta.env.BASE_URL}images/case-studies-img/image2.png`} className="w-full max-w-xl rounded-xl object-cover"></img>

                <div className="flex flex-col gap-2">

                    <div className="text-xs tracking-widest text-gray-500">
                        E-COMMERCE EXPERIENCE
                    </div>

                    <div className="text-xl sm:text-2xl font-manrope font-light text-[#131B2E]">
                        Ethereal Watches
                    </div>

                    <div className="text-sm sm:text-base text-[#434656] leading-relaxed max-w-md">
                        Crafting a bespoke digital boutique that translated tangible luxury into a seamless mobile
                        shopping experience.
                    </div>

                </div>

            </div>


            <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 py-16">

                <img src={`${import.meta.env.BASE_URL}images/case-studies-img/image3.jpg`} className="w-16 sm:w-20 md:w-24 rounded-xl object-cover"></img>

                <div className="flex flex-col gap-4">

                    <img src={`${import.meta.env.BASE_URL}images/case-studies-img/icon/Icon1.png`} className="w-8"></img>

                    <div
                        className="text-lg sm:text-2xl md:text-3xl font-manrope font-medium leading-relaxed text-[#131B2E]">
                        "Precision didn't just deliver a website; they delivered a new standard for our industry. Their
                        intentional use of space and typography mirrors our own commitment to excellence."
                    </div>

                    <div className="text-sm text-[#434656]">
                        Marcus Thorne — CEO, LUMINA GLOBAL
                    </div>

                </div>

            </div>


            <div className="flex flex-col gap-6">

                <img src={`${import.meta.env.BASE_URL}images/case-studies-img/image4.png`} className="w-full max-w-xl rounded-xl object-cover"></img>

                <div className="flex flex-col gap-2">

                    <div className="text-xs tracking-widest text-gray-500">
                        PRODUCT DESIGN
                    </div>

                    <div className="text-xl sm:text-2xl font-manrope font-light text-[#131B2E]">
                        Velo Social
                    </div>

                    <div className="text-sm text-[#434656]">
                        Reimagining social connection through a privacy-first mobile application focused on
                        high-fidelity interaction.
                    </div>

                </div>

            </div>


            <div className="flex flex-col gap-6 md:pt-20">

                <img src={`${import.meta.env.BASE_URL}images/case-studies-img/image5.png`} className="w-full max-w-xl rounded-xl object-cover"></img>

                <div className="flex flex-col gap-2">

                    <div className="text-xs tracking-widest text-gray-500">
                        BRAND IDENTITY
                    </div>

                    <div className="text-xl sm:text-2xl font-manrope font-light text-[#131B2E]">
                        Vertex Capital
                    </div>

                    <div className="text-sm text-[#434656]">
                        Developing a digital-first brand architecture for a leading venture firm, emphasizing stability
                        and innovation.
                    </div>

                </div>

            </div>

        </div>
        <div
            className="grid md:grid-cols-2 gap-10 bg-[#F2F3FF] px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 mt-20 sm:mt-24 md:mt-40">

            <div className="flex flex-col gap-6 max-w-xl">

                <div
                    className="text-2xl sm:text-3xl md:text-4xl font-manrope font-light text-[#131B2E] leading-tight tracking-[-0.02em]">
                    Designed for those who lead.
                </div>

                <div className="text-sm sm:text-base text-[#434656] leading-relaxed">
                    Our methodology is rooted in the belief that digital interfaces should be as refined as the physical
                    products they represent.
                </div>

                <div className="flex flex-col gap-8 pt-4">

                    <div className="flex gap-4 items-start">

                        <img src={`${import.meta.env.BASE_URL}images/case-studies-img/icon/Icon2.png`} className="w-6.5 h-8 p-2 bg-[#0052FF33] rounded"></img>

                        <div className="flex flex-col gap-1">

                            <div className="text-base font-semibold text-[#131B2E] font-inter">
                                Architectural Rigor
                            </div>

                            <div className="text-sm text-[#434656]">
                                Grid-based layouts that ensure visual stability across all device scales.
                            </div>

                        </div>

                    </div>

                    <div className="flex gap-4 items-start">

                        <img src={`${import.meta.env.BASE_URL}images/case-studies-img/icon/Icon3.png`} className="w-8 h-8 p-2 bg-[#0052FF33] rounded"></img>

                        <div className="flex flex-col gap-1">

                            <div className="text-base font-semibold text-[#131B2E] font-inter">
                                User-Centric Narrative
                            </div>

                            <div className="text-sm text-[#434656]">
                                We treat every scroll as a chapter in your brand's unique story.
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="grid grid-cols-2 gap-4 md:gap-6">

                <div className="bg-white rounded-md p-6 flex flex-col gap-1">

                    <div className="text-3xl sm:text-4xl font-manrope font-light text-[#003EC7]">
                        98%
                    </div>

                    <div className="text-sm text-[#737688]">
                        CLIENT RETENTION
                    </div>

                </div>

                <div className="bg-white rounded-md p-6 flex flex-col gap-1 md:mt-8">

                    <div className="text-3xl sm:text-4xl font-manrope font-light text-[#003EC7]">
                        15+
                    </div>

                    <div className="text-sm text-[#737688]">
                        DESIGN AWARDS
                    </div>

                </div>

                <div className="bg-white rounded-md p-6 flex flex-col gap-1">

                    <div className="text-3xl sm:text-4xl font-manrope font-light text-[#003EC7]">
                        2.4x
                    </div>

                    <div className="text-sm text-[#737688]">
                        AVG CONVERSION LIFT
                    </div>

                </div>

                <div className="bg-white rounded-md p-6 flex flex-col gap-1 md:mt-8">

                    <div className="text-3xl sm:text-4xl font-manrope font-light text-[#003EC7]">
                        50m
                    </div>

                    <div className="text-sm text-[#737688]">
                        USERS IMPACTED
                    </div>

                </div>

            </div>

        </div>
        <div
            className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 my-20 sm:my-28 md:my-40">

            <div
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-manrope font-semibold text-[#131B2E] leading-tight text-center max-w-3xl">
                Ready to curate your next <span className="text-[#003EC7]">digital masterpiece?</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">

                <div
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-linear-to-r from-[#003EC7] to-[#0052FF] text-white rounded-md font-manrope font-medium text-sm sm:text-base md:text-lg">
                    Start a Project
                </div>

                <div
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#E2E7FF] text-[#003EC7] rounded-md font-manrope font-medium text-sm sm:text-base md:text-lg">
                    <a href="#" className="no-underline text-inherit">
                        View Services
                    </a>
                </div>

            </div>

        </div>
    </div>
    <Footer />
</div>
    </>
  )
}

export default CaseStudies