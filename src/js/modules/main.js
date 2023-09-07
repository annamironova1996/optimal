document.onmousemove = function(event){
    let x = event.x - 937;
    let y = event.y - 209;
    console.log(x + ' ' + y);
    document.querySelector('.main__fruits-eye-1-wrapper').style.transform = 'rotate('+57.2958 * arcctg(x, y)+'deg)'
    document.querySelector('.main__fruits-eye-2-wrapper').style.transform = 'rotate('+57.2958 * arcctg(x-10, y)+'deg)'

    function arcctg (x, y) {
       if (x > 0 && y > 0) return Math.PI/2 - Math.atan(x/y);
       if (x < 0 && y > 0) return Math.PI/2 - Math.atan(x/y);
       if (x < 0 && y < 0) return Math.PI + Math.atan(y/x);
       if (x > 0 && y < 0) return 3 * Math.PI/2 + Math.abs(Math.atan(x/y));
    }

    
}

/* document.getElementById('myImg')
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
  } else {
    // код для обычных устройств
} */