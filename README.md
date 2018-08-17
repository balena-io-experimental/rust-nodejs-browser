# Rust in Node.js & Browser

## Prerequisites

Rust nightly is installed as a default toolchain. Install WASM target and bindgen.

```bash
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
```

## Examples

### Rust crate

Crate can still be used by Rust binaries. Check the `examples/simple.rs`:

```bash
cargo run --example simple
```

### Wasm

#### Build

```bash
cargo build --target wasm32-unknown-unknown
wasm-bindgen target/wasm32-unknown-unknown/debug/rustymath.wasm --out-dir target
```

#### Rust & browser

Install following NPM packages:

* `webpack-dev-server`
* `webpack-cli`
* `webpack`

And then:

```bash
cd browser
npm run serve
```

#### Rust & Node.js

```bash
cd node
yarn && node example.js
```
