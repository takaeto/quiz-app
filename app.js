const quiz = [
  {
    question: '童謡「どんぐりころころ」歌詞の中で、どんぐりがハマって大変になった場所は？',
    answers: [ '溝', '湖', '池', '水たまり'],
    correct: '池'
  }, {
    question: 'ちなみに「どんぐり」は漢字で？',
    answers: [ '団栗', '丼栗', '呑栗', '曇栗'],
    correct: '団栗'
  }, {
    question: '計算問題　３ + ６ =「？」',
    answers: [ '１８', '９', '３', '８'],
    correct: '９'
  }, {
    question: '今、何問目？',
    answers: [ '１', '２', '３', '４'],
    correct: '４'
  }, {
    question: '童謡「かえるの歌」次の歌詞につづくのは、どれ？「ケロケロ、ケロケロ…」',
    answers: [ 'カカカ', 'コココ', 'クアクアクア', 'ハハハ'],
    correct: 'クアクアクア'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}