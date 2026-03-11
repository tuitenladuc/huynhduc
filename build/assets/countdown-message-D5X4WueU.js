import { r as e, j as t } from "./app-BvzjL5IJ.js";
import { C as n } from "./countdown-3d-CMlmfkY2.js";
import { R as o } from "./rotate-notice-1pRziHsk.js";
import { u as r } from "./useOrientationCheck-Ck40LNJ2.js";
import "./three.module-YZXYt8kc.js";
import "./three.core-B9Y36o1l.js";
const i = ({
    text: n,
    heartColor: o = "transparent",
    flameColor: r = "#ff3366",
    particlesMobile: i = 4,
    particlesDesktop: s = 8,
    strokeWidth: a = 6,
    rgbColor: l = { r: 255, g: 105, b: 180 },
  }) => {
    const d = e.useRef(null);
    return (
      e.useEffect(() => {
        const e = d.current,
          t = e.getContext("2d");
        let r = window.innerWidth,
          c = window.innerHeight;
        ((e.width = r), (e.height = c));
        const h = (e) => {
          const t = Math.max(10, Math.min(Math.min(r, c) / 40, 25)),
            n = 16 * Math.pow(Math.sin(e), 3),
            o =
              13 * Math.cos(e) -
              5 * Math.cos(2 * e) -
              2 * Math.cos(3 * e) -
              Math.cos(4 * e);
          return { x: r / 2 + n * t, y: c / 2 - o * t - 0.1 * c };
        };
        let u = [];
        const w = () => {
          (t.clearRect(0, 0, r, c), t.beginPath());
          const e = [];
          for (let n = 0; n <= 2 * Math.PI; n += 0.02) {
            const { x: o, y: r } = h(n);
            (e.push({ x: o, y: r }), 0 === n ? t.moveTo(o, r) : t.lineTo(o, r));
          }
          (t.closePath(), (t.strokeStyle = o), (t.lineWidth = a), t.stroke());
          const d = c < 768,
            f = d ? i : s,
            m = d ? 35 : 40;
          for (let t = 0; t < f; t++) {
            const e = Math.random() * Math.PI * 2,
              t = h(e),
              n = r / 2 - t.x,
              o = c / 2 - t.y,
              i = Math.sqrt(n * n + o * o),
              s = t.x + (n / i) * m,
              a = t.y + (o / i) * m,
              l = 0.01 * (t.x - s),
              d = 0.01 * (t.y - a);
            u.push({
              x: s,
              y: a,
              vx: l,
              vy: d,
              reachedEdge: !1,
              alpha: 1,
              scale: 0.05 + 0.12 * Math.random(),
            });
          }
          (u.forEach((t) => {
            if (t.reachedEdge) t.alpha -= 0.01;
            else {
              ((t.x += t.vx), (t.y += t.vy));
              for (const n of e) {
                const e = t.x - n.x,
                  o = t.y - n.y;
                if (e * e + o * o < 64) {
                  ((t.reachedEdge = !0), (t.vx = 0), (t.vy = 0));
                  break;
                }
              }
            }
          }),
            (u = u.filter((e) => e.alpha > 0)));
          for (const n of u)
            (t.save(),
              t.translate(n.x, n.y),
              t.scale(n.scale, n.scale),
              t.beginPath(),
              t.moveTo(0, -30),
              t.bezierCurveTo(25, -60, 60, -30, 0, 30),
              t.bezierCurveTo(-60, -30, -25, -60, 0, -30),
              (t.fillStyle = `rgba(${l.r}, ${l.g}, ${l.b}, ${n.alpha})`),
              t.fill(),
              t.restore());
          ((t.textAlign = "center"), (t.textBaseline = "middle"));
          const v = 0.1 * c,
            g = 32 * Math.max(10, Math.min(Math.min(r, c) / 40, 25)) * 0.9;
          let p = 0.05 * Math.min(r, c),
            x = [];
          function y(e, t, n, o) {
            const r = t.split(" "),
              i = [];
            let s = "";
            for (let a = 0; a < r.length; a++) {
              const t = s + (s ? " " : "") + r[a];
              if (e.measureText(t).width > n && s) {
                if ((i.push(s), (s = r[a]), i.length === o - 1)) break;
              } else s = t;
            }
            if ((i.push(s), i.length === o && r.length > 0)) {
              let t = i[o - 1];
              for (; e.measureText(t + "...").width > n && t.length > 0; )
                t = t.slice(0, -1);
              i[o - 1] = t + "...";
            }
            return i;
          }
          do {
            ((t.font = `bold ${p}px 'Mali', sans-serif`),
              (x = y(t, n || "", g, 3)),
              (p -= 2));
          } while (
            (x.length > 3 || x.some((e) => t.measureText(e).width > g)) &&
            p > 10
          );
          t.font = `bold ${p}px 'Mali', sans-serif`;
          const E = 1.2 * p;
          (x.forEach((e, n) => {
            ((t.fillStyle = "white"),
              t.fillText(e, r / 2, c / 2 - v + (n - (x.length - 1) / 2) * E));
          }),
            requestAnimationFrame(w));
        };
        w();
        const f = () => {
          ((r = window.innerWidth),
            (c = window.innerHeight),
            (e.width = r),
            (e.height = c));
        };
        return (
          window.addEventListener("resize", f),
          () => window.removeEventListener("resize", f)
        );
      }, [n, o, r, i, s, a]),
      t.jsx("canvas", {
        ref: d,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "transparent",
          zIndex: 10,
        },
      })
    );
  },
  s = (e) => {
    if ("undefined" == typeof window) return 0;
    const t = document.createElement("div");
    ((t.style.position = "fixed"),
      (t.style[e] = "env(safe-area-inset-" + e + ")"),
      (t.style.visibility = "hidden"),
      document.body.appendChild(t));
    const n = getComputedStyle(t),
      o = parseInt(n[e]) || 0;
    return (document.body.removeChild(t), o);
  },
  a = ({ text: n, color: o = "#ffa3e0" }) => {
    const r = e.useRef(null),
      i = () => {
        const e =
          0.01 *
          ((() => {
            var e;
            if ("undefined" == typeof window) return { width: 0, height: 0 };
            const t = window.visualViewport;
            let n = window.innerWidth,
              o = window.innerHeight;
            t && ((n = t.width), (o = t.height));
            const r = (null == (e = window.screen) ? void 0 : e.height) || o;
            r > o && (o = r);
            const i = document.documentElement.getBoundingClientRect();
            return (i.height > o && (o = i.height), { width: n, height: o });
          })().height || window.innerHeight);
        document.documentElement.style.setProperty("--vh", `${e}px`);
      };
    return (
      e.useEffect(() => {
        const e = () => setTimeout(i, 100);
        i();
        const t = window.visualViewport;
        return (
          window.addEventListener("resize", e),
          window.addEventListener("orientationchange", e),
          null == t || t.addEventListener("resize", e),
          null == t || t.addEventListener("scroll", e),
          () => {
            (window.removeEventListener("resize", e),
              window.removeEventListener("orientationchange", e),
              null == t || t.removeEventListener("resize", e),
              null == t || t.removeEventListener("scroll", e));
          }
        );
      }, []),
      e.useEffect(() => {
        var e;
        const t = r.current,
          i = t.getContext("2d"),
          a = window.devicePixelRatio || 1;
        let l = !1;
        const d = () => {
          l ||
            ((l = !0),
            requestAnimationFrame(() => {
              ((() => {
                const e = s("top"),
                  r = s("bottom"),
                  l = s("left"),
                  d = s("right"),
                  c = window.innerWidth + l + d,
                  h = window.innerHeight + e + r;
                ((t.width = c * a),
                  (t.height = h * a),
                  (t.style.width = `${c}px`),
                  (t.style.height = `${h}px`),
                  i.setTransform(1, 0, 0, 1, 0, 0),
                  i.scale(a, a));
                const u = 12.8,
                  w = Math.floor(c / 7),
                  f = Array.from({ length: w }, () => Math.floor(h / u)),
                  m = Array.from({ length: w }, (e, t) => t % n.length),
                  v = () => {
                    ((i.fillStyle = "rgba(0, 0, 0, 0.06)"),
                      i.fillRect(0, 0, c, h),
                      (i.fillStyle = o),
                      (i.font = "16px 'Roboto', Arial, sans-serif"));
                    for (let t = 0; t < w; t++) {
                      const o = n[m[t] % n.length],
                        r = 8;
                      (i.fillText(o, t * r + l, f[t] * u + e),
                        f[t]++,
                        (m[t] = (m[t] + 1) % n.length),
                        f[t] * u > h && Math.random() > 0.975 && (f[t] = 0));
                    }
                    setTimeout(v, 25);
                  };
                v();
              })(),
                (l = !1));
            }));
        };
        d();
        const c = () => d();
        return (
          window.addEventListener("resize", c),
          null == (e = window.visualViewport) ||
            e.addEventListener("resize", c),
          () => {
            var e;
            (window.removeEventListener("resize", c),
              null == (e = window.visualViewport) ||
                e.removeEventListener("resize", c));
          }
        );
      }, [n, o]),
      t.jsx("canvas", {
        ref: r,
        style: {
          position: "fixed",
          top: "-2px",
          left: 0,
          zIndex: -1,
          backgroundColor: "black",
          width:
            "calc(100vw + env(safe-area-inset-left) + env(safe-area-inset-right))",
          height:
            "calc(var(--vh, 1vh) * 100 + env(safe-area-inset-top) + env(safe-area-inset-bottom) + 4px)",
          marginLeft: "calc(-1 * env(safe-area-inset-left))",
        },
      })
    );
  };
