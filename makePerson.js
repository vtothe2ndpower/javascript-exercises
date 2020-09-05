/* 
Title: Make A Person 

Description: Fill in the object constructor with the following methods below:
- getFirstName()
- getLastName()
- getFullName()
- setFirstName(first)
- setLastName(last)
- setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an 
argument must accept only one argument and it has to be a string. These methods must 
be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
  let names = firstAndLast.split(' ');

  this.getFirstName = function(){
    return names[0];
  };
  this.getLastName = function(){
    return names[1];
  };
  this.getFullName = function(){
    return `${names[0]} ${names[1]}`;
  };
  this.setFirstName = function(first){
    names[0] = first;
  };
  this.setLastName = function(last){
    names[1] = last;
  };
  this.setFullName = function(firstAndLast){
    let newNames = firstAndLast.split(' ');
    names[0] = newNames[0];
    names[1] = newNames[1];
  };
};