const data = {
    name: "hannah",
    age: 20,
    book: {
        title: "title",
        content: "content"
    },
    arr: [1, 2, 3, 4, 5]
}

data["age"] = 40 // 기존 값 변경
data["test"] = "test" // 새로운 값 추가

Object.freeze(data) // 불변 객체로 만듦

console.log(data)

const d = {
    name: "name",
    name: "Hannah"
}
// 먼저 선언한걸 엎어버림
console.log(d) // Hannah

const object1 = {
    title: "title",
    content: "content"
}

const object2 = {
    ...object1
} // object1에 있는 값을 넣어줌

console.log(object2)

const x = 1, y = 2
const obj = {
    // x: x
    // y: y
    x, y
} // 축약 표현
console.log(obj)

// 접근 방법
console.log(obj.x)
console.log(obj['x'])

// property 지우기
delete obj.x
delete obj['y']
console.log(obj)
