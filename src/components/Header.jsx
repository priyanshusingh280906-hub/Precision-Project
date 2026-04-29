import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="m-0 p-0 box-border">
      <div className="flex justify-between items-center box-border bg-[#F8FAFCCC] p-[clamp(16px,3vw,30px)] md:flex-row flex-col gap-[clamp(16px,4vw,40px)] md:text-center">
        <Link to="/" className="text-[20px] font-bold font-[Manrope] text-[#0F172A] md:text-center no-underline">
          PRECISION
        </Link>
        <div className="flex justify-center items-center gap-[clamp(16px,4vw,40px)] font-[Inter] font-normal">
          <Link to="/services" className="text-[16px] text-[#475569] no-underline hover:text-[#0F172A] transition-colors">Services</Link>
          <Link to="/case-studies" className="text-[16px] text-[#475569] no-underline hover:text-[#0F172A] transition-colors">Case Studies</Link>
          <Link to="/contact" className="text-[16px] text-[#475569] no-underline hover:text-[#0F172A] transition-colors">Contact</Link>
        </div>
        <Link to="/login" className="px-6.25 py-3.75 bg-linear-to-r from-[#003EC7] to-[#0052FF] text-white rounded-[15px] font-medium text-[16px] font-[Manrope] cursor-pointer md:justify-center hover:opacity-90 transition-opacity no-underline">
          Start a Project
        </Link>
      </div>
    </div>
    </>
  )
}

export default Header