
let shrink = 1;
let grow = 1;
let clicks = 0;

function changeImage() {
    shrinkButton();
    
}

function openAmplop() {
    document.getElementById("text").textContent = "...";
    for (let i = 1; i < 5; i++) {
        setTimeout(function() {
            document.getElementById("amplop").src = "assets/amplop" + i + ".png";
        }, 500 * (i - 1));
    }
    setTimeout(function() {
        window.location.href = "congratsHtml.html";
    }, 2500);

}

function shrinkButton() {
    clicks++;

    const closed = document.getElementById("closed");
    const opened = document.getElementById("open");

    if (clicks >= 4) {
        document.getElementById("text").textContent = "Okay Now U HAVE to open it, no Other Choice is there.";
        closed.style.display = "none";
        return;
    } else if (clicks >= 3) {
        document.getElementById("text").textContent = "don't you feel bad for the lil birdie flying all this way, just for a letter!?";
    } else if (clicks >= 2) {
        document.getElementById("text").textContent = "please just considered it, its even from someone anonymous too.";
    } else if (clicks = 1) {
        document.getElementById("text").textContent = "alright wait, do you even considered it?";
    }

    shrink *= 0.90;
    grow *= 1.1; 

    opened.style.width = (200 * grow) + "px";
    opened.style.height = (100 * grow) + "px";
    opened.style.fontSize = (200 * grow) + "%";

    closed.style.width = (200 * shrink) + "px";
    closed.style.height = (100 * shrink) + "px";
    closed.style.fontSize = (200 * shrink) + "%";
}

setTimeout(function() {
    document.getElementById("text").textContent = "A little Birdie told me that it's someone special day..";
    
    setTimeout(function() {
        document.getElementById("text").textContent = "well, the birdie sent me a letter to give to you";
        
        setTimeout(function() {
            document.getElementById("text").textContent = "Soooo... Here You go, C'mon open it!";
        
            setTimeout(function() {
                document.getElementById("text").textContent = "or don't... It's up to you tbh...";
            
                setTimeout(function() {
                    document.getElementById("text").textContent = "...";
                }, 3000);

            }, 3000);

        }, 5000);

    }, 5000);

}, 5000);


setTimeout(function() {
    document.getElementById("open").style.display = "block";
}, 21000);
setTimeout(function() {
    document.getElementById("closed").style.display = "block";
}, 21000);
setTimeout(function() {
    document.getElementById("amplop").style.display = "block";
}, 21000);


