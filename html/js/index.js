var locked = true
var currentApp = 'lock'

const homeButton = document.querySelector('#homeButton');
homeButton.addEventListener('click', closeApp)

const appContainer = document.getElementById('appContainer');

function closeApp() {
    if (locked == true && currentApp == 'lock') {
        const lockScreen = document.getElementById('lockScreen')
        const homeScreen = document.getElementById('homeScreen')
        lockScreen.classList.add('animate__animated', 'animate__backOutUp');
        lockScreen.addEventListener('animationend', () => {
            homeScreen.classList.remove('closed')
            lockScreen.classList.add('closed');
            lockScreen.classList.remove('animate__animated', 'animate__backOutUp');
            locked = false
            currentApp = 'home'
        });


    } else {
        document.getElementById(currentApp).classList.add('closed');
        document.getElementById('homeScreen').classList.remove('closed')
        currentApp = 'home'
    }
}

function openApp(appName) {
    const homeScreen = document.getElementById('homeScreen')
    const app = document.getElementById(appName)
    if (currentApp != 'home') { console.error("There is already an app open."); return; }
    try {
        homeScreen.classList.add('closed');
        app.classList.remove('closed')
        app.classList.add('animate__animated', 'animate__fadeIn', 'animate__faster')
        app.addEventListener('animationend', () => {
            
            app.classList.remove('animate__animated', 'animate__fadeIn', 'animate__faster')
        })
        currentApp = appName
    } catch (e) {
        console.error(e)
        return
    }
}

var contacts = document.querySelectorAll(".contact");

contacts.forEach(contact => {
    contact.addEventListener('click', (event) => {
        var contactOptions = event.currentTarget.parentNode.querySelector('.contact-options');
        
        if (contactOptions.style.display === 'none') {
            contactOptions.style.display = 'flex';
        } else {
            contactOptions.style.display = 'none';
        }
    });
});