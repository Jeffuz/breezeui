interface props {
    disabled?: boolean;
}

const largeButton = ({ disabled = false }: props) => {
    return (
        <button className={`h-[52px] flex justify-center items-center px-[24px] rounded-lg font-semibold transition delay-50 text-base ${disabled ? 'text-gray-300 bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-500/90 text-white'}`}>
            Button
        </button>
    )
}

export default largeButton

