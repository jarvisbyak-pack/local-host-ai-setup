import React,{useEffect,useState} from 'react';
import {MessageSquare,Phone,Settings} from 'lucide-react';
import {Header} from './components/Header';
import {ChatView} from './components/ChatView';
import {JarvisFace,FaceMode} from './components/JarvisFace';
type Msg={role:'user'|'assistant';text:string};
export default function App(){
 const [face,setFace]=useState<FaceMode>('careful'),[night,setNight]=useState(true),[handsFree,setHandsFree]=useState(false),[state,setState]=useState('idle'),[tab,setTab]=useState('chat'),[messages,setMessages]=useState<Msg[]>([]);
 useEffect(()=>{document.documentElement.dataset.theme=night?'night':'bright'},[night]);
 const send=async(text:string)=>{setMessages(m=>[...m,{role:'user',text}]);setState('thinking');try{const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text})});const j=await r.json();setMessages(m=>[...m,{role:'assistant',text:j.response||'No response'}])}catch(e){setMessages(m=>[...m,{role:'assistant',text:'Local JARVIS service is not ready yet.'}])}finally{setState('idle')}};
 const mic=()=>setState(state==='listening'?'idle':'listening');
 return <div className={face==='autonomous'?'shell autonomous':'shell'}><Header face={face} setFace={setFace} night={night} setNight={setNight} handsFree={handsFree} setHandsFree={setHandsFree} state={state} mic={mic}/>
 <nav className="nav"><button className={tab==='chat'?'sel':''} onClick={()=>setTab('chat')}><MessageSquare/>Chat</button><button className={tab==='voice'?'sel':''} onClick={()=>setTab('voice')}><Phone/>Voice</button><button className={tab==='settings'?'sel':''} onClick={()=>setTab('settings')}><Settings/>System</button></nav>
 {tab==='chat'?<ChatView face={face} state={state} setState={setState} messages={messages} send={send} handsFree={handsFree}/>:tab==='voice'?<div className="voice-screen"><JarvisFace mode={face} state={state}/><button className="voice-big" onClick={mic}>{state==='listening'?'Tap to stop listening':'Tap to talk'}</button></div>:<div className="system-card"><h2>Local JARVIS</h2><p>Ollama + local speech stack + browser UI.</p><p>No Friday integration is used here.</p></div>}
 </div>
}