const boxcontainer = document.querySelector('.box');
const boxcover = document.querySelector('.box-cover');
const letter = document.querySelector('.letter');

const openbox = () => {
	boxcover.style.zIndex = -1;
	boxcover.style.transform = `rotateX(180deg)`;
};
const closebox = () => {
	boxcover.style.zIndex = 2;
	boxcover.style.transform = `rotateX(0deg)`;
};
const comeoutletter = () => {
	letter.style.transform = `translateY(-100%)`;
	setTimeout(() => {
		letter.style.zIndex = 2;
		letter.style.transform = `translateY(0%) scale(1.2)`;
	}, 300);
};
const comeinletter = () => {
	letter.style.transform = `translateY(-100%)`;
	setTimeout(() => {
		letter.style.zIndex = 0;
		letter.style.transform = `translateY(0%) scale(1)`;
	}, 300);
};

boxcover.addEventListener('mouseenter', () => {
	openbox();
	setTimeout(comeoutletter, 200);
});
boxcontainer.addEventListener('mouseleave', () => {
	setTimeout(closebox, 500);
	comeinletter();
});

boxcontainer.addEventListener('click', () => {
	openbox();
	setTimeout(comeoutletter, 200);
});
letter.addEventListener('click', () => {
	setTimeout(closebox, 500);
	comeinletter();
});
