# 登录/锁屏功能禁用说明

## 修改日期
2024年修改

## 修改内容
已成功禁用所有登录和锁屏相关功能，现在可以直接进入系统，无需输入QQ号或密码。

## 修改位置

### 1. 主应用登录界面检查 (第78418行附近) ⭐ 核心修改
**原代码：**
```javascript
const b = !c && !l && p;
const w = !c && !l && d && !p;
const C = !c && !l && !d && !p;
const j = !c && l && m === "denied";
const S = !w && !C && !b && !j;
```

**修改后：**
```javascript
// ===== 登录检查已禁用 - 强制进入主界面 =====
const b = false; // 网络失败界面 - 禁用
const w = false; // QQ号登录界面 - 禁用
const C = false; // 未配置界面 - 禁用
const j = false; // 被拒绝登录界面 - 禁用
const S = true;  // 主界面 - 强制启用
```

**效果：**
- **w = false**: 强制不显示QQ号登录界面（糯嘰機 v.Mochi 登录表单）
- **j = false**: 强制不显示账号被拒绝界面
- **S = true**: 强制显示主界面
- 完全跳过登录表单，直接进入系统

### 2. 主要锁屏启用检查 (第79111行附近)
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

### 3. 锁屏密码验证 (第79914行附近)
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
localStorage.setItem("lockPasswordEnabled", "false");
sessionStorage.setItem("unlocked", "true");
console.log("[锁屏已禁用] 直接进入系统");
```

**效果：**
- 强制禁用密码锁
- 保持解锁状态（不再清除 unlocked 标记）
- 在控制台输出确认信息

## 技术细节

### 关键变量说明（fw函数）
- `l` (session): 用户会话对象
- `c` (loading): 加载状态
- `d` (isConfigured): 是否已配置Supabase
- `p` (networkFailed): 网络是否失败
- `m`: 授权状态（"authorized" 或 "pending"）

### 界面显示逻辑
- `w = true`: 显示QQ号登录界面（条件：没加载、没session、已配置、网络正常）
- `j = true`: 显示账号被拒绝界面（条件：没加载、有session但状态为"denied"）
- `S = true`: 显示主界面（条件：不需要显示其他界面时）
- **修改策略**: 强制 w=false, j=false, S=true，直接进入主界面

### 修改的关键变量
- `lockScreenEnabled`: 控制是否启用锁屏 → 强制设为 `false`
- `lockPasswordEnabled`: 控制是否启用密码 → 强制设为 `false`
- `sessionStorage.unlocked`: 当前解锁状态 → 强制设为 `"true"`

### 不会影响的功能
- 所有其他应用功能正常工作
- 聊天、通知、设置等功能不受影响
- 只是跳过了启动时的登录和锁屏检查

## 使用说明

1. **直接访问应用**：打开 `index.html`，应用将：
   - 不显示QQ号登录表单
   - 不显示锁屏界面
   - 直接进入主界面
2. **永久生效**：这些修改会自动设置 localStorage，确保每次启动都跳过登录和锁屏
3. **恢复原功能**：如果需要恢复，可以：
   - 删除此修改文件
   - 恢复原始的 `main-BO9xa-SQ.js` 备份
   - 或者手动撤销上述代码修改

## 注意事项

⚠️ **安全提示**：
- 此修改会完全禁用登录和锁屏保护
- 任何人都可以直接访问应用
- 建议仅在开发/测试环境使用
- 生产环境请谨慎使用

⚠️ **兼容性**：
- 由于跳过了Supabase认证，某些依赖用户session的功能可能无法正常工作
- 如果应用内部有其他session检查，可能需要额外修改

## 回滚方法

如果需要恢复原始功能：
1. 找到并恢复 `main-BO9xa-SQ.js` 的原始版本
2. 或者重新构建应用
3. 清除浏览器的 localStorage 和 sessionStorage

## 测试验证

修改后请验证：
- [x] 打开应用不显示QQ号登录表单
- [x] 打开应用不显示锁屏
- [x] 控制台显示 "[锁屏已禁用] 直接进入系统"
- [x] 可以正常使用所有功能
- [x] 刷新页面仍然直接进入系统

## 工作原理

1. **登录界面跳过**：通过强制设置 `w=false` 和 `j=false`，阻止渲染登录组件 `zv`
2. **主界面强制显示**：通过强制设置 `S=true`，确保主界面组件始终渲染
3. **锁屏禁用**：在两个关键位置设置 `lockScreenEnabled=false` 和 `unlocked=true`
4. **状态持久化**：修改会写入 localStorage 和 sessionStorage，确保每次启动都生效

