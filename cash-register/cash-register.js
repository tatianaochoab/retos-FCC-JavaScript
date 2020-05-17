function checkCashRegister(price, cash, cid) {
    var change;
    var moneyChange = [];
    const money = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01],
    ]

    let totalChange = (cash - price);
    let totalCid = 0;
    for (let i = 0; i < cid.length; i++) {
        totalCid += cid[i][1];
    }
    if (totalChange > totalCid) {
        change = { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalChange == totalCid) {
        change = { status: "CLOSED", change: cid };
    } else {
        //calcular moneyChange
        for (let i = 0; i < money.length; i++) {
            for (let j = 0; j < cid.length; j++) {
                if (money[i][0] === cid[j][0]) {
                    let numTicket = (parseFloat(cid[j][1]) / parseFloat(money[i][1])).toFixed(0);
                    let ticket = [money[i][0], 0]
                    for (let k = 1; k <= numTicket; k++) {
                        let resta = (parseFloat(totalChange) - parseFloat(money[i][1])).toFixed(2);
                        if (resta >= 0) {
                            //Adicionar valor al billete para adicionarlo a moneyChange
                            totalChange = resta;
                            ticket[1] = parseFloat((parseFloat(ticket[1]) + parseFloat(money[i][1])).toFixed(2));
                        } else {
                            break;
                        }
                    }
                    if (ticket[1] !== 0) {
                        moneyChange.push(ticket);
                    }
                }
            }
        }
        if (totalChange == 0) {
            change = { status: "OPEN", change: moneyChange };
        } else {
            change = { status: "INSUFFICIENT_FUNDS", change: [] };
        }
    }
    return change;
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


// Debería volver {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.


