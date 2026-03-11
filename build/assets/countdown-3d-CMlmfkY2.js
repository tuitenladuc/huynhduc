import { r as t, R as e, j as n } from "./app-BvzjL5IJ.js";
import { W as r } from "./three.module-YZXYt8kc.js";
import {
  eY as o,
  P as a,
  B as i,
  as as s,
  A as l,
  eA as c,
  b as u,
  a as d,
} from "./three.core-B9Y36o1l.js";
const h = ["3", "2", "1"],
  f = {
    low: {
      dotGapMultiplier: 1.5,
      effectIntensity: 0.7,
      blurEnabled: !1,
      maxFlyingDots: 180,
    },
    medium: {
      dotGapMultiplier: 1.2,
      effectIntensity: 0.85,
      blurEnabled: !0,
      maxFlyingDots: 387,
    },
    high: {
      dotGapMultiplier: 1,
      effectIntensity: 1,
      blurEnabled: !0,
      maxFlyingDots: 850,
    },
  },
  m = (t) => {
    if ("undefined" == typeof window) return 0;
    const e = document.createElement("div");
    ((e.style.position = "fixed"),
      (e.style[t] = "env(safe-area-inset-" + t + ")"),
      (e.style.visibility = "hidden"),
      document.body.appendChild(e));
    const n = getComputedStyle(e),
      r = parseInt(n[t]) || 0;
    return (document.body.removeChild(e), r);
  },
  g = ({
    messages: g = [],
    onComplete: y = null,
    qualityOverride: p,
    rgbColor: x = { r: 179, g: 204, b: 255 },
  }) => {
    const v = t.useRef(null),
      w = t.useRef([]),
      M = t.useRef(null),
      b = t.useRef(0),
      A = t.useRef("countdown"),
      I = t.useRef(0),
      E = t.useRef(null),
      T = t.useRef(!1),
      S = t.useRef(0),
      C = t.useRef(0),
      F = t.useRef(!1),
      P = t.useRef(null),
      R = t.useRef(!1),
      $ = t.useRef(0),
      D = e.useRef([]),
      k = t.useRef(0),
      [z, U] = e.useState(6),
      [G, j] = e.useState(4),
      [W, q] = e.useState("medium"),
      [B, H] = e.useState(!1);
    (e.useEffect(() => {
      if ("undefined" != typeof window && !B) {
        if ("undefined" != typeof localStorage && !p) {
          const t = localStorage.getItem("dotsQualityPreference");
          if (t && ("low" === t || "medium" === t || "high" === t))
            return (q(t), void H(!0));
        }
        if (p) q(p);
        else {
          let t = "medium";
          if (
            "deviceMemory" in navigator ||
            "hardwareConcurrency" in navigator
          ) {
            const e = navigator.deviceMemory || 4,
              n = navigator.hardwareConcurrency || 4;
            e <= 2 || n <= 2 ? (t = "low") : e >= 8 && n >= 6 && (t = "high");
          }
          q(t);
        }
        H(!0);
      }
    }, [p, B]),
      e.useEffect(() => {
        const t = m("top"),
          e = m("bottom");
        if ((m("left"), m("right"), "undefined" != typeof window && B)) {
          const n =
            !/Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.userAgent) &&
            window.innerHeight + t + e <= 768;
          U(6);
          const r = n ? 3 : 4,
            o = f[p || W].dotGapMultiplier;
          (j(r * o), (I.current = performance.now()));
        }
      }, [W, B, p]));
    const _ = (t) => {
        const e = document.createElement("canvas");
        e.width = e.height = 4 * t;
        const n = e.getContext("2d"),
          r = (4 * t) / 2,
          o = n.createRadialGradient(r, r, 0, r, r, r);
        return (
          o.addColorStop(0, "rgba(255,255,255,1)"),
          o.addColorStop(0.2, "rgba(200, 230, 255, 0.9)"),
          o.addColorStop(0.5, "rgba(150, 200, 255, 0.6)"),
          o.addColorStop(1, "rgba(100, 150, 255, 0)"),
          (n.fillStyle = o),
          n.beginPath(),
          n.arc(r, r, r, 0, 2 * Math.PI),
          n.fill(),
          new u(e)
        );
      },
      X = (t) => {
        const e = m("top"),
          n = m("bottom"),
          r = m("left"),
          o = m("right"),
          a = document.createElement("canvas"),
          i =
            !/Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.userAgent) &&
            window.innerHeight + e + n <= 768,
          s = i ? window.innerWidth + r + o : 920,
          l = i ? window.innerHeight + e + n : 350;
        ((a.width = s),
          (a.height = l),
          (a.style.width = `${s}px`),
          (a.style.height = `${l}px`));
        const c = a.getContext("2d");
        ((c.fillStyle = "#cce6ff"),
          (c.textAlign = "center"),
          (c.textBaseline = "middle"));
        const u = 0.9 * s;
        let d = 150;
        if (
          ((c.font = `bold ${d}px system-ui, Arial, sans-serif`),
          document.fonts &&
            document.fonts.check &&
            !document.fonts.check(c.font))
        )
          return (
            setTimeout(() => {
              O(t);
            }, 50),
            []
          );
        const f = t.split(" "),
          y = [];
        let p = f[0];
        for (let h = 1; h < f.length; h++) {
          const t = p + " " + f[h];
          c.measureText(t).width < u ? (p = t) : (y.push(p), (p = f[h]));
        }
        for (y.push(p); y.length * (d + 10) > l && d > 30; )
          ((d -= 5), (c.font = `bold ${d}px sans-serif`));
        c.clearRect(0, 0, s, l);
        const x = d + 10,
          v = l / 2 - ((y.length - 1) * x) / 2;
        y.forEach((t, e) => {
          c.fillText(t, s / 2, v + e * x);
        });
        const w = c.getImageData(0, 0, s, l).data,
          M = [],
          b = "3" === t || "2" === t || t === h[2] || t === g[0],
          A = t === h[2];
        for (let m = 0; m < l; m += Math.round(G))
          for (let e = 0; e < s; e += Math.round(G)) {
            if (w[4 * (m * s + e) + 3] > 128) {
              const n = e - s / 2,
                r = -(m - l / 2),
                o = !A || Math.random() < 0.3,
                a = t === h[2] ? 0 : o ? 1 : 0;
              M.push({
                x: b ? 0 : 400 * Math.random() - 200,
                y: b ? 0 : 400 * Math.random() - 200,
                tx: n,
                ty: r,
                vx: 0,
                vy: 0,
                vz: 0,
                exploded: !1,
                opacity: a,
                glowIntensity: 0,
              });
            }
          }
        return M;
      },
      O = (t) => {
        const e = w.current.filter((t) => t.isExtra),
          n = X(t);
        ((w.current = n.concat(e)), K());
      },
      K = () => {
        const t = w.current,
          e = new Float32Array(3 * t.length),
          n = new Float32Array(t.length),
          r = new Float32Array(t.length);
        t.forEach((t, o) => {
          ((e[3 * o] = t.x),
            (e[3 * o + 1] = t.y),
            (e[3 * o + 2] = 0),
            (n[o] = t.opacity),
            (r[o] = t.glowIntensity));
        });
        const o = M.current.geometry;
        (o.setAttribute("position", new d(e, 3)),
          o.setAttribute("alpha", new d(n, 1)),
          o.setAttribute("glow", new d(r, 1)),
          (o.attributes.position.needsUpdate = !0),
          (o.attributes.alpha.needsUpdate = !0),
          (o.attributes.glow.needsUpdate = !0));
      },
      N = (t = 0.4) => {
        (w.current.forEach((e) => {
          ((e.vx = (Math.random() - 0.5) * t),
            (e.vy = (Math.random() - 0.5) * t),
            (e.vz = (Math.random() - 0.5) * t),
            (e.exploded = !0),
            (e.opacity = 0.7 * Math.random() + 0.3),
            (e.glowIntensity = 2.5));
        }),
          (R.current = !0),
          ($.current = 0));
      },
      Y = async (t, e) => {
        var n, r;
        const o = X(t);
        if (t === h[2]) {
          const t = X(g[0]),
            e = f[p || W].maxFlyingDots,
            a = Math.min(e, Math.floor(0.12 * t.length)),
            i = (function (t, e, n = 120) {
              const r = 800,
                o = 300,
                a = document.createElement("canvas");
              ((a.width = r), (a.height = o));
              const i = a.getContext("2d");
              ((i.fillStyle = "#fff"),
                (i.textAlign = "center"),
                (i.textBaseline = "middle"));
              const s = 150;
              ((i.font = `900 ${s}px 'Roboto Mono', Arial Black, Arial, sans-serif`),
                i.clearRect(0, 0, r, o),
                i.fillText(t, r / 2, o / 2),
                (i.lineWidth = 12),
                (i.strokeStyle = "#fff"),
                i.strokeText(t, r / 2, o / 2));
              const l = i.getImageData(0, 0, r, o),
                c = [],
                u = Math.max(2, Math.floor((150 / n) * 4)),
                d = 8,
                h = [];
              for (let m = -u; m <= u; m += u)
                for (let t = -u; t <= u; t += u)
                  (0 === t && 0 === m) || h.push({ dx: t, dy: m });
              const f = n < 80 ? 1 : 2;
              for (let m = u; m < o - u; m += u * f) {
                for (let t = u; t < r - u; t += u * f) {
                  const e = 4 * (m * r + t);
                  if (l.data[e + 3] > d) {
                    let e = !1;
                    for (let n = 0; n < h.length && !e; n++) {
                      const { dx: a, dy: i } = h[n],
                        s = m + i,
                        c = t + a;
                      if (s < 0 || s >= o || c < 0 || c >= r) e = !0;
                      else {
                        const t = 4 * (s * r + c);
                        l.data[t + 3] <= d && (e = !0);
                      }
                    }
                    if (e && (c.push({ x: t, y: m }), c.length >= 2 * n)) break;
                  }
                }
                if (c.length >= 2 * n) break;
              }
              if (c.length > n) {
                const t = Math.floor(c.length / n);
                return c
                  .filter((e, n) => n % t === 0)
                  .slice(0, n)
                  .map((t) => ({ x: t.x - r / 2, y: -(t.y - o / 2) }));
              }
              return c.map((t) => ({ x: t.x - r / 2, y: -(t.y - o / 2) }));
            })(h[2], 0, a);
          if (!i || 0 === i.length)
            return void console.warn(
              "[transitionToText] outlinePoints is empty! Skipping flyDots for 1.",
            );
          const s = [],
            l = 5;
          for (let o = 0; o < a; o++) {
            const e = i[o % i.length],
              a = 5,
              c = Math.random() * a * 1 - a,
              u = Math.random() * a * 1 - a,
              d = Math.floor(Math.random() * l),
              h = {
                x: e.x + c,
                y: e.y + u,
                tx: (null == (n = t[o % t.length]) ? void 0 : n.tx) ?? 0,
                ty: (null == (r = t[o % t.length]) ? void 0 : r.ty) ?? 0,
                vx: 0,
                vy: 0,
                vz: 0,
                exploded: !0,
                opacity: 0.15 * Math.random() + 0.85,
                glowIntensity: 0,
                isExtra: !0,
                delayStart: 120 * d,
                started: !1,
              };
            let f;
            switch (d) {
              case 0:
                f = 1.2 * Math.random() + 1.8;
                break;
              case 1:
                f = 1.8 * Math.random() + 1.2;
                break;
              case 2:
                f = 1.5 * Math.random() + 1.8;
                break;
              case 3:
                f = 1.5 * Math.random() + 1.5;
                break;
              default:
                f = 1.8 * Math.random() + 1;
            }
            const m = Math.random() * Math.PI * 2;
            ((h.vx = Math.cos(m) * f * (0.5 + Math.random())),
              (h.vy = Math.sin(m) * f * (0.5 + Math.random())),
              (h.opacity = 0.7 * Math.random() + 0.3),
              (h.glowIntensity = 2 * Math.random() + 0.5),
              (h.vx += 1.5 * (Math.random() - 0.5)),
              (h.vy += 1.5 * (Math.random() - 0.5)),
              (h.vz = 0.3 * (Math.random() - 0.5)),
              s.push(h));
          }
          const c = w.current,
            u = Array.from({ length: o.length }, (t, e) => e);
          for (let n = u.length - 1; n > 0; n--) {
            const t = Math.floor(Math.random() * (n + 1));
            [u[n], u[t]] = [u[t], u[n]];
          }
          return (
            o.forEach((t, e) => {
              const n = u[e % u.length];
              c[n] && ((t.x = c[n].x), (t.y = c[n].y));
            }),
            (w.current = o),
            K(),
            (C.current = performance.now()),
            (F.current = !0),
            (F.current = !1),
            setTimeout(() => {
              D.current = s.map((t) => ({
                ...t,
                started: !0,
                vx: t.vx || 1.5 * (Math.random() - 0.5),
                vy: t.vy || 1.5 * (Math.random() - 0.5),
              }));
            }, 1600),
            void K()
          );
        }
        if (!(e === h[2] && g.length > 0 && t === g[0])) {
          const e = w.current,
            n = Array.from({ length: o.length }, (t, e) => e);
          for (let t = n.length - 1; t > 0; t--) {
            const e = Math.floor(Math.random() * (t + 1));
            [n[t], n[e]] = [n[e], n[t]];
          }
          if (
            (o.forEach((t, r) => {
              const o = n[r % n.length];
              e[o] && ((t.x = e[o].x), (t.y = e[o].y));
            }),
            g.length > 0 && t === g[g.length - 2])
          ) {
            const t = Math.max(10, Math.floor(0.08 * o.length)),
              e = [];
            for (let n = 0; n < t; n++) {
              const t = Math.random() * Math.PI * 2,
                n = 350 * Math.random() + 100;
              e.push({
                x: Math.cos(t) * n,
                y: Math.sin(t) * n,
                tx: 0,
                ty: 0,
                vx: 0.7 * (Math.random() - 0.5),
                vy: 0.7 * (Math.random() - 0.5),
                vz: 0.3 * (Math.random() - 0.5),
                exploded: !0,
                opacity: 0.7 * Math.random() + 0.3,
                glowIntensity: 1.5,
                isExtra: !0,
                isIndependence: !0,
              });
            }
            ((D.current = e), (w.current = o));
          } else w.current = o;
          return void K();
        }
        {
          const t = p || W,
            e = { low: 0.5, medium: 0.8, high: 0.8 }[t],
            n = o.length,
            r = Math.floor(n * (e + 0.119)),
            a = Array.from({ length: n }, (t, e) => e);
          for (let o = a.length - 1; o > 0; o--) {
            const t = Math.floor(Math.random() * (o + 1));
            [a[o], a[t]] = [a[t], a[o]];
          }
          const i = new Set(a.slice(0, r)),
            s = f[t].maxFlyingDots,
            l = a.slice(r, r + s),
            c = w.current,
            u = Array.from({ length: r }, (t, e) => e);
          for (let o = u.length - 1; o > 0; o--) {
            const t = Math.floor(Math.random() * (o + 1));
            [u[o], u[t]] = [u[t], u[o]];
          }
          (o.forEach((t, e) => {
            if (i.has(e)) {
              const n = u[e % u.length];
              c[n] && ((t.x = c[n].x), (t.y = c[n].y));
            }
          }),
            (w.current = o.filter((t, e) => i.has(e))),
            K(),
            setTimeout(() => {
              D.current = D.current.filter(
                (t) => t.gathering || t.opacity > 0.4 || t.isIndependence,
              );
              const t = D.current;
              for (let e = 0; e < Math.min(t.length, l.length); e++) {
                const n = l[e];
                ((t[e].tx = o[n].tx),
                  (t[e].ty = o[n].ty),
                  (t[e].gathering = !0),
                  (t[e].opacity = Math.min(t[e].opacity + 0.3, 1)));
              }
              setTimeout(() => {
                const t = [];
                w.current.forEach((e) => {
                  e.isIndependence || t.push(e);
                });
                const e = new Set();
                (w.current.forEach((t) => {
                  t.isIndependence || e.add(`${t.tx},${t.ty}`);
                }),
                  D.current.forEach((t) => {
                    !t.isIndependence &&
                      t.gathering &&
                      t.opacity > 0.2 &&
                      e.add(`${t.tx},${t.ty}`);
                  }));
                const n = f[p || W],
                  r = Math.min(n.maxFlyingDots, Math.floor(0.3 * o.length)),
                  a = [];
                for (let i = 0; i < o.length && a.length < r; i++) {
                  const t = `${o[i].tx},${o[i].ty}`;
                  e.has(t) || a.push(i);
                }
                ((w.current = t),
                  K(),
                  D.current.length > 0 &&
                    setTimeout(() => {
                      const t = D.current.filter(
                          (t) => !t.isIndependence && t.opacity > 0.2,
                        ),
                        e = Math.min(t.length, n.maxFlyingDots / 2);
                      for (let n = 0; n < e; n++)
                        if (
                          !t[n].gathering &&
                          Math.random() > 0.6 &&
                          ((t[n].isExtra = !0),
                          Math.random() > 0.5 && o.length > 0)
                        ) {
                          const e = Math.floor(Math.random() * o.length);
                          ((t[n].tx = o[e].tx),
                            (t[n].ty = o[e].ty),
                            (t[n].gathering = !0));
                        }
                      "low" === W &&
                        (D.current = D.current.filter(
                          (t) =>
                            t.gathering || t.opacity > 0.6 || t.isIndependence,
                        ));
                    }, 1e3));
              }, 200);
            }, 1500));
        }
      };
    return (
      t.useEffect(() => {
        const t = new o();
        t.background = null;
        const e = new a(75, window.innerWidth / window.innerHeight, 1, 1e3);
        e.position.z = 280;
        const n = new r({
          antialias: !0,
          alpha: !0,
          powerPreference: "high-performance",
        });
        (n.setSize(window.innerWidth, window.innerHeight),
          n.setPixelRatio(window.devicePixelRatio));
        const u = v.current;
        null == u || u.appendChild(n.domElement);
        const m = new i();
        let U = _(z);
        const G = `\n            attribute float alpha;\n            attribute float glow;\n            varying float vAlpha;\n            varying float vGlow;\n            void main() {\n                vAlpha = alpha;\n                vGlow = glow;\n                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n                gl_PointSize = ${z.toFixed(1)} * (300.0 / -mvPosition.z) * (1.0 + glow * 0.3);\n                gl_Position = projectionMatrix * mvPosition;\n            }\n        `,
          j = `\n            varying float vAlpha;\n            varying float vGlow;\n            uniform sampler2D pointTexture;\n            uniform float uTime;\n            void main() {\n                vec4 texColor = texture2D(pointTexture, gl_PointCoord);\n                float pulse = 0.5 + 0.5 * sin(uTime * 5.0);\n                float glow = smoothstep(0.5, 1.0, vAlpha) * (1.0 + pulse * 0.5 + vGlow * 2.0);\n                // vec3 baseColor = mix(\n                //     vec3(0.7, 0.8, 1.0), \n                //     vec3(0.4, 0.6, 1.5), \n                //     smoothstep(1.0, 3.0, glow)\n                // );\n                \n                vec3 baseColor = mix(\n                    vec3(${x.r}.0/255.0, ${x.g}.0/255.0, ${x.b}.0/255.0),\n                    vec3(${x.r}.0*1.75/255.0, ${x.g}.0*1.333333/255.0, ${x.b}.0*0.666666/255.0),\n                    smoothstep(1.0, 3.0, glow)\n                );\n\n                float alpha = vAlpha * texColor.a * (1.0 + glow * 2.0);\n                gl_FragColor = vec4(baseColor * (1.0 + glow * 0.8), alpha);\n            }\n        `;
        let q = new s({
          uniforms: { pointTexture: { value: U }, uTime: { value: 0 } },
          vertexShader: G,
          fragmentShader: j,
          transparent: !0,
          depthWrite: !1,
          blending: l,
        });
        const B = new c(m, q);
        (t.add(B), (M.current = B));
        const H = f[W].blurEnabled;
        let X = null,
          Q = null;
        if (H) {
          const e = new i();
          let n = _(2.5 * z);
          ((Q = new s({
            uniforms: { pointTexture: { value: n }, uTime: { value: 0 } },
            vertexShader: G.replace(
              /gl_PointSize = ([^;]+);/,
              `gl_PointSize = (${(2.5 * z).toFixed(1)}) * (300.0 / -mvPosition.z) * (1.0 + glow * 0.3);`,
            ),
            fragmentShader: j,
            transparent: !0,
            depthWrite: !1,
            blending: l,
          })),
            (X = new c(e, Q)),
            (X.renderOrder = -1),
            t.add(X),
            (P.current = X));
        }
        const V = (r) => {
            const o = performance.now(),
              a = "low" === W ? 2 : 1;
            if (a > 1 && o - (k.current || 0) < 16.67 * a)
              return void requestAnimationFrame(V);
            const s = Math.min(1.5, (o - (k.current || o)) / 16.67);
            ((k.current = o), (q.uniforms.uTime.value = 0.001 * r));
            const l = w.current,
              u = M.current.geometry.attributes.position,
              m = M.current.geometry.attributes.alpha,
              g = M.current.geometry.attributes.glow;
            let y = 0;
            if (T.current) {
              const t = o - I.current;
              y = S.current * Math.max(0, 1 - t / 800);
            }
            let x = 0;
            if (F.current) {
              const t = o - C.current;
              x = Math.max(0, 1 - t / 1e3);
            }
            if (
              (l.forEach((t, e) => {
                if (t.isExtra)
                  ((t.x += t.vx * s),
                    (t.y += t.vy * s),
                    (t.opacity *= Math.pow(0.97, s)),
                    (t.glowIntensity *= Math.pow(0.96, s)),
                    t.opacity < 0.05 && (t.opacity = 0));
                else if (t.exploded) ((t.x += t.vx * s), (t.y += t.vy * s));
                else {
                  const e = 0.05 * s;
                  ((t.x += (t.tx - t.x) * e), (t.y += (t.ty - t.y) * e));
                }
                (h[b.current] === h[2]
                  ? (t.glowIntensity = 0)
                  : F.current
                    ? (t.glowIntensity = 2 * x)
                    : (t.glowIntensity *= Math.pow(0.95, s)),
                  u.setXYZ(e, t.x, t.y, 0));
                const n = t.exploded ? t.opacity : 1,
                  o = y * (0.5 + 0.5 * Math.sin(0.005 * r));
                (m.setX(e, Math.min(2, n + o + 0.5 * t.glowIntensity)),
                  g.setX(e, t.glowIntensity));
              }),
              D.current.length > 0)
            ) {
              let e = t.getObjectByName("flyingDots");
              if (!e) {
                const n = new i();
                ((e = new c(n, q)), (e.name = "flyingDots"), t.add(e));
              }
              const n = f[p || W].maxFlyingDots;
              D.current.length > n &&
                (D.current.sort((t, e) => e.opacity - t.opacity),
                (D.current = D.current.slice(0, n)));
              const r = D.current,
                o = [],
                a = new Set();
              if (
                (r.forEach((t, e) => {
                  if (t.gathering) {
                    const n = Math.sqrt(
                        Math.pow(t.tx - t.x, 2) + Math.pow(t.ty - t.y, 2),
                      ),
                      r = Math.max(0.1, Math.min(0.2, 20 / (n + 20))) * s;
                    ((t.x += (t.tx - t.x) * r),
                      (t.y += (t.ty - t.y) * r),
                      Math.abs(t.x - t.tx) < 2 &&
                        Math.abs(t.y - t.ty) < 2 &&
                        (o.push({
                          x: t.tx,
                          y: t.ty,
                          tx: t.tx,
                          ty: t.ty,
                          vx: 0,
                          vy: 0,
                          vz: 0,
                          exploded: !1,
                          opacity: 1,
                          glowIntensity: -0.6,
                          isExtra: !1,
                          gathering: !1,
                        }),
                        a.add(e)));
                  } else {
                    if (!1 !== t.started) {
                      ((t.x += t.vx * s), (t.y += t.vy * s));
                      const e = "low" === W ? 0.01 : 0.03;
                      ((t.vx += (Math.random() - 0.5) * e * s),
                        (t.vy += (Math.random() - 0.5) * e * s));
                      const n = 2.5,
                        r = Math.sqrt(t.vx * t.vx + t.vy * t.vy);
                      r > n &&
                        ((t.vx = (t.vx / r) * n), (t.vy = (t.vy / r) * n));
                    }
                    const n = "low" === W ? 0.95 : 0.998;
                    ((t.opacity *= Math.pow(n, s)),
                      t.opacity < 0.01 && a.add(e));
                  }
                  ((t.glowIntensity *= Math.pow(0.9995, s)),
                    (Math.abs(t.x) > 800 || Math.abs(t.y) > 600) && a.add(e));
                }),
                o.length > 0 && ((w.current = [...w.current, ...o]), K()),
                (D.current = r.filter((t, e) => !a.has(e))),
                D.current.length > 0)
              ) {
                const t = new Float32Array(3 * D.current.length),
                  n = new Float32Array(D.current.length),
                  r = new Float32Array(D.current.length);
                D.current.forEach((e, o) => {
                  ((t[3 * o] = e.x),
                    (t[3 * o + 1] = e.y),
                    (t[3 * o + 2] = 0),
                    (n[o] = e.opacity),
                    (r[o] = e.glowIntensity));
                });
                const o = e.geometry;
                (o.setAttribute("position", new d(t, 3)),
                  o.setAttribute("alpha", new d(n, 1)),
                  o.setAttribute("glow", new d(r, 1)),
                  (o.attributes.position.needsUpdate = !0),
                  (o.attributes.alpha.needsUpdate = !0),
                  (o.attributes.glow.needsUpdate = !0),
                  (e.visible = !0));
              } else e.visible = !1;
            } else {
              const e = t.getObjectByName("flyingDots");
              e && t.remove(e);
            }
            if (R.current && P.current && f[W].blurEnabled) {
              $.current < 1 && ($.current += 0.05 * s);
              const t = Math.min(1, $.current);
              ((() => {
                if (!P.current) return;
                const t = w.current,
                  e = new Float32Array(3 * t.length),
                  n = new Float32Array(t.length),
                  r = new Float32Array(t.length);
                t.forEach((t, o) => {
                  ((e[3 * o] = t.x),
                    (e[3 * o + 1] = t.y),
                    (e[3 * o + 2] = 0),
                    (n[o] = 0.5 * t.opacity),
                    (r[o] = 2.5 * t.glowIntensity));
                });
                const o = P.current.geometry;
                (o.setAttribute("position", new d(e, 3)),
                  o.setAttribute("alpha", new d(n, 1)),
                  o.setAttribute("glow", new d(r, 1)),
                  (o.attributes.position.needsUpdate = !0),
                  (o.attributes.alpha.needsUpdate = !0),
                  (o.attributes.glow.needsUpdate = !0));
              })(),
                (P.current.material.uniforms.uTime.value = 0.001 * r));
              const e = P.current.geometry.attributes.alpha;
              for (let n = 0; n < e.count; n++)
                e.setX(n, e.getX(n) * t * f[W].effectIntensity);
              ((e.needsUpdate = !0), (P.current.visible = !0));
            } else P.current && (P.current.visible = !1);
            ((u.needsUpdate = !0),
              (m.needsUpdate = !0),
              (g.needsUpdate = !0),
              n.render(t, e),
              requestAnimationFrame(V));
          },
          Z = async () => {
            if (
              (E.current && clearTimeout(E.current), "countdown" === A.current)
            ) {
              if ((b.current++, b.current >= h.length))
                return (
                  (A.current = "message"),
                  (b.current = 0),
                  void (g.length > 0
                    ? (await Y(g[0], h[2]), (E.current = setTimeout(Z, 3800)))
                    : (N(1.2), null == y || y()))
                );
              const t = h[b.current],
                e = h[b.current - 1] || void 0;
              (await Y(t, e),
                (E.current =
                  t === h[2] ? setTimeout(Z, 1500) : setTimeout(Z, 1300)));
            } else if ("message" === A.current) {
              if ((b.current++, b.current >= g.length))
                return (
                  N(1.2),
                  void setTimeout(() => {
                    null == y || y();
                  }, 1200)
                );
              const t = g[b.current];
              void 0 !== t &&
                (await Y(t, g[b.current - 1]),
                (E.current = setTimeout(Z, 3800)));
            }
          };
        return (
          (A.current = "countdown"),
          (b.current = 0),
          O(h[0]),
          (E.current = setTimeout(Z, 1300)),
          requestAnimationFrame(V),
          () => {
            var e, r, o, a;
            (E.current && clearTimeout(E.current),
              (w.current = []),
              (D.current = []),
              u && u.removeChild(n.domElement),
              n.dispose(),
              P.current && t.remove(P.current),
              M.current && t.remove(M.current),
              t.traverse((t) => {
                if (
                  ("geometry" in t &&
                    t.geometry &&
                    "function" == typeof t.geometry.dispose &&
                    t.geometry.dispose(),
                  "material" in t && t.material)
                ) {
                  const e = t.material;
                  Array.isArray(e)
                    ? e.forEach((t) => {
                        t && "function" == typeof t.dispose && t.dispose();
                      })
                    : "function" == typeof e.dispose && e.dispose();
                }
              }),
              q &&
                (q.uniforms.pointTexture.value &&
                  (null == (r = (e = q.uniforms.pointTexture.value).dispose) ||
                    r.call(e)),
                q.dispose()),
              Q &&
                (Q.uniforms.pointTexture.value &&
                  (null == (a = (o = Q.uniforms.pointTexture.value).dispose) ||
                    a.call(o)),
                Q.dispose()));
          }
        );
      }, [g, z, G]),
      n.jsx("div", {
        ref: v,
        style: {
          width:
            "calc(100vw + env(safe-area-inset-left) + env(safe-area-inset-right))",
          height:
            "calc(100vh + env(safe-area-inset-top) + env(safe-area-inset-bottom))",
          maxWidth:
            "calc(100vw + env(safe-area-inset-left) + env(safe-area-inset-right))",
          maxHeight:
            "calc(100vh + env(safe-area-inset-top) + env(safe-area-inset-bottom))",
          background: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          zIndex: 9999,
          touchAction: "none",
        },
      })
    );
  };
export { g as C };
