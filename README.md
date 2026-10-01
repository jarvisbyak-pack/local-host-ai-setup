# Local Host AI Setup

Fresh local JARVIS build. This repository is completely separate from the Friday project.

## Installation root
C:\JARVIS\app

## Current machine stack
- Windows x64
- Node 24.13.0 / npm 11.6.2
- Python 3.12.10 virtual environment
- Ollama with qwen3:1.7b and llama3.2:latest
- FFmpeg Essentials installed
- FastAPI + Vite UI
- faster-whisper tiny.en
- Piper en_US-lessac-medium
- openWakeWord hey_jarvis_v0.1
- sounddevice for local audio
- pywin32 + pynput for desktop-control foundations

## Verified
- Frontend production build passes
- Local Ollama HTTP service responds
- Wake-word engine loads
- Piper generates local speech
- Whisper transcribes the generated local speech
- No n8n or Friday integration is included

## Run
Start the local JARVIS core on 127.0.0.1:8787, then the Vite UI on 127.0.0.1:5173.
Run scripts\verify_local_setup.ps1 for a setup check.