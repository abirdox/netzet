const TopNavComponent = () => {

    return (
        <>
            {/* Navbar (Desktop) */}
            <nav className="hidden xl:flex justify-between items-start mt-[35px] text-white">
                <div className="">
                    <img src="/images/logo.svg" alt="Logo" className="w-[169.27px] h-[72.25px]" />
                </div>
                <div className="space-x-[40px]">
                    <a href="#" className="font-[18px] font-semibold text-semi_gray">About us</a>
                    <a href="#" className="font-[18px] font-semibold text-semi_gray">Contact</a>
                </div>
            </nav>

            {/* Mobile Nav Icon */}
            <div className="xl:hidden flex justify-between items-center mt-[18px]">
                <div className="flex-1 flex justify-center">
                    <img src="/images/logo.svg" alt="Logo" className="w-[105.38px] h-[44.98px]" />
                </div>
                <button className="absolute right-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default TopNavComponent