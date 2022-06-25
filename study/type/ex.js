// 원시 타입
// number : 숫자
// string : 문자
// boolean : 참, 거짓
// undefined : 내가 값을 할당을 안했을 때 나오는 데이터형 (내가 선언 안한거)
// null : 사용자가 명시적으로 null이라고 선언 해야지 나옴 (내가 선언 한거)
// symbol : 모른대

// 참조, 객체 타입
// object : 객체, 중괄호 {}, key : value 로 이루어진, list / array 도 오브젝트 타입이다!

// 원시 타입과 객체(참조) 타입의 차이?
// 원시 타입은 실제 값이 저장
// 객체 타입은 메모리 주소 값이 저장
// ! 결론적으로는 메모리 주소값이 할당 되느냐 안되느냐의 차이

let a = 100
let b = a

a = 110

console.log(`a: ${a}, b: ${b}`)
// a: 110, b: 100

const c = {a:1, b:2}
const d = c

c.a = 2

console.log(`c: ${c}, d: ${d}`)
// c: {a:2, b:2}, d: {a:2, b:2}
