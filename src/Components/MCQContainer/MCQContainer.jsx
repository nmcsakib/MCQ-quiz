import { FaClock, FaRegClock } from "react-icons/fa";

const MCQContainer = () => {
    return (
        <div className="rounded-xl w-[1000px] border h-[500px] bg-white text-cyan-700">
            {/* Time and submit */}
       <section className="flex flex-col p-5" >
            <section className="flex justify-between items-center mb-16">
             <div className="text-cyan-600 flex items-center gap-3">
                <FaRegClock className="text-3xl"/> 
                <div className="text-left leading-relaxed text-sm">
                    <p className="text-xs text-gray-500">Time remaining</p>
                    <p>00:02:43 seconds</p>
                </div>
            </div>
            <button className="btn btn-success">Submit</button>
           </section>
            {/* Time and submit */}

            {/* Question Container */}
            <section className="flex flex-col justify-center items-start gap-2">
                <p>Quesiton 1 of 10</p>
                <div className="flex flex-col items-start gap-6 w-full">
                    <h2 className="text-2xl font-bold">What is the capital of Bangladesh?</h2>
                    <ul className="text-start w-2/3 grid grid-cols-2 gap-5">
                        <li className="border border-gray-400 rounded-xl p-3">A. New Delhi</li>
                        <li className="border border-gray-400 rounded-xl p-3">B. Riad</li>
                        <li className="border border-gray-400 rounded-xl p-3">C. Dhaka</li>
                        <li className="border border-gray-400 rounded-xl p-3">D. Tokyo</li>
                    </ul>
                </div>
            </section>
            {/* Quesiton Container */}

            {/* Pagination */}

        <div className="join w-full flex justify-center mt-5 gap-2">
            <button className="join-item btn btn-outline">Prev</button>
  <input
    className="join-item btn btn-square bg-cyan-600 border-none"
    type="radio"
    name="options"
    aria-label="1"
    checked="checked" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
   <button className="join-item btn btn-outline">Next</button>
</div>


            {/* Pagination */}
       </section>

            
        </div>
    );
};

export default MCQContainer;