(function(n,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("lkt-events"),require("lkt-tools"),require("vue")):typeof define=="function"&&define.amd?define(["lkt-events","lkt-tools","vue"],o):(n=typeof globalThis<"u"?globalThis:n||self,n.LktButton=o(n.LktEvents,n.LktTools,n.Vue))})(this,function(n,o,e){"use strict";var r=(t=>(t.button="button",t.submit="submit",t.reset="reset",t))(r||{});const u=t=>{switch(t){case r.button:case r.reset:case r.submit:return!0;default:o.assertNever(t)}return!1};class a{}a.DEFAULT_STATE="";const p=e.defineComponent({name:"LktButton",emits:["click"],props:{type:{type:String,default:r.button,validator:u},name:{type:String,default:()=>o.generateRandomString(10)},state:{type:String,default:()=>a.DEFAULT_STATE},value:{type:String,default:""},disabled:{type:Boolean,default:!1},wrapContent:{type:Boolean,default:!1}},computed:{hasPrev(){return o.slotProvided(this,"prev")},hasNext(){return o.slotProvided(this,"next")}},methods:{onClick(t){this.$emit("click",t,n.createLktEvent(this.name,this.value))}}}),c=(t,s)=>{const d=t.__vccOpts||t;for(const[i,l]of s)d[i]=l;return d},f=["name","type","disabled","data-state"],k={key:0,"data-role":"prev"},m={key:1,"data-role":"content"},h={key:3,"data-role":"next"};function y(t,s,d,i,l,E){return e.openBlock(),e.createElementBlock("button",{"data-lkt":"button",name:t.name,type:t.type,disabled:t.disabled,"data-state":t.state,onClick:s[0]||(s[0]=e.withModifiers((...b)=>t.onClick&&t.onClick(...b),["prevent","stop"]))},[t.hasPrev?(e.openBlock(),e.createElementBlock("span",k,[e.renderSlot(t.$slots,"prev")])):e.createCommentVNode("",!0),t.wrapContent?(e.openBlock(),e.createElementBlock("span",m,[e.renderSlot(t.$slots,"default")])):e.renderSlot(t.$slots,"default",{key:2}),t.hasNext?(e.openBlock(),e.createElementBlock("span",h,[e.renderSlot(t.$slots,"next")])):e.createCommentVNode("",!0)],8,f)}const S=c(p,[["render",y]]);return{install:(t,s)=>{t.component("lkt-button",S),s&&s.defaultState&&(a.DEFAULT_STATE=s.defaultState)}}});
