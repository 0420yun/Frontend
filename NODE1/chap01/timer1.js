let count = 0;

const intervalId = setInterval(() => {
  console.log(new Date());
  count++;
  
  if (count >= 10) {
    clearInterval(intervalId);
  }
}, 1000);
