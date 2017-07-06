var balance = 1000, balance2 = 0;

var ImprimirBalance = function(bl){
	if (bl === 1) {
		console.log(balance)
	}
	if (bl === 2) {
		console.log(balance2)
	}
}

var ImprimirBalance2 = function(){
	console.log(balance2)
}

var RetirarDinero = function(dinero){
	if(dinero < balance){
		balance = balance - dinero
		console.log("retirando " + dinero + " de su cuenta")
	}else{
		console.log("El monto que desea retirar es superior a su balance")
	}
}

var Transferir = function(monto){
	balance = balance - monto
	balance2 += monto
	console.log("Transfiriendo " + monto + " de su cuenta")

}

function retirarTodoMiDinero() {
	var total = 0;
	while(balance > 0){
		if (balance < 100) {
			console.log("Retirando... " + balance)
			total += balance
			balance -= balance
			console.log("monto total retirando " + total)
		}else{
			total += 100
			balance -= 100
			console.log("Retirando... " + "100")
			console.log("monto total retirando " + total)
		} 
	}
}