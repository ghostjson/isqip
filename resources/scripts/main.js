let crt_page = 0;


let $next_btn = document.getElementById('nextbtn');
let $back_btn = document.getElementById('backbtn');

let page = [
    document.getElementById('details-page'),
    document.getElementById('stream')
];


window.onload = ()=>{
    $next_btn.addEventListener('click', ()=>{
        crt_page++;
        for(let i=0;i < page.length; i++){
            if(crt_page == i){
                page[i].style.display = 'grid';
            }
            else{
                page[i].style.display = "none"; 
            }
        }
    });

    $back_btn.addEventListener('click', ()=>{
        crt_page--;
        for(let i=0;i < page.length; i++){
            if(crt_page == i){
                page[i].style.display = 'grid';
            }
            else{
                page[i].style.display = "none"; 
            }
        }
    });

}