let yourShopTextCntr1 = document.getElementById("yourShopTextCntr1")
let yourShopTextCntr2 = document.getElementById("yourShopTextCntr2")
let yourShopTextCntr3 = document.getElementById("yourShopTextCntr3")
let yourShopTextCntr4 = document.getElementById("yourShopTextCntr4")
let yourShopTextCntr5 = document.getElementById("yourShopTextCntr5")
let yourShopTextCntr6 = document.getElementById("yourShopTextCntr6")
let yourShopTextCntr7 = document.getElementById("yourShopTextCntr7")
let yourShopTextCntr8 = document.getElementById("yourShopTextCntr8")
let yourShopTextCntr9 = document.getElementById("yourShopTextCntr9")
let yourShopTextCntr10 = document.getElementById("yourShopTextCntr10")
let yourShopTextCntr11 = document.getElementById("yourShopTextCntr11")
let yourShopTextCntr12 = document.getElementById("yourShopTextCntr12")

let yourShop1 = document.getElementById("yourShop1")
let yourShop2 = document.getElementById("yourShop2")
let yourShop3 = document.getElementById("yourShop3")
let yourShop4 = document.getElementById("yourShop4")
let yourShop5 = document.getElementById("yourShop5")
let yourShop6 = document.getElementById("yourShop6")
let yourShop7 = document.getElementById("yourShop7")
let yourShop8 = document.getElementById("yourShop8")
let yourShop9 = document.getElementById("yourShop9")
let yourShop10 = document.getElementById("yourShop10")
let yourShop11 = document.getElementById("yourShop11")
let yourShop12 = document.getElementById("yourShop12")

let lavashNumber = 0
let kartofelNumber = 0
let hotDogNumber = 0
let gamburgerNumber = 0
let somsaNumber = 0
let mantiNumber = 0
let shashlikNumber = 0
let norinNumber = 0
let oshNumber = 0
let mastavaNumber = 0
let shorvaNumber= 0
let lagmonNumber = 0

let lavashMoney = 0
let kartofelMoney = 0
let hotDogMoney = 0
let gamburgerMoney = 0
let somsaMoney = 0
let mantiMoney = 0
let shashlikMoney = 0
let norinMoney = 0
let oshMoney = 0
let mastavaMoney = 0
let shorvaMoney= 0
let lagmonMoney = 0

document.getElementById("foodsBack1").style.display = "none"
document.getElementById("foodsBack2").style.display = "none"
document.getElementById("foodsBack3").style.display = "none"
document.getElementById("foodsBack4").style.display = "none"
document.getElementById("foodsBack5").style.display = "none"
document.getElementById("foodsBack6").style.display = "none"
document.getElementById("foodsBack7").style.display = "none"
document.getElementById("foodsBack8").style.display = "none"
document.getElementById("foodsBack9").style.display = "none"
document.getElementById("foodsBack10").style.display = "none"
document.getElementById("foodsBack11").style.display = "none"
document.getElementById("foodsBack12").style.display = "none"

foodsButton1.addEventListener('click', function(){
	lavashNumber += 1
	lavashMoney += 10
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countLavash").innerHTML = lavashMoney
	document.getElementById("yourShop1").innerHTML = lavashNumber
	document.getElementById("foodsBack1").style.display = "inline-block"
}
)
foodsBack1.addEventListener('click', function(){
	lavashNumber -= 1
	lavashMoney -= 10
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countLavash").innerHTML = lavashMoney
	document.getElementById("yourShop1").innerHTML = lavashNumber
	if(lavashNumber == 0){
		document.getElementById("foodsBack1").style.display = "none"
	}
})	 
foodsButton2.addEventListener('click', function(){
	kartofelNumber += 1
	kartofelMoney += 5 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countKartofel").innerHTML = kartofelMoney
	document.getElementById("yourShop2").innerHTML = kartofelNumber
	document.getElementById("foodsBack2").style.display = "inline-block"
}
)
foodsBack2.addEventListener('click', function(){
	kartofelNumber -= 1
	kartofelMoney -= 5 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countKartofel").innerHTML = kartofelMoney
	document.getElementById("yourShop2").innerHTML = kartofelNumber
	if(kartofelNumber == 0){
		document.getElementById("foodsBack2").style.display = "none"
	}
})	 

