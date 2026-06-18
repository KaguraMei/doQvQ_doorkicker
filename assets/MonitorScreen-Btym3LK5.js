import { r as e, j as t } from "./vendor-react-B2VXkTUV.js";
import { j as s, bG as r, aG as i, g as l, a9 as o, aw as a, aj as c, G as h, c as n, a as d, b as x, f, bH as k, bI as y } from "./native-pet-CTNtZgMA.js";
import { compressImageForStorage as j } from "./imageCompressor-FPWVE1FW.js";
import { Z as g } from "./main-BO9xa-SQ.js";
import { F as u } from "./FrostedGlassBackground-DQPbupYU.js";
import { l as p, X as m, V as w, ap as v, bD as W, bE as b, bu as S, bF as N, U as C, r as M, bG as L, T as B, O as I, aV as Z, x as $, bH as D, H as U, bI as _, bs as T, bJ as A, bK as R, o as P, bb as H, E as F, bL as z, af as O, C as E, a6 as K, P as Q, I as V, bM as G, bN as J, bO as Y, v as q, bP as X, aZ as ee, bQ as te, bR as se, bS as re, bT as ie, bU as le, Z as oe, al as ae, bV as ce, bW as he, bX as ne, bY as de, b6 as xe, bf as fe, bZ as ke, b_ as ye, b$ as je, c0 as ge } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
let ue = 0;
const pe = () => `st_${Date.now().toString(36)}_${(ue++).toString(36)}`;
const me = {
  bedroom: 1,
  living: 2,
  kitchen: 3,
  bathroom: 4,
  balcony: 5
};
const we = (t = null, o = {}) => {
  const {
    safeCurrentProfileUserId: a
  } = s();
  const c = t || a;
  const h = !!o.allowGuestWrite;
  const n = e.useCallback(e => e != null && (String(e) === String(a) || h), [a, h]);
  const [d, x] = e.useState(null);
  const [f, k] = e.useState(true);
  const y = e.useRef(c);
  y.current = c;
  const g = e.useRef(null);
  g.current = d;
  const u = e.useRef(null);
  e.useEffect(() => {
    let e = true;
    const t = c;
    if (t == null) {
      x({
        userId: null,
        rooms: r.map(e => ({
          ...e
        })),
        occupantRoom: {
          __user__: "bedroom"
        },
        stickers: [{
          id: "st_rug",
          roomId: "bedroom",
          kind: "furniture",
          refType: "icon",
          refId: "Rug",
          icon: "Rug",
          x: 0.5,
          y: 0.7,
          scale: 1
        }],
        cohabitants: [],
        level: 1,
        lastHouseworkAt: 0
      });
      k(false);
      return;
    } else {
      k(true);
      (async () => {
        try {
          const s = await i.get(t);
          if (!e || String(y.current) !== String(t)) {
            return;
          }
          x(s);
        } catch (s) {
          if (e && String(y.current) === String(t)) {
            x(await i.get(t).catch(() => null));
          }
        } finally {
          if (e) {
            k(false);
          }
        }
      })();
      return () => {
        e = false;
      };
    }
  }, [c]);
  const p = e.useCallback(e => {
    const t = y.current;
    if (t != null && n(t)) {
      if (u.current) {
        clearTimeout(u.current);
      }
      u.current = setTimeout(() => {
        if (String(y.current) === String(t)) {
          i.save(t, {
            rooms: e.rooms,
            stickers: e.stickers,
            occupantRoom: e.occupantRoom,
            cohabitants: e.cohabitants,
            level: e.level || 1,
            lastHouseworkAt: e.lastHouseworkAt || 0
          }).catch(() => {});
        }
      }, 500);
    }
  }, [n]);
  e.useEffect(() => () => {
    if (u.current) {
      clearTimeout(u.current);
      const e = y.current;
      const t = g.current;
      if (t && n(e)) {
        i.save(e, {
          rooms: t.rooms,
          stickers: t.stickers,
          occupantRoom: t.occupantRoom,
          cohabitants: t.cohabitants,
          level: t.level || 1,
          lastHouseworkAt: t.lastHouseworkAt || 0
        }).catch(() => {});
      }
    }
  }, [n]);
  const m = e.useCallback(async () => {
    const e = y.current;
    if (e == null) {
      return;
    }
    const t = await i.get(e).catch(() => null);
    if (t && String(y.current) === String(e)) {
      x(t);
    }
  }, []);
  const w = e.useCallback(e => {
    const t = y.current;
    if (n(t)) {
      x(t => {
        if (!t) {
          return t;
        }
        const s = e(t);
        p(s);
        return s;
      });
    }
  }, [n, p]);
  const v = e.useCallback(async (e, t) => {
    const s = y.current;
    if (s == null) {
      return;
    }
    if (!n(s)) {
      return;
    }
    const r = t ? await j(t, {
      maxDim: 1280,
      quality: 0.72
    }) : null;
    if (String(y.current) !== String(s)) {
      return;
    }
    await i.setRoomBg(s, e, r);
    if (String(y.current) !== String(s)) {
      return;
    }
    const l = await i.get(s);
    if (String(y.current) === String(s)) {
      x(l);
    }
  }, [n]);
  const W = e.useCallback(async (e, t, s) => {
    const r = y.current;
    if (r == null) {
      return;
    }
    if (!n(r)) {
      return;
    }
    const l = s ? await j(s, {
      maxDim: 1280,
      quality: 0.74
    }) : null;
    if (String(y.current) !== String(r)) {
      return;
    }
    await i.setRoomLayer(r, e, t, l);
    if (String(y.current) !== String(r)) {
      return;
    }
    const o = await i.get(r);
    if (String(y.current) === String(r)) {
      x(o);
    }
  }, [n]);
  const b = e.useCallback(async (e, t, s) => {
    const r = y.current;
    if (r == null) {
      return;
    }
    if (!n(r)) {
      return;
    }
    await i.setRoomStyle(r, e, t, s);
    if (String(y.current) !== String(r)) {
      return;
    }
    const l = await i.get(r);
    if (String(y.current) === String(r)) {
      x(l);
    }
  }, [n]);
  const S = e.useCallback(async (e, t) => {
    const s = y.current;
    if (s == null) {
      return;
    }
    if (!n(s)) {
      return;
    }
    const r = t ? await j(t, {
      maxDim: 768,
      quality: 0.78
    }) : null;
    if (String(y.current) !== String(s)) {
      return;
    }
    await i.setStickerImage(s, e, r);
    if (String(y.current) !== String(s)) {
      return;
    }
    const l = await i.get(s);
    if (String(y.current) === String(s)) {
      x(l);
    }
  }, [n]);
  const N = e.useCallback(e => {
    w(t => ({
      ...t,
      stickers: [...(t.stickers || []), {
        id: pe(),
        x: 0.5,
        y: 0.5,
        scale: 1,
        ...e
      }]
    }));
  }, [w]);
  const C = e.useCallback((e, t) => {
    w(s => ({
      ...s,
      stickers: (s.stickers || []).map(s => s.id === e ? {
        ...s,
        ...t
      } : s)
    }));
  }, [w]);
  const M = e.useCallback(e => {
    w(t => ({
      ...t,
      stickers: (t.stickers || []).filter(t => t.id !== e)
    }));
  }, [w]);
  const L = e.useCallback((e, t, s) => {
    const r = e || "bedroom";
    const i = Math.min(1, Math.max(0, t));
    const l = Math.min(1, Math.max(0, s));
    w(e => {
      const t = [...(e.stickers || [])];
      const s = t.findIndex(e => e.kind === "occupant" && e.refType === "user");
      if (s >= 0) {
        t[s] = {
          ...t[s],
          roomId: r,
          x: i,
          y: l
        };
      } else {
        t.push({
          id: pe(),
          roomId: r,
          kind: "occupant",
          refType: "user",
          refId: "__user__",
          x: i,
          y: l,
          scale: 1
        });
      }
      return {
        ...e,
        stickers: t,
        occupantRoom: {
          ...(e.occupantRoom || {}),
          __user__: r
        }
      };
    });
  }, [w]);
  const B = e.useCallback(async () => {
    const e = y.current;
    if (e == null) {
      return;
    }
    if (!n(e)) {
      return;
    }
    if (u.current) {
      clearTimeout(u.current);
    }
    await i.reset(e);
    if (String(y.current) !== String(e)) {
      return;
    }
    const t = await i.get(e);
    if (String(y.current) === String(e)) {
      x(t);
    }
  }, [n]);
  const I = e.useCallback(async () => {
    const e = y.current;
    if (e == null) {
      return [];
    }
    try {
      return ((await l.getByUser(e)) || []).filter(e => e && e.isUnlocked === true).map(e => String(e.characterId));
    } catch (t) {
      return [];
    }
  }, []);
  const Z = e.useCallback((e, t) => {
    const s = String(e);
    w(e => (e.cohabitants || []).map(String).includes(s) ? e : {
      ...e,
      cohabitants: [...(e.cohabitants || []), s],
      occupantRoom: {
        ...(e.occupantRoom || {}),
        [s]: t || "living"
      },
      stickers: [...(e.stickers || []), {
        id: pe(),
        roomId: t || "living",
        kind: "occupant",
        refType: "char",
        refId: s,
        x: 0.4,
        y: 0.5,
        scale: 1
      }]
    });
  }, [w]);
  const $ = e.useCallback(e => {
    const t = String(e);
    w(e => {
      const s = {
        ...(e.occupantRoom || {})
      };
      delete s[t];
      return {
        ...e,
        cohabitants: (e.cohabitants || []).map(String).filter(e => e !== t),
        occupantRoom: s,
        stickers: (e.stickers || []).filter(e => e.kind !== "occupant" || e.refType !== "char" || String(e.refId) !== t)
      };
    });
  }, [w]);
  const D = e.useCallback((e, t) => {
    var s;
    const r = y.current;
    return String(r) === String(a) && !((((s = g.current) == null ? undefined : s.level) || 1) >= 5) && (!t || !!t(e)) && !(w(e => {
      const t = e.level || 1;
      if (t >= 5) {
        return e;
      } else {
        return {
          ...e,
          level: t + 1
        };
      }
    }), 0);
  }, [a, w]);
  const U = e.useCallback((e, t) => {
    var s;
    const r = y.current;
    if (String(r) !== String(a)) {
      return false;
    }
    const i = Date.now();
    const l = ((s = g.current) == null ? undefined : s.lastHouseworkAt) || 0;
    return !(i - l < 60000) && !(t && t(e), w(e => ({
      ...e,
      lastHouseworkAt: i
    })), 0);
  }, [a, w]);
  const _ = String(c) !== String(a);
  return {
    homeland: d,
    loading: f,
    level: (d == null ? undefined : d.level) || 1,
    lastHouseworkAt: (d == null ? undefined : d.lastHouseworkAt) || 0,
    isVisiting: _,
    reload: m,
    uploadRoomBg: v,
    addSticker: N,
    updateSticker: C,
    removeSticker: M,
    moveUserTo: L,
    setStickerImg: S,
    setRoomLayer: W,
    setRoomStyle: b,
    resetHomeland: B,
    getInvitablePartnerIds: I,
    inviteCohabitant: Z,
    removeCohabitant: $,
    upgradeHomeland: D,
    doHousework: U
  };
};
const ve = [{
  type: "showcase",
  icon: "Package",
  labelKey: "homelandFurnShowcase",
  category: "living"
}, {
  type: "bed",
  icon: "BedDouble",
  labelKey: "homelandFurnBed",
  category: "bedroom"
}, {
  type: "sofa",
  icon: "Armchair",
  labelKey: "homelandFurnSofa",
  category: "living"
}, {
  type: "table",
  icon: "Utensils",
  labelKey: "homelandFurnTable",
  category: "kitchen_bath"
}, {
  type: "plant",
  icon: "Sprout",
  labelKey: "homelandFurnPlant",
  category: "decor_outdoor"
}, {
  type: "tv",
  icon: "Tv",
  labelKey: "homelandFurnTv",
  category: "living"
}, {
  type: "lamp",
  icon: "Lamp",
  labelKey: "homelandFurnLamp",
  category: "bedroom"
}, {
  type: "bath",
  icon: "Bath",
  labelKey: "homelandFurnBath",
  category: "kitchen_bath"
}, {
  type: "rug",
  icon: "Rug",
  labelKey: "homelandFurnRug",
  category: "decor_outdoor"
}, {
  type: "door",
  icon: "DoorClosed",
  labelKey: "homelandFurnDoor",
  category: "living"
}, {
  type: "bookshelf",
  icon: "BookOpen",
  labelKey: "homelandFurnBookshelf",
  category: "living"
}, {
  type: "window",
  icon: "AppWindow",
  labelKey: "homelandFurnWindow",
  category: "decor_outdoor"
}, {
  type: "wardrobe",
  icon: "Shirt",
  labelKey: "homelandFurnWardrobe",
  category: "bedroom"
}, {
  type: "desk",
  icon: "Table",
  labelKey: "homelandFurnDesk",
  category: "living"
}, {
  type: "refrigerator",
  icon: "Refrigerator",
  labelKey: "homelandFurnRefrigerator",
  category: "kitchen_bath"
}, {
  type: "stove",
  icon: "CookingPot",
  labelKey: "homelandFurnStove",
  category: "kitchen_bath"
}, {
  type: "toilet",
  icon: "ShowerHead",
  labelKey: "homelandFurnToilet",
  category: "kitchen_bath"
}, {
  type: "washbasin",
  icon: "Droplets",
  labelKey: "homelandFurnWashBasin",
  category: "kitchen_bath"
}, {
  type: "showershelf",
  icon: "Grid",
  labelKey: "homelandFurnShowerShelf",
  category: "kitchen_bath"
}, {
  type: "coffeemachine",
  icon: "Coffee",
  labelKey: "homelandFurnCoffeeMachine",
  category: "kitchen_bath"
}, {
  type: "washingmachine",
  icon: "WashingMachine",
  labelKey: "homelandFurnWashingMachine",
  category: "kitchen_bath"
}, {
  type: "flowerstand",
  icon: "Flower",
  labelKey: "homelandFurnFlowerStand",
  category: "decor_outdoor"
}, {
  type: "deckchair",
  icon: "Sunset",
  labelKey: "homelandFurnDeckChair",
  category: "decor_outdoor"
}, {
  type: "painting",
  icon: "Image",
  labelKey: "homelandFurnPainting",
  category: "decor_outdoor"
}, {
  type: "frenchwindow",
  icon: "Maximize2",
  labelKey: "homelandFurnFrenchWindow",
  category: "decor_outdoor"
}, {
  type: "photoframe",
  icon: "Camera",
  labelKey: "homelandFurnPhotoFrame",
  category: "decor_outdoor"
}];
const We = [{
  id: "cream",
  labelKey: "homelandWallCream"
}, {
  id: "plain",
  labelKey: "homelandWallPlain"
}, {
  id: "stripe",
  labelKey: "homelandWallStripe"
}, {
  id: "floral",
  labelKey: "homelandWallFloral"
}, {
  id: "grid",
  labelKey: "homelandWallGrid"
}, {
  id: "mint",
  labelKey: "homelandWallMint"
}];
const be = [{
  id: "wood",
  labelKey: "homelandFloorWood"
}, {
  id: "tile",
  labelKey: "homelandFloorTile"
}, {
  id: "parquet",
  labelKey: "homelandFloorParquet"
}, {
  id: "carpet",
  labelKey: "homelandFloorCarpet"
}, {
  id: "marble",
  labelKey: "homelandFloorMarble"
}, {
  id: "darkwood",
  labelKey: "homelandFloorDarkwood"
}];
const Se = {
  他的外套: {
    spec: {
      物品: "一件外套",
      熟悉度: "99.8% 是 ta 的味道",
      小細節: "袖口還留著 ta 的氣息"
    },
    monologue: "趁 ta 不在，悄悄借走的一件外套，打算洗乾淨了再還回去當驚喜。抱著它的時候，那若有若無的香氣，讓我覺得離 ta 好近…"
  },
  手寫小本子: {
    spec: {
      物品: "一個手寫小本子",
      內容: "ta 隨手記下的日常",
      夾層小紙條: "1314（寫著「一生一世」）"
    },
    monologue: "ta 親手寫下的小本子… 每一篇、每一個字，我都反覆讀了上百遍。被人放在心上的感覺，一定很溫暖吧。"
  },
  他用過的杯子: {
    spec: {
      物品: "ta 喝過的杯子",
      狀態: "杯壁還有一點餘溫",
      小心思: "想留著當今天的紀念"
    },
    monologue: "ta 剛喝過的杯子，我小心地收了起來。杯壁上彷彿還留著 ta 指尖微微的餘溫…"
  }
};
const Ne = (e, t) => {
  try {
    const s = window.localStorage.getItem(e);
    if (s) {
      return JSON.parse(s);
    } else {
      return t;
    }
  } catch (s) {
    return t;
  }
};
const Ce = (e, t, s) => {
  const r = e => Math.min(1, Math.max(0, e));
  if (e && e.width && e.height) {
    if (typeof window != "undefined" && window.matchMedia && window.matchMedia("(orientation: portrait)").matches) {
      return {
        x: r((s - e.top) / e.height),
        y: r((e.right - t) / e.width)
      };
    } else {
      return {
        x: r((t - e.left) / e.width),
        y: r((s - e.top) / e.height)
      };
    }
  } else {
    return {
      x: 0.5,
      y: 0.5
    };
  }
};
const Me = {
  showcase: "a cute display cabinet / curio shelf full of keepsakes",
  bed: "a cozy double bed with soft blanket and pillows",
  sofa: "a comfy fabric sofa / armchair",
  table: "a dining table set with plates and cutlery",
  plant: "a potted green plant in a ceramic pot",
  tv: "a flat-screen TV on a stand",
  lamp: "a warm bedside lamp",
  bath: "a clean bathtub",
  door: "a cute wooden room door with a flower wreath",
  bookshelf: "a cute wooden bookshelf full of colorful books",
  window: "a bright cozy room window with sheer curtains",
  wardrobe: "a cute wooden wardrobe / closet for clothes",
  desk: "a study desk with a cute notebook and pen",
  refrigerator: "a cute small double-door refrigerator with kitchen magnets and sticky notes",
  stove: "a cute pink kitchen sink and stove set with wooden cooking utensils",
  toilet: "a cute white flush toilet and a small ceramic basin next to it",
  washbasin: "a cute ceramic washbasin with a cat-shaped faucet and double drawers",
  showershelf: "a cute wooden bathroom wall shelf with pastel towels and shampoo bottles",
  coffeemachine: "a cute pink espresso coffee maker with a golden pressure gauge and mug",
  washingmachine: "a cute pink drum washing machine with a cat-head door panel",
  flowerstand: "a cute white iron flower stand with hanging pots and small ribbon multi-succulent",
  deckchair: "a cozy cloud-shaped lounge chair with a yellow duck printed blanket",
  painting: "a cute watercolor painting of a cat paw with a gold wavy circle wooden frame",
  frenchwindow: "a bright cozy arch double french window with pink ruffled lace curtains",
  photoframe: "a cute double-layered pink heart-shaped photo frame with cartoon bear sketch inside"
};
const Le = {
  sleep: "在臥室睡覺",
  wake: "剛睡醒還賴在床上",
  wash: "在洗手間刷牙洗漱",
  shower: "在浴室洗澡",
  cook: "在廚房做飯",
  eat: "在吃飯",
  relax: "在客廳發呆放空",
  tv: "窩在沙發看電視",
  balcony: "在陽台透氣吹風",
  work: "在忙自己的事（工作／看書／創作）",
  out: "外出不在家"
};
const Be = Object.keys(Le);
const Ie = 86400000;
const Ze = e => {
  const t = `${(e == null ? undefined : e.name) || ""}|${((e == null ? undefined : e.persona) || (e == null ? undefined : e.intro) || (e == null ? undefined : e.signature) || "").toString().slice(0, 200)}`;
  let s = 0;
  for (let r = 0; r < t.length; r++) {
    s = s * 31 + t.charCodeAt(r) | 0;
  }
  return s.toString(36);
};
const $e = e => `hl_act_lines_${e}`;
const De = new Map();
const Ue = (e, t) => {
  if (!e || !t) {
    return null;
  }
  const s = e[t];
  if (Array.isArray(s) && s.length !== 0) {
    return s[Math.floor(Math.random() * s.length)];
  } else {
    return null;
  }
};
const _e = [{
  id: "cry",
  desc: "一個人偷偷在抹眼淚／剛哭過，眼眶還紅著"
}, {
  id: "phonegrin",
  desc: "對著手機螢幕一個人傻笑，像收到什麼開心的消息"
}, {
  id: "sleeptalk",
  desc: "睡著了在說夢話，吐露平時不會說的真心話"
}, {
  id: "daze",
  desc: "對著窗外發了很久的呆，像在想很重的心事"
}, {
  id: "hum",
  desc: "以為沒人，放鬆地小聲哼著歌／自言自語"
}, {
  id: "mirror",
  desc: "對著鏡子整理儀容，偷偷練習表情或對自己打氣"
}, {
  id: "photo",
  desc: "盯著手機／相框裡某張照片出神，神情很溫柔"
}, {
  id: "hug",
  desc: "抱著抱枕／玩偶縮在角落，像在尋求安全感"
}, {
  id: "snack",
  desc: "深夜偷吃零食，被發現時表情有點心虛"
}, {
  id: "dance",
  desc: "戴著耳機，以為沒人看見地隨音樂亂跳"
}, {
  id: "letter",
  desc: "在寫一封不知道會不會寄出的信／日記"
}, {
  id: "tired",
  desc: "卸下所有偽裝，整個人癱在沙發上，露出疲憊的真實一面"
}];
const Te = e => `hl_caught_${e}`;
const Ae = new Map();
const Re = {
  cook: "一起在廚房做飯",
  eat: "一起吃飯",
  relax: "一起窩在客廳發呆放空",
  tv: "一起窩在沙發看電視",
  balcony: "一起在陽台吹風",
  work: "各自忙自己的事但待在同一個空間",
  wake: "剛睡醒，兩人都還賴在床上"
};
const Pe = Object.keys(Re);
const He = (e, t) => `hl_pair_lines_${[String(e == null ? undefined : e.id), String(t == null ? undefined : t.id)].sort().join("-")}`;
const Fe = new Map();
const ze = {
  bed: "homelandTalkBed",
  sofa: "homelandTalkSofa",
  table: "homelandTalkTable",
  plant: "homelandTalkPlant",
  tv: "homelandTalkTv",
  lamp: "homelandTalkLamp",
  bath: "homelandTalkBath",
  door: "homelandTalkDoor",
  bookshelf: "homelandTalkBookshelf",
  window: "homelandTalkWindow",
  wardrobe: "homelandTalkWardrobe",
  desk: "homelandTalkDesk",
  refrigerator: "homelandTalkRefrigerator",
  stove: "homelandTalkStove",
  toilet: "homelandTalkToilet",
  washbasin: "homelandTalkWashBasin",
  showershelf: "homelandTalkShowerShelf",
  coffeemachine: "homelandTalkCoffeeMachine",
  washingmachine: "homelandTalkWashingMachine",
  flowerstand: "homelandTalkFlowerStand",
  deckchair: "homelandTalkDeckChair",
  painting: "homelandTalkPainting",
  frenchwindow: "homelandTalkFrenchWindow",
  photoframe: "homelandTalkPhotoFrame"
};
const Oe = {
  living: "客廳",
  bedroom: "臥室",
  kitchen: "廚房",
  bathroom: "浴室",
  balcony: "陽台"
};
const Ee = ["wood", "tile", "parquet", "carpet", "marble", "darkwood"];
const Ke = ve.filter(e => e.type !== "showcase");
const Qe = Object.fromEntries(Ke.map(e => [e.type, e.icon]));
const Ve = {
  bed: "床",
  sofa: "沙發",
  table: "餐桌",
  plant: "盆栽",
  tv: "電視",
  lamp: "檯燈",
  bath: "浴缸",
  door: "房門",
  bookshelf: "書架",
  window: "窗戶",
  wardrobe: "衣櫃",
  desk: "書桌",
  refrigerator: "冰箱",
  stove: "灶台",
  toilet: "馬桶",
  washbasin: "洗手台",
  showershelf: "浴室置物架",
  coffeemachine: "咖啡機",
  washingmachine: "洗衣機",
  flowerstand: "花架",
  deckchair: "躺椅",
  painting: "掛畫",
  frenchwindow: "落地窗",
  photoframe: "相框",
  rug: "地毯"
};
const Ge = (e, t, s, r) => {
  const i = Number(e);
  if (Number.isFinite(i)) {
    return Math.min(s, Math.max(t, i));
  } else {
    return r;
  }
};
const Je = {
  warm: "sepia(0.35) saturate(1.25) hue-rotate(-12deg)",
  cool: "saturate(1.1) hue-rotate(165deg) brightness(1.02)",
  fresh: "saturate(1.15) hue-rotate(75deg)",
  rose: "saturate(1.2) hue-rotate(-25deg) brightness(1.03)",
  purple: "saturate(1.15) hue-rotate(35deg)",
  mono: "saturate(0.45) brightness(1.02)",
  dark: "saturate(0.85) brightness(0.82) contrast(1.08)",
  none: ""
};
const Ye = e => {
  const t = String(e || "none").toLowerCase().trim();
  if (Object.prototype.hasOwnProperty.call(Je, t)) {
    return Je[t];
  } else {
    return "";
  }
};
let qe = 0;
const Xe = () => `aihome_${Date.now().toString(36)}_${(qe++).toString(36)}`;
const et = e => {
  const t = (e, t) => t ? `  ${e}：${String(t).slice(0, 400)}` : "";
  const s = [t("職業", e.occupation), t("性格", e.personality), t("愛好", e.hobby), t("背景", e.background), t("簽名", e.signature), t("簡介", e.intro), e.persona ? `  人設：${String(e.persona).slice(0, 700)}` : ""].filter(Boolean);
  return `【${e.name}】\n${s.length ? s.join("\n") : "  （無詳細人設）"}`;
};
const tt = ["bedroom", "living", "kitchen", "bathroom", "balcony"];
const st = async (e, t, s) => {
  if (e == null || !Array.isArray(t) || t.length === 0) {
    return {
      ok: false,
      designNote: ""
    };
  }
  const r = await o().catch(() => null);
  if (!r) {
    return {
      ok: false,
      designNote: ""
    };
  }
  if (s != null) {
    s("plan", "設計方案", 0, 6);
  }
  let l = null;
  try {
    l = await (async (e, t) => {
      const s = e.map(e => e.name).join(" 和 ");
      const r = e.length > 1;
      const i = e.map(et).join("\n\n");
      const l = Object.keys(Ve).map(e => `${e}(${Ve[e]})`).join(", ");
      const o = [`你是室內設計師，要為角色「${s}」打造最貼合其人設的家。`, r ? "這是兩人共居的空間，需融合兩人審美、生活方式與經濟條件。" : "", "", "=== 角色人設（分維度） ===", i, "", "=== 設計推理步驟（先推理，再產出 JSON） ===", "1. 這個角色【經濟條件】如何？住得起多大的房子？——這決定 level（房間數量），不是人人都是有錢人。", "   level=1 只有臥室（拮据/學生/租客的單間）；2 加客廳；3 加廚房；4 加浴室；5 才有陽台（寬裕/富裕/講究生活品質者）。", "   依角色職業收入與性格務實/講究程度誠實判定，多數普通角色落在 2~4，不要一律給 5。", "2. 這個角色【怎麼生活】？極簡還是愛堆東西？宅家還是常外出？由此決定每間房家具多寡——不要機械填滿。", "3. 由職業/性格/愛好決定【整體色調】與每件家具的色調傾向(tint)、款式(variant)。", "", "=== 輸出 JSON（只輸出 JSON，不要解釋） ===", `只需為【已解鎖】的房間(依 level 取 ${tt.join("→")} 前 level 間)輸出 rooms 與 walls，其餘省略。`, "{", "  \"level\": 3,", "  \"levelNote\": \"為何是這個居住等級（一句，點出經濟/生活線索）\",", "  \"palette\": [\"#色1\",\"#色2\",\"#色3\",\"#色4\",\"#色5\"],", "  \"paletteNote\": \"配色如何體現人設（一句）\",", "  \"lifestyle\": \"生活方式判斷（一句）\",", "  \"designNote\": \"整體設計理念（一句，點到角色具體特質）\",", "  \"rooms\": {", "    \"bedroom\":  { \"floorStyle\":\"carpet\", \"note\":\"這間為何這樣設計（一句）\", \"furniture\":[{\"type\":\"bed\",\"x\":0.45,\"y\":0.55,\"scale\":1.3,\"variant\":0,\"tint\":\"rose\"}] },", "    \"living\":   { \"floorStyle\":\"wood\",   \"note\":\"...\", \"furniture\":[{\"type\":\"sofa\",\"x\":0.5,\"y\":0.6,\"scale\":1.1,\"variant\":0,\"tint\":\"warm\"},{\"type\":\"tv\",\"x\":0.2,\"y\":0.45,\"scale\":1.0,\"variant\":1,\"tint\":\"mono\"}] }", "  },", "  \"walls\": {", "    \"bedroom\": \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 400 200\\\">...</svg>\",", "    \"living\":  \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 400 200\\\">...</svg>\"", "  }", "}", "", "規則：", "- level：整數 1~5，依經濟條件誠實判定。rooms / walls 的鍵必須與 level 解鎖的房間一致。", `- floorStyle 從：${Ee.join(", ")} 選。`, `- furniture 每間 1~5 件（依生活方式取捨），type 從：${l} 選；x/y 0.1~0.9 / 0.4~0.82；scale 0.8~1.4。`, "- variant：0 或 1（0 偏精緻/可愛/暖，1 偏簡約/幾何/冷）。", "- tint：每件家具一個色調標籤，從：warm(暖木復古), cool(冷藍科技), fresh(清新綠), rose(粉嫩浪漫), purple(神秘紫), mono(極簡黑白灰), dark(暗黑沉穩), none(保留原色) 選。", "- walls：每間一張牆紙 SVG（貼牆平面花紋，非房間全景）：viewBox=\"0 0 400 200\"，無背景矩形(透明底)，只用上方 palette 配色，平面 2D 裝飾紋樣(幾何/星點/花草藤蔓/線條/水墨/波點 擇一貼合角色氣質)，不畫家具人物房間輪廓，呼應各房間 note。", "- palette 與 tint 必須強烈體現角色人設。"].filter(Boolean).join("\n");
      const c = await a([{
        role: "user",
        content: o
      }], t);
      const h = typeof c == "string" ? c : (c == null ? undefined : c.content) || "";
      const n = (e => {
        if (typeof e != "string") {
          return null;
        }
        const t = e.replace(/```(?:json)?/gi, "");
        const s = t.indexOf("{");
        const r = t.lastIndexOf("}");
        if (s < 0 || r <= s) {
          return null;
        }
        try {
          return JSON.parse(t.slice(s, r + 1));
        } catch (i) {
          return null;
        }
      })(h);
      if (!(n == null ? undefined : n.rooms)) {
        console.error("[homelandAiHome] Plan 解析失敗：", h.slice(0, 300));
        return n;
      }
      n.wallSvgs = {};
      const d = n.walls || {};
      for (const a of tt) {
        const e = typeof d[a] == "string" ? d[a].trim() : "";
        if (e.startsWith("<svg")) {
          n.wallSvgs[a] = e;
        }
      }
      return n;
    })(t, r);
  } catch (g) {
    console.error("[homelandAiHome] buildHomePlan 失敗：", g);
    return {
      ok: false,
      designNote: ""
    };
  }
  if (!(l == null ? undefined : l.rooms)) {
    return {
      ok: false,
      designNote: ""
    };
  }
  const c = l.wallSvgs || {};
  const h = Ge(l.level, 1, 5, 3);
  const n = (e => tt.slice(0, Ge(e, 1, 5, 1)))(h);
  const d = await i.get(e).catch(() => null);
  if (!d) {
    return {
      ok: false,
      designNote: ""
    };
  }
  const x = (d.stickers || []).filter(e => e.kind === "occupant");
  const f = [];
  for (const i of n) {
    const e = l.rooms[i];
    if (!(e == null ? undefined : e.furniture)) {
      continue;
    }
    let t = 0;
    for (const s of e.furniture) {
      if (!s || t >= 5) {
        break;
      }
      const e = String(s.type || "").toLowerCase().trim();
      const r = Qe[e];
      if (r) {
        f.push({
          id: Xe(),
          roomId: i,
          kind: "furniture",
          refType: "icon",
          refId: r,
          icon: r,
          x: Ge(s.x, 0.1, 0.9, 0.5),
          y: Ge(s.y, 0.4, 0.82, 0.6),
          scale: Math.round(Ge(s.scale, 0.7, 1.5, 1) * 10) / 10,
          variant: s.variant === 1 ? 1 : 0,
          tint: Ye(s.tint)
        });
        t++;
      }
    }
  }
  await i.save(e, {
    stickers: [...x, ...f],
    level: h,
    aiDecorated: true
  });
  const k = n.length;
  let y = 0;
  await Promise.all(n.map(async t => {
    const r = l.rooms[t];
    const o = Ee.includes(r == null ? undefined : r.floorStyle) ? r.floorStyle : "wood";
    await i.setRoomStyle(e, t, "floor", o).catch(() => {});
    const a = c[t];
    if (a) {
      const s = (e => e && e.trim().startsWith("<svg") ? `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e.trim())}` : null)(a);
      if (s) {
        await i.setRoomLayer(e, t, "wall", s).catch(() => {});
      }
    }
    try {
      const s = await i.get(e).catch(() => null);
      const r = ((s == null ? undefined : s.rooms) || []).find(e => String(e.id) === String(t));
      if ((r == null ? undefined : r.bgRef) != null) {
        await i.setRoomBg(e, t, null);
      }
    } catch (h) {}
    y++;
    if (s != null) {
      s(t, Oe[t] || t, y, k);
    }
  }));
  const j = n.map(e => {
    var t;
    var s;
    const r = (s = (t = l.rooms) == null ? undefined : t[e]) == null ? undefined : s.note;
    if (r) {
      return `${Oe[e]}：${r}`;
    } else {
      return "";
    }
  }).filter(Boolean);
  if (l.levelNote) {
    j.unshift(`🏠 居住等級 ${h}/5：${l.levelNote}`);
  }
  return {
    ok: true,
    designNote: [l.designNote, l.lifestyle ? `（${l.lifestyle}）` : ""].filter(Boolean).join(" ") || "",
    roomNotes: j,
    level: h
  };
};
const rt = {
  key: "hl_first_watch",
  title: "初次窺探",
  desc: "第一次偷偷觀察 TA 在家的樣子",
  color: "bronze"
};
const it = {
  key: "hl_scenes_3",
  title: "生活旁觀者",
  desc: "看過 TA 在家的 3 種不同場景",
  color: "bronze"
};
const lt = {
  key: "hl_scenes_6",
  title: "日常守望者",
  desc: "看過 TA 在家的 6 種不同場景",
  color: "silver"
};
const ot = {
  key: "hl_scenes_all",
  title: "無所不知",
  desc: "看遍 TA 在家的所有生活場景",
  color: "gold"
};
const at = {
  key: "hl_night_watch",
  title: "深夜守候",
  desc: "在 TA 熟睡時靜靜看著",
  color: "silver"
};
const ct = {
  key: "hl_caught_moment",
  title: "撞見的瞬間",
  desc: "撞見了 TA 不為人知的一刻",
  color: "gold"
};
const ht = {
  key: "hl_cohabit",
  title: "同一屋簷下",
  desc: "邀請 TA 與你同居",
  color: "gold"
};
const nt = {
  key: "hl_cp_paired",
  title: "紅線牽成",
  desc: "為 TA 牽起一段同居關係",
  color: "silver"
};
const dt = {
  key: "hl_b_first_deco",
  title: "初次佈置",
  desc: "第一次在家園裡擺放家具",
  color: "bronze"
};
const xt = {
  key: "hl_b_chores_10",
  title: "勤勞主人",
  desc: "累積做家務 10 次",
  color: "silver"
};
const ft = {
  key: "hl_b_max_level",
  title: "夢想之家",
  desc: "把家園升到滿級 Lv.5",
  color: "gold"
};
const kt = {
  key: "hl_b_furn_all",
  title: "應有盡有",
  desc: "在同一個家放滿 20 件以上家具",
  color: "diamond"
};
const yt = {
  key: "hl_b_ai_home",
  title: "量身打造",
  desc: "用 AI 依人設生成一次角色住所",
  color: "silver"
};
const jt = "hl_seen_scenes";
const gt = async (e, t, s) => {
  if (!e || !t || !(s == null ? undefined : s.title)) {
    return false;
  }
  if (String(t).startsWith("group_")) {
    return false;
  }
  try {
    const r = (await l.get(e, t)) || {
      userId: e,
      characterId: String(t)
    };
    const i = Array.isArray(r.storyAchievements) ? r.storyAchievements : [];
    return !i.some(e => e.title === s.title || s.key && e.id === s.key) && (r.storyAchievements = [...i, {
      id: s.key,
      title: s.title,
      desc: s.desc,
      color: s.color,
      source: "homeland"
    }], await l.put(e, String(t), r), g({
      title: s.title,
      desc: s.desc,
      color: s.color
    }), true);
  } catch (r) {
    return false;
  }
};
const ut = "homelandBuildAchievements";
const pt = async e => {
  if (!(e == null ? undefined : e.key) || !(e == null ? undefined : e.title)) {
    return false;
  }
  try {
    const t = await (async () => {
      try {
        const e = await h.get(ut);
        if (Array.isArray(e)) {
          return e;
        } else {
          return [];
        }
      } catch (e) {
        return [];
      }
    })();
    return !t.includes(e.key) && (await h.set(ut, [...t, e.key]), g({
      title: e.title,
      desc: e.desc,
      color: e.color
    }), true);
  } catch (t) {
    return false;
  }
};
const mt = ({
  rooms: s,
  occupantRoom: r,
  currentRoomId: i,
  t: l,
  profileUsers: o,
  characters: a,
  currentUserId: c,
  onPickRoom: h,
  level: n
}) => {
  const [d, x] = e.useState(false);
  const f = e.useMemo(() => {
    const e = {};
    const t = r || {};
    const s = (o || []).find(e => String(e.uid || e.id) === String(c));
    const i = t.__user__ || "bedroom";
    (e[i] = e[i] || []).push({
      key: "me",
      avatar: (s == null ? undefined : s.avatar) || null,
      name: (s == null ? undefined : s.name) || l("homelandMe")
    });
    for (const [r, l] of Object.entries(t)) {
      if (r === "__user__") {
        continue;
      }
      const t = (a || []).find(e => String(e.id) === String(r));
      if (t) {
        (e[l] = e[l] || []).push({
          key: r,
          avatar: t.image || t.avatar || null,
          name: t.name || ""
        });
      }
    }
    return e;
  }, [r, o, a, c, l]);
  const k = e => (s || []).map(s => {
    const r = f[s.id] || [];
    const o = String(s.id) === String(i);
    const a = n != null && me[s.id] && n < me[s.id];
    return t.jsx("button", {
      className: `hl-map-room ${o ? "active" : ""} ${a ? "locked" : ""}`,
      style: {
        left: (s.mapX ?? 0) * 100 + "%",
        top: (s.mapY ?? 0) * 100 + "%",
        width: (s.mapW ?? 0.4) * 100 + "%",
        height: (s.mapH ?? 0.4) * 100 + "%"
      },
      onClick: t => {
        t.stopPropagation();
        if (a) {
          alert(l("homelandRoomLockedTip", {
            level: me[s.id],
            name: l(s.nameKey)
          }));
        } else {
          if (h != null) {
            h(s.id);
          }
          if (e) {
            x(true);
          }
        }
      },
      children: e ? !a && r.length > 0 && t.jsx("span", {
        className: "hl-map-pin"
      }) : t.jsxs(t.Fragment, {
        children: [t.jsx("span", {
          className: "hl-map-room-name",
          children: l(s.nameKey)
        }), a ? t.jsxs("div", {
          className: "hl-map-room-lock",
          children: [t.jsx(w, {
            size: 12,
            className: "hl-map-lock-icon"
          }), t.jsxs("span", {
            className: "hl-map-lock-lvl",
            children: ["Lv.", me[s.id]]
          })]
        }) : t.jsx("span", {
          className: "hl-map-room-occ",
          children: r.slice(0, 4).map(e => e.avatar ? t.jsx("img", {
            src: e.avatar,
            alt: e.name,
            className: "hl-map-dot"
          }, e.key) : t.jsx("span", {
            className: "hl-map-dot hl-map-dot-text",
            children: (e.name || "?").slice(0, 1)
          }, e.key))
        })]
      })
    }, s.id);
  });
  return t.jsxs(t.Fragment, {
    children: [t.jsxs("div", {
      className: "hl-minimap",
      onClick: () => x(true),
      role: "button",
      tabIndex: 0,
      title: l("homelandMapTitle"),
      children: [t.jsx("div", {
        className: "hl-minimap-canvas",
        children: k(true)
      }), t.jsx("span", {
        className: "hl-minimap-zoom",
        children: t.jsx(p, {
          size: 11
        })
      })]
    }), d && t.jsx("div", {
      className: "hl-map-overlay",
      onClick: () => x(false),
      children: t.jsxs("div", {
        className: "hl-map-expanded glass",
        onClick: e => e.stopPropagation(),
        children: [t.jsxs("div", {
          className: "hl-map-head",
          children: [t.jsx("span", {
            className: "hl-map-title",
            children: l("homelandMapTitle")
          }), t.jsx("button", {
            className: "hl-map-close",
            onClick: () => x(false),
            children: t.jsx(m, {
              size: 18
            })
          })]
        }), t.jsx("div", {
          className: "hl-map-canvas",
          children: k(false)
        })]
      })
    })]
  });
};
const wt = "#5b5066";
const vt = "#5b5066";
const Wt = "#5b5066";
const bt = () => t.jsxs("svg", {
  viewBox: "0 0 110 85",
  className: "hl-art",
  children: [t.jsx("ellipse", {
    cx: "55",
    cy: "76",
    rx: "42",
    ry: "6",
    fill: "rgba(110,85,89,0.15)"
  }), t.jsx("path", {
    d: "M36 44 L44 72 M74 44 L66 72",
    stroke: Wt,
    strokeWidth: "4.5",
    strokeLinecap: "round"
  }), t.jsx("path", {
    d: "M42 44 L34 72 M68 44 L76 72",
    stroke: "#b0825c",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), t.jsx("line", {
    x1: "38",
    y1: "58",
    x2: "72",
    y2: "58",
    stroke: Wt,
    strokeWidth: "2.5"
  }), t.jsx("ellipse", {
    cx: "55",
    cy: "44",
    rx: "44",
    ry: "16",
    fill: "#caa06a",
    stroke: Wt,
    strokeWidth: "2.5"
  }), t.jsx("ellipse", {
    cx: "55",
    cy: "40",
    rx: "44",
    ry: "16",
    fill: "#fbe7c2",
    stroke: Wt,
    strokeWidth: "2.5"
  }), t.jsx("path", {
    d: "M30 36 C 45 42, 65 42, 80 36 C 85 45, 80 50, 75 50 C 65 46, 45 46, 35 50 C 30 50, 25 45, 30 36 Z",
    fill: "#fad2cc",
    stroke: Wt,
    strokeWidth: "2"
  }), t.jsx("path", {
    d: "M38 38 L38 47 M46 39 L46 47 M54 40 L54 48 M62 40 L62 48 M68 39 L68 47 M74 38 L74 46",
    stroke: "#fca89f",
    strokeWidth: "1.2",
    opacity: "0.6"
  }), t.jsx("path", {
    d: "M52 26 C48 26 47 30 47 34 C47 38 52 40 56 40 C60 40 61 38 61 34 C61 30 57 26 52 26 Z",
    fill: "#ffffff",
    stroke: Wt,
    strokeWidth: "1.8"
  }), t.jsx("path", {
    d: "M47 30 C43 30 43 36 47 36",
    fill: "none",
    stroke: Wt,
    strokeWidth: "1.6"
  }), t.jsx("path", {
    d: "M57 32 Q61 31 63 28",
    fill: "none",
    stroke: Wt,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }), t.jsx("circle", {
    cx: "52",
    cy: "26",
    r: "1.8",
    fill: "#ffd98a",
    stroke: Wt,
    strokeWidth: "1"
  }), t.jsx("rect", {
    x: "36",
    y: "32",
    width: "7",
    height: "6",
    rx: "2",
    fill: "#ffffff",
    stroke: Wt,
    strokeWidth: "1.4"
  }), t.jsx("path", {
    d: "M36 34 H34 C33 34 33 36 36 36",
    fill: "none",
    stroke: Wt,
    strokeWidth: "1"
  }), t.jsx("ellipse", {
    cx: "39",
    cy: "38",
    rx: "6",
    ry: "1.5",
    fill: "#fca89f"
  }), t.jsx("rect", {
    x: "68",
    y: "31",
    width: "10",
    height: "7",
    rx: "1.5",
    fill: "#fff3cd",
    stroke: Wt,
    strokeWidth: "1.5"
  }), t.jsx("rect", {
    x: "68",
    y: "34",
    width: "10",
    height: "2",
    fill: "#fad2cc"
  }), t.jsx("circle", {
    cx: "73",
    cy: "29",
    r: "2.2",
    fill: "#e5837a"
  })]
});
const St = "#5b5066";
const Nt = "#5b5066";
const Ct = "#5b5066";
const Mt = "#5b5066";
const Lt = "#5b5066";
const Bt = "#5b5066";
const It = () => t.jsxs("svg", {
  viewBox: "0 0 120 70",
  className: "hl-art",
  children: [t.jsx("ellipse", {
    cx: "60",
    cy: "37",
    rx: "58",
    ry: "30",
    fill: "#fca89f",
    stroke: Bt,
    strokeWidth: "2.5"
  }), t.jsx("ellipse", {
    cx: "60",
    cy: "35",
    rx: "54",
    ry: "26",
    fill: "#fad2cc",
    stroke: Bt,
    strokeWidth: "2.5"
  }), t.jsx("ellipse", {
    cx: "60",
    cy: "35",
    rx: "42",
    ry: "18",
    fill: "#ffffff",
    opacity: "0.6",
    stroke: "none"
  }), t.jsx("ellipse", {
    cx: "60",
    cy: "37",
    rx: "8",
    ry: "6",
    fill: "#fca89f"
  }), t.jsx("circle", {
    cx: "53",
    cy: "29",
    r: "2.5",
    fill: "#fca89f"
  }), t.jsx("circle", {
    cx: "60",
    cy: "27",
    r: "2.8",
    fill: "#fca89f"
  }), t.jsx("circle", {
    cx: "67",
    cy: "29",
    r: "2.5",
    fill: "#fca89f"
  }), t.jsx("ellipse", {
    cx: "60",
    cy: "35",
    rx: "48",
    ry: "22",
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "2",
    strokeDasharray: "6,4",
    opacity: "0.8"
  })]
});
const Zt = () => t.jsxs("svg", {
  viewBox: "0 0 120 70",
  className: "hl-art",
  children: [t.jsx("rect", {
    x: "8",
    y: "10",
    width: "104",
    height: "52",
    rx: "1",
    fill: "rgba(110,85,89,0.15)"
  }), t.jsx("rect", {
    x: "6",
    y: "8",
    width: "108",
    height: "52",
    rx: "1",
    fill: "#f0f2f5",
    stroke: Bt,
    strokeWidth: "2.5"
  }), t.jsx("polygon", {
    points: "6,8 55,8 6,58",
    fill: "#ccd2d9"
  }), t.jsx("polygon", {
    points: "114,8 114,46 70,8",
    fill: "#586069"
  }), t.jsx("polygon", {
    points: "114,60 58,60 114,32",
    fill: "#dfbe9f"
  }), t.jsx("line", {
    x1: "55",
    y1: "8",
    x2: "6",
    y2: "58",
    stroke: Bt,
    strokeWidth: "1.8"
  }), t.jsx("line", {
    x1: "70",
    y1: "8",
    x2: "114",
    y2: "46",
    stroke: Bt,
    strokeWidth: "1.8"
  }), t.jsx("line", {
    x1: "58",
    y1: "60",
    x2: "114",
    y2: "32",
    stroke: Bt,
    strokeWidth: "1.8"
  }), t.jsx("path", {
    d: "M 6,12 H 3 M 6,20 H 3 M 6,28 H 3 M 6,36 H 3 M 6,44 H 3 M 6,52 H 3",
    stroke: Bt,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), t.jsx("path", {
    d: "M 114,12 H 117 M 114,20 H 117 M 114,28 H 117 M 114,36 H 117 M 114,44 H 117 M 114,52 H 117",
    stroke: Bt,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })]
});
const $t = "#5b5066";
const Dt = "#5b5066";
const Ut = "#5b5066";
const _t = "#5b5066";
const Tt = "#5b5066";
const At = "#5b5066";
const Rt = "#5b5066";
const Pt = "#5b5066";
const Ht = "#5b5066";
const Ft = "#5b5066";
const zt = "#5b5066";
const Ot = "#5b5066";
const Et = "#5b5066";
const Kt = "#5b5066";
const Qt = "#5b5066";
const Vt = "#5b5066";
const Gt = "#5b5066";
const Jt = {
  Rug: {
    0: {
      Down: It,
      Up: It,
      Side: It
    },
    1: {
      Down: Zt,
      Up: Zt,
      Side: Zt
    }
  },
  Armchair: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "46",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "66",
          width: "8",
          height: "10",
          rx: "3",
          fill: "#c08c65",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "84",
          y: "66",
          width: "8",
          height: "10",
          rx: "3",
          fill: "#c08c65",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "10",
          y: "52",
          width: "90",
          height: "16",
          rx: "6",
          fill: "#fad2cc",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "12",
          y: "38",
          width: "42",
          height: "18",
          rx: "7",
          fill: "#fca89f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "56",
          y: "38",
          width: "42",
          height: "18",
          rx: "7",
          fill: "#fca89f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "18",
          y: "41",
          width: "30",
          height: "4",
          rx: "2",
          fill: "#ffc6be",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "62",
          y: "41",
          width: "30",
          height: "4",
          rx: "2",
          fill: "#ffc6be",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "15",
          y: "16",
          width: "80",
          height: "26",
          rx: "9",
          fill: "#fca89f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M55 16 V40",
          stroke: wt,
          strokeWidth: "2",
          opacity: "0.3",
          strokeDasharray: "3,3"
        }), t.jsx("rect", {
          x: "6",
          y: "26",
          width: "16",
          height: "34",
          rx: "7",
          fill: "#e5837a",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "88",
          y: "26",
          width: "16",
          height: "34",
          rx: "7",
          fill: "#e5837a",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M72 32 C66 32 62 36 62 42 C62 48 72 54 72 54 C72 54 82 48 82 42 C82 36 78 32 72 32 Z",
          fill: "#fff5f5",
          stroke: wt,
          strokeWidth: "2"
        }), t.jsx("circle", {
          cx: "72",
          cy: "42",
          r: "3.5",
          fill: "#fca89f"
        }), t.jsx("circle", {
          cx: "67",
          cy: "38",
          r: "2",
          fill: "#fca89f"
        }), t.jsx("circle", {
          cx: "72",
          cy: "36",
          r: "2.2",
          fill: "#fca89f"
        }), t.jsx("circle", {
          cx: "77",
          cy: "38",
          r: "2",
          fill: "#fca89f"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "46",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "66",
          width: "8",
          height: "10",
          rx: "3",
          fill: "#c08c65",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "84",
          y: "66",
          width: "8",
          height: "10",
          rx: "3",
          fill: "#c08c65",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "10",
          y: "52",
          width: "90",
          height: "16",
          rx: "6",
          fill: "#fad2cc",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "15",
          y: "16",
          width: "80",
          height: "42",
          rx: "9",
          fill: "#fca89f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "6",
          y: "26",
          width: "16",
          height: "34",
          rx: "7",
          fill: "#e5837a",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "88",
          y: "26",
          width: "16",
          height: "34",
          rx: "7",
          fill: "#e5837a",
          stroke: wt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "26",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "66",
          width: "8",
          height: "10",
          rx: "3",
          fill: "#c08c65",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "44",
          y: "66",
          width: "8",
          height: "10",
          rx: "3",
          fill: "#c08c65",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "18",
          y: "16",
          width: "22",
          height: "40",
          rx: "8",
          fill: "#fca89f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "46",
          width: "34",
          height: "22",
          rx: "10",
          fill: "#fad2cc",
          stroke: wt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "26",
          y: "26",
          width: "32",
          height: "34",
          rx: "9",
          fill: "#e5837a",
          stroke: wt,
          strokeWidth: "2.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "48",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("polygon", {
          points: "20,64 25,64 20,75 16,75",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("polygon", {
          points: "90,64 85,64 90,75 94,75",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("rect", {
          x: "10",
          y: "58",
          width: "90",
          height: "7",
          rx: "1.5",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "12",
          y: "44",
          width: "86",
          height: "15",
          rx: "3",
          fill: "#ccd2d9",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "55",
          y1: "44",
          x2: "55",
          y2: "58",
          stroke: wt,
          strokeWidth: "2",
          opacity: "0.3"
        }), t.jsx("rect", {
          x: "14",
          y: "22",
          width: "82",
          height: "23",
          rx: "3",
          fill: "#aab5c0",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "55",
          y1: "22",
          x2: "55",
          y2: "44",
          stroke: wt,
          strokeWidth: "2",
          opacity: "0.3"
        }), t.jsx("rect", {
          x: "5",
          y: "32",
          width: "10",
          height: "27",
          rx: "2",
          fill: "#aab5c0",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "95",
          y: "32",
          width: "10",
          height: "27",
          rx: "2",
          fill: "#aab5c0",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "68",
          y: "36",
          width: "20",
          height: "14",
          rx: "2.5",
          fill: "#5c8075",
          stroke: wt,
          strokeWidth: "2",
          transform: "rotate(-10, 78, 43)"
        }), t.jsx("line", {
          x1: "78",
          y1: "36",
          x2: "78",
          y2: "50",
          stroke: wt,
          strokeWidth: "1.5",
          opacity: "0.3"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "48",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("polygon", {
          points: "20,64 25,64 20,75 16,75",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("polygon", {
          points: "90,64 85,64 90,75 94,75",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("rect", {
          x: "10",
          y: "22",
          width: "90",
          height: "43",
          rx: "2.5",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "30",
          y1: "26",
          x2: "30",
          y2: "60",
          stroke: wt,
          strokeWidth: "1.5",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "55",
          y1: "26",
          x2: "55",
          y2: "60",
          stroke: wt,
          strokeWidth: "1.5",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "80",
          y1: "26",
          x2: "80",
          y2: "60",
          stroke: wt,
          strokeWidth: "1.5",
          opacity: "0.15"
        }), t.jsx("rect", {
          x: "14",
          y: "18",
          width: "82",
          height: "5",
          rx: "1.5",
          fill: "#aab5c0",
          stroke: wt,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "26",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("polygon", {
          points: "18,64 23,64 16,75 12,75",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2",
          strokeLinejoin: "round"
        }), t.jsx("polygon", {
          points: "52,64 47,64 54,75 58,75",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2",
          strokeLinejoin: "round"
        }), t.jsx("rect", {
          x: "10",
          y: "24",
          width: "7",
          height: "41",
          rx: "1.5",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "10",
          y: "58",
          width: "48",
          height: "7",
          rx: "1.5",
          fill: "#dfbe9f",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "17",
          y: "28",
          width: "13",
          height: "31",
          rx: "2",
          fill: "#aab5c0",
          stroke: wt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "24",
          y: "41",
          width: "34",
          height: "18",
          rx: "2",
          fill: "#ccd2d9",
          stroke: wt,
          strokeWidth: "2.5"
        })]
      })
    }
  },
  BedDouble: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "48",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "12",
          y: "10",
          width: "86",
          height: "34",
          rx: "8",
          fill: "#ca9e74",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "18",
          y: "16",
          width: "74",
          height: "22",
          rx: "4",
          fill: "none",
          stroke: vt,
          strokeWidth: "1.8",
          opacity: "0.4"
        }), t.jsx("rect", {
          x: "10",
          y: "40",
          width: "90",
          height: "28",
          rx: "6",
          fill: "#ca9e74",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "16",
          y: "68",
          width: "8",
          height: "9",
          rx: "2",
          fill: "#a0754e",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "86",
          y: "68",
          width: "8",
          height: "9",
          rx: "2",
          fill: "#a0754e",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "14",
          y: "32",
          width: "82",
          height: "34",
          rx: "5",
          fill: "#eef6fb",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M14 44 C 30 46, 50 40, 96 44 L96 66 L14 66 Z",
          fill: "#add3ec",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M14 44 C 30 46, 50 40, 96 44 L96 48 C 50 44, 30 50, 14 48 Z",
          fill: "#80b8dc",
          stroke: vt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "20",
          y: "24",
          width: "30",
          height: "15",
          rx: "5",
          fill: "#ffffff",
          stroke: vt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M22 28 H48",
          stroke: "#fad2cc",
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "60",
          y: "24",
          width: "30",
          height: "15",
          rx: "5",
          fill: "#ffffff",
          stroke: vt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M62 28 H88",
          stroke: "#fad2cc",
          strokeWidth: "2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "48",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "16",
          y: "68",
          width: "8",
          height: "9",
          rx: "2",
          fill: "#a0754e",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "86",
          y: "68",
          width: "8",
          height: "9",
          rx: "2",
          fill: "#a0754e",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "12",
          y: "10",
          width: "86",
          height: "52",
          rx: "8",
          fill: "#ca9e74",
          stroke: vt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "46",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "16",
          y: "68",
          width: "8",
          height: "9",
          rx: "2",
          fill: "#a0754e",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "86",
          y: "68",
          width: "8",
          height: "9",
          rx: "2",
          fill: "#a0754e",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "16",
          y: "10",
          width: "10",
          height: "58",
          rx: "4",
          fill: "#ca9e74",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "26",
          y: "40",
          width: "72",
          height: "28",
          rx: "6",
          fill: "#add3ec",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M46 44 C 52 46, 58 40, 98 44 L98 58 L46 58 Z",
          fill: "#80b8dc",
          stroke: vt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "28",
          y: "24",
          width: "12",
          height: "12",
          rx: "3",
          fill: "#ffffff",
          stroke: vt,
          strokeWidth: "2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "48",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "68",
          width: "6",
          height: "9",
          fill: "#3a3a3a",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "86",
          y: "68",
          width: "6",
          height: "9",
          fill: "#3a3a3a",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "12",
          y: "14",
          width: "86",
          height: "28",
          fill: "#586069",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "12",
          y1: "28",
          x2: "98",
          y2: "28",
          stroke: vt,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("rect", {
          x: "10",
          y: "42",
          width: "90",
          height: "26",
          fill: "#88929c",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "14",
          y: "34",
          width: "82",
          height: "31",
          fill: "#f0f2f5",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("polygon", {
          points: "14,48 48,43 96,48 96,65 14,65",
          fill: "#788880",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("polygon", {
          points: "14,48 48,43 62,51 14,53",
          fill: "#607068",
          stroke: vt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "22",
          y: "24",
          width: "28",
          height: "14",
          rx: "1.5",
          fill: "#e2e6ea",
          stroke: vt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "60",
          y: "24",
          width: "28",
          height: "14",
          rx: "1.5",
          fill: "#ffffff",
          stroke: vt,
          strokeWidth: "2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "48",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "68",
          width: "6",
          height: "9",
          fill: "#3a3a3a",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "86",
          y: "68",
          width: "6",
          height: "9",
          fill: "#3a3a3a",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "12",
          y: "16",
          width: "86",
          height: "52",
          fill: "#586069",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "12",
          y1: "42",
          x2: "98",
          y2: "42",
          stroke: vt,
          strokeWidth: "2",
          opacity: "0.25"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "46",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "68",
          width: "6",
          height: "9",
          fill: "#3a3a3a",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "86",
          y: "68",
          width: "6",
          height: "9",
          fill: "#3a3a3a",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "16",
          y: "16",
          width: "8",
          height: "52",
          fill: "#586069",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "24",
          y: "38",
          width: "74",
          height: "28",
          fill: "#88929c",
          stroke: vt,
          strokeWidth: "2.5"
        }), t.jsx("polygon", {
          points: "46,40 98,44 98,58 46,58",
          fill: "#788880",
          stroke: vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "28",
          y: "24",
          width: "12",
          height: "12",
          rx: "1.5",
          fill: "#e2e6ea",
          stroke: vt,
          strokeWidth: "2"
        })]
      })
    }
  },
  Utensils: {
    0: {
      Down: bt,
      Up: () => bt(),
      Side: () => bt()
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "40",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "32",
          y1: "46",
          x2: "48",
          y2: "72",
          stroke: Wt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "78",
          y1: "46",
          x2: "62",
          y2: "72",
          stroke: Wt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "48",
          y1: "52",
          x2: "50",
          y2: "72",
          stroke: Wt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "62",
          y1: "52",
          x2: "60",
          y2: "72",
          stroke: Wt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("ellipse", {
          cx: "40",
          cy: "52",
          rx: "25",
          ry: "9",
          fill: "#ccd2d9",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "40",
          cy: "49",
          rx: "25",
          ry: "9",
          fill: "#f0f2f5",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "68",
          cy: "42",
          rx: "19",
          ry: "7",
          fill: "#dfbe9f",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "68",
          cy: "39",
          rx: "19",
          ry: "7",
          fill: "#fff3cd",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M66 31 L68 24 H72 L74 31 Z",
          fill: "#5c8075",
          stroke: Wt,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M70 24 Q 73 16, 75 14",
          fill: "none",
          stroke: Wt,
          strokeWidth: "1",
          strokeLinecap: "round"
        }), t.jsx("rect", {
          x: "30",
          y: "41",
          width: "7",
          height: "6",
          rx: "1.5",
          fill: "#3a3a3a",
          stroke: Wt,
          strokeWidth: "1.2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "40",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "32",
          y1: "46",
          x2: "48",
          y2: "72",
          stroke: Wt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "78",
          y1: "46",
          x2: "62",
          y2: "72",
          stroke: Wt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("ellipse", {
          cx: "68",
          cy: "42",
          rx: "19",
          ry: "7",
          fill: "#dfbe9f",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "68",
          cy: "39",
          rx: "19",
          ry: "7",
          fill: "#fff3cd",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "40",
          cy: "52",
          rx: "25",
          ry: "9",
          fill: "#ccd2d9",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "40",
          cy: "49",
          rx: "25",
          ry: "9",
          fill: "#f0f2f5",
          stroke: Wt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "74",
          rx: "22",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "22",
          y1: "46",
          x2: "38",
          y2: "72",
          stroke: Wt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "48",
          y1: "46",
          x2: "32",
          y2: "72",
          stroke: Wt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("ellipse", {
          cx: "28",
          cy: "52",
          rx: "18",
          ry: "7",
          fill: "#ccd2d9",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "28",
          cy: "49",
          rx: "18",
          ry: "7",
          fill: "#f0f2f5",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "44",
          cy: "42",
          rx: "14",
          ry: "5",
          fill: "#dfbe9f",
          stroke: Wt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "44",
          cy: "39",
          rx: "14",
          ry: "5",
          fill: "#fff3cd",
          stroke: Wt,
          strokeWidth: "2.5"
        })]
      })
    }
  },
  Sprout: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "28",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M38 52 C38 48 44 48 55 48 C66 48 72 48 72 52 L68 72 C68 74 64 76 55 76 C46 76 42 74 42 72 Z",
          fill: "#ffffff",
          stroke: St,
          strokeWidth: "2.5"
        }), t.jsx("polygon", {
          points: "40,50 46,44 49,50",
          fill: "#ffffff",
          stroke: St,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("polygon", {
          points: "70,50 64,44 61,50",
          fill: "#ffffff",
          stroke: St,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("circle", {
          cx: "47",
          cy: "58",
          r: "1.5",
          fill: St
        }), t.jsx("circle", {
          cx: "63",
          cy: "58",
          r: "1.5",
          fill: St
        }), t.jsx("path", {
          d: "M53 62 Q55 64 57 62",
          fill: "none",
          stroke: St,
          strokeWidth: "1.5",
          strokeLinecap: "round"
        }), t.jsx("ellipse", {
          cx: "45",
          cy: "61",
          rx: "2",
          ry: "1",
          fill: "#fad2cc"
        }), t.jsx("ellipse", {
          cx: "65",
          cy: "61",
          rx: "2",
          ry: "1",
          fill: "#fad2cc"
        }), t.jsx("path", {
          d: "M55 48 C44 38 40 22 47 12 C54 22 55 36 55 48",
          fill: "#4d9b6c",
          stroke: St,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M55 48 C66 36 70 20 62 10 C55 22 55 36 55 48",
          fill: "#78be8c",
          stroke: St,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M55 48 C48 42 45 34 50 24 C55 32 55 40 55 48",
          fill: "#9fe2b2",
          stroke: St,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M49 26 Q46 18 47 14",
          fill: "none",
          stroke: "#fff",
          strokeWidth: "1.5",
          opacity: "0.6",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M60 25 Q63 17 62 12",
          fill: "none",
          stroke: "#fff",
          strokeWidth: "1.5",
          opacity: "0.6",
          strokeLinecap: "round"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "28",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M38 52 C38 48 44 48 55 48 C66 48 72 48 72 52 L68 72 C68 74 64 76 55 76 C46 76 42 74 42 72 Z",
          fill: "#ffffff",
          stroke: St,
          strokeWidth: "2.5"
        }), t.jsx("polygon", {
          points: "40,50 46,44 49,50",
          fill: "#ffffff",
          stroke: St,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("polygon", {
          points: "70,50 64,44 61,50",
          fill: "#ffffff",
          stroke: St,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("path", {
          d: "M55 48 C44 38 40 22 47 12 C54 22 55 36 55 48",
          fill: "#4d9b6c",
          stroke: St,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M55 48 C66 36 70 20 62 10 C55 22 55 36 55 48",
          fill: "#78be8c",
          stroke: St,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M55 48 C48 42 45 34 50 24 C55 32 55 40 55 48",
          fill: "#9fe2b2",
          stroke: St,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M25 52 C25 48 30 48 35 48 C40 48 45 48 45 52 L42 72 C42 74 39 76 35 76 C31 76 28 74 28 72 Z",
          fill: "#ffffff",
          stroke: St,
          strokeWidth: "2.5"
        }), t.jsx("polygon", {
          points: "26,50 31,44 33,50",
          fill: "#ffffff",
          stroke: St,
          strokeWidth: "2.2",
          strokeLinejoin: "round"
        }), t.jsx("path", {
          d: "M35 48 C28 36 28 20 32 10 C35 22 35 36 35 48",
          fill: "#4d9b6c",
          stroke: St,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M35 48 C42 36 42 20 38 10 C35 22 35 36 35 48",
          fill: "#78be8c",
          stroke: St,
          strokeWidth: "2.2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "22",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "45",
          y1: "52",
          x2: "42",
          y2: "75",
          stroke: St,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "65",
          y1: "52",
          x2: "68",
          y2: "75",
          stroke: St,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "55",
          y1: "52",
          x2: "55",
          y2: "75",
          stroke: St,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M43 42 L67 42 L63 56 L47 56 Z",
          fill: "#dfbe9f",
          stroke: St,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M47 42 L47 56 M51 42 L51 56 M55 42 L55 56 M59 42 L59 56 M63 42 L63 56",
          stroke: St,
          strokeWidth: "1.2",
          opacity: "0.3"
        }), t.jsx("path", {
          d: "M48 42 C 30 35, 20 20, 32 12 C 40 18, 45 28, 48 42 Z",
          fill: "#4d705c",
          stroke: St,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M62 42 C 80 35, 90 20, 78 12 C 70 18, 65 28, 62 42 Z",
          fill: "#58856a",
          stroke: St,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M55 42 C 48 30, 48 16, 55 10 C 62 16, 62 30, 55 42 Z",
          fill: "#70a384",
          stroke: St,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M26 22 L35 24 M84 22 L75 24 M30 16 L38 20",
          stroke: St,
          strokeWidth: "1.8",
          strokeLinecap: "round"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "22",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "45",
          y1: "52",
          x2: "42",
          y2: "75",
          stroke: St,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "65",
          y1: "52",
          x2: "68",
          y2: "75",
          stroke: St,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M43 42 L67 42 L63 56 L47 56 Z",
          fill: "#dfbe9f",
          stroke: St,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M48 42 C 30 35, 20 20, 32 12 Z",
          fill: "#4d705c",
          stroke: St,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M62 42 C 80 35, 90 20, 78 12 Z",
          fill: "#58856a",
          stroke: St,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "48",
          y1: "52",
          x2: "44",
          y2: "75",
          stroke: St,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "62",
          y1: "52",
          x2: "66",
          y2: "75",
          stroke: St,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M45 42 L65 42 L61 56 L49 56 Z",
          fill: "#dfbe9f",
          stroke: St,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M50 42 C 38 35, 30 20, 40 12 Z",
          fill: "#4d705c",
          stroke: St,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M60 42 C 72 35, 80 20, 70 12 Z",
          fill: "#58856a",
          stroke: St,
          strokeWidth: "2"
        })]
      })
    }
  },
  Tv: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "42",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "14",
          y: "52",
          width: "82",
          height: "20",
          rx: "4",
          fill: "#caa06a",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "20",
          y: "58",
          width: "22",
          height: "9",
          rx: "2",
          fill: "#fad2cc",
          stroke: Nt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "68",
          y: "58",
          width: "22",
          height: "9",
          rx: "2",
          fill: "#fad2cc",
          stroke: Nt,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "31",
          cy: "62.5",
          r: "1.5",
          fill: "#caa06a"
        }), t.jsx("circle", {
          cx: "79",
          cy: "62.5",
          r: "1.5",
          fill: "#caa06a"
        }), t.jsx("rect", {
          x: "44",
          y: "46",
          width: "22",
          height: "6",
          fill: "#4d4c5c",
          stroke: Nt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "36",
          y: "50",
          width: "38",
          height: "4",
          fill: "#3a394a",
          stroke: Nt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "18",
          y: "12",
          width: "74",
          height: "36",
          rx: "5",
          fill: "#3a394a",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "16",
          width: "66",
          height: "28",
          rx: "2",
          fill: "#a4dbe2",
          stroke: Nt,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M42 16 L32 44 H44 L54 16 Z M64 16 L54 44 H60 L70 16 Z",
          fill: "#ffffff",
          opacity: "0.38"
        }), t.jsx("circle", {
          cx: "70",
          cy: "24",
          r: "3",
          fill: "#ffd98a",
          opacity: "0.9"
        }), t.jsx("path", {
          d: "M26 38 C 30 32, 36 34, 40 38 Z",
          fill: "#7ebbc4",
          opacity: "0.5"
        }), t.jsx("path", {
          d: "M36 40 C 44 32, 54 36, 62 40 Z",
          fill: "#5c9da6",
          opacity: "0.5"
        }), t.jsx("rect", {
          x: "48",
          y: "56",
          width: "6",
          height: "6",
          rx: "1",
          fill: "#fff",
          stroke: Nt,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M51 56 Q53 52 54 53",
          stroke: "green",
          strokeWidth: "1.5",
          strokeLinecap: "round"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "42",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "14",
          y: "52",
          width: "82",
          height: "20",
          rx: "4",
          fill: "#caa06a",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "14",
          y1: "62",
          x2: "96",
          y2: "62",
          stroke: Nt,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("rect", {
          x: "44",
          y: "46",
          width: "22",
          height: "6",
          fill: "#4d4c5c",
          stroke: Nt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "18",
          y: "12",
          width: "74",
          height: "36",
          rx: "5",
          fill: "#3a394a",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "36",
          y: "20",
          width: "38",
          height: "20",
          rx: "4",
          fill: "#2d2c38",
          stroke: Nt,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "20",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "20",
          y: "52",
          width: "30",
          height: "20",
          rx: "4",
          fill: "#caa06a",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "32",
          y: "46",
          width: "6",
          height: "6",
          fill: "#4d4c5c",
          stroke: Nt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M22 12 H42 Q52 12 52 30 Q52 48 42 48 H22 Z",
          fill: "#3a394a",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "20",
          y: "16",
          width: "3",
          height: "28",
          fill: "#a4dbe2",
          stroke: Nt,
          strokeWidth: "1.8"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("rect", {
          x: "10",
          y: "55",
          width: "90",
          height: "13",
          rx: "1.5",
          fill: "#dfbe9f",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "12",
          y1: "61",
          x2: "98",
          y2: "61",
          stroke: Nt,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("circle", {
          cx: "28",
          cy: "61",
          r: "1",
          fill: Nt,
          opacity: "0.4"
        }), t.jsx("circle", {
          cx: "82",
          cy: "61",
          r: "1",
          fill: Nt,
          opacity: "0.4"
        }), t.jsx("rect", {
          x: "14",
          y: "12",
          width: "82",
          height: "35",
          rx: "2",
          fill: "#3a3f4d",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "15.5",
          y: "13.5",
          width: "79",
          height: "32",
          fill: "#2d3139"
        }), t.jsx("path", {
          d: "M48 13.5 L36 45.5 H44 L56 13.5 Z",
          fill: "#ffffff",
          opacity: "0.1"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("rect", {
          x: "10",
          y: "55",
          width: "90",
          height: "13",
          rx: "1.5",
          fill: "#dfbe9f",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "14",
          y: "12",
          width: "82",
          height: "35",
          rx: "2",
          fill: "#3a3f4d",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "42",
          y: "22",
          width: "26",
          height: "15",
          fill: "#1b1c20"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 60 85",
        className: "hl-art",
        children: [t.jsx("rect", {
          x: "22",
          y: "55",
          width: "16",
          height: "13",
          rx: "1.5",
          fill: "#dfbe9f",
          stroke: Nt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "28",
          y: "12",
          width: "4",
          height: "35",
          fill: "#3a3f4d",
          stroke: Nt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "26",
          y: "24",
          width: "2",
          height: "10",
          fill: "#1b1c20"
        })]
      })
    }
  },
  Lamp: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "26",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M50 72 C50 68 47 62 55 62 C63 62 60 68 60 72 Z",
          fill: "#ffffff",
          stroke: Ct,
          strokeWidth: "2.2"
        }), t.jsx("ellipse", {
          cx: "52",
          cy: "58",
          rx: "1.8",
          ry: "4",
          fill: "#ffffff",
          stroke: Ct,
          strokeWidth: "1.5"
        }), t.jsx("ellipse", {
          cx: "58",
          cy: "58",
          rx: "1.8",
          ry: "4",
          fill: "#ffffff",
          stroke: Ct,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "54",
          y: "40",
          width: "2",
          height: "22",
          fill: "#caa06a",
          stroke: Ct,
          strokeWidth: "1.5"
        }), t.jsx("polygon", {
          points: "55,24 15,76 95,76",
          fill: "url(#lamp-light-grad)",
          opacity: "0.45"
        }), t.jsx("path", {
          d: "M42 22 L68 22 L76 40 L34 40 Z",
          fill: "#ffd98a",
          stroke: Ct,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M34 40 C 37 42, 40 42, 42 40 C 45 42, 48 42, 50 40 C 53 42, 56 42, 58 40 C 61 42, 64 42, 66 40 C 69 42, 72 42, 76 40",
          fill: "none",
          stroke: Ct,
          strokeWidth: "2.2"
        }), t.jsx("defs", {
          children: t.jsxs("linearGradient", {
            id: "lamp-light-grad",
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [t.jsx("stop", {
              offset: "0%",
              stopColor: "#fff3cd",
              stopOpacity: "0.9"
            }), t.jsx("stop", {
              offset: "100%",
              stopColor: "#ffd98a",
              stopOpacity: "0.0"
            })]
          })
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "26",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M50 72 C50 68 47 62 55 62 C63 62 60 68 60 72 Z",
          fill: "#ffffff",
          stroke: Ct,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "54",
          y: "40",
          width: "2",
          height: "22",
          fill: "#caa06a",
          stroke: Ct,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M42 22 L68 22 L76 40 L34 40 Z",
          fill: "#ffd98a",
          stroke: Ct,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "18",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M30 72 C30 68 28 62 35 62 C42 62 40 68 40 72 Z",
          fill: "#ffffff",
          stroke: Ct,
          strokeWidth: "2.2"
        }), t.jsx("ellipse", {
          cx: "33",
          cy: "58",
          rx: "1.5",
          ry: "4",
          fill: "#ffffff",
          stroke: Ct,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "34",
          y: "40",
          width: "2",
          height: "22",
          fill: "#caa06a",
          stroke: Ct,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M26 22 L44 22 L50 40 L20 40 Z",
          fill: "#ffd98a",
          stroke: Ct,
          strokeWidth: "2.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "24",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("ellipse", {
          cx: "55",
          cy: "72",
          rx: "14",
          ry: "3.5",
          fill: "#ccd2d9",
          stroke: Ct,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "55",
          y1: "72",
          x2: "55",
          y2: "46",
          stroke: "#484d52",
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("circle", {
          cx: "55",
          cy: "46",
          r: "2",
          fill: "#dfbe9f",
          stroke: Ct,
          strokeWidth: "1"
        }), " ", t.jsx("line", {
          x1: "55",
          y1: "46",
          x2: "70",
          y2: "28",
          stroke: "#484d52",
          strokeWidth: "2.2",
          strokeLinecap: "round"
        }), t.jsx("circle", {
          cx: "70",
          cy: "28",
          r: "2",
          fill: "#dfbe9f",
          stroke: Ct,
          strokeWidth: "1"
        }), " ", t.jsx("line", {
          x1: "70",
          y1: "28",
          x2: "66",
          y2: "22",
          stroke: "#484d52",
          strokeWidth: "2",
          strokeLinecap: "round"
        }), t.jsx("polygon", {
          points: "66,22 36,76 96,76",
          fill: "url(#lamp-light-grad-b)",
          opacity: "0.35"
        }), t.jsx("path", {
          d: "M58 22 C58 14 74 14 74 22 Z",
          fill: "#3a3a3a",
          stroke: Ct,
          strokeWidth: "2.2"
        }), t.jsx("ellipse", {
          cx: "66",
          cy: "22",
          rx: "8",
          ry: "2",
          fill: "#2d2d2d",
          stroke: Ct,
          strokeWidth: "1.5"
        }), t.jsx("defs", {
          children: t.jsxs("linearGradient", {
            id: "lamp-light-grad-b",
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [t.jsx("stop", {
              offset: "0%",
              stopColor: "#ffffff",
              stopOpacity: "0.8"
            }), t.jsx("stop", {
              offset: "100%",
              stopColor: "#f0f2f5",
              stopOpacity: "0.0"
            })]
          })
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "24",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("ellipse", {
          cx: "55",
          cy: "72",
          rx: "14",
          ry: "3.5",
          fill: "#ccd2d9",
          stroke: Ct,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "55",
          y1: "72",
          x2: "55",
          y2: "46",
          stroke: "#484d52",
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "55",
          y1: "46",
          x2: "70",
          y2: "28",
          stroke: "#484d52",
          strokeWidth: "2.2",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M58 22 C58 14 74 14 74 22 Z",
          fill: "#3a3a3a",
          stroke: Ct,
          strokeWidth: "2.2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("ellipse", {
          cx: "55",
          cy: "72",
          rx: "12",
          ry: "3",
          fill: "#ccd2d9",
          stroke: Ct,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "55",
          y1: "72",
          x2: "52",
          y2: "46",
          stroke: "#484d52",
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "52",
          y1: "46",
          x2: "62",
          y2: "28",
          stroke: "#484d52",
          strokeWidth: "2.2",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M54 22 C54 14 70 14 70 22 Z",
          fill: "#3a3a3a",
          stroke: Ct,
          strokeWidth: "2.2"
        })]
      })
    }
  },
  Bath: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "44",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "12",
          y: "34",
          width: "86",
          height: "34",
          rx: "16",
          fill: "#ffffff",
          stroke: Mt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "66",
          width: "6",
          height: "7",
          rx: "2",
          fill: "#ffd98a",
          stroke: Mt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "82",
          y: "66",
          width: "6",
          height: "7",
          rx: "2",
          fill: "#ffd98a",
          stroke: Mt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "18",
          y: "39",
          width: "74",
          height: "22",
          rx: "11",
          fill: "#add3ec",
          stroke: Mt,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "28",
          cy: "38",
          r: "6",
          fill: "#ffffff",
          opacity: "0.9",
          stroke: Mt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "34",
          cy: "35",
          r: "8",
          fill: "#ffffff",
          opacity: "0.95",
          stroke: Mt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "44",
          cy: "36",
          r: "7",
          fill: "#ffffff",
          opacity: "0.9",
          stroke: Mt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "50",
          cy: "38",
          r: "5",
          fill: "#ffffff",
          opacity: "0.8"
        }), t.jsx("path", {
          d: "M86 34 V22 H92",
          fill: "none",
          stroke: Mt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M92 22 V25",
          stroke: Mt,
          strokeWidth: "2"
        }), t.jsx("circle", {
          cx: "92",
          cy: "29",
          r: "2",
          fill: "#80b8dc"
        }), t.jsx("path", {
          d: "M64 36 C64 32 68 32 70 34 C72 32 75 33 74 36 C74 39 68 40 64 36 Z",
          fill: "#ffd98a",
          stroke: Mt,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "69",
          cy: "34",
          r: "0.8",
          fill: Mt
        }), t.jsx("path", {
          d: "M70 35 L72 35",
          stroke: "#ff8da5",
          strokeWidth: "1.2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "44",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "12",
          y: "34",
          width: "86",
          height: "34",
          rx: "16",
          fill: "#ffffff",
          stroke: Mt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "66",
          width: "6",
          height: "7",
          rx: "2",
          fill: "#ffd98a",
          stroke: Mt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "82",
          y: "66",
          width: "6",
          height: "7",
          rx: "2",
          fill: "#ffd98a",
          stroke: Mt,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "22",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "15",
          y: "34",
          width: "40",
          height: "34",
          rx: "16",
          fill: "#ffffff",
          stroke: Mt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "66",
          width: "6",
          height: "7",
          rx: "2",
          fill: "#ffd98a",
          stroke: Mt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "42",
          y: "66",
          width: "6",
          height: "7",
          rx: "2",
          fill: "#ffd98a",
          stroke: Mt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "20",
          y: "39",
          width: "30",
          height: "22",
          rx: "11",
          fill: "#add3ec",
          stroke: Mt,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "28",
          cy: "38",
          r: "4",
          fill: "#ffffff",
          opacity: "0.9",
          stroke: Mt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "34",
          cy: "35",
          r: "5",
          fill: "#ffffff",
          opacity: "0.95",
          stroke: Mt,
          strokeWidth: "1.2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "46",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "10",
          y: "34",
          width: "90",
          height: "34",
          rx: "2",
          fill: "#ccd2d9",
          stroke: Mt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "38",
          y1: "34",
          x2: "38",
          y2: "68",
          stroke: Mt,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("line", {
          x1: "72",
          y1: "34",
          x2: "72",
          y2: "68",
          stroke: Mt,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("rect", {
          x: "14",
          y: "38",
          width: "82",
          height: "22",
          rx: "1",
          fill: "#f0f2f5",
          stroke: Mt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "16",
          y: "40",
          width: "78",
          height: "18",
          rx: "1",
          fill: "#add3ec",
          stroke: Mt,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M84 40 V24 H90 V27",
          fill: "none",
          stroke: "#3a3a3a",
          strokeWidth: "2.5",
          strokeLinecap: "square"
        }), t.jsx("path", {
          d: "M24 38 H34 V54 H24 Z",
          fill: "#788880",
          stroke: Mt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "24",
          y1: "46",
          x2: "34",
          y2: "46",
          stroke: Mt,
          strokeWidth: "1.2",
          opacity: "0.3"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "46",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "10",
          y: "34",
          width: "90",
          height: "34",
          rx: "2",
          fill: "#ccd2d9",
          stroke: Mt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "38",
          y1: "34",
          x2: "38",
          y2: "68",
          stroke: Mt,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("line", {
          x1: "72",
          y1: "34",
          x2: "72",
          y2: "68",
          stroke: Mt,
          strokeWidth: "1.5",
          opacity: "0.3"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "26",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "12",
          y: "34",
          width: "46",
          height: "34",
          rx: "2",
          fill: "#ccd2d9",
          stroke: Mt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "35",
          y1: "34",
          x2: "35",
          y2: "68",
          stroke: Mt,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("rect", {
          x: "16",
          y: "38",
          width: "38",
          height: "22",
          rx: "1",
          fill: "#f0f2f5",
          stroke: Mt,
          strokeWidth: "2"
        })]
      })
    }
  },
  Package: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "24",
          y: "10",
          width: "62",
          height: "62",
          rx: "7",
          fill: "#caa06a",
          stroke: Lt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "8",
          width: "66",
          height: "5",
          rx: "2",
          fill: "#a0754e",
          stroke: Lt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "29",
          y: "15",
          width: "52",
          height: "52",
          rx: "3",
          fill: "#fbe7c2",
          stroke: Lt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "29",
          y1: "32",
          x2: "81",
          y2: "32",
          stroke: Lt,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "29",
          y1: "50",
          x2: "81",
          y2: "50",
          stroke: Lt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M38 15 L32 67 H38 L44 15 Z M76 15 L70 67 H74 L80 15 Z",
          fill: "#ffffff",
          opacity: "0.25"
        }), t.jsx("circle", {
          cx: "42",
          cy: "24",
          r: "5",
          fill: "#fca89f",
          stroke: Lt,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "39",
          y: "29",
          width: "6",
          height: "2",
          fill: "#caa06a",
          stroke: Lt,
          strokeWidth: "1"
        }), t.jsx("rect", {
          x: "66",
          y: "22",
          width: "10",
          height: "7",
          rx: "1",
          fill: "#ffffff",
          stroke: Lt,
          strokeWidth: "1.2",
          transform: "rotate(-10, 71, 25)"
        }), t.jsx("path", {
          d: "M67 22 L72 26 L77 21",
          stroke: Lt,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "42",
          cy: "42",
          r: "3",
          fill: "#ffd98a",
          stroke: Lt,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M42 39 V36",
          stroke: "green",
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "62",
          y: "38",
          width: "12",
          height: "9",
          rx: "1",
          fill: "#add3ec",
          stroke: Lt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "68",
          cy: "42.5",
          r: "1.8",
          fill: "#ffd98a"
        }), t.jsx("circle", {
          cx: "42",
          cy: "59",
          r: "4",
          fill: "#ffcbd4",
          stroke: Lt,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "41",
          y: "54",
          width: "2",
          height: "3",
          fill: "#caa06a"
        }), t.jsx("rect", {
          x: "60",
          y: "56",
          width: "14",
          height: "11",
          rx: "1.5",
          fill: "#ffffff",
          stroke: Lt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "65",
          y: "56",
          width: "4",
          height: "11",
          fill: "#ff6e8c"
        }), t.jsx("rect", {
          x: "60",
          y: "59",
          width: "14",
          height: "3",
          fill: "#ff6e8c"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "24",
          y: "10",
          width: "62",
          height: "62",
          rx: "7",
          fill: "#caa06a",
          stroke: Lt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "8",
          width: "66",
          height: "5",
          rx: "2",
          fill: "#a0754e",
          stroke: Lt,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 50 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "25",
          cy: "78",
          rx: "14",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "10",
          width: "14",
          height: "62",
          rx: "3",
          fill: "#caa06a",
          stroke: Lt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "16",
          y: "8",
          width: "18",
          height: "5",
          rx: "1",
          fill: "#a0754e",
          stroke: Lt,
          strokeWidth: "2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "32",
          y1: "68",
          x2: "28",
          y2: "76",
          stroke: Lt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "78",
          y1: "68",
          x2: "82",
          y2: "76",
          stroke: Lt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("rect", {
          x: "26",
          y: "12",
          width: "58",
          height: "56",
          rx: "2",
          fill: "none",
          stroke: Lt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "26",
          y1: "32",
          x2: "55",
          y2: "32",
          stroke: Lt,
          strokeWidth: "2.2"
        }), t.jsx("line", {
          x1: "55",
          y1: "46",
          x2: "84",
          y2: "46",
          stroke: Lt,
          strokeWidth: "2.2"
        }), t.jsx("line", {
          x1: "26",
          y1: "58",
          x2: "84",
          y2: "58",
          stroke: Lt,
          strokeWidth: "2.2"
        }), t.jsx("line", {
          x1: "55",
          y1: "12",
          x2: "55",
          y2: "58",
          stroke: Lt,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M35 28 L37 21 H41 L43 28 Z",
          fill: "#5c8075",
          stroke: Lt,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "62",
          y: "38",
          width: "12",
          height: "8",
          rx: "1",
          fill: "#8ca0b8",
          stroke: Lt,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "32",
          y: "61",
          width: "16",
          height: "9",
          rx: "1.5",
          fill: "#dfbe9f",
          stroke: Lt,
          strokeWidth: "1.2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "32",
          y1: "68",
          x2: "28",
          y2: "76",
          stroke: Lt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "78",
          y1: "68",
          x2: "82",
          y2: "76",
          stroke: Lt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("rect", {
          x: "26",
          y: "12",
          width: "58",
          height: "56",
          rx: "2",
          fill: "none",
          stroke: Lt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "26",
          y1: "58",
          x2: "84",
          y2: "58",
          stroke: Lt,
          strokeWidth: "2.2"
        }), t.jsx("line", {
          x1: "55",
          y1: "12",
          x2: "55",
          y2: "58",
          stroke: Lt,
          strokeWidth: "2.2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 50 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "25",
          cy: "78",
          rx: "18",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "25",
          y1: "68",
          x2: "21",
          y2: "76",
          stroke: Lt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("rect", {
          x: "21",
          y: "12",
          width: "8",
          height: "56",
          rx: "1",
          fill: "none",
          stroke: Lt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "21",
          y1: "58",
          x2: "29",
          y2: "58",
          stroke: Lt,
          strokeWidth: "2"
        })]
      })
    }
  },
  DoorClosed: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 90 100",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "45",
          cy: "94",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "4",
          width: "54",
          height: "88",
          rx: "5",
          fill: "#b0825c",
          stroke: $t,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "23",
          y: "8",
          width: "44",
          height: "84",
          rx: "3",
          fill: "#f5e6d3",
          stroke: $t,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "29",
          y: "16",
          width: "32",
          height: "28",
          rx: "2",
          fill: "none",
          stroke: $t,
          strokeWidth: "1.8",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "29",
          y: "50",
          width: "32",
          height: "34",
          rx: "2",
          fill: "none",
          stroke: $t,
          strokeWidth: "1.8",
          opacity: "0.6"
        }), t.jsx("circle", {
          cx: "31",
          cy: "54",
          r: "3.2",
          fill: "#ffd98a",
          stroke: $t,
          strokeWidth: "1.6"
        }), t.jsx("rect", {
          x: "29",
          y: "53.5",
          width: "2",
          height: "6",
          fill: "#ffd98a",
          stroke: $t,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "45",
          cy: "30",
          r: "10",
          fill: "none",
          stroke: "#78be8c",
          strokeWidth: "4.5"
        }), t.jsx("circle", {
          cx: "39",
          cy: "25",
          r: "1.5",
          fill: "#ff8da5"
        }), t.jsx("circle", {
          cx: "51",
          cy: "25",
          r: "1.5",
          fill: "#ff8da5"
        }), t.jsx("circle", {
          cx: "45",
          cy: "36",
          r: "1.5",
          fill: "#ff8da5"
        }), t.jsx("circle", {
          cx: "45",
          cy: "30",
          r: "11",
          fill: "none",
          stroke: $t,
          strokeWidth: "1.2",
          strokeDasharray: "3,3"
        }), t.jsx("rect", {
          x: "36",
          y: "8",
          width: "18",
          height: "6",
          fill: "#caa06a",
          stroke: $t,
          strokeWidth: "1.2"
        }), t.jsx("line", {
          x1: "41",
          y1: "11",
          x2: "49",
          y2: "11",
          stroke: $t,
          strokeWidth: "1"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 90 100",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "45",
          cy: "94",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "4",
          width: "54",
          height: "88",
          rx: "5",
          fill: "#b0825c",
          stroke: $t,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "23",
          y: "8",
          width: "44",
          height: "84",
          rx: "3",
          fill: "#f5e6d3",
          stroke: $t,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "29",
          y: "16",
          width: "32",
          height: "28",
          rx: "2",
          fill: "none",
          stroke: $t,
          strokeWidth: "1.8",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "29",
          y: "50",
          width: "32",
          height: "34",
          rx: "2",
          fill: "none",
          stroke: $t,
          strokeWidth: "1.8",
          opacity: "0.6"
        }), t.jsx("circle", {
          cx: "59",
          cy: "54",
          r: "3.2",
          fill: "#ffd98a",
          stroke: $t,
          strokeWidth: "1.6"
        }), t.jsx("rect", {
          x: "59",
          y: "53.5",
          width: "2",
          height: "6",
          fill: "#ffd98a",
          stroke: $t,
          strokeWidth: "1.2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 40 100",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "20",
          cy: "94",
          rx: "14",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "16",
          y: "4",
          width: "8",
          height: "88",
          rx: "2",
          fill: "#b0825c",
          stroke: $t,
          strokeWidth: "2.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 90 100",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "45",
          cy: "94",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "4",
          width: "54",
          height: "88",
          rx: "2",
          fill: "none",
          stroke: "#3a3e45",
          strokeWidth: "3"
        }), t.jsx("rect", {
          x: "20",
          y: "6",
          width: "50",
          height: "84",
          rx: "1",
          fill: "#f0f2f5",
          stroke: $t,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "25",
          y1: "6",
          x2: "25",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "30",
          y1: "6",
          x2: "30",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "35",
          y1: "6",
          x2: "35",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "40",
          y1: "6",
          x2: "40",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "45",
          y1: "6",
          x2: "45",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "50",
          y1: "6",
          x2: "50",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "55",
          y1: "6",
          x2: "55",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "60",
          y1: "6",
          x2: "60",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("line", {
          x1: "65",
          y1: "6",
          x2: "65",
          y2: "90",
          stroke: $t,
          strokeWidth: "1",
          opacity: "0.15"
        }), t.jsx("rect", {
          x: "23",
          y: "16",
          width: "3",
          height: "68",
          fill: "#1b1c20",
          stroke: $t,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "23",
          y: "42",
          width: "5",
          height: "16",
          fill: "#1b1c20"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 90 100",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "45",
          cy: "94",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "4",
          width: "54",
          height: "88",
          rx: "2",
          fill: "none",
          stroke: "#3a3e45",
          strokeWidth: "3"
        }), t.jsx("rect", {
          x: "20",
          y: "6",
          width: "50",
          height: "84",
          rx: "1",
          fill: "#f0f2f5",
          stroke: $t,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "64",
          y: "16",
          width: "3",
          height: "68",
          fill: "#1b1c20",
          stroke: $t,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "62",
          y: "42",
          width: "5",
          height: "16",
          fill: "#1b1c20"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 50 100",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "25",
          cy: "94",
          rx: "16",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "22",
          y: "4",
          width: "6",
          height: "88",
          fill: "#3a3e45",
          stroke: $t,
          strokeWidth: "2.5"
        })]
      })
    }
  },
  BookOpen: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "32",
          y: "70",
          width: "8",
          height: "5",
          rx: "2",
          fill: "#c08c65",
          stroke: Dt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "70",
          y: "70",
          width: "8",
          height: "5",
          rx: "2",
          fill: "#c08c65",
          stroke: Dt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 26,70 L 26,28 A 29,29 0 0,1 84,28 L 84,70 Z",
          fill: "#ca9e74",
          stroke: Dt,
          strokeWidth: "2.5",
          strokeLinejoin: "round"
        }), t.jsx("path", {
          d: "M 30,70 L 30,29 A 25,25 0 0,1 80,29 L 80,70 Z",
          fill: "#fbe7c2",
          stroke: Dt,
          strokeWidth: "1.8",
          strokeLinejoin: "round"
        }), t.jsx("line", {
          x1: "30",
          y1: "42",
          x2: "80",
          y2: "42",
          stroke: Dt,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "30",
          y1: "56",
          x2: "80",
          y2: "56",
          stroke: Dt,
          strokeWidth: "2"
        }), t.jsx("circle", {
          cx: "55",
          cy: "32",
          r: "5",
          fill: "#fca89f",
          stroke: Dt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "50",
          cy: "28",
          r: "2",
          fill: "#fca89f",
          stroke: Dt,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "60",
          cy: "28",
          r: "2",
          fill: "#fca89f",
          stroke: Dt,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M51 34 C51 38 59 38 59 34 Z",
          fill: "#ffffff",
          stroke: Dt,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "55",
          cy: "34",
          r: "1.5",
          fill: "#ff6e8c"
        }), t.jsx("rect", {
          x: "34",
          y: "46",
          width: "6",
          height: "10",
          fill: "#fad2cc",
          stroke: Dt,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "40",
          y: "44",
          width: "5",
          height: "12",
          fill: "#ffd98a",
          stroke: Dt,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "45",
          y: "48",
          width: "6",
          height: "8",
          fill: "#add3ec",
          stroke: Dt,
          strokeWidth: "1.2",
          transform: "rotate(12, 45, 56)"
        }), t.jsx("rect", {
          x: "32",
          y: "59",
          width: "21",
          height: "11",
          rx: "2.5",
          fill: "#fad2cc",
          stroke: Dt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "57",
          y: "59",
          width: "21",
          height: "11",
          rx: "2.5",
          fill: "#fad2cc",
          stroke: Dt,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "42.5",
          cy: "64.5",
          r: "1.5",
          fill: "#ff6e8c"
        }), t.jsx("circle", {
          cx: "67.5",
          cy: "64.5",
          r: "1.5",
          fill: "#ff6e8c"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "32",
          y: "70",
          width: "8",
          height: "5",
          rx: "2",
          fill: "#c08c65",
          stroke: Dt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "70",
          y: "70",
          width: "8",
          height: "5",
          rx: "2",
          fill: "#c08c65",
          stroke: Dt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 26,70 L 26,28 A 29,29 0 0,1 84,28 L 84,70 Z",
          fill: "#ca9e74",
          stroke: Dt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 50 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "25",
          cy: "78",
          rx: "16",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "21",
          y: "70",
          width: "8",
          height: "5",
          rx: "2",
          fill: "#c08c65",
          stroke: Dt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "14",
          y: "28",
          width: "22",
          height: "42",
          rx: "2",
          fill: "#ca9e74",
          stroke: Dt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M 14,28 A 11,11 0 0,1 36,28 Z",
          fill: "#ca9e74",
          stroke: Dt,
          strokeWidth: "2.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("line", {
          x1: "28",
          y1: "12",
          x2: "28",
          y2: "68",
          stroke: Dt,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "82",
          y1: "12",
          x2: "82",
          y2: "68",
          stroke: Dt,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "28",
          y1: "12",
          x2: "82",
          y2: "68",
          stroke: "#aab5c0",
          strokeWidth: "1",
          opacity: "0.4"
        }), t.jsx("line", {
          x1: "82",
          y1: "12",
          x2: "28",
          y2: "68",
          stroke: "#aab5c0",
          strokeWidth: "1",
          opacity: "0.4"
        }), t.jsx("rect", {
          x: "24",
          y: "22",
          width: "62",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "24",
          y: "42",
          width: "62",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "24",
          y: "62",
          width: "62",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "32",
          y: "10",
          width: "5",
          height: "12",
          fill: "#4d535c",
          stroke: Dt,
          strokeWidth: "1"
        }), t.jsx("rect", {
          x: "37",
          y: "8",
          width: "6",
          height: "14",
          fill: "#888f98",
          stroke: Dt,
          strokeWidth: "1"
        }), t.jsx("rect", {
          x: "64",
          y: "34",
          width: "8",
          height: "8",
          rx: "1",
          fill: "#1b1c20",
          stroke: Dt,
          strokeWidth: "1"
        }), t.jsx("line", {
          x1: "68",
          y1: "34",
          x2: "68",
          y2: "28",
          stroke: Dt,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "34",
          y: "52",
          width: "6",
          height: "10",
          fill: "#ccd2d9",
          stroke: Dt,
          strokeWidth: "1"
        }), t.jsx("rect", {
          x: "40",
          y: "52",
          width: "6",
          height: "10",
          fill: "#4d535c",
          stroke: Dt,
          strokeWidth: "1"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("line", {
          x1: "28",
          y1: "12",
          x2: "28",
          y2: "68",
          stroke: Dt,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "82",
          y1: "12",
          x2: "82",
          y2: "68",
          stroke: Dt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "24",
          y: "22",
          width: "62",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "24",
          y: "42",
          width: "62",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "24",
          y: "62",
          width: "62",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 50 85",
        className: "hl-art",
        children: [t.jsx("line", {
          x1: "25",
          y1: "12",
          x2: "25",
          y2: "68",
          stroke: Dt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "20",
          y: "22",
          width: "10",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "20",
          y: "42",
          width: "10",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "20",
          y: "62",
          width: "10",
          height: "4",
          rx: "1",
          fill: "#dfbe9f",
          stroke: Dt,
          strokeWidth: "1.5"
        })]
      })
    }
  },
  AppWindow: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "44",
          ry: "5",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "16",
          y: "66",
          width: "78",
          height: "6",
          rx: "2",
          fill: "#caa06a",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 22 66 L 22 36 A 33 33 0 0 1 88 36 L 88 66 Z",
          fill: "#ffffff",
          stroke: Ut,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M 25 66 L 25 36 A 30 30 0 0 1 85 36 L 85 66 Z",
          fill: "#a4dbe2"
        }), t.jsx("circle", {
          cx: "45",
          cy: "30",
          r: "7",
          fill: "#ffffff",
          opacity: "0.9"
        }), t.jsx("circle", {
          cx: "53",
          cy: "31",
          r: "5",
          fill: "#ffffff",
          opacity: "0.9"
        }), t.jsx("circle", {
          cx: "39",
          cy: "32",
          r: "5",
          fill: "#ffffff",
          opacity: "0.9"
        }), t.jsx("line", {
          x1: "55",
          y1: "12",
          x2: "55",
          y2: "66",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "22",
          y1: "42",
          x2: "88",
          y2: "42",
          stroke: Ut,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M 33 36 A 22 22 0 0 1 77 36",
          fill: "none",
          stroke: Ut,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M22 18 Q45 28 32 66 L22 66 Z",
          fill: "#fad2cc",
          stroke: Ut,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M88 18 Q65 28 78 66 L88 66 Z",
          fill: "#fad2cc",
          stroke: Ut,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "28",
          cy: "42",
          r: "3",
          fill: "#fca89f",
          stroke: Ut,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M 28 42 L 24 39 L 24 45 Z",
          fill: "#fca89f",
          stroke: Ut,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M 28 42 L 32 39 L 32 45 Z",
          fill: "#fca89f",
          stroke: Ut,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "82",
          cy: "42",
          r: "3",
          fill: "#fca89f",
          stroke: Ut,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M 82 42 L 78 39 L 78 45 Z",
          fill: "#fca89f",
          stroke: Ut,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M 82 42 L 86 39 L 86 45 Z",
          fill: "#fca89f",
          stroke: Ut,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M68 66 L78 66 L76 59 L70 59 Z",
          fill: "#fff5f5",
          stroke: Ut,
          strokeWidth: "1.2"
        }), t.jsx("polygon", {
          points: "70,59 71.5,56 73,59",
          fill: "#fff5f5",
          stroke: Ut,
          strokeWidth: "1"
        }), t.jsx("polygon", {
          points: "75,59 76.5,56 78,59",
          fill: "#fff5f5",
          stroke: Ut,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "72",
          cy: "56",
          r: "3",
          fill: "#78be8c",
          stroke: Ut,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "76",
          cy: "56",
          r: "2.5",
          fill: "#78be8c",
          stroke: Ut,
          strokeWidth: "1"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "44",
          ry: "5",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "16",
          y: "66",
          width: "78",
          height: "6",
          rx: "2",
          fill: "#b38a5b",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 22 66 L 22 36 A 33 33 0 0 1 88 36 L 88 66 Z",
          fill: "#ebebeb",
          stroke: Ut,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M22 25 Q35 30 26 66 L22 66 Z",
          fill: "#fad2cc",
          opacity: "0.6"
        }), t.jsx("path", {
          d: "M88 25 Q75 30 82 66 L88 66 Z",
          fill: "#fad2cc",
          opacity: "0.6"
        }), t.jsx("line", {
          x1: "55",
          y1: "12",
          x2: "55",
          y2: "66",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "22",
          y1: "42",
          x2: "88",
          y2: "42",
          stroke: Ut,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 40 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "20",
          cy: "76",
          rx: "14",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "10",
          y: "66",
          width: "20",
          height: "6",
          rx: "2",
          fill: "#caa06a",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M18 66 L18 36 A2 2 0 0 1 22 36 L22 66 Z",
          fill: "#ffffff",
          stroke: Ut,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M16 22 Q13 40 17 60 L20 60 Z",
          fill: "#fad2cc",
          stroke: Ut,
          strokeWidth: "1.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "48",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "12",
          y: "8",
          width: "86",
          height: "68",
          rx: "1",
          fill: "#1e222b",
          stroke: Ut,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "16",
          y: "12",
          width: "78",
          height: "60",
          fill: "#222730"
        }), t.jsx("rect", {
          x: "16",
          y: "45",
          width: "24",
          height: "27",
          fill: "#2a303d"
        }), t.jsx("rect", {
          x: "68",
          y: "35",
          width: "26",
          height: "37",
          fill: "#262d3a"
        }), t.jsx("rect", {
          x: "74",
          y: "42",
          width: "4",
          height: "4",
          fill: "#ffd98a",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "82",
          y: "42",
          width: "4",
          height: "4",
          fill: "#ffd98a",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "74",
          y: "52",
          width: "4",
          height: "4",
          fill: "#ffd98a",
          opacity: "0.6"
        }), t.jsx("circle", {
          cx: "28",
          cy: "22",
          r: "0.8",
          fill: "#ffffff",
          opacity: "0.8"
        }), t.jsx("circle", {
          cx: "50",
          cy: "18",
          r: "1",
          fill: "#ffffff"
        }), t.jsx("circle", {
          cx: "62",
          cy: "26",
          r: "0.6",
          fill: "#ffffff",
          opacity: "0.5"
        }), t.jsx("line", {
          x1: "45",
          y1: "12",
          x2: "45",
          y2: "72",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "72",
          y1: "12",
          x2: "72",
          y2: "72",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "16",
          y: "12",
          width: "29",
          height: "5",
          fill: "#525c6c",
          stroke: Ut,
          strokeWidth: "1.2"
        }), t.jsx("line", {
          x1: "16",
          y1: "20",
          x2: "45",
          y2: "20",
          stroke: "#7d8590",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "16",
          y1: "26",
          x2: "45",
          y2: "26",
          stroke: "#7d8590",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "16",
          y1: "32",
          x2: "45",
          y2: "32",
          stroke: "#7d8590",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "16",
          y1: "38",
          x2: "45",
          y2: "38",
          stroke: "#7d8590",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "16",
          y1: "44",
          x2: "45",
          y2: "44",
          stroke: "#7d8590",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "42",
          y1: "17",
          x2: "42",
          y2: "52",
          stroke: Ut,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "42",
          cy: "53",
          r: "1.5",
          fill: "#ffd98a",
          stroke: Ut,
          strokeWidth: "0.8"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "48",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "12",
          y: "8",
          width: "86",
          height: "68",
          rx: "1",
          fill: "#1e222b",
          stroke: Ut,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "16",
          y: "12",
          width: "78",
          height: "60",
          fill: "#d8dee9"
        }), t.jsx("line", {
          x1: "45",
          y1: "12",
          x2: "45",
          y2: "72",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "72",
          y1: "12",
          x2: "72",
          y2: "72",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "16",
          y: "12",
          width: "29",
          height: "35",
          fill: "#7d8590",
          opacity: "0.3"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 40 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "20",
          cy: "78",
          rx: "12",
          ry: "3",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "17",
          y: "8",
          width: "6",
          height: "68",
          rx: "0.5",
          fill: "#1e222b",
          stroke: Ut,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "12",
          y: "74",
          width: "16",
          height: "4",
          fill: "#525c6c",
          stroke: Ut,
          strokeWidth: "1"
        })]
      })
    }
  },
  Shirt: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 90",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "83",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M24 18 L24 15 C 24 6, 38 6, 38 15 L 72 15 C 72 6, 86 6, 86 15 L 86 18 Z",
          fill: "#fca89f",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "24",
          y: "18",
          width: "62",
          height: "62",
          rx: "6",
          fill: "#fca89f",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "29",
          y: "24",
          width: "24",
          height: "42",
          rx: "3",
          fill: "#ffffff",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "57",
          y: "24",
          width: "24",
          height: "42",
          rx: "3",
          fill: "#ffffff",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M 37 32 A 3 3 0 0 1 41 32 A 3 3 0 0 1 45 32 Q 41 38 41 41 Q 41 38 37 32 Z",
          fill: "#fad2cc",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M 65 32 A 3 3 0 0 1 69 32 A 3 3 0 0 1 73 32 Q 69 38 69 41 Q 69 38 65 32 Z",
          fill: "#fad2cc",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "50",
          cy: "45",
          r: "2.5",
          fill: "#ffd98a",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "48",
          cy: "41.5",
          r: "0.8",
          fill: "#ffd98a"
        }), t.jsx("circle", {
          cx: "50",
          cy: "40.5",
          r: "0.8",
          fill: "#ffd98a"
        }), t.jsx("circle", {
          cx: "52",
          cy: "41.5",
          r: "0.8",
          fill: "#ffd98a"
        }), t.jsx("circle", {
          cx: "60",
          cy: "45",
          r: "2.5",
          fill: "#ffd98a",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "58",
          cy: "41.5",
          r: "0.8",
          fill: "#ffd98a"
        }), t.jsx("circle", {
          cx: "60",
          cy: "40.5",
          r: "0.8",
          fill: "#ffd98a"
        }), t.jsx("circle", {
          cx: "62",
          cy: "41.5",
          r: "0.8",
          fill: "#ffd98a"
        }), t.jsx("rect", {
          x: "29",
          y: "68",
          width: "52",
          height: "9",
          fill: "#fad2cc",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "45",
          cy: "72.5",
          r: "2",
          fill: "#ffd98a",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "65",
          cy: "72.5",
          r: "2",
          fill: "#ffd98a",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("rect", {
          x: "32",
          y: "80",
          width: "8",
          height: "4",
          rx: "2",
          fill: "#caa06a",
          stroke: _t,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "70",
          y: "80",
          width: "8",
          height: "4",
          rx: "2",
          fill: "#caa06a",
          stroke: _t,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "38",
          y: "7",
          width: "24",
          height: "11",
          rx: "1.5",
          fill: "#dfbe9f",
          stroke: _t,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M 46 12 Q 50 8 50 14 Q 50 8 54 12 Z",
          fill: "#fca89f"
        }), t.jsx("circle", {
          cx: "50",
          cy: "10",
          r: "1",
          fill: "#78be8c"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 90",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "83",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M24 18 L24 15 C 24 6, 38 6, 38 15 L 72 15 C 72 6, 86 6, 86 15 L 86 18 Z",
          fill: "#eb988f",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "24",
          y: "18",
          width: "62",
          height: "62",
          rx: "6",
          fill: "#fca89f",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "55",
          y1: "18",
          x2: "55",
          y2: "80",
          stroke: _t,
          strokeWidth: "2",
          opacity: "0.3"
        }), t.jsx("rect", {
          x: "32",
          y: "80",
          width: "8",
          height: "4",
          rx: "2",
          fill: "#caa06a",
          stroke: _t,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "70",
          y: "80",
          width: "8",
          height: "4",
          rx: "2",
          fill: "#caa06a",
          stroke: _t,
          strokeWidth: "1.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 60 90",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "30",
          cy: "83",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M18 18 L18 15 Q24 6 30 15 L42 15 L42 18 Z",
          fill: "#fca89f",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "18",
          y: "18",
          width: "24",
          height: "62",
          rx: "4",
          fill: "#fca89f",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "26",
          y: "80",
          width: "8",
          height: "4",
          rx: "2",
          fill: "#caa06a",
          stroke: _t,
          strokeWidth: "1.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 90",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "83",
          rx: "44",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "21",
          y: "12",
          width: "32",
          height: "63",
          rx: "1",
          fill: "#e5dec9",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "53",
          y1: "12",
          x2: "53",
          y2: "75",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "47",
          y: "38",
          width: "4",
          height: "12",
          fill: "#caa06a",
          stroke: _t,
          strokeWidth: "1.2"
        }), t.jsx("line", {
          x1: "53",
          y1: "16",
          x2: "85",
          y2: "16",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "85",
          y1: "12",
          x2: "85",
          y2: "75",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "53",
          y1: "22",
          x2: "85",
          y2: "22",
          stroke: _t,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 60 22 L 64 22 L 62 25 Z",
          fill: "none",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M 57 28 L 67 28 L 70 65 L 54 65 Z",
          fill: "#697b8c",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M 59 28 L 62 38 L 65 28",
          fill: "none",
          stroke: _t,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M 72 22 L 76 22 L 74 25 Z",
          fill: "none",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M 70 28 L 78 28 L 80 58 L 68 58 Z",
          fill: "#dfbe9f",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "21",
          y1: "75",
          x2: "85",
          y2: "75",
          stroke: "#3a3e45",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "26",
          y1: "75",
          x2: "21",
          y2: "82",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "48",
          y1: "75",
          x2: "44",
          y2: "82",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "85",
          y1: "75",
          x2: "80",
          y2: "82",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 90",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "83",
          rx: "44",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "57",
          y: "12",
          width: "32",
          height: "63",
          rx: "1",
          fill: "#caa06a",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "57",
          y1: "12",
          x2: "57",
          y2: "75",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "25",
          y1: "16",
          x2: "57",
          y2: "16",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "25",
          y1: "12",
          x2: "25",
          y2: "75",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "25",
          y1: "22",
          x2: "57",
          y2: "22",
          stroke: _t,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 32 22 L 36 22 L 34 25 Z",
          fill: "none",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M 30 28 L 38 28 L 40 58 L 28 58 Z",
          fill: "#dfbe9f",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M 46 22 L 50 22 L 48 25 Z",
          fill: "none",
          stroke: _t,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M 43 28 L 53 28 L 56 65 L 40 65 Z",
          fill: "#697b8c",
          stroke: _t,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "25",
          y1: "75",
          x2: "89",
          y2: "75",
          stroke: "#3a3e45",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "84",
          y1: "75",
          x2: "89",
          y2: "82",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "62",
          y1: "75",
          x2: "66",
          y2: "82",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "25",
          y1: "75",
          x2: "30",
          y2: "82",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 60 90",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "30",
          cy: "83",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "15",
          y: "12",
          width: "26",
          height: "63",
          rx: "1",
          fill: "#e5dec9",
          stroke: _t,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "41",
          y1: "16",
          x2: "47",
          y2: "16",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "41",
          y: "28",
          width: "3",
          height: "30",
          fill: "#dfbe9f",
          stroke: _t,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "44",
          y: "28",
          width: "3",
          height: "37",
          fill: "#697b8c",
          stroke: _t,
          strokeWidth: "1.2"
        }), t.jsx("line", {
          x1: "15",
          y1: "75",
          x2: "41",
          y2: "75",
          stroke: "#3a3e45",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "20",
          y1: "75",
          x2: "16",
          y2: "82",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "36",
          y1: "75",
          x2: "40",
          y2: "82",
          stroke: "#3a3e45",
          strokeWidth: "2.5"
        })]
      })
    }
  },
  Table: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "42",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "22",
          y: "16",
          width: "66",
          height: "12",
          rx: "3",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 30 16 C 26 4, 40 4, 40 16 Z",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 33 16 C 31 8, 37 8, 37 16 Z",
          fill: "#fad2cc"
        }), t.jsx("path", {
          d: "M 70 16 C 66 4, 80 4, 80 16 Z",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 73 16 C 71 8, 77 8, 77 16 Z",
          fill: "#fad2cc"
        }), t.jsx("rect", {
          x: "10",
          y: "28",
          width: "90",
          height: "7",
          rx: "3.5",
          fill: "#caa06a",
          stroke: Tt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "14",
          y: "35",
          width: "82",
          height: "13",
          rx: "3",
          fill: "#fad2cc",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "19",
          y: "39",
          width: "32",
          height: "6",
          rx: "1.5",
          fill: "#ffffff",
          stroke: Tt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "35",
          cy: "42",
          r: "2",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "1"
        }), t.jsx("rect", {
          x: "59",
          y: "39",
          width: "32",
          height: "6",
          rx: "1.5",
          fill: "#ffffff",
          stroke: Tt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "75",
          cy: "42",
          r: "2",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "1"
        }), t.jsx("rect", {
          x: "48",
          y: "21",
          width: "7",
          height: "7",
          rx: "1",
          fill: "#ffffff",
          stroke: Tt,
          strokeWidth: "1"
        }), t.jsx("line", {
          x1: "50",
          y1: "21",
          x2: "48",
          y2: "17",
          stroke: "#fca89f",
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "52",
          y1: "21",
          x2: "54",
          y2: "16",
          stroke: "#78be8c",
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "22",
          y: "48",
          width: "8",
          height: "24",
          rx: "4",
          fill: "#ca9e74",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "80",
          y: "48",
          width: "8",
          height: "24",
          rx: "4",
          fill: "#ca9e74",
          stroke: Tt,
          strokeWidth: "2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "42",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "22",
          y: "16",
          width: "66",
          height: "12",
          rx: "3",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 30 16 C 26 4, 40 4, 40 16 Z",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 70 16 C 66 4, 80 4, 80 16 Z",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "10",
          y: "28",
          width: "90",
          height: "7",
          rx: "3.5",
          fill: "#caa06a",
          stroke: Tt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "14",
          y: "35",
          width: "82",
          height: "13",
          rx: "3",
          fill: "#fad2cc",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "22",
          y: "48",
          width: "8",
          height: "24",
          rx: "4",
          fill: "#ca9e74",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "80",
          y: "48",
          width: "8",
          height: "24",
          rx: "4",
          fill: "#ca9e74",
          stroke: Tt,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 60 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "30",
          cy: "76",
          rx: "20",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "26",
          y: "16",
          width: "4",
          height: "12",
          rx: "1",
          fill: "#fca89f",
          stroke: Tt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "14",
          y: "28",
          width: "32",
          height: "7",
          rx: "3.5",
          fill: "#caa06a",
          stroke: Tt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "18",
          y: "35",
          width: "24",
          height: "13",
          rx: "2",
          fill: "#fad2cc",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "26",
          y: "48",
          width: "8",
          height: "24",
          rx: "4",
          fill: "#ca9e74",
          stroke: Tt,
          strokeWidth: "2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "42",
          ry: "5",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "14",
          y: "28",
          width: "82",
          height: "7",
          rx: "1",
          fill: "#f0f2f5",
          stroke: Tt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M 22 35 L 22 45 L 34 35 Z",
          fill: "#3a3e45",
          stroke: Tt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "22",
          y1: "45",
          x2: "18",
          y2: "68",
          stroke: "#3a3e45",
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M 88 35 L 88 45 L 76 35 Z",
          fill: "#3a3e45",
          stroke: Tt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "88",
          y1: "45",
          x2: "92",
          y2: "68",
          stroke: "#3a3e45",
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "42",
          y: "21",
          width: "26",
          height: "7",
          rx: "1",
          fill: "#ccd2d9",
          stroke: Tt,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "42",
          y1: "26",
          x2: "68",
          y2: "26",
          stroke: Tt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "55",
          cy: "24.5",
          r: "1.5",
          fill: "#888f98"
        }), t.jsx("rect", {
          x: "74",
          y: "21",
          width: "7",
          height: "7",
          rx: "1.2",
          fill: "#789080",
          stroke: Tt,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M 81 22.5 C 82.5 22.5 82.5 25.5 81 25.5",
          fill: "none",
          stroke: Tt,
          strokeWidth: "1"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "42",
          ry: "5",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "14",
          y: "28",
          width: "82",
          height: "7",
          rx: "1",
          fill: "#cbd5e1",
          stroke: Tt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M 22 35 L 22 45 L 34 35 Z",
          fill: "#3a3e45",
          stroke: Tt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "22",
          y1: "45",
          x2: "18",
          y2: "68",
          stroke: "#3a3e45",
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M 88 35 L 88 45 L 76 35 Z",
          fill: "#3a3e45",
          stroke: Tt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "88",
          y1: "45",
          x2: "92",
          y2: "68",
          stroke: "#3a3e45",
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "29",
          y: "21",
          width: "7",
          height: "7",
          rx: "1.2",
          fill: "#789080",
          stroke: Tt,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M 29 22.5 C 27.5 22.5 27.5 25.5 29 25.5",
          fill: "none",
          stroke: Tt,
          strokeWidth: "1"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 60 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "30",
          cy: "76",
          rx: "20",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "28",
          width: "24",
          height: "7",
          rx: "1",
          fill: "#f0f2f5",
          stroke: Tt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M 22 35 L 30 35 L 26 68 Z",
          fill: "#3a3e45",
          stroke: Tt,
          strokeWidth: "2"
        })]
      })
    }
  },
  Refrigerator: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "28",
          y: "70",
          width: "8",
          height: "8",
          rx: "2.5",
          fill: "#c08c65",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "74",
          y: "70",
          width: "8",
          height: "8",
          rx: "2.5",
          fill: "#c08c65",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "16",
          width: "66",
          height: "56",
          rx: "10",
          fill: "#fad2cc",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "22",
          y1: "42",
          x2: "88",
          y2: "42",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "30",
          y: "32",
          width: "6",
          height: "6",
          rx: "2",
          fill: "#fff5f5",
          stroke: At,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "30",
          y: "46",
          width: "6",
          height: "8",
          rx: "2",
          fill: "#fff5f5",
          stroke: At,
          strokeWidth: "2"
        }), t.jsx("circle", {
          cx: "68",
          cy: "28",
          r: "5",
          fill: "#fff5f5",
          stroke: At,
          strokeWidth: "1.5"
        }), t.jsx("polygon", {
          points: "63,25 66,21 68,24",
          fill: "#fff5f5",
          stroke: At,
          strokeWidth: "1"
        }), t.jsx("polygon", {
          points: "73,25 70,21 68,24",
          fill: "#fff5f5",
          stroke: At,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "66",
          cy: "28",
          r: "0.7",
          fill: At
        }), t.jsx("circle", {
          cx: "70",
          cy: "28",
          r: "0.7",
          fill: At
        }), t.jsx("rect", {
          x: "52",
          y: "30",
          width: "8",
          height: "8",
          rx: "1",
          fill: "#fff9db",
          stroke: At,
          strokeWidth: "1.2",
          transform: "rotate(-8, 56, 34)"
        }), t.jsx("rect", {
          x: "48",
          y: "10",
          width: "14",
          height: "7",
          rx: "1",
          fill: "#e5837a",
          stroke: At,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M49 10 C50 6, 60 6, 61 10 Z",
          fill: "#b4dbb6",
          stroke: At,
          strokeWidth: "1.8"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "28",
          y: "70",
          width: "8",
          height: "8",
          rx: "2.5",
          fill: "#c08c65",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "74",
          y: "70",
          width: "8",
          height: "8",
          rx: "2.5",
          fill: "#c08c65",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "16",
          width: "66",
          height: "56",
          rx: "10",
          fill: "#fca89f",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "32",
          y: "24",
          width: "46",
          height: "34",
          rx: "2",
          fill: "none",
          stroke: At,
          strokeWidth: "1.8",
          strokeDasharray: "3,3",
          opacity: "0.4"
        }), t.jsx("rect", {
          x: "48",
          y: "10",
          width: "14",
          height: "7",
          rx: "1",
          fill: "#e5837a",
          stroke: At,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "78",
          rx: "24",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "70",
          width: "8",
          height: "8",
          rx: "2.5",
          fill: "#c08c65",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "44",
          y: "70",
          width: "8",
          height: "8",
          rx: "2.5",
          fill: "#c08c65",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "12",
          y: "16",
          width: "46",
          height: "56",
          rx: "10",
          fill: "#fad2cc",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "48",
          y1: "16",
          x2: "48",
          y2: "72",
          stroke: At,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "30",
          y: "10",
          width: "10",
          height: "7",
          rx: "1",
          fill: "#e5837a",
          stroke: At,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "35",
          cy: "7",
          r: "3.5",
          fill: "#b4dbb6",
          stroke: At,
          strokeWidth: "1.8"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "38",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "22",
          y: "68",
          width: "66",
          height: "8",
          fill: "#3a3542",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "14",
          width: "66",
          height: "55",
          rx: "3",
          fill: "#ccd2d9",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "55",
          y1: "14",
          x2: "55",
          y2: "69",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "52",
          y1: "26",
          x2: "52",
          y2: "58",
          stroke: At,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "58",
          y1: "26",
          x2: "58",
          y2: "58",
          stroke: At,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "32",
          y: "30",
          width: "16",
          height: "18",
          rx: "2",
          fill: "#5c8075",
          stroke: At,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "36",
          y1: "35",
          x2: "44",
          y2: "35",
          stroke: "#fff",
          strokeWidth: "1",
          opacity: "0.6"
        }), t.jsx("circle", {
          cx: "40",
          cy: "42",
          r: "1.5",
          fill: "#fff",
          opacity: "0.8"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "38",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "22",
          y: "68",
          width: "66",
          height: "8",
          fill: "#3a3542",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "14",
          width: "66",
          height: "55",
          rx: "3",
          fill: "#aab5c0",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "30",
          y1: "20",
          x2: "80",
          y2: "20",
          stroke: At,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("line", {
          x1: "30",
          y1: "30",
          x2: "80",
          y2: "30",
          stroke: At,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("line", {
          x1: "30",
          y1: "40",
          x2: "80",
          y2: "40",
          stroke: At,
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("line", {
          x1: "30",
          y1: "50",
          x2: "80",
          y2: "50",
          stroke: At,
          strokeWidth: "1.5",
          opacity: "0.3"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "78",
          rx: "26",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "12",
          y: "68",
          width: "46",
          height: "8",
          fill: "#3a3542",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "12",
          y: "14",
          width: "46",
          height: "55",
          rx: "3",
          fill: "#ccd2d9",
          stroke: At,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "46",
          y1: "14",
          x2: "46",
          y2: "69",
          stroke: At,
          strokeWidth: "2"
        })]
      })
    }
  },
  CookingPot: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "48",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M12 75 Q15 70, 20 75 Q25 70, 30 75 Q35 70, 40 75 Q45 70, 50 75 Q55 70, 60 75 Q65 70, 70 75 Q75 70, 80 75 Q85 70, 90 75 Q95 70, 98 75",
          fill: "#ffc6be",
          stroke: Rt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "22",
          y: "66",
          width: "10",
          height: "8",
          rx: "3",
          fill: "#c08c65",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "78",
          y: "66",
          width: "10",
          height: "8",
          rx: "3",
          fill: "#c08c65",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "15",
          y: "42",
          width: "80",
          height: "26",
          rx: "5",
          fill: "#fad2cc",
          stroke: Rt,
          strokeWidth: "2.5"
        }), t.jsx("circle", {
          cx: "35",
          cy: "55",
          r: "3",
          fill: "#fff5f5",
          stroke: Rt,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "75",
          cy: "55",
          r: "3",
          fill: "#fff5f5",
          stroke: Rt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "12",
          y: "34",
          width: "86",
          height: "8",
          rx: "2",
          fill: "#fff5f5",
          stroke: Rt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "24",
          y: "32",
          width: "22",
          height: "4",
          rx: "1",
          fill: "#ccd2d9",
          stroke: Rt,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M30 32 C30 22, 38 22, 38 26",
          fill: "none",
          stroke: Rt,
          strokeWidth: "2.2",
          strokeLinecap: "round"
        }), t.jsx("ellipse", {
          cx: "70",
          cy: "34",
          r: "10",
          ry: "3",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "62",
          y: "22",
          width: "16",
          height: "12",
          rx: "3",
          fill: "#e5837a",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "58",
          y: "25",
          width: "4",
          height: "6",
          rx: "1.5",
          fill: "#e5837a",
          stroke: Rt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "78",
          y: "25",
          width: "4",
          height: "6",
          rx: "1.5",
          fill: "#e5837a",
          stroke: Rt,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "65",
          cy: "16",
          r: "2.2",
          fill: "#fff",
          opacity: "0.6",
          stroke: Rt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "75",
          cy: "18",
          r: "1.5",
          fill: "#fff",
          opacity: "0.6",
          stroke: Rt,
          strokeWidth: "1.2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "48",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "22",
          y: "66",
          width: "10",
          height: "8",
          rx: "3",
          fill: "#c08c65",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "78",
          y: "66",
          width: "10",
          height: "8",
          rx: "3",
          fill: "#c08c65",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "15",
          y: "42",
          width: "80",
          height: "26",
          rx: "5",
          fill: "#fca89f",
          stroke: Rt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "12",
          y: "34",
          width: "86",
          height: "8",
          rx: "2",
          fill: "#fff5f5",
          stroke: Rt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "12",
          y: "24",
          width: "86",
          height: "10",
          rx: "1",
          fill: "#fad2cc",
          stroke: Rt,
          strokeWidth: "2.2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "78",
          rx: "26",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "30",
          y: "66",
          width: "10",
          height: "8",
          rx: "3",
          fill: "#c08c65",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "18",
          y: "42",
          width: "34",
          height: "26",
          rx: "5",
          fill: "#fad2cc",
          stroke: Rt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "15",
          y: "34",
          width: "40",
          height: "8",
          rx: "2",
          fill: "#fff5f5",
          stroke: Rt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "28",
          y: "22",
          width: "14",
          height: "12",
          rx: "3",
          fill: "#e5837a",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "38",
          y1: "22",
          x2: "44",
          y2: "12",
          stroke: Rt,
          strokeWidth: "2.2",
          strokeLinecap: "round"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "46",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "40",
          width: "6",
          height: "36",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "86",
          y: "40",
          width: "6",
          height: "36",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "24",
          y1: "46",
          x2: "86",
          y2: "70",
          stroke: Rt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "86",
          y1: "46",
          x2: "24",
          y2: "70",
          stroke: Rt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "24",
          y: "48",
          width: "62",
          height: "22",
          fill: "#dfbe9f",
          stroke: Rt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "12",
          y: "34",
          width: "86",
          height: "8",
          rx: "1.5",
          fill: "#c08c65",
          stroke: Rt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "33",
          width: "24",
          height: "2",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "34",
          cy: "33",
          r: "5.5",
          fill: "none",
          stroke: "#e5837a",
          strokeWidth: "1",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "58",
          y: "31",
          width: "26",
          height: "4",
          fill: "#ccd2d9",
          stroke: Rt,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M78 31 V24 H72",
          fill: "none",
          stroke: Rt,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }), t.jsx("line", {
          x1: "42",
          y1: "34",
          x2: "42",
          y2: "10",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "42",
          y1: "10",
          x2: "52",
          y2: "10",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("circle", {
          cx: "56",
          cy: "18",
          r: "6",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "56",
          y1: "12",
          x2: "52",
          y2: "10",
          stroke: Rt,
          strokeWidth: "1.8"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "46",
          ry: "6",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "40",
          width: "6",
          height: "36",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "86",
          y: "40",
          width: "6",
          height: "36",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "24",
          y: "40",
          width: "62",
          height: "30",
          fill: "#dfbe9f",
          stroke: Rt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "12",
          y: "34",
          width: "86",
          height: "8",
          rx: "1.5",
          fill: "#c08c65",
          stroke: Rt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "78",
          rx: "24",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "40",
          width: "6",
          height: "36",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "46",
          y: "40",
          width: "6",
          height: "36",
          fill: "#3a3542",
          stroke: Rt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "24",
          y: "40",
          width: "22",
          height: "30",
          fill: "#dfbe9f",
          stroke: Rt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "12",
          y: "34",
          width: "46",
          height: "8",
          rx: "1.5",
          fill: "#c08c65",
          stroke: Rt,
          strokeWidth: "2.5"
        })]
      })
    }
  },
  ShowerHead: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "24",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M42 54 C42 66, 45 74, 55 74 C65 74, 68 66, 68 54 Z",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "34",
          y: "14",
          width: "42",
          height: "34",
          rx: "8",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "32",
          y: "10",
          width: "46",
          height: "6",
          rx: "2.5",
          fill: "#fad2cc",
          stroke: Pt,
          strokeWidth: "2"
        }), t.jsx("circle", {
          cx: "39",
          cy: "20",
          r: "2.5",
          fill: "#ffd085",
          stroke: Pt,
          strokeWidth: "1.2"
        }), t.jsx("ellipse", {
          cx: "55",
          cy: "52",
          rx: "20",
          ry: "12",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("ellipse", {
          cx: "55",
          cy: "50",
          rx: "18",
          ry: "10",
          fill: "#fad2cc",
          stroke: Pt,
          strokeWidth: "2"
        }), t.jsx("polygon", {
          points: "40,43 44,38 46,42",
          fill: "#fad2cc",
          stroke: Pt,
          strokeWidth: "1.2"
        }), t.jsx("polygon", {
          points: "70,43 66,38 64,42",
          fill: "#fad2cc",
          stroke: Pt,
          strokeWidth: "1.2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "24",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M42 54 C42 66, 45 74, 55 74 C65 74, 68 66, 68 54 Z",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "34",
          y: "14",
          width: "42",
          height: "46",
          rx: "8",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "32",
          y: "10",
          width: "46",
          height: "6",
          rx: "2.5",
          fill: "#fad2cc",
          stroke: Pt,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "74",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "18",
          y: "14",
          width: "16",
          height: "34",
          rx: "5",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "16",
          y: "10",
          width: "20",
          height: "6",
          rx: "2",
          fill: "#fad2cc",
          stroke: Pt,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M30 42 C30 64, 38 72, 48 72 C58 72, 58 60, 58 48 C58 42, 38 42, 30 42 Z",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "30",
          y: "40",
          width: "24",
          height: "4",
          rx: "1.5",
          fill: "#fad2cc",
          stroke: Pt,
          strokeWidth: "2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "26",
          y: "12",
          width: "58",
          height: "58",
          rx: "2",
          fill: "#ccd2d9",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "44",
          y: "22",
          width: "22",
          height: "12",
          rx: "1",
          fill: "#aab5c0",
          stroke: Pt,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "50",
          cy: "28",
          r: "2.5",
          fill: "#fff",
          opacity: "0.6"
        }), t.jsx("circle", {
          cx: "60",
          cy: "28",
          r: "1.8",
          fill: "#fff",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "36",
          y: "42",
          width: "38",
          height: "24",
          rx: "4",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "36",
          y: "40",
          width: "38",
          height: "3",
          rx: "1",
          fill: "#ccd2d9",
          stroke: Pt,
          strokeWidth: "1.5"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "26",
          y: "12",
          width: "58",
          height: "64",
          rx: "2",
          fill: "#ccd2d9",
          stroke: Pt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "44",
          cy: "76",
          rx: "16",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "18",
          y1: "12",
          x2: "18",
          y2: "76",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "18",
          y: "42",
          width: "36",
          height: "24",
          rx: "4",
          fill: "#fff5f5",
          stroke: Pt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "18",
          y: "40",
          width: "36",
          height: "3",
          rx: "1",
          fill: "#ccd2d9",
          stroke: Pt,
          strokeWidth: "1.5"
        })]
      })
    }
  },
  Droplets: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "28",
          y: "68",
          width: "8",
          height: "8",
          rx: "2",
          fill: "#c08c65",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "74",
          y: "68",
          width: "8",
          height: "8",
          rx: "2",
          fill: "#c08c65",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "22",
          y: "38",
          width: "66",
          height: "32",
          rx: "6",
          fill: "#fad2cc",
          stroke: Ht,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M48 52 C46 50, 43 50, 43 53 C43 56, 48 59, 48 59 C48 59, 53 56, 53 53 C53 50, 50 50, 48 52 Z",
          fill: "#ffc6be",
          stroke: Ht,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M62 52 C60 50, 57 50, 57 53 C57 56, 62 59, 62 59 C62 59, 67 56, 67 53 C67 50, 64 50, 62 52 Z",
          fill: "#ffc6be",
          stroke: Ht,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M26 32 C32 26, 44 26, 50 32 C56 26, 68 26, 74 32 C80 34, 76 40, 70 40 L40 40 C34 40, 30 34, 26 32 Z",
          fill: "#fff5f5",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M50 28 Q50 20, 54 20 Q56 20, 56 22",
          fill: "none",
          stroke: "#ffd085",
          strokeWidth: "2.2",
          strokeLinecap: "round"
        }), t.jsx("circle", {
          cx: "50",
          cy: "24",
          r: "2.5",
          fill: "#ffd085",
          stroke: Ht,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "84",
          cy: "44",
          r: "4",
          fill: "none",
          stroke: "#c08c65",
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "80",
          y: "47",
          width: "8",
          height: "18",
          rx: "2",
          fill: "#fff5f5",
          stroke: Ht,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "84",
          y1: "52",
          x2: "84",
          y2: "60",
          stroke: "#ffc6be",
          strokeWidth: "2.5",
          strokeLinecap: "round"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "28",
          y: "68",
          width: "8",
          height: "8",
          rx: "2",
          fill: "#c08c65",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "74",
          y: "68",
          width: "8",
          height: "8",
          rx: "2",
          fill: "#c08c65",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "22",
          y: "38",
          width: "66",
          height: "32",
          rx: "6",
          fill: "#fca89f",
          stroke: Ht,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M26 32 C32 26, 44 26, 50 32 C56 26, 68 26, 74 32 L74 38 L26 38 Z",
          fill: "#fff5f5",
          stroke: Ht,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "30",
          y: "68",
          width: "8",
          height: "8",
          rx: "2",
          fill: "#c08c65",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "18",
          y: "38",
          width: "34",
          height: "32",
          rx: "6",
          fill: "#fad2cc",
          stroke: Ht,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M14 32 C18 28, 32 28, 36 32 L36 38 L14 38 Z",
          fill: "#fff5f5",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M28 28 Q28 22, 32 22",
          fill: "none",
          stroke: "#ffd085",
          strokeWidth: "2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "42",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "24",
          y: "6",
          width: "62",
          height: "32",
          rx: "6",
          fill: "#fcf2f6",
          opacity: "0.85"
        }), t.jsx("rect", {
          x: "26",
          y: "8",
          width: "58",
          height: "28",
          rx: "5",
          fill: "#e2eafc",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "68",
          y1: "8",
          x2: "78",
          y2: "36",
          stroke: "#fff",
          strokeWidth: "2",
          opacity: "0.6"
        }), t.jsx("line", {
          x1: "74",
          y1: "8",
          x2: "80",
          y2: "25",
          stroke: "#fff",
          strokeWidth: "1.5",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "14",
          y: "44",
          width: "82",
          height: "10",
          rx: "2",
          fill: "#ccd2d9",
          stroke: Ht,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M20 48 Q35 46, 50 51 Q68 46, 85 49",
          fill: "none",
          stroke: "#aab5c0",
          strokeWidth: "1.2",
          opacity: "0.5"
        }), t.jsx("rect", {
          x: "24",
          y: "40",
          width: "22",
          height: "5",
          rx: "1",
          fill: "#3a3542",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "64",
          y: "40",
          width: "22",
          height: "5",
          rx: "1",
          fill: "#3a3542",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M35 40 V30 H32",
          fill: "none",
          stroke: Ht,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }), t.jsx("path", {
          d: "M75 40 V30 H72",
          fill: "none",
          stroke: Ht,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "42",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "26",
          y: "8",
          width: "58",
          height: "28",
          rx: "5",
          fill: "#aab5c0",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "14",
          y: "44",
          width: "82",
          height: "10",
          rx: "2",
          fill: "#aab5c0",
          stroke: Ht,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "78",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "24",
          y1: "8",
          x2: "24",
          y2: "36",
          stroke: Ht,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "18",
          y: "44",
          width: "34",
          height: "10",
          rx: "2",
          fill: "#ccd2d9",
          stroke: Ht,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "22",
          y: "40",
          width: "16",
          height: "5",
          rx: "1",
          fill: "#3a3542",
          stroke: Ht,
          strokeWidth: "2"
        })]
      })
    }
  },
  Grid: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "26",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("path", {
          d: "M34 60 L34 26 C34 14, 76 14, 76 26 L76 60 Z",
          fill: "#fff5f5",
          stroke: Ft,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "34",
          y1: "36",
          x2: "76",
          y2: "36",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "34",
          y1: "48",
          x2: "76",
          y2: "48",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "38",
          y: "24",
          width: "6",
          height: "12",
          rx: "1.5",
          fill: "#fca89f",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "48",
          y: "22",
          width: "8",
          height: "14",
          rx: "2",
          fill: "#ffc6be",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "62",
          y: "26",
          width: "7",
          height: "10",
          rx: "1.5",
          fill: "#e5837a",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "40",
          y: "38",
          width: "10",
          height: "10",
          rx: "2",
          fill: "#fff",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "62",
          cy: "43",
          r: "5",
          fill: "#ffc6be",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "55",
          cy: "54",
          r: "2",
          fill: "#c08c65",
          stroke: Ft,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M48 55 C46 64, 64 64, 62 55 Z",
          fill: "#fad2cc",
          stroke: Ft,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M48 62 C46 68, 50 72, 51 68 Z",
          fill: "#fad2cc",
          stroke: Ft,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M62 62 C64 68, 60 72, 59 68 Z",
          fill: "#fad2cc",
          stroke: Ft,
          strokeWidth: "1.2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "26",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("path", {
          d: "M34 60 L34 26 C34 14, 76 14, 76 26 L76 60 Z",
          fill: "#fca89f",
          stroke: Ft,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "18",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "28",
          y: "20",
          width: "8",
          height: "40",
          rx: "2",
          fill: "#fff5f5",
          stroke: Ft,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M30 60 C28 66, 36 66, 34 60 Z",
          fill: "#fad2cc",
          stroke: Ft,
          strokeWidth: "1.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "32",
          y1: "16",
          x2: "32",
          y2: "76",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "78",
          y1: "16",
          x2: "78",
          y2: "76",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "35",
          y1: "16",
          x2: "35",
          y2: "76",
          stroke: Ft,
          strokeWidth: "1.5",
          opacity: "0.6"
        }), t.jsx("line", {
          x1: "75",
          y1: "16",
          x2: "75",
          y2: "76",
          stroke: Ft,
          strokeWidth: "1.5",
          opacity: "0.6"
        }), t.jsx("rect", {
          x: "30",
          y: "32",
          width: "50",
          height: "4",
          fill: "#3a3542",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "30",
          y: "52",
          width: "50",
          height: "4",
          fill: "#3a3542",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "30",
          y: "70",
          width: "50",
          height: "4",
          fill: "#3a3542",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "42",
          y: "20",
          width: "10",
          height: "12",
          rx: "1",
          fill: "#ccd2d9",
          stroke: Ft,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "47",
          y1: "20",
          x2: "44",
          y2: "10",
          stroke: Ft,
          strokeWidth: "1.2"
        }), t.jsx("line", {
          x1: "47",
          y1: "20",
          x2: "50",
          y2: "8",
          stroke: Ft,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "36",
          y: "44",
          width: "16",
          height: "8",
          rx: "1.5",
          fill: "#ccd2d9",
          stroke: Ft,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "56",
          y: "44",
          width: "16",
          height: "8",
          rx: "1.5",
          fill: "#aab5c0",
          stroke: Ft,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "36",
          y1: "48",
          x2: "52",
          y2: "48",
          stroke: Ft,
          strokeWidth: "1",
          opacity: "0.4"
        }), t.jsx("line", {
          x1: "56",
          y1: "48",
          x2: "72",
          y2: "48",
          stroke: Ft,
          strokeWidth: "1",
          opacity: "0.4"
        }), t.jsx("rect", {
          x: "48",
          y: "58",
          width: "14",
          height: "12",
          rx: "2",
          fill: "#5c8075",
          stroke: Ft,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "52",
          y: "55",
          width: "6",
          height: "3",
          rx: "0.5",
          fill: "#aab5c0",
          stroke: Ft,
          strokeWidth: "1.2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "32",
          y1: "16",
          x2: "32",
          y2: "76",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "78",
          y1: "16",
          x2: "78",
          y2: "76",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "32",
          y1: "34",
          x2: "78",
          y2: "34",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "32",
          y1: "54",
          x2: "78",
          y2: "54",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "32",
          y1: "72",
          x2: "78",
          y2: "72",
          stroke: Ft,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "26",
          y1: "16",
          x2: "26",
          y2: "76",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "44",
          y1: "16",
          x2: "44",
          y2: "76",
          stroke: Ft,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "24",
          y: "32",
          width: "22",
          height: "4",
          fill: "#3a3542",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "24",
          y: "52",
          width: "22",
          height: "4",
          fill: "#3a3542",
          stroke: Ft,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "24",
          y: "70",
          width: "22",
          height: "4",
          fill: "#3a3542",
          stroke: Ft,
          strokeWidth: "1.5"
        })]
      })
    }
  },
  Coffee: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "28",
          ry: "4.5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "32",
          y: "60",
          width: "46",
          height: "12",
          rx: "4",
          fill: "#fad2cc",
          stroke: zt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "36",
          y: "58",
          width: "38",
          height: "3",
          rx: "1",
          fill: "#ccd2d9",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M34 60 L34 26 C34 22, 76 22, 76 26 L76 60 Z",
          fill: "#fad2cc",
          stroke: zt,
          strokeWidth: "2.5"
        }), t.jsx("polygon", {
          points: "38,24 42,16 46,22",
          fill: "#fad2cc",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("polygon", {
          points: "72,24 68,16 64,22",
          fill: "#fad2cc",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "55",
          cy: "34",
          r: "6",
          fill: "#ffd085",
          stroke: zt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "55",
          y1: "34",
          x2: "52",
          y2: "30",
          stroke: zt,
          strokeWidth: "1.5",
          strokeLinecap: "round"
        }), t.jsx("rect", {
          x: "42",
          y: "44",
          width: "16",
          height: "5",
          fill: "#fff5f5",
          stroke: zt,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "58",
          y1: "46",
          x2: "74",
          y2: "46",
          stroke: zt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("rect", {
          x: "76",
          y: "52",
          width: "14",
          height: "14",
          rx: "3",
          fill: "#ffc6be",
          stroke: zt,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M90 55 C93 55, 93 63, 90 63",
          fill: "none",
          stroke: zt,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "78",
          cy: "51",
          r: "2",
          fill: "#ffc6be",
          stroke: zt,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "88",
          cy: "51",
          r: "2",
          fill: "#ffc6be",
          stroke: zt,
          strokeWidth: "1"
        }), t.jsx("path", {
          d: "M80 44 Q83 40, 80 37",
          fill: "none",
          stroke: zt,
          strokeWidth: "1.2",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M84 46 Q87 42, 84 39",
          fill: "none",
          stroke: zt,
          strokeWidth: "1.2",
          strokeLinecap: "round"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "28",
          ry: "4.5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "32",
          y: "60",
          width: "46",
          height: "12",
          rx: "4",
          fill: "#fca89f",
          stroke: zt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M34 60 L34 26 C34 22, 76 22, 76 26 L76 60 Z",
          fill: "#fca89f",
          stroke: zt,
          strokeWidth: "2.5"
        }), t.jsx("polygon", {
          points: "38,24 42,16 46,22",
          fill: "#fca89f",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("polygon", {
          points: "72,24 68,16 64,22",
          fill: "#fca89f",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "42",
          y: "32",
          width: "26",
          height: "28",
          rx: "2",
          fill: "#e2eafc",
          stroke: zt,
          strokeWidth: "2",
          opacity: "0.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "74",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "24",
          y: "60",
          width: "22",
          height: "12",
          rx: "4",
          fill: "#fad2cc",
          stroke: zt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M26 60 L26 26 C26 22, 44 22, 44 26 L44 60 Z",
          fill: "#fad2cc",
          stroke: zt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "38",
          y1: "46",
          x2: "54",
          y2: "46",
          stroke: zt,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "30",
          ry: "4.5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "34",
          y: "20",
          width: "42",
          height: "52",
          rx: "3",
          fill: "#3a3542",
          stroke: zt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "38",
          y: "24",
          width: "34",
          height: "44",
          rx: "1.5",
          fill: "#ccd2d9",
          stroke: zt,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "42",
          y: "28",
          width: "26",
          height: "10",
          rx: "1",
          fill: "#3a3542",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "48",
          cy: "33",
          r: "1",
          fill: "#ffc6be"
        }), t.jsx("circle", {
          cx: "55",
          cy: "33",
          r: "1",
          fill: "#b4dbb6"
        }), t.jsx("circle", {
          cx: "62",
          cy: "33",
          r: "1",
          fill: "#fff"
        }), t.jsx("rect", {
          x: "50",
          y: "44",
          width: "10",
          height: "4",
          rx: "1",
          fill: "#3a3542",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "53",
          y1: "48",
          x2: "53",
          y2: "51",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "57",
          y1: "48",
          x2: "57",
          y2: "51",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "38",
          y: "62",
          width: "34",
          height: "4",
          fill: "#aab5c0",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M50 56 L52 64 L58 64 L60 56 Z",
          fill: "#fff",
          opacity: "0.6",
          stroke: zt,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M52 59 L53 63 L57 63 L58 59 Z",
          fill: "#dfbe9f",
          opacity: "0.9"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "30",
          ry: "4.5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "34",
          y: "20",
          width: "42",
          height: "52",
          rx: "3",
          fill: "#3a3542",
          stroke: zt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "74",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "22",
          y: "20",
          width: "26",
          height: "52",
          rx: "3",
          fill: "#3a3542",
          stroke: zt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "44",
          y: "44",
          width: "4",
          height: "4",
          rx: "0.5",
          fill: "#aab5c0",
          stroke: zt,
          strokeWidth: "1.5"
        })]
      })
    }
  },
  WashingMachine: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "24",
          y: "24",
          width: "62",
          height: "48",
          rx: "8",
          fill: "#fad2cc",
          stroke: Ot,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "30",
          y: "28",
          width: "50",
          height: "8",
          rx: "2",
          fill: "#fff5f5",
          stroke: Ot,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "36",
          cy: "32",
          r: "2.5",
          fill: "#ffd085",
          stroke: Ot,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "68",
          cy: "32",
          r: "1.2",
          fill: "#b4dbb6"
        }), t.jsx("circle", {
          cx: "72",
          cy: "32",
          r: "1.2",
          fill: "#b4dbb6"
        }), t.jsx("circle", {
          cx: "55",
          cy: "53",
          r: "14",
          fill: "#e2eafc",
          stroke: Ot,
          strokeWidth: "2.2"
        }), t.jsx("circle", {
          cx: "55",
          cy: "53",
          r: "10",
          fill: "#aab5c0",
          opacity: "0.4"
        }), t.jsx("polygon", {
          points: "42,42 46,36 49,41",
          fill: "#fff5f5",
          stroke: Ot,
          strokeWidth: "1.5"
        }), t.jsx("polygon", {
          points: "68,42 64,36 61,41",
          fill: "#fff5f5",
          stroke: Ot,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "34",
          y: "14",
          width: "14",
          height: "10",
          rx: "1",
          fill: "#fff5f5",
          stroke: Ot,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M34 20 Q37 22, 41 20 Q45 22, 48 20",
          fill: "none",
          stroke: "#e5837a",
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "41",
          cy: "17",
          r: "1.5",
          fill: "#e5837a"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "34",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "24",
          y: "24",
          width: "62",
          height: "48",
          rx: "8",
          fill: "#fca89f",
          stroke: Ot,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M72 44 Q80 50, 72 58 Q64 66, 50 68",
          fill: "none",
          stroke: Ot,
          strokeWidth: "2",
          strokeLinecap: "round"
        }), t.jsx("rect", {
          x: "34",
          y: "14",
          width: "14",
          height: "10",
          rx: "1",
          fill: "#fff5f5",
          stroke: Ot,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "20",
          y: "24",
          width: "30",
          height: "48",
          rx: "8",
          fill: "#fad2cc",
          stroke: Ot,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M50 42 C54 42, 54 64, 50 64 Z",
          fill: "#fff5f5",
          stroke: Ot,
          strokeWidth: "2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "24",
          y: "22",
          width: "62",
          height: "50",
          rx: "3",
          fill: "#ccd2d9",
          stroke: Ot,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "30",
          y: "28",
          width: "50",
          height: "3",
          fill: "#3a3542",
          stroke: Ot,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "36",
          y: "29",
          width: "16",
          height: "1",
          fill: "#84bdff"
        }), t.jsx("circle", {
          cx: "55",
          cy: "52",
          r: "15",
          fill: "#3a3542",
          stroke: Ot,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "50",
          y1: "42",
          x2: "60",
          y2: "62",
          stroke: "#fff",
          strokeWidth: "1.5",
          opacity: "0.3"
        }), t.jsx("rect", {
          x: "65",
          y: "49",
          width: "2",
          height: "6",
          fill: "#ccd2d9"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "24",
          y: "22",
          width: "62",
          height: "50",
          rx: "3",
          fill: "#aab5c0",
          stroke: Ot,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "30",
          y: "32",
          width: "50",
          height: "34",
          fill: "#3a3542",
          stroke: Ot,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "22",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "20",
          y: "22",
          width: "30",
          height: "50",
          rx: "3",
          fill: "#ccd2d9",
          stroke: Ot,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "50",
          y1: "26",
          x2: "50",
          y2: "68",
          stroke: Ot,
          strokeWidth: "2"
        })]
      })
    }
  },
  Flower: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("line", {
          x1: "28",
          y1: "16",
          x2: "20",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "28",
          y1: "16",
          x2: "38",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "82",
          y1: "16",
          x2: "74",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "82",
          y1: "16",
          x2: "90",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "24",
          y1: "16",
          x2: "86",
          y2: "16",
          stroke: Et,
          strokeWidth: "2.5",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "36",
          y1: "16",
          x2: "36",
          y2: "44",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "74",
          y1: "16",
          x2: "74",
          y2: "44",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "30",
          y: "44",
          width: "50",
          height: "4",
          rx: "1",
          fill: "#fff5f5",
          stroke: Et,
          strokeWidth: "2"
        }), t.jsx("rect", {
          x: "36",
          y: "34",
          width: "10",
          height: "10",
          rx: "1.5",
          fill: "#ffc6be",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "41",
          cy: "32",
          r: "3.5",
          fill: "#b4dbb6",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "64",
          y: "34",
          width: "10",
          height: "10",
          rx: "1.5",
          fill: "#ffc6be",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "69",
          cy: "32",
          r: "3.5",
          fill: "#b4dbb6",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("line", {
          x1: "55",
          y1: "16",
          x2: "55",
          y2: "28",
          stroke: Et,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M55 35 C53 33, 50 33, 50 36 C50 39, 55 42, 55 42 C55 42, 60 39, 60 36 C60 33, 57 33, 55 35 Z",
          fill: "#e5837a",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M53 28 Q55 24, 58 28",
          fill: "none",
          stroke: "#b4dbb6",
          strokeWidth: "1.5"
        }), t.jsx("circle", {
          cx: "55",
          cy: "28",
          r: "1.5",
          fill: "#ffc6be"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "36",
          ry: "5",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("line", {
          x1: "28",
          y1: "16",
          x2: "20",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "28",
          y1: "16",
          x2: "38",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "82",
          y1: "16",
          x2: "74",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "82",
          y1: "16",
          x2: "90",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "24",
          y1: "16",
          x2: "86",
          y2: "16",
          stroke: Et,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "30",
          y: "44",
          width: "50",
          height: "4",
          rx: "1",
          fill: "#fff5f5",
          stroke: Et,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("line", {
          x1: "35",
          y1: "16",
          x2: "20",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "35",
          y1: "16",
          x2: "50",
          y2: "74",
          stroke: Et,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "32",
          y: "44",
          width: "6",
          height: "4",
          rx: "1",
          fill: "#fff5f5",
          stroke: Et,
          strokeWidth: "2"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "38",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "36",
          y1: "14",
          x2: "28",
          y2: "74",
          stroke: Et,
          strokeWidth: "3.2",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "74",
          y1: "14",
          x2: "82",
          y2: "74",
          stroke: Et,
          strokeWidth: "3.2",
          strokeLinecap: "round"
        }), t.jsx("rect", {
          x: "34",
          y: "24",
          width: "42",
          height: "4",
          fill: "#3a3542",
          stroke: Et,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "44",
          cy: "19",
          r: "3",
          fill: "#5c8075",
          stroke: Et,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "66",
          cy: "20",
          r: "2.5",
          fill: "#5c8075",
          stroke: Et,
          strokeWidth: "1.2"
        }), t.jsx("rect", {
          x: "30",
          y: "44",
          width: "50",
          height: "4",
          fill: "#3a3542",
          stroke: Et,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "36",
          y: "36",
          width: "10",
          height: "8",
          fill: "#dfbe9f",
          stroke: Et,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "41",
          cy: "33",
          r: "3",
          fill: "#5c8075"
        }), t.jsx("rect", {
          x: "62",
          y: "36",
          width: "8",
          height: "8",
          fill: "#dfbe9f",
          stroke: Et,
          strokeWidth: "1.2"
        }), t.jsx("circle", {
          cx: "66",
          cy: "33",
          r: "2.5",
          fill: "#5c8075"
        }), t.jsx("rect", {
          x: "25",
          y: "66",
          width: "60",
          height: "4",
          fill: "#3a3542",
          stroke: Et,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "32",
          y: "58",
          width: "12",
          height: "8",
          fill: "#dfbe9f",
          stroke: Et,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M38 58 Q34 50, 38 46 Q42 50, 38 58",
          fill: "#5c8075",
          stroke: Et,
          strokeWidth: "1"
        }), t.jsx("rect", {
          x: "64",
          y: "58",
          width: "12",
          height: "8",
          fill: "#dfbe9f",
          stroke: Et,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M70 58 Q66 50, 70 46 Q74 50, 70 58",
          fill: "#5c8075",
          stroke: Et,
          strokeWidth: "1"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "76",
          rx: "38",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "36",
          y1: "14",
          x2: "28",
          y2: "74",
          stroke: Et,
          strokeWidth: "3.2"
        }), t.jsx("line", {
          x1: "74",
          y1: "14",
          x2: "82",
          y2: "74",
          stroke: Et,
          strokeWidth: "3.2"
        }), t.jsx("rect", {
          x: "34",
          y: "24",
          width: "42",
          height: "4",
          fill: "#dfbe9f",
          stroke: Et,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "30",
          y: "44",
          width: "50",
          height: "4",
          fill: "#dfbe9f",
          stroke: Et,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "25",
          y: "66",
          width: "60",
          height: "4",
          fill: "#dfbe9f",
          stroke: Et,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "20",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "32",
          y1: "14",
          x2: "24",
          y2: "74",
          stroke: Et,
          strokeWidth: "3.2"
        }), t.jsx("rect", {
          x: "26",
          y: "24",
          width: "10",
          height: "4",
          fill: "#3a3542",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "23",
          y: "44",
          width: "16",
          height: "4",
          fill: "#3a3542",
          stroke: Et,
          strokeWidth: "1.5"
        }), t.jsx("rect", {
          x: "20",
          y: "66",
          width: "22",
          height: "4",
          fill: "#3a3542",
          stroke: Et,
          strokeWidth: "1.5"
        })]
      })
    }
  },
  Sunset: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "42",
          ry: "7",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M22 62 C14 62, 12 44, 24 38 C18 22, 44 14, 52 24 C64 14, 86 18, 84 34 C94 36, 94 58, 84 62 C88 74, 20 74, 22 62 Z",
          fill: "#fad2cc",
          stroke: Kt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M30 46 C34 40, 48 40, 52 46",
          fill: "none",
          stroke: "#ffc6be",
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M56 48 C60 42, 74 42, 78 48",
          fill: "none",
          stroke: "#ffc6be",
          strokeWidth: "2"
        }), t.jsx("path", {
          d: "M38 52 C38 72, 62 72, 62 52 Z",
          fill: "#fff9db",
          stroke: Kt,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "50",
          cy: "60",
          r: "3.5",
          fill: "#ffd085"
        }), t.jsx("polygon", {
          points: "52,60 55,59 52,62",
          fill: "#e5837a"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "74",
          rx: "42",
          ry: "7",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M22 62 C14 62, 12 44, 24 38 C18 22, 44 14, 52 24 C64 14, 86 18, 84 34 C94 36, 94 58, 84 62 C88 74, 20 74, 22 62 Z",
          fill: "#fca89f",
          stroke: Kt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "74",
          rx: "26",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("path", {
          d: "M14 62 C10 50, 18 24, 34 24 C44 24, 46 44, 56 46 C64 48, 62 64, 52 64 Z",
          fill: "#fad2cc",
          stroke: Kt,
          strokeWidth: "2.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "44",
          cy: "76",
          rx: "30",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "22",
          y1: "28",
          x2: "62",
          y2: "72",
          stroke: Kt,
          strokeWidth: "3",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "22",
          y1: "72",
          x2: "54",
          y2: "34",
          stroke: Kt,
          strokeWidth: "3",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "62",
          y1: "72",
          x2: "54",
          y2: "34",
          stroke: Kt,
          strokeWidth: "2.2"
        }), t.jsx("path", {
          d: "M22 28 C26 34, 32 58, 56 62",
          fill: "none",
          stroke: "#ccd2d9",
          strokeWidth: "6",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M22 28 C26 34, 32 58, 56 62",
          fill: "none",
          stroke: "#fff",
          strokeWidth: "4",
          strokeLinecap: "round"
        }), t.jsx("ellipse", {
          cx: "78",
          cy: "74",
          rx: "14",
          ry: "3",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "72",
          y1: "56",
          x2: "70",
          y2: "74",
          stroke: Kt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "84",
          y1: "56",
          x2: "86",
          y2: "74",
          stroke: Kt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "78",
          y1: "56",
          x2: "78",
          y2: "74",
          stroke: Kt,
          strokeWidth: "1.8"
        }), t.jsx("ellipse", {
          cx: "78",
          cy: "56",
          rx: "12",
          ry: "3",
          fill: "#3a3542",
          stroke: Kt,
          strokeWidth: "1.8"
        }), t.jsx("rect", {
          x: "74",
          y: "44",
          width: "6",
          height: "9",
          rx: "1",
          fill: "#fff",
          opacity: "0.6",
          stroke: Kt,
          strokeWidth: "1.2"
        }), t.jsx("path", {
          d: "M74 48 H80",
          stroke: "#ffd085",
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "75",
          y1: "44",
          x2: "73",
          y2: "39",
          stroke: "#e5837a",
          strokeWidth: "1"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "44",
          cy: "76",
          rx: "30",
          ry: "5",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "22",
          y1: "28",
          x2: "62",
          y2: "72",
          stroke: Kt,
          strokeWidth: "3"
        }), t.jsx("line", {
          x1: "22",
          y1: "72",
          x2: "54",
          y2: "34",
          stroke: Kt,
          strokeWidth: "3"
        }), t.jsx("line", {
          x1: "22",
          y1: "28",
          x2: "22",
          y2: "72",
          stroke: Kt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "62",
          y1: "28",
          x2: "62",
          y2: "72",
          stroke: Kt,
          strokeWidth: "2.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "76",
          rx: "22",
          ry: "4",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("line", {
          x1: "20",
          y1: "28",
          x2: "52",
          y2: "72",
          stroke: Kt,
          strokeWidth: "3"
        }), t.jsx("line", {
          x1: "20",
          y1: "72",
          x2: "44",
          y2: "34",
          stroke: Kt,
          strokeWidth: "3"
        }), t.jsx("path", {
          d: "M20 28 C24 34, 30 58, 48 64",
          fill: "none",
          stroke: "#ccd2d9",
          strokeWidth: "5",
          strokeLinecap: "round"
        })]
      })
    }
  },
  Image: {
    0: {
      Down: ({
        customImg: e
      }) => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("defs", {
          children: t.jsx("clipPath", {
            id: "paintCircleClip",
            children: t.jsx("circle", {
              cx: "55",
              cy: "42",
              r: "20"
            })
          })
        }), t.jsx("circle", {
          cx: "55",
          cy: "42",
          r: "28",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("circle", {
          cx: "55",
          cy: "42",
          r: "26",
          fill: "#ffd085",
          stroke: Qt,
          strokeWidth: "2.5"
        }), t.jsx("circle", {
          cx: "55",
          cy: "42",
          r: "23",
          fill: "none",
          stroke: Qt,
          strokeWidth: "1.2",
          strokeDasharray: "3,3"
        }), t.jsx("circle", {
          cx: "55",
          cy: "42",
          r: "20",
          fill: "#fff5f5"
        }), e ? t.jsx("image", {
          href: e,
          x: "35",
          y: "22",
          width: "40",
          height: "40",
          clipPath: "url(#paintCircleClip)",
          preserveAspectRatio: "xMidYMid slice"
        }) : t.jsxs(t.Fragment, {
          children: [t.jsx("circle", {
            cx: "55",
            cy: "45",
            r: "7",
            fill: "#fca89f"
          }), t.jsx("circle", {
            cx: "46",
            cy: "38",
            r: "3",
            fill: "#fca89f"
          }), t.jsx("circle", {
            cx: "55",
            cy: "34",
            r: "3.5",
            fill: "#fca89f"
          }), t.jsx("circle", {
            cx: "64",
            cy: "38",
            r: "3",
            fill: "#fca89f"
          })]
        }), t.jsx("circle", {
          cx: "55",
          cy: "42",
          r: "20",
          fill: "none",
          stroke: Qt,
          strokeWidth: "2"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("circle", {
          cx: "55",
          cy: "42",
          r: "28",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("circle", {
          cx: "55",
          cy: "42",
          r: "26",
          fill: "#c08c65",
          stroke: Qt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M42 34 L55 24 L68 34",
          fill: "none",
          stroke: Qt,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "55",
          cy: "24",
          r: "2",
          fill: "#ffd085",
          stroke: Qt,
          strokeWidth: "1"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("rect", {
          x: "32",
          y: "16",
          width: "6",
          height: "52",
          rx: "2.5",
          fill: "#ffd085",
          stroke: Qt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M30 30 L32 26",
          stroke: Qt,
          strokeWidth: "1.5"
        })]
      })
    },
    1: {
      Down: ({
        customImg: e
      }) => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("defs", {
          children: t.jsx("clipPath", {
            id: "paintRectClip",
            children: t.jsx("rect", {
              x: "32",
              y: "22",
              width: "46",
              height: "40"
            })
          })
        }), t.jsx("rect", {
          x: "26",
          y: "16",
          width: "58",
          height: "52",
          rx: "2",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "28",
          y: "18",
          width: "54",
          height: "48",
          rx: "1",
          fill: "#3a3542",
          stroke: Qt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "32",
          y: "22",
          width: "46",
          height: "40",
          fill: "#fff"
        }), e ? t.jsx("image", {
          href: e,
          x: "32",
          y: "22",
          width: "46",
          height: "40",
          clipPath: "url(#paintRectClip)",
          preserveAspectRatio: "xMidYMid slice"
        }) : t.jsxs(t.Fragment, {
          children: [t.jsx("polygon", {
            points: "36,58 52,30 68,58",
            fill: "#ccd2d9"
          }), t.jsx("polygon", {
            points: "44,58 58,40 72,58",
            fill: "#aab5c0"
          }), t.jsx("circle", {
            cx: "52",
            cy: "34",
            r: "4",
            fill: "#3a3542"
          })]
        }), t.jsx("rect", {
          x: "32",
          y: "22",
          width: "46",
          height: "40",
          fill: "none",
          stroke: Qt,
          strokeWidth: "1.8"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("rect", {
          x: "26",
          y: "16",
          width: "58",
          height: "52",
          rx: "2",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "28",
          y: "18",
          width: "54",
          height: "48",
          rx: "1",
          fill: "#3a3542",
          stroke: Qt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "38",
          y1: "30",
          x2: "72",
          y2: "30",
          stroke: Qt,
          strokeWidth: "1.5"
        })]
      }),
      Side: () => t.jsx("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: t.jsx("rect", {
          x: "33",
          y: "18",
          width: "4",
          height: "48",
          rx: "0.5",
          fill: "#3a3542",
          stroke: Qt,
          strokeWidth: "2.5"
        })
      })
    }
  },
  Maximize2: {
    0: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "46",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("path", {
          d: "M18 76 L18 36 C18 16, 92 16, 92 36 L92 76 Z",
          fill: "#fff5f5",
          stroke: Vt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M22 74 L22 36 C22 20, 88 20, 88 36 L88 74 Z",
          fill: "#e2eafc",
          stroke: Vt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "38",
          y1: "28",
          x2: "62",
          y2: "66",
          stroke: "#fff",
          strokeWidth: "2.5",
          opacity: "0.6"
        }), t.jsx("line", {
          x1: "48",
          y1: "28",
          x2: "68",
          y2: "58",
          stroke: "#fff",
          strokeWidth: "1.5",
          opacity: "0.6"
        }), t.jsx("line", {
          x1: "55",
          y1: "20",
          x2: "55",
          y2: "75",
          stroke: Vt,
          strokeWidth: "2"
        }), t.jsx("line", {
          x1: "22",
          y1: "48",
          x2: "88",
          y2: "48",
          stroke: Vt,
          strokeWidth: "1.5"
        }), t.jsx("path", {
          d: "M22 20 Q32 30, 24 74 L22 74 Z",
          fill: "#fca89f",
          stroke: Vt,
          strokeWidth: "1.8"
        }), t.jsx("path", {
          d: "M88 20 Q78 30, 84 74 L88 74 Z",
          fill: "#fca89f",
          stroke: Vt,
          strokeWidth: "1.8"
        }), t.jsx("circle", {
          cx: "28",
          cy: "46",
          r: "2",
          fill: "#ffc6be",
          stroke: Vt,
          strokeWidth: "1"
        }), t.jsx("circle", {
          cx: "82",
          cy: "46",
          r: "2",
          fill: "#ffc6be",
          stroke: Vt,
          strokeWidth: "1"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "46",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("path", {
          d: "M18 76 L18 36 C18 16, 92 16, 92 36 L92 76 Z",
          fill: "#fff5f5",
          stroke: Vt,
          strokeWidth: "2.5"
        }), t.jsx("line", {
          x1: "55",
          y1: "20",
          x2: "55",
          y2: "75",
          stroke: Vt,
          strokeWidth: "2.2"
        }), t.jsx("rect", {
          x: "52",
          y: "44",
          width: "6",
          height: "8",
          rx: "1.5",
          fill: "#ffd085",
          stroke: Vt,
          strokeWidth: "1.5"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "78",
          rx: "20",
          ry: "3",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "30",
          y: "16",
          width: "8",
          height: "60",
          rx: "2",
          fill: "#fff5f5",
          stroke: Vt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M30 20 Q24 38, 28 76 Z",
          fill: "#fca89f",
          stroke: Vt,
          strokeWidth: "1.5"
        })]
      })
    },
    1: {
      Down: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "82",
          rx: "53",
          ry: "3",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "4",
          y: "2",
          width: "102",
          height: "80",
          fill: "#3a3542",
          stroke: Vt,
          strokeWidth: "2.5",
          rx: "1.5"
        }), t.jsx("rect", {
          x: "7",
          y: "5",
          width: "96",
          height: "74",
          fill: "#ecf3f7",
          stroke: Vt,
          strokeWidth: "1.8"
        }), t.jsx("line", {
          x1: "25",
          y1: "5",
          x2: "85",
          y2: "79",
          stroke: "#fff",
          strokeWidth: "3",
          opacity: "0.6"
        }), t.jsx("line", {
          x1: "45",
          y1: "5",
          x2: "95",
          y2: "68",
          stroke: "#fff",
          strokeWidth: "1.8",
          opacity: "0.6"
        }), t.jsx("line", {
          x1: "10",
          y1: "12",
          x2: "60",
          y2: "79",
          stroke: "#fff",
          strokeWidth: "1.8",
          opacity: "0.4"
        }), t.jsx("line", {
          x1: "55",
          y1: "5",
          x2: "55",
          y2: "79",
          stroke: Vt,
          strokeWidth: "1.8"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "82",
          rx: "53",
          ry: "3",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "4",
          y: "2",
          width: "102",
          height: "80",
          fill: "#3a3542",
          stroke: Vt,
          strokeWidth: "2.5",
          rx: "1.5"
        }), t.jsx("line", {
          x1: "55",
          y1: "2",
          x2: "55",
          y2: "82",
          stroke: Vt,
          strokeWidth: "2"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "82",
          rx: "22",
          ry: "3",
          fill: "rgba(110,85,89,0.15)"
        }), t.jsx("rect", {
          x: "33",
          y: "2",
          width: "4",
          height: "80",
          fill: "#3a3542",
          stroke: Vt,
          strokeWidth: "2.5"
        })]
      })
    }
  },
  Camera: {
    0: {
      Down: ({
        customImg: e
      }) => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("defs", {
          children: t.jsx("clipPath", {
            id: "frameHeartClip",
            children: t.jsx("path", {
              d: "M55,27 C47,16 31,18 31,34 C31,48 51,62 55,66 C59,62 79,48 79,34 C79,18 63,16 55,27 Z"
            })
          })
        }), t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "3.5",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("path", {
          d: "M55,22 C45,10 25,12 25,32 C25,52 50,68 55,72 C60,68 85,52 85,32 C85,12 65,10 55,22 Z",
          fill: "#ffccd5",
          stroke: Gt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M55,27 C47,16 31,18 31,34 C31,48 51,62 55,66 C59,62 79,48 79,34 C79,18 63,16 55,27 Z",
          fill: "#fff5f5"
        }), e ? t.jsx("image", {
          href: e,
          x: "31",
          y: "14",
          width: "48",
          height: "54",
          clipPath: "url(#frameHeartClip)",
          preserveAspectRatio: "xMidYMid slice"
        }) : t.jsxs("g", {
          clipPath: "url(#frameHeartClip)",
          children: [t.jsx("circle", {
            cx: "48",
            cy: "36",
            r: "5",
            fill: "#f8cd89",
            stroke: Gt,
            strokeWidth: "1.2"
          }), t.jsx("circle", {
            cx: "62",
            cy: "36",
            r: "5",
            fill: "#f8cd89",
            stroke: Gt,
            strokeWidth: "1.2"
          }), t.jsx("circle", {
            cx: "55",
            cy: "42",
            r: "9",
            fill: "#f8cd89",
            stroke: Gt,
            strokeWidth: "1.5"
          }), t.jsx("circle", {
            cx: "55",
            cy: "44",
            r: "2.5",
            fill: "#fff"
          }), t.jsx("circle", {
            cx: "55",
            cy: "44",
            r: "1",
            fill: Gt
          }), t.jsx("circle", {
            cx: "51",
            cy: "41",
            r: "0.8",
            fill: Gt
          }), t.jsx("circle", {
            cx: "59",
            cy: "41",
            r: "0.8",
            fill: Gt
          }), t.jsx("circle", {
            cx: "49",
            cy: "44",
            r: "1.2",
            fill: "#fca89f"
          }), t.jsx("circle", {
            cx: "61",
            cy: "44",
            r: "1.2",
            fill: "#fca89f"
          })]
        }), t.jsx("path", {
          d: "M55,27 C47,16 31,18 31,34 C31,48 51,62 55,66 C59,62 79,48 79,34 C79,18 63,16 55,27 Z",
          fill: "none",
          stroke: Gt,
          strokeWidth: "1.8"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "36",
          ry: "3.5",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("path", {
          d: "M55,22 C45,10 25,12 25,32 C25,52 50,68 55,72 C60,68 85,52 85,32 C85,12 65,10 55,22 Z",
          fill: "#a06c45",
          stroke: Gt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M55,42 L55,75 L45,75 Z",
          fill: "#805030",
          stroke: Gt,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "78",
          rx: "15",
          ry: "3",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("line", {
          x1: "38",
          y1: "20",
          x2: "30",
          y2: "70",
          stroke: "#ffccd5",
          strokeWidth: "6",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "38",
          y1: "20",
          x2: "30",
          y2: "70",
          stroke: Gt,
          strokeWidth: "2",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M34,42 L42,70 L30,70",
          fill: "none",
          stroke: Gt,
          strokeWidth: "2"
        })]
      })
    },
    1: {
      Down: ({
        customImg: e
      }) => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("defs", {
          children: t.jsx("clipPath", {
            id: "frameRectClip",
            children: t.jsx("rect", {
              x: "40",
              y: "25",
              width: "30",
              height: "38"
            })
          })
        }), t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "38",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "30",
          y: "15",
          width: "50",
          height: "58",
          rx: "2",
          fill: "#e8d8c8",
          stroke: Gt,
          strokeWidth: "2.5"
        }), t.jsx("rect", {
          x: "36",
          y: "21",
          width: "38",
          height: "46",
          fill: "#fff",
          stroke: Gt,
          strokeWidth: "1.5"
        }), e ? t.jsx("image", {
          href: e,
          x: "40",
          y: "25",
          width: "30",
          height: "38",
          clipPath: "url(#frameRectClip)",
          preserveAspectRatio: "xMidYMid slice"
        }) : t.jsxs("g", {
          clipPath: "url(#frameRectClip)",
          children: [t.jsx("circle", {
            cx: "55",
            cy: "38",
            r: "5",
            fill: "#fca89f",
            opacity: "0.8"
          }), t.jsx("path", {
            d: "M40,54 L50,44 L58,51 L68,46 L68,58 L40,58 Z",
            fill: "#ccd2d9"
          }), t.jsx("path", {
            d: "M45,56 L52,48 L58,54 L62,50 L68,56 L68,58 L45,58 Z",
            fill: "#aab5c0"
          })]
        }), t.jsx("rect", {
          x: "40",
          y: "25",
          width: "30",
          height: "38",
          fill: "none",
          stroke: Gt,
          strokeWidth: "1.5"
        })]
      }),
      Up: () => t.jsxs("svg", {
        viewBox: "0 0 110 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "55",
          cy: "78",
          rx: "38",
          ry: "4",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("rect", {
          x: "30",
          y: "15",
          width: "50",
          height: "58",
          rx: "2",
          fill: "#8a7560",
          stroke: Gt,
          strokeWidth: "2.5"
        }), t.jsx("path", {
          d: "M50,40 L50,73 L42,73",
          fill: "#6a5540",
          stroke: Gt,
          strokeWidth: "1.8"
        })]
      }),
      Side: () => t.jsxs("svg", {
        viewBox: "0 0 70 85",
        className: "hl-art",
        children: [t.jsx("ellipse", {
          cx: "35",
          cy: "78",
          rx: "15",
          ry: "3",
          fill: "rgba(110,85,89,0.12)"
        }), t.jsx("line", {
          x1: "38",
          y1: "18",
          x2: "30",
          y2: "72",
          stroke: "#e8d8c8",
          strokeWidth: "6",
          strokeLinecap: "round"
        }), t.jsx("line", {
          x1: "38",
          y1: "18",
          x2: "30",
          y2: "72",
          stroke: Gt,
          strokeWidth: "2",
          strokeLinecap: "round"
        }), t.jsx("path", {
          d: "M34,40 L42,72 L30,72",
          fill: "none",
          stroke: Gt,
          strokeWidth: "2"
        })]
      })
    }
  }
};
const Yt = ({
  iconKey: e,
  rotate: s,
  variant: r = 0,
  customImg: i = null
}) => {
  const l = Jt[e] || Jt.Package;
  const o = l[r] || l[0] || l;
  let a = o.Down;
  let c = false;
  if (s === 180) {
    a = o.Up;
  } else if (s === 270) {
    a = o.Side;
  } else if (s === 90) {
    a = o.Side;
    c = true;
  }
  return t.jsx("div", {
    style: c ? {
      transform: "scaleX(-1)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      width: "100%",
      height: "100%"
    } : {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      width: "100%",
      height: "100%"
    },
    className: "hl-art-wrapper",
    children: t.jsx(a, {
      customImg: i
    })
  });
};
const qt = ({
  sticker: s,
  containerRef: r,
  editMode: i,
  active: l,
  t: o,
  busy: a,
  onUploadImg: c,
  onGenerateImg: h,
  onClearStickerImg: n,
  onCloseEditSticker: d,
  walking: x,
  avatarSrc: f,
  label: k,
  onMove: y,
  onRemove: j,
  onActivate: g,
  activityBadge: u
}) => {
  const p = e.useRef(false);
  const m = e.useRef(false);
  const w = e.useRef({
    x: 0,
    y: 0
  });
  const Z = e.useCallback(e => {
    if (i) {
      e.stopPropagation();
      p.current = true;
      m.current = false;
      w.current = {
        x: e.clientX,
        y: e.clientY
      };
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (t) {}
    }
  }, [i]);
  const $ = e.useCallback(e => {
    var t;
    if (!p.current || !i) {
      return;
    }
    const l = (t = r == null ? undefined : r.current) == null ? undefined : t.getBoundingClientRect();
    if (!l || !l.width || !l.height) {
      return;
    }
    const o = e.clientX - w.current.x;
    const a = e.clientY - w.current.y;
    if (Math.sqrt(o * o + a * a) < 4) {
      return;
    }
    m.current = true;
    const {
      x: c,
      y: h
    } = Ce(l, e.clientX, e.clientY);
    if (y != null) {
      y(s.id, {
        x: c,
        y: h
      });
    }
  }, [i, r, y, s.id]);
  const D = e.useCallback(e => {
    if (p.current) {
      p.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (t) {}
    }
  }, []);
  const U = e.useCallback(e => {
    e.stopPropagation();
    if (!m.current && g != null) {
      g(s);
    }
  }, [g, s]);
  const _ = e.useCallback(e => {
    e.stopPropagation();
    const t = s.rotate || 0;
    const r = {
      0: 90,
      90: 180,
      180: 270,
      270: 0
    };
    const i = r[t] !== undefined ? r[t] : 90;
    if (y != null) {
      y(s.id, {
        rotate: i
      });
    }
  }, [s.rotate, s.id, y]);
  const T = e.useCallback((e, t) => {
    e.stopPropagation();
    const r = s.scale || 1;
    const i = Math.min(2, Math.max(0.5, r + t));
    if (y != null) {
      y(s.id, {
        scale: parseFloat(i.toFixed(1))
      });
    }
  }, [s.scale, s.id, y]);
  const A = e.useCallback(e => {
    e.stopPropagation();
    const t = (s.variant || 0) === 0 ? 1 : 0;
    if (y != null) {
      y(s.id, {
        variant: t
      });
    }
  }, [s.variant, s.id, y]);
  const R = e.useCallback(e => {
    e.stopPropagation();
    if (c != null) {
      c(s.id);
    }
  }, [s.id, c]);
  const P = e.useCallback(e => {
    e.stopPropagation();
    if (h != null) {
      h(s.id);
    }
  }, [s.id, h]);
  const H = e.useCallback(e => {
    e.stopPropagation();
    if (n != null) {
      n(s.id);
    }
  }, [s.id, n]);
  const F = e.useCallback(e => {
    e.stopPropagation();
    if (j != null) {
      j(s.id);
    }
    if (d != null) {
      d();
    }
  }, [s.id, j, d]);
  const z = e.useCallback(e => {
    e.stopPropagation();
    if (d != null) {
      d();
    }
  }, [d]);
  const O = s.kind === "occupant";
  const E = s.refId || s.icon;
  const K = E === "Image" || E === "Camera";
  const Q = !O && !!s.img && !K;
  const V = !O && (!s.img || K);
  const G = s.scale || 1;
  const J = E === "Rug";
  const Y = J ? 2 : Math.round((s.y ?? 0.5) * 1000) + (O ? 500 : 0);
  const q = (s.y ?? 0.5) < 0.25;
  return t.jsxs("div", {
    className: `hl-sticker ${O ? "hl-sticker-occ" : "hl-sticker-furn"} ${i ? "hl-sticker-edit" : ""} ${x ? "hl-sticker-walking" : ""} ${s.kind === "showcase" ? "hl-sticker-showcase" : ""} ${Q || V ? "hl-sticker-img" : ""} ${J ? "hl-sticker-rug" : ""} ${E ? `hl-sticker-${String(E).toLowerCase()}` : ""} ${l ? "active" : ""}`,
    style: {
      left: (s.x ?? 0.5) * 100 + "%",
      top: (s.y ?? 0.5) * 100 + "%",
      transform: `translate(-50%, -50%) scale(${G})${J ? ` rotate(${s.rotate || 0}deg)` : ""}`,
      zIndex: l ? 2000 : Y
    },
    onPointerDown: Z,
    onPointerMove: $,
    onPointerUp: D,
    onClick: U,
    children: [Q ? t.jsx("div", {
      className: "hl-sticker-furnimg",
      children: t.jsx("img", {
        src: s.img,
        alt: k || "",
        draggable: false
      })
    }) : V ? t.jsx("div", {
      className: "hl-sticker-art",
      style: s.tint ? {
        filter: s.tint
      } : undefined,
      children: t.jsx(Yt, {
        iconKey: E,
        rotate: s.rotate || 0,
        variant: s.variant || 0,
        customImg: K ? s.img : null
      })
    }) : t.jsxs("div", {
      className: "hl-sticker-body " + (u ? `hl-act-${u.actId || "idle"}` : ""),
      children: [u && t.jsxs("div", {
        className: "hl-act-badge",
        children: [t.jsx("span", {
          className: "hl-act-badge-emoji",
          children: u.emoji
        }), u.line ? t.jsx("span", {
          className: "hl-act-badge-line",
          children: u.line
        }) : null]
      }), f ? t.jsx("img", {
        className: "hl-sticker-avatar",
        src: f,
        alt: k || "",
        draggable: false
      }) : t.jsx(v, {
        size: 26,
        className: "hl-sticker-icon"
      })]
    }), k && O ? t.jsx("div", {
      className: "hl-sticker-label",
      children: k
    }) : null, i && l && t.jsxs("div", {
      className: "hl-sticker-dock " + (q ? "hl-sticker-dock-bottom" : ""),
      style: {
        transform: `translateX(-50%) scale(${1 / G})`
      },
      onClick: e => e.stopPropagation(),
      onPointerDown: e => e.stopPropagation(),
      children: [t.jsx("button", {
        className: "hl-dock-btn",
        onClick: e => T(e, -0.1),
        title: (o == null ? undefined : o("homelandFurnScale")) || "縮小",
        children: t.jsx(W, {
          size: 13
        })
      }), t.jsxs("span", {
        className: "hl-dock-scale-val",
        children: [Math.round(G * 100), "%"]
      }), t.jsx("button", {
        className: "hl-dock-btn",
        onClick: e => T(e, 0.1),
        title: (o == null ? undefined : o("homelandFurnScale")) || "放大",
        children: t.jsx(b, {
          size: 13
        })
      }), t.jsx("div", {
        className: "hl-dock-divider"
      }), t.jsx("button", {
        className: "hl-dock-btn",
        onClick: _,
        title: (o == null ? undefined : o("homelandFurnRotate")) || "旋轉",
        children: t.jsx(S, {
          size: 13
        })
      }), t.jsx("button", {
        className: "hl-dock-btn",
        onClick: A,
        title: (o == null ? undefined : o("homelandFurnStyle")) || "切換款式",
        children: t.jsx(N, {
          size: 13
        })
      }), t.jsx("div", {
        className: "hl-dock-divider"
      }), t.jsx("button", {
        className: "hl-dock-btn",
        onClick: R,
        title: (o == null ? undefined : o("homelandFurnUpload")) || "上傳圖片",
        children: t.jsx(C, {
          size: 13
        })
      }), t.jsx("button", {
        className: "hl-dock-btn",
        onClick: P,
        disabled: a,
        title: (o == null ? undefined : o("homelandFurnGenerate")) || "AI生成",
        children: t.jsx(M, {
          size: 13,
          className: a ? "hl-spin" : ""
        })
      }), !O && !!s.img && t.jsx("button", {
        className: "hl-dock-btn",
        onClick: H,
        title: (o == null ? undefined : o("homelandFurnClearImg")) || "還原SVG",
        children: t.jsx(L, {
          size: 13
        })
      }), t.jsx("div", {
        className: "hl-dock-divider"
      }), t.jsx("button", {
        className: "hl-dock-btn hl-dock-btn-del",
        onClick: F,
        title: (o == null ? undefined : o("homelandFurnDelete")) || "刪除",
        children: t.jsx(B, {
          size: 13
        })
      }), t.jsx("button", {
        className: "hl-dock-btn hl-dock-btn-ok",
        onClick: z,
        title: (o == null ? undefined : o("homelandEditDone")) || "確定",
        children: t.jsx(I, {
          size: 13
        })
      })]
    })]
  });
};
const Xt = ({
  room: s,
  stickers: r,
  editMode: i,
  t: l,
  profileUsers: o,
  characters: a,
  currentUserId: c,
  onMoveSticker: h,
  onRemoveSticker: n,
  onActivateSticker: d,
  onMoveUser: x,
  onEditFurniture: f,
  getBubbleText: k,
  onDecorate: y,
  activeEditSticker: j,
  busy: g,
  activityBadges: u,
  onUploadImg: p,
  onGenerateImg: m,
  onClearStickerImg: w,
  onCloseEditSticker: v
}) => {
  const W = e.useRef(null);
  const [b, S] = e.useState(null);
  const N = e.useRef(null);
  const [C, M] = e.useState(null);
  const L = e.useRef(null);
  const B = e.useMemo(() => e => {
    if (e.kind !== "occupant") {
      return {
        avatarSrc: null,
        label: null
      };
    }
    if (e.refType === "user") {
      const t = (o || []).find(t => String(t.uid || t.id) === String(e.refId)) || (o || []).find(e => String(e.uid || e.id) === String(c));
      return {
        avatarSrc: (t == null ? undefined : t.avatar) || null,
        label: (t == null ? undefined : t.name) || l("homelandMe")
      };
    }
    const t = (a || []).find(t => String(t.id) === String(e.refId));
    return {
      avatarSrc: (t == null ? undefined : t.image) || (t == null ? undefined : t.avatar) || null,
      label: (t == null ? undefined : t.name) || ""
    };
  }, [o, a, c, l]);
  const I = (r || []).filter(e => String(e.roomId) === String(s == null ? undefined : s.id));
  I.find(e => e.kind === "occupant" && e.refType === "user");
  e.useEffect(() => () => {
    if (N.current) {
      clearTimeout(N.current);
    }
    if (L.current) {
      clearTimeout(L.current);
    }
  }, []);
  const $ = e.useCallback((e, t, r) => {
    if (N.current) {
      clearTimeout(N.current);
    }
    if (x != null) {
      x(s == null ? undefined : s.id, e, t);
    }
    S({
      x: e,
      y: t,
      key: `${e}_${t}_${Date.now()}`
    });
    if (r) {
      N.current = setTimeout(r, 560);
    }
  }, [x, s == null ? undefined : s.id]);
  const D = e.useCallback((e, t) => {
    if (!t || !t.text) {
      return;
    }
    if (L.current) {
      clearTimeout(L.current);
    }
    M({
      x: e.x ?? 0.5,
      y: e.y ?? 0.5,
      text: t.text,
      avatar: t.avatar || null,
      name: t.name || "",
      key: `${e.id}_${Date.now()}`
    });
    const s = Math.min(8000, 3000 + t.text.length * 120);
    L.current = setTimeout(() => M(null), s);
  }, []);
  const U = e.useCallback(e => {
    var t;
    if (i) {
      return;
    }
    const s = (t = W.current) == null ? undefined : t.getBoundingClientRect();
    if (!s || !s.width || !s.height) {
      return;
    }
    const {
      x: r,
      y: l
    } = Ce(s, e.clientX, e.clientY);
    M(null);
    $(r, l, null);
  }, [i, $]);
  const _ = e.useCallback(e => {
    if (i) {
      if (e.kind !== "occupant") {
        if (f != null) {
          f(e);
        }
      }
      return;
    }
    if (e.kind === "occupant" && e.refType === "user") {
      return;
    }
    const t = e.x ?? 0.5;
    const s = Math.min(1, (e.y ?? 0.5) + 0.12);
    $(t, s, () => {
      const t = e.icon === "DoorClosed" || e.refId === "DoorClosed";
      if (e.kind === "showcase" || t) {
        if (d != null) {
          d(e);
        }
        return;
      }
      const s = k == null ? undefined : k(e);
      if (s && typeof s.then == "function") {
        s.then(t => D(e, t));
      } else if (s) {
        D(e, s);
      }
    });
  }, [i, $, d, f, k, D]);
  const T = !!(s == null ? undefined : s.bg);
  const A = (s == null ? undefined : s.wall) ? "" : `hl-wall-${(s == null ? undefined : s.wallStyle) || "cream"}`;
  const R = (s == null ? undefined : s.floor) ? "" : `hl-floor-${(s == null ? undefined : s.floorStyle) || "wood"}`;
  return t.jsxs("div", {
    className: `hl-room ${i ? "hl-room-edit" : "hl-room-play"} ${T ? "hl-room-fullbg" : `hl-room-themed hl-room-theme-${(s == null ? undefined : s.theme) || "living"}`}`,
    ref: W,
    style: T ? {
      backgroundImage: `url(${s.bg})`
    } : undefined,
    onClick: U,
    children: [!T && t.jsxs(t.Fragment, {
      children: [t.jsx("div", {
        className: `hl-layer hl-layer-wall ${A}`,
        style: (s == null ? undefined : s.wall) ? {
          backgroundImage: `url(${s.wall})`
        } : undefined
      }), t.jsx("div", {
        className: `hl-layer hl-layer-floor ${R}`,
        style: (s == null ? undefined : s.floor) ? {
          backgroundImage: `url(${s.floor})`
        } : undefined
      })]
    }), !i && b && t.jsx("span", {
      className: "hl-tap-mark",
      style: {
        left: b.x * 100 + "%",
        top: b.y * 100 + "%"
      }
    }, b.key), !i && C && t.jsxs("div", {
      className: "hl-bubble",
      style: {
        left: C.x * 100 + "%",
        top: C.y * 100 + "%"
      },
      children: [C.avatar && t.jsx("img", {
        className: "hl-bubble-avatar",
        src: C.avatar,
        alt: ""
      }), t.jsxs("div", {
        className: "hl-bubble-text",
        children: [C.name && t.jsx("span", {
          className: "hl-bubble-name",
          children: C.name
        }), C.text]
      })]
    }, C.key), I.map(e => {
      const {
        avatarSrc: s,
        label: r
      } = B(e);
      const o = e.kind === "occupant" && e.refType === "user";
      const a = j && j.id === e.id;
      const c = !i && u && e.kind === "occupant" && u[String(e.refId)] || null;
      return t.jsx(qt, {
        sticker: e,
        activityBadge: c,
        containerRef: W,
        editMode: i,
        active: a,
        t: l,
        busy: g,
        onUploadImg: p,
        onGenerateImg: m,
        onClearStickerImg: w,
        onCloseEditSticker: v,
        walking: !i && o,
        avatarSrc: s,
        label: r,
        onMove: h,
        onRemove: n,
        onActivate: _
      }, e.id);
    }), i && t.jsxs("button", {
      className: "hl-room-bgbtn glass",
      onClick: e => {
        e.stopPropagation();
        if (y != null) {
          y(s == null ? undefined : s.id);
        }
      },
      children: [t.jsx(Z, {
        size: 16
      }), " ", l("homelandDecorate")]
    })]
  });
};
const es = ({
  t: s,
  onClose: r
}) => {
  const i = e.useMemo(() => (() => {
    const e = Ne("cs_looted", []);
    const t = Ne("cs_dynamicLoot", {});
    if (!Array.isArray(e)) {
      return [];
    }
    const s = new Set();
    const r = [];
    for (const i of e) {
      if (!i || s.has(i)) {
        continue;
      }
      s.add(i);
      const e = t[i] || Se[i] || {};
      r.push({
        name: i,
        spec: e.spec || {},
        monologue: e.monologue || "",
        story: e.story || "",
        image: e.image || null
      });
    }
    return r;
  })(), []);
  const [l, o] = e.useState(null);
  return t.jsx("div", {
    className: "hl-modal-overlay",
    onClick: r,
    children: t.jsxs("div", {
      className: "hl-modal glass",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "hl-modal-head",
        children: [l ? t.jsx("button", {
          className: "hl-modal-back",
          onClick: () => o(null),
          children: t.jsx($, {
            size: 20
          })
        }) : t.jsx(D, {
          size: 20
        }), t.jsx("span", {
          className: "hl-modal-title",
          children: l ? l.name : s("homelandShowcaseTitle")
        }), t.jsx("button", {
          className: "hl-modal-close",
          onClick: r,
          children: t.jsx(m, {
            size: 20
          })
        })]
      }), l ? t.jsxs("div", {
        className: "hl-showcase-detail",
        children: [t.jsx("div", {
          className: "hl-showcase-detail-thumb",
          children: l.image ? t.jsx("img", {
            src: l.image,
            alt: l.name,
            draggable: false
          }) : t.jsx(D, {
            size: 56
          })
        }), Object.keys(l.spec || {}).length > 0 && t.jsx("div", {
          className: "hl-showcase-spec",
          children: Object.entries(l.spec).map(([e, s]) => t.jsxs("div", {
            className: "hl-showcase-spec-row",
            children: [t.jsx("span", {
              className: "hl-showcase-spec-k",
              children: e
            }), t.jsx("span", {
              className: "hl-showcase-spec-v",
              children: s
            })]
          }, e))
        }), l.monologue && t.jsx("p", {
          className: "hl-showcase-mono",
          children: l.monologue
        })]
      }) : i.length === 0 ? t.jsxs("div", {
        className: "hl-showcase-empty",
        children: [t.jsx(D, {
          size: 44
        }), t.jsx("p", {
          children: s("homelandShowcaseEmpty")
        })]
      }) : t.jsx("div", {
        className: "hl-showcase-grid",
        children: i.map((e, s) => t.jsxs("button", {
          className: "hl-showcase-card",
          onClick: () => o(e),
          children: [t.jsx("div", {
            className: "hl-showcase-thumb",
            children: e.image ? t.jsx("img", {
              src: e.image,
              alt: e.name,
              draggable: false
            }) : t.jsx(D, {
              size: 30
            })
          }), t.jsx("div", {
            className: "hl-showcase-name",
            children: e.name
          })]
        }, `${e.name}_${s}`))
      })]
    })
  });
};
const ts = ({
  t: s,
  characters: r,
  cohabitants: i,
  getInvitablePartnerIds: l,
  onInvite: o,
  onRemove: a,
  onClose: c
}) => {
  const [h, n] = e.useState(null);
  e.useEffect(() => {
    let e = true;
    l().then(t => {
      if (e) {
        n(t || []);
      }
    });
    return () => {
      e = false;
    };
  }, [l]);
  const d = new Set((i || []).map(String));
  const x = [...new Set([...(h || []).map(String), ...d])].map(e => (r || []).find(t => String(t.id) === String(e))).filter(Boolean);
  return t.jsx("div", {
    className: "hl-modal-overlay",
    onClick: c,
    children: t.jsxs("div", {
      className: "hl-modal glass",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "hl-modal-head",
        children: [t.jsx(U, {
          size: 20
        }), t.jsx("span", {
          className: "hl-modal-title",
          children: s("homelandInviteTitle")
        }), t.jsx("button", {
          className: "hl-modal-close",
          onClick: c,
          children: t.jsx(m, {
            size: 20
          })
        })]
      }), h === null ? t.jsx("div", {
        className: "hl-invite-empty",
        children: t.jsx("p", {
          children: s("valueLoading")
        })
      }) : x.length === 0 ? t.jsxs("div", {
        className: "hl-invite-empty",
        children: [t.jsx(U, {
          size: 40
        }), t.jsx("p", {
          children: s("homelandInviteEmpty")
        })]
      }) : t.jsx("div", {
        className: "hl-invite-list",
        children: x.map(e => {
          const r = d.has(String(e.id));
          return t.jsxs("div", {
            className: "hl-invite-row",
            children: [t.jsx("img", {
              className: "hl-invite-avatar",
              src: e.image || e.avatar || "",
              alt: e.name,
              draggable: false
            }), t.jsx("span", {
              className: "hl-invite-name",
              children: e.name
            }), r ? t.jsxs("button", {
              className: "hl-invite-btn hl-invite-btn-remove",
              onClick: () => a(e.id),
              children: [t.jsx(_, {
                size: 15
              }), " ", s("homelandInviteRemove")]
            }) : t.jsxs("button", {
              className: "hl-invite-btn",
              onClick: () => o(e.id),
              children: [t.jsx(T, {
                size: 15
              }), " ", s("homelandInviteAdd")]
            })]
          }, e.id);
        })
      })]
    })
  });
};
const ss = ({
  t: s,
  room: r,
  onSetStyle: i,
  onSetLayer: l,
  onClose: o
}) => {
  const [a, c] = e.useState("wall");
  const h = e.useRef(null);
  const n = a === "wall" ? We : be;
  const d = a === "wall" ? r == null ? undefined : r.wallStyle : r == null ? undefined : r.floorStyle;
  const x = a === "wall" ? !!(r == null ? undefined : r.wall) : !!(r == null ? undefined : r.floor);
  const f = a === "wall" ? "hl-wall" : "hl-floor";
  return t.jsx("div", {
    className: "hl-modal-overlay",
    onClick: o,
    children: t.jsxs("div", {
      className: "hl-modal",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "hl-modal-head",
        children: [t.jsxs("span", {
          className: "hl-modal-title",
          children: [s("homelandDecorate"), " · ", s(r == null ? undefined : r.nameKey)]
        }), t.jsx("button", {
          className: "hl-modal-close",
          onClick: o,
          children: t.jsx(m, {
            size: 20
          })
        })]
      }), t.jsxs("div", {
        className: "hl-deco-tabs",
        children: [t.jsx("button", {
          className: "hl-deco-tab " + (a === "wall" ? "active" : ""),
          onClick: () => c("wall"),
          children: s("homelandWall")
        }), t.jsx("button", {
          className: "hl-deco-tab " + (a === "floor" ? "active" : ""),
          onClick: () => c("floor"),
          children: s("homelandFloor")
        })]
      }), t.jsxs("div", {
        className: "hl-deco-body",
        children: [t.jsx("div", {
          className: "hl-deco-grid",
          children: n.map(e => t.jsxs("button", {
            className: "hl-deco-swatch " + (x || d !== e.id ? "" : "active"),
            onClick: () => i(r.id, a, e.id),
            children: [t.jsx("span", {
              className: `hl-deco-swatch-fill ${f}-${e.id}`
            }), t.jsx("span", {
              className: "hl-deco-swatch-label",
              children: s(e.labelKey)
            })]
          }, e.id))
        }), t.jsxs("button", {
          className: "hl-deco-upload",
          onClick: () => {
            var e;
            if ((e = h.current) == null) {
              return undefined;
            } else {
              return e.click();
            }
          },
          children: [t.jsx(C, {
            size: 15
          }), " ", s(a === "wall" ? "homelandUploadWall" : "homelandUploadFloor")]
        }), x && t.jsx("button", {
          className: "hl-deco-clear",
          onClick: () => i(r.id, a, r ? a === "wall" ? "cream" : "wood" : null),
          children: s("homelandFurnClearImg")
        })]
      }), t.jsx("input", {
        ref: h,
        type: "file",
        accept: "image/*",
        style: {
          display: "none"
        },
        onChange: e => {
          var t;
          const s = (t = e.target.files) == null ? undefined : t[0];
          e.target.value = "";
          if (!s) {
            return;
          }
          const i = new FileReader();
          i.onload = () => l(r.id, a, i.result);
          i.readAsDataURL(s);
        }
      })]
    })
  });
};
const rs = {
  Package: D,
  BedDouble: ye,
  Armchair: ke,
  Utensils: fe,
  Sprout: xe,
  Tv: de,
  Lamp: ne,
  Bath: he,
  DoorClosed: ce,
  BookOpen: ae,
  AppWindow: oe,
  Shirt: le,
  Table: ie,
  Refrigerator: re,
  CookingPot: se,
  ShowerHead: te,
  Droplets: ee,
  Grid: X,
  Coffee: q,
  WashingMachine: Y,
  Flower: J,
  Sunset: G,
  Image: V,
  Maximize2: p,
  Camera: E
};
const is = e => {
  var t;
  return ((t = ve.find(t => t.icon === e)) == null ? undefined : t.type) || "sofa";
};
const ls = () => {
  var r;
  var i;
  var l;
  var h;
  var j;
  var g;
  var p;
  const {
    currentScreen: m,
    showScreen: w
  } = n();
  const v = m === "monitor-screen";
  const {
    t: W
  } = d();
  const {
    profileUsers: b,
    safeCurrentProfileUserId: S,
    currentProfileUser: N,
    setProfileUsers: C,
    setCurrentProfileUserId: L
  } = s();
  const {
    characters: B
  } = x();
  const {
    activeChatIds: Z
  } = f();
  const [_, T] = e.useState(null);
  const [V, G] = e.useState(false);
  const [J, Y] = e.useState(false);
  const [q, X] = e.useState(null);
  const [ee, te] = e.useState(0);
  const [se, re] = e.useState(() => {
    try {
      const e = window.localStorage.getItem("cs_char_couples");
      if (e) {
        return JSON.parse(e);
      } else {
        return {};
      }
    } catch (e) {
      return {};
    }
  });
  const ie = we(null);
  const le = e.useMemo(() => {
    var e;
    if (!_) {
      return null;
    }
    if ((b || []).some(e => String(e.uid || e.id) === String(_))) {
      return _;
    }
    if ((((e = ie.homeland) == null ? undefined : e.cohabitants) || []).includes(String(_))) {
      return null;
    }
    const t = se[_];
    if (t) {
      return [String(_), String(t)].sort()[0];
    } else {
      return _;
    }
  }, [_, b, (r = ie.homeland) == null ? undefined : r.cohabitants, se]);
  const oe = e.useMemo(() => !!_ && le != null && !(b || []).some(e => String(e.uid || e.id) === String(_)), [_, le, b]);
  const ae = we(le, {
    allowGuestWrite: oe
  });
  const ce = _ ? ae : ie;
  const {
    homeland: he,
    loading: ne,
    level: de
  } = ce;
  const xe = ce.isVisiting;
  const fe = !_ || oe;
  const ke = _ ? ae : ie;
  const [ye, je] = e.useState("bedroom");
  const [ge, ue] = e.useState(false);
  const [pe, We] = e.useState(false);
  const [be, Se] = e.useState(false);
  const [Ne, Ce] = e.useState(null);
  const [Oe, Ee] = e.useState(null);
  const Ke = e.useRef(null);
  const [Qe, Ve] = e.useState(false);
  const [Ge, Je] = e.useState(false);
  const [Ye, qe] = e.useState("all");
  const Xe = e.useMemo(() => ["all", "living", "bedroom", "kitchen_bath", "decor_outdoor"], []);
  const et = e.useMemo(() => Ye === "all" ? ve : ve.filter(e => e.category === Ye), [Ye]);
  const tt = e.useMemo(() => Ne && (he == null ? undefined : he.stickers) ? he.stickers.find(e => e.id === Ne.id) || Ne : null, [he == null ? undefined : he.stickers, Ne]);
  e.useMemo(() => [{
    angle: 180,
    label: W("homelandDirUp"),
    icon: A
  }, {
    angle: 0,
    label: W("homelandDirDown"),
    icon: R
  }, {
    angle: 270,
    label: W("homelandDirLeft"),
    icon: P
  }, {
    angle: 90,
    label: W("homelandDirRight"),
    icon: H
  }], [W]);
  const ut = e.useCallback(e => {
    if (!N) {
      return false;
    }
    const t = N.balance || 0;
    return !(t < e) && !(C(s => s.map(s => s.uid === S || s.id === S ? {
      ...s,
      balance: t - e
    } : s)), 0);
  }, [N, S, C]);
  const wt = e.useCallback(e => {
    if (!N) {
      return false;
    }
    const t = N.balance || 0;
    C(s => s.map(s => s.uid === S || s.id === S ? {
      ...s,
      balance: t + e
    } : s));
    return true;
  }, [N, S, C]);
  const vt = e.useCallback((e, t) => {
    re(s => {
      const r = {
        ...s,
        [e]: t,
        [t]: e
      };
      window.localStorage.setItem("cs_char_couples", JSON.stringify(r));
      return r;
    });
    const s = (B || []).find(t => String(t.id) === String(e));
    const r = (B || []).find(e => String(e.id) === String(t));
    if (s) {
      gt(S, s, nt);
    }
    if (r) {
      gt(S, r, nt);
    }
  }, [B, S]);
  const Wt = e.useCallback(e => {
    re(t => {
      const s = {
        ...t
      };
      const r = s[e];
      delete s[e];
      if (r) {
        delete s[r];
      }
      window.localStorage.setItem("cs_char_couples", JSON.stringify(s));
      return s;
    });
  }, []);
  const bt = (e, t) => {
    if (fe) {
      ke.setStickerImg(e, t);
    }
  };
  const St = (e, t, s) => {
    if (!_) {
      ie.moveUserTo(e, t, s);
    }
  };
  const Nt = !!_ && le != null && !(b || []).some(e => String(e.uid || e.id) === String(_));
  const Ct = e.useMemo(() => {
    var e;
    if (_) {
      return [];
    } else {
      return (((e = ie.homeland) == null ? undefined : e.cohabitants) || []).map(e => (B || []).find(t => String(t.id) === String(e))).filter(Boolean);
    }
  }, [_, (i = ie.homeland) == null ? undefined : i.cohabitants, B]);
  const Mt = Nt || Ct.length > 0;
  const [Lt, Bt] = e.useState(() => Date.now());
  e.useEffect(() => {
    if (!Mt) {
      return;
    }
    const e = setInterval(() => Bt(Date.now()), 60000);
    return () => clearInterval(e);
  }, [Mt]);
  const It = e.useMemo(() => {
    if (Nt) {
      const e = (B || []).find(e => String(e.id) === String(_));
      const t = se[_];
      return [e, t ? (B || []).find(e => String(e.id) === String(t)) : null].filter(Boolean);
    }
    return Ct;
  }, [Nt, B, _, se, Ct]);
  const Zt = e.useMemo(() => {
    if (!Mt || It.length === 0) {
      return [];
    }
    const e = new Date(Lt);
    return It.map(t => ({
      char: t,
      activity: k([t], de, e)
    }));
  }, [Mt, It, de, Lt]);
  const $t = ((l = Zt[0]) == null ? undefined : l.activity) || null;
  e.useEffect(() => {
    if (Nt && $t && !$t.away && $t.room) {
      je($t.room);
    }
  }, [Nt, $t == null ? undefined : $t.room, $t == null ? undefined : $t.away]);
  const [Dt, Ut] = e.useState({});
  const [_t, Tt] = e.useState({});
  const [At, Rt] = e.useState({});
  const Pt = e.useRef(new Set());
  const Ht = Zt.map(e => {
    var t;
    if ((t = e.char) == null) {
      return undefined;
    } else {
      return t.id;
    }
  }).filter(Boolean).join(",");
  e.useEffect(() => {
    if (Zt.length === 0) {
      return;
    }
    let e = false;
    Zt.forEach(({
      char: t
    }) => {
      if ((t == null ? undefined : t.id) && !Pt.current.has(String(t.id))) {
        Pt.current.add(String(t.id));
        (async e => {
          if (!(e == null ? undefined : e.id)) {
            return null;
          }
          const t = Ze(e);
          const s = ((e, t) => {
            try {
              const s = window.localStorage.getItem($e(e));
              if (!s) {
                return null;
              }
              const r = JSON.parse(s);
              if (r && r.fp === t) {
                if (!r.ts || Date.now() - r.ts > Ie) {
                  return null;
                } else if (r.lines && typeof r.lines == "object") {
                  return r.lines;
                } else {
                  return null;
                }
              } else {
                return null;
              }
            } catch (s) {
              return null;
            }
          })(e.id, t);
          if (s) {
            return s;
          }
          if (De.has(e.id)) {
            return De.get(e.id);
          }
          const r = (async () => {
            const s = await o().catch(() => null);
            if (!s) {
              return null;
            }
            const r = (e.persona || e.intro || e.signature || "").toString().slice(0, 600);
            const i = Be.map(e => `  "${e}": "${Le[e]}"`).join(",\n");
            const l = `你是 ${e.name}。${r ? `\n你的人設：${r}` : ""}\n這是一個「家園監視」小遊戲：玩家會偷偷觀察你在家獨處時的不同生活場景。\n請你以第一人稱、完全貼合自己人設的語氣，為下面【每一個場景】各寫 3 句不同的、自然生活化的內心獨白或隨口碎念（每句不超過 25 字，像被人偷偷看到日常的這一刻）。\n句子之間要有變化、不要重複套路；不要引號、不要旁白、不要解釋。\n場景清單（key 是場景代號，value 是該場景的情境）：\n{\n${i}\n}\n\n嚴格只輸出一個 JSON 物件，key 為場景代號，value 為該場景 3 句台詞的字串陣列，形如 {"sleep":["句1","句2","句3"], ...}，不要任何額外文字或 markdown 圍欄。`;
            try {
              const r = await a([{
                role: "system",
                content: l
              }, {
                role: "user",
                content: "（請開始生成整日台詞包）"
              }], s);
              let i = (typeof r == "string" ? r : (r == null ? undefined : r.content) || "").trim();
              i = i.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
              const o = i.indexOf("{");
              const c = i.lastIndexOf("}");
              if (o === -1 || c === -1) {
                return null;
              }
              const h = JSON.parse(i.slice(o, c + 1));
              const n = {};
              for (const e of Be) {
                const t = (Array.isArray(h[e]) ? h[e] : []).map(e => (typeof e == "string" ? e : "").trim().replace(/^["「『]|["」』]$/g, "").slice(0, 50)).filter(Boolean);
                if (t.length) {
                  n[e] = t;
                }
              }
              if (Object.keys(n).length === 0) {
                return null;
              } else {
                ((e, t, s) => {
                  try {
                    window.localStorage.setItem($e(e), JSON.stringify({
                      fp: t,
                      ts: Date.now(),
                      lines: s
                    }));
                  } catch (r) {}
                })(e.id, t, n);
                return n;
              }
            } catch (c) {
              return null;
            }
          })();
          De.set(e.id, r);
          try {
            return await r;
          } finally {
            De.delete(e.id);
          }
        })(t).then(s => {
          if (!e && s) {
            Ut(e => ({
              ...e,
              [t.id]: s
            }));
          }
        });
      }
    });
    return () => {
      e = true;
    };
  }, [Ht]);
  const Ft = Zt.map(e => {
    var t;
    return `${e.char.id}:${(t = e.activity) == null ? undefined : t.id}`;
  }).join("|");
  e.useEffect(() => {
    if (Zt.length !== 0) {
      Zt.forEach(({
        char: e,
        activity: t
      }) => {
        if (!(e == null ? undefined : e.id) || !t) {
          return;
        }
        const s = t.away ? "out" : t.id;
        const r = `${e.id}_${s}`;
        if (_t[e.id] === r) {
          return;
        }
        const i = Ue(Dt[e.id], s);
        Tt(t => ({
          ...t,
          [e.id]: r
        }));
        Rt(t => ({
          ...t,
          [e.id]: i || ""
        }));
      });
    } else {
      Rt({});
    }
  }, [Ft, Dt]);
  const zt = e.useMemo(() => {
    const e = {};
    Zt.forEach(({
      char: t,
      activity: s
    }) => {
      if (t && s && !s.away) {
        e[String(t.id)] = {
          refId: t.id,
          actId: s.id,
          emoji: s.emoji,
          line: At[t.id] || ""
        };
      }
    });
    return e;
  }, [Zt, At]);
  const Ot = Zt.map(e => {
    var t;
    var s;
    var r;
    return `${(t = e.char) == null ? undefined : t.id}:${((s = e.activity) == null ? undefined : s.away) ? "out" : (r = e.activity) == null ? undefined : r.id}`;
  }).join("|");
  e.useEffect(() => {
    if (!Nt || Zt.length === 0) {
      return;
    }
    const e = Be.filter(e => e !== "out").length;
    Zt.forEach(({
      char: t,
      activity: s
    }) => {
      if ((t == null ? undefined : t.id) && s) {
        (async (e, t, s, r) => {
          if (!e || !(t == null ? undefined : t.id) || !s || s === "out") {
            return;
          }
          const i = String(t.id);
          const l = (() => {
            try {
              return JSON.parse(window.localStorage.getItem(jt) || "{}") || {};
            } catch (e) {
              return {};
            }
          })();
          const o = new Set(l[i] || []);
          const a = Object.keys(l).length === 0 && o.size === 0;
          const c = !o.has(s);
          o.add(s);
          l[i] = [...o];
          (e => {
            try {
              window.localStorage.setItem(jt, JSON.stringify(e));
            } catch (t) {}
          })(l);
          if (a) {
            await gt(e, t, rt);
          }
          if (s === "sleep") {
            await gt(e, t, at);
          }
          if (!c) {
            return;
          }
          const h = o.size;
          if (h >= 3) {
            await gt(e, t, it);
          }
          if (h >= 6) {
            await gt(e, t, lt);
          }
          if (r && h >= r) {
            await gt(e, t, ot);
          }
        })(S, t, s.away ? "out" : s.id, e);
      }
    });
  }, [Ot, Nt]);
  const [Et, Kt] = e.useState(null);
  const [Qt, Vt] = e.useState(null);
  const Gt = e.useRef("");
  const Jt = e.useRef(null);
  e.useEffect(() => {
    if (!Nt || !_) {
      Vt(null);
      return;
    }
    const e = (B || []).find(e => String(e.id) === String(_));
    if (!e) {
      Vt(null);
      return;
    }
    if (Gt.current === String(_)) {
      return;
    }
    Gt.current = String(_);
    let t = false;
    (async e => {
      if (!(e == null ? undefined : e.id)) {
        return null;
      }
      const t = Ze(e);
      const s = ((e, t) => {
        try {
          const s = window.localStorage.getItem(Te(e));
          if (!s) {
            return null;
          }
          const r = JSON.parse(s);
          if (r && r.fp === t) {
            if (!r.ts || Date.now() - r.ts > Ie) {
              return null;
            } else if (r.lines && typeof r.lines == "object") {
              return r.lines;
            } else {
              return null;
            }
          } else {
            return null;
          }
        } catch (s) {
          return null;
        }
      })(e.id, t);
      if (s) {
        return s;
      }
      if (Ae.has(e.id)) {
        return Ae.get(e.id);
      }
      const r = (async () => {
        const s = await o().catch(() => null);
        if (!s) {
          return null;
        }
        const r = (e.persona || e.intro || e.signature || "").toString().slice(0, 600);
        const i = _e.map(e => `  "${e.id}": "${e.desc}"`).join(",\n");
        const l = `你是 ${e.name}。${r ? `\n你的人設：${r}` : ""}\n這是一個「家園監視」小遊戲：玩家會偶然撞見你獨自在家、以為沒人看見時、最私密真實的瞬間。\n請為下面【每一個情境】各寫 2 段不同的內容，每段【2~3 句】（約 40~60 字），用第一人稱、完全貼合你人設的語氣，寫出此刻的動作細節 + 內心獨白／喃喃自語，要有強烈的「被偷偷撞見的私密感」，露出平時絕不給人看到的一面（脆弱、孩子氣、真心話…）。\n段段之間情緒與內容要有變化、不要重複套路；不要引號、不要旁白標記、不要解釋。\n情境清單（key 是情境代號）：\n{\n${i}\n}\n\n嚴格只輸出一個 JSON 物件，key 為情境代號，value 為該情境 2 段內容的字串陣列，形如 {"cry":["段1","段2"], ...}，不要任何額外文字或 markdown 圍欄。`;
        try {
          const r = await a([{
            role: "system",
            content: l
          }, {
            role: "user",
            content: "（請開始生成撞見時刻內容包）"
          }], s);
          let i = (typeof r == "string" ? r : (r == null ? undefined : r.content) || "").trim();
          i = i.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
          const o = i.indexOf("{");
          const c = i.lastIndexOf("}");
          if (o === -1 || c === -1) {
            return null;
          }
          const h = JSON.parse(i.slice(o, c + 1));
          const n = {};
          for (const e of _e) {
            const t = (Array.isArray(h[e.id]) ? h[e.id] : []).map(e => (typeof e == "string" ? e : "").trim().replace(/^["「『]|["」』]$/g, "").slice(0, 120)).filter(Boolean);
            if (t.length) {
              n[e.id] = t;
            }
          }
          if (Object.keys(n).length === 0) {
            return null;
          } else {
            ((e, t, s) => {
              try {
                window.localStorage.setItem(Te(e), JSON.stringify({
                  fp: t,
                  ts: Date.now(),
                  lines: s
                }));
              } catch (r) {}
            })(e.id, t, n);
            return n;
          }
        } catch (c) {
          return null;
        }
      })();
      Ae.set(e.id, r);
      try {
        return await r;
      } finally {
        Ae.delete(e.id);
      }
    })(e).then(e => {
      if (!t && e) {
        Vt(e);
      }
    });
    return () => {
      t = true;
    };
  }, [_, Nt]);
  e.useEffect(() => {
    Kt(null);
    if (!Nt || !_) {
      return;
    }
    if (Jt.current === String(_)) {
      return;
    }
    if (!Qt) {
      return;
    }
    Jt.current = String(_);
    if (!((e = 0.12) => Math.random() < e)()) {
      return;
    }
    const e = (e => {
      if (!e) {
        return null;
      }
      const t = Object.keys(e).filter(t => Array.isArray(e[t]) && e[t].length);
      if (t.length === 0) {
        return null;
      }
      const s = t[Math.floor(Math.random() * t.length)];
      const r = e[s];
      const i = r[Math.floor(Math.random() * r.length)];
      const l = _e.find(e => e.id === s);
      return {
        sceneId: s,
        sceneDesc: (l == null ? undefined : l.desc) || "",
        line: i
      };
    })(Qt);
    if (!e) {
      return;
    }
    const t = (B || []).find(e => String(e.id) === String(_));
    Kt({
      charName: (t == null ? undefined : t.name) || "",
      avatar: (t == null ? undefined : t.image) || (t == null ? undefined : t.avatar) || null,
      line: e.line
    });
    if (t) {
      gt(S, t, ct);
    }
  }, [_, Nt, Qt]);
  const [Yt, qt] = e.useState(null);
  const [ls, hs] = e.useState("");
  const ns = e.useRef("");
  const ds = e.useRef("");
  const xs = e.useMemo(() => {
    const e = Zt.filter(e => e.char);
    if (e.length !== 2) {
      return null;
    } else {
      return e.map(e => String(e.char.id)).sort().join("-");
    }
  }, [Zt]);
  e.useEffect(() => {
    if (!xs) {
      qt(null);
      hs("");
      ds.current = "";
      return;
    }
    if (ns.current === xs) {
      return;
    }
    ns.current = xs;
    const e = Zt.filter(e => e.char).slice(0, 2);
    let t = false;
    (async (e, t) => {
      if (!(e == null ? undefined : e.id) || !(t == null ? undefined : t.id)) {
        return null;
      }
      const s = ((e, t) => {
        const s = `${[String(e == null ? undefined : e.id), String(t == null ? undefined : t.id)].sort().join("-")}|${(e == null ? undefined : e.name) || ""}:${((e == null ? undefined : e.persona) || (e == null ? undefined : e.intro) || "").toString().slice(0, 150)}|${(t == null ? undefined : t.name) || ""}:${((t == null ? undefined : t.persona) || (t == null ? undefined : t.intro) || "").toString().slice(0, 150)}`;
        let r = 0;
        for (let i = 0; i < s.length; i++) {
          r = r * 31 + s.charCodeAt(i) | 0;
        }
        return r.toString(36);
      })(e, t);
      const r = ((e, t, s) => {
        try {
          const r = window.localStorage.getItem(He(e, t));
          if (!r) {
            return null;
          }
          const i = JSON.parse(r);
          if (i && i.fp === s) {
            if (!i.ts || Date.now() - i.ts > Ie) {
              return null;
            } else if (i.lines && typeof i.lines == "object") {
              return i.lines;
            } else {
              return null;
            }
          } else {
            return null;
          }
        } catch (r) {
          return null;
        }
      })(e, t, s);
      if (r) {
        return r;
      }
      const i = He(e, t);
      if (Fe.has(i)) {
        return Fe.get(i);
      }
      const l = (async () => {
        const r = await o().catch(() => null);
        if (!r) {
          return null;
        }
        const i = (e.persona || e.intro || "").toString().slice(0, 400);
        const l = (t.persona || t.intro || "").toString().slice(0, 400);
        const c = Pe.map(e => `  "${e}": "${Re[e]}"`).join(",\n");
        const h = `現在 ${e.name} 和 ${t.name} 同居在一起，這是一個「家園監視」小遊戲：玩家會偷偷觀察他們同住的日常。\n${e.name} 的人設：${i || "（未知）"}\n${t.name} 的人設：${l || "（未知）"}\n請為下面【每一個共處場景】各寫 3 段不同的、貼合兩人關係與人設的生活互動。\n每段可以是其中一人對另一人說的話、兩人的小對話或拌嘴（用「${e.name}：…」「${t.name}：…」標明誰說的，可一兩個來回），自然有愛、像被偷偷看到的同居日常一刻，每段不超過 40 字。段段之間要有變化、不要重複套路；不要旁白、不要解釋。\n共處場景清單（key 是場景代號）：\n{\n${c}\n}\n\n嚴格只輸出一個 JSON 物件，key 為場景代號，value 為該場景 3 段互動的字串陣列，形如 {"cook":["互動1","互動2","互動3"], ...}，不要任何額外文字或 markdown 圍欄。`;
        try {
          const i = await a([{
            role: "system",
            content: h
          }, {
            role: "user",
            content: "（請開始生成兩人共處互動包）"
          }], r);
          let l = (typeof i == "string" ? i : (i == null ? undefined : i.content) || "").trim();
          l = l.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
          const o = l.indexOf("{");
          const c = l.lastIndexOf("}");
          if (o === -1 || c === -1) {
            return null;
          }
          const n = JSON.parse(l.slice(o, c + 1));
          const d = {};
          for (const e of Pe) {
            const t = (Array.isArray(n[e]) ? n[e] : []).map(e => (typeof e == "string" ? e : "").trim().replace(/^["「『]|["」』]$/g, "").slice(0, 80)).filter(Boolean);
            if (t.length) {
              d[e] = t;
            }
          }
          if (Object.keys(d).length === 0) {
            return null;
          } else {
            ((e, t, s, r) => {
              try {
                window.localStorage.setItem(He(e, t), JSON.stringify({
                  fp: s,
                  ts: Date.now(),
                  lines: r
                }));
              } catch (i) {}
            })(e, t, s, d);
            return d;
          }
        } catch (n) {
          return null;
        }
      })();
      Fe.set(i, l);
      try {
        return await l;
      } finally {
        Fe.delete(i);
      }
    })(e[0].char, e[1].char).then(e => {
      if (!t && e) {
        qt(e);
      }
    });
    return () => {
      t = true;
    };
  }, [xs]);
  e.useEffect(() => {
    const e = Zt.filter(e => e.char && e.activity && !e.activity.away);
    if (e.length !== 2 || String(e[0].activity.room) !== String(e[1].activity.room)) {
      hs("");
      ds.current = "";
      return;
    }
    const [t, s] = e;
    const r = t.activity.id;
    if (!Pe.includes(r)) {
      hs("");
      ds.current = "";
      return;
    }
    const i = [String(t.char.id), String(s.char.id)].sort().join("|") + "|" + r;
    if (ds.current === i) {
      return;
    }
    ds.current = i;
    const l = ((e, t) => {
      if (!e || !t) {
        return null;
      }
      const s = e[t];
      if (Array.isArray(s) && s.length !== 0) {
        return s[Math.floor(Math.random() * s.length)];
      } else {
        return null;
      }
    })(Yt, r);
    hs(l || "");
  }, [Ft, Yt]);
  const fs = (he == null ? undefined : he.stickers) || [];
  const ks = e.useCallback(e => {
    const t = (e == null ? undefined : e.nearFurn) || [];
    const s = e == null ? undefined : e.room;
    if (!t.length || !s) {
      return null;
    }
    const r = (fs || []).filter(e => e.kind === "furniture" && String(e.roomId) === String(s));
    for (const i of t) {
      const e = r.find(e => is(e.icon || e.refId) === i);
      if (e) {
        return {
          x: Math.min(0.82, Math.max(0.18, e.x ?? 0.5)),
          y: Math.min(0.74, Math.max(0.58, (e.y ?? 0.55) + 0.12))
        };
      }
    }
    return null;
  }, [fs]);
  const ys = e.useMemo(() => {
    var e;
    let t = [...fs];
    const s = (b || []).some(e => String(e.uid || e.id) === String(_));
    const r = ((e = ie.homeland) == null ? undefined : e.cohabitants) || [];
    const i = Nt && !s && !r.includes(String(_));
    const l = !_ && Ct.length > 0;
    if (!i && !l || ge) {
      return t;
    }
    t = t.filter(e => e.kind !== "occupant" || e.refType !== "char");
    const o = Zt.filter(e => e.char && e.activity && !e.activity.away);
    const a = {};
    o.forEach(e => {
      const t = e.activity.room;
      (a[t] = a[t] || []).push(e);
    });
    Object.entries(a).forEach(([e, s]) => {
      const r = ks(s[0].activity);
      const i = r ? r.x : 0.42;
      const l = r ? r.y : 0.58;
      const o = s.length;
      s.forEach((s, r) => {
        const a = (r - (o - 1) / 2) * 0.11;
        const c = Math.min(0.85, Math.max(0.15, i + a));
        const h = Math.min(0.78, l + r % 2 * 0.04);
        t.push({
          id: `occ_${s.char.id}`,
          roomId: e,
          kind: "occupant",
          refType: "char",
          refId: s.char.id,
          x: c,
          y: h,
          scale: 1
        });
      });
    });
    return t;
  }, [fs, _, b, (h = ie.homeland) == null ? undefined : h.cohabitants, Nt, Ct, Zt, ks, ge]);
  e.useEffect(() => {
    const e = setInterval(() => {
      const e = ie.lastHouseworkAt || 0;
      const t = Date.now() - e;
      te(t < 60000 ? Math.ceil((60000 - t) / 1000) : 0);
    }, 1000);
    return () => clearInterval(e);
  }, [ie.lastHouseworkAt]);
  const js = (he == null ? undefined : he.rooms) || [];
  const gs = e.useMemo(() => js.find(e => String(e.id) === String(ye)) || js[0], [js, ye]);
  const us = e.useCallback(e => {
    var t;
    var s;
    if (e.kind === "occupant" && e.refType === "char" && e.refId) {
      const t = (B || []).find(t => String(t.id) === String(e.refId));
      if (t) {
        if (!xe && Math.random() < 0.3) {
          wt(10);
        }
        const e = Zt.find(e => {
          var s;
          return String((s = e.char) == null ? undefined : s.id) === String(t.id);
        });
        const s = (e == null ? undefined : e.activity) ? e.activity.away ? "out" : e.activity.id : null;
        return {
          text: At[t.id] || (s ? Ue(Dt[t.id], s) : null) || W("homelandOccupantHi", {
            name: t.name || ""
          }),
          avatar: t.image || t.avatar || null,
          name: t.name || ""
        };
      }
    }
    const r = is(e.icon || e.refId);
    const i = (b || []).find(e => String(e.uid || e.id) === String(S));
    const l = (i == null ? undefined : i.name) || W("homelandMe");
    if (!xe && Math.random() < 0.3) {
      wt(10);
    }
    const c = ys.find(e => String(e.roomId) === String(gs == null ? undefined : gs.id) && e.kind === "occupant" && e.refType === "char");
    const h = c ? (B || []).find(e => String(e.id) === String(c.refId)) : null;
    const n = W(((t = ve.find(e => e.type === r)) == null ? undefined : t.labelKey) || "homelandFurnSofa");
    if (h) {
      let e = null;
      let t = false;
      if (Nt) {
        t = true;
        const s = se[c.refId];
        const r = s ? (B || []).find(e => String(e.id) === String(s)) : null;
        e = (r == null ? undefined : r.name) || null;
      } else {
        e = (((s = ie.homeland) == null ? undefined : s.cohabitants) || []).includes(String(h.id)) ? l : null;
      }
      return (async (e, t, s = {}) => {
        if (!e) {
          return null;
        }
        const r = await o().catch(() => null);
        if (!r) {
          return null;
        }
        const {
          companion: i,
          monitoring: l
        } = s;
        const c = (e.persona || e.intro || e.signature || "").toString().slice(0, 600);
        const h = l ? `你正在自己家裡${i ? `（和 ${i} 同住）` : ""}。現在你的目光落在家中的「${t}」上。` : `你正和 ${i || "對方"} 同住在一個溫馨的家裡。\n現在 ${i || "對方"} 在家裡碰了「${t}」。`;
        const n = l ? "請用第一人稱、完全貼合你的人設語氣，只回一句自然生活化的內心碎念（不超過 30 字），像獨處日常被偷看到的一刻。不要引號、不要旁白、不要解释。" : "請用第一人稱、完全貼合你的人設語氣，只回一句自然、生活化的短話（不超過 30 字），像戀人/同居者間隨口的一句互動。不要加引號、不要旁白、不要解释。";
        const d = `你是 ${e.name}。${c ? `\n你的人設：${c}` : ""}\n${h}\n${n}`;
        try {
          const e = await a([{
            role: "system",
            content: d
          }, {
            role: "user",
            content: `（碰了碰${t}）`
          }], r);
          const s = (typeof e == "string" ? e : (e == null ? undefined : e.content) || "").trim();
          if (s) {
            return s.replace(/^["「『]|["」』]$/g, "").slice(0, 60);
          } else {
            return null;
          }
        } catch (x) {
          return null;
        }
      })(h, n, {
        companion: e,
        monitoring: t
      }).then(e => ({
        text: e || W(ze[r] || "homelandTalkSofa"),
        avatar: h.image || h.avatar || null,
        name: h.name || ""
      }));
    }
    return {
      text: W(ze[r] || "homelandTalkSofa"),
      avatar: null,
      name: ""
    };
  }, [xe, Nt, se, (j = ie.homeland) == null ? undefined : j.cohabitants, ys, B, Zt, At, Dt, b, S, gs, W, wt]);
  const [ps, ms] = e.useState("");
  e.useEffect(() => {
    var e;
    if (!v) {
      return;
    }
    const t = document.getElementById("nuo-os-root") || document.documentElement;
    const s = () => {
      var e;
      var s;
      const r = window.visualViewport;
      let i = Math.round((r == null ? undefined : r.width) || 0) || window.innerWidth || document.documentElement.clientWidth || 0;
      let l = Math.round((r == null ? undefined : r.height) || 0) || window.innerHeight || document.documentElement.clientHeight || 0;
      const o = ((e = window.screen) == null ? undefined : e.width) || 0;
      const a = ((s = window.screen) == null ? undefined : s.height) || 0;
      if (i <= 50 && o > 50) {
        i = o;
      }
      if (l <= 50 && a > 50) {
        l = a;
      }
      if (i > 50 && l > 50 && i > l) {
        const e = i;
        i = l;
        l = e;
      }
      if (i > 50) {
        t.style.setProperty("--hl-vw", i + "px");
      }
      if (l > 50) {
        t.style.setProperty("--hl-vh", l + "px");
      }
      if (t.classList.contains("ui-scaled")) {
        const e = parseFloat(getComputedStyle(t).getPropertyValue("--nuo-ui-scale")) || 1;
        if (e > 0) {
          if (i > 50) {
            t.style.setProperty("--nuo-ui-scaled-w", Math.round(i / e) + "px");
          }
          if (l > 50) {
            t.style.setProperty("--nuo-ui-scaled-h", Math.round(l / e) + "px");
          }
        }
      }
    };
    s();
    const r = [60, 200, 500].map(e => setTimeout(s, e));
    window.addEventListener("resize", s);
    window.addEventListener("orientationchange", s);
    if ((e = window.visualViewport) != null) {
      e.addEventListener("resize", s);
    }
    return () => {
      var e;
      r.forEach(clearTimeout);
      window.removeEventListener("resize", s);
      window.removeEventListener("orientationchange", s);
      if ((e = window.visualViewport) != null) {
        e.removeEventListener("resize", s);
      }
    };
  }, [v]);
  return t.jsxs("div", {
    id: "monitor-screen",
    className: "screen " + (v ? "active" : ""),
    children: [t.jsx(u, {}), v && t.jsxs("div", {
      className: "hl-landscape",
      children: [_ && t.jsxs("div", {
        className: "hl-visit-banner glass",
        children: [t.jsxs("span", {
          className: "hl-visit-banner-lbl",
          children: [t.jsx(F, {
            size: 14,
            className: "hl-visit-eye"
          }), (() => {
            var e;
            if ((b || []).some(e => String(e.uid || e.id) === String(_))) {
              const e = (b || []).find(e => String(e.uid || e.id) === String(_));
              return W("homelandVisitBanner", {
                name: (e == null ? undefined : e.name) || ""
              });
            }
            {
              const t = (B || []).find(e => String(e.id) === String(_));
              const s = (((e = ie.homeland) == null ? undefined : e.cohabitants) || []).includes(String(_));
              return W(s ? "homelandVisitSharedBanner" : "homelandVisitBanner", {
                name: (t == null ? undefined : t.name) || ""
              });
            }
          })()]
        }), Nt && Zt.map(({
          char: e,
          activity: s
        }) => s && t.jsxs("span", {
          className: "hl-activity-chip " + (s.away ? "hl-activity-away" : ""),
          title: s.away ? W("homelandActOutBanner", {
            name: e.name || "",
            hour: String(y([e], de, new Date(Lt))).padStart(2, "0")
          }) : W("homelandActStatus", {
            name: e.name || "",
            act: W(s.labelKey)
          }),
          children: [t.jsx("span", {
            className: "hl-activity-emoji",
            children: s.emoji
          }), t.jsx("span", {
            className: "hl-activity-name",
            children: e.name
          }), s.scheduleTitle || (s.away ? W("homelandActOutShort") : W(s.labelKey))]
        }, e.id)), ls && t.jsxs("span", {
          className: "hl-pair-line",
          children: ["💬 ", ls]
        })]
      }), Et && t.jsxs("div", {
        className: "hl-caught-toast glass",
        onClick: () => Kt(null),
        children: [t.jsx(F, {
          size: 14,
          className: "hl-caught-eye"
        }), Et.avatar && t.jsx("img", {
          className: "hl-caught-avatar",
          src: Et.avatar,
          alt: ""
        }), t.jsxs("div", {
          className: "hl-caught-body",
          children: [t.jsx("span", {
            className: "hl-caught-title",
            children: W("homelandCaughtTitle")
          }), t.jsx("span", {
            className: "hl-caught-line",
            children: Et.line
          })]
        })]
      }), !_ && t.jsxs("div", {
        className: "hl-hud-bar glass hl-hud-bar-compact",
        children: [t.jsx("span", {
          className: "hl-hud-lvl",
          children: W("homelandLevelHUD", {
            level: ie.level
          })
        }), ie.level < 5 && t.jsxs("button", {
          className: "hl-hud-btn",
          onClick: () => Y(true),
          children: [t.jsx(z, {
            size: 13
          }), " ", W("homelandUpgradeBtn")]
        })]
      }), t.jsx("button", {
        className: "hl-back-btn-float",
        onClick: () => {
          if (_) {
            T(null);
          } else {
            w("home-screen");
          }
        },
        title: _ ? W("homelandBackHome") : W("back") || "返回",
        children: t.jsx($, {
          size: 22
        })
      }), t.jsxs("div", {
        className: "hl-action-bar-float",
        children: [fe && ge && t.jsx("button", {
          className: "hl-hbtn",
          onClick: () => {
            if (fe) {
              ke.resetHomeland();
            }
          },
          title: W("homelandReset"),
          children: t.jsx(O, {
            size: 16
          })
        }), !_ && t.jsx("button", {
          className: "hl-hbtn",
          onClick: () => Se(true),
          title: W("homelandInviteTitle"),
          children: t.jsx(U, {
            size: 16
          })
        }), t.jsx("button", {
          className: "hl-hbtn",
          onClick: () => G(true),
          title: W("homelandVisitTitle"),
          children: t.jsx(E, {
            size: 16
          })
        }), Nt && ge && t.jsx("button", {
          className: "hl-hbtn",
          onClick: async () => {
            if (!Nt || Qe) {
              return;
            }
            const e = (B || []).find(e => String(e.id) === String(_));
            if (!e) {
              return;
            }
            const t = se[_];
            const s = t ? (B || []).find(e => String(e.id) === String(t)) : null;
            if (window.confirm(W("homelandAiHomeConfirm", {
              name: e.name
            }))) {
              Ve(true);
              ms(W("homelandAiHomeGenerating"));
              try {
                const t = await st(le, [e, s].filter(Boolean), (e, t, s, r) => {
                  ms(`${W("homelandAiHomeGenerating")} ${t} (${s}/${r})`);
                });
                ms("");
                if (t.ok) {
                  pt(yt);
                  await ae.reload();
                  je("living");
                  setTimeout(() => je("bedroom"), 80);
                  const s = [t.designNote || W("homelandAiHomeSuccess", {
                    name: e.name
                  }), ...(Array.isArray(t.roomNotes) ? t.roomNotes : [])];
                  alert(`✨ ${s.join("\n")}`);
                } else {
                  alert(W("homelandAiHomeFail"));
                }
              } finally {
                Ve(false);
                ms("");
              }
            }
          },
          disabled: Qe,
          title: W("homelandAiHomeBtn"),
          children: t.jsx(M, {
            size: 16,
            className: Qe ? "hl-spin" : ""
          })
        }), fe && t.jsx("button", {
          className: "hl-hbtn " + (ge ? "active" : ""),
          onClick: () => ue(e => !e),
          title: W("homelandEdit"),
          children: ge ? t.jsx(I, {
            size: 16
          }) : t.jsx(K, {
            size: 16
          })
        })]
      }), ps && t.jsxs("div", {
        className: "hl-ai-progress-toast glass",
        children: [t.jsx(M, {
          size: 13,
          className: "hl-spin"
        }), " ", ps]
      }), t.jsx("div", {
        className: "screen-content hl-content",
        children: ne || !he ? t.jsx("div", {
          className: "hl-loading",
          children: t.jsx("p", {
            children: W("homelandLoading")
          })
        }) : t.jsxs(t.Fragment, {
          children: [t.jsx(mt, {
            rooms: js,
            occupantRoom: he.occupantRoom,
            currentRoomId: ye,
            t: W,
            profileUsers: b,
            characters: B,
            currentUserId: _ || S,
            onPickRoom: e => {
              var t;
              const s = me[e] || 1;
              if (de < s) {
                alert(W("homelandRoomLockedTip", {
                  level: s,
                  name: W(((t = js.find(t => t.id === e)) == null ? undefined : t.nameKey) || "")
                }));
              } else {
                je(e);
                if (!ge) {
                  St(e, 0.5, 0.6);
                }
              }
            },
            level: de
          }), t.jsx(Xt, {
            room: gs,
            stickers: ys,
            editMode: ge && fe,
            t: W,
            profileUsers: b,
            characters: B,
            currentUserId: _ || S,
            onMoveSticker: (e, t) => {
              if (fe) {
                ke.updateSticker(e, t);
              }
            },
            onRemoveSticker: e => {
              if (fe) {
                ke.removeSticker(e);
              }
            },
            onActivateSticker: e => {
              if (!xe) {
                if (e.kind !== "showcase") {
                  if (e.kind !== "occupant") {
                    if (is(e.icon || e.refId) === "door") {
                      w("going-out-screen");
                    }
                  }
                } else {
                  We(true);
                }
              }
            },
            onMoveUser: St,
            onEditFurniture: Ce,
            getBubbleText: us,
            onDecorate: Ee,
            activeEditSticker: tt,
            busy: Qe,
            activityBadges: zt,
            onUploadImg: e => {
              var t;
              if ((t = Ke.current) == null) {
                return undefined;
              } else {
                return t.click();
              }
            },
            onGenerateImg: async () => {
              if (tt) {
                Ve(true);
                try {
                  const e = is(tt.icon || tt.refId);
                  const t = await (async e => {
                    const t = await o().catch(() => null);
                    if (!t) {
                      return null;
                    }
                    const s = `anime flat illustration of ${Me[e] || "a piece of cute furniture"}, cel-shaded, soft pastel colors, clean vector style, centered single object, isolated on plain transparent background, no text, no watermark, top-down / front three-quarter view, game asset sticker`;
                    return await c(s, "goingOutCG", t, {}).catch(() => null);
                  })(e);
                  if (t) {
                    bt(tt.id, t);
                  }
                } finally {
                  Ve(false);
                }
              }
            },
            onClearStickerImg: e => bt(e, null),
            onCloseEditSticker: () => Ce(null)
          }), ge && fe && !tt && t.jsxs("div", {
            className: "hl-furn-bar glass",
            children: [t.jsxs("div", {
              className: "hl-furn-bar-header",
              children: [t.jsxs("span", {
                className: "hl-furn-bar-label",
                children: [t.jsx(Q, {
                  size: 14
                }), " ", W("homelandAddFurniture")]
              }), t.jsx("div", {
                className: "hl-furn-tabs",
                children: Xe.map(e => t.jsx("button", {
                  className: "hl-furn-tab-btn " + (Ye === e ? "active" : ""),
                  onClick: () => qe(e),
                  children: W("homelandCat_" + e)
                }, e))
              })]
            }), t.jsx("div", {
              className: "hl-furn-bar-items",
              children: et.map(e => {
                const s = rs[e.icon] || D;
                return t.jsx("button", {
                  className: "hl-furn-chip",
                  onClick: () => (e => {
                    var t;
                    var s;
                    t = {
                      roomId: (gs == null ? undefined : gs.id) || "bedroom",
                      kind: e.type === "showcase" ? "showcase" : "furniture",
                      refType: "icon",
                      refId: e.icon,
                      icon: e.icon,
                      x: 0.5,
                      y: 0.5,
                      scale: 1
                    };
                    if (fe) {
                      ke.addSticker(t);
                      wt(50);
                      pt(dt);
                      if ((((s = ke.homeland) == null ? undefined : s.stickers) || []).filter(e => e.kind === "furniture").length + 1 >= 20) {
                        pt(kt);
                      }
                    }
                  })(e),
                  title: W(e.labelKey),
                  children: t.jsx(s, {
                    size: 18
                  })
                }, e.type);
              })
            })]
          })]
        })
      }), pe && t.jsx(es, {
        t: W,
        onClose: () => We(false)
      }), be && t.jsx(ts, {
        t: W,
        characters: B,
        cohabitants: he == null ? undefined : he.cohabitants,
        getInvitablePartnerIds: ie.getInvitablePartnerIds,
        onInvite: e => ((e, t) => {
          if (_) {
            return;
          }
          ie.inviteCohabitant(e, t);
          const s = (B || []).find(t => String(t.id) === String(e));
          if (s) {
            gt(S, s, ht);
          }
        })(e, gs == null ? undefined : gs.id),
        onRemove: e => {
          if (!_) {
            ie.removeCohabitant(e);
          }
        },
        onClose: () => Se(false)
      }), Oe && t.jsx(ss, {
        t: W,
        room: js.find(e => String(e.id) === String(Oe)),
        onSetStyle: (e, t, s) => {
          if (fe) {
            ke.setRoomStyle(e, t, s);
          }
        },
        onSetLayer: (e, t, s) => {
          if (fe) {
            ke.setRoomLayer(e, t, s);
          }
        },
        onClose: () => Ee(null)
      }), t.jsx("input", {
        ref: Ke,
        type: "file",
        accept: "image/*",
        style: {
          display: "none"
        },
        onChange: e => {
          var t;
          const s = (t = e.target.files) == null ? undefined : t[0];
          e.target.value = "";
          if (!s || !tt) {
            return;
          }
          const r = new FileReader();
          r.onload = () => {
            bt(tt.id, r.result);
          };
          r.readAsDataURL(s);
        }
      }), V && t.jsx(os, {
        t: W,
        onClose: () => G(false),
        profileUsers: b,
        currentUserId: S,
        characters: B,
        activeChatIds: Z || [],
        cohabitants: ((g = ie.homeland) == null ? undefined : g.cohabitants) || [],
        charCouples: se,
        onSwitchUser: e => {
          L(e);
          T(null);
          G(false);
        },
        onMonitor: e => {
          T(e);
          G(false);
        },
        onUnpair: Wt,
        onOpenPairSelect: e => {
          X(e);
        }
      }), q && t.jsx(as, {
        t: W,
        char: q,
        characters: B,
        activeChatIds: Z || [],
        cohabitants: ((p = ie.homeland) == null ? undefined : p.cohabitants) || [],
        charCouples: se,
        onClose: () => X(null),
        onPair: e => {
          vt(q.id, e);
          X(null);
        }
      }), J && t.jsx(cs, {
        t: W,
        level: ie.level || 1,
        balance: (N == null ? undefined : N.balance) || 0,
        houseworkCooldown: ee,
        houseworkEffect: Ge,
        onUpgrade: () => {
          var e;
          const t = ie.level || 1;
          if (t >= 5) {
            return;
          }
          const s = t + 1;
          const r = {
            2: 2000,
            3: 5000,
            4: 15000,
            5: 50000
          }[s] || 2000;
          const i = {
            2: "living",
            3: "kitchen",
            4: "bathroom",
            5: "balcony"
          }[s];
          const l = W(((e = js.find(e => e.id === i)) == null ? undefined : e.nameKey) || "");
          if (window.confirm(W("homelandUpgradeConfirm", {
            cost: r,
            level: s
          }))) {
            if (ie.upgradeHomeland(r, ut)) {
              if (s >= 5) {
                pt(ft);
              }
              alert(W("homelandUpgradeSuccess", {
                level: s,
                name: l
              }));
              Y(false);
            } else {
              alert(W("homelandMoneyNotEnough"));
            }
          }
        },
        onHousework: async () => {
          if (!(ee > 0)) {
            Ve(true);
            Je(true);
            setTimeout(async () => {
              const e = await ie.doHousework(500, wt);
              Ve(false);
              Je(false);
              if (e) {
                try {
                  const e = (parseInt(window.localStorage.getItem("hl_housework_count") || "0", 10) || 0) + 1;
                  window.localStorage.setItem("hl_housework_count", String(e));
                  if (e >= 10) {
                    pt(xt);
                  }
                } catch (t) {}
                alert(W("homelandHouseworkDone", {
                  amount: 500
                }));
              }
            }, 1800);
          }
        },
        onClose: () => Y(false)
      })]
    })]
  });
};
const os = ({
  t: s,
  onClose: r,
  profileUsers: i,
  currentUserId: l,
  characters: o,
  activeChatIds: a,
  cohabitants: c,
  charCouples: h,
  onSwitchUser: n,
  onMonitor: d,
  onUnpair: x,
  onOpenPairSelect: f
}) => {
  const [k, y] = e.useState("users");
  return t.jsx("div", {
    className: "hl-modal-overlay",
    onClick: r,
    children: t.jsxs("div", {
      className: "hl-modal hl-surv-modal",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "hl-modal-head",
        children: [t.jsx("span", {
          className: "hl-modal-title",
          children: s("homelandVisitTitle")
        }), t.jsx("button", {
          className: "hl-modal-close",
          onClick: r,
          children: t.jsx(m, {
            size: 20
          })
        })]
      }), t.jsxs("div", {
        className: "hl-deco-tabs",
        children: [t.jsx("button", {
          className: "hl-deco-tab " + (k === "users" ? "active" : ""),
          onClick: () => y("users"),
          children: s("homelandTabUsers")
        }), t.jsx("button", {
          className: "hl-deco-tab " + (k === "chars" ? "active" : ""),
          onClick: () => y("chars"),
          children: s("homelandTabChars")
        })]
      }), t.jsx("div", {
        className: "hl-surv-body",
        children: k === "users" ? t.jsxs("div", {
          className: "hl-surv-list",
          children: [t.jsx("span", {
            className: "hl-surv-section-title",
            children: s("homelandNeighborTitle")
          }), i.map(e => {
            const r = String(e.uid || e.id) === String(l);
            return t.jsxs("div", {
              className: "hl-surv-item",
              children: [t.jsxs("div", {
                className: "hl-surv-info",
                children: [e.avatar ? t.jsx("img", {
                  className: "hl-surv-avatar",
                  src: e.avatar,
                  alt: ""
                }) : t.jsx("span", {
                  className: "hl-surv-avatar-text",
                  children: "👤"
                }), t.jsxs("span", {
                  className: "hl-surv-name",
                  children: [e.name, " ", r && `(${s("homelandNeighborMe")})`]
                })]
              }), t.jsxs("div", {
                className: "hl-surv-btns",
                children: [!r && t.jsxs("button", {
                  className: "hl-surv-btn-act",
                  onClick: () => n(e.uid || e.id),
                  children: [t.jsx(je, {
                    size: 11
                  }), " ", s("homelandSwitchAction")]
                }), t.jsxs("button", {
                  className: "hl-surv-btn-mon",
                  onClick: () => d(r ? null : e.uid || e.id),
                  children: [t.jsx(F, {
                    size: 11
                  }), " ", s("homelandMonitorAction")]
                })]
              })]
            }, e.uid || e.id);
          })]
        }) : t.jsxs("div", {
          className: "hl-surv-list",
          children: [t.jsx("span", {
            className: "hl-surv-section-title",
            children: s("homelandNeighborNpc")
          }), (() => {
            const e = new Set(a.map(String));
            const r = o.filter(t => e.has(String(t.id)));
            if (r.length === 0) {
              return t.jsx("div", {
                className: "hl-surv-empty",
                children: s("homelandInviteEmpty")
              });
            } else {
              return r.map(e => {
                var r;
                const i = c.includes(String(e.id));
                const l = h[e.id];
                const a = l && ((r = o.find(e => String(e.id) === String(l))) == null ? undefined : r.name) || "";
                return t.jsxs("div", {
                  className: "hl-surv-item",
                  children: [t.jsxs("div", {
                    className: "hl-surv-info",
                    children: [e.image || e.avatar ? t.jsx("img", {
                      className: "hl-surv-avatar",
                      src: e.image || e.avatar,
                      alt: ""
                    }) : t.jsx("span", {
                      className: "hl-surv-avatar-text",
                      children: "👧"
                    }), t.jsxs("div", {
                      className: "hl-surv-details",
                      children: [t.jsx("span", {
                        className: "hl-surv-name",
                        children: e.name
                      }), i && t.jsx("span", {
                        className: "hl-surv-tag hl-tag-you",
                        children: s("homelandPairedWithYou")
                      }), !i && l && t.jsx("span", {
                        className: "hl-surv-tag hl-tag-cp",
                        children: s("homelandPairedWith", {
                          name: a
                        })
                      })]
                    })]
                  }), t.jsxs("div", {
                    className: "hl-surv-btns",
                    children: [!i && !l && t.jsx("button", {
                      className: "hl-surv-btn-act",
                      onClick: () => f(e),
                      children: s("homelandPairBtn")
                    }), !i && l && t.jsxs("button", {
                      className: "hl-surv-btn-del",
                      onClick: () => x(e.id),
                      children: [t.jsx(ge, {
                        size: 11
                      }), " ", s("homelandUnpairBtn")]
                    }), t.jsxs("button", {
                      className: "hl-surv-btn-mon",
                      onClick: () => d(e.id),
                      children: [t.jsx(F, {
                        size: 11
                      }), " ", s("homelandMonitorAction")]
                    })]
                  })]
                }, e.id);
              });
            }
          })()]
        })
      })]
    })
  });
};
const as = ({
  t: s,
  char: r,
  characters: i,
  activeChatIds: l,
  cohabitants: o,
  charCouples: a,
  onClose: c,
  onPair: h
}) => {
  const n = e.useMemo(() => {
    const e = new Set(l.map(String));
    const t = new Set((o || []).map(String));
    return i.filter(s => e.has(String(s.id)) && String(s.id) !== String(r.id) && !t.has(String(s.id)) && !a[s.id]);
  }, [i, l, r.id, o, a]);
  return t.jsx("div", {
    className: "hl-modal-overlay",
    style: {
      zIndex: 3000
    },
    onClick: c,
    children: t.jsxs("div", {
      className: "hl-modal hl-cp-select",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "hl-modal-head",
        children: [t.jsx("span", {
          className: "hl-modal-title",
          children: s("homelandPairSelectTitle")
        }), t.jsx("button", {
          className: "hl-modal-close",
          onClick: c,
          children: t.jsx(m, {
            size: 20
          })
        })]
      }), t.jsx("div", {
        className: "hl-cp-desc",
        children: s("homelandPairSelectDesc", {
          name: r.name
        })
      }), t.jsx("div", {
        className: "hl-cp-list",
        children: n.length === 0 ? t.jsx("div", {
          className: "hl-surv-empty",
          children: s("homelandNoInvitableChars")
        }) : n.map(e => t.jsxs("button", {
          className: "hl-cp-item-chip",
          onClick: () => h(e.id),
          children: [(e.image || e.avatar) && t.jsx("img", {
            className: "hl-cp-avatar",
            src: e.image || e.avatar,
            alt: ""
          }), t.jsx("span", {
            className: "hl-cp-name",
            children: e.name
          })]
        }, e.id))
      })]
    })
  });
};
const cs = ({
  t: e,
  level: s,
  balance: r,
  houseworkCooldown: i,
  houseworkEffect: l,
  onUpgrade: o,
  onHousework: a,
  onClose: c
}) => {
  const h = {
    1: e("homelandRoomBedroom"),
    2: e("homelandRoomLiving"),
    3: e("homelandRoomKitchen"),
    4: e("homelandRoomBathroom"),
    5: e("homelandRoomBalcony")
  };
  const n = {
    2: 2000,
    3: 5000,
    4: 15000,
    5: 50000
  }[s + 1];
  return t.jsx("div", {
    className: "hl-modal-overlay",
    onClick: c,
    children: t.jsxs("div", {
      className: "hl-modal hl-upg-modal",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "hl-modal-head",
        children: [t.jsx("span", {
          className: "hl-modal-title",
          children: e("homelandUpgradeBtn")
        }), t.jsx("button", {
          className: "hl-modal-close",
          onClick: c,
          children: t.jsx(m, {
            size: 20
          })
        })]
      }), t.jsxs("div", {
        className: "hl-upg-body",
        children: [t.jsx("div", {
          className: "hl-upg-progress",
          children: [1, 2, 3, 4, 5].map(e => {
            const r = e <= s;
            const i = e === s;
            return t.jsxs("div", {
              className: `hl-upg-step ${r ? "active" : ""} ${i ? "current" : ""}`,
              children: [t.jsx("div", {
                className: "hl-upg-step-dot",
                children: r ? "✓" : e
              }), t.jsx("span", {
                className: "hl-upg-step-name",
                children: h[e]
              })]
            }, e);
          })
        }), t.jsx("div", {
          className: "hl-upg-hud",
          children: t.jsx("span", {
            className: "hl-upg-cur-balance",
            children: e("homelandMoneyHUD", {
              money: r.toFixed(2)
            })
          })
        }), t.jsxs("div", {
          className: "hl-upg-housework-box",
          children: [t.jsxs("span", {
            className: "hl-upg-box-title",
            children: ["🧹 ", e("homelandHouseworkBtn")]
          }), t.jsx("p", {
            className: "hl-upg-box-desc",
            children: "打掃房間，每日勤勞做家務可隨機賺取 ¥500 資金奖励！"
          }), t.jsxs("button", {
            className: `hl-upg-hw-btn ${i > 0 ? "disabled" : ""} ${l ? "sweeping" : ""}`,
            onClick: a,
            disabled: i > 0 || l,
            children: [t.jsx("span", {
              className: "hl-hw- broom-emoji",
              children: "🧹"
            }), l ? "打掃中..." : i > 0 ? `冷卻中 (${i}s)` : "立刻打掃"]
          })]
        }), s < 5 ? t.jsxs("div", {
          className: "hl-upg-action-box",
          children: [t.jsx("span", {
            className: "hl-upg-box-title",
            children: "🏠 解鎖新房間"
          }), t.jsxs("p", {
            className: "hl-upg-box-desc",
            children: ["下一級: ", t.jsxs("b", {
              children: ["Lv.", s + 1, " (", h[s + 1], ")"]
            }), t.jsx("br", {}), "需要消耗: ", t.jsxs("span", {
              className: "hl-upg-cost-highlight",
              children: ["¥", n]
            })]
          }), t.jsx("button", {
            className: "hl-upg-hw-btn hl-upg-submit-btn " + (r < n ? "poor" : ""),
            onClick: o,
            children: "立刻升級"
          })]
        }) : t.jsxs("div", {
          className: "hl-upg-action-box max-level",
          children: [t.jsx("span", {
            className: "hl-upg-box-title",
            children: "🎉 恭喜！家園已達到最高等級 Lv.5 🎉"
          }), t.jsx("p", {
            className: "hl-upg-box-desc",
            children: "所有房間（臥室、客廳、廚房、浴室、陽台）已全數解鎖，盡情享受你的奢華家園吧！"
          })]
        })]
      })]
    })
  });
};
export { ls as default };