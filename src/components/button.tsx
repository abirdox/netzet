export interface NetzetButtonProps {
    title: string
    info?: string
}

const NetzetButton = (props: NetzetButtonProps) => {

    const { title, info } = props

    return (
        <>
            <a href="#"
                className="block text-white bg-primary px-auto py-3 rounded-[10px] text-[20px] font-bold glow-button"

            >
                {title}
            </a>
            {info && <p className="text-[12px] text-white mt-[10px]">{info}</p>}
        </>
    )
}

export default NetzetButton