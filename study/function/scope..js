const a = 1;

console.log(a)

function f() {
    const a = 2;
    const b = 1;
    console.log(a)
    function cf() {
        const a = 3;
        console.log(a)
        console.log(b)
    }
    cf()
}
f()


