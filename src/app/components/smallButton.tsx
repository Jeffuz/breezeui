interface props {
  disabled?: boolean;
}

const smallButton = ({ disabled = false }: props) => {
  return (
    <button className={`h-[32px] flex justify-center items-center px-[16px] rounded-md font-semibold transition delay-50 text-xs ${disabled ? 'text-gray-300 bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-500/90 text-white'}`}>
      Button
    </button>
  )
}

export default smallButton