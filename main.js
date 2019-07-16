let countdown;
const heading = document.querySelector('.clock');
const backAt = document.querySelector('.end-time');
const form = document.querySelector('form');
heading.textContent = '00:00';
function timer(seconds) {
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTime(seconds);
	displayTimeEnd(then);
	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		secondsLeft ? displayTime(secondsLeft) : clearInterval(countdown);
	}, 1000);
}
function displayTime(seconds) {
	const minut = Math.round(seconds / 60);
	const reminderSeconds = seconds % 60;
	const display = `${minut}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
	heading.textContent = display;
	document.title = display;
}
function displayTimeEnd(timestamp) {
	const end = new Date(timestamp);
	const hours = end.getHours();
	const minutes = end.getMinutes();
	const displayEndTime = `Be Back At ${hours > 12 ? hours - 12 : hours}:${minutes}`;
	backAt.textContent = displayEndTime;
}
function onSubmit(e) {
	e.preventDefault();
	const enterTime = e.target[0].value;
	this.reset();
	timer(enterTime);
}
form.addEventListener('submit', onSubmit);
