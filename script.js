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
    let listItem = document.createElement("li");
    let text = document.createTextNode("X value is: " +x); 
    listItem.appendChild(text);
    list.appendChild(listItem);
}while (x < 10) {
    
}
