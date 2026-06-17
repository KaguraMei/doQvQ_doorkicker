import { r as e, j as s } from "./vendor-react-B2VXkTUV.js";
import { c as a, a as i, f as t, b as l, I as d, a4 as n } from "./native-pet-CTNtZgMA.js";
import { u as r } from "./useLastSelectedChar-BA2jreMl.js";
import { F as c } from "./FrostedGlassBackground-DQPbupYU.js";
import { x as o, bd as m, ba as h, be as y, bf as x, C as p, m as j, bg as f, bh as v, bi as u, v as g, w as N, a as w, r as b } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
const k = [{
  id: "sushi",
  name: "精緻壽司拼盤",
  emoji: "🍣",
  hungerReduce: 35,
  affinityAdd: 8,
  intro: "鮮甜的三文魚和壽司卷，伴侶很期待",
  type: "plate"
}, {
  id: "burger",
  name: "豪華雙層牛堡",
  emoji: "🍔",
  hungerReduce: 40,
  affinityAdd: 5,
  intro: "香濃多汁的芝士牛肉堡，滿足感爆棚",
  type: "plate"
}, {
  id: "pizza",
  name: "意式芝士比薩",
  emoji: "🍕",
  hungerReduce: 45,
  affinityAdd: 6,
  intro: "拉絲拉不停的經典意式披薩",
  type: "plate"
}, {
  id: "hotpot_set",
  name: "單人火鍋外送",
  emoji: "🍲",
  hungerReduce: 50,
  affinityAdd: 10,
  intro: "熱騰騰的肥牛肥羊火鍋套餐",
  type: "bowl"
}, {
  id: "icecream",
  name: "草莓聖代甜品",
  emoji: "🍧",
  hungerReduce: 15,
  affinityAdd: 12,
  intro: "甜甜的草莓聖代，飯後最佳甜點",
  type: "bowl"
}];
const C = [{
  id: "home",
  name: "溫馨小家",
  emoji: "🏠",
  bgClass: "dye-scene-home",
  tableClass: "dye-table-home",
  intro: "回到了溫馨的家中，感覺真放鬆。可以自己下廚或叫外賣",
  foods: []
}, {
  id: "chinese",
  name: "溫馨中餐廳",
  emoji: "🥟",
  bgClass: "dye-scene-chinese",
  tableClass: "dye-table-chinese",
  intro: "古色古香的典雅環境，品一盞清茶與精緻中餐",
  foods: [{
    name: "黃金鮮肉水餃",
    emoji: "🥟",
    type: "plate"
  }, {
    name: "老火養生靚湯",
    emoji: "🥣",
    type: "bowl"
  }]
}, {
  id: "western",
  name: "高奢西餐廳",
  emoji: "🍷",
  bgClass: "dye-scene-western",
  tableClass: "dye-table-western",
  intro: "高雅浪漫的法式氛圍，伴著燭光享用牛排",
  foods: [{
    name: "法式香煎牛排",
    emoji: "🥩",
    type: "plate"
  }, {
    name: "奶油松露濃湯",
    emoji: "🥣",
    type: "bowl"
  }]
}, {
  id: "izakaya",
  name: "深夜居酒屋",
  emoji: "🏮",
  bgClass: "dye-scene-izakaya",
  tableClass: "dye-table-izakaya",
  intro: "熱鬧的深夜食堂，點一份串燒與溫熱清酒",
  foods: [{
    name: "炭烤雞肉串",
    emoji: "🍢",
    type: "plate"
  }, {
    name: "日式豚骨拉麵",
    emoji: "🍜",
    type: "bowl"
  }]
}, {
  id: "school_canteen",
  name: "學校食堂",
  emoji: "🧃",
  bgClass: "dye-scene-school_canteen",
  tableClass: "dye-table-school_canteen",
  intro: "充滿青春回憶的校園食堂，懷念的味道",
  foods: [{
    name: "番茄炒蛋蓋飯",
    emoji: "🍛",
    type: "plate"
  }, {
    name: "老壇酸菜泡麵",
    emoji: "🍜",
    type: "bowl"
  }]
}, {
  id: "cafe",
  name: "午後咖啡廳",
  emoji: "☕️",
  bgClass: "dye-scene-cafe",
  tableClass: "dye-table-cafe",
  intro: "悠閒的陽光午後，品嚐精緻下午茶與咖啡",
  foods: [{
    name: "草莓戚風蛋糕",
    emoji: "🍰",
    type: "plate"
  }, {
    name: "經典拉花拿鐵",
    emoji: "☕️",
    type: "bowl"
  }]
}];
const S = [{
  id: "tomato",
  name: "番茄炒雞蛋",
  emoji: "🍳",
  ingredients: "番茄 + 雞蛋",
  intro: "經典家常菜，酸甜嫩滑，超級下飯",
  type: "plate"
}, {
  id: "chicken",
  name: "香菇滑雞煲",
  emoji: "🥘",
  ingredients: "雞肉 + 香菇",
  intro: "滑嫩雞肉融入香菇醇香，原汁原味",
  type: "bowl"
}, {
  id: "beef",
  name: "黑椒土豆肥牛",
  emoji: "🥩",
  ingredients: "肥牛 + 土豆",
  intro: "黑椒汁包裹軟糯土豆與香嫩肥牛",
  type: "plate"
}, {
  id: "shrimp",
  name: "椒鹽香辣大蝦",
  emoji: "🍤",
  ingredients: "大蝦 + 辣椒",
  intro: "外酥裡嫩，椒香酥脆，香辣過癮",
  type: "plate"
}, {
  id: "fish",
  name: "清蒸蔥油鱸魚",
  emoji: "🐟",
  ingredients: "鱸魚 + 蔥薑",
  intro: "火候精妙，魚肉如瓣，蔥油清香",
  type: "plate"
}];
const $ = () => {
  var $;
  const {
    currentScreen: z,
    showScreen: M
  } = a();
  const {
    t: W
  } = i();
  const I = z === "did-you-eat-screen";
  const {
    safeCurrentProfileUserId: L,
    activeChatIds: D
  } = t();
  const {
    characters: F
  } = l();
  const q = e.useMemo(() => {
    if (!F) {
      return [];
    }
    const e = F.filter(e => e.type !== "npc");
    if (D && D.length > 0) {
      const s = e.filter(e => D.includes(String(e.id)) || D.includes(Number(e.id)));
      if (s.length > 0) {
        return s;
      } else {
        return e;
      }
    }
    return e;
  }, [F, D]);
  const {
    selectedCharId: _,
    setSelectedCharId: B,
    selectedChar: E
  } = r("did-you-eat", q);
  const Z = e.useMemo(() => (E == null ? undefined : E.personality) || (E == null ? undefined : E.description) || (E == null ? undefined : E.intro) || "溫柔體貼", [E]);
  const P = e.useMemo(() => E ? `嗨，我是 ${E.name}。肚子餓了嗎？要不要挑選一份食材，我們一起下廚做飯？` : "今天吃點什麼呢？", [E]);
  const A = e.useMemo(() => `nuojiji_didYouEat_${L || "guest"}_${_ || "none"}`, [L, _]);
  const [R, T] = e.useState(80);
  const [O, Y] = e.useState(0);
  const [G, J] = e.useState(null);
  const [Q, K] = e.useState("home");
  const [U, H] = e.useState("");
  const [V, X] = e.useState([]);
  e.useEffect(() => {
    if (I && _) {
      try {
        const e = localStorage.getItem(A);
        if (e) {
          const s = JSON.parse(e);
          T(s.hunger ?? 80);
          Y(s.affinity ?? 0);
          J(s.currentFood ?? null);
          let a = s.currentScene ?? "home";
          if (a === "hotpot") {
            a = "home";
          }
          if (a === "restaurant") {
            a = "western";
          }
          K(a);
          H(s.speech || P);
          X(s.history || []);
        } else {
          T(80);
          Y(0);
          J(null);
          K("home");
          H(P);
          X([]);
        }
      } catch (e) {
        console.error("[DidYouEat] Failed to load state from localStorage:", e);
      }
    }
  }, [I, A, P, _]);
  const ee = e.useCallback((e = {}) => {
    try {
      T(s => {
        Y(a => {
          J(i => {
            K(t => {
              H(l => {
                X(d => {
                  const n = {
                    hunger: e.hunger !== undefined ? e.hunger : s,
                    affinity: e.affinity !== undefined ? e.affinity : a,
                    currentFood: e.currentFood !== undefined ? e.currentFood : i,
                    currentScene: e.currentScene !== undefined ? e.currentScene : t,
                    speech: e.speech !== undefined ? e.speech : l,
                    history: e.history !== undefined ? e.history : d
                  };
                  localStorage.setItem(A, JSON.stringify(n));
                  return d;
                });
                return l;
              });
              return t;
            });
            return i;
          });
          return a;
        });
        return s;
      });
    } catch (s) {
      console.error("[DidYouEat] Failed to save state to localStorage:", s);
    }
  }, [A]);
  e.useEffect(() => {
    if (I) {
      try {
        if (!localStorage.getItem(A)) {
          H(P);
          ee({
            speech: P
          });
        }
      } catch {}
    }
  }, [_, P, I, A, ee]);
  const [se, ae] = e.useState(false);
  const [ie, te] = e.useState("menu");
  const [le, de] = e.useState("cook");
  const [ne, re] = e.useState(false);
  const [ce, oe] = e.useState(false);
  const [me, he] = e.useState(false);
  const [ye, xe] = e.useState("");
  const [pe, je] = e.useState("");
  const [fe, ve] = e.useState(false);
  const [ue, ge] = e.useState(false);
  const [Ne, we] = e.useState(false);
  const [be, ke] = e.useState(false);
  const [Ce, Se] = e.useState("");
  const [$e, ze] = e.useState(0);
  const [Me, We] = e.useState(S[0]);
  const [Ie, Le] = e.useState("together");
  const [De, Fe] = e.useState(false);
  const [qe, _e] = e.useState(0);
  const [Be, Ee] = e.useState(0);
  const [Ze, Pe] = e.useState([]);
  const [Ae, Re] = e.useState("");
  const [Te, Oe] = e.useState("");
  const Ye = e.useRef(null);
  const Ge = e.useRef(1);
  const Je = e => {
    re(false);
    Le(e);
    if (e === "together") {
      Qe();
    } else {
      Ue();
    }
  };
  const Qe = () => {
    ae(false);
    Fe(true);
    _e(0);
    Pe([]);
    Re("");
    Ee(0);
    Ge.current = 1;
    H(`好啦！我們來做【${Me.name}】！食材已經洗乾淨備好了，先幫我把它們均勻切好～按「停」指針鎖定火候！`);
    Ke();
  };
  const Ke = () => {
    if (Ye.current) {
      clearInterval(Ye.current);
    }
    Ye.current = setInterval(() => {
      Ee(e => {
        let s = e + Ge.current * 4.5;
        if (s >= 100) {
          s = 100;
          Ge.current = -1;
        } else if (s <= 0) {
          s = 0;
          Ge.current = 1;
        }
        return s;
      });
    }, 16);
  };
  const Ue = () => {
    ae(false);
    ke(true);
    Se("cooking");
    ze(0);
    H(`好，這道【${Me.name}】就交給我吧！你坐在餐桌旁喝杯水休息一下，等著我哦～`);
    let e = 0;
    const s = setInterval(() => {
      e += 20;
      ze(e);
      if (e >= 100) {
        clearInterval(s);
        ke(false);
        const e = {
          name: `親手精製·${Me.name}`,
          emoji: Me.emoji,
          quality: "good",
          source: `${E == null ? undefined : E.name} 親手製作`,
          type: Me.type || "plate"
        };
        const a = Math.max(0, R - 30);
        const i = O + 15;
        const t = `久等啦！這是我為你用心做的【${Me.name}】，嚐嚐看味道怎麼樣，喜不喜歡？`;
        const l = [{
          id: Date.now().toString(),
          food: e.name,
          emoji: e.emoji,
          quality: e.quality,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          review: t
        }, ...V].slice(0, 15);
        T(a);
        Y(i);
        J(e);
        H(t);
        X(l);
        ee({
          hunger: a,
          affinity: i,
          currentFood: e,
          speech: t,
          history: l
        });
        es();
      }
    }, 1000);
  };
  const He = e => {
    ae(false);
    K(e.id);
    J(null);
    const s = {
      home: "回到了溫馨的家中，感覺真放鬆。我們挑選食材自己做飯吃，還是叫個外賣呢？",
      izakaya: `來到【${e.name}】啦！這裡暖融融的真舒服。我們點一份日式拉麵和烤串吧，你想喝清酒還是汽水？`,
      western: `哇，【${e.name}】的氛圍好優雅，音樂也很舒緩。今天你想吃法式香煎牛排嗎？我幫你點。`,
      chinese: `來到【${e.name}】啦！這裡裝飾古色古香，茶香裊裊。我們點一壺熱茶和一些點心吧。`,
      school_canteen: `哇！是【${e.name}】！太懷念了，簡直回到了學生時代。我們去排隊打個番茄炒蛋蓋飯，再來盒冰紅茶吧！`,
      cafe: `這家【${e.name}】好溫馨，放著溫柔的音樂。我們點杯拉花拿鐵，再加一份草莓蛋糕，過個悠閒的下午吧。`
    }[e.id] || `來到了 ${e.name}，我們點餐吧！`;
    H(s);
    ee({
      currentScene: e.id,
      currentFood: null,
      speech: s
    });
  };
  const Ve = async () => {
    if (!ye.trim() && !pe) {
      return;
    }
    ge(true);
    H("讓我想想哦……你這頓飯搭配得怎麼樣呢？正認真評估中……");
    const e = ye.trim() || "美味的一餐";
    const s = [`唔！你今天吃【${e}】呀，看起來營養搭配得很均衡呢！多吃點，這樣才有力氣哦～`, `哇，【${e}】看起來香噴噴的！我也想嚐一口，下次記得帶我一起吃哦。`, `吃【${e}】感覺好棒！不過要記得葷素搭配，多喝水，別光吃油膩的哦，我會擔心的。`, `啊，是【${e}】！感覺非常有食慾。我也點了一份和你一起同步吃，快開動吧！`];
    const a = s[Math.floor(Math.random() * s.length)];
    try {
      const s = [{
        role: "system",
        content: `你現在是用戶的伴侶對象，名字叫作「${(E == null ? undefined : E.name) || "對象"}」，性格人設為：「${Z}」。\n用戶剛剛和你分享了他們此時此刻吃的一餐食物：【${e}】。如果用戶上傳了照片，你也可以在圖像中觀察這頓飯。\n請以符合你性格人設的第一人稱口吻對用戶這餐進行生動點評，表現出餐桌上陪用戶一起同步吃飯的日常溫馨感。\n要求：\n1. 字數嚴格控制在 80 字以內，越精煉越好。\n2. 語氣要自然，要像情侶對話，嚴禁使用 AI 標記或刻板的格式。\n3. 如果食物看起來不太健康（如炸雞、泡麵等），可以帶有符合你性格的微嬌嗔、調侃或叮囑（例如傲嬌性格會說"哼，又吃泡麵，真拿你沒辦法，下次我親手給你做"）。\n4. 只能回復對話台詞本身，不要夾雜任何括號、行動描寫或旁白。`
      }, {
        role: "user",
        content: pe ? [{
          type: "text",
          text: `我正在吃【${e}】，這是照片，你看我這頓飯怎麼樣？`
        }, {
          type: "image_url",
          image_url: {
            url: pe
          }
        }] : `我正在吃【${e}】，你看我這頓飯怎麼樣？`
      }];
      let i = "";
      await n({
        messages: s,
        preferStreaming: false,
        onStream: e => {
          if (e) {
            i += e;
          }
        },
        onComplete: s => {
          const a = (s || i || "").trim();
          Xe(a, e);
        },
        onError: s => {
          console.warn("[DidYouEat] callAIApi failed, fallback to rules:", s);
          Xe(a, e);
        }
      });
    } catch (i) {
      console.warn("[DidYouEat] SyncEat exception, fallback to rules:", i);
      Xe(a, e);
    }
  };
  const Xe = (e, s) => {
    ae(false);
    ge(false);
    xe("");
    je("");
    const a = {
      name: s,
      emoji: "🥘",
      quality: "perfect",
      source: "同步分享的食物",
      type: (i = s, ["湯", "麵", "拉麵", "粉", "粥", "煲", "汁", "水", "火鍋", "燕麥", "酸奶", "冰淇淋", "聖代", "飯"].some(e => i.includes(e)) ? "bowl" : "plate")
    };
    var i;
    const t = Math.max(0, R - 40);
    const l = O + 20;
    const d = [{
      id: Date.now().toString(),
      food: a.name,
      emoji: a.emoji,
      quality: a.quality,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }),
      review: e
    }, ...V].slice(0, 15);
    T(t);
    Y(l);
    J(a);
    H(e);
    X(d);
    ee({
      hunger: t,
      affinity: l,
      currentFood: a,
      speech: e,
      history: d
    });
    es();
  };
  const es = () => {
    we(true);
    setTimeout(() => {
      we(false);
    }, 3000);
  };
  const ss = e => (e == null ? undefined : e.image) || (e == null ? undefined : e.avatar) || "";
  const as = e => {
    const a = e ? {} : {
      left: "auto",
      right: "-12px"
    };
    if (Q === "home") {
      return s.jsx("div", {
        className: "dye-cup-wrapper",
        style: a,
        children: s.jsxs("svg", {
          width: "28",
          height: "38",
          viewBox: "0 0 28 38",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dye-cup-svg-elem",
          children: [s.jsx("path", {
            d: "M4 3 L7 33 C7 35 9 36.5 11 36.5 L17 36.5 C19 36.5 21 35 21 33 L24 3 Z",
            fill: "rgba(255,255,255,0.18)",
            stroke: "rgba(255,255,255,0.75)",
            strokeWidth: "1.2"
          }), s.jsx("path", {
            d: "M6 19 L7.3 32.5 C7.4 33.5 8.5 34.5 10 34.5 L18 34.5 C19.5 34.5 20.6 33.5 20.7 32.5 L22 19 Z",
            fill: "#ffa502"
          }), s.jsx("ellipse", {
            cx: "14",
            cy: "19",
            rx: "8",
            ry: "2",
            fill: "#ff7f50"
          }), s.jsx("rect", {
            x: "10",
            y: "24",
            width: "6",
            height: "6",
            fill: "rgba(255,255,255,0.65)",
            rx: "1.5"
          }), s.jsx("rect", {
            x: "14",
            y: "27",
            width: "5",
            height: "5",
            fill: "rgba(255,255,255,0.45)",
            rx: "1"
          }), s.jsx("path", {
            d: "M22 6 L19.5 31",
            stroke: "rgba(255,255,255,0.4)",
            strokeWidth: "0.8"
          })]
        })
      });
    } else if (Q === "western") {
      return s.jsx("div", {
        className: "dye-cup-wrapper",
        style: a,
        children: s.jsxs("svg", {
          width: "22",
          height: "42",
          viewBox: "0 0 22 42",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dye-cup-svg-elem",
          children: [s.jsx("path", {
            d: "M4 4 C4 4 2 15 5 21 C7 25 15 25 17 21 C20 15 18 4 18 4 Z",
            fill: "rgba(255,255,255,0.08)",
            stroke: "rgba(255,255,255,0.65)",
            strokeWidth: "1"
          }), s.jsx("path", {
            d: "M5.5 12 C5.5 12 4.2 18 6.2 21.5 C7.5 23.5 14.5 23.5 15.8 21.5 C17.8 18 16.5 12 16.5 12 Z",
            fill: "#780000"
          }), s.jsx("ellipse", {
            cx: "11",
            cy: "12",
            rx: "5.5",
            ry: "1.2",
            fill: "#a40000"
          }), s.jsx("line", {
            x1: "11",
            y1: "24",
            x2: "11",
            y2: "38",
            stroke: "rgba(255,255,255,0.75)",
            strokeWidth: "1.2"
          }), s.jsx("ellipse", {
            cx: "11",
            cy: "38",
            rx: "6.5",
            ry: "1.5",
            fill: "rgba(255,255,255,0.3)",
            stroke: "rgba(255,255,255,0.6)",
            strokeWidth: "0.8"
          }), s.jsx("path", {
            d: "M16 6 L15 16",
            stroke: "rgba(255,255,255,0.3)",
            strokeWidth: "0.8"
          })]
        })
      });
    } else if (Q === "chinese") {
      return s.jsx("div", {
        className: "dye-cup-wrapper",
        style: a,
        children: s.jsxs("svg", {
          width: "24",
          height: "26",
          viewBox: "0 0 24 26",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dye-cup-svg-elem",
          children: [s.jsx("path", {
            d: "M3 3 C3 3, 2 18, 5 23 C7 25, 17 25, 19 23 C22 18, 21 3, 21 3 Z",
            fill: "#ffffff",
            stroke: "#2c3e50",
            strokeWidth: "1"
          }), s.jsx("path", {
            d: "M6 15 C10 17 14 17 18 15",
            stroke: "#2980b9",
            strokeWidth: "1.2",
            fill: "none"
          }), s.jsx("path", {
            d: "M8 10 C11 12 13 12 16 10",
            stroke: "#2980b9",
            strokeWidth: "0.8",
            fill: "none"
          }), s.jsx("ellipse", {
            cx: "12",
            cy: "4.5",
            rx: "7.8",
            ry: "1.2",
            fill: "#f39c12"
          })]
        })
      });
    } else if (Q === "izakaya") {
      return s.jsx("div", {
        className: "dye-cup-wrapper",
        style: a,
        children: s.jsxs("svg", {
          width: "22",
          height: "22",
          viewBox: "0 0 22 22",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dye-cup-svg-elem",
          children: [s.jsx("path", {
            d: "M4 2 C4 2 3 15 6 19 C7.5 20.5 14.5 20.5 16 19 C19 15 18 2 18 2 Z",
            fill: "#4b525d",
            stroke: "#2f3542",
            strokeWidth: "1.2"
          }), s.jsx("ellipse", {
            cx: "11",
            cy: "3.5",
            rx: "6.5",
            ry: "1",
            fill: "#f1f2f6"
          }), s.jsx("path", {
            d: "M4.2 2.5 C6 3.7 16 3.7 17.8 2.5",
            stroke: "#ffffff",
            strokeWidth: "1.2",
            fill: "none"
          })]
        })
      });
    } else if (Q === "school_canteen") {
      return s.jsx("div", {
        className: "dye-cup-wrapper",
        style: a,
        children: s.jsxs("svg", {
          width: "24",
          height: "34",
          viewBox: "0 0 24 34",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dye-cup-svg-elem",
          children: [s.jsx("rect", {
            x: "2",
            y: "5",
            width: "20",
            height: "27",
            fill: "#f39c12",
            stroke: "#d35400",
            strokeWidth: "1",
            rx: "1.5"
          }), s.jsx("line", {
            x1: "8",
            y1: "0",
            x2: "11",
            y2: "6",
            stroke: "#e74c3c",
            strokeWidth: "1.6"
          }), s.jsx("rect", {
            x: "4",
            y: "11",
            width: "16",
            height: "5",
            fill: "#e67e22",
            opacity: "0.8"
          }), s.jsx("circle", {
            cx: "12",
            cy: "22",
            r: "5.5",
            fill: "#ffffff"
          }), s.jsx("path", {
            d: "M10 20 L14 20 M12 20 L12 24 M10 24 L14 24",
            stroke: "#e74c3c",
            strokeWidth: "0.8"
          })]
        })
      });
    } else if (Q === "cafe") {
      return s.jsx("div", {
        className: "dye-cup-wrapper",
        style: a,
        children: s.jsxs("svg", {
          width: "34",
          height: "26",
          viewBox: "0 0 34 26",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dye-cup-svg-elem",
          children: [s.jsx("path", {
            d: "M26 8 C29.5 8 31.5 10 31.5 13 C31.5 16 29.5 18 26 18",
            stroke: "#f1f2f6",
            strokeWidth: "1.8",
            fill: "none"
          }), s.jsx("path", {
            d: "M4 3 L24 3 C24 3 25 17 20 22 C17 25 11 25 8 22 C3 17 4 3 4 3 Z",
            fill: "#ffffff",
            stroke: "#ced6e0",
            strokeWidth: "1"
          }), s.jsx("ellipse", {
            cx: "14",
            cy: "4",
            rx: "8.5",
            ry: "1.2",
            fill: "#5c4033"
          }), s.jsx("path", {
            d: "M12 4.2 C12 4.2 14 5.2 16 4.2 C16 3.2 14 3.2 14 3.2 C14 3.2 14 4.2 12 4.2 Z",
            fill: "#f1f2f6",
            opacity: "0.85"
          })]
        })
      });
    } else {
      return null;
    }
  };
  const is = e => {
    let a = "dye-plate";
    a = G && G.type === "bowl" ? Q === "home" ? "dye-bowl dye-bowl-home" : Q === "chinese" ? "dye-bowl dye-bowl-chinese" : Q === "izakaya" ? "dye-bowl dye-bowl-izakaya" : Q === "school_canteen" ? "dye-bowl dye-bowl-canteen" : Q === "cafe" ? "dye-bowl dye-bowl-cafe" : "dye-bowl" : Q === "home" ? "dye-plate dye-plate-home" : Q === "chinese" ? "dye-plate dye-plate-chinese" : Q === "western" ? "dye-plate dye-plate-restaurant" : Q === "izakaya" ? "dye-plate dye-plate-izakaya" : Q === "school_canteen" ? "dye-plate-canteen" : Q === "cafe" ? "dye-plate dye-plate-cafe" : "dye-plate";
    return s.jsx("div", {
      className: a,
      children: G && s.jsxs(s.Fragment, {
        children: [s.jsx("span", {
          className: "dye-food-item",
          children: G.emoji
        }), e && s.jsx("span", {
          className: "dye-food-name-label",
          children: G.name.includes("·") ? G.name.split("·")[1] : G.name
        })]
      })
    });
  };
  const ts = e => {
    let a = "";
    a = Q === "home" ? "dye-placemat dye-placemat-home" : Q === "chinese" ? "dye-placemat dye-placemat-chinese" : Q === "cafe" ? "dye-placemat dye-placemat-cafe" : "dye-placemat dye-placemat-none";
    let i = null;
    if (Q === "home" || Q === "izakaya") {
      const a = e ? {} : {
        right: "auto",
        left: "4px",
        transform: "rotate(180deg)"
      };
      i = s.jsx("div", {
        className: "dye-chopsticks dye-chopsticks-wood",
        style: a
      });
    } else if (Q === "chinese") {
      const a = e ? {} : {
        right: "auto",
        left: "4px",
        transform: "rotate(180deg)"
      };
      i = s.jsx("div", {
        className: "dye-chopsticks dye-chopsticks-porcelain",
        style: a
      });
    } else if (Q === "western") {
      const a = e ? {} : {
        transform: "rotate(180deg)"
      };
      i = s.jsx("div", {
        className: "dye-fork-knife",
        style: a
      });
    } else if (Q === "school_canteen") {
      const a = e ? {} : {
        right: "auto",
        left: "6px",
        transform: "rotate(180deg)"
      };
      const t = e ? {
        right: "16px"
      } : {
        right: "auto",
        left: "16px",
        transform: "rotate(180deg)"
      };
      i = s.jsxs(s.Fragment, {
        children: [s.jsx("div", {
          className: "dye-spoon",
          style: a
        }), s.jsx("div", {
          className: "dye-chopsticks dye-chopsticks-wood",
          style: t
        })]
      });
    } else if (Q === "cafe") {
      const a = e ? {} : {
        right: "auto",
        left: "6px",
        transform: "rotate(180deg)"
      };
      i = s.jsx("div", {
        className: "dye-spoon",
        style: a
      });
    }
    return s.jsxs("div", {
      className: "dye-tableware-set " + (e ? "dye-tableware-set-user" : "dye-tableware-set-partner"),
      children: [a && s.jsx("div", {
        className: a
      }), as(e), is(e), i]
    });
  };
  return s.jsxs("div", {
    id: "did-you-eat-screen",
    className: "screen " + (I ? "active" : ""),
    children: [s.jsx(c, {}), s.jsxs("div", {
      className: "dye-top-bar",
      children: [s.jsx("div", {
        className: "dye-back-btn",
        onClick: () => M("home-screen"),
        children: s.jsx(o, {
          size: 24
        })
      }), E && s.jsxs("div", {
        className: "dye-partner-selector",
        onClick: () => oe(true),
        children: [s.jsx("img", {
          src: ss(E),
          alt: E.name,
          className: "dye-partner-avatar"
        }), s.jsx("span", {
          className: "dye-partner-name",
          children: E.name
        })]
      }), s.jsx("div", {
        style: {
          width: "38px"
        }
      })]
    }), s.jsxs("div", {
      className: `dye-scene-area dye-scene-${Q}`,
      children: [s.jsx("div", {
        className: "dye-scene-grid"
      }), s.jsxs("div", {
        className: "dye-scene-bg-decor",
        children: [Q === "home" && s.jsxs("div", {
          className: "dye-decor-home-room",
          children: [s.jsxs("div", {
            className: "dye-home-door",
            children: [s.jsx("div", {
              className: "dye-home-door-frame"
            }), s.jsx("div", {
              className: "dye-home-door-knob"
            })]
          }), s.jsx("div", {
            className: "dye-home-painting",
            children: s.jsxs("svg", {
              width: "60",
              height: "75",
              viewBox: "0 0 60 75",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "dye-home-painting-svg",
              children: [s.jsx("rect", {
                x: "2",
                y: "2",
                width: "56",
                height: "71",
                fill: "#fafafa",
                stroke: "#8c553d",
                strokeWidth: "2.5",
                rx: "1"
              }), s.jsx("path", {
                d: "M30 55 C30 46, 20 38, 20 28 C20 18, 30 14, 30 14 C30 14, 40 18, 40 28 C40 38, 30 46, 30 55 Z",
                fill: "#8f9e8b",
                opacity: "0.3"
              }), s.jsx("path", {
                d: "M30 60 L30 22",
                stroke: "#4b5b48",
                strokeWidth: "1.2"
              }), s.jsx("path", {
                d: "M30 42 C34 37, 45 39, 45 32 C45 28, 40 30, 30 37",
                stroke: "#4b5b48",
                strokeWidth: "1.0",
                fill: "none"
              }), s.jsx("path", {
                d: "M30 32 C23 28, 15 31, 15 25 C15 22, 22 23, 30 29",
                stroke: "#4b5b48",
                strokeWidth: "1.0",
                fill: "none"
              }), s.jsx("circle", {
                cx: "45",
                cy: "32",
                r: "2",
                fill: "#718096"
              }), s.jsx("circle", {
                cx: "15",
                cy: "25",
                r: "1.5",
                fill: "#718096"
              })]
            })
          })]
        }), Q === "chinese" && s.jsxs("div", {
          className: "dye-decor-chinese-room",
          children: [s.jsxs("div", {
            className: "dye-chinese-window",
            children: [s.jsxs("div", {
              className: "dye-chinese-window-bamboo",
              children: [s.jsx("div", {
                className: "dye-bamboo-leaf-1"
              }), s.jsx("div", {
                className: "dye-bamboo-leaf-2"
              }), s.jsx("div", {
                className: "dye-bamboo-leaf-3"
              })]
            }), s.jsxs("svg", {
              width: "90",
              height: "90",
              viewBox: "0 0 90 90",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "dye-chinese-window-svg",
              children: [s.jsx("rect", {
                x: "3",
                y: "3",
                width: "84",
                height: "84",
                stroke: "#4a1a05",
                strokeWidth: "3",
                rx: "3",
                fill: "none"
              }), s.jsx("rect", {
                x: "8",
                y: "8",
                width: "74",
                height: "74",
                stroke: "#4a1a05",
                strokeWidth: "1.5",
                fill: "none"
              }), s.jsx("line", {
                x1: "45",
                y1: "8",
                x2: "45",
                y2: "82",
                stroke: "#4a1a05",
                strokeWidth: "1.5"
              }), s.jsx("line", {
                x1: "8",
                y1: "45",
                x2: "82",
                y2: "45",
                stroke: "#4a1a05",
                strokeWidth: "1.5"
              }), s.jsx("rect", {
                x: "28",
                y: "28",
                width: "34",
                height: "34",
                stroke: "#4a1a05",
                strokeWidth: "1.2",
                fill: "none"
              }), s.jsx("polygon", {
                points: "45,28 62,45 45,62 28,45",
                stroke: "#4a1a05",
                strokeWidth: "1",
                fill: "none"
              })]
            })]
          }), s.jsx("div", {
            className: "dye-chinese-scroll",
            children: s.jsxs("svg", {
              width: "40",
              height: "90",
              viewBox: "0 0 40 90",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "dye-chinese-scroll-svg",
              children: [s.jsx("rect", {
                x: "3",
                y: "4",
                width: "34",
                height: "76",
                fill: "#f4ede2",
                stroke: "#4a1a05",
                strokeWidth: "1.5"
              }), s.jsx("rect", {
                x: "6",
                y: "8",
                width: "28",
                height: "64",
                fill: "#faf7f2",
                stroke: "#cbd5e1",
                strokeWidth: "0.5"
              }), s.jsx("path", {
                d: "M10 58 C15 44, 20 48, 26 38 C30 44, 32 52, 32 68 Z",
                fill: "#cbd5e1",
                opacity: "0.6"
              }), s.jsx("path", {
                d: "M8 68 C13 58, 17 55, 23 48 C27 55, 30 60, 32 70 Z",
                fill: "#94a3b8",
                opacity: "0.5"
              }), s.jsx("path", {
                d: "M16 44 C18 35, 20 37, 21 30 C23 35, 24 40, 25 44 Z",
                fill: "#cbd5e1",
                opacity: "0.4"
              }), s.jsx("path", {
                d: "M20 20 Q22 18, 24 20 Q26 18, 28 20",
                stroke: "#475569",
                strokeWidth: "0.8",
                fill: "none"
              }), s.jsx("rect", {
                x: "25",
                y: "60",
                width: "4",
                height: "4",
                fill: "#ef4444",
                opacity: "0.8"
              }), s.jsx("rect", {
                x: "1",
                y: "80",
                width: "38",
                height: "3",
                fill: "#3b1602",
                rx: "0.5"
              }), s.jsx("line", {
                x1: "20",
                y1: "0",
                x2: "20",
                y2: "4",
                stroke: "#4a1a05",
                strokeWidth: "0.8"
              })]
            })
          })]
        }), Q === "western" && s.jsxs("div", {
          className: "dye-decor-western-room",
          children: [s.jsxs("div", {
            className: "dye-western-wall-light dye-light-left",
            children: [s.jsx("div", {
              className: "dye-wall-light-fixture"
            }), s.jsx("div", {
              className: "dye-wall-light-bulb"
            })]
          }), s.jsxs("div", {
            className: "dye-western-wall-light dye-light-right",
            children: [s.jsx("div", {
              className: "dye-wall-light-fixture"
            }), s.jsx("div", {
              className: "dye-wall-light-bulb"
            })]
          }), s.jsxs("div", {
            className: "dye-decor-crystal-lamp",
            children: [s.jsxs("svg", {
              width: "120",
              height: "70",
              viewBox: "0 0 120 70",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "dye-lamp-svg",
              children: [s.jsx("line", {
                x1: "60",
                y1: "0",
                x2: "60",
                y2: "25",
                stroke: "#d4af37",
                strokeWidth: "1.5",
                strokeDasharray: "2 2"
              }), s.jsx("path", {
                d: "M20 30 C 20 30, 60 45, 100 30",
                stroke: "#d4af37",
                strokeWidth: "2.5",
                fill: "none"
              }), s.jsx("path", {
                d: "M40 30 C 40 30, 60 38, 80 30",
                stroke: "#d4af37",
                strokeWidth: "1.5",
                fill: "none"
              }), s.jsx("line", {
                x1: "60",
                y1: "25",
                x2: "60",
                y2: "38",
                stroke: "#d4af37",
                strokeWidth: "2.5"
              }), s.jsx("circle", {
                cx: "20",
                cy: "30",
                r: "4.5",
                fill: "#ffffff",
                className: "glow-bulb"
              }), s.jsx("circle", {
                cx: "40",
                cy: "32",
                r: "3.5",
                fill: "#ffffff",
                className: "glow-bulb"
              }), s.jsx("circle", {
                cx: "60",
                cy: "38",
                r: "5.5",
                fill: "#ffffff",
                className: "glow-bulb"
              }), s.jsx("circle", {
                cx: "80",
                cy: "32",
                r: "3.5",
                fill: "#ffffff",
                className: "glow-bulb"
              }), s.jsx("circle", {
                cx: "100",
                cy: "30",
                r: "4.5",
                fill: "#ffffff",
                className: "glow-bulb"
              }), s.jsx("polygon", {
                points: "20,35 20,45 17,40",
                fill: "#d4af37",
                opacity: "0.8"
              }), s.jsx("polygon", {
                points: "60,44 60,57 57,50",
                fill: "#d4af37",
                opacity: "0.9"
              }), s.jsx("polygon", {
                points: "100,35 100,45 97,40",
                fill: "#d4af37",
                opacity: "0.8"
              })]
            }), s.jsx("span", {
              className: "dye-lamp-glow"
            })]
          })]
        }), Q === "izakaya" && s.jsxs("div", {
          className: "dye-decor-izakaya-room",
          children: [s.jsx("div", {
            className: "dye-shoji-door",
            children: s.jsxs("div", {
              className: "dye-shoji-grid",
              children: [s.jsx("div", {
                className: "dye-shoji-pane"
              }), s.jsx("div", {
                className: "dye-shoji-pane"
              }), s.jsx("div", {
                className: "dye-shoji-pane"
              }), s.jsx("div", {
                className: "dye-shoji-pane"
              })]
            })
          }), s.jsxs("div", {
            className: "dye-izakaya-shelf",
            children: [s.jsxs("div", {
              className: "dye-shelf-row",
              children: [s.jsx("div", {
                className: "dye-bottle-silhouette dye-bottle-1"
              }), s.jsx("div", {
                className: "dye-bottle-silhouette dye-bottle-2"
              }), s.jsx("div", {
                className: "dye-bottle-silhouette dye-bottle-3"
              })]
            }), s.jsx("div", {
              className: "dye-shelf-board"
            })]
          })]
        }), Q === "school_canteen" && s.jsxs("div", {
          className: "dye-decor-canteen-room",
          children: [s.jsxs("div", {
            className: "dye-canteen-window",
            children: [s.jsx("div", {
              className: "dye-canteen-window-trees"
            }), s.jsxs("div", {
              className: "dye-canteen-window-grid",
              children: [s.jsx("div", {
                className: "dye-canteen-pane"
              }), s.jsx("div", {
                className: "dye-canteen-pane"
              })]
            })]
          }), s.jsxs("div", {
            className: "dye-canteen-poster",
            children: [s.jsx("div", {
              className: "dye-poster-tape tape-top-left"
            }), s.jsx("div", {
              className: "dye-poster-tape tape-top-right"
            }), s.jsx("div", {
              className: "dye-poster-title",
              children: "公告 / 招新"
            }), s.jsx("div", {
              className: "dye-poster-line"
            }), s.jsx("div", {
              className: "dye-poster-line"
            }), s.jsx("div", {
              className: "dye-poster-text",
              children: "籃球賽 🎽 12:30"
            })]
          })]
        }), Q === "cafe" && s.jsx("div", {
          className: "dye-decor-cafe-room",
          children: s.jsxs("div", {
            className: "dye-cafe-window",
            children: [s.jsx("div", {
              className: "dye-cafe-window-garden"
            }), s.jsxs("div", {
              className: "dye-cafe-window-grid",
              children: [s.jsx("div", {
                className: "dye-cafe-pane"
              }), s.jsx("div", {
                className: "dye-cafe-pane"
              }), s.jsx("div", {
                className: "dye-cafe-pane"
              }), s.jsx("div", {
                className: "dye-cafe-pane"
              })]
            })]
          })
        })]
      }), E && s.jsxs("div", {
        className: "dye-character-wrapper",
        children: [U && s.jsx("div", {
          className: "dye-speech-bubble",
          children: U
        }), s.jsx("div", {
          className: "dye-character-image-container",
          children: s.jsx("img", {
            src: ss(E),
            alt: E.name,
            className: `dye-character-image \n                                    ${Ne ? "dye-eating" : ""} \n                                    ${be && Ce === "cooking" ? "dye-cooking" : ""}\n                                    ${Ne || be ? "" : "dye-talking"}\n                                `
          })
        })]
      }), s.jsx("div", {
        className: "dye-table-container",
        children: s.jsxs("div", {
          className: `dye-table dye-table-${Q}`,
          children: [Q === "western" && s.jsx("div", {
            className: "dye-table-western-cover"
          }), Q === "western" && s.jsx("div", {
            className: "dye-center-decoration",
            children: s.jsxs("div", {
              className: "dye-deco-item",
              style: {
                position: "relative"
              },
              children: ["🕯️", s.jsx("span", {
                className: "dye-candle-flame",
                children: "🔥"
              })]
            })
          }), s.jsxs("div", {
            className: "dye-plates-area",
            children: [ts(false), ts(true)]
          })]
        })
      }), !De && !be && s.jsx("div", {
        className: "dye-menu-float-btn",
        onClick: () => ae(true),
        children: s.jsx(m, {
          size: 20
        })
      })]
    }), (De || be) && s.jsxs("div", {
      className: "dye-control-panel",
      children: [De && s.jsxs("div", {
        className: "dye-game-panel",
        children: [s.jsxs("div", {
          className: "dye-game-title",
          children: [s.jsx(m, {
            size: 16
          }), s.jsxs("span", {
            children: ["美味烹飪 - ", qe === 0 ? `切碎 [${Me.ingredients.split("+")[0].trim()}]` : qe === 1 ? "翻炒下鍋" : `加入 [${Me.ingredients.split("+")[1].trim()}] 與調味`]
          })]
        }), s.jsxs("div", {
          className: "dye-gauge-container",
          children: [s.jsx("div", {
            className: "dye-gauge-perfect-line",
            children: s.jsx("span", {
              className: "dye-gauge-perfect-label",
              children: "美味黃金點"
            })
          }), s.jsx("div", {
            className: "dye-gauge-pointer",
            style: {
              left: `${Be}%`
            }
          })]
        }), s.jsx("div", {
          className: "dye-判定-text",
          children: Ae && s.jsx("span", {
            className: Te,
            children: Ae
          })
        }), s.jsxs("div", {
          style: {
            display: "flex",
            gap: "12px",
            width: "100%"
          },
          children: [s.jsx("button", {
            className: "dye-btn dye-btn-primary",
            onClick: () => {
              if (!De) {
                return;
              }
              if (Ye.current) {
                clearInterval(Ye.current);
                Ye.current = null;
              }
              let e = "Bad";
              let s = "太冷/太熱！";
              let a = "dye-bad";
              if (Be >= 42 && Be <= 58) {
                e = "Perfect";
                s = "美味黃金點！PERFECT!";
                a = "dye-perfect";
              } else if (Be >= 25 && Be < 42 || Be > 58 && Be <= 75) {
                e = "Good";
                s = "火候不錯！GOOD!";
                a = "dye-good";
              }
              Re(s);
              Oe(a);
              const i = [...Ze, e];
              Pe(i);
              let t = "";
              if (qe === 0) {
                t = e === "Perfect" ? "哇！食材切得大小非常均勻，完美保留了新鮮度！接下來我們熱鍋下油翻炒～" : "切得大小稍微有點差別，不過問題不大，下鍋翻炒時注意火候！";
              } else if (qe === 1) {
                t = e === "Perfect" ? "翻炒火候控制得極妙，香味已經完全出來了！快，準備起鍋前下調味料！" : "油煙稍微有點大，火候要控制下，快加入配菜和調味料提味！";
              }
              if (t) {
                H(t);
              }
              setTimeout(() => {
                Re("");
                if (qe < 2) {
                  _e(e => e + 1);
                  Ee(0);
                  Ge.current = 1;
                  Ke();
                } else {
                  (e => {
                    Fe(false);
                    if (Ye.current) {
                      clearInterval(Ye.current);
                    }
                    const s = e.filter(e => e === "Perfect").length;
                    const a = e.filter(e => e === "Good").length;
                    let i = "家常美味";
                    let t = "good";
                    let l = 15;
                    let d = "";
                    const n = Me.name;
                    if (s === 3) {
                      i = "米其林級絕世神作";
                      t = "perfect";
                      l = 30;
                      d = `天啊！這盤我們一起做的【${n}】簡直是廚神級的作品！色香味完美無瑕，快嚐嚐，我們配合得太好了！`;
                    } else if (s + a >= 2) {
                      i = "噴香家常美味";
                      t = "good";
                      l = 15;
                      d = `熱騰騰的【${n}】出鍋啦！看起來很不錯呢，香氣撲鼻。來，快坐下來，一起趁熱吃吧！`;
                    } else {
                      i = "焦黑的黑暗料理";
                      t = "bad";
                      l = 5;
                      d = `啊呀……火候好像沒控制好，這盤【${n}】有點焦黑和糊了呢。唔，不過這是我們親手做的，我會全部吃完的！`;
                    }
                    const r = {
                      name: `${i}·${n}`,
                      emoji: Me.emoji,
                      quality: t,
                      source: "一起手動烹飪",
                      type: Me.type || "plate"
                    };
                    const c = Math.max(0, R - 30);
                    const o = O + l;
                    const m = [{
                      id: Date.now().toString(),
                      food: r.name,
                      emoji: r.emoji,
                      quality: r.quality,
                      time: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      }),
                      review: d
                    }, ...V].slice(0, 15);
                    T(c);
                    Y(o);
                    J(r);
                    H(d);
                    X(m);
                    ee({
                      hunger: c,
                      affinity: o,
                      currentFood: r,
                      speech: d,
                      history: m
                    });
                    es();
                  })(i);
                }
              }, 1500);
            },
            style: {
              flex: 1
            },
            children: "停！"
          }), s.jsx("button", {
            className: "dye-btn dye-btn-secondary",
            onClick: () => {
              Fe(false);
              if (Ye.current) {
                clearInterval(Ye.current);
                Ye.current = null;
              }
              H("好啦，肚子餓了隨時找我，想吃什麼我陪你。");
            },
            children: "退出"
          })]
        })]
      }), be && s.jsxs("div", {
        className: "dye-waiting-panel",
        children: [s.jsx("div", {
          className: "dye-waiting-title",
          children: Ce === "cooking" ? "正在做飯中..." : "外賣配送中..."
        }), s.jsx("div", {
          className: "dye-progress-bar-container",
          children: s.jsx("div", {
            className: "dye-progress-bar",
            style: {
              width: `${$e}%`
            }
          })
        }), s.jsx("div", {
          className: "dye-waiting-text",
          children: `${$e}%`
        })]
      })]
    }), se && s.jsx("div", {
      className: "dye-menu-drawer-overlay",
      onClick: () => ae(false),
      children: s.jsxs("div", {
        className: "dye-menu-drawer",
        onClick: e => e.stopPropagation(),
        children: [s.jsxs("div", {
          className: "dye-drawer-header",
          children: [s.jsx("div", {
            className: "dye-drawer-handle"
          }), s.jsxs("div", {
            className: "dye-drawer-title-row",
            children: [s.jsx("span", {
              className: "dye-drawer-title",
              children: "🍱 就餐選單"
            }), s.jsx("div", {
              className: "dye-drawer-header-actions",
              children: s.jsxs("button", {
                className: "dye-drawer-history-btn",
                onClick: () => {
                  ae(false);
                  he(true);
                },
                children: [s.jsx(h, {
                  size: 16
                }), s.jsx("span", {
                  children: "歷史"
                })]
              })
            })]
          })]
        }), s.jsxs("div", {
          className: "dye-menu-subtabs-v2",
          children: [s.jsxs("button", {
            className: "dye-menu-subtab-btn-v2 " + (le === "cook" ? "dye-active" : ""),
            onClick: () => de("cook"),
            children: [s.jsx(m, {
              size: 13
            }), s.jsx("span", {
              children: "親手做菜"
            })]
          }), s.jsxs("button", {
            className: "dye-menu-subtab-btn-v2 " + (le === "delivery" ? "dye-active" : ""),
            onClick: () => de("delivery"),
            children: [s.jsx(y, {
              size: 13
            }), s.jsx("span", {
              children: "叫個外賣"
            })]
          }), s.jsxs("button", {
            className: "dye-menu-subtab-btn-v2 " + (le === "restaurant" ? "dye-active" : ""),
            onClick: () => de("restaurant"),
            children: [s.jsx(x, {
              size: 13
            }), s.jsx("span", {
              children: "去餐廳吃"
            })]
          }), s.jsxs("button", {
            className: "dye-menu-subtab-btn-v2 " + (le === "sync" ? "dye-active" : ""),
            onClick: () => de("sync"),
            children: [s.jsx(p, {
              size: 13
            }), s.jsx("span", {
              children: "同步吃飯"
            })]
          })]
        }), s.jsxs("div", {
          className: "dye-tab-content-v2",
          children: [le === "cook" && s.jsx("div", {
            className: "dye-recipe-list-v2",
            style: {
              animation: "dye-slide-up 0.25s ease-out"
            },
            children: S.map(e => s.jsxs("div", {
              className: "dye-recipe-card-v2",
              onClick: () => (e => {
                We(e);
                re(true);
              })(e),
              children: [s.jsx("div", {
                className: `dye-recipe-icon-wrapper recipe-icon-${e.id}`,
                children: s.jsx("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: e.emoji
                })
              }), s.jsxs("div", {
                className: "dye-recipe-card-info",
                children: [s.jsx("span", {
                  className: "dye-recipe-card-name",
                  children: e.name
                }), s.jsxs("span", {
                  className: "dye-recipe-card-ingredients",
                  children: ["配料: ", e.ingredients]
                })]
              }), s.jsx("div", {
                className: "dye-recipe-card-action",
                children: s.jsx(m, {
                  size: 14,
                  style: {
                    opacity: 0.6
                  }
                })
              })]
            }, e.id))
          }), le === "delivery" && s.jsx("div", {
            className: "dye-delivery-list-v2",
            style: {
              animation: "dye-slide-up 0.25s ease-out"
            },
            children: k.map(e => s.jsxs("div", {
              className: "dye-delivery-card-v2",
              onClick: () => (e => {
                ae(false);
                ke(true);
                Se("delivery");
                ze(0);
                H(`叫了外賣【${e.name}】！我看到配送員已經出發了，我們一邊聊天一邊等吧。`);
                let s = 0;
                const a = setInterval(() => {
                  s += 25;
                  ze(s);
                  if (s >= 100) {
                    clearInterval(a);
                    ke(false);
                    const s = {
                      name: e.name,
                      emoji: e.emoji,
                      quality: "good",
                      source: "外賣配送",
                      type: e.type || "plate"
                    };
                    const i = Math.max(0, R - e.hungerReduce);
                    const t = O + e.affinityAdd;
                    const l = `叮咚！外賣送達啦！哇，是熱騰騰的【${e.name}】，我們快開吃吧，餓壞了吧？`;
                    const d = [{
                      id: Date.now().toString(),
                      food: s.name,
                      emoji: s.emoji,
                      quality: s.quality,
                      time: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      }),
                      review: l
                    }, ...V].slice(0, 15);
                    T(i);
                    Y(t);
                    J(s);
                    H(l);
                    X(d);
                    ee({
                      hunger: i,
                      affinity: t,
                      currentFood: s,
                      speech: l,
                      history: d
                    });
                    es();
                  }
                }, 1000);
              })(e),
              children: [s.jsx("div", {
                className: `dye-delivery-icon-wrapper delivery-icon-${e.id}`,
                children: s.jsx("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: e.emoji
                })
              }), s.jsxs("div", {
                className: "dye-delivery-card-info",
                children: [s.jsx("span", {
                  className: "dye-delivery-card-name",
                  children: e.name
                }), s.jsx("span", {
                  className: "dye-delivery-card-intro",
                  children: e.intro
                })]
              }), s.jsx("div", {
                className: "dye-delivery-card-action",
                children: s.jsx(y, {
                  size: 14,
                  style: {
                    opacity: 0.6
                  }
                })
              })]
            }, e.id))
          }), le === "restaurant" && s.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              animation: "dye-slide-up 0.25s ease-out"
            },
            children: [s.jsx("div", {
              className: "dye-restaurant-list-v2",
              children: C.map(e => {
                const a = Q === e.id;
                return s.jsxs("div", {
                  className: "dye-restaurant-card-v2 " + (a ? "dye-selected" : ""),
                  onClick: () => He(e),
                  children: [s.jsxs("div", {
                    className: `dye-res-icon-wrapper res-icon-${e.id}`,
                    children: [e.id === "home" && s.jsx(j, {
                      size: 15
                    }), e.id === "chinese" && s.jsx(x, {
                      size: 15
                    }), e.id === "western" && s.jsx(f, {
                      size: 15
                    }), e.id === "izakaya" && s.jsx(v, {
                      size: 15
                    }), e.id === "school_canteen" && s.jsx(u, {
                      size: 15
                    }), e.id === "cafe" && s.jsx(g, {
                      size: 15
                    })]
                  }), s.jsxs("div", {
                    className: "dye-res-card-info",
                    children: [s.jsx("span", {
                      className: "dye-res-card-name",
                      children: e.name
                    }), s.jsx("span", {
                      className: "dye-res-card-intro",
                      children: e.intro
                    })]
                  }), s.jsx("div", {
                    className: "dye-res-card-action",
                    children: a ? s.jsx("span", {
                      className: "dye-res-active-badge",
                      children: "在此處"
                    }) : s.jsx(N, {
                      size: 14,
                      style: {
                        opacity: 0.4
                      }
                    })
                  })]
                }, e.id);
              })
            }), Q !== "home" && s.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                alignItems: "center",
                flexWrap: "wrap"
              },
              children: [s.jsx("span", {
                style: {
                  fontSize: "11px",
                  color: "#94a3b8"
                },
                children: "招牌點單:"
              }), ($ = C.find(e => e.id === Q)) == null ? undefined : $.foods.map((e, a) => s.jsxs("button", {
                className: "dye-tab-btn",
                onClick: () => (e => {
                  ae(false);
                  const s = {
                    name: e.name,
                    emoji: e.emoji,
                    quality: "perfect",
                    source: "餐廳招牌菜",
                    type: e.type || "plate"
                  };
                  const a = Math.max(0, R - 35);
                  const i = O + 12;
                  const t = `熱氣騰騰的招牌菜【${e.name}】端上來了！看起來太誘人啦，來，張嘴，我餵你吃第一口～`;
                  const l = [{
                    id: Date.now().toString(),
                    food: s.name,
                    emoji: s.emoji,
                    quality: s.quality,
                    time: new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    }),
                    review: t
                  }, ...V].slice(0, 15);
                  T(a);
                  Y(i);
                  J(s);
                  H(t);
                  X(l);
                  ee({
                    hunger: a,
                    affinity: i,
                    currentFood: s,
                    speech: t,
                    history: l
                  });
                  es();
                })(e),
                style: {
                  padding: "6px 12px",
                  fontSize: "11px"
                },
                children: [e.emoji, " ", e.name]
              }, a)), s.jsx("button", {
                className: "dye-tab-btn",
                onClick: () => He({
                  id: "home",
                  name: "回家"
                }),
                style: {
                  padding: "6px 12px",
                  fontSize: "11px",
                  background: "rgba(239, 68, 68, 0.1)",
                  borderColor: "rgba(239, 68, 68, 0.2)",
                  color: "#ef4444"
                },
                children: "回家吃 🏠"
              })]
            })]
          }), le === "sync" && s.jsxs("div", {
            className: "dye-upload-container-v2",
            style: {
              animation: "dye-slide-up 0.25s ease-out"
            },
            children: [s.jsxs("div", {
              className: "dye-upload-row-v2",
              children: [s.jsx("div", {
                className: "dye-upload-preview-v2",
                onClick: () => ve(true),
                children: pe ? s.jsx("img", {
                  src: pe,
                  alt: "餐食預覽"
                }) : s.jsx(p, {
                  size: 20,
                  style: {
                    color: "#94a3b8"
                  }
                })
              }), s.jsx("input", {
                type: "text",
                className: "dye-food-input-v2",
                placeholder: "我今天吃了什麼？(如: 減脂沙拉、辣子雞...)",
                value: ye,
                onChange: e => xe(e.target.value),
                disabled: ue,
                onKeyDown: e => e.key === "Enter" && Ve()
              }), s.jsx("button", {
                className: "dye-submit-btn-v2",
                onClick: Ve,
                disabled: ue || !ye.trim() && !pe,
                children: ue ? s.jsx(w, {
                  size: 16,
                  className: "animate-spin"
                }) : s.jsx("span", {
                  children: "評價"
                })
              })]
            }), s.jsxs("div", {
              style: {
                fontSize: "10.5px",
                color: "#94a3b8",
                display: "flex",
                gap: "6px",
                alignItems: "center",
                padding: "0 4px"
              },
              children: [s.jsx(b, {
                size: 12,
                style: {
                  color: "#ffa502"
                }
              }), s.jsx("span", {
                children: "上傳今天吃的一餐，伴侶會用他/她的獨特人設為你點評並一起吃飯"
              })]
            })]
          })]
        })]
      })
    }), me && s.jsx("div", {
      className: "dye-history-modal-overlay",
      onClick: () => he(false),
      children: s.jsxs("div", {
        className: "dye-history-modal",
        onClick: e => e.stopPropagation(),
        children: [s.jsxs("div", {
          className: "dye-history-header",
          children: [s.jsx("span", {
            className: "dye-history-title",
            children: "🍱 吃貨手帳歷史"
          }), s.jsx("button", {
            className: "dye-history-close",
            onClick: () => he(false),
            children: "✕"
          })]
        }), s.jsx("div", {
          className: "dye-history-list",
          children: V.length > 0 ? V.map(e => s.jsxs("div", {
            className: "dye-history-card",
            children: [s.jsxs("div", {
              className: "dye-history-card-top",
              children: [s.jsxs("span", {
                className: "dye-history-food",
                children: [s.jsx("span", {
                  children: e.emoji
                }), s.jsx("span", {
                  children: e.food.includes("·") ? e.food.split("·")[1] : e.food
                })]
              }), s.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                },
                children: [s.jsx("span", {
                  className: `dye-history-badge dye-badge-${e.quality}`,
                  children: e.food.includes("·") ? e.food.split("·")[0] : "美味"
                }), s.jsx("span", {
                  className: "dye-history-time",
                  children: e.time
                })]
              })]
            }), s.jsxs("p", {
              className: "dye-history-review",
              children: ["“ ", e.review, " ”"]
            })]
          }, e.id)) : s.jsxs("div", {
            className: "dye-history-empty",
            children: [s.jsx(x, {
              size: 36,
              style: {
                opacity: 0.3,
                marginBottom: "8px"
              }
            }), s.jsx("p", {
              children: "手帳空空如也，快去挑選食材做飯吧！"
            })]
          })
        })]
      })
    }), ce && s.jsx("div", {
      className: "dye-partner-picker-overlay",
      onClick: () => oe(false),
      children: s.jsxs("div", {
        className: "dye-partner-picker",
        onClick: e => e.stopPropagation(),
        children: [s.jsx("h4", {
          className: "dye-partner-picker-title",
          children: "選擇用餐對象"
        }), s.jsx("div", {
          className: "dye-partner-picker-list",
          children: q.map(e => s.jsxs("div", {
            className: "dye-partner-picker-item " + (String(e.id) === String(_) ? "dye-selected" : ""),
            onClick: () => {
              B(e.id);
              oe(false);
            },
            children: [s.jsx("img", {
              src: ss(e),
              alt: e.name,
              className: "dye-partner-picker-avatar"
            }), s.jsx("span", {
              className: "dye-partner-picker-name",
              children: e.name
            })]
          }, e.id))
        })]
      })
    }), s.jsx(d, {
      isOpen: fe,
      onClose: () => ve(false),
      onImageSelect: e => {
        je(e);
        ve(false);
      },
      title: "上傳餐食照片",
      compressProfile: "default",
      allowCamera: true
    }), ne && s.jsx("div", {
      className: "dye-method-picker-overlay",
      onClick: () => re(false),
      children: s.jsxs("div", {
        className: "dye-method-picker",
        onClick: e => e.stopPropagation(),
        children: [s.jsxs("h4", {
          className: "dye-method-title",
          children: ["下廚方式 - ", Me.name]
        }), s.jsxs("div", {
          className: "dye-method-options",
          children: [s.jsxs("div", {
            className: "dye-method-btn",
            onClick: () => Je("together"),
            children: [s.jsx("span", {
              className: "dye-method-btn-emoji",
              children: "🔪"
            }), s.jsxs("div", {
              className: "dye-method-btn-content",
              children: [s.jsx("span", {
                className: "dye-method-btn-title",
                children: "一起動手做"
              }), s.jsx("span", {
                className: "dye-method-btn-desc",
                children: "共同下廚翻炒，完成美味火候大挑戰"
              })]
            })]
          }), s.jsxs("div", {
            className: "dye-method-btn",
            onClick: () => Je("partner"),
            children: [s.jsx("span", {
              className: "dye-method-btn-emoji",
              children: "🍳"
            }), s.jsxs("div", {
              className: "dye-method-btn-content",
              children: [s.jsx("span", {
                className: "dye-method-btn-title",
                children: "對象做給我吃"
              }), s.jsx("span", {
                className: "dye-method-btn-desc",
                children: "讓伴侶為你親手烹飪熱騰騰的佳餚"
              })]
            })]
          })]
        }), s.jsx("button", {
          className: "dye-method-close-btn",
          onClick: () => re(false),
          children: "取消"
        })]
      })
    })]
  });
};
export { $ as default };