/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((i)=>{
    if(i.profession==="developer"){
      console.log(`id: ${i.id}, name: ${i.name}, age: ${i.age}, profession: ${i.profession}`);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((i)=>{
    if(i.profession==="developer"){
      console.log(`id: ${i.id}, name: ${i.name}, age: ${i.age}, profession: ${i.profession}`);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let data={ id: 4, name: "Petter", age: "21", profession: "developer" };
  arr.push(data);
  arr.map((i)=>{
    
      console.log(`id: ${i.id}, name: ${i.name}, age: ${i.age}, profession: ${i.profession}`);
    
  });

}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter((i)=>{
    return i.profession!=="admin";
  });
  
  arr.map((i)=>{
    
    console.log(`id: ${i.id}, name: ${i.name}, age: ${i.age}, profession: ${i.profession}`);
    
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "Cherry", age: "22", profession: "developer" },
    { id: 6, name: "Joe", age: "23", profession: "Manager" },
    { id: 7, name: "Lucy", age: "25", profession: "admin" },
  ];

  arr=arr.concat(arr2);
   
  arr.map((i)=>{
    
    console.log(`id: ${i.id}, name: ${i.name}, age: ${i.age}, profession: ${i.profession}`);
    
  });

}
