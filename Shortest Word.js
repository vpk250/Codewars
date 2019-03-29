console.log(findShort("turns out random test cases are easier than wrsdvsvsditing out basic ones"));

function findShort(s){
    console.log(...s.split(' ').map(item => item.length));
} 