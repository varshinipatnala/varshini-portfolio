var typed=new Typed(".auto-type",{
    strings:["DEVELOPER","DESIGNER"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})


let filterItem = document.querySelector('.title');
let filterImages = document.querySelectorAll('.box');

window.addEventListener('load',()=>{
    filterItem.addEventListener('click',(selectedItem)=>{
        if(selectedItem.target.classList.contains('btn1')){
            document.querySelector('.active').classList.remove('active');
            selectedItem.target.classList.add('active');
            let filterName =  selectedItem.target.getAttribute('data-name');
            filterImages.forEach((image)=>{
                let filterImages = image.getAttribute('data-name');
                if((filterImages == filterName ) || filterName == 'all'){
                    image.style.display='block';
                }
                else{
                    image.style.display='none';
                }
            })
        }
    })
})



