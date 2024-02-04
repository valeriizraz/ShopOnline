import {createElementsTimer} from './modules/createElements.js';

const addElements = () => {
  createElementsTimer();

  const spanDays = document.querySelector('.baner__count-days');
  const spanHours = document.querySelector('.baner__count-hours');
  const spanMinutes = document.querySelector('.baner__count-minutes');
  const spanSeconds = document.querySelector('.baner__count-seconds');

  const getTimeRemaining = () => {
    const deadline = document.querySelector('[data-timer-deadline]')
        .dataset.timerDeadline;

    const t = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = () => {
    const itemDays = document
        .querySelector('.baner__timer-item-days');
    console.log(itemDays);
    const itemSeconds = document
        .querySelector('.baner__timer-item-seconds');
    // itemSeconds.classList.add('is-visible');
    const timer = getTimeRemaining();

    console.log(timer.days);

    if (timer.days > 0) {
      itemDays.classList.remove('is-visible');
      itemSeconds.classList.add('is-visible');

      spanDays.innerHTML = timer.days;
      spanHours.innerHTML = timer.hours;
      spanMinutes.innerHTML = timer.minutes;
      // spanSeconds.innerHTML = timer.seconds;
    } else {
      itemSeconds.classList.remove('is-visible');
      itemDays.classList.add('is-visible');

      // spanDays.innerHTML = timer.days;
      spanHours.innerHTML = timer.hours;
      spanMinutes.innerHTML = timer.minutes;
      spanSeconds.innerHTML = timer.seconds;
    }

    const timerCount = setTimeout(startTimer, 1000);

    if (timer.total <= 0) {
      const timer = document.querySelector('.baner__timer-container');
      clearTimeout(timerCount);
      setTimeout(() => {
        timer.remove();
      }, 3 * 1000);
    }
  };

  startTimer();
  



}

addElements();

  // const renderTimer = () => {
  //   const banerTimer = document.querySelector('.baner__timer');
  //   const banerTitle = createTag('p', 'baner__timer-title', 'До конца акции осталось:');
  //   const {banerTimerContainer, banerItemDays, banerItemHours, banerItemMinutes, banerItemSeconds} = createElementsTimer();

  //   banerTimerContainer.append(banerItemDays, banerItemHours, banerItemMinutes, banerItemSeconds);
  //   banerTimer.append(banerTitle, banerTimerContainer);
  // }

  // const timer = () => {
  //   const createDeadline = () => {
  //     const deadline = document.querySelector('[data-timer-deadline]')
  //   .dataset.timerDeadline;
  
  //     const dateStop = new Date(deadline).getTime();
  //     const dateNow = Date.now();
    
  //     const timeRemining = dateStop - dateNow;
    
  //     const seconds = Math.floor(timeRemining / 1000 % 60);
  //     const minutes = Math.floor(timeRemining / 1000 / 60 % 60);
  //     const hours = Math.floor(timeRemining / 1000 / 60 / 60 % 24);
  //     const days = Math.floor(timeRemining / 1000 / 60 / 60 / 24);
  
  //     // console.log(`${days} ${hours} ${minutes} ${seconds}`);

  //     return {
  //       timeRemining, seconds, minutes, hours, days,
  //     };
  //   };

  //   const getElementsTimer = () => {
  //     const days = document.querySelector('.baner__count-days');
  //     const hours = document.querySelector('.baner__count-hours');
  //     const minutes = document.querySelector('.baner__count-minutes');
  //     const seconds = document.querySelector('.baner__count-seconds');

  //     return {
  //       days, hours, minutes, seconds,
  //     }
  //   };

  //   renderTimer();

  //   const start = () => {
      
  //     const {days, hours, minutes, seconds} = getElementsTimer();

  //     const timer = createDeadline();
      
  //     days.textContent = timer.days;
  //     hours.textContent = timer.hours;
  //     minutes.textContent = timer.minutes;

  //     if (timer.days <= 0) {
  //       const days = document.querySelector('.baner__count-days');
  //       days.remove();
  //     }
  //     // seconds.textContent = timer.seconds;

  //     if (timer.timeRemining <= 0) {
  //       days.textContent = '00';
  //       hours.textContent = '00';
  //       minutes.textContent = '00';
  //       // seconds.textContent = '00';
  //     }

  //     setInterval(start, 1000);
  //   }

  //   start();
    
    
  // };

  // timer()

  

  

  