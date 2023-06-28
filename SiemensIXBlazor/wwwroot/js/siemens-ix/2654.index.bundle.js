"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[2654],{2654:(e,i,o)=>{o.r(i),o.d(i,{ix_blind:()=>n});var t=o(7135),d=o(8137);let a=0;const n=class{constructor(e){(0,t.r)(this,e),this.collapsedChange=(0,t.c)(this,"collapsedChange",7),this.id=++a,this.collapsed=!1,this.label=void 0,this.icon=void 0}onHeaderClick(e){e.target.closest(".header-actions")||(e.preventDefault(),e.stopImmediatePropagation(),this.collapsed=!this.collapsed,this.collapsedChange.emit(this.collapsed))}componentDidLoad(){this.animateCollapse(this.collapsed)}get content(){return this.hostElement.shadowRoot.querySelector(".blind-content")}animation(e){this.animateCollapse(e)}animateCollapse(e){e?this.rotateChevronRight():this.rotateChevronDown()}rotateChevronDown(){(0,d.a)({targets:this.chevronRef,duration:150,easing:"easeInOutSine",rotateZ:90}),(0,d.a)({targets:this.content,duration:150,easing:"easeInOutSine",opacity:1})}rotateChevronRight(){(0,d.a)({targets:this.chevronRef,duration:150,easing:"easeInOutSine",rotateZ:0}),(0,d.a)({targets:this.content,duration:150,easing:"easeInOutSine",opacity:0})}render(){return(0,t.h)(t.H,null,(0,t.h)("button",{class:{"blind-header":!0,closed:this.collapsed},type:"button","aria-labelledby":`ix-blind-header-title-${this.id}`,"aria-controls":`ix-blind-content-section-${this.id}`,"aria-expanded":(e=!this.collapsed,e?"true":"false"),onClick:e=>this.onHeaderClick(e)},(0,t.h)("ix-icon",{class:"collapse-icon",name:"chevron-right-small",ref:e=>this.chevronRef=e}),(0,t.h)("div",{class:"blind-header-title",id:`ix-blind-header-title-${this.id}`},void 0!==this.label?(0,t.h)("span",{class:"blind-header-title-basic"},void 0!==this.icon?(0,t.h)("ix-icon",{name:this.icon}):"",(0,t.h)("span",{class:"blind-header-title-default"},this.label),(0,t.h)("span",{class:"header-actions",onClick:e=>e.stopImmediatePropagation()},(0,t.h)("slot",{name:"header-actions"}))):(0,t.h)("slot",{name:"custom-header"}))),(0,t.h)("section",{id:`ix-blind-content-section-${this.id}`,"aria-labelledby":`ix-blind-header-title-${this.id}`},(0,t.h)("div",{class:{"blind-content":!0,hide:this.collapsed}},(0,t.h)("slot",null))));var e}get hostElement(){return(0,t.g)(this)}static get watchers(){return{collapsed:["animation"]}}};n.style=":host{display:flex;flex-direction:column;background-color:var(--theme-blind-base--background);border:solid var(--theme-blind--border-thickness) var(--theme-blind-base--border-color);border-radius:var(--theme-blind--border-radius);overflow:hidden}:host .blind-header{all:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;min-height:3rem;height:3rem;border:solid var(--theme-blind--border-thickness) transparent;border-radius:var(--theme-blind--border-radius) var(--theme-blind--border-radius) 0 0;padding-right:0.5rem;transition:border-radius 150ms;cursor:pointer;z-index:1;color:var(--theme-blind-header-closed--color);background-color:var(--theme-blind-header-closed--background)}:host .blind-header .collapse-icon{color:var(--theme-blind-header-icon-closed--color);padding:0.25rem 0.5rem}:host .blind-header .blind-header-title,:host .blind-header .blind-header-title-basic{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;flex-grow:1;height:100%}:host .blind-header .blind-header-title .blind-header-title-default,:host .blind-header .blind-header-title-basic .blind-header-title-default{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-margin-end:0.5rem;margin-inline-end:0.5rem;flex-grow:1}:host .blind-header .blind-header-title-basic ix-icon{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-blind-header-open--background--hover)}:host .blind-header:not(.disabled):not(:disabled):hover .collapse-icon{color:var(--theme-blind-header-icon-open--color--hover)}:host .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-blind-header-open--background--active)}:host .blind-header:not(.disabled):not(:disabled):active .collapse-icon{color:var(--theme-blind-header-icon-open--color--active)}:host .blind-header:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr);outline:none}:host .blind-header.closed{border-radius:var(--theme-blind--border-radius)}:host .blind-header.closed:not(.disabled):not(:disabled){cursor:pointer}:host .blind-header.closed:not(.disabled):not(:disabled):hover{background-color:var(--theme-blind-header-open--background--hover)}:host .blind-header.closed:not(.disabled):not(:disabled):hover .collapse-icon{color:var(--theme-blind-header-icon-closed--color--hover)}:host .blind-header.closed:not(.disabled):not(:disabled){cursor:pointer}:host .blind-header.closed:not(.disabled):not(:disabled):active{background-color:var(--theme-blind-header-open--background--active)}:host .blind-header.closed:not(.disabled):not(:disabled):active .collapse-icon{color:var(--theme-blind-header-icon-closed--color--active)}:host .blind-content{display:block;padding:1rem;transition-property:padding;transition-duration:150ms;transition-timing-function:ease-in}:host .blind-content.hide{max-height:0;padding-top:0px;padding-bottom:0px}"}}]);