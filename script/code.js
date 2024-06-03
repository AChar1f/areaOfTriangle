function convert() {
    let base = (+document.querySelector('#base').value) / 2
    let height = +document.querySelector('#height').value
    let areaOfTriangle = (base * height)
    document.querySelector('#output').value = areaOfTriangle + " cm^2"
}
