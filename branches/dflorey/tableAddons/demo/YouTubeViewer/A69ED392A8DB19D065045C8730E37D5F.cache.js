(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,us='com.google.gwt.core.client.',vs='com.google.gwt.demos.youtubeviewer.client.',ws='com.google.gwt.lang.',xs='com.google.gwt.user.client.',ys='com.google.gwt.user.client.impl.',zs='com.google.gwt.user.client.ui.',As='com.google.gwt.user.client.ui.impl.',Bs='com.google.gwt.widgetideas.client.',Cs='java.lang.',Ds='java.util.';function ts(){}
function gn(a){return this===a;}
function hn(){return wn(this);}
function en(){}
_=en.prototype={};_.eQ=gn;_.hC=hn;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function s(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function t(){return ++u;}
var u=0;function x(b,a){if(!ic(a,2)){return false;}return B(b,hc(a,2));}
function y(a){return r(a);}
function z(){return [];}
function A(){return {};}
function C(a){return x(this,a);}
function B(a,b){return a===b;}
function D(){return y(this);}
function v(){}
_=v.prototype=new en();_.eQ=C;_.hC=D;_.tI=7;function xb(a){a.a=hm(new gm(),'mc336q361N0');}
function yb(a){xb(a);return a;}
function Ab(d){var a,b,c,e,f;d.a=hm(new gm(),'k56DbGDBsNk');nk(d.a,'YouTubeViewer');ok(d.a,'443px');mk(d.a,'369px');lf(tj(),d.a);lf(tj(),ui(new Ag(),'<BR><BR>'));a=rg(new pg(),5,3);e=gk(new Ej());dk(e,'iuywmPePYKQ');ni(a,0,0,'<B>Video ID:<\/B>');pi(a,0,1,e);pi(a,0,2,xf(new pf(),'Set',ab(new F(),d,e)));f=gk(new Ej());dk(f,'443px');ni(a,1,0,'<B>Width:<\/B>');pi(a,1,1,f);pi(a,1,2,xf(new pf(),'Set',eb(new db(),d,f)));b=gk(new Ej());dk(b,'369px');ni(a,2,0,'<B>Height:<\/B>');pi(a,2,1,b);pi(a,2,2,xf(new pf(),'Set',ib(new hb(),d,b)));c=gk(new Ej());dk(c,'http://www.google.com');ni(a,3,0,'<B>Plugins Page:<\/B>');pi(a,3,1,c);pi(a,3,2,xf(new pf(),'Set',mb(new lb(),d,c)));pi(a,4,0,xf(new pf(),'Enable AutoPlay',qb(new pb(),d)));pi(a,4,1,xf(new pf(),'Enable Related',ub(new tb(),d)));lf(tj(),a);}
function E(){}
_=E.prototype=new en();_.tI=0;function ab(b,a,c){b.a=a;b.b=c;return b;}
function cb(a){mm(this.a.a,ck(this.b));}
function F(){}
_=F.prototype=new en();_.C=cb;_.tI=8;function eb(b,a,c){b.a=a;b.b=c;return b;}
function gb(a){ok(this.a.a,ck(this.b));}
function db(){}
_=db.prototype=new en();_.C=gb;_.tI=9;function ib(b,a,c){b.a=a;b.b=c;return b;}
function kb(a){mk(this.a.a,ck(this.b));}
function hb(){}
_=hb.prototype=new en();_.C=kb;_.tI=10;function mb(b,a,c){b.a=a;b.b=c;return b;}
function ob(b){var a;a=this.a.a.d;El(a,ck(this.b));em(this.a.a,a);}
function lb(){}
_=lb.prototype=new en();_.C=ob;_.tI=11;function qb(b,a){b.a=a;return b;}
function sb(a){if(this.a.a.a){lm(this.a.a,false);uf(hc(a,3),'Enable AutoPlay');}else{lm(this.a.a,true);uf(hc(a,3),'Disable AutoPlay');}}
function pb(){}
_=pb.prototype=new en();_.C=sb;_.tI=12;function ub(b,a){b.a=a;return b;}
function wb(a){if(this.a.a.c){nm(this.a.a,false);uf(hc(a,3),'Enable Related');}else{nm(this.a.a,true);uf(hc(a,3),'Disable Related');}}
function tb(){}
_=tb.prototype=new en();_.C=wb;_.tI=13;function Cb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function Eb(a,b,c){return a[b]=c;}
function Fb(b,a){return b[a];}
function ac(a){return a.length;}
function cc(e,d,c,b,a){return bc(e,d,c,b,0,ac(b),a);}
function bc(j,i,g,c,e,a,b){var d,f,h;if((f=Fb(c,e))<0){throw new cn();}h=Cb(new Bb(),f,Fb(i,e),Fb(g,e),j);++e;if(e<a){j=pn(j,1);for(d=0;d<f;++d){Eb(h,d,bc(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Eb(h,d,b);}}return h;}
function dc(a,b,c){if(c!==null&&a.b!=0&& !ic(c,a.b)){throw new pm();}return Eb(a,b,c);}
function Bb(){}
_=Bb.prototype=new en();_.tI=0;function gc(b,a){return !(!(b&&lc[b][a]));}
function hc(b,a){if(b!=null)gc(b.tI,a)||kc();return b;}
function ic(b,a){return b!=null&&gc(b.tI,a);}
function kc(){throw new sm();}
function jc(a){if(a!==null){throw new sm();}return a;}
function mc(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var lc;function qc(){qc=ts;jd=cq(new aq());{ed=new pe();xe(ed);}}
function rc(b,a){qc();Ae(ed,b,a);}
function sc(a,b){qc();return te(ed,a,b);}
function tc(){qc();return Ce(ed,'button');}
function uc(){qc();return Ce(ed,'div');}
function vc(a){qc();return Ce(ed,a);}
function wc(){qc();return De(ed,'text');}
function xc(){qc();return Ce(ed,'tbody');}
function yc(){qc();return Ce(ed,'td');}
function zc(){qc();return Ce(ed,'table');}
function Cc(b,a,d){qc();var c;c=o;{Bc(b,a,d);}}
function Bc(b,a,c){qc();var d;if(a===id){if(Ec(b)==8192){id=null;}}d=Ac;Ac=b;try{c.B(b);}finally{Ac=d;}}
function Dc(b,a){qc();Ee(ed,b,a);}
function Ec(a){qc();return Fe(ed,a);}
function Fc(a){qc();ue(ed,a);}
function ad(a,b){qc();return af(ed,a,b);}
function bd(a){qc();return bf(ed,a);}
function cd(a){qc();return ve(ed,a);}
function dd(a){qc();return we(ed,a);}
function fd(c,a,b){qc();ye(ed,c,a,b);}
function gd(a){qc();var b,c;c=true;if(jd.b>0){b=jc(gq(jd,jd.b-1));if(!(c=null.hb())){Dc(a,true);Fc(a);}}return c;}
function hd(b,a){qc();cf(ed,b,a);}
function kd(a,b,c){qc();df(ed,a,b,c);}
function ld(a,b){qc();ef(ed,a,b);}
function md(a,b){qc();ff(ed,a,b);}
function nd(a,b){qc();gf(ed,a,b);}
function od(b,a,c){qc();hf(ed,b,a,c);}
function pd(a,b){qc();ze(ed,a,b);}
var Ac=null,ed=null,id=null,jd;function sd(a){if(ic(a,5)){return sc(this,hc(a,5));}return x(mc(this,qd),a);}
function td(){return y(mc(this,qd));}
function qd(){}
_=qd.prototype=new v();_.eQ=sd;_.hC=td;_.tI=14;function xd(a){return x(mc(this,ud),a);}
function yd(){return y(mc(this,ud));}
function ud(){}
_=ud.prototype=new v();_.eQ=xd;_.hC=yd;_.tI=15;function Ed(){Ed=ts;ae=cq(new aq());{Fd();}}
function Fd(){Ed();ee(new Ad());}
var ae;function Cd(){while((Ed(),ae).b>0){jc(gq((Ed(),ae),0)).hb();}}
function Dd(){return null;}
function Ad(){}
_=Ad.prototype=new en();_.F=Cd;_.ab=Dd;_.tI=16;function de(){de=ts;fe=cq(new aq());ne=cq(new aq());{je();}}
function ee(a){de();dq(fe,a);}
function ge(){de();var a,b;for(a=oo(fe);ho(a);){b=hc(io(a),6);b.F();}}
function he(){de();var a,b,c,d;d=null;for(a=oo(fe);ho(a);){b=hc(io(a),6);c=b.ab();{d=c;}}return d;}
function ie(){de();var a,b;for(a=oo(ne);ho(a);){b=jc(io(a));null.hb();}}
function je(){de();__gwt_initHandlers(function(){me();},function(){return le();},function(){ke();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ke(){de();var a;a=o;{ge();}}
function le(){de();var a;a=o;{return he();}}
function me(){de();var a;a=o;{ie();}}
var fe,ne;function Ae(c,b,a){b.appendChild(a);}
function Ce(b,a){return $doc.createElement(a);}
function De(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function Ee(c,b,a){b.cancelBubble=a;}
function Fe(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function af(d,a,b){var c=a[b];return c==null?null:String(c);}
function bf(b,a){return a.__eventBits||0;}
function cf(c,b,a){b.removeChild(a);}
function df(c,a,b,d){a[b]=d;}
function ef(c,a,b){a.__listener=b;}
function ff(c,a,b){if(!b){b='';}a.innerHTML=b;}
function gf(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function hf(c,b,a,d){b.style[a]=d;}
function oe(){}
_=oe.prototype=new en();_.tI=0;function te(c,a,b){return a==b;}
function ue(b,a){a.preventDefault();}
function ve(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function we(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function xe(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Cc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!gd(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Cc(b,a,c);};$wnd.__captureElem=null;}
function ye(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function ze(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function re(){}
_=re.prototype=new oe();_.tI=0;function pe(){}
_=pe.prototype=new re();_.tI=0;function kk(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function lk(b,a){if(b.k!==null){kk(b,b.k,a);}b.k=a;}
function mk(b,a){od(b.k,'height',a);}
function nk(b,a){qk(b.k,a);}
function ok(a,b){od(a.k,'width',b);}
function pk(b,a){pd(b.k,a|bd(b.k));}
function qk(a,b){kd(a,'className',b);}
function ik(){}
_=ik.prototype=new en();_.tI=0;_.k=null;function bl(a){if(a.i){throw Dm(new Cm(),"Should only call onAttach when the widget is detached from the browser's document");}a.i=true;ld(a.k,a);a.q();a.D();}
function cl(a){if(!a.i){throw Dm(new Cm(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.E();}finally{a.r();ld(a.k,null);a.i=false;}}
function dl(a){if(a.j!==null){a.j.cb(a);}else if(a.j!==null){throw Dm(new Cm(),"This widget's parent does not implement HasWidgets");}}
function el(b,a){if(b.i){ld(b.k,null);}lk(b,a);if(b.i){ld(a,b);}}
function fl(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.i){cl(c);}c.j=null;}else{if(a!==null){throw Dm(new Cm(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.i){bl(c);}}}
function gl(){}
function hl(){}
function il(a){}
function jl(){}
function kl(){}
function ll(a){el(this,a);}
function rk(){}
_=rk.prototype=new ik();_.q=gl;_.r=hl;_.B=il;_.D=jl;_.E=kl;_.db=ll;_.tI=17;_.i=false;_.j=null;function ej(b,a){fl(a,b);}
function gj(b,a){fl(a,null);}
function hj(){var a,b;for(b=this.y();b.x();){a=hc(b.A(),8);bl(a);}}
function ij(){var a,b;for(b=this.y();b.x();){a=hc(b.A(),8);cl(a);}}
function jj(){}
function kj(){}
function dj(){}
_=dj.prototype=new rk();_.q=hj;_.r=ij;_.D=jj;_.E=kj;_.tI=18;function ag(a){a.a=yk(new sk(),a);}
function bg(a){ag(a);return a;}
function cg(c,a,b){dl(a);zk(c.a,a);rc(b,a.k);ej(c,a);}
function eg(b,c){var a;if(c.j!==b){return false;}gj(b,c);a=c.k;hd(dd(a),a);Fk(b.a,c);return true;}
function fg(){return Dk(this.a);}
function gg(a){return eg(this,a);}
function Ff(){}
_=Ff.prototype=new dj();_.y=fg;_.cb=gg;_.tI=19;function kf(a){bg(a);a.db(uc());od(a.k,'position','relative');od(a.k,'overflow','hidden');return a;}
function lf(a,b){cg(a,b,a.k);}
function nf(a){od(a,'left','');od(a,'top','');od(a,'position','');}
function of(b){var a;a=eg(this,b);if(a){nf(b.k);}return a;}
function jf(){}
_=jf.prototype=new Ff();_.cb=of;_.tI=20;function jg(){jg=ts;vl(),xl;}
function ig(b,a){vl(),xl;lg(b,a);return b;}
function kg(b,a){switch(Ec(a)){case 1:if(b.b!==null){Df(b.b,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function lg(b,a){el(b,a);pk(b,7041);}
function mg(a){if(this.b===null){this.b=Bf(new Af());}dq(this.b,a);}
function ng(a){kg(this,a);}
function og(a){lg(this,a);}
function hg(){}
_=hg.prototype=new rk();_.l=mg;_.B=ng;_.db=og;_.tI=21;_.b=null;function sf(){sf=ts;vl(),xl;}
function rf(b,a){vl(),xl;ig(b,a);return b;}
function tf(b,a){md(b.k,a);}
function uf(b,a){nd(b.k,a);}
function qf(){}
_=qf.prototype=new hg();_.tI=22;function yf(){yf=ts;vl(),xl;}
function vf(a){vl(),xl;rf(a,tc());zf(a.k);nk(a,'gwt-Button');return a;}
function wf(b,a){vl(),xl;vf(b);tf(b,a);return b;}
function xf(c,a,b){vl(),xl;wf(c,a);c.l(b);return c;}
function zf(b){yf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function pf(){}
_=pf.prototype=new qf();_.tI=23;function En(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function ao(a){throw Bn(new An(),'add');}
function bo(b){var a;a=En(this,this.y(),b);return a!==null;}
function Dn(){}
_=Dn.prototype=new en();_.n=ao;_.p=bo;_.tI=0;function no(b,a){throw an(new Fm(),'Index: '+a+', Size: '+b.b);}
function oo(a){return fo(new eo(),a);}
function po(b,a){throw Bn(new An(),'add');}
function qo(a){this.m(this.fb(),a);return true;}
function ro(e){var a,b,c,d,f;if(e===this){return true;}if(!ic(e,13)){return false;}f=hc(e,13);if(this.fb()!=f.fb()){return false;}c=oo(this);d=f.y();while(ho(c)){a=io(c);b=io(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function so(){var a,b,c,d;c=1;a=31;b=oo(this);while(ho(b)){d=io(b);c=31*c+(d===null?0:d.hC());}return c;}
function to(){return oo(this);}
function uo(a){throw Bn(new An(),'remove');}
function co(){}
_=co.prototype=new Dn();_.m=po;_.n=qo;_.eQ=ro;_.hC=so;_.y=to;_.bb=uo;_.tI=24;function bq(a){{eq(a);}}
function cq(a){bq(a);return a;}
function dq(b,a){uq(b.a,b.b++,a);return true;}
function eq(a){a.a=z();a.b=0;}
function gq(b,a){if(a<0||a>=b.b){no(b,a);}return qq(b.a,a);}
function hq(b,a){return iq(b,a,0);}
function iq(c,b,a){if(a<0){no(c,a);}for(;a<c.b;++a){if(pq(b,qq(c.a,a))){return a;}}return (-1);}
function jq(c,a){var b;b=gq(c,a);sq(c.a,a,1);--c.b;return b;}
function kq(d,a,b){var c;c=gq(d,a);uq(d.a,a,b);return c;}
function mq(a,b){if(a<0||a>this.b){no(this,a);}lq(this.a,a,b);++this.b;}
function nq(a){return dq(this,a);}
function lq(a,b,c){a.splice(b,0,c);}
function oq(a){return hq(this,a)!=(-1);}
function pq(a,b){return a===b||a!==null&&a.eQ(b);}
function rq(a){return gq(this,a);}
function qq(a,b){return a[b];}
function tq(a){return jq(this,a);}
function sq(a,c,b){a.splice(c,b);}
function uq(a,b,c){a[b]=c;}
function vq(){return this.b;}
function aq(){}
_=aq.prototype=new co();_.m=mq;_.n=nq;_.p=oq;_.v=rq;_.bb=tq;_.fb=vq;_.tI=25;_.a=null;_.b=0;function Bf(a){cq(a);return a;}
function Df(d,c){var a,b;for(a=oo(d);ho(a);){b=hc(io(a),7);b.C(c);}}
function Af(){}
_=Af.prototype=new aq();_.tI=26;function Fh(a){a.h=vh(new qh());}
function ai(a){Fh(a);a.g=zc();a.c=xc();rc(a.g,a.c);a.db(a.g);pk(a,1);return a;}
function bi(d,c,b){var a;ci(d,c);if(b<0){throw an(new Fm(),'Column '+b+' must be non-negative: '+b);}a=d.a;if(a<=b){throw an(new Fm(),'Column index: '+b+', Column size: '+d.a);}}
function ci(c,a){var b;b=c.b;if(a>=b||a<0){throw an(new Fm(),'Row index: '+a+', Row size: '+b);}}
function di(e,c,b,a){var d;d=ih(e.d,c,b);hi(e,d,a);return d;}
function fi(a){return yc();}
function gi(d,b,a){var c,e;e=ph(d.f,d.c,b);c=tg(d);fd(e,c,a);}
function hi(d,c,a){var b,e;b=cd(c);e=null;if(b!==null){e=xh(d.h,b);}if(e!==null){ki(d,e);return true;}else{if(a){md(c,'');}return false;}}
function ki(b,c){var a;if(c.j!==b){return false;}gj(b,c);a=c.k;hd(dd(a),a);Ah(b.h,a);return true;}
function ii(d,b,a){var c,e;bi(d,b,a);c=di(d,b,a,false);e=ph(d.f,d.c,b);hd(e,c);}
function ji(d,c){var a,b;b=d.a;for(a=0;a<b;++a){di(d,c,a,false);}hd(d.c,ph(d.f,d.c,c));}
function li(b,a){b.d=a;}
function mi(b,a){b.e=a;mh(b.e);}
function ni(e,c,a,b){var d;ug(e,c,a);d=di(e,c,a,b===null);if(b!==null){md(d,b);}}
function oi(b,a){b.f=a;}
function pi(d,b,a,e){var c;ug(d,b,a);if(e!==null){dl(e);c=di(d,b,a,true);yh(d.h,e);rc(c,e.k);ej(d,e);}}
function qi(){return Bh(this.h);}
function ri(a){switch(Ec(a)){case 1:{break;}default:}}
function si(a){return ki(this,a);}
function Bg(){}
_=Bg.prototype=new dj();_.y=qi;_.B=ri;_.cb=si;_.tI=27;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function qg(a){ai(a);li(a,fh(new eh(),a));oi(a,new nh());mi(a,kh(new jh(),a));return a;}
function rg(c,b,a){qg(c);yg(c,b,a);return c;}
function tg(b){var a;a=fi(b);md(a,'&nbsp;');return a;}
function ug(c,b,a){vg(c,b);if(a<0){throw an(new Fm(),'Cannot access a column with a negative index: '+a);}if(a>=c.a){throw an(new Fm(),'Column index: '+a+', Column size: '+c.a);}}
function vg(b,a){if(a<0){throw an(new Fm(),'Cannot access a row with a negative index: '+a);}if(a>=b.b){throw an(new Fm(),'Row index: '+a+', Row size: '+b.b);}}
function yg(c,b,a){wg(c,a);xg(c,b);}
function wg(d,a){var b,c;if(d.a==a){return;}if(a<0){throw an(new Fm(),'Cannot set number of columns to '+a);}if(d.a>a){for(b=0;b<d.b;b++){for(c=d.a-1;c>=a;c--){ii(d,b,c);}}}else{for(b=0;b<d.b;b++){for(c=d.a;c<a;c++){gi(d,b,c);}}}d.a=a;}
function xg(b,a){if(b.b==a){return;}if(a<0){throw an(new Fm(),'Cannot set number of rows to '+a);}if(b.b<a){zg(b.c,a-b.b,b.a);b.b=a;}else{while(b.b>a){ji(b,--b.b);}}}
function zg(g,f,c){var h=$doc.createElement('td');h.innerHTML='&nbsp;';var d=$doc.createElement('tr');for(var b=0;b<c;b++){var a=h.cloneNode(true);d.appendChild(a);}g.appendChild(d);for(var e=1;e<f;e++){g.appendChild(d.cloneNode(true));}}
function pg(){}
_=pg.prototype=new Bg();_.tI=28;_.a=0;_.b=0;function aj(a){a.db(uc());pk(a,131197);nk(a,'gwt-Label');return a;}
function cj(a){switch(Ec(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function Fi(){}
_=Fi.prototype=new rk();_.B=cj;_.tI=29;function ti(a){aj(a);a.db(uc());pk(a,125);nk(a,'gwt-HTML');return a;}
function ui(b,a){ti(b);wi(b,a);return b;}
function wi(b,a){md(b.k,a);}
function Ag(){}
_=Ag.prototype=new Fi();_.tI=30;function Dg(a){{ah(a);}}
function Eg(b,a){b.b=a;Dg(b);return b;}
function ah(a){while(++a.a<a.b.b.b){if(gq(a.b.b,a.a)!==null){return;}}}
function bh(a){return a.a<a.b.b.b;}
function ch(){return bh(this);}
function dh(){var a;if(!bh(this)){throw new ps();}a=gq(this.b.b,this.a);ah(this);return a;}
function Cg(){}
_=Cg.prototype=new en();_.x=ch;_.A=dh;_.tI=0;_.a=(-1);function fh(b,a){b.a=a;return b;}
function hh(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function ih(c,b,a){return hh(c,c.a.c,b,a);}
function eh(){}
_=eh.prototype=new en();_.tI=0;function kh(b,a){b.b=a;return b;}
function mh(a){if(a.a===null){a.a=vc('colgroup');fd(a.b.g,a.a,0);rc(a.a,vc('col'));}}
function jh(){}
_=jh.prototype=new en();_.tI=0;_.a=null;function ph(c,a,b){return a.rows[b];}
function nh(){}
_=nh.prototype=new en();_.tI=0;function uh(a){a.b=cq(new aq());}
function vh(a){uh(a);return a;}
function xh(c,a){var b;b=Dh(a);if(b<0){return null;}return hc(gq(c.b,b),8);}
function yh(b,c){var a;if(b.a===null){a=b.b.b;dq(b.b,c);}else{a=b.a.a;kq(b.b,a,c);b.a=b.a.b;}Eh(c.k,a);}
function zh(c,a,b){Ch(a);kq(c.b,b,null);c.a=sh(new rh(),b,c.a);}
function Ah(c,a){var b;b=Dh(a);zh(c,a,b);}
function Bh(a){return Eg(new Cg(),a);}
function Ch(a){a['__widgetID']=null;}
function Dh(a){var b=a['__widgetID'];return b==null?-1:b;}
function Eh(a,b){a['__widgetID']=b;}
function qh(){}
_=qh.prototype=new en();_.tI=0;_.a=null;function sh(c,a,b){c.a=a;c.b=b;return c;}
function rh(){}
_=rh.prototype=new en();_.tI=0;_.a=0;_.b=null;function rj(){rj=ts;wj=sr(new yq());}
function qj(b,a){rj();kf(b);if(a===null){a=sj();}b.db(a);bl(b);return b;}
function tj(){rj();return uj(null);}
function uj(c){rj();var a,b;b=hc(yr(wj,c),9);if(b!==null){return b;}a=null;if(wj.c==0){vj();}zr(wj,c,b=qj(new lj(),a));return b;}
function sj(){rj();return $doc.body;}
function vj(){rj();ee(new mj());}
function lj(){}
_=lj.prototype=new jf();_.tI=31;var wj;function oj(){var a,b;for(b=hp(vp((rj(),wj)));op(b);){a=hc(pp(b),9);if(a.i){cl(a);}}}
function pj(){return null;}
function mj(){}
_=mj.prototype=new en();_.F=oj;_.ab=pj;_.tI=32;function bk(){bk=ts;vl(),xl;}
function ak(b,a){vl(),xl;ig(b,a);pk(b,1024);return b;}
function ck(a){return ad(a.k,'value');}
function dk(b,a){kd(b.k,'value',a!==null?a:'');}
function ek(a){if(this.a===null){this.a=Bf(new Af());}dq(this.a,a);}
function fk(a){var b;kg(this,a);b=Ec(a);if(b==1){if(this.a!==null){Df(this.a,this);}}else{}}
function Fj(){}
_=Fj.prototype=new hg();_.l=ek;_.B=fk;_.tI=33;_.a=null;function hk(){hk=ts;vl(),xl;}
function gk(a){vl(),xl;ak(a,wc());nk(a,'gwt-TextBox');return a;}
function Ej(){}
_=Ej.prototype=new Fj();_.tI=34;function yk(b,a){b.a=cc('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[4],null);return b;}
function zk(a,b){Ck(a,b,a.b);}
function Bk(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function Ck(d,e,a){var b,c;if(a<0||a>d.b){throw new Fm();}if(d.b==d.a.a){c=cc('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[d.a.a*2],null);for(b=0;b<d.a.a;++b){dc(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){dc(d.a,b,d.a[b-1]);}dc(d.a,a,e);}
function Dk(a){return uk(new tk(),a);}
function Ek(c,b){var a;if(b<0||b>=c.b){throw new Fm();}--c.b;for(a=b;a<c.b;++a){dc(c.a,a,c.a[a+1]);}dc(c.a,c.b,null);}
function Fk(b,c){var a;a=Bk(b,c);if(a==(-1)){throw new ps();}Ek(b,a);}
function sk(){}
_=sk.prototype=new en();_.tI=0;_.a=null;_.b=0;function uk(b,a){b.b=a;return b;}
function wk(){return this.a<this.b.b-1;}
function xk(){if(this.a>=this.b.b){throw new ps();}return this.b.a[++this.a];}
function tk(){}
_=tk.prototype=new en();_.x=wk;_.A=xk;_.tI=0;_.a=(-1);function vl(){vl=ts;wl=pl(new nl());xl=wl!==null?ul(new ml()):wl;}
function ul(a){vl();return a;}
function ml(){}
_=ml.prototype=new en();_.tI=0;var wl,xl;function ql(){ql=ts;vl();}
function ol(a){rl(a);sl(a);tl(a);}
function pl(a){ql();ul(a);ol(a);return a;}
function rl(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function sl(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function tl(a){return function(){this.firstChild.focus();};}
function nl(){}
_=nl.prototype=new ml();_.tI=0;function bm(a){a.db(uc());return a;}
function dm(e){var a,b,c,d,f;if(e.d===null){return;}b='<object width="100%" height="100%"';b+='>';c=nr(xr(e.d.d));while(gr(c)){a=hr(c);d=hc(a.t(),1);f=hc(a.u(),1);b+='<param name="'+d+'" value="'+f+'"/>';}b+='<embed height="100%" width="100%" type="'+e.d.c+'"'+'src="'+e.d.b+'"';if(e.d.a!==null){b+=' pluginspage="'+e.d.a+'"';}b+='><\/embed>';b+='<\/object>';md(e.k,b);}
function em(b,a){fm(b,a,true);}
function fm(c,a,b){c.d=a;if(b){dm(c);}}
function yl(){}
_=yl.prototype=new rk();_.tI=35;_.d=null;function Al(a){a.d=sr(new yq());}
function Bl(c,d,a,b){Al(c);c.b=a;am(c,d);return c;}
function Dl(b,a,c){zr(b.d,a,c);}
function El(b,a){b.a=a;}
function Fl(b,a){b.b=a;}
function am(a,b){switch(b){case 0:a.c='application/x-shockwave-flash';break;default:throw Am(new zm(),'type invalid: Unrecognized type');}}
function zl(){}
_=zl.prototype=new en();_.tI=0;_.a=null;_.b=null;_.c=null;function hm(b,a){im(b,a,false);return b;}
function im(c,b,a){bm(c);c.a=a;fm(c,Bl(new zl(),0,null,c),false);mm(c,b);return c;}
function km(a){var b;b='http://www.youtube.com/v/'+a.b;if(a.a){b+='&autoplay=1';}if(a.c){b+='&rel=1';}else{b+='&rel=0';}return b;}
function lm(b,a){b.a=a;}
function mm(c,b){var a,d;c.b=b;d=km(c);a=c.d;Fl(a,d);Dl(a,'movie',d);dm(c);}
function nm(b,a){b.c=a;}
function gm(){}
_=gm.prototype=new yl();_.tI=36;_.a=false;_.b=null;_.c=false;function yn(b,a){a;return b;}
function xn(){}
_=xn.prototype=new en();_.tI=3;function xm(b,a){yn(b,a);return b;}
function wm(){}
_=wm.prototype=new xn();_.tI=4;function kn(b,a){xm(b,a);return b;}
function jn(){}
_=jn.prototype=new wm();_.tI=5;function pm(){}
_=pm.prototype=new jn();_.tI=37;function sm(){}
_=sm.prototype=new jn();_.tI=38;function Am(b,a){kn(b,a);return b;}
function zm(){}
_=zm.prototype=new jn();_.tI=39;function Dm(b,a){kn(b,a);return b;}
function Cm(){}
_=Cm.prototype=new jn();_.tI=40;function an(b,a){kn(b,a);return b;}
function Fm(){}
_=Fm.prototype=new jn();_.tI=41;function cn(){}
_=cn.prototype=new jn();_.tI=42;function on(g){var a=sn;if(!a){a=sn={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function pn(b,a){return b.substr(a,b.length-a);}
function qn(a,b){return String(a)==b;}
function rn(a){if(!ic(a,1))return false;return qn(this,a);}
function tn(){return on(this);}
_=String.prototype;_.eQ=rn;_.hC=tn;_.tI=2;var sn=null;function wn(a){return s(a);}
function Bn(b,a){kn(b,a);return b;}
function An(){}
_=An.prototype=new jn();_.tI=43;function fo(b,a){b.c=a;return b;}
function ho(a){return a.a<a.c.fb();}
function io(a){if(!ho(a)){throw new ps();}return a.c.v(a.b=a.a++);}
function jo(a){if(a.b<0){throw new Cm();}a.c.bb(a.b);a.a=a.b;a.b=(-1);}
function ko(){return ho(this);}
function lo(){return io(this);}
function eo(){}
_=eo.prototype=new en();_.x=ko;_.A=lo;_.tI=0;_.a=0;_.b=(-1);function tp(f,d,e){var a,b,c;for(b=nr(f.s());gr(b);){a=hr(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){ir(b);}return a;}}return null;}
function up(b){var a;a=b.s();return xo(new wo(),b,a);}
function vp(b){var a;a=xr(b);return fp(new ep(),b,a);}
function wp(a){return tp(this,a,false)!==null;}
function xp(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ic(d,14)){return false;}f=hc(d,14);c=up(this);e=f.z();if(!Dp(c,e)){return false;}for(a=zo(c);ap(a);){b=bp(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function yp(b){var a;a=tp(this,b,false);return a===null?null:a.u();}
function zp(){var a,b,c;b=0;for(c=nr(this.s());gr(c);){a=hr(c);b+=a.hC();}return b;}
function Ap(){return up(this);}
function vo(){}
_=vo.prototype=new en();_.o=wp;_.eQ=xp;_.w=yp;_.hC=zp;_.z=Ap;_.tI=44;function Dp(e,b){var a,c,d;if(b===e){return true;}if(!ic(b,15)){return false;}c=hc(b,15);if(c.fb()!=e.fb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.p(d)){return false;}}return true;}
function Ep(a){return Dp(this,a);}
function Fp(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function Bp(){}
_=Bp.prototype=new Dn();_.eQ=Ep;_.hC=Fp;_.tI=45;function xo(b,a,c){b.a=a;b.b=c;return b;}
function zo(b){var a;a=nr(b.b);return Eo(new Do(),b,a);}
function Ao(a){return this.a.o(a);}
function Bo(){return zo(this);}
function Co(){return this.b.a.c;}
function wo(){}
_=wo.prototype=new Bp();_.p=Ao;_.y=Bo;_.fb=Co;_.tI=46;function Eo(b,a,c){b.a=c;return b;}
function ap(a){return a.a.x();}
function bp(b){var a;a=b.a.A();return a.t();}
function cp(){return ap(this);}
function dp(){return bp(this);}
function Do(){}
_=Do.prototype=new en();_.x=cp;_.A=dp;_.tI=0;function fp(b,a,c){b.a=a;b.b=c;return b;}
function hp(b){var a;a=nr(b.b);return mp(new lp(),b,a);}
function ip(a){return wr(this.a,a);}
function jp(){return hp(this);}
function kp(){return this.b.a.c;}
function ep(){}
_=ep.prototype=new Dn();_.p=ip;_.y=jp;_.fb=kp;_.tI=0;function mp(b,a,c){b.a=c;return b;}
function op(a){return a.a.x();}
function pp(a){var b;b=a.a.A().u();return b;}
function qp(){return op(this);}
function rp(){return pp(this);}
function lp(){}
_=lp.prototype=new en();_.x=qp;_.A=rp;_.tI=0;function ur(){ur=ts;Br=bs();}
function rr(a){{tr(a);}}
function sr(a){ur();rr(a);return a;}
function tr(a){a.a=z();a.d=A();a.b=mc(Br,v);a.c=0;}
function vr(b,a){if(ic(a,1)){return fs(b.d,hc(a,1))!==Br;}else if(a===null){return b.b!==Br;}else{return es(b.a,a,a.hC())!==Br;}}
function wr(a,b){if(a.b!==Br&&ds(a.b,b)){return true;}else if(as(a.d,b)){return true;}else if(Er(a.a,b)){return true;}return false;}
function xr(a){return lr(new cr(),a);}
function yr(c,a){var b;if(ic(a,1)){b=fs(c.d,hc(a,1));}else if(a===null){b=c.b;}else{b=es(c.a,a,a.hC());}return b===Br?null:b;}
function zr(c,a,d){var b;if(a!==null){b=is(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=hs(c.a,a,d,on(a));}if(b===Br){++c.c;return null;}else{return b;}}
function Ar(c,a){var b;if(ic(a,1)){b=ks(c.d,hc(a,1));}else if(a===null){b=c.b;c.b=mc(Br,v);}else{b=js(c.a,a,a.hC());}if(b===Br){return null;}else{--c.c;return b;}}
function Cr(e,c){ur();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function Dr(d,a){ur();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=Cq(c.substring(1),e);a.n(b);}}}
function Er(f,h){ur();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(ds(h,d)){return true;}}}}return false;}
function Fr(a){return vr(this,a);}
function as(c,d){ur();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(ds(d,a)){return true;}}}return false;}
function bs(){ur();}
function cs(){return xr(this);}
function ds(a,b){ur();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function gs(a){return yr(this,a);}
function es(f,h,e){ur();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(ds(h,d)){return c.u();}}}}
function fs(b,a){ur();return b[':'+a];}
function hs(f,h,j,e){ur();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(ds(h,d)){var i=c.u();c.eb(j);return i;}}}else{a=f[e]=[];}var c=Cq(h,j);a.push(c);}
function is(c,a,d){ur();a=':'+a;var b=c[a];c[a]=d;return b;}
function js(f,h,e){ur();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(ds(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function ks(c,a){ur();a=':'+a;var b=c[a];delete c[a];return b;}
function yq(){}
_=yq.prototype=new vo();_.o=Fr;_.s=cs;_.w=gs;_.tI=47;_.a=null;_.b=null;_.c=0;_.d=null;var Br;function Aq(b,a,c){b.a=a;b.b=c;return b;}
function Cq(a,b){return Aq(new zq(),a,b);}
function Dq(b){var a;if(ic(b,16)){a=hc(b,16);if(ds(this.a,a.t())&&ds(this.b,a.u())){return true;}}return false;}
function Eq(){return this.a;}
function Fq(){return this.b;}
function ar(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function br(a){var b;b=this.b;this.b=a;return b;}
function zq(){}
_=zq.prototype=new en();_.eQ=Dq;_.t=Eq;_.u=Fq;_.hC=ar;_.eb=br;_.tI=48;_.a=null;_.b=null;function lr(b,a){b.a=a;return b;}
function nr(a){return er(new dr(),a.a);}
function or(c){var a,b,d;if(ic(c,16)){a=hc(c,16);b=a.t();if(vr(this.a,b)){d=yr(this.a,b);return ds(a.u(),d);}}return false;}
function pr(){return nr(this);}
function qr(){return this.a.c;}
function cr(){}
_=cr.prototype=new Bp();_.p=or;_.y=pr;_.fb=qr;_.tI=49;function er(c,b){var a;c.c=b;a=cq(new aq());if(c.c.b!==(ur(),Br)){dq(a,Aq(new zq(),null,c.c.b));}Dr(c.c.d,a);Cr(c.c.a,a);c.a=oo(a);return c;}
function gr(a){return ho(a.a);}
function hr(a){return a.b=hc(io(a.a),16);}
function ir(a){if(a.b===null){throw Dm(new Cm(),'Must call next() before remove().');}else{jo(a.a);Ar(a.c,a.b.t());a.b=null;}}
function jr(){return gr(this);}
function kr(){return hr(this);}
function dr(){}
_=dr.prototype=new en();_.x=jr;_.A=kr;_.tI=0;_.a=null;_.b=null;function ps(){}
_=ps.prototype=new jn();_.tI=50;function om(){Ab(yb(new E()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{om();}catch(a){b(d);}else{om();}}
var lc=[{},{},{1:1},{4:1},{4:1},{4:1},{4:1},{2:1},{7:1},{7:1},{7:1},{7:1},{7:1},{7:1},{2:1,5:1},{2:1},{6:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{3:1,8:1,10:1,11:1,12:1},{13:1},{13:1},{13:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,9:1,10:1,11:1,12:1},{6:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{4:1},{4:1},{4:1},{4:1},{4:1},{4:1},{4:1},{14:1},{15:1},{15:1},{14:1},{16:1},{15:1},{4:1}];if (com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo) {  var __gwt_initHandlers = com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo.__gwt_initHandlers;  com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo.onScriptLoad(gwtOnLoad);}})();