function calculateDebt(){
    const mon = Math.ceil(document.getElementById('d1').value);
    const tues = Math.ceil(document.getElementById('d2').value);
    const wed = Math.ceil(document.getElementById('d3').value);
    const thrus = Math.ceil(document.getElementById('d4').value);
    const fri = Math.ceil(document.getElementById('d5').value);
    const sat = Math.ceil(document.getElementById('d6').value);
    const sun = Math.ceil(document.getElementById('d7').value);
    const totalSleptHours = getSum(mon,tues,wed,thrus,fri,sat,sun);
    const actualSleepHours = getActual();
    getPrintResult(actualSleepHours,totalSleptHours);
}

const getSum = (g1,g2,g3,g4,g5,g6,g7)=>{
    return g1+g2+g3+g4+g5+g6+g7;
}

const getActual = () =>{
    return 8*7;
}

const getPrintResult = (idealHours,actualSleepHours)=>{
    if (actualSleepHours === idealHours) {
        document.getElementById('result').innerHTML = `You are getting the perfect amount of sleep ${actualSleepHours} hours.`; 
    } 
    else if (actualSleepHours < idealHours) {
        document.getElementById('result').innerHTML = `You slept ${idealHours - actualSleepHours} hours less than you need this week. You should get some rest.`;
    } 
    else {
        document.getElementById('result').innerHTML = `You are full of energy. You slept ${actualSleepHours-idealHours} hours more than you needed this week.`;
    }
}