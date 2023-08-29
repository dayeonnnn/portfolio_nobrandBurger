const burger_sub = document.querySelectorAll('.best .img ul li')
const burger = document.querySelector('.best .img p img')
const name = document.querySelector('.best .contents h2')
const name_kr = document.querySelector('.best .contents h3')
const content = document.querySelector('.best .contents .content')
burger_sub[0].addEventListener('click',function(e){
    e.preventDefault()
    burger.src = './images/5_double_cheese.png'
    name.innerHTML = 'Double Cheese Signature'
    name_kr.innerHTML = '더블치즈 시그니처'
    content.innerHTML = '더블치즈가 스모크한 풍미와 고소함이 더해진<br>아메리칸 클래식 버거'
})
burger_sub[1].addEventListener('click',function(e){
    e.preventDefault()
    burger.src = './images/4_quatromac.png'
    name.innerHTML = 'Quatro Mac&<br>Cheese'
    name_kr.innerHTML = '콰트로 맥앤치즈'
    content.innerHTML = '네가지 치즈로 <br>더욱 꾸덕하고 찐한 콰트로 맥앤치즈 버거'
})
burger_sub[2].addEventListener('click',function(e){
    e.preventDefault()
    burger.src = './images/2_chipotlehot.png'
    name.innerHTML = 'Chipotle Hot <br>Chicken'
    name_kr.innerHTML = '치폴레 핫 치킨'
    content.innerHTML = '매콤한 치킨 패티에 치폴레소스가<br>더해진 크리스피 핫 치킨 버거'
})
burger_sub[3].addEventListener('click',function(e){
    e.preventDefault()
    burger.src = './images/3_toomuch.png'
    name.innerHTML = 'Too Much<br>Bacon'
    name_kr.innerHTML = '투머치 베이컨'
    content.innerHTML = '베이컨 3장과 치즈 2장으로<br>압도적으로 풍성한 투머치 베이컨'
})
for(let i of burger_sub){
    console.log(i)
    i.addEventListener('click',function(){
        for(let j of burger_sub){j.classList.remove('active')}
        i.classList.add('active')
    })
}
