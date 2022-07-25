(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("lkt-events"),require("lkt-tools"),require("vue")):typeof define=="function"&&define.amd?define(["lkt-events","lkt-tools","vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.LktButton=n(e.LktEvents,e.LktTools,e.Vue))})(this,function(e,n,a){"use strict";const l=["button","submit","reset"],c=t=>l.indexOf(t)!==-1;class o{}o.DEFAULT_STATE="";const f=t=>{o.DEFAULT_STATE=n.trim(t,void 0)},k=()=>o.DEFAULT_STATE,m={name:"LktButton",emits:["click"],props:{type:{type:String,default:"button",validator:c},name:{type:String,default:()=>n.generateRandomString(10)},state:{type:String,default:()=>k()},value:{type:String,default:""},disabled:{type:Boolean,default:!1}},methods:{onClick(t){this.$emit("click",t,e.createLktEvent(this.name,this.value))}}},p=(t,i)=>{const s=t.__vccOpts||t;for(const[u,r]of i)s[u]=r;return s},S=["name","type","disabled","data-state"];function y(t,i,s,u,r,d){return a.openBlock(),a.createElementBlock("button",{"data-lkt":"button",name:s.name,type:s.type,disabled:s.disabled,"data-state":s.state,onClick:i[0]||(i[0]=a.withModifiers((..._)=>d.onClick&&d.onClick(..._),["prevent","stop"]))},[a.renderSlot(t.$slots,"default")],8,S)}const T=p(m,[["render",y]]);return{install:(t,i)=>{t.component("lktButton",T),n.isObject(i)&&n.isString(i.defaultState)&&f(i.defaultState)}}});
