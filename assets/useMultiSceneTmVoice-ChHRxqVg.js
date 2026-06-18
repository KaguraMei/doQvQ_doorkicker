import { r as i } from "./vendor-react-B2VXkTUV.js";
import { G as e, B as o, t } from "./native-pet-CTNtZgMA.js";
const s = /[「『](.+?)[」』]/gs;
const n = (i, e) => {
  let o = null;
  let t = -1;
  for (const s of e) {
    const e = i.lastIndexOf(s.name);
    if (e > t) {
      t = e;
      o = s;
    }
  }
  return o;
};
const l = i => {
  if (!i) {
    return i;
  }
  const e = i[i.length - 1];
  if (/[，。！？,!?…]/.test(e)) {
    return i;
  } else {
    return i + "。";
  }
};
const v = ({
  userId: v,
  participants: r,
  enabled: u,
  autoPlay: a = false,
  voiceMode: c = "dialogue"
}) => {
  const d = i.useRef(null);
  const p = i.useRef(null);
  const g = i.useRef(false);
  const f = i.useRef(new Map());
  const m = i.useRef(new Map());
  const [G, h] = i.useState(null);
  const [S, P] = i.useState(null);
  const A = (r || []).map(i => String(i == null ? undefined : i.id)).sort().join(",");
  i.useEffect(() => {
    if (!v || !Array.isArray(r) || r.length === 0) {
      return;
    }
    let i = false;
    (async () => {
      const t = await e.get("apiSettings").catch(() => null);
      const s = new Map();
      for (const i of r) {
        try {
          const e = await o.get(v, i.id);
          const n = (e == null ? undefined : e.voiceProvider) || (i == null ? undefined : i.voiceProvider) || "minimax";
          let l = "";
          const r = (i == null ? undefined : i.sovitsApiVersion) || (e == null ? undefined : e.sovitsApiVersion) || (t == null ? undefined : t.sovitsApiVersion) || "v2";
          l = n === "elevenlabs" ? (e == null ? undefined : e.elevenVoiceId) || (i == null ? undefined : i.elevenVoiceId) || "" : n === "gptsovits" ? r === "gsvi" ? (e == null ? undefined : e.sovitsGsviVoice) || (i == null ? undefined : i.sovitsGsviVoice) || (t == null ? undefined : t.sovitsGsviVoice) || "" : (e == null ? undefined : e.sovitsRefAudioPath) || (i == null ? undefined : i.sovitsRefAudioPath) || "" : (e == null ? undefined : e.minimaxTimbreId) || (i == null ? undefined : i.minimaxTimbreId) || "";
          s.set(String(i.id), {
            voiceProvider: n,
            voiceId: l,
            sovitsRefText: (e == null ? undefined : e.sovitsRefText) || (i == null ? undefined : i.sovitsRefText) || "",
            sovitsGptPath: (e == null ? undefined : e.sovitsGptPath) || (i == null ? undefined : i.sovitsGptPath) || "",
            sovitsSovitsPath: (e == null ? undefined : e.sovitsSovitsPath) || (i == null ? undefined : i.sovitsSovitsPath) || "",
            sovitsApiVersion: (e == null ? undefined : e.sovitsApiVersion) || (i == null ? undefined : i.sovitsApiVersion) || (t == null ? undefined : t.sovitsApiVersion) || "v2",
            sovitsGsviModel: (e == null ? undefined : e.sovitsGsviModel) || (i == null ? undefined : i.sovitsGsviModel) || (t == null ? undefined : t.sovitsGsviModel) || "",
            sovitsGsviLang: (e == null ? undefined : e.sovitsGsviLang) || (i == null ? undefined : i.sovitsGsviLang) || (t == null ? undefined : t.sovitsGsviLang) || "",
            sovitsGsviEmotion: (e == null ? undefined : e.sovitsGsviEmotion) || (i == null ? undefined : i.sovitsGsviEmotion) || (t == null ? undefined : t.sovitsGsviEmotion) || "",
            language: (e == null ? undefined : e.voiceLanguage) || "auto",
            speed: (e == null ? undefined : e.voiceSpeed) ?? 1,
            name: i.name || ""
          });
        } catch {}
      }
      if (!i) {
        m.current = s;
        const i = [...s.entries()].map(([i, e]) => `${e.name || i}=${e.voiceId || "(default)"}`).join(", ");
        console.log(`[MultiScene TTS] voiceMap loaded (${s.size} chars): ${i}`);
      }
    })();
    return () => {
      i = true;
    };
  }, [v, A]);
  const V = i.useCallback(() => {
    g.current = true;
    if (d.current) {
      try {
        d.current.pause();
      } catch {}
      d.current = null;
    }
    if (p.current) {
      try {
        URL.revokeObjectURL(p.current);
      } catch {}
      p.current = null;
    }
    h(null);
    P(null);
  }, []);
  i.useEffect(() => () => {
    g.current = true;
    if (d.current) {
      d.current.pause();
    }
    if (p.current) {
      URL.revokeObjectURL(p.current);
    }
  }, []);
  const T = i.useCallback(i => new Promise(e => {
    if (!i) {
      e();
      return;
    }
    const o = URL.createObjectURL(i);
    const t = new Audio(o);
    d.current = t;
    p.current = o;
    t.onended = () => {
      URL.revokeObjectURL(o);
      if (p.current === o) {
        p.current = null;
      }
      e();
    };
    t.onerror = () => {
      URL.revokeObjectURL(o);
      if (p.current === o) {
        p.current = null;
      }
      e();
    };
    t.play().catch(() => e());
  }), []);
  const R = i.useCallback(async (i, a) => {
    var c;
    var p;
    if (!u) {
      return;
    }
    if (G === i && d.current) {
      V();
      return;
    }
    if (d.current) {
      try {
        d.current.pause();
      } catch {}
      d.current = null;
    }
    const S = Array.isArray(r) ? r : [];
    if (S.length === 0) {
      return;
    }
    const A = ((i, e) => {
      var o;
      if (!i) {
        return [];
      }
      const t = [];
      const l = [...e].filter(i => i == null ? undefined : i.name).sort((i, e) => e.name.length - i.name.length);
      let v;
      s.lastIndex = 0;
      let r = null;
      while ((v = s.exec(i)) !== null) {
        const e = (o = v[1]) == null ? undefined : o.trim();
        if (!e) {
          continue;
        }
        const s = v.index;
        const u = (() => {
          const e = i.lastIndexOf("\n\n", s);
          if (e < 0) {
            return 0;
          } else {
            return e + 2;
          }
        })();
        const a = (() => {
          if (u === 0) {
            return 0;
          }
          const e = i.lastIndexOf("\n\n", u - 3);
          if (e < 0) {
            return 0;
          } else {
            return e + 2;
          }
        })();
        let c = n(i.slice(u, s), l);
        if (!c && a < u) {
          c = n(i.slice(a, s), l);
        }
        c ||= r;
        if (c) {
          r = c;
        }
        t.push({
          speaker: c,
          content: e
        });
      }
      return t;
    })(a, S);
    if (A.length !== 0) {
      g.current = false;
      P(i);
      try {
        const s = await e.get("apiSettings");
        if (!(s == null ? undefined : s.minimaxApiKey) && !(s == null ? undefined : s.elevenlabsApiKey) && !(s == null ? undefined : s.sovitsServerUrl)) {
          console.warn("[MultiScene TTS] 無 TTS 配置（MiniMax / ElevenLabs / GPT-SoVITS 都未設定）");
          P(null);
          return;
        }
        const n = `multi_${i}`;
        let r = f.current.get(n);
        if (!r) {
          r = [];
          if (m.current.size === 0 || m.current.size < S.length) {
            console.warn(`[MultiScene TTS] voiceMap 未完整載入 (${m.current.size}/${S.length})，即時補載`);
            const i = await e.get("apiSettings").catch(() => null);
            const t = new Map(m.current);
            for (const e of S) {
              if (!t.has(String(e.id))) {
                try {
                  const s = await o.get(v, e.id);
                  const n = (s == null ? undefined : s.voiceProvider) || (e == null ? undefined : e.voiceProvider) || "minimax";
                  let l = "";
                  const r = (e == null ? undefined : e.sovitsApiVersion) || (s == null ? undefined : s.sovitsApiVersion) || (i == null ? undefined : i.sovitsApiVersion) || "v2";
                  l = n === "elevenlabs" ? (s == null ? undefined : s.elevenVoiceId) || (e == null ? undefined : e.elevenVoiceId) || "" : n === "gptsovits" ? r === "gsvi" ? (s == null ? undefined : s.sovitsGsviVoice) || (e == null ? undefined : e.sovitsGsviVoice) || (i == null ? undefined : i.sovitsGsviVoice) || "" : (s == null ? undefined : s.sovitsRefAudioPath) || (e == null ? undefined : e.sovitsRefAudioPath) || "" : (s == null ? undefined : s.minimaxTimbreId) || (e == null ? undefined : e.minimaxTimbreId) || "";
                  t.set(String(e.id), {
                    voiceProvider: n,
                    voiceId: l,
                    sovitsRefText: (s == null ? undefined : s.sovitsRefText) || (e == null ? undefined : e.sovitsRefText) || "",
                    sovitsGptPath: (s == null ? undefined : s.sovitsGptPath) || (e == null ? undefined : e.sovitsGptPath) || "",
                    sovitsSovitsPath: (s == null ? undefined : s.sovitsSovitsPath) || (e == null ? undefined : e.sovitsSovitsPath) || "",
                    sovitsApiVersion: (s == null ? undefined : s.sovitsApiVersion) || (e == null ? undefined : e.sovitsApiVersion) || (i == null ? undefined : i.sovitsApiVersion) || "v2",
                    sovitsGsviModel: (s == null ? undefined : s.sovitsGsviModel) || (e == null ? undefined : e.sovitsGsviModel) || (i == null ? undefined : i.sovitsGsviModel) || "",
                    sovitsGsviLang: (s == null ? undefined : s.sovitsGsviLang) || (e == null ? undefined : e.sovitsGsviLang) || (i == null ? undefined : i.sovitsGsviLang) || "",
                    sovitsGsviEmotion: (s == null ? undefined : s.sovitsGsviEmotion) || (e == null ? undefined : e.sovitsGsviEmotion) || (i == null ? undefined : i.sovitsGsviEmotion) || "",
                    language: (s == null ? undefined : s.voiceLanguage) || "auto",
                    speed: (s == null ? undefined : s.voiceSpeed) ?? 1,
                    name: e.name || ""
                  });
                } catch {}
              }
            }
            m.current = t;
          }
          const i = m.current.get(String((c = S[0]) == null ? undefined : c.id)) || {
            voiceProvider: "minimax",
            voiceId: "",
            language: "auto",
            speed: 1
          };
          for (const e of A) {
            if (g.current) {
              break;
            }
            const o = e.speaker && m.current.get(String(e.speaker.id)) || i;
            const n = l(e.content);
            console.log(`[MultiScene TTS] ${((p = e.speaker) == null ? undefined : p.name) || "主導"}: "${n.slice(0, 30)}..." voice=${o.voiceId || "(default)"}`);
            const v = await t(n, {
              apiSettings: s,
              voiceProvider: o.voiceProvider,
              voiceId: o.voiceId,
              sovitsRefText: o.sovitsRefText,
              sovitsGptPath: o.sovitsGptPath,
              sovitsSovitsPath: o.sovitsSovitsPath,
              sovitsApiVersion: o.sovitsApiVersion,
              sovitsGsviVoice: o.sovitsApiVersion === "gsvi" ? o.voiceId : undefined,
              sovitsGsviModel: o.sovitsGsviModel,
              sovitsGsviLang: o.sovitsGsviLang,
              sovitsGsviEmotion: o.sovitsGsviEmotion,
              language: o.language,
              speed: o.speed,
              preserveActionMarkers: true
            });
            if (v == null ? undefined : v.audioBlob) {
              r.push(v.audioBlob);
            }
          }
          if (!g.current && r.length > 0) {
            f.current.set(n, r);
          }
        }
        P(null);
        if (g.current || r.length === 0) {
          return;
        }
        h(i);
        for (const i of r) {
          if (g.current) {
            break;
          }
          await T(i);
        }
      } catch (R) {
        console.error("[MultiScene TTS] 播放失敗:", R);
      } finally {
        P(null);
        h(null);
      }
    } else {
      console.log("[MultiScene TTS] 無對白可朗讀");
    }
  }, [u, v, r, G, V, T]);
  const M = i.useCallback(i => {
    f.current.delete(`multi_${i}`);
  }, []);
  const b = i.useCallback(async (i, e) => {
    if (u && a) {
      await R(i, e);
    }
  }, [u, a, R]);
  return {
    playEntry: R,
    stopPlayback: V,
    playingEntryId: G,
    loadingEntryId: S,
    clearCache: M,
    autoPlayIfEnabled: b
  };
};
export { v as u };