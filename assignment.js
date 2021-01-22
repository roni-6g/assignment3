// https://github.com/roni-6g/assignment3


//First problem solution

function kilometerToMeter(kilometer){
    if(kilometer <= 0){
        return "Invalid value";
    }
    else {
        var miter = kilometer * 1000;
        return miter;
    }    
}


//Second problem solution

function budgetCalculator(watch,mobile,laptop ){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totaAmount = watchPrice + mobilePrice + laptopPrice;
    return totaAmount;
}

//Third problem solution

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

