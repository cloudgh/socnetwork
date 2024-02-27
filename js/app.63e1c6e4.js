(function(){"use strict";var s={5028:function(s,o,e){var t=e(9242),n=e(3396);const a={class:"app"};function l(s,o,e,t,l,i){const r=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(r)])}var i={name:"App"},r=e(89);const d=(0,r.Z)(i,[["render",l]]);var c=d,u=e(2483),p=e(7139);const m=s=>((0,n.dD)("data-v-3cca8414"),s=s(),(0,n.Cn)(),s),h={key:0,class:"loading-overlay"},v={key:0,class:"error-message"},_=m((()=>(0,n._)("p",null,"Ошибка загрузки данных. Пожалуйста, проверьте соединение и попробуйте снова.",-1))),k=[_],g=m((()=>(0,n._)("div",{class:"spinner"},[(0,n._)("div"),(0,n._)("div"),(0,n._)("div"),(0,n._)("div"),(0,n._)("div"),(0,n._)("div")],-1))),b=m((()=>(0,n._)("h2",null,"Loading...",-1))),f={class:"book"},w={class:"post-cont post-cont1"},D=m((()=>(0,n._)("h1",null,"Посты",-1))),y={class:"post-title"},M={class:"btn"},C=["onClick"],I=["onClick"],U=m((()=>(0,n._)("div",{class:"sq"},null,-1))),z={class:"post-cont post-cont2"},j=m((()=>(0,n._)("h1",{class:"post2"},"Посты",-1))),O={class:"post-title"},$={class:"btn"},x=["onClick"],L=["onClick"];function P(s,o,e,t,a,l){const i=(0,n.up)("lamp"),r=(0,n.up)("Menu"),d=(0,n.up)("modal");return(0,n.wg)(),(0,n.iD)("div",{class:(0,p.C_)(["app1",{"dark-mode":l.isDarkMode,modal_open:a.isModalOpen}])},[a.isLoading?((0,n.wg)(),(0,n.iD)("div",h,[a.errorLoadingData?((0,n.wg)(),(0,n.iD)("div",v,k)):(0,n.kq)("",!0),g,b])):(0,n.kq)("",!0),(0,n.Wm)(i),(0,n.Wm)(r),(0,n._)("div",f,[(0,n._)("div",w,[D,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.firstColumn,((s,o)=>((0,n.wg)(),(0,n.iD)("div",{key:s.id,class:"post"},[(0,n._)("h3",y,(0,p.zw)(s.title),1),(0,n._)("p",null,(0,p.zw)(s.body),1),(0,n._)("div",M,[(0,n._)("button",{onClick:o=>l.openModal(s.id)},"Показать комментарии к посту",8,C),(0,n._)("button",{onClick:o=>l.userpage(s.userId)},"Перейти к пользователю",8,I)])])))),128))]),U,(0,n._)("div",z,[j,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.secondColumn,((s,o)=>((0,n.wg)(),(0,n.iD)("div",{key:s.id,class:"post post2"},[(0,n._)("h3",O,(0,p.zw)(s.title),1),(0,n._)("p",null,(0,p.zw)(s.body),1),(0,n._)("div",$,[(0,n._)("button",{onClick:o=>l.openModal(s.id)},"Показать комментарии к посту",8,x),(0,n._)("button",{onClick:o=>l.userpage(s.userId)},"Перейти к пользователю",8,L)])])))),128))])]),a.isModalOpen?((0,n.wg)(),(0,n.j4)(d,{key:1,onClose:l.closeModal,"post-id":a.currentPostId},null,8,["onClose","post-id"])):(0,n.kq)("",!0)],2)}e(7658);const q={key:0,class:"modal",id:"modal"},A={class:"modal-content"};function H(s,o,e,t,a,l){return a.isVisible?((0,n.wg)(),(0,n.iD)("div",q,[(0,n._)("div",A,[(0,n._)("span",{class:"close",onClick:o[0]||(o[0]=(...s)=>l.closeModal&&l.closeModal(...s))},"×"),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.comments,((s,o)=>((0,n.wg)(),(0,n.iD)("div",{key:o,class:"comment"},[(0,n._)("h4",null,(0,p.zw)(s.name),1),(0,n._)("p",null,(0,p.zw)(s.body),1)])))),128))])])):(0,n.kq)("",!0)}var W={props:["postId"],data(){return{isVisible:!1,comments:[]}},methods:{loadComments(){const s=this.postId;console.log("Loading comments for postId:",s),fetch(`https://jsonplaceholder.typicode.com/posts/${s}/comments`).then((s=>s.json())).then((o=>{console.log("Comments loaded for postId:",s,o),this.comments=Array.from(o),this.isVisible=!0}))},closeModal(){this.$emit("close")}},mounted(){const s=this.postId;console.log("Loading comments for postId:",s),fetch(`https://jsonplaceholder.typicode.com/posts/${s}/comments`).then((s=>s.json())).then((o=>{console.log("Comments loaded for postId:",s,o),this.comments=Array.from(o),this.isVisible=!0}))}};const K=(0,r.Z)(W,[["render",H],["__scopeId","data-v-65d31fd8"]]);var V=K;const Y=s=>((0,n.dD)("data-v-40789881"),s=s(),(0,n.Cn)(),s),Z={class:"nav"},E=Y((()=>(0,n._)("span",{class:"nav-icon"},"✉",-1))),T=Y((()=>(0,n._)("span",{class:"nav-icon"},"👥",-1)));function F(s,o,e,t,a,l){return(0,n.wg)(),(0,n.iD)("div",{class:(0,p.C_)(["cmp",{dark_mode:l.isDarkMode}])},[(0,n._)("nav",Z,[(0,n._)("button",{class:"nav-item1",onClick:o[0]||(o[0]=s=>l.goTo("/"))},[E,(0,n.Uk)(" Home ")]),(0,n._)("button",{class:"nav-item2",onClick:o[1]||(o[1]=s=>l.goTo("/Users"))},[T,(0,n.Uk)(" Users ")])])],2)}var G={name:"Menu",methods:{goTo(s){this.$router.push(s)}},computed:{isDarkMode(){return this.$store.state.isDarkMode}}};const B=(0,r.Z)(G,[["render",F],["__scopeId","data-v-40789881"]]);var J=B,N={components:{modal:V,Menu:J},data(){return{posts:[],isModalOpen:!1,currentPostId:null,isLoading:!0,errorLoadingData:!1}},mounted(){try{fetch("https://jsonplaceholder.typicode.com/posts").then((s=>s.json())).then((s=>{this.posts=s,this.isLoading=!1})).catch((s=>{console.error("Ошибка загрузки данных:",s),this.errorLoadingData=!0}))}catch(s){console.error("Ошибка при выполнении запроса:",s),this.errorLoadingData=!0}},methods:{openModal(s){console.log("Opening modal for postId:",s),this.currentPostId=s,this.isModalOpen=!0},closeModal(){this.isModalOpen=!1,console.log("Модальное окно закрыто"),console.log("сшщыовупшщ")},userpage(s){this.$router.push({name:"user",params:{userId:s}})}},computed:{isDarkMode(){return this.$store.state.isDarkMode},firstColumn(){return this.posts.slice(0,Math.ceil(this.posts.length/2))},secondColumn(){return this.posts.slice(Math.ceil(this.posts.length/2))}}};const Q=(0,r.Z)(N,[["render",P],["__scopeId","data-v-3cca8414"]]);var R=Q;const S=s=>((0,n.dD)("data-v-601a8bb0"),s=s(),(0,n.Cn)(),s),X=S((()=>(0,n._)("h1",null,"Страница пользователя",-1))),ss={class:"user"},os={class:"info"},es=S((()=>(0,n._)("br",null,null,-1))),ts={class:"info"},ns={key:0},as={class:"info"},ls=S((()=>(0,n._)("br",null,null,-1))),is=S((()=>(0,n._)("br",null,null,-1))),rs={class:"infoid"},ds=S((()=>(0,n._)("br",null,null,-1))),cs={class:"user-btn"},us=S((()=>(0,n._)("div",{class:"circle"},null,-1))),ps=(0,n.uE)('<div class="grid" data-v-601a8bb0><div class="box" data-v-601a8bb0></div><div class="box" data-v-601a8bb0></div><div class="box" data-v-601a8bb0></div><div class="box" data-v-601a8bb0></div><div class="box" data-v-601a8bb0></div><div class="box" data-v-601a8bb0></div><div class="box" data-v-601a8bb0></div><div class="box" data-v-601a8bb0></div><div class="box" data-v-601a8bb0></div></div>',1),ms={class:"list"},hs={key:0,class:"post-info"},vs={class:"post-title"},_s={class:"posts"},ks={class:"title"},gs=["onClick"],bs=S((()=>(0,n._)("br",null,null,-1))),fs={key:1,class:"albums"},ws=["onClick"];function Ds(s,o,e,a,l,i){const r=(0,n.up)("lamp"),d=(0,n.up)("Menu");return(0,n.wg)(),(0,n.iD)("div",{class:(0,p.C_)(["app2",{"dark-mode":i.isDarkMode}])},[(0,n.Wm)(r),(0,n.Wm)(d),(0,n._)("div",{class:(0,p.C_)({"user-info":l.user_info})},[X,(0,n._)("div",ss,[(0,n._)("h3",os,[(0,n.Uk)((0,p.zw)(l.user.name)+" -",1),es,(0,n.Uk)("- "+(0,p.zw)(l.user.username),1)]),(0,n._)("p",ts,(0,p.zw)(l.user.email),1),l.user.address?((0,n.wg)(),(0,n.iD)("div",ns,[(0,n._)("p",as,[(0,n.Uk)("Address: "+(0,p.zw)(l.user.address.city)+" ",1),ls,(0,n.Uk)(" "+(0,p.zw)(l.user.address.street)+" ",1),is,(0,n.Uk)(" "+(0,p.zw)(l.user.address.suite),1)])])):(0,n.kq)("",!0),(0,n._)("p",rs,[(0,n.Uk)((0,p.zw)(s.$route.params.userId),1),ds,(0,n.Uk)("UserId")]),(0,n._)("div",cs,[us,(0,n.wy)((0,n._)("input",{type:"checkbox",class:"curtain","onUpdate:modelValue":o[0]||(o[0]=s=>l.user_info=s)},null,512),[[t.e8,l.user_info]]),ps])]),(0,n._)("div",ms,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"radio",value:"Posts","onUpdate:modelValue":o[1]||(o[1]=s=>l.categories=s)},null,512),[[t.G2,l.categories]]),(0,n.Uk)(" Posts "),(0,n.wy)((0,n._)("input",{type:"radio",value:"Albums","onUpdate:modelValue":o[2]||(o[2]=s=>l.categories=s)},null,512),[[t.G2,l.categories]]),(0,n.Uk)(" Albums ")]),(0,n._)("span",null,"Выбрано: "+(0,p.zw)(l.categories),1)]),"Posts"===l.categories?((0,n.wg)(),(0,n.iD)("div",hs,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.posts,(s=>((0,n.wg)(),(0,n.iD)("div",{key:s.id,class:"post"},[(0,n._)("h3",vs,(0,p.zw)(s.title),1),(0,n._)("div",_s,[(0,n._)("p",ks,(0,p.zw)(s.body),1),(0,n._)("details",null,[(0,n._)("summary",{onClick:o=>i.loadComments(s.id)},"Показать комментарии",8,gs),(0,n._)("span",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.comments,((s,o)=>((0,n.wg)(),(0,n.iD)("ul",{key:o,class:"comment"},[(0,n._)("li",null,[(0,n._)("h4",null,(0,p.zw)(s.name),1),bs,(0,n._)("p",null,(0,p.zw)(s.body),1)])])))),128))])])])])))),128))])):(0,n.kq)("",!0),"Albums"===l.categories?((0,n.wg)(),(0,n.iD)("div",fs,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.albums,((s,o)=>((0,n.wg)(),(0,n.iD)("ul",{key:o,class:"album"},[(0,n._)("li",null,[(0,n._)("h4",{onClick:o=>i.photospage(s.userId)},(0,p.zw)(s.title),9,ws)])])))),128))])):(0,n.kq)("",!0)],2)],2)}var ys={components:{Menu:J},data(){return{user:{},categories:"",posts:[],albums:[],user_info:!1}},mounted(){const s=this.$route.params.userId;fetch(`https://jsonplaceholder.typicode.com/users/${s}`).then((s=>s.json())).then((s=>this.user=s)),fetch(`https://jsonplaceholder.typicode.com/posts?userId=${s}`).then((s=>s.json())).then((s=>{this.posts=s.map((s=>({...s,comments:[]})))})),fetch(`https://jsonplaceholder.typicode.com/users/${s}/albums`).then((s=>s.json())).then((s=>this.albums=s))},methods:{loadComments(s){const o=this.posts.findIndex((o=>o.id===s));-1!==o&&0===this.posts[o].comments.length&&fetch(`https://jsonplaceholder.typicode.com/posts/${s}/comments`).then((s=>s.json())).then((s=>{this.posts[o].comments=s}))},photospage(s){this.$router.push({name:"photos",params:{albumId:s}})}},computed:{isDarkMode(){return this.$store.state.isDarkMode}}};const Ms=(0,r.Z)(ys,[["render",Ds],["__scopeId","data-v-601a8bb0"]]);var Cs=Ms;const Is=s=>((0,n.dD)("data-v-670a3166"),s=s(),(0,n.Cn)(),s),Us=Is((()=>(0,n._)("h1",null,"Photos",-1))),zs={class:"photo-gallery"},js={key:0,class:"error-message"},Os=["onClick"],$s=["src","alt"],xs={class:"photo-placeholder"},Ls={key:0,class:"modal-overlay"},Ps={class:"modal-content"},qs=["src"];function As(s,o,e,a,l,i){const r=(0,n.up)("lamp"),d=(0,n.up)("Menu");return(0,n.wg)(),(0,n.iD)("div",{class:(0,p.C_)(["app3",{"dark-mode":i.isDarkMode}])},[(0,n.Wm)(r),(0,n.Wm)(d),Us,(0,n._)("div",zs,[l.loadingError?((0,n.wg)(),(0,n.iD)("div",js," Произошла ошибка при загрузке данных. Пожалуйста, проверьте ваше соединение и попробуйте позже. ")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.photos,((s,o)=>((0,n.wg)(),(0,n.iD)("div",{key:o,class:"photo-item",onClick:o=>s.isLoaded&&i.bigPhoto(s.id,l.albumId)},[(0,n.wy)((0,n._)("img",{src:s.thumbnailUrl,alt:s.title},null,8,$s),[[t.F8,s.isLoaded]]),(0,n.wy)((0,n._)("div",xs,null,512),[[t.F8,!s.isLoaded]])],8,Os)))),128))]),l.isModalOpen?((0,n.wg)(),(0,n.iD)("div",Ls,[(0,n._)("div",Ps,[(0,n._)("span",{class:"close-btn",onClick:o[0]||(o[0]=(...s)=>i.closeModal&&i.closeModal(...s))},"×"),(0,n._)("img",{src:l.modalImageUrl,alt:"Large Photo"},null,8,qs)])])):(0,n.kq)("",!0)],2)}var Hs={components:{Menu:J},data(){return{photos:[],albumId:null,isModalOpen:!1,modalImageUrl:"",loadingError:!1}},mounted(){this.albumId=this.$route.params.albumId,this.photos=Array(10).fill({}).map((()=>({isLoaded:!1}))),fetch(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`).then((s=>s.json())).then((s=>{s.forEach(((s,o)=>{const e=new Image;e.onload=()=>{this.photos[o]={...s,isLoaded:!0},this.photos=[...this.photos]},e.src=s.thumbnailUrl})),s.length<this.photos.length&&(this.photos.length=s.length)})).catch((()=>{this.loadingError=!0}))},computed:{isDarkMode(){return this.$store.state.isDarkMode}},methods:{bigPhoto(s){const o=this.photos.find((o=>o.id===s));o&&(this.modalImageUrl=o.url,this.isModalOpen=!0)},closeModal(){this.isModalOpen=!1,this.modalImageUrl=""}}};const Ws=(0,r.Z)(Hs,[["render",As],["__scopeId","data-v-670a3166"]]);var Ks=Ws;const Vs=s=>((0,n.dD)("data-v-77fc4748"),s=s(),(0,n.Cn)(),s),Ys=Vs((()=>(0,n._)("h1",null,"Users",-1))),Zs={class:"user-container"},Es=["onClick"],Ts={class:"user-card"},Fs={class:"info"},Gs=Vs((()=>(0,n._)("br",null,null,-1))),Bs={class:"info"},Js={key:0},Ns={class:"info"},Qs=Vs((()=>(0,n._)("br",null,null,-1))),Rs=Vs((()=>(0,n._)("br",null,null,-1))),Ss={class:"infoid"},Xs=Vs((()=>(0,n._)("br",null,null,-1)));function so(s,o,e,t,a,l){const i=(0,n.up)("lamp"),r=(0,n.up)("Menu");return(0,n.wg)(),(0,n.iD)("div",{class:(0,p.C_)(["app4",{"dark-mode":l.isDarkMode}])},[(0,n.Wm)(i),(0,n.Wm)(r),Ys,(0,n._)("div",Zs,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.users,((s,o)=>((0,n.wg)(),(0,n.iD)("div",{class:"user",key:o,onClick:s=>l.userPage(o)},[(0,n._)("div",Ts,[(0,n._)("h3",Fs,[(0,n.Uk)((0,p.zw)(s.name)+" -",1),Gs,(0,n.Uk)("- "+(0,p.zw)(s.username),1)]),(0,n._)("p",Bs,(0,p.zw)(s.email),1),s.address?((0,n.wg)(),(0,n.iD)("div",Js,[(0,n._)("p",Ns,[(0,n.Uk)("Address: "+(0,p.zw)(s.address.city)+" ",1),Qs,(0,n.Uk)(" "+(0,p.zw)(s.address.street)+" ",1),Rs,(0,n.Uk)(" "+(0,p.zw)(s.address.suite),1)])])):(0,n.kq)("",!0),(0,n._)("p",Ss,[(0,n.Uk)((0,p.zw)(s.id),1),Xs,(0,n.Uk)("UserId")])])],8,Es)))),128))])],2)}var oo={components:{Menu:J},data(){return{users:{}}},mounted(){fetch("https://jsonplaceholder.typicode.com/users").then((s=>s.json())).then((s=>this.users=s))},computed:{isDarkMode(){return this.$store.state.isDarkMode}},methods:{userPage(s){s+=1,this.$router.push({name:"user",params:{userId:s}})}}};const eo=(0,r.Z)(oo,[["render",so],["__scopeId","data-v-77fc4748"]]);var to=eo;const no=[{path:"/",component:R},{path:"/user/:userId",name:"user",component:Cs},{path:"/photos/:albumId",name:"photos",component:Ks},{path:"/Users",component:to}],ao=(0,u.p7)({routes:no,history:(0,u.PO)("/socnetwork/")});var lo=ao;const io=(0,n._)("div",{class:"lamp"},[(0,n._)("div",{class:"light"})],-1);function ro(s,o,e,a,l,i){return(0,n.wg)(),(0,n.iD)("div",{class:(0,p.C_)(["decor",{dark_mode:i.isDarkMode}])},[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"switch","onUpdate:modelValue":o[0]||(o[0]=s=>i.isDarkMode=s)},null,512),[[t.e8,i.isDarkMode]]),io],2)}var co={name:"Lamp",computed:{isDarkMode:{get(){return this.$store.state.isDarkMode},set(s){this.$store.commit("updateDarkMode",s)}}}};const uo=(0,r.Z)(co,[["render",ro]]);var po=uo,mo=[po],ho=e(65),vo=(0,ho.MT)({state:{isDarkMode:!1},mutations:{updateDarkMode(s,o){s.isDarkMode=o,console.log("status ",s.isDarkMode)}}});const _o=(0,t.ri)(c);mo.forEach((s=>{_o.component(s.name,s)})),_o.use(lo).use(vo).mount("#app")}},o={};function e(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return s[t].call(a.exports,a,a.exports,e),a.exports}e.m=s,function(){var s=[];e.O=function(o,t,n,a){if(!t){var l=1/0;for(c=0;c<s.length;c++){t=s[c][0],n=s[c][1],a=s[c][2];for(var i=!0,r=0;r<t.length;r++)(!1&a||l>=a)&&Object.keys(e.O).every((function(s){return e.O[s](t[r])}))?t.splice(r--,1):(i=!1,a<l&&(l=a));if(i){s.splice(c--,1);var d=n();void 0!==d&&(o=d)}}return o}a=a||0;for(var c=s.length;c>0&&s[c-1][2]>a;c--)s[c]=s[c-1];s[c]=[t,n,a]}}(),function(){e.n=function(s){var o=s&&s.__esModule?function(){return s["default"]}:function(){return s};return e.d(o,{a:o}),o}}(),function(){e.d=function(s,o){for(var t in o)e.o(o,t)&&!e.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:o[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){e.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)}}(),function(){var s={143:0};e.O.j=function(o){return 0===s[o]};var o=function(o,t){var n,a,l=t[0],i=t[1],r=t[2],d=0;if(l.some((function(o){return 0!==s[o]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(r)var c=r(e)}for(o&&o(t);d<l.length;d++)a=l[d],e.o(s,a)&&s[a]&&s[a][0](),s[a]=0;return e.O(c)},t=self["webpackChunku"]=self["webpackChunku"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(5028)}));t=e.O(t)})();
//# sourceMappingURL=app.63e1c6e4.js.map