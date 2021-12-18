console.log('connected');


let switchState = false;

const moveRight = () => {
    anime({
        targets: '#switchSlider',
        translateX: 120,
        duration: 200,
        easing: 'easeInCubic'
      })
    anime({ 
        targets: '#switchContainer', 
        background: linearGradient(rgb(2,0,36,), rgb(9,9,121,)),
        duration: 200,
        easing: 'easeInCubic' 
    });

    switchState = true;
}

const moveLeft = () => {
    anime({
        targets: '#switchSlider',
        translateX: 0,
        duration: 200,
        easing: 'easeInCubic'
      });
    switchState = false;
}

const switchEl = document.getElementById('switchContainer');

switchEl.addEventListener('click',()=>{
    if (switchState === false) {
        moveRight();
    } else {
        moveLeft();
    }
});




//   anime({
//     targets: '#switchContainer',
//     backgroundColor: '#3d3d3d',
//     duration: 6000
//   });