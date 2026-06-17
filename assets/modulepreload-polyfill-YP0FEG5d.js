(function () {
  const e = document.createElement("link").relList;
  if (!e || !e.supports || !e.supports("modulepreload")) {
    for (const e of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
      r(e);
    }
    new MutationObserver(e => {
      for (const o of e) {
        if (o.type === "childList") {
          for (const e of o.addedNodes) {
            if (e.tagName === "LINK" && e.rel === "modulepreload") {
              r(e);
            }
          }
        }
      }
    }).observe(document, {
      childList: true,
      subtree: true
    });
  }
  function r(e) {
    if (e.ep) {
      return;
    }
    e.ep = true;
    const r = function (e) {
      const r = {};
      if (e.integrity) {
        r.integrity = e.integrity;
      }
      if (e.referrerPolicy) {
        r.referrerPolicy = e.referrerPolicy;
      }
      if (e.crossOrigin === "use-credentials") {
        r.credentials = "include";
      } else if (e.crossOrigin === "anonymous") {
        r.credentials = "omit";
      } else {
        r.credentials = "same-origin";
      }
      return r;
    }(e);
    fetch(e.href, r);
  }
})();