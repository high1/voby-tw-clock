(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const et=Symbol("Observable"),Kt=Symbol("Observable.Frozen"),Ft=Symbol("Observable.Readable"),me=Symbol("Observable.Writable"),k=Symbol("Store"),re=Symbol("Store.Keys"),v=Symbol("Store.Observable"),rt=Symbol("Store.Target"),oe=Symbol("Store.Values"),Dt=Symbol("Store.Untracked"),Ut=Symbol("Suspense"),Lt=Symbol("Uncached"),qt=Symbol("Untracked"),ht=Symbol("Untracked.Unwrapped"),Ne=e=>dt(e)?e:[e],_e=e=>e instanceof Error?e:typeof e=="string"?new Error(e):new Error("Unknown error"),{is:ot}=Object,{isArray:dt}=Array,M=e=>typeof e=="function",Vt=e=>e!==null&&typeof e=="object",Le=e=>typeof e=="symbol",ie=()=>{},ce=()=>!1;function Te(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function Me(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this.get()}function Re(e){return arguments.length?M(e)?this.C(e):this.set(e):this.get()}const At=e=>{const t=Te.bind(e);return t[et]=!0,t[Kt]=!0,t},Ht=e=>{const t=Me.bind(e);return t[et]=!0,t[Ft]=e,t},xe=e=>{const t=Re.bind(e);return t[et]=!0,t[me]=e,t},Qt=0,nt=1,Tt=2,Mt=3,Ie=At(!1);At(!0);const le=new Proxy(function(){},new Proxy({},{get(){throw new Error("Unavailable value")}})),fe=function(){},st=(e,t)=>{if(e instanceof Array)for(let s=e.length-1;s>=0;s--)t(e[s]);else e&&t(e)},pt=(e,t,s)=>{const n=e[t];n instanceof Array?n.push(s):n?e[t]=[n,s]:e[t]=s},U=(e,t,s)=>{const n=e[t];if(n instanceof Set)n.add(s);else if(n){if(s!==n){const r=new Set;r.add(n),r.add(s),e[t]=r}}else e[t]=s},q=(e,t,s)=>{const n=e[t];n instanceof Set?n.delete(s):n===s&&(e[t]=void 0)},it=(e,t)=>{if(e instanceof Set)for(const s of e)t(s);else e&&t(e)},Be=e=>e.call(e),Et=e=>e.Q(!0);class $e{constructor(){this.disposed=!1,this.B=void 0,this.S=void 0,this.D=void 0,this.K=void 0,this.T=void 0,this.U=void 0}catch(t,s){var r;const{S:n}=this;if(n)return n(t),!0;if((r=this.parent)!=null&&r.catch(t,!0))return!0;if(s)return!1;throw t}Q(t){st(this.D,Et),st(this.K,Et),st(this.U,Et),st(this.B,Be),this.B=void 0,this.disposed=t,this.S=void 0,this.K=void 0,this.U=void 0}get(t){var s;return(s=this.context)==null?void 0:s[t]}E(t,s,n){const r=y,o=I;Gt(s),ct(n);try{return t()}catch(i){return this.catch(_e(i),!1),le}finally{Gt(r),ct(o)}}}const gt=$e;class Pe extends gt{constructor(){super(...arguments),this.context={}}}const Ke=Pe;let ue=new Ke,I,y=ue;const ct=e=>I=e,Gt=e=>y=e,Fe=e=>{var t,s;return M(e)&&(Kt in e||!!((s=(t=e[Ft])==null?void 0:t.parent)!=null&&s.disposed))},De=Fe,Ue=e=>M(e)&&(qt in e||ht in e),qe=Ue;let Ve=class{constructor(){this.A1=[],this.M=0,this.A2=!1,this.N=()=>{if(!this.A2&&!this.M&&this.A1.length)try{for(this.A2=!0;;){const t=this.A1;if(!t.length)break;this.A1=[];for(let s=0,n=t.length;s<n;s++)t[s].C()}}finally{this.A2=!1}},this.E=t=>{this.M+=1,t(),this.M-=1,this.N()},this.F=t=>{this.A1.push(t)}}};const z=new Ve;class He{constructor(t,s,n){this.K=new Set,this.value=t,n&&(this.parent=n),(s==null?void 0:s.equals)!==void 0&&(this.equals=s.equals||ce)}get(){var t,s;return(t=this.parent)!=null&&t.disposed||((s=this.parent)==null||s.C(),I==null||I.A.L(this)),this.value}set(t){const s=this.equals||ot;return(this.value===fe||!s(t,this.value))&&(this.value=t,z.M+=1,this.I(Mt),z.M-=1,z.N()),t}I(t){for(const s of this.K)(s.J!==nt||s.A.has(this))&&(s.sync?(s.J=Math.max(s.J,t),z.F(s)):s.I(t))}C(t){const s=t(this.value);return this.set(s)}}const St=He;class Ye{constructor(t){this.observer=t,this.A=[],this.P=0}Q(t){if(t){const{observer:s,A:n}=this;for(let r=0;r<n.length;r++)n[r].K.delete(s)}this.P=0}R(){const{observer:t,A:s,P:n}=this,r=s.length;if(n<r){for(let o=n;o<r;o++)s[o].K.delete(t);s.length=n}}empty(){return!this.A.length}has(t){const s=this.A.indexOf(t);return s>=0&&s<this.P}L(t){const{observer:s,A:n,P:r}=this,o=n.length;if(o>0){if(n[r]===t){this.P+=1;return}const i=n.indexOf(t);if(i>=0&&i<r)return;r<o-1?this.R():r===o-1&&n[r].K.delete(s)}t.K.add(s),n[this.P++]=t,r===128&&(s.A=new Je(s,n))}C(){var s;const{A:t}=this;for(let n=0,r=t.length;n<r;n++)(s=t[n].parent)==null||s.C()}}class Je{constructor(t,s){this.observer=t,this.A=new Set(s)}Q(t){for(const s of this.A)s.K.delete(this.observer)}R(){}empty(){return!this.A.size}has(t){return this.A.has(t)}L(t){const{observer:s,A:n}=this,r=n.size;t.K.add(s);const o=n.size;r!==o&&n.add(t)}C(){var t;for(const s of this.A)(t=s.parent)==null||t.C()}}class We extends gt{constructor(){super(),this.parent=y,this.context=y.context,this.J=Mt,this.A=new Ye(this),y!==ue&&pt(this.parent,"K",this)}Q(t){this.A.Q(t),super.Q(t)}H(t){this.Q(!1),this.J=nt;try{return this.E(t,this,this)}finally{this.A.R()}}run(){throw new Error("Abstract method")}I(t){throw new Error("Abstract method")}C(){this.disposed||(this.J===Tt&&this.A.C(),this.J===Mt?(this.J=nt,this.run(),this.J===nt?this.J=Qt:this.C()):this.J=Qt)}}const ae=We;class Qe extends ae{constructor(t,s){super(),this.fn=t,this.observable=new St(fe,s,this)}run(){const t=super.H(this.fn);!this.disposed&&this.A.empty()&&(this.disposed=!0),t!==le&&this.observable.set(t)}I(t){const s=this.J;s!==t&&(this.J=t,s!==Tt&&this.observable.I(Tt))}}const Ge=Qe,ze=(e,t)=>{if(De(e))return e;if(qe(e))return At(e());{const s=new Ge(e,t);return Ht(s.observable)}},he=ze,Ze=e=>{pt(y,"B",e)},de=Ze;class Xe extends gt{constructor(t){super(),this.parent=y,this.context={...y.context,...t},pt(this.parent,"D",this)}E(t){return super.E(t,this,void 0)}}const ke=Xe;function ve(e,t){return Le(e)?y.context[e]:new ke(e).E(t||ie)}class je{constructor(){this.A1=[],this.A2=!1,this.A3=!1,this.N=()=>{if(!this.A2&&this.A1.length)try{for(this.A2=!0;;){const t=this.A1;if(!t.length)break;this.A1=[];for(let s=0,n=t.length;s<n;s++)t[s].C()}}finally{this.A2=!1}},this.queue=()=>{this.A3||(this.A3=!0,this.resolve())},this.resolve=()=>{queueMicrotask(()=>{queueMicrotask(()=>{this.A3=!1,this.N()})})},this.F=t=>{this.A1.push(t),this.queue()}}}const Rt=new je;class ts extends ae{constructor(t,s){if(super(),this.fn=t,(s==null?void 0:s.suspense)!==!1){const n=this.get(Ut);n&&(this.suspense=n)}(s==null?void 0:s.sync)===!0&&(this.sync=!0),(s==null?void 0:s.sync)==="init"?(this.init=!0,this.C()):this.F()}run(){const t=super.H(this.fn);M(t)&&pt(this,"B",t)}F(){var t;(t=this.suspense)!=null&&t.suspended||(this.sync?this.C():Rt.F(this))}I(t){const s=this.J;s!==t&&(this.J=t,(!this.sync||s!==2&&s!==3)&&this.F())}C(){var t;(t=this.suspense)!=null&&t.suspended||super.C()}}const es=ts,ss=(e,t)=>{const s=new es(e,t);return()=>s.Q(!0)},Yt=ss;function Z(e){if(M(e))return ht in e?Z(e()):qt in e?At(Z(e())):et in e?e:he(()=>Z(e()));if(e instanceof Array){const t=new Array(e.length);for(let s=0,n=t.length;s<n;s++)t[s]=Z(e[s]);return t}else return e}class ns extends gt{constructor(t){super(),this.parent=y,this.context=y.context,t&&this.get(Ut)&&(this.A0=!0,U(this.parent,"T",this))}Q(t){this.A0&&q(this.parent,"T",this),super.Q(t)}E(t){const s=()=>this.Q(!0),n=()=>t(s);return super.E(n,this,void 0)}}const rs=ns,os=e=>M(e)&&et in e,Ae=os;function m(e,t=!0){return(t?M:Ae)(e)?e():e}const is=e=>Vt(e)&&k in e,F=is;function N(e){if(M(e)){const t=I;if(t)try{return ct(void 0),e()}finally{ct(t)}else return e()}else return e}const cs=()=>Rt.A3||Rt.A2||z.A2,ls=cs;function xt(e,t){return xe(new St(e,t))}const fs=e=>new rs(!0).E(e),us=fs;class x extends Map{AH(t,s){return super.set(t,s),s}}class bt{constructor(){this.AE=0}listen(){this.AE+=1,de(this)}call(){this.AE-=1,!this.AE&&this.Q()}Q(){}}class as extends bt{constructor(t,s){super(),this.parent=t,this.observable=s}Q(){this.parent.keys=void 0}}class hs extends bt{constructor(t,s){super(),this.parent=t,this.observable=s}Q(){this.parent.values=void 0}}class ds extends bt{constructor(t,s,n){super(),this.parent=t,this.key=s,this.observable=n}Q(){var t;(t=this.parent.has)==null||t.delete(this.key)}}class As extends bt{constructor(t,s,n,r){super(),this.parent=t,this.key=s,this.observable=n,this.AI=r}Q(){var t;(t=this.parent.AJ)==null||t.delete(this.key)}}const E={AK:0,AL:new Set,AM:new Set,AN:()=>{const{AL:e,AM:t}=E,s=new Set,n=r=>{s.has(r)||(s.add(r),it(r.AO,n),it(r.AP,o=>{e.add(o)}))};return t.forEach(n),()=>{e.forEach(r=>{r()})}},V:e=>{E.AM.add(e),L.F()},reset:()=>{E.AL=new Set,E.AM=new Set}},S={AK:0,AM:new Map,AN:()=>{const{AM:e}=S;return()=>{e.forEach((t,s)=>{const n=Array.from(t);it(s.AQ,r=>{r(n)})})}},V:(e,t)=>{const s=S.AM.get(e)||new Set;s.add(t),S.AM.set(e,s),L.F()},AR:(e,t,s)=>{if(t.AO){const n=new Set,r=o=>{n.has(o)||(n.add(o),it(o.AO,i=>{i.AO||S.V(i,o.store),r(i)}))};r(e||t)}else{const n=(e==null?void 0:e.store)||N(()=>t.store[s]);S.V(t,n)}},reset:()=>{S.AM=new Map}},L={AK:!1,N:()=>{const e=E.AN(),t=S.AN();L.reset(),e(),t()},AS:()=>{ls()?setTimeout(L.AS,0):L.N()},reset:()=>{L.AK=!1,E.reset(),S.reset()},F:()=>{L.AK||(L.AK=!0,queueMicrotask(L.AS))}},V=new WeakMap,ps=new Set([k,re,v,rt,oe]),gs=new Set(["__proto__","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","prototype","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toSource","toString","valueOf"]),Ss={get:(e,t)=>{var l,a;if(ps.has(t)){if(t===k)return!0;if(t===rt)return e;if(t===re){if(W()){const u=_(e);u.keys||(u.keys=zt(u)),u.keys.listen(),u.keys.observable.get()}return}if(t===oe){if(W()){const u=_(e);u.values||(u.values=Es(u)),u.values.listen(),u.values.observable.get()}return}if(t===v)return u=>{var O;u=typeof u=="number"?String(u):u;const f=_(e),p=(O=f.AT)==null?void 0:O.get(u);if(p)return p.bind(f.store);f.AJ||(f.AJ=new x);const A=e[u],d=f.AJ.get(u)||f.AJ.AH(u,Zt(f,u,A)),h=f.equals?{equals:f.equals}:void 0;return d.observable||(d.observable=j(f,A,h)),Ht(d.observable)}}if(gs.has(t))return e[t];const s=_(e),n=(l=s.AT)==null?void 0:l.get(t),r=n||e[t];s.AJ||(s.AJ=new x);const o=W(),i=X(r),c=o||i?s.AJ.get(t)||s.AJ.AH(t,Zt(s,t,r)):void 0;if(c!=null&&c.AI&&U(c.AI,"AO",s),c&&o){const u=s.equals?{equals:s.equals}:void 0;c.listen(),c.observable||(c.observable=j(s,r,u)),c.observable.get()}return n?n.call(s.store):typeof r=="function"&&r===Array.prototype[t]?function(){return r.apply(s.store,arguments)}:((a=c==null?void 0:c.AI)==null?void 0:a.store)||r},set:(e,t,s)=>{var o,i,c,l,a,u,f;s=K(s);const n=_(e),r=(o=n.AU)==null?void 0:o.get(t);if(r)r.call(n.store,s);else{const p=e[t],A=!!p||t in e,d=n.equals||ot;if(A&&d(s,p)&&(t!=="length"||!Array.isArray(e)))return!0;e[t]=s,(i=n.values)==null||i.observable.set(0),A||((c=n.keys)==null||c.observable.set(0),(a=(l=n.has)==null?void 0:l.get(t))==null||a.observable.set(!0));const h=(u=n.AJ)==null?void 0:u.get(t);h!=null&&h.AI&&q(h.AI,"AO",n),h&&((f=h.observable)==null||f.set(s),h.AI=X(s)?V.get(s)||lt(s,n):void 0),h!=null&&h.AI&&U(h.AI,"AO",n),S.AK&&S.AR(h==null?void 0:h.AI,n,t),E.AK&&E.V(n)}return!0},deleteProperty:(e,t)=>{var i,c,l,a,u,f;if(!(t in e))return!0;if(!Reflect.deleteProperty(e,t))return!1;const r=_(e);(i=r.keys)==null||i.observable.set(0),(c=r.values)==null||c.observable.set(0),(a=(l=r.has)==null?void 0:l.get(t))==null||a.observable.set(!1);const o=(u=r.AJ)==null?void 0:u.get(t);return S.AK&&S.AR(o==null?void 0:o.AI,r,t),o!=null&&o.AI&&q(o.AI,"AO",r),o&&((f=o.observable)==null||f.set(void 0),o.AI=void 0),E.AK&&E.V(r),!0},defineProperty:(e,t,s)=>{var a,u,f,p,A,d,h,g;const n=_(e),r=n.equals||ot,o=t in e,i=Reflect.getOwnPropertyDescriptor(e,t);if(i&&ms(i,s,r))return!0;if(!Reflect.defineProperty(e,t,s))return!1;s.get?s.get&&(n.AT||(n.AT=new x),n.AT.set(t,s.get)):(a=n.AT)==null||a.delete(t),s.set?s.set&&(n.AU||(n.AU=new x),n.AU.set(t,s.set)):(u=n.AU)==null||u.delete(t),o!==!!s.enumerable&&((f=n.keys)==null||f.observable.set(0),(A=(p=n.has)==null?void 0:p.get(t))==null||A.observable.set(!!s.enumerable));const l=(d=n.AJ)==null?void 0:d.get(t);if(S.AK&&S.AR(l==null?void 0:l.AI,n,t),l!=null&&l.AI&&q(l.AI,"AO",n),l)if("get"in s)(h=l.observable)==null||h.set(s.get),l.AI=void 0;else{const O=s.value;(g=l.observable)==null||g.set(O),l.AI=X(O)?V.get(O)||lt(O,n):void 0}return l!=null&&l.AI&&U(l.AI,"AO",n),S.AK&&S.AR(l==null?void 0:l.AI,n,t),E.AK&&E.V(n),!0},has:(e,t)=>{if(t===k||t===rt)return!0;const s=t in e;if(W()){const n=_(e);n.has||(n.has=new x);const r=n.has.get(t)||n.has.AH(t,ws(n,t,s));r.listen(),r.observable.get()}return s},ownKeys:e=>{const t=Reflect.ownKeys(e);if(W()){const s=_(e);s.keys||(s.keys=zt(s)),s.keys.listen(),s.keys.observable.get()}return t}},bs={has:(e,t)=>t===Dt?!0:t in e},lt=(e,t,s)=>{const n=new Proxy(e,Ss),r=Os(e),o={AO:t,store:n};if(r){const{AT:i,AU:c}=r;i&&(o.AT=i),c&&(o.AU=c)}return s===!1?o.equals=ce:s?o.equals=s:t!=null&&t.equals&&(o.equals=t.equals),V.set(e,o),o},_=e=>{const t=V.get(e);if(!t)throw new Error("Impossible");return t},pe=e=>_(K(e)),zt=e=>{const t=j(e,0,{equals:!1});return new as(e,t)},Es=e=>{const t=j(e,0,{equals:!1});return new hs(e,t)},ws=(e,t,s)=>{const n=j(e,s);return new ds(e,t,n)},j=(e,t,s)=>new St(t,s),Zt=(e,t,s)=>{const r=X(s)?V.get(s)||lt(s,e):void 0,o=new As(e,t,void 0,r);return e.AJ||(e.AJ=new x),e.AJ.set(t,o),o},Os=e=>{if(dt(e))return;let t,s;const n=Object.keys(e);for(let r=0,o=n.length;r<o;r++){const i=n[r],c=Object.getOwnPropertyDescriptor(e,i);if(!c)continue;const{get:l,set:a}=c;l&&(t||(t=new x),t.set(i,l)),a&&(s||(s=new x),s.set(i,a))}if(!(!t&&!s))return{AT:t,AU:s}},ys=(e,t)=>F(e)?e:(V.get(e)||lt(e,void 0,t==null?void 0:t.equals)).store,K=e=>F(e)?e[rt]:e,Cs=e=>!Vt(e)||ge(e)?e:new Proxy(e,bs),ms=(e,t,s)=>!!e.configurable==!!t.configurable&&!!e.enumerable==!!t.enumerable&&!!e.writable==!!t.writable&&s(e.value,t.value)&&e.get===t.get&&e.set===t.set,W=()=>!!I,X=e=>{if(e===null||typeof e!="object")return!1;if(k in e)return!0;if(Dt in e)return!1;if(dt(e))return!0;const t=Object.getPrototypeOf(e);return t===null?!0:Object.getPrototypeOf(t)===null},ge=e=>e===null||typeof e!="object"?!1:Dt in e,Y=(e,t)=>!Vt(e)||ge(e)?e:ys(e,t);Y.on=(e,t)=>{const s=Ne(e),n=s.filter(M),r=s.filter(F).map(pe);E.AK+=1;const o=n.map(i=>{let c=!1;return Yt(()=>{c&&(E.AL.add(t),L.F()),c=!0,i()},{suspense:!1,sync:!0})});return r.forEach(i=>{U(i,"AP",t)}),()=>{E.AK-=1,o.forEach(i=>{i()}),r.forEach(i=>{q(i,"AP",t)})}};Y._onRoots=(e,t)=>{if(!F(e))return ie;const s=pe(e);if(s.AO)throw new Error("Only top-level stores are supported");return S.AK+=1,U(s,"AQ",t),()=>{S.AK-=1,q(s,"AQ",t)}};Y.reconcile=(()=>{const e=r=>dt(r)?1:X(r)?2:0,t=(r,o)=>{const i=K(r),c=K(o);s(r,o);const l=e(i),a=e(c);return(l===1||a===1)&&(r.length=o.length),r},s=(r,o)=>{const i=K(r),c=K(o),l=Object.keys(i),a=Object.keys(c);for(let u=0,f=a.length;u<f;u++){const p=a[u],A=i[p],d=c[p];if(ot(A,d))A===void 0&&!(p in i)&&(r[p]=void 0);else{const h=e(A),g=e(d);h&&h===g?(s(r[p],d),h===1&&(r[p].length=d.length)):r[p]=d}}for(let u=0,f=l.length;u<f;u++){const p=l[u];p in c||delete r[p]}return r};return(r,o)=>N(()=>t(r,o))})();Y.untrack=e=>Cs(e);Y.unwrap=e=>K(e);const It=Y,Ns=()=>{const e=y.get(Ut);if(!e)return Ie;const t=e.observable||(e.observable=new St(!!e.suspended));return Ht(t)},_s=Ns,Ls=()=>{const e=y,t=I;return s=>e.E(()=>s(),e,t)},Ts=Ls,Ms={},Rs=Symbol("Template.Accessor"),xs={},Is=e=>(e[ht]=!0,e),wt=Is,Xt=document.createComment.bind(document,""),Bs=document.createElement.bind(document),$s=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),tt=document.createTextNode.bind(document),Se=e=>B(e)?e:[e],Ps=e=>{for(let t=0,s=e.length;t<s;t++)if(B(e[t]))return e.flat(1/0);return e},{isArray:B}=Array,Ks=e=>typeof e=="boolean",w=e=>typeof e=="function",D=e=>{var t,s;return!(qt in e||ht in e||Kt in e||(s=(t=e[Ft])==null?void 0:t.parent)!=null&&s.disposed)},T=e=>e==null,Fs=e=>e instanceof Node,$=e=>typeof e=="string",H=e=>!!e.isSVG,Ds=(()=>{const e=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,t={};return s=>{const n=t[s];return n!==void 0?n:t[s]=!s.includes("-")&&e.test(s)}})(),Us=e=>w(e)&&Rs in e,qs=e=>e==null||typeof e=="boolean"||typeof e=="symbol",Vs=({loop:e,once:t,callback:s,cancel:n,schedule:r})=>{let o=!1,i=_s(),c;const l=f=>{o=!0,m(e)&&a(),m(s,!1)(f)},a=()=>{c=N(()=>r(l))},u=()=>{N(()=>n(c))};return Yt(()=>{if(!(t&&o)&&!i())return a(),u},{suspense:!1}),u},Hs=Vs,Ys=e=>Hs({callback:e,loop:!0,cancel:cancelAnimationFrame,schedule:requestAnimationFrame}),Js=Ys,Ws={sync:"init"},Qs=e=>Yt(e,Ws),R=Qs,Gs=()=>{let e=!1;const t=()=>e;return de(()=>e=!0),t},zs=Gs,Zs=e=>{const t=zs(),s=Ts();queueMicrotask(()=>{t()||s(e)})},be=Zs,Xs=(e,t,s)=>{const{className:n}=e;if($(n))if(n){if(!s&&n===t){e.className="";return}}else if(s){e.className=t;return}else return;t.includes(" ")?t.split(" ").forEach(r=>{r.length&&e.classList.toggle(r,!!s)}):e.classList.toggle(t,!!s)},ft=document.createComment(""),Ot=[ft],yt=[ft],ks=(e,t,s,n)=>{if(t===s)return;t instanceof Node&&(Ot[0]=t,t=Ot),s instanceof Node&&(yt[0]=s,s=yt);const r=s.length;let o=t.length,i=r,c=0,l=0,a=null,u;for(;c<o||l<i;)if(o===c){const f=i<r?l?s[l-1].nextSibling:s[i-l]:n;l<i&&(f?f.before.apply(f,s.slice(l,i)):e.append.apply(e,s.slice(l,i)),l=i)}else if(i===l)for(;c<o;){if(!a||!a.has(t[c])){u=t[c];try{e.removeChild(u)}catch{}}c++}else if(t[c]===s[l])c++,l++;else if(t[o-1]===s[i-1])o--,i--;else if(t[c]===s[i-1]&&s[l]===t[o-1]){const f=t[--o].nextSibling;e.insertBefore(s[l++],t[c++].nextSibling),e.insertBefore(s[--i],f),t[o]=s[i]}else{if(!a){a=new Map;let f=l;for(;f<i;)a.set(s[f],f++)}if(a.has(t[c])){const f=a.get(t[c]);if(l<f&&f<i){let p=c,A=1;for(;++p<o&&p<i&&a.get(t[p])===f+A;)A++;if(A>f-l){const d=t[c];l<f&&(d?d.before.apply(d,s.slice(l,f)):e.append.apply(e,s.slice(l,f)),l=f)}else e.replaceChild(s[l++],t[c++])}else c++}else{u=t[c++];try{e.removeChild(u)}catch{}}}Ot[0]=ft,yt[0]=ft},vs=ks,js=[],P={make:()=>({values:void 0,length:0}),makeWithNode:e=>({values:e,length:1}),makeWithFragment:e=>({values:e,fragmented:!0,length:1}),getChildrenFragmented:(e,t=[])=>{const{values:s,length:n}=e;if(!n)return t;if(s instanceof Array)for(let r=0,o=s.length;r<o;r++){const i=s[r];i instanceof Node?t.push(i):P.getChildrenFragmented(i,t)}else s instanceof Node?t.push(s):P.getChildrenFragmented(s,t);return t},getChildren:e=>e.length?e.fragmented?e.length===1?P.getChildren(e.values):P.getChildrenFragmented(e):e.values:js,pushFragment:(e,t)=>{P.pushValue(e,t),e.fragmented=!0},pushNode:(e,t)=>{P.pushValue(e,t)},pushValue:(e,t)=>{const{values:s,length:n}=e;n===0?e.values=t:n===1?e.values=[s,t]:s.push(t),e.length+=1},replaceWithNode:(e,t)=>{e.values=t,delete e.fragmented,e.length=1},replaceWithFragment:(e,t)=>{e.values=t.values,e.fragmented=t.fragmented,e.length=t.length}},b=P,ut=(e,t,s=!1)=>{if(w(e))D(e)?R(()=>{ut(e(),t,!0)}):ut(e(),t,s);else if(B(e)){const[n,r]=tn(e);n[Lt]=e[Lt],t(n,r||s)}else t(e,s)},Bt=(e,t={})=>{if($(e))e.split(/\s+/g).filter(Boolean).filter(s=>{t[s]=!0});else if(w(e))Bt(e(),t);else if(B(e))e.forEach(s=>{Bt(s,t)});else if(e)for(const s in e){const n=e[s];m(n)&&(t[s]=!0)}return t},tn=(()=>{const e=[],t=(s,n,r)=>{for(let o=0,i=s.length;o<i;o++){const c=s[o],l=typeof c;l==="string"||l==="number"||l==="bigint"?(n===e&&(n=s.slice(0,o)),n.push(tt(c))):l==="object"&&B(c)?(n===e&&(n=s.slice(0,o)),r=t(c,n,r)[1]):l==="function"&&Ae(c)?(n!==e&&n.push(c),r=!0):n!==e&&n.push(c)}return n===e&&(n=s),[n,r]};return s=>t(s,e,!1)})(),$t=(()=>{const e=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),t=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,s={},n=/[A-Z]/g,r=o=>s[o]||(s[o]=t.test(o)?o:o.replace(n,i=>`-${i.toLowerCase()}`));return(o,i,c)=>{H(o)?(i=i==="xlinkHref"||i==="xlink:href"?"href":r(i),T(c)||c===!1&&e.has(i)?o.removeAttribute(i):o.setAttribute(i,String(c))):T(c)||c===!1&&e.has(i)?o.removeAttribute(i):(c=c===!0?"":String(c),o.setAttribute(i,c))}})(),en=(e,t,s)=>{w(s)&&D(s)?R(()=>{$t(e,t,s())}):$t(e,t,m(s))},sn=(e,t)=>{if(t.nodeType===3)return t.nodeValue=e,t;{const s=t.parentElement;if(!s)throw new Error("Invalid child replacement");const n=tt(e);return s.replaceChild(n,t),n}},Ee=(e,t,s,n,r)=>{if(!r&&n===void 0)return;const o=b.getChildren(t),i=o instanceof Array,c=i?o.length:1,l=i?o[0]:o,a=i?o[c-1]:o,u=(a==null?void 0:a.nextSibling)||null;if(c===0){const h=typeof n;if(h==="string"||h==="number"||h==="bigint"){const g=tt(n);s||e.appendChild(g),b.replaceWithNode(t,g);return}else if(h==="object"&&n!==null&&typeof n.nodeType=="number"){const g=n;s||e.insertBefore(g,null),b.replaceWithNode(t,g);return}}if(c===1){const h=typeof n;if(h==="string"||h==="number"||h==="bigint"){const g=sn(String(n),l);b.replaceWithNode(t,g);return}}const f=b.make(),p=Array.isArray(n)?n:[n];for(let h=0,g=p.length;h<g;h++){const O=p[h],J=typeof O;if(J==="string"||J==="number"||J==="bigint")b.pushNode(f,tt(O));else if(J==="object"&&O!==null&&typeof O.nodeType=="number")b.pushNode(f,O);else if(J==="function"){const Jt=b.make();let Wt=!s;b.pushFragment(f,Jt),ut(O,(Oe,ye)=>{const Ce=Wt;Wt=!1,Ee(e,Jt,Ce,Oe,ye)})}}let A=b.getChildren(f),d=f.length;if(!(d===0&&c===1&&l.nodeType===8)){if(!s&&(d===0||c===1&&l.nodeType===8||p[Lt])){const{childNodes:h}=e;if(h.length===c){if(e.textContent="",d===0){const g=Xt();b.pushNode(f,g),A!==f.values&&(A=g,d+=1)}u?A instanceof Array?u.before.apply(u,A):e.insertBefore(A,u):A instanceof Array?e.append.apply(e,A):e.append(A),b.replaceWithFragment(t,f);return}}if(d===0){const h=Xt();b.pushNode(f,h),A!==f.values&&(A=h,d+=1)}s||vs(e,o,A,u),b.replaceWithFragment(t,f)}},we=(e,t,s=b.make())=>{ut(t,Ee.bind(void 0,e,s,!1))},at=Xs,Ct=(e,t,s)=>{w(s)&&D(s)?R(()=>{at(e,t,s())}):at(e,t,m(s))},kt=(e,t,s,n)=>{n&&n!==!0&&at(e,n,!1),s&&s!==!0&&at(e,s,t)},mt=(e,t,s)=>{if(w(s)&&D(s)){let n;R(()=>{const r=s();kt(e,t,r,n),n=r})}else kt(e,t,m(s))},vt=(e,t,s)=>{if($(t))H(e)?e.setAttribute("class",t):e.className=t;else{if(s)if($(s))s&&(H(e)?e.setAttribute("class",""):e.className="");else if(B(s)){s=It.unwrap(s);for(let n=0,r=s.length;n<r;n++)s[n]&&mt(e,!1,s[n])}else{s=It.unwrap(s);for(const n in s)t&&n in t||Ct(e,n,!1)}if(B(t))if(F(t))for(let n=0,r=t.length;n<r;n++){const o=N(()=>w(t[n])?t[n]:t[v](String(n)));mt(e,!0,o)}else for(let n=0,r=t.length;n<r;n++)t[n]&&mt(e,!0,t[n]);else if(F(t))for(const n in t){const r=N(()=>w(t[n])?t[n]:t[v](n));Ct(e,n,r)}else for(const n in t)Ct(e,n,t[n])}},nn=(e,t)=>{if(w(t)||B(t)){let s;R(()=>{const n=Bt(t);vt(e,n,s),s=n})}else vt(e,t)},rn=(e,t,s)=>{const n=xs[t]||Symbol(),r=ve(n)||Ms[n];if(!r)throw new Error(`Directive "${t}" not found`);const o=()=>r.fn(e,...Se(s));r.immediate?o():be(o)},on=(()=>{const e={onauxclick:["_onauxclick",!1],onbeforeinput:["_onbeforeinput",!1],onclick:["_onclick",!1],ondblclick:["_ondblclick",!1],onfocusin:["_onfocusin",!1],onfocusout:["_onfocusout",!1],oninput:["_oninput",!1],onkeydown:["_onkeydown",!1],onkeyup:["_onkeyup",!1],onmousedown:["_onmousedown",!1],onmouseup:["_onmouseup",!1]},t=s=>{const n=`_${s}`;document.addEventListener(s.slice(2),r=>{const o=r.composedPath();let i=null;Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return i}});for(let c=0,l=o.length;c<l;c++){i=o[c];const a=i[n];if(a&&(a(r),r.cancelBubble))break}i=null})};return(s,n,r)=>{if(n.startsWith("onmiddleclick")){const i=r;n=`onauxclick${n.slice(13)}`,r=i&&(c=>c.button===1&&i(c))}const o=e[n];if(o)o[1]||(o[1]=!0,t(n)),s[o[0]]=r;else if(n.endsWith("passive")){const i=n.endsWith("capturepassive"),c=n.slice(2,-7-(i?7:0)),l=`_${n}`,a=s[l];a&&s.removeEventListener(c,a,{capture:i}),r&&s.addEventListener(c,r,{passive:!0,capture:i}),s[l]=r}else if(n.endsWith("capture")){const i=n.slice(2,-7),c=`_${n}`,l=s[c];l&&s.removeEventListener(i,l,{capture:!0}),r&&s.addEventListener(i,r,{capture:!0}),s[c]=r}else s[n]=r}})(),cn=(e,t,s)=>{on(e,t,s)},ln=(e,t)=>{e.innerHTML=String(T(t)?"":t)},fn=(e,t)=>{R(()=>{ln(e,m(m(t).__html))})},jt=(e,t,s)=>{t==="tabIndex"&&Ks(s)&&(s=s?0:void 0),t==="value"&&e.tagName==="SELECT"&&!e._$inited&&(e._$inited=!0,queueMicrotask(()=>e[t]=s)),e[t]=s,T(s)&&$t(e,t,null)},un=(e,t,s)=>{w(s)&&D(s)?R(()=>{jt(e,t,s())}):jt(e,t,m(s))},an=(e,t)=>{if(T(t))return;const s=Ps(Se(t));be(()=>N(()=>s.forEach(n=>n==null?void 0:n(e))))},Pt=(()=>{const e=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/i,t={};return(s,n,r)=>{n.charCodeAt(0)===45?T(r)?s.style.removeProperty(n):s.style.setProperty(n,String(r)):T(r)?s.style[n]=null:s.style[n]=$(r)||t[n]||(t[n]=e.test(n))?r:`${r}px`}})(),te=(e,t,s)=>{w(s)&&D(s)?R(()=>{Pt(e,t,s())}):Pt(e,t,m(s))},ee=(e,t,s)=>{if($(t))e.setAttribute("style",t);else{if(s)if($(s))s&&(e.style.cssText="");else{s=It.unwrap(s);for(const n in s)t&&n in t||Pt(e,n,null)}if(F(t))for(const n in t){const r=N(()=>w(t[n])?t[n]:t[v](n));te(e,n,r)}else for(const n in t)te(e,n,t[n])}},hn=(e,t)=>{if(w(t)&&D(t)){let s;R(()=>{const n=t();ee(e,n,s),s=n})}else ee(e,m(t))},dn=(e,t,s)=>{if(t==="children"){const n=tt("");e.insertBefore(n,null),s(e,"setChildReplacement",void 0,n)}else t==="ref"?s(e,"setRef"):t==="style"?s(e,"setStyles"):t==="class"?(H(e)||(e.className=""),s(e,"setClasses")):t==="dangerouslySetInnerHTML"?s(e,"setHTML"):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?s(e,"setEvent",t.toLowerCase()):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?s(e,"setDirective",t.slice(4)):t==="innerHTML"||t==="outerHTML"||t==="textContent"||t==="className"||(t in e&&!H(e)?s(e,"setProperty",t):(e.setAttribute(t,""),s(e,"setAttribute",t)))},An=(e,t,s)=>{Us(s)?dn(e,t,s):t==="children"?we(e,s):t==="ref"?an(e,s):t==="style"?hn(e,s):t==="class"?nn(e,s):t==="dangerouslySetInnerHTML"?fn(e,s):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?cn(e,t.toLowerCase(),s):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?rn(e,t.slice(4),s):t==="innerHTML"||t==="outerHTML"||t==="textContent"||t==="className"||(t in e&&!H(e)?un(e,t,s):en(e,t,s))},pn=(e,t)=>{for(const s in t)An(e,s,t[s])},gn=(e,t,...s)=>{const{children:n,key:r,ref:o,...i}=t||{},c=s.length===1?s[0]:s.length===0?n:s;if(w(e)){const l=i;return T(c)||(l.children=c),T(o)||(l.ref=o),wt(()=>N(()=>e.call(e,l)))}else if($(e)){const l=i,a=Ds(e),u=a?$s:Bs;return qs(c)||(l.children=c),T(o)||(l.ref=o),wt(()=>{const f=u(e);return a&&(f.isSVG=!0),N(()=>pn(f,l)),f})}else{if(Fs(e))return wt(()=>e);throw new Error("Invalid component")}},Sn=gn,bn=(e,t)=>{if(!t||!(t instanceof HTMLElement))throw new Error("Invalid parent node");return t.textContent="",us(s=>(we(t,e),()=>{s(),t.textContent=""}))},En=bn,C=(e,t)=>Sn(e,t),Nt=Symbol("HMR.Cold"),Q=Symbol("HMR.Hot"),se=Symbol("HMR.ID"),_t=new WeakMap,wn=(e,t)=>{if(e){const s=t[Q];if(s)return s;const n=u=>(...f)=>he(()=>{var d;const p=u.reduce((h,g)=>h[g],((d=_t.get(i()))==null?void 0:d())||c());return Z(N(()=>p(...f)))}),r=(u,f)=>{const p=u[Q];if(p)return p;const A=u[Q]=n(f);for(const d in u){const h=u[d];w(h)&&(d.length>1?d!==d.toUpperCase():d===d.toUpperCase())?A[d]=r(h,[...f,d]):A[d]=h}return A},o=u=>{var A,d;const f=u.default,p=f[Nt]||f;(A=f[se])==null||A.call(f,i()),(d=_t.get(i()))==null||d(()=>p)},i=xt({}),c=xt(t);_t.set(i(),c);const l=t[Nt]||t,a=r(t,[]);return l[Q]=a,a[Nt]=l,a[Q]=a,a[se]=i,e(o),a}else return t},On=wn,G=({length:e,limit:t=94,stationary:s,...n})=>C("line",{y1:s?e-t:void 0,y2:-(s?t:e),strokeLinecap:"round",...n}),ne=60,yn=()=>{const e=()=>(Date.now()-new Date().setHours(0,0,0,0))/1e3,t=xt(e()),s=(c,l=1)=>`rotate(${(c*360).toFixed(l)})`,n=()=>s(t()%1,0),r=()=>s(t()%60/60),o=()=>s(t()/60%60/60),i=()=>s(t()/60/60%12/12);return Js(()=>t(e())),C("div",{class:"grid h-screen place-content-center dark:bg-neutral-700",children:C("svg",{viewBox:"0 0 200 200",class:"h-95vmin",children:[C("g",{class:"translate-1/2",children:[C("circle",{class:"fill-none stroke-neutral-600 dark:stroke-neutral-200",r:"98"}),Array.from({length:ne},(c,l)=>l%5===0).map((c,l)=>C(G,{transform:s(l/ne,0),class:c?"stroke-neutral-600 stroke-2 dark:stroke-neutral-200":"stroke-neutral-200 dark:stroke-neutral-600",length:c?6:2.5,stationary:!0}))]}),C("g",{class:"translate-1/2",children:[C(G,{transform:n,class:" stroke-neutral-200 stroke-4 dark:stroke-neutral-600",length:82}),C(G,{transform:i,class:"stroke-neutral-600 stroke-4 dark:stroke-neutral-200",length:46}),C(G,{transform:o,class:"stroke-neutral-400 stroke-3",length:64}),C(G,{transform:r,class:"stroke-voby stroke-2",length:76})]})]})})};En(On(e=>{},yn),document.querySelector("#root"));