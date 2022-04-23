// const score = document.getElementById("score-message");
const quizC = document.getElementById("quiz-container");
const quizS = document.getElementById("score-message");
const sScore = document.getElementById("showScore");

const correct = "正解！";
const incorrect = "不正解";

const quiz1A = document.getElementById("quiz-1");
const select_one = "1問目:" + quiz1A + "を選択しました";
const Aquiz1 = document.getElementById("Aquiz1");

Aquiz1.onclick = function(){
  if (quiz1A == "a"){
    console.log(select_one);
    console.log(incorrect);
  }else if (quiz1A == "b"){
  console.log(select_one);
  console.log(incorrect);
  } else if (quiz1A == "c"){
  score++;
  console.log(select_one);
  console.log(correct);
  } else {
  alert("スプラトゥーン");
  }
  console.log("現在の点数：" + score);
} 

const quiz2A = document.getElementById("quiz-2");
const select_two = "2問目:" + quiz2A + "を選択しました";

const Aquiz2 = function(){
  if (quiz2A == "a"){
    console.log(select_two);
    console.log(incorrect);
  }else if (quiz2A == "b"){
  console.log(select_two);
  console.log(incorrect);
  } else if (quiz2A == "c"){
  score++;
  console.log(select_two);
  console.log(correct);
  } else {
  alert("死角恐怖症");
  }
  console.log("現在の点数：" + score);
}

const quiz3A = document.getElementById("quiz-3");
const select_three = "3問目:" + quiz3A + "を選択しました";

const Aquiz3 = function(){
  if (quiz3A == "a"){
    console.log(select_three);
    console.log(correct);
  }else if (quiz3A == "b"){
  console.log(select_three);
  console.log(incorrect);
  } else if (quiz3A == "c"){
  score++;
  console.log(select_three);
  console.log(incorrect);
  } else {
  alert("記憶を維持して過去に戻る");
  }
  console.log("現在の点数：" + score);
}

let score = quizS;

button.onclik = function(){
  if(let score = 0; score ===3;){
  quizS.innerHTML = score + "点：満点！";
  } else if(score === 2 ) {
  quizS.innerHTML = score + "点：おしい！"
  } else if(score === 1) {
  quizS.innerHTML = score + "点：！？"
  } else {
  quizS.innerHTML = score + "点：残念。再履修だ！"
  }
}