let btn = document.getElementById('btn');
let text = document.getElementById('text');
let wrapper = document.getElementById('wrapper');
let btn2 = document.getElementById('btn2');
let img = document.getElementById('img');
let border = document.getElementById('border');
let rotate = document.getElementById('rotate');


text.style.display = 'none';

btn.onclick = () => {
    if (text.style.display = 'none'){
        text.style.display = 'block';
    } else {
        text.style.display = 'none'
    }
    wrapper.style.left = '50%'
    wrapper.style.top = '50%'
    btn2.style.display = 'none'
    img.style.display = 'block'
}

btn2.onclick = () => {

    wrapper.style.left = Math.round(Math.random() * (90 - 10) + 10)+'%';
    wrapper.style.top = Math.round(Math.random() * (80 - 20) + 20)+'%';
    // wrapper.style.transform = 'rotate(90deg)'
    // Я попробовал сделать анимацию врашения при клике
    // но не получилось, у меня position absolute игнорировал
    // position relative и случался только один раз 
}