export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${selector} .value[data-value="days"]`),
      hours: document.querySelector(`${selector} .value[data-value="hours"]`),
      mins: document.querySelector(`${selector} .value[data-value="mins"]`),
      secs: document.querySelector(`${selector} .value[data-value="secs"]`),
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
