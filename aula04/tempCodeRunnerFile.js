const max = arr => Math.max(...arr);
console.log(max([1,2,3,4,5]));

const max2 = function(arr){
    let maior = 0;
    for(posi in arr){
        if(arr[posi]>maior){
            maior = arr[posi];
        }
    }
    return maior;
}
console.log(max2([1,2,3,4,5]));