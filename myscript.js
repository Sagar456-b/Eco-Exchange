function getInputValue(){
    // Selecting the input element and get its value
    var type = document.getElementById("exampleFormControlSelect1");
    inputVal = document.getElementById("Quantity").value;
    var lbl = document.getElementById("MyValue");
    var money = document.getElementById("MyMoney");
    // var ty = type.toLowerCase() 
    results = inputVal * 2;
    pay = results * 0.5
    lbl.innerHTML = results;
    // money.innerHTML = pay;
 
       

    // Displaying the value
   
}