document.querySelector('.father').addEventListener('click', function (e) {
    document.querySelector('.son').style.display = "block"
})
document.querySelector('.push_father').addEventListener('mouseover', (e) => {
    document.querySelector('ul').style.backgroundColor = " pink"
})
document.querySelector('.push_father').addEventListener('mouseout', (e) => {
    document.querySelector('ul').style.backgroundColor = " green"
})