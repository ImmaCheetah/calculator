function add(...nums) {
    const totalAdd = nums.reduce((total, num) => {
        return total + num 
    }, 0)
    return totalAdd;
}

console.log(add(1, 22, 343));

function subtract(...nums) {
    const totalSub = nums.reduce((total, num) => {
        return total - num 
    })
    return totalSub;
}

console.log(subtract(2, 8));