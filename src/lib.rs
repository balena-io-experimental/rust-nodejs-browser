#![feature(use_extern_macros)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn plus(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn minus(a: i32, b: i32) -> i32 {
    a - b
}
