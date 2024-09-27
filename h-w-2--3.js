//“Заберите посылку {id посылки} из ячейки №{номер ячейки}. Ваш счет составляет: {баланс}ед.”
let balance = 500
let price = 100
let codeBase = "A001DFX0"
let postamate = [null, null, null, "1432HGF", null]
let shipmentId = "1432HGF"

let smsCode = "A001DFX0"

function giveShipment(smsCode, codeBase, balance, price, postamate,shipmentId) {
    if(smsCode === codeBase && balance >= price) {
        balance -= price
console.log(`Заберите посылку ${shipmentId} из ячейки №${postamate.indexOf(shipmentId)}. 
 Ваш счет составляет: ${balance}ед.`)
    } else {
        console.log("невозможно получить посылку")
    }
}

giveShipment(smsCode, codeBase, balance, price, postamate, shipmentId)