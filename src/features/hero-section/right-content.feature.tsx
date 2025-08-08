export interface HeroSectionRightContentFeatureProps {

}

export const HeroSectionRightContentFeature = (props: HeroSectionRightContentFeatureProps) => {

    const { } = props

    return (
        <>
            <img
                src="/images/phone.png"
                alt="Phone"
                className="xl:w-full xl:h-full xl:object-cover"
            />
            {/* <img
                src="/images/cropped_phone.png"
                alt="Phone"
                className="hidden xl:flex xl:w-full xl:h-full xl:object-cover xl:my-[-60px] "
            /> */}
        </>
    )
}
// className="sm:w-[666px] sm:h-[679px] sm:absolute sm:right-[50px] z-[-1] sm:top-[126px] sm:object-cover sm:bottom-[0px]"
