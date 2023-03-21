let toggleMenu = document.querySelector('.toggle-menu')
let header = document.querySelector('header')
let data = document.querySelector('.data')
let linksHeader = document.querySelectorAll('.right-nav ul li a')
let scrollToTop = document.querySelector('.scroll-to-top')
let theCanvas = document.getElementById('my-canvas-1')
let theCanvas2 = document.getElementById('my-canvas-2')
let theCanvas3 = document.getElementById('my-canvas-3')
let theCanvas4 = document.getElementById('my-canvas-4')
let theContext = theCanvas.getContext('2d')
let theContext2 = theCanvas2.getContext('2d')
let theContext3 = theCanvas3.getContext('2d')
let theContext4 = theCanvas4.getContext('2d')
let w = theCanvas.clientWidth
let h = theCanvas.clientHeight

// The Toggle Menu
toggleMenu.addEventListener('click', () => {
  header.classList.toggle('open')
})

let allBoxs = document.querySelectorAll('.data-container > div')

// The Draw By Convas
let theProg = 0
let diff
let cir = 0

// Canvas One
let sim = setInterval(() => {
  diff = (theProg * 100 * Math.PI * 2 * 10).toFixed(2)
  theContext.clearRect(0, 0, w, h)
  theContext.lineWidth = 10
  theContext.font = '22px Tahoma'
  theContext.strokeStyle = '#97a9bd'
  theContext.textAlign = 'center'
  theContext.fillText(theProg * 0.25 + '%', w / 2 + 5, h / 2 + 5 + 2, w)
  theContext.beginPath()
  theContext.arc(w / 2, h / 2, 75, 4.72, (0.25 * diff) / 102990 + 4.72)
  theContext.stroke()
  if (theProg >= 100) {
    clearInterval(sim)
  }
  theProg++
  cir += 0.0629
}, 50)

// Canvas Two
let sim2 = setInterval(() => {
  diff = (theProg * 100 * Math.PI * 2 * 10).toFixed(2)
  theContext2.clearRect(0, 0, w, h)
  theContext2.lineWidth = 10
  theContext2.font = '22px Tahoma'
  theContext2.strokeStyle = '#97a9bd'
  theContext2.textAlign = 'center'
  theContext2.fillText(theProg * 0.5 - 0.5 + '%', w / 2 + 5, h / 2 + 5 + 2, w)
  theContext2.beginPath()
  theContext2.arc(w / 2, h / 2, 75, 4.72, (0.5 * diff) / 102990 + 4.72)
  theContext2.stroke()
  if (theProg >= 100) {
    clearInterval(sim2)
  }
  theProg++
  cir += 0.0629
}, 50)

// Canvas Three
let sim3 = setInterval(() => {
  diff = (theProg * 100 * Math.PI * 2 * 10).toFixed(2)

  theContext3.clearRect(0, 0, w, h)
  theContext3.lineWidth = 10
  theContext3.font = '22px Tahoma'
  theContext3.strokeStyle = '#97a9bd'
  theContext3.textAlign = 'center'
  theContext3.fillText(theProg * 0.75 - 1.5 + '%', w / 2 + 5, h / 2 + 5 + 2, w)
  theContext3.beginPath()
  theContext3.arc(w / 2, h / 2, 75, 4.72, (0.75 * diff) / 102990 + 4.72)
  theContext3.stroke()
  if (theProg >= 100) {
    clearInterval(sim3)
  }

  theProg++
  cir += 0.0629
}, 50)

// Canvas Four
let sim4 = setInterval(() => {
  diff = (theProg * 100 * Math.PI * 2 * 10).toFixed(2)
  theContext4.clearRect(0, 0, w, h)
  theContext4.lineWidth = 10
  theContext4.font = '22px Tahoma'
  theContext4.strokeStyle = '#97a9bd'
  theContext4.textAlign = 'center'
  theContext4.fillText(theProg - 3 + '%', w / 2 + 5, h / 2 + 5 + 2, w)
  theContext4.beginPath()
  theContext4.arc(w / 2, h / 2, 75, 4.72, diff / 102990 + 4.72)
  theContext4.stroke()
  if (theProg >= 100) {
    clearInterval(sim4)
  }
  theProg++
  cir += 0.0629
}, 50)

linksHeader.forEach((link) => {
  link.addEventListener('click', (e) => {
    let section = document.querySelector(link.dataset.type)
    e.preventDefault()
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
})

window.onscroll = () => {
  if (window.scrollY >= 500) {
    scrollToTop.style.right = '20px'
    scrollToTop.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  } else {
    scrollToTop.style.right = '-40px'
  }
}

// Stop The Right Click and The Keyboard Buttons Code
document.addEventListener('contextmenu', (e) => e.preventDefault())
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0)
}
document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  ) {
    return false
  }
}
