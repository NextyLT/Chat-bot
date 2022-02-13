// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
// Global variables, if you need any, declared here
let question = 0;
// Functions declared here

//These two functions are used for displaying replies as user or as a bot
const userReply = () => {
  showMessage(`${nameInput.value}`, "user")
}
const botReply = (botReply) => {
  showMessage(botReply, "bot");
}

// this function is creating two buttons for second question
 
// these two functions will check witch button is pressed in second question


const clearInput = () =>  nameInput.value=""
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  question  = 1;
  showMessage(`Hello there, What's your name?`, "bot");
}
  // Just to check it out, change 'bot' to 'user' here 👆

const questionSequence = (message) => {
  if(question === 1) {
    userReply();
    selectProblem(message);
  } else if (question === 2) {
    showMessage(message, "user");
    problemSolve(message);
  }
}

// second question

const selectProblem = () => {

  question = 2;

  botReply(`So ${nameInput.value}, what's the problem?`);

  inputWrapper.innerHTML = `
    <button id="eyeBtn">Sight problems</button>
    <button id="teethBtn">Teeth problems</button>
  `

  document.getElementById("eyeBtn").addEventListener("click", () => {questionSequence("Sight problem")});
  document.getElementById("teethBtn").addEventListener("click", () => {questionSequence("Teeth problem")});
};

  

const problemSolve = (message) => {
  question = 3;

  botReply(`And what have happened to them?`);



  if (message === "Teeth problem") {
    inputWrapper.innerHTML = `
    <button id="eyeBtn">Sensitite teeth</button>
    <button id="teethBtn">Infected teeth</button>
  ` 
  } else if (message === "Sight problem") {
    inputWrapper.innerHTML = `
    <button id="eyeBtn">Sensitite eye</button>
    <button id="teethBtn">Infected eye</button>
  ` 
  }
};


  //EVENTLISTENER
    form.addEventListener("submit" , (event) => {
    event.preventDefault();
    questionSequence();

  })


// Question sequency


// Timeout when website loads until first question
setTimeout(greeting, 1000);

// //SEND button pressed
// sendBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   nextQuestion(input.value);
// });