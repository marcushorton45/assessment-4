const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const goodDayBtn = document.getElementById("goodDayButton")
const badDayBtn = document.getElementById("badDayButton")
const enterNamesBtn = document.getElementById("enterNamesButton")
const fname = document.querySelector('input[name="fname"]')
const lname = document.querySelector('input[name="lname"]')
const profileSubmitBtn = document.getElementById("profileSubmitButton")
const job = document.querySelector('input[name="currentJob"]')
const hometown = document.querySelector('input[name="hometown"]')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getCongradulated = () => {
    axios.get("http://localhost:4000/api/congradulations/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getEncouragement = () => {
    axios.get("http://localhost:4000/api/encouragement/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getLoginInfo = () => {
    let names = fname.value + " " + lname.value
    alert(`Welcome ${names}`)
};

const getProfileInfo = () => {
    alert(`Profile Info:
    - The user's current job is ${job.value} 
    - The user is from ${hometown.value}`)
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goodDayBtn.addEventListener('click', getCongradulated)
badDayBtn.addEventListener('click', getEncouragement)
enterNamesBtn.addEventListener('click', getLoginInfo)
profileSubmitBtn.addEventListener('click', getProfileInfo)