

export interface TopBannerProps {

}

export const TopBannerComponent = (props: TopBannerProps) => {

    const { } = props

    return (
        <>
            {/* Top Gradient Banner */}
            <div className="w-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold text-center sm:py-[10px] py-[20px] px-[20px]">
                <span className="font-extrabold">🚀 <span className="text-secondary">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots – start your journey today!</span>
            </div>
        </>
    )
}