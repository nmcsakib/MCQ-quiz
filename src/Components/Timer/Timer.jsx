import { FaRegClock } from "react-icons/fa";
import ButtonWrapper from "../Button/Button";

function TimerSection({ handleSubmit, secondsLeft }) {
 

  // Format seconds into HH:MM:SS
  const formatTime = (secs) => {
    const hrs = String(Math.floor(secs / 3600)).padStart(2, "0");
    const mins = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const secsOnly = String(secs % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secsOnly}`;
  };

  return (
    <section className="flex justify-between items-center mb-8 md:mb-8 lg:mb-16">
      <div className="text-cyan-600 flex items-center gap-3">
        <FaRegClock className="text-3xl" />
        <div className="text-left leading-relaxed text-sm">
          <p className="text-xs text-gray-500">Time remaining</p>
          <p>{formatTime(secondsLeft)} seconds</p>
        </div>
      </div>
      <div
        onClick={handleSubmit}
      >
        <ButtonWrapper label={"Submit"}/>
      </div>
    </section>
  );
}

export default TimerSection;
