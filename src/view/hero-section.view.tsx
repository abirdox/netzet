import CopyRightInfoComponent from "@/components/copy-right-info.component"
import HeroSectionLeftContentFeature from "@/features/hero-section/left-content.feature"
import HeroSectionRightContentFeature from "@/features/hero-section/right-content.feature"
import QuizButtonInfo from "@/features/quiz-buton/quiz-button-info.feature"
import QuizButton from "@/features/quiz-buton/quiz-button.feature"

const HeroSection = () => {

    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col-reverse items-center justify-between xl:flex-row">
                {/* Left Content */}
                <div className="text-center xl:text-left xl:mt-[57px] xl:w-[560px] pb-[40px] px-[22px]">
                    <HeroSectionLeftContentFeature />
                    <div className="flex flex-col xl:flex-col-reverse">
                        <div className="text-gray xl:text-left mt-[22px] xl:mt-0 mx-[32.5px] xl:mx-0">
                            <QuizButtonInfo />
                            <CopyRightInfoComponent />
                        </div>
                        <QuizButton />
                    </div>
                </div>
                {/* Right Image */}
                <div className="flex justify-end items-start my-[-60px] z-[-1] xl:w-[820px] xl:h-[700px] xl:absolute xl:right-[20px]">
                    <HeroSectionRightContentFeature />
                </div>
            </section>
        </>
    )
}

export default HeroSection