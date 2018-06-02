//Soal Pertama => Logic Challenge - Change Me!

var changeMe = (arr) => {

	for (var i = 0; i < arr.length; i++) {

		var object = {}
		if (typeof arr[i][3] === 'undefined') {
			var age = 'Invalid Birth Year'
		}else{
			var d = new Date()
			var age = d.getFullYear() - arr[i][3]
		}
		object.firstName = arr[i][0]
		object.lastName = arr[i][1]
		object.gender = arr[i][2]
		object.age = age
		
		console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]} :`)
		console.log(object)
	}
	
	
}

console.log(`Soal Pertama => Logic Challenge - Change Me!`)
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
console.log()


// Soal Kedua => Logic Challenge - Shopping Time!

var shoppingTime = (memberId, money) => {
	
	if (memberId == "" || typeof memberId === 'undefined') {
		return "Mohon maaf, toko X hanya berlaku untuk member saja"
	}else if (money < 50000 || typeof money === 'undefined') {
		return "Mohon maaf, uang tidak cukup"
	}else{
		var produk = [	
		{name: 'Sepatu brand Stacattu', harga: '1500000'},
		{name: 'Baju brand Zoro', harga: '500000'},
		{name: 'Baju brand H&N', harga: '250000'},
		{name: 'Sweater brand Uniklooh', harga: '175000'},
		{name: 'Casing Handphone', harga: '50000'},	
		]

		var object = {
			memberId : memberId,
			money : money,
			listPurchased : [],
			changeMoney: money
		}	

		produk.sort(function (a, b) {
			return b.harga - a.harga;
		})

		for (var i = 0; i < produk.length; i++) {

			if (object.changeMoney >= produk[i].harga) {
				object.listPurchased.push(produk[i].name)
				object.changeMoney -= produk[i].harga
			}
		}
		return object
	}	

}

console.log(`Soal Kedua => Logic Challenge - Shopping Time!`)
console.log(shoppingTime('1820RzKrnWn08', 2475000))
console.log()

// SOal Ketiga => Logic Challenge - Toko X

var countProfit = (shoppers) => {
	let listBarang = [ 
	['Sepatu Stacattu', 1500000, 10],
	['Baju Zoro', 500000, 2],
	['Sweater Uniklooh', 175000, 1]
	]

	var produk = []

	for (var i = 0; i < listBarang.length; i++) {

		const cariProduk = shoppers.filter(shoppers => shoppers.product === listBarang[i][0]);
		
		produk.push({
			product : listBarang[i][0],
			shoppers : [],
			leftOver : listBarang[i][2],
			totalProfit : 0
		})

		for (var j = 0; j < cariProduk.length; j++) {

			let stok = produk[i].leftOver - cariProduk[j].amount
			let totalProfit = listBarang[i][1] * cariProduk[j].amount

			if (stok >= 0) {
				produk[i].leftOver -= cariProduk[j].amount
				produk[i].shoppers.push(cariProduk[j].name)
				produk[i].totalProfit += totalProfit
			}

		}
	}
	return produk
}

console.log(`SOal Ketiga => Logic Challenge - Toko X`)
console.log(countProfit(
	[{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
	{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
	{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}
	])
)
console.log()
console.log(countProfit(
	[{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
	{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
	{name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
	{name: 'Devi', product: 'Baju Zoro', amount: 1}, 
	{name: 'Lisa', product: 'Baju Zoro', amount: 1}
	])
)
console.log()
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]))
