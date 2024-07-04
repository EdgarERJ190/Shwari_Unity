let protein = 0;
let carb = 0;
let vitamin = 0;

function addIngredient(type) {
    const mealList = document.getElementById('meal-list');
    const li = document.createElement('li');

    switch(type) {
        case 'protein':
            protein += 10;
            li.textContent = 'Chicken (Protein)';
            break;
        case 'carb':
            carb += 10;
            li.textContent = 'Rice (Carb)';
            break;
        case 'vitamin':
            vitamin += 10;
            li.textContent = 'Broccoli (Vitamin)';
            break;
    }

    mealList.appendChild(li);
    updateBars();
}

function updateBars() {
    document.getElementById('protein-bar').style.width = protein + '%';
    document.getElementById('carb-bar').style.width = carb + '%';
    document.getElementById('vitamin-bar').style.width = vitamin + '%';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    const messages = document.getElementById('messages');
    const userMessage = document.createElement('div');
    userMessage.textContent = 'You: ' + userInput;
    messages.appendChild(userMessage);

    // Simulate AI response
    setTimeout(() => {
        const aiMessage = document.createElement('div');
        aiMessage.textContent = 'AI: ' + getAIResponse(userInput);
        messages.appendChild(aiMessage);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);

    document.getElementById('user-input').value = '';
}

function getAIResponse(input) {
    // This is a simulated AI response. You can replace this with an actual API call.
    return "That's a great question! Eating a variety of foods ensures you get all the necessary nutrients.";
}
