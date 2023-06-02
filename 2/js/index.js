(function () {
    let imgs = document.querySelector('.top_pos')
    for(let i=0;i<33;i++){
        let div = document.createElement('div')
        div.setAttribute('class','img_div')
        div.innerHTML = `<img src='img/弹幕上海 丁一珈 孔嘉慧 陈梦丹_${i}.jpg' />`
        imgs.appendChild(div)
    }
    let right_box = document.querySelector(".content_right")
    let left_box = document.querySelector(".content_left")
    right_box.onmousemove = () => {
        setTimeout(() => {
            imgs.scrollLeft += 20
        }, 50)
    }
    left_box.onmousemove = () => {
        if (imgs.scrollLeft > 0) {
            setTimeout(() => {
                imgs.scrollLeft -= 20
            }, 50)
        }
    }

    let {children} = imgs
    for(let i=0;i<children.length;i++){
        children[i].onmouseover = ()=>{
            children[i].classList.add('change_div')
            children[i].children[0].classList.add('change_div')
        }
        children[i].onmouseout = ()=>{
            children[i].classList.remove('change_div')
            children[i].children[0].classList.remove('change_div')
        }
    }
})()