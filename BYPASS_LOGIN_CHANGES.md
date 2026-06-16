# 登录/锁屏功能禁用说明

## 修改日期
2024年修改

## 修改内容
已成功禁用所有登录和锁屏相关功能，现在可以直接进入系统。

## 修改位置

### 1. 主要锁屏启用检查 (第79111行附近)
**原代码：**
```javascript
const _ = s.lockScreenEnabled;
const E = _ === true || _ === "true";
const I = sessionStorage.getItem("unlocked") === "true";
const T = E && !I && !A;
localStorage.setItem("lockScreenEnabled", E ? "true" : "false");
```

**修改后：**
```javascript
// ===== 锁屏功能已禁用 - 直接进入系统 =====
// const _ = s.lockScreenEnabled;
// const E = _ === true || _ === "true";
const E = false; // 强制禁用锁屏
const I = true; // 强制设置为已解锁
sessionStorage.setItem("unlocked", "true");
const T = false; // 强制不显示锁屏
localStorage.setItem("lockScreenEnabled", "false"); // 强制禁用
```

**效果：**
- 强制禁用锁屏功能
- 自动设置为已解锁状态
- 跳过所有锁屏检查

### 2. 锁屏密码验证 (第79914行附近)
**原代码：**
```javascript
const e = localStorage.getItem("lockPasswordEnabled") === "true";
const t = localStorage.getItem("lockPassword");
if (!!e && (!t || t.length !== 4)) {
  console.warn("检测到锁屏密码配置异常，正在禁用密码锁...");
  localStorage.setItem("lockPasswordEnabled", "false");
}
sessionStorage.removeItem("unlocked");
```

**修改后：**
```javascript
// ===== 锁屏密码检查已禁用 =====
// 强制禁用锁屏密码
localStorage.setItem("lockPasswordEnabled", "false");
// 强制设置为已解锁
sessionStorage.setItem("unlocked", "true");
console.log("[锁屏已禁用] 直接进入系统");
```

**效果：**
- 强制禁用密码锁
- 保持解锁状态（不再清除 unlocked 标记）
- 在控制台输出确认信息

## 使用说明

1. **直接访问应用**：打开 `index.html`，应用将直接进入主界面，不会显示锁屏
2. **永久生效**：这些修改会自动设置 localStorage，确保每次启动都跳过锁屏
3. **恢复锁屏功能**：如果需要恢复，可以：
   - 删除此修改文件
   - 恢复原始的 `main-BO9xa-SQ.js` 备份
   - 或者手动撤销上述代码修改

## 技术细节

### 修改的关键变量
- `lockScreenEnabled`: 控制是否启用锁屏 → 强制设为 `false`
- `lockPasswordEnabled`: 控制是否启用密码 → 强制设为 `false`
- `sessionStorage.unlocked`: 当前解锁状态 → 强制设为 `"true"`

### 不会影响的功能
- 所有其他应用功能正常工作
- 聊天、通知、设置等功能不受影响
- 只是跳过了启动时的锁屏检查

## 注意事项

⚠️ **安全提示**：
- 此修改会完全禁用锁屏保护
- 任何人都可以直接访问应用
- 建议仅在开发/测试环境使用
- 生产环境请谨慎使用

## 回滚方法

如果需要恢复原始功能：
1. 找到并恢复 `main-BO9xa-SQ.js` 的原始版本
2. 或者重新构建应用
3. 清除浏览器的 localStorage 和 sessionStorage

## 测试验证

修改后请验证：
- [x] 打开应用不显示锁屏
- [x] 控制台显示 "[锁屏已禁用] 直接进入系统"
- [x] 可以正常使用所有功能
- [x] 刷新页面仍然直接进入系统
