const topMenu = document.querySelectorAll('main .top_menu li button')
const section = document.querySelectorAll('section')
topMenu.forEach(function(t,i){
    t.addEventListener('click',function(){
        window.scrollTo(0,section[i].offsetTop-100)
    })
})
const rightMenu = document.querySelectorAll('main .right_menu li button')
const rightLi = document.querySelectorAll('main .right_menu li')
const rightAll = document.querySelector('main .right_menu')
console.log(rightMenu)
rightMenu.forEach(function(t,i){
    t.addEventListener('click',function(){
        window.scrollTo(0,section[i].offsetTop-100)
    })
})
rightAll.style.display='none'
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 300){
        rightAll.style.display='block'
    }else{
        rightAll.style.display='none'
    }
})
for(let i of rightLi){
    i.addEventListener('click',function(){
        for(let j of rightLi){j.classList.remove('active')}
        i.classList.add('active')
    })
}
