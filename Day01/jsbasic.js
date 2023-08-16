function myFunction(x) {
    let temp = 2 * x + 3
    return temp
} // 함수 정의

// myFunction(1) 함수 실행방법

function add(x, y) {
    let temp1 = x + y
    return temp1
}

add = (x, y) => {
    let temp2 = x + y;
    return temp2;
} // 이런 식으로 함수 선언 가능

// add(2, 3)

function fly() {
    openWings();
    while (true) {
        moveWings();
    }
}

// fly()

// 자바스크립트 조건문
if(money > 5000) { // money가 5000 이상인가
    rideTaxi();
} else if(money > 2000) { // money가 2000 이상인가, else if 무한으로 증식가능
    rideBus();
} else {
    walk();
}

// 자바스크립트 반복문
for(let i = 0; i < 10; i++) {
    console.log("나무 찍기 " + i);
}