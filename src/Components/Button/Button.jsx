import { FaHistory } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const ButtonWrapper = ({label}) => {
  return (
    <div className="flex items-center justify-center">
      <NeumorphismButton label={label} />
    </div>
  );
};

const NeumorphismButton = ({label}) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        ${label === "History" ? "hover:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]" : "shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]"}
        
        transition-all

        ${label === "History" ? "shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]" : "hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]"}
        hover:text-cyan-500
        md:w-[150px] justify-center cursor-pointer
    `}
    >
      {label === "History" ? <FaHistory/> : <FiSend />}
      <span>{label}</span>
    </button>
  );
};

export default ButtonWrapper;