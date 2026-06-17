const e = {
  rerollVariantsEnabled: false,
  crossContext: false,
  autoTranslate: false,
  autoTranslateExpand: false,
  isRemoteLocation: false,
  voiceEnabled: false,
  autoVoice: false,
  theaterMode: false,
  theaterAutoReplyAi: false,
  allowActionsInIM: false,
  consolePanelEnabled: false,
  minSentencesEnabled: false,
  maxSentencesEnabled: false,
  singleBubbleMode: false,
  isBlocked: false,
  visionEnabled: false,
  stickerVisionEnabled: false,
  stickerVisionCache: true,
  showUserAvatarToChar: false,
  allowCharSetAvatar: false,
  allowCharRelChange: false,
  autoOfflineInvite: false,
  disableCharHangup: false,
  callNarrationEnabled: false,
  bannerMuted: false,
  summaryUseJailbreak: false,
  stickerSendEnabled: true,
  realTimeAware: true,
  sceneTachieEnabled: true,
  npcEnabled: true,
  privateGroupTrigger: true,
  theaterNarration: true,
  thinkingPanelEnabled: true,
  imageGenEnabled: true,
  userAvatar: null,
  partnerAvatar: null,
  blockedAt: null,
  defaultSceneId: null,
  defaultTachieCategory: null,
  relationship: "",
  charToUserRelationship: "",
  minimaxTimbreId: "",
  elevenVoiceId: "",
  sovitsRefAudioPath: "",
  sovitsRefText: "",
  sovitsGptPath: "",
  sovitsSovitsPath: "",
  sovitsGsviVoice: "",
  sovitsGsviModel: "",
  sovitsGsviLang: "",
  sovitsGsviEmotion: "",
  sovitsApiVersion: "v2",
  pronunciationDict: "",
  theaterAutoReply: "",
  theaterAutoReplyBusy: "",
  theaterAutoReplySleep: "",
  theaterAutoReplyDefault: "",
  charImagePrompt: "",
  customSummaryInstructions: "",
  xinshengTemplate: "",
  xinshengCustomPrompt: "",
  xinshengExtractRegex: "",
  crossContextDepth: 0,
  autoSummaryFrequency: 0,
  memoryDepth: 20,
  minSentences: 2,
  maxSentences: 5,
  voiceSpeed: 1,
  charLanguage: "Japanese",
  userLocation: "Taipei",
  charLocation: "Tokyo",
  userRealLocation: "Taipei",
  charRealLocation: "Tokyo",
  voiceLanguage: "auto",
  imageQuality: "auto",
  customSummaryWordCount: "100-150",
  voiceProvider: "minimax",
  npcMsgMode: "merged",
  activeTachieCategory: "預設",
  selectedSyncChars: [],
  callTachies: [],
  callTachieCategories: ["預設"],
  callBackgrounds: [{
    id: "default_black",
    name: "預設 (Default)",
    url: "#000000"
  }],
  ltPlaylistIds: [],
  summaryJailbreakIds: [],
  userDndWindows: []
};
const a = {};
for (const [n, o] of Object.entries(e)) {
  a[n] = typeof o == "object" && o !== null ? JSON.stringify(o) : null;
}
function t(t) {
  const n = {};
  for (const o in t) {
    const i = t[o];
    if (i !== undefined) {
      if (o in e) {
        if (i === e[o]) {
          continue;
        }
        if (a[o] !== null && typeof i == "object" && i !== null && JSON.stringify(i) === a[o]) {
          continue;
        }
      }
      n[o] = i;
    }
  }
  return n;
}
export { e as CHAT_SETTINGS_DEFAULTS, t as compactChatSettings };