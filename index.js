for(let i=0;i<4;i++){
    document.querySelectorAll('li')[i].addEventListener('click',(e)=>{
        if(document.querySelectorAll('h3')[i].textContent=="+"){
            document.querySelectorAll('p')[i].style.height="25px"
            document.querySelectorAll('h3')[i].textContent="-"
        }
        else{
            document.querySelectorAll('p')[i].style.height="0px"
            document.querySelectorAll('h3')[i].textContent="+"
        }
    })
}