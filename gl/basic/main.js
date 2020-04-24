let webgl = null
function Init() {
    let canvas = document.getElementById('myCanvas') // 获取画板
    webgl = canvas.getContext("webgl")　// 创建webgl上下文
    webgl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight)
    webgl.clearColor(0.0, 0.0, 0.0, 1.0)
    webgl.clear(webgl.COLOR_BUFFER_BIT) // 将整个画布渲染
}