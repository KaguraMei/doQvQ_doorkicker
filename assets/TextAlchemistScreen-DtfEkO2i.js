import { r as e, j as a, d as t } from "./vendor-react-B2VXkTUV.js";
import { R as s, a as l, cb as i, Y as n, x as r, cc as c, cd as d, ce as o, d as m, be as h, c as p, A as x } from "./native-pet-CTNtZgMA.js";
import { az as u } from "./main-BO9xa-SQ.js";
import { u as g } from "./useKeyboardResize-30dPsEQL.js";
import { O as j, J as b, a6 as v, T as f, X as y, s as N, P as w, Y as k, U as C, u as S, r as z, bn as T, x as F, co as H, cp as E, q as R, w as P, bF as A, cq as K, cr as M, cs as L, c7 as B } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
function D({
  rule: t,
  onToggle: s,
  onEdit: c,
  onDelete: d,
  manageMode: o,
  selected: m,
  onSelect: h
}) {
  const {
    t: p
  } = l();
  const [x, u] = e.useState(false);
  const g = !!t.isHtmlTemplate;
  const [y, N] = e.useState("");
  e.useEffect(() => {
    if (x && !y) {
      N(i(t));
    }
  }, [x, t, y]);
  const w = e.useMemo(() => x && y ? n(y, [{
    ...t,
    enabled: 1,
    applyOnDisplay: 1,
    scope: "global"
  }], {
    timing: "display",
    scene: "chat",
    role: t.role || "ai",
    userName: "我",
    charName: "小櫻",
    userAvatar: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\"><circle cx=\"32\" cy=\"32\" r=\"32\" fill=\"%23a8c5ff\"/><text x=\"32\" y=\"40\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">U</text></svg>",
    charAvatar: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\"><circle cx=\"32\" cy=\"32\" r=\"32\" fill=\"%23ffb3c1\"/><text x=\"32\" y=\"40\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">C</text></svg>"
  }) : {
    text: "",
    hasHtml: false
  }, [x, y, t]);
  return a.jsxs("div", {
    className: `ta-card ${g ? "html-card" : ""} ${t.enabled ? "" : "disabled"} ${o ? "manage-mode" : ""} ${m ? "selected" : ""}`,
    children: [a.jsxs("div", {
      className: "ta-card-head",
      onClick: () => {
        if (o) {
          if (h) {
            h(t._id);
          }
        } else {
          u(e => !e);
        }
      },
      children: [o ? a.jsx("span", {
        className: "ta-card-check " + (m ? "checked" : ""),
        children: m && a.jsx(j, {
          size: 14
        })
      }) : a.jsxs("label", {
        className: "ta-card-switch " + (t.enabled ? "on" : "off"),
        onClick: e => e.stopPropagation(),
        children: [a.jsx("input", {
          type: "checkbox",
          checked: !!t.enabled,
          onChange: e => s(t._id, e.target.checked)
        }), a.jsxs("span", {
          className: "ta-card-switch-track",
          children: [a.jsx("span", {
            className: "ta-card-switch-label off",
            children: p("taSwitchOff")
          }), a.jsx("span", {
            className: "ta-card-switch-knob"
          }), a.jsx("span", {
            className: "ta-card-switch-label on",
            children: p("taSwitchOn")
          })]
        })]
      }), a.jsxs("div", {
        className: "ta-card-name",
        children: [t.category && a.jsx("span", {
          className: "ta-card-category",
          children: t.category
        }), t.name || ""]
      }), a.jsxs("div", {
        className: "ta-card-tags",
        children: [g && a.jsx("span", {
          className: "ta-tag html",
          children: "HTML"
        }), a.jsx("span", {
          className: `ta-tag scope-${t.scope || "global"}`,
          children: _(t.scope, p)
        }), t.applyOnDisplay ? a.jsx("span", {
          className: "ta-tag timing-display",
          children: p("taTimingDisplay")
        }) : null, t.applyOnPrompt ? a.jsx("span", {
          className: "ta-tag timing-prompt",
          children: p("taTimingPrompt")
        }) : null, t.triggerEnabled ? a.jsx("span", {
          className: "ta-tag trigger",
          title: t.triggerKeywords || "",
          children: "🔑"
        }) : null]
      }), !o && a.jsx("div", {
        className: "ta-card-expand " + (x ? "open" : ""),
        children: a.jsx(b, {
          size: 16
        })
      })]
    }), x && !o && a.jsxs("div", {
      className: "ta-card-body",
      children: [a.jsxs("div", {
        className: "ta-card-actions",
        children: [a.jsxs("button", {
          className: "ta-mini-btn edit",
          onClick: () => c(t),
          children: [a.jsx(v, {
            size: 12
          }), " ", p("taCardEdit")]
        }), a.jsxs("button", {
          className: "ta-mini-btn delete",
          onClick: () => {
            const e = p("taCardConfirmDelete").replace("{name}", t.name || "");
            if (confirm(e)) {
              d(t._id);
            }
          },
          children: [a.jsx(f, {
            size: 12
          }), " ", p("taCardDelete")]
        })]
      }), g && t.cssScope && a.jsx("style", {
        children: r(t.cssScope)
      }), a.jsxs("div", {
        className: "ta-preview-block",
        children: [a.jsxs("div", {
          className: "ta-preview-side",
          children: [a.jsx("div", {
            className: "ta-preview-label",
            children: p("taPreviewIn")
          }), a.jsx("div", {
            className: "ta-preview-bubble input",
            children: a.jsx("textarea", {
              value: y,
              onChange: e => N(e.target.value)
            })
          })]
        }), a.jsxs("div", {
          className: "ta-preview-side",
          children: [a.jsx("div", {
            className: "ta-preview-label",
            children: p("taPreviewOut")
          }), a.jsx("div", {
            className: "ta-preview-bubble output",
            children: w.hasHtml ? a.jsx("div", {
              className: "ta-html-render ta-tpl-scope",
              dangerouslySetInnerHTML: {
                __html: w.text
              }
            }) : a.jsx("span", {
              children: w.text || p("taPreviewNoMatch")
            })
          })]
        })]
      })]
    })]
  });
}
function _(e, a) {
  switch (e) {
    case "character":
      return a("taScopeCharacter");
    case "chat":
      return a("taScopeChat");
    default:
      return a("taScopeGlobal");
  }
}
function I({
  open: s,
  isHtmlTemplate: d,
  initial: o,
  onClose: m,
  onSave: h
}) {
  const {
    t: p
  } = l();
  const [x, u] = e.useState(() => O(o, d));
  const g = e.useRef(d ? "htmlTemplate" : "replacement");
  e.useEffect(() => {
    if (s) {
      u(O(o, d));
      g.current = d ? "htmlTemplate" : "replacement";
    }
  }, [s, o, d]);
  const [j, b] = e.useState(() => typeof window != "undefined" ? window.innerHeight : 0);
  const [v, f] = e.useState(0);
  e.useEffect(() => {
    if (!s || typeof window == "undefined") {
      return;
    }
    const e = window.visualViewport;
    const a = () => {
      b(e ? e.height : window.innerHeight);
      f(e ? e.offsetTop : 0);
    };
    a();
    if (e) {
      e.addEventListener("resize", a);
      e.addEventListener("scroll", a);
      return () => {
        e.removeEventListener("resize", a);
        e.removeEventListener("scroll", a);
      };
    } else {
      window.addEventListener("resize", a);
      return () => window.removeEventListener("resize", a);
    }
  }, [s]);
  const [w, k] = e.useState(() => i(O(o, d)));
  e.useEffect(() => {
    k(i(x));
  }, [x.pattern, x.parseMode, x.htmlTemplate, d]);
  const C = e.useMemo(() => {
    if (!w) {
      return {
        text: "",
        hasHtml: false
      };
    }
    const e = {
      ...x,
      enabled: 1,
      applyOnDisplay: 1,
      scope: "global"
    };
    return n(w, [e], {
      timing: "display",
      scene: "chat",
      role: e.role || "ai",
      userName: "我",
      charName: "小櫻",
      userAvatar: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\"><circle cx=\"32\" cy=\"32\" r=\"32\" fill=\"%23a8c5ff\"/><text x=\"32\" y=\"40\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">U</text></svg>",
      charAvatar: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\"><circle cx=\"32\" cy=\"32\" r=\"32\" fill=\"%23ffb3c1\"/><text x=\"32\" y=\"40\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">C</text></svg>"
    });
  }, [w, x]);
  if (!s) {
    return null;
  }
  const S = e => u(a => ({
    ...a,
    ...e
  }));
  const z = j || (typeof window != "undefined" ? window.innerHeight : 600);
  const T = Math.max(200, z - 16);
  return t.createPortal(a.jsx("div", {
    className: "ta-modal-overlay",
    onClick: m,
    style: {
      top: v,
      bottom: "auto",
      height: z
    },
    children: a.jsxs("div", {
      className: "ta-modal",
      onClick: e => e.stopPropagation(),
      style: {
        maxHeight: T
      },
      children: [a.jsxs("div", {
        className: "ta-modal-head",
        children: [a.jsxs("h3", {
          className: "ta-modal-title",
          children: [p(o ? "taEditorEditTitle" : "taEditorAddTitle"), " · ", p(d ? "taEditorHtml" : "taEditorRegex")]
        }), a.jsx("button", {
          className: "ta-modal-close",
          onClick: m,
          children: a.jsx(y, {
            size: 16
          })
        })]
      }), a.jsxs("div", {
        className: "ta-modal-body",
        children: [a.jsxs("div", {
          className: "ta-field",
          children: [a.jsx("label", {
            className: "ta-field-label",
            children: p("taFieldName")
          }), a.jsx("input", {
            className: "ta-input",
            value: x.name,
            onChange: e => S({
              name: e.target.value
            }),
            placeholder: p(d ? "taFieldNamePhHtml" : "taFieldNamePhRegex")
          })]
        }), a.jsxs("div", {
          className: "ta-field",
          children: [a.jsxs("label", {
            className: "ta-field-label",
            children: [p("taFieldCategory"), a.jsx("span", {
              className: "ta-field-hint",
              children: p("taFieldCategoryHint")
            })]
          }), a.jsx("input", {
            className: "ta-input",
            value: x.category || "",
            onChange: e => S({
              category: e.target.value
            }),
            placeholder: p("taFieldCategoryPh")
          })]
        }), a.jsxs("div", {
          className: "ta-field",
          children: [a.jsxs("label", {
            className: "ta-field-label",
            children: [p("taFieldPattern"), a.jsx("span", {
              className: "ta-field-hint",
              children: p("taFieldPatternHint")
            })]
          }), a.jsx("textarea", {
            className: "ta-textarea code-font",
            style: {
              minHeight: "60px"
            },
            value: x.pattern,
            onChange: e => S({
              pattern: e.target.value
            }),
            onFocus: () => {
              g.current = "pattern";
            },
            placeholder: d ? "<status>([\\s\\S]*?)</status>" : "<think>[\\s\\S]*?</think>"
          })]
        }), a.jsxs("div", {
          className: "ta-field",
          children: [a.jsx("label", {
            className: "ta-field-label",
            children: p("taFieldFlags")
          }), a.jsx("input", {
            className: "ta-input code-font",
            style: {
              width: "100px"
            },
            value: x.flags,
            onChange: e => S({
              flags: e.target.value.replace(/[^gimsuy]/g, "")
            }),
            placeholder: "gi"
          })]
        }), d ? a.jsxs(a.Fragment, {
          children: [a.jsxs("div", {
            className: "ta-field",
            children: [a.jsxs("label", {
              className: "ta-field-label",
              children: [p("taFieldParseMode"), a.jsx("span", {
                className: "ta-field-hint",
                children: p("taFieldParseModeHint")
              })]
            }), a.jsx("div", {
              className: "ta-chip-row",
              children: [{
                id: "text",
                labelKey: "taParseText"
              }, {
                id: "kv",
                labelKey: "taParseKv"
              }, {
                id: "json",
                labelKey: "taParseJson"
              }].map(e => a.jsx("button", {
                className: "ta-chip " + (x.parseMode === e.id ? "selected" : ""),
                onClick: () => S({
                  parseMode: e.id
                }),
                children: p(e.labelKey)
              }, e.id))
            })]
          }), a.jsxs("div", {
            className: "ta-field",
            children: [a.jsxs("label", {
              className: "ta-field-label",
              children: [p("taFieldHtmlTpl"), a.jsx("span", {
                className: "ta-field-hint",
                children: p("taFieldHtmlTplHint")
              })]
            }), a.jsx("textarea", {
              className: "ta-textarea code-font",
              style: {
                minHeight: "110px"
              },
              value: x.htmlTemplate,
              onChange: e => S({
                htmlTemplate: e.target.value
              }),
              onFocus: () => {
                g.current = "htmlTemplate";
              },
              placeholder: "<div class=\"my-card\">{{$1}}</div>"
            })]
          }), a.jsxs("div", {
            className: "ta-field",
            children: [a.jsxs("label", {
              className: "ta-field-label",
              children: [p("taFieldRenderMode"), a.jsx("span", {
                className: "ta-field-hint",
                children: p("taFieldRenderModeHint")
              })]
            }), a.jsx("div", {
              className: "ta-chip-row",
              children: [{
                id: "inline",
                labelKey: "taRenderInline"
              }, {
                id: "iframe",
                labelKey: "taRenderIframe"
              }].map(e => a.jsx("button", {
                className: "ta-chip " + ((x.renderMode || "inline") === e.id ? "selected" : ""),
                onClick: () => S({
                  renderMode: e.id
                }),
                children: p(e.labelKey)
              }, e.id))
            }), a.jsx("div", {
              style: {
                fontSize: "11px",
                color: "var(--ta-mute)",
                lineHeight: 1.5,
                padding: "4px 8px",
                marginTop: "4px"
              },
              children: (x.renderMode || "inline") === "iframe" ? p("taRenderIframeDesc") : p("taRenderInlineDesc")
            })]
          }), a.jsxs("div", {
            className: "ta-field",
            children: [a.jsxs("label", {
              className: "ta-field-label",
              children: [p("taFieldCss"), a.jsx("span", {
                className: "ta-field-hint",
                children: p("taFieldCssHint")
              })]
            }), a.jsx("textarea", {
              className: "ta-textarea code-font",
              style: {
                minHeight: "70px"
              },
              value: x.cssScope || "",
              onChange: e => S({
                cssScope: e.target.value
              }),
              placeholder: ".my-card { padding: 8px; ... }"
            })]
          }), a.jsxs("div", {
            className: "ta-field",
            children: [a.jsxs("label", {
              className: "ta-field-label",
              children: [p("taFieldAiPrompt"), a.jsx("span", {
                className: "ta-field-hint",
                children: p("taFieldAiPromptHint")
              })]
            }), a.jsx("textarea", {
              className: "ta-textarea code-font",
              style: {
                minHeight: "110px"
              },
              value: x.aiPrompt || "",
              onChange: e => S({
                aiPrompt: e.target.value
              }),
              onFocus: () => {
                g.current = "aiPrompt";
              },
              placeholder: "Before your reply, output one line:\n<status>心情:XX|時間:XX|地點:XX</status>"
            }), a.jsx("div", {
              style: {
                fontSize: "11px",
                color: "var(--ta-mute)",
                lineHeight: 1.5,
                padding: "4px 8px",
                marginTop: "4px"
              },
              children: p("taFieldAiPromptDesc")
            })]
          }), a.jsxs("div", {
            className: "ta-field",
            children: [a.jsxs("label", {
              className: "ta-field-label",
              children: [p("taFieldTrigger"), a.jsx("span", {
                className: "ta-field-hint",
                children: p("taFieldTriggerHint")
              })]
            }), a.jsxs("div", {
              className: "ta-switch-row",
              children: [a.jsxs("div", {
                className: "ta-switch-text",
                children: [a.jsx("div", {
                  className: "ta-switch-label",
                  children: p("taFieldTriggerLabel")
                }), a.jsx("div", {
                  className: "ta-switch-desc",
                  children: p("taFieldTriggerDesc")
                })]
              }), a.jsx("input", {
                type: "checkbox",
                className: "ta-master-toggle",
                checked: !!x.triggerEnabled,
                onChange: e => S({
                  triggerEnabled: e.target.checked ? 1 : 0
                })
              })]
            }), !!x.triggerEnabled && a.jsx("textarea", {
              className: "ta-textarea",
              style: {
                minHeight: "60px",
                marginTop: "8px"
              },
              value: x.triggerKeywords || "",
              onChange: e => S({
                triggerKeywords: e.target.value
              }),
              placeholder: p("taFieldTriggerKeywordsPh")
            })]
          })]
        }) : a.jsxs("div", {
          className: "ta-field",
          children: [a.jsxs("label", {
            className: "ta-field-label",
            children: [p("taFieldReplace"), a.jsx("span", {
              className: "ta-field-hint",
              children: p("taFieldReplaceHint")
            })]
          }), a.jsx("textarea", {
            className: "ta-textarea code-font",
            style: {
              minHeight: "60px"
            },
            value: x.replacement,
            onChange: e => S({
              replacement: e.target.value
            }),
            onFocus: () => {
              g.current = "replacement";
            },
            placeholder: "*$1*"
          })]
        }), a.jsxs("div", {
          className: "ta-field",
          children: [a.jsx("label", {
            className: "ta-field-label",
            children: p("taFieldMacros")
          }), a.jsx("div", {
            className: "ta-macro-list",
            children: c.map(e => a.jsx("button", {
              type: "button",
              className: "ta-macro-chip",
              title: e.desc,
              onClick: () => (e => {
                const a = g.current;
                S(a === "htmlTemplate" ? {
                  htmlTemplate: (x.htmlTemplate || "") + e
                } : a === "aiPrompt" ? {
                  aiPrompt: (x.aiPrompt || "") + e
                } : a === "pattern" ? {
                  pattern: (x.pattern || "") + e
                } : {
                  replacement: (x.replacement || "") + e
                });
              })(e.key),
              children: e.key
            }, e.key))
          })]
        }), a.jsxs("div", {
          className: "ta-field",
          children: [a.jsx("label", {
            className: "ta-field-label",
            children: p("taFieldRole")
          }), a.jsx("div", {
            className: "ta-chip-row",
            children: [{
              id: "ai",
              labelKey: "taRoleAi"
            }, {
              id: "user",
              labelKey: "taRoleUser"
            }, {
              id: "both",
              labelKey: "taRoleBoth"
            }].map(e => a.jsx("button", {
              className: "ta-chip " + (x.role === e.id ? "selected" : ""),
              onClick: () => S({
                role: e.id
              }),
              children: p(e.labelKey)
            }, e.id))
          })]
        }), a.jsxs("div", {
          className: "ta-field",
          children: [a.jsx("label", {
            className: "ta-field-label",
            children: p("taFieldScene")
          }), a.jsx("div", {
            className: "ta-chip-row",
            children: [{
              id: "chat",
              labelKey: "taSceneChat"
            }, {
              id: "moments",
              labelKey: "taSceneMoments"
            }, {
              id: "forum",
              labelKey: "taSceneForum"
            }, {
              id: "call",
              labelKey: "taSceneCall"
            }, {
              id: "alarm",
              labelKey: "taSceneAlarm"
            }, {
              id: "recap",
              labelKey: "taSceneRecap"
            }, {
              id: "tm",
              labelKey: "taSceneTm"
            }, {
              id: "desktop_pet",
              labelKey: "taSceneDesktopPet"
            }].map(e => a.jsx("button", {
              className: "ta-chip " + ((x.scenes || []).includes(e.id) ? "selected" : ""),
              onClick: () => (e => {
                const a = new Set(x.scenes || []);
                if (a.has(e)) {
                  a.delete(e);
                } else {
                  a.add(e);
                }
                S({
                  scenes: [...a]
                });
              })(e.id),
              children: p(e.labelKey)
            }, e.id))
          })]
        }), a.jsxs("div", {
          className: "ta-field",
          children: [a.jsx("label", {
            className: "ta-field-label",
            children: p("taFieldTiming")
          }), a.jsxs("div", {
            className: "ta-switch-row",
            children: [a.jsxs("div", {
              className: "ta-switch-text",
              children: [a.jsx("div", {
                className: "ta-switch-label",
                children: p("taTimingDisplayLabel")
              }), a.jsx("div", {
                className: "ta-switch-desc",
                children: p("taTimingDisplayDesc")
              })]
            }), a.jsx("input", {
              type: "checkbox",
              className: "ta-master-toggle",
              checked: !!x.applyOnDisplay,
              onChange: e => S({
                applyOnDisplay: e.target.checked ? 1 : 0
              })
            })]
          }), !d && a.jsxs("div", {
            className: "ta-switch-row",
            style: {
              marginTop: "8px"
            },
            children: [a.jsxs("div", {
              className: "ta-switch-text",
              children: [a.jsx("div", {
                className: "ta-switch-label",
                children: p("taTimingPromptLabel")
              }), a.jsx("div", {
                className: "ta-switch-desc",
                children: p("taTimingPromptDesc")
              })]
            }), a.jsx("input", {
              type: "checkbox",
              className: "ta-master-toggle",
              checked: !!x.applyOnPrompt,
              onChange: e => S({
                applyOnPrompt: e.target.checked ? 1 : 0
              })
            })]
          })]
        }), a.jsxs("div", {
          className: "ta-field",
          children: [a.jsxs("label", {
            className: "ta-field-label",
            children: [p("taFieldPreview"), a.jsx("span", {
              className: "ta-field-hint",
              children: p("taFieldPreviewHint")
            })]
          }), a.jsxs("div", {
            className: "ta-preview-block",
            children: [a.jsxs("div", {
              className: "ta-preview-side",
              children: [a.jsx("div", {
                className: "ta-preview-label",
                children: p("taPreviewIn")
              }), a.jsx("div", {
                className: "ta-preview-bubble input",
                children: a.jsx("textarea", {
                  value: w,
                  onChange: e => k(e.target.value)
                })
              })]
            }), a.jsxs("div", {
              className: "ta-preview-side",
              children: [a.jsx("div", {
                className: "ta-preview-label",
                children: p("taPreviewOut")
              }), a.jsxs("div", {
                className: "ta-preview-bubble output",
                children: [d && x.cssScope && a.jsx("style", {
                  children: r(x.cssScope)
                }), C.hasHtml ? a.jsx("div", {
                  className: "ta-html-render ta-tpl-scope",
                  dangerouslySetInnerHTML: {
                    __html: C.text
                  }
                }) : a.jsx("span", {
                  children: C.text || " "
                })]
              })]
            })]
          })]
        })]
      }), a.jsxs("div", {
        className: "ta-modal-foot",
        children: [a.jsx("button", {
          className: "ta-foot-btn",
          onClick: m,
          children: p("taBtnCancel")
        }), a.jsxs("button", {
          className: "ta-foot-btn save",
          onClick: () => {
            const e = {
              ...x,
              isHtmlTemplate: !!d,
              name: (x.name || "").trim() || (d ? p("taFieldNamePhHtml").slice(0, 8) : p("taFieldNamePhRegex").slice(0, 8))
            };
            h(e);
          },
          children: [a.jsx(N, {
            size: 14,
            style: {
              verticalAlign: "middle",
              marginRight: 4
            }
          }), p("taBtnSave")]
        })]
      })]
    })
  }), document.body);
}
function O(e, a) {
  if (e) {
    return {
      ...e
    };
  } else {
    return {
      name: "",
      category: "",
      enabled: 1,
      isHtmlTemplate: !!a,
      pattern: "",
      flags: "g",
      replacement: "",
      htmlTemplate: "",
      cssScope: "",
      aiPrompt: "",
      parseMode: "text",
      scope: "global",
      characterIds: [],
      scenes: ["chat"],
      role: "ai",
      applyOnDisplay: 1,
      applyOnPrompt: 0,
      trim: 0,
      order: 0,
      triggerEnabled: 0,
      triggerKeywords: ""
    };
  }
}
function $({
  open: e,
  isHtmlTemplate: t,
  existingNames: s,
  onClose: i,
  onAdd: n
}) {
  const {
    t: r
  } = l();
  if (!e) {
    return null;
  }
  const c = t ? d : o;
  return a.jsx("div", {
    className: "ta-modal-overlay",
    onClick: i,
    children: a.jsxs("div", {
      className: "ta-modal",
      onClick: e => e.stopPropagation(),
      children: [a.jsxs("div", {
        className: "ta-modal-head",
        children: [a.jsx("h3", {
          className: "ta-modal-title",
          children: r(t ? "taPresetTitleHtml" : "taPresetTitleRegex")
        }), a.jsx("button", {
          className: "ta-modal-close",
          onClick: i,
          children: a.jsx(y, {
            size: 16
          })
        })]
      }), a.jsx("div", {
        className: "ta-modal-body",
        children: a.jsx("div", {
          className: "ta-preset-grid",
          children: c.map((e, t) => {
            const l = s && s.has(e.name);
            return a.jsxs("div", {
              className: "ta-preset-item " + (l ? "added" : ""),
              onClick: () => !l && n(e),
              children: [a.jsxs("div", {
                className: "ta-preset-item-name",
                children: [l ? a.jsx(j, {
                  size: 14
                }) : a.jsx(w, {
                  size: 14
                }), e.name]
              }), a.jsx("div", {
                className: "ta-preset-item-pattern",
                children: e.pattern
              })]
            }, t);
          })
        })
      })]
    })
  });
}
function U({
  open: t,
  onClose: s,
  onImport: i
}) {
  const {
    t: n
  } = l();
  const [r, c] = e.useState("");
  const [d, o] = e.useState("");
  const [m, h] = e.useState("");
  const p = e.useRef(null);
  const x = e.useMemo(() => {
    if (!r.trim()) {
      return null;
    }
    try {
      return {
        rules: G(JSON.parse(r)),
        error: null
      };
    } catch (e) {
      return {
        rules: [],
        error: e.message
      };
    }
  }, [r]);
  if (t) {
    return a.jsx("div", {
      className: "ta-modal-overlay",
      onClick: s,
      children: a.jsxs("div", {
        className: "ta-modal",
        onClick: e => e.stopPropagation(),
        children: [a.jsxs("div", {
          className: "ta-modal-head",
          children: [a.jsx("h3", {
            className: "ta-modal-title",
            children: n("taImportTitle")
          }), a.jsx("button", {
            className: "ta-modal-close",
            onClick: s,
            children: a.jsx(y, {
              size: 16
            })
          })]
        }), a.jsxs("div", {
          className: "ta-modal-body",
          children: [a.jsx("input", {
            ref: p,
            type: "file",
            accept: ".json,application/json",
            style: {
              display: "none"
            },
            onChange: e => {
              var a;
              const t = (a = e.target.files) == null ? undefined : a[0];
              if (!t) {
                return;
              }
              h(t.name);
              const s = new FileReader();
              s.onload = e => {
                var a;
                const t = String(((a = e.target) == null ? undefined : a.result) || "");
                c(t);
                o("");
              };
              s.onerror = () => o(n("taImportFileReadFail"));
              s.readAsText(t);
              e.target.value = "";
            }
          }), a.jsxs("div", {
            className: "ta-field",
            children: [a.jsxs("label", {
              className: "ta-field-label",
              children: [n("taImportFileLabel"), a.jsx("span", {
                className: "ta-field-hint",
                children: n("taImportFileHint")
              })]
            }), a.jsxs("button", {
              type: "button",
              onClick: () => {
                var e;
                if ((e = p.current) == null) {
                  return undefined;
                } else {
                  return e.click();
                }
              },
              style: {
                width: "100%",
                padding: "24px 16px",
                border: "2px dashed var(--ta-ink)",
                borderRadius: "var(--ta-radius)",
                background: "var(--ta-paper-2)",
                color: "var(--ta-ink)",
                fontFamily: "inherit",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 700,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                transition: "background 0.15s"
              },
              children: [a.jsx(k, {
                size: 28
              }), m || n("taImportFileBtn"), m && a.jsx("span", {
                style: {
                  fontSize: "11px",
                  opacity: 0.7,
                  fontWeight: 500
                },
                children: n("taImportFilePickAgain")
              })]
            })]
          }), (d || x && x.error) && a.jsxs("div", {
            style: {
              padding: "10px 12px",
              background: "var(--ta-paper-2)",
              border: "1.5px solid var(--ta-ink)",
              borderRadius: "var(--ta-radius)",
              fontSize: "12px",
              color: "var(--ta-ink)",
              fontFamily: "monospace"
            },
            children: ["⚠️ ", d || x.error]
          }), x && !x.error && x.rules.length > 0 && a.jsxs("div", {
            className: "ta-field",
            children: [a.jsxs("label", {
              className: "ta-field-label",
              children: [n("taImportPreview"), a.jsxs("span", {
                className: "ta-field-hint",
                children: [x.rules.length, " ", n("taImportRules")]
              })]
            }), a.jsx("div", {
              style: {
                maxHeight: "240px",
                overflowY: "auto",
                border: "1.5px solid var(--ta-ink)",
                borderRadius: "var(--ta-radius)",
                background: "var(--ta-paper-2)",
                padding: "8px"
              },
              children: x.rules.map((e, t) => a.jsxs("div", {
                style: {
                  padding: "6px 8px",
                  borderBottom: t < x.rules.length - 1 ? "1px dashed var(--ta-line)" : "none",
                  fontSize: "11px",
                  fontFamily: "monospace"
                },
                children: [a.jsxs("div", {
                  style: {
                    fontWeight: 800,
                    fontFamily: "inherit"
                  },
                  children: [e.enabled ? "✅" : "⚪", " ", e.name, Array.isArray(e.replacement) && a.jsxs("span", {
                    style: {
                      marginLeft: "8px",
                      opacity: 0.6,
                      fontSize: "10px"
                    },
                    children: ["[", e.replacement.length, " 隨機]"]
                  })]
                }), a.jsx("div", {
                  style: {
                    opacity: 0.7,
                    marginTop: "2px",
                    wordBreak: "break-all"
                  },
                  children: e.pattern.length > 80 ? e.pattern.slice(0, 80) + "..." : e.pattern
                })]
              }, t))
            })]
          })]
        }), a.jsxs("div", {
          className: "ta-modal-foot",
          children: [a.jsx("button", {
            className: "ta-foot-btn",
            onClick: s,
            children: n("taBtnCancel")
          }), a.jsxs("button", {
            className: "ta-foot-btn save",
            onClick: async () => {
              if (x && !x.error && x.rules.length) {
                try {
                  await i(x.rules);
                  c("");
                  h("");
                  o("");
                  s();
                } catch (e) {
                  o(e.message || String(e));
                }
              } else {
                o((x == null ? undefined : x.error) || n("taImportEmpty"));
              }
            },
            disabled: !x || x.error || x.rules.length === 0,
            style: !x || x.error || x.rules.length === 0 ? {
              opacity: 0.4,
              cursor: "not-allowed"
            } : {},
            children: [a.jsx(C, {
              size: 14,
              style: {
                verticalAlign: "middle",
                marginRight: 4
              }
            }), n("taImportConfirm")]
          })]
        })]
      })
    });
  } else {
    return null;
  }
}
function G(e) {
  if (!Array.isArray(e)) {
    throw new Error("需要 JSON 陣列");
  }
  if (e.length > 0 && e[0] && (typeof e[0].pattern == "string" || typeof e[0].htmlTemplate == "string" || e[0].isHtmlTemplate !== undefined)) {
    return e.filter(e => e && typeof e == "object").map((e, a) => {
      const {
        _id: t,
        createdAt: s,
        updatedAt: l,
        ...i
      } = e;
      return {
        ...i,
        order: i.order ?? a
      };
    });
  }
  const a = [];
  let t = 0;
  for (const s of e) {
    if (!s || !Array.isArray(s.subRules)) {
      continue;
    }
    const e = s.name || "未命名";
    const l = s.enabled !== false ? 1 : 0;
    s.subRules.forEach((i, n) => {
      const r = (i.targets || []).filter(e => typeof e == "string" && e);
      if (r.length === 0) {
        return;
      }
      const c = r.map(e => i.mode === "text" ? e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : e);
      const d = c.length === 1 ? c[0] : c.join("|");
      const o = Array.isArray(i.replacements) ? i.replacements.filter(e => typeof e == "string") : [];
      const m = o.length === 0 ? "" : o.length === 1 ? o[0] : o;
      a.push({
        name: s.subRules.length > 1 ? `${e} #${n + 1}` : e,
        category: e,
        enabled: l,
        isHtmlTemplate: false,
        pattern: d,
        flags: "g",
        replacement: m,
        scope: "global",
        scenes: ["chat"],
        role: "ai",
        applyOnDisplay: 1,
        applyOnPrompt: 0,
        order: t++
      });
    });
  }
  if (a.length === 0) {
    throw new Error("沒有找到可匯入的規則");
  }
  return a;
}
function X({
  open: s,
  rules: i,
  onClose: n
}) {
  const {
    t: r
  } = l();
  const [c, d] = e.useState(() => new Set());
  const o = r("taExportNoCategory");
  const {
    regexList: p,
    htmlList: x
  } = e.useMemo(() => ({
    regexList: (i || []).filter(e => !e.isHtmlTemplate),
    htmlList: (i || []).filter(e => !!e.isHtmlTemplate)
  }), [i]);
  e.useEffect(() => {
    if (s) {
      d(new Set((i || []).map(e => e._id)));
    }
  }, [s, i]);
  const [u, g] = e.useState(() => typeof window != "undefined" ? window.innerHeight : 0);
  const [j, b] = e.useState(0);
  e.useEffect(() => {
    if (!s || typeof window == "undefined") {
      return;
    }
    const e = window.visualViewport;
    const a = () => {
      g(e ? e.height : window.innerHeight);
      b(e ? e.offsetTop : 0);
    };
    a();
    if (e) {
      e.addEventListener("resize", a);
      e.addEventListener("scroll", a);
      return () => {
        e.removeEventListener("resize", a);
        e.removeEventListener("scroll", a);
      };
    } else {
      window.addEventListener("resize", a);
      return () => window.removeEventListener("resize", a);
    }
  }, [s]);
  if (!s) {
    return null;
  }
  const v = u || (typeof window != "undefined" ? window.innerHeight : 600);
  const f = Math.max(200, v - 16);
  const N = async (e, a) => {
    const t = e.filter(e => c.has(e._id));
    if (t.length === 0) {
      return;
    }
    const s = t.map(e => {
      const {
        _id: a,
        createdAt: t,
        updatedAt: s,
        ...l
      } = e;
      return l;
    });
    const l = function (e, a) {
      if (e.length === 0) {
        return a;
      }
      const t = new Set(e.map(e => e.category || ""));
      if (t.size === 1 && [...t][0]) {
        return `${[...t][0]}.json`;
      } else if (e.length === 1 && e[0].name) {
        return `${e[0].name}.json`;
      } else {
        return `${a}-${e.length}.json`;
      }
    }(t, a);
    await async function (e, a) {
      const t = JSON.stringify(e, null, 2);
      const s = new Blob([t], {
        type: "application/json"
      });
      const l = a.replace(/[\\/:*?"<>|]/g, "_");
      if (m() && (await h(s, l)).success) {
        return;
      }
      const i = URL.createObjectURL(s);
      const n = document.createElement("a");
      n.href = i;
      n.download = l;
      document.body.appendChild(n);
      n.click();
      document.body.removeChild(n);
      URL.revokeObjectURL(i);
    }(s, l);
  };
  const w = (i || []).length;
  const k = c.size;
  const C = p.filter(e => c.has(e._id)).length;
  const F = x.filter(e => c.has(e._id)).length;
  const H = (e, t, s, l) => {
    if (e.length === 0) {
      return null;
    }
    const i = new Map();
    for (const a of e) {
      const e = a.category || o;
      if (!i.has(e)) {
        i.set(e, []);
      }
      i.get(e).push(a);
    }
    const n = [...i.entries()].map(([e, a]) => ({
      name: e,
      list: a
    }));
    return a.jsxs("div", {
      className: "ta-export-type",
      children: [a.jsxs("div", {
        className: "ta-export-type-head",
        children: [a.jsx(s, {
          size: 14
        }), a.jsx("span", {
          children: r(t)
        }), a.jsx("span", {
          className: "ta-export-type-count",
          children: e.length
        })]
      }), n.map(({
        name: e,
        list: t
      }) => {
        const s = t.map(e => e._id);
        const l = s.every(e => c.has(e));
        const i = !l && s.some(e => c.has(e));
        return a.jsxs("div", {
          className: "ta-export-group",
          children: [a.jsxs("label", {
            className: "ta-export-group-head",
            children: [a.jsx("input", {
              type: "checkbox",
              className: "ta-export-cb",
              checked: l,
              ref: e => {
                if (e) {
                  e.indeterminate = i;
                }
              },
              onChange: () => (e => {
                const a = e.map(e => e._id);
                const t = a.every(e => c.has(e));
                const s = new Set(c);
                if (t) {
                  a.forEach(e => s.delete(e));
                } else {
                  a.forEach(e => s.add(e));
                }
                d(s);
              })(t)
            }), a.jsx("span", {
              className: "ta-export-group-name",
              children: e
            }), a.jsx("span", {
              className: "ta-export-group-count",
              children: t.length
            })]
          }), a.jsx("div", {
            className: "ta-export-rule-list",
            children: t.map(e => a.jsxs("label", {
              className: "ta-export-rule-item",
              children: [a.jsx("input", {
                type: "checkbox",
                className: "ta-export-cb",
                checked: c.has(e._id),
                onChange: () => (e => {
                  const a = new Set(c);
                  if (a.has(e)) {
                    a.delete(e);
                  } else {
                    a.add(e);
                  }
                  d(a);
                })(e._id)
              }), a.jsx("span", {
                style: {
                  flex: 1,
                  fontSize: "13px",
                  color: "var(--ta-ink)",
                  opacity: e.enabled ? 1 : 0.5,
                  wordBreak: "break-all"
                },
                children: e.name || ""
              }), !e.enabled && a.jsx("span", {
                style: {
                  fontSize: "10px",
                  color: "var(--ta-mute)"
                },
                children: "OFF"
              })]
            }, e._id))
          })]
        }, e);
      })]
    });
  };
  return t.createPortal(a.jsx("div", {
    className: "ta-modal-overlay",
    onClick: n,
    style: {
      top: j,
      bottom: "auto",
      height: v
    },
    children: a.jsxs("div", {
      className: "ta-modal",
      onClick: e => e.stopPropagation(),
      style: {
        maxHeight: f
      },
      children: [a.jsxs("div", {
        className: "ta-modal-head",
        children: [a.jsx("h3", {
          className: "ta-modal-title",
          children: r("taExportTitle")
        }), a.jsx("button", {
          className: "ta-modal-close",
          onClick: n,
          children: a.jsx(y, {
            size: 16
          })
        })]
      }), a.jsxs("div", {
        className: "ta-modal-body",
        children: [a.jsxs("div", {
          style: {
            display: "flex",
            gap: "8px",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [a.jsxs("span", {
            style: {
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--ta-ink)"
            },
            children: [r("taExportSelected"), ": ", k, " / ", w]
          }), a.jsxs("div", {
            style: {
              display: "flex",
              gap: "6px"
            },
            children: [a.jsx("button", {
              className: "ta-mini-btn",
              onClick: () => d(new Set((i || []).map(e => e._id))),
              children: r("taExportSelectAll")
            }), a.jsx("button", {
              className: "ta-mini-btn",
              onClick: () => d(new Set()),
              children: r("taExportSelectNone")
            })]
          })]
        }), w === 0 ? a.jsx("div", {
          style: {
            textAlign: "center",
            padding: "40px 20px",
            color: "var(--ta-mute)"
          },
          children: r("taExportEmpty")
        }) : a.jsxs(a.Fragment, {
          children: [H(p, "taTabRegex", z), H(x, "taTabHtml", T)]
        })]
      }), a.jsxs("div", {
        className: "ta-modal-foot ta-export-foot",
        children: [a.jsxs("button", {
          className: "ta-foot-btn",
          onClick: async () => N(p, r("taExportRegexDefault")),
          disabled: C === 0,
          style: C === 0 ? {
            opacity: 0.4,
            cursor: "not-allowed"
          } : {},
          children: [a.jsx(S, {
            size: 12,
            style: {
              verticalAlign: "middle",
              marginRight: 4
            }
          }), r("taExportDlRegex"), " (", C, ")"]
        }), a.jsxs("button", {
          className: "ta-foot-btn save",
          onClick: async () => N(x, r("taExportHtmlDefault")),
          disabled: F === 0,
          style: F === 0 ? {
            opacity: 0.4,
            cursor: "not-allowed"
          } : {},
          children: [a.jsx(S, {
            size: 12,
            style: {
              verticalAlign: "middle",
              marginRight: 4
            }
          }), r("taExportDlHtml"), " (", F, ")"]
        })]
      })]
    })
  }), document.body);
}
const J = [{
  id: "chat",
  labelKey: "taSceneChat"
}, {
  id: "moments",
  labelKey: "taSceneMoments"
}, {
  id: "forum",
  labelKey: "taSceneForum"
}, {
  id: "call",
  labelKey: "taSceneCall"
}, {
  id: "alarm",
  labelKey: "taSceneAlarm"
}, {
  id: "recap",
  labelKey: "taSceneRecap"
}, {
  id: "tm",
  labelKey: "taSceneTm"
}, {
  id: "desktop_pet",
  labelKey: "taSceneDesktopPet"
}];
const W = [{
  id: "ai",
  labelKey: "taRoleAi"
}, {
  id: "user",
  labelKey: "taRoleUser"
}, {
  id: "both",
  labelKey: "taRoleBoth"
}];
function q({
  open: t,
  mode: s,
  selectedCount: i,
  existingCategories: n,
  onClose: r,
  onApply: c
}) {
  const {
    t: d
  } = l();
  const [o, m] = e.useState(["chat"]);
  const [h, p] = e.useState("");
  const [x, u] = e.useState("ai");
  e.useEffect(() => {
    if (t) {
      m(["chat"]);
      p("");
      u("ai");
    }
  }, [t, s]);
  if (!t) {
    return null;
  }
  const g = s === "scenes" ? "taBulkSetScenesTitle" : s === "role" ? "taBulkSetRoleTitle" : "taBulkSetCategoryTitle";
  return a.jsx("div", {
    className: "ta-modal-overlay",
    onClick: r,
    children: a.jsxs("div", {
      className: "ta-modal",
      onClick: e => e.stopPropagation(),
      children: [a.jsxs("div", {
        className: "ta-modal-head",
        children: [a.jsxs("h3", {
          className: "ta-modal-title",
          children: [d(g), " · ", a.jsx("span", {
            style: {
              fontSize: "12px",
              color: "var(--ta-mute)"
            },
            children: d("taBulkSelectedCount").replace("{count}", i)
          })]
        }), a.jsx("button", {
          className: "ta-modal-close",
          onClick: r,
          children: a.jsx(y, {
            size: 16
          })
        })]
      }), a.jsx("div", {
        className: "ta-modal-body",
        children: s === "scenes" ? a.jsxs("div", {
          className: "ta-field",
          children: [a.jsxs("label", {
            className: "ta-field-label",
            children: [d("taFieldScene"), a.jsx("span", {
              className: "ta-field-hint",
              children: d("taBulkScenesHint")
            })]
          }), a.jsx("div", {
            className: "ta-chip-row",
            children: J.map(e => a.jsx("button", {
              className: "ta-chip " + (o.includes(e.id) ? "selected" : ""),
              onClick: () => {
                a = e.id;
                m(e => {
                  const t = new Set(e);
                  if (t.has(a)) {
                    t.delete(a);
                  } else {
                    t.add(a);
                  }
                  return [...t];
                });
                return;
                var a;
              },
              children: d(e.labelKey)
            }, e.id))
          })]
        }) : s === "role" ? a.jsxs("div", {
          className: "ta-field",
          children: [a.jsxs("label", {
            className: "ta-field-label",
            children: [d("taFieldRole"), a.jsx("span", {
              className: "ta-field-hint",
              children: d("taBulkRoleHint")
            })]
          }), a.jsx("div", {
            className: "ta-chip-row",
            children: W.map(e => a.jsx("button", {
              className: "ta-chip " + (x === e.id ? "selected" : ""),
              onClick: () => u(e.id),
              children: d(e.labelKey)
            }, e.id))
          })]
        }) : a.jsxs("div", {
          className: "ta-field",
          children: [a.jsxs("label", {
            className: "ta-field-label",
            children: [d("taFieldCategory"), a.jsx("span", {
              className: "ta-field-hint",
              children: d("taBulkCategoryHint")
            })]
          }), a.jsx("input", {
            className: "ta-input",
            value: h,
            onChange: e => p(e.target.value),
            placeholder: d("taFieldCategoryPh"),
            list: "ta-bulk-cat-list"
          }), a.jsx("datalist", {
            id: "ta-bulk-cat-list",
            children: (n || []).map(e => a.jsx("option", {
              value: e
            }, e))
          }), n && n.length > 0 && a.jsx("div", {
            className: "ta-cat-chips",
            style: {
              marginTop: 8
            },
            children: n.map(e => a.jsx("button", {
              className: "ta-cat-chip " + (h === e ? "selected" : ""),
              onClick: () => p(e),
              children: e
            }, e))
          })]
        })
      }), a.jsxs("div", {
        className: "ta-modal-foot",
        children: [a.jsx("button", {
          className: "ta-foot-btn",
          onClick: r,
          children: d("taBtnCancel")
        }), a.jsxs("button", {
          className: "ta-foot-btn save",
          onClick: () => {
            c(s === "scenes" ? {
              scenes: o
            } : s === "role" ? {
              role: x
            } : {
              category: (h || "").trim()
            });
          },
          children: [a.jsx(N, {
            size: 14,
            style: {
              verticalAlign: "middle",
              marginRight: 4
            }
          }), d("taBtnSave")]
        })]
      })]
    })
  });
}
function V() {
  const {
    currentScreen: t,
    showScreen: i
  } = p();
  const {
    t: n
  } = l();
  const r = t === "text-alchemist-screen";
  g("text-alchemist-screen");
  const [c, d] = e.useState("regex");
  const [o, m] = e.useState(false);
  const [h, j] = e.useState(null);
  const [b, v] = e.useState(false);
  const [y, N] = e.useState(false);
  const [k, _] = e.useState(false);
  const [O, J] = e.useState("");
  const [W, V] = e.useState("all");
  const [Y, Q] = e.useState(() => new Set());
  const [Z, ee] = e.useState(false);
  const [ae, te] = e.useState(() => new Set());
  const [se, le] = e.useState(null);
  const {
    rules: ie,
    regexRules: ne,
    templateRules: re,
    loading: ce,
    add: de,
    update: oe,
    toggle: me,
    remove: he,
    bulkUpdate: pe,
    bulkToggle: xe,
    bulkRemove: ue
  } = function () {
    const [a, t] = e.useState([]);
    const [l, i] = e.useState(true);
    const n = e.useCallback(async () => {
      try {
        const e = await s.getAll();
        t(Array.isArray(e) ? e : []);
      } catch (e) {
        console.error("[useRegexRules] reload error:", e);
      } finally {
        i(false);
      }
    }, []);
    const r = e.useCallback(async () => {
      await n();
      u();
    }, [n]);
    e.useEffect(() => {
      n();
    }, [n]);
    const c = e.useCallback(async e => {
      await s.add(e);
      await r();
    }, [r]);
    const d = e.useCallback(async (e, a) => {
      await s.update(e, a);
      await r();
    }, [r]);
    const o = e.useCallback(async (e, a) => {
      await s.toggle(e, a);
      await r();
    }, [r]);
    const m = e.useCallback(async e => {
      await s.delete(e);
      await r();
    }, [r]);
    const h = e.useCallback(async (e, a) => {
      await s.bulkUpdate(e, a);
      await r();
    }, [r]);
    const p = e.useCallback(async (e, a) => {
      await s.bulkToggle(e, a);
      await r();
    }, [r]);
    const x = e.useCallback(async e => {
      await s.bulkDelete(e);
      await r();
    }, [r]);
    const g = e.useCallback(async e => {
      await Promise.all(e.map((e, a) => s.update(e, {
        order: a * 10
      })));
      await r();
    }, [r]);
    const j = e.useMemo(() => a.filter(e => !e.isHtmlTemplate), [a]);
    const b = e.useMemo(() => a.filter(e => e.isHtmlTemplate), [a]);
    return {
      rules: a,
      regexRules: j,
      templateRules: b,
      loading: l,
      reload: n,
      add: c,
      update: d,
      toggle: o,
      remove: m,
      reorder: g,
      bulkUpdate: h,
      bulkToggle: p,
      bulkRemove: x
    };
  }();
  const ge = c === "html";
  const je = ge ? re : ne;
  const be = e.useMemo(() => new Set(je.map(e => e.name)), [je]);
  const ve = n("taExportNoCategory");
  const fe = e.useMemo(() => {
    const e = new Set();
    for (const a of je) {
      e.add(a.category || ve);
    }
    return [...e];
  }, [je, ve]);
  const ye = e.useMemo(() => {
    let e = je;
    if (W !== "all") {
      e = e.filter(e => (e.category || ve) === W);
    }
    if (O.trim()) {
      const a = O.toLowerCase();
      e = e.filter(e => (e.name || "").toLowerCase().includes(a) || (e.pattern || "").toLowerCase().includes(a) || (e.category || "").toLowerCase().includes(a));
    }
    return e;
  }, [je, W, O, ve]);
  const Ne = e.useMemo(() => {
    const e = new Map();
    for (const a of ye) {
      const t = a.category || ve;
      if (!e.has(t)) {
        e.set(t, []);
      }
      e.get(t).push(a);
    }
    return [...e.entries()].map(([e, a]) => ({
      name: e,
      list: a
    }));
  }, [ye, ve]);
  const we = e => {
    te(a => {
      const t = new Set(a);
      if (t.has(e)) {
        t.delete(e);
      } else {
        t.add(e);
      }
      return t;
    });
  };
  const ke = e => {
    j(e);
    m(true);
  };
  e.useEffect(() => {
    const e = async e => {
      const {
        payload: a
      } = e.detail || {};
      if (a) {
        try {
          let e;
          if (Array.isArray(a)) {
            e = a;
          } else if (Array.isArray(a.rules)) {
            e = a.rules;
          } else {
            if (a.pattern === undefined || a.replacement === undefined) {
              x("正則格式無法識別，請聯繫作者");
              return;
            }
            e = [a];
          }
          const t = G(e);
          if (!t || t.length === 0) {
            x("沒有可導入的規則");
            return;
          }
          for (const a of t) {
            await de(a);
          }
        } catch (t) {
          console.error("[TextAlchemist] Land import failed:", t);
          x(`正則導入失敗：${t.message || t}`);
        }
      }
    };
    window.addEventListener("nuojiji:import-regex", e);
    return () => window.removeEventListener("nuojiji:import-regex", e);
  }, []);
  return a.jsx("div", {
    id: "text-alchemist-screen",
    className: "screen " + (r ? "active" : ""),
    children: a.jsxs("div", {
      className: "text-alchemist-container",
      children: [a.jsxs("header", {
        className: "ta-header",
        children: [a.jsx("button", {
          className: "ta-back-btn",
          onClick: () => i("home-screen"),
          children: a.jsx(F, {
            size: 22
          })
        }), a.jsx("h1", {
          className: "ta-title",
          children: n("taTitle")
        })]
      }), a.jsx("div", {
        className: "ta-tabs-wrapper",
        children: a.jsxs("div", {
          className: "ta-tabs",
          children: [a.jsxs("button", {
            className: "ta-tab " + (c === "regex" ? "active" : ""),
            onClick: () => d("regex"),
            children: [a.jsx(z, {
              size: 14
            }), " ", n("taTabRegex"), a.jsx("span", {
              children: ne.length
            })]
          }), a.jsxs("button", {
            className: "ta-tab " + (c === "html" ? "active" : ""),
            onClick: () => d("html"),
            children: [a.jsx(T, {
              size: 14
            }), " ", n("taTabHtml"), a.jsx("span", {
              children: re.length
            })]
          })]
        })
      }), a.jsxs("div", {
        className: "ta-content",
        children: [a.jsxs("div", {
          className: "ta-toolbar",
          children: [a.jsxs("div", {
            className: "ta-toolbar-hint",
            children: [n("taToolbarHint1"), a.jsx("span", {
              className: "ta-toggle-mini"
            }), n("taToolbarHint2")]
          }), a.jsxs("button", {
            className: "ta-tool-btn preset",
            onClick: () => v(true),
            children: [a.jsx(H, {
              size: 14
            }), " ", n("taPresetBtn")]
          }), a.jsxs("button", {
            className: "ta-tool-btn",
            onClick: () => N(true),
            children: [a.jsx(C, {
              size: 14
            }), " ", n("taImportBtn")]
          }), a.jsxs("button", {
            className: "ta-tool-btn",
            onClick: () => {
              if (ie && ie.length !== 0) {
                _(true);
              } else {
                alert(n("taExportEmpty"));
              }
            },
            children: [a.jsx(S, {
              size: 14
            }), " ", n("taExportBtn")]
          }), a.jsxs("button", {
            className: "ta-tool-btn " + (Z ? "primary" : ""),
            onClick: () => {
              ee(e => {
                if (e) {
                  te(new Set());
                }
                return !e;
              });
            },
            children: [a.jsx(E, {
              size: 14
            }), " ", n(Z ? "taManageExit" : "taManageBtn")]
          }), !Z && a.jsxs("button", {
            className: "ta-tool-btn primary",
            onClick: () => {
              j(null);
              m(true);
            },
            children: [a.jsx(w, {
              size: 14
            }), " ", n("taAddBtn")]
          })]
        }), !ce && je.length >= 4 && a.jsxs("div", {
          className: "ta-filter-bar",
          children: [a.jsxs("div", {
            className: "ta-search-wrap",
            children: [a.jsx(R, {
              size: 14,
              className: "ta-search-icon"
            }), a.jsx("input", {
              type: "text",
              className: "ta-search-input",
              placeholder: n("taSearchPlaceholder"),
              value: O,
              onChange: e => J(e.target.value)
            }), O && a.jsx("button", {
              className: "ta-search-clear",
              onClick: () => J(""),
              children: "×"
            })]
          }), fe.length > 1 && a.jsxs("div", {
            className: "ta-cat-chips",
            children: [a.jsx("button", {
              className: "ta-cat-chip " + (W === "all" ? "selected" : ""),
              onClick: () => V("all"),
              children: n("taFilterAll")
            }), fe.map(e => a.jsx("button", {
              className: "ta-cat-chip " + (W === e ? "selected" : ""),
              onClick: () => V(e),
              children: e
            }, e))]
          })]
        }), ce ? a.jsxs("div", {
          className: "ta-empty",
          children: [a.jsx("span", {
            className: "ta-empty-emoji",
            children: "⏳"
          }), a.jsx("div", {
            className: "ta-empty-text",
            children: n("taLoading")
          })]
        }) : je.length === 0 ? a.jsxs("div", {
          className: "ta-empty",
          children: [a.jsx("span", {
            className: "ta-empty-emoji",
            children: ge ? "🎨" : "✨"
          }), a.jsx("div", {
            className: "ta-empty-text",
            children: n(ge ? "taEmptyHtml" : "taEmptyRegex")
          }), a.jsx("div", {
            className: "ta-empty-hint",
            children: n("taEmptyHint")
          })]
        }) : ye.length === 0 ? a.jsxs("div", {
          className: "ta-empty",
          children: [a.jsx("span", {
            className: "ta-empty-emoji",
            children: "🔍"
          }), a.jsx("div", {
            className: "ta-empty-text",
            children: n("taFilterNoMatch")
          }), a.jsx("div", {
            className: "ta-empty-hint",
            children: n("taFilterNoMatchHint")
          })]
        }) : Ne.map(({
          name: e,
          list: t
        }) => {
          const s = Y.has(e);
          const l = t.filter(e => e.enabled).length;
          return a.jsxs("div", {
            className: "ta-group",
            children: [a.jsxs("div", {
              className: "ta-group-head",
              children: [a.jsx("button", {
                className: "ta-group-toggle",
                onClick: () => (e => {
                  Q(a => {
                    const t = new Set(a);
                    if (t.has(e)) {
                      t.delete(e);
                    } else {
                      t.add(e);
                    }
                    return t;
                  });
                })(e),
                children: a.jsx(P, {
                  size: 14,
                  style: {
                    transform: s ? "rotate(0deg)" : "rotate(90deg)",
                    transition: "transform 0.15s"
                  }
                })
              }), a.jsx("span", {
                className: "ta-group-name",
                children: e
              }), a.jsxs("span", {
                className: "ta-group-count",
                children: [l, "/", t.length]
              }), a.jsx("div", {
                className: "ta-group-actions",
                children: Z ? a.jsx("button", {
                  className: "ta-group-btn",
                  title: n("taBulkSelectGroup"),
                  onClick: () => (e => {
                    te(a => {
                      const t = new Set(a);
                      if (e.every(e => t.has(e._id))) {
                        for (const s of e) {
                          t.delete(s._id);
                        }
                      } else {
                        for (const s of e) {
                          t.add(s._id);
                        }
                      }
                      return t;
                    });
                  })(t),
                  children: a.jsx(A, {
                    size: 12
                  })
                }) : a.jsxs(a.Fragment, {
                  children: [a.jsx("button", {
                    className: "ta-group-btn",
                    title: n("taGroupEnableAll"),
                    onClick: () => (async e => {
                      const a = e.filter(e => !e.enabled).map(e => e._id);
                      if (a.length !== 0) {
                        await xe(a, true);
                      }
                    })(t),
                    children: a.jsx(K, {
                      size: 12
                    })
                  }), a.jsx("button", {
                    className: "ta-group-btn",
                    title: n("taGroupDisableAll"),
                    onClick: () => (async e => {
                      const a = e.filter(e => e.enabled).map(e => e._id);
                      if (a.length !== 0) {
                        await xe(a, false);
                      }
                    })(t),
                    children: a.jsx(M, {
                      size: 12
                    })
                  }), a.jsx("button", {
                    className: "ta-group-btn danger",
                    title: n("taGroupDelete"),
                    onClick: () => (async (e, a) => {
                      if (!confirm(n("taGroupConfirmDelete").replace("{name}", e).replace("{count}", a.length))) {
                        return;
                      }
                      const t = a.map(e => e._id);
                      if (t.length !== 0) {
                        await ue(t);
                      }
                    })(e, t),
                    children: a.jsx(f, {
                      size: 12
                    })
                  })]
                })
              })]
            }), !s && a.jsx("div", {
              className: "ta-group-cards",
              children: t.map(e => a.jsx(D, {
                rule: e,
                onToggle: me,
                onEdit: ke,
                onDelete: he,
                manageMode: Z,
                selected: ae.has(e._id),
                onSelect: we
              }, e._id))
            })]
          }, e);
        }), Z && a.jsxs("div", {
          className: "ta-bulk-bar",
          children: [a.jsxs("div", {
            className: "ta-bulk-info",
            children: [a.jsx("span", {
              className: "ta-bulk-count",
              children: n("taBulkSelectedCount").replace("{count}", ae.size)
            }), a.jsx("button", {
              className: "ta-bulk-link",
              onClick: () => {
                te(new Set(ye.map(e => e._id)));
              },
              children: n("taBulkSelectAllVisible")
            }), ae.size > 0 && a.jsx("button", {
              className: "ta-bulk-link",
              onClick: () => te(new Set()),
              children: n("taBulkClear")
            })]
          }), a.jsxs("div", {
            className: "ta-bulk-actions",
            children: [a.jsxs("button", {
              className: "ta-bulk-btn",
              disabled: ae.size === 0,
              onClick: () => le("scenes"),
              children: [a.jsx(z, {
                size: 12
              }), " ", n("taBulkSetScenes")]
            }), a.jsxs("button", {
              className: "ta-bulk-btn",
              disabled: ae.size === 0,
              onClick: () => le("category"),
              children: [a.jsx(L, {
                size: 12
              }), " ", n("taBulkSetCategory")]
            }), a.jsxs("button", {
              className: "ta-bulk-btn",
              disabled: ae.size === 0,
              onClick: () => le("role"),
              children: [a.jsx(B, {
                size: 12
              }), " ", n("taBulkSetRole")]
            }), a.jsxs("button", {
              className: "ta-bulk-btn",
              disabled: ae.size === 0,
              onClick: async () => {
                const e = [...ae];
                if (e.length !== 0) {
                  await xe(e, true);
                }
              },
              children: [a.jsx(K, {
                size: 12
              }), " ", n("taGroupEnableAll")]
            }), a.jsxs("button", {
              className: "ta-bulk-btn",
              disabled: ae.size === 0,
              onClick: async () => {
                const e = [...ae];
                if (e.length !== 0) {
                  await xe(e, false);
                }
              },
              children: [a.jsx(M, {
                size: 12
              }), " ", n("taGroupDisableAll")]
            }), a.jsxs("button", {
              className: "ta-bulk-btn danger",
              disabled: ae.size === 0,
              onClick: async () => {
                if (!confirm(n("taBulkConfirmDelete").replace("{count}", ae.size))) {
                  return;
                }
                const e = [...ae];
                te(new Set());
                if (e.length !== 0) {
                  await ue(e);
                }
              },
              children: [a.jsx(f, {
                size: 12
              }), " ", n("taCardDelete")]
            })]
          })]
        })]
      }), a.jsx(I, {
        open: o,
        isHtmlTemplate: ge,
        initial: h,
        onClose: () => {
          m(false);
          j(null);
        },
        onSave: async e => {
          if (h && h._id) {
            await oe(h._id, e);
          } else {
            await de(e);
          }
          m(false);
          j(null);
        }
      }), a.jsx($, {
        open: b,
        isHtmlTemplate: ge,
        existingNames: be,
        onClose: () => v(false),
        onAdd: async e => {
          await de({
            ...e
          });
        }
      }), a.jsx(U, {
        open: y,
        onClose: () => N(false),
        onImport: async e => {
          for (const a of e) {
            await de(a);
          }
        }
      }), a.jsx(X, {
        open: k,
        rules: ie,
        onClose: () => _(false)
      }), a.jsx(q, {
        open: !!se,
        mode: se || "scenes",
        selectedCount: ae.size,
        existingCategories: fe.filter(e => e !== ve),
        onClose: () => le(null),
        onApply: async e => {
          const a = [...ae];
          le(null);
          if (a.length !== 0) {
            await pe(a, e);
          }
        }
      })]
    })
  });
}
export { V as default };