window.onload = () => {
    let a = document.querySelector("span.text:nth-child(1)")
    let b = document.querySelector("span.text:nth-child(2)")
    let c = document.querySelector("span.text:nth-child(3)")
    let d = document.querySelector("span.text:nth-child(4)")
    let e = document.querySelector("span.text:nth-child(5)")
    let f = document.querySelector("span.text:nth-child(6)")
    let g = document.querySelector("span.text:nth-child(7)")
    let h = document.querySelector("span.text:nth-child(8)")
    a.onmouseenter = function () {
        document.body.classList.remove('bk2', 'bk3', 'bk4', 'bk5', 'bk6', 'bk7', 'bk8')
        document.body.classList.add("bk1")
    }
    a.onmouseout = function () {
        document.body.classList.remove('bk1')
    }
    b.onmouseenter = function () {
        document.body.classList.remove('bk1', 'bk3', 'bk4', 'bk5', 'bk6', 'bk7', 'bk8')
        document.body.classList.add("bk2")
    }
    b.onmouseout = function () {
        document.body.classList.remove('bk2')
    }
    c.onmouseenter = function () {
        document.body.classList.remove('bk1', 'bk2', 'bk4', 'bk5', 'bk6', 'bk7', 'bk8')
        document.body.classList.add("bk3")
    }
    c.onmouseout = function () {
        document.body.classList.remove('bk3')
    }
    d.onmouseenter = function () {
        document.body.classList.remove('bk2', 'bk3', 'bk1', 'bk5', 'bk6', 'bk7', 'bk8')
        document.body.classList.add("bk4")
    }
    d.onmouseout = function () {
        document.body.classList.remove('bk4')
    }
    e.onmouseenter = function () {
        document.body.classList.remove('bk2', 'bk3', 'bk4', 'bk1', 'bk6', 'bk7', 'bk8')
        document.body.classList.add("bk5")
    }
    e.onmouseout = function () {
        document.body.classList.remove('bk5')
    }
    f.onmouseenter = function () {
        document.body.classList.remove('bk2', 'bk3', 'bk4', 'bk5', 'bk1', 'bk7', 'bk8')
        document.body.classList.add("bk6")
    }
    f.onmouseout = function () {
        document.body.classList.remove('bk6')
    }
    g.onmouseenter = function () {
        document.body.classList.remove('bk2', 'bk3', 'bk4', 'bk5', 'bk6', 'bk1', 'bk8')
        document.body.classList.add("bk7")
    }
    g.onmouseout = function () {
        document.body.classList.remove('bk7')
    }
    h.onmouseenter = function () {
        document.body.classList.remove('bk2', 'bk3', 'bk4', 'bk5', 'bk6', 'bk7', 'bk1')
        document.body.classList.add("bk8")
    }
    h.onmouseout = function () {
        document.body.classList.remove('bk8')
    }
}