"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[4895],{4895:(e,s,r)=>{r.r(s),r.d(s,{ix_message_bar:()=>i});var o=r(7135),t=r(8137);const i=class{constructor(e){(0,o.r)(this,e),this.closedChange=(0,o.c)(this,"closedChange",7),this.type="info",this.dismissible=!0,this.icon=void 0,this.color=void 0}componentWillRender(){"danger"===this.type&&(this.icon="error",this.color="color-alarm"),"info"===this.type&&(this.icon="info",this.color="color-info"),"warning"===this.type&&(this.icon="warning",this.color="color-warning")}closeAlert(e){(0,t.a)({targets:e,duration:i.duration,opacity:[1,0],easing:"easeOutSine",complete:()=>{e.classList.add("d-none")}}),this.closedChange.emit()}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{class:{"message-container":!0,[this.type]:!0},role:"alert",ref:e=>this.divElement=e},(0,o.h)("ix-icon",{color:this.color,name:this.icon}),(0,o.h)("div",{class:"message-content"},(0,o.h)("slot",null)),this.dismissible?(0,o.h)("ix-icon-button",{icon:"close",size:"24",ghost:!0,onClick:()=>{this.closeAlert(this.divElement)},"data-testid":"close-btn"}):""))}};i.duration=300,i.style=":host *,:host *::after,:host *::before{box-sizing:border-box}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;margin:0.5rem 0.5rem 0rem 0.5rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .message-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:bold;white-space:normal}:host ix-icon{margin-top:0.25rem}"}}]);