interface props {
    disabled?: boolean;
}

const MediumButton = ({ disabled = false }: props) => {
    return (
        <button className={`h-[40px] flex justify-center items-center px-[16px] rounded-md font-semibold transition delay-50 text-base ${disabled ? 'text-gray-300 bg-gray-400 cursor-not-allowed' : 'bg-[#728fcb] hover:bg-[#728fcb]/90 text-white'}`}>
            Button
        </button>
    )
}

export default MediumButton
