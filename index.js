let counter = 0;

const getData = function(){
  console.log("....fetching data", counter++)
}

const debounce = function(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}



const betterFunction = debounce(getData,500)