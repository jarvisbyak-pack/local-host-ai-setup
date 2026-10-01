import React from 'react';
import {Mic,MicOff,Moon,Sun,Radio} from 'lucide-react';
import {FaceMode} from './JarvisFace';
export const Header:React.FC<{face:FaceMode;setFace:(x:FaceMode)=>void;night:boolean;setNight:(x:boolean)=>void;handsFree:boolean;setHandsFree:(x:boolean)=>void;state:string;mic:()=>void}>=p=>
<header className="topbar"><div><b className="brand">JARVIS</b><span className="local-badge">LOCAL AI</span><div className="subtitle">Personal computer intelligence</div></div>
<div className="top-controls"><div className="face-switch"><button className={p.face==='careful'?'on':''} onClick={()=>p.setFace('careful')}>CAREful</button><button className={p.face==='autonomous'?'on auto':''} onClick={()=>p.setFace('autonomous')}>AUTONOMOUS</button></div>
<button className="control" onClick={()=>p.setNight(!p.night)}>{p.night?<Sun/>:<Moon/>}{p.night?'Bright':'Night'}</button>
<button className={'control '+(p.handsFree?'on-control':'')} onClick={()=>p.setHandsFree(!p.handsFree)}><Radio/>{p.handsFree?'Hands-free ON':'Hands-free OFF'}</button>
<button className={'mic-control '+(p.state==='listening'?'live':'')} onClick={p.mic}>{p.state==='listening'?<Mic/>:<MicOff/>}</button></div></header>;