import Image from 'next/image'

export interface HeroSectionRightContentFeatureProps {

}

export const HeroSectionRightContentFeature = (props: HeroSectionRightContentFeatureProps) => {

    const { } = props

    return (
        <>
            <img
                src="/images/phone.png"
                alt="Phone Mockup"
                className="sm:w-[666px] sm:h-[679px] sm:absolute sm:right-[50px] z-[-1] top-[126px]"
            />
        </>
    )
}