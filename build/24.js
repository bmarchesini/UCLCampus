webpackJsonp([24],{700:function(n,l,u){"use strict";function t(n){return a._26(0,[(n()(),a._3(0,0,null,null,10,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==n.component.closeModal(n.context.$implicit)&&t}return t},k.b,k.a)),a._2(1,1097728,null,3,j.a,[P.a,D.a,a.k,a.D,[2,M.a]],null,null),a._22(335544320,1,{contentLabel:0}),a._22(603979776,2,{_buttons:1}),a._22(603979776,3,{_icons:1}),a._2(5,16384,null,0,y.a,[],null,null),(n()(),a._24(-1,2,["\n      "])),(n()(),a._3(7,0,null,2,2,"button",[["full",""],["ion-button",""]],null,null,null,O.b,O.a)),a._2(8,1097728,[[2,4]],0,w.a,[[8,""],D.a,a.k,a.D],{full:[0,"full"]},null),(n()(),a._24(9,0,[" "," "])),(n()(),a._24(-1,2,["\n    "]))],function(n,l){n(l,8,0,"")},function(n,l){n(l,9,0,l.context.$implicit.name)})}function e(n){return a._26(0,[(n()(),a._24(-1,null,["\n"])),(n()(),a._24(-1,null,["\n"])),(n()(),a._3(2,0,null,null,2,"ion-header",[],null,null,null,null,null)),a._2(3,16384,null,0,x.a,[D.a,a.k,a.D,[2,C.a]],null,null),(n()(),a._24(-1,null,["\n"])),(n()(),a._24(-1,null,["\n\n"])),(n()(),a._24(-1,null,["\n"])),(n()(),a._3(7,0,null,null,13,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,I.b,I.a)),a._2(8,4374528,null,0,F.a,[D.a,J.a,L.a,a.k,a.D,S.a,q.a,a.x,[2,C.a],[2,R.a]],null,null),(n()(),a._24(-1,1,["\n\n"])),(n()(),a._3(10,0,null,1,2,"div",[["text-center",""]],null,null,null,null,null)),(n()(),a._24(11,null,[" "," : "])),a._17(131072,i.j,[i.k,a.g]),(n()(),a._24(-1,1,["\n  "])),(n()(),a._3(14,0,null,1,5,"ion-list",[],null,null,null,null,null)),a._2(15,16384,null,0,$.a,[D.a,a.k,a.D,J.a,A.l,L.a],null,null),(n()(),a._24(-1,null,["\n    "])),(n()(),a.Y(16777216,null,null,1,null,t)),a._2(18,802816,null,0,E.i,[a.M,a.J,a.s],{ngForOf:[0,"ngForOf"]},null),(n()(),a._24(-1,null,["\n  "])),(n()(),a._24(-1,1,["\n\n"])),(n()(),a._24(-1,null,["\n"]))],function(n,l){n(l,18,0,l.component.projects)},function(n,l){n(l,7,0,a._15(l,8).statusbarPadding,a._15(l,8)._hasRefresher);n(l,11,0,a._25(l,11,0,a._15(l,12).transform("MODAL.PROJECT")))})}Object.defineProperty(l,"__esModule",{value:!0});var a=u(1),i=(u(0),u(56),u(55)),o=u(92),s=u(217),_=function(){function n(n,l,u,t,e){this.navCtrl=n,this.storage=l,this.navParams=u,this.viewCtrl=t,this.studiesService=e,this.sessionId=this.navParams.get("sessionId")}return n.prototype.closeModal=function(n){var l=this;this.studiesService.setProject(this.sessionId,n.id).then(function(u){l.storage.set("adeProject",n),l.viewCtrl.dismiss(n)})},n.prototype.getProjects=function(n){var l=this;this.studiesService.getProjects(n).then(function(n){l.projects=n})},n.prototype.ionViewDidLoad=function(){this.getProjects(this.sessionId)},n}(),r=function(){return function(){}}(),c=u(379),d=u(380),f=u(381),h=u(382),p=u(383),b=u(384),g=u(385),v=u(386),m=u(387),k=u(196),j=u(25),P=u(22),D=u(3),M=u(58),y=u(87),O=u(64),w=u(31),x=u(195),C=u(7),I=u(388),F=u(33),J=u(6),L=u(13),S=u(12),q=u(38),R=u(32),$=u(65),A=u(10),E=u(21),N=u(16),T=a._1({encapsulation:2,styles:[],data:{}}),V=a.Z("page-modal-project",_,function(n){return a._26(0,[(n()(),a._3(0,0,null,null,1,"page-modal-project",[],null,null,null,e,T)),a._2(1,49152,null,0,_,[R.a,o.b,N.a,C.a,s.a],null,null)],null,null)},{},{},[]),W=u(29),Y=u(194),Z=u(57);u.d(l,"ModalProjectPageModuleNgFactory",function(){return z});var z=a._0(r,[],function(n){return a._11([a._12(512,a.i,a.W,[[8,[c.a,d.a,f.a,h.a,p.a,b.a,g.a,v.a,m.a,V]],[3,a.i],a.v]),a._12(4608,E.l,E.k,[a.u,[2,E.t]]),a._12(4608,W.s,W.s,[]),a._12(4608,W.d,W.d,[]),a._12(4608,i.g,i.f,[]),a._12(4608,i.c,i.e,[]),a._12(4608,i.i,i.d,[]),a._12(4608,i.b,i.a,[]),a._12(4608,i.k,i.k,[i.n,i.g,i.c,i.i,i.b,i.l,i.m]),a._12(512,E.b,E.b,[]),a._12(512,W.q,W.q,[]),a._12(512,W.g,W.g,[]),a._12(512,W.o,W.o,[]),a._12(512,Y.a,Y.a,[]),a._12(512,Y.b,Y.b,[]),a._12(512,i.h,i.h,[]),a._12(512,r,r,[]),a._12(256,Z.a,_,[]),a._12(256,i.m,void 0,[]),a._12(256,i.l,void 0,[])])})}});