const paragraph = document.querySelector("p")
paragraph.style.color= 'lightblue'

const heading = document.querySelector('h1')
heading.style.fontSize = '48px'

paragraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const item13 = document.querySelector('#item-13')
item13.style.color = 'rgb(0,0,0,0.5)'

const item3 = document.querySelector('#item-3')
item3.innerText = 'I say, "Hi!"'

const image = document.querySelector('img')
image.src = 'dino.jpg'
image.style.height = '300px'

const image2 = document.querySelector('.img2')
image2.src = 'https://cdn.images.express.co.uk/img/dynamic/151/590x/secondary/Asteroid-news-dinosaur-killer-10-billion-atom-bombs-NASA-asteroid-hit-Earth-2049786.webp?r=1568185925852'
image2.style.height = '300px'

const list = document.querySelectorAll('ul li')
const theItem = list[list.length-1]
theItem.className = 'item'
theItem.id = 'item-16'
theItem.innerText = "Won\'t get fooled again"