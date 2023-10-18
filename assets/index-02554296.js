(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const et=Symbol("Observable"),Ft=Symbol("Observable.Frozen"),Dt=Symbol("Observable.Readable"),Ne=Symbol("Observable.Writable"),v=Symbol("Store"),ie=Symbol("Store.Keys"),k=Symbol("Store.Observable"),rt=Symbol("Store.Target"),oe=Symbol("Store.Values"),Ut=Symbol("Store.Untracked"),qt=Symbol("Suspense"),Tt=Symbol("Uncached"),Vt=Symbol("Untracked"),dt=Symbol("Untracked.Unwrapped"),Le=e=>At(e)?e:[e],me=e=>e instanceof Error?e:typeof e=="string"?new Error(e):new Error("Unknown error"),{is:it}=Object,{isArray:At}=Array,I=e=>typeof e=="function",Ht=e=>e!==null&&typeof e=="object",Te=e=>typeof e=="symbol",ce=()=>{},le=()=>!1;function Re(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function Me(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this.get()}function xe(e){return arguments.length?I(e)?this.C(e):this.set(e):this.get()}const gt=e=>{const t=Re.bind(e);return t[et]=!0,t[Ft]=!0,t},Yt=e=>{const t=Me.bind(e);return t[et]=!0,t[Dt]=e,t},Ie=e=>{const t=xe.bind(e);return t[et]=!0,t[Ne]=e,t},Gt=0,nt=1,Rt=2,Mt=3,Be=gt(!1);gt(!0);const fe=new Proxy({},new Proxy({},{get(){throw new Error("Unavailable value")}})),ue=function(){},st=(e,t)=>{if(e instanceof Array)for(let s=e.length-1;s>=0;s--)t(e[s]);else e&&t(e)},pt=(e,t,s)=>{const n=e[t];n instanceof Array?n.push(s):n?e[t]=[n,s]:e[t]=s},D=(e,t,s)=>{const n=e[t];if(n instanceof Set)n.add(s);else if(n){if(s!==n){const r=new Set;r.add(n),r.add(s),e[t]=r}}else e[t]=s},U=(e,t,s)=>{const n=e[t];n instanceof Set?n.delete(s):n===s&&(e[t]=void 0)},ot=(e,t)=>{if(e instanceof Set)for(const s of e)t(s);else e&&t(e)},Pe=e=>e.call(e),wt=e=>e.Q(!0);class $e{constructor(){this.disposed=!1,this.B=void 0,this.S=void 0,this.D=void 0,this.K=void 0,this.T=void 0,this.U=void 0}catch(t,s){var r;const{S:n}=this;if(n)return n(t),!0;if((r=this.parent)!=null&&r.catch(t,!0))return!0;if(s)return!1;throw t}Q(t){st(this.D,wt),st(this.K,wt),st(this.U,wt),st(this.B,Pe),this.B=void 0,this.disposed=t,this.S=void 0,this.K=void 0,this.U=void 0}get(t){var s;return(s=this.context)==null?void 0:s[t]}E(t,s,n){const r=y,i=K;Zt(s),ct(n);try{return t()}catch(c){return this.catch(me(c),!1),fe}finally{Zt(r),ct(i)}}}const St=$e;class Ke extends St{constructor(){super(...arguments),this.context={}}}const Fe=Ke;let ae=new Fe,K,y=ae;const ct=e=>K=e,Zt=e=>y=e,De=e=>{var t,s;return I(e)&&(Ft in e||!!((s=(t=e[Dt])==null?void 0:t.parent)!=null&&s.disposed))},Ue=De,qe=e=>I(e)&&(Vt in e||dt in e),Ve=qe;let He=class{constructor(){this.A1=[],this.M=0,this.A2=!1,this.N=()=>{if(!this.A2&&!this.M&&this.A1.length)try{for(this.A2=!0;;){const t=this.A1;if(!t.length)break;this.A1=[];for(let s=0,n=t.length;s<n;s++)t[s].C()}}finally{this.A2=!1}},this.E=t=>{this.M+=1,t(),this.M-=1,this.N()},this.F=t=>{this.A1.push(t)}}};const Z=new He;class Ye{constructor(t,s,n){this.K=new Set,this.value=t,n&&(this.parent=n),(s==null?void 0:s.equals)!==void 0&&(this.equals=s.equals||le)}get(){var t,s;return(t=this.parent)!=null&&t.disposed||((s=this.parent)==null||s.C(),K==null||K.A.L(this)),this.value}set(t){const s=this.equals||it;return(this.value===ue||!s(t,this.value))&&(this.value=t,Z.M+=1,this.I(Mt),Z.M-=1,Z.N()),t}I(t){for(const s of this.K)(s.J!==nt||s.A.has(this))&&(s.sync?(s.J=Math.max(s.J,t),Z.F(s)):s.I(t))}C(t){const s=t(this.value);return this.set(s)}}const bt=Ye;class Je{constructor(t){this.observer=t,this.A=[],this.P=0}Q(t){if(t){const{observer:s,A:n}=this;for(let r=0;r<n.length;r++)n[r].K.delete(s)}this.P=0}R(){const{observer:t,A:s,P:n}=this,r=s.length;if(n<r){for(let i=n;i<r;i++)s[i].K.delete(t);s.length=n}}empty(){return!this.A.length}has(t){const s=this.A.indexOf(t);return s>=0&&s<this.P}L(t){const{observer:s,A:n,P:r}=this,i=n.length;if(i>0){if(n[r]===t){this.P+=1;return}const c=n.indexOf(t);if(c>=0&&c<r)return;r<i-1?this.R():r===i-1&&n[r].K.delete(s)}t.K.add(s),n[this.P++]=t,r===128&&(s.A=new We(s,n))}C(){var s;const{A:t}=this;for(let n=0,r=t.length;n<r;n++)(s=t[n].parent)==null||s.C()}}class We{constructor(t,s){this.observer=t,this.A=new Set(s)}Q(t){for(const s of this.A)s.K.delete(this.observer)}R(){}empty(){return!this.A.size}has(t){return this.A.has(t)}L(t){const{observer:s,A:n}=this,r=n.size;t.K.add(s);const i=n.size;r!==i&&n.add(t)}C(){var t;for(const s of this.A)(t=s.parent)==null||t.C()}}class Qe extends St{constructor(){super(),this.parent=y,this.context=y.context,this.J=Mt,this.A=new Je(this),y!==ae&&pt(this.parent,"K",this)}Q(t){this.A.Q(t),super.Q(t)}H(t){this.Q(!1),this.J=nt;try{return this.E(t,this,this)}finally{this.A.R()}}run(){throw new Error("Abstract method")}I(t){throw new Error("Abstract method")}C(){this.disposed||(this.J===Rt&&this.A.C(),this.J===Mt?(this.J=nt,this.run(),this.J===nt?this.J=Gt:this.C()):this.J=Gt)}}const he=Qe;class Ge extends he{constructor(t,s){super(),this.fn=t,this.observable=new bt(ue,s,this),(s==null?void 0:s.sync)===!0&&(this.sync=!0,this.C())}run(){const t=super.H(this.fn);!this.disposed&&this.A.empty()&&(this.disposed=!0),t!==fe&&this.observable.set(t)}I(t){const s=this.J;s>=t||(this.J=t,s!==Rt&&this.observable.I(Rt))}}const Ze=Ge,ze=(e,t)=>{if(Ue(e))return e;if(Ve(e))return gt(e());{const s=new Ze(e,t);return Yt(s.observable)}},de=ze,Xe=e=>{pt(y,"B",e)},Ae=Xe;class ve extends St{constructor(t){super(),this.parent=y,this.context={...y.context,...t},pt(this.parent,"D",this)}E(t){return super.E(t,this,void 0)}}const ke=ve;function je(e,t){return Te(e)?y.context[e]:new ke(e).E(t||ce)}class ts{constructor(){this.A1=[],this.A2=!1,this.A3=!1,this.N=()=>{if(!this.A2&&this.A1.length)try{for(this.A2=!0;;){const t=this.A1;if(!t.length)break;this.A1=[];for(let s=0,n=t.length;s<n;s++)t[s].C()}}finally{this.A2=!1}},this.queue=()=>{this.A3||(this.A3=!0,this.resolve())},this.resolve=()=>{queueMicrotask(()=>{queueMicrotask(()=>{this.A3=!1,this.N()})})},this.F=t=>{this.A1.push(t),this.queue()}}}const xt=new ts;class es extends he{constructor(t,s){if(super(),this.fn=t,(s==null?void 0:s.suspense)!==!1){const n=this.get(qt);n&&(this.suspense=n)}(s==null?void 0:s.sync)===!0&&(this.sync=!0),(s==null?void 0:s.sync)==="init"?(this.init=!0,this.C()):this.F()}run(){const t=super.H(this.fn);I(t)&&pt(this,"B",t)}F(){var t;(t=this.suspense)!=null&&t.suspended||(this.sync?this.C():xt.F(this))}I(t){const s=this.J;s>=t||(this.J=t,(!this.sync||s!==2&&s!==3)&&this.F())}C(){var t;(t=this.suspense)!=null&&t.suspended||super.C()}}const ss=es,ns=(e,t)=>{const s=new ss(e,t);return()=>s.Q(!0)},Jt=ns;function z(e){if(I(e))return dt in e?z(e()):Vt in e?gt(z(e())):et in e?e:de(()=>z(e()));if(e instanceof Array){const t=new Array(e.length);for(let s=0,n=t.length;s<n;s++)t[s]=z(e[s]);return t}else return e}class rs extends St{constructor(t){super(),this.parent=y,this.context=y.context,t&&this.get(qt)&&(this.A0=!0,D(this.parent,"T",this))}Q(t){this.A0&&U(this.parent,"T",this),super.Q(t)}E(t){const s=()=>this.Q(!0),n=()=>t(s);return super.E(n,this,void 0)}}const is=rs,os=e=>I(e)&&et in e,ge=os;function C(e,t=!0){return(t?I:ge)(e)?e():e}const cs=e=>Ht(e)&&v in e,M=cs;function N(e){if(I(e)){const t=K;if(t)try{return ct(void 0),e()}finally{ct(t)}else return e()}else return e}const ls=()=>xt.A3||xt.A2||Z.A2,fs=ls;function It(e,t){return Ie(new bt(e,t))}const us=e=>new is(!0).E(e),as=us;class P extends Map{AH(t,s){return super.set(t,s),s}}class Et{constructor(){this.AE=0}listen(){this.AE+=1,Ae(this)}call(){this.AE-=1,!this.AE&&this.Q()}Q(){}}class hs extends Et{constructor(t,s){super(),this.parent=t,this.observable=s}Q(){this.parent.keys=void 0}}class ds extends Et{constructor(t,s){super(),this.parent=t,this.observable=s}Q(){this.parent.values=void 0}}class As extends Et{constructor(t,s,n){super(),this.parent=t,this.key=s,this.observable=n}Q(){var t;(t=this.parent.has)==null||t.delete(this.key)}}class gs extends Et{constructor(t,s,n,r){super(),this.parent=t,this.key=s,this.observable=n,this.AI=r}Q(){var t;(t=this.parent.AJ)==null||t.delete(this.key)}}const O={AK:0,AL:new Set,AM:new Set,AN:()=>{const{AL:e,AM:t}=O,s=new Set,n=r=>{s.has(r)||(s.add(r),ot(r.AO,n),ot(r.AP,i=>{e.add(i)}))};return t.forEach(n),()=>{e.forEach(r=>{r()})}},V:e=>{O.AM.add(e),m.F()},reset:()=>{O.AL=new Set,O.AM=new Set}},S={AK:0,AM:new Map,AN:()=>{const{AM:e}=S;return()=>{e.forEach((t,s)=>{const n=Array.from(t);ot(s.AQ,r=>{r(n)})})}},V:(e,t)=>{const s=S.AM.get(e)||new Set;s.add(t),S.AM.set(e,s),m.F()},AR:(e,t,s)=>{if(t.AO){const n=new Set,r=i=>{n.has(i)||(n.add(i),ot(i.AO,c=>{c.AO||S.V(c,i.store),r(c)}))};r(e||t)}else{const n=(e==null?void 0:e.store)||N(()=>t.store[s]);S.V(t,n)}},reset:()=>{S.AM=new Map}},m={AK:!1,N:()=>{const e=O.AN(),t=S.AN();m.reset(),e(),t()},AS:()=>{fs()?setTimeout(m.AS,0):m.N()},reset:()=>{m.AK=!1,O.reset(),S.reset()},F:()=>{m.AK||(m.AK=!0,queueMicrotask(m.AS))}},q=new WeakMap,ps=new Set([v,ie,k,rt,oe]),Ss=new Set(["__proto__","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","prototype","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toSource","toString","valueOf"]),bs={get:(e,t)=>{var l,h;if(ps.has(t)){if(t===v)return!0;if(t===rt)return e;if(t===ie){if(W()){const u=L(e);u.keys||(u.keys=zt(u)),u.keys.listen(),u.keys.observable.get()}return}if(t===oe){if(W()){const u=L(e);u.values||(u.values=ws(u)),u.values.listen(),u.values.observable.get()}return}if(t===k)return u=>{var E;u=typeof u=="number"?String(u):u;const f=L(e),d=(E=f.AT)==null?void 0:E.get(u);if(d)return d.bind(f.store);f.AJ||(f.AJ=new P);const A=e[u],g=f.AJ.get(u)||f.AJ.AH(u,Xt(f,u,A)),a=f.equals?{equals:f.equals}:void 0;return g.observable||(g.observable=j(f,A,a)),Yt(g.observable)}}if(Ss.has(t))return e[t];const s=L(e),n=(l=s.AT)==null?void 0:l.get(t),r=n||e[t];s.AJ||(s.AJ=new P);const i=W(),c=X(r),o=i||c?s.AJ.get(t)||s.AJ.AH(t,Xt(s,t,r)):void 0;if(o!=null&&o.AI&&D(o.AI,"AO",s),o&&i){const u=s.equals?{equals:s.equals}:void 0;o.listen(),o.observable||(o.observable=j(s,r,u)),o.observable.get()}return n?n.call(s.store):typeof r=="function"&&r===Array.prototype[t]?function(){return r.apply(s.store,arguments)}:((h=o==null?void 0:o.AI)==null?void 0:h.store)||r},set:(e,t,s)=>{var i,c,o,l,h,u,f;s=$(s);const n=L(e),r=(i=n.AU)==null?void 0:i.get(t);if(r)r.call(n.store,s);else{const d=e[t],A=!!d||t in e,g=n.equals||it;if(A&&g(s,d)&&(t!=="length"||!Array.isArray(e)))return!0;e[t]=s,(c=n.values)==null||c.observable.set(0),A||((o=n.keys)==null||o.observable.set(0),(h=(l=n.has)==null?void 0:l.get(t))==null||h.observable.set(!0));const a=(u=n.AJ)==null?void 0:u.get(t);a!=null&&a.AI&&U(a.AI,"AO",n),a&&((f=a.observable)==null||f.set(s),a.AI=X(s)?q.get(s)||lt(s,n):void 0),a!=null&&a.AI&&D(a.AI,"AO",n),S.AK&&S.AR(a==null?void 0:a.AI,n,t),O.AK&&O.V(n)}return!0},deleteProperty:(e,t)=>{var c,o,l,h,u,f;if(!(t in e))return!0;if(!Reflect.deleteProperty(e,t))return!1;const r=L(e);(c=r.keys)==null||c.observable.set(0),(o=r.values)==null||o.observable.set(0),(h=(l=r.has)==null?void 0:l.get(t))==null||h.observable.set(!1);const i=(u=r.AJ)==null?void 0:u.get(t);return S.AK&&S.AR(i==null?void 0:i.AI,r,t),i!=null&&i.AI&&U(i.AI,"AO",r),i&&((f=i.observable)==null||f.set(void 0),i.AI=void 0),O.AK&&O.V(r),!0},defineProperty:(e,t,s)=>{var h,u,f,d,A,g,a,p;const n=L(e),r=n.equals||it,i=t in e,c=Reflect.getOwnPropertyDescriptor(e,t);if("value"in s&&M(s.value)&&(s={...s,value:$(s.value)}),c&&Ns(c,s,r))return!0;if(!Reflect.defineProperty(e,t,s))return!1;s.get?s.get&&(n.AT||(n.AT=new P),n.AT.set(t,s.get)):(h=n.AT)==null||h.delete(t),s.set?s.set&&(n.AU||(n.AU=new P),n.AU.set(t,s.set)):(u=n.AU)==null||u.delete(t),i!==!!s.enumerable&&((f=n.keys)==null||f.observable.set(0)),(A=(d=n.has)==null?void 0:d.get(t))==null||A.observable.set(!0);const l=(g=n.AJ)==null?void 0:g.get(t);if(S.AK&&S.AR(l==null?void 0:l.AI,n,t),l!=null&&l.AI&&U(l.AI,"AO",n),l)if("get"in s)(a=l.observable)==null||a.set(s.get),l.AI=void 0;else{const E=s.value;(p=l.observable)==null||p.set(E),l.AI=X(E)?q.get(E)||lt(E,n):void 0}return l!=null&&l.AI&&D(l.AI,"AO",n),S.AK&&S.AR(l==null?void 0:l.AI,n,t),O.AK&&O.V(n),!0},has:(e,t)=>{if(t===v||t===rt)return!0;const s=t in e;if(W()){const n=L(e);n.has||(n.has=new P);const r=n.has.get(t)||n.has.AH(t,Os(n,t,s));r.listen(),r.observable.get()}return s},ownKeys:e=>{const t=Reflect.ownKeys(e);if(W()){const s=L(e);s.keys||(s.keys=zt(s)),s.keys.listen(),s.keys.observable.get()}return t}},Es={has:(e,t)=>t===Ut?!0:t in e},lt=(e,t,s)=>{const n=new Proxy(e,bs),r=ys(e),i={AO:t,store:n};if(r){const{AT:c,AU:o}=r;c&&(i.AT=c),o&&(i.AU=o)}return s===!1?i.equals=le:s?i.equals=s:t!=null&&t.equals&&(i.equals=t.equals),q.set(e,i),i},L=e=>{const t=q.get(e);if(!t)throw new Error("Impossible");return t},pe=e=>L($(e)),zt=e=>{const t=j(e,0,{equals:!1});return new hs(e,t)},ws=e=>{const t=j(e,0,{equals:!1});return new ds(e,t)},Os=(e,t,s)=>{const n=j(e,s);return new As(e,t,n)},j=(e,t,s)=>new bt(t,s),Xt=(e,t,s)=>{const r=X(s)?q.get(s)||lt(s,e):void 0,i=new gs(e,t,void 0,r);return e.AJ||(e.AJ=new P),e.AJ.set(t,i),i},ys=e=>{if(At(e))return;let t,s;const n=Object.keys(e);for(let r=0,i=n.length;r<i;r++){const c=n[r],o=Object.getOwnPropertyDescriptor(e,c);if(!o)continue;const{get:l,set:h}=o;l&&(t||(t=new P),t.set(c,l)),h&&(s||(s=new P),s.set(c,h))}if(!(!t&&!s))return{AT:t,AU:s}},Cs=(e,t)=>M(e)?e:(q.get(e)||lt(e,void 0,t==null?void 0:t.equals)).store,$=e=>M(e)?e[rt]:e,_s=e=>!Ht(e)||Se(e)?e:new Proxy(e,Es),Ns=(e,t,s)=>!!e.configurable==!!t.configurable&&!!e.enumerable==!!t.enumerable&&!!e.writable==!!t.writable&&s(e.value,t.value)&&e.get===t.get&&e.set===t.set,W=()=>!!K,X=e=>{if(e===null||typeof e!="object")return!1;if(v in e)return!0;if(Ut in e)return!1;if(At(e))return!0;const t=Object.getPrototypeOf(e);return t===null?!0:Object.getPrototypeOf(t)===null},Se=e=>e===null||typeof e!="object"?!1:Ut in e,H=(e,t)=>!Ht(e)||Se(e)?e:Cs(e,t);H.on=(e,t)=>{const s=M(e)?[e]:Le(e),n=s.filter(I),r=s.filter(M).map(pe);O.AK+=1;const i=n.map(c=>{let o=!1;return Jt(()=>{o&&(O.AL.add(t),m.F()),o=!0,c()},{suspense:!1,sync:!0})});return r.forEach(c=>{D(c,"AP",t)}),()=>{O.AK-=1,i.forEach(c=>{c()}),r.forEach(c=>{U(c,"AP",t)})}};H._onRoots=(e,t)=>{if(!M(e))return ce;const s=pe(e);if(s.AO)throw new Error("Only top-level stores are supported");return S.AK+=1,D(s,"AQ",t),()=>{S.AK-=1,U(s,"AQ",t)}};H.reconcile=(()=>{const e=r=>At(r)?1:X(r)?2:0,t=(r,i)=>{const c=$(r),o=$(i);s(r,i);const l=e(c),h=e(o);return(l===1||h===1)&&(r.length=i.length),r},s=(r,i)=>{const c=$(r),o=$(i),l=Object.keys(c),h=Object.keys(o);for(let u=0,f=h.length;u<f;u++){const d=h[u],A=c[d],g=o[d];if(it(A,g))A===void 0&&!(d in c)&&(r[d]=void 0);else{const a=e(A),p=e(g);a&&a===p?(s(r[d],g),a===1&&(r[d].length=g.length)):r[d]=g}}for(let u=0,f=l.length;u<f;u++){const d=l[u];d in o||delete r[d]}return r};return(r,i)=>N(()=>t(r,i))})();H.untrack=e=>_s(e);H.unwrap=e=>$(e);const Bt=H,Ls=()=>{const e=y.get(qt);if(!e)return Be;const t=e.observable||(e.observable=new bt(!!e.suspended));return Yt(t)},ms=Ls,Ts=()=>{const e=y,t=K;return s=>e.E(()=>s(),e,t)},Rs=Ts,Ms={},xs=Symbol("Template.Accessor"),Is={},Bs=e=>(e[dt]=!0,e),Ot=Bs,vt=document.createComment.bind(document,""),Ps=document.createElement.bind(document),$s=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),tt=document.createTextNode.bind(document),be=e=>R(e)?e:[e],Ks=e=>{for(let t=0,s=e.length;t<s;t++)if(R(e[t]))return e.flat(1/0);return e},{isArray:R}=Array,Fs=e=>typeof e=="boolean",b=e=>typeof e=="function",Y=e=>{var t,s;return!(Vt in e||dt in e||Ft in e||(s=(t=e[Dt])==null?void 0:t.parent)!=null&&s.disposed)},T=e=>e==null,Ds=e=>e instanceof Node,x=e=>typeof e=="string",V=e=>!!e.isSVG,Us=(()=>{const e=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,t={};return s=>{const n=t[s];return n!==void 0?n:t[s]=!s.includes("-")&&e.test(s)}})(),qs=e=>b(e)&&xs in e,Vs=e=>e==null||typeof e=="boolean"||typeof e=="symbol",Hs=({loop:e,once:t,callback:s,cancel:n,schedule:r})=>{let i=!1,c=ms(),o;const l=f=>{i=!0,C(e)&&h(),C(s,!1)(f)},h=()=>{o=N(()=>r(l))},u=()=>{N(()=>n(o))};return Jt(()=>{if(!(t&&i)&&!c())return h(),u},{suspense:!1}),u},Ys=Hs,Js=e=>Ys({callback:e,loop:!0,cancel:cancelAnimationFrame,schedule:requestAnimationFrame}),Ws=Js,Qs={sync:"init"},Gs=e=>Jt(e,Qs),B=Gs,Zs=()=>{let e=!1;const t=()=>e;return Ae(()=>e=!0),t},zs=Zs,Xs=e=>{const t=zs(),s=Rs();queueMicrotask(()=>{t()||s(e)})},Ee=Xs,vs=(e,t,s)=>{const{className:n}=e;if(x(n))if(n){if(!s&&n===t){e.className="";return}}else if(s){e.className=t;return}else return;t.includes(" ")?t.split(" ").forEach(r=>{r.length&&e.classList.toggle(r,!!s)}):e.classList.toggle(t,!!s)},ft=document.createComment(""),yt=[ft],Ct=[ft],ks=(e,t,s,n)=>{if(t===s)return;if(t instanceof Node){if(s instanceof Node&&t.parentNode===e){e.replaceChild(s,t);return}yt[0]=t,t=yt}s instanceof Node&&(Ct[0]=s,s=Ct);const r=s.length;let i=t.length,c=r,o=0,l=0,h=null,u;for(;o<i||l<c;)if(i===o){const f=c<r?l?s[l-1].nextSibling:s[c-l]:n;l<c&&(f?f.before.apply(f,s.slice(l,c)):e.append.apply(e,s.slice(l,c)),l=c)}else if(c===l)for(;o<i;)(!h||!h.has(t[o]))&&(u=t[o],u.parentNode===e&&e.removeChild(u)),o++;else if(t[o]===s[l])o++,l++;else if(t[i-1]===s[c-1])i--,c--;else if(t[o]===s[c-1]&&s[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(s[l++],t[o++].nextSibling),e.insertBefore(s[--c],f),t[i]=s[c]}else{if(!h){h=new Map;let f=l;for(;f<c;)h.set(s[f],f++)}if(h.has(t[o])){const f=h.get(t[o]);if(l<f&&f<c){let d=o,A=1;for(;++d<i&&d<c&&h.get(t[d])===f+A;)A++;if(A>f-l){const g=t[o];l<f&&(g?g.before.apply(g,s.slice(l,f)):e.append.apply(e,s.slice(l,f)),l=f)}else e.replaceChild(s[l++],t[o++])}else o++}else u=t[o++],u.parentNode===e&&e.removeChild(u)}yt[0]=ft,Ct[0]=ft},js=ks,tn=[],F={make:()=>({values:void 0,length:0}),makeWithNode:e=>({values:e,length:1}),makeWithFragment:e=>({values:e,fragmented:!0,length:1}),getChildrenFragmented:(e,t=[])=>{const{values:s,length:n}=e;if(!n)return t;if(s instanceof Array)for(let r=0,i=s.length;r<i;r++){const c=s[r];c instanceof Node?t.push(c):F.getChildrenFragmented(c,t)}else s instanceof Node?t.push(s):F.getChildrenFragmented(s,t);return t},getChildren:e=>e.length?e.fragmented?e.length===1?F.getChildren(e.values):F.getChildrenFragmented(e):e.values:tn,pushFragment:(e,t)=>{F.pushValue(e,t),e.fragmented=!0},pushNode:(e,t)=>{F.pushValue(e,t)},pushValue:(e,t)=>{const{values:s,length:n}=e;n===0?e.values=t:n===1?e.values=[s,t]:s.push(t),e.length+=1},replaceWithNode:(e,t)=>{e.values=t,delete e.fragmented,e.length=1},replaceWithFragment:(e,t)=>{e.values=t.values,e.fragmented=t.fragmented,e.length=t.length}},w=F,ut=(e,t,s=!1)=>{if(b(e))Y(e)?B(()=>{ut(e(),t,!0)}):ut(e(),t,s);else if(R(e)){const[n,r]=en(e);n[Tt]=e[Tt],t(n,r||s)}else t(e,s)},Pt=(e,t={})=>{if(x(e))e.split(/\s+/g).filter(Boolean).filter(s=>{t[s]=!0});else if(b(e))Pt(e(),t);else if(R(e))e.forEach(s=>{Pt(s,t)});else if(e)for(const s in e){const n=e[s];C(n)&&(t[s]=!0)}return t},$t=(e,t={})=>{if(x(e))return e;if(b(e))return $t(e(),t);if(R(e))e.forEach(s=>{$t(s,t)});else if(e)for(const s in e){const n=e[s];t[s]=C(n)}return t},en=(()=>{const e=[],t=(s,n,r)=>{for(let i=0,c=s.length;i<c;i++){const o=s[i],l=typeof o;l==="string"||l==="number"||l==="bigint"?(n===e&&(n=s.slice(0,i)),n.push(tt(o))):l==="object"&&R(o)?(n===e&&(n=s.slice(0,i)),r=t(o,n,r)[1]):l==="function"&&ge(o)?(n!==e&&n.push(o),r=!0):n!==e&&n.push(o)}return n===e&&(n=s),[n,r]};return s=>t(s,e,!1)})(),at=(()=>{const e=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),t=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,s={},n=/[A-Z]/g,r=i=>s[i]||(s[i]=t.test(i)?i:i.replace(n,c=>`-${c.toLowerCase()}`));return(i,c,o)=>{V(i)?(c=c==="xlinkHref"||c==="xlink:href"?"href":r(c),T(o)||o===!1&&e.has(c)?i.removeAttribute(c):i.setAttribute(c,String(o))):T(o)||o===!1&&e.has(c)?i.removeAttribute(c):(o=o===!0?"":String(o),i.setAttribute(c,o))}})(),sn=(e,t,s)=>{b(s)&&Y(s)?B(()=>{at(e,t,s())}):at(e,t,C(s))},nn=(e,t)=>{if(t.nodeType===3)return t.nodeValue=e,t;{const s=t.parentElement;if(!s)throw new Error("Invalid child replacement");const n=tt(e);return s.replaceChild(n,t),n}},we=(e,t,s,n,r)=>{if(!r&&n===void 0)return;const i=w.getChildren(t),c=i instanceof Array,o=c?i.length:1,l=c?i[0]:i,h=c?i[o-1]:i,u=(h==null?void 0:h.nextSibling)||null;if(o===0){const a=typeof n;if(a==="string"||a==="number"||a==="bigint"){const p=tt(n);s||e.appendChild(p),w.replaceWithNode(t,p);return}else if(a==="object"&&n!==null&&typeof n.nodeType=="number"){const p=n;s||e.insertBefore(p,null),w.replaceWithNode(t,p);return}}if(o===1){const a=typeof n;if(a==="string"||a==="number"||a==="bigint"){const p=nn(String(n),l);w.replaceWithNode(t,p);return}}const f=w.make(),d=Array.isArray(n)?n:[n];for(let a=0,p=d.length;a<p;a++){const E=d[a],J=typeof E;if(J==="string"||J==="number"||J==="bigint")w.pushNode(f,tt(E));else if(J==="object"&&E!==null&&typeof E.nodeType=="number")w.pushNode(f,E);else if(J==="function"){const Wt=w.make();let Qt=!s;w.pushFragment(f,Wt),ut(E,(ye,Ce)=>{const _e=Qt;Qt=!1,we(e,Wt,_e,ye,Ce)})}}let A=w.getChildren(f),g=f.length;if(!(g===0&&o===1&&l.nodeType===8)){if(!s&&(g===0||o===1&&l.nodeType===8||d[Tt])){const{childNodes:a}=e;if(a.length===o){if(e.textContent="",g===0){const p=f.placeholder||(f.placeholder=t.placeholder||(t.placeholder=vt()));w.pushNode(f,p),A!==f.values&&(A=p,g+=1)}u?A instanceof Array?u.before.apply(u,A):e.insertBefore(A,u):A instanceof Array?e.append.apply(e,A):e.append(A),w.replaceWithFragment(t,f);return}}if(g===0){const a=f.placeholder||(f.placeholder=t.placeholder||(t.placeholder=vt()));w.pushNode(f,a),A!==f.values&&(A=a,g+=1)}s||js(e,i,A,u),w.replaceWithFragment(t,f)}},Oe=(e,t,s=w.make())=>{ut(t,we.bind(void 0,e,s,!1))},ht=vs,_t=(e,t,s)=>{b(s)&&Y(s)?B(()=>{ht(e,t,s())}):ht(e,t,C(s))},kt=(e,t,s,n)=>{n&&n!==!0&&ht(e,n,!1),s&&s!==!0&&ht(e,s,t)},Nt=(e,t,s)=>{if(b(s)&&Y(s)){let n;B(()=>{const r=s();kt(e,t,r,n),n=r})}else kt(e,t,C(s))},jt=(e,t,s)=>{if(x(t))V(e)?e.setAttribute("class",t):e.className=t;else{if(s)if(x(s))s&&(V(e)?e.setAttribute("class",""):e.className="");else if(R(s)){s=Bt.unwrap(s);for(let n=0,r=s.length;n<r;n++)s[n]&&Nt(e,!1,s[n])}else{s=Bt.unwrap(s);for(const n in s)t&&n in t||_t(e,n,!1)}if(R(t))if(M(t))for(let n=0,r=t.length;n<r;n++){const i=N(()=>b(t[n])?t[n]:t[k](String(n)));Nt(e,!0,i)}else for(let n=0,r=t.length;n<r;n++)t[n]&&Nt(e,!0,t[n]);else if(M(t))for(const n in t){const r=N(()=>b(t[n])?t[n]:t[k](n));_t(e,n,r)}else for(const n in t)_t(e,n,t[n])}},rn=(e,t)=>{if(b(t)||R(t)){let s;B(()=>{const n=Pt(t);jt(e,n,s),s=n})}else jt(e,t)},on=(e,t,s)=>{const n=Is[t]||Symbol(),r=je(n)||Ms[n];if(!r)throw new Error(`Directive "${t}" not found`);const i=()=>r.fn(e,...be(s));r.immediate?i():Ee(i)},cn=(()=>{const e={onauxclick:["_onauxclick",!1],onbeforeinput:["_onbeforeinput",!1],onclick:["_onclick",!1],ondblclick:["_ondblclick",!1],onfocusin:["_onfocusin",!1],onfocusout:["_onfocusout",!1],oninput:["_oninput",!1],onkeydown:["_onkeydown",!1],onkeyup:["_onkeyup",!1],onmousedown:["_onmousedown",!1],onmouseup:["_onmouseup",!1]},t=s=>{const n=`_${s}`;document.addEventListener(s.slice(2),r=>{const i=r.composedPath();let c=null;Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return c}});for(let o=0,l=i.length;o<l;o++){c=i[o];const h=c[n];if(h&&(h(r),r.cancelBubble))break}c=null})};return(s,n,r)=>{if(n.startsWith("onmiddleclick")){const c=r;n=`onauxclick${n.slice(13)}`,r=c&&(o=>o.button===1&&c(o))}const i=e[n];if(i)i[1]||(i[1]=!0,t(n)),s[i[0]]=r;else if(n.endsWith("passive")){const c=n.endsWith("capturepassive"),o=n.slice(2,-7-(c?7:0)),l=`_${n}`,h=s[l];h&&s.removeEventListener(o,h,{capture:c}),r&&s.addEventListener(o,r,{passive:!0,capture:c}),s[l]=r}else if(n.endsWith("capture")){const c=n.slice(2,-7),o=`_${n}`,l=s[o];l&&s.removeEventListener(c,l,{capture:!0}),r&&s.addEventListener(c,r,{capture:!0}),s[o]=r}else s[n]=r}})(),ln=(e,t,s)=>{cn(e,t,s)},fn=(e,t)=>{e.innerHTML=String(T(t)?"":t)},un=(e,t)=>{B(()=>{fn(e,C(C(t).__html))})},te=(e,t,s)=>{t==="tabIndex"&&Fs(s)&&(s=s?0:void 0),t==="value"&&(e.tagName==="PROGRESS"?s??(s=null):e.tagName==="SELECT"&&!e._$inited&&(e._$inited=!0,queueMicrotask(()=>e[t]=s)));try{e[t]=s,T(s)&&at(e,t,null)}catch{at(e,t,s)}},an=(e,t,s)=>{b(s)&&Y(s)?B(()=>{te(e,t,s())}):te(e,t,C(s))},hn=(e,t)=>{if(T(t))return;const s=Ks(be(t)).filter(Boolean);s.length&&Ee(()=>N(()=>s.forEach(n=>n==null?void 0:n(e))))},Kt=(()=>{const e=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/i,t={};return(s,n,r)=>{n.charCodeAt(0)===45?T(r)?s.style.removeProperty(n):s.style.setProperty(n,String(r)):T(r)?s.style[n]=null:s.style[n]=x(r)||t[n]||(t[n]=e.test(n))?r:`${r}px`}})(),ee=(e,t,s)=>{b(s)&&Y(s)?B(()=>{Kt(e,t,s())}):Kt(e,t,C(s))},se=(e,t,s)=>{if(x(t))e.setAttribute("style",t);else{if(s)if(x(s))s&&(e.style.cssText="");else{s=Bt.unwrap(s);for(const n in s)t&&n in t||Kt(e,n,null)}if(M(t))for(const n in t){const r=N(()=>b(t[n])?t[n]:t[k](n));ee(e,n,r)}else for(const n in t)ee(e,n,t[n])}},dn=(e,t)=>{if(b(t)||R(t)){let s;B(()=>{const n=$t(t);se(e,n,s),s=n})}else se(e,C(t))},An=(e,t,s)=>{if(t==="children"){const n=tt("");e.insertBefore(n,null),s(e,"setChildReplacement",void 0,n)}else t==="ref"?s(e,"setRef"):t==="style"?s(e,"setStyles"):t==="class"?(V(e)||(e.className=""),s(e,"setClasses")):t==="dangerouslySetInnerHTML"?s(e,"setHTML"):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?s(e,"setEvent",t.toLowerCase()):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?s(e,"setDirective",t.slice(4)):t==="innerHTML"||t==="outerHTML"||t==="textContent"||t==="className"||(t in e&&!V(e)?s(e,"setProperty",t):(e.setAttribute(t,""),s(e,"setAttribute",t)))},gn=(e,t,s)=>{qs(s)?An(e,t,s):t==="children"?Oe(e,s):t==="ref"?hn(e,s):t==="style"?dn(e,s):t==="class"?rn(e,s):t==="dangerouslySetInnerHTML"?un(e,s):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?ln(e,t.toLowerCase(),s):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?on(e,t.slice(4),s):t==="innerHTML"||t==="outerHTML"||t==="textContent"||t==="className"||(t in e&&!V(e)?an(e,t,s):sn(e,t,s))},pn=(e,t)=>{for(const s in t)gn(e,s,t[s])},Sn=(e,t,...s)=>{const{children:n,key:r,ref:i,...c}=t||{},o=s.length===1?s[0]:s.length===0?n:s;if(b(e)){const l=c;return T(o)||(l.children=o),T(i)||(l.ref=i),Ot(()=>N(()=>e.call(e,l)))}else if(x(e)){const l=c,h=Us(e),u=h?$s:Ps;return Vs(o)||(l.children=o),T(i)||(l.ref=i),Ot(()=>{const f=u(e);return h&&(f.isSVG=!0),N(()=>pn(f,l)),f})}else{if(Ds(e))return Ot(()=>e);throw new Error("Invalid component")}},bn=Sn,En=(e,t)=>{if(!t||!(t instanceof HTMLElement))throw new Error("Invalid parent node");return t.textContent="",as(s=>(Oe(t,e),()=>{s(),t.textContent=""}))},wn=En,_=(e,t)=>bn(e,t),On=/^_?[A-Z][a-zA-Z0-9$_-]*$/,yn="__hmr_as__",Lt=Symbol("HMR.Cold"),Q=Symbol("HMR.Hot"),ne=Symbol("HMR.ID"),mt=new WeakMap,Cn=(e,t)=>{if(e){const s=t[Q];if(s)return s;if(!b(t)&&"Provider"in t)return t;const r=f=>(...d)=>de(()=>{var a;const A=f.reduce((p,E)=>p[E],((a=mt.get(o()))==null?void 0:a())||l());return z(N(()=>A(...d)))}),i=(f,d)=>{const A=f[Q];if(A)return A;const g=f[Q]=r(d);for(const a in f){const p=f[a];b(p)&&On.test(a)?g[a]=i(p,[...d,a]):g[a]=p}return g},c=f=>{var g,a;const d=f[t[yn]]||f[t.name]||f.default;if(!d)return console.error(`[hmr] Failed to handle update for "${t.name}" component:

`,t);const A=d[Lt]||d;(g=d[ne])==null||g.call(d,o()),(a=mt.get(o()))==null||a(()=>A)},o=It({}),l=It(t);mt.set(o(),l);const h=t[Lt]||t,u=i(t,[]);return h[Q]=u,u[Lt]=h,u[Q]=u,u[ne]=o,e(c),u}else return t},_n=Cn,G=({length:e,limit:t=94,stationary:s,...n})=>_("line",{y1:s?e-t:void 0,y2:-(s?t:e),strokeLinecap:"round",...n}),re=60,Nn=()=>{const e=()=>(Date.now()-new Date().setHours(0,0,0,0))/1e3,t=It(e()),s=(o,l=1)=>`rotate(${(o*360).toFixed(l)})`,n=()=>s(t()%1,0),r=()=>s(t()%60/60),i=()=>s(t()/60%60/60),c=()=>s(t()/60/60%12/12);return Ws(()=>t(e())),_("div",{class:"grid h-screen place-content-center dark:bg-gray-800",children:_("svg",{viewBox:"0 0 200 200",class:"h-95vmin",children:[_("g",{class:"translate-1/2",children:[_("circle",{class:"fill-none stroke-gray-600 dark:stroke-gray-200",r:"98"}),Array.from({length:re},(o,l)=>!(l%5)).map((o,l)=>_(G,{transform:s(l/re,0),class:o?"stroke-gray-600 stroke-2 dark:stroke-gray-200":"stroke-gray-200 dark:stroke-gray-600",length:o?6:2.5,stationary:!0}))]}),_("g",{class:"translate-1/2",children:[_(G,{transform:n,class:"stroke-gray-200 stroke-3 dark:stroke-gray-600",length:82}),_(G,{transform:c,class:"stroke-gray-600 stroke-4 dark:stroke-gray-200",length:46}),_(G,{transform:i,class:"stroke-gray-400 stroke-3",length:64}),_(G,{transform:r,class:"stroke-voby stroke-2",length:76})]})]})})};wn(_n(e=>{},Nn),document.querySelector("#root"));
