# Recovered Source Map

These files are strict source-fragment extractions from the shipped Vite assets. They preserve bundled identifiers and JSX runtime aliases so later passes can rename and reconnect imports without losing parity with the live page.

## Desktop Pet

- `native-pet/DesktopPetManager.recovered.jsx`
  - Source: `assets/native-pet-CTNtZgMA.js`
  - Lines: 34089-42146
  - Contains desktop-pet config services, native bridge helpers, Live Activity / island / widget settings, reaction generation, and `petManagerTitle` UI.

- `main/DesktopPetFloatingConsole.recovered.jsx`
  - Source: `assets/main-BO9xa-SQ.js`
  - Lines: 69900-72550
  - Contains floating pet state loading from `nuojiji_active_desktop_pet`, drag/dock/menu behavior, peek prompt generation, TTS playback, quick shortcuts, and pet rendering.

## Bundle Boundary Index

Important recovered symbols still use bundled names:

| Symbol | Source line | Current role |
| --- | ---: | --- |
| `ju` | `assets/native-pet-CTNtZgMA.js:34812` | Desktop pet native bridge/config service module start |
| `Uu` | `assets/native-pet-CTNtZgMA.js:34828` | Desktop pet web/native helper module start |
| `Wu` | `assets/native-pet-CTNtZgMA.js:36118` | iOS app-sense / desktop pet integration config module |
| `Qu` / `Xu` / `Zu` | `assets/native-pet-CTNtZgMA.js:36298` | Small reusable manager UI controls |
| `Tm` | `assets/native-pet-CTNtZgMA.js:39166` | Desktop pet manager React screen component |
| `Cm` | `assets/native-pet-CTNtZgMA.js:39293` | Module export object containing `DesktopPetManagerScreen` |
| `_y` | `assets/main-BO9xa-SQ.js:69921` | Floating desktop pet console React component |

Route/lazy-load chain:

- `assets/main-BO9xa-SQ.js:77891` defines `Lb = lazy(() => import("./native-pet-CTNtZgMA.js").then(e => e.cS))`.
- `assets/main-BO9xa-SQ.js:78143` renders `Lb` only when `currentScreen === "desktop-pet-manager-screen"` and `h()` reports native runtime.
- `assets/native-pet-CTNtZgMA.js` exports `Cm as cS`; `Cm` is the desktop pet manager module.

## Language Keys Confirmed

The desktop-pet entry is registered in `assets/main-BO9xa-SQ.js` as app id `desktop-pet`, screen id `desktop-pet-manager-screen`, lang key `homeAppDesktopPet`, `nativeOnly: true`.

The visible Chinese strings for the manager are in `assets/native-pet-CTNtZgMA.js`, including `homeAppDesktopPet`, `petManagerTitle`, `headerDesktopPetSettings`, `labelDesktopPet`, `descDesktopPet`, and related `desktopPet*` keys.

## Desktop Pet Text Lookup

Use this table to go from page text back to bundle source:

| Page text | i18n key | Bundle line |
| --- | --- | --- |
| 桌宠管家 | `homeAppDesktopPet` | `assets/native-pet-CTNtZgMA.js:9780` |
| 桌宠管家 | `petManagerTitle` | `assets/native-pet-CTNtZgMA.js:9781` |
| 桌宠设置 | `headerDesktopPetSettings` | `assets/native-pet-CTNtZgMA.js:12178` |
| 开启桌宠 | `labelDesktopPet` | `assets/native-pet-CTNtZgMA.js:12179` |
| 将悬浮球替换为当前角色的桌宠 | `descDesktopPet` | `assets/native-pet-CTNtZgMA.js:12180` |
| 自定义图像 | `labelDesktopPetImage` | `assets/native-pet-CTNtZgMA.js:12181` |
| 桌宠形状 | `labelDesktopPetShape` | `assets/native-pet-CTNtZgMA.js:12182` |
| 桌宠大小 | `labelDesktopPetSize` | `assets/native-pet-CTNtZgMA.js:12183` |
| 显示边框 | `labelDesktopPetBorder` | `assets/native-pet-CTNtZgMA.js:12184` |
| 自动随机窥屏 | `labelAutoPeek` | `assets/native-pet-CTNtZgMA.js:12188` |
| 桌宠会在你活动或长时间闲置时自动偷看一眼 | `descAutoPeek` | `assets/native-pet-CTNtZgMA.js:12189` |
| 上传桌宠图片 | `uploadTitleDesktopPet` | `assets/native-pet-CTNtZgMA.js:12989` |
| 桌宠 | `taSceneDesktopPet` | `assets/native-pet-CTNtZgMA.js:14832` |

## Verification Notes

- Local page checked in Chrome at `http://localhost:3000/`.
- Browser home screen hides the desktop-pet app because the app registry marks it `nativeOnly: true`; the app still exists in the registry as `desktop-pet-manager-screen`.
- Syntax parsing was verified with `@babel/parser` for both recovered JSX files.
- Prettier could not be used because the installed shim points to a missing `node_modules/prettier/bin-prettier.js`.