foodsButton3.addEventListener('click', function(){
	hotDogNumber += 1
	hotDogMoney += 3 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countHotDog").innerHTML = hotDogMoney
	document.getElementById("yourShop3").innerHTML = hotDogNumber
	document.getElementById("foodsBack3").style.display = "inline-block"
}
)
foodsBack3.addEventListener('click', function(){
	hotDogNumber -= 1
	hotDogMoney -= 3	 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countHotDog").innerHTML = hotDogMoney
	document.getElementById("yourShop3").innerHTML = hotDogNumber
	if(hotDogNumber == 0){
		document.getElementById("foodsBack3").style.display = "none"
	}
})	 
foodsButton4.addEventListener('click', function(){
	gamburgerNumber += 1
	gamburgerMoney += 10 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countGamburger").innerHTML = gamburgerMoney
	document.getElementById("yourShop4").innerHTML = gamburgerNumber
	document.getElementById("foodsBack4").style.display = "inline-block"
}
)
foodsBack4.addEventListener('click', function(){
	gamburgerNumber -= 1
	gamburgerMoney -= 10
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney 
	document.getElementById("countGamburger").innerHTML = gamburgerMoney
	document.getElementById("yourShop4").innerHTML = gamburgerNumber
	if(gamburgerNumber == 0){
		document.getElementById("foodsBack4").style.display = "none"
	}
})	 
foodsButton5.addEventListener('click', function(){
	somsaNumber += 1	
	somsaMoney += 1
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countSomsa").innerHTML = somsaMoney
	document.getElementById("yourShop5").innerHTML = somsaNumber
	document.getElementById("foodsBack5").style.display = "inline-block"
}
)
foodsBack5.addEventListener('click', function(){
	somsaNumber -= 1
	lavashMoney -= 1
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countSomsa").innerHTML = somsaMoney
	document.getElementById("yourShop5").innerHTML = somsaNumber
	if(somsaNumber == 0){
		document.getElementById("foodsBack5").style.display = "none"
	}
})	 
foodsButton6.addEventListener('click', function(){
	mantiNumber += 1
	mantiMoney += 2	
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countManti").innerHTML = mantiMoney
	document.getElementById("yourShop6").innerHTML = mantiNumber
	document.getElementById("foodsBack6").style.display = "inline-block"
}
)
foodsBack6.addEventListener('click', function(){
	mantiNumber -= 1
	mantiMoney -= 2 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countManti").innerHTML = mantiMoney
	document.getElementById("yourShop6").innerHTML = mantiNumber
	if(mantiNumber == 0){
		document.getElementById("foodsBack6").style.display = "none"
	}
})	 
foodsButton7.addEventListener('click', function(){
	shashlikNumber += 1
	shashlikMoney += 6 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countShashlik").innerHTML = shashlikMoney
	document.getElementById("yourShop7").innerHTML = shashlikNumber
	document.getElementById("foodsBack7").style.display = "inline-block"
}
)
foodsBack7.addEventListener('click', function(){
	shashlikNumber -= 1
	shashlikMoney -= 6 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countShashlik").innerHTML = shashlikMoney
	document.getElementById("yourShop7").innerHTML = shashlikNumber
	if(shashlikNumber == 0){
		document.getElementById("foodsBack7").style.display = "none"
	}
})	 
foodsButton8.addEventListener('click', function(){
	norinNumber += 1
	norinMoney += 12
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countNorin").innerHTML = norinMoney
	document.getElementById("yourShop8").innerHTML = norinNumber
	document.getElementById("foodsBack8").style.display = "inline-block"
}
)
foodsBack8.addEventListener('click', function(){
	norinNumber -= 1
	norinMoney -= 12
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countNorin").innerHTML = norinMoney
	document.getElementById("yourShop8").innerHTML = norinNumber
	if(norinNumber == 0){
		document.getElementById("foodsBack8").style.display = "none"
	}
})	 
foodsButton9.addEventListener('click', function(){
	oshNumber += 1
	oshMoney += 15 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countOsh").innerHTML = oshMoney
	document.getElementById("yourShop9").innerHTML = oshNumber
	document.getElementById("foodsBack9").style.display = "inline-block"
}
)
foodsBack9.addEventListener('click', function(){
	oshNumber -= 1
	oshMoney -= 15 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countOsh").innerHTML = oshMoney
	document.getElementById("yourShop9").innerHTML = oshNumber
	if(oshNumber == 0){
		document.getElementById("foodsBack9").style.display = "none"
	}
})	 
foodsButton10.addEventListener('click', function(){
	mastavaNumber += 1
	mastavaMoney += 14 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countMastava").innerHTML = mastavaMoney
	document.getElementById("yourShop10").innerHTML = mastavaNumber
	document.getElementById("foodsBack10").style.display = "inline-block"
}
)
foodsBack10.addEventListener('click', function(){
	mastavaNumber -= 1
	mastavaMoney -= 14 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countMastava").innerHTML = mastavaMoney
	document.getElementById("yourShop10").innerHTML = mastavaNumber
	if(mastavaNumber == 0){
		document.getElementById("foodsBack10").style.display = "none"
	}
})	 
foodsButton11.addEventListener('click', function(){
	shorvaNumber += 1
	shorvaMoney+= 13 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countShorva").innerHTML = shorvaMoney
	document.getElementById("yourShop11").innerHTML = shorvaNumber
	document.getElementById("foodsBack11").style.display = "inline-block"
}
)
foodsBack11.addEventListener('click', function(){
	shorvaNumber -= 1
	shorvaMoney -= 13 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countShorva").innerHTML = shorvaMoney
	document.getElementById("yourShop11").innerHTML = shorvaNumber
	if(shorvaNumber == 0){
		document.getElementById("foodsBack11").style.display = "none"
	}
})	 
foodsButton12.addEventListener('click', function(){
	lagmonNumber += 1
	lagmonMoney += 16 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countLagmon").innerHTML = lagmonMoney
	document.getElementById("yourShop12").innerHTML = lagmonNumber
	document.getElementById("foodsBack12").style.display = "inline-block"
}
)
foodsBack12.addEventListener('click', function(){
	lagmonNumber -= 1
	lagmonMoney -= 16 
	document.getElementById("inp").value = lavashMoney + kartofelMoney + 
	hotDogMoney + gamburgerMoney + somsaMoney + mantiMoney + shashlikMoney +
	norinMoney + oshMoney + mastavaMoney + shorvaMoney + lagmonMoney
	document.getElementById("countLagmon").innerHTML = lagmonMoney
	document.getElementById("yourShop12").innerHTML = lagmonNumber
	if(lagmonNumber == 0){
		document.getElementById("foodsBack12").style.display = "none"
	}
})	 	
