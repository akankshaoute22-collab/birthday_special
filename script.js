
// ========================================
// 1. PERSONALIZE YOUR BIRTHDAY WEBSITE
// ========================================

const birthdayParagraph = `Happy Birthday to someone who means so much to me. ❤️

Today, I just want to wish you all the happiness,
success, and beautiful moments in the world.

I made this little surprise especially for you
because I wanted your birthday to feel different
and a little more memorable.

I hope you always have a reason to smile,
dream big, and enjoy every beautiful moment
that life brings your way.

Happy Birthday, my birthday boy! 🎂❤️`;


const letterMessage = `sirf tum ❤️

Pata nahi kaise, kab aur kyun tumse itni mohabbat ho gayi,
Tumse baat karte karte tumhari aadat ho gayi. ❤️

Ab tum sirf pasand nahi, meri sukoon ki wajah ho,
Meri bheed bhari duniya mein, tum meri sabse khoobsurat jagah ho. 🫶🏻

Tumse har roz baat ho, zaroori toh nahi,
Par tumhara khayal na aaye, aisa koi din bhi nahi. 🥹

Mujhe nahi chahiye koi perfect love story,
Bas tumhara saath chahiye, chahe simple ho apni story. 💗

Tumhare saath har pal khaas lagta hai,
Tumhara hona hi mere liye sabse pyaara ehsaas lagta hai. 🌙

Aur agar kabhi poochho ki kitni mohabbat hai tumse,
Toh bas itna samajh lena…
Jitna khud se kabhi nahi kiya,
Utna pyaar kiya hai maine tumse. ❤️‍🩹✨`;


const cuteNote = `If I could give you one thing today,
it would be the ability to see yourself
through my eyes.

Maybe then you would understand
how special you are.

I hope life gives you endless reasons
to smile and memories worth keeping.

This little note is just a reminder
that someone is wishing you
the happiest birthday ever. ❤️`;


const finalMessage = `I hope this new year of your life brings
you happiness, success, peace, and
beautiful memories.

Never stop dreaming, never stop smiling,
and always believe in yourself.

You deserve wonderful things, today
and throughout the year ahead.

Happy Birthday, once again! 🎂❤️`;


// Display the messages on the page.

document.getElementById("birthdayParagraph").textContent =
    birthdayParagraph;

document.getElementById("letterText").textContent = "";

document.getElementById("cuteNote").textContent =
    cuteNote;

document.getElementById("finalMessage").textContent =
    finalMessage;


// ========================================
// 2. SCREEN NAVIGATION
// ========================================

function showSection(sectionId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(sectionId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Birthday confetti appears when the birthday screen opens.
    if (sectionId === "birthdayScreen") {
        launchConfetti();
    }

    // Start typing animation when the letter opens.
    if (sectionId === "letterScreen") {
        typeLetter();
    }
}


// ========================================
// 3. MUSIC CONTROL
// ========================================

const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");

const musicPhoto = document.querySelector(".music-photo");


// Start the music when the visitor clicks the opening button.

async function startBirthday() {

    try {

        await music.play();

        updateMusicPlayer(true);

        showSection("birthdayScreen");

    } catch (error) {

        alert(
            "Music could not start. Please check that music.mp3 " +
            "is in your project folder, then use the music button."
        );

    }
}


// Play and pause music without changing the current screen.

async function toggleMusic() {

    if (music.paused) {

        try {

            await music.play();

            updateMusicPlayer(true);

        } catch (error) {

            alert(
                "Please check that music.mp3 is in your project folder."
            );

        }

    } else {

        music.pause();

        updateMusicPlayer(false);

    }
}


// Update the music button and rotating photo.

function updateMusicPlayer(isPlaying) {

    if (isPlaying) {

        musicButton.textContent = "Ⅱ";

        musicPhoto.classList.add("playing");

    } else {

        musicButton.textContent = "▶";

        musicPhoto.classList.remove("playing");

    }
}


// Keep the music button synchronized with playback.

music.addEventListener("play", () => {
    updateMusicPlayer(true);
});

music.addEventListener("pause", () => {
    updateMusicPlayer(false);
});


// ========================================
// 4. TYPING ANIMATION FOR THE LETTER
// ========================================

let letterTimer = null;

function typeLetter() {

    const letterElement = document.getElementById("letterText");

    // Stop any previous typing animation.
    if (letterTimer !== null) {
        clearInterval(letterTimer);
    }

    letterElement.textContent = "";

    let index = 0;

    letterTimer = setInterval(() => {

        letterElement.textContent += letterMessage.charAt(index);

        index++;

        if (index >= letterMessage.length) {

            clearInterval(letterTimer);

            letterTimer = null;

        }

    }, 25);
}


// ========================================
// 5. VIRTUAL GIFTS
// ========================================

const giftMessages = [

    "🎁 Gift 1: May you always have a reason to smile, even on difficult days.",

    "💝 Gift 2: Wishing you happiness, laughter, and beautiful memories this year.",

    "🎀 Gift 3: My wish for you is a wonderful year full of opportunities, peace, and success. ❤️"

];

const openedGifts = new Set();


function openGift(index) {

    const messageElement = document.getElementById("giftMessage");

    const gifts = document.querySelectorAll(".gift");

    // Display the selected gift's message.
    if (index < 0 || index >= giftMessages.length) {
        return;
    }

    messageElement.textContent = giftMessages[index];

    // Mark the gift as opened.
    openedGifts.add(index);

    gifts[index].textContent = "💖";

    // Unlock the final surprise after all three gifts are opened.
    if (openedGifts.size === giftMessages.length) {

        document.getElementById("giftNext")
            .classList.remove("hidden");

    }

}


// ========================================
// 6. REPLAY THE WEBSITE
// ========================================

function replayWebsite() {

    // Return to the beginning without resetting the music.
    showSection("musicScreen");

}


// ========================================
// 7. FLOATING HEARTS
// ========================================

function createHeart() {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.textContent =
        Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 7) + "s";

    document.getElementById("hearts").appendChild(heart);

    // Remove old hearts to keep the page lightweight.
    setTimeout(() => {
        heart.remove();
    }, 15000);

}

setInterval(createHeart, 600);


// ========================================
// 8. BIRTHDAY CONFETTI
// ========================================

let confettiCreated = false;

function launchConfetti() {

    if (confettiCreated) {
        return;
    }

    confettiCreated = true;

    const container = document.getElementById("confetti");

    const colors = [
        "#ff9fc5",
        "#ffd0e2",
        "#fff0a8",
        "#d8b4fe",
        "#ffffff"
    ];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("span");

        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

        // Remove confetti after the animation.
        setTimeout(() => {
            piece.remove();
        }, 6000);

    }

}
