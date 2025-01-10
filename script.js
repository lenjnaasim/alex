document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const proposalText = document.getElementById('proposalText');
    const answer = document.getElementById('answer');
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    let heartCount = 0;

    // Start with a click event to handle autoplay restrictions
    document.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            proposalText.classList.remove('hidden');
            startHeartRain();
        }
    }, { once: true });

    // Enhanced heart rain
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = ['❤️', '💖', '💝', '💕', '💗'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 10 + 20 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    function startHeartRain() {
        setInterval(createHeart, 300);
    }

    // Make the "No" button run away with smooth animation
    noBtn.addEventListener('mouseover', () => {
        const containerRect = document.querySelector('.container').getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        let newX = Math.random() * (window.innerWidth - btnRect.width);
        let newY = Math.random() * (window.innerHeight - btnRect.height);
        
        // Ensure the button stays within visible bounds
        newX = Math.max(10, Math.min(newX, window.innerWidth - btnRect.width - 10));
        newY = Math.max(10, Math.min(newY, window.innerHeight - btnRect.height - 10));
        
        noBtn.style.position = 'fixed';
        noBtn.style.transition = 'all 0.5s ease';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    });

    // Enhanced "Yes" click handler
    yesBtn.addEventListener('click', () => {
        proposalText.classList.add('hidden');
        answer.classList.remove('hidden');
        
        // Increase heart rain
        setInterval(createHeart, 100);
        
        // Create celebration hearts
        const heartContainer = document.querySelector('.heart-container');
        for (let i = 0; i < 10; i++) {
            const celebHeart = document.createElement('div');
            celebHeart.innerHTML = '❤️';
            celebHeart.style.position = 'absolute';
            celebHeart.style.fontSize = '30px';
            celebHeart.style.left = (i * 10) + '%';
            celebHeart.style.animation = `bounce 1s infinite ${i * 0.1}s`;
            heartContainer.appendChild(celebHeart);
        }
    });
});