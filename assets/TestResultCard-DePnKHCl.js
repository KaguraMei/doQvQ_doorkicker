import { j as e, r as t, d as i } from "./vendor-react-B2VXkTUV.js";
const o = ({
  msg: t,
  bubbleFontSize: i = 14,
  t: o,
  isSelectionMode: n,
  toggleMessageSelection: r
}) => {
  const l = t.gameResultData || {};
  const s = l.accentColor || l.coverColor || "#9F7AEA";
  const d = l.playerScore != null || l.charScore != null;
  const a = typeof l.image == "string" && l.image.startsWith("data:image/");
  return e.jsxs("div", {
    className: "msg-game-result-card",
    style: {
      background: "#fff",
      color: "#333",
      borderRadius: "14px",
      width: "230px",
      maxWidth: "100%",
      boxSizing: "border-box",
      overflow: "hidden",
      border: "1px solid rgba(0,0,0,0.08)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    },
    onTouchStart: e => {
      e.stopPropagation();
    },
    onClick: e => {
      e.stopPropagation();
      if (n && r) {
        r(t);
      }
    },
    children: [a && e.jsx("div", {
      style: {
        width: "100%",
        aspectRatio: "16 / 9",
        background: `#f0f0f0 url("${l.image}") center/cover no-repeat`
      }
    }), e.jsxs("div", {
      style: {
        background: `linear-gradient(135deg, ${s}33 0%, ${s}11 100%)`,
        padding: "12px 14px",
        borderTop: a ? `3px solid ${s}` : undefined,
        borderBottom: `3px solid ${s}`,
        display: "flex",
        alignItems: "center",
        gap: "8px"
      },
      children: [e.jsx("span", {
        style: {
          fontSize: "20px"
        },
        children: l.gameIcon || "🎮"
      }), e.jsx("span", {
        style: {
          flex: 1,
          fontSize: i * 0.85 + "px",
          fontWeight: "700",
          color: "#555",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: l.gameTitle || o("customGameTitle")
      }), l.badge && e.jsx("span", {
        style: {
          flexShrink: 0,
          fontSize: i * 0.7 + "px",
          fontWeight: "700",
          background: s,
          color: "#fff",
          padding: "2px 8px",
          borderRadius: "10px",
          maxWidth: "80px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: l.badge
      })]
    }), l.resultTitle && e.jsxs("div", {
      style: {
        padding: "12px 14px 4px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      },
      children: [e.jsx("div", {
        style: {
          width: "32px",
          height: "32px",
          borderRadius: "10px",
          background: s,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: `0 4px 12px ${s}55`
        },
        children: e.jsx("span", {
          style: {
            color: "#fff",
            fontSize: "15px",
            fontWeight: "800"
          },
          children: "★"
        })
      }), e.jsx("div", {
        style: {
          fontSize: `${i}px`,
          fontWeight: "700",
          color: s
        },
        children: l.resultTitle
      })]
    }), d && e.jsxs("div", {
      style: {
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
        fontSize: i * 0.9 + "px",
        fontWeight: "700"
      },
      children: [l.playerScore != null && e.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [e.jsx("span", {
          style: {
            fontSize: i * 0.65 + "px",
            color: "#999",
            fontWeight: "500"
          },
          children: o("customGameScoreYou")
        }), e.jsx("span", {
          style: {
            color: s
          },
          children: l.playerScore
        })]
      }), l.playerScore != null && l.charScore != null && e.jsx("span", {
        style: {
          color: "#bbb",
          fontSize: i * 0.7 + "px"
        },
        children: "VS"
      }), l.charScore != null && e.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [e.jsx("span", {
          style: {
            fontSize: i * 0.65 + "px",
            color: "#999",
            fontWeight: "500"
          },
          children: o("customGameScoreChar")
        }), e.jsx("span", {
          style: {
            color: "#666"
          },
          children: l.charScore
        })]
      })]
    }), l.resultSummary && e.jsx("div", {
      style: {
        padding: d || l.resultTitle ? "4px 14px 12px" : "12px 14px",
        fontSize: i * 0.8 + "px",
        color: "#777",
        lineHeight: "1.5",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical"
      },
      children: l.resultSummary
    }), e.jsx("div", {
      style: {
        borderTop: "1px solid #f0f0f0",
        padding: "7px 14px",
        fontSize: i * 0.7 + "px",
        color: "#b0b0b0"
      },
      children: l.footer || o("customGameShareLabel")
    })]
  });
};
const n = ({
  msg: o,
  t: n,
  isSelectionMode: r,
  touchRef: l
}) => {
  var s;
  var d;
  var a;
  const [p, x] = t.useState(false);
  const c = t.useRef(0);
  const g = () => {
    c.current = Date.now();
    x(true);
  };
  const h = () => {
    if (!(Date.now() - c.current < 500)) {
      x(false);
    }
  };
  const f = o.werewolfData || {};
  const u = f.winner === null || f.winner === undefined;
  const y = f.winner === "evil";
  const v = n(y ? "werewolfEvilWin" : "werewolfGoodWin");
  const m = u ? n("werewolfDraw") : v;
  const b = y ? "linear-gradient(135deg, #4A1A1A 0%, #8B2727 100%)" : "linear-gradient(135deg, #1A365D 0%, #2B6CB0 100%)";
  const j = y ? "#FED7D7" : "#BEE3F8";
  const S = y ? "#e53e3e" : "#3182ce";
  const w = f.aiSummary || f.summary;
  const F = w ? w.length > 36 ? w.slice(0, 34) + "…" : w : "";
  return e.jsxs(e.Fragment, {
    children: [e.jsxs("div", {
      className: "msg-werewolf-card",
      style: {
        width: "230px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        background: "#fff",
        cursor: "pointer",
        border: "1px solid rgba(0,0,0,0.05)"
      },
      onTouchStart: e => {
        e.stopPropagation();
      },
      onTouchEnd: e => {
        var t;
        var i;
        e.stopPropagation();
        if (!r && !((t = l == null ? undefined : l.current) == null ? undefined : t.isMoved) && !((i = l == null ? undefined : l.current) == null ? undefined : i.isLongPress)) {
          g();
        }
      },
      onClick: e => {
        var t;
        var i;
        e.stopPropagation();
        if (!r && !((t = l == null ? undefined : l.current) == null ? undefined : t.isMoved) && !((i = l == null ? undefined : l.current) == null ? undefined : i.isLongPress)) {
          g();
        }
      },
      children: [e.jsxs("div", {
        style: {
          background: b,
          padding: "12px",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        },
        children: [e.jsx("div", {
          style: {
            fontSize: "24px",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          },
          children: y ? "🐺" : "🌕"
        }), e.jsxs("div", {
          children: [e.jsxs("div", {
            style: {
              color: j,
              fontSize: "10px",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              textTransform: "uppercase"
            },
            children: ["Werewolf • ", n("day"), " ", f.dayCount || 1]
          }), e.jsx("div", {
            style: {
              color: "#fff",
              fontSize: "15px",
              fontWeight: "900",
              marginTop: "2px",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)"
            },
            children: u ? `🤝 ${n("werewolfDraw")}` : `🏆 ${m} ${n("werewolfWin")}！`
          })]
        })]
      }), f.players && f.players.length > 0 && e.jsxs("div", {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          gap: "5px",
          alignItems: "center",
          flexWrap: "wrap"
        },
        children: [f.players.slice(0, 7).map((t, i) => {
          var o;
          return e.jsxs("div", {
            title: t.name,
            style: {
              position: "relative"
            },
            children: [t.avatar ? e.jsx("img", {
              decoding: "async",
              src: t.avatar,
              alt: t.name,
              style: {
                width: "24px",
                height: "24px",
                borderRadius: "6px",
                objectFit: "cover",
                border: "1px solid " + (t.isAlive ? "#E2E8F0" : "#FEB2B2"),
                filter: t.isAlive ? "none" : "grayscale(100%) opacity(0.5)"
              }
            }) : e.jsx("div", {
              style: {
                width: "24px",
                height: "24px",
                borderRadius: "6px",
                background: "#EDF2F7",
                border: "1px solid " + (t.isAlive ? "#E2E8F0" : "#FEB2B2"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                color: "#A0AEC0",
                filter: t.isAlive ? "none" : "grayscale(100%) opacity(0.5)"
              },
              children: ((o = t.name) == null ? undefined : o[0]) || "?"
            }), !t.isAlive && e.jsx("span", {
              style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E53E3E",
                fontSize: "12px",
                fontWeight: "bold",
                textShadow: "0 0 2px rgba(255,255,255,0.8)"
              },
              children: "×"
            })]
          }, i);
        }), f.players.length > 7 && e.jsxs("span", {
          style: {
            fontSize: "11px",
            color: "#A0AEC0",
            marginLeft: "4px",
            fontWeight: "600"
          },
          children: ["+", f.players.length - 7]
        })]
      }), F && e.jsxs("div", {
        style: {
          padding: "0 12px 12px",
          color: "#4A5568",
          fontSize: "11.5px",
          lineHeight: "1.5",
          fontStyle: "italic"
        },
        children: ["\"", F, "\""]
      }), e.jsxs("div", {
        style: {
          background: "#F7FAFC",
          borderTop: "1px solid #EDF2F7",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [e.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px"
          },
          children: [e.jsx("span", {
            style: {
              fontSize: "12px"
            },
            children: "🎭"
          }), e.jsx("span", {
            style: {
              fontSize: "10px",
              color: "#718096",
              fontWeight: "600",
              letterSpacing: "0.5px"
            },
            children: n("homeAppGameLobby")
          })]
        }), e.jsxs("span", {
          style: {
            fontSize: "10px",
            color: S,
            fontWeight: "700"
          },
          children: [n("werewolfViewReport"), " ›"]
        })]
      })]
    }), p && i.createPortal(e.jsxs("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        backdropFilter: "blur(3px)",
        touchAction: "none"
      },
      onMouseDown: e => {
        if (e.target === e.currentTarget) {
          h();
        }
      },
      onTouchStart: e => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          h();
        }
      },
      onTouchMove: e => e.stopPropagation(),
      onTouchEnd: e => e.stopPropagation(),
      children: [e.jsxs("div", {
        onClick: e => e.stopPropagation(),
        onMouseDown: e => e.stopPropagation(),
        onTouchStart: e => e.stopPropagation(),
        style: {
          background: "#fff",
          borderRadius: "24px 24px 0 0",
          width: "100%",
          maxWidth: "480px",
          maxHeight: "85vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.3)",
          animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          boxSizing: "border-box"
        },
        children: [e.jsxs("div", {
          style: {
            background: b,
            padding: "24px 24px 20px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between"
          },
          children: [e.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "14px"
            },
            children: [e.jsx("div", {
              style: {
                fontSize: "36px",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))"
              },
              children: y ? "🐺" : "🌕"
            }), e.jsxs("div", {
              children: [e.jsx("div", {
                style: {
                  color: j,
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textTransform: "uppercase"
                },
                children: n("werewolfReportTitle")
              }), e.jsx("div", {
                style: {
                  color: "#fff",
                  fontSize: "22px",
                  fontWeight: "900",
                  marginTop: "4px",
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)"
                },
                children: u ? `🤝 ${n("werewolfDraw")}` : `🏆 ${m}`
              })]
            })]
          }), e.jsx("div", {
            onClick: () => x(false),
            style: {
              color: "rgba(255,255,255,0.6)",
              fontSize: "24px",
              cursor: "pointer",
              lineHeight: 1,
              padding: "4px"
            },
            children: "×"
          })]
        }), e.jsxs("div", {
          style: {
            overflowY: "auto",
            flex: 1,
            padding: "20px"
          },
          children: [e.jsx("div", {
            style: {
              display: "flex",
              gap: "8px",
              marginBottom: "20px"
            },
            children: [{
              label: n("callDuration"),
              value: `${f.dayCount || 0} ${n("day")}`,
              color: "#2D3748"
            }, {
              label: n("werewolfAlive"),
              value: `${((s = f.players) == null ? undefined : s.filter(e => e.isAlive).length) || 0}${n("msgGroupMember")}`,
              color: "#319795"
            }, {
              label: n("werewolfDead"),
              value: `${((d = f.players) == null ? undefined : d.filter(e => !e.isAlive).length) || 0}${n("msgGroupMember")}`,
              color: "#E53E3E"
            }].map(({
              label: t,
              value: i,
              color: o
            }) => e.jsxs("div", {
              style: {
                flex: "1 1 0",
                minWidth: 0,
                background: "#F7FAFC",
                borderRadius: "12px",
                padding: "10px 8px",
                textAlign: "center",
                border: "1px solid #EDF2F7",
                overflow: "hidden"
              },
              children: [e.jsx("div", {
                style: {
                  fontSize: "18px",
                  fontWeight: "800",
                  color: o,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: i
              }), e.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "#718096",
                  marginTop: "4px",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: t
              })]
            }, t))
          }), (f.aiSummary || f.summary) && e.jsxs("div", {
            style: {
              background: y ? "#FFF5F5" : "#EBF8FF",
              borderRadius: "16px",
              padding: "16px",
              marginBottom: "24px",
              borderLeft: `4px solid ${S}`
            },
            children: [e.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "8px"
              },
              children: [e.jsx("span", {
                style: {
                  fontSize: "14px"
                },
                children: "✨"
              }), e.jsx("span", {
                style: {
                  fontSize: "12px",
                  color: S,
                  fontWeight: "800",
                  letterSpacing: "0.5px"
                },
                children: n("werewolfAiCommentary")
              })]
            }), e.jsx("div", {
              style: {
                fontSize: "14px",
                color: "#2D3748",
                lineHeight: "1.7",
                fontWeight: "500"
              },
              children: f.aiSummary || f.summary
            })]
          }), e.jsxs("div", {
            style: {
              marginBottom: "24px"
            },
            children: [e.jsxs("div", {
              style: {
                fontSize: "13px",
                color: "#718096",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              },
              children: [e.jsx("span", {
                children: "🎭"
              }), " ", n("werewolfPlayersTitle")]
            }), e.jsx("div", {
              style: {
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                overflow: "hidden"
              },
              children: (a = f.players) == null ? undefined : a.map((t, i) => {
                var o;
                return e.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: i % 2 == 0 ? "#fff" : "#F7FAFC",
                    borderBottom: i < f.players.length - 1 ? "1px solid #EDF2F7" : "none"
                  },
                  children: [e.jsxs("div", {
                    style: {
                      position: "relative"
                    },
                    children: [t.avatar ? e.jsx("img", {
                      decoding: "async",
                      src: t.avatar,
                      alt: t.name,
                      style: {
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        objectFit: "cover",
                        filter: t.isAlive ? "none" : "grayscale(100%) opacity(0.5)",
                        border: "1px solid #E2E8F0"
                      }
                    }) : e.jsx("div", {
                      style: {
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "#EDF2F7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        color: "#A0AEC0",
                        border: "1px solid #E2E8F0"
                      },
                      children: ((o = t.name) == null ? undefined : o[0]) || "?"
                    }), !t.isAlive && e.jsx("div", {
                      style: {
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#E53E3E",
                        fontSize: "20px",
                        fontWeight: "900",
                        textShadow: "0 0 4px rgba(255,255,255,0.8)"
                      },
                      children: "×"
                    })]
                  }), e.jsxs("div", {
                    style: {
                      flex: 1
                    },
                    children: [e.jsxs("div", {
                      style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: t.isAlive ? "#2D3748" : "#A0AEC0",
                        textDecoration: t.isAlive ? "none" : "line-through"
                      },
                      children: [t.name, t.isMe ? ` (${n("redEnvelopeYou")})` : ""]
                    }), e.jsxs("div", {
                      style: {
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "flex",
                        gap: "8px",
                        fontWeight: "500"
                      },
                      children: [e.jsx("span", {
                        style: {
                          color: t.team === "evil" ? "#E53E3E" : t.team === "good" ? "#3182CE" : "#718096",
                          background: t.team === "evil" ? "#FFF5F5" : t.team === "good" ? "#EBF8FF" : "#F7FAFC",
                          padding: "2px 6px",
                          borderRadius: "4px"
                        },
                        children: t.roleName || n("msgUnknown")
                      }), !t.isAlive && e.jsx("span", {
                        style: {
                          color: "#E53E3E",
                          background: "#FFF5F5",
                          padding: "2px 6px",
                          borderRadius: "4px"
                        },
                        children: n("werewolfDead")
                      })]
                    })]
                  })]
                }, i);
              })
            })]
          }), f.history && e.jsxs("div", {
            children: [e.jsxs("div", {
              style: {
                fontSize: "13px",
                color: "#718096",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              },
              children: [e.jsx("span", {
                children: "📜"
              }), " ", n("werewolfHistoryTitle")]
            }), e.jsx("div", {
              style: {
                background: "#F7FAFC",
                borderRadius: "12px",
                padding: "16px",
                border: "1px solid #EDF2F7",
                color: "#4A5568",
                fontSize: "12px",
                lineHeight: "1.7",
                whiteSpace: "pre-wrap",
                fontFamily: "SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace"
              },
              children: f.history
            })]
          })]
        })]
      }), e.jsx("style", {
        children: "\n                        @keyframes slideUp {\n                            from { transform: translateY(100%); }\n                            to { transform: translateY(0); }\n                        }\n                    "
      })]
    }), document.body)]
  });
};
const r = ({
  msg: o,
  t: n,
  isSelectionMode: r,
  touchRef: l
}) => {
  var s;
  var d;
  const [a, p] = t.useState(false);
  const x = t.useRef(0);
  const c = () => {
    x.current = Date.now();
    p(true);
  };
  const g = () => {
    if (!(Date.now() - x.current < 500)) {
      p(false);
    }
  };
  const h = o.mahjongData || {};
  const f = h.winnerName || (n ? n("mahjongDraw") : "流局");
  const u = h.isDraw;
  const y = h.summary ? h.summary.length > 30 ? h.summary.slice(0, 28) + "…" : h.summary : "";
  return e.jsxs(e.Fragment, {
    children: [e.jsxs("div", {
      className: "msg-mahjong-card",
      style: {
        width: "210px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        background: "#fff",
        cursor: "pointer"
      },
      onTouchStart: e => {
        e.stopPropagation();
      },
      onTouchEnd: e => {
        var t;
        var i;
        e.stopPropagation();
        if (!r && !((t = l == null ? undefined : l.current) == null ? undefined : t.isMoved) && !((i = l == null ? undefined : l.current) == null ? undefined : i.isLongPress)) {
          c();
        }
      },
      onClick: e => {
        var t;
        var i;
        e.stopPropagation();
        if (!r && !((t = l == null ? undefined : l.current) == null ? undefined : t.isMoved) && !((i = l == null ? undefined : l.current) == null ? undefined : i.isLongPress)) {
          c();
        }
      },
      children: [e.jsxs("div", {
        style: {
          background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        },
        children: [e.jsx("span", {
          style: {
            fontSize: "20px"
          },
          children: "🀄"
        }), e.jsxs("div", {
          children: [e.jsx("div", {
            style: {
              color: "#D4F7E0",
              fontSize: "9px",
              fontWeight: "600",
              letterSpacing: "1px"
            },
            children: n("mahjongGameTitle") || "麻将对局"
          }), e.jsx("div", {
            style: {
              color: "#fff",
              fontSize: "13px",
              fontWeight: "bold",
              marginTop: "1px"
            },
            children: u ? `🤝 ${n("mahjongDraw") || "流局"}` : `🏆 ${f} ${n("mahjongWin") || "胡牌！"}`
          })]
        })]
      }), h.players && h.players.length > 0 && e.jsxs("div", {
        style: {
          padding: "8px 12px 6px",
          display: "flex",
          gap: "4px",
          alignItems: "center"
        },
        children: [h.players.map((t, i) => {
          var o;
          return e.jsxs("div", {
            title: t.name,
            style: {
              position: "relative"
            },
            children: [t.avatar ? e.jsx("img", {
              decoding: "async",
              src: t.avatar,
              alt: t.name,
              style: {
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                objectFit: "cover",
                border: t.isWinner ? "2px solid #2D6A4F" : "2px solid #E5E7EB"
              }
            }) : e.jsx("div", {
              style: {
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#E5E7EB",
                border: t.isWinner ? "2px solid #2D6A4F" : "2px solid #E5E7EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                color: "#9CA3AF"
              },
              children: ((o = t.name) == null ? undefined : o[0]) || "?"
            }), t.isWinner && e.jsx("span", {
              style: {
                position: "absolute",
                top: "-4px",
                right: "-4px",
                fontSize: "8px"
              },
              children: "👑"
            })]
          }, i);
        }), e.jsxs("span", {
          style: {
            fontSize: "11px",
            color: "#9CA3AF",
            marginLeft: "4px"
          },
          children: [h.players.length, n("mahjongPlayerSuffix") || "人对局"]
        })]
      }), y && e.jsxs("div", {
        style: {
          padding: "0 12px 8px",
          color: "#4A5568",
          fontSize: "11.5px",
          lineHeight: "1.5",
          fontStyle: "italic"
        },
        children: ["\"", y, "\""]
      }), e.jsxs("div", {
        style: {
          background: "#F7FEFA",
          padding: "5px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [e.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "4px"
          },
          children: [e.jsx("span", {
            style: {
              fontSize: "9px"
            },
            children: "🀄"
          }), e.jsx("span", {
            style: {
              fontSize: "10px",
              color: "#9CA3AF"
            },
            children: n("mahjongAppName") || "雀神争霸"
          })]
        }), e.jsxs("span", {
          style: {
            fontSize: "10px",
            color: "#74AA87",
            fontWeight: "600"
          },
          children: [n("mahjongViewDetail") || "查看详情", " ›"]
        })]
      })]
    }), a && i.createPortal(e.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        touchAction: "none"
      },
      onMouseDown: e => {
        if (e.target === e.currentTarget) {
          g();
        }
      },
      onTouchStart: e => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          g();
        }
      },
      onTouchMove: e => e.stopPropagation(),
      onTouchEnd: e => e.stopPropagation(),
      children: e.jsxs("div", {
        onClick: e => e.stopPropagation(),
        onMouseDown: e => e.stopPropagation(),
        onTouchStart: e => e.stopPropagation(),
        style: {
          background: "#fff",
          borderRadius: "24px 24px 0 0",
          width: "100%",
          maxWidth: "480px",
          maxHeight: "80vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 -4px 40px rgba(0,0,0,0.2)",
          boxSizing: "border-box"
        },
        children: [e.jsxs("div", {
          style: {
            background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
            padding: "20px 20px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          },
          children: [e.jsx("span", {
            style: {
              fontSize: "28px"
            },
            children: "🀄"
          }), e.jsxs("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [e.jsx("div", {
              style: {
                color: "#D4F7E0",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "1px"
              },
              children: n("mahjongDetailTitle") || "对局详情"
            }), e.jsx("div", {
              style: {
                color: "#fff",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "2px"
              },
              children: u ? `🤝 ${n("mahjongDraw") || "流局"}` : `🏆 ${f} ${n("mahjongWin") || "胡牌！"}`
            })]
          }), e.jsx("div", {
            onClick: () => p(false),
            style: {
              color: "rgba(255,255,255,0.7)",
              fontSize: "22px",
              cursor: "pointer",
              lineHeight: 1
            },
            children: "×"
          })]
        }), e.jsxs("div", {
          style: {
            overflowY: "auto",
            flex: 1,
            padding: "16px"
          },
          children: [e.jsx("div", {
            style: {
              display: "flex",
              gap: "8px",
              marginBottom: "16px"
            },
            children: [{
              label: n("mahjongStatRounds") || "摸牌数",
              value: h.rounds ?? "—"
            }, {
              label: n("mahjongStatRemain") || "剩余牌",
              value: h.remainWall ?? "—"
            }, {
              label: n("mahjongStatPongKong") || "碰杠",
              value: ((s = h.players) == null ? undefined : s.reduce((e, t) => e + (t.pengCount || 0) + (t.gangCount || 0), 0)) ?? "—"
            }].map(({
              label: t,
              value: i
            }) => e.jsxs("div", {
              style: {
                flex: "1 1 0",
                minWidth: 0,
                background: "#F7FEFA",
                borderRadius: "12px",
                padding: "10px 6px",
                textAlign: "center",
                overflow: "hidden"
              },
              children: [e.jsx("div", {
                style: {
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#1B4332",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: i
              }), e.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "#9CA3AF",
                  marginTop: "2px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: t
              })]
            }, t))
          }), e.jsxs("div", {
            style: {
              marginBottom: "16px"
            },
            children: [e.jsx("div", {
              style: {
                fontSize: "12px",
                color: "#9CA3AF",
                fontWeight: "600",
                letterSpacing: "0.5px",
                marginBottom: "8px"
              },
              children: n("mahjongPlayersTitle") || "参与玩家"
            }), (d = h.players) == null ? undefined : d.map((t, i) => {
              var o;
              return e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 0",
                  borderBottom: i < h.players.length - 1 ? "1px solid #F0F0F0" : "none"
                },
                children: [t.avatar ? e.jsx("img", {
                  decoding: "async",
                  src: t.avatar,
                  alt: t.name,
                  style: {
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: t.isWinner ? "2px solid #2D6A4F" : "2px solid #E5E7EB",
                    flexShrink: 0
                  }
                }) : e.jsx("div", {
                  style: {
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#E5E7EB",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: "#6B7280"
                  },
                  children: ((o = t.name) == null ? undefined : o[0]) || "?"
                }), e.jsxs("div", {
                  style: {
                    flex: 1,
                    minWidth: 0
                  },
                  children: [e.jsxs("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "600",
                      color: t.isWinner ? "#1B4332" : "#2D3748",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    children: [t.isWinner ? "👑 " : "", t.name, t.isHuman ? ` (${n("redEnvelopeYou") || "你"})` : ""]
                  }), e.jsx("div", {
                    style: {
                      fontSize: "11px",
                      color: "#9CA3AF",
                      marginTop: "2px"
                    },
                    children: (t.pengCount || 0) > 0 || (t.gangCount || 0) > 0 ? `${n("mahjongPong") || "碰"} ${t.pengCount || 0} · ${n("mahjongKong") || "杠"} ${t.gangCount || 0}` : n("mahjongNoPongKong") || "未碰杠"
                  })]
                }), t.isWinner && e.jsx("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: "🏆"
                })]
              }, i);
            })]
          }), h.summary && e.jsxs("div", {
            style: {
              background: "#F7FEFA",
              borderRadius: "12px",
              padding: "12px 14px",
              borderLeft: "3px solid #2D6A4F"
            },
            children: [e.jsx("div", {
              style: {
                fontSize: "11px",
                color: "#74AA87",
                fontWeight: "600",
                marginBottom: "6px"
              },
              children: n("mahjongAiCommentary") || "AI 对局点评"
            }), e.jsx("div", {
              style: {
                fontSize: "13px",
                color: "#374151",
                lineHeight: "1.7"
              },
              children: h.summary
            })]
          })]
        })]
      })
    }), document.body)]
  });
};
const l = ({
  msg: o,
  t: n,
  isSelectionMode: r,
  toggleMessageSelection: l,
  touchRef: s,
  bubbleFontSize: d
}) => {
  var a;
  var p;
  var x;
  const [c, g] = t.useState(false);
  const h = t.useRef(0);
  const f = () => {
    h.current = Date.now();
    g(true);
  };
  const u = o.testResultData || {};
  const y = u.failed;
  return e.jsxs(e.Fragment, {
    children: [e.jsx("div", {
      className: "msg-test-result-card",
      style: {
        background: u.bgColor || "#fff",
        color: u.textColor || "#333",
        borderRadius: "14px",
        width: "230px",
        maxWidth: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        textAlign: "left",
        cursor: "pointer"
      },
      onTouchStart: e => {
        e.stopPropagation();
      },
      onTouchEnd: e => {
        var t;
        var i;
        e.stopPropagation();
        if (r) {
          l(o);
        } else if (!((t = s == null ? undefined : s.current) == null ? undefined : t.isMoved) && !((i = s == null ? undefined : s.current) == null ? undefined : i.isLongPress)) {
          f();
        }
      },
      onClick: e => {
        var t;
        var i;
        e.stopPropagation();
        if (r) {
          l(o);
        } else if (!((t = s == null ? undefined : s.current) == null ? undefined : t.isMoved) && !((i = s == null ? undefined : s.current) == null ? undefined : i.isLongPress)) {
          f();
        }
      },
      children: y ? e.jsxs("div", {
        style: {
          padding: "14px"
        },
        children: [e.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px"
          },
          children: [u.testIcon && e.jsx("span", {
            style: {
              fontSize: "20px"
            },
            children: u.testIcon
          }), e.jsx("span", {
            style: {
              fontSize: d * 0.85 + "px",
              fontWeight: "600",
              color: u.textColor || "#555"
            },
            children: u.testTitle || "Test"
          })]
        }), e.jsx("div", {
          style: {
            fontSize: d * 0.8 + "px",
            color: "#e74c3c",
            fontWeight: "600"
          },
          children: n("customTestGenFailed")
        })]
      }) : e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
          style: {
            background: `linear-gradient(135deg, ${u.coverColor || "#9F7AEA"}33 0%, ${u.coverColor || "#9F7AEA"}11 100%)`,
            padding: "14px",
            borderBottom: `3px solid ${u.resultColor || "#9F7AEA"}`
          },
          children: [e.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px"
            },
            children: [u.testIcon && e.jsx("span", {
              style: {
                fontSize: "20px"
              },
              children: u.testIcon
            }), e.jsx("span", {
              style: {
                fontSize: d * 0.85 + "px",
                fontWeight: "600",
                color: u.textColor || "#555"
              },
              children: u.testTitle || "Test"
            })]
          }), e.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [e.jsx("div", {
              style: {
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: `${u.resultColor || "#9F7AEA"}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: `0 4px 12px ${u.resultColor || "#9F7AEA"}55`
              },
              children: e.jsx("span", {
                style: {
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "800"
                },
                children: "★"
              })
            }), e.jsxs("div", {
              children: [e.jsx("div", {
                style: {
                  fontSize: d * 0.75 + "px",
                  color: u.textColor || "#999",
                  opacity: 0.8
                },
                children: n("customTestMyResult")
              }), e.jsx("div", {
                style: {
                  fontSize: `${d}px`,
                  fontWeight: "700",
                  color: u.resultColor || u.textColor || "#333"
                },
                children: u.resultTitle || "—"
              })]
            })]
          })]
        }), u.resultDescription && e.jsx("div", {
          style: {
            padding: "10px 14px",
            fontSize: d * 0.8 + "px",
            color: u.textColor || "#888",
            opacity: 0.85,
            lineHeight: "1.4",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical"
          },
          children: u.resultDescription
        }), e.jsx("div", {
          style: {
            borderTop: "1px solid " + (u.textColor ? u.textColor + "22" : "#f0f0f0"),
            padding: "8px 14px",
            fontSize: d * 0.73 + "px",
            color: u.textColor || "#b0b0b0",
            opacity: 0.7
          },
          children: n("customTestViewResult")
        })]
      })
    }), c && i.createPortal(e.jsxs("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "#0a0a0f",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        touchAction: "none"
      },
      onClick: e => e.stopPropagation(),
      onMouseDown: e => e.stopPropagation(),
      onTouchStart: e => e.stopPropagation(),
      onTouchMove: e => e.stopPropagation(),
      onTouchEnd: e => e.stopPropagation(),
      children: [e.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          padding: "12px 16px",
          paddingTop: "44px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          flexShrink: 0
        },
        children: [e.jsx("div", {
          onClick: () => {
            if (!(Date.now() - h.current < 500)) {
              g(false);
            }
          },
          style: {
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          },
          children: "✕"
        }), e.jsx("div", {
          style: {
            flex: 1,
            textAlign: "center",
            minWidth: 0
          },
          children: e.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            },
            children: [u.testIcon && e.jsx("span", {
              style: {
                fontSize: "18px"
              },
              children: u.testIcon
            }), e.jsx("span", {
              style: {
                fontSize: "16px",
                fontWeight: "700",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: u.testTitle || "Test"
            })]
          })
        }), e.jsx("div", {
          style: {
            width: "36px"
          }
        })]
      }), e.jsx("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          padding: "20px 16px",
          touchAction: "pan-y",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch"
        },
        children: y ? e.jsxs("div", {
          style: {
            textAlign: "center",
            padding: "40px 0"
          },
          children: [e.jsx("div", {
            style: {
              fontSize: "48px",
              marginBottom: "16px"
            },
            children: "❌"
          }), e.jsx("div", {
            style: {
              fontSize: "18px",
              fontWeight: "600",
              color: "#e74c3c",
              marginBottom: "24px"
            },
            children: n("customTestGenFailed")
          }), o.sender === "them" && e.jsx("button", {
            onClick: () => {
              g(false);
              window.dispatchEvent(new CustomEvent("retry-char-test", {
                detail: {
                  testId: u.testId,
                  messageId: o.id
                }
              }));
            },
            style: {
              padding: "12px 32px",
              borderRadius: "24px",
              border: "none",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer"
            },
            children: n("customTestRetry")
          })]
        }) : e.jsxs(e.Fragment, {
          children: [e.jsxs("div", {
            style: {
              textAlign: "center",
              marginBottom: "28px",
              background: `linear-gradient(135deg, ${u.coverColor || "#9F7AEA"}22, transparent)`,
              borderRadius: "16px",
              padding: "24px 16px"
            },
            children: [e.jsx("div", {
              style: {
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: u.resultColor || "#9F7AEA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                boxShadow: `0 8px 20px ${u.resultColor || "#9F7AEA"}55`
              },
              children: e.jsx("span", {
                style: {
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "800"
                },
                children: "★"
              })
            }), e.jsx("div", {
              style: {
                fontSize: "24px",
                fontWeight: "800",
                color: u.resultColor || "#fff",
                marginBottom: "6px"
              },
              children: u.resultTitle || "—"
            }), u.resultDescription && e.jsx("div", {
              style: {
                fontSize: "14px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: "1.5"
              },
              children: u.resultDescription
            })]
          }), u.scores && ((a = u.results) == null ? undefined : a.length) > 0 && e.jsxs("div", {
            style: {
              width: "100%",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "16px",
              padding: "14px",
              marginBottom: "24px"
            },
            children: [e.jsx("div", {
              style: {
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "10px",
                fontWeight: "600"
              },
              children: n("customTestScoreDist")
            }), u.results.map(t => {
              const i = Math.max(...Object.values(u.scores), 1);
              const o = u.scores[t.id] || 0;
              return e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px"
                },
                children: [e.jsx("div", {
                  style: {
                    width: "60px",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.65)",
                    textAlign: "right",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: t.title
                }), e.jsx("div", {
                  style: {
                    flex: 1,
                    height: "8px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "4px",
                    overflow: "hidden"
                  },
                  children: e.jsx("div", {
                    style: {
                      width: o / i * 100 + "%",
                      height: "100%",
                      background: t.color,
                      borderRadius: "4px"
                    }
                  })
                }), e.jsx("div", {
                  style: {
                    width: "24px",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    textAlign: "center"
                  },
                  children: o
                })]
              }, t.id);
            })]
          }), ((p = u.answers) == null ? undefined : p.length) > 0 ? e.jsxs("div", {
            children: [e.jsx("div", {
              style: {
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                fontWeight: "600",
                marginBottom: "12px",
                letterSpacing: "1px"
              },
              children: n("customTestAnswerDetail")
            }), u.answers.map((t, i) => e.jsxs("div", {
              style: {
                marginBottom: "14px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                padding: "12px",
                border: "1px solid rgba(255,255,255,0.06)"
              },
              children: [e.jsxs("div", {
                style: {
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "8px",
                  fontWeight: "600"
                },
                children: [i + 1, ". ", t.question]
              }), t.options.map((i, o) => e.jsxs("div", {
                style: {
                  padding: "8px 10px",
                  marginBottom: "4px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  lineHeight: "1.4",
                  background: o === t.selectedIndex ? `${u.resultColor || "#9F7AEA"}66` : "transparent",
                  color: o === t.selectedIndex ? "#fff" : "rgba(255,255,255,0.4)",
                  border: o === t.selectedIndex ? `1.5px solid ${u.resultColor || "#9F7AEA"}99` : "1px solid transparent",
                  fontWeight: o === t.selectedIndex ? "700" : "400"
                },
                children: [o === t.selectedIndex ? "● " : "○ ", i]
              }, o))]
            }, i))]
          }) : e.jsx("div", {
            style: {
              textAlign: "center",
              color: "rgba(255,255,255,0.3)",
              fontSize: "14px",
              padding: "20px 0"
            },
            children: n("customTestNoAnswerData")
          }), o.sender === "them" && ((x = u.answers) == null ? undefined : x.length) > 0 && e.jsx("div", {
            style: {
              textAlign: "center",
              marginTop: "16px",
              paddingBottom: "20px"
            },
            children: e.jsx("button", {
              onClick: () => {
                g(false);
                window.dispatchEvent(new CustomEvent("retry-char-test", {
                  detail: {
                    testId: u.testId,
                    messageId: o.id
                  }
                }));
              },
              style: {
                padding: "10px 28px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                cursor: "pointer"
              },
              children: n("customTestRetry")
            })
          })]
        })
      })]
    }), document.body)]
  });
};
export { o as G, r as M, l as T, n as W };