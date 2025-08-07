export interface TopNavProps {

}

export const TopNavComponent = (props: TopNavProps) => {

    const { } = props

    return (
        <>
            {/* Navbar (Desktop) */}
            <nav className="hidden sm:flex justify-between items-start mt-[35px] text-white">
                <div className="">
                    <img src="/images/logo.svg" alt="Phone Mockup" className="mx-auto md:max-w-[173.12px] h-[74px]" />
                </div>
                <div className="space-x-[40px]">
                    <a href="#" className="font-[18px]">About us</a>
                    <a href="#" className="hover:text-pink-400">Contact</a>
                </div>
            </nav>

            {/* Mobile Nav Icon */}
            <div className="sm:hidden flex justify-between items-center mt-[35px]">
                <div className="flex-1 flex justify-center">
                    <img src="/images/logo.svg" alt="Phone Mockup" className="w-[107.78px] h-[46.07px]" />
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