class letsKnoweachOther {
    static firstName = 'Chukwu';
    static lastName = 'Chinecherem'
    static email = 'Chukwulawrencep@gmail.com';
    static twitter = 'CHINECHEREMCHU4@gmail.com';
    static facebook = 'Chukwu Lawrence'
    static age = '24'
    static phoneNumber = '+234-8144883248';


    static getfullname() {
        return this.firstName + ' ' + this.lastName
    }
    static allUNeedToKnowAboutLawrence() {
        return this.firstName + ' ' + this.lastName + ' ' + this.email + ' ' + this.twitter + ' ' + this.facebook + ' ' + this.age + ' ' + this.phoneNumber;
    }



}

const africaBeauty = letsKnoweachOther.getfullname
const eDeyPain = letsKnoweachOther.email
const maker = letsKnoweachOther.twitter
const paddy = letsKnoweachOther.allUNeedToKnowAboutLawrence;

const fifaWorldCup = new letsKnoweachOther();

console.log(letsKnoweachOther, eDeyPain, maker, paddy);
console.log(fifaWorldCup, letsKnoweachOther);