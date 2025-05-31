const getData = () => {
    const storedDataStr = localStorage.getItem('quiz-history');
    return storedDataStr ? JSON.parse(storedDataStr) : [];
};

const addToLocal = (submittedScore) => {
    const newEntry = {
        score: submittedScore,
        time: new Date().toISOString() 
    };

    const storedList = getData();

    const alreadyExists = storedList.some(
        item => item.score === newEntry.score && item.time === newEntry.time
    );

    if (alreadyExists) {
        console.log('Already submitted this one');
    } else {
        storedList.unshift(newEntry);
        localStorage.setItem('quiz-history', JSON.stringify(storedList));
    }
};

export {addToLocal}