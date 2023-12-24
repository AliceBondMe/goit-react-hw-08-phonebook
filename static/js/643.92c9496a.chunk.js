"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[643],{873:(n,e,r)=>{r.d(e,{II:()=>j,OC:()=>g,Wz:()=>u,__:()=>f,eK:()=>k,im:()=>v,tN:()=>w,vw:()=>m,zx:()=>_});var i,o,a,t,s,l,c,d,p,x=r(168),h=r(705),b=r(867);const m=b.default.h2(i||(i=(0,x.Z)(["\n  font-family: 'Megrim';\n  font-weight: normal;\n  font-size: 48px;\n  margin-bottom: 24px;\n  animation: pulsate 1.5s infinite alternate;\n"]))),v=b.default.div(o||(o=(0,x.Z)(["\n  margin: 32px auto 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 480px;\n  border: 2px solid var(--basic-white);\n  border-radius: 12px;\n  padding: 40px 32px;\n  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 0.2rem var(--basic-white),\n    0 0 2rem var(--basic-color), 0 0 0.8rem var(--basic-color),\n    0 0 2.8rem var(--basic-color), inset 0 0 1.3rem var(--basic-color);\n"]))),u=b.default.div(a||(a=(0,x.Z)(["\n  position: relative;\n  width: 400px;\n"]))),w=(0,b.default)(h.l0)(t||(t=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),f=b.default.label(s||(s=(0,x.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 0;\n  font-size: 20px;\n  color: var(--basic-color);\n  pointer-events: none;\n  transition: 0.5s;\n"]))),g=b.default.span(l||(l=(0,x.Z)(["\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background-color: var(--basic-white);\n  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 0.2rem var(--basic-white),\n    0 0 2rem var(--basic-color), 0 0 0.8rem var(--basic-color),\n    0 0 2.8rem var(--basic-color), inset 0 0 1.3rem var(--basic-color);\n  transition: 0.4s;\n"]))),j=(0,b.default)(h.gN)(c||(c=(0,x.Z)(["\n  width: 100%;\n  padding: 10px 0;\n  font-size: 20px;\n  color: var(--basic-color);\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid var(--lighter-color);\n  outline: none;\n  background: transparent;\n\n  &:focus ~ ",", &:valid ~ "," {\n    top: -20px;\n    left: 0;\n    color: var(--lighter-color);\n    font-size: 12px;\n  }\n\n  &:focus ~ ",", &:valid ~ "," {\n    width: 100%;\n    transition: 0.4s;\n    left: 0;\n  }\n"])),f,f,g,g),_=b.default.button(d||(d=(0,x.Z)(["\n  margin: 20px 0;\n  font-family: inherit;\n  color: var(--basic-white);\n  width: 200px;\n  height: 32px;\n  padding: 4px 10px;\n  font-size: 20px;\n  font-weight: 500;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  color: var(--basic-color);\n  border: 1px solid var(--basic-color);\n  box-shadow: 0 0 5px var(--basic-color), 0 0 5px var(--basic-color) inset;\n  z-index: 1;\n\n  &:after {\n    position: absolute;\n    content: '';\n    width: 0;\n    height: 100%;\n    top: 0;\n    right: 0;\n    z-index: -1;\n    background: var(--darker-color);\n    box-shadow: 0 0 20px var(--darker-color);\n    transition: all 0.3s ease;\n  }\n\n  &:hover {\n    color: var(--basic-white);\n  }\n  &:hover:after {\n    left: 0;\n    width: 100%;\n  }\n  &:active {\n    top: 2px;\n    text-shadow: 0 0 10px var(--basic-white);\n  }\n"]))),k=(0,b.default)(h.Bc)(p||(p=(0,x.Z)(["\n  width: 80%;\n  color: var(--accent-color);\n  text-shadow: 0 0 10px var(--basic-white);\n  text-align: center;\n  margin-bottom: 8px;\n  &::first-letter {\n    text-transform: uppercase;\n  }\n"])))},643:(n,e,r)=>{r.r(e),r.d(e,{default:()=>x});var i=r(705),o=r(7),a=r(873),t=r(420),s=r(273),l=r(329);const c={email:"",password:""},d=o.object().shape({email:o.string().required("An email is required"),password:o.string().required("A password is required")}),p=()=>{const n=(0,t.I0)();return(0,l.jsxs)(a.im,{children:[(0,l.jsx)(a.vw,{children:"Please Log In"}),(0,l.jsx)(i.J9,{initialValues:c,validationSchema:d,onSubmit:(e,r)=>{let{resetForm:i}=r;n((0,s.x4)(e)),i()},children:(0,l.jsxs)(a.tN,{children:[(0,l.jsxs)(a.Wz,{children:[(0,l.jsx)(a.II,{type:"email",name:"email",required:!0}),(0,l.jsx)(a.__,{htmlFor:"email",children:"Email"}),(0,l.jsx)(a.OC,{})]}),(0,l.jsxs)(a.Wz,{children:[(0,l.jsx)(a.II,{type:"password",name:"password",required:!0}),(0,l.jsx)(a.__,{htmlFor:"password",children:"Password"}),(0,l.jsx)(a.OC,{})]}),(0,l.jsx)(a.zx,{type:"submit","aria-label":"register",children:"Log in"}),(0,l.jsx)(a.eK,{name:"email",component:"div"}),(0,l.jsx)(a.eK,{name:"password",component:"div"})]})})]})},x=()=>(0,l.jsx)(p,{})}}]);
//# sourceMappingURL=643.92c9496a.chunk.js.map