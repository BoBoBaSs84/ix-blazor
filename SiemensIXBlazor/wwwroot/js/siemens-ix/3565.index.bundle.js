"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[3565],{3565:(e,t,n)=>{n.r(t),n.d(t,{ix_group_context_menu:()=>r});var o=n(7135);const r=class{constructor(e){(0,o.r)(this,e),this.showContextMenu=!1}get dropdownElement(){return this.host.querySelector("ix-dropdown")}get groupDropdownItem(){return this.host.querySelectorAll("ix-group-dropdown-item")}configureDropdown(e){this.dropdownElement.positioningStrategy="fixed",this.dropdownElement.trigger=e}componentWillRender(){this.showContextMenu=!!this.dropdownElement}render(){return(0,o.h)(o.H,null,(0,o.h)("ix-icon-button",{class:{hide:!this.showContextMenu},ref:e=>this.dropdownElement?this.configureDropdown(e):null,size:"24",ghost:!0,icon:"context-menu"}),(0,o.h)("slot",null))}get host(){return(0,o.g)(this)}};r.style=".sc-ix-group-context-menu-h{display:block;position:relative;-webkit-margin-before:0.3125rem;margin-block-start:0.3125rem;-webkit-margin-end:0.3125rem;margin-inline-end:0.3125rem;-webkit-margin-start:auto;margin-inline-start:auto}.sc-ix-group-context-menu-h ix-icon-button.sc-ix-group-context-menu::after{display:none}.sc-ix-group-context-menu-h .hide.sc-ix-group-context-menu{visibility:collapse}"}}]);