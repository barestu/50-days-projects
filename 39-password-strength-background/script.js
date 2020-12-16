const password = document.getElementById('password');
const bg = document.getElementById('background');

password.addEventListener('input', e => {
  const { value } = e.target;
  const length = value.length;
  const blurValue = 20 - length * 2;
  bg.style.filter = `blur(${blurValue}px)`;
});
