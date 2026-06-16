@echo off
chcp 65001 >nul
title Nuojiji Local Server

echo ====================================
echo   Nuojiji 本地服务器启动器
echo ====================================
echo.

REM 检查 Node.js 是否已安装
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Node.js！
    echo.
    echo 请先安装 Node.js:
    echo 1. 访问 https://nodejs.org/
    echo 2. 下载并安装 LTS 版本
    echo 3. 安装完成后重新运行此脚本
    echo.
    pause
    exit /b 1
)

echo [✓] 检测到 Node.js
node --version
echo.

REM 检查 npx 是否可用
where npx >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] npx 不可用！
    echo 请重新安装 Node.js 或更新到最新版本。
    echo.
    pause
    exit /b 1
)

echo [✓] npx 可用
echo.
echo 正在启动本地服务器...
echo 启动后请在浏览器中访问显示的地址（通常是 http://localhost:3000）
echo.
echo 按 Ctrl+C 可停止服务器
echo.
echo ====================================
echo.

REM 启动服务器
npx serve .

REM 如果服务器异常退出
echo.
echo 服务器已停止。
pause
