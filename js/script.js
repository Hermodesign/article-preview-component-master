const share = document.querySelector('.share');
const share2 = document.querySelector('.share-2');
const shareBox = document.querySelector('.share-box');
const shareMobile = document.querySelector('.shareMobile');
const shareBoxHidden = document.querySelector('.share-box-hidden');
const shareMobile2 = document.querySelector('.shareMObile-2');

share.addEventListener('click', () => {
  shareBox.classList.toggle('hidden');
  share.classList.add('hidden');
  share2.classList.remove('hidden');
});

share2.addEventListener('click', () => {
  shareBox.classList.toggle('hidden');
  share.classList.remove('hidden');
  share2.classList.add('hidden');
});

shareMobile.addEventListener('click', () => {
  shareBoxHidden.classList.toggle('hidden');
  shareMobile.classList.add('hidden');
  shareMobile2.classList.remove('hidden');
});

shareMobile2.addEventListener('click', () => {
  shareBoxHidden.classList.toggle('hidden');
  shareMobile.classList.remove('hidden');
  shareMobile2.classList.add('hidden');
});
