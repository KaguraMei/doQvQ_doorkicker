const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css"]) => i.map(i => d[i]);
import { r as e, j as a } from "./vendor-react-B2VXkTUV.js";
import { f as t, c7 as s, V as n, a8 as l, B as r, h as i, c8 as c, a as o, j as m, bU as d, _ as p, bB as u, a9 as h, c as y } from "./native-pet-CTNtZgMA.js";
import { k as x, l as g, m as j } from "./aiSummaryService-Bx5aTYVV.js";
import { ar as v, as as f } from "./main-BO9xa-SQ.js";
import { M as b, c as N, r as S } from "./ManualSummaryModal-uKlbX1iN.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const w = ({
  userId: c,
  t: o,
  onSelect: m,
  onBack: d
}) => {
  const p = o || (e => e);
  const {
    profileUsers: u,
    currentProfileUserId: h,
    setCurrentProfileUserId: y
  } = t();
  const [x, g] = e.useState([]);
  const [j, v] = e.useState(true);
  const [f, b] = e.useState(null);
  const [N, S] = e.useState(false);
  const [w, k] = e.useState("");
  const [C, P] = e.useState(false);
  const I = async () => {
    P(true);
    const e = [];
    try {
      const a = await i.memory.toArray().catch(a => {
        e.push(`memory.toArray() FAIL: ${(a == null ? undefined : a.name) || ""} ${(a == null ? undefined : a.message) || a}`);
        return [];
      });
      const t = await i.summaryEntries.toArray().catch(a => {
        e.push(`summaryEntries.toArray() FAIL: ${(a == null ? undefined : a.name) || ""} ${(a == null ? undefined : a.message) || a}`);
        return [];
      });
      e.push("=== Raw DB Counts ===");
      e.push(`memory table: ${a.length} rows`);
      e.push(`summaryEntries table: ${t.length} rows`);
      e.push("");
      const s = {};
      for (const e of a) {
        const a = e.userId || "(no userId)";
        s[a] ||= {
          memoryRows: 0,
          splitFlag: 0,
          inlineHistorySum: 0,
          blobBroken: 0,
          pairs: []
        };
        s[a].memoryRows++;
        if (e._summaryHistorySplit === true) {
          s[a].splitFlag++;
        }
        if (e._blobBroken === true) {
          s[a].blobBroken++;
        }
        if (Array.isArray(e.summaryHistory)) {
          s[a].inlineHistorySum += e.summaryHistory.length;
        }
        s[a].pairs.push({
          cid: String(e.characterId || ""),
          split: e._summaryHistorySplit === true,
          inline: Array.isArray(e.summaryHistory) ? e.summaryHistory.length : 0,
          blobBroken: e._blobBroken === true,
          facts: Array.isArray(e.userFacts) ? e.userFacts.length : 0,
          schemaV: e._schemaVersion
        });
      }
      const n = {};
      for (const e of t) {
        const a = e.userId || "(no userId)";
        const t = String(e.characterId || "");
        n[a] ||= {
          total: 0,
          byCid: {}
        };
        n[a].total++;
        n[a].byCid[t] = (n[a].byCid[t] || 0) + 1;
      }
      e.push("=== By User ===");
      const l = new Set([...Object.keys(s), ...Object.keys(n)]);
      for (const r of l) {
        const a = s[r] || {
          memoryRows: 0,
          splitFlag: 0,
          inlineHistorySum: 0,
          blobBroken: 0,
          pairs: []
        };
        const t = n[r] || {
          total: 0,
          byCid: {}
        };
        const l = r === c ? " ← 當前用戶" : "";
        e.push(`uid=${r}${l}`);
        e.push(`  memory: ${a.memoryRows} pairs (${a.splitFlag} split, ${a.blobBroken} broken)`);
        e.push(`  inline summaryHistory total: ${a.inlineHistorySum}`);
        e.push(`  summaryEntries side-table total: ${t.total}`);
        const i = [];
        const o = new Set([...a.pairs.map(e => e.cid), ...Object.keys(t.byCid)]);
        let m = 0;
        for (const e of o) {
          if (m++ >= 20) {
            i.push("  ...");
            break;
          }
          const s = a.pairs.find(a => a.cid === e);
          const n = t.byCid[e] || 0;
          i.push(`    cid=${e} side=${n} ${s ? `inline=${s.inline} split=${s.split} broken=${s.blobBroken} facts=${s.facts} schema=${s.schemaV}` : "(no memory row)"}`);
        }
        if (i.length > 0) {
          e.push(...i);
        }
      }
      if (t.length > 0) {
        const a = t[0];
        e.push("");
        e.push("=== Sample summaryEntry ===");
        e.push(`uid=${a.userId} cid=${a.characterId} id=${a.id}`);
        e.push(`source=${a.source || "online"}`);
        e.push(`summary len=${(a.summary || a.content || "").length}`);
        e.push(`keys=${Object.keys(a).join(",")}`);
      }
    } catch (a) {
      e.push(`診斷異常: ${(a == null ? undefined : a.message) || a}`);
    }
    k(e.join("\n"));
    P(false);
  };
  e.useEffect(() => {
    if (c) {
      return s(e => {
        if (e.userId === c) {
          v(true);
          setTimeout(() => v(false), 500);
        }
      });
    }
  }, [c]);
  e.useEffect(() => {
    if (!c) {
      return;
    }
    let e = false;
    (async () => {
      try {
        const a = await n.getByUser(c);
        if (e) {
          return;
        }
        const t = e => (e.summaryHistory || []).filter(e => (e == null ? undefined : e.source) !== "forum" && (e == null ? undefined : e.source) !== "moment");
        const s = a.filter(e => t(e).length > 0 || e.userFacts && e.userFacts.length > 0);
        const i = await Promise.all(s.map(async e => {
          const a = String(e.characterId || "");
          if (!a || a.startsWith("group_")) {
            return null;
          }
          try {
            let s = await l.get(a).catch(() => null);
            if (!s) {
              const e = Number(a);
              if (!isNaN(e)) {
                s = await l.get(e).catch(() => null);
              }
            }
            if (!s) {
              return null;
            }
            let n = s.avatar || s.image;
            if (!n) {
              try {
                const e = await r.get(c, a);
                n = (e == null ? undefined : e.partnerAvatar) || null;
              } catch {}
            }
            const i = t(e).filter(e => !e.mergedIntoBigSummary).length;
            const o = (e.userFacts || []).length;
            const m = i * 3 + o;
            return {
              id: a,
              name: s.name,
              avatar: n,
              group: (s.group || "").trim(),
              summaryCount: i,
              factCount: o,
              hasModel: !!e.mentalModel,
              weight: m
            };
          } catch {
            return null;
          }
        }));
        if (e) {
          return;
        }
        const o = i.filter(Boolean);
        o.sort((e, a) => a.weight - e.weight);
        g(o);
      } catch (a) {
        console.error("[MemoryPalace] 載入失敗:", a);
      } finally {
        if (!e) {
          v(false);
        }
      }
    })();
    return () => {
      e = true;
    };
  }, [c]);
  if (j) {
    return a.jsx("div", {
      className: "mp-palace",
      children: a.jsx("div", {
        className: "mp-palace-loading",
        children: p("memoryPalaceDrawingPalace") || "SURVEYING · 正在繪製宮殿圖"
      })
    });
  }
  const A = x.map((e, a) => {
    const t = a % 2 == 0 ? "left" : "right";
    const s = Math.floor(a / 2);
    const n = Math.min(3, Math.max(1, Math.ceil(e.weight / 10)));
    return {
      ...e,
      side: t,
      row: s,
      size: n
    };
  });
  const T = Math.ceil(A.length / 2) || 1;
  return a.jsxs("div", {
    className: "mp-palace",
    children: [a.jsxs("header", {
      className: "mp-palace-topbar",
      children: [a.jsxs("button", {
        onClick: d,
        className: "mp-palace-back",
        children: [a.jsx("span", {
          className: "mp-back-arrow",
          children: "✕"
        }), a.jsx("span", {
          children: p("memoryPalaceExitPalace") || "離開宮殿"
        })]
      }), a.jsxs("div", {
        className: "mp-palace-crest",
        children: [a.jsx("span", {
          className: "mp-crest-mark",
          children: "✦"
        }), a.jsx("span", {
          children: "PALAZZO · DELLA · MEMORIA"
        }), a.jsx("span", {
          className: "mp-crest-mark",
          children: "✦"
        })]
      }), u && u.length > 1 ? a.jsx("div", {
        className: "mp-user-pills",
        children: u.map(e => {
          const t = e.uid || e.id;
          const s = t === h;
          return a.jsx("button", {
            onClick: () => (e => {
              if (e !== h) {
                y(e);
              }
            })(t),
            title: e.name,
            className: "mp-user-pill " + (s ? "active" : ""),
            children: e.avatar ? a.jsx("img", {
              decoding: "async",
              src: e.avatar,
              alt: e.name
            }) : (e.name || "?")[0]
          }, t);
        })
      }) : a.jsx("div", {
        style: {
          width: 40
        }
      })]
    }), a.jsx("button", {
      onClick: () => {
        S(true);
        if (!w) {
          I();
        }
      },
      style: {
        position: "fixed",
        right: 12,
        bottom: 90,
        zIndex: 200,
        padding: "8px 12px",
        fontSize: 12,
        borderRadius: 20,
        background: "rgba(220, 80, 80, 0.92)",
        color: "#fff",
        border: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      },
      children: "🔍 診斷"
    }), N && a.jsx("div", {
      onClick: () => S(false),
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 12
      },
      children: a.jsxs("div", {
        className: "mp-diag-modal",
        onClick: e => e.stopPropagation(),
        style: {
          background: "var(--mp-diag-bg, #fff)",
          borderRadius: 12,
          padding: 16,
          maxWidth: "95vw",
          maxHeight: "85vh",
          width: 600,
          display: "flex",
          flexDirection: "column",
          gap: 8
        },
        children: [a.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [a.jsx("strong", {
            style: {
              fontSize: 14
            },
            children: "記憶資料診斷"
          }), a.jsxs("div", {
            style: {
              display: "flex",
              gap: 8
            },
            children: [a.jsx("button", {
              onClick: I,
              disabled: C,
              style: {
                padding: "4px 10px",
                fontSize: 12,
                borderRadius: 6,
                border: "1px solid var(--mp-diag-btn-border, #ddd)",
                background: "var(--mp-diag-btn-bg, #f5f5f5)",
                color: "var(--mp-diag-btn-text, inherit)"
              },
              children: C ? "..." : "重新掃描"
            }), a.jsx("button", {
              onClick: () => {
                var e;
                try {
                  if ((e = navigator.clipboard) != null) {
                    e.writeText(w);
                  }
                } catch {}
              },
              style: {
                padding: "4px 10px",
                fontSize: 12,
                borderRadius: 6,
                border: "1px solid var(--mp-diag-btn-border, #ddd)",
                background: "var(--mp-diag-btn-bg, #f5f5f5)",
                color: "var(--mp-diag-btn-text, inherit)"
              },
              children: "複製"
            }), a.jsx("button", {
              onClick: () => S(false),
              style: {
                padding: "4px 10px",
                fontSize: 12,
                borderRadius: 6,
                border: "1px solid var(--mp-diag-btn-border, #ddd)",
                background: "var(--mp-diag-btn-bg, #f5f5f5)",
                color: "var(--mp-diag-btn-text, inherit)"
              },
              children: "關閉"
            })]
          })]
        }), a.jsx("pre", {
          style: {
            flex: 1,
            overflow: "auto",
            margin: 0,
            background: "#0f0f0f",
            color: "#a8e0a8",
            padding: 10,
            fontSize: 11,
            lineHeight: 1.5,
            borderRadius: 8,
            whiteSpace: "pre-wrap",
            wordBreak: "break-all"
          },
          children: w || (C ? "掃描中…" : "點重新掃描")
        })]
      })
    }), a.jsxs("div", {
      className: "mp-palace-scroll",
      children: [a.jsxs("div", {
        className: "mp-palace-header",
        children: [a.jsxs("div", {
          className: "mp-palace-title-wrap",
          children: [a.jsx("span", {
            className: "mp-palace-ordinal",
            children: p("memoryPalaceHeaderOrdinal") || "ⅰ · 記憶宮殿 · ⅰ"
          }), a.jsxs("h1", {
            className: "mp-palace-title",
            children: ["Memory", a.jsx("br", {}), a.jsx("em", {
              children: "Palace"
            })]
          }), a.jsxs("p", {
            className: "mp-palace-sub",
            children: [p("memoryPalaceHeaderLine1") || "每位與你有故事的人，都在宮殿裡擁有一間房。", a.jsx("br", {}), p("memoryPalaceHeaderLine2") || "推開門 · 走進只屬於你們的內心世界。"]
          })]
        }), a.jsxs("div", {
          className: "mp-palace-legend",
          children: [a.jsxs("div", {
            children: [a.jsx("span", {
              className: "mp-legend-box"
            }), a.jsx("span", {
              children: p("memoryPalaceLegendRoom") || "房間 · 內心"
            })]
          }), a.jsxs("div", {
            children: [a.jsx("span", {
              className: "mp-legend-line"
            }), a.jsx("span", {
              children: p("memoryPalaceLegendCorridor") || "長廊 · 通路"
            })]
          }), a.jsxs("div", {
            children: [a.jsx("span", {
              className: "mp-legend-dot"
            }), a.jsx("span", {
              children: p("memoryPalaceLegendEntry") || "入口 · 當前"
            })]
          })]
        })]
      }), A.length === 0 ? a.jsxs("div", {
        className: "mp-palace-empty",
        children: [a.jsx("div", {
          className: "mp-empty-blueprint",
          children: a.jsx("div", {
            className: "mp-empty-room",
            children: "——"
          })
        }), a.jsx("p", {
          className: "mp-empty-h",
          children: p("memoryPalacePalaceEmpty") || "宮殿尚未落成"
        }), a.jsx("p", {
          className: "mp-empty-d",
          children: p("memoryPalacePalaceEmptyDesc") || "當你與某人有了回憶，便會升起第一間房。"
        })]
      }) : a.jsxs("div", {
        className: "mp-blueprint",
        children: [a.jsxs("div", {
          className: "mp-blueprint-grid",
          style: {
            "--rows": T
          },
          children: [a.jsxs("div", {
            className: "mp-corridor",
            "aria-hidden": "true",
            children: [a.jsx("div", {
              className: "mp-corridor-inner"
            }), a.jsx("div", {
              className: "mp-corridor-entry",
              children: p("memoryPalaceCorridorEntry") || "入口"
            }), a.jsx("div", {
              className: "mp-corridor-end",
              children: "✦"
            })]
          }), A.map((e, t) => a.jsxs("div", {
            className: `mp-room mp-room-${e.side} mp-room-size-${e.size} ${f === e.id ? "is-hover" : ""}`,
            style: {
              gridRow: e.row + 1
            },
            onClick: () => m(e.id),
            onMouseEnter: () => b(e.id),
            onMouseLeave: () => b(null),
            children: [a.jsx("span", {
              className: "mp-room-doorway"
            }), a.jsxs("div", {
              className: "mp-room-plan",
              children: [a.jsxs("div", {
                className: "mp-room-plan-num",
                children: ["№ ", String(t + 1).padStart(2, "0")]
              }), a.jsx("div", {
                className: "mp-room-plan-avatar",
                children: e.avatar ? a.jsx("img", {
                  decoding: "async",
                  src: e.avatar,
                  alt: e.name
                }) : a.jsx("span", {
                  children: (e.name || "?")[0]
                })
              }), a.jsx("div", {
                className: "mp-room-plan-name",
                children: e.name
              }), a.jsxs("div", {
                className: "mp-room-plan-meta",
                children: [a.jsxs("span", {
                  children: [e.summaryCount, " ", p("memoryPalaceRoomStories") || "故事"]
                }), a.jsx("span", {
                  className: "mp-meta-sep",
                  children: "·"
                }), a.jsxs("span", {
                  children: [e.factCount, " ", p("memoryPalaceRoomTokens") || "碎片"]
                })]
              }), e.hasModel && a.jsx("div", {
                className: "mp-room-plan-seal",
                children: p("memoryPalaceRoomSealed") || "✦ 已印"
              }), a.jsx("div", {
                className: "mp-room-plan-enter",
                children: "ENTER →"
              })]
            })]
          }, e.id))]
        }), a.jsxs("div", {
          className: "mp-blueprint-footer",
          children: [a.jsx("span", {
            children: p("memoryPalaceFooterScale") || "SCALE · 1 : 記憶"
          }), a.jsxs("span", {
            children: [A.length, " ", p("memoryPalaceFooterRooms") || "ROOMS"]
          }), a.jsxs("span", {
            children: [p("memoryPalaceFooterDrawn") || "DRAWN", " · ", new Date().toISOString().slice(0, 10)]
          })]
        })]
      })]
    })]
  });
};
const k = {
  online: {
    emoji: "💬",
    label: "私聊"
  },
  tm: {
    emoji: "🤝",
    label: "面對面"
  },
  group: {
    emoji: "👥",
    label: "群聊"
  },
  "multi-scene": {
    emoji: "🎭",
    label: "多人場景"
  },
  spectate: {
    emoji: "🌙",
    label: "旁觀劇情"
  },
  date: {
    emoji: "💕",
    label: "約會"
  },
  encounter: {
    emoji: "👋",
    label: "偶遇"
  },
  merged: {
    emoji: "📚",
    label: "時期總結"
  }
};
const C = {
  happy: "😊",
  sad: "😢",
  tender: "🥺",
  excited: "✨",
  anxious: "😰",
  angry: "😤",
  bittersweet: "🌧️",
  vulnerable: "🫧",
  playful: "😏",
  tense: "😬",
  peaceful: "🌿",
  neutral: ""
};
const P = ["online", "tm", "group", "multi-scene", "spectate", "date", "encounter"];
function I(e, a) {
  if (!e) {
    return null;
  }
  const t = String(e).trim();
  let s = t.match(/(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
  if (s) {
    return new Date(a, Number(s[1]) - 1, Number(s[2]));
  }
  s = t.match(/(\d{4})[\/\-.](\d{1,2})[\/\-.](\d{1,2})/);
  if (s) {
    return new Date(Number(s[1]), Number(s[2]) - 1, Number(s[3]));
  }
  s = t.match(/^(\d{1,2})[\/\-](\d{1,2})/);
  if (s) {
    return new Date(a, Number(s[1]) - 1, Number(s[2]));
  }
  const n = new Date(t);
  if (isNaN(n.getTime())) {
    return null;
  } else {
    return n;
  }
}
function A(e) {
  var a;
  if (!e) {
    return new Date();
  }
  const t = new Date(e.id || Date.now()).getFullYear();
  const s = (a = e.dateRange) == null ? undefined : a.start;
  if (s) {
    const e = I(s, t);
    if (e) {
      return e;
    }
  }
  if (e.date) {
    const a = I(e.date, t);
    if (a) {
      return a;
    }
  }
  return new Date(e.id || Date.now());
}
function T(e) {
  var a;
  var t;
  const s = (a = e == null ? undefined : e.dateRange) == null ? undefined : a.start;
  const n = (t = e == null ? undefined : e.dateRange) == null ? undefined : t.end;
  if (s && n && s !== n) {
    const e = c(s);
    const a = c(n);
    if (e === a) {
      return e;
    } else {
      return `${e} → ${a}`;
    }
  }
  if (s) {
    return c(s);
  } else if (e == null ? undefined : e.date) {
    return c(e.date);
  } else {
    return "";
  }
}
function $(e) {
  return c(e);
}
function M(e) {
  const a = Math.max(1, Math.min(5, e || 1));
  return "★".repeat(a) + "☆".repeat(5 - a);
}
function F(e) {
  if (!e) {
    return null;
  }
  const a = typeof e.importance == "number" ? e.importance : null;
  const t = Array.isArray(e.topics) ? e.topics : null;
  const s = Array.isArray(e.anchors) ? e.anchors : [];
  let n = 1;
  const l = new Set();
  for (const c of s) {
    if ((c.importance || 1) > n) {
      n = c.importance;
    }
    for (const e of c.topics || []) {
      l.add(e);
    }
  }
  const r = a ?? n;
  const i = t && t.length > 0 ? t : [...l];
  if (r !== 1 || i.length !== 0 || e.emotion) {
    return {
      maxImportance: r,
      topics: i,
      emotion: e.emotion && e.emotion !== "neutral" ? e.emotion : null,
      anchorCount: s.length
    };
  } else {
    return null;
  }
}
const _ = ({
  timeline: t = [],
  allSummaries: s = [],
  scrollToSummaryId: n,
  t: l,
  onUpdate: r,
  onDelete: i
}) => {
  const c = l || (e => e);
  const [o, m] = e.useState(() => {
    const e = sessionStorage.getItem("mp_story_activeSources");
    if (!e) {
      return new Set(P);
    }
    try {
      const a = JSON.parse(e);
      const t = new Set(a);
      const s = new Set(a);
      for (const e of P) {
        if (!s.has(e)) {
          t.add(e);
        }
      }
      return t;
    } catch {
      return new Set(P);
    }
  });
  const [d, p] = e.useState(() => sessionStorage.getItem("mp_story_importantOnly") === "true");
  const [u, h] = e.useState(() => sessionStorage.getItem("mp_story_activeTopic") || null);
  const [y, x] = e.useState(() => {
    const e = sessionStorage.getItem("mp_story_expandedIds");
    if (e) {
      return new Set(JSON.parse(e));
    } else {
      return new Set();
    }
  });
  const [g, j] = e.useState(() => {
    const e = sessionStorage.getItem("mp_story_expandedChildren");
    if (e) {
      return new Set(JSON.parse(e));
    } else {
      return new Set();
    }
  });
  const [v, f] = e.useState(() => {
    const e = sessionStorage.getItem("mp_story_editingId");
    if (e && e !== "null") {
      if (isNaN(Number(e))) {
        return e;
      } else {
        return Number(e);
      }
    } else {
      return null;
    }
  });
  const [b, N] = e.useState(() => sessionStorage.getItem("mp_story_editingText") || "");
  const [S, w] = e.useState(() => sessionStorage.getItem("mp_story_compactMode") === "true");
  const [I, _] = e.useState("");
  e.useEffect(() => {
    sessionStorage.setItem("mp_story_compactMode", S);
  }, [S]);
  e.useEffect(() => {
    sessionStorage.setItem("mp_story_activeSources", JSON.stringify([...o]));
    sessionStorage.setItem("mp_story_importantOnly", d);
    if (u) {
      sessionStorage.setItem("mp_story_activeTopic", u);
    } else {
      sessionStorage.removeItem("mp_story_activeTopic");
    }
    sessionStorage.setItem("mp_story_expandedIds", JSON.stringify([...y]));
    sessionStorage.setItem("mp_story_expandedChildren", JSON.stringify([...g]));
    if (v != null) {
      sessionStorage.setItem("mp_story_editingId", String(v));
    } else {
      sessionStorage.removeItem("mp_story_editingId");
    }
    sessionStorage.setItem("mp_story_editingText", b);
  }, [o, d, u, y, g, v, b]);
  const D = e.useRef(null);
  const R = e.useMemo(() => {
    const e = new Map();
    for (const a of s) {
      if ((a == null ? undefined : a.id) != null) {
        e.set(a.id, a);
      }
    }
    return e;
  }, [s]);
  const E = e.useMemo(() => {
    const e = I.trim().toLowerCase();
    return t.filter(a => {
      var t;
      var s;
      if (!o.has(a.source || "online")) {
        return false;
      }
      const n = F(a);
      if (d && (!n || n.maxImportance < 4)) {
        return false;
      }
      if (u && (!n || !n.topics.includes(u))) {
        return false;
      }
      if (e) {
        const n = A(a);
        const l = n.getFullYear();
        const r = n.getMonth() + 1;
        const i = n.getDate();
        const c = [`${l}/${r}/${i}`, `${l}-${r}-${i}`, `${r}/${i}`, `${r}-${i}`, `${r}月${i}日`, String(((t = a.dateRange) == null ? undefined : t.start) || ""), String(((s = a.dateRange) == null ? undefined : s.end) || ""), String(a.date || "")].join(" ").toLowerCase();
        const o = (a.summary || a.content || "").toLowerCase();
        if (!c.includes(e) && !o.includes(e)) {
          return false;
        }
      }
      return true;
    });
  }, [t, o, d, u, I]);
  const H = e.useMemo(() => {
    const e = new Set();
    for (const a of t) {
      if (Array.isArray(a.topics)) {
        for (const t of a.topics) {
          e.add(t);
        }
      }
      for (const t of a.anchors || []) {
        for (const a of t.topics || []) {
          e.add(a);
        }
      }
    }
    return [...e];
  }, [t]);
  const B = e.useMemo(() => function (e) {
    const a = new Map();
    for (const t of e) {
      const e = A(t);
      const s = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
      const n = `${e.getFullYear()}年${e.getMonth() + 1}月`;
      if (!a.has(s)) {
        a.set(s, {
          key: s,
          label: n,
          entries: []
        });
      }
      a.get(s).entries.push(t);
    }
    for (const t of a.values()) {
      t.entries.sort((e, a) => (a.id || 0) - (e.id || 0));
    }
    return [...a.values()].sort((e, a) => e.key < a.key ? 1 : e.key > a.key ? -1 : 0);
  }(E), [E]);
  const O = e.useMemo(() => {
    const e = {};
    for (const a of t) {
      const t = a.source || "online";
      e[t] = (e[t] || 0) + 1;
    }
    return e;
  }, [t]);
  e.useEffect(() => {
    if (!n || !D.current) {
      return;
    }
    const e = D.current.querySelector(`[data-summary-id="${n}"]`);
    if (e) {
      e.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      e.classList.add("mp-summary-highlight");
      setTimeout(() => e.classList.remove("mp-summary-highlight"), 2500);
      x(e => new Set([...e, n]));
    }
  }, [n, t]);
  const G = e => {
    x(a => {
      const t = new Set(a);
      if (t.has(e)) {
        t.delete(e);
      } else {
        t.add(e);
      }
      return t;
    });
  };
  const [L, z] = e.useState(null);
  const U = () => {
    if (v == null) {
      return;
    }
    const e = b.trim();
    if (!e) {
      V();
      return;
    }
    const a = L || {};
    const t = String(a.openThreads || "").split("\n").map(e => e.trim()).filter(Boolean).map(e => {
      const a = e.split("|").map(e => e.trim());
      if (a.length >= 3) {
        return {
          type: a[0] || "feeling",
          status: a[1] || "active",
          text: a.slice(2).join("|")
        };
      } else {
        return {
          type: "feeling",
          status: "active",
          text: e
        };
      }
    });
    const s = e => String(e || "").split(/[,，\n]/).map(e => e.trim()).filter(Boolean);
    const n = {
      summary: e,
      importance: Math.max(1, Math.min(5, Number(a.importance) || 2)),
      emotion: a.emotion || "neutral",
      topics: s(a.topics),
      keywords: s(a.keywords),
      openThreads: t,
      evidencedFacts: String(a.evidencedFacts || "").split("\n").map(e => e.trim()).filter(Boolean)
    };
    if (a.dateRangeStart || a.dateRangeEnd) {
      n.dateRange = {
        start: a.dateRangeStart || a.dateRangeEnd,
        end: a.dateRangeEnd || a.dateRangeStart
      };
    }
    if (r != null) {
      r(v, n);
    }
    f(null);
    N("");
    z(null);
  };
  const V = () => {
    f(null);
    N("");
    z(null);
  };
  return a.jsxs("div", {
    className: "mp-card mp-timeline-card " + (S ? "is-compact" : ""),
    ref: D,
    children: [a.jsxs("div", {
      className: "mp-card-header",
      children: [a.jsx("span", {
        className: "mp-card-icon",
        children: "📖"
      }), a.jsx("h2", {
        className: "mp-card-title",
        children: c("memoryPalaceTimeline") || "你們的故事"
      }), a.jsx("span", {
        className: "mp-card-count",
        children: t.length
      })]
    }), t.length > 0 && a.jsxs("div", {
      className: "mp-toolbar",
      children: [a.jsxs("div", {
        className: "mp-toolbar-search",
        children: [a.jsx("span", {
          className: "mp-toolbar-search-icon",
          children: "🔍"
        }), a.jsx("input", {
          type: "text",
          value: I,
          onChange: e => _(e.target.value),
          placeholder: "搜尋日期（如 4/19）或關鍵字…"
        }), I && a.jsx("button", {
          className: "mp-toolbar-search-clear",
          onClick: () => _(""),
          children: "✕"
        })]
      }), a.jsx("button", {
        className: "mp-toolbar-compact " + (S ? "active" : ""),
        onClick: () => w(e => !e),
        title: S ? "展開卡片" : "緊湊清單視圖",
        children: S ? "☰ 清單" : "▤ 卡片"
      })]
    }), t.length > 0 && a.jsxs("div", {
      className: "mp-timeline-filters",
      children: [P.map(e => {
        const t = O[e] || 0;
        if (t === 0) {
          return null;
        }
        const s = k[e];
        const n = o.has(e);
        return a.jsxs("button", {
          className: "mp-filter-pill " + (n ? "active" : ""),
          onClick: () => (e => {
            m(a => {
              const t = new Set(a);
              if (t.has(e)) {
                t.delete(e);
              } else {
                t.add(e);
              }
              if (t.size === 0) {
                return a;
              } else {
                return t;
              }
            });
          })(e),
          children: [s.emoji, " ", s.label, " ", t]
        }, e);
      }), a.jsxs("button", {
        className: "mp-filter-pill mp-filter-important " + (d ? "active" : ""),
        onClick: () => p(e => !e),
        title: c("memoryPalaceFilterImportant") || "只看 ★★★★ 以上的重要記憶",
        children: ["★ ", c("memoryPalaceFilterImportant") || "只看重要"]
      })]
    }), H.length > 0 && a.jsxs("div", {
      className: "mp-timeline-topic-filters",
      children: [a.jsx("button", {
        className: "mp-topic-chip " + (u ? "" : "active"),
        onClick: () => h(null),
        children: c("memoryPalaceAllTopics") || "全部主題"
      }), H.map(e => a.jsx("button", {
        className: "mp-topic-chip " + (u === e ? "active" : ""),
        onClick: () => h(u === e ? null : e),
        children: e
      }, e))]
    }), B.length >= 2 && a.jsxs("div", {
      className: "mp-month-jump",
      children: [a.jsx("span", {
        className: "mp-month-jump-label",
        children: "快速跳轉"
      }), a.jsx("div", {
        className: "mp-month-jump-scroller",
        children: B.map(e => a.jsxs("button", {
          className: "mp-month-jump-pill",
          onClick: () => (e => {
            var a;
            const t = (a = D.current) == null ? undefined : a.querySelector(`[data-month-key="${e}"]`);
            if (t) {
              t.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              t.classList.add("mp-month-highlight");
              setTimeout(() => t.classList.remove("mp-month-highlight"), 1500);
            }
          })(e.key),
          children: [e.label.replace(/年|月/g, e => e === "年" ? "/" : ""), a.jsx("span", {
            className: "mp-month-jump-count",
            children: e.entries.length
          })]
        }, e.key))
      })]
    }), E.length === 0 ? a.jsx("div", {
      className: "mp-card-empty",
      children: t.length === 0 ? c("memoryPalaceTimelineEmpty") || "還沒有任何故事記錄" : c("memoryPalaceNoMatchFilter") || "目前篩選沒有結果"
    }) : a.jsx("div", {
      className: "mp-timeline",
      children: B.map(e => a.jsxs("div", {
        className: "mp-timeline-group",
        "data-month-key": e.key,
        children: [a.jsxs("div", {
          className: "mp-timeline-month",
          children: [e.label, a.jsxs("span", {
            className: "mp-timeline-month-count",
            children: ["· ", e.entries.length, " 條"]
          })]
        }), e.entries.map(e => {
          var t;
          var s;
          var n;
          const l = k[e.source || "online"] || k.online;
          const o = y.has(e.id);
          const m = v === e.id;
          const d = e.summary || e.content || "";
          const p = d.slice(0, 80) + (d.length > 80 ? "..." : "");
          const x = y.has(e.id);
          return a.jsxs("div", {
            "data-summary-id": e.id,
            className: `mp-summary-card ${e.disputed ? "disputed" : ""} ${e.isBigSummary ? "big-summary" : ""} ${S && x ? "is-opened" : ""}`,
            onClick: () => {
              if (S && !m) {
                G(e.id);
              }
            },
            style: S ? {
              cursor: "pointer"
            } : undefined,
            children: [a.jsxs("div", {
              className: "mp-summary-meta",
              children: [a.jsx("span", {
                className: "mp-summary-source",
                children: l.emoji
              }), a.jsx("span", {
                className: "mp-summary-date",
                children: T(e) || $(e.date)
              }), e.messageCount && a.jsxs("span", {
                className: "mp-summary-msg-count",
                children: ["· ", e.messageCount, " 訊息"]
              }), (() => {
                const t = F(e);
                if (t) {
                  return a.jsxs(a.Fragment, {
                    children: [a.jsx("span", {
                      className: `mp-summary-stars imp-${t.maxImportance}`,
                      title: `重要度 ${t.maxImportance}/5`,
                      children: M(t.maxImportance)
                    }), t.emotion && (() => {
                      const e = t.emotion;
                      const s = `emotion${e.charAt(0).toUpperCase()}${e.slice(1)}`;
                      const n = c(s);
                      const l = n === s ? e : n;
                      const r = c("memoryPalaceEmotionLabel");
                      const i = r === "memoryPalaceEmotionLabel" ? "情緒" : r;
                      return a.jsx("span", {
                        className: `mp-summary-emotion emo-${e}`,
                        title: `${i}: ${l}`,
                        children: C[e] || "🫧"
                      });
                    })()]
                  });
                } else {
                  return null;
                }
              })(), e.disputed && a.jsx("span", {
                className: "mp-disputed-badge",
                children: c("memoryPalaceDisputed") || "已標記"
              }), e.isBigSummary && a.jsxs(a.Fragment, {
                children: [a.jsx("span", {
                  className: "mp-big-summary-badge",
                  children: e.summaryLevel && e.summaryLevel > 2 ? `Lv${e.summaryLevel} ${c("memoryPalaceBigSummary") || "大總結"}` : c("memoryPalaceBigSummary") || "大總結"
                }), ((t = e.childSummaryIds) == null ? undefined : t.length) > 0 && a.jsxs("span", {
                  className: "mp-summary-msg-count",
                  title: c("memoryPalaceChildCount") || "子摘要數",
                  children: ["· ", e.childSummaryIds.length, " ", c("memoryPalaceChildUnit") || "條子摘要"]
                })]
              })]
            }), m ? a.jsxs("div", {
              className: "mp-summary-edit",
              children: [a.jsx("label", {
                className: "mp-edit-label",
                children: "內容總結"
              }), a.jsx("textarea", {
                className: "mp-summary-textarea",
                value: b,
                onChange: e => N(e.target.value),
                rows: 6,
                autoFocus: true
              }), a.jsxs("div", {
                className: "mp-edit-grid",
                children: [a.jsxs("div", {
                  className: "mp-edit-field",
                  children: [a.jsx("label", {
                    className: "mp-edit-label",
                    children: "重要度（1-5）"
                  }), a.jsx("div", {
                    className: "mp-edit-stars",
                    children: [1, 2, 3, 4, 5].map(e => a.jsx("button", {
                      type: "button",
                      className: "mp-edit-star " + (((L == null ? undefined : L.importance) || 2) >= e ? "on" : ""),
                      onClick: () => z(a => ({
                        ...a,
                        importance: e
                      })),
                      children: "★"
                    }, e))
                  })]
                }), a.jsxs("div", {
                  className: "mp-edit-field",
                  children: [a.jsx("label", {
                    className: "mp-edit-label",
                    children: c("memoryPalaceEmotionLabel") === "memoryPalaceEmotionLabel" ? "情緒" : c("memoryPalaceEmotionLabel")
                  }), a.jsx("select", {
                    className: "mp-edit-select",
                    value: (L == null ? undefined : L.emotion) || "neutral",
                    onChange: e => z(a => ({
                      ...a,
                      emotion: e.target.value
                    })),
                    children: Object.entries(C).map(([e, t]) => {
                      const s = `emotion${e.charAt(0).toUpperCase()}${e.slice(1)}`;
                      const n = c(s);
                      const l = n === s ? e : n;
                      return a.jsx("option", {
                        value: e,
                        children: t ? `${t} ${l}` : l
                      }, e);
                    })
                  })]
                })]
              }), a.jsxs("div", {
                className: "mp-edit-field",
                children: [a.jsx("label", {
                  className: "mp-edit-label",
                  children: "主題 tag（逗號或換行分隔）"
                }), a.jsx("input", {
                  className: "mp-edit-input",
                  value: (L == null ? undefined : L.topics) || "",
                  onChange: e => z(a => ({
                    ...a,
                    topics: e.target.value
                  })),
                  placeholder: "例：感情, 日常, 計畫"
                })]
              }), a.jsxs("div", {
                className: "mp-edit-field",
                children: [a.jsx("label", {
                  className: "mp-edit-label",
                  children: "關鍵詞（逗號或換行分隔）"
                }), a.jsx("input", {
                  className: "mp-edit-input",
                  value: (L == null ? undefined : L.keywords) || "",
                  onChange: e => z(a => ({
                    ...a,
                    keywords: e.target.value
                  })),
                  placeholder: "例：玩火, 香水, 約會"
                })]
              }), a.jsxs("div", {
                className: "mp-edit-grid",
                children: [a.jsxs("div", {
                  className: "mp-edit-field",
                  children: [a.jsx("label", {
                    className: "mp-edit-label",
                    children: "事件起始"
                  }), a.jsx("input", {
                    className: "mp-edit-input",
                    value: (L == null ? undefined : L.dateRangeStart) || "",
                    onChange: e => z(a => ({
                      ...a,
                      dateRangeStart: e.target.value
                    })),
                    placeholder: "3月20日 01:57"
                  })]
                }), a.jsxs("div", {
                  className: "mp-edit-field",
                  children: [a.jsx("label", {
                    className: "mp-edit-label",
                    children: "事件結束"
                  }), a.jsx("input", {
                    className: "mp-edit-input",
                    value: (L == null ? undefined : L.dateRangeEnd) || "",
                    onChange: e => z(a => ({
                      ...a,
                      dateRangeEnd: e.target.value
                    })),
                    placeholder: "4月19日 01:31"
                  })]
                })]
              }), a.jsxs("div", {
                className: "mp-edit-field",
                children: [a.jsxs("label", {
                  className: "mp-edit-label",
                  children: ["懸念 Open Threads", a.jsx("span", {
                    className: "mp-edit-hint",
                    children: "每行一條，格式：type|status|text（type: event/feeling；status: active/mentioned/resting/faded）"
                  })]
                }), a.jsx("textarea", {
                  className: "mp-edit-textarea",
                  value: (L == null ? undefined : L.openThreads) || "",
                  onChange: e => z(a => ({
                    ...a,
                    openThreads: e.target.value
                  })),
                  rows: 3,
                  placeholder: "feeling|active|砂金何時會兌現獨一無二的驚喜"
                })]
              }), a.jsxs("div", {
                className: "mp-edit-field",
                children: [a.jsxs("label", {
                  className: "mp-edit-label",
                  children: ["建立的事實（每行一條）", a.jsx("span", {
                    className: "mp-edit-hint",
                    children: "會同步到永久記憶 userFacts"
                  })]
                }), a.jsx("textarea", {
                  className: "mp-edit-textarea",
                  value: (L == null ? undefined : L.evidencedFacts) || "",
                  onChange: e => z(a => ({
                    ...a,
                    evidencedFacts: e.target.value
                  })),
                  rows: 3,
                  placeholder: "開拓者是女巫\n開拓者是狼人"
                })]
              }), a.jsxs("div", {
                className: "mp-summary-edit-actions",
                children: [a.jsx("button", {
                  className: "mp-btn",
                  onClick: U,
                  children: c("save") || "儲存全部"
                }), a.jsx("button", {
                  className: "mp-btn mp-btn-secondary",
                  onClick: V,
                  children: c("cancel") || "取消"
                })]
              })]
            }) : a.jsxs(a.Fragment, {
              children: [a.jsx("div", {
                className: "mp-summary-text",
                children: o ? d : p
              }), (() => {
                const t = F(e);
                if (t && t.topics.length !== 0) {
                  return a.jsx("div", {
                    className: "mp-summary-topics",
                    children: t.topics.map((e, t) => a.jsx("button", {
                      className: "mp-topic-pill " + (u === e ? "active" : ""),
                      onClick: a => {
                        a.stopPropagation();
                        h(u === e ? null : e);
                      },
                      children: e
                    }, t))
                  });
                } else {
                  return null;
                }
              })(), (() => {
                const t = (e.openThreads || []).filter(e => e.status !== "faded");
                if (t.length === 0) {
                  return null;
                } else {
                  return a.jsx("div", {
                    className: "mp-summary-threads",
                    children: t.map((e, t) => a.jsxs("div", {
                      className: `mp-thread-item status-${e.status}`,
                      children: [a.jsx("span", {
                        className: "mp-thread-icon",
                        children: e.type === "event" ? "📅" : "💭"
                      }), a.jsx("span", {
                        className: "mp-thread-text",
                        children: e.text
                      }), e.status !== "active" && a.jsx("span", {
                        className: "mp-thread-status",
                        children: e.status === "mentioned" ? "已提" : e.status === "resting" ? "冷卻" : e.status
                      })]
                    }, t))
                  });
                }
              })(), o && (!e._eventVersion || e._eventVersion < 4) && e.anchors && e.anchors.length > 0 && a.jsx("div", {
                className: "mp-summary-anchors",
                children: e.anchors.map((e, t) => a.jsxs("div", {
                  className: "mp-anchor-item",
                  children: [a.jsx("span", {
                    className: `mp-anchor-stars imp-${e.importance}`,
                    children: M(e.importance)
                  }), a.jsx("span", {
                    className: "mp-anchor-text",
                    children: e.text
                  })]
                }, t))
              }), o && Array.isArray(e.evidencedFacts) && e.evidencedFacts.length > 0 && a.jsxs("div", {
                className: "mp-summary-evidenced",
                children: [a.jsx("div", {
                  className: "mp-evidenced-label",
                  children: "📎 建立的事實:"
                }), e.evidencedFacts.map((e, t) => a.jsxs("div", {
                  className: "mp-evidenced-item",
                  children: ["· ", e]
                }, t))]
              }), o && e.keywords && e.keywords.length > 0 && a.jsx("div", {
                className: "mp-summary-keywords",
                children: e.keywords.map((e, t) => a.jsx("span", {
                  className: "mp-keyword-pill",
                  children: e
                }, t))
              }), a.jsxs("div", {
                className: "mp-summary-actions",
                children: [d.length > 80 && a.jsx("button", {
                  className: "mp-btn-link",
                  onClick: () => G(e.id),
                  children: o ? c("collapse") || "收起" : c("expand") || "展開"
                }), e.isBigSummary && ((s = e.childSummaryIds) == null ? undefined : s.length) > 0 && a.jsx("button", {
                  className: "mp-btn-link mp-btn-children",
                  onClick: () => {
                    a = e.id;
                    j(e => {
                      const t = new Set(e);
                      if (t.has(a)) {
                        t.delete(a);
                      } else {
                        t.add(a);
                      }
                      return t;
                    });
                    return;
                    var a;
                  },
                  children: g.has(e.id) ? c("memoryPalaceHideChildren") || "收起子摘要" : c("memoryPalaceShowChildren") || `展開 ${e.childSummaryIds.length} 條子摘要`
                }), a.jsx("button", {
                  className: "mp-btn-link",
                  onClick: () => (e => {
                    var a;
                    var t;
                    f(e.id);
                    N(e.summary || e.content || "");
                    z({
                      importance: e.importance || 2,
                      emotion: e.emotion || "neutral",
                      topics: (e.topics || []).join(", "),
                      keywords: (e.keywords || []).join(", "),
                      openThreads: (e.openThreads || []).map(e => `${e.type || "feeling"}|${e.status || "active"}|${e.text || ""}`).join("\n"),
                      evidencedFacts: (e.evidencedFacts || []).join("\n"),
                      dateRangeStart: ((a = e.dateRange) == null ? undefined : a.start) || "",
                      dateRangeEnd: ((t = e.dateRange) == null ? undefined : t.end) || ""
                    });
                  })(e),
                  children: c("edit") || "編輯"
                }), a.jsx("button", {
                  className: "mp-btn-link",
                  onClick: () => (e => {
                    if (window.confirm(c("memoryPalaceDisputeConfirm") || "這條記憶有不準確的地方？")) {
                      if (r != null) {
                        r(e.id, {
                          disputed: !e.disputed,
                          disputedAt: e.disputed ? null : Date.now()
                        });
                      }
                    }
                  })(e),
                  children: e.disputed ? c("memoryPalaceUndispute") || "取消標記" : c("memoryPalaceDispute") || "標記不準確"
                }), a.jsx("button", {
                  className: "mp-btn-link mp-btn-danger",
                  onClick: () => (e => {
                    if (window.confirm(c("memoryPalaceDeleteSummaryConfirm") || "確定刪除此條記憶？此操作無法復原。")) {
                      if (i != null) {
                        i(e.id);
                      }
                    }
                  })(e),
                  children: c("delete") || "刪除"
                })]
              }), e.isBigSummary && g.has(e.id) && ((n = e.childSummaryIds) == null ? undefined : n.length) > 0 && a.jsx("div", {
                className: "mp-children-list",
                children: e.childSummaryIds.map(e => {
                  const t = R.get(e);
                  if (!t) {
                    return a.jsx("div", {
                      className: "mp-child-item mp-child-missing",
                      children: a.jsxs("span", {
                        children: ["⚠️ ", c("memoryPalaceChildMissing") || "子摘要已刪除", " (id: ", e, ")"]
                      })
                    }, e);
                  }
                  const s = k[t.source || "online"] || k.online;
                  return a.jsxs("div", {
                    className: "mp-child-item",
                    children: [a.jsxs("div", {
                      className: "mp-child-meta",
                      children: [a.jsx("span", {
                        children: s.emoji
                      }), a.jsx("span", {
                        children: $(t.date)
                      }), t.messageCount && a.jsxs("span", {
                        children: ["· ", t.messageCount]
                      })]
                    }), a.jsx("div", {
                      className: "mp-child-text",
                      children: t.summary || t.content
                    })]
                  }, e);
                })
              })]
            })]
          }, e.id);
        })]
      }, e.key))
    })]
  });
};
function D(e) {
  if (typeof e == "string") {
    return e;
  } else if (e && typeof e == "object" && e.content) {
    return e.content;
  } else {
    return "";
  }
}
function R(e) {
  requestAnimationFrame(() => {
    var a;
    if (!e) {
      return;
    }
    const t = e.closest(".mp-chamber-scroll");
    if (!t) {
      return;
    }
    const s = e.getBoundingClientRect();
    const n = ((a = window.visualViewport) == null ? undefined : a.height) ?? window.innerHeight;
    if (s.bottom > n - 24) {
      t.scrollBy({
        top: s.bottom - n + 40,
        behavior: "smooth"
      });
    }
  });
}
const E = ({
  facts: t = [],
  t: s,
  onUpdate: n
}) => {
  const l = s || (e => e);
  const [r, i] = e.useState(() => {
    const e = sessionStorage.getItem("mp_user_facts_editingIdx");
    if (e) {
      return Number(e);
    } else {
      return -1;
    }
  });
  const [c, o] = e.useState(() => sessionStorage.getItem("mp_user_facts_editingText") || "");
  const [m, d] = e.useState(() => sessionStorage.getItem("mp_user_facts_newFact") || "");
  const [p, u] = e.useState(() => sessionStorage.getItem("mp_user_facts_isAdding") === "true");
  e.useEffect(() => {
    sessionStorage.setItem("mp_user_facts_editingIdx", r);
    sessionStorage.setItem("mp_user_facts_editingText", c);
    sessionStorage.setItem("mp_user_facts_newFact", m);
    sessionStorage.setItem("mp_user_facts_isAdding", p);
  }, [r, c, m, p]);
  e.useEffect(() => {
    const e = window.visualViewport;
    if (!e) {
      return;
    }
    const a = () => {
      const a = Math.max(0, window.innerHeight - e.height - e.offsetTop);
      document.documentElement.style.setProperty("--mp-kb-h", `${a}px`);
      const t = document.activeElement;
      if ((t == null ? undefined : t.tagName) === "TEXTAREA") {
        R(t);
      }
    };
    e.addEventListener("resize", a);
    a();
    return () => e.removeEventListener("resize", a);
  }, []);
  const h = () => {
    const e = c.trim();
    if (!e) {
      y();
      return;
    }
    const a = t.map((a, t) => t !== r ? a : typeof a == "string" ? {
      content: e,
      confidence: 1,
      evidencedBy: []
    } : {
      ...a,
      content: e
    });
    n(a);
    i(-1);
    o("");
  };
  const y = () => {
    i(-1);
    o("");
  };
  const x = () => {
    const e = m.trim();
    if (!e) {
      u(false);
      d("");
      return;
    }
    n([...t, {
      content: e,
      confidence: 1,
      evidencedBy: []
    }]);
    d("");
    u(false);
  };
  return a.jsxs("div", {
    className: "mp-card",
    children: [a.jsxs("div", {
      className: "mp-card-header",
      children: [a.jsx("span", {
        className: "mp-card-icon",
        children: "📌"
      }), a.jsx("h2", {
        className: "mp-card-title",
        children: l("memoryPalaceUserFacts") || "記住的事實"
      }), a.jsx("span", {
        className: "mp-card-count",
        children: t.length
      })]
    }), t.length !== 0 || p ? a.jsx("div", {
      className: "mp-fact-list",
      children: t.map((e, s) => a.jsx("div", {
        className: "mp-fact-item",
        children: r === s ? a.jsxs(a.Fragment, {
          children: [a.jsx("textarea", {
            className: "mp-fact-input mp-fact-input-multi",
            value: c,
            onChange: e => {
              o(e.target.value);
              R(e.target);
            },
            onKeyDown: e => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                h();
              }
              if (e.key === "Escape") {
                y();
              }
            },
            rows: 3,
            autoFocus: true
          }), a.jsx("button", {
            className: "mp-btn-icon mp-btn-confirm",
            onClick: h,
            "aria-label": "確認",
            children: "✓"
          }), a.jsx("button", {
            className: "mp-btn-icon mp-btn-cancel",
            onClick: y,
            "aria-label": "取消",
            children: "×"
          })]
        }) : a.jsxs(a.Fragment, {
          children: [a.jsxs("span", {
            className: "mp-fact-text",
            children: ["• ", D(e), (() => {
              const t = function (e) {
                if (typeof e == "string") {
                  return 1;
                } else if (e && typeof e == "object" && typeof e.confidence == "number") {
                  return e.confidence;
                } else {
                  return 1;
                }
              }(e);
              if (t >= 0.95) {
                return null;
              } else {
                return a.jsx("span", {
                  className: "mp-fact-confidence",
                  title: `可信度 ${Math.round(t * 100)}%`,
                  style: {
                    marginLeft: 6,
                    fontSize: 10,
                    color: t < 0.5 ? "#c84545" : t < 0.75 ? "#d97848" : "#8a7468"
                  },
                  children: t < 0.3 ? "（低信心）" : t < 0.5 ? "（可能不準）" : t < 0.75 ? "（部分存疑）" : ""
                });
              }
            })()]
          }), a.jsx("button", {
            className: "mp-btn-icon",
            onClick: () => (e => {
              i(e);
              o(D(t[e]));
            })(s),
            "aria-label": "編輯",
            children: "✏️"
          }), a.jsx("button", {
            className: "mp-btn-icon",
            onClick: () => (e => {
              const a = D(t[e]);
              if (!window.confirm(l("memoryPalaceDeleteFactConfirm") || `確定刪除「${a}」？`)) {
                return;
              }
              const s = t.filter((a, t) => t !== e);
              n(s);
            })(s),
            "aria-label": "刪除",
            children: "🗑"
          })]
        })
      }, s))
    }) : a.jsx("div", {
      className: "mp-card-empty",
      children: l("memoryPalaceFactsEmpty") || "還沒有永久記憶"
    }), p ? a.jsxs("div", {
      className: "mp-fact-item mp-fact-adding",
      children: [a.jsx("textarea", {
        className: "mp-fact-input mp-fact-input-multi",
        placeholder: l("memoryPalaceFactPlaceholder") || "輸入新記憶...",
        value: m,
        onChange: e => {
          d(e.target.value);
          R(e.target);
        },
        onKeyDown: e => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            x();
          }
          if (e.key === "Escape") {
            u(false);
            d("");
          }
        },
        rows: 3,
        autoFocus: true
      }), a.jsx("button", {
        className: "mp-btn-icon mp-btn-confirm",
        onClick: x,
        children: "✓"
      }), a.jsx("button", {
        className: "mp-btn-icon mp-btn-cancel",
        onClick: () => {
          u(false);
          d("");
        },
        children: "×"
      })]
    }) : a.jsxs("button", {
      className: "mp-add-btn",
      onClick: () => u(true),
      children: ["+ ", l("memoryPalaceAddFact") || "新增事實"]
    })]
  });
};
function H(e) {
  if (!e) {
    return "";
  }
  try {
    const a = new Date(e);
    if (isNaN(a.getTime())) {
      return "";
    }
    const t = a.getFullYear();
    const s = String(a.getMonth() + 1).padStart(2, "0");
    const n = String(a.getDate()).padStart(2, "0");
    return `${t}/${s}/${n} ${String(a.getHours()).padStart(2, "0")}:${String(a.getMinutes()).padStart(2, "0")}`;
  } catch {
    return "";
  }
}
const B = ({
  model: t,
  characterName: s,
  t: n,
  onRebuild: l,
  onClear: r,
  onSave: i,
  rebuilding: c = false
}) => {
  const o = n || (e => e);
  const [m, d] = e.useState(false);
  const [p, u] = e.useState(false);
  const [h, y] = e.useState("");
  const x = (t == null ? undefined : t.content) || "";
  const g = (t == null ? undefined : t.version) || 0;
  const j = t == null ? undefined : t.generatedAt;
  const v = (t == null ? undefined : t.basedOnSummaryCount) || 0;
  const f = !x;
  const b = x.length > 180 ? x.slice(0, 180) + "..." : x;
  const N = () => {
    y(x);
    u(true);
    d(true);
  };
  const S = () => {
    u(false);
    y("");
  };
  return a.jsxs("div", {
    className: "mp-card mp-mental-card",
    children: [a.jsxs("div", {
      className: "mp-card-header",
      children: [a.jsx("span", {
        className: "mp-card-icon",
        children: "🧠"
      }), a.jsx("h2", {
        className: "mp-card-title",
        children: s ? (o("memoryPalaceMentalModelTitle") || `${s} 眼中的你`).replace("{charName}", s) : o("memoryPalaceMentalModelTitleGeneric") || "眼中的你"
      }), g > 0 && a.jsxs("span", {
        className: "mp-card-count",
        title: `基於 ${v} 條記憶生成`,
        children: ["v", g]
      })]
    }), f && !p ? a.jsxs("div", {
      className: "mp-card-empty",
      children: [o("memoryPalaceMentalModelEmpty") || "尚未形成穩定理解 — 隨著互動累積，這裡會出現角色對你的內心獨白", a.jsxs("div", {
        style: {
          marginTop: 10,
          display: "flex",
          gap: 8,
          justifyContent: "center",
          flexWrap: "wrap"
        },
        children: [l && a.jsx("button", {
          className: "mp-btn",
          onClick: l,
          disabled: c,
          children: c ? o("memoryPalaceMentalModelRebuilding") || "生成中..." : o("memoryPalaceMentalModelGenerate") || "手動生成"
        }), i && a.jsx("button", {
          className: "mp-btn mp-btn-secondary",
          onClick: N,
          children: o("memoryPalaceMentalModelManualWrite") || "手動撰寫"
        })]
      })]
    }) : p ? a.jsxs(a.Fragment, {
      children: [a.jsx("textarea", {
        className: "mp-mental-edit",
        value: h,
        onChange: e => y(e.target.value),
        placeholder: o("memoryPalaceMentalModelPlaceholder") || `以「我」為第一人稱，寫下 ${s || "TA"} 眼中的你…`,
        rows: 10,
        autoFocus: true
      }), a.jsxs("div", {
        className: "mp-mental-actions",
        children: [a.jsx("button", {
          className: "mp-btn",
          onClick: () => {
            const e = h.trim();
            if (e) {
              if (i != null) {
                i(e);
              }
              u(false);
              y("");
            } else {
              S();
            }
          },
          children: o("save") || "儲存"
        }), a.jsx("button", {
          className: "mp-btn mp-btn-secondary",
          onClick: S,
          children: o("cancel") || "取消"
        })]
      })]
    }) : a.jsxs(a.Fragment, {
      children: [a.jsx("div", {
        className: "mp-mental-content",
        children: m ? x : b
      }), j && a.jsxs("div", {
        className: "mp-mental-meta",
        children: [a.jsxs("span", {
          children: [o("memoryPalaceMentalModelGeneratedAt") || "生成於", ": ", H(j)]
        }), a.jsxs("span", {
          children: ["· ", v, " ", o("memoryPalaceEntries") || "條記憶"]
        })]
      }), a.jsxs("div", {
        className: "mp-mental-actions",
        children: [x.length > 180 && a.jsx("button", {
          className: "mp-btn-link",
          onClick: () => d(e => !e),
          children: m ? o("collapse") || "收起" : o("expand") || "展開全文"
        }), i && a.jsx("button", {
          className: "mp-btn-link",
          onClick: N,
          children: o("edit") || "編輯"
        }), l && a.jsx("button", {
          className: "mp-btn-link",
          onClick: l,
          disabled: c,
          children: c ? o("memoryPalaceMentalModelRebuilding") || "重建中..." : o("memoryPalaceMentalModelRebuild") || "重建"
        }), r && a.jsx("button", {
          className: "mp-btn-link mp-btn-danger",
          onClick: r,
          children: o("delete") || "刪除"
        })]
      })]
    })]
  });
};
function O(e) {
  if (!e) {
    return "";
  }
  try {
    const a = new Date(e);
    if (isNaN(a.getTime())) {
      return "";
    }
    const t = a.getFullYear();
    const s = String(a.getMonth() + 1).padStart(2, "0");
    const n = String(a.getDate()).padStart(2, "0");
    return `${t}/${s}/${n} ${String(a.getHours()).padStart(2, "0")}:${String(a.getMinutes()).padStart(2, "0")}`;
  } catch {
    return "";
  }
}
const G = ({
  selfStance: t,
  characterName: s,
  t: n,
  onRebuild: l,
  onClear: r,
  onSave: i,
  rebuilding: c = false
}) => {
  const o = n || (e => e);
  const [m, d] = e.useState(false);
  const [p, u] = e.useState("");
  const h = (t == null ? undefined : t.text) || "";
  const y = (t == null ? undefined : t.version) || 0;
  const x = t == null ? undefined : t.updatedAt;
  const g = !h;
  const j = () => {
    u(h);
    d(true);
  };
  const v = () => {
    d(false);
    u("");
  };
  return a.jsxs("div", {
    className: "mp-card mp-mental-card",
    children: [a.jsxs("div", {
      className: "mp-card-header",
      children: [a.jsx("span", {
        className: "mp-card-icon",
        children: "🌱"
      }), a.jsx("h2", {
        className: "mp-card-title",
        children: s ? (o("memoryPalaceSelfStanceTitle") || `${s} 看著自己`).replace("{charName}", s) : o("memoryPalaceSelfStanceTitleGeneric") || "自我印記"
      }), y > 0 && a.jsxs("span", {
        className: "mp-card-count",
        children: ["v", y]
      })]
    }), g && !m ? a.jsxs("div", {
      className: "mp-card-empty",
      children: [o("memoryPalaceSelfStanceEmpty") || "還沒形成自我印記 — 隨著互動累積，TA 會在心裡記下「自己變成了什麼樣子」", a.jsxs("div", {
        style: {
          marginTop: 10,
          display: "flex",
          gap: 8,
          justifyContent: "center",
          flexWrap: "wrap"
        },
        children: [l && a.jsx("button", {
          className: "mp-btn",
          onClick: l,
          disabled: c,
          children: c ? o("memoryPalaceSelfStanceRebuilding") || "生成中..." : o("memoryPalaceSelfStanceGenerate") || "手動生成"
        }), i && a.jsx("button", {
          className: "mp-btn mp-btn-secondary",
          onClick: j,
          children: o("memoryPalaceSelfStanceManualWrite") || "手動撰寫"
        })]
      })]
    }) : m ? a.jsxs(a.Fragment, {
      children: [a.jsx("textarea", {
        className: "mp-mental-edit",
        value: p,
        onChange: e => u(e.target.value),
        placeholder: o("memoryPalaceSelfStancePlaceholder") || "用「依然 / 還是 X，但對 TA…」這樣的句式，1-2 句、第一人稱",
        rows: 4,
        autoFocus: true
      }), a.jsxs("div", {
        className: "mp-mental-actions",
        children: [a.jsx("button", {
          className: "mp-btn",
          onClick: () => {
            const e = p.trim();
            if (e) {
              if (i != null) {
                i(e);
              }
              d(false);
              u("");
            } else {
              v();
            }
          },
          children: o("save") || "儲存"
        }), a.jsx("button", {
          className: "mp-btn mp-btn-secondary",
          onClick: v,
          children: o("cancel") || "取消"
        })]
      })]
    }) : a.jsxs(a.Fragment, {
      children: [a.jsx("div", {
        className: "mp-mental-content",
        children: h
      }), x && a.jsx("div", {
        className: "mp-mental-meta",
        children: a.jsxs("span", {
          children: [o("memoryPalaceSelfStanceUpdatedAt") || "更新於", ": ", O(x)]
        })
      }), a.jsxs("div", {
        className: "mp-mental-actions",
        children: [i && a.jsx("button", {
          className: "mp-btn-link",
          onClick: j,
          children: o("edit") || "編輯"
        }), l && a.jsx("button", {
          className: "mp-btn-link",
          onClick: l,
          disabled: c,
          children: c ? o("memoryPalaceSelfStanceRebuilding") || "重建中..." : o("memoryPalaceSelfStanceRebuild") || "重建"
        }), r && a.jsx("button", {
          className: "mp-btn-link mp-btn-danger",
          onClick: r,
          children: o("delete") || "刪除"
        })]
      })]
    })]
  });
};
function L(e) {
  if (!e) {
    return "";
  }
  try {
    const a = new Date(e);
    if (isNaN(a.getTime())) {
      return "";
    }
    return `${String(a.getMonth() + 1).padStart(2, "0")}/${String(a.getDate()).padStart(2, "0")}`;
  } catch {
    return "";
  }
}
const z = {
  relational: {
    icon: "💞",
    labelKey: "memoryPalaceGrowthTypeRelational",
    fallback: "關係"
  },
  self: {
    icon: "🌿",
    labelKey: "memoryPalaceGrowthTypeSelf",
    fallback: "自我"
  }
};
const U = ({
  trail: t = [],
  characterName: s,
  t: n,
  onUpdate: l,
  onClear: r,
  enableRelationalGrowth: i = true,
  enableSelfGrowth: c = true
}) => {
  const o = n || (e => e);
  const [m, d] = e.useState("all");
  const [p, u] = e.useState(null);
  const [h, y] = e.useState("");
  const [x, g] = e.useState("relational");
  const [j, v] = e.useState(false);
  const [f, b] = e.useState("");
  const [N, S] = e.useState("relational");
  const w = Array.isArray(t) ? t.map(e => ({
    ...e,
    type: (e == null ? undefined : e.type) === "self" ? "self" : "relational"
  })) : [];
  const k = e.useMemo(() => {
    const e = {
      all: w.length,
      relational: 0,
      self: 0
    };
    for (const a of w) {
      e[a.type]++;
    }
    return e;
  }, [w]);
  const C = e.useMemo(() => m === "all" ? w : w.filter(e => e.type === m), [w, m]);
  const P = () => {
    u(null);
    y("");
    g("relational");
  };
  const I = () => {
    v(false);
    b("");
    S("relational");
  };
  const A = ({
    type: e
  }) => {
    const t = z[e] || z.relational;
    return a.jsxs("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 3,
        fontSize: 10,
        padding: "1px 6px",
        borderRadius: 8,
        background: e === "self" ? "rgba(120,180,120,0.15)" : "rgba(180,120,160,0.15)",
        border: "1px solid " + (e === "self" ? "rgba(120,180,120,0.4)" : "rgba(180,120,160,0.4)")
      },
      children: [a.jsx("span", {
        children: t.icon
      }), a.jsx("span", {
        children: o(t.labelKey) || t.fallback
      })]
    });
  };
  const T = ({
    value: e,
    onChange: t
  }) => {
    const s = [...(i ? [{
      key: "relational"
    }] : []), ...(c ? [{
      key: "self"
    }] : [])];
    if (s.length <= 1) {
      return null;
    } else {
      return a.jsx("div", {
        style: {
          display: "flex",
          gap: 4,
          marginBottom: 4
        },
        children: s.map(s => a.jsxs("button", {
          type: "button",
          onClick: () => t(s.key),
          style: {
            fontSize: 11,
            padding: "2px 8px",
            borderRadius: 4,
            border: "1px solid currentColor",
            opacity: e === s.key ? 1 : 0.55,
            background: e === s.key ? "rgba(127,127,127,0.15)" : "transparent",
            cursor: "pointer"
          },
          children: [z[s.key].icon, " ", o(z[s.key].labelKey) || z[s.key].fallback]
        }, s.key))
      });
    }
  };
  return a.jsxs("div", {
    className: "mp-card",
    children: [a.jsxs("div", {
      className: "mp-card-header",
      children: [a.jsx("span", {
        className: "mp-card-icon",
        children: "🌿"
      }), a.jsx("h2", {
        className: "mp-card-title",
        children: s ? (o("memoryPalaceGrowthTitle") || `${s} 的成長軌跡`).replace("{charName}", s) : o("memoryPalaceGrowthTitleGeneric") || "成長軌跡"
      }), a.jsx("span", {
        className: "mp-card-count",
        children: k.all
      })]
    }), a.jsx("div", {
      className: "mp-card-desc",
      style: {
        fontSize: "12px",
        opacity: 0.7,
        marginBottom: 10
      },
      children: o("memoryPalaceGrowthDesc") || "🛡️ 軟表層變化：對你的細微行為差異／TA 自身的興趣與習慣 — 核心人設永遠不變。"
    }), a.jsx("div", {
      style: {
        display: "flex",
        gap: 6,
        marginBottom: 10,
        flexWrap: "wrap"
      },
      children: [{
        key: "all",
        label: o("memoryPalaceGrowthFilterAll") || "全部"
      }, ...(i || k.relational > 0 ? [{
        key: "relational",
        label: `${z.relational.icon} ${o("memoryPalaceGrowthTypeRelational") || "關係"}`
      }] : []), ...(c || k.self > 0 ? [{
        key: "self",
        label: `${z.self.icon} ${o("memoryPalaceGrowthTypeSelf") || "自我"}`
      }] : [])].map(e => a.jsxs("button", {
        onClick: () => d(e.key),
        style: {
          fontSize: 12,
          padding: "3px 10px",
          borderRadius: 12,
          border: "1px solid currentColor",
          background: m === e.key ? "rgba(127,127,127,0.15)" : "transparent",
          opacity: m === e.key ? 1 : 0.6,
          cursor: "pointer"
        },
        children: [e.label, " ", a.jsxs("span", {
          style: {
            fontSize: 10,
            opacity: 0.7
          },
          children: ["(", k[e.key], ")"]
        })]
      }, e.key))
    }), a.jsxs("div", {
      style: {
        display: "flex",
        gap: 8,
        marginBottom: 12,
        flexWrap: "wrap"
      },
      children: [!j && a.jsxs("button", {
        className: "mp-btn-link",
        onClick: () => {
          v(true);
          b("");
          S(m === "self" ? "self" : m === "relational" || i ? "relational" : c ? "self" : "relational");
        },
        children: ["+ ", o("memoryPalaceGrowthAdd") || "新增一條"]
      }), w.length > 0 && a.jsx("button", {
        className: "mp-btn-link mp-btn-danger",
        onClick: () => {
          if (w.length !== 0 && window.confirm(o("memoryPalaceGrowthConfirmClear") || "清空全部成長軌跡？此操作無法復原。")) {
            if (r != null) {
              r();
            }
          }
        },
        children: o("memoryPalaceGrowthClearAll") || "清空全部"
      })]
    }), j && a.jsxs("div", {
      style: {
        marginBottom: 12,
        padding: 8,
        border: "1px dashed currentColor",
        borderRadius: 6,
        opacity: 0.85
      },
      children: [a.jsx(T, {
        value: N,
        onChange: S
      }), a.jsx("textarea", {
        className: "mp-mental-edit",
        value: f,
        onChange: e => b(e.target.value),
        placeholder: N === "self" ? o("memoryPalaceGrowthPlaceholderSelf") || "寫一條 TA 自己的興趣／習慣／短期狀態變化（25-60 字，第一人稱，不可重大人生決定）" : o("memoryPalaceGrowthPlaceholderRelational") || "寫一條 TA 對你出現的細微行為差異（25-60 字，第一人稱）",
        rows: 3,
        autoFocus: true,
        maxLength: 200
      }), a.jsxs("div", {
        className: "mp-mental-actions",
        style: {
          marginTop: 6
        },
        children: [a.jsx("button", {
          className: "mp-btn",
          onClick: () => {
            const e = f.trim();
            if (!e || e.length < 3) {
              I();
              return;
            }
            const a = {
              id: Date.now(),
              text: e,
              type: N === "self" ? "self" : "relational",
              createdAt: new Date().toISOString(),
              basedOnEventId: null
            };
            if (l != null) {
              l([a, ...w]);
            }
            I();
          },
          children: o("save") || "儲存"
        }), a.jsx("button", {
          className: "mp-btn mp-btn-secondary",
          onClick: I,
          children: o("cancel") || "取消"
        })]
      })]
    }), C.length !== 0 || j ? a.jsx("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 6
      },
      children: C.map(e => a.jsx("li", {
        style: {
          padding: "8px 10px",
          borderLeft: "3px solid " + (e.type === "self" ? "rgba(120,180,120,0.6)" : "rgba(180,120,160,0.6)"),
          opacity: p === e.id ? 1 : 0.92,
          background: "rgba(127,127,127,0.06)",
          borderRadius: 4
        },
        children: p === e.id ? a.jsxs(a.Fragment, {
          children: [a.jsx(T, {
            value: x,
            onChange: g
          }), a.jsx("textarea", {
            className: "mp-mental-edit",
            value: h,
            onChange: e => y(e.target.value),
            rows: 3,
            maxLength: 200,
            autoFocus: true
          }), a.jsxs("div", {
            className: "mp-mental-actions",
            style: {
              marginTop: 4
            },
            children: [a.jsx("button", {
              className: "mp-btn",
              onClick: () => (e => {
                const a = h.trim();
                if (!a || a === e.text && x === e.type) {
                  P();
                  return;
                }
                const t = w.map(t => t.id === e.id ? {
                  ...t,
                  text: a,
                  type: x
                } : t);
                if (l != null) {
                  l(t);
                }
                P();
              })(e),
              children: o("save") || "儲存"
            }), a.jsx("button", {
              className: "mp-btn mp-btn-secondary",
              onClick: P,
              children: o("cancel") || "取消"
            })]
          })]
        }) : a.jsxs(a.Fragment, {
          children: [a.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 3
            },
            children: [a.jsx(A, {
              type: e.type
            }), a.jsx("span", {
              style: {
                flex: 1
              }
            })]
          }), a.jsx("div", {
            style: {
              fontSize: 14,
              lineHeight: 1.55
            },
            children: e.text
          }), a.jsxs("div", {
            style: {
              display: "flex",
              gap: 8,
              marginTop: 4,
              alignItems: "center",
              fontSize: 11,
              opacity: 0.6
            },
            children: [a.jsx("span", {
              children: L(e.createdAt)
            }), a.jsx("span", {
              style: {
                flex: 1
              }
            }), a.jsx("button", {
              className: "mp-btn-link",
              style: {
                fontSize: 11
              },
              onClick: () => (e => {
                u(e.id);
                y(e.text || "");
                g(e.type || "relational");
              })(e),
              children: o("edit") || "編輯"
            }), a.jsx("button", {
              className: "mp-btn-link mp-btn-danger",
              style: {
                fontSize: 11
              },
              onClick: () => (e => {
                if (!window.confirm(o("memoryPalaceGrowthConfirmDelete") || "刪除這條成長軌跡？")) {
                  return;
                }
                const a = w.filter(a => a.id !== e.id);
                if (l != null) {
                  l(a);
                }
              })(e),
              children: o("delete") || "刪除"
            })]
          })]
        })
      }, e.id))
    }) : a.jsx("div", {
      className: "mp-card-empty",
      children: m === "all" ? o("memoryPalaceGrowthEmpty") || "尚未累積任何成長軌跡。打開總結後 AI 會在每次摘要時自動抽出。" : o("memoryPalaceGrowthEmptyFiltered") || "此分類下沒有條目。"
    })]
  });
};
const V = {
  active: {
    label: "待提",
    color: "#c84545"
  },
  mentioned: {
    label: "提過 1 次",
    color: "#d97848"
  },
  resting: {
    label: "已問過",
    color: "#8a7468"
  }
};
const q = {
  event: {
    emoji: "📅",
    label: "事件"
  },
  feeling: {
    emoji: "💭",
    label: "感受"
  }
};
const K = ({
  followUps: e = [],
  t: t,
  onResolve: s
}) => {
  const n = t || (e => e);
  if (e && e.length !== 0) {
    return a.jsxs("div", {
      className: "mp-card mp-followups-card",
      children: [a.jsxs("div", {
        className: "mp-card-header",
        children: [a.jsx("span", {
          className: "mp-card-icon",
          children: "💭"
        }), a.jsx("h2", {
          className: "mp-card-title",
          children: n("memoryPalaceFollowUps") || "還在意的事"
        }), a.jsx("span", {
          className: "mp-card-count",
          children: e.length
        })]
      }), a.jsx("div", {
        className: "mp-followup-list",
        children: e.map(e => {
          const t = V[e.status] || V.active;
          const l = q[e.type] || q.feeling;
          const r = typeof e.shownCount == "number" && e.maxShown ? `${e.shownCount}/${e.maxShown}` : null;
          return a.jsxs("div", {
            className: `mp-followup-item status-${e.status}`,
            children: [a.jsxs("div", {
              className: "mp-followup-main",
              children: [a.jsx("span", {
                className: "mp-followup-type-tag",
                children: l.emoji
              }), a.jsx("span", {
                className: "mp-followup-text",
                children: e.content
              })]
            }), a.jsxs("div", {
              className: "mp-followup-meta",
              children: [a.jsx("span", {
                className: "mp-followup-status",
                style: {
                  color: t.color
                },
                children: t.label
              }), r && a.jsxs("span", {
                className: "mp-followup-count",
                children: ["· ", r]
              }), a.jsx("button", {
                className: "mp-btn-link",
                onClick: () => s == null ? undefined : s(e.summaryId),
                children: n("memoryPalaceResolved") || "標記已解決"
              })]
            })]
          }, e.summaryId);
        })
      })]
    });
  } else {
    return null;
  }
};
const W = e => {
  try {
    const a = new Date(e);
    const t = a.getFullYear();
    return `${t}.${String(a.getMonth() + 1).padStart(2, "0")}.${String(a.getDate()).padStart(2, "0")}`;
  } catch {
    return "—";
  }
};
const Y = ({
  userId: t,
  charId: i,
  scrollToSummaryId: c,
  t: y,
  onBack: N
}) => {
  const [S, w] = e.useState(null);
  const [k, C] = e.useState(null);
  const [P, I] = e.useState(true);
  const [A, T] = e.useState(() => sessionStorage.getItem("mp_tab_v5") || "chronicles");
  const $ = e => {
    T(e);
    sessionStorage.setItem("mp_tab_v5", e);
  };
  const M = e.useRef(false);
  const F = e.useRef(0);
  const D = e.useRef(null);
  const R = e.useRef(null);
  const H = e.useCallback(async () => {
    if (!t || !i) {
      return;
    }
    const e = !M.current;
    if (e) {
      I(true);
    }
    try {
      const e = String(i);
      let a = await l.get(e).catch(() => null);
      if (!a) {
        const t = Number(e);
        if (!isNaN(t)) {
          a = await l.get(t).catch(() => null);
        }
      }
      const [s, c] = await Promise.all([n.get(t, e).catch(() => null), r.get(t, e).catch(() => null)]);
      const o = (c == null ? undefined : c.partnerAvatar) || (a == null ? undefined : a.avatar) || (a == null ? undefined : a.image) || null;
      w({
        ...(a || {}),
        avatar: o
      });
      C(s);
      M.current = true;
    } catch (a) {
      console.error("[MemoryPalace] 載入失敗:", a);
    } finally {
      if (e) {
        I(false);
      }
    }
  }, [t, i]);
  e.useEffect(() => {
    H();
  }, [H]);
  e.useEffect(() => {
    if (t && i) {
      return s(e => {
        if (e.userId === t && String(e.characterId) === String(i)) {
          setTimeout(() => {
            if (!(Date.now() - F.current < 1000)) {
              H();
            }
          }, 0);
        }
      });
    }
  }, [t, i, H]);
  const O = (k == null ? undefined : k.userFacts) || [];
  const L = (k == null ? undefined : k.summaryHistory) || [];
  const z = e.useMemo(() => L.filter(e => (e == null ? undefined : e.source) !== "forum" && (e == null ? undefined : e.source) !== "moment"), [L]);
  const V = e.useMemo(() => z.filter(e => !e.mergedIntoBigSummary).sort((e, a) => (a.id || 0) - (e.id || 0)), [z]);
  const q = function (e) {
    if (e) {
      if (e.stance) {
        return {
          content: e.stance.text || "",
          generatedAt: e.stance.updatedAt,
          version: e.stance.version || 1,
          basedOnSummaryCount: (e.summaryHistory || []).length
        };
      } else {
        return e.mentalModel || null;
      }
    } else {
      return null;
    }
  }(k);
  const Y = e.useMemo(() => function (e) {
    if (!Array.isArray(e)) {
      return [];
    }
    const a = [];
    for (const t of e) {
      const e = Array.isArray(t.openThreads) ? t.openThreads : [];
      for (const s of e) {
        if (s && s.status !== "faded") {
          a.push({
            summaryId: t.id,
            content: s.text,
            type: s.type,
            status: s.status,
            shownCount: s.shownCount || 0,
            maxShown: s.maxShown || 1
          });
        }
      }
    }
    return a;
  }(z), [z]);
  const J = V.length;
  const X = O.length;
  const Z = Y.length;
  const Q = e => typeof e == "string" ? e : (e == null ? undefined : e.content) || "";
  const ee = e.useMemo(() => {
    const e = new Set(O.map(e => Q(e).trim()).filter(Boolean));
    const a = new Map();
    for (const t of z) {
      const s = Array.isArray(t == null ? undefined : t.evidencedFacts) ? t.evidencedFacts : [];
      for (const n of s) {
        const s = String(n || "").trim();
        if (s && !e.has(s)) {
          if (!a.has(s)) {
            a.set(s, {
              content: s,
              sourceIds: []
            });
          }
          a.get(s).sourceIds.push(t.id);
        }
      }
    }
    return [...a.values()];
  }, [O, z]);
  const ae = ({
    userFacts: e = null
  } = {}) => {
    if (t && i) {
      if (e) {
        R.current = e;
      }
      if (D.current) {
        clearTimeout(D.current);
      }
      D.current = setTimeout(async () => {
        D.current = null;
        const e = R.current;
        R.current = null;
        try {
          await v(t, i);
          if (e) {
            await f(t, i, e);
          }
        } catch (a) {
          console.warn("[MemoryPalace] alt sync failed:", a);
        }
      }, 800);
    }
  };
  e.useEffect(() => () => {
    if (D.current) {
      clearTimeout(D.current);
      D.current = null;
      const e = R.current;
      R.current = null;
      v(t, i).catch(() => {});
      if (e) {
        f(t, i, e).catch(() => {});
      }
    }
  }, [t, i]);
  const te = (e, a) => {
    const t = new Set(a.map(e => String(e).trim()).filter(Boolean));
    if (t.size === 0) {
      return e;
    } else {
      return e.map(e => {
        const a = Array.isArray(e == null ? undefined : e.evidencedFacts) ? e.evidencedFacts : null;
        if (!a || a.length === 0) {
          return e;
        }
        const s = a.filter(e => !t.has(String(e || "").trim()));
        if (s.length === a.length) {
          return e;
        } else {
          return {
            ...e,
            evidencedFacts: s
          };
        }
      });
    }
  };
  const se = async e => {
    if (!t || !i) {
      return;
    }
    F.current = Date.now();
    const a = (await n.get(t, i)) || {};
    const s = new Set((a.userFacts || []).map(e => Q(e).trim()).filter(Boolean));
    const l = new Set(e.map(e => Q(e).trim()).filter(Boolean));
    const r = [...s].filter(e => !l.has(e));
    const c = r.length > 0 ? te(a.summaryHistory || [], r) : a.summaryHistory || [];
    F.current = Date.now();
    await n.put(t, i, {
      ...a,
      userId: t,
      characterId: String(i),
      userFacts: e,
      summaryHistory: c
    });
    C(a => ({
      ...(a || {}),
      userFacts: e,
      summaryHistory: c
    }));
    ae({
      userFacts: e
    });
  };
  const ne = async e => {
    if (!t || !i || !e.length) {
      return;
    }
    F.current = Date.now();
    const a = (await n.get(t, i)) || {};
    const s = a.userFacts || [];
    const l = new Set(s.map(e => Q(e).trim()));
    const r = e.map(e => String(e).trim()).filter(e => e && !l.has(e)).map(e => ({
      content: e,
      confidence: 0.75,
      evidencedBy: []
    }));
    if (r.length === 0) {
      return;
    }
    const c = [...r, ...s];
    F.current = Date.now();
    await n.put(t, i, {
      ...a,
      userId: t,
      characterId: String(i),
      userFacts: c
    });
    C(e => ({
      ...(e || {}),
      userFacts: c
    }));
    ae({
      userFacts: c
    });
  };
  const {
    language: le
  } = o();
  const {
    currentProfileUser: re
  } = m();
  const [ie, ce] = e.useState(false);
  const [oe, me] = e.useState(false);
  const [de, pe] = e.useState(null);
  const [ue, he] = e.useState(false);
  const ye = ({
    summary: e,
    keywords: a,
    date: t,
    sessionName: s,
    title: n,
    evidencedFacts: l,
    idOffset: r = 0
  }) => {
    const i = (t || "").split("T")[0];
    return {
      _eventVersion: 4,
      id: Date.now() + r,
      date: t,
      summary: e,
      content: e,
      ...(n ? {
        title: n
      } : {}),
      startMessageIndex: 0,
      lastMessageIndex: 0,
      messageCount: 0,
      dateRange: {
        start: i,
        end: i
      },
      source: "online",
      keywords: Array.isArray(a) ? a : [],
      topics: [],
      openThreads: [],
      evidencedFacts: Array.isArray(l) ? l : [],
      obsoleteFacts: [],
      isManual: true,
      ...(s ? {
        sessionId: `manual_${Date.now()}`,
        sessionName: s
      } : {})
    };
  };
  const xe = async () => {
    if (t && i && S && !ie) {
      ce(true);
      try {
        const e = u(await h());
        if (!e.mainApiUrl) {
          return alert(y("memoryPalaceAlertNoApi") || "尚未設定 API");
        }
        const a = (await n.get(t, i)) || {};
        const s = a.summaryHistory || [];
        if (s.length === 0) {
          return alert(y("memoryPalaceAlertNoMemory") || "還沒有記憶可供總結");
        }
        const l = await g({
          characterName: S.name,
          userName: re == null ? undefined : re.name,
          characterPersonality: S.description || "",
          userFacts: a.userFacts || [],
          summaryHistory: s,
          restingFollowUps: [],
          previousModel: q,
          apiSettings: e,
          language: le
        });
        if (l) {
          const e = a.stance;
          const s = Array.isArray(a.stanceHistory) ? a.stanceHistory : [];
          const r = e && e.text ? [{
            text: e.text,
            version: e.version || 1,
            updatedAt: e.updatedAt,
            basedOnEventId: e.basedOnEventId,
            basedOnSummaryCount: (a.summaryHistory || []).length
          }, ...s].slice(0, 10) : s;
          F.current = Date.now();
          await n.updateMentalModel(t, i, l);
          const c = (await n.get(t, i)) || {};
          F.current = Date.now();
          await n.put(t, i, {
            ...c,
            userId: t,
            characterId: String(i),
            stanceHistory: r
          });
          pe(null);
          await H();
          ae();
        }
      } catch (e) {
        alert(e.message);
      } finally {
        ce(false);
      }
    }
  };
  const ge = (k == null ? undefined : k.stanceRebuildInterval) || 1;
  const je = async e => {
    if (!t || !i) {
      return;
    }
    const a = Math.max(1, Math.min(20, Number(e) || 1));
    F.current = Date.now();
    const s = (await n.get(t, i)) || {};
    F.current = Date.now();
    await n.put(t, i, {
      ...s,
      userId: t,
      characterId: String(i),
      stanceRebuildInterval: a
    });
    C(e => ({
      ...(e || {}),
      stanceRebuildInterval: a
    }));
  };
  const ve = async e => {
    if (!t || !i || !e) {
      return;
    }
    F.current = Date.now();
    const a = (await n.get(t, i)) || {};
    const s = a.stance;
    const l = Array.isArray(a.stanceHistory) ? a.stanceHistory : [];
    const r = s && s.text && s.text !== e ? [{
      text: s.text,
      version: s.version || 1,
      updatedAt: s.updatedAt,
      basedOnEventId: s.basedOnEventId,
      basedOnSummaryCount: (a.summaryHistory || []).length
    }, ...l].slice(0, 10) : l;
    const c = {
      text: e,
      updatedAt: new Date().toISOString(),
      basedOnEventId: (s == null ? undefined : s.basedOnEventId) || null,
      version: ((s == null ? undefined : s.version) || 0) + 1
    };
    F.current = Date.now();
    await n.put(t, i, {
      ...a,
      userId: t,
      characterId: String(i),
      stance: c,
      stanceHistory: r
    });
    await H();
    ae();
  };
  const fe = async () => {
    if (t && i && window.confirm(y("memoryPalaceConfirmClearSeal") || "確定清除內心印記？（會一併清空所有歷史版本）")) {
      F.current = Date.now();
      await n.clearMentalModel(t, i);
      pe(null);
      await H();
    }
  };
  const be = !!((k == null ? undefined : k.enableRelationalGrowth) ?? (k == null ? undefined : k.enableGrowthTrail));
  const Ne = !!(k == null ? undefined : k.enableSelfGrowth);
  const Se = be || Ne;
  const we = (k == null ? undefined : k.selfStance) || null;
  const ke = e.useMemo(() => [...(Array.isArray(k == null ? undefined : k.growthTrail) ? k.growthTrail : [])].map(e => ({
    ...e,
    type: (e == null ? undefined : e.type) === "self" ? "self" : "relational"
  })).sort((e, a) => (a.id || 0) - (e.id || 0)), [k == null ? undefined : k.growthTrail]);
  const Ce = (k == null ? undefined : k.selfStanceRebuildInterval) || 5;
  const [Pe, Ie] = e.useState(false);
  const Ae = async e => {
    if (!t || !i) {
      return;
    }
    const a = Math.max(1, Math.min(20, Number(e) || 1));
    F.current = Date.now();
    await n.setSelfStanceRebuildInterval(t, i, a);
    C(e => ({
      ...(e || {}),
      selfStanceRebuildInterval: a
    }));
  };
  const Te = async () => {
    if (t && i && S && !Pe) {
      Ie(true);
      try {
        const e = u(await h());
        if (!e.mainApiUrl) {
          return alert(y("memoryPalaceAlertNoApi") || "尚未設定 API");
        }
        const a = (await n.get(t, i)) || {};
        const s = await j({
          characterName: S.name,
          userName: (re == null ? undefined : re.name) || "",
          characterPersonality: S.description || S.personality || S.intro || "",
          growthTrail: a.growthTrail || [],
          summaryHistory: a.summaryHistory || [],
          previousSelfStance: a.selfStance || null,
          apiSettings: e,
          language: le
        });
        if (s) {
          F.current = Date.now();
          await n.updateSelfStance(t, i, s);
          await H();
          ae();
        }
      } catch (e) {
        alert(e.message);
      } finally {
        Ie(false);
      }
    }
  };
  const $e = async e => {
    if (!t || !i || !e) {
      return;
    }
    const a = k == null ? undefined : k.selfStance;
    const s = {
      text: e.trim(),
      updatedAt: new Date().toISOString(),
      basedOnEventId: (a == null ? undefined : a.basedOnEventId) || null,
      version: ((a == null ? undefined : a.version) || 0) + 1
    };
    F.current = Date.now();
    await n.updateSelfStance(t, i, s);
    await H();
  };
  const Me = async () => {
    if (t && i && window.confirm(y("memoryPalaceConfirmClearSelfStance") || "確定清除自我印記？")) {
      F.current = Date.now();
      await n.clearSelfStance(t, i);
      await H();
    }
  };
  const Fe = async e => {
    if (t && i) {
      F.current = Date.now();
      await n.replaceGrowthTrail(t, i, e);
      C(a => ({
        ...(a || {}),
        growthTrail: e
      }));
    }
  };
  const _e = async () => {
    if (t && i) {
      F.current = Date.now();
      await n.replaceGrowthTrail(t, i, []);
      C(e => ({
        ...(e || {}),
        growthTrail: []
      }));
    }
  };
  if (P) {
    return a.jsx("div", {
      className: "mp-chamber",
      children: a.jsx("div", {
        className: "mp-chamber-loading",
        children: y("memoryPalaceOpeningChamber") || "OPENING · CHAMBER"
      })
    });
  }
  const De = ((S == null ? undefined : S.name) || "?")[0];
  const Re = V.slice(0, 4);
  const Ee = O.slice(0, 4);
  return a.jsxs("div", {
    className: "mp-chamber",
    children: [a.jsxs("header", {
      className: "mp-chamber-topbar",
      children: [a.jsxs("button", {
        className: "mp-btn-leave-inner",
        onClick: N,
        children: [a.jsx("span", {
          className: "mp-back-arrow",
          children: "←"
        }), a.jsx("span", {
          children: y("memoryPalaceToCorridor") || "走廊"
        })]
      }), a.jsxs("div", {
        className: "mp-door-plaque",
        children: [a.jsx("span", {
          className: "mp-plaque-deco",
          children: "❖"
        }), a.jsxs("div", {
          children: [a.jsx("div", {
            className: "mp-plaque-eyebrow",
            children: "ROOM OF"
          }), a.jsx("div", {
            className: "mp-plaque-name",
            children: S == null ? undefined : S.name
          })]
        }), a.jsx("span", {
          className: "mp-plaque-deco",
          children: "❖"
        })]
      })]
    }), a.jsxs("div", {
      className: "mp-chamber-scroll",
      children: [a.jsxs("div", {
        className: "mp-room-scene",
        children: [a.jsx("div", {
          className: "mp-ceiling"
        }), a.jsx("div", {
          className: "mp-wall-back"
        }), a.jsx("div", {
          className: "mp-wall-left"
        }), a.jsx("div", {
          className: "mp-wall-right"
        }), a.jsx("div", {
          className: "mp-floor"
        }), a.jsx("div", {
          className: "mp-wall-gallery",
          children: Re.length === 0 ? a.jsx("div", {
            className: "mp-wall-empty",
            children: y("memoryPalaceWallEmpty") || "牆上空無一物"
          }) : Re.map((e, t) => {
            const s = e.summary || e.content || "";
            return a.jsxs("button", {
              className: `mp-wall-frame mp-wall-frame-${t}`,
              onClick: () => $("chronicles"),
              title: s.slice(0, 80),
              children: [a.jsxs("div", {
                className: "mp-wall-frame-inner",
                children: [a.jsx("div", {
                  className: "mp-wall-frame-date",
                  children: W(e.createdAt || e.id)
                }), a.jsxs("div", {
                  className: "mp-wall-frame-snippet",
                  children: [s.slice(0, 48), "…"]
                })]
              }), a.jsxs("div", {
                className: "mp-wall-frame-plaque",
                children: ["№ ", String(V.length - t).padStart(2, "0")]
              })]
            }, e.id);
          })
        }), a.jsxs("div", {
          className: "mp-shelf",
          onClick: () => $("tokens"),
          title: (y("memoryPalaceViewAllTokens") || "查看全部 {n} 個碎片").replace("{n}", X),
          role: "button",
          children: [a.jsxs("div", {
            className: "mp-shelf-label",
            children: ["TOKENS · ", X]
          }), a.jsxs("div", {
            className: "mp-shelf-row mp-shelf-row-top",
            children: [Ee.slice(0, 2).map((e, t) => a.jsxs("button", {
              className: "mp-jar",
              onClick: () => $("tokens"),
              title: Q(e),
              children: [a.jsx("span", {
                className: "mp-jar-cap"
              }), a.jsx("span", {
                className: "mp-jar-body",
                children: a.jsx("span", {
                  className: "mp-jar-label",
                  children: Q(e).slice(0, 5)
                })
              })]
            }, t)), Ee.length < 2 && Array.from({
              length: 2 - Ee.length
            }).map((e, t) => a.jsx("div", {
              className: "mp-jar mp-jar-empty"
            }, "e" + t))]
          }), a.jsx("div", {
            className: "mp-shelf-plank"
          }), a.jsxs("div", {
            className: "mp-shelf-row mp-shelf-row-bot",
            children: [Ee.slice(2, 4).map((e, t) => a.jsxs("button", {
              className: "mp-jar",
              onClick: () => $("tokens"),
              title: Q(e),
              children: [a.jsx("span", {
                className: "mp-jar-cap"
              }), a.jsx("span", {
                className: "mp-jar-body",
                children: a.jsx("span", {
                  className: "mp-jar-label",
                  children: Q(e).slice(0, 5)
                })
              })]
            }, t)), Ee.length - 2 < 2 && Array.from({
              length: 2 - Math.max(0, Ee.length - 2)
            }).map((e, t) => a.jsx("div", {
              className: "mp-jar mp-jar-empty"
            }, "e2" + t))]
          }), a.jsx("div", {
            className: "mp-shelf-plank"
          })]
        }), a.jsxs("div", {
          className: "mp-wall-portrait",
          onClick: () => $("seal"),
          children: [a.jsx("div", {
            className: "mp-wall-portrait-frame",
            children: (S == null ? undefined : S.avatar) ? a.jsx("img", {
              decoding: "async",
              src: S.avatar,
              alt: S.name
            }) : a.jsx("span", {
              children: De
            })
          }), a.jsx("div", {
            className: "mp-wall-portrait-plaque",
            children: S == null ? undefined : S.name
          })]
        }), a.jsxs("div", {
          className: "mp-pedestal " + (q ? "is-lit" : ""),
          onClick: () => $("seal"),
          children: [a.jsx("div", {
            className: "mp-pedestal-top"
          }), a.jsx("div", {
            className: "mp-pedestal-shaft"
          }), a.jsxs("div", {
            className: "mp-orb",
            children: [a.jsx("div", {
              className: "mp-orb-glow"
            }), a.jsx("div", {
              className: "mp-orb-core",
              children: q ? "✦" : "○"
            })]
          }), a.jsx("div", {
            className: "mp-pedestal-label",
            children: q ? y("memoryPalaceSealInner") || "內心印記" : y("memoryPalaceSealNotCast") || "未鑄"
          })]
        }), a.jsxs("div", {
          className: "mp-scene-overlay-stats",
          children: [a.jsxs("div", {
            children: [a.jsx("b", {
              children: J
            }), a.jsx("span", {
              children: y("memoryPalaceStatStories") || "故事"
            })]
          }), a.jsxs("div", {
            children: [a.jsx("b", {
              children: X
            }), a.jsx("span", {
              children: y("memoryPalaceStatTokens") || "碎片"
            })]
          }), a.jsxs("div", {
            children: [a.jsx("b", {
              children: q ? "✦" : "–"
            }), a.jsx("span", {
              children: y("memoryPalaceStatSeal") || "印記"
            })]
          })]
        })]
      }), a.jsxs("nav", {
        className: "mp-tab-menu",
        children: [a.jsxs("button", {
          className: "mp-tab " + (A === "chronicles" ? "active" : ""),
          onClick: () => $("chronicles"),
          children: [a.jsx("span", {
            className: "mp-tab-num",
            children: "Ⅰ"
          }), a.jsx("span", {
            className: "mp-tab-label",
            children: y("memoryPalaceTabChronicles") || "牆上的畫"
          }), a.jsx("span", {
            className: "mp-tab-count",
            children: J
          })]
        }), a.jsxs("button", {
          className: "mp-tab " + (A === "tokens" ? "active" : ""),
          onClick: () => $("tokens"),
          children: [a.jsx("span", {
            className: "mp-tab-num",
            children: "Ⅱ"
          }), a.jsx("span", {
            className: "mp-tab-label",
            children: y("memoryPalaceTabTokens") || "櫃中罐子"
          }), a.jsx("span", {
            className: "mp-tab-count",
            children: X
          })]
        }), a.jsxs("button", {
          className: "mp-tab " + (A === "seal" ? "active" : ""),
          onClick: () => $("seal"),
          children: [a.jsx("span", {
            className: "mp-tab-num",
            children: "Ⅲ"
          }), a.jsx("span", {
            className: "mp-tab-label",
            children: y("memoryPalaceTabSeal") || "內心印記"
          }), a.jsx("span", {
            className: "mp-tab-count",
            children: q ? `v${q.version || 1}` : "–"
          })]
        })]
      }), Z > 0 && a.jsxs("button", {
        className: "mp-followup-strip " + (A === "followups" ? "active" : ""),
        onClick: () => $(A === "followups" ? "chronicles" : "followups"),
        children: [a.jsx("span", {
          className: "mp-followup-strip-icon",
          children: "💭"
        }), a.jsx("span", {
          className: "mp-followup-strip-text",
          dangerouslySetInnerHTML: {
            __html: (y("memoryPalaceFollowupStripText") || "TA 還掛念著 <b>{n}</b> 件事").replace("{n}", Z)
          }
        }), a.jsx("span", {
          className: "mp-followup-strip-arrow",
          children: A === "followups" ? y("memoryPalaceFollowupStripBack") || "↩ 返回" : y("memoryPalaceFollowupStripView") || "查看 →"
        })]
      }), A === "chronicles" && a.jsxs("section", {
        className: "mp-detail-section",
        children: [a.jsxs("div", {
          className: "mp-detail-head",
          children: [a.jsx("div", {
            className: "mp-detail-num",
            children: "Ⅰ"
          }), a.jsxs("div", {
            children: [a.jsx("h2", {
              children: y("memoryPalaceSectionChroniclesTitle") || "牆上的畫 · Chronicles"
            }), a.jsx("p", {
              children: y("memoryPalaceSectionChroniclesDesc") || "月份分組 · 來源篩選 · 重要度 · 情緒 · 全部功能齊備。"
            })]
          }), a.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "6px"
            },
            children: [a.jsx("div", {
              className: "mp-detail-count",
              children: J
            }), a.jsxs("button", {
              className: "mp-btn-link",
              onClick: () => he(true),
              title: y("btnManualAddSummary") || "手動添加",
              children: ["✒ ", y("memoryPalaceInscribe") || "親手刻入"]
            })]
          })]
        }), a.jsx(_, {
          timeline: V,
          allSummaries: z,
          scrollToSummaryId: c,
          t: y,
          onUpdate: async (e, a) => {
            if (!t || !i) {
              return;
            }
            F.current = Date.now();
            const s = (await n.get(t, i)) || {};
            const l = (s.summaryHistory || []).map(t => t.id === e ? {
              ...t,
              ...a
            } : t);
            F.current = Date.now();
            await n.put(t, i, {
              ...s,
              userId: t,
              characterId: String(i),
              summaryHistory: l
            });
            C(e => ({
              ...(e || {}),
              summaryHistory: l
            }));
            ae();
          },
          onDelete: async e => {
            var a;
            if (!t || !i) {
              return;
            }
            F.current = Date.now();
            const s = (await n.get(t, i)) || {};
            const l = (s.summaryHistory || []).find(a => a.id === e);
            const r = (s.summaryHistory || []).filter(a => a.id !== e);
            F.current = Date.now();
            await n.put(t, i, {
              ...s,
              userId: t,
              characterId: String(i),
              summaryHistory: r
            });
            C(e => ({
              ...(e || {}),
              summaryHistory: r
            }));
            ae();
            if (l && (l.source === "multi-scene" || l.source === "spectate")) {
              const e = l.castKey || "";
              const s = l.sessionId ? String(l.sessionId) : null;
              if (s) {
                try {
                  const e = await d.getBySession(t, s);
                  for (const a of e || []) {
                    await d.deleteOne(t, s, a.id);
                  }
                  if ((e || []).length > 0) {
                    console.log(`[MemoryPalace] 級聯刪 multiSceneSessionSummaries: session=${s} 共 ${e.length} 條`);
                  }
                } catch (c) {
                  console.warn("[MemoryPalace] 級聯刪 multiSceneSessionSummaries 失敗:", c);
                }
              }
              const r = String(e).replace(/#spectate$/, "").split("|").filter(e => e && e !== String(i));
              for (const l of r) {
                try {
                  const e = await n.get(t, l);
                  if (!((a = e == null ? undefined : e.summaryHistory) == null ? undefined : a.length)) {
                    continue;
                  }
                  const r = e.summaryHistory.filter(e => e.source !== "multi-scene" && e.source !== "spectate" || !!s && String(e.sessionId) !== s);
                  if (r.length !== e.summaryHistory.length) {
                    await n.put(t, l, {
                      ...e,
                      summaryHistory: r
                    });
                    console.log(`[MemoryPalace] 級聯刪 char=${l} memory: ${e.summaryHistory.length - r.length} 條`);
                  }
                } catch (c) {
                  console.warn(`[MemoryPalace] 級聯刪 char=${l} memory 失敗:`, c);
                }
              }
            }
            if ((l == null ? undefined : l.summary) && (l == null ? undefined : l.id)) {
              try {
                const e = await p(() => import("./main-BO9xa-SQ.js").then(e => e.cq), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                if (typeof e.deleteSummaryFromMcp == "function" && (e.deleteSummaryFromMcp({
                  userId: t,
                  characterId: String(i),
                  entry: l
                }).catch(() => {}), l.source === "multi-scene" || l.source === "spectate")) {
                  const a = String(l.castKey || "").replace(/#spectate$/, "").split("|").filter(e => e && e !== String(i));
                  for (const s of a) {
                    e.deleteSummaryFromMcp({
                      userId: t,
                      characterId: s,
                      entry: l
                    }).catch(() => {});
                  }
                }
              } catch {}
            }
          }
        })]
      }), A === "tokens" && a.jsxs("section", {
        className: "mp-detail-section",
        children: [a.jsxs("div", {
          className: "mp-detail-head",
          children: [a.jsx("div", {
            className: "mp-detail-num",
            children: "Ⅱ"
          }), a.jsxs("div", {
            children: [a.jsx("h2", {
              children: y("memoryPalaceSectionTokensTitle") || "櫃中的罐子 · Tokens"
            }), a.jsx("p", {
              children: y("memoryPalaceSectionTokensDesc") || "TA 關於你收藏的每一枚小細節 · 含可信度標記。"
            })]
          }), a.jsx("div", {
            className: "mp-detail-count",
            children: X
          })]
        }), ee.length > 0 && a.jsxs("div", {
          className: "mp-pending-facts",
          children: [a.jsxs("div", {
            className: "mp-pending-head",
            children: [a.jsx("span", {
              className: "mp-pending-icon",
              children: "📎"
            }), a.jsx("div", {
              className: "mp-pending-title",
              dangerouslySetInnerHTML: {
                __html: (y("memoryPalacePendingTitle") || "故事中建立了 <b>{n}</b> 條尚未沉澱的事實").replace("{n}", ee.length)
              }
            }), a.jsx("button", {
              className: "mp-btn-link",
              onClick: () => ne(ee.map(e => e.content)),
              title: y("memoryPalacePendingImportAllTitle") || "全部沉澱到永久記憶",
              children: y("memoryPalacePendingImportAll") || "全部沉澱 →"
            })]
          }), a.jsxs("div", {
            className: "mp-pending-list",
            children: [ee.slice(0, 20).map(e => a.jsxs("div", {
              className: "mp-pending-chip",
              title: (y("memoryPalacePendingSourceTitle") || "來自 {n} 條故事").replace("{n}", e.sourceIds.length),
              children: [a.jsx("span", {
                className: "mp-pending-chip-text",
                children: e.content
              }), a.jsx("button", {
                className: "mp-pending-chip-btn add",
                onClick: () => ne([e.content]),
                title: y("memoryPalacePendingChipAddTitle") || "加入永久記憶",
                children: "+"
              }), a.jsx("button", {
                className: "mp-pending-chip-btn dismiss",
                onClick: () => (async e => {
                  if (!t || !i || !e) {
                    return;
                  }
                  if (!window.confirm((y("memoryPalaceConfirmDeleteFact") || "從所有故事中永久刪除這條事實？\n\n「{content}」\n\n此操作無法復原。").replace("{content}", e))) {
                    return;
                  }
                  F.current = Date.now();
                  const a = (await n.get(t, i)) || {};
                  const s = te(a.summaryHistory || [], [e]);
                  F.current = Date.now();
                  await n.put(t, i, {
                    ...a,
                    userId: t,
                    characterId: String(i),
                    summaryHistory: s
                  });
                  C(e => ({
                    ...(e || {}),
                    summaryHistory: s
                  }));
                  ae();
                })(e.content),
                title: y("memoryPalacePendingChipDeleteTitle") || "從所有故事中永久刪除",
                children: "✕"
              })]
            }, e.content)), ee.length > 20 && a.jsx("span", {
              className: "mp-pending-more",
              children: (y("memoryPalacePendingMore") || "… 另有 {n} 條").replace("{n}", ee.length - 20)
            })]
          })]
        }), O.length >= 2 && a.jsx("button", {
          className: "mp-btn-link",
          style: {
            marginBottom: 8
          },
          onClick: async () => {
            if (!t || !i || !S || oe) {
              return;
            }
            const e = O || [];
            if (!(e.length < 2)) {
              me(true);
              try {
                const a = u(await h());
                if (!a.mainApiUrl) {
                  alert(y("memoryPalaceAlertNoApi") || "尚未設定 API");
                  return;
                }
                const t = await x({
                  characterName: S.name,
                  userName: re == null ? undefined : re.name,
                  userFacts: e,
                  apiSettings: a,
                  language: le
                });
                if (!t) {
                  alert(y("memoryPalaceFactsConsolidateFail") || "整理失敗，請稍後再試");
                  return;
                }
                const s = e.length;
                if (!window.confirm((y("memoryPalaceFactsConsolidateConfirm") || "整理後從 {a} 條變為 {b} 條，套用？").replace("{a}", s).replace("{b}", t.length))) {
                  return;
                }
                await se(t);
              } finally {
                me(false);
              }
            }
          },
          disabled: oe,
          title: y("memoryPalaceFactsConsolidateTitle") || "AI 整理：去除重複、合併同類、剔除過期",
          children: oe ? y("memoryPalaceFactsConsolidating") || "整理中…" : y("memoryPalaceFactsConsolidate") || "✨ AI 整理事實"
        }), a.jsx(E, {
          facts: O,
          t: y,
          onUpdate: se
        })]
      }), A === "seal" && (() => {
        const e = Array.isArray(k == null ? undefined : k.stanceHistory) ? k.stanceHistory : [];
        const s = de ? {
          content: de.text,
          version: de.version,
          generatedAt: de.updatedAt,
          basedOnSummaryCount: de.basedOnSummaryCount || 0
        } : q;
        return a.jsxs("section", {
          className: "mp-detail-section mp-detail-seal",
          children: [a.jsxs("div", {
            className: "mp-detail-head",
            children: [a.jsx("div", {
              className: "mp-detail-num",
              children: "Ⅲ"
            }), a.jsxs("div", {
              children: [a.jsx("h2", {
                children: y("memoryPalaceSectionSealTitle") || "內心印記 · Core Seal"
              }), a.jsx("p", {
                children: y("memoryPalaceSectionSealDesc") || "所有記憶凝鍊成的 TA 之本質 · 支援重建與版本管理。"
              })]
            }), a.jsx("div", {
              className: "mp-detail-count",
              children: (s == null ? undefined : s.version) ? `v${s.version}` : "–"
            })]
          }), (e.length > 0 || de) && a.jsxs("div", {
            className: "mp-version-bar",
            children: [a.jsxs("span", {
              className: "mp-version-bar-label",
              children: ["📜 ", y("memoryPalaceStanceHistory") || "印記歷史"]
            }), a.jsxs("div", {
              className: "mp-version-bar-scroller",
              children: [a.jsxs("button", {
                className: "mp-version-pill " + (de ? "" : "active"),
                onClick: () => pe(null),
                children: ["v", (q == null ? undefined : q.version) || 1, " · ", y("memoryPalaceVersionCurrent") || "最新"]
              }), e.map((s, l) => a.jsxs("span", {
                className: "mp-version-pill-wrap " + (de === s ? "active" : ""),
                style: {
                  display: "inline-flex",
                  alignItems: "center"
                },
                children: [a.jsxs("button", {
                  className: "mp-version-pill " + (de === s ? "active" : ""),
                  onClick: () => pe(s),
                  title: W(s.updatedAt),
                  children: ["v", s.version || e.length - l]
                }), a.jsx("button", {
                  className: "mp-version-pill-delete",
                  onClick: a => {
                    a.stopPropagation();
                    (async e => {
                      if (t && i && e != null && window.confirm((y("memoryPalaceConfirmDeleteStanceVersion") || "刪除歷史版本 v{n}？").replace("{n}", e))) {
                        F.current = Date.now();
                        await n.deleteStanceHistoryVersion(t, i, e);
                        if (de && de.version === e) {
                          pe(null);
                        }
                        await H();
                      }
                    })(s.version || e.length - l);
                  },
                  title: y("delete") || "刪除",
                  "aria-label": y("delete") || "刪除",
                  style: {
                    marginLeft: 2,
                    padding: "0 4px",
                    fontSize: 11,
                    lineHeight: 1,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    opacity: 0.55
                  },
                  children: "✕"
                })]
              }, `v${s.version}_${l}`))]
            })]
          }), de && a.jsxs("div", {
            className: "mp-version-hint",
            children: [(y("memoryPalaceVersionViewing") || "檢視版本 v{n}").replace("{n}", de.version), " · ", W(de.updatedAt), de.basedOnSummaryCount > 0 && a.jsxs(a.Fragment, {
              children: [" · ", (y("memoryPalaceVersionBasedOn") || "基於 {n} 條記憶").replace("{n}", de.basedOnSummaryCount)]
            })]
          }), a.jsx(B, {
            model: s,
            characterName: S == null ? undefined : S.name,
            t: y,
            onRebuild: de ? null : xe,
            onClear: q && !de ? fe : null,
            onSave: de ? null : ve,
            rebuilding: ie
          }), !de && a.jsxs("div", {
            className: "mp-seal-settings",
            children: [a.jsxs("div", {
              className: "mp-seal-settings-head",
              children: [a.jsx("span", {
                className: "mp-seal-settings-icon",
                children: "⚙"
              }), a.jsx("span", {
                className: "mp-seal-settings-title",
                children: y("memoryPalaceSealSettings") || "印記生成設定"
              })]
            }), a.jsxs("div", {
              className: "mp-seal-settings-body",
              children: [a.jsx("div", {
                className: "mp-seal-settings-label",
                children: y("memoryPalaceSealIntervalLabel") || "每 N 次總結更新印記"
              }), a.jsxs("div", {
                className: "mp-seal-settings-stepper",
                children: [a.jsx("button", {
                  className: "mp-stepper-btn",
                  onClick: () => je(ge - 1),
                  disabled: ge <= 1,
                  children: "−"
                }), a.jsx("input", {
                  type: "number",
                  className: "mp-stepper-input",
                  value: ge,
                  min: 1,
                  max: 20,
                  onChange: e => je(e.target.value)
                }), a.jsx("span", {
                  className: "mp-stepper-suffix",
                  children: y("memoryPalaceSealIntervalSuffix") || "次"
                }), a.jsx("button", {
                  className: "mp-stepper-btn",
                  onClick: () => je(ge + 1),
                  disabled: ge >= 20,
                  children: "+"
                })]
              }), a.jsx("div", {
                className: "mp-seal-settings-hint",
                children: (y("memoryPalaceSealIntervalHint") || "每累積 {n} 次對話總結後，自動更新 TA 對你的印記。數字越大越穩定，越小越即時。").replace("{n}", ge)
              })]
            })]
          }), !de && a.jsxs("div", {
            className: "mp-seal-settings",
            style: {
              marginTop: 18
            },
            children: [a.jsxs("div", {
              className: "mp-seal-settings-head",
              children: [a.jsx("span", {
                className: "mp-seal-settings-icon",
                children: "🌱"
              }), a.jsx("span", {
                className: "mp-seal-settings-title",
                children: y("memoryPalaceGrowthSettings") || "角色成長軌跡"
              })]
            }), a.jsxs("div", {
              className: "mp-seal-settings-body",
              children: [a.jsx("div", {
                className: "mp-seal-settings-hint",
                style: {
                  marginBottom: 12
                },
                children: y("memoryPalaceGrowthIntro") || "🛡️ 雙軌成長：關係軌跡記錄 TA 對你的細微行為差異；自我軌跡記錄 TA 自身的興趣／習慣／短期狀態。核心人設永遠不會被覆蓋。改變人設後請手動清空。"
              }), a.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 12
                },
                children: [a.jsxs("label", {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                    userSelect: "none",
                    fontSize: 13
                  },
                  title: y("memoryPalaceGrowthRelationalHint") || "開啟後，AI 在每次摘要時抽取一條 TA「對你」浮現的細微行為差異（嚴格鎖定關係層）。",
                  children: [a.jsx("input", {
                    type: "checkbox",
                    checked: be,
                    onChange: e => (async e => {
                      if (t && i) {
                        F.current = Date.now();
                        await n.setRelationalGrowthEnabled(t, i, e);
                        C(a => ({
                          ...(a || {}),
                          enableRelationalGrowth: !!e,
                          enableGrowthTrail: undefined
                        }));
                      }
                    })(e.target.checked)
                  }), a.jsxs("span", {
                    children: ["💞 ", y("memoryPalaceGrowthRelationalLabel") || "關係成長（對你的細微行為差異）"]
                  })]
                }), a.jsxs("label", {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                    userSelect: "none",
                    fontSize: 13
                  },
                  title: y("memoryPalaceGrowthSelfHint") || "開啟後，AI 在每次摘要時抽取一條 TA 自身的興趣／習慣／短期狀態變化（軟表層，禁止重大人生決定）。",
                  children: [a.jsx("input", {
                    type: "checkbox",
                    checked: Ne,
                    onChange: e => (async e => {
                      if (t && i) {
                        F.current = Date.now();
                        await n.setSelfGrowthEnabled(t, i, e);
                        C(a => ({
                          ...(a || {}),
                          enableSelfGrowth: !!e
                        }));
                      }
                    })(e.target.checked)
                  }), a.jsxs("span", {
                    children: ["🌿 ", y("memoryPalaceGrowthSelfLabel") || "自我成長（TA 自身的軟表層變化）"]
                  })]
                })]
              }), Se && a.jsxs(a.Fragment, {
                children: [a.jsx("div", {
                  className: "mp-seal-settings-label",
                  children: y("memoryPalaceSelfStanceIntervalLabel") || "每 N 次總結更新自我印記"
                }), a.jsxs("div", {
                  className: "mp-seal-settings-stepper",
                  children: [a.jsx("button", {
                    className: "mp-stepper-btn",
                    onClick: () => Ae(Ce - 1),
                    disabled: Ce <= 1,
                    children: "−"
                  }), a.jsx("input", {
                    type: "number",
                    className: "mp-stepper-input",
                    value: Ce,
                    min: 1,
                    max: 20,
                    onChange: e => Ae(e.target.value)
                  }), a.jsx("span", {
                    className: "mp-stepper-suffix",
                    children: y("memoryPalaceSealIntervalSuffix") || "次"
                  }), a.jsx("button", {
                    className: "mp-stepper-btn",
                    onClick: () => Ae(Ce + 1),
                    disabled: Ce >= 20,
                    children: "+"
                  })]
                }), a.jsx("div", {
                  className: "mp-seal-settings-hint",
                  style: {
                    marginBottom: 16
                  },
                  children: (y("memoryPalaceSelfStanceIntervalHint") || "每累積 {n} 次摘要後，重建一次「TA 看自己」的印記。每條摘要 AI 會自動抽 0-2 條成長軌跡（搭便車，無額外 API 費用）。").replace("{n}", Ce)
                }), a.jsx("div", {
                  style: {
                    marginBottom: 14
                  },
                  children: a.jsx(G, {
                    selfStance: we,
                    characterName: S == null ? undefined : S.name,
                    t: y,
                    onRebuild: Te,
                    onSave: $e,
                    onClear: we ? Me : null,
                    rebuilding: Pe
                  })
                }), a.jsx(U, {
                  trail: ke,
                  characterName: S == null ? undefined : S.name,
                  t: y,
                  onUpdate: Fe,
                  onClear: _e,
                  enableRelationalGrowth: be,
                  enableSelfGrowth: Ne
                })]
              })]
            })]
          })]
        });
      })(), A === "followups" && Z > 0 && a.jsxs("section", {
        className: "mp-detail-section",
        children: [a.jsxs("div", {
          className: "mp-detail-head",
          children: [a.jsx("div", {
            className: "mp-detail-num",
            children: "Ⅳ"
          }), a.jsxs("div", {
            children: [a.jsx("h2", {
              children: y("memoryPalaceSectionFollowupsTitle") || "掛念 · Follow-Ups"
            }), a.jsx("p", {
              children: y("memoryPalaceSectionFollowupsDesc") || "TA 還惦記著、但還沒被解答的那些事。"
            })]
          }), a.jsx("div", {
            className: "mp-detail-count",
            children: Z
          })]
        }), a.jsx(K, {
          followUps: Y,
          t: y,
          onResolve: async e => {
            if (!t || !i) {
              return;
            }
            F.current = Date.now();
            const a = (await n.get(t, i)) || {};
            const s = (a.summaryHistory || []).map(a => {
              if (a.id !== e) {
                return a;
              }
              const t = (a.openThreads || []).map(e => ({
                ...e,
                status: "faded"
              }));
              return {
                ...a,
                openThreads: t
              };
            });
            F.current = Date.now();
            await n.put(t, i, {
              ...a,
              userId: t,
              characterId: String(i),
              summaryHistory: s
            });
            C(e => ({
              ...(e || {}),
              summaryHistory: s
            }));
            ae();
          }
        })]
      }), a.jsx("div", {
        className: "mp-scroll-end",
        children: y("memoryPalaceScrollEnd") || "— 離開房間，走廊上另一扇門等著你 —"
      })]
    }), a.jsx(b, {
      open: ue,
      onClose: () => he(false),
      onSubmit: async e => {
        if (!t || !i) {
          return;
        }
        const a = ye(e);
        F.current = Date.now();
        const s = (await n.get(t, i)) || {};
        const l = [...(s.summaryHistory || []), a];
        F.current = Date.now();
        await n.put(t, i, {
          ...s,
          userId: t,
          characterId: String(i),
          summaryHistory: l
        });
        C(e => ({
          ...(e || {}),
          summaryHistory: l
        }));
        ae();
        if (a == null ? undefined : a.summary) {
          p(() => import("./main-BO9xa-SQ.js").then(e => e.cq), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(e => {
            if (typeof e.pushSummaryToMcp == "function") {
              e.pushSummaryToMcp({
                userId: t,
                characterId: String(i),
                entry: a
              }).catch(() => {});
            }
          }).catch(() => {});
        }
        he(false);
      },
      t: y,
      enableImport: true,
      onImportSubmit: async e => {
        var a;
        if (!t || !i || !Array.isArray(e) || e.length === 0) {
          return;
        }
        const s = ((a = e[0]) == null ? undefined : a.sessionName) || "";
        const l = s ? `import_${Date.now()}` : null;
        const r = Date.now();
        const c = e.map((e, a) => {
          const t = ye({
            ...e,
            idOffset: a
          });
          t.id = r + a;
          t.isImported = true;
          if (l) {
            t.sessionId = l;
            t.sessionName = s;
          }
          return t;
        });
        F.current = Date.now();
        const o = (await n.get(t, i)) || {};
        const m = [...(o.summaryHistory || []), ...c];
        F.current = Date.now();
        await n.put(t, i, {
          ...o,
          userId: t,
          characterId: String(i),
          summaryHistory: m
        });
        C(e => ({
          ...(e || {}),
          summaryHistory: m
        }));
        ae();
        p(() => import("./main-BO9xa-SQ.js").then(e => e.cq), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(e => {
          if (typeof e.pushSummaryToMcp == "function") {
            for (const a of c) {
              if (a == null ? undefined : a.summary) {
                e.pushSummaryToMcp({
                  userId: t,
                  characterId: String(i),
                  entry: a
                }).catch(() => {});
              }
            }
          }
        }).catch(() => {});
        he(false);
      },
      characterName: (S == null ? undefined : S.name) || "",
      userName: (re == null ? undefined : re.name) || ""
    })]
  });
};
const J = () => {
  const {
    showScreen: s
  } = y();
  const {
    safeCurrentProfileUserId: n
  } = t();
  const {
    t: l
  } = o();
  const [r] = e.useState(() => N());
  const [i, c] = e.useState((r == null ? undefined : r.charId) ? String(r.charId) : null);
  const [m, d] = e.useState((r == null ? undefined : r.scrollToSummaryId) || null);
  const [p, u] = e.useState((r == null ? undefined : r.returnScreen) || null);
  const [h, x] = e.useState(!!(r == null ? undefined : r.returnHintMemoryView));
  e.useEffect(() => () => {
    Promise.resolve().then(S);
  }, []);
  const g = () => {
    if (p) {
      if (h) {
        sessionStorage.setItem("mp_reopen_memory_view", "1");
      }
      s(p);
      return;
    }
    if (i) {
      c(null);
      d(null);
    } else {
      s("home-screen");
    }
  };
  return a.jsx("div", {
    id: "memory-palace-screen",
    className: "screen active memory-palace-screen",
    children: i ? a.jsx(Y, {
      userId: n,
      charId: i,
      scrollToSummaryId: m,
      t: l,
      onBack: g
    }) : a.jsx(w, {
      userId: n,
      t: l,
      onSelect: e => c(String(e)),
      onBack: g
    })
  });
};
export { J as default };