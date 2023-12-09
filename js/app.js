const panels = document.querySelectorAll('.box');
console.log(panels);
panels.forEach(i => {
    i.addEventListener('click' , ()=>{
        removeActiveClasses();
        i.classList.add('active');
    });
});
function removeActiveClasses(){
    panels.forEach(j => {
        j.classList.remove('active');
    });
}