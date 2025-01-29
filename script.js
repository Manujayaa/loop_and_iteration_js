//for loop
for(let i = 0; i < 50; i++){

    if(i % 2 != 0){
        continue;
    }
    let list = document.getElementById("list");//catching element using id
    let listItem = document.createElement("li");// newly create element input  to the html
    let text = document.createTextNode(i); // added New created value textnode
    listItem.appendChild(text);//created "test" appendto li
    list.appendChild(listItem);  //calling again to list through appendchild li  
    if( i ==25){ //to stop in 25
        break;
    }
}
//while loop
let x = 0;
while (x < 10) {

    let listItem = document.createElement("li");
    let text = document.createTextNode("X value is: " +x); 
    listItem.appendChild(text);
    list.appendChild(listItem);
    x++;
}

//do while
x=0;
do{
    x++;
    
}while (x < 10) {
    
}

//for in loop
//create object
let user ={
    name: "manujaya",
    age: 24,
    address:"Kandy,srilanka"
}
//input  forIn loop method  to define inputs
for (const data in user) {//catching user object's data (keys)
    // console.log(data);
     //console.log(user[data]);//catching key's data
    let listItem = document.createElement("li");
    let text = document.createTextNode(data+ " is "+ user[data]); //modify method 
    listItem.appendChild(text);
    list.appendChild(listItem);   
    }
//array method
let myArr = ['manujaya','janith','yash'];
for (const myData in myArr) {
    let listItem = document.createElement("li");
    //let text = document.createTextNode(myData); //catching index keys only
    let text = document.createTextNode(myArr[myData]); //cathching array's values
    listItem.appendChild(text);
    list.appendChild(listItem);   
        
    }

    //for of method ----easy to work with array
    for (const data of myArr){
        let listItem = document.createElement("li");
        let text = document.createTextNode("data is: "+data); //modify method
        listItem.appendChild(text); 
        list.appendChild(listItem); 
    }
    
    //for array changing
    let users = [
        {name: "manujaya", age: 24},
        {name: "janith", age: 28},
        {name:"bandara", age:20}
    ]
    
    //1>> method of pushing
    let names = [];
    for (let user of users) {
        names.push(user.name);//add new datavalues to  array
    }        
    console.log(names);
    //2>> method of map 
    let age = users.map(function(user){
        return user.age/2;  //can return key's  values 
    })
    console.log(age);

    //filter
    let filtered = users.filter(function(user){
        return user.age > 20; //its getting boolean value only
    })
    console.log(filtered);
    