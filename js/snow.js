const snowContainer = document.querySelector('.snow');

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; 

    snowflake.style.left = `${random(0, 100)}vw`;
    snowflake.style.fontSize = `${random(20, 50)}px`;
    snowflake.style.animationDuration = `${random(3, 10)}s`;
    snowflake.style.opacity = random(0.5, 1);

    snowContainer.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 170);
