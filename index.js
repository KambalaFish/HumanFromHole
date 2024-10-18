const hole = document.querySelector('.hole');
const human = document.querySelector('.human');

console.log(`hole: ${hole.clientHeight}`)
hole.style.transform = `scale(1)`;
hole.style.opacity = 1;

setTimeout(() => {
    hole.style.transition = `transform 1.8s linear`;
    hole.style.transform = `scale(0.65)`
}, 1200)

human.addEventListener('animationend', e => {
    if (event.animationName === `lift`) {
        event.target.style.animation = `levitation 0.64s linear infinite alternate`;

    }
})