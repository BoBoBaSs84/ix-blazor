"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[5122],{5122:(e,t,i)=>{i.r(t),i.d(t,{ix_tab_item:()=>a});var o=i(7135);const a=class{constructor(e){(0,o.r)(this,e),this.selected=!1,this.disabled=!1,this.small=!1,this.icon=!1,this.rounded=!1,this.counter=void 0,this.layout="auto",this.placement="bottom"}tabItemClasses(e){return{selected:e.selected,disabled:e.disabled,"small-tab":e.small,icon:e.small,stretched:"stretched"===e.layout,bottom:"bottom"===e.placement,top:"top"===e.placement,circle:e.circle}}render(){return(0,o.h)(o.H,{class:this.tabItemClasses({selected:this.selected,disabled:this.disabled,small:this.small,icon:this.icon,layout:this.layout,placement:this.placement,circle:this.rounded}),tabIndex:0},(0,o.h)("div",{class:{circle:this.rounded,text:!this.rounded,selected:this.selected,disabled:this.disabled}},(0,o.h)("slot",null)),(0,o.h)("div",{class:{counter:!0,selected:this.selected,hidden:!(this.rounded&&void 0!==this.counter),disabled:this.disabled}},this.counter))}};a.style='@charset "UTF-8";ix-tab-item{position:relative;display:flex;align-items:center;justify-content:center;height:40px;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}ix-tab-item.circle{height:72px}ix-tab-item.top::after{top:0}ix-tab-item.bottom::after{bottom:0}ix-tab-item::after{content:"";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}ix-tab-item.stretched{flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}ix-tab-item .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}ix-tab-item .text span,ix-tab-item .text span::before{pointer-events:none}ix-tab-item:hover:not(.circle){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}ix-tab-item:hover:not(.circle)::after{background-color:var(--theme-tab-indicator--background--hover)}ix-tab-item:active:not(.circle){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}ix-tab-item:active:not(.circle)::after{background-color:var(--theme-tab-indicator--background--active)}ix-tab-item:focus-visible{outline:0px solid var(--focus--border-color)}ix-tab-item:focus-visible .circle{outline:1px solid var(--focus--border-color)}ix-tab-item:focus-visible:not(.circle){outline:1px solid var(--focus--border-color)}ix-tab-item.disabled{color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}ix-tab-item.disabled::after{background-color:var(--theme-tab-indicator--background--disabled)}ix-tab-item.selected:not(.disabled){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}ix-tab-item.selected:not(.disabled)::after{background-color:var(--theme-tab-indicator--background--selected)}ix-tab-item.icon{padding:1.5rem 0.5rem}ix-tab-item.small-tab{height:32px;padding:1rem}ix-tab-item.small-tab.icon{padding:1rem 0.25rem}ix-tab-item .circle{display:flex;justify-content:center;align-items:center;height:48px;width:48px;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an…icon--color);cursor:pointer}ix-tab-item .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}ix-tab-item .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}ix-tab-item .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}ix-tab-item .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}ix-tab-item .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}ix-tab-item .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}ix-tab-item .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-pill-outline--background);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:16px;color:var(--theme-pill-outline--color);cursor:pointer}ix-tab-item .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}ix-tab-item .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}ix-tab-item .hidden{display:none}'}}]);