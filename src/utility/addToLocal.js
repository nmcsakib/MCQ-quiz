const getData = () => {
    const storedDataStr = localStorage.getItem('quiz-history');
    return storedDataStr ? JSON.parse(storedDataStr) : [];
};

const addToLocal = (submittedScore) => {
    const now = new Date();

const year = now.getFullYear();         // Year (e.g., 2025)
const month = now.getMonth() + 1;       // Month (0-11, so add 1)
const day = now.getDate();              // Day of the month (1-31)
const hour = now.getHours();            // Hours (0-23)
const minute = now.getMinutes();        // Minutes (0-59)
const second = now.getSeconds(); 
    const newEntry = {
        score: submittedScore,
        time:  `${year}-${month}-${day} ${hour}h-${minute}min-${second}sec`
    };

    const storedList = getData();
        storedList.unshift(newEntry);
        localStorage.setItem('quiz-history', JSON.stringify(storedList))
};

export {addToLocal}