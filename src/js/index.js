"use strict"

let chatBtn = document.getElementById('chatButton')
let popup = document.getElementById('popup')
let closePopup = document.getElementById('closePopup')

const friendNames = [
    "Icescreammachine23",
    "Bapedispenser23",
    "AnitaMaxNguyenn",
    "Potato2024",
    "Xerxseize",
    "Shadowstriker",
    "Neonninja",
    "Cyberpirate",
    "Icewizard",
    "Phoenixfury",
    "Toxicthunder760",
    "Mysticwarrior",
    "Atomicassassin",
    "Galacticgamer965",
    "Blazerider",
    "Roguereaper",
    "Stealthsniper9786",
    "Venomousviper",
    "Cosmicchampion",
    "IronFist",
    "Electriceagle74",
    "Frostbitefox",
    "Infernoinquisitor",
    "Serenitysamurai425",
    "Turbotitan"
]

// event listener for sending message
window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (popup.style.display === 'block') {
            console.log('yea')
            popup.style.display = 'none'
            document.getElementById('txtbox').value = ''
        }
    }
})

//button logic for sending a chat into the void
chatBtn.onclick = (e) => {
    e.stopPropagation();
    popup.style.display = 'block'
}
//close the button
closePopup.onclick = () => {
    popup.style.display = 'none'
    document.getElementById('txtbox').value = ''
}

/**
 * @function addFriends dynamically add friends to the friendslist
 * @returns {void}
 */
function addFriends() {

    let friendsList = document.getElementById('friendsList')

    for (let x = 0; x < friendNames.length; x++) {
        let friend = document.createElement('li')
        friend.innerHTML = friendNames[x]
        friendsList.appendChild(friend)
    }
}

/**
* @function getRandom pseudo-random number generator
* @param {number} min lowerbounds
* @param {number} max upperbounds
* @returns {number} random number inbetween lower and upperbounds
*/
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min)
}


//Call functions 
addFriends()


