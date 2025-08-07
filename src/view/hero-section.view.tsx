import { CopyRightInfoComponent } from "@/components/copy-right-info.component"
import { HeroSectionLeftContentFeature } from "@/features/hero-section/left-content.feature"
import { HeroSectionRightContentFeature } from "@/features/hero-section/right-content.feature"
import { QuizButtonInfo } from "@/features/quiz-buton/quiz-button-info.feature"
import { QuizButton } from "@/features/quiz-buton/quiz-button.feature"

export interface HeroSectionProps {

}

export const HeroSection = (props: HeroSectionProps) => {

    const { } = props

    return (
        <>
            {/* <!-- Hero Section --> */}
            <section className="flex flex-col-reverse sm:flex-row items-center justify-between">
                {/* <!-- Left Content --> */}
                <div className="text-center sm:text-left sm:mt-[57px] sm:w-[516px] pb-[40px]">
                    <HeroSectionLeftContentFeature />
                    <div className="flex flex-col sm:flex-col-reverse">
                        <div className="text-gray sm:text-left mt-[22px] mb-[40px]">
                            <QuizButtonInfo />
                            <CopyRightInfoComponent />
                        </div>
                        <QuizButton />
                    </div>
                </div>

                {/* <!-- Right Image --> */}
                <div className="flex justify-end items-start">
                    <HeroSectionRightContentFeature />
                </div>
            </section>
        </>
    )
}