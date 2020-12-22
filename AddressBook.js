class Contact{
    constructor(...params){
        this.firstname=params[0];
        this.lastname=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phonenumber=params[6];
        this.email=params[7];
    }
    get firstname(){return this._firstname;}
    set firstname(firstname){
        let fnRegex=RegExp("^[A-Z]{1}[a-z]{2,}");
        if(fnRegex.test(firstname)){
            this._firstname=firstname;
        }else{
            throw 'Invalid firstname';
        }
    }

    get lastname(){return this._lastname;}
    set lastname(lastname){
        let lnRegex=RegExp("^[A-Z]{1}[a-z]{2,}");
        if(lnRegex.test(lastname)){
            this._lastname=lastname;
        }else{
            throw 'Invalid lastname';
        }
    }
    
    get address(){return this._address;}
    set address(address){
        let addRegex=RegExp("^[A-Z0-9a-z]{4,}$");
        if(addRegex.test(address)){
            this._address=address;
        }
        else{
            throw 'Invalid address';
        }
    }

    get city(){return this._city;}
    set city(city){
        let cityRegex=RegExp("^[A-Za-z]{4,}$");
        if(cityRegex.test(city)){
            this._city=city;
        }else{
            throw 'Invalid city';
        }
    }

    get state(){return this._state;}
    set state(state){
        let stateRegex=RegExp("^[A-Za-z]{4,}$");
        if(stateRegex.test(state)){
            this._state=state;
        }else{
            throw 'Invalid state';
        }
    }

    get zip(){return this._zip;}
    set zip(zip){
        let zipRegex=RegExp("^[1-9]{1}[0-9]{5}$");
        if(zipRegex.test(zip)){
            this._zip=zip;
        }
        else{
            throw 'Invalid zip';
        }
    }
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber){
        let numberRegex=RegExp("^[0-9]{2}\\s[6-9]{1}[0-9]{9}$");
        if(numberRegex.test(phoneNumber)){
            this._phoneNumber=phoneNumber;
        }
        else{
            throw 'Invalid phonenumber';
        }
    }

    get email(){return this._email;}
    set email(email){
        let numberRegex=RegExp("^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$");
        if(numberRegex.test(email)){
            this._email=email;
        }
        else{
            throw 'Invalid email';
        }
    }
    toString(){
        return "\nFirstName:"+this.firstname+",Lastname:"+this.lastname+",Address:"+this.address+",City:"
                +this.city+",State:"+this.state+",Zip:"+this.zip+",MobileNumber:"+this.phoneNumber+",Email:"
                +this.email;
    }

}
console.log("UC3 AddContacts");
let contacts=new Array();
function AddContacts(firstname,lastname,address,city,state,zip,phoneNumber,email){
    //UC7_DuplicateData
    if(contacts.some(s=>s.firstname==firstname)){
        console.log("Contact aready exists");
        return;
    }
    let contact=new Contact(firstname,lastname,address,city,state,zip,phoneNumber,email);
    contacts.push(contact);
}
AddContacts('SriSri','Sabbisetti','Gandhichowk','Bantumilli','Andhrapradesh','521324','8712443377','sravni@gmail.com');
AddContacts('Sravani','Sabbisetti','Gandhichowk','Bantumilli','Andhrapradesh','521324','8712443377','sravni@gmail.com');
AddContacts('Lakshmi','Sabbisetti','Madhapur','Hyderabad','Telanagana','500801','9290815127','Rupika@gmail.com');
console.log(contacts.toString());

//Uc4 edit conatct
function GetConatctIndex(firstname){
    for(let i=0;i<contacts.length;i++){
        if(contacts[i].firstname==firstname){
            return i;
        }
    }
    return -1;
}

let contactindex=GetConatctIndex('Sravani');
if(contactindex!=-1){
    console.log("contacts before updation");
    console.log(contacts.toString());
    contacts[contactindex].firstname='Rupika';
    contacts[contactindex].city='Hyderabad';
    console.log("contacts after updation");
    console.log(contacts.toString());
}else{
    console.log("conatct not found");
}

//UC5 deleteContact

function DeleteContact(firstname){
    for(let i=0;i<contacts.length;i++){
        if(contacts[i].firstname==firstname){
            contacts.pop(i);
            console.log(contacts.toString());
        }
    }
}
console.log("delete contact");
DeleteContact('Lakshmi');

//UC6 count
console.log("Counting number of persons in addressbook");
let count = contacts.reduce(((count) => { count += 1; return count; }), 0);
console.log("Count number of contacts is: " + count)

//uc8
function SearchCityOrState(cityOrState){
    if(contacts.filter((p=>p.city==cityOrState)||(p=>p.state==cityOrState))){
        console.log(contacts.toString());
    }
}

//searching with city
console.log("searching with city");
SearchCityOrState('Hyderabad');
//searching with state
console.log("searching with state");
SearchCityOrState('Andhrapradesh');