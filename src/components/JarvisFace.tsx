import React from 'react';
export type FaceMode='careful'|'autonomous';
export const JarvisFace:React.FC<{mode:FaceMode;state:string}>=({mode,state})=>{
 const active=state!=='idle';
 return <div className={'jarvis-face '+mode+' '+(active?'active':'')} aria-label={mode==='careful'?'Careful face':'Autonomous face'}>
  <div className="face-halo"/><div className="face-core"><div className="face-eyes"><i/><i/></div><div className="face-mouth"/></div>
  <span className="face-name">{mode==='careful'?'JARVIS':'JARVIS // AUTONOMOUS'}</span>
  <span className="face-state">{state==='listening'?'LISTENING':state==='thinking'?'PROCESSING':state==='speaking'?'SPEAKING':'STANDBY'}</span>
 </div>
};