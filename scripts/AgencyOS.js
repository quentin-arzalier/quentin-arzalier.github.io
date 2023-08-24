/*class AgencyOS {

    static Instance = this;

    constructor() {
        this.initialTexts = {};
        this.cards = ;
        this.boot();
    }

    boot() {
        let scr = document.getElementById("boot-screen");
        console.log(scr);
        let that = this;
        let nbLine = 0;
        const interval = setInterval(() => {
            scr.innerText += bootText[nbLine] + '\n';
            nbLine++;
            if (nbLine === bootText.count) {
                clearInterval(interval);
                this.blink();
            }
        }, 0);
    }

    blink() {
        console.log("start blink");
    }

    createWord(iterations, cardId) {
        let realText = this.initialTexts[cardId];
        let newText = [];
        for (let i = 0; i < realText.length; i++) {
            if (i < iterations / 3) {
                newText[i] = realText[i];
            }
            else {
                newText[i] = letters[Math.floor(Math.random() * 36)];
            }
        }
        return newText.join("");
    }


    manageMenu() {
        this.cards.forEach((card, idx) => {
            let image = card.querySelector(".card-body");
            let desc = card.querySelector(".card-desc");

            this.initialTexts[card.id] = desc.innerText.trim();
            image.onmouseover = event => {
                let iterations = 0;

                const interval = setInterval(() => {
                    desc.innerText = this.createWord(iterations, card.id);

                    if (desc.innerText === this.initialTexts[card.id]) clearInterval(interval);
                    iterations++;
                }, 30);
            }
            image.onclick = event => {
                card.parentElement.parentElement.style.display = "none";
                document.querySelector("#" + card.dataset.menu).style.display = "flex";
            }
        })
    }
}*/

function curriedCardHandler(allCards, card){
    return e => {
        console.log("wesh");
        e.preventDefault();
        card.classList.add("selected");
        allCards.filter(c => c !== card).forEach(c => c.classList.add("exit"));
        setTimeout(() => {
            //window.location.replace(card.dataset["href"]);
        }, 1000);
    }
}

document.addEventListener("DOMContentLoaded", ev => {
    let allCards = Array.from(document.querySelectorAll(".card-item"));
    allCards.forEach(card => {
        card.onclick = curriedCardHandler(allCards, card)
    });
});