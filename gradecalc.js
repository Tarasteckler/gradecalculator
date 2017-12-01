function calculateCurrentGrade(){

    //quiz
    var quiz = arrayFromString(document.getElementById("quizzes").value);
    var numQuizArr = convertArrayStringToNumber(quiz);
    var avgQuiz = averageArray(numQuizArr);
    var quizWeight = document.getElementById("quizWeight").value;
    var quizWeightedAvg = weightAvg(avgQuiz,quizWeight);
    colorRowByGrade("qRow",avgQuiz);

    //test
    var test = arrayFromString(document.getElementById("tests").value);
    var numTestArr = convertArrayStringToNumber(test);
    var avgTest = averageArray(numTestArr);
    var testWeight = document.getElementById("testWeight").value;
    var testWeightedAvg = weightAvg(avgTest,testWeight);
    colorRowByGrade("tRow", avgTest);

    //homework
    var hw = arrayFromString(document.getElementById("hw").value);
    var numHwArr = convertArrayStringToNumber(hw);
    var avgHw = averageArray(numHwArr);
    var hwWeight = document.getElementById("hwWeight").value;
    var hwWeightedAvg = weightAvg(avgHw,hwWeight);
    colorRowByGrade("hRow", avgHw);

    if (isNaN(parseInt(document.getElementById("finalWeight").value)) === true ){
        document.getElementById("currentGrade").innerHTML = "ERROR: Please enter a valid number for your final weight.";
        return;
    }

    var currentGrade = Math.round(((quizWeightedAvg + testWeightedAvg + hwWeightedAvg)/
        (1- (document.getElementById("finalWeight").value)/100)));

    document.getElementById("currentGrade").innerHTML = "Your current grade is: " + currentGrade + "%.";
    return currentGrade;
}

function colorRowByGrade(row, grade){
    if ((grade)  >= 90){
        document.getElementById(row).style.backgroundColor = "green";
    }
    if ((grade) >= 80 && grade < 90){
        document.getElementById(row).style.backgroundColor = "yellow";
    }
    if ((grade)< 80){
        document.getElementById(row).style.backgroundColor = "red";
    }
}


function arrayFromString(str) {
    return str.split(",");
}

function convertArrayStringToNumber(strArr){
    var numArr = [];
    for (var i=0; i < strArr.length; i++){
        if (isNaN(strArr[i]) === true ){
            return;
        }
        numArr.push(parseInt(strArr[i]));
    }
    return numArr;
}

function averageArray(arr){
    var sum = 0;
    for (var i=0; i < arr.length; i++){
        if (isNaN(arr[i]) === true ){
            return;
        }
        sum += arr[i];
    }
    return sum / arr.length;
}

function weightAvg(num,weight){
    return   num * weight/100;
}

function validateInput(){
    if (parseInt(document.getElementById("quizWeight").value) + parseInt(document.getElementById("testWeight").value) + parseInt(document.getElementById("hwWeight").value) +
        parseInt(document.getElementById("finalWeight").value) === 100){
        calculateCurrentGrade()
    }else{
        document.getElementById("currentGrade").innerHTML = "ERROR: Make sure your weights add up to 100."
    }
}

function validateFields() {
    var intDesiredGrade = parseInt(document.getElementById("desiredGrade").value);
    if( isNaN(intDesiredGrade) === true) {
        document.getElementById("gradeNeeded").innerHTML = "ERROR: Please enter a valid number for your desired grade.";
    }
    else {
        calculateGradeNeeded();
    }
}

function calculateGradeNeeded(){
    document.getElementById("gradeNeeded").innerHTML = "You need to get " + getGradeNeeded() + "% on your final to get a " +
        document.getElementById("desiredGrade").value + "% in this class." ;
}

//EDIT THIS!!!
function getGradeNeeded(){
    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var current = (calculateCurrentGrade() / 100) * (100-finalWeight);

    var neededNotRounded = ((desiredGrade - current)/finalWeight)*100;
    return Math.round(neededNotRounded);
}


function reset(){
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("gradeNeeded").innerHTML = "";
    document.getElementById("quizzes").value = "";
    document.getElementById("quizWeight").value = "";
    document.getElementById("tests").value = "";
    document.getElementById("testWeight").value = "";
    document.getElementById("hw").value = "";
    document.getElementById("hwWeight").value = "";
    document.getElementById("finalWeight").value = "";
    document.getElementById("desiredGrade").value = "";
    document.getElementById("qRow").style.backgroundColor = "darkolivegreen";
    document.getElementById("tRow").style.backgroundColor = "darkolivegreen";
    document.getElementById("hRow").style.backgroundColor = "darkolivegreen";


}