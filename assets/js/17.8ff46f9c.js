(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{409:function(e,t,a){"use strict";a.r(t),a.d(t,"duet_date_picker",(function(){return R}));var o,i,n=a(374),r=function(e,t,a,o){function i(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,n){function r(e){try{s(o.next(e))}catch(e){n(e)}}function d(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){e.done?a(e.value):i(e.value).then(r,d)}s((o=o.apply(e,t||[])).next())}))},d=function(e,t){var a,o,i,n,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function d(e){return function(t){return s([e,t])}}function s(n){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,o=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==n[0]&&2!==n[0])){r=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){r.label=n[1];break}if(6===n[0]&&r.label<i[1]){r.label=i[1],i=n;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(n);break}i[2]&&r.ops.pop(),r.trys.pop();continue}n=t.call(e,r)}catch(e){n=[6,e],o=0}finally{a=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},s=/^(\d{4})-(\d{2})-(\d{2})$/;function l(e,t,a){var o=parseInt(a,10),i=parseInt(t,10),n=parseInt(e,10);if(Number.isInteger(n)&&Number.isInteger(i)&&Number.isInteger(o)&&i>0&&i<=12&&o>0&&o<=31&&n>0)return new Date(n,i-1,o)}function u(e){if(e){var t=e.match(s);return t?l(t[1],t[2],t[3]):void 0}}function c(e){if(!e)return"";var t=e.getDate().toString(10),a=(e.getMonth()+1).toString(10),o=e.getFullYear().toString(10);return e.getDate()<10&&(t="0"+t),e.getMonth()<9&&(a="0"+a),o+"-"+a+"-"+t}function h(e,t){return null!=e&&null!=t&&(p(e,t)&&e.getDate()===t.getDate())}function p(e,t){return null!=e&&null!=t&&(e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth())}function b(e,t){var a=new Date(e);return a.setDate(a.getDate()+t),a}function f(e,t){void 0===t&&(t=o.Monday);var a=new Date(e),i=a.getDay(),n=(i<t?7:0)+i-t;return a.setDate(a.getDate()-n),a}function g(e,t){void 0===t&&(t=o.Monday);var a=new Date(e),i=a.getDay(),n=6+(i<t?-7:0)-(i-t);return a.setDate(a.getDate()+n),a}function v(e){return new Date(e.getFullYear(),e.getMonth(),1)}function y(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function m(e,t){var a=new Date(e);return a.setMonth(t),a}function _(e,t){var a=new Date(e);return a.setFullYear(t),a}function x(e,t,a){return w(e,t,a)===e}function w(e,t,a){var o=e.getTime();return t&&t instanceof Date&&o<t.getTime()?t:a&&a instanceof Date&&o>a.getTime()?a:e}function D(e,t){return void 0===t&&(t=o.Monday),function(e,t){for(var a=[],o=e;!h(o,t);)a.push(o),o=b(o,1);return a.push(o),a}(f(v(e),t),g(y(e),t))}function O(){return Math.random().toString(16).slice(-4)}function j(e){return e+"-"+O()+O()+"-"+O()+"-"+O()+"-"+O()+"-"+O()+O()+O()}(i=o||(o={}))[i.Sunday=0]="Sunday",i[i.Monday=1]="Monday",i[i.Tuesday=2]="Tuesday",i[i.Wednesday=3]="Wednesday",i[i.Thursday=4]="Thursday",i[i.Friday=5]="Friday",i[i.Saturday=6]="Saturday";var k=function(e){var t=e.onClick,a=e.dateFormatter,o=e.localization,i=e.name,r=e.formattedValue,d=e.valueAsDate,s=e.value,l=e.identifier,u=e.disabled,c=e.required,h=e.role,p=e.buttonRef,b=e.inputRef,f=e.onInput,g=e.onBlur,v=e.onFocus;return Object(n.g)("div",{class:"duet-date__input-wrapper"},Object(n.g)("input",{class:"duet-date__input",value:r,placeholder:o.placeholder,id:l,disabled:u,role:h,required:!!c||void 0,"aria-autocomplete":"none",onInput:f,onFocus:v,onBlur:g,autoComplete:"off",ref:b}),Object(n.g)("input",{type:"hidden",name:i,value:s}),Object(n.g)("button",{class:"duet-date__toggle",onClick:t,disabled:u,ref:p,type:"button"},Object(n.g)("span",{class:"duet-date__toggle-icon"},Object(n.g)("svg",{"aria-hidden":"true",height:"24",viewBox:"0 0 21 21",width:"24",xmlns:"http://www.w3.org/2000/svg"},Object(n.g)("g",{fill:"none","fill-rule":"evenodd",transform:"translate(2 2)"},Object(n.g)("path",{d:"m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),Object(n.g)("path",{d:"m.5 4.5h16",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),Object(n.g)("g",{fill:"currentColor"},Object(n.g)("circle",{cx:"8.5",cy:"8.5",r:"1"}),Object(n.g)("circle",{cx:"4.5",cy:"8.5",r:"1"}),Object(n.g)("circle",{cx:"12.5",cy:"8.5",r:"1"}),Object(n.g)("circle",{cx:"8.5",cy:"12.5",r:"1"}),Object(n.g)("circle",{cx:"4.5",cy:"12.5",r:"1"}),Object(n.g)("circle",{cx:"12.5",cy:"12.5",r:"1"}))))),Object(n.g)("span",{class:"duet-date__vhidden"},o.buttonLabel,d&&Object(n.g)("span",null,", ",o.selectedDateMessage," ",a.format(d)))))},F=function(e){var t=e.focusedDay,a=e.today,o=e.day,i=e.onDaySelect,r=e.onKeyboardNavigation,d=e.focusedDayRef,s=e.disabled,l=e.inRange,u=e.isSelected,c=e.dateFormatter,b=h(o,a),f=p(o,t),g=h(o,t),v=!l;return Object(n.g)("button",{class:{"duet-date__day":!0,"is-outside":v,"is-today":b,"is-month":f,"is-disabled":s},tabIndex:g?0:-1,onClick:function(e){i(e,o)},onKeyDown:r,"aria-disabled":s?"true":void 0,disabled:v,type:"button","aria-pressed":u?"true":"false",ref:function(e){g&&e&&d&&d(e)}},Object(n.g)("span",{"aria-hidden":"true"},o.getDate()),Object(n.g)("span",{class:"duet-date__vhidden"},c.format(o)))};var M=function(e){var t=e.selectedDate,a=e.focusedDate,o=e.labelledById,i=e.localization,r=e.firstDayOfWeek,d=e.min,s=e.max,l=e.dateFormatter,u=e.isDateDisabled,c=e.onDateSelect,p=e.onKeyboardNavigation,b=e.focusedDayRef,f=new Date,g=D(a,r);return Object(n.g)("table",{class:"duet-date__table","aria-labelledby":o},Object(n.g)("thead",null,Object(n.g)("tr",null,function(e,t,a){return e.map((function(o,i){var n=(i+t)%e.length;return a(e[n])}))}(i.dayNames,r,(function(e){return Object(n.g)("th",{class:"duet-date__table-header",scope:"col"},Object(n.g)("span",{"aria-hidden":"true"},e.substr(0,2)),Object(n.g)("span",{class:"duet-date__vhidden"},e))})))),Object(n.g)("tbody",null,function(e,t){for(var a=[],o=0;o<e.length;o+=t)a.push(e.slice(o,o+t));return a}(g,7).map((function(e){return Object(n.g)("tr",{class:"duet-date__row"},e.map((function(e){return Object(n.g)("td",{class:"duet-date__cell"},Object(n.g)(F,{day:e,today:f,focusedDay:a,isSelected:h(e,t),disabled:u(e),inRange:x(e,d,s),onDaySelect:c,dateFormatter:l,onKeyboardNavigation:p,focusedDayRef:b}))})))}))))},z={buttonLabel:"Choose date",placeholder:"YYYY-MM-DD",selectedDateMessage:"Selected date is",prevMonthLabel:"Previous month",nextMonthLabel:"Next month",monthSelectLabel:"Month",yearSelectLabel:"Year",closeLabel:"Close window",calendarHeading:"Choose a date",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],locale:"en-GB"},S={parse:u,format:c};var C=9,T=27,Y=33,I=34,L=35,N=36,B=37,K=38,A=39,P=40;var W=/[^0-9\.\/\-]+/g,R=function(){function e(e){var t=this;Object(n.i)(this,e),this.duetChange=Object(n.e)(this,"duetChange",7),this.duetBlur=Object(n.e)(this,"duetBlur",7),this.duetFocus=Object(n.e)(this,"duetFocus",7),this.duetOpen=Object(n.e)(this,"duetOpen",7),this.duetClose=Object(n.e)(this,"duetClose",7),this.monthSelectId=j("DuetDateMonth"),this.yearSelectId=j("DuetDateYear"),this.dialogLabelId=j("DuetDateLabel"),this.initialTouchX=null,this.initialTouchY=null,this.activeFocus=!1,this.focusedDay=new Date,this.open=!1,this.name="date",this.identifier="",this.disabled=!1,this.direction="right",this.required=!1,this.value="",this.min="",this.max="",this.firstDayOfWeek=o.Monday,this.localization=z,this.dateAdapter=S,this.isDateDisabled=function(){return!1},this.enableActiveFocus=function(){t.activeFocus=!0},this.disableActiveFocus=function(){t.activeFocus=!1},this.toggleOpen=function(e){e.preventDefault(),t.open?t.hide(!1):t.show()},this.handleEscKey=function(e){e.keyCode===T&&t.hide()},this.handleBlur=function(e){e.stopPropagation(),t.duetBlur.emit({component:"duet-date-picker"})},this.handleFocus=function(e){e.stopPropagation(),t.duetFocus.emit({component:"duet-date-picker"})},this.handleTouchStart=function(e){var a=e.changedTouches[0];t.initialTouchX=a.pageX,t.initialTouchY=a.pageY},this.handleTouchMove=function(e){e.preventDefault()},this.handleTouchEnd=function(e){var a=e.changedTouches[0],o=a.pageX-t.initialTouchX,i=a.pageY-t.initialTouchY,n=Math.abs(o)>=70&&Math.abs(i)<=70,r=Math.abs(i)>=70&&Math.abs(o)<=70&&i>0;n?t.addMonths(o<0?1:-1):r&&(t.hide(!1),e.preventDefault()),t.initialTouchY=null,t.initialTouchX=null},this.handleNextMonthClick=function(e){e.preventDefault(),t.addMonths(1)},this.handlePreviousMonthClick=function(e){e.preventDefault(),t.addMonths(-1)},this.handleFirstFocusableKeydown=function(e){e.keyCode===C&&e.shiftKey&&(t.focusedDayNode.focus(),e.preventDefault())},this.handleKeyboardNavigation=function(e){if(e.keyCode===C&&!e.shiftKey)return e.preventDefault(),void t.firstFocusableElement.focus();var a=!0;switch(e.keyCode){case A:t.addDays(1);break;case B:t.addDays(-1);break;case P:t.addDays(7);break;case K:t.addDays(-7);break;case Y:e.shiftKey?t.addYears(-1):t.addMonths(-1);break;case I:e.shiftKey?t.addYears(1):t.addMonths(1);break;case N:t.startOfWeek();break;case L:t.endOfWeek();break;default:a=!1}a&&(e.preventDefault(),t.enableActiveFocus())},this.handleDaySelect=function(e,a){var o=x(a,u(t.min),u(t.max)),i=!t.isDateDisabled(a);o&&i?(t.setValue(a),t.hide()):t.setFocusedDay(a)},this.handleMonthSelect=function(e){t.setMonth(parseInt(e.target.value,10))},this.handleYearSelect=function(e){t.setYear(parseInt(e.target.value,10))},this.handleInputChange=function(){var e=t.datePickerInput;!function(e,t){var a=e.value,o=e.selectionStart,i=a.slice(0,o),n=a.slice(o,a.length),r=i.replace(t,""),d=r+n.replace(t,""),s=r.length;e.value=d,e.selectionStart=e.selectionEnd=s}(e,W);var a=t.dateAdapter.parse(e.value,l);(a||""===e.value)&&t.setValue(a)},this.processFocusedDayNode=function(e){t.focusedDayNode=e,t.activeFocus&&t.open&&setTimeout((function(){return e.focus()}),0)}}return e.prototype.connectedCallback=function(){this.createDateFormatters()},e.prototype.createDateFormatters=function(){this.dateFormatShort=new Intl.DateTimeFormat(this.localization.locale,{day:"numeric",month:"long"}),this.dateFormatLong=new Intl.DateTimeFormat(this.localization.locale,{day:"numeric",month:"long",year:"numeric"})},e.prototype.handleDocumentClick=function(e){var t=this;this.open&&(e.composedPath().every((function(e){return e!==t.dialogWrapperNode&&e!==t.datePickerButton}))&&this.hide(!1))},e.prototype.setFocus=function(){return r(this,void 0,void 0,(function(){return d(this,(function(e){return[2,this.datePickerInput.focus()]}))}))},e.prototype.show=function(){return r(this,void 0,void 0,(function(){var e=this;return d(this,(function(t){return this.open=!0,this.duetOpen.emit({component:"duet-date-picker"}),this.setFocusedDay(u(this.value)||new Date),clearTimeout(this.focusTimeoutId),this.focusTimeoutId=setTimeout((function(){return e.monthSelectNode.focus()}),300),[2]}))}))},e.prototype.hide=function(e){return void 0===e&&(e=!0),r(this,void 0,void 0,(function(){var t=this;return d(this,(function(a){return this.open=!1,this.duetClose.emit({component:"duet-date-picker"}),clearTimeout(this.focusTimeoutId),e&&setTimeout((function(){return t.datePickerButton.focus()}),500),[2]}))}))},e.prototype.addDays=function(e){this.setFocusedDay(b(this.focusedDay,e))},e.prototype.addMonths=function(e){this.setMonth(this.focusedDay.getMonth()+e)},e.prototype.addYears=function(e){this.setYear(this.focusedDay.getFullYear()+e)},e.prototype.startOfWeek=function(){this.setFocusedDay(f(this.focusedDay,this.firstDayOfWeek))},e.prototype.endOfWeek=function(){this.setFocusedDay(g(this.focusedDay,this.firstDayOfWeek))},e.prototype.setMonth=function(e){var t=m(v(this.focusedDay),e),a=y(t),o=m(this.focusedDay,e);this.setFocusedDay(w(o,t,a))},e.prototype.setYear=function(e){var t=_(v(this.focusedDay),e),a=y(t),o=_(this.focusedDay,e);this.setFocusedDay(w(o,t,a))},e.prototype.setFocusedDay=function(e){this.focusedDay=w(e,u(this.min),u(this.max))},e.prototype.setValue=function(e){this.value=c(e),this.duetChange.emit({component:"duet-date-picker",value:this.value,valueAsDate:e})},e.prototype.render=function(){var e=this,t=u(this.value),a=t&&this.dateAdapter.format(t),o=(t||this.focusedDay).getFullYear(),i=this.focusedDay.getMonth(),r=this.focusedDay.getFullYear(),d=u(this.min),s=u(this.max),l=null!=d&&d.getMonth()===i&&d.getFullYear()===r,c=null!=s&&s.getMonth()===i&&s.getFullYear()===r,h=d?d.getFullYear():o-10,p=s?s.getFullYear():o+10;return Object(n.g)(n.b,null,Object(n.g)("div",{class:"duet-date"},Object(n.g)(k,{dateFormatter:this.dateFormatLong,value:this.value,valueAsDate:t,formattedValue:a,onInput:this.handleInputChange,onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.toggleOpen,name:this.name,disabled:this.disabled,role:this.role,required:this.required,identifier:this.identifier,localization:this.localization,buttonRef:function(t){return e.datePickerButton=t},inputRef:function(t){return e.datePickerInput=t}}),Object(n.g)("div",{class:{"duet-date__dialog":!0,"is-left":"left"===this.direction,"is-active":this.open},role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-labelledby":this.dialogLabelId,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},Object(n.g)("div",{class:"duet-date__dialog-content",onKeyDown:this.handleEscKey,ref:function(t){return e.dialogWrapperNode=t}},Object(n.g)("div",{class:"duet-date__mobile",onFocusin:this.disableActiveFocus},Object(n.g)("label",{class:"duet-date__mobile-heading"},this.localization.calendarHeading),Object(n.g)("button",{class:"duet-date__close",ref:function(t){return e.firstFocusableElement=t},onKeyDown:this.handleFirstFocusableKeydown,onClick:function(){return e.hide()},type:"button"},Object(n.g)("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Object(n.g)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(n.g)("path",{d:"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})),Object(n.g)("span",{class:"duet-date__vhidden"},this.localization.closeLabel))),Object(n.g)("div",{class:"duet-date__header",onFocusin:this.disableActiveFocus},Object(n.g)("div",null,Object(n.g)("h2",{id:this.dialogLabelId,class:"duet-date__vhidden","aria-live":"polite","aria-atomic":"true"},this.localization.monthNames[i]," ",this.focusedDay.getFullYear()),Object(n.g)("label",{htmlFor:this.monthSelectId,class:"duet-date__vhidden"},this.localization.monthSelectLabel),Object(n.g)("div",{class:"duet-date__select"},Object(n.g)("select",{id:this.monthSelectId,class:"duet-date__select--month",ref:function(t){return e.monthSelectNode=t},onChange:this.handleMonthSelect},this.localization.monthNames.map((function(e,t){return Object(n.g)("option",{key:e,value:t,selected:t===i,disabled:!x(new Date(r,t,1),d?v(d):null,s?y(s):null)},e)}))),Object(n.g)("div",{class:"duet-date__select-label","aria-hidden":"true"},Object(n.g)("span",null,this.localization.monthNamesShort[i]),Object(n.g)("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Object(n.g)("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"})))),Object(n.g)("label",{htmlFor:this.yearSelectId,class:"duet-date__vhidden"},this.localization.yearSelectLabel),Object(n.g)("div",{class:"duet-date__select"},Object(n.g)("select",{id:this.yearSelectId,class:"duet-date__select--year",onChange:this.handleYearSelect},function(e,t){for(var a=[],o=e;o<=t;o++)a.push(o);return a}(h,p).map((function(e){return Object(n.g)("option",{key:e,selected:e===r},e)}))),Object(n.g)("div",{class:"duet-date__select-label","aria-hidden":"true"},Object(n.g)("span",null,this.focusedDay.getFullYear()),Object(n.g)("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Object(n.g)("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"}))))),Object(n.g)("div",{class:"duet-date__nav"},Object(n.g)("button",{class:"duet-date__prev",onClick:this.handlePreviousMonthClick,disabled:l,type:"button"},Object(n.g)("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24"},Object(n.g)("path",{d:"M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"})),Object(n.g)("span",{class:"duet-date__vhidden"},this.localization.prevMonthLabel)),Object(n.g)("button",{class:"duet-date__next",onClick:this.handleNextMonthClick,disabled:c,type:"button"},Object(n.g)("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24"},Object(n.g)("path",{d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})),Object(n.g)("span",{class:"duet-date__vhidden"},this.localization.nextMonthLabel)))),Object(n.g)(M,{dateFormatter:this.dateFormatShort,selectedDate:t,focusedDate:this.focusedDay,onDateSelect:this.handleDaySelect,onKeyboardNavigation:this.handleKeyboardNavigation,labelledById:this.dialogLabelId,localization:this.localization,firstDayOfWeek:this.firstDayOfWeek,focusedDayRef:this.processFocusedDayNode,min:d,max:s,isDateDisabled:this.isDateDisabled})))))},Object.defineProperty(e.prototype,"element",{get:function(){return Object(n.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{localization:["createDateFormatters"]}},enumerable:!1,configurable:!0}),e}();R.style='.duet-date *,.duet-date *::before,.duet-date *::after{box-sizing:border-box;margin:0;width:auto}.duet-date{box-sizing:border-box;color:var(--duet-color-text);display:block;font-family:var(--duet-font);margin:0;position:relative;text-align:left;width:100%}.duet-date__input{-webkit-appearance:none;appearance:none;background:var(--duet-color-surface);border:1px solid var(--duet-color-border, var(--duet-color-text));border-radius:var(--duet-radius);color:var(--duet-color-text);float:none;font-family:var(--duet-font);font-size:100%;line-height:normal;padding:14px 60px 14px 14px;width:100%}.duet-date__input:focus{border-color:var(--duet-color-primary);box-shadow:0 0 0 1px var(--duet-color-primary);outline:0}.duet-date__input::-webkit-input-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-moz-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-ms-input-placeholder{color:var(--duet-color-placeholder)}.duet-date__input-wrapper{position:relative;width:100%}.duet-date__toggle{-moz-appearance:none;-webkit-appearance:none;-webkit-user-select:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:0;border-bottom-right-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);box-shadow:inset 1px 0 0 rgba(0, 0, 0, 0.1);color:var(--duet-color-text);cursor:pointer;display:flex;height:calc(100% - 2px);justify-content:center;padding:0;position:absolute;right:1px;top:1px;user-select:none;width:48px;z-index:2}.duet-date__toggle:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__toggle-icon{display:flex;flex-basis:100%;justify-content:center;align-items:center}.duet-date__dialog{display:flex;left:0;min-width:320px;opacity:0;position:absolute;top:100%;transform:scale(0.96) translateZ(0) translateY(-20px);transform-origin:top right;transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease;visibility:hidden;width:100%;will-change:transform, opacity, visibility;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog{background:var(--duet-color-overlay);bottom:0;position:fixed;right:0;top:0;transform:translateZ(0);transform-origin:bottom center}}.duet-date__dialog.is-left{left:auto;right:0;width:auto}.duet-date__dialog.is-active{opacity:1;transform:scale(1.0001) translateZ(0) translateY(0);visibility:visible}.duet-date__dialog-content{background:var(--duet-color-surface);border:1px solid rgba(0, 0, 0, 0.1);border-radius:var(--duet-radius);box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-left:auto;margin-top:8px;max-width:310px;min-width:290px;padding:16px 16px 20px;position:relative;transform:none;width:100%;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog-content{border:0;border-radius:0;border-top-left-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);bottom:0;left:0;margin:0;max-width:none;min-height:26em;opacity:0;padding:0 8% 20px;position:absolute;transform:translateZ(0) translateY(100%);transition:transform 400ms ease, opacity 400ms ease, visibility 400ms ease;visibility:hidden;will-change:transform, opacity, visibility}.is-active .duet-date__dialog-content{opacity:1;transform:translateZ(0) translateY(0);visibility:visible}}.duet-date__table{border-collapse:collapse;border-spacing:0;color:var(--duet-color-text);font-size:1rem;font-weight:var(--duet-font-normal);line-height:1.25;text-align:center;width:100%}.duet-date__table-header{font-size:0.75rem;font-weight:var(--duet-font-bold);letter-spacing:1px;line-height:1.25;padding-bottom:8px;text-decoration:none;text-transform:uppercase}.duet-date__cell{text-align:center}.duet-date__day{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:transparent;border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-block;font-family:var(--duet-font);font-size:0.875rem;font-variant-numeric:tabular-nums;font-weight:var(--duet-font-normal);height:36px;line-height:1.25;padding:0 0 1px;position:relative;text-align:center;vertical-align:middle;width:36px;z-index:1}.duet-date__day.is-today{box-shadow:0 0 0 1px var(--duet-color-primary);position:relative;z-index:200}.duet-date__day:hover::before,.duet-date__day.is-today::before{background:var(--duet-color-primary);border-radius:50%;bottom:0;content:"";left:0;opacity:0.06;position:absolute;right:0;top:0}.duet-date__day[aria-pressed=true],.duet-date__day:focus{background:var(--duet-color-primary);box-shadow:none;color:var(--duet-color-text-active);outline:0}.duet-date__day:active{background:var(--duet-color-primary);box-shadow:0 0 5px var(--duet-color-primary);color:var(--duet-color-text-active);z-index:200}.duet-date__day:focus{box-shadow:0 0 5px var(--duet-color-primary);z-index:200}.duet-date__day:not(.is-month){box-shadow:none}.duet-date__day:not(.is-month),.duet-date__day[aria-disabled=true]{background:transparent;color:var(--duet-color-text);cursor:default;opacity:0.5}.duet-date__day[aria-disabled=true].is-today{box-shadow:0 0 0 1px var(--duet-color-primary)}.duet-date__day[aria-disabled=true].is-today:focus{box-shadow:0 0 5px var(--duet-color-primary);background:var(--duet-color-primary);color:var(--duet-color-text-active)}.duet-date__day[aria-disabled=true]:not(.is-today)::before{display:none}.duet-date__day.is-outside{background:var(--duet-color-button);box-shadow:none;color:var(--duet-color-text);cursor:default;opacity:0.6;pointer-events:none}.duet-date__day.is-outside::before{display:none}.duet-date__header{align-items:center;display:flex;justify-content:space-between;margin-bottom:16px;width:100%}.duet-date__nav{white-space:nowrap}.duet-date__prev,.duet-date__next{-moz-appearance:none;-webkit-appearance:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-flex;height:32px;justify-content:center;margin-left:8px;padding:0;transition:background-color 300ms ease;width:32px}@media (max-width: 35.9375em){.duet-date__prev,.duet-date__next{height:40px;width:40px}}.duet-date__prev:focus,.duet-date__next:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__prev:active:focus,.duet-date__next:active:focus{box-shadow:none}.duet-date__prev:disabled,.duet-date__next:disabled{cursor:default;opacity:0.5}.duet-date__prev svg,.duet-date__next svg{margin:0 auto}.duet-date__select{display:inline-flex;margin-top:4px;position:relative}.duet-date__select span{margin-right:4px}.duet-date__select select{cursor:pointer;font-size:1rem;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:2}.duet-date__select select:focus+.duet-date__select-label{box-shadow:0 0 0 2px var(--duet-color-primary)}.duet-date__select-label{align-items:center;border-radius:var(--duet-radius);color:var(--duet-color-text);display:flex;font-size:1.25rem;font-weight:var(--duet-font-bold);line-height:1.25;padding:0 4px 0 8px;pointer-events:none;position:relative;width:100%;z-index:1}.duet-date__select-label svg{width:16px;height:16px}.duet-date__mobile{align-items:center;border-bottom:1px solid rgba(0, 0, 0, 0.12);display:flex;justify-content:space-between;margin-bottom:20px;margin-left:-10%;overflow:hidden;padding:12px 20px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:120%}@media (min-width: 36em){.duet-date__mobile{border:0;margin:0;overflow:visible;padding:0;position:absolute;right:-8px;top:-8px;width:auto}}.duet-date__mobile-heading{display:inline-block;font-weight:var(--duet-font-bold);max-width:84%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 36em){.duet-date__mobile-heading{display:none}}.duet-date__close{-webkit-appearance:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:flex;height:24px;justify-content:center;padding:0;width:24px}@media (min-width: 36em){.duet-date__close{opacity:0}}.duet-date__close:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:none}@media (min-width: 36em){.duet-date__close:focus{opacity:1}}.duet-date__close svg{margin:0 auto}.duet-date__vhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}'}}]);