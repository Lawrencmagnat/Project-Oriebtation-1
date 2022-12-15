// Parent Class
class LawrenceShop {

    // Creating a constructor called lawrence shops; We created it so that we can access it later through the *Super* command line.
    constructor(){
        if(this.constructor === LawrenceShop){
            throw new error('Dey Play');
        }
    }
    // Creation Of the class Propperties
    shops = "4 shops"
    ShopRentals = 'Okoro Chidimma , Stephen Iloh , Azuka Eneh , Chukwu Tobias.'
    PaymentsFees = "#4000.00 (Monthly)."

    // setPayDetails(month, Amount, Balance){
    //     this[this.setPayDetails] = {
    //         month: 'January-December',
    //         Amount: '#43,500'
    //     }
    // }

    // Lets Create a method ..Note that we will be creating two method called details and RentalGuild();

    details() {
        console.log('This is Lawrence Shop and he does not like Quarreling')
    }
    //  Creaing the second method
    RentalGuild() {
        console.log('Pay into this account number 2116937058; Account Name: Chukwu Lawrence; Bank: UBA BANK.')
    }


}
//lets intanciate our LawrenceShop to details  
// const details = new LawrenceShop();
// // Runing the code
// details.details()


// const rental = new LawrenceShop();
// rental.RentalGuild();

// Let us Create our First Child class; it can be possible by using the "extends" command.

class shopsA extends LawrenceShop {
    // N/B: Any Properties assigned to this class, can be accessed by this class alone.
    shopOwner = 'Okoro Chidimma'
    rent = 'Not-completed'
    Goods = 'Books and Bags'

    // Using the display properties to see the properties of ShopA..And Note "this" .
    displayGoods() {
        console.log(this.Goods)
    }
    displayshopOwner() {
        console.log(this.shopOwner)
    }
    displayRent() {
        console.log(this.rent);
    }

}


const StoreA = new shopsA();
 console.log(StoreA);
// We use the command line below as a key to access the properties within the StoreA
StoreA.displayGoods();
StoreA.displayshopOwner();
StoreA.displayRent()


// Child B = Store B
class shopsB extends LawrenceShop {
    // constructor(LawrenceShop) {
    //     super(lawrenceShops);
    // }
    shopOwner = 'Stephen Iloh'
    rent = "completed"
    Goods = 'Drugs'

    landlordStatements() {
        console.log('Please Endeavour to Pay up your money')
    }
    displayshopOwnerB() {
        console.log(this.shopOwner);
    }
    displayRentB() {
        console.log(this.rent);
    }
    displayGoodsB() {
        console.log(this.Goods);
    }

}



const StoreB = new shopsB();

// StoreB.landlordStatements();

// If you are confused about what happens below..pls recap line 57

StoreB.displayshopOwnerB();

StoreB.displayRentB();

StoreB.displayGoodsB();


StoreB.landlordStatements();

class StoreC extends LawrenceShop {
    // constructor(LawrenceShop) {
    //     super(LawrenceShops);
    // }
    shopOwnerShopC = 'Azuka Eneh'
    rentShopC = 'completed';
    GoodsShopC = 'Phone Accessories';

    landlordSecondStatements() {
        console.log('Tenant that knows What to do...One Odoyewu For You')
    }

    displayshopOwnerShopC() {
        console.log(this.shopOwnerShopC)
    }
    displayRentShopC() {
        console.log(this.rentShopC)
    }
    displayGoodsShopC() {
        console.log(this.GoodsShopC)
    }
}

const Away = new StoreC

Away.displayGoodsShopC();

// Here we  consoled using the child name to the parent property:
console.log(StoreB.details());
console.log(StoreA.RentalGuild());

console.log(StoreB.displayGoodsB());
console.log(StoreA.PaymentsFees);

// wawo: It worked...So happy...Thanks Genelysis for the great Impact of knowledge.




console.log(StoreB.shops);