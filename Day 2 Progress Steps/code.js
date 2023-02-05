const progress = document.getElementById('progress');//Bar progress
const prev = document.getElementById('prev');//btn prev
const next = document.getElementById('next');//btn next
const circles = document.querySelectorAll('.circle');//circles elements

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    console.log(actives)

    progress.style.height = (actives.length - 1) / (circles.length - 1) * 100 + '%';
                            // 1 / 3 * 100

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}