// In-memory database of questions
    const STORE = [
    {
      question: 'What is the first thing you should do before applying your makeup?',
      answers: [
        'Do some jumping jacks!',
        'Put lotion on your face.',
        'Use a makeup remover/cleanser to remove any dirt or products lingering on your face.',
        'Make funny faces in the mirror.'
      ],
      correctAnswer: 'Use a makeup remover/cleanser to remove any dirt or products lingering on your face.'
    },
    {
      question: 'What product is a base for foundation or face makeup that allows it to go on smoother and last longer?',
      answers: [
        'Lotion!',
        'Concealer!',
        'Water!',
        'Primer!'
      ],
      correctAnswer: 'Primer!'
    },
    {
      question: 'What is the most effective alternative for makeup remover?',
      answers: [
        'Water!',
        'Coconut oil!',
        'Tissue!',
        'Candle wax!'
      ],
      correctAnswer: 'Coconut oil!'
    },
    {
      question: 'What should you use to make your eyelashes more defined?',
      answers: [
        'Mascara!',
        'Eye shadow!',
        'Eyebrow wax!',
        'Contour!'
      ],
      correctAnswer: 'Mascara!'  
    },
    {
      question: 'What is the purpose of color correcting?',
      answers: [
        'To make the face pop with more color',
        'To help makeup go on smoother',
        'To cover any skin imperfections like redness, scars and general discoloration.',
        'To apmplify your contour'
      ],
      correctAnswer: 'To cover any skin imperfections like redness, scars and general discoloration.'  
    }
  ];
  
  let currentScore = 0;
  let currentQuestion = 0;
  
  
  function quizHome() {
    return `
    <h1 class="bold">Test Your Makeup Knowledge!<h1>
  
    <img src="images/makeup-coverphoto.jpg" alt="eye-makeup" class="image" width= 200px>
    <br><br>
    <button name='button' class='startButton'>Let's Go!</button>
    `;
  }
  
  
  function addQuizHome(){
    console.log("addQuizHomeran");
    const quizHomeInfo = quizHome();
    $('.startPage').html(quizHomeInfo);
  }
  
  function questionPage(){
    return `
    <h4>Question ${currentQuestion+1}/5<h4>
    <div>
      ${STORE[currentQuestion].question}
    </div>
    <br>
    <form class="choices" >
    <div>
      <input type='radio' id='answer1' name='questions' value='${STORE[currentQuestion].answers[0]}'>
      <label for='answer1'>${STORE[currentQuestion].answers[0]}</label>
    </div>
    <div>
      <input type='radio' id='answer2' name='questions' value='${STORE[currentQuestion].answers[1]}'>
      <label for='answer2'>${STORE[currentQuestion].answers[1]}</label>
    </div>
    <div>
      <input type='radio' id='answer3' name='questions' value='${STORE[currentQuestion].answers[2]}'>
      <label for='answer3'>${STORE[currentQuestion].answers[2]}</label>
    </div>
    <div>
      <input type='radio' id='answer4' name='questions' value='${STORE[currentQuestion].answers[3]}'>
      <label for='answer4'>${STORE[currentQuestion].answers[3]}</label>
    </div>
    </form>
    <br>
    <div>
      <button class='answerButton' type='submit'>Submit! </button>
    </div>
    <h3>Score is ${currentScore}/5</h3>
    `
  };
  
  function createQuestion() {
    console.log('create the question!')
    $('.startPage').on('click','.startButton', event => {
      const questionPageDisplay = questionPage(STORE);
    $('.startPage').html(questionPageDisplay);
  });
  };
  
  function handleAnswerSubmitted() {
      $('.startPage').on('click','.answerButton', event =>{
        event.preventDefault();
        console.log('submitAnswerclicked');
        const input = $("input[name='questions']:checked").val();
        const rightAnswer = STORE[currentQuestion].correctAnswer;
        if (input === rightAnswer) {
          currentScore++;
          $('.startPage').html(
            `<h1>Yes! You're a superstar!<h1>
            <img src="images/makeup-right.jpg" alt="smiling woman with makeup" class="image" width= 200px>
            <h3>Score is ${currentScore}/5</h3>
            <button class='nextButton' type='submit'>Next Question</button>
            `
          )
        }
          
      else {
          $('.startPage').html(
          `<h1>Yikes! Close but not quite..<h1>
          <img src="images/makeup-wrong.jpg" alt="funny makeup look" class="image" width= 200px>
          <p>The correct answer is:</p>
          <p class="answer">${rightAnswer}</p>
          <h3>Score is ${currentScore}/5</h3>
          <button class='nextButton' type='submit'>Next Question</button>`
      );
    }
  })
  }
  
  function nextQuestion() {
    console.log('nextQuestion ran');
    $('.startPage').on('click','.nextButton', event => {
      event.preventDefault();
      if (currentQuestion === 4) {
        return finalPage();
      } else {
        currentQuestion++
        console.log('next question button clicked');
        const questionPageDisplay = questionPage(STORE);
        $('.startPage').html(questionPageDisplay);
      }
  });
  }
  
  function finalPage() {
    $('.startPage').html(`
      <h1>Great Effort!<h1>
      <p>I hope you enjoyed my quiz!<p>
      <img src="images/makeup-end.jpg" alt="funny makeup look" class="image" width= 200px>
      <h3>Score is ${currentScore}/5</h3>
      <div>
      <button class='restartButton' type='submit'>Restart Quiz</button>
      </div>
      `
    )};
  
  
  function restartQuiz(){
    console.log('restartQuiz ran');
    $('.startPage').on('click','.restartButton', event =>{
      event.preventDefault();
      currentScore=0;
      currentQuestion=0;
      addQuizHome();
  });
  };
  
  
  $(function() {
      addQuizHome();
      createQuestion();
      handleAnswerSubmitted();
      nextQuestion();
      restartQuiz();
  })