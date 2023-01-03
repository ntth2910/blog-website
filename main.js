let toggle =document.querySelector('#header .toggle-button');
let collapse = document.querySelectorAll('#header .collapse');

toggle.addEventListener('click', ()=>{
    console.log(collapse)
    collapse.forEach(col => {
        col.classList.toggle('collapse-toggle')
    })
})