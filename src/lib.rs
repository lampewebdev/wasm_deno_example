#[no_mangle]
pub extern "C" fn square(x: u32) -> u32 {
    x * x
}
