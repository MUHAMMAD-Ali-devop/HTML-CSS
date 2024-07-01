const anchor = document.querySelectorAll('.anchor-tab');
const content = document.querySelectorAll('.content');
anchor.forEach((element,index) => {
    element.addEventListener('click', () => {
        content.forEach(cnt=>{cnt.classList.remove('active')});
       content[index].classList.add('active');

    })
});