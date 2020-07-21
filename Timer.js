class Timer  {
    constructor(i, s, p, callbacks) {
        this.inputp = i;
        this.startb = s;
        this.pauseb = p;
        this.startb.addEventListener('click', this.start);
        this.pauseb.addEventListener('click', this.pause);
        if(callbacks){
          this.onStart = callbacks.onStart;
          this.onTick = callbacks.onTick;
          this.onComplete = callbacks.onComplete
        }
    }

  start = () => {
    if(this.onStart) {
      this.onStart(this.timeLeft);
    }
    
    this.tick();
     this.t = setInterval(this.tick, 20) 
  }  

  pause = () => {
        clearInterval(this.t)
  }

  tick =()=> {
    if(this.timeLeft <=0)
    {
      this.pause();
      if(this.onComplete) {
        this.onComplete();
      }
    }
    else{
      this.timeLeft = this.timeLeft - 0.02;
      if(this.onTick) {
        this.onTick(this.timeLeft);
      }
    }
      
  }

  get timeLeft () {
      return parseFloat(this.inputp.value)
  }

  set timeLeft (time) {
      this.inputp.value = time.toFixed(2);
  }
}
