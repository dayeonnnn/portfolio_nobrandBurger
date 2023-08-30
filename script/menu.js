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
const main_bg = document.querySelector('.click_bg')
const clickAll = document.querySelector('main .click_all')
const close = document.querySelector('main .click a')
const burger_img = document.querySelector('main .click .img img')
const burger_list = document.querySelectorAll('.burger ul li')
const burgerName_ko = document.querySelector('main .click h2')
const burgerName_en = document.querySelector('main .click h3')
const burger_content = document.querySelector('main .click .content')
const click_bg = document.querySelector('.click_bg')
clickAll.style.display = 'none'
click_bg.style.display = 'none'
for(let i of burger_list){
    i.addEventListener('click',function(){
        click_bg.style.display='block'
    })
}
close.addEventListener('click',function(){
    click_bg.style.display='none'
})

close.addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display='none'
})
burger_list[0].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_1.png'
    burgerName_ko.innerHTML = '페퍼로니피자 치킨'
    burgerName_en.innerHTML = 'Pepperoni Pizza Chicken'
    burger_content.innerHTML = '페퍼로니 토핑 번과 바삭한 치킨패티로 피자, 치킨, 버거의 완벽한 밸런스를 즐길 수 있는 버거'
})
burger_list[1].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_2.png'
    burgerName_ko.innerHTML = '치폴레 핫 치킨'
    burgerName_en.innerHTML = 'Chipotle Hot Chicken'
    burger_content.innerHTML = '매콤한 치킨 패티에 치폴레소스가 더해진 크리스피 핫 치킨 버거'
})
burger_list[2].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_3.png'
    burgerName_ko.innerHTML = '투머치 베이컨'
    burgerName_en.innerHTML = 'Too Much Bacon'
    burger_content.innerHTML = '베이컨 3장과 치즈 2장으로 압도적으로 풍성한 투머치 베이컨'
})
burger_list[3].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_4.png'
    burgerName_ko.innerHTML = '콰트로 맥앤치즈'
    burgerName_en.innerHTML = 'Quatro Mac&Cheese'
    burger_content.innerHTML = '네가지 치즈로 더욱 꾸덕하고 찐한 콰트로 맥앤치즈 버거'
})
burger_list[4].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_5.png'
    burgerName_ko.innerHTML = '더블치즈 베이컨 시그니처'
    burgerName_en.innerHTML = 'Double Cheese Bacon Signature'
    burger_content.innerHTML = '베이컨과 더블치즈가 만나 스모크한 풍미와 고소함이 더해진 아메리칸 클래식 버거'
})
burger_list[5].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_6.png'
    burgerName_ko.innerHTML = '갈릭앤갈릭'
    burgerName_en.innerHTML = 'Garlic & Garlic'
    burger_content.innerHTML = '갈릭칩과 갈릭소스로 진한 갈릭의 풍미가 2배인 버거'
})
burger_list[6].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_7.png'
    burgerName_ko.innerHTML = '코울슬로 치킨'
    burgerName_en.innerHTML = 'Coleslaw Chicken'
    burger_content.innerHTML = '아삭한 식감이 살아있는 달콤한 코울슬로와 바삭하게 튀긴 통가슴살 치킨 패티가 어우러진 버거'
})
burger_list[7].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_8.png'
    burgerName_ko.innerHTML = 'NBB 오리지널'
    burgerName_en.innerHTML = 'NBB Original'
    burger_content.innerHTML = '직화로 구워낸 두툼한 미트 패티에 신선한 양상추와 토마토, NBB 특제 버거 소스를 더한 오리지널 버거'
})
burger_list[8].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_9.png'
    burgerName_ko.innerHTML = 'NBB 어메이징'
    burgerName_en.innerHTML = 'NBB Amazing'
    burger_content.innerHTML = '더블 패티 & 더블 치즈, 어메이징한 크기의 NBB 어메이징 버거'
})
burger_list[9].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_10.png'
    burgerName_ko.innerHTML = 'NBB 시그니처'
    burgerName_en.innerHTML = 'NBB Signature'
    burger_content.innerHTML = '직화로 불맛을 살린 두툼한 미트 패티에 진한 치즈를 얹어 깊은 맛을 선사하는 치즈버거'
})
burger_list[10].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_11.png'
    burgerName_ko.innerHTML = '스모키살사'
    burgerName_en.innerHTML = 'Smoky Salsa'
    burger_content.innerHTML = '두툼한 직화 미트 패티에 매콤한 살사소스가 더해져 느끼함을 잡은 버거'
})
burger_list[11].addEventListener('click',function(e){
    e.preventDefault()
    clickAll.style.display = 'block'
    burger_img.src='./images/menu/burger_12.png'
    burgerName_ko.innerHTML = '미트 마니아'
    burgerName_en.innerHTML = 'Meatmania'
    burger_content.innerHTML = '더블 패티와 더블 치즈, 고급스러운 트러플 핫 페퍼 소스에 계란후라이까지 든든한 버거'
})