import { lazyWithRetry } from './lazyWithRetry.jsx';

const placeholder = (id) => lazyWithRetry(() => import('../screens/placeholder/PlaceholderScreen.jsx').then((module) => ({
  default: (props) => <module.default {...props} appId={id} />,
})));

const settingsScreen = lazyWithRetry(() => import('../screens/settings/ApiSettingsScreen.jsx'));

export const appRegistry = [
  { id: 'messages', screenId: 'chat-list-screen', labelKey: 'homeAppIG', fallbackLabel: '消息', icon: '💬', placement: 'home', component: placeholder('messages'), sourceChunk: 'ChatDetailScreen-qTVdjKXv.js' },
  { id: 'world-book', screenId: 'world-book-screen', labelKey: 'homeAppWorldBook', fallbackLabel: '世界书', icon: '📖', placement: 'home', component: placeholder('world-book'), sourceChunk: 'WorldBookScreen-D1G9FIaM.js' },
  { id: 'appearance', screenId: 'wallpaper-screen', labelKey: 'homeAppAppearance', fallbackLabel: '外观', icon: '🎨', placement: 'home', component: placeholder('appearance'), sourceChunk: 'WallpaperScreen-C9FS8ZD1.js' },
  { id: 'pomodoro', screenId: 'pomodoro-screen', labelKey: 'homeAppPomodoro', fallbackLabel: '番茄钟', icon: '🍅', placement: 'home', component: placeholder('pomodoro'), sourceChunk: 'PomodoroScreen-BTEp3J12.js' },
  { id: 'couples', screenId: 'couples-screen', labelKey: 'homeAppCouples', fallbackLabel: '情侣空间', icon: '💞', placement: 'home', component: placeholder('couples'), sourceChunk: 'CouplesScreen-CSLmORp5.js' },
  { id: 'going-out', screenId: 'going-out-screen', labelKey: 'homeAppGoingOut', fallbackLabel: '外出', icon: '🚶', placement: 'home', component: placeholder('going-out'), sourceChunk: 'GoingOutScreen-LoZEj3iQ.js' },
  { id: 'isekai', screenId: 'isekai-screen', labelKey: 'homeAppIsekai', fallbackLabel: '异世界', icon: '🌀', placement: 'home', component: placeholder('isekai'), sourceChunk: 'IsekaiScreen-De0VH1_p.js' },
  { id: 'did-you-eat', screenId: 'did-you-eat-screen', labelKey: 'homeAppDidYouEat', fallbackLabel: '吃了吗', icon: '🍜', placement: 'home', component: placeholder('did-you-eat'), sourceChunk: 'DidYouEatScreen-DO1_hMbA.js' },
  { id: 'game-lobby', screenId: 'game-lobby-screen', labelKey: 'homeAppGameLobby', fallbackLabel: '游戏大厅', icon: '🎮', placement: 'home', component: placeholder('game-lobby'), sourceChunk: 'GameLobbyScreen-CRiLQuDu.js' },
  { id: 'monitor', screenId: 'monitor-screen', labelKey: 'homeAppMonitor', fallbackLabel: '监视器', icon: '📟', placement: 'home', component: placeholder('monitor'), sourceChunk: 'MonitorScreen-Btym3LK5.js' },
  { id: 'chikan-sim', screenId: 'chikan-sim-screen', labelKey: 'homeAppChikanSim', fallbackLabel: '心动观察', icon: '💓', placement: 'home', component: placeholder('chikan-sim'), sourceChunk: 'ChikanSimScreen-CKQ_xeVT.js' },
  { id: 'roster', screenId: 'character-roster-screen', labelKey: 'homeAppRoster', fallbackLabel: '名册', icon: '🗂️', placement: 'home', component: placeholder('roster'), sourceChunk: 'CharacterRosterApp-x5i2x52S.js' },
  { id: 'this-moment', screenId: 'this-moment-screen', labelKey: 'homeAppThisMoment', fallbackLabel: '此时此刻', icon: '🕰️', placement: 'home', component: placeholder('this-moment'), sourceChunk: 'ThisMomentScreen-D_HrnIOI.js' },
  { id: 'radio', screenId: 'radio-screen', labelKey: 'homeAppRadio', fallbackLabel: '一起听电台', icon: '📻', placement: 'home', component: placeholder('radio'), sourceChunk: 'RadioScreen-Bt1O76Fa.js' },
  { id: 'memory-palace', screenId: 'memory-palace-screen', labelKey: 'homeAppMemoryPalace', fallbackLabel: '记忆宫殿', icon: '🏛️', placement: 'home', component: placeholder('memory-palace'), sourceChunk: 'MemoryPalaceScreen-DsRL9Eiu.js' },
  { id: 'text-alchemist', screenId: 'text-alchemist-screen', labelKey: 'homeAppTextAlchemist', fallbackLabel: '炼金术', icon: '⚗️', placement: 'home', component: placeholder('text-alchemist'), sourceChunk: 'TextAlchemistScreen-DtfEkO2i.js' },
  { id: 'mcp', screenId: 'mcp-screen', labelKey: 'homeAppMcp', fallbackLabel: 'MCP 服务', icon: '🔌', placement: 'home', component: placeholder('mcp'), sourceChunk: 'McpScreen-BEZE17_e.js' },
  { id: 'health', screenId: 'health-screen', labelKey: 'homeAppHealth', fallbackLabel: '健康', icon: '💗', placement: 'home', component: placeholder('health'), sourceChunk: 'HealthScreen-ucNXwEYc.js' },
  { id: 'community', screenId: 'community-screen', labelKey: 'homeAppCommunity', fallbackLabel: '糯叽馆', icon: '🏠', placement: 'home', component: placeholder('community'), sourceChunk: 'native-pet-CTNtZgMA.js' },
  { id: 'settings', screenId: 'api-settings-screen', labelKey: 'homeAppApiSettings', fallbackLabel: '设置', icon: '⚙️', placement: 'dock', component: settingsScreen, sourceChunk: 'ApiSettingsScreen-DonBbfpN.js' },
  { id: 'white-dog', screenId: 'white-dog-screen', labelKey: 'homeAppWhiteDog', fallbackLabel: '白狗拆解机', icon: '🐕', placement: 'dock', component: placeholder('white-dog'), sourceChunk: 'WhiteDogDecomposerScreen-BT0ajmmg.js' },
  { id: 'calendar', screenId: 'calendar-app-screen', labelKey: 'homeAppCalendar', fallbackLabel: '日历', icon: '📅', placement: 'dock', component: placeholder('calendar'), sourceChunk: 'CalendarApp-DqmGaJOT.js' },
  { id: 'forum', screenId: 'forum-screen', labelKey: 'homeAppForum', fallbackLabel: '论坛', icon: '🗣️', placement: 'dock', component: placeholder('forum'), sourceChunk: 'ForumApp-Dy0v4PZa.js' },
];

export const homeApps = appRegistry.filter((app) => app.placement === 'home');
export const dockApps = appRegistry.filter((app) => app.placement === 'dock');
export const appsById = Object.fromEntries(appRegistry.map((app) => [app.id, app]));
