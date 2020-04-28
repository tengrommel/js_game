function initShader(gl, vertex_shader, frag_shader) {
    let vertex = gl.createShader(gl.VERTEX_SHADER); // 顶点着色器
    let frag = gl.createShader(gl.FRAGMENT_SHADER);　// 创建片元着色器

    gl.shaderSource(vertex, vertex_shader); // 指定顶点着色器对象
    gl.shaderSource(frag, frag_shader); // 指定片元着色器对象

    gl.compileShader(vertex);
    gl.compileShader(frag);

    let program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, frag);

    gl.linkProgram(program);
    gl.useProgram(program);

    return program
}