import { a9 as e, a4 as n, B as t, M as a, V as o } from "./native-pet-CTNtZgMA.js";
import { POOL_QUOTA as s } from "./appReactionPool-2KCtJ4s3.js";
import "./vendor-react-B2VXkTUV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
async function r({
  char: r,
  userId: i,
  currentProfileUser: c,
  appLabel: l,
  pkg: h
}) {
  if (!(r == null ? undefined : r.name)) {
    throw new Error("char.name required");
  }
  if (!l) {
    throw new Error("appLabel required");
  }
  const m = await e();
  const p = await async function ({
    char: e,
    userId: n,
    currentProfileUser: s
  }) {
    const r = (e == null ? undefined : e.name) || "";
    const i = ((e == null ? undefined : e.intro) || (e == null ? undefined : e.persona) || "").trim();
    let c = (s == null ? undefined : s.name) || "";
    let l = "";
    const h = s || {};
    const m = [h.intro, h.signature, h.bio].map(e => (e || "").trim()).filter(Boolean);
    if (m.length > 0) {
      l = m.join("\n");
    }
    let p = "";
    try {
      const a = await t.get(n, String(e.id));
      p = ((a == null ? undefined : a.charToUserRelationship) || (a == null ? undefined : a.relationship) || "").trim();
    } catch (g) {}
    let u = [];
    try {
      const t = await a.getByPair(n, String(e.id));
      if (Array.isArray(t) && t.length > 0) {
        u = t.filter(e => e && (e.text || e.content) && e.type !== "system").slice(-6).map(e => ({
          role: e.sender === "user" ? "user" : "char",
          text: String(e.text || e.content || "").slice(0, 150)
        }));
      }
    } catch (g) {}
    let y = "";
    try {
      const t = await o.get(n, String(e.id));
      if (t) {
        const e = [];
        const n = (t.episodeSummary || "").trim();
        if (n) {
          e.push(`[Current arc] ${n.slice(0, 300)}`);
        }
        const a = Array.isArray(t.summaryHistory) ? t.summaryHistory : [];
        if (a.length > 0) {
          const n = a.slice(-4).map(e => {
            const n = (e.summary || e.text || e.content || "").toString().trim();
            if (n) {
              return `${e.source === "tm" || e.type === "tm_summary" ? "[offline]" : "[chat]"} ${n.slice(0, 150)}`;
            } else {
              return null;
            }
          }).filter(Boolean);
          if (n.length > 0) {
            e.push(`[Past episodes]\n${n.join("\n")}`);
          }
        }
        if (e.length > 0) {
          y = e.join("\n\n");
        }
      }
    } catch (g) {}
    return {
      charName: r,
      charPersona: i,
      userName: c,
      userPersona: l,
      relationship: p,
      recentMessages: u,
      memorySummary: y
    };
  }({
    char: r,
    userId: i,
    currentProfileUser: c
  });
  const u = (typeof localStorage != "undefined" ? localStorage.getItem("language") : null) || "zh_cn";
  const y = u === "en" ? "English" : u === "zh" ? "Traditional Chinese" : "Simplified Chinese";
  const g = p.userName || "them";
  const d = `You write three sets of short reaction lines that ${p.charName} would say when they catch ${g} using a phone app called "${l}".\n\nCONTEXT\n${p.charName} is a desktop pet — a tiny floating character living on ${g}'s phone screen.\n${p.charName} can see what app ${g} is using right now.\nYou write THREE sets of lines for three different moments around "${l}":\n\n[OPEN]      ${s.open} lines — ${g} just opened "${l}". ${p.charName} reacts in the moment.\n[CLOSE]     ${s.close} lines — ${g} just closed/switched away from "${l}". ${p.charName} comments on what they were doing.\n[LONG_STAY] ${s.longStay} lines — ${g} has been inside "${l}" for over an hour. ${p.charName} can't help saying something.\n\nVOICE LOCK (most important)\nAfter writing each line, silently ask: "If I deleted ${p.charName}'s name, could ANY other character say this exact sentence?"\nIf yes → throw it out, rewrite with something only ${p.charName} would say (their slang, their pet peeves, their callbacks to shared memory, their specific way of teasing/caring).\nEvery line must carry ${p.charName}'s fingerprint.\n\nCONTEXT YOU MUST USE\n- ${p.charName}'s persona below — quirks, hobbies, what they care about, how they talk\n- ${g}'s persona — what THEY are into, why they would open "${l}"\n- The relationship between them — intimacy level decides how possessive / casual / formal ${p.charName} can be\n- Recent chat + past episodes — callback to a specific moment if it fits\n\nWHAT TO AVOID\n- Generic ("again?" "don't stay up") — could come from anyone\n- Listing emotions ("I'm jealous") — show don't tell\n- Forced trope cosplay (tsundere / clingy) unless persona literally says so\n- Same opening phrase across multiple lines (no "宝贝..." / "亲爱的..." stacking)\n- Mentioning the app NAME in every line — sometimes use a detail ABOUT it (a content type, a feature, who's on it)\n\nTHREE-SCENE DIFFERENTIATION (critical)\n- [OPEN] lines have forward energy — "你又来了" / curious / preemptive / teasing\n- [CLOSE] lines look back — "怎么这么快关了" / aftermath / commentary on what just happened\n- [LONG_STAY] lines escalate — concerned / impatient / playfully accusatory / "你还在看?"\nEach scene should feel obviously different. A reader skimming should know WHICH list a line came from.\n\nPER-CHARACTER FINGERPRINT (apply to ALL 3 scenes)\n${p.charName} has hobbies, jokes, anchors. Weave them in differently in each scene:\n- [OPEN] anchored to ${p.charName}'s immediate impulse\n- [CLOSE] anchored to ${p.charName} watching from the side\n- [LONG_STAY] anchored to ${p.charName} losing patience\n\nLENGTH & FORMAT\n- Each line: ≤ 50 characters, 1-2 short clauses\n- ${y} output\n- Output STRICTLY in this format:\n\n[OPEN]\nline 1\nline 2\n...\nline ${s.open}\n\n[CLOSE]\nline 1\nline 2\n...\nline ${s.close}\n\n[LONG_STAY]\nline 1\nline 2\n...\nline ${s.longStay}\n\nNo numbering. No quotes. No extra prose between sections.`;
  const f = `${[p.charPersona ? `[${p.charName} persona]\n${p.charPersona}` : `[${p.charName} persona]\n(no specific persona — default to warm but specific, still apply voice lock)`, p.userPersona ? `[${g} persona — who ${p.charName} is talking TO]\n${p.userPersona}` : `[${g} persona]\n(unspecified — treat as someone ${p.charName} knows; don't fabricate)`, p.relationship ? `[Relationship: ${g} ↔ ${p.charName}]\n${p.relationship}\n→ This shapes possessiveness, teasing rights, and what ${p.charName} can say without explaining.` : "[Relationship] unspecified — keep distance neutral, do not invent intimacy.", p.memorySummary ? `[Memory between ${g} and ${p.charName} — what you can callback to]\n${p.memorySummary}` : "", p.recentMessages.length > 0 ? `[Recent chat]\n${p.recentMessages.map(e => `${e.role === "user" ? g : p.charName}: ${e.text}`).join("\n")}` : "", `[App: ${l}]\nPackage: ${h}\n(Use what you know about "${l}" — content type, vibe, what users do there — but don't over-describe the app itself.)`].filter(Boolean).join("\n\n")}\n\nNow write the three sections for "${l}". Voice lock on every line.`;
  return new Promise((e, t) => {
    let a = "";
    n({
      messages: [{
        role: "system",
        content: d
      }, {
        role: "user",
        content: f
      }],
      settings: m,
      preferStreaming: false,
      onStream: e => {
        a += e;
      },
      onComplete: n => {
        const o = (n || a || "").trim();
        if (o) {
          try {
            const n = function (e) {
              const n = {
                open: [],
                close: [],
                longStay: []
              };
              const t = e.split(/\r?\n/);
              let a = null;
              for (const o of t) {
                const e = o.trim();
                if (!e) {
                  continue;
                }
                const t = e.toLowerCase().replace(/[\[\]*:#]/g, "").trim();
                if (t === "open" || t.startsWith("open ") || t === "打开" || t === "开启") {
                  a = "open";
                  continue;
                }
                if (t === "close" || t.startsWith("close ") || t === "关闭" || t === "切走") {
                  a = "close";
                  continue;
                }
                if (t === "longstay" || t === "long_stay" || t === "long stay" || t.startsWith("longstay ") || t.startsWith("long_stay ") || t.startsWith("long stay ") || t === "停留" || t === "长停留") {
                  a = "longStay";
                  continue;
                }
                if (!a) {
                  continue;
                }
                const s = e.replace(/^\s*[-*•·]+\s*/, "").replace(/^\s*\d+[.、)）:]\s*/, "").replace(/^\s*["'「『]+|["'」』]+\s*$/g, "").trim();
                if (s && s.length <= 80) {
                  n[a].push(s);
                }
              }
              return {
                open: n.open.slice(0, s.open),
                close: n.close.slice(0, s.close),
                longStay: n.longStay.slice(0, s.longStay)
              };
            }(o);
            if (!n.open.length && !n.close.length && !n.longStay.length) {
              t(new Error("解析不出任何场景 lines\n原文前 200 字: " + o.slice(0, 200)));
              return;
            }
            e(n);
          } catch (r) {
            t(r);
          }
        } else {
          t(new Error("AI 返回空"));
        }
      },
      onError: e => t(e)
    });
  });
}
export { r as generateAppReactionPool };