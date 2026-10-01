import React,{useState} from 'react';
import {Bot,Mic,Send,User,Volume2} from 'lucide-react';
import {JarvisFace,FaceMode} from './JarvisFace';
type Msg={role:'user'|'assistant';text:string};
export const ChatView:React.FC<{face:FaceMode;state:string;setState:(x:string)=>void;messages:Msg[];send:(x:string)=>void;handsFree:boolean}>=({face,state,setState,messages,send,handsFree})=>{
 const [text,setText]=useState('');
 const submit=(e:React.FormEvent)=>{e.preventDefault();if(text.trim()){send(text.trim());setText('');}};
 return <main className="chat-page"><div className="statusbar"><span><i/>JARVIS <em>{state==='idle'?'READY':state.toUpperCase()}</em></span><span>{handsFree?'CONTINUOUS VOICE':'CHAT MODE'}</span></div>
 <JarvisFace mode={face} state={state}/><div className="messages">{messages.length===0?<div className="welcome"><div className="welcome-icon"><Bot/></div><h2>How can I assist you?</h2><p>Everything runs locally on this PC.</p></div>:messages.map((m,i)=><div className={'msg '+m.role} key={i}><div className="avatar">{m.role==='user'?<User/>:<Bot/>}</div><div className="bubble"><div>{m.text}</div>{m.role==='assistant'&&<button className="speak"><Volume2/>Speak</button>}</div></div>)}</div>
 <form className="composer" onSubmit={submit}><button type="button" className={'round-mic '+(state==='listening'?'live':'')} onClick={()=>setState(state==='listening'?'idle':'listening')}><Mic/></button><input value={text} onChange={e=>setText(e.target.value)} placeholder="Talk to JARVIS or type here..."/><button className="send" disabled={!text.trim()}><Send/></button></form></main>
};