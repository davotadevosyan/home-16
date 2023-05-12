// let counter = 10;

let box = document.querySelector('.box')
// box.style.width = '100%'
// box.style.height = '200px'
// box.style.border = '1px solid pink'

let small = document.querySelector('.small')
// small.style.width = ''
// small.style.height = '10px'
// small.style.border = '1px solid black'
// small.style.alignItems = 'center'



// box.onclick = function foo (event) {
//     small.style.background = 'red';
//     counter++
    
    
        // if (counter <= 100) {
        //     small.innerHTML = `${counter}+ %`
        //     small.style.width = `${counter}px`
    // small.children[0].style.width = `${counter}px`
    small.addEventListener('keyup', function(e)
    {box.innerHTML = e.target.value;}
    );    

    let big = document.querySelector('.big')
    big.style.width = '200px'
    big.style.height = '200px'
    big.style.background = 'red'
    big.style.display = 'none'

    let btn = document.querySelector('.btn')
    

    btn.onclick = function (b) {
        big.style.display = 'block'
        b ()
    }


