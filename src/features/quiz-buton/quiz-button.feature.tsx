export interface QuizButtonProps {

}

export const QuizButton = (props: QuizButtonProps) => {

    const { } = props

    return (
        <div className="block text-center sm:w-[313px] w-full sm:py-[30px] ">
            <a href="#"
                className="block text-white bg-primary px-auto py-3 rounded-[10px] text-[20px] font-bold"
                 style={{ filter: "drop-shadow(2px 2px 5px #00E7F9)" }}
                >
                GET STARTED →
            </a>
            <p className="text-[12px] text-white mt-[10px]">
                1-minute quiz for personalized Insights
            </p>
        </div>
    )
}