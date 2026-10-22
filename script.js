let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// about



//  galery

var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });


AOS.init({
  duration:800,
  delay:400
});

// subscribe
      document.getElementById('subscribeForm').addEventListener('submit', function(event) {
            const emailInput = document.querySelector('.email').value;
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (!emailInput.match(emailPattern)) {
                alert('Please enter a valid email address.');
                event.preventDefault(); // Prevent form submission
            }
            alert('Thank you for subscribing!');
            window.location.reload();
        });



// FAQ section

let accordion = document.querySelectorAll('.accordion-container .accordion');

accordion.forEach(acco =>{
    acco.onclick = () =>{
        accordion.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
});

const chatBtn = document.getElementById('chatBtn');
const chatContainer = document.getElementById('chatContainer');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

const animalInfo = {
    hi: { hi: 'Tell me how can I help you Sir', },
    hello: { hello: 'Tell me how can I help you Sir', },
    lion: { living_place: 'Savannas and grasslands', food: 'Carnivorous (meat)', nature: 'Social, fierce, and territorial' },
    elephant: { living_place: 'Forests and savannas', food: 'Herbivorous (plants)', nature: 'Intelligent, social, and gentle' },
    gorilla: { living_place: 'Forests', food: 'Herbivorous (plants)', nature: 'Strong, intelligent, and social' },
    kangaroo: { living_place: 'Grasslands', food: 'Herbivorous (plants)', nature: 'Social, energetic, and jumping ability' },
    cheetah: { living_place: 'Grasslands', food: 'Carnivorous (meat)', nature: 'Fast, solitary, and diurnal' },
    giraffe: { living_place: 'Savannas', food: 'Herbivorous (plants)', nature: 'Tall, social, and gentle' },
    zebra: { living_place: 'Grasslands', food: 'Herbivorous (plants)', nature: 'Social, striped, and migratory' },
    hippopotamus: { living_place: 'Rivers and lakes', food: 'Herbivorous (plants)', nature: 'Social, large, and territorial' },
    snake: { living_place: 'Various habitats', food: 'Carnivorous (meat)', nature: 'Slithery, solitary, and venomous' },
    tiger: { living_place: 'Forests', food: 'Carnivorous (meat)', nature: 'Solitary, fierce, and nocturnal' },
    wolf: { living_place: 'Forests and tundras', food: 'Carnivorous (meat)', nature: 'Social, intelligent, and nocturnal' },
    chimpanzee: { living_place: 'Forests', food: 'Omnivorous (plants and meat)', nature: 'Intelligent, social, and agile' },
    crocodile: { living_place: 'Rivers and lakes', food: 'Carnivorous (meat)', nature: 'Solitary, large, and carnivorous' },
    bear: { living_place: 'Forests and mountains', food: 'Omnivorous (plants and meat)', nature: 'Solitary, strong, and hibernating' },
    monkey: { living_place: 'Forests', food: 'Omnivorous (plants and meat)', nature: 'Social, agile, and intelligent' },
    rhinoceros: { living_place: 'Grasslands', food: 'Herbivorous (plants)', nature: 'Solitary, large, and territorial' },
    rabbit: { living_place: 'Grasslands', food: 'Herbivorous (plants)', nature: 'Social, fast, and burrowing' },
    deer: { living_place: 'Forests', food: 'Herbivorous (plants)', nature: 'Social, gentle, and migratory' },
    fox: { living_place: 'Forests and grasslands', food: 'Carnivorous (meat)', nature: 'Solitary, cunning, and nocturnal' },
    cat: { living_place: 'Domestic environments (homes, apartments)', food: 'Carnivorous (meat)', nature: 'Independent, playful, curious, and loyal' },
    dog: { living_place: 'Domestic environments (homes, apartments)', food: 'Omnivorous (plants and meat)', nature: 'Loyal, friendly, and protective' },
    parrot: { living_place: 'Tropical forests', food: 'Herbivorous (plants)', nature: 'Social, intelligent, and talkative' },
};


chatBtn.addEventListener('click', () => {
    chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
});


sendBtn.addEventListener('click', sendMessage);


userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage(message, 'user'); 
    userInput.value = '';  
    processUserMessage(message); 
}


function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  
}

// Function to process user message
function processUserMessage(message) {
    const words = message.toLowerCase().split(' ');
    let response = "Sorry, I am having trouble understanding you right now. Please try again later.";

    for (let word of words) {
        if (animalInfo[word]) {
            response = '';
            if (message.includes('living place') || message.includes('live')) {
                response = `The ${word} lives in ${animalInfo[word].living_place}.`;
            } else if (message.includes('food') || message.includes('eat')) {
                response = `The ${word} is ${animalInfo[word].food}.`;
            } else if (message.includes('nature')) {
                response = `The ${word} is ${animalInfo[word].nature}.`;
            }else {
                response = `Tell Me Sir How Can I Help You.`;
            }
            break;
        }
    }

    appendMessage(response, 'bot'); 
}
