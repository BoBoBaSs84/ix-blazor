"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[5935],{5935:(e,t,i)=>{i.r(t),i.d(t,{ix_select:()=>l,ix_select_item:()=>n});var s=i(7135);const l=class{constructor(e){(0,s.r)(this,e),this.itemSelectionChange=(0,s.c)(this,"itemSelectionChange",7),this.addItem=(0,s.c)(this,"addItem",7),this.selectedIndices=[],this.allowClear=!1,this.mode="single",this.editable=!1,this.disabled=!1,this.readonly=!1,this.i18nPlaceholder="Select an option",this.i18nPlaceholderEditable="Type of select option",this.i18nSelectListHeader="Please select an option",this.i18nNoMatches="No matches",this.hideListHeader=!1,this.dropdownShow=!1,this.value=void 0,this.dropdownWrapperRef=void 0,this.dropdownAnchor=void 0,this.isDropdownEmpty=!1,this.hasFocus=!1,this.navigationItem=void 0,this.inputFilterText=void 0,this.inputValue=void 0}get items(){return Array.from(this.hostElement.querySelectorAll("ix-select-item"))}get selectedItems(){return this.items.filter((e=>e.selected))}get addItemButton(){return this.hostElement.querySelector(".add-item")}get isSingleMode(){return"single"===this.mode}get isMultipleMode(){return"multiple"===this.mode}get isEveryDropdownItemHidden(){return this.items.every((e=>e.classList.contains("d-none")))}watchSelectedIndices(e){e?Array.isArray(e)?this.selectValue([...e]):this.selectValue([e]):this.selectValue([])}onItemClicked(e){const t=e.detail;this.emitItemClick(t)}emitItemClick(e){this.isMultipleMode&&Array.isArray(this.selectedIndices)?this.selectedIndices.includes(e)?this.selectedIndices=this.selectedIndices.filter((t=>t!==e)):this.selectedIndices=[...this.selectedIndices,e]:this.selectedIndices=[e],this.selectValue(this.selectedIndices),this.itemSelectionChange.emit(this.selectedIndices)}emitAddItem(e){if(""===e.trim())return;const t=document.createElement("ix-select-item");t.value=e,t.label=e,this.addItemRef.appendChild(t),this.clearInput(),this.emitItemClick(e),this.addItem.emit(e)}selectValue(e){var t;this.items.forEach((t=>{t.selected=e.some((e=>e===t.value))})),this.value=this.selectedItems.map((e=>e.label)),this.isSingleMode?this.inputValue=(null===(t=this.value)||void 0===t?void 0:t.length)?this.value[0]:null:this.inputValue=null}componentWillLoad(){this.selectedIndices&&this.selectValue(Array.isArray(this.selectedIndices)?this.selectedIndices:[this.selectedIndices])}onLabelChange(e){e.preventDefault(),e.stopImmediatePropagation(),this.selectValue(Array.isArray(this.selectedIndices)?this.selectedIndices:[this.selectedIndices])}disconnectedCallback(){this.labelMutationObserver&&this.labelMutationObserver.disconnect()}itemExists(e){return this.items.find((t=>t.label===e))}dropdownVisibilityChanged(e){this.dropdownShow=e.detail,this.hasFocus=e.detail,e.detail?(this.inputRef.focus(),this.inputRef.select(),this.removeHiddenFromItems(),this.isDropdownEmpty=this.isEveryDropdownItemHidden):this.navigationItem=void 0}async onKeyDown(e){this.dropdownShow&&("ArrowDown"!==e.code&&"ArrowUp"!==e.code||this.onArrowNavigation(e),"Enter"!==e.code&&"NumpadEnter"!==e.code||await this.onEnterNavigation(),"Escape"===e.code&&(this.dropdownShow=!1))}async onEnterNavigation(){var e,t;this.isMultipleMode||(this.editable&&!this.itemExists(this.inputFilterText)&&(this.emitAddItem(this.inputFilterText),this.navigationItem=this.items[this.items.length-1]),null===(e=this.navigationItem)||void 0===e||e.onItemClick(),await(null===(t=this.dropdownRef)||void 0===t?void 0:t.updatePosition()),this.isSingleMode&&!this.editable&&(this.dropdownShow=!1))}onArrowNavigation(e){e.stopPropagation(),e.preventDefault();const t=this.items.find((e=>document.activeElement===e.querySelector("button")));this.navigationItem=t;const i=this.items.filter((e=>!e.classList.contains("d-none"))),s=i.indexOf(this.navigationItem);"ArrowDown"===e.code&&s<i.length-1?this.navigationItem=i[s+1]:"ArrowUp"===e.code&&s>0&&(this.navigationItem=i[s-1]),this.setHoverEffectForNavigatedSelectItem()}setHoverEffectForNavigatedSelectItem(){var e;null===(e=this.navigationItem)||void 0===e||e.querySelector("button").focus()}filterItemsWithTypeahead(){this.inputFilterText=this.inputRef.value,this.inputFilterText?this.items.forEach((e=>{e.classList.remove("d-none"),e.label.toLowerCase().includes(this.inputFilterText.toLowerCase())||e.classList.add("d-none")})):this.removeHiddenFromItems(),this.isDropdownEmpty=this.isEveryDropdownItemHidden}removeHiddenFromItems(){this.items.forEach((e=>{e.classList.remove("d-none")}))}clearInput(){this.inputRef.value="",this.inputFilterText=""}clear(){this.clearInput(),this.value=[],this.selectedIndices=[],this.itemSelectionChange.emit(null),this.dropdownShow=!1}onInputBlur(e){this.editable||(this.isSingleMode&&this.dropdownShow&&this.isDropdownEmpty&&(this.dropdownShow=!1),this.dropdownShow||"multiple"===this.mode||(e.target.value=this.value))}placeholderValue(){return this.editable?this.i18nPlaceholderEditable:this.readonly?"":this.i18nPlaceholder}render(){var e,t,i;return(0,s.h)(s.H,null,(0,s.h)("div",{class:{"form-control":!0,select:!0,focus:this.hasFocus,editable:this.editable,disabled:this.disabled,readonly:this.readonly},ref:e=>{this.dropdownAnchor=e,this.editable||(this.dropdownWrapperRef=e)}},(0,s.h)("div",{class:"input-container"},(0,s.h)("div",{class:"chips"},this.isMultipleMode?null===(e=this.selectedItems)||void 0===e?void 0:e.map((e=>(0,s.h)("ix-filter-chip",{disabled:this.disabled||this.readonly,key:e.value,onCloseClick:t=>{t.preventDefault(),t.stopPropagation(),this.emitItemClick(e.value)}},e.label))):"",(0,s.h)("div",{class:"trigger"},(0,s.h)("input",{"data-testid":"input",disabled:this.disabled,readOnly:this.readonly,type:"text",class:{"allow-clear":this.allowClear&&!!(null===(t=this.value)||void 0===t?void 0:t.length)},placeholder:this.placeholderValue(),value:this.inputValue,ref:e=>this.inputRef=e,onBlur:e=>this.onInputBlur(e),onInput:()=>this.filterItemsWithTypeahead()}),this.allowClear&&((null===(i=this.value)||void 0===i?void 0:i.length)||this.inputFilterText)?(0,s.h)("ix-icon-button",{class:"clear",icon:"clear",ghost:!0,oval:!0,size:"16",onClick:e=>{e.preventDefault(),e.stopPropagation(),this.clear()}}):null,this.disabled||this.readonly?null:(0,s.h)("div",{class:"chevron-down-container",ref:e=>{this.editable&&(this.dropdownWrapperRef=e)}},(0,s.h)("ix-icon",{class:"chevron",name:"chevron-down-small"})))))),(0,s.h)("ix-dropdown",{ref:e=>this.dropdownRef=e,show:this.dropdownShow,closeBehavior:this.isMultipleMode?"outside":"both",class:{"d-none":this.disabled||this.readonly},anchor:this.dropdownAnchor,trigger:this.dropdownWrapperRef,onShowChanged:e=>this.dropdownVisibilityChanged(e),placement:"auto-start",overwriteDropdownStyle:async()=>({minWidth:`${this.hostElement.clientWidth}px`})},(0,s.h)("div",{class:{"select-list-header":!0,hidden:this.hideListHeader||this.isDropdownEmpty},title:this.i18nSelectListHeader},this.i18nSelectListHeader),(0,s.h)("slot",null),(0,s.h)("div",{ref:e=>this.addItemRef=e,class:"d-contents"}),this.itemExists(this.inputFilterText)?"":(0,s.h)("ix-dropdown-item",{"data-testid":"add-item",icon:"plus",class:{"add-item":!0,"d-none":!(this.editable&&this.inputFilterText)},label:this.inputFilterText,onItemClick:e=>{e.preventDefault(),e.stopPropagation(),this.emitAddItem(this.inputFilterText)}}),this.isDropdownEmpty&&!this.editable?(0,s.h)("div",{class:"select-list-header"},this.i18nNoMatches):""))}get hostElement(){return(0,s.g)(this)}static get watchers(){return{selectedIndices:["watchSelectedIndices"]}}};l.style=".sc-ix-select-h{display:inline-block;position:relative;height:auto;border-radius:var(--theme-input--border-radius)}.sc-ix-select-h .select.sc-ix-select{position:relative;display:flex;align-items:center;height:auto;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem;box-shadow:var(--theme-inset-shadow-1) !important}.sc-ix-select-h .select.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .select.sc-ix-select:not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}.sc-ix-select-h .select.sc-ix-select:focus-within{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline:1px solid #119fff !important;outline-offset:var(--theme-input--focus--outline-offset)}.sc-ix-select-h .select.readonly.sc-ix-select{box-shadow:none !important}.sc-ix-select-h .hidden.sc-ix-select{display:none !important}.sc-ix-select-h .trigger.sc-ix-select{display:flex;align-items:center;flex-grow:1;height:100%}.sc-ix-select-h .input-container.sc-ix-select{display:flex;position:relative;align-items:flex-start;width:100%}.sc-ix-select-h .input-container.sc-ix-select .chips.sc-ix-select{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-height:3.5rem;flex-grow:1;overflow-y:auto}.sc-ix-select-h .input-container.sc-ix-select .chips.sc-ix-select>ix-filter-chip.sc-ix-select{margin:0.1rem}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;height:1.75rem;width:100%}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select,.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select:hover,.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select:focus-visible{border:none;outline:none}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select::-moz-placeholder{color:var(--theme-input-select-icon--color)}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select::placeholder{color:var(--theme-input-select-icon--color)}.sc-ix-select-h .input-container.sc-ix-select input.hide-placeholder.sc-ix-select::-moz-placeholder{opacity:0}.sc-ix-select-h .input-container.sc-ix-select input.hide-placeholder.sc-ix-select::placeholder{opacity:0}.sc-ix-select-h .chevron-down-container.sc-ix-select{display:flex;align-items:center;justify-content:center;width:2rem;min-width:2rem;height:2rem}.sc-ix-select-h .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled):hover{color:var(--theme-color-dynamic--hover)}.sc-ix-select-h .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled):active{color:var(--theme-color-dynamic--hover)}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled):hover{color:var(--theme-color-std-text);background-color:var(--theme-btn-invisible-secondary--background--hover)}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled):active{color:var(--theme-color-std-text);background-color:var(--theme-btn-invisible-secondary--background--active)}.sc-ix-select-h .add-item.sc-ix-select{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}.sc-ix-select-h .select-list-header.sc-ix-select{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 2rem}";class o extends CustomEvent{constructor(e){super("ix-select-item:labelChange",{bubbles:!0,detail:e})}}const n=class{constructor(e){(0,s.r)(this,e),this.itemClick=(0,s.c)(this,"itemClick",7),this.label=void 0,this.value=void 0,this.selected=!1,this.hover=!1}async onItemClick(e){null==e||e.preventDefault(),null==e||e.stopPropagation(),this.itemClick.emit(this.value)}componentDidRender(){if(!this.value)throw Error("ix-select-item must have a `value` property")}labelChange(e,t){this.hostElement.dispatchEvent(new o({newValue:e,oldValue:t}))}render(){return(0,s.h)(s.H,null,(0,s.h)("ix-dropdown-item",{checked:this.selected,label:this.label?this.label:this.value,onItemClick:e=>this.onItemClick(e)}))}get hostElement(){return(0,s.g)(this)}static get watchers(){return{label:["labelChange"]}}};n.style=".sc-ix-select-item-h{display:block}"}}]);