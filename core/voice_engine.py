from functools import lru_cache
from pathlib import Path
import wave

from faster_whisper import WhisperModel
from piper import PiperVoice

ROOT = Path(__file__).resolve().parents[1]
WHISPER_PATH = ROOT / 'models' / 'stt' / 'tiny.en'
PIPER_PATH = ROOT / 'models' / 'tts' / 'en_US-lessac-medium.onnx'

@lru_cache(maxsize=1)
def stt_model() -> WhisperModel:
    return WhisperModel(str(WHISPER_PATH), device='cpu', compute_type='int8')

@lru_cache(maxsize=1)
def tts_model() -> PiperVoice:
    return PiperVoice.load(str(PIPER_PATH))

def transcribe(path: str) -> str:
    segments, _ = stt_model().transcribe(path, vad_filter=True)
    return ' '.join(segment.text.strip() for segment in segments).strip()

def synthesize(text: str, output_path: str) -> None:
    with wave.open(output_path, 'wb') as wav_file:
        tts_model().synthesize_wav(text, wav_file)