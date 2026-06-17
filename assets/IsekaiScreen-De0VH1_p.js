import { r as e, j as n } from "./vendor-react-B2VXkTUV.js";
import { c as t, a as i, b as r, f as a, bD as s } from "./native-pet-CTNtZgMA.js";
import { x as o, ba as l, q as d, al as p, s as c, bb as x, X as g, aY as b, bc as f } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
const h = () => {
  const {
    currentScreen: h,
    showScreen: u
  } = t();
  const {
    t: m
  } = i();
  const {
    characters: y
  } = r();
  const {
    currentProfileUser: v
  } = a();
  const j = h === "isekai-screen";
  const [w, k] = e.useState("portal");
  const [S, z] = e.useState([]);
  e.useEffect(() => {
    if (!j) {
      return;
    }
    let e = false;
    s.getAll().then(n => {
      if (!e) {
        z(Array.isArray(n) ? n : []);
      }
    }).catch(n => {
      console.warn("[Isekai] load saves failed:", n);
      if (!e) {
        z([]);
      }
    });
    return () => {
      e = true;
    };
  }, [j]);
  const [C, I] = e.useState({
    id: "",
    title: "",
    selectedChars: [],
    worldTheme: "",
    playerGoal: "",
    playerIdentity: "迷失者",
    charIdentities: {},
    plotStart: "",
    messages: [],
    createdAt: null
  });
  const [N, A] = e.useState("");
  const [D, E] = e.useState([]);
  const [R, B] = e.useState(null);
  const [T, F] = e.useState(false);
  const [O, Y] = e.useState("");
  const [L, P] = e.useState(false);
  if (!j) {
    return n.jsx("div", {
      id: "isekai-screen",
      className: "screen"
    });
  }
  const G = async () => {
    const e = [C, ...S.filter(e => e.id !== C.id)];
    z(e);
    try {
      await s.put({
        ...C,
        createdAt: Number(C.createdAt) || Date.now()
      });
      alert("存档已保存");
    } catch (n) {
      console.warn("[Isekai] save failed:", n);
      alert("存档保存失败：" + ((n == null ? undefined : n.message) || n));
    }
  };
  const W = () => {
    if (!O.trim()) {
      return;
    }
    const e = {
      id: Date.now(),
      sender: "user",
      text: O,
      time: new Date().toISOString()
    };
    const n = {
      ...C,
      messages: [...C.messages, e]
    };
    I(n);
    Y("");
    if (C.selectedChars.length > 0) {
      setTimeout(() => {
        const e = C.selectedChars[Math.floor(Math.random() * C.selectedChars.length)];
        const n = y.find(n => n.id === e);
        const t = {
          id: Date.now(),
          sender: e,
          text: `[${(n == null ? undefined : n.name) || "神秘人物"}]: 是吗？那我们接下来该怎么做？`,
          time: new Date().toISOString()
        };
        I(e => ({
          ...e,
          messages: [...e.messages, t]
        }));
      }, 1000);
    }
  };
  return n.jsxs("div", {
    id: "isekai-screen",
    className: "screen " + (j ? "active" : ""),
    style: {
      background: "#050308",
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      touchAction: "none"
    },
    children: [w === "portal" && n.jsxs("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#04020a",
        overflow: "hidden"
      },
      children: [n.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 100%, #2a124c 0%, #04020a 60%)",
          opacity: 0.8
        }
      }), n.jsx("div", {
        className: "space-stars " + (L ? "hyper-drive" : "")
      }), n.jsx("div", {
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to top, rgba(162,100,230,0.1), transparent)",
          filter: "blur(30px)",
          zIndex: 1
        }
      }), n.jsx("div", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          zIndex: 50,
          opacity: L ? 0 : 1,
          transition: "opacity 0.5s"
        },
        children: n.jsx("div", {
          onClick: () => u("home-screen"),
          style: {
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#B4A2C4",
            border: "1px solid rgba(180,162,196,0.2)",
            cursor: "pointer",
            backdropFilter: "blur(10px)"
          },
          children: n.jsx(o, {
            size: 20
          })
        })
      }), n.jsx("div", {
        style: {
          position: "absolute",
          top: "12%",
          color: "#E0D4ED",
          fontSize: "13px",
          letterSpacing: "14px",
          textTransform: "uppercase",
          opacity: L ? 0 : 0.7,
          transition: "opacity 0.5s",
          zIndex: 10,
          textAlign: "center",
          textShadow: "0 0 20px rgba(162,100,230,0.5)"
        },
        children: "ASTROMETRY"
      }), n.jsxs("div", {
        style: {
          marginTop: "20px"
        },
        className: "epic-portal-container " + (L ? "entering" : ""),
        children: [n.jsx("div", {
          className: "epic-portal-glow"
        }), n.jsx("div", {
          className: "epic-portal-inner",
          children: n.jsx("div", {
            className: "epic-portal-swirl"
          })
        }), n.jsxs("div", {
          className: "epic-portal-frame",
          children: [n.jsx("div", {
            className: "pillar left-pillar",
            children: n.jsx("div", {
              className: "pillar-runes",
              children: "✧✦✧"
            })
          }), n.jsx("div", {
            className: "pillar right-pillar",
            children: n.jsx("div", {
              className: "pillar-runes",
              children: "✧✦✧"
            })
          }), n.jsx("div", {
            className: "arch-top",
            children: n.jsx("div", {
              className: "moon-crest"
            })
          })]
        }), n.jsx("div", {
          className: "floating-rune",
          style: {
            left: "-50px",
            top: "20%"
          },
          children: "✦"
        }), n.jsx("div", {
          className: "floating-rune",
          style: {
            right: "-60px",
            top: "40%",
            animationDelay: "1s"
          },
          children: "✧"
        }), n.jsx("div", {
          className: "floating-rune",
          style: {
            left: "-30px",
            bottom: "15%",
            animationDelay: "2s"
          },
          children: "✧"
        })]
      }), n.jsx("div", {
        className: "portal-floor " + (L ? "entering" : ""),
        children: n.jsx("div", {
          className: "portal-reflection"
        })
      }), n.jsxs("div", {
        style: {
          position: "absolute",
          bottom: "8%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          opacity: L ? 0 : 1,
          transition: "all 0.5s",
          zIndex: 10
        },
        children: [n.jsx("button", {
          onClick: () => {
            P(true);
            setTimeout(() => {
              P(false);
              I({
                id: Date.now().toString(),
                title: `次元坐标 ${new Date().toLocaleDateString()}`,
                selectedChars: [],
                worldTheme: "赛博朋克 / 无限流",
                playerGoal: "存活并找到世界核心",
                playerIdentity: "普通人类",
                charIdentities: {},
                plotStart: "",
                messages: [{
                  id: Date.now(),
                  sender: "system",
                  text: "系统提示：你已进入异世界。",
                  time: new Date().toISOString()
                }],
                createdAt: Date.now()
              });
              k("config");
            }, 1500);
          },
          className: "epic-enter-btn",
          children: "开启跃迁"
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "8px",
            cursor: "pointer",
            opacity: 0.6,
            alignItems: "center"
          },
          onClick: () => k("saves"),
          className: "epic-sub-btn",
          children: [n.jsx(l, {
            size: 16
          }), n.jsx("span", {
            style: {
              fontSize: "13px",
              letterSpacing: "4px"
            },
            children: "时空印记"
          })]
        })]
      }), n.jsx("div", {
        className: "white-flash " + (L ? "active" : "")
      })]
    }), w === "config" && (() => {
      const e = y.filter(e => e.name.toLowerCase().includes(N.toLowerCase()));
      const t = C.selectedChars.length > 0;
      return n.jsxs("div", {
        className: "isekai-config-container",
        style: {
          position: "absolute",
          inset: 0,
          background: "#0a0514",
          color: "#fff",
          overflowY: "auto",
          paddingBottom: "120px",
          overflowX: "hidden"
        },
        children: [n.jsx("div", {
          className: "data-stream-bg"
        }), n.jsx("div", {
          className: "cyber-grid-overlay"
        }), n.jsxs("div", {
          style: {
            padding: "20px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            position: "sticky",
            top: 0,
            background: "rgba(10,5,20,0.85)",
            backdropFilter: "blur(20px)",
            zIndex: 10,
            borderBottom: "1px solid rgba(162,100,230,0.15)"
          },
          children: [n.jsx("div", {
            onClick: () => k("portal"),
            style: {
              cursor: "pointer",
              padding: "8px",
              margin: "-8px"
            },
            children: n.jsx(o, {
              size: 24,
              color: "#B4A2C4"
            })
          }), n.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: [n.jsxs("h2", {
              style: {
                fontSize: "16px",
                fontWeight: "500",
                margin: 0,
                letterSpacing: "4px",
                color: "#E0D4ED",
                textShadow: "0 0 10px rgba(162,100,230,0.5)",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              },
              children: ["构建世界线 ", n.jsx("span", {
                className: "glitch-status",
                children: t ? "READY" : "SYNCING..."
              })]
            }), n.jsx("div", {
              className: "hex-id-scroll",
              children: "SYS.REQ // CHOOSE YOUR COMPANIONS"
            })]
          })]
        }), n.jsxs("div", {
          style: {
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            position: "relative",
            zIndex: 5
          },
          children: [n.jsxs("section", {
            className: "cyber-panel",
            children: [n.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px"
              },
              children: [n.jsxs("div", {
                style: {
                  fontSize: "13px",
                  color: "#B4A2C4",
                  letterSpacing: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                },
                children: [n.jsx("div", {
                  style: {
                    width: "4px",
                    height: "12px",
                    background: "#A264E6"
                  }
                }), "DIM_SYNC // 次元牵绊"]
              }), n.jsxs("div", {
                style: {
                  position: "relative",
                  width: "120px"
                },
                children: [n.jsx("input", {
                  value: N,
                  onChange: e => A(e.target.value),
                  placeholder: "搜索...",
                  style: {
                    width: "100%",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "6px 12px 6px 30px",
                    borderRadius: "16px",
                    outline: "none",
                    fontSize: "12px",
                    boxSizing: "border-box"
                  }
                }), n.jsx(d, {
                  size: 12,
                  color: "#A1A1AA",
                  style: {
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)"
                  }
                })]
              })]
            }), n.jsx("div", {
              style: {
                display: "flex",
                gap: "16px",
                overflowX: "auto",
                paddingBottom: "10px"
              },
              className: "hide-scrollbar",
              children: (() => {
                const t = e.filter(e => e.type !== "npc");
                const i = e.filter(e => e.type === "npc");
                const r = new Set();
                const a = (e, t = false) => {
                  const i = C.selectedChars.includes(e.id);
                  return n.jsxs("div", {
                    onClick: () => {
                      n = e.id;
                      I(e => {
                        const t = e.selectedChars.includes(n) ? e.selectedChars.filter(e => e !== n) : [...e.selectedChars, n];
                        return {
                          ...e,
                          selectedChars: t
                        };
                      });
                      return;
                      var n;
                    },
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      flexShrink: 0,
                      width: t ? "48px" : "56px"
                    },
                    children: [n.jsx("div", {
                      style: {
                        width: t ? "48px" : "56px",
                        height: t ? "48px" : "56px",
                        borderRadius: "50%",
                        padding: "2px",
                        background: i ? "linear-gradient(45deg, #A264E6, #D83375, #A264E6)" : "transparent",
                        backgroundSize: "200% 200%",
                        animation: i ? "pulse-gradient 2s linear infinite" : "none",
                        transition: "all 0.3s",
                        boxShadow: i ? "0 0 10px rgba(162,100,230,0.4), inset 0 0 5px rgba(255,255,255,0.2)" : "none"
                      },
                      children: n.jsxs("div", {
                        style: {
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          overflow: "hidden",
                          background: "#18181B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: t ? "16px" : "20px",
                          color: "#52525B",
                          border: "1px solid #27272A"
                        },
                        children: [e.avatar ? n.jsx("img", {
                          decoding: "async",
                          src: e.avatar,
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: i ? "none" : "opacity(0.6)"
                          },
                          onError: e => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          },
                          alt: ""
                        }) : null, n.jsx("div", {
                          style: {
                            display: e.avatar ? "none" : "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center"
                          },
                          children: e.name.substring(0, 1)
                        })]
                      })
                    }), n.jsx("div", {
                      style: {
                        fontSize: t ? "10px" : "11px",
                        color: i ? "#E4E4E7" : "#71717A",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                        textAlign: "center"
                      },
                      children: e.name
                    })]
                  }, e.id);
                };
                const s = t.map(e => {
                  const n = i.filter(n => {
                    var t;
                    const i = (t = n.relationships) == null ? undefined : t.some(n => String(n.targetId) === String(e.id));
                    if (i) {
                      r.add(String(n.id));
                    }
                    return i;
                  });
                  return {
                    main: e,
                    npcs: n
                  };
                });
                const o = i.filter(e => !r.has(String(e.id)));
                return n.jsxs(n.Fragment, {
                  children: [s.map(e => {
                    const t = D.includes(e.main.id);
                    const i = e.npcs.length > 0;
                    return n.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        background: i ? "rgba(255,255,255,0.02)" : "transparent",
                        borderRadius: "16px",
                        padding: i ? "8px" : "0",
                        gap: "12px",
                        border: i ? "1px dashed rgba(162,100,230,0.2)" : "none"
                      },
                      children: [a(e.main), i && n.jsxs("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          height: "100%"
                        },
                        children: [n.jsx("div", {
                          onClick: () => {
                            n = e.main.id;
                            E(e => e.includes(n) ? e.filter(e => e !== n) : [...e, n]);
                            return;
                            var n;
                          },
                          style: {
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "10px",
                            color: "#A264E6",
                            background: "rgba(162,100,230,0.1)",
                            padding: "2px 6px",
                            borderRadius: "8px",
                            opacity: 0.8,
                            userSelect: "none"
                          },
                          children: t ? "⬡ 收起" : `⬡ ${e.npcs.length} NPCs`
                        }), t && n.jsx("div", {
                          style: {
                            display: "flex",
                            gap: "8px",
                            marginTop: "8px",
                            paddingLeft: "8px",
                            borderLeft: "1px dashed rgba(162,100,230,0.3)"
                          },
                          children: e.npcs.map(e => a(e, true))
                        })]
                      })]
                    }, e.main.id);
                  }), o.length > 0 && n.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      background: "rgba(255,255,255,0.02)",
                      borderRadius: "16px",
                      padding: "8px",
                      gap: "12px",
                      border: "1px dashed rgba(100,100,100,0.3)"
                    },
                    children: [n.jsx("div", {
                      style: {
                        fontSize: "10px",
                        color: "#71717A",
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)"
                      },
                      children: "未编队 NPC"
                    }), n.jsx("div", {
                      style: {
                        display: "flex",
                        gap: "8px"
                      },
                      children: o.map(e => a(e, true))
                    })]
                  })]
                });
              })()
            })]
          }), n.jsxs("section", {
            className: "cyber-panel",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            },
            children: [n.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              },
              children: [n.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [n.jsxs("div", {
                  style: {
                    fontSize: "13px",
                    color: "#B4A2C4",
                    letterSpacing: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  },
                  children: [n.jsx("div", {
                    style: {
                      width: "4px",
                      height: "12px",
                      background: "#D83375"
                    }
                  }), "WORLD RULE // 世界观设定"]
                }), n.jsxs("button", {
                  onClick: () => I({
                    ...C,
                    worldTheme: "加载世界书设定..."
                  }),
                  style: {
                    background: "rgba(216,51,117,0.1)",
                    border: "1px solid rgba(216,51,117,0.3)",
                    color: "#D83375",
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    cursor: "pointer",
                    padding: "4px 8px",
                    borderRadius: "6px"
                  },
                  children: [n.jsx(p, {
                    size: 12
                  }), " 载入世界书"]
                })]
              }), n.jsx("textarea", {
                className: "cyber-input",
                value: C.worldTheme,
                onChange: e => I({
                  ...C,
                  worldTheme: e.target.value
                }),
                placeholder: "输入世界坐标参数 (如:末日废土，人类建立地下城...)"
              })]
            }), n.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              },
              children: [n.jsxs("div", {
                style: {
                  fontSize: "13px",
                  color: "#B4A2C4",
                  letterSpacing: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                },
                children: [n.jsx("div", {
                  style: {
                    width: "4px",
                    height: "12px",
                    background: "#D83375"
                  }
                }), "OBJECTIVE // 通关目标"]
              }), n.jsx("textarea", {
                className: "cyber-input",
                value: C.playerGoal,
                onChange: e => I({
                  ...C,
                  playerGoal: e.target.value
                }),
                placeholder: "输入主线任务 (如:在荒野存活30天并查明异变原因...)"
              })]
            })]
          }), n.jsxs("section", {
            className: "cyber-panel",
            children: [n.jsxs("div", {
              style: {
                fontSize: "13px",
                color: "#B4A2C4",
                marginBottom: "16px",
                letterSpacing: "2px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              },
              children: [n.jsx("div", {
                style: {
                  width: "4px",
                  height: "12px",
                  background: "#56B2FF"
                }
              }), "IDENTITIES // 身份烙印"]
            }), n.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              },
              children: [n.jsxs("div", {
                style: {
                  background: "rgba(0,0,0,0.3)",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(86,178,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px"
                },
                children: [n.jsx("div", {
                  style: {
                    fontSize: "11px",
                    color: "#56B2FF",
                    width: "60px",
                    flexShrink: 0
                  },
                  children: "[本我]"
                }), n.jsx("input", {
                  className: "identity-input",
                  value: C.playerIdentity,
                  onChange: e => I({
                    ...C,
                    playerIdentity: e.target.value
                  }),
                  placeholder: "请输入本我烙印"
                })]
              }), C.selectedChars.map(e => {
                const t = y.find(n => n.id === e);
                if (t) {
                  return n.jsxs("div", {
                    style: {
                      background: "rgba(0,0,0,0.3)",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(162,100,230,0.2)",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px"
                    },
                    children: [n.jsxs("div", {
                      style: {
                        fontSize: "11px",
                        color: "#B4A2C4",
                        width: "60px",
                        flexShrink: 0,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                      },
                      children: ["[", t.name, "]"]
                    }), n.jsx("input", {
                      className: "identity-input",
                      value: C.charIdentities[e] || "",
                      onChange: n => ((e, n) => {
                        I(t => ({
                          ...t,
                          charIdentities: {
                            ...t.charIdentities,
                            [e]: n
                          }
                        }));
                      })(e, n.target.value),
                      placeholder: "自由设定身份..."
                    })]
                  }, e);
                } else {
                  return null;
                }
              })]
            })]
          }), n.jsxs("section", {
            className: "cyber-panel",
            children: [n.jsxs("div", {
              style: {
                fontSize: "13px",
                color: "#B4A2C4",
                marginBottom: "16px",
                letterSpacing: "2px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              },
              children: [n.jsx("div", {
                style: {
                  width: "4px",
                  height: "12px",
                  background: "#FFB256"
                }
              }), "SPAWN POINT // 降临锚点"]
            }), n.jsx("textarea", {
              className: "cyber-input",
              value: C.plotStart,
              onChange: e => I({
                ...C,
                plotStart: e.target.value
              }),
              style: {
                minHeight: "160px"
              },
              placeholder: "请描述降临异世界后的最初视野与场景..."
            })]
          })]
        }), n.jsx("div", {
          style: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "20px",
            background: "linear-gradient(transparent, #0a0514 40%)",
            zIndex: 20
          },
          children: n.jsx("button", {
            onClick: () => {
              G();
              k("playing");
            },
            className: "transmission-btn " + (t ? "transmission-btn-ready" : "transmission-btn-disabled"),
            disabled: !t,
            children: t ? n.jsxs(n.Fragment, {
              children: [n.jsx("span", {
                className: "btn-text",
                children: "确立坐标_开始跃迁"
              }), n.jsx("div", {
                className: "btn-hyper-sweep"
              })]
            }) : n.jsxs(n.Fragment, {
              children: [n.jsx("span", {
                className: "btn-text",
                style: {
                  fontSize: "14px"
                },
                children: "缺少空间锚点_请召唤同行者"
              }), n.jsx("div", {
                className: "btn-scanline"
              })]
            })
          })
        })]
      });
    })(), w === "saves" && n.jsxs("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "#0a0514",
        color: "#fff",
        overflowY: "auto"
      },
      children: [n.jsx("div", {
        className: "data-stream-bg"
      }), n.jsxs("div", {
        style: {
          padding: "20px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          position: "sticky",
          top: 0,
          background: "rgba(10,5,20,0.85)",
          backdropFilter: "blur(20px)",
          zIndex: 10,
          borderBottom: "1px solid rgba(162,100,230,0.15)"
        },
        children: [n.jsx("div", {
          onClick: () => k("portal"),
          style: {
            cursor: "pointer",
            padding: "8px",
            margin: "-8px"
          },
          children: n.jsx(o, {
            size: 24,
            color: "#B4A2C4"
          })
        }), n.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [n.jsx("h2", {
            style: {
              fontSize: "16px",
              fontWeight: "500",
              margin: 0,
              letterSpacing: "4px",
              color: "#E0D4ED",
              textShadow: "0 0 10px rgba(162,100,230,0.5)"
            },
            children: "时空档案库"
          }), n.jsx("div", {
            className: "hex-id-scroll",
            children: "ARCHIVES // STORED TIMELINES"
          })]
        })]
      }), n.jsx("div", {
        style: {
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
          zIndex: 5
        },
        children: S.length === 0 ? n.jsxs("div", {
          style: {
            textAlign: "center",
            color: "#666",
            marginTop: "60px",
            fontSize: "14px",
            letterSpacing: "2px"
          },
          children: ["[ RECORD NOT FOUND ]", n.jsx("br", {}), "暂无世界线记录"]
        }) : S.map(e => {
          const t = R === e.id;
          return n.jsxs("div", {
            className: "save-card cyber-panel " + (t ? "loading-save" : ""),
            children: [n.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start"
              },
              children: [n.jsxs("div", {
                children: [n.jsx("div", {
                  style: {
                    fontSize: "16px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#E0D4ED",
                    textShadow: "0 0 10px rgba(162,100,230,0.3)",
                    letterSpacing: "1px"
                  },
                  children: e.title
                }), n.jsxs("div", {
                  style: {
                    fontSize: "11px",
                    color: "#B4A2C4",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  },
                  children: [n.jsx("div", {
                    style: {
                      width: "4px",
                      height: "4px",
                      background: "#D83375",
                      borderRadius: "50%"
                    }
                  }), e.worldTheme]
                }), n.jsxs("div", {
                  style: {
                    fontSize: "11px",
                    color: "#B4A2C4",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "4px"
                  },
                  children: [n.jsx("div", {
                    style: {
                      width: "4px",
                      height: "4px",
                      background: "#56B2FF",
                      borderRadius: "50%"
                    }
                  }), e.playerGoal]
                })]
              }), n.jsx("button", {
                onClick: () => !R && (e => {
                  B(e.id);
                  setTimeout(() => {
                    k("portal");
                    P(true);
                    setTimeout(() => {
                      P(false);
                      I(e);
                      k("playing");
                      B(null);
                    }, 1500);
                  }, 600);
                })(e),
                className: "load-save-btn",
                children: "进入"
              })]
            }), n.jsx("div", {
              style: {
                display: "flex",
                gap: "8px",
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px dashed rgba(162,100,230,0.2)"
              },
              children: e.selectedChars.map(e => {
                const t = y.find(n => n.id === e);
                if (t) {
                  return n.jsx("div", {
                    style: {
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      padding: "2px",
                      background: "linear-gradient(45deg, #A264E6, #D83375)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: n.jsx("div", {
                      style: {
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "1px solid #18181B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#18181B"
                      },
                      children: t.avatar ? n.jsx("img", {
                        decoding: "async",
                        src: t.avatar,
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        },
                        alt: t.name
                      }) : n.jsx("div", {
                        style: {
                          fontSize: "12px",
                          color: "#A1A1AA"
                        },
                        children: t.name.substring(0, 1)
                      })
                    })
                  }, e);
                } else {
                  return null;
                }
              })
            }), t && n.jsx("div", {
              className: "save-glitch-overlay"
            })]
          }, e.id);
        })
      }), n.jsx("div", {
        className: "save-transition-flash " + (R ? "active" : "")
      })]
    }), w === "playing" && n.jsxs("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "#111",
        overflow: "hidden"
      },
      children: [n.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop') center/cover",
          opacity: 0.4,
          filter: "blur(2px)"
        }
      }), n.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.2), #000)"
        }
      }), n.jsxs("div", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "40px 20px 20px",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 10
        },
        children: [n.jsxs("div", {
          style: {
            color: "#fff",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)"
          },
          children: [n.jsx("div", {
            style: {
              fontSize: "12px",
              opacity: 0.7,
              marginBottom: "4px",
              letterSpacing: "2px"
            },
            children: C.worldTheme
          }), n.jsxs("div", {
            style: {
              fontSize: "18px",
              fontWeight: "500",
              letterSpacing: "1px"
            },
            children: ["目标: ", C.playerGoal]
          })]
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "12px"
          },
          children: [n.jsx("button", {
            onClick: G,
            style: {
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.2)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)"
            },
            children: n.jsx(c, {
              size: 18
            })
          }), n.jsx("button", {
            onClick: () => {
              if (window.confirm("确定要脱离当前的次元世界吗？结束后本次记忆将作为平行世界的切片发送给角色。")) {
                alert("副本脱离成功！角色们收到了一条关于这个世界线的记忆碎片。");
                k("portal");
              }
            },
            style: {
              background: "rgba(255,100,100,0.2)",
              border: "1px solid rgba(255,100,100,0.4)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)"
            },
            children: n.jsx(x, {
              size: 18
            })
          })]
        })]
      }), n.jsx("div", {
        style: {
          position: "absolute",
          top: "120px",
          left: "20px",
          right: "20px",
          color: "#fff",
          opacity: 0.8,
          fontSize: "14px",
          lineHeight: 1.6,
          textShadow: "0 2px 4px #000"
        },
        children: C.plotStart
      }), n.jsx("div", {
        style: {
          position: "absolute",
          bottom: "40px",
          right: "20px",
          zIndex: 50,
          width: T ? "calc(100% - 40px)" : "60px",
          height: T ? "60vh" : "60px",
          borderRadius: T ? "24px" : "30px",
          background: "rgba(20,20,25,0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: T ? "0 20px 40px rgba(0,0,0,0.5)" : "0 10px 20px rgba(0,0,0,0.3)"
        },
        children: T ? n.jsxs(n.Fragment, {
          children: [n.jsxs("div", {
            style: {
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(255,255,255,0.05)"
            },
            children: [n.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                alignItems: "center"
              },
              children: [n.jsx("div", {
                style: {
                  display: "flex",
                  margin: "0 4px"
                },
                children: C.selectedChars.map((e, t) => {
                  const i = y.find(n => n.id === e);
                  if (i) {
                    return n.jsx("img", {
                      decoding: "async",
                      src: i.avatar,
                      alt: i.name,
                      style: {
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        border: "1px solid #141419",
                        marginLeft: t > 0 ? "-10px" : 0
                      }
                    }, e);
                  } else {
                    return null;
                  }
                })
              }), n.jsx("span", {
                style: {
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "500"
                },
                children: "异界联络"
              })]
            }), n.jsx("button", {
              onClick: () => F(false),
              style: {
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer"
              },
              children: n.jsx(g, {
                size: 20
              })
            })]
          }), n.jsx("div", {
            style: {
              flex: 1,
              padding: "16px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            },
            className: "hide-scrollbar",
            children: C.messages.map((e, t) => {
              const i = e.sender === "user";
              if (e.sender === "system") {
                return n.jsx("div", {
                  style: {
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#666",
                    margin: "10px 0"
                  },
                  children: e.text
                }, t);
              }
              const r = i ? null : y.find(n => n.id === e.sender);
              return n.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "8px",
                  flexDirection: i ? "row-reverse" : "row"
                },
                children: [!i && r && n.jsx("img", {
                  decoding: "async",
                  src: r.avatar,
                  alt: "",
                  style: {
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    flexShrink: 0
                  }
                }), n.jsx("div", {
                  style: {
                    background: i ? "#A264E6" : "rgba(255,255,255,0.1)",
                    color: "#fff",
                    padding: "10px 14px",
                    borderRadius: "16px",
                    borderTopRightRadius: i ? "4px" : "16px",
                    borderTopLeftRadius: i ? "16px" : "4px",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    maxWidth: "80%"
                  },
                  children: e.text
                })]
              }, t);
            })
          }), n.jsxs("div", {
            style: {
              padding: "12px 16px",
              background: "rgba(0,0,0,0.2)",
              display: "flex",
              gap: "12px",
              alignItems: "center"
            },
            children: [n.jsx("input", {
              value: O,
              onChange: e => Y(e.target.value),
              onKeyPress: e => e.key === "Enter" && W(),
              placeholder: "输入消息...",
              style: {
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: "20px",
                outline: "none"
              }
            }), n.jsx("button", {
              onClick: W,
              style: {
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#A264E6",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              },
              children: n.jsx(b, {
                size: 18,
                style: {
                  marginLeft: "2px"
                }
              })
            })]
          })]
        }) : n.jsx("button", {
          onClick: () => F(true),
          style: {
            width: "100%",
            height: "100%",
            background: "transparent",
            border: "none",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          },
          children: n.jsx(f, {
            size: 24,
            color: "#A264E6"
          })
        })
      })]
    }), n.jsx("style", {
      children: "\n                /* Stars Background */\n                .space-stars {\n                    position: absolute; top: -50%; left: -50%; right: -50%; bottom: -50%;\n                    background-image: \n                        radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),\n                        radial-gradient(2px 2px at 40px 70px, rgba(200,220,255,0.8), rgba(0,0,0,0)),\n                        radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)),\n                        radial-gradient(2px 2px at 90px 40px, rgba(162,100,230,0.8), rgba(0,0,0,0)),\n                        radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)),\n                        radial-gradient(2px 2px at 160px 120px, rgba(200,220,255,0.6), rgba(0,0,0,0));\n                    background-repeat: repeat;\n                    background-size: 200px 200px;\n                    opacity: 0.3;\n                    animation: slow-rotate 100s linear infinite;\n                    pointer-events: none;\n                }\n                .space-stars.hyper-drive {\n                    animation: hyper-zoom 1.5s cubic-bezier(0.5, 0, 1, 0.5) forwards;\n                }\n\n                /* Epic Portal Structure */\n                .epic-portal-container {\n                    position: relative;\n                    width: 160px;\n                    height: 380px;\n                    display: flex;\n                    justify-content: center;\n                    align-items: flex-end;\n                    z-index: 5;\n                    transform: translateY(20px);\n                }\n\n                /* Base Arch Inner Space */\n                .epic-portal-inner {\n                    position: absolute;\n                    bottom: 0;\n                    width: 100px;\n                    height: 340px;\n                    border-radius: 50px 50px 0 0;\n                    background: linear-gradient(180deg, #A264E6 0%, #D2F5FF 60%, #fff 100%);\n                    box-shadow: 0 0 40px #A264E6, inset 0 0 20px rgba(255,255,255,0.8);\n                    overflow: hidden;\n                    transition: all 1.5s cubic-bezier(0.8, 0, 0.2, 1);\n                    z-index: 2;\n                }\n\n                /* Energy swirl */\n                .epic-portal-swirl {\n                    position: absolute; inset: -50px;\n                    background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.6), transparent 40%);\n                    animation: spin 3s linear infinite;\n                    mix-blend-mode: overlay;\n                }\n\n                /* Frame around the portal */\n                .epic-portal-frame {\n                    position: absolute;\n                    inset: -20px -30px 0 -30px;\n                    z-index: 3;\n                    pointer-events: none;\n                }\n                .pillar {\n                    position: absolute;\n                    bottom: 0;\n                    width: 40px;\n                    height: 370px;\n                    background: linear-gradient(90deg, #0f081c, #312154, #0f081c);\n                    border: 1px solid rgba(162, 100, 230, 0.3);\n                    border-bottom: none;\n                    box-shadow: 0 0 20px rgba(0,0,0,0.8), inset 0 0 10px rgba(162,100,230,0.1);\n                    overflow: hidden;\n                }\n                .pillar-runes {\n                    position: absolute; top: 10%; bottom: 10%; width: 100%;\n                    color: rgba(162, 100, 230, 0.2); font-size: 10px;\n                    writing-mode: vertical-rl; text-align: center; letter-spacing: 20px;\n                    animation: float 4s ease-in-out infinite alternate;\n                }\n                .left-pillar { left: 0; border-radius: 20px 0 0 0; }\n                .right-pillar { right: 0; border-radius: 0 20px 0 0; }\n                .arch-top {\n                    position: absolute;\n                    top: 20px; left: 10px; right: 10px;\n                    height: 140px;\n                    border-radius: 100px 100px 0 0;\n                    border: 25px solid #251740;\n                    border-bottom: none;\n                    box-shadow: inset 0 10px 20px rgba(162,100,230,0.2), 0 -10px 20px rgba(0,0,0,0.8);\n                }\n                /* Center crescent */\n                .moon-crest {\n                    position: absolute;\n                    top: -45px; left: 50%; transform: translateX(-50%) rotate(45deg);\n                    width: 60px; height: 60px;\n                    border-radius: 50%;\n                    box-shadow: inset 8px 8px 0 #E0D4ED;\n                    filter: drop-shadow(0 0 15px rgba(224, 212, 237, 0.8));\n                }\n\n                .epic-portal-glow {\n                    position: absolute;\n                    top: 50%; left: 50%;\n                    width: 300px; height: 400px;\n                    transform: translate(-50%, -50%);\n                    background: radial-gradient(ellipse, rgba(82,45,128,0.5) 0%, transparent 70%);\n                    filter: blur(25px);\n                    z-index: 1;\n                    animation: slow-pulse 4s infinite alternate;\n                }\n\n                /* Floor reflection */\n                .portal-floor {\n                    position: relative;\n                    width: 100%;\n                    height: 100px;\n                    display: flex; justify-content: center;\n                    border-top: 1px solid rgba(255,255,255,0.05);\n                    background: linear-gradient(180deg, rgba(82,45,128,0.1) 0%, transparent 100%);\n                    z-index: 2;\n                }\n                .portal-reflection {\n                    width: 180px; height: 80px;\n                    background: radial-gradient(ellipse, rgba(162,100,230,0.6) 0%, transparent 70%);\n                    margin-top: -10px;\n                    border-radius: 50%;\n                    filter: blur(15px);\n                    transition: all 1.5s;\n                }\n\n                /* Entering Animation */\n                .epic-portal-container.entering .epic-portal-inner {\n                    transform: scale(25);\n                    border-radius: 0;\n                    background: #fff;\n                    opacity: 1;\n                    box-shadow: 0 0 400px #fff;\n                    z-index: 100;\n                }\n                .portal-floor.entering .portal-reflection {\n                    transform: scale(4);\n                    opacity: 0;\n                }\n                .white-flash {\n                    position: absolute; inset: 0;\n                    background: #fff;\n                    opacity: 0;\n                    pointer-events: none;\n                    z-index: 200;\n                }\n                .white-flash.active {\n                    animation: flash 1.5s forwards;\n                }\n\n                /* Buttons */\n                .epic-enter-btn {\n                    background: transparent;\n                    color: #fff;\n                    font-size: 16px;\n                    font-weight: 500;\n                    letter-spacing: 10px;\n                    padding: 16px 40px 16px 50px;\n                    border: 1px solid rgba(162, 100, 230, 0.4);\n                    border-radius: 40px;\n                    cursor: pointer;\n                    text-shadow: 0 0 10px rgba(162, 100, 230, 0.8);\n                    box-shadow: 0 0 20px rgba(162, 100, 230, 0.1), inset 0 0 15px rgba(162, 100, 230, 0.1);\n                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);\n                    backdrop-filter: blur(10px);\n                }\n                .epic-enter-btn:hover {\n                    background: rgba(162, 100, 230, 0.2);\n                    box-shadow: 0 0 40px rgba(162, 100, 230, 0.5), inset 0 0 20px rgba(162, 100, 230, 0.4);\n                    transform: translateY(-2px);\n                    border-color: rgba(162, 100, 230, 0.8);\n                }\n                .epic-sub-btn {\n                    transition: all 0.3s;\n                    color: #B4A2C4;\n                    padding: 8px 16px;\n                    border-radius: 20px;\n                }\n                .epic-sub-btn:hover {\n                    opacity: 1 !important;\n                    color: #fff;\n                    background: rgba(255,255,255,0.05);\n                }\n\n                /* Hide Scrollbars */\n                .hide-scrollbar::-webkit-scrollbar { display: none; }\n                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n\n                /* Generic Animations */\n                @keyframes slow-rotate { 100% { transform: rotate(360deg); } }\n                @keyframes hyper-zoom { 100% { transform: scale(5) rotate(15deg); opacity: 0; } }\n                @keyframes spin { 100% { transform: rotate(360deg); } }\n                @keyframes slow-pulse { 0% { opacity: 0.6; } 100% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); } }\n                @keyframes flash {\n                    0% { opacity: 0; }\n                    80% { opacity: 1; }\n                    100% { opacity: 1; }\n                }\n                .floating-rune {\n                    position: absolute;\n                    color: rgba(162, 100, 230, 0.8);\n                    font-size: 14px;\n                    animation: float-rune 4s ease-in-out infinite;\n                    text-shadow: 0 0 10px rgba(162,100,230,1);\n                }\n                @keyframes float-rune {\n                    0%, 100% { transform: translateY(0); opacity: 0.5; }\n                    50% { transform: translateY(-15px); opacity: 1; }\n                }\n\n                /* Isekai Config Form Effects */\n                .data-stream-bg {\n                    position: fixed; inset: 0; pointer-events: none; z-index: 0;\n                    background-image: linear-gradient(rgba(162,100,230,0.03) 1px, transparent 1px),\n                                      linear-gradient(90deg, rgba(162,100,230,0.03) 1px, transparent 1px);\n                    background-size: 30px 30px;\n                    opacity: 0.8;\n                }\n                .data-stream-bg::after {\n                    content: '';\n                    position: absolute; inset: 0;\n                    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(10,5,20,0.5) 3px, rgba(10,5,20,0.5) 6px);\n                    animation: scanline-bg 15s linear infinite;\n                    opacity: 0.5;\n                }\n                .cyber-grid-overlay {\n                    position: fixed; inset: 0; pointer-events: none; z-index: 0;\n                    background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(10,5,20,0.9) 100%);\n                }\n                @keyframes scanline-bg {\n                    0% { background-position: 0 0; }\n                    100% { background-position: 0 100vh; }\n                }\n                \n                .glitch-status {\n                    font-size: 10px;\n                    padding: 2px 6px;\n                    border-radius: 4px;\n                    background: rgba(162,100,230,0.2);\n                    border: 1px solid rgba(162,100,230,0.5);\n                    color: #D8C6E6;\n                    animation: pulse-op 2s infinite;\n                }\n                @keyframes pulse-op { 0%,100% {opacity:0.6;} 50% {opacity:1;} }\n\n                .hex-id-scroll {\n                    font-size: 9px;\n                    color: #71717A;\n                    font-family: monospace;\n                    letter-spacing: 2px;\n                    white-space: nowrap;\n                    overflow: hidden;\n                    width: 100%;\n                }\n\n                /* Transmission Button Elements */\n                .transmission-btn {\n                    width: 100%; height: 56px; border-radius: 28px;\n                    border: none; font-size: 15px; font-weight: 500;\n                    letter-spacing: 2px; cursor: pointer;\n                    position: relative; overflow: hidden;\n                    display: flex; align-items: center; justify-content: center;\n                    outline: none;\n                    transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);\n                }\n                .transmission-btn:active {\n                    transform: scale(0.96);\n                }\n                .btn-text { position: relative; z-index: 2; text-shadow: 0 1px 4px rgba(0,0,0,0.5); }\n                \n                .transmission-btn-disabled {\n                    background: repeating-linear-gradient(\n                        -45deg,\n                        rgba(30, 20, 50, 0.6),\n                        rgba(30, 20, 50, 0.6) 15px,\n                        rgba(40, 25, 70, 0.6) 15px,\n                        rgba(40, 25, 70, 0.6) 30px\n                    );\n                    animation: shift-stripes 3s linear infinite;\n                    border: 1px solid rgba(100, 60, 150, 0.3);\n                    color: #A1A1AA;\n                    box-shadow: inset 0 0 10px rgba(0,0,0,0.5);\n                }\n                .btn-scanline {\n                    position: absolute; left: 0; right: 0; top: -50%; height: 100%;\n                    background: linear-gradient(to bottom, transparent, rgba(162,100,230,0.3), transparent);\n                    animation: btn-scan 3s linear infinite;\n                    pointer-events: none;\n                }\n                \n                .transmission-btn-ready {\n                    background: linear-gradient(90deg, #A264E6, #D83375, #A264E6);\n                    background-size: 200% auto;\n                    color: #fff;\n                    animation: pulse-gradient 3s linear infinite, glow-pulse 2s ease-in-out infinite;\n                    border: 1px solid rgba(216, 180, 254, 0.6);\n                }\n                .btn-hyper-sweep {\n                    position: absolute; top: 0; left: -100%; width: 50%; height: 100%;\n                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);\n                    transform: skewX(-20deg);\n                    animation: hyper-sweep 2.5s infinite;\n                    pointer-events: none;\n                }\n\n                @keyframes shift-stripes {\n                    0% { background-position: 0 0; }\n                    100% { background-position: 60px 0; }\n                }\n                @keyframes btn-scan {\n                    0% { top: -100%; }\n                    100% { top: 100%; }\n                }\n                @keyframes pulse-gradient {\n                    0% { background-position: 0% center; }\n                    100% { background-position: 200% center; }\n                }\n                @keyframes glow-pulse {\n                    0%, 100% { box-shadow: 0 0 15px rgba(162, 100, 230, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.3); }\n                    50% { box-shadow: 0 0 30px rgba(216, 51, 117, 0.8), inset 0 0 25px rgba(255, 255, 255, 0.5); }\n                }\n                @keyframes hyper-sweep {\n                    0% { left: -100%; }\n                    20% { left: 200%; }\n                    100% { left: 200%; }\n                }\n\n                /* Cyber Panels & Inputs */\n                .cyber-panel {\n                    background: rgba(15, 10, 25, 0.4);\n                    border: 1px solid rgba(162, 100, 230, 0.15);\n                    border-radius: 12px;\n                    padding: 16px;\n                    position: relative;\n                    box-shadow: inset 0 0 20px rgba(0,0,0,0.3);\n                }\n                .cyber-input {\n                    width: 100%; background: rgba(0,0,0,0.3); color: #E0D4ED;\n                    border: 1px solid rgba(162,100,230,0.2); padding: 16px; border-radius: 8px;\n                    outline: none; font-size: 13px; box-sizing: border-box; margin-top: 4px;\n                    min-height: 100px; resize: vertical; transition: all 0.3s;\n                    font-family: inherit; line-height: 1.6;\n                }\n                .cyber-input:focus {\n                    border-color: rgba(162,100,230,0.6) !important;\n                    background: rgba(162,100,230,0.05);\n                    box-shadow: 0 0 10px rgba(162,100,230,0.1);\n                }\n                .identity-input {\n                    flex: 1; background: transparent; color: #E4E4E7; border: none;\n                    border-bottom: 1px dashed #3F3F46; padding: 4px 0; outline: none;\n                    font-size: 14px; transition: all 0.3s;\n                }\n                .identity-input:focus {\n                    border-bottom-color: #A264E6 !important;\n                }\n\n                /* Save Card & Transitions */\n                .save-card {\n                    transition: all 0.3s;\n                    overflow: hidden;\n                }\n                .save-card:hover {\n                    box-shadow: 0 0 30px rgba(162,100,230,0.2), inset 0 0 20px rgba(162,100,230,0.1);\n                    transform: translateY(-2px);\n                }\n                .load-save-btn {\n                    background: rgba(162,100,230,0.2); border: 1px solid rgba(162,100,230,0.4); \n                    color: #D8C6E6; padding: 6px 16px; border-radius: 20px; font-size: 13px; cursor: pointer;\n                    transition: all 0.3s; letter-spacing: 2px; outline: none;\n                }\n                .load-save-btn:hover {\n                    background: rgba(162,100,230,0.5);\n                    color: #fff;\n                    box-shadow: 0 0 10px rgba(162,100,230,0.5);\n                }\n                .loading-save {\n                    animation: card-glitch 1.2s forwards;\n                    pointer-events: none;\n                }\n                .save-glitch-overlay {\n                    position: absolute; inset: 0; background: rgba(162,100,230,0.3);\n                    mix-blend-mode: overlay; z-index: 10;\n                    animation: scanline-glitch 0.2s infinite;\n                }\n                .save-transition-flash {\n                    position: fixed; inset: 0; background: #fff; opacity: 0;\n                    pointer-events: none; z-index: 100;\n                }\n                .save-transition-flash.active {\n                    animation: full-flash 1.2s forwards;\n                }\n                \n                @keyframes card-glitch {\n                    0% { transform: scale(1); filter: contrast(1); }\n                    20% { transform: scale(1.02) skewX(2deg); filter: contrast(2) hue-rotate(90deg); }\n                    40% { transform: scale(0.98) skewX(-2deg); filter: contrast(3) hue-rotate(-90deg); opacity: 0.8; }\n                    60% { transform: scale(1.05); opacity: 0.5; filter: blur(5px); }\n                    100% { transform: scale(0.8); opacity: 0; filter: blur(10px); }\n                }\n                @keyframes scanline-glitch {\n                    0% { background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(162,100,230,0.5) 3px, rgba(162,100,230,0.5) 4px); }\n                    100% { background: repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(216,51,117,0.5) 5px, rgba(216,51,117,0.5) 6px); }\n                }\n                @keyframes full-flash {\n                    0% { opacity: 0; }\n                    80% { opacity: 1; }\n                    100% { opacity: 1; }\n                }\n            "
    })]
  });
};
export { h as default };