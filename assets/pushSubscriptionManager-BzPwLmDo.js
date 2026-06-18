const e = "https://nuojiji-worker.wcl20091007.workers.dev";
function r(e, r = {}, o = 15000) {
  const t = new AbortController();
  const n = setTimeout(() => t.abort(), o);
  return fetch(e, {
    ...r,
    signal: t.signal
  }).finally(() => clearTimeout(n));
}
function o(e) {
  if (e.name === "AbortError") {
    return true;
  }
  const r = (e.message || String(e)).toLowerCase();
  return r.includes("failed to fetch") || r.includes("networkerror") || r.includes("network request failed") || r.includes("load failed") || r.includes("net::err_") || r.includes("typeerror: failed");
}
function t(e) {
  const r = e.replace(/-/g, "+").replace(/_/g, "/");
  const o = r + "=".repeat((4 - r.length % 4) % 4);
  const t = atob(o);
  const n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++) {
    n[i] = t.charCodeAt(i);
  }
  return n;
}
async function n() {
  try {
    const o = await r(`${e}/api/push/vapid-key`, {}, 8000);
    if (o.ok) {
      return {
        ok: true
      };
    } else {
      return {
        ok: false,
        reason: `伺服器回應異常 (HTTP ${o.status})`
      };
    }
  } catch (t) {
    if (o(t)) {
      return {
        ok: false,
        reason: "無法連線到推送伺服器，可能是網路環境限制（如未開啟 VPN / 代理）",
        isNetworkBlock: true
      };
    } else {
      return {
        ok: false,
        reason: t.message || String(t)
      };
    }
  }
}
async function i() {
  try {
    const o = await r(`${e}/api/push/vapid-key`);
    if (!o.ok) {
      throw new Error("無法取得 VAPID 公鑰");
    }
    const {
      publicKey: t
    } = await o.json();
    return t;
  } catch (t) {
    if (o(t)) {
      throw new Error("無法連線到推送伺服器。\n如果你在中國大陸，請確認：\n1. 已開啟 VPN / 代理\n2. VPN 已連線成功（可嘗試訪問 google.com 驗證）");
    }
    throw t;
  }
}
async function s() {
  var e;
  const r = await ((e = navigator.serviceWorker) == null ? undefined : e.ready);
  if (r == null ? undefined : r.pushManager) {
    return r.pushManager.getSubscription();
  } else {
    return null;
  }
}
async function a(n) {
  if (!("serviceWorker" in navigator)) {
    throw new Error("此瀏覽器不支援 Service Worker");
  }
  if (!("PushManager" in window)) {
    const e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const r = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
    if (e && !r) {
      throw new Error("iOS 需要先將此網頁「加入主畫面」後才能使用推送通知");
    }
    throw new Error("此瀏覽器不支援 Push 通知");
  }
  const s = await new Promise((e, r) => {
    try {
      const o = Notification.requestPermission(r => {
        e(r);
      });
      if (o && typeof o.then == "function") {
        o.then(e, r);
      }
    } catch (o) {
      r(o);
    }
  });
  if (s === "denied") {
    throw new Error("通知權限已被拒絕，請到瀏覽器/系統設置中手動開啟");
  }
  if (s !== "granted") {
    throw new Error("通知權限未授予");
  }
  const a = await Promise.race([navigator.serviceWorker.ready, new Promise((e, r) => setTimeout(() => r(new Error("Service Worker 未就緒，請確認網站已正確部署或刷新頁面重試")), 10000))]);
  let c = await a.pushManager.getSubscription();
  if (!c) {
    const e = await i();
    try {
      c = await Promise.race([a.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: t(e)
      }), new Promise((e, r) => setTimeout(() => r(new Error("__push_subscribe_timeout__")), 30000))]);
    } catch (u) {
      const e = (u.message || String(u)).toLowerCase();
      if (e.includes("permission") || e.includes("denied") || e.includes("not allowed")) {
        throw new Error("推送訂閱被瀏覽器拒絕，請確認已允許通知權限，並確保使用 HTTPS");
      }
      if (e.includes("abort") || e.includes("user")) {
        throw new Error("推送訂閱被取消");
      }
      if (u.message === "__push_subscribe_timeout__" || function (e) {
        const r = (e.message || String(e)).toLowerCase();
        return r.includes("failed to fetch") || r.includes("networkerror") || r.includes("registration failed") || r.includes("could not connect") || r.includes("net::err_") || r.includes("timed out") || r.includes("aborted");
      }(u)) {
        const e = /Chrome\//.test(navigator.userAgent) && !/Edg\//.test(navigator.userAgent);
        const r = /Edg\//.test(navigator.userAgent);
        const o = /Firefox\//.test(navigator.userAgent);
        let t = "瀏覽器推送服務";
        if (e) {
          t = "Google FCM (fcm.googleapis.com)";
        } else if (r) {
          t = "WNS / Google FCM";
        } else if (o) {
          t = "Mozilla Push (push.services.mozilla.com)";
        }
        throw new Error(`推送訂閱失敗：無法連線到 ${t}。\n\n如果你在中國大陸，即使開了 VPN，瀏覽器推送通道也可能不走代理。\n建議嘗試：\n1. 使用系統全局代理（TUN 模式）而非僅瀏覽器代理\n2. 在代理軟體中開啟「全局模式」或確保 fcm.googleapis.com 在代理規則中\n${o ? "3. Firefox 用戶：嘗試在 about:config 中設置 dom.push.serverURL\n" : ""}3. 嘗試使用 Firefox 瀏覽器（其推送服務有時更容易連通）`);
      }
      throw new Error("推送訂閱失敗: " + (u.message || u));
    }
  }
  try {
    const o = await r(`${e}/api/push/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${n}`
      },
      body: JSON.stringify({
        subscription: c.toJSON()
      })
    });
    if (!o.ok) {
      const e = await o.json().catch(() => ({}));
      console.error("[雲端推送] Worker 回應:", o.status, JSON.stringify(e));
      throw new Error(e.error || e.message || `訂閱失敗 (HTTP ${o.status})`);
    }
  } catch (u) {
    if (o(u)) {
      throw new Error("訂閱資訊傳送到伺服器失敗（網路連線問題）。\n請確認 VPN / 代理已開啟並嘗試重試。");
    }
    throw u;
  }
  localStorage.setItem("nuojiji_push_subscribed", "true");
  return c;
}
async function c(o) {
  const t = await s();
  if (t) {
    if (o) {
      try {
        await r(`${e}/api/push/unsubscribe`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${o}`
          },
          body: JSON.stringify({
            endpoint: t.endpoint
          })
        }, 10000);
      } catch (n) {
        console.warn("Worker 退訂請求失敗:", n);
      }
    }
    await t.unsubscribe();
    localStorage.removeItem("nuojiji_push_subscribed");
  } else {
    localStorage.removeItem("nuojiji_push_subscribed");
  }
}
function u() {
  return localStorage.getItem("nuojiji_push_subscribed") === "true";
}
function l() {
  return "serviceWorker" in navigator && "Notification" in window && "PushManager" in window;
}
export { n as checkWorkerConnectivity, s as getCurrentSubscription, i as getVapidPublicKey, u as isPushSubscribed, l as isPushSupported, a as subscribeToPush, c as unsubscribeFromPush };