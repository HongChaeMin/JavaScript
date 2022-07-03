// 함수는 객체다 (원시값을 제외한 모든 것은 객체이다)
// 하지만 일반 객체와는 다르다 일반 객체는 선언할 수 없지만 함수는 선언할 수 있다

// 함수 선언문
// function name(params) {...}
function f() {

}

// 함수 표현식
const f1 = function() {
    console.log("어쨋든 함수임")
}
console.log(f1)

// 함수 생성자 (거의 안씀)
const f2 = new Function('param1', 'param2', 'return param1 + param2')
console.log(f2(1, 2))

// arrow function (화살표 함수)
const v = (x, y) => x + y
console.log(v(1, 2))

// function 과 arrow 함수의 차이
const data = {
    x: 1,
    // arrow function 정의
    fun: (y) => this.x + y // this.x = window 객체에 접근하는거임
}
const data2 = {
    x: 1,
    // function 정의
    fun(y) { // this가 data2를 가리킴
        return this.x + y
    }
}
