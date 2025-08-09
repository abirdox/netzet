const TopNavComponent = () => {

    return (
        <>
            {/* Navbar (Desktop) */}
            <nav className="hidden xl:flex justify-between items-start mt-[35px] text-white">
                <div className="">
                    <img src="/images/logo.svg" alt="Logo" className="w-[173.12px] h-[74px]" />
                </div>
                <div className="font-semibold text-semi-gray text-[18px] space-x-[40px] mr-[8px]">
                    <a href="#" className="">About us</a>
                    <a href="#" className="">Contact</a>
                </div>
            </nav>

            {/* Mobile Nav Icon */}
            <div className="xl:hidden flex justify-between items-center mt-[18px]">
                <div className="flex-1 flex justify-center">
                    <img src="/images/logo.svg" alt="Logo" className="w-[105.38px] h-[44.98px]" />
                </div>
                <button className="absolute right-7">
                    {/* <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg> */}
                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="1.03597" x2="19" y2="1.03597" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <line x1="1" y1="7.03597" x2="19" y2="7.03597" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <line x1="1" y1="13.036" x2="19" y2="13.036" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>

                </button>
            </div>
        </>
    )
}

export default TopNavComponent