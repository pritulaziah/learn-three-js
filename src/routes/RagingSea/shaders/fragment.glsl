#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_uv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    gl_FragColor = vec4(0.5, 0.8, 1.0, 1.0);
}
