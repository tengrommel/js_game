const allLis = document.querySelectorAll('li')
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

allLis.forEach((li, i) => {
    li.style.color = colors[i]
})
