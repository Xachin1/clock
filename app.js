const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

setInterval(() => {
  setHandles();
}, 1000);

function setHandles() {
  const d = new Date();

  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const extraMinutesAngle = seconds * 0.1;
  const minuteAngle = minutes * 6 + extraMinutesAngle;

  const extraHourAngle = minutes * 0.5;
  const hourAngle = hours * 30 + extraHourAngle;

  secondHandle.style.transform = `translate(-50%) rotate(${seconds * 6}deg)`;
  hourHandle.style.transformm = `translate(-50%) rotate(${hourAngle}deg)`;
  minuteHandle.style.transform = `translate(-50%) rotate(${minuteAngle}deg)`;
}
