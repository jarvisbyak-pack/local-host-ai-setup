# JARVIS local build plan
1. Validate the Ollama-backed chat core.
2. Keep the two-face UI as the reusable visual layer.
3. Add local microphone capture and voice activity detection.
4. Add faster-whisper for offline speech recognition.
5. Add Piper for offline speech output and interrupt/stop handling.
6. Add a small local memory store and task/event log.
7. Add safe desktop actions behind explicit permissions.
8. Add startup/service integration only after the interactive build is stable.
9. Later port the same core to Raspberry Pi 5 with ARM-specific packages.
