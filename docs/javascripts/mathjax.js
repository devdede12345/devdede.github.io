window.MathJax = {
  loader: { load: ["[tex]/boldsymbol"] },
  tex: { packages: { "[+]": ["boldsymbol"] }, inlineMath: [["\\(", "\\)"]], displayMath: [["\\[", "\\]"]], processEscapes: true, processEnvironments: true },
  options: { ignoreHtmlClass: ".*|", processHtmlClass: "arithmatex" }
};
if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    if (window.MathJax.typesetPromise) {
      window.MathJax.typesetClear();
      window.MathJax.typesetPromise();
    }
  });
}
