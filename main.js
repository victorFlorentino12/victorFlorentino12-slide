var lastIndex = 0;
var images = document.querySelectorAll('.container img');

images.forEach((item,index) => {
    document.querySelectorAll(".bullet-single")[index].addEventListener('click',()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex]
        let actualImage = document.querySelectorAll('.container img')[index]
        let lastBullet = document.querySelectorAll(".bullet-single")[lastIndex]
        let actualBullet = document.querySelectorAll(".bullet-single")[index]
        lastIndex = index 
        
        lastBullet.style.backgroundColor = '#ccc';
        actualBullet.style.backgroundColor = '#333';
        lastImage.style.opacity = 0;
        actualImage.style.opacity=1;
        

    })
    
});