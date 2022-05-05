console.log("Welcome to typing speed test");
 

var setOfWords = [
    'Life isnt about finding yourself, it is about creating yourself',
    'If you are going down the right path and you are willing to keep walking, eventually youll make progress',
    'I have far more respect for the person with a single idea who gets there than one with a thousand ideas and does nothing',
    'What is necessary to change a person is to change awareness of himself',
    'Many people die at the age of 25, but their bodies are not buried until 75.',
    'If you dont get up every morning with a burning desire to do things, you dont have enough goals',
    'The way to learning is to get rid of the arrogance of knowledge',
    'One can have no smaller or greater master than the mastery of oneself',
    'Empty pockets never held anyone back. Only empty heads and hearts can do that',
    'Great things are not done by impulse, but a series of small things brought together',
    'Why measure your success by the suggestions of society when you can become a success on your own terms',
    'A man may imagine things that are false, but he can only undetsand things that are true',
    'Our fatigue is often caused not by work, but by worry, frustration and resentment',
    'True freedom is impossible without a mind made free by discipline',
    'Focus is not saying yes to all important things, rather it is saying no to less important things',
    'Discipline is the bridge between goals and accomplishment',
    'Success in life comes when you simply refuse to give up, with goals so strong that obstacles, failure and loss only act as motivation',
    'Be yourself. Everyone else is already taken',
    'Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind',
    'Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring',
    'When you are content to be simply yourself and dont compare or compete, everyone will respect you',
    'If you are always trying to be ordinary, you will never know how extraordinary you can be',
    'Leadership is solving problems. The day people stop bringing you their problems is the day you have stopped leading them',
    'Start by doing whats necessary; then do whats possible and suddenly you are doing the impossible',
    'It is our choices that show what we truly are, far more than our abilities',
    'It does not do to dwell on dreams and forget to live'
]



const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};
const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};
const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;
  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });
  let errorWords = words1.length - cnt;
  return (
    cnt +
    " correct out of " +
    words1.length +
    " words and the total number of error are " +
    errorWords +
    "."
  );
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);

  let finalMsg = "you typed total at " + speed + " words per minute ";
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    document.getElementById("mywords").value = "";
    typeWords.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
  }
});
