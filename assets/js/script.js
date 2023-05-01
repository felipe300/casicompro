import Products from './classes/Products.js'

const alternative = document.getElementById("alternative")
const load = document.getElementById("load")
const form = document.getElementById("idForm")

let firstProduct = new Products("Dell Xtreme 270", "Laptops", "3,990", "./assets/img/kari-shea-1SAnrIxw5OY-unsplash.jpg")
let alternativeProduct = new Products("HP Super Xtreme 4", "Laptops", "1, 290", "./assets/img/christopher-gower-m_HRfLhgABo-unsplash.jpg")

function loadData (title, price, src) {
	document.getElementById("titleProduct").innerText = title
	document.getElementById("priceProduct").innerText = price
	document.getElementById("imageProduct").setAttribute('src', src)
	document.getElementById("imageProduct").setAttribute('alt', title)
}

window.addEventListener("load", () => {
	loadData('¡Haz click para cargar el producto!', 0, './assets/img/casicompro.png')
})

load.addEventListener(('click'), (e) => {
	e.preventDefault()
	loadData(firstProduct.brand, firstProduct.price, firstProduct.image)
})

alternative.addEventListener(('click'), (e) => {
	e.preventDefault()
	loadData(alternativeProduct.brand, alternativeProduct.price, alternativeProduct.image)
})

form.addEventListener(('submit'), (e) => {
	e.preventDefault()
	alert("Producto agregado a la canasta de compra")
})