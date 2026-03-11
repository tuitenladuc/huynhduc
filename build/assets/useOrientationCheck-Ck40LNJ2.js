import { r as e } from "./app-BvzjL5IJ.js";
function n() {
  const [n, t] = e.useState(!0);
  return (
    e.useEffect(() => {
      const e = () => {
        const e = window.innerWidth <= 1024,
          n = window.innerWidth > window.innerHeight;
        t(!e || n);
      };
      return (
        e(),
        window.addEventListener("resize", e),
        window.addEventListener("orientationchange", e),
        () => {
          (window.removeEventListener("resize", e),
            window.removeEventListener("orientationchange", e));
        }
      );
    }, []),
    n
  );
}
export { n as u };
