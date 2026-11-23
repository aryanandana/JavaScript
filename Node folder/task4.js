//Rectangle's area and perimeter

let rectangle={
    width:40,
    length:60,
    area:function(){
        a = this.width * this.length
        console.log("Area of rectangle:", a)

    },
    perimeter: function() {
        p = 2 * (this.length + this.width)
        console.log("Perimeter of rectangle:", p)
    }
}
rectangle.area()
rectangle.perimeter()

//Account Details//
console.log("************")
console.log("Transaction Details")
let account={
    holder:"Arya",
    balance:60000,
    deposit:function(){
       console.log("Current Balance:",this.balance)
       depo=4000
       this.balance=this.balance+depo
       console.log("Deposit Amount:",depo)
       console.log("After Deposit balance:",this.balance)
    },
    withdrwal:function(){
        widraw=3000
        this.balance=this.balance-widraw
        console.log("Withdrwal amount:",widraw)
    },
    acbalance:function(){
        console.log("Existing Balance:",this.balance)
    }
}
account.deposit()
account.withdrwal()
account.acbalance()

// Product price and product above 1000
console.log("*************")
let Product = new Map()
Product.set("Bag", 500)
Product.set("Smartwatch", 1800)
Product.set("Speaker", 800)
Product.set("Headphone", 1500)
Product.set("Laptop", 50000)
console.log("Products above 1000")
for ([i, j] of Product) {
    if (j > 1000) {
        console.log(i, j)
    }
}

// Account Holders
console.log("***********")
let bankac=new Map()
bankac.set("Arya",10000)
bankac.set("Deva",50000)
bankac.set("Anagha",20000)
bankac.set("leya",30000)
Holder=" "
Balance=0
for([i,j] of bankac){
    if(j>Balance){
        Balance=j
        Holder=i
    }
}
console.log("Highest balance holder is:", Holder)
console.log("Highest balance is:", Balance)

