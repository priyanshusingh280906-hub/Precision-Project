import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="flex flex-wrap justify-between items-center bg-[#F8FAFC] border border-[#E2E8F033] px-[clamp(16px,5vw,32px)] py-[clamp(24px,5vw,48px)]">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-extrabold font-[Manrope] text-[#0F172A]">PRECISION</div>
        <div className="text-sm font-normal font-[Inter] text-[#64748B]">© 2026 Precision Agency. All rights reserved.</div>
      </div>
      <div className="flex flex-wrap gap-[clamp(16px,4vw,34px)]">
        <Link to="/services" className="text-lg font-normal font-[Inter] text-[#64748B] no-underline cursor-pointer hover:text-[#0F172A] transition-colors">Services</Link>
        <Link to="/case-studies" className="text-lg font-normal font-[Inter] text-[#64748B] no-underline cursor-pointer hover:text-[#0F172A] transition-colors">Case Studies</Link>
        <a href="#" className="text-lg font-normal font-[Inter] text-[#64748B] no-underline cursor-pointer hover:text-[#0F172A] transition-colors">Privacy</a>
        <a href="#" className="text-lg font-normal font-[Inter] text-[#64748B] no-underline cursor-pointer hover:text-[#0F172A] transition-colors">Terms</a>
      </div>
    </div>
  )
}

export default Footer