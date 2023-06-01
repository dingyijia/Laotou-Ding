(function () {
    let imgs = document.querySelector('.top_pos')
    for (let i = 0; i < 30; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'img_div')
        div.innerHTML = `<img src='img/1-${i}.jpg' />`
        imgs.appendChild(div)
    }
    let video = document.createElement('div')
    video.setAttribute('class', 'img_div')
    video.innerHTML = "<video class='one_video' src = 'video/final.mp4' />"
    imgs.appendChild(video)
    let right_box = document.querySelector(".content_right")
    let left_box = document.querySelector(".content_left")
    right_box.onmousemove = () => {
        setTimeout(() => {
            imgs.scrollLeft += 70
            let _show = document.querySelector('.box_show_img')
            _show.classList.add('show_hide')
            let _showImg = document.getElementById('box_show_img_line')
            let _showVideo = document.getElementById('box_show_video_line')
            _showVideo.src = ""
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
                let _showVideo = document.getElementById('box_show_video_line')
                _showVideo.src = ""
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
            let _showVideo = document.getElementById('box_show_video_line')
            if(children[i].children[0].src.indexOf('mp4')>-1){
                _showVideo.src = children[i].children[0].src
                _showVideo.classList.remove('show_hide')
                _showImg.classList.add('show_hide')
            }else{
                _showImg.src = children[i].children[0].src
                _showVideo.classList.add('show_hide')
                _showImg.classList.remove('show_hide')
            }
           
        }
        children[i].onmouseout = () => {
            // let _show = document.querySelector('.box_show_img')
            // _show.classList.add('show_hide')
            // let _showImg = document.getElementById('box_show_img_line')
            // _showImg.src = ""
        }
    }
})()