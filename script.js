
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");

//Points are randomly changed to 2.718, 3.14159, 50, -5, Africa? Like along list that just selects randomly with each update.
const points_list = [3.14159265, 2.71828182, 420, "Inquilab Zindabad!", 69, "Ghanta Ghar", "$0,000,000,000", 1453, 1999, -100000, "Aaj nakad kal udhaar", "Kya karengi aap itni dhan raashi ka?", "Mere dil vich rahiyo soni!", "Tenu leke jaana apne naal", 65535, "Dard-e-Disco"]

const locations = [
  {
    id: 0,  //reset location
    "button text": ["Observe around", "Go back to sleep", "Go back to sleep"],
    "button next": [1, 2, 2],
    text: "You wake up in a hospital bed. Confused. What do you do next?"
  },
  {
    id: 1,
    "button text": ["Wake her up", "Wake her up", "Wake her up"],
    "button next": [3, 3, 3],
    text: "You see an ordinary hospital room. You see a beautiful woman (in her 40s) sitting on a chair beside you, half-asleep. On the table next to you there is a glass of water, a framed photo of an old person and red roses in a vase."
  },
  {
    id: 2,
    "button text": ["Play again?", "Play again?", "Play again?"],
    "button next": [0, 0, 0],
    text: "You go back to sleep and stay ignorant in bliss."
  },
  {
    id: 3,
    "button text": ["Have water", "Ask her who she is", "Refuse water rudely"],
    "button next": [4, 5, 6],
    text: "Woman: \"You're finally awake! It's okay don't try to get up. Here, have some water.\""
  },
  {
    id: 4,
    "button text": ["Ask her who she is", "Ask her who she is", "Ask her who she is"],
    "button next": [5, 5, 5],
    text: "You feel better. The woman asks you, \"Pyaas bujhi?\""
  },
  {
    id: 5,
    "button text": ["Aisha?", "Are you my wife?", "Katrina Kaif?"],
    "button next": [7, 8, 9],
    text: "Woman: \"Do you not remember me? (asked playfully)\""
  },
  {
    id: 6,
    "button text": ["Ask her who she is", "Ask her who she is", "Ask her who she is"],
    "button next": [5, 5, 5],
    text: "Woman: \"Hmmm... Someone is a bit cranky I guess.\""
  },
  {
    id: 7,
    "button text": ["Divyana", "Devyansh", "Selmon Bhai"],
    "button next": [10, 11, 12],
    text: "Woman: \"Good. You are remembering. Do you remember your name?\""
  },
  {
    id: 8,
    "button text": ["Divyana", "Devyansh", "Selmon Bhai"],
    "button next": [10, 11, 12],
    text: "The woman smiles widely. She asks, \"Do you remember your name?\""
  },
  {
    id: 9,
    "button text": ["Divyana", "Devyansh", "Selmon Bhai"],
    "button next": [10, 11, 12],
    text: "Woman: \"We've have got a comedian here, people! You remember how to make people laugh, but do you remember your name?\""
  },

  {
    id: 10,
    "button text": ["Is it my birthday, sweet girl?", "Labour Day!", "13th November?"],
    "button next": [13, 14, 13],
    text: "Woman: \"Correct Answer! You're doing well. Now do you know what day it is?\""
  },

  {
    id: 11,
    "button text": ["Divyana?", "Divyana?", "Divyana?"],
    "button next": [10, 10, 10],
    text: "The woman takes out a driving license with your REAL name on it. She says, \"Not anymore! Not for a long time. Say your real name now.\""
  },

  {
    id: 12,
    "button text": ["Is my name Divyana?", "Just messing, it's Divy.", "My name is Divyana."],
    "button next": [10, 10, 10],
    text: "The woman laughs out loud. She says, \"Okay funny woman, enough jokes. Try to remember your name.\""
  },

  {
    id: 13,
    "button text": ["Laugh nervously", "Ask her who the woman in the photo is", "Insult Moldemort"],
    "button next": [15, 16, 15],
    text: "Woman: \"Yes!! Ten points to Gryffi-... Oops! That reference sucks because the author is a bitch. Hehe sorry.\""
  },

  {
    id: 14,
    "button text": ["My birthday?", "Mon anniversaire ?", "Ajj toh saada janmdin hain!"],
    "button next": [13, 13, 13],
    text: "Soviet Union national anthem plays in the background. The woman says, \"Sorry, not today, Comrade! It's something even better.\""
  },
  {
    id: 15,
    "button text": ["Ask about the photo", "Ask about the photo", "Ask about the photo"],
    "button next": [16, 16, 16],
    text: "Woman: \"Hehehe...\""
  },
  {
    id: 16,
    "button text": ["Why don't I remember her?", "I don't know you.", "Stay silent"],
    "button next": [17, 17, 17],
    text: "Woman: \"That photo is of my mother. Aaaand... your wife. So you see, you're my mother too.\""
  },
  {
    id: 17,
    "button text": ["Where is she?", "How was our life together?", "Is she still..."],
    "button next": [18, 19, 20],
    text: "Daughter: \"It's okay. You're getting a little old so you tend to forget stuff these days. You're in your 90s, Mom. \""
  },
  {
    id: 18,
    "button text": ["Look at the door", "Look at the door", "Look at the door"],
    "button next": [21, 21, 21],
    text: "Daughter: \"She's gone to get you fresh flowers. Oh here she comes!\""
  },
  {
    id: 19,
    "button text": ["Look at the door", "Look at the door", "Look at the door"],
    "button next": [21, 21, 21],
    text: "Daughter: \"Why don't you ask her yourself?\""
  },
  {
    id: 20,
    "button text": ["Look at the door", "Look at the door", "Look at the door"],
    "button next": [21, 21, 21],
    text: "Daughter: \"Alive? Yep, she must be here any minute. Oh! There she is.\""
  },
  {
    id: 21,
    "button text": ["Go to final message", "Go to final message", "Go to final message"],
    "button next": [22, 22, 22],
    text: "The door to the hospital room opens and the old woman you saw in the photo walks in, carrying fresh red roses. She says \"Good morning, my love! How's the most beautiful woman in the world doing today?\""
  },
  {
    id: 22,
    "button text": ["Play again?", "Play again?", "Play again?"],
    "button next": [0, 0, 0],
    text: "Happy Birthday, my dear Divy. My love for you does not know boundaries of time, space, fiction, reality, society or gender. Here's hoping we make it, like in this story."
  }


];

