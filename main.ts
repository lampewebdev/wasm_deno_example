const wasmCode = await Deno.readFile("./target/wasm32-unknown-unknown/debug/wasm_deno_example.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const {
    square,
} = wasmInstance.exports;

console.log(square(1));
console.log(square(2));
console.log(square(3));
console.log(square(4));