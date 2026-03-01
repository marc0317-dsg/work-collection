@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   个人作业集网站 - 快速启动
echo ========================================
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo [1/3] 检测到首次运行，正在安装依赖...
    echo 请稍候...
    call npm install
    if errorlevel 1 (
        echo.
        echo ❌ 依赖安装失败！
        echo 请检查网络连接或手动运行: npm install
        pause
        exit /b 1
    )
    echo ✅ 依赖安装完成！
    echo.
) else (
    echo [1/3] ✅ 依赖已安装
    echo.
)

echo [2/3] 启动开发服务器...
echo 服务器将在 http://localhost:3000 启动
echo 按 Ctrl+C 可停止服务器
echo.

call npm run dev

if errorlevel 1 (
    echo.
    echo ❌ 服务器启动失败！
    echo 请检查:
    echo   1. 端口 3000 是否被占用
    echo   2. 是否有 TypeScript 类型错误
    echo   3. 查看控制台错误信息
) else (
    echo.
    echo ✅ 服务器已停止
)

echo.
pause
