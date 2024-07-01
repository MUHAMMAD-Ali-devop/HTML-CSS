const slide_btn = document.querySelectorAll('.slide-btn');
const slide = document.querySelectorAll('.slide');
slide_btn.forEach((element,index) => {
    console.log(index);
    element.addEventListener('click',()=>{
        element.classList.toggle('slided');
        slide[index].classList.toggle('change');
    })
});


// slide_btn[0].addEventListener('click',()=>{
//     slide_btn[0].classList.toggle('slided');
//     slide[0].classList.toggle('change');
// })