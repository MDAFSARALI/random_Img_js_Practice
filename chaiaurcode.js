const baseURL = 'https://images.unsplash.com/gifs/fail';

// this url gives an image. Use this and NO API calls
const container = document.querySelector('.content');

const Majak=function(){
  const rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${baseURL}/fail-${randomNumber()}.gif`;
  // console.log(img.src)
  container.appendChild(img);
}

}
function randomSize() {
  return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
  return Math.floor(Math.random() * 10)+ 1 ;
}

setInterval(Majak, 1000);