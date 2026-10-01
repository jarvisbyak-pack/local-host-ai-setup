$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host '== JARVIS local setup ==' 
node --version
npm --version
& '.\.venv\Scripts\python.exe' --version
ollama --version

& '.\.venv\Scripts\python.exe' -c "import fastapi,openwakeword,pynput,win32api; print('Python toolchain: OK')"
& '.\.venv\Scripts\python.exe' -c "from core.voice_engine import stt_model,tts_model; print('STT/TTS models: OK')"

if (Test-Path 'models\tts\en_US-lessac-medium.onnx') { Write-Host 'Piper voice: OK' } else { throw 'Piper voice missing' }
if (Test-Path 'models\stt\tiny.en\model.bin') { Write-Host 'Whisper tiny.en: OK' } else { throw 'Whisper model missing' }

Write-Host 'Setup verification complete.'