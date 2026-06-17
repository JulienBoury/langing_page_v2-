"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Fond animé WebGL du header — « nébuleuse » navy avec lueurs teal/menthe
 * qui dérivent lentement (domain-warped simplex noise). Volontairement
 * subtil et pro : faible contraste, mouvement lent, dithering anti-banding.
 *
 * Couleurs calées sur les tokens de marque (globals.css :root) :
 *   navy  #1e2a37 (≈ --ink assombri)   teal #24ebc3 (--brand)
 *   cyan  ≈ --brand-2                    menthe ≈ --brand-accent
 *
 * Zéro dépendance (pas de three.js). Se met en pause hors écran / onglet
 * caché, respecte prefers-reduced-motion (rendu d'une seule image fixe),
 * et retombe sur le dégradé CSS dessous si WebGL est indisponible.
 */
const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform vec2  u_res;
  uniform float u_time;

  const vec3 uNavy = vec3(0.118, 0.165, 0.216);
  const vec3 uTeal = vec3(0.141, 0.922, 0.765);
  const vec3 uCyan = vec3(0.160, 0.680, 0.780);
  const vec3 uMint = vec3(0.620, 0.920, 0.800);

  vec3 mod289(vec3 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x){ return mod289(((x * 34.0) + 1.0) * x); }

  // Simplex noise 2D — Ashima Arts / Stefan Gustavson (domaine public).
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p){
    float f = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 4; i++) {
      f += amp * snoise(p);
      p *= 2.02;
      amp *= 0.5;
    }
    return f;
  }

  void main(){
    vec2 res = u_res;
    vec2 uv = gl_FragCoord.xy / res;
    vec2 p  = (gl_FragCoord.xy - 0.5 * res) / res.y;
    float t = u_time * 0.035;

    // Champ fluide par domain-warping
    vec2 q = vec2(
      fbm(p * 1.2 + vec2(0.0, 0.0) + t),
      fbm(p * 1.2 + vec2(3.4, 1.7) - t)
    );
    float n  = fbm(p * 1.3 + 0.7 * q + vec2(0.0, t * 0.6));
    n = n * 0.5 + 0.5;
    float n2 = fbm(p * 1.8 - 0.5 * q - vec2(t * 0.4, 0.0));
    n2 = n2 * 0.5 + 0.5;

    vec3 col = uNavy;
    col = mix(col, uTeal, smoothstep(0.45, 0.95, n)  * 0.42);
    col = mix(col, uCyan, smoothstep(0.50, 1.00, n2) * 0.30);
    col += uMint * pow(smoothstep(0.60, 1.00, n), 2.0) * 0.18;

    // Vignette douce — calme les bords, garde le texte lisible
    float vig = smoothstep(1.15, 0.25, length(p * vec2(0.8, 1.0)));
    col *= mix(0.78, 1.0, vig);

    // Dithering léger anti-banding sur les fonds sombres
    float dither = (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
    col += dither;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const VERTEX_SHADER = /* glsl */ `
  attribute vec2 a_pos;
  void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn("[shader-background] compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ShaderBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { antialias: false, alpha: true, depth: false }) ??
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return; // pas de WebGL → le dégradé CSS dessous reste visible

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("[shader-background] link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Triangle plein écran
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const render = (timeSeconds: number) => {
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, timeSeconds);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      canvas.style.opacity = "1";
    };

    // Une image immédiate : garantit un rendu même hors écran / reduced-motion
    render(reduce ? 6.0 : 0);

    let raf = 0;
    let start = performance.now();
    let elapsed = 0;
    let running = false;

    const loop = (now: number) => {
      elapsed += (now - start) / 1000;
      start = now;
      render(elapsed);
      raf = requestAnimationFrame(loop);
    };
    const play = () => {
      if (running || reduce) return;
      running = true;
      start = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    // Ne tourne que visible à l'écran ET onglet actif (perf / batterie)
    let onScreen = false;
    const update = () => {
      if (onScreen && !document.hidden) play();
      else pause();
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => update();
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(() => {
      if (!running) render(elapsed); // garde l'image nette après resize en pause
    });
    ro.observe(canvas);

    return () => {
      pause();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none size-full opacity-0 transition-opacity duration-700 ${className}`}
    />
  );
}
