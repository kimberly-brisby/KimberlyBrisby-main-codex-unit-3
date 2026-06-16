const animals =["cat", "dog","elephant","monkey","horse","giraffe","whale","lion","tiger","wolf"];

for(let i = 0; i < animals.length; i++){
    console.log(`${i+1} my animal is ${animals[i]}`)
}

const food =["pizza", "burger","hotdog","broccoli","carrot","cheese","corn","potato","tomato","ceral"];
function showItems(array){
    for(let i = 0; i < array.length; i++){
        console.log(`${1+i} my item ${array[i]}`)
    }
}
showItems(food)

showItems(animals)