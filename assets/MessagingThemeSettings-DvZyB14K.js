import { r as e, j as s } from "./vendor-react-B2VXkTUV.js";
import { loadMessagingTheme as o, getSavedMessagingThemes as a, getActiveMessagingPresetId as t, previewMessagingTheme as m, updateSavedMessagingTheme as n, saveAndActivateMessagingTheme as r, clearMessagingTheme as i, cancelMessagingPreview as l, activateSavedMessagingTheme as d, addSavedMessagingTheme as c, deleteSavedMessagingTheme as g } from "./messagingThemeService-CTLNGXBa.js";
import { a as h, A as b, y as f, e as p, k as T } from "./native-pet-CTNtZgMA.js";
import { B as j } from "./main-BO9xa-SQ.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const u = e => [{
  name: "--nj-msg-bg",
  desc: e("msgThemeVarBg")
}, {
  name: "--nj-msg-card-bg",
  desc: e("msgThemeVarCardBg")
}, {
  name: "--nj-msg-card-bg-pinned",
  desc: e("msgThemeVarCardBgPinned")
}, {
  name: "--nj-msg-card-radius",
  desc: e("msgThemeVarCardRadius")
}, {
  name: "--nj-msg-card-border",
  desc: e("msgThemeVarCardBorder")
}, {
  name: "--nj-msg-card-padding",
  desc: e("msgThemeVarCardPadding")
}, {
  name: "--nj-msg-card-gap",
  desc: e("msgThemeVarCardGap")
}, {
  name: "--nj-msg-text",
  desc: e("msgThemeVarText")
}, {
  name: "--nj-msg-text-muted",
  desc: e("msgThemeVarTextMuted")
}, {
  name: "--nj-msg-text-time",
  desc: e("msgThemeVarTextTime")
}, {
  name: "--nj-msg-accent",
  desc: e("msgThemeVarAccent")
}, {
  name: "--nj-msg-avatar-radius",
  desc: e("msgThemeVarAvatarRadius")
}, {
  name: "--nj-msg-avatar-shadow",
  desc: e("msgThemeVarAvatarShadow")
}, {
  name: "--nj-msg-unread-bg",
  desc: e("msgThemeVarUnreadBg")
}, {
  name: "--nj-msg-unread-color",
  desc: e("msgThemeVarUnreadColor")
}, {
  name: "--nj-msg-tabbar-bg",
  desc: e("msgThemeVarTabbarBg")
}, {
  name: "--nj-msg-tabbar-active",
  desc: e("msgThemeVarTabbarActive")
}, {
  name: "--nj-msg-tabbar-inactive",
  desc: e("msgThemeVarTabbarInactive")
}, {
  name: "--nj-msg-tabbar-overlay",
  desc: e("msgThemeVarTabbarOverlay")
}, {
  name: "--nj-msg-tabbar-radius",
  desc: e("msgThemeVarTabbarRadius")
}, {
  name: "--nj-msg-tabbar-padding",
  desc: e("msgThemeVarTabbarPadding")
}, {
  name: "--nj-msg-tabbar-border",
  desc: e("msgThemeVarTabbarBorder")
}, {
  name: "--nj-msg-tabbar-shadow",
  desc: e("msgThemeVarTabbarShadow")
}, {
  name: "--nj-msg-font-family",
  desc: e("msgThemeVarFontFamily")
}, {
  name: "--nj-msg-font-family-heading",
  desc: e("msgThemeVarFontFamilyHeading")
}, {
  name: "--nj-msg-font-family-mono",
  desc: e("msgThemeVarFontFamilyMono")
}];
const k = ({
  onClose: k
}) => {
  const {
    t: v
  } = h();
  const [x, H] = e.useState("");
  const [y, C] = e.useState("");
  const [S, w] = e.useState(true);
  const [V, P] = e.useState(false);
  const [B, I] = e.useState([]);
  const [M, z] = e.useState(null);
  const A = e.useRef(null);
  const F = e.useRef(null);
  e.useEffect(() => {
    let e = false;
    Promise.all([o(), a(), t()]).then(([s, o, a]) => {
      if (e) {
        return;
      }
      const t = (s == null ? undefined : s.css) || "";
      H(t);
      C(t);
      I(o);
      z(a);
      w(false);
    });
    return () => {
      e = true;
    };
  }, []);
  e.useEffect(() => {
    if (!S) {
      if (A.current) {
        clearTimeout(A.current);
      }
      A.current = setTimeout(() => {
        m(x);
      }, 250);
      return () => {
        if (A.current) {
          clearTimeout(A.current);
        }
      };
    }
  }, [x, S]);
  const R = e.useCallback(async () => {
    const [e, s] = await Promise.all([a(), t()]);
    I(e);
    z(s);
  }, []);
  const N = e.useCallback(async () => {
    const e = (x || "").trim();
    if (e) {
      const s = j(e);
      if (!s.valid) {
        await b(s.error || v("msgThemeSaveFailAlert"));
        return;
      }
    }
    if (M && (await a()).find(e => e.id === M)) {
      await n(M, {
        css: e
      });
    }
    if (await r("custom", e)) {
      C(e);
      await R();
      await b(v("msgThemeSavedAlert"));
    } else {
      await b(v("msgThemeSaveFailAlert"));
    }
  }, [x, v, M, R]);
  const L = e.useCallback(async () => {
    if (await f(v("msgThemeConfirmClear"))) {
      await i();
      H("");
      C("");
      z(null);
    }
  }, [v]);
  const E = e.useCallback(async () => {
    await l();
    if (k != null) {
      k();
    }
  }, [k]);
  const W = e.useCallback(async e => {
    if (await d(e.id)) {
      H(e.css);
      C(e.css);
      z(e.id);
    } else {
      await b(v("msgThemeSaveFailAlert"));
    }
  }, [v]);
  const D = e.useCallback(async () => {
    const e = (x || "").trim();
    if (!e) {
      await b(v("msgThemeSaveAsEmpty"));
      return;
    }
    const s = j(e);
    if (!s.valid) {
      await b(s.error || v("msgThemeSaveFailAlert"));
      return;
    }
    const o = await p(v("msgThemeSaveAsPrompt"), v("msgThemeDefaultPresetName"));
    if (!o) {
      return;
    }
    const a = await c(o.trim() || v("msgThemeDefaultPresetName"), e);
    if (a) {
      await d(a);
      C(e);
      await R();
      await b(v("msgThemeSavedAsAlert"));
    } else {
      await b(v("msgThemeSaveFailAlert"));
    }
  }, [x, v, R]);
  const G = e.useCallback(async e => {
    const s = await p(v("msgThemeRenamePrompt"), e.name);
    if (s) {
      await n(e.id, {
        name: s.trim() || e.name
      });
      await R();
    }
  }, [v, R]);
  const U = e.useCallback(async e => {
    if (await f(v("msgThemeDeletePresetConfirm", {
      name: e.name
    }) || `Delete "${e.name}"?`)) {
      await g(e.id);
      await R();
    }
  }, [v, R]);
  const $ = e.useCallback(async e => {
    try {
      const o = e.css || "";
      const a = `/* ${e.name || "theme"} — nuojiji messaging app theme */\n\n`;
      const t = new Blob([a + o], {
        type: "text/css;charset=utf-8"
      });
      const m = `${s = e.name, (s || "theme").replace(/[\\/:*?"<>|]/g, "_").replace(/\s+/g, "_").slice(0, 80) || "theme"}.css`;
      await T(t, m);
    } catch (o) {
      console.error("[messagingTheme] export failed:", o);
      b(v("msgThemeExportFailed") + ": " + ((o == null ? undefined : o.message) || o));
    }
    var s;
  }, [v]);
  const O = e.useCallback(() => {
    var e;
    if ((e = F.current) != null) {
      e.click();
    }
  }, []);
  const _ = e.useCallback(async e => {
    var s;
    const o = (s = e.target.files) == null ? undefined : s[0];
    if (e.target) {
      e.target.value = "";
    }
    if (o) {
      try {
        const e = ((await o.text()) || "").trim();
        if (!e) {
          await b(v("msgThemeImportEmpty"));
          return;
        }
        const s = j(e);
        if (!s.valid) {
          await b(s.error || v("msgThemeImportInvalid"));
          return;
        }
        const a = (o.name || "theme").replace(/\.css$/i, "").replace(/^nuojiji_messaging_theme_/i, "");
        const t = await p(v("msgThemeImportNamePrompt"), a || v("msgThemeDefaultPresetName"));
        if (t == null) {
          return;
        }
        if (!(await c((t || "").trim() || a || v("msgThemeDefaultPresetName"), e))) {
          await b(v("msgThemeImportFailed"));
          return;
        }
        await R();
        await b(v("msgThemeImportDone"));
      } catch (a) {
        console.error("[messagingTheme] import failed:", a);
        await b(v("msgThemeImportFailed") + ": " + ((a == null ? undefined : a.message) || a));
      }
    }
  }, [v, R]);
  e.useEffect(() => {
    if (S || !M) {
      return;
    }
    const e = B.find(e => e.id === M);
    if (e) {
      e.css;
    }
  }, [x, M, B, S]);
  const Y = (e => [{
    sel: "#messaging-chat-tab",
    desc: e("msgThemeHookRootChat")
  }, {
    sel: "#messaging-moments-tab",
    desc: e("msgThemeHookRootMoments")
  }, {
    sel: "#messaging-profile-tab",
    desc: e("msgThemeHookRootProfile")
  }, {
    sel: "#messaging-favorites-tab",
    desc: e("msgThemeHookRootFav")
  }, {
    sel: "#messaging-bottom-bar",
    desc: e("msgThemeHookRootBottomBar")
  }, {
    sel: ".nj-chat-tab-decor-top / -mid / -bottom",
    desc: e("msgThemeHookDecorChat")
  }, {
    sel: ".nj-moments-decor-top / -mid / -bottom",
    desc: e("msgThemeHookDecorMoments")
  }, {
    sel: ".nj-profile-decor-top / -mid / -bottom",
    desc: e("msgThemeHookDecorProfile")
  }, {
    sel: ".nj-fav-decor-top / -bottom",
    desc: e("msgThemeHookDecorFav")
  }, {
    sel: ".nj-favorites-tab-header",
    desc: e("msgThemeHookFavHeader")
  }, {
    sel: ".nj-favorites-tab-title",
    desc: e("msgThemeHookFavTitle")
  }, {
    sel: ".nj-chat-tab-header",
    desc: e("msgThemeHookHeader")
  }, {
    sel: ".nj-chat-tab-header-back",
    desc: e("msgThemeHookHeaderBack")
  }, {
    sel: ".nj-chat-tab-header-title-btn",
    desc: e("msgThemeHookHeaderTitle")
  }, {
    sel: ".nj-chat-tab-header-edit",
    desc: e("msgThemeHookHeaderEdit")
  }, {
    sel: ".nj-chat-tab-search",
    desc: e("msgThemeHookSearch")
  }, {
    sel: ".nj-chat-tab-notes",
    desc: e("msgThemeHookNotes")
  }, {
    sel: ".nj-chat-tab-note-item",
    desc: e("msgThemeHookNoteItem")
  }, {
    sel: ".nj-chat-tab-note-mine / -friend",
    desc: e("msgThemeHookNoteSub")
  }, {
    sel: ".nj-chat-tab-note-bubble",
    desc: e("msgThemeHookNoteBubble")
  }, {
    sel: ".nj-chat-tab-note-avatar",
    desc: e("msgThemeHookNoteAvatar")
  }, {
    sel: ".nj-chat-tab-note-name",
    desc: e("msgThemeHookNoteName")
  }, {
    sel: ".nj-chat-tab-note-liked",
    desc: e("msgThemeHookNoteLiked")
  }, {
    sel: ".nj-chat-tab-section-title",
    desc: e("msgThemeHookSectionTitle")
  }, {
    sel: ".nj-chat-tab-list",
    desc: e("msgThemeHookList")
  }, {
    sel: ".nj-chat-item",
    desc: e("msgThemeHookItem")
  }, {
    sel: ".nj-chat-item-char / -group / -user",
    desc: e("msgThemeHookItemSub")
  }, {
    sel: ".nj-chat-item-pinned",
    desc: e("msgThemeHookItemPinned")
  }, {
    sel: ".nj-chat-item-pin-mark",
    desc: e("msgThemeHookItemPinMark")
  }, {
    sel: ".nj-chat-item-unread",
    desc: e("msgThemeHookItemUnread")
  }, {
    sel: ".nj-chat-item-avatar",
    desc: e("msgThemeHookItemAvatar")
  }, {
    sel: ".nj-chat-item-avatar-group-grid",
    desc: e("msgThemeHookGroupGrid")
  }, {
    sel: ".nj-chat-item-avatar-group-cell",
    desc: e("msgThemeHookGroupCell")
  }, {
    sel: ".nj-chat-item-unread-badge",
    desc: e("msgThemeHookUnreadBadge")
  }, {
    sel: ".nj-chat-item-name",
    desc: e("msgThemeHookItemName")
  }, {
    sel: ".nj-chat-item-time",
    desc: e("msgThemeHookItemTime")
  }, {
    sel: ".nj-chat-item-preview",
    desc: e("msgThemeHookItemPreview")
  }, {
    sel: ".nj-chat-item-badge",
    desc: e("msgThemeHookItemBadge")
  }, {
    sel: ".nj-moments-tab",
    desc: e("msgThemeHookMomentsRoot")
  }, {
    sel: ".nj-moments-header",
    desc: e("msgThemeHookMomentsHeader")
  }, {
    sel: ".nj-moments-header-btn",
    desc: e("msgThemeHookMomentsHeaderBtn")
  }, {
    sel: ".nj-moments-header-btn-clear / -gen / -post",
    desc: e("msgThemeHookMomentsHeaderBtnSub")
  }, {
    sel: ".nj-moments-header-sticky",
    desc: e("msgThemeHookMomentsHeaderSticky")
  }, {
    sel: ".nj-moments-header-title",
    desc: e("msgThemeHookMomentsHeaderTitle")
  }, {
    sel: ".nj-profile-about-fade",
    desc: e("msgThemeHookProfileAboutFade")
  }, {
    sel: ".nj-moments-cover",
    desc: e("msgThemeHookMomentsCover")
  }, {
    sel: ".nj-moments-cover-gradient",
    desc: e("msgThemeHookMomentsCoverGrad")
  }, {
    sel: ".nj-moments-cover-username",
    desc: e("msgThemeHookMomentsCoverName")
  }, {
    sel: ".nj-moments-cover-avatar",
    desc: e("msgThemeHookMomentsCoverAvatar")
  }, {
    sel: ".nj-moments-notif-entry",
    desc: e("msgThemeHookMomentsNotif")
  }, {
    sel: ".nj-moments-feed",
    desc: e("msgThemeHookMomentsFeed")
  }, {
    sel: ".nj-moments-post",
    desc: e("msgThemeHookMomentsPost")
  }, {
    sel: ".nj-moments-post-char / -user",
    desc: e("msgThemeHookMomentsPostSub")
  }, {
    sel: ".nj-moments-post-avatar",
    desc: e("msgThemeHookMomentsPostAvatar")
  }, {
    sel: ".nj-moments-post-name",
    desc: e("msgThemeHookMomentsPostName")
  }, {
    sel: ".nj-moments-post-text",
    desc: e("msgThemeHookMomentsPostText")
  }, {
    sel: ".nj-moments-post-imgs",
    desc: e("msgThemeHookMomentsPostImgs")
  }, {
    sel: ".nj-moments-post-imgs-1/-4/-9",
    desc: e("msgThemeHookMomentsPostImgsSub")
  }, {
    sel: ".nj-moments-post-img-cell",
    desc: e("msgThemeHookMomentsPostImgCell")
  }, {
    sel: ".nj-moments-post-meta",
    desc: e("msgThemeHookMomentsPostMeta")
  }, {
    sel: ".nj-moments-post-time",
    desc: e("msgThemeHookMomentsPostTime")
  }, {
    sel: ".nj-moments-post-location",
    desc: e("msgThemeHookMomentsPostLoc")
  }, {
    sel: ".nj-moments-post-actions-trigger",
    desc: e("msgThemeHookMomentsActionsTrig")
  }, {
    sel: ".nj-moments-post-actions-menu",
    desc: e("msgThemeHookMomentsActionsMenu")
  }, {
    sel: ".nj-moments-engagement",
    desc: e("msgThemeHookMomentsEngagement")
  }, {
    sel: ".nj-moments-likes",
    desc: e("msgThemeHookMomentsLikes")
  }, {
    sel: ".nj-moments-like-name",
    desc: e("msgThemeHookMomentsLikeName")
  }, {
    sel: ".nj-moments-comment",
    desc: e("msgThemeHookMomentsComment")
  }, {
    sel: ".nj-moments-comment-author",
    desc: e("msgThemeHookMomentsCommentAuthor")
  }, {
    sel: ".nj-moments-comment-content",
    desc: e("msgThemeHookMomentsCommentContent")
  }, {
    sel: ".nj-profile-tab",
    desc: e("msgThemeHookProfileRoot")
  }, {
    sel: ".nj-profile-tab-header",
    desc: e("msgThemeHookProfileHeader")
  }, {
    sel: ".nj-profile-content",
    desc: e("msgThemeHookProfileContent")
  }, {
    sel: ".nj-profile-top",
    desc: e("msgThemeHookProfileTop")
  }, {
    sel: ".nj-profile-avatar",
    desc: e("msgThemeHookProfileAvatar")
  }, {
    sel: ".nj-profile-stats",
    desc: e("msgThemeHookProfileStats")
  }, {
    sel: ".nj-profile-stat-item",
    desc: e("msgThemeHookProfileStatItem")
  }, {
    sel: ".nj-profile-stat-count",
    desc: e("msgThemeHookProfileStatCount")
  }, {
    sel: ".nj-profile-stat-label",
    desc: e("msgThemeHookProfileStatLabel")
  }, {
    sel: ".nj-profile-name",
    desc: e("msgThemeHookProfileName")
  }, {
    sel: ".nj-profile-handle",
    desc: e("msgThemeHookProfileHandle")
  }, {
    sel: ".nj-profile-signature",
    desc: e("msgThemeHookProfileSig")
  }, {
    sel: ".nj-profile-hobbies",
    desc: e("msgThemeHookProfileHobbies")
  }, {
    sel: ".nj-profile-hobby-chip",
    desc: e("msgThemeHookProfileHobbyChip")
  }, {
    sel: ".nj-profile-info-bar",
    desc: e("msgThemeHookProfileInfoBar")
  }, {
    sel: ".nj-profile-info-item",
    desc: e("msgThemeHookProfileInfoItem")
  }, {
    sel: ".nj-profile-info-born / -location",
    desc: e("msgThemeHookProfileInfoSub")
  }, {
    sel: ".nj-profile-info-icon",
    desc: e("msgThemeHookProfileInfoIcon")
  }, {
    sel: ".nj-profile-info-label",
    desc: e("msgThemeHookProfileInfoLabel")
  }, {
    sel: ".nj-profile-info-value",
    desc: e("msgThemeHookProfileInfoValue")
  }, {
    sel: ".nj-profile-about",
    desc: e("msgThemeHookProfileAbout")
  }, {
    sel: ".nj-profile-about-text",
    desc: e("msgThemeHookProfileAboutText")
  }, {
    sel: ".nj-profile-section-title",
    desc: e("msgThemeHookProfileSectionTitle")
  }, {
    sel: ".nj-profile-gallery",
    desc: e("msgThemeHookProfileGallery")
  }, {
    sel: ".nj-profile-gallery-grid",
    desc: e("msgThemeHookProfileGalleryGrid")
  }, {
    sel: ".nj-profile-gallery-cell",
    desc: e("msgThemeHookProfileGalleryCell")
  }, {
    sel: ".nj-tab-bottom-bar",
    desc: e("msgThemeHookTabbar")
  }, {
    sel: ".nj-tab-bottom-item",
    desc: e("msgThemeHookTabbarItem")
  }, {
    sel: ".nj-tab-bottom-item-chat / -moments / -favorites / -profile",
    desc: e("msgThemeHookTabbarSub")
  }, {
    sel: ".nj-tab-bottom-item-active",
    desc: e("msgThemeHookTabbarActive")
  }, {
    sel: ".nj-tab-bottom-icon",
    desc: e("msgThemeHookTabbarIcon")
  }, {
    sel: ".nj-tab-bottom-total-unread",
    desc: e("msgThemeHookTabbarUnread")
  }, {
    sel: ".nj-tab-bottom-moments-dot",
    desc: e("msgThemeHookTabbarMomentsDot")
  }])(v);
  const q = [...u(v), {
    name: "--nj-msg-chat-bg",
    desc: v("msgThemeVarChatBg")
  }, {
    name: "--nj-msg-moments-bg",
    desc: v("msgThemeVarMomentsBg")
  }, {
    name: "--nj-msg-profile-bg",
    desc: v("msgThemeVarProfileBg")
  }, {
    name: "--nj-msg-fav-bg",
    desc: v("msgThemeVarFavBg")
  }, {
    name: "--nj-msg-bg-overlay",
    desc: v("msgThemeVarBgOverlay")
  }, {
    name: "--nj-msg-{tab}-bg-overlay",
    desc: v("msgThemeVarTabBgOverlay")
  }, {
    name: "--nj-msg-card-transition",
    desc: v("msgThemeVarCardTransition")
  }, {
    name: "--nj-msg-card-active-transform",
    desc: v("msgThemeVarCardActive")
  }, {
    name: "--nj-msg-card-hover-transform",
    desc: v("msgThemeVarCardHover")
  }, {
    name: "--nj-msg-tabbar-active-transform",
    desc: v("msgThemeVarTabbarActive2")
  }, {
    name: "--nj-msg-fade-in-duration",
    desc: v("msgThemeVarFadeIn")
  }, {
    name: "--nj-msg-profile-avatar-size",
    desc: v("msgThemeVarProfileAvatarSize")
  }, {
    name: "--nj-msg-profile-avatar-radius",
    desc: v("msgThemeVarProfileAvatarRadius")
  }, {
    name: "--nj-msg-profile-name-color",
    desc: v("msgThemeVarProfileNameColor")
  }, {
    name: "--nj-msg-profile-name-size",
    desc: v("msgThemeVarProfileNameSize")
  }, {
    name: "--nj-msg-profile-signature-color",
    desc: v("msgThemeVarProfileSigColor")
  }, {
    name: "--nj-msg-profile-hobby-chip-bg",
    desc: v("msgThemeVarProfileHobbyBg")
  }, {
    name: "--nj-msg-profile-hobby-chip-color",
    desc: v("msgThemeVarProfileHobbyColor")
  }, {
    name: "--nj-msg-profile-section-title-color",
    desc: v("msgThemeVarProfileSectionColor")
  }, {
    name: "--nj-msg-profile-gallery-cell-radius",
    desc: v("msgThemeVarProfileGalleryRadius")
  }, {
    name: "--nj-msg-moments-cover-height",
    desc: v("msgThemeVarMomentsCoverHeight")
  }, {
    name: "--nj-msg-moments-cover-username-color",
    desc: v("msgThemeVarMomentsCoverNameColor")
  }, {
    name: "--nj-msg-moments-post-card-bg",
    desc: v("msgThemeVarMomentsPostBg")
  }, {
    name: "--nj-msg-moments-post-card-radius",
    desc: v("msgThemeVarMomentsPostRadius")
  }, {
    name: "--nj-msg-moments-post-name-color",
    desc: v("msgThemeVarMomentsPostNameColor")
  }, {
    name: "--nj-msg-moments-like-color",
    desc: v("msgThemeVarMomentsLikeColor")
  }, {
    name: "--nj-msg-moments-comment-bg",
    desc: v("msgThemeVarMomentsCommentBg")
  }, {
    name: "--nj-msg-chat-search-bg",
    desc: v("msgThemeVarChatSearchBg")
  }, {
    name: "--nj-msg-chat-search-radius",
    desc: v("msgThemeVarChatSearchRadius")
  }, {
    name: "--nj-msg-chat-note-bubble-bg",
    desc: v("msgThemeVarChatNoteBg")
  }, {
    name: "--nj-msg-chat-note-bubble-color",
    desc: v("msgThemeVarChatNoteColor")
  }, {
    name: "--nj-msg-chat-section-title-color",
    desc: v("msgThemeVarChatSectionColor")
  }, {
    name: "--nj-msg-chat-header-title-color",
    desc: v("msgThemeVarChatHeaderTitleColor")
  }];
  const J = [{
    name: "--nj-msg-bg-image",
    desc: v("msgThemeImgVarAppBg")
  }, {
    name: "--nj-msg-chat-bg-image",
    desc: v("msgThemeImgVarChatBg")
  }, {
    name: "--nj-msg-moments-bg-image",
    desc: v("msgThemeImgVarMomentsBg")
  }, {
    name: "--nj-msg-profile-bg-image",
    desc: v("msgThemeImgVarProfileBg")
  }, {
    name: "--nj-msg-fav-bg-image",
    desc: v("msgThemeImgVarFavBg")
  }, {
    name: "--nj-msg-header-bg-image",
    desc: v("msgThemeImgVarHeaderBg")
  }, {
    name: "--nj-msg-tabbar-bg-image",
    desc: v("msgThemeImgVarTabbarBg")
  }, {
    name: "--nj-msg-card-bg-image",
    desc: v("msgThemeImgVarCardBg")
  }, {
    name: "--nj-msg-avatar-bg-image",
    desc: v("msgThemeImgVarAvatar")
  }, {
    name: "--nj-msg-unread-bg-image",
    desc: v("msgThemeImgVarUnread")
  }];
  const [K, Q] = e.useState("vars");
  const [X, Z] = e.useState(() => typeof window != "undefined" ? window.innerHeight : 800);
  const [ee, se] = e.useState(0);
  e.useEffect(() => {
    if (typeof window == "undefined") {
      return;
    }
    const e = window.visualViewport;
    const s = () => {
      const s = window.innerHeight;
      const o = e ? e.height : s;
      const a = (e == null ? undefined : e.offsetTop) || 0;
      const t = Math.max(0, s - o - a);
      Z(o);
      se(t);
    };
    s();
    if (e) {
      e.addEventListener("resize", s);
      e.addEventListener("scroll", s);
    }
    window.addEventListener("resize", s);
    const o = () => {
      [60, 200, 400, 700].forEach(e => setTimeout(s, e));
    };
    document.addEventListener("focusin", o);
    document.addEventListener("focusout", o);
    return () => {
      if (e) {
        e.removeEventListener("resize", s);
        e.removeEventListener("scroll", s);
      }
      window.removeEventListener("resize", s);
      document.removeEventListener("focusin", o);
      document.removeEventListener("focusout", o);
    };
  }, []);
  const oe = x !== y;
  return s.jsxs("div", {
    className: "messaging-theme-settings-overlay",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "#ffffff",
      display: "flex",
      flexDirection: "column",
      height: `${X}px`
    },
    children: [s.jsxs("div", {
      style: {
        padding: "14px 18px",
        paddingTop: "calc(14px + var(--nuo-safe-top, env(safe-area-inset-top, 0px)))",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0
      },
      children: [s.jsx("button", {
        onClick: E,
        style: {
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: 22,
          color: "#888",
          lineHeight: 1,
          padding: 4
        },
        children: "×"
      }), s.jsx("div", {
        style: {
          fontWeight: 600,
          fontSize: 16,
          color: "#1a1a1a"
        },
        children: v("msgThemeTitle")
      }), s.jsx("button", {
        onClick: N,
        disabled: S || !oe,
        style: {
          background: "transparent",
          border: "none",
          cursor: oe ? "pointer" : "not-allowed",
          fontSize: 14,
          fontWeight: 600,
          color: oe ? "#0b84ff" : "#bbb",
          padding: 4
        },
        children: v(oe ? "msgThemeSave" : "msgThemeNoChange")
      })]
    }), s.jsx("div", {
      style: {
        padding: "10px 14px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        flexShrink: 0,
        background: "#fbfbfd"
      },
      children: s.jsx("textarea", {
        value: x,
        onChange: e => H(e.target.value),
        placeholder: v("msgThemeEditorPlaceholder"),
        spellCheck: false,
        style: {
          width: "100%",
          height: ee > 0 ? `${Math.max(120, Math.floor(X * 0.3))}px` : "35vh",
          padding: 12,
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: 10,
          fontFamily: "ui-monospace, Menlo, Consolas, \"Courier New\", monospace",
          fontSize: 16,
          lineHeight: 1.55,
          color: "#1a1a1a",
          background: "#ffffff",
          resize: "none",
          outline: "none",
          boxSizing: "border-box"
        }
      })
    }), s.jsx("div", {
      style: {
        overflowY: "auto",
        flex: 1,
        padding: "14px 18px"
      },
      children: S ? s.jsx("div", {
        style: {
          padding: 40,
          textAlign: "center",
          color: "#888"
        },
        children: v("msgThemeLoading")
      }) : s.jsxs(s.Fragment, {
        children: [s.jsxs("div", {
          style: {
            marginBottom: 14
          },
          children: [s.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8
            },
            children: [s.jsxs("div", {
              style: {
                fontSize: 13,
                fontWeight: 600,
                color: "#555"
              },
              children: [v("msgThemeMyPresetsLabel"), B.length > 0 && s.jsxs("span", {
                style: {
                  color: "#aaa",
                  fontWeight: 400,
                  marginLeft: 6
                },
                children: ["(", B.length, ")"]
              })]
            }), s.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12
              },
              children: [s.jsx("button", {
                onClick: O,
                style: {
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  color: "#5b8def",
                  padding: 0
                },
                children: v("msgThemeImportCss")
              }), s.jsx("button", {
                onClick: D,
                disabled: !x.trim(),
                style: {
                  background: "transparent",
                  border: "none",
                  cursor: x.trim() ? "pointer" : "not-allowed",
                  fontSize: 12,
                  color: x.trim() ? "#5b8def" : "#bbb",
                  padding: 0
                },
                children: v("msgThemeSaveAsPreset")
              })]
            })]
          }), s.jsx("input", {
            ref: F,
            type: "file",
            accept: ".css,text/css",
            style: {
              display: "none"
            },
            onChange: _
          }), B.length === 0 ? s.jsx("div", {
            style: {
              fontSize: 12,
              color: "#aaa",
              padding: "8px 0"
            },
            children: v("msgThemeNoPresets")
          }) : s.jsx("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 8
            },
            children: B.map(e => {
              const o = M === e.id;
              return s.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                  background: o ? "#0b84ff" : "#fff4e6",
                  color: o ? "#fff" : "#7a4b00",
                  border: "1px solid " + (o ? "#0b84ff" : "rgba(180, 120, 0, 0.18)"),
                  borderRadius: 10,
                  overflow: "hidden",
                  fontWeight: 500
                },
                children: [s.jsxs("button", {
                  onClick: () => W(e),
                  title: o ? v("msgThemeActiveBadge") : "",
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "inherit",
                    cursor: "pointer",
                    padding: "8px 12px",
                    fontSize: 13,
                    fontWeight: 500,
                    maxWidth: 160,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: [o ? "✓ " : "", e.name]
                }), s.jsx("button", {
                  onClick: () => G(e),
                  title: v("msgThemeRename"),
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "inherit",
                    cursor: "pointer",
                    padding: "8px 6px",
                    fontSize: 12,
                    opacity: 0.75
                  },
                  children: "✎"
                }), s.jsx("button", {
                  onClick: () => $(e),
                  title: v("msgThemeExportCss"),
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "inherit",
                    cursor: "pointer",
                    padding: "8px 6px",
                    fontSize: 12,
                    opacity: 0.75
                  },
                  children: "⤓"
                }), s.jsx("button", {
                  onClick: () => U(e),
                  title: v("msgThemeDelete"),
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "inherit",
                    cursor: "pointer",
                    padding: "8px 10px 8px 4px",
                    fontSize: 14,
                    opacity: 0.75
                  },
                  children: "×"
                })]
              }, e.id);
            })
          })]
        }), s.jsxs("div", {
          style: {
            marginBottom: 12
          },
          children: [s.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8
            },
            children: [s.jsx("div", {
              style: {
                fontSize: 13,
                fontWeight: 600,
                color: "#555"
              },
              children: v("msgThemeCustomCssLabel")
            }), s.jsx("button", {
              onClick: () => P(e => !e),
              style: {
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                color: "#5b8def",
                padding: 0
              },
              children: v(V ? "msgThemeHideHooks" : "msgThemeShowHooks")
            })]
          }), V && s.jsxs("div", {
            style: {
              background: "#f7f8fa",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 8,
              padding: "10px 12px",
              marginBottom: 8,
              fontSize: 12,
              color: "#444"
            },
            children: [s.jsxs("div", {
              style: {
                display: "flex",
                gap: 4,
                marginBottom: 8,
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                paddingBottom: 6
              },
              children: [s.jsx("button", {
                onClick: () => Q("vars"),
                style: {
                  background: K === "vars" ? "#0b84ff" : "transparent",
                  color: K === "vars" ? "#fff" : "#555",
                  border: "none",
                  padding: "4px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  borderRadius: 6,
                  cursor: "pointer"
                },
                children: v("msgThemeHintTabVars")
              }), s.jsx("button", {
                onClick: () => Q("classes"),
                style: {
                  background: K === "classes" ? "#0b84ff" : "transparent",
                  color: K === "classes" ? "#fff" : "#555",
                  border: "none",
                  padding: "4px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  borderRadius: 6,
                  cursor: "pointer"
                },
                children: v("msgThemeHintTabClasses")
              }), s.jsx("button", {
                onClick: () => Q("images"),
                style: {
                  background: K === "images" ? "#0b84ff" : "transparent",
                  color: K === "images" ? "#fff" : "#555",
                  border: "none",
                  padding: "4px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  borderRadius: 6,
                  cursor: "pointer"
                },
                children: v("msgThemeHintTabImages")
              })]
            }), s.jsxs("div", {
              style: {
                maxHeight: 220,
                overflowY: "auto"
              },
              children: [K === "vars" && s.jsxs(s.Fragment, {
                children: [s.jsx("div", {
                  style: {
                    color: "#666",
                    fontSize: 11,
                    marginBottom: 6,
                    lineHeight: 1.5
                  },
                  children: v("msgThemeVarsIntro")
                }), q.map((e, o) => s.jsxs("div", {
                  style: {
                    marginBottom: 4,
                    lineHeight: 1.55
                  },
                  children: [s.jsx("code", {
                    style: {
                      background: "#e6f4ea",
                      color: "#1d6b3a",
                      padding: "1px 6px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontFamily: "ui-monospace, Menlo, Consolas, monospace"
                    },
                    children: e.name
                  }), s.jsx("span", {
                    style: {
                      color: "#666",
                      marginLeft: 8
                    },
                    children: e.desc
                  })]
                }, o))]
              }), K === "classes" && s.jsx(s.Fragment, {
                children: Y.map((e, o) => s.jsxs("div", {
                  style: {
                    marginBottom: 4,
                    lineHeight: 1.55
                  },
                  children: [s.jsx("code", {
                    style: {
                      background: "#e8eef5",
                      color: "#1d4373",
                      padding: "1px 6px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontFamily: "ui-monospace, Menlo, Consolas, monospace"
                    },
                    children: e.sel
                  }), s.jsx("span", {
                    style: {
                      color: "#666",
                      marginLeft: 8
                    },
                    children: e.desc
                  })]
                }, o))
              }), K === "images" && s.jsxs(s.Fragment, {
                children: [s.jsx("div", {
                  style: {
                    color: "#666",
                    fontSize: 11,
                    marginBottom: 8,
                    lineHeight: 1.55
                  },
                  children: v("msgThemeImgIntro")
                }), s.jsx("div", {
                  style: {
                    fontWeight: 600,
                    color: "#444",
                    fontSize: 12,
                    marginBottom: 4
                  },
                  children: v("msgThemeImgVarsTitle")
                }), J.map((e, o) => s.jsxs("div", {
                  style: {
                    marginBottom: 4,
                    lineHeight: 1.55
                  },
                  children: [s.jsx("code", {
                    style: {
                      background: "#fdf0d5",
                      color: "#8a4500",
                      padding: "1px 6px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontFamily: "ui-monospace, Menlo, Consolas, monospace"
                    },
                    children: e.name
                  }), s.jsx("span", {
                    style: {
                      color: "#666",
                      marginLeft: 8
                    },
                    children: e.desc
                  })]
                }, o)), s.jsx("div", {
                  style: {
                    marginTop: 12,
                    fontWeight: 600,
                    color: "#444",
                    fontSize: 12,
                    marginBottom: 4
                  },
                  children: v("msgThemeImgSyntaxTitle")
                }), s.jsx("pre", {
                  style: {
                    background: "#1a1a1a",
                    color: "#e8eaf2",
                    padding: 8,
                    borderRadius: 6,
                    fontSize: 10,
                    lineHeight: 1.5,
                    fontFamily: "ui-monospace, Menlo, Consolas, monospace",
                    margin: "4px 0 8px",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-all"
                  },
                  children: "/* URL 圖（推薦 https） */\n--nj-msg-bg-image: url('https://i.imgur.com/x.jpg');\n\n/* GIF 動圖 */\n--nj-msg-bg-image: url('https://media.giphy.com/x.gif');\n\n/* base64 內嵌（不依賴外網） */\n--nj-msg-bg-image: url('data:image/png;base64,iVBOR...');\n\n/* emoji 當圖（emojicdn 線上服務） */\n--nj-msg-avatar-bg-image: url('https://emojicdn.elk.sh/🦄');"
                }), s.jsx("div", {
                  style: {
                    fontWeight: 600,
                    color: "#444",
                    fontSize: 12,
                    marginBottom: 4
                  },
                  children: v("msgThemeImgStickerTitle")
                }), s.jsx("pre", {
                  style: {
                    background: "#1a1a1a",
                    color: "#e8eaf2",
                    padding: 8,
                    borderRadius: 6,
                    fontSize: 10,
                    lineHeight: 1.5,
                    fontFamily: "ui-monospace, Menlo, Consolas, monospace",
                    margin: "4px 0",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-all"
                  },
                  children: "/* 在任何元素貼自定義裝飾（::before 或 ::after） */\n.nj-chat-tab-header::after {\n    content: '';\n    position: absolute;\n    top: 10px; right: 50px;\n    width: 50px; height: 50px;\n    background-image: url('你的圖.gif');\n    background-size: contain;\n    background-repeat: no-repeat;\n    pointer-events: none;\n}\n.nj-chat-tab-header { position: relative !important; }"
                })]
              })]
            }), s.jsx("div", {
              style: {
                marginTop: 8,
                color: "#888",
                fontSize: 11
              },
              children: v("msgThemeHooksFooter")
            })]
          })]
        })]
      })
    }), ee === 0 && s.jsx("div", {
      style: {
        padding: "12px 16px",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        display: "flex",
        gap: 10,
        flexShrink: 0
      },
      children: s.jsx("button", {
        onClick: L,
        disabled: S || !x && !y,
        style: {
          flex: 1,
          padding: "11px 0",
          background: "#f3f4f6",
          color: "#d33",
          border: "none",
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 500,
          cursor: x || y ? "pointer" : "not-allowed",
          opacity: x || y ? 1 : 0.5
        },
        children: v("msgThemeClear")
      })
    })]
  });
};
export { k as default };