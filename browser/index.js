const rustymath = import("../target/rustymath");

rustymath.then(rustymath => {
    console.log("2 + 3 is", rustymath.plus(2, 3));
    console.log("10 - 4 is", rustymath.minus(10, 4));
});