// initialize buttons
let button1next = 1
let button2next = 2
let button3next = 2


button1.addEventListener('click', () => {
   button1.disabled = true;
   button2.disabled = true;
   button3.disabled = true;
   button4.disabled = true;
    // 2. Perform your action 
   update(locations[button1next]);
    
    // Optional: Re-enable after a delay or after the request finishes
    setTimeout(() => {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
    }, 1000);
});

button2.addEventListener('click', () => {
   button1.disabled = true;
   button2.disabled = true;
   button3.disabled = true;
   button4.disabled = true;

    // 2. Perform your action 
   update(locations[button2next]);
    
    // Optional: Re-enable after a delay or after the request finishes
    setTimeout(() => {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
    }, 1000);
});

button3.addEventListener('click', () => {
   button1.disabled = true;
   button2.disabled = true;
   button3.disabled = true;
   button4.disabled = true;

    // 2. Perform your action 
   update(locations[button3next]);
    
    // Optional: Re-enable after a delay or after the request finishes
    setTimeout(() => {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
    }, 1000);
});


button4.onclick = reset;


function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1next = location["button next"][0]
  button2next = location["button next"][1]
  button3next = location["button next"][2]
  text.innerHTML = location.text;
  //console.log(button1next,button2next,button3next)
  xpText.innerText = getRandomItem(points_list) 
}



function reset() {
   update(locations[0]);
}

function getRandomItem(arr) {
    // Return null or handle explicitly if the array is empty
    if (arr.length === 0) return undefined; 
    
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
