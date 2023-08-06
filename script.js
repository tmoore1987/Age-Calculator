const birthdayInput = document.getElementById('birthday');
const result = document. getElementById('result');
const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn')

const calculateAge = () => {
    const birthdayValue = birthdayInput.value;
    if (birthdayValue === '') {
        alert('Please enter valid birthday.')
    } else {
        const age = getAge(birthdayValue)
        result.innerText = `Your age is ${age} ${age > 1? 'years': 'year'} old.`
    }
}

const getAge = (birthdayValue) => {
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue)

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if(monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--
    }
    return age;

}

const resetAll = () => {
    result.innerText = '';
}

calculateBtn.addEventListener('click', calculateAge)
resetBtn.addEventListener('click', resetAll)






