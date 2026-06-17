@echo off
echo.
echo ========================================
echo   糯叽机 - 打开 Android Studio
echo ========================================
echo.
echo 正在启动 Android Studio...
echo.

cd /d "%~dp0"
call npx cap open android

if %errorlevel% neq 0 (
    echo.
    echo [错误] 启动失败！
    echo.
    echo 可能的原因：
    echo 1. 未安装 Android Studio
    echo 2. Android Studio 未添加到系统 PATH
    echo.
    echo 请手动在项目根目录运行：
    echo   npx cap open android
    echo.
    pause
    exit /b 1
)

echo.
echo Android Studio 已启动！
echo 请在 Android Studio 中点击 Build APK
echo.
pause
