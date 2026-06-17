import { r as e, j as t } from "./vendor-react-B2VXkTUV.js";
import { c as n, a as r, j as i, bq as a, b as s, a4 as o, bE as l, bF as c, bn as d } from "./native-pet-CTNtZgMA.js";
import { S as u } from "./main-BO9xa-SQ.js";
import { r as p, X as g, a8 as m, aY as x, aX as f } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const h = e => {
  if (typeof e != "string") {
    return null;
  }
  const t = e.trim();
  if (/^#[0-9a-fA-F]{3,8}$/.test(t) || /^rgba?\(\s*[\d.%,\s]+\)$/.test(t) || /^hsla?\(\s*[\d.%,\s]+\)$/.test(t) || /^[a-zA-Z]{3,20}$/.test(t)) {
    return t;
  } else {
    return null;
  }
};
const y = e => {
  if (typeof e != "string") {
    return "";
  }
  const t = e.trim();
  if (t.startsWith("data:image/") && t.length <= 600000) {
    return t;
  } else {
    return "";
  }
};
const v = (e, t) => typeof e == "string" ? e.slice(0, t) : "";
const b = (e, t) => {
  const n = t || {};
  return {
    gameId: (e == null ? undefined : e.id) ? String(e.id) : "",
    gameTitle: (e == null ? undefined : e.title) || "",
    gameIcon: (e == null ? undefined : e.icon) || "🎮",
    coverColor: (e == null ? undefined : e.coverColor) || "#9F7AEA",
    resultTitle: v(n.title || n.resultTitle, 60),
    resultSummary: v(n.summary || n.resultSummary, 500),
    playerScore: n.playerScore ?? n.score ?? null,
    charScore: n.charScore ?? null,
    image: y(n.image),
    accentColor: h(n.accentColor) || null,
    badge: v(n.badge, 20),
    footer: v(n.footer, 30)
  };
};
const S = () => {
  const {
    currentScreen: h,
    showScreen: y
  } = n();
  const {
    t: v
  } = r();
  const {
    currentProfileUser: S,
    safeCurrentProfileUserId: j
  } = i();
  const {
    activeChatIds: _
  } = a();
  const {
    characters: k
  } = s();
  const [w, C] = e.useState([]);
  const I = h === "custom-game-player-screen";
  const [A, z] = e.useState(null);
  const [R, D] = e.useState(null);
  const [E, T] = e.useState(null);
  const [W, P] = e.useState(false);
  const [G, M] = e.useState(null);
  const [L, O] = e.useState(null);
  const [B, N] = e.useState([]);
  const U = e.useRef(null);
  const H = e.useRef(null);
  const q = e.useRef(0);
  const F = e.useRef(Date.now());
  const $ = e.useRef(true);
  e.useEffect(() => {
    $.current = true;
    return () => {
      $.current = false;
    };
  }, []);
  const V = e.useCallback(() => {
    const e = Date.now();
    if (e - F.current > 60000) {
      q.current = 0;
      F.current = e;
    }
    q.current++;
    return q.current <= 120;
  }, []);
  const J = e.useCallback(async ({
    messages: e,
    settings: t,
    maxTokens: n
  }) => {
    let r = "";
    await Promise.race([o({
      messages: e,
      settings: t,
      preferStreaming: false,
      maxTokens: n,
      onComplete: e => {
        r = e;
      },
      onError: e => {
        throw e;
      }
    }), new Promise((e, t) => setTimeout(() => t(new Error("AI request timeout (180s)")), 180000))]);
    return r;
  }, []);
  const K = (_ || []).map(e => (k || []).find(t => String(t.id) === String(e))).filter(Boolean);
  const X = new Set(K.map(e => String(e.id)));
  const Y = (k || []).filter(e => !X.has(String(e.id)));
  e.useEffect(() => {
    if (!I) {
      return;
    }
    const e = localStorage.getItem("custom_game_play_id");
    if (!e) {
      y("custom-game-screen");
      return;
    }
    const t = parseInt(e, 10);
    l.get(isNaN(t) ? e : t).then(e => {
      if (e) {
        z(e);
      } else {
        y("custom-game-screen");
      }
    });
  }, [I, y]);
  e.useEffect(() => {
    if (!(A == null ? undefined : A.htmlContent)) {
      return;
    }
    const e = (e => {
      const t = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, interactive-widget=resizes-content\"><script>\n(function () {\n  // ── 鍵盤適配：iOS Safari 不支援 interactive-widget=resizes-content，\n  // layout viewport 不會自動縮小，scrollIntoView 也沒滾動空間。\n  // 對策：focus 時動態加 padding-bottom = 鍵盤高度，給 body 足夠滾動空間，\n  // 然後 scrollIntoView 把 input 推到鍵盤上方；blur 時還原。\n  var _kbSafeMargin = 16;\n  var _kbPrevPadding = '';\n  var _kbPaddingApplied = false;\n  function _kbApplyPadding() {\n    var vv = window.visualViewport;\n    if (!vv) return 0;\n    var kbH = window.innerHeight - vv.height;\n    if (kbH < 100) return 0;  // 鍵盤未開\n    if (!_kbPaddingApplied) {\n      _kbPrevPadding = document.body.style.paddingBottom;\n      _kbPaddingApplied = true;\n    }\n    document.body.style.paddingBottom = (kbH + 24) + 'px';\n    return kbH;\n  }\n  function _kbRestorePadding() {\n    if (!_kbPaddingApplied) return;\n    document.body.style.paddingBottom = _kbPrevPadding;\n    _kbPaddingApplied = false;\n  }\n  function _kbEnsureVisible(el) {\n    if (!el) return;\n    var tag = el.tagName;\n    if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !el.isContentEditable) return;\n    setTimeout(function () {\n      if (document.activeElement !== el) return;\n      _kbApplyPadding();\n      var vv = window.visualViewport;\n      var vpBottom = vv ? vv.height : window.innerHeight;\n      var rect = el.getBoundingClientRect();\n      var overlap = rect.bottom - (vpBottom - _kbSafeMargin);\n      if (overlap > 0) {\n        try { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }\n        catch (e) { el.scrollIntoView(false); }\n      }\n    }, 320);\n  }\n  document.addEventListener('focusin', function (e) { _kbEnsureVisible(e.target); }, true);\n  document.addEventListener('focusout', function () {\n    setTimeout(function () {\n      var ae = document.activeElement;\n      var stillFocused = ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable);\n      if (!stillFocused) _kbRestorePadding();\n    }, 100);\n  }, true);\n  if (window.visualViewport) {\n    window.visualViewport.addEventListener('resize', function () {\n      var ae = document.activeElement;\n      if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable)) {\n        _kbEnsureVisible(ae);\n      } else {\n        _kbRestorePadding();\n      }\n    });\n  }\n\n  var _pending = {};\n  window.addEventListener('message', function (e) {\n    if (!e.data || !e.data.__nuojiji) return;\n    var key = e.data.__type;\n    if (_pending[key]) {\n      _pending[key].forEach(function (fn) { fn(e.data.__data); });\n      delete _pending[key];\n    }\n  });\n  function _request(action, key, extra) {\n    return new Promise(function (resolve) {\n      if (!_pending[key]) _pending[key] = [];\n      _pending[key].push(resolve);\n      window.parent.postMessage(Object.assign({ __nuojiji: true, __action: action }, extra || {}), '*');\n    });\n  }\n  var _aiCallSeq = 0;\n  var _gameStateHandler = null;\n  window.addEventListener('message', function (e) {\n    if (!e.data || !e.data.__nuojiji || e.data.__type !== 'requestGameState') return;\n    var state = null;\n    if (typeof _gameStateHandler === 'function') {\n      try { state = _gameStateHandler(); } catch (err) { state = null; }\n    }\n    window.parent.postMessage({ __nuojiji: true, __action: 'gameStateResponse', gameState: state }, '*');\n  });\n  window.Nuojiji = {\n    getUser: function () { return _request('getUser', 'userData'); },\n    getChar: function (charId) { return _request('getChar', 'charData_' + (charId || ''), { charId: charId || null }); },\n    getCharList: function () { return _request('getCharList', 'charList'); },\n    close: function () { window.parent.postMessage({ __nuojiji: true, __action: 'close' }, '*'); },\n    /**\n     * 分享遊戲結果到聊天\n     * @param {Object} result\n     *   - title?:        string  結果標題（≤60 字）\n     *   - summary?:      string  總結文字（≤500 字，AI 會讀）\n     *   - score?:        number  單方分數（playerScore 的 alias）\n     *   - playerScore?:  number\n     *   - charScore?:    number\n     *   - image?:        string  data: URI 圖片（≤600KB，渲染為頂部橫幅）\n     *   - accentColor?:  string  覆蓋主題色（hex/rgb/hsl/命名色；非法值忽略）\n     *   - badge?:        string  右上角小標（≤20 字，可用 emoji）\n     *   - footer?:       string  自訂底部文字（≤30 字）\n     * @returns {Promise<{shared: boolean, charId?: string, groupId?: string}>}\n     */\n    shareResult: function (result) { return _request('shareResult', 'shareResultDone', { result: result || {} }); },\n    /**\n     * 平台級多角色選擇器 — 彈出選角色介面，支援多選\n     * @param {Object} [options]\n     * @param {number} [options.min] - 最少選擇數量（預設 1）\n     * @param {number} [options.max] - 最多選擇數量（不傳 = 不限）\n     * @param {string} [options.title] - 選擇器標題（不傳用預設）\n     * @returns {Promise<{picked: boolean, chars: CharInfo[]}>} 用戶取消時 picked = false\n     */\n    pickChars: function (options) { return _request('pickChars', 'pickCharsDone', { pickOptions: options || {} }); },\n    /**\n     * 通用 AI API 呼叫 — 在遊戲中使用 AI，像狼人殺一樣讓 AI 扮演角色、做決策、對話等\n     * @param {Object} options\n     * @param {Array} options.messages - OpenAI 格式的訊息陣列 [{ role: 'system'|'user'|'assistant', content: '...' }]\n     * @param {number} [options.maxTokens] - 最大回覆 token 數（不指定則由 API 預設；指定上限 65536）\n     * @returns {Promise<{success: boolean, text?: string, error?: string}>}\n     */\n    ai: function (options) {\n      var id = 'aiCall_' + (++_aiCallSeq);\n      return _request('aiCall', id, { aiCallId: id, aiCallOptions: options || {} });\n    },\n    /**\n     * AI 總結並發送給角色（平台層處理，遊戲開發者無需實作 API 呼叫）\n     * @param {Object} options\n     * @param {string} options.content - 要總結的遊戲內容/資料\n     * @param {string} [options.prompt] - 自定義總結提示詞（可選）\n     * @param {string} [options.charId] - 目標角色 ID（不傳則開啟選擇器）\n     * @returns {Promise<{success: boolean, summary?: string, charId?: string, error?: string}>}\n     */\n    aiSummarizeAndSend: function (options) { return _request('aiSummarizeAndSend', 'aiSummarizeAndSendDone', { aiOptions: options || {} }); },\n    /**\n     * 註冊遊戲狀態回調 — 當平台 AI 分享按鈕被按下時，會呼叫此回調取得遊戲當前狀態\n     * @param {Function} handler - 返回字串或物件的函數，描述當前遊戲狀態\n     */\n    onGameStateRequest: function (handler) { _gameStateHandler = handler; },\n  };\n})();\n</script>";
      if (/<head[^>]*>/i.test(e)) {
        return e.replace(/(<head[^>]*>)/i, `$1${t}`);
      } else {
        return t + e;
      }
    })(A.htmlContent);
    const t = new Blob([e], {
      type: "text/html; charset=utf-8"
    });
    const n = URL.createObjectURL(t);
    D(n);
    return () => {
      setTimeout(() => URL.revokeObjectURL(n), 1000);
    };
  }, [A]);
  const Z = e.useCallback(e => {
    if (!e.data || !e.data.__nuojiji) {
      return;
    }
    const {
      __action: t,
      charId: n
    } = e.data;
    const r = U.current;
    const i = (e, t) => {
      if (r == null ? undefined : r.contentWindow) {
        r.contentWindow.postMessage({
          __nuojiji: true,
          __type: e,
          __data: t
        }, "*");
      }
    };
    if (t !== "close") {
      if (t !== "gameStateResponse") {
        if (t === "getUser") {
          const e = S;
          i("userData", e ? {
            id: String(e.uid || e.id || ""),
            nickname: e.name || e.nickname || "",
            avatar: e.avatar || u(e.uid || e.id || ""),
            bio: e.bio || ""
          } : null);
          return;
        }
        if (t === "getCharList") {
          const e = (k || []).map(e => ({
            id: String(e.id),
            name: e.name || "",
            avatar: e.avatar || e.image || u(e.id),
            description: e.description || e.personality || "",
            group: e.group || ""
          }));
          i("charList", e);
          return;
        }
        if (t === "getChar") {
          const e = n ? String(n) : null;
          const t = e ? (k || []).find(t => String(t.id) === e) : (k || [])[0];
          i("charData_" + (e || ""), t ? {
            id: String(t.id),
            name: t.name || "",
            avatar: t.avatar || t.image || u(t.id),
            description: t.description || t.personality || "",
            group: t.group || ""
          } : null);
          return;
        }
        if (t !== "shareResult") {
          if (t === "pickChars") {
            const t = e.data.pickOptions || {};
            N([]);
            O({
              min: Math.max(t.min || 1, 1),
              max: t.max || null,
              title: t.title || null
            });
            return;
          }
          if (t === "aiCall") {
            const t = e.data.aiCallId;
            if (!V()) {
              i(t, {
                success: false,
                error: "rate limit: max 120 AI calls per minute"
              });
              return;
            }
            const n = e.data.aiCallOptions || {};
            const r = Array.isArray(n.messages) ? n.messages : [];
            if (r.length === 0) {
              i(t, {
                success: false,
                error: "messages array is empty"
              });
              return;
            }
            const a = ["system", "user", "assistant"];
            const s = r.filter(e => e && a.includes(e.role) && typeof e.content == "string");
            if (s.length === 0) {
              i(t, {
                success: false,
                error: "no valid messages (need { role, content })"
              });
              return;
            } else {
              (async () => {
                try {
                  const e = await c();
                  if (!(e == null ? undefined : e.mainApiUrl) || !(e == null ? undefined : e.mainApiKey)) {
                    i(t, {
                      success: false,
                      error: "API not configured"
                    });
                    return;
                  }
                  const r = n.maxTokens ? Math.min(Math.max(n.maxTokens, 1), 65536) : undefined;
                  const a = await J({
                    messages: s,
                    settings: e,
                    maxTokens: r
                  });
                  i(t, {
                    success: true,
                    text: a || ""
                  });
                } catch (e) {
                  console.error("[CustomGame] AI call error:", e);
                  i(t, {
                    success: false,
                    error: (e == null ? undefined : e.message) || "AI call failed"
                  });
                }
              })();
              return;
            }
          }
          if (t === "aiSummarizeAndSend") {
            const t = e.data.aiOptions || {};
            const n = typeof t.content == "string" ? t.content : JSON.stringify(t.content || "");
            if (!n.trim()) {
              i("aiSummarizeAndSendDone", {
                success: false,
                error: "content is empty"
              });
              return;
            }
            if (!V()) {
              i("aiSummarizeAndSendDone", {
                success: false,
                error: "rate limit: max 120 AI calls per minute"
              });
              return;
            }
            const r = e => {
              if ($.current) {
                P(e);
              }
            };
            r(true);
            (async () => {
              try {
                const e = await c();
                if (!(e == null ? undefined : e.mainApiUrl) || !(e == null ? undefined : e.mainApiKey)) {
                  i("aiSummarizeAndSendDone", {
                    success: false,
                    error: "API not configured"
                  });
                  r(false);
                  return;
                }
                const a = [{
                  role: "system",
                  content: t.prompt || "你是一個遊戲助手。請根據以下遊戲資料，用簡短有趣的方式總結遊戲結果（2-4 句話），讓聊天對象能快速了解發生了什麼。只輸出總結，不要加任何前綴。"
                }, {
                  role: "user",
                  content: n.substring(0, 32000)
                }];
                const s = await J({
                  messages: a,
                  settings: e
                });
                if (!s.trim()) {
                  i("aiSummarizeAndSendDone", {
                    success: false,
                    error: "AI returned empty response"
                  });
                  r(false);
                  return;
                }
                if (!$.current) {
                  i("aiSummarizeAndSendDone", {
                    success: false,
                    error: "game closed"
                  });
                  return;
                }
                if (t.charId && (k || []).find(e => String(e.id) === String(t.charId))) {
                  te(String(t.charId), s);
                  i("aiSummarizeAndSendDone", {
                    success: true,
                    summary: s,
                    charId: String(t.charId)
                  });
                  r(false);
                  return;
                }
                r(false);
                if ($.current) {
                  M({
                    summary: s,
                    content: n
                  });
                }
              } catch (e) {
                console.error("[CustomGame] AI summarize error:", e);
                i("aiSummarizeAndSendDone", {
                  success: false,
                  error: (e == null ? undefined : e.message) || "AI summarize failed"
                });
                r(false);
              }
            })();
            return;
          }
        } else {
          T(e.data.result || {});
        }
      } else if (H.current) {
        H.current(e.data.gameState);
        H.current = null;
      }
    } else {
      y("custom-game-screen");
    }
  }, [S, k, y, V, J]);
  const Q = e.useCallback(e => {
    var t;
    const n = {
      targetCharId: String(e),
      type: "game_result",
      gameResultData: b(A, E || {})
    };
    localStorage.setItem("pending_game_result", JSON.stringify(n));
    if ((t = U.current) == null ? undefined : t.contentWindow) {
      U.current.contentWindow.postMessage({
        __nuojiji: true,
        __type: "shareResultDone",
        __data: {
          shared: true,
          charId: String(e)
        }
      }, "*");
    }
    T(null);
    y("chat-list-screen");
    window.dispatchEvent(new CustomEvent("open-chat-request", {
      detail: {
        charId: e,
        userId: j
      }
    }));
  }, [E, A, j, y]);
  const ee = e.useCallback(async () => {
    if (W) {
      return;
    }
    const e = U.current;
    let t = null;
    if (e == null ? undefined : e.contentWindow) {
      const n = new Promise(e => {
        H.current = e;
        setTimeout(() => {
          if (H.current === e) {
            H.current = null;
            e(null);
          }
        }, 2000);
      });
      e.contentWindow.postMessage({
        __nuojiji: true,
        __type: "requestGameState"
      }, "*");
      t = await n;
    }
    let n = "";
    if (t) {
      n = typeof t == "string" ? t : JSON.stringify(t);
    }
    if (!n.trim()) {
      n = `遊戲名稱：${(A == null ? undefined : A.title) || "自定義遊戲"}\n遊戲簡介：${(A == null ? undefined : A.description) || "（無簡介）"}\n\n請根據這個遊戲的資訊，生成一條有趣的遊戲分享訊息。`;
    }
    P(true);
    try {
      const e = await c();
      if (!(e == null ? undefined : e.mainApiUrl) || !(e == null ? undefined : e.mainApiKey)) {
        alert(v("customGameAiNoApi"));
        P(false);
        return;
      }
      const t = [{
        role: "system",
        content: "你是一個遊戲助手。請根據以下遊戲資料，用簡短有趣的方式總結遊戲狀況（2-4 句話），讓聊天對象能快速了解發生了什麼。只輸出總結，不要加任何前綴。"
      }, {
        role: "user",
        content: n.substring(0, 4000)
      }];
      let r = "";
      await o({
        messages: t,
        settings: e,
        preferStreaming: false,
        onComplete: e => {
          r = e;
        },
        onError: e => {
          throw e;
        }
      });
      if (!r.trim()) {
        alert(v("customGameAiEmpty"));
        P(false);
        return;
      }
      P(false);
      M({
        summary: r,
        content: n
      });
    } catch (r) {
      console.error("[CustomGame] Platform AI share error:", r);
      P(false);
    }
  }, [W, A, v]);
  const te = e.useCallback((e, t) => {
    const n = {
      targetCharId: String(e),
      type: "game_result",
      gameResultData: b(A, {
        title: "AI Summary",
        summary: t
      })
    };
    localStorage.setItem("pending_game_result", JSON.stringify(n));
    y("chat-list-screen");
    window.dispatchEvent(new CustomEvent("open-chat-request", {
      detail: {
        charId: e,
        userId: j
      }
    }));
  }, [A, j, y]);
  const ne = e.useCallback(e => {
    var t;
    if (G) {
      te(String(e), G.summary);
      if ((t = U.current) == null ? undefined : t.contentWindow) {
        U.current.contentWindow.postMessage({
          __nuojiji: true,
          __type: "aiSummarizeAndSendDone",
          __data: {
            success: true,
            summary: G.summary,
            charId: String(e)
          }
        }, "*");
      }
      M(null);
    }
  }, [G, te]);
  const re = e.useCallback(e => {
    var t;
    if (!G) {
      return;
    }
    const n = {
      targetGroupId: String(e),
      type: "game_result",
      gameResultData: b(A, {
        title: "AI Summary",
        summary: G.summary
      })
    };
    localStorage.setItem("pending_game_result", JSON.stringify(n));
    if ((t = U.current) == null ? undefined : t.contentWindow) {
      U.current.contentWindow.postMessage({
        __nuojiji: true,
        __type: "aiSummarizeAndSendDone",
        __data: {
          success: true,
          summary: G.summary,
          groupId: String(e)
        }
      }, "*");
    }
    M(null);
    y("chat-list-screen");
    window.dispatchEvent(new CustomEvent("open-group-chat-request", {
      detail: {
        groupId: e,
        userId: j
      }
    }));
  }, [G, A, j, y]);
  const ie = e.useCallback(() => {
    var e;
    if ((e = U.current) == null ? undefined : e.contentWindow) {
      U.current.contentWindow.postMessage({
        __nuojiji: true,
        __type: "aiSummarizeAndSendDone",
        __data: {
          success: false,
          error: "cancelled"
        }
      }, "*");
    }
    M(null);
  }, []);
  e.useEffect(() => {
    if ((E || G) && j) {
      d.get(j).then(e => {
        C(Array.isArray(e) ? e : []);
      }).catch(() => C([]));
    }
  }, [E, G, j]);
  const ae = e.useCallback(e => {
    var t;
    const n = {
      targetGroupId: String(e),
      type: "game_result",
      gameResultData: b(A, E || {})
    };
    localStorage.setItem("pending_game_result", JSON.stringify(n));
    if ((t = U.current) == null ? undefined : t.contentWindow) {
      U.current.contentWindow.postMessage({
        __nuojiji: true,
        __type: "shareResultDone",
        __data: {
          shared: true,
          groupId: String(e)
        }
      }, "*");
    }
    T(null);
    y("chat-list-screen");
    window.dispatchEvent(new CustomEvent("open-group-chat-request", {
      detail: {
        groupId: e,
        userId: j
      }
    }));
  }, [E, A, j, y]);
  const se = e.useCallback(() => {
    var e;
    if ((e = U.current) == null ? undefined : e.contentWindow) {
      U.current.contentWindow.postMessage({
        __nuojiji: true,
        __type: "shareResultDone",
        __data: {
          shared: false
        }
      }, "*");
    }
    T(null);
  }, []);
  const oe = e.useCallback(e => {
    N(t => t.some(t => String(t.id) === String(e.id)) ? t.filter(t => String(t.id) !== String(e.id)) : (L == null ? undefined : L.max) && t.length >= L.max ? t : [...t, e]);
  }, [L]);
  const le = e.useCallback(() => {
    var e;
    if (!L) {
      return;
    }
    if (B.length < (L.min || 1)) {
      return;
    }
    const t = B.map(e => ({
      id: String(e.id),
      name: e.name || "",
      avatar: e.avatar || e.image || u(e.id),
      description: e.description || e.personality || "",
      group: e.group || ""
    }));
    if ((e = U.current) == null ? undefined : e.contentWindow) {
      U.current.contentWindow.postMessage({
        __nuojiji: true,
        __type: "pickCharsDone",
        __data: {
          picked: true,
          chars: t
        }
      }, "*");
    }
    O(null);
    N([]);
  }, [L, B]);
  const ce = e.useCallback(() => {
    var e;
    if ((e = U.current) == null ? undefined : e.contentWindow) {
      U.current.contentWindow.postMessage({
        __nuojiji: true,
        __type: "pickCharsDone",
        __data: {
          picked: false,
          chars: []
        }
      }, "*");
    }
    O(null);
    N([]);
  }, []);
  e.useEffect(() => {
    if (I) {
      window.addEventListener("message", Z);
      return () => window.removeEventListener("message", Z);
    }
  }, [I, Z]);
  e.useEffect(() => {
    if (!I) {
      z(null);
      D(null);
    }
  }, [I]);
  e.useEffect(() => {
    if (!I) {
      return;
    }
    const e = window.visualViewport;
    if (!e) {
      return;
    }
    const t = () => {
      const t = U.current;
      if (!t) {
        return;
      }
      const n = window.innerHeight - e.height;
      t.style.height = n > 100 ? e.height + "px" : "100%";
    };
    e.addEventListener("resize", t);
    return () => {
      e.removeEventListener("resize", t);
      const n = U.current;
      if (n) {
        n.style.height = "100%";
      }
    };
  }, [I, R]);
  if (I) {
    return t.jsxs("div", {
      id: "custom-game-player-screen",
      className: "screen " + (I ? "active" : ""),
      style: {
        background: "#000",
        padding: 0,
        position: "relative",
        zIndex: 9999
      },
      children: [t.jsxs("div", {
        style: {
          position: "absolute",
          top: "52px",
          right: "16px",
          zIndex: 100,
          display: "flex",
          gap: "8px",
          alignItems: "center"
        },
        children: [t.jsx("button", {
          onClick: ee,
          disabled: W,
          style: {
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.5)",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: W ? "wait" : "pointer",
            backdropFilter: "blur(4px)",
            opacity: W ? 0.5 : 1
          },
          title: v("customGameAiShareBtn"),
          children: t.jsx(p, {
            size: 16,
            color: "#fff"
          })
        }), t.jsx("button", {
          onClick: () => y("custom-game-screen"),
          style: {
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.5)",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backdropFilter: "blur(4px)"
          },
          children: t.jsx(g, {
            size: 18,
            color: "#fff"
          })
        })]
      }), A && t.jsxs("div", {
        style: {
          position: "absolute",
          top: "44px",
          left: "16px",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 12px",
          borderRadius: "20px",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(8px)"
        },
        children: [t.jsx("span", {
          style: {
            fontSize: "16px"
          },
          children: A.icon || "🎮"
        }), t.jsx("span", {
          style: {
            fontSize: "13px",
            fontWeight: "700",
            color: "#fff",
            maxWidth: "160px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: A.title
        })]
      }), R && t.jsx("iframe", {
        ref: U,
        src: R,
        sandbox: "allow-scripts",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          border: "none",
          background: "#fff",
          display: "block",
          verticalAlign: "bottom"
        },
        title: (A == null ? undefined : A.title) || "Custom Game",
        allow: "gyroscope; accelerometer; magnetometer"
      }), !R && t.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px"
        },
        children: [t.jsx("div", {
          style: {
            fontSize: "48px"
          },
          children: (A == null ? undefined : A.icon) || "🎮"
        }), t.jsx("div", {
          style: {
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)"
          },
          children: "Loading..."
        })]
      }), E && t.jsx("div", {
        onClick: se,
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 200,
          background: "rgba(15, 15, 25, 0.85)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        },
        children: t.jsxs("div", {
          onClick: e => e.stopPropagation(),
          style: {
            background: "#1a1a2e",
            color: "#fff",
            borderRadius: "24px 24px 0 0",
            padding: "20px 20px calc(20px + max(var(--nuo-safe-bottom, env(safe-area-inset-bottom, 0px)), 12px))",
            maxHeight: "85vh",
            display: "flex",
            flexDirection: "column"
          },
          children: [t.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px"
            },
            children: [t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "8px"
              },
              children: [t.jsx(m, {
                size: 18
              }), t.jsx("div", {
                style: {
                  fontSize: "16px",
                  fontWeight: "700"
                },
                children: v("customGameSharePickChar")
              })]
            }), t.jsx("div", {
              onClick: se,
              style: {
                cursor: "pointer",
                opacity: 0.5
              },
              children: t.jsx(g, {
                size: 20
              })
            })]
          }), (E.title || E.summary) && t.jsxs("div", {
            style: {
              margin: "8px 0 16px",
              padding: "12px 14px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "12px",
              borderLeft: `3px solid ${(A == null ? undefined : A.coverColor) || "#9F7AEA"}`
            },
            children: [E.title && t.jsx("div", {
              style: {
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "4px"
              },
              children: E.title
            }), E.summary && t.jsx("div", {
              style: {
                fontSize: "12px",
                opacity: 0.7,
                lineHeight: 1.5
              },
              children: E.summary
            })]
          }), t.jsxs("div", {
            style: {
              overflowY: "auto",
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: [K.length > 0 && t.jsx("div", {
              style: {
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.4)",
                padding: "4px 8px",
                letterSpacing: "1px"
              },
              children: v("customGameShareSectionRecent")
            }), K.map(e => t.jsxs("div", {
              onClick: () => Q(e.id),
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "14px",
                cursor: "pointer",
                background: "rgba(255,255,255,0.04)"
              },
              onMouseDown: e => e.currentTarget.style.background = "rgba(255,255,255,0.10)",
              onMouseUp: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              children: [t.jsx("img", {
                decoding: "async",
                src: e.avatar || e.image || u(e.name),
                alt: "",
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0
                }
              }), t.jsx("div", {
                style: {
                  flex: 1,
                  fontSize: "15px",
                  fontWeight: "600"
                },
                children: e.name
              }), t.jsx(x, {
                size: 16,
                color: "rgba(255,255,255,0.4)"
              })]
            }, `char_${e.id}`)), Y.length > 0 && t.jsx("div", {
              style: {
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.4)",
                padding: "8px 8px 4px",
                letterSpacing: "1px"
              },
              children: v("customGameShareSectionOtherChars")
            }), Y.map(e => t.jsxs("div", {
              onClick: () => Q(e.id),
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "14px",
                cursor: "pointer",
                background: "rgba(255,255,255,0.04)"
              },
              onMouseDown: e => e.currentTarget.style.background = "rgba(255,255,255,0.10)",
              onMouseUp: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              children: [t.jsx("img", {
                decoding: "async",
                src: e.avatar || e.image || u(e.name),
                alt: "",
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0
                }
              }), t.jsx("div", {
                style: {
                  flex: 1,
                  fontSize: "15px",
                  fontWeight: "600"
                },
                children: e.name
              }), t.jsx(x, {
                size: 16,
                color: "rgba(255,255,255,0.4)"
              })]
            }, `other_char_${e.id}`)), w.length > 0 && t.jsx("div", {
              style: {
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.4)",
                padding: "8px 8px 4px",
                letterSpacing: "1px"
              },
              children: v("customGameShareSectionGroups")
            }), w.map(e => t.jsxs("div", {
              onClick: () => ae(e.id),
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "14px",
                cursor: "pointer",
                background: "rgba(255,255,255,0.04)"
              },
              onMouseDown: e => e.currentTarget.style.background = "rgba(255,255,255,0.10)",
              onMouseUp: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              children: [t.jsx("div", {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #F6AD55, #ED8936)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  fontSize: "18px"
                },
                children: "👥"
              }), t.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [t.jsx("div", {
                  style: {
                    fontSize: "15px",
                    fontWeight: "600",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: e.name || v("customGameShareSectionGroups")
                }), Array.isArray(e.members) && e.members.length > 0 && t.jsxs("div", {
                  style: {
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px"
                  },
                  children: [e.members.length, " ", v("customGameShareGroupMembers")]
                })]
              }), t.jsx(x, {
                size: 16,
                color: "rgba(255,255,255,0.4)"
              })]
            }, `group_${e.id}`)), K.length === 0 && Y.length === 0 && w.length === 0 && t.jsx("div", {
              style: {
                textAlign: "center",
                padding: "32px 16px",
                color: "rgba(255,255,255,0.4)",
                fontSize: "13px"
              },
              children: v("customGameNoActiveChars")
            })]
          })]
        })
      }), W && t.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 300,
          background: "rgba(15, 15, 25, 0.92)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px"
        },
        children: [t.jsx(f, {
          size: 32,
          color: "#fff",
          style: {
            animation: "spin 1s linear infinite"
          }
        }), t.jsx("div", {
          style: {
            fontSize: "14px",
            color: "rgba(255,255,255,0.8)",
            fontWeight: "600"
          },
          children: v("customGameAiSummarizing")
        }), t.jsx("style", {
          children: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }"
        })]
      }), G && t.jsx("div", {
        onClick: ie,
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 200,
          background: "rgba(15, 15, 25, 0.85)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        },
        children: t.jsxs("div", {
          onClick: e => e.stopPropagation(),
          style: {
            background: "#1a1a2e",
            color: "#fff",
            borderRadius: "24px 24px 0 0",
            padding: "20px 20px calc(20px + max(var(--nuo-safe-bottom, env(safe-area-inset-bottom, 0px)), 12px))",
            maxHeight: "85vh",
            display: "flex",
            flexDirection: "column"
          },
          children: [t.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px"
            },
            children: [t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "8px"
              },
              children: [t.jsx(m, {
                size: 18
              }), t.jsx("div", {
                style: {
                  fontSize: "16px",
                  fontWeight: "700"
                },
                children: v("customGameAiSendTo")
              })]
            }), t.jsx("div", {
              onClick: ie,
              style: {
                cursor: "pointer",
                opacity: 0.5
              },
              children: t.jsx(g, {
                size: 20
              })
            })]
          }), t.jsxs("div", {
            style: {
              margin: "8px 0 16px",
              padding: "12px 14px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "12px",
              borderLeft: `3px solid ${(A == null ? undefined : A.coverColor) || "#9F7AEA"}`
            },
            children: [t.jsx("div", {
              style: {
                fontSize: "12px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "4px"
              },
              children: v("customGameAiSummaryPreview")
            }), t.jsx("div", {
              style: {
                fontSize: "13px",
                opacity: 0.85,
                lineHeight: 1.5
              },
              children: G.summary
            })]
          }), t.jsxs("div", {
            style: {
              overflowY: "auto",
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: [K.length > 0 && t.jsx("div", {
              style: {
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.4)",
                padding: "4px 8px",
                letterSpacing: "1px"
              },
              children: v("customGameShareSectionRecent")
            }), K.map(e => t.jsxs("div", {
              onClick: () => ne(e.id),
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "14px",
                cursor: "pointer",
                background: "rgba(255,255,255,0.04)"
              },
              onMouseDown: e => e.currentTarget.style.background = "rgba(255,255,255,0.10)",
              onMouseUp: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              children: [t.jsx("img", {
                decoding: "async",
                src: e.avatar || e.image || u(e.name),
                alt: "",
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0
                }
              }), t.jsx("div", {
                style: {
                  flex: 1,
                  fontSize: "15px",
                  fontWeight: "600"
                },
                children: e.name
              }), t.jsx(x, {
                size: 16,
                color: "rgba(255,255,255,0.4)"
              })]
            }, `ai_char_${e.id}`)), Y.length > 0 && t.jsx("div", {
              style: {
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.4)",
                padding: "8px 8px 4px",
                letterSpacing: "1px"
              },
              children: v("customGameShareSectionOtherChars")
            }), Y.map(e => t.jsxs("div", {
              onClick: () => ne(e.id),
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "14px",
                cursor: "pointer",
                background: "rgba(255,255,255,0.04)"
              },
              onMouseDown: e => e.currentTarget.style.background = "rgba(255,255,255,0.10)",
              onMouseUp: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              children: [t.jsx("img", {
                decoding: "async",
                src: e.avatar || e.image || u(e.name),
                alt: "",
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0
                }
              }), t.jsx("div", {
                style: {
                  flex: 1,
                  fontSize: "15px",
                  fontWeight: "600"
                },
                children: e.name
              }), t.jsx(x, {
                size: 16,
                color: "rgba(255,255,255,0.4)"
              })]
            }, `ai_other_char_${e.id}`)), w.length > 0 && t.jsx("div", {
              style: {
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.4)",
                padding: "8px 8px 4px",
                letterSpacing: "1px"
              },
              children: v("customGameShareSectionGroups")
            }), w.map(e => t.jsxs("div", {
              onClick: () => re(e.id),
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "14px",
                cursor: "pointer",
                background: "rgba(255,255,255,0.04)"
              },
              onMouseDown: e => e.currentTarget.style.background = "rgba(255,255,255,0.10)",
              onMouseUp: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.04)",
              children: [t.jsx("div", {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #F6AD55, #ED8936)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  fontSize: "18px"
                },
                children: "👥"
              }), t.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [t.jsx("div", {
                  style: {
                    fontSize: "15px",
                    fontWeight: "600",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: e.name || v("customGameShareSectionGroups")
                }), Array.isArray(e.members) && e.members.length > 0 && t.jsxs("div", {
                  style: {
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px"
                  },
                  children: [e.members.length, " ", v("customGameShareGroupMembers")]
                })]
              }), t.jsx(x, {
                size: 16,
                color: "rgba(255,255,255,0.4)"
              })]
            }, `ai_group_${e.id}`)), K.length === 0 && Y.length === 0 && w.length === 0 && t.jsx("div", {
              style: {
                textAlign: "center",
                padding: "32px 16px",
                color: "rgba(255,255,255,0.4)",
                fontSize: "13px"
              },
              children: v("customGameNoActiveChars")
            })]
          })]
        })
      }), L && t.jsx("div", {
        onClick: ce,
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 200,
          background: "rgba(15, 15, 25, 0.85)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        },
        children: t.jsxs("div", {
          onClick: e => e.stopPropagation(),
          style: {
            background: "#1a1a2e",
            color: "#fff",
            borderRadius: "24px 24px 0 0",
            padding: "20px 20px calc(20px + max(var(--nuo-safe-bottom, env(safe-area-inset-bottom, 0px)), 12px))",
            maxHeight: "80vh",
            display: "flex",
            flexDirection: "column"
          },
          children: [t.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px"
            },
            children: [t.jsx("div", {
              style: {
                fontSize: "16px",
                fontWeight: "700"
              },
              children: L.title || v("customGamePickCharsTitle")
            }), t.jsx("div", {
              onClick: ce,
              style: {
                cursor: "pointer",
                opacity: 0.5
              },
              children: t.jsx(g, {
                size: 20
              })
            })]
          }), t.jsxs("div", {
            style: {
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "12px"
            },
            children: [L.max ? v("customGamePickCharsHintRange").replace("{min}", L.min).replace("{max}", L.max) : v("customGamePickCharsHintMin").replace("{min}", L.min), " — ", v("customGamePickCharsSelected").replace("{n}", B.length)]
          }), t.jsxs("div", {
            style: {
              overflowY: "auto",
              flex: 1,
              minHeight: 0
            },
            children: [t.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px"
              },
              children: (k || []).map(e => {
                const n = B.some(t => String(t.id) === String(e.id));
                const r = !n && L.max && B.length >= L.max;
                return t.jsxs("div", {
                  onClick: () => !r && oe(e),
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    cursor: r ? "not-allowed" : "pointer",
                    opacity: r ? 0.3 : 1,
                    padding: "8px",
                    borderRadius: "14px",
                    background: n ? "rgba(72,187,120,0.15)" : "transparent",
                    transition: "all 0.15s"
                  },
                  children: [t.jsxs("div", {
                    style: {
                      position: "relative"
                    },
                    children: [t.jsx("img", {
                      decoding: "async",
                      src: e.avatar || e.image || u(e.id),
                      alt: "",
                      style: {
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: n ? "3px solid #48BB78" : "2px solid rgba(255,255,255,0.2)",
                        transition: "border 0.15s"
                      }
                    }), n && t.jsx("div", {
                      style: {
                        position: "absolute",
                        top: -2,
                        right: -2,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#48BB78",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      children: t.jsx("span", {
                        style: {
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: "800"
                        },
                        children: "✓"
                      })
                    })]
                  }), t.jsx("div", {
                    style: {
                      fontSize: "12px",
                      fontWeight: "600",
                      textAlign: "center",
                      maxWidth: "80px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    children: e.name
                  })]
                }, `pick_${e.id}`);
              })
            }), (k || []).length === 0 && t.jsx("div", {
              style: {
                textAlign: "center",
                padding: "32px 16px",
                color: "rgba(255,255,255,0.4)",
                fontSize: "13px"
              },
              children: v("customGameNoActiveChars")
            })]
          }), t.jsx("button", {
            onClick: le,
            disabled: B.length < (L.min || 1),
            style: {
              marginTop: "16px",
              width: "100%",
              padding: "14px",
              borderRadius: "14px",
              border: "none",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              background: B.length >= (L.min || 1) ? "#48BB78" : "rgba(255,255,255,0.1)",
              color: B.length >= (L.min || 1) ? "#fff" : "rgba(255,255,255,0.3)",
              transition: "all 0.2s"
            },
            children: v("customGamePickCharsConfirm").replace("{n}", B.length)
          })]
        })
      })]
    });
  } else {
    return null;
  }
};
export { S as default };