const calcy = () =>{
    let math = document.getElementById('math').value;
    let sci = document.getElementById('sci').value;
    let comp = document.getElementById('comp').value;
    let eng = document.getElementById('eng').value;
    let grades="";
    
    let totalGrades = parseFloat(math) + parseFloat(sci) + parseFloat(comp) + parseFloat(eng);
    
    let perc =  (totalGrades/400)*100;
    

    if(perc <= 100 && perc >=80){
        grades = 'A';
    }
    else if(perc <= 79 && perc >=60){
        grades='B';
    }
    else if(perc <= 59 && perc >=40){
        grades='C';
    }
    else {
        grades='F';
    }
    if(perc >=40){
        document.getElementById('showData').innerHTML = ` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. 
    <br> Grade is ${grades}.<br>You are Passed. CONGRATS`
    }
    else{
        document.getElementById('showData').innerHTML = ` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. 
    <br> Grade is ${grades}.<br>You Failed. SORRY`
    }

    
}