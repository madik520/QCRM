(() => {
  const imgBlock = document.getElementById('bgImg');

  const imgArr = [
    {
      id: 1,
      url: 'url(./img/back-1.jpg)'
    },
    {
      id: 2,
      url: 'url(./img/back-2.jpg)'
    },
    {
      id: 3,
      url: 'url(./img/back-3.jpg)'
    },
    {
      id: 4,
      url: 'url(./img/back-4.jpg)'
    },
  ]

let timeCount = 0;
const currentImg = localStorage.currentImg;

setTimeout(() => {
  imgBlock.style.backgroundImage = `${currentImg}`;
  imgBlock.style.display = 'block';
}, 1200);

// get random number for array with img
const randomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const timerId = setInterval(() => {
  const getCount = randomInteger(1, 4);
  const getArr = imgArr.find((i) => i.id === getCount);

  window.localStorage.setItem('currentImg', getArr?.url);

  imgBlock.style.backgroundImage = `${getArr?.url}`;
}, 10000)

const countTimer = setInterval(() => {
  timeCount = ++timeCount;

  if(timeCount >= 60) {
    clearInterval(timerId);
    clearInterval(countTimer);
    console.log('delete timer') //I deliberately left console.log so that I/You could make sure that the timer is deleted
  }
}, 1000);

})()
