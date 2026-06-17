import { by as e } from "./native-pet-CTNtZgMA.js";
const t = (e, t) => `${e}::${(t == null ? undefined : t.keys) || "CONST"}::${String((t == null ? undefined : t.content) || "").slice(0, 30)}`;
const n = e => {
  const n = [];
  if (Array.isArray(e)) {
    e.forEach(e => {
      if (e) {
        (Array.isArray(e.entries) ? e.entries : e.entries && typeof e.entries == "object" ? Object.values(e.entries) : []).forEach(o => {
          if (o && o.content && o.type === "jailbreak") {
            n.push({
              id: t(e.id, o),
              bookId: e.id,
              bookTitle: e.title || "",
              keys: o.keys || "",
              content: o.content,
              name: o.name || o.keys || "(unnamed)",
              disabled: !!o.disable || o.enabled === false
            });
          }
        });
      }
    });
    return n;
  } else {
    return n;
  }
};
const o = (e, t) => {
  if (!Array.isArray(t) || t.length === 0) {
    return "";
  }
  const o = new Set(t.map(String));
  const i = n(e).filter(e => o.has(String(e.id)) && !e.disabled);
  if (i.length === 0) {
    return "";
  }
  let s = "## 🌍 [BLOCK 0.0] System Override / ROOT INSTRUCTIONS\n";
  s += "> **[指令]** 以下為絕對優先指令，整段廣播生成過程都必須遵守。\n\n";
  i.forEach(e => {
    const t = e.bookTitle ? ` (${e.bookTitle})` : "";
    s += `*   **${e.keys || e.name}**${t}: ${String(e.content || "").trim()}\n`;
  });
  return s.trim();
};
function i(e, t) {
  if (!((e == null ? undefined : e.description) || "").trim()) {
    return "";
  }
  const n = (e == null ? undefined : e.name) || "此主播";
  const o = t.filter(e => e !== n);
  const i = o.length > 0 ? `Could this line come from ${o.join(" / ")} instead of ${n}? If yes → rewrite until it could ONLY come from ${n}. ` : `Could this sentence come from any other character? If yes → rewrite until it could ONLY come from ${n}. `;
  return `\n[VOICE_LOCK for ${n}] Before writing ${n}'s lines, silently extract from the persona above:\n• Speech anchors (2-3): sentence-ending habits / 口頭禪 / how they laugh / how they hesitate / how they curse / typing rhythm — whatever is uniquely THEM\n• Reaction templates: surprised→? annoyed→? amused→? bored→? — THEIR shape, not a generic radio-host shape\n• Hard-NO list (2-3): phrases or registers ${n} would never produce given their background/status/personality\nThen every line ${n} speaks passes one check: ${i}Generic-radio-host voice is the failure mode — specificity to ${n} is the success mode.`;
}
function s({
  station: t,
  allCharacters: n,
  segmentType: o = "talk",
  lastSong: s = null,
  language: a = "zh",
  translateConfig: r = null,
  jailbreakContent: l = "",
  commentLastSong: h = false,
  endWithSong: c = false,
  isFirstTalk: g = false
}) {
  const d = Array.isArray(n) ? n : [];
  const u = [...(t.hosts || []), ...(t.guests || [])];
  const {
    profiles: m,
    mainHostName: p,
    coHostNames: f,
    guestNames: y
  } = function (e, t) {
    var n;
    const o = Array.isArray(t) ? t : [];
    const s = e.hosts || [];
    const a = e.guests || [];
    const r = [...s, ...a];
    const l = r.map(e => {
      var t;
      if ((t = o.find(t => String(t.id) === String(e.characterId))) == null) {
        return undefined;
      } else {
        return t.name;
      }
    }).filter(Boolean);
    const h = ((n = o.find(e => {
      var t;
      return String(e.id) === String((t = s.find(e => e.role === "main")) == null ? undefined : t.characterId);
    })) == null ? undefined : n.name) || "";
    const c = s.filter(e => e.role === "co-host").map(e => {
      var t;
      if ((t = o.find(t => String(t.id) === String(e.characterId))) == null) {
        return undefined;
      } else {
        return t.name;
      }
    }).filter(Boolean);
    const g = a.map(e => {
      var t;
      if ((t = o.find(t => String(t.id) === String(e.characterId))) == null) {
        return undefined;
      } else {
        return t.name;
      }
    }).filter(Boolean);
    const d = [];
    for (const u of r) {
      const e = o.find(e => String(e.id) === String(u.characterId));
      if (!e) {
        continue;
      }
      const t = u.role === "main" ? "主持人" : u.role === "co-host" ? "副主持" : "嘉賓";
      const n = e.description || "";
      const s = e.personality || "";
      const a = e.scenario || "";
      const h = e.system_prompt || "";
      let c = `【${e.name}】（${t}）\n`;
      if (s) {
        c += `性格：${s}\n`;
      }
      if (n) {
        c += `人設：${n}\n`;
      }
      if (a) {
        c += `背景：${a}\n`;
      }
      if (h) {
        c += `指導：${h}\n`;
      }
      const g = [];
      if (e.gender) {
        g.push(`gender:${e.gender}`);
      }
      if (e.aliases) {
        g.push(`aka:${e.aliases}`);
      }
      if (e.birthday) {
        g.push(`birthday:${e.birthday}`);
      }
      if (g.length > 0) {
        c += `[IDENTITY] ${g.join(" | ")}\n`;
      }
      const m = (Array.isArray(e.relationships) ? e.relationships : []).filter(e => e && r.some(t => String(t.characterId) === String(e.targetId))).map(e => {
        const t = o.find(t => String(t.id) === String(e.targetId));
        return `${(t == null ? undefined : t.name) || "?"}（${{
          strong: "💞親密",
          neutral: "🤝普通",
          dashed: "❓微妙",
          hostile: "⚡敵對"
        }[e.type] || "🤝"}：${e.label || "認識"}）`;
      });
      if (m.length > 0) {
        c += `與其他主播的關係：${m.join("、")}\n`;
      }
      c += i(e, l);
      d.push(c.trim());
    }
    return {
      profiles: d,
      mainHostName: h,
      coHostNames: c,
      guestNames: g
    };
  }(t, d);
  const w = y.length > 0;
  const T = u.map(e => {
    const t = d.find(t => String(t.id) === String(e.characterId));
    return (t == null ? undefined : t.name) || "主播";
  });
  const $ = r == null ? undefined : r.autoTranslate;
  const b = (r == null ? undefined : r.charLanguage) || "";
  const E = (r == null ? undefined : r.userLanguage) || "";
  const S = $ ? `Characters speak in ${b} (keep their original language). ${E} in（）.` : a === "en" ? "All dialogue MUST be in English." : a === "ja" ? "All dialogue MUST be in Japanese (日本語)." : a === "zh_cn" ? "All dialogue MUST be in Simplified Chinese (简体中文). Do NOT use Traditional Chinese characters." : "All dialogue MUST be in Traditional Chinese (繁體中文).";
  const O = T.length > 1;
  const k = $ ? `\n\n[Translation Rules]\nFormat: original text（${E} translation）\nExample: ${T[0]}：今日は素敵な夜ですね（今晚真的好美呢）\n-（）= how the character would naturally say it in ${E}—keep personality/tone, BAN literal translation\n- TTS reads original only;（）= subtitles for listener\n- Every line MUST include（）` : "";
  const v = l && String(l).trim() ? `${String(l).trim()}\n\n` : "";
  const N = t.realTimeAware !== false;
  const I = N ? `${function (t = "zh") {
    const n = new Date();
    const o = n.getHours();
    const i = n.getMinutes();
    const s = n.getDay();
    const a = n.getMonth() + 1;
    const r = n.getDate();
    const l = n.getFullYear();
    let h;
    let c;
    h = o < 5 ? "late-night" : o < 9 ? "early-morning" : o < 12 ? "morning" : o < 14 ? "noon" : o < 18 ? "afternoon" : o < 22 ? "evening" : "night";
    c = a >= 3 && a <= 5 ? "spring" : a >= 6 && a <= 8 ? "summer" : a >= 9 && a <= 11 ? "autumn" : "winter";
    const g = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];
    const d = s === 0 || s === 6;
    let u = [];
    try {
      u = (e(n, []) || []).map(e => e.name).filter(Boolean);
    } catch (f) {}
    if (t !== "en") {
      const e = {
        "late-night": "凌晨",
        "early-morning": "清晨",
        morning: "上午",
        noon: "中午",
        afternoon: "下午",
        evening: "傍晚",
        night: "深夜"
      }[h];
      const t = {
        spring: "春天",
        summer: "夏天",
        autumn: "秋天",
        winter: "冬天"
      }[c];
      return `[REAL-TIME CONTEXT — 主播必須意識到的真實時間]\n- 現在時間：${l}年${a}月${r}日 ${o.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}（${g[s]}）\n- 時段：${e}${d ? "、週末" : "、平日"}\n- 季節：${t}\n${u.length ? `- 今天節日：${u.join("、")}` : ""}\n\nRULES:\n- 問候語必須符合時段：凌晨/清晨用「早安」「凌晨好」「夜貓子們」；上午/中午用「早安」「中午好」；下午用「下午好」；傍晚/晚上/深夜才用「晚安」「晚上好」。**絕對不要在白天說晚安**。\n- 自然提及時間細節：例如「週五的晚上」「週末的午後」「春末的這個下午」「冬天的深夜」，但不要每段都報時。\n- 有節日時可順帶提到（例如「中秋節快樂」「萬聖節主題」），但不要強硬塞，貼合電台主題即可。\n- 不要說「現在是晚上 8 點半」這種主播報時，除非真的是節目開場的氛圍鋪墊。`;
    }
    const m = {
      spring: "spring",
      summer: "summer",
      autumn: "autumn",
      winter: "winter"
    }[c];
    const p = `${o.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
    return `[REAL-TIME CONTEXT — the host MUST be aware of the actual time]\n- Now: ${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][s]}, ${l}-${String(a).padStart(2, "0")}-${String(r).padStart(2, "0")} ${p}\n- Period of day: ${h}${d ? " (weekend)" : " (weekday)"}\n- Season: ${m}\n${u.length ? `- Today's holidays: ${u.join(", ")}` : ""}\n\nRULES:\n- Greeting MUST match the period of day. Morning → "good morning"; noon/afternoon → "good afternoon"; evening/night/late-night → "good evening" or "late night greetings". **Never say "good evening" during daytime.**\n- Reference the time naturally — "Friday night", "a weekend afternoon", "a late autumn evening" — but don't announce the clock every segment.\n- If today is a holiday, weave it in lightly when it fits the show's theme; don't force it.\n- Avoid "it's 8:30 PM right now" style hard time announcements unless setting the opening atmosphere.`;
  }(a)}\n\n` : "";
  const A = (t.showStyle || "").trim();
  let R = `${v}${I}${A ? `[SHOW STYLE — MANDATORY format and tone for the ENTIRE broadcast]\n${A}\n\nThis is HOW the show is performed — not optional flavor. Every segment (opening / talk / closing) must execute in this style. The topic ("${t.theme || "free chat"}") is WHAT they talk about; this block is HOW they talk about it. If the style contradicts default "warm DJ" instincts, follow the style.\n\n` : ""}You are a scriptwriter for the live radio show "${t.name}".\nTopic: ${t.theme || "free chat"}\n\n[Speaker Profiles]\n${m.join("\n\n")}\n${w ? `\n[CAST ROLES — strict behavioral split]\n- **Main host (${p})**: drives the show. Sets agenda, asks questions, introduces guests, transitions between topics, handles the audience-facing housekeeping (greeting, time, station name).\n- **Co-host(s)${f.length ? ` (${f.join(", ")})` : ""}**: regular partner(s). Banter freely with main host, chime in, fill awkward moments, share opinions equally. They're family — no introduction needed when they speak.\n- **Guest(s) (${y.join(", ")})**: invited specially for this episode. Treated with a touch more deference and curiosity. They are the CONTENT ENGINE — main host asks them open questions and they give the deep, specific answers. They should NOT behave like an extra host who just happens to also be there.\n\nGUEST DYNAMIC RULES:\n- Hosts use slightly more formal/respectful framing when addressing guests by name (e.g. "${y[0]}老師" / "${y[0]}前輩" — pick whatever fits the character's status).\n- Guests do not steer the show or change topics — they respond to what's asked.\n- When a guest speaks, their answer should be LONGER and more specific than a host's banter line. Quality over quantity.\n- Co-hosts can interject during guest's answers ("欸這個我也想知道" / "等等你剛說的那個再講細一點") but main host owns the flow.` : ""}\n\n[Rules]\n${O ? `- This is a multi-host show. ${T.join(", ")} must interact naturally — banter, react, interrupt, agree/disagree. Don't let one person monologue.\n- Match interaction style to relationships (close friends joke around; rivals bicker).` : `- This is a solo show by ${T[0]}, like a late-night DJ talking to the audience.`}\n- This is a CONTINUOUS live stream. **Mid-show** segments flow into each other with no breaks — don't open mid-show segments with "welcome back" or fresh greetings. (The OPENING segment is the exception — see its instructions below.)\n- You may occasionally address listeners, but the default is just conversation, not announcements.\n- Never break the fourth wall. No mention of AI, scripts, APIs, or programs.\n- No action descriptions, no asterisks, no narration, no numbering.\n- ${S}${k}${A ? "\n- **SHOW STYLE LOCK**: Every line must serve the SHOW STYLE block above. If your default \"radio host\" voice contradicts it, the SHOW STYLE wins. Re-read the SHOW STYLE block before each segment." : ""}\n\n[Output Format]\nEach line starts with the speaker's name:\n${$ ? `${T[0]}：original in ${b}（${E} translation）` : `${T[0]}：dialogue here`}\n${O && T[1] ? `${T[1]}：${$ ? `response in ${b}（${E} translation）` : "response here"}\n${T[0]}：${$ ? "follow-up（translation）" : "follow-up"}` : ""}\n\nGenerate ${O ? "14-22" : "8-14"} lines.\n\n[TENSION TYPE — silently classify this show BEFORE writing, then apply the matching profile below]\nRead the SHOW STYLE, topic, and station name above. Pick ONE profile that best fits:\n  • **FRICTION** — debates, hotlines, advice shows, opinion-driven adult-talk, anything where hosts SHOULD have different views. Friction is the entertainment.\n  • **COOPERATION** — crosstalk/standup (setup + payoff between hosts), atmospheric storytelling (one tells, others react & build), interview shows where main host guides guest. Hosts BUILD together, not against.\n  • **LOW-ENERGY** — ASMR, sleep companionship, meditation, gentle whispered shows. The goal is calm atmosphere, not content density.\n  • **DEFAULT** — casual chat, music sharing, life topics where mild disagreement is fine but not mandatory. The middle ground.\n\nOnce classified, write the segment under THAT profile's rules — don't mix profiles.\n\n${O ? "[DEPTH — applies to FRICTION / COOPERATION / DEFAULT (not LOW-ENERGY)]" : "[DEPTH — applies to FRICTION / DEFAULT (not LOW-ENERGY / COOPERATION solo)]"}\n1. **Concrete anchor**: at least ONE specific detail this segment — number, name, place, time, brand, song title, dish, quote, eerie detail in a ghost story, joke setup line for crosstalk, etc. Vague abstractions ("人生很複雜") DO NOT count.\n2. **Personal stake**: at least ONE host shares a first-person story/opinion/reaction specific to THEIR persona, not generic radio-host filler.\n3. **Forward motion**: segment ends in a different place than it started — conclusion / new question / mood shift / punchline landing / chill deepening, etc. No "嗯嗯對對" loops.${O ? "\n4. **Host dynamic — pick the ONE that matches your TENSION TYPE**:\n   - FRICTION → **Disagreement beat**: at least ONE clear difference of opinion (\"我覺得不是這樣\" / counter-example / pushback). Friction IS the entertainment.\n   - COOPERATION → **Build-together beat**: hosts cooperate on the moment — one sets up a joke and another lands it / one tells a story and others push for details / one offers a take and another extends it. NO disagreement-as-friction (would break the format).\n   - DEFAULT → **Natural reaction beat**: at least one host has a distinct reaction (curious, skeptical, amused, surprised) — doesn't have to be disagreement, just specific not generic." : ""}\n\n[LOW-ENERGY profile — overrides everything above if you classified as LOW-ENERGY]\nForget [DEPTH]. The goal is atmosphere, gentleness, listener feeling accompanied. Long pauses ("……"), repetition of soothing phrases, soft "嗯" "是啊" ARE the show. Circular calm conversation = success. Don't force concrete details or topic progression.\n\n[ANTI-FILLER]\n- Clichéd life-advice ("活在當下" / "做你自己" / "時間會證明一切") — banned across all profiles\n- Asking listeners questions you immediately answer for them — banned across all profiles\n- "其實我也經歷過" without then telling what you experienced — banned across all profiles${O ? "\n- \"對對對\" / \"完全同意\" without adding anything new — banned in FRICTION / COOPERATION / DEFAULT, allowed in LOW-ENERGY as atmosphere" : ""}`;
  const L = `The song MUST fit the show's topic "${t.theme || "free chat"}"${t.musicGenre ? ` and lean toward "${t.musicGenre}" style` : ""}. Pick a song whose lyrics, mood, or story connects to what you were just talking about — not just any popular song.`;
  const C = "[Song Picking Rules — MUST follow]\n- Pick a REAL, RELEASED song that genuinely exists. The tag will be searched on music platforms; if the song doesn't exist, the playback fails and the show feels broken.\n- Use the song's official title and the artist's well-known name exactly as released. Both fields are REQUIRED.\n- Prefer recognizable, charted, or widely-streamed songs in the chosen genre. A classic hit you're sure about > an obscure track you half-remember.\n- If you can't recall a specific real song that fits, fall back to a famous classic by a well-known artist in the genre/mood — better a known song slightly off-theme than a made-up one perfectly on-theme.\nExample: [SONG: 晴天 周杰倫]\nExample: [SONG: Someone Like You Adele]";
  if (o === "opening") {
    const e = N ? "Pick the greeting that matches the REAL-TIME CONTEXT period at the top of this prompt — \"早安\"/\"good morning\" in the morning, \"午安\"/\"good afternoon\" at noon/afternoon, \"晚安\"/\"good evening\" only in the evening/night/late-night. Adapt to the host's persona too." : "Use real radio phrases — \"歡迎收聽\" / \"晚安\" / \"各位聽眾\" / \"good evening\" / \"welcome to\" — whatever fits the language and the host's persona.";
    const n = N ? "One line about the moment — anchor it in the REAL-TIME CONTEXT above (the actual weekday, season, time of day, holiday if any). E.g. \"週五的傍晚\" / \"週末的下午\" / \"立冬的深夜\" / \"Halloween night\". Make listeners feel they've arrived somewhere REAL." : "One line about the moment — what time of night it feels like, the mood in the studio, the weather, why tonight's show matters. Make listeners feel they've arrived somewhere.";
    R += `\n\n[This Segment: OPENING — the show just went on air]\nThis is THE moment listeners tune in. Make it feel like a real radio show opening — not casual chit-chat.\n\nREQUIRED beats (in order, can blend naturally):\n1. **Station ID + greeting**: ${T[0]} explicitly says hello and names the show "${t.name}". ${e}\n2. **Set the scene**: ${n}\n3. **Today's topic**: Announce tonight's theme "${t.theme || ""}" with hook — tease why it's worth sticking around for. Don't just state the topic flatly; sell it.\n${O ? w ? `4. **Co-host(s) chime in${f.length ? ` (${f.join(", ")})` : ""}**: brief banter with main host to establish chemistry.\n5. **GUEST INTRODUCTION (mandatory)**: ${p || T[0]} formally introduces tonight's guest(s) — ${y.join("、")} — by name AND by relevant background drawn from their persona profile above (their identity, what they do, why they're worth listening to, what connects them to tonight's topic). This is the moment the listener learns who the guest is. Make it warm but slightly more formal than co-host banter. Then welcome the guest(s); the guest(s) respond with a brief polite hello (no extended monologue yet — they save the substance for the talk segments).` : `4. **Introduce co-hosts**: ${T.slice(1).join("、")} chime in, exchange a quick hello with ${T[0]}, show their dynamic immediately. Listeners should feel the chemistry from the first 30 seconds.` : `4. **Establish the voice**: Let ${T[0]}'s personality come through immediately — warm, mysterious, mischievous, melancholic, whatever the character is. The opening voice IS the show's identity.`}\n\nIMPORTANT — this is the ONLY segment where greeting/welcoming is REQUIRED. Make the listener feel "yes, the show has started, I'm in the right place."${w ? `\nGUEST INTRO MUST be substantive: NOT "今天我們請到了 ${y[0]}" alone — say WHO they are, WHAT they do, WHY they're here tonight. Pull from their persona profile.` : ""}\n\nDO NOT:\n- Open with someone mid-sentence as if continuing\n- Skip the station name or the "hello" beat\n- Be timid or generic — radio openings have ENERGY (or deliberate calm, if that's the show's vibe)${N ? "\n- Use the wrong time-of-day greeting (e.g. \"晚上好\" in the morning) — check the REAL-TIME CONTEXT above" : ""}${A ? `\n\n[STYLE REMINDER for this OPENING]\nThe SHOW STYLE block at the top of this prompt overrides any default "warm DJ welcome" instinct. Execute the opening IN THAT STYLE. Style summary: ${A.slice(0, 200)}${A.length > 200 ? "..." : ""}` : ""}`;
    if (c) {
      R += `\n\nAfter the introduction beats, in the last 1-2 lines naturally tee up tonight's first track. NOT "now let's listen to" — more like "I've got something perfect to start us off" / "聽聽這首吧" — host-style.\nIMPORTANT: End the whole segment with a song tag on its own line:\n[SONG: full song title + artist's real name]\n${L}\n\n${C}`;
    }
  } else if (o === "closing") {
    R += "\n\n[This Segment: CLOSING]\nThe show is ending. " + (O ? "Wrap up naturally, thank listeners, say goodbye warmly." : "Thank listeners for tuning in, say goodbye warmly.");
  } else {
    const e = (s == null ? undefined : s.title) || "that song";
    const n = (s == null ? undefined : s.artist) || "";
    R += `\n\n[This Segment: CONTINUE THE TOPIC]\nContinue the conversation about "${t.theme || ""}". Go DEEPER — pick a new angle, share a personal story, debate, ask each other questions, bring up something surprising.\nCRITICAL RULES:\n- Do NOT repeat points from earlier segments. If you already discussed something, move on.\n- Do NOT re-introduce yourself or greet listeners.\n- Keep it natural — like real people having a genuine conversation, not reading bullet points.${A ? `\n- **STYLE LOCK** — execute this segment IN the SHOW STYLE block at the top. Don't slip back into generic warm-DJ mode. Style summary: ${A.slice(0, 200)}${A.length > 200 ? "..." : ""}` : ""}${w ? `\n- **GUEST DYNAMIC** — main host (${p}) drives by asking ${y.join("、")} open questions. Guest answers are the substance (longer, more specific). Co-hosts ${f.length ? `(${f.join(", ")}) ` : ""}interject with reactions but don't steer.${g ? "\n- **FIRST TALK AFTER GUEST INTRO** — the guest(s) just walked into the studio in the opening. This segment carries the lingering arrival energy: guest may be slightly polite/settling-in, host eases them in with a warm-up question before going deep, co-host adds a friendly \"let's hear what they've got\" beat. Avoid making the guest sound like an old daily co-host." : ""}` : ""}`;
    if (h && s) {
      R += `\n\n[Segment Opening — react to the song that just played]\n"${e}"${n ? ` by ${n}` : ""} just finished playing. Start the segment with a brief, natural reaction (1-2 lines — a quick comment, NOT a review). Then move on to the topic. Do NOT over-analyze the song; the music is background flavor, the TOPIC is the main course.`;
    }
    R += c ? `\n\n[Segment Ending — segue into the next song]\nAfter the chat, in the last 2-4 lines naturally lead into a song — maybe something one host mentioned reminds them of a song, or the mood calls for music. Keep it conversational, NOT a formal "now let's listen to" announcement.\nIMPORTANT: End the whole segment with a song tag on its own line:\n[SONG: full song title + artist's real name]\n${L}\n\n${C}` : "\n- Do NOT talk about music or songs unless it directly serves the topic.";
  }
  return R;
}
function a(e) {
  if (!e) {
    return 0;
  }
  let t = 0;
  for (const n of e) {
    if (/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/.test(n)) {
      t += 1.5;
    } else if (/\s/.test(n)) {
      t += 0.1;
    } else {
      t += 0.3;
    }
  }
  return Math.ceil(t);
}
function r(e, t, n = 3000, o = "talk") {
  const i = [{
    role: "system",
    content: e
  }];
  const s = o === "opening";
  let r = a(e);
  const l = [];
  const h = Math.floor(n * 0.75);
  for (let d = t.length - 1; d >= 0; d--) {
    const e = t[d];
    const n = a(e.content);
    if (r + n > h) {
      break;
    }
    r += n;
    l.unshift(e);
  }
  const c = t.length - l.length;
  const g = function (e) {
    if (e.length === 0) {
      return "";
    }
    const t = [];
    for (const n of e) {
      const e = (n.content || "").split("\n").filter(e => e.trim());
      if (e.length === 0) {
        continue;
      }
      const o = e[0].replace(/^.+?[：:]\s*/, "").slice(0, 60);
      if (o) {
        t.push(o);
      }
    }
    if (t.length === 0) {
      return "";
    } else {
      return `[Earlier in this show, you already discussed: ${t.join(" / ")}]\nDo NOT repeat these points. Find fresh angles.`;
    }
  }(t.slice(0, c));
  if (g) {
    i.push({
      role: "user",
      content: g
    });
    i.push({
      role: "assistant",
      content: "Got it, I'll explore new topics and avoid repeating."
    });
  }
  for (const a of l) {
    i.push({
      role: "user",
      content: "（繼續節目）"
    });
    i.push({
      role: "assistant",
      content: a.content
    });
  }
  if (s) {
    i.push({
      role: "user",
      content: "The show is going on air RIGHT NOW. Write the OPENING — greet listeners by name of the show, set the scene, introduce the topic with energy. Hit every required beat from the [This Segment: OPENING] instructions above."
    });
  } else {
    i.push({
      role: "user",
      content: "Continue mid-show. Do NOT greet or re-open (the show is already running). Do NOT repeat earlier topics. Go deeper or find a new angle."
    });
  }
  return i;
}
function l(e, t = [], n = null) {
  if (!e) {
    return {
      lines: [],
      songQuery: null,
      fullText: ""
    };
  }
  const o = e.match(/\[SONG:\s*(.+?)\s*\]/);
  const i = o ? o[1].trim() : null;
  let s = e.replace(/\[SONG:\s*.+?\s*\]/g, "").replace(/\n{3,}/g, "\n\n").trim();
  const a = n ? [...(n.hosts || []), ...(n.guests || [])] : [];
  const r = new Map();
  for (const c of a) {
    const e = t.find(e => String(e.id) === String(c.characterId));
    if (e && e.name) {
      r.set(String(e.name), {
        id: c.characterId,
        name: String(e.name),
        avatar: String(e.image || "")
      });
    }
  }
  const l = [];
  try {
    const e = [...r.keys()].filter(e => e && typeof e == "string").map(e => e.replace(/[.*+?^${}()|[\]\\\/\-]/g, "\\$&").replace(/[\n\r]/g, "")).filter(e => e.length > 0).join("|");
    if (e) {
      const t = new RegExp(`([。！？…」』～~!?\\)\\)"\\s])(${e})[：:]`, "g");
      s = s.replace(t, (e, t, n) => `${t}\n${n}：`);
      const n = new RegExp(`^(${e})[：:]\\s*(.*)$`);
      const o = s.split("\n");
      let i = null;
      let a = "";
      const h = () => {
        if (i && a.trim()) {
          l.push({
            speakerId: i.id,
            speakerName: i.name,
            speakerAvatar: i.avatar,
            text: a.trim()
          });
        }
        a = "";
      };
      for (const e of o) {
        const t = e.trim();
        if (!t) {
          continue;
        }
        const o = t.match(n);
        if (o) {
          h();
          i = r.get(o[1]);
          a = o[2] || "";
        } else if (i) {
          a += (a ? "\n" : "") + t;
        }
      }
      h();
    }
  } catch (h) {
    console.warn("[AIRadio] 名字正則解析失敗，使用 fallback:", h.message);
  }
  if (l.length > 1) {
    const e = l[l.length - 1];
    if (!/[。！？…」』～~!?)"）]$/.test(e.text)) {
      console.log("[AIRadio] 丟棄截斷末句:", e.text.substring(0, 40) + "...");
      l.pop();
    }
  }
  if (l.length === 0 && s) {
    const e = a[0];
    const n = e ? t.find(t => String(t.id) === String(e.characterId)) : null;
    l.push({
      speakerId: (e == null ? undefined : e.characterId) || "",
      speakerName: (n == null ? undefined : n.name) || "主播",
      speakerAvatar: (n == null ? undefined : n.image) || "",
      text: s
    });
  }
  return {
    lines: l,
    songQuery: i,
    fullText: s
  };
}
const h = "aiRadioStations";
async function c(e) {
  const t = await e(h);
  if (Array.isArray(t)) {
    return t;
  } else {
    return [];
  }
}
async function g(e, t) {
  await e(h, t);
}
async function d(e, t, n) {
  const o = await c(e);
  const i = o.findIndex(e => e.id === n.id);
  if (i >= 0) {
    o[i] = {
      ...n,
      updatedAt: Date.now()
    };
  } else {
    o.push({
      ...n,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  }
  await g(t, o);
  return o;
}
async function u(e, t, n) {
  const o = (await c(e)).filter(e => e.id !== n);
  await g(t, o);
  return o;
}
export { s as a, o as b, n as c, r as d, u as e, c as l, l as p, d as u };