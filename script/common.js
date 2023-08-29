const menu = document.querySelectorAll('header > ul > li')
const menu_sub = document.querySelector('.menu')
const news_sub = document.querySelector('.news')
const m_nav = document.querySelector('.m_nav')
const m_nav_open = document.querySelector('.m_nav_open')
const topBtn = document.querySelector('#topBtn')
topBtn.style.display = 'none'
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 300){
        topBtn.style.display='block'
    }else{
        topBtn.style.display='none'
    }
})
topBtn.addEventListener('click',function(){
    //window.scrollTo(0, 100) //or
    window.scrollTo({top:0, behavior:'smooth'})
})

menu[1].addEventListener('mouseover',function(){
    menu_sub.style.display = 'block'
})
menu[1].addEventListener('mouseout',function(){
    menu_sub.style.display = 'none'
})
menu[3].addEventListener('mouseover',function(){
    news_sub.style.display = 'block'
})
menu[3].addEventListener('mouseout',function(){
    news_sub.style.display = 'none'
})
m_nav.addEventListener('click',function(){
    m_nav_open.classList.toggle('showHide')
})