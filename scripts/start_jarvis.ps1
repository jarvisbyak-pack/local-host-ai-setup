$ErrorActionPreference='Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)
Start-Process powershell -ArgumentList '-NoExit','-Command',".\.venv\Scripts\python.exe -m uvicorn core.jarvis_server:app --host 127.0.0.1 --port 8787"
Start-Sleep -Seconds 2
npm run dev -- --host 127.0.0.1