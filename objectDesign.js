// Design a class to represent a person's credit card. The class should include the following attributes: cardholderName, cardNumber, cardPin, cardBalance.
class CreditCard{

  constructor(cardholderName, cardNumber){
    this.cardholderName = cardholderName, //string 
    this.cardNumber = cardNumber, // number
    this.cardBalance = 0, // number
    this.transactions = []
  } 
}

const tiffianyCreditCard = new CreditCard (
  "Tiffiany", 
  1234, 
  
)

console.log(tiffianyCreditCard)

class Transaction{
  constructor(amount, place){
    this.amount = amount, // number
    this.place = place  // string
  }
}
class Merchants{
  constructor(providers){
    this.cardsAccepted = providers,
    this.typesOfCredit = ['credit', 'debit']
  }
  typeAccepted(){
    return this.typesOfCredit
  }
}

let newMerch = new Merchants(['Visa', 'MasterCard'])
console.log(newMerch.cardsAccepted)

class Account{
  constructor(types){
    this.providers = [],
    this.types = types
  }
  acceptedProviders(transaction, merchant){

    console.log(merchant) 
  }

}

const test = new Account();


console.log(test.acceptedProviders())

// output: array of transaction Objects

// Tiffany is going to send you some info about her recent expenses: [[10, "Starbucks"], [4, "Starbucks"], [50, "Trader Joes"]]

// transaction output: 


let tranactionsFromTiff = [[10, "Starbucks"], [4, "Starbucks"], [50, "Trader Joes"]]

const transactionsObjects = (transactions) => {
  let transactionsList = []
  for ( let transaction of transactions){
    // let transaction = tranactions[i]
    // console.log(transaction)

    let transactionsObject = new Transaction(
      transaction[0], 
      transaction[1]
      )
      
    transactionsList.push(transactionsObject)
  }
 return transactionsList
}
console.log(transactionsObjects(tranactionsFromTiff))