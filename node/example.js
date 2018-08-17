require("webassembly")
    .load("../target/rustymath_bg.wasm")
    .then(module => {
        console.log("1 + 2 = " + module.exports.plus(1, 2));
        console.log("10 - 3 = " + module.exports.minus(10, 3));
    });
