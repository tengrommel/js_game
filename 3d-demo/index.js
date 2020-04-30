const rust = import('./pkg/rust_3d_demo');

rust.then(m => m.say_hello_from_rust())
    .catch(console.error);