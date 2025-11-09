function sum(a){
    if (typeof a !== "number") {
        return "The value passed is not a number";
    }

    let total = 0;
    let i = 0;

    while (i <= a) {
        total = total + i;
        i = i + 1;
    }

    return total;
    
}

console.log(sum(5))



function factorial(num){

    if (typeof num !== "number")
        return "The value passed is not a number"

    if (num === 0) {
        return 1;
    }
    
    let total = 1;

    while (num > 0){
        total = total * num;
        num = num - 1;
    }

    return total

}

console.log(factorial(4))


function funkymaths(num1, num2, num3, num4){

    if (typeof num3 !== "number" && typeof num4 !== "number"){
        return num1 - num2
     } else if (typeof num1 == "number" && typeof num2 == "number" && typeof num3 == "number" && typeof num4 !== "number"){
        return num1 + num2 + num3
     } else
        tot1 = num1 + num2 
        tot2 = num3 + num4 
        return tot1 / tot2

}

console.log(funkymaths(8, 2, 3, 5))



numbers = [1, 2, 33, 45, 6, 44]

sortednumbers = numbers.toSorted((a, b) => a - b)

oddlist = []

for (number of sortednumbers){
    if (number % 2 !== 0){
        oddlist.push(number);
    }
}

console.log(oddlist)

let me = {
    firstname: "Lunga",
    lastname: "Sokani",
    age: "23",
    favouritecolor: "black",
    dreamcar: "Porsche",
};

me.favouritefood = "Umnqusho"

delete me.age 

console.log(me)
    



