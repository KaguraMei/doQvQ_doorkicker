import { G as e } from "./native-pet-CTNtZgMA.js";
import "./vendor-react-B2VXkTUV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
const o = "petAppReactionConfig";
const n = "petAppReactionPools";
const l = {
  "com.tencent.mm": {
    label: "微信",
    emoji: "💬"
  },
  "com.tencent.mobileqq": {
    label: "QQ",
    emoji: "🐧"
  },
  "com.xingin.xhs": {
    label: "小红书",
    emoji: "📕"
  },
  "com.ss.android.ugc.aweme": {
    label: "抖音",
    emoji: "🎵"
  },
  "com.smile.gifmaker": {
    label: "快手",
    emoji: "🎥"
  },
  "tv.danmaku.bili": {
    label: "B站",
    emoji: "📺"
  },
  "com.sina.weibo": {
    label: "微博",
    emoji: "📰"
  },
  "com.netease.cloudmusic": {
    label: "网易云",
    emoji: "🎵"
  },
  "com.tencent.qqmusic": {
    label: "QQ音乐",
    emoji: "🎶"
  },
  "com.spotify.music": {
    label: "Spotify",
    emoji: "🎧"
  },
  "com.taobao.taobao": {
    label: "淘宝",
    emoji: "🛒"
  },
  "com.xunmeng.pinduoduo": {
    label: "拼多多",
    emoji: "🛒"
  },
  "com.jingdong.app.mall": {
    label: "京东",
    emoji: "🛒"
  },
  "com.tencent.tmgp.sgame": {
    label: "王者荣耀",
    emoji: "⚔️"
  },
  "com.miHoYo.GenshinImpact": {
    label: "原神",
    emoji: "⚔️"
  },
  "com.miHoYo.hkrpg": {
    label: "崩坏:星穹铁道",
    emoji: "✨"
  },
  "com.tencent.tmgp.pubgmhd": {
    label: "和平精英",
    emoji: "🎮"
  },
  "com.tencent.weread": {
    label: "微信读书",
    emoji: "📖"
  },
  "me.ele": {
    label: "饿了么",
    emoji: "🍔"
  },
  "com.sankuai.meituan": {
    label: "美团",
    emoji: "🍱"
  },
  "com.sdu.didi.psnger": {
    label: "滴滴",
    emoji: "🚗"
  },
  "com.alibaba.android.rimet": {
    label: "钉钉",
    emoji: "💼"
  },
  "com.tencent.wework": {
    label: "企业微信",
    emoji: "💼"
  },
  "com.zhiliaoapp.musically": {
    label: "TikTok",
    emoji: "🎵"
  },
  "com.instagram.android": {
    label: "Instagram",
    emoji: "📸"
  },
  "com.twitter.android": {
    label: "X (Twitter)",
    emoji: "🐦"
  },
  "com.discord": {
    label: "Discord",
    emoji: "💜"
  }
};
const t = {
  open: 10,
  close: 8,
  longStay: 6
};
const a = {
  enabled: false,
  pollIntervalMs: 5000,
  appendChatEnabled: false,
  cooldownMs: 1800000,
  longStayMs: 3600000,
  apps: {},
  customApps: {}
};
async function i() {
  try {
    const n = await e.get(o);
    if (n && typeof n == "object") {
      return {
        ...a,
        ...n,
        apps: n.apps || {},
        customApps: n.customApps || {}
      };
    } else {
      return {
        ...a
      };
    }
  } catch (n) {
    return {
      ...a
    };
  }
}
async function c(n) {
  try {
    const l = {
      ...(await i()),
      ...n
    };
    await e.set(o, l);
    s();
    return l;
  } catch (l) {
    console.warn("[appReactionPool] save config failed:", l == null ? undefined : l.message);
    return null;
  }
}
function s() {
  try {
    if (typeof window != "undefined") {
      window.dispatchEvent(new CustomEvent("nuojiji:app-sense-config-changed"));
    }
  } catch (e) {}
}
function m(e, o, n) {
  var t;
  var a;
  var i;
  var c;
  var s;
  var m;
  var r;
  var p;
  var u;
  var d;
  var g;
  var b;
  var j;
  var y;
  const v = {};
  const f = (o == null ? undefined : o[n]) || {};
  for (const [h, w] of Object.entries(l)) {
    const o = ((t = e == null ? undefined : e.apps) == null ? undefined : t[h]) || {};
    v[h] = {
      label: o.label || w.label,
      emoji: o.emoji || w.emoji,
      source: "preset",
      enabled: !!o.enabled,
      hasPool: !!f[h] && (!!((a = f[h].open) == null ? undefined : a.length) || !!((i = f[h].close) == null ? undefined : i.length) || !!((c = f[h].longStay) == null ? undefined : c.length)),
      counts: f[h] ? {
        open: ((s = f[h].open) == null ? undefined : s.length) || 0,
        close: ((m = f[h].close) == null ? undefined : m.length) || 0,
        longStay: ((r = f[h].longStay) == null ? undefined : r.length) || 0
      } : {
        open: 0,
        close: 0,
        longStay: 0
      }
    };
  }
  if (e == null ? undefined : e.customApps) {
    for (const [l, h] of Object.entries(e.customApps)) {
      const o = ((p = e == null ? undefined : e.apps) == null ? undefined : p[l]) || {};
      v[l] = {
        label: h.label || l,
        emoji: h.emoji || "📱",
        source: "custom",
        enabled: !!o.enabled,
        hasPool: !!f[l] && (!!((u = f[l].open) == null ? undefined : u.length) || !!((d = f[l].close) == null ? undefined : d.length) || !!((g = f[l].longStay) == null ? undefined : g.length)),
        counts: f[l] ? {
          open: ((b = f[l].open) == null ? undefined : b.length) || 0,
          close: ((j = f[l].close) == null ? undefined : j.length) || 0,
          longStay: ((y = f[l].longStay) == null ? undefined : y.length) || 0
        } : {
          open: 0,
          close: 0,
          longStay: 0
        }
      };
    }
  }
  return v;
}
async function r() {
  try {
    const o = await e.get(n);
    if (o && typeof o == "object") {
      return o;
    } else {
      return {};
    }
  } catch (o) {
    return {};
  }
}
async function p(o) {
  try {
    await e.set(n, o);
    s();
    return true;
  } catch (l) {
    console.warn("[appReactionPool] save pools failed:", l == null ? undefined : l.message);
    return false;
  }
}
async function u(e, o, n) {
  var l;
  var t;
  var a;
  if (!e || !o) {
    return false;
  }
  const i = await r();
  const c = String(e);
  i[c] ||= {};
  i[c][o] = {
    open: Array.isArray(n.open) ? n.open : ((l = i[c][o]) == null ? undefined : l.open) || [],
    close: Array.isArray(n.close) ? n.close : ((t = i[c][o]) == null ? undefined : t.close) || [],
    longStay: Array.isArray(n.longStay) ? n.longStay : ((a = i[c][o]) == null ? undefined : a.longStay) || [],
    generatedAt: Date.now()
  };
  return p(i);
}
async function d(e, o) {
  const n = await r();
  const l = String(e);
  return !n[l] || !n[l][o] || (delete n[l][o], p(n));
}
export { t as POOL_QUOTA, l as PRESET_APPS, d as deleteAppPool, m as getEffectiveApps, r as loadAllPools, i as loadAppReactionConfig, p as saveAllPools, c as saveAppReactionConfig, u as writeAppPool };