function l({ countdown: s, countdownId: l }) {
  const [d, c] = e.useState(!1),
    [h, u] = e.useState(!0),
    [w, f] = e.useState(null),
    m = e.useRef(null),
    v = r();
  return (
    e.useEffect(() => {
      l && s && f(s);
    }, []),
    e.useEffect(() => {
      v || c(!1);
    }, [v]),
    e.useEffect(() => {
      const e = m.current;
      if (v && e) {
        const t = () => {
          e.paused &&
            e
              .play()
              .then(() => {
                e.muted = !1;
              })
              .catch(() => {});
        };
        t();
        const n = () => {
          (t(), document.removeEventListener("click", n));
        };
        return (
          document.addEventListener("click", n),
          window.addEventListener("wheel", t),
          window.addEventListener("mousedown", t),
          window.addEventListener("mousemove", t),
          window.addEventListener("touchstart", t),
          () => {
            (document.removeEventListener("click", n),
              window.removeEventListener("wheel", t),
              window.removeEventListener("mousedown", t),
              window.removeEventListener("mousemove", t),
              window.removeEventListener("touchstart", t));
          }
        );
      }
    }, [w, v]),
    e.useEffect(() => {
      const e = (e) => {
          const t = e.key.toLowerCase();
          if (
            "F12" === e.key ||
            (e.ctrlKey && e.shiftKey && "i" === t) ||
            (e.metaKey && e.altKey && "i" === t) ||
            (e.ctrlKey && "u" === t) ||
            (e.metaKey && "u" === t)
          )
            return (e.preventDefault(), e.stopPropagation(), !1);
        },
        t = (e) => (e.preventDefault(), !1);
      return (
        document.addEventListener("keydown", e),
        document.addEventListener("contextmenu", t),
        () => {
          (document.removeEventListener("keydown", e),
            document.removeEventListener("contextmenu", t));
        }
      );
    }, []),
    t.jsx(t.Fragment, {
      children: v
        ? t.jsx(t.Fragment, {
            children:
              w &&
              l &&
              t.jsxs(t.Fragment, {
                children: [
                  w.music &&
                    t.jsx("audio", {
                      ref: m,
                      loop: !0,
                      controls: !0,
                      hidden: !0,
                      children: t.jsx("source", {
                        src: "/proxy-drive/" + w.music,
                        type: "audio/mpeg",
                      }),
                    }),
                  t.jsx(a, {
                    text: w.backgroundText,
                    color: w.backgroundColor,
                  }),
                  t.jsx(n, {
                    messages: w.messages,
                    rgbColor: w.textColor,
                    onComplete: () => {
                      (u(!1), c(!0));
                    },
                  }),
                  d && t.jsx(i, { text: w.finalText, rgbColor: w.heartColor }),
                ],
              }),
          })
        : t.jsx(o, {}),
    })
  );
}
export { l as default };
