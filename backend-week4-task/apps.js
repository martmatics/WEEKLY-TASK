function dropElements(arr, func) {
    cout = []; cin = [];
    for (i = 0; i < arr.length; i++){
        if (func(arr[i]) === false && cout.includes(arr[i]) === false){
            cout.push(arr[i]);
        } else {
            cin.push(arr[i]);
        }
    }
   return cin;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))