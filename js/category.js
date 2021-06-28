let category = document.getElementsByClassName("main-category-collapse-control");

for(let i =0 ;i<category.length;i++){
    category[i].addEventListener('click',()=>{
        let icons = category[i].getElementsByClassName("fa");
        if(icons.length>0){
            icons[0].classList.toggle('main-category-rotate');
        }
    })
}