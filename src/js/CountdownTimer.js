export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  getTime() {
    return this.targetDate - Date.now();
  }

  changeTime(time) {
    this.refs.days.textContent = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    this.refs.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.refs.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.refs.secs.textContent = this.pad(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }
  initTime() {
    setInterval(() => {
      this.changeTime(this.getTime());
    }, 1000);
  }
}
