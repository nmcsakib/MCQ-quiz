import { FaClock, FaRegClock } from "react-icons/fa";

const MCQContainer = () => {
    return (
        <div className="rounded-xl w-[1000px] border h-[500px] bg-white">
            {/* Time and submit */}
           <div className="flex justify-between items-center p-5">
             <div className="text-cyan-600 flex items-center gap-3">
                <FaRegClock className="text-3xl"/> 
                <div className="text-left leading-relaxed text-sm">
                    <p className="text-xs text-gray-500">Time remaining</p>
                    <p>00:02:43 seconds</p>
                </div>
            </div>
            <button className="btn btn-success">Submit</button>
           </div>
            {/* Time and submit */}

            
        </div>
    );
};

export default MCQContainer;