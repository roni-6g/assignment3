
// https://github.com/roni-6g/assignment3

//First problem solving

function kilometerToMeter(kilometer){
    if(kilometer <= 0){
        return "Invalid value";
    }
    else {
        var miter = kilometer * 1000;
        return miter;
    }    
}


//Second problem solving

function budgetCalculator(watch,mobile,laptop ){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totaAmount = watchPrice + mobilePrice + laptopPrice;
    return totaAmount;
}

//Third problem solving

function hotelCost(day){    
    var hotelRent = 0;
    if(day <= 10){
        hotelRent = day * 100;    
    }
    else if(day <= 20){
        var firstTenDays    = 10 * 100;
        var remaining       = day - 10;
        var secondTenDays   = remaining * 80;
        hotelRent = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays    = 10 * 100;
        var secondTenDays   = 10 * 80;
        var remaining       = day - 20;
        var lastTenDays     = remaining * 50;
        hotelRent = firstTenDays + secondTenDays + lastTenDays;    
    }
    return hotelRent;
}

//Forth problem solving

function megaFriend(friendsName){
    var largeName = "";  
    friendsName.forEach(function(names) {
      if(names.length > largeName.length) {
        largeName = names;
      }
    });
  
    return largeName;
}

