export interface HeroSectionLeftContentFeatureProps {

}

export const HeroSectionLeftContentFeature = (props: HeroSectionLeftContentFeatureProps) => {

    const { } = props

    return (
        <>
            <h1 className="text-[25px] xl:text-[35px] xl:text-left font-bold leading-tight">
                Want to Turn Social Media Into a Profitable Career?
            </h1>
            <p className="text-[25px] xl:text-[35px] text-semi_secondary font-bold mb-[22px] xl:mb-[16px] drop-shadow" 
            style={{ filter: "drop-shadow(0px 4px 2px #FC004E)" }}>
                Discover your way to success <br className="hidden xl:block" /> with Fametonic:
            </p>

            <ul className="text-base text-[16px] font-semibold space-y-[10px] text-left ">
                <li className="flex items-start gap-[10px]">
                    <span>✨</span>
                    <span>Start growing your influence right away—no waiting required!</span>
                </li>
                <li className="flex items-start gap-[10px]">
                    <span>✨</span>
                    <span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
                </li>
                <li className="flex items-start gap-[10px]">
                    <span>✨</span>
                    <span>Use a Personal AI Worker to boost your content</span>
                </li>
                <li className="flex items-start gap-[10px]">
                    <span>✨</span>
                    <span>Learn from expert-led courses designed for aspiring influencers</span>
                </li>
            </ul>

        </>
    )
}