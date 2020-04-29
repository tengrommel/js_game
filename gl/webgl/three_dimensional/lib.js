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

function bufferInit(gl, data_vertices, a_pos_string, program) {
    let buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data_vertices, gl.STATIC_DRAW);
    let a_pos = gl.getAttribLocation(program, a_pos_string);
    gl.vertexAttribPointer(a_pos, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_pos);
}