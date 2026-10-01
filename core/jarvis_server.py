import os
import httpx
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
app=FastAPI(title="JARVIS Local Core")
app.add_middleware(CORSMiddleware,allow_origins=["*"],allow_methods=["*"],allow_headers=["*"])
OLLAMA_URL=os.getenv("OLLAMA_URL","http://127.0.0.1:11434")
MODEL=os.getenv("JARVIS_MODEL","qwen3:1.7b")
class ChatIn(BaseModel): message:str
@app.get("/api/health")
async def health():
    async with httpx.AsyncClient(timeout=3) as c:
        try:r=await c.get(f"{OLLAMA_URL}/api/tags");r.raise_for_status();return {"ok":True,"model":MODEL}
        except Exception as e:return {"ok":False,"error":str(e)}
@app.post("/api/chat")
async def chat(body:ChatIn):
    payload={"model":MODEL,"messages":[{"role":"system","content":"You are JARVIS, a concise local desktop AI assistant. Answer clearly and do not claim access to tools you do not have."},{"role":"user","content":body.message}],"stream":False}
    async with httpx.AsyncClient(timeout=120) as c:
        try:
            r=await c.post(f"{OLLAMA_URL}/api/chat",json=payload);r.raise_for_status()
            data=r.json();return {"response":data.get("message",{}).get("content","")}
        except Exception as e:return {"response":f"Local model error: {e}"} 