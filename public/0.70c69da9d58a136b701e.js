(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Yh3v:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=function(){},i=u("pMnS"),s=u("NcP4"),o=u("Ip0R"),t=u("gIcY"),r=u("bujt"),c=u("UodH"),d=u("dWZg"),b=u("lLAP"),p=u("wFw1"),g=(u("ZF+8"),function(){function l(l,n,u,e,a){this.personajeService=l,this.usuarioService=n,this.alertService=u,this.seleccionService=e,this.snackBar=a,this.user={},this.userLogged=null}return l.prototype.ngOnInit=function(){this.getPersonajes()},l.prototype.jugar=function(){var l=this;this.usuarioService.post(this.user).subscribe(function(n){var u=n.json();l.alertService.success("Ya podes jugar "+u.usuario.nombre),l.userLogged=u.usuario,l.getUserSelection()},function(n){l.alertService.error(n.json().err.message)})},l.prototype.selected=function(l){var n=this;if(this.userLogged){var u=!1;this.seleccion.forEach(function(n){n===l._id&&(u=!0)}),this.seleccionService.post({usuario:this.userLogged._id,seleccion:l._id,desseleccionado:u}).subscribe(function(e){n.alertService.success(u?"Sacaste a: "+l.nombre+" de tu selecci\xf3n":"Elecci\xf3n: "+l.nombre+" - OK"),n.getUserSelection()},function(l){n.alertService.error(l.json().err)})}else this.alertService.error("Tenes que identificarte para participar")},l.prototype.getPersonajes=function(){var l=this;this.personajeService.get().subscribe(function(n){l.personajes=n.json().personajes},function(l){console.error(l)})},l.prototype.getUserSelection=function(){var l=this;this.seleccionService.get(this.userLogged._id).subscribe(function(n){for(var u in l.seleccion=n.json().selecciones,l.personajes)l.personajes[u].seleccionado=!!l.seleccion.includes(l.personajes[u]._id);5===l.seleccion.length&&l.snackBar.open("Gracias por participar "+l.userLogged.nombre+". Podes ver el resultado del prode en Ranking.",null,{duration:3e3})},function(n){l.alertService.error(n.json().err.message)})},l}()),f=u("4i4C"),m=u("IF0h"),v=u("Cmua"),h=u("JrVy"),V=u("vARd"),U=e.Ta({encapsulation:0,styles:[[".is-selected[_ngcontent-%COMP%]{border:1px solid green;box-shadow:9px 9px 11px -6px rgba(102,102,102,1)}.pointer[_ngcontent-%COMP%]{cursor:pointer}.href[_ngcontent-%COMP%]{color:#9c27b0}"]],data:{}});function C(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.nb(-1,null,["Requerido"]))],null,null)}function k(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e.Ma(16777216,null,null,1,null,C)),e.Ua(2,16384,null,0,o.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.fb(n.parent,18).errors.required)},null)}function y(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.nb(-1,null,["Requerido"]))],null,null)}function S(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.nb(-1,null,["Email invalido"]))],null,null)}function j(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,4,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e.Ma(16777216,null,null,1,null,y)),e.Ua(2,16384,null,0,o.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ma(16777216,null,null,1,null,S)),e.Ua(4,16384,null,0,o.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.fb(n.parent,33).errors.required),l(n,4,0,e.fb(n.parent,33).errors.email)},null)}function I(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,41,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Va(1,0,null,null,40,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.Va(2,0,null,null,39,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.Va(3,0,null,null,38,"form",[["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var a=!0,i=l.component;return"submit"===n&&(a=!1!==e.fb(l,5).onSubmit(u)&&a),"reset"===n&&(a=!1!==e.fb(l,5).onReset()&&a),"ngSubmit"===n&&(a=!1!==(e.fb(l,5).form.valid&&i.jugar())&&a),a},null,null)),e.Ua(4,16384,null,0,t.q,[],null,null),e.Ua(5,4210688,[["f",4]],0,t.l,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.kb(2048,null,t.c,null,[t.l]),e.Ua(7,16384,null,0,t.k,[[4,t.c]],null,null),(l()(),e.Va(8,0,null,null,33,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Va(9,0,null,null,13,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),e.Va(10,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Va(11,0,null,null,9,"input",[["class","form-control"],["id","name"],["name","nombre"],["placeholder","Nombre"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0,i=l.component;return"input"===n&&(a=!1!==e.fb(l,14)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.fb(l,14).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.fb(l,14)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.fb(l,14)._compositionEnd(u.target.value)&&a),"ngModelChange"===n&&(a=!1!==(i.user.nombre=u)&&a),a},null,null)),e.Ua(12,278528,null,0,o.j,[e.w,e.x,e.l,e.I],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.ib(13,{"is-invalid":0}),e.Ua(14,16384,null,0,t.d,[e.I,e.l,[2,t.a]],null,null),e.Ua(15,16384,null,0,t.n,[],{required:[0,"required"]},null),e.kb(1024,null,t.g,function(l){return[l]},[t.n]),e.kb(1024,null,t.h,function(l){return[l]},[t.d]),e.Ua(18,671744,[["nombre",4]],0,t.m,[[2,t.c],[6,t.g],[8,null],[6,t.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.kb(2048,null,t.i,null,[t.m]),e.Ua(20,16384,null,0,t.j,[[4,t.i]],null,null),(l()(),e.Ma(16777216,null,null,1,null,k)),e.Ua(22,16384,null,0,o.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Va(23,0,null,null,14,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.Va(24,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Va(25,0,null,null,10,"input",[["class","form-control"],["email",""],["id","email"],["name","email"],["placeholder","Email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0,i=l.component;return"input"===n&&(a=!1!==e.fb(l,28)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.fb(l,28).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.fb(l,28)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.fb(l,28)._compositionEnd(u.target.value)&&a),"ngModelChange"===n&&(a=!1!==(i.user.email=u)&&a),a},null,null)),e.Ua(26,278528,null,0,o.j,[e.w,e.x,e.l,e.I],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.ib(27,{"is-invalid":0}),e.Ua(28,16384,null,0,t.d,[e.I,e.l,[2,t.a]],null,null),e.Ua(29,16384,null,0,t.n,[],{required:[0,"required"]},null),e.Ua(30,16384,null,0,t.e,[],{email:[0,"email"]},null),e.kb(1024,null,t.g,function(l,n){return[l,n]},[t.n,t.e]),e.kb(1024,null,t.h,function(l){return[l]},[t.d]),e.Ua(33,671744,[["email",4]],0,t.m,[[2,t.c],[6,t.g],[8,null],[6,t.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.kb(2048,null,t.i,null,[t.m]),e.Ua(35,16384,null,0,t.j,[[4,t.i]],null,null),(l()(),e.Ma(16777216,null,null,1,null,j)),e.Ua(37,16384,null,0,o.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Va(38,0,null,null,3,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),e.Va(39,0,null,null,2,"button",[["class","btn btn-danger pull-right"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),e.Ua(40,180224,null,0,c.b,[e.l,d.a,b.g,[2,p.a]],null,null),(l()(),e.nb(-1,0,["Jugar"]))],function(l,n){var u=n.component;l(n,12,0,"form-control",l(n,13,0,e.fb(n,5).submitted&&e.fb(n,18).invalid)),l(n,15,0,""),l(n,18,0,"nombre",u.user.nombre),l(n,22,0,e.fb(n,5).submitted&&e.fb(n,18).invalid),l(n,26,0,"form-control",l(n,27,0,e.fb(n,5).submitted&&e.fb(n,33).invalid)),l(n,29,0,""),l(n,30,0,""),l(n,33,0,"email",u.user.email),l(n,37,0,e.fb(n,5).submitted&&e.fb(n,33).invalid)},function(l,n){l(n,3,0,e.fb(n,7).ngClassUntouched,e.fb(n,7).ngClassTouched,e.fb(n,7).ngClassPristine,e.fb(n,7).ngClassDirty,e.fb(n,7).ngClassValid,e.fb(n,7).ngClassInvalid,e.fb(n,7).ngClassPending),l(n,11,0,e.fb(n,15).required?"":null,e.fb(n,20).ngClassUntouched,e.fb(n,20).ngClassTouched,e.fb(n,20).ngClassPristine,e.fb(n,20).ngClassDirty,e.fb(n,20).ngClassValid,e.fb(n,20).ngClassInvalid,e.fb(n,20).ngClassPending),l(n,25,0,e.fb(n,29).required?"":null,e.fb(n,35).ngClassUntouched,e.fb(n,35).ngClassTouched,e.fb(n,35).ngClassPristine,e.fb(n,35).ngClassDirty,e.fb(n,35).ngClassValid,e.fb(n,35).ngClassInvalid,e.fb(n,35).ngClassPending),l(n,39,0,e.fb(n,40).disabled||null,"NoopAnimations"===e.fb(n,40)._animationMode)})}function x(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,2,"div",[["class","stats"]],null,null,null,null,null)),(l()(),e.Va(1,0,null,null,1,"span",[["class","href"]],null,null,null,null,null)),(l()(),e.nb(-1,null,["Seleccionar..."]))],null,null)}function M(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,2,"div",[["class","stats"]],null,null,null,null,null)),(l()(),e.Va(1,0,null,null,1,"span",[["class","href"]],null,null,null,null,null)),(l()(),e.nb(-1,null,["Elegido"]))],null,null)}function q(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,18,"div",[["class","col-lg-3 col-md-6 col-sm-6"]],null,null,null,null,null)),(l()(),e.Va(1,0,null,null,17,"div",[["class","card card-stats pointer"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.selected(l.context.$implicit)&&e),e},null,null)),e.Ua(2,278528,null,0,o.j,[e.w,e.x,e.l,e.I],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.ib(3,{"is-selected":0}),(l()(),e.Va(4,0,null,null,9,"div",[["class","card-header card-header-warning card-header-icon"]],null,null,null,null,null)),(l()(),e.Va(5,0,null,null,1,"div",[["class","card-icon col-lg-5 col-md-3 col-sm-3 col-3"],["style","padding: 7px;"]],null,null,null,null,null)),(l()(),e.Va(6,0,null,null,0,"img",[["style","width: 100%"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e.Va(7,0,null,null,2,"p",[["class","card-category"]],null,null,null,null,null)),(l()(),e.Va(8,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e.nb(9,null,["Grupo ",""])),(l()(),e.Va(10,0,null,null,1,"h4",[["class","card-title"],["style","font-size: 0.95rem"]],null,null,null,null,null)),(l()(),e.nb(11,null,["",""])),(l()(),e.Va(12,0,null,null,1,"p",[["class","card-category"]],null,null,null,null,null)),(l()(),e.nb(13,null,["Valor ",""])),(l()(),e.Va(14,0,null,null,4,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),e.Ma(16777216,null,null,1,null,x)),e.Ua(16,16384,null,0,o.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ma(16777216,null,null,1,null,M)),e.Ua(18,16384,null,0,o.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,"card card-stats pointer",l(n,3,0,n.context.$implicit.seleccionado)),l(n,16,0,!n.context.$implicit.seleccionado),l(n,18,0,n.context.$implicit.seleccionado)},function(l,n){l(n,6,0,e.Xa(1,"assets/img/faces/",n.context.$implicit.img,".jpg"),e.Xa(1,"",n.context.$implicit.nombre,"")),l(n,9,0,n.context.$implicit.grupo),l(n,11,0,n.context.$implicit.nombre),l(n,13,0,n.context.$implicit.valor)})}function P(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,15,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),e.Va(1,0,null,null,14,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e.Va(2,0,null,null,8,"div",[["class","alert alert-primary"]],null,null,null,null,null)),(l()(),e.Va(3,0,null,null,7,"span",[],null,null,null,null,null)),(l()(),e.nb(-1,null,[" Seleccion\xe1 hasta 5 personajes que pensas que van a morir esta temporada y rankea."])),(l()(),e.Va(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.nb(-1,null,[" - Los personajes tienen distintos valores. Estan divididos en 4 grupos."])),(l()(),e.Va(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.nb(-1,null,[" - Acertar los 5 personajes seleccionados tiene un plus de 200 puntos."])),(l()(),e.Va(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.nb(-1,null,[" - Los personajes que vayan muriendo ya no se podr\xe1n seleccionar. "])),(l()(),e.Ma(16777216,null,null,1,null,I)),e.Ua(12,16384,null,0,o.l,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Va(13,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(16777216,null,null,1,null,q)),e.Ua(15,278528,null,0,o.k,[e.U,e.R,e.w],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,12,0,!u.userLogged),l(n,15,0,u.personajes)},null)}var w=e.Ra("app-dashboard",g,function(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,1,"app-dashboard",[],null,null,null,P,U)),e.Ua(1,114688,null,0,g,[f.a,m.a,v.a,h.a,V.b],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),R=function(){function l(l,n,u){this.usuarioService=l,this.seleccionService=n,this.snackBar=u}return l.prototype.ngOnInit=function(){this.getUsuarios()},l.prototype.getUsuarios=function(){var l=this;this.usuarioService.get().subscribe(function(n){l.usuarios=n.json().usuarios},function(l){console.error(l)})},l.prototype.openSnackBar=function(l){var n=this;console.log("Pepe"),this.seleccionService.getPersonajes(l).subscribe(function(l){n.snackBar.open(l.json().selecciones.map(function(l){return l.nombre}).join(". "),null,{duration:3e3})},function(l){console.error(l)})},l}(),_=e.Ta({encapsulation:0,styles:[[".pointer[_ngcontent-%COMP%]{cursor:pointer}.href[_ngcontent-%COMP%]{color:#9c27b0}"]],data:{}});function $(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,8,"tr",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.openSnackBar(l.context.$implicit._id)&&e),e},null,null)),(l()(),e.Va(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.nb(2,null,[" "," "])),(l()(),e.Va(3,0,null,null,1,"td",[["class","pointer href"]],null,null,null,null,null)),(l()(),e.nb(4,null,[" "," "])),(l()(),e.Va(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.nb(6,null,[" "," "])),(l()(),e.Va(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.nb(8,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.nombre),l(n,6,0,n.context.$implicit.aciertos),l(n,8,0,n.context.$implicit.puntos)})}function L(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,24,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),e.Va(1,0,null,null,23,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e.Va(2,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Va(3,0,null,null,21,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e.Va(4,0,null,null,20,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.Va(5,0,null,null,4,"div",[["class","card-header card-header-danger"]],null,null,null,null,null)),(l()(),e.Va(6,0,null,null,1,"h4",[["class","card-title "]],null,null,null,null,null)),(l()(),e.nb(-1,null,["Ranking"])),(l()(),e.Va(8,0,null,null,1,"p",[["class","card-category"]],null,null,null,null,null)),(l()(),e.nb(-1,null,["Aqu\xed tienen sus posiciones bastardos, enanos y huargos"])),(l()(),e.Va(10,0,null,null,14,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.Va(11,0,null,null,13,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e.Va(12,0,null,null,12,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.Va(13,0,null,null,8,"thead",[["class"," text-primary"]],null,null,null,null,null)),(l()(),e.Va(14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.nb(-1,null,[" Posici\xf3n "])),(l()(),e.Va(16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.nb(-1,null,[" Nombre "])),(l()(),e.Va(18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.nb(-1,null,[" Aciertos "])),(l()(),e.Va(20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.nb(-1,null,[" Puntos "])),(l()(),e.Va(22,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.Ma(16777216,null,null,1,null,$)),e.Ua(24,278528,null,0,o.k,[e.U,e.R,e.w],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,24,0,n.component.usuarios)},null)}var O=e.Ra("app-table-list",R,function(l){return e.pb(0,[(l()(),e.Va(0,0,null,null,1,"app-table-list",[],null,null,null,L,_)),e.Ua(1,114688,null,0,R,[m.a,h.a,V.b],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),F=u("M2Lx"),A=u("Wf4p"),E=u("eDkP"),T=u("Fzqc"),B=u("uGex"),D=u("v9Dh"),Y=u("ZYjt"),N=u("ZYCi"),G=u("seP3"),J=u("/VYK"),Z=u("b716"),z=u("4c35"),H=u("qAlS");u.d(n,"AdminLayoutModuleNgFactory",function(){return K});var K=e.Sa(a,[],function(l){return e.cb([e.db(512,e.k,e.Ha,[[8,[i.a,s.a,w,O]],[3,e.k],e.B]),e.db(4608,o.n,o.m,[e.y,[2,o.w]]),e.db(4608,t.r,t.r,[]),e.db(4608,F.b,F.b,[]),e.db(4608,A.d,A.d,[]),e.db(4608,E.a,E.a,[E.g,E.c,e.k,E.f,E.d,e.u,e.D,o.d,T.b,[2,o.h]]),e.db(5120,E.h,E.i,[E.a]),e.db(5120,B.a,B.b,[E.a]),e.db(5120,D.a,D.b,[E.a]),e.db(4608,Y.f,A.e,[[2,A.i],[2,A.l]]),e.db(1073742336,o.c,o.c,[]),e.db(1073742336,N.p,N.p,[[2,N.v],[2,N.m]]),e.db(1073742336,t.p,t.p,[]),e.db(1073742336,t.f,t.f,[]),e.db(1073742336,T.a,T.a,[]),e.db(1073742336,A.l,A.l,[[2,A.f],[2,Y.g]]),e.db(1073742336,d.b,d.b,[]),e.db(1073742336,A.s,A.s,[]),e.db(1073742336,c.c,c.c,[]),e.db(1073742336,F.c,F.c,[]),e.db(1073742336,G.a,G.a,[]),e.db(1073742336,J.b,J.b,[]),e.db(1073742336,Z.a,Z.a,[]),e.db(1073742336,z.g,z.g,[]),e.db(1073742336,H.c,H.c,[]),e.db(1073742336,E.e,E.e,[]),e.db(1073742336,A.q,A.q,[]),e.db(1073742336,A.o,A.o,[]),e.db(1073742336,B.c,B.c,[]),e.db(1073742336,b.a,b.a,[]),e.db(1073742336,D.c,D.c,[]),e.db(1073742336,a,a,[]),e.db(1024,N.k,function(){return[[{path:"seleccion",component:g},{path:"ranking",component:R}]]},[])])})}}]);