// PUT YOUR CODE HERE
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')

let shapesTl = gsap.timeline({repeat:-1})

shapesTl.from('.red', {x: -200, y: -200, duration: .5, delay: .5})
      .from('.green', {x: 200, y: -200, duration: .5})
      .from('.blue', {x: 200, y: 200, duration: .5})
      .from('.yellow', {x: -200, y: 200, duration: .5})

      .to('.red', {x: '100vw', left: -200, borderRadius: '50%', backgroundColor: 'green', duration: .5})
      .to('.green', {y: '100vh', top: -200, borderRadius: '50%', backgroundColor: 'blue', duration: .5}, '<')
      .to('.blue', {x: 0, left: 0, borderRadius: '50%', backgroundColor: 'yellow', duration: .5}, '<')
      .to('.yellow', {y: 0, top: 0, borderRadius: '50%', backgroundColor: 'red', duration: .5}, '<')

      .to('.red', {left: 0, duration: .5})
      .to('.green', {top: 0, duration: .5}, '<')
      .to('.blue', {left: -200, duration: .5}, '<')
      .to('.yellow', {left: -200, duration: .5}, '<')

shapesTl.play()