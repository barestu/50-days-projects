const contents = document.querySelectorAll('.content');
const links = document.querySelectorAll('nav li');

links.forEach((link, idx) => {
  link.addEventListener('click', () => {
    hideAllContents();
    hideAllLinks();

    link.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'));
}

function hideAllLinks() {
  links.forEach(link => link.classList.remove('active'));
}