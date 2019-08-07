function getReceipt() {
    var text1= "<h3>You Ordered:</h3>";
    var text2= "<h3>Subtotal:</h3>";
    var runningTotal = 0;  //total bill

    //SIZE SELECTION=========================================
    var sizeTotal = 0;  //cost of pizza size
    var sizeArray = document.getElementsByClassName("size");  //list of all the different sizes

    for (var i=0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1= text1 + selectedSize + "<br>";
        }
    }

    //checking which size is selected and determining the price for it
    if(selectedSize === "Personal Pizza") {
        sizeTotal = 6; 
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize ==="Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize ==="Extra Large Pizza") {
        sizeTotal = 16;
    }

    text2 = (text2 + "$ " + sizeTotal + ".00 <br>");
    runningTotal = sizeTotal; //cost of pizza = cost of size of base
    getCrust(runningTotal,text1,text2); //next function to be run
}


//CHECKING CRUST SELECTION================================
function getCrust(runningTotal,text1,text2) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (var k=0; k < crustArray.length; k++) {
        if (crustArray[k].checked) {
        var selectedCrust = crustArray[k].value;
        text1 = text1 + selectedCrust + "<br>";
        }
    }

    if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
    } else {
        crustTotal = 0;}
    
    text2 = (text2 + "+ " + crustTotal + ".00 <br>");
    runningTotal = (runningTotal + crustTotal);
    getSauce(runningTotal,text1,text2);
};


//CHECKING SAUCE SELECTION=====================================
function getSauce(runningTotal,text1,text2) {
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("sauce");

    for (var m=0; m < sauceArray.length; m++) {
        if (sauceArray[m].checked) {
            var selectedSauce = sauceArray[m].value;
            text1 = text1 + selectedSauce + "<br>";
        }
    }
    //All sauce options are complimentary
    text2 = (text2 + "+ " + "0" + ".00<br>");
    runningTotal = runningTotal;
    getCheese(runningTotal,text1,text2);
};

//CHECKING CHEESE SELECTION===================================
function getCheese(runningTotal,text1,text2) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese")

    for (var n=0; n < cheeseArray.length; n++) {
        if (cheeseArray[n].checked) {
            var selectedCheese = cheeseArray[n].value;
            text1 = text1 + selectedCheese + "<br>";
        }
    };

    if (selectedCheese === "Extra Cheese") {
        cheeseTotal = 3;
    } else {
        cheeseTotal = 0;
    }

    text2= (text2 + "+ " + cheeseTotal + ".00<br>");
    runningTotal = (runningTotal + cheeseTotal); 
    getMeat(runningTotal,text1,text2);
};

//CHECKING MEAT SELECTION=====================================
function getMeat(runningTotal, text1,text2) {
    var meatTotal = 0;  //monetary value for all selected meat toppings
    var selectedMeat = [];  //list of all selected meats
    var meatArray = document.getElementsByClassName("meats"); //list of all possible meat options

    //checking which meat options are selected and putting them in an array
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);  //adding selected meat to the selectedMeat array
        }
    };


    //checking how many additional meat options to charge for
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }

    if (meatCount > 0) {
        text2= (text2 + "+ " + meatTotal + ".00<br>");
        text1 = text1 + selectedMeat.toString() + "<br>";
    } else {
        text2 = text2;
        text1 = text1;
    }
    
    
    runningTotal = (runningTotal + meatTotal); //pizza size + meat toppings
    getVeggie(runningTotal,text1,text2); 
};

//CHECKING VEGGIE SELECTION====================================
function getVeggie(runningTotal,text1,text2) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("vegetables");

    for (var p=0; p < veggieArray.length; p++) {
        if (veggieArray[p].checked) {
            selectedVeggie.push(veggieArray[p].value)
        }
    }

    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount -1);
    } else {
        veggieTotal = 0;
    }

    if (veggieCount > 0) {
        text2 = (text2 + "+ " + veggieTotal + ".00<br>");
        text1 = text1 + selectedVeggie.toString();
    } else {
        text2 = text2;
        text1 = text1;
    }
    
    runningTotal = (runningTotal + veggieTotal);    

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("showprice").innerHTML = text2;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};

function cancel() {
    document.getElementById("frmMenu").reset();
    document.getElementById("showText").innerHTML = "";
    document.getElementById("showprice").innerHTML = "";
    document.getElementById("totalPrice").innerHTML = "";
}
