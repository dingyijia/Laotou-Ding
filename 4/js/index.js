(function () {
    let imgs = document.querySelector('.top_pos')
    for (let i = 0; i < 24; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'img_div')
        div.innerHTML = `<img src='img/Rectangle-${i}.png' />`
        imgs.appendChild(div)
    }
    let right_box = document.querySelector(".content_right")
    let left_box = document.querySelector(".content_left")
    right_box.onmousemove = () => {
        setTimeout(() => {
            imgs.scrollLeft += 70
            let _show = document.querySelector('.box_show_img')
            _show.classList.add('show_hide')
            let _showImg = document.getElementById('box_show_img_line')
            _showImg.src = ""
        }, 50)
    }
    left_box.onmousemove = () => {
        if (imgs.scrollLeft > 0) {
            setTimeout(() => {
                imgs.scrollLeft -= 70
                let _show = document.querySelector('.box_show_img')
                _show.classList.add('show_hide')
                let _showImg = document.getElementById('box_show_img_line')
                _showImg.src = ""
            }, 50)
        }
    }

    let { children } = imgs
    for (let i = 0; i < children.length; i++) {
        children[i].onclick = () => {
            let _show = document.querySelector('.box_show_img')
            _show.classList.remove('show_hide')
            let _showImg = document.getElementById('box_show_img_line')
            _showImg.src = children[i].children[0].src
        }
        children[i].onmouseout = () => {
            // let _show = document.querySelector('.box_show_img')
            // _show.classList.add('show_hide')
            // let _showImg = document.getElementById('box_show_img_line')
            // _showImg.src = ""
        }
    }
})()