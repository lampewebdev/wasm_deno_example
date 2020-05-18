#!/usr/bin/env -S deno run --allow-run --allow-env

// SPDX-License-Identifier: MIT
let cargoBuild = Deno.run(
  {
    "cmd": [
      "cargo",
      "build",
      "--target",
      "wasm32-unknown-unknown",
    ],
  },
);

await cargoBuild;

let { code } = await cargoBuild.status();

await Deno.run(
  {
    "cmd": [
      "wasm-gc",
      "./target/wasm32-unknown-unknown/debug/wasm_deno_example.wasm",
    ],
  },
);
