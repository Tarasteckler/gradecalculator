function calculateCurrentGrade(){

    //quiz
    var quiz = arrayFromString(document.getElementById("quizzes").value);
    var numQuizArr = convertArrayStringToNumber(quiz);
    var avgQuiz = averageArray(numQuizArr);
    var quizWeight = document.getElementById("quizWeight").value;
    var quizWeightedAvg = weightAvg(avgQuiz,quizWeight);

    //test
    var test = arrayFromString(document.getElementById("tests").value);
    var numTestArr = convertArrayStringToNumber(test);
    var avgTest = averageArray(numTestArr);
    var testWeight = document.getElementById("testWeight").value;
    var testWeightedAvg = weightAvg(avgTest,testWeight);

    //homework
    var hw = arrayFromString(document.getElementById("hw").value);
    var numHwArr = convertArrayStringToNumber(hw);
    var avgHw = averageArray(numHwArr);
    var hwWeight = document.getElementById("hwWeight").value;
    var hwWeightedAvg = weightAvg(avgHw,hwWeight);
    var currentGrade = ((quizWeightedAvg + testWeightedAvg + hwWeightedAvg)/
        (1- (document.getElementById("finalWeight").value)/100));

    document.getElementById("currentGrade").innerHTML = "Your current grade is: " + currentGrade;

}

function arrayFromString(str) {
    return str.split(",");
}

function convertArrayStringToNumber(strArr){
    var numArr = [];
    for (var i=0; i < strArr.length; i++){
        numArr.push(parseInt(strArr[i]));
    }
    return numArr;
}

function averageArray(arr){
    var sum = 0;
    for (var i=0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

function weightAvg(num,weight){
    return   num * weight/100;
}


function calculateGradeNeeded(){
    document.getElementById("gradeNeeded").innerHTML = "You need to get: " + getGradeNeeded();

}

function getGradeNeeded(num){
    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);
    return (desiredGrade - (1- (document.getElementById("finalWeight").value)/100)) / (1 - (document.getElementById("finalWeight").value)/100);
}
