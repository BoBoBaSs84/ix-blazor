"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[6114],{6114:(t,e,i)=>{i.r(e),i.d(e,{ix_drawer:()=>h});var s=i(7135),o=i(8137);const h=class{constructor(t){(0,s.r)(this,t),this.open=(0,s.c)(this,"open",7),this.drawerClose=(0,s.c)(this,"drawerClose",7),this.callback=this.clickedOutside.bind(this),this.show=!1,this.closeOnClickOutside=!0,this.fullHeight=!1,this.minWidth=16,this.maxWidth=28,this.width=this.minWidth}onShowChanged(t){this.show=void 0!==t?t:!this.show,this.toggleDrawer(this.show)}async toggleDrawer(t){return this.show=void 0!==t?t:!this.show,t?(this.open.emit(),this.slideInRight(this.divElement),setTimeout((()=>{window.addEventListener("mousedown",this.callback)}),300)):(this.drawerClose.emit(),this.slideOutRight(this.divElement),window.removeEventListener("mousedown",this.callback)),Promise.resolve()}onCloseClicked(){this.show=!1}clickedOutside(t){if(!this.closeOnClickOutside)return;const e=t.target,i=e.closest("#div-container"),s=e.closest("#drawer-btn");"button"!==t.target.type&&i!==this.divElement&&e!==s&&(this.show=!1)}slideOutRight(t){(0,o.a)({targets:t,duration:h.duration,translateX:[0,"16rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{t.classList.add("d-none")}})}slideInRight(t){(0,o.a)({targets:t,duration:h.duration,translateX:["16rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{t.classList.remove("d-none")}})}render(){return(0,s.h)(s.H,{class:{"drawer-container":!0,toggle:this.show,"full-height":this.fullHeight,"d-none":!0},style:{width:"auto"===this.width?this.width:`${this.width}rem`,"min-width":`${this.minWidth}rem`,"max-width":`${this.maxWidth}rem`},ref:t=>this.divElement=t,"data-testid":"container",id:"div-container"},(0,s.h)("div",{class:"header"},(0,s.h)("div",{class:"header-content"},(0,s.h)("slot",{name:"header"})),(0,s.h)("ix-icon-button",{class:"close-button",icon:"close",size:"24",ghost:!0,onClick:()=>this.onCloseClicked(),"data-testid":"close-button"})),(0,s.h)("div",{class:"content"},(0,s.h)("slot",null)))}static get watchers(){return{show:["onShowChanged"]}}};h.duration=300,h.style=":host{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all 300ms ease-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .toggle{z-index:100;visibility:visible}:host .drawer-container.full-height{min-height:100%}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}"}}]);