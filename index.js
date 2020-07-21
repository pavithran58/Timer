
const input = document.querySelector("#duration");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");

const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let offset;
const newt = new Timer(input, start, pause, {
  onStart (total) {
    offset = total;
  },
  onTick (timeLeft) {
    circle.setAttribute('stroke-dashoffset', perimeter*timeLeft/offset-perimeter)
    
    },
  onComplete() {
    console.log('Completed')
  }
})