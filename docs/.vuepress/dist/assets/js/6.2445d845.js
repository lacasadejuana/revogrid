(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{317:function(t,e,a){},325:function(t,e,a){},347:function(t,e,a){"use strict";a(317)},357:function(t,e,a){"use strict";a(325)},377:function(t,e,a){"use strict";var i=a(315),n=a(345),s={name:"Home",components:{NavLink:i.a,GithubButton:n.a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},o=(a(347),a(44)),l=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-body"},[e("section",{staticClass:"hero-section"},[e("div",{staticClass:"container-fluid",staticStyle:{"max-width":"98vw"}},[e("div",{staticClass:"row"},[e("demo-page")],1)])])])}),[],!1,null,"14c86c95",null);e.a=l.exports},378:function(t,e,a){"use strict";a(313);var i=a(348),n=a(376),s=a(381),o=a(340);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var r={name:"Navbar",components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:n.a,AlgoliaSearchBox:i.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},c=(a(357),a(44)),u=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar header"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=u.exports}}]);