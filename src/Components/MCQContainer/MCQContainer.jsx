import questions from "../../DB/questions";
import { useEffect, useRef, useState } from "react";
import TimerApp from "../Timer/Timer";
import ButtonWrapper from "../Button/Button";

const MCQContainer = () => {
   let time = 120;
    const [questionSet, setQuestionSet] = useState([]);
    const [index, setIndex] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null)
    const [userAnswers, setUserAnswers] = useState({});
    const [start, setStart] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(time);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const correctAns = questionSet[index]?.options[questionSet[index].answer];
    const [score, setScore] = useState(0)

   const getRandomSet = () => {
  const allSets = Object.values(questions);
  const randomIndex = Math.floor(Math.random() * allSets.length);
  return allSets[randomIndex];
};
    useEffect(() => {
        const current = userAnswers[index];
        if (current) {
            setSelectedOption(current.selected);
            setIsDisabled(current.disabled);
        } else {
            setSelectedOption(null);
            setIsDisabled(false);
        }
    }, [index, userAnswers]);


    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

   const handleStart = () => {
    setScore(0);
    setUserAnswers({});           
    setSelectedOption(null);     
    setIsDisabled(false);          
    setIndex(0);               
    setQuestionSet(getRandomSet());

    if (!isRunning) {
        if (secondsLeft === 0) setSecondsLeft(time);
        setIsRunning(true);
        startTimer();
    }
};


    const handleCorrectAns = (e) => {
        const selected = e.target.innerText;

        setUserAnswers((prev) => ({
            ...prev,
            [index]: {
                selected,
                disabled: true
            }
        }));

        if (selected === correctAns) {
            setScore((prev) => prev + 1);
        }

        setSelectedOption(selected);
        setIsDisabled(true);
    };

    const handleSubmit = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setSecondsLeft(0);
        setSelectedOption(null); // Clear selection
        document.getElementById('my_modal_2').showModal();
        setStart(false);
    };

    useEffect(() => {
        // console.log(questionSet);
        if(start){
            setSecondsLeft(questionSet.length > 5 ? 120 : 60)
        }
    }, [questionSet, start]);
    useEffect(() => {
        secondsLeft == 0 && handleSubmit()
    }, [secondsLeft]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, []);
    return (
        <div className={`rounded-tl-2xl rounded-br-2xl w-4/5 min-w-[300px] max-w-[1000px] border bg-[#fcfcfc] text-cyan-700 my-10 md:my-0 ${start == true ? 'block' : 'flex'} justify-center items-center`}>
            <section className={`${start == false ? 'flex' : 'hidden'} flex-col justify-between h-1/2 gap-5`}>
                <div>
                    <h2 className="text-stone-500 text-3xl font-semibold text-center">Level Up Your Mind</h2>
                    <p className="text-sm text-stone-400 text-center mt-2">Try a Quiz Now</p>
                </div>
                <div onClick={() => {
                    setIndex(0)
                    handleStart()
                    setStart(true)
                }}>
                    <ButtonWrapper label={"start"} />
                </div>
            </section>
            <section className={`${start == false ? 'hidden' : 'flex'} flex-col p-5`} >
                {/* Time and submit */}
                <TimerApp secondsLeft={secondsLeft} />
                {/* Time and submit */}

                {/* Question Container */}
                <section className="flex flex-col justify-center items-start gap-2">
                    <p className="text-xs md:text-lg">Quesiton {questionSet[index]?.id} of {questionSet.length}</p>

                    <div className="flex flex-col items-start gap-6 w-full">
                        <h2 className="text-lg md:text-2xl font-bold">{questionSet[index]?.question}</h2>
                        <ul className="text-start font-semibold w-2/3 grid md:grid-cols-2 md:gap-5 gap-3 ">
                            <li> <button disabled={isDisabled} onClick={e => handleCorrectAns(e)} className={`border ${selectedOption === questionSet[index]?.options?.a ? "selected" : ""} hover:border-yellow-600 disabled:border-gray-400 border-gray-400 cursor-pointer rounded-xl p-2 md:p-3 w-full`} >{questionSet[index]?.options?.a}</button></li>

                            <li> <button disabled={isDisabled} onClick={e => handleCorrectAns(e)} className={`border ${selectedOption === questionSet[index]?.options?.b ? "selected" : ""} hover:border-yellow-600 disabled:border-gray-400 border-gray-400 cursor-pointer rounded-xl p-2 md:p-3 w-full`} >{questionSet[index]?.options?.b}</button></li>

                            <li> <button disabled={isDisabled} onClick={e => handleCorrectAns(e)} className={`border ${selectedOption === questionSet[index]?.options?.c ? "selected" : ""} hover:border-yellow-600 disabled:border-gray-400 border-gray-400 cursor-pointer rounded-xl p-2 md:p-3 w-full`} >{questionSet[index]?.options?.c}</button></li>

                            <li> <button disabled={isDisabled} onClick={e => handleCorrectAns(e)} className={`border ${selectedOption === questionSet[index]?.options?.d ? "selected" : ""} hover:border-yellow-600 disabled:border-gray-400 border-gray-400 cursor-pointer rounded-xl p-2 md:p-3 w-full`} >{questionSet[index]?.options?.d}</button></li>
                        </ul>
                    </div>

                </section>
                {/* Quesiton Container */}

                {/* Pagination */}

                <div className="join w-full flex justify-center my-4 md:my-8 gap-2 disabled:text-red-400">
                    <button
                        onClick={() => {
                            setIndex((prevIndex) => (prevIndex !== 0 ? prevIndex - 1 : 0));
                        }}
                        className="join-item btn btn-outline"
                    >
                        Prev
                    </button>
                    <div className="hidden md:flex justify-center items-center gap-2">
                        {
                            questionSet.map(question =>
                                <input key={question.id} onClick={() => setIndex(question?.id - 1)}
                                    className="join-item btn btn-square checked:bg-cyan-600 border-none"
                                    type="radio"
                                    name="options"
                                    aria-label={question?.id}
                                    checked={question?.id == index + 1 && "checked"} />
                            )
                        }
                    </div>
                    <button onClick={() => selectedOption && (setIndex(prevIndex => index != questionSet.length - 1 ? (prevIndex + 1) : questionSet.length - 1))} className="join-item btn btn-outline">Next</button>
                </div>


                {/* Pagination */}
                <div onClick={handleSubmit}>
                <ButtonWrapper label={"Submit"}/>
                </div>
            </section>


            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">{score != 0 ? "Congratulations" : "Thank you for giving the test"}</h3>
                    <p className="py-4">Your Score is : {score}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    );
};

export default MCQContainer;