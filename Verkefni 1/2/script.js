var products = [
	{
		name: "Vara 1",
		price: "10kr"
	},
	{
		name: "Vara 2",
		price: "76kr"
	},
	{
		name: "Vara 3",
		price: "13kr"
	},
	{
		name: "Vara 4",
		price: "18kr"
	},
	{
		name: "Vara 5",
		price: "92kr"
	},
]

window.onload = function () {

	for (var i = 0; i < products.length; i++)
	{
		addProduct(i);
	}
}

function addProduct (id){
	var listElement = document.createElement("li");
	var productNameElement = document.createElement("p");
	var productPriceElement = document.createElement("p");

	productNameElement.innerHTML = products[id].name;

	productPriceElement.innerHTML = "Verð: " + products[id].price;

	listElement.appendChild(productNameElement);
	listElement.appendChild(productPriceElement);

	document.getElementById("list").appendChild(listElement)
}