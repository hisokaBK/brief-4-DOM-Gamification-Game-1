// fill.js
window.onload = () => {
    const cards = document.querySelectorAll(".cart");
    const scoreSpan = document.getElementById("span");
    const replayBtn = document.querySelector(".Rplay button");
    const flipBack = "./image/flip.jpg";

    const imgMap = {
        "img-1": "./image/girlchan.jpg",
        "img-2": "./image/kaniki.jpg",
        "img-3": "./image/lofi.jpg",
        "img-4": "./image/sokona.jpg",
        "img-5": "./image/tanjiro.jpg",
        "img-8": "./image/gojo.jpg",
        "img-9": "./image/imiso.jpg",
        "img-10": "./image/zoro.jpg",
    };

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let score = 0;
    let flipCount = 0;
    let matchedCount = 0;

    // shuffle cards in the DOM
    shuffleCards();

    // add click event
    cards.forEach((card) => {
        card.addEventListener("click", () => flipCard(card));
    });

    function flipCard(card) {
        if (lockBoard) return;
        if (card === firstCard) return;
        if (card.classList.contains("matched")) return;

        // show image
        const key = card.dataset.img;
        card.querySelector("img").src = imgMap[key] || flipBack;

        card.style.transform = "rotateY(180deg)";
        card.style.transition = "transform 0.35s";

        flipCount++;

        if (!firstCard) {
            firstCard = card;
            return;
        }

        secondCard = card;
        lockBoard = true;

        checkMatch();
    }

    function checkMatch() {
        if (firstCard.dataset.img === secondCard.dataset.img) {
            // matched
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            score += 50;
            matchedCount += 2;
            updateScore();
            resetBoard();

            if (matchedCount === cards.length) {
                setTimeout(() => {
                    alert(`🎉 Bravo ! Tu as gagné !\nScore: ${score}\nFlips: ${flipCount}`);
                }, 400);
            }
        } else {
            // not matched
            score = Math.max(0, score - 5);
            updateScore();
            setTimeout(() => {
                firstCard.querySelector("img").src = flipBack;
                secondCard.querySelector("img").src = flipBack;
                firstCard.style.transform = "rotateY(0deg)";
                secondCard.style.transform = "rotateY(0deg)";
                resetBoard();
            }, 900);
        }
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    function updateScore() {
        scoreSpan.textContent = score;
    }

    // replay button
    replayBtn.addEventListener("click", () => {
        cards.forEach((card) => {
            card.querySelector("img").src = flipBack;
            card.style.transform = "rotateY(0deg)";
            card.classList.remove("matched");
        });
        
        score = 0;
        flipCount = 0;
        matchedCount = 0;
        updateScore();
        shuffleCards();
    });

    function shuffleCards() {
        const container = document.querySelector(".carts");
        const nodes = Array.from(container.children);
        for (let i = nodes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            container.appendChild(nodes[j]);
            nodes.splice(j, 1);
        }
        // ensure all cards back
        cards.forEach((card) => {
            card.querySelector("img").src = flipBack;
            card.style.transform = "rotateY(0deg)";
        });
    }
};
