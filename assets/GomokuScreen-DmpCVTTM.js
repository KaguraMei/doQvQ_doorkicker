import { r as e, j as r } from "./vendor-react-B2VXkTUV.js";
import { c as t, b as n, j as i } from "./native-pet-CTNtZgMA.js";
import { x as l, bs as o, X as a, d as s, af as d } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
const p = 15;
const x = () => {
  const {
    currentScreen: x,
    showScreen: c
  } = t();
  const g = x === "gomoku-screen";
  const {
    characters: h
  } = n();
  const {
    currentUser: u
  } = i();
  const [y, b] = e.useState({
    phase: "setup",
    players: [],
    board: Array(225).fill(null),
    currentPlayerIndex: 0,
    winner: null,
    winningLine: []
  });
  const [f, m] = e.useState(false);
  const [v, j] = e.useState({});
  const [F, w] = e.useState("");
  const C = e.useRef(null);
  const S = (e, r, t = 3000) => {
    const n = Date.now() + Math.random();
    j(t => {
      const i = t[e] || [];
      return {
        ...t,
        [e]: [{
          id: n,
          text: r
        }, ...i].slice(0, 2)
      };
    });
    if (t > 0) {
      setTimeout(() => {
        j(r => {
          const t = r[e] || [];
          return {
            ...r,
            [e]: t.filter(e => e.id !== n)
          };
        });
      }, t);
    }
  };
  const k = (u == null ? undefined : u.id) || (u == null ? undefined : u.uid) || "local_user";
  const E = y.players.some(e => e.id === k);
  const I = () => {
    if (F.trim() && k) {
      S(k, F.trim(), 4000);
      w("");
    }
  };
  const z = e => {
    b(r => ({
      ...r,
      players: r.players.filter(r => r.id !== e)
    }));
  };
  const A = e => {
    b(r => {
      const t = [...r.board];
      t[e] = r.currentPlayerIndex;
      const n = ((e, r, t) => {
        const n = Math.floor(r / p);
        const i = r % p;
        const l = [[1, 0], [0, 1], [1, 1], [1, -1]];
        for (let [o, a] of l) {
          let r = 1;
          let l = n + o;
          let s = i + a;
          while (l >= 0 && l < p && s >= 0 && s < p && e[l * p + s] === t) {
            r++;
            l += o;
            s += a;
          }
          l = n - o;
          s = i - a;
          while (l >= 0 && l < p && s >= 0 && s < p && e[l * p + s] === t) {
            r++;
            l -= o;
            s -= a;
          }
          if (r >= 5) {
            return true;
          }
        }
        return false;
      })(t, e, r.currentPlayerIndex);
      let i = null;
      if (n) {
        i = r.currentPlayerIndex;
      } else if (!t.includes(null)) {
        i = "draw";
      }
      return {
        ...r,
        board: t,
        winner: i,
        currentPlayerIndex: i !== null ? r.currentPlayerIndex : r.currentPlayerIndex === 0 ? 1 : 0,
        phase: i !== null ? "end" : "playing"
      };
    });
  };
  e.useEffect(() => {
    if (y.phase === "playing" && y.winner === null) {
      const e = y.players[y.currentPlayerIndex];
      if (e && e.isBot) {
        const r = ["让我想想...", "下在哪里好呢？", "嗯...", "这步有点难定", "原来你想这么走！", "嘿嘿，看我的"];
        S(e.id, r[Math.floor(Math.random() * r.length)], 2000);
        C.current = setTimeout(() => {
          const r = (e => {
            let r = [];
            let t = false;
            for (let i = 0; i < e.length; i++) {
              if (e[i] === null) {
                r.push(i);
              } else {
                t = true;
              }
            }
            if (r.length === 0) {
              return null;
            }
            if (!t) {
              return Math.floor(7.5) * p + Math.floor(7.5);
            }
            const n = r.filter(r => (r => {
              let t = Math.floor(r / p);
              let n = r % p;
              let i = 0;
              for (let l = -1; l <= 1; l++) {
                for (let r = -1; r <= 1; r++) {
                  if (l === 0 && r === 0) {
                    continue;
                  }
                  let o = t + l;
                  let a = n + r;
                  if (o >= 0 && o < p && a >= 0 && a < p && e[o * p + a] !== null) {
                    i++;
                  }
                }
              }
              return i;
            })(r) > 0);
            if (n.length > 0) {
              return n[Math.floor(Math.random() * n.length)];
            } else {
              return r[Math.floor(Math.random() * r.length)];
            }
          })(y.board, y.currentPlayerIndex);
          if (r !== null) {
            const t = ["下这里！", "该你了~", "防不胜防！", "绝妙的一手！", "到你咯", "看招！"];
            S(e.id, t[Math.floor(Math.random() * t.length)], 2500);
            A(r);
          }
        }, 1000 + Math.random() * 1500);
        return () => clearTimeout(C.current);
      }
    }
  }, [y.phase, y.currentPlayerIndex, y.winner, y.board]);
  e.useEffect(() => {
    if (y.phase === "end" && y.winner !== null) {
      if (y.winner === "draw") {
        y.players.forEach(e => {
          if (e.isBot) {
            S(e.id, "居然平局了！再来一局？", 5000);
          }
        });
      } else {
        const e = y.players[y.winner];
        const r = y.winner === 0 ? 1 : 0;
        const t = y.players[r];
        if (e && e.isBot) {
          S(e.id, "太棒了，我赢啦！", 5000);
        }
        if (t && t.isBot) {
          S(t.id, "啊，大意了，居然输了...", 5000);
        }
      }
    }
  }, [y.phase, y.winner]);
  const R = () => {
    b(e => ({
      ...e,
      phase: "setup",
      board: Array(225).fill(null),
      winner: null
    }));
  };
  if (g) {
    return r.jsxs("div", {
      id: "gomoku-screen",
      className: "screen active",
      style: {
        background: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        paddingTop: "44px",
        height: "100vh",
        boxSizing: "border-box"
      },
      children: [r.jsxs("div", {
        style: {
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          flexShrink: 0
        },
        children: [r.jsx("div", {
          onClick: () => y.phase === "playing" || y.phase === "end" ? R() : c("game-lobby-screen"),
          style: {
            cursor: "pointer",
            color: "#5E7BA8"
          },
          children: r.jsx(l, {
            size: 24
          })
        }), r.jsx("h1", {
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            margin: 0,
            color: "#5E7BA8"
          },
          children: "五子棋"
        }), r.jsx("div", {
          style: {
            width: 24
          }
        })]
      }), r.jsxs("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column"
        },
        children: [y.phase === "setup" && r.jsxs("div", {
          style: {
            padding: "24px 20px"
          },
          children: [r.jsxs("div", {
            style: {
              background: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
              borderRadius: "24px",
              padding: "32px 24px",
              marginBottom: "32px",
              textAlign: "center",
              boxShadow: "0 12px 24px rgba(142, 197, 252, 0.4)"
            },
            children: [r.jsx("h2", {
              style: {
                fontSize: "24px",
                margin: "0 0 12px 0",
                color: "#FFF",
                fontWeight: "900",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
              },
              children: "五子棋对决"
            }), r.jsx("p", {
              style: {
                fontSize: "15px",
                color: "rgba(255,255,255,0.9)",
                margin: 0
              },
              children: "选择两名玩家开始游戏，黑子先手"
            })]
          }), r.jsxs("div", {
            style: {
              display: "flex",
              gap: "12px",
              marginBottom: "32px"
            },
            children: [r.jsxs("button", {
              onClick: () => m(true),
              disabled: y.players.length >= 2,
              style: {
                flex: 1,
                padding: "14px",
                borderRadius: "16px",
                background: y.players.length >= 2 ? "#E2E8F0" : "#8EC5FC",
                color: y.players.length >= 2 ? "#A0AEC0" : "#FFF",
                border: "none",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                alignItems: "center",
                fontSize: "16px",
                boxShadow: y.players.length >= 2 ? "none" : "0 4px 12px rgba(142, 197, 252, 0.3)",
                transition: "all 0.3s"
              },
              children: [r.jsx(o, {
                size: 20
              }), " 添加同伴"]
            }), r.jsx("button", {
              onClick: () => {
                if (E || y.players.length >= 2) {
                  return;
                }
                const e = {
                  id: k,
                  name: (u == null ? undefined : u.name) || "我",
                  avatar: (u == null ? undefined : u.avatar) || null,
                  isBot: false,
                  isMe: true
                };
                b(r => ({
                  ...r,
                  players: [...r.players, e]
                }));
              },
              disabled: E || y.players.length >= 2,
              style: {
                flex: 1,
                padding: "14px",
                borderRadius: "16px",
                background: E || y.players.length >= 2 ? "#E2E8F0" : "#E0C3FC",
                color: E || y.players.length >= 2 ? "#A0AEC0" : "#FFF",
                border: "none",
                fontWeight: "bold",
                fontSize: "16px",
                boxShadow: E || y.players.length >= 2 ? "none" : "0 4px 12px rgba(224, 195, 252, 0.3)",
                transition: "all 0.3s"
              },
              children: E ? "已加入" : "我加入"
            })]
          }), r.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              margin: "40px 0"
            },
            children: [r.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                width: "100px"
              },
              children: [r.jsx("div", {
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#4A5568",
                  marginBottom: "12px"
                },
                children: "黑方 (先手)"
              }), y.players[0] ? r.jsxs(r.Fragment, {
                children: [r.jsx("div", {
                  onClick: () => z(y.players[0].id),
                  style: {
                    position: "absolute",
                    top: 25,
                    right: 10,
                    background: "#E53E3E",
                    color: "#FFF",
                    borderRadius: "50%",
                    padding: "4px",
                    cursor: "pointer",
                    zIndex: 10,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  },
                  children: r.jsx(a, {
                    size: 12
                  })
                }), r.jsx("div", {
                  style: {
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#F7FAFC",
                    backgroundImage: `url(${y.players[0].avatar})`,
                    backgroundSize: "cover",
                    border: "4px solid #4A5568",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
                  }
                }), r.jsx("div", {
                  style: {
                    fontSize: "15px",
                    marginTop: "12px",
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "#2D3748",
                    fontWeight: "900"
                  },
                  children: y.players[0].name
                })]
              }) : r.jsx("div", {
                style: {
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "2px dashed #CBD5E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#A0AEC0"
                },
                children: "待定"
              })]
            }), r.jsx("div", {
              style: {
                display: "flex",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: "900",
                color: "#CBD5E0",
                marginTop: "30px"
              },
              children: "VS"
            }), r.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                width: "100px"
              },
              children: [r.jsx("div", {
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#A0AEC0",
                  marginBottom: "12px"
                },
                children: "白方 (后手)"
              }), y.players[1] ? r.jsxs(r.Fragment, {
                children: [r.jsx("div", {
                  onClick: () => z(y.players[1].id),
                  style: {
                    position: "absolute",
                    top: 25,
                    right: 10,
                    background: "#E53E3E",
                    color: "#FFF",
                    borderRadius: "50%",
                    padding: "4px",
                    cursor: "pointer",
                    zIndex: 10,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  },
                  children: r.jsx(a, {
                    size: 12
                  })
                }), r.jsx("div", {
                  style: {
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#F7FAFC",
                    backgroundImage: `url(${y.players[1].avatar})`,
                    backgroundSize: "cover",
                    border: "4px solid #E2E8F0",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
                  }
                }), r.jsx("div", {
                  style: {
                    fontSize: "15px",
                    marginTop: "12px",
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "#2D3748",
                    fontWeight: "900"
                  },
                  children: y.players[1].name
                })]
              }) : r.jsx("div", {
                style: {
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "2px dashed #CBD5E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#A0AEC0"
                },
                children: "待定"
              })]
            })]
          }), r.jsxs("button", {
            onClick: () => {
              if (y.players.length === 2) {
                b(e => ({
                  ...e,
                  phase: "playing",
                  board: Array(225).fill(null),
                  currentPlayerIndex: 0,
                  winner: null
                }));
              }
            },
            disabled: y.players.length !== 2,
            style: {
              width: "100%",
              padding: "18px",
              borderRadius: "24px",
              background: y.players.length === 2 ? "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)" : "#E2E8F0",
              color: y.players.length === 2 ? "#FFF" : "#A0AEC0",
              border: "none",
              fontWeight: "900",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              boxShadow: y.players.length === 2 ? "0 8px 24px rgba(142, 197, 252, 0.4)" : "none",
              transition: "all 0.3s",
              marginTop: "20px"
            },
            children: [r.jsx(s, {
              size: 24,
              fill: y.players.length === 2 ? "#FFF" : "none"
            }), " 开始游戏"]
          })]
        }), (y.phase === "playing" || y.phase === "end") && r.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
          },
          children: [r.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              background: "#FFF",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              zIndex: 10
            },
            children: [r.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                opacity: y.currentPlayerIndex === 0 ? 1 : 0.5,
                transition: "opacity 0.3s"
              },
              children: [r.jsxs("div", {
                style: {
                  position: "relative"
                },
                children: [r.jsx("div", {
                  style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundImage: `url(${y.players[0].avatar})`,
                    backgroundSize: "cover",
                    border: y.currentPlayerIndex === 0 ? "3px solid #4A5568" : "3px solid transparent"
                  }
                }), r.jsx("div", {
                  style: {
                    position: "absolute",
                    bottom: -5,
                    right: -5,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#333",
                    border: "2px solid #FFF",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  }
                }), v[y.players[0].id] && v[y.players[0].id].length > 0 && r.jsx("div", {
                  style: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginTop: "8px",
                    zIndex: 50
                  },
                  children: v[y.players[0].id].map((e, t) => r.jsx("div", {
                    style: {
                      padding: "8px 12px",
                      background: "#FFF",
                      borderRadius: "0 16px 16px 16px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      fontSize: "13px",
                      color: "#2D3748",
                      whiteSpace: "nowrap",
                      border: "1px solid #E2E8F0",
                      animation: "bubblePop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      opacity: t === 0 ? 1 : 0.6,
                      transform: t === 0 ? "scale(1)" : "scale(0.9)",
                      transformOrigin: "top left",
                      transition: "all 0.3s"
                    },
                    children: e.text
                  }, e.id))
                })]
              }), r.jsx("div", {
                style: {
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#2D3748"
                },
                children: y.players[0].name
              })]
            }), r.jsx("div", {
              style: {
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                color: "#A0AEC0",
                fontSize: "14px"
              },
              children: y.phase === "end" ? "对局结束" : y.currentPlayerIndex === 0 ? "黑方回合" : "白方回合"
            }), r.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                opacity: y.currentPlayerIndex === 1 ? 1 : 0.5,
                flexDirection: "row-reverse",
                transition: "opacity 0.3s"
              },
              children: [r.jsxs("div", {
                style: {
                  position: "relative"
                },
                children: [r.jsx("div", {
                  style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundImage: `url(${y.players[1].avatar})`,
                    backgroundSize: "cover",
                    border: y.currentPlayerIndex === 1 ? "3px solid #E2E8F0" : "3px solid transparent"
                  }
                }), r.jsx("div", {
                  style: {
                    position: "absolute",
                    bottom: -5,
                    right: -5,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#FFF",
                    border: "2px solid #E2E8F0",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }
                }), v[y.players[1].id] && v[y.players[1].id].length > 0 && r.jsx("div", {
                  style: {
                    position: "absolute",
                    top: "100%",
                    right: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginTop: "8px",
                    zIndex: 50,
                    alignItems: "flex-end"
                  },
                  children: v[y.players[1].id].map((e, t) => r.jsx("div", {
                    style: {
                      padding: "8px 12px",
                      background: "#FFF",
                      borderRadius: "16px 0 16px 16px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      fontSize: "13px",
                      color: "#2D3748",
                      whiteSpace: "nowrap",
                      border: "1px solid #E2E8F0",
                      animation: "bubblePop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      opacity: t === 0 ? 1 : 0.6,
                      transform: t === 0 ? "scale(1)" : "scale(0.9)",
                      transformOrigin: "top right",
                      transition: "all 0.3s"
                    },
                    children: e.text
                  }, e.id))
                })]
              }), r.jsx("div", {
                style: {
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#2D3748"
                },
                children: y.players[1].name
              })]
            })]
          }), r.jsx("div", {
            style: {
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            },
            children: r.jsx("div", {
              style: {
                width: "100%",
                maxWidth: "380px",
                aspectRatio: "1",
                background: "#E6A869",
                borderRadius: "8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                padding: "16px",
                position: "relative"
              },
              children: r.jsxs("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(15, 1fr)",
                  gridTemplateRows: "repeat(15, 1fr)",
                  position: "relative"
                },
                children: [r.jsxs("div", {
                  style: {
                    position: "absolute",
                    inset: "calc(100% / 30)",
                    border: "1px solid #7B4A23"
                  },
                  children: [Array.from({
                    length: 13
                  }).map((e, t) => r.jsx("div", {
                    style: {
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: `calc(${100 / 14}% * ${t + 1})`,
                      borderTop: "1px solid #7B4A23"
                    }
                  }, `h-${t}`)), Array.from({
                    length: 13
                  }).map((e, t) => r.jsx("div", {
                    style: {
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: `calc(${100 / 14}% * ${t + 1})`,
                      borderLeft: "1px solid #7B4A23"
                    }
                  }, `v-${t}`)), [[3, 3], [3, 11], [7, 7], [11, 3], [11, 11]].map((e, t) => r.jsx("div", {
                    style: {
                      position: "absolute",
                      top: `calc(${e[0]} * (100% / 14))`,
                      left: `calc(${e[1]} * (100% / 14))`,
                      width: "6px",
                      height: "6px",
                      background: "#7B4A23",
                      borderRadius: "50%",
                      transform: "translate(-3px, -3px)"
                    }
                  }, `star-${t}`))]
                }), y.board.map((e, t) => r.jsx("div", {
                  onClick: () => {
                    e = t;
                    if (y.phase === "playing" && y.winner === null && y.board[e] === null) {
                      if (!y.players[y.currentPlayerIndex].isBot) {
                        A(e);
                      }
                    }
                    return;
                    var e;
                  },
                  style: {
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                    cursor: e !== null || y.phase !== "playing" || y.players[y.currentPlayerIndex].isBot ? "default" : "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative"
                  },
                  children: e !== null && r.jsx("div", {
                    style: {
                      width: "85%",
                      height: "85%",
                      borderRadius: "50%",
                      background: e === 0 ? "radial-gradient(circle at 30% 30%, #666, #111)" : "radial-gradient(circle at 30% 30%, #FFF, #CCC)",
                      boxShadow: "2px 3px 6px rgba(0,0,0,0.4)",
                      animation: "dropPiece 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
                      transform: "scale(0)"
                    }
                  })
                }, t))]
              })
            })
          }), E && r.jsxs("div", {
            style: {
              padding: "0 20px 20px",
              display: "flex",
              gap: "12px",
              zIndex: 10,
              transition: "padding-bottom 0.4s ease-out",
              paddingBottom: y.phase === "end" ? "220px" : "20px"
            },
            children: [r.jsx("input", {
              type: "text",
              value: F,
              onChange: e => w(e.target.value),
              placeholder: "发条消息互动一下...",
              style: {
                flex: 1,
                padding: "12px 20px",
                borderRadius: "24px",
                border: "1px solid #E2E8F0",
                outline: "none",
                background: "#FFF",
                fontSize: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)"
              },
              onKeyDown: e => {
                if (e.key === "Enter") {
                  I();
                }
              }
            }), r.jsx("button", {
              onClick: I,
              style: {
                padding: "0 24px",
                background: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
                color: "#FFF",
                borderRadius: "24px",
                border: "none",
                fontWeight: "bold",
                fontSize: "15px",
                boxShadow: "0 4px 12px rgba(142, 197, 252, 0.4)",
                cursor: "pointer",
                transition: "all 0.2s",
                opacity: F.trim() ? 1 : 0.6
              },
              disabled: !F.trim(),
              children: "发送"
            })]
          }), y.phase === "end" && r.jsxs("div", {
            style: {
              position: "absolute",
              bottom: "0",
              left: 0,
              right: 0,
              padding: "32px 24px",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              borderTopLeftRadius: "32px",
              borderTopRightRadius: "32px",
              boxShadow: "0 -8px 32px rgba(0,0,0,0.1)",
              animation: "slideUp 0.4s ease-out",
              zIndex: 20
            },
            children: [r.jsxs("div", {
              style: {
                textAlign: "center",
                marginBottom: "24px"
              },
              children: [r.jsx("h2", {
                style: {
                  fontSize: "28px",
                  color: "#2D3748",
                  margin: "0 0 8px 0",
                  fontWeight: "900"
                },
                children: y.winner === "draw" ? "平局！" : `${y.players[y.winner].name} 获胜！`
              }), r.jsx("p", {
                style: {
                  color: "#718096",
                  margin: 0
                },
                children: "精彩的对决！"
              })]
            }), r.jsxs("div", {
              style: {
                display: "flex",
                gap: "16px"
              },
              children: [r.jsx("button", {
                onClick: R,
                style: {
                  flex: 1,
                  padding: "16px",
                  background: "#F7FAFC",
                  color: "#4A5568",
                  border: "none",
                  borderRadius: "16px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer"
                },
                children: "返回选择"
              }), r.jsxs("button", {
                onClick: () => {
                  b(e => ({
                    ...e,
                    phase: "playing",
                    board: Array(225).fill(null),
                    currentPlayerIndex: 0,
                    winner: null
                  }));
                },
                style: {
                  flex: 2,
                  padding: "16px",
                  background: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "16px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(142, 197, 252, 0.3)"
                },
                children: [r.jsx(d, {
                  size: 20
                }), " 再来一局"]
              })]
            })]
          }), r.jsx("style", {
            children: "\n                            @keyframes dropPiece {\n                                0% { transform: scale(3) translateY(-20px); opacity: 0; }\n                                50% { transform: scale(0.9) translateY(0); opacity: 1; }\n                                100% { transform: scale(1) translateY(0); opacity: 1; }\n                            }\n                            @keyframes slideUp {\n                                from { transform: translateY(100%); }\n                                to { transform: translateY(0); }\n                            }\n                            @keyframes bubblePop {\n                                0% { opacity: 0; transform: scale(0.6) translateY(10px); }\n                                100% { opacity: 1; transform: scale(1) translateY(0); }\n                            }\n                        "
          })]
        })]
      }), f && r.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          color: "#2D3748"
        },
        children: [r.jsxs("div", {
          style: {
            padding: "44px 20px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(0,0,0,0.05)"
          },
          children: [r.jsx("h2", {
            style: {
              fontSize: "20px",
              margin: 0,
              color: "#5E7BA8",
              fontWeight: "bold"
            },
            children: "邀请伙伴"
          }), r.jsx("div", {
            onClick: () => m(false),
            style: {
              cursor: "pointer",
              background: "#F7FAFC",
              padding: "8px",
              borderRadius: "50%"
            },
            children: r.jsx(a, {
              size: 20,
              color: "#4A5568"
            })
          })]
        }), r.jsx("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            alignContent: "start"
          },
          children: h.map(e => {
            const t = y.players.find(r => r.id === e.id);
            return r.jsxs("div", {
              onClick: () => !t && (e => {
                if (y.players.length >= 2) {
                  return;
                }
                if (y.players.find(r => r.id === e.id)) {
                  return;
                }
                const r = {
                  id: e.id,
                  name: e.name,
                  avatar: e.avatar,
                  isBot: true
                };
                b(e => ({
                  ...e,
                  players: [...e.players, r]
                }));
                if (y.players.length === 1) {
                  m(false);
                }
              })(e),
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                cursor: t ? "default" : "pointer",
                opacity: t ? 0.4 : 1
              },
              children: [r.jsx("div", {
                style: {
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundImage: `url(${e.avatar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "3px solid #E0C3FC",
                  boxShadow: "0 4px 12px rgba(224, 195, 252, 0.3)"
                }
              }), r.jsx("span", {
                style: {
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#4A5568"
                },
                children: e.name
              })]
            }, e.id);
          })
        })]
      })]
    });
  } else {
    return null;
  }
};
export { x as default };