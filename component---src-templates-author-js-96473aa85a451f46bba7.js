(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7R6r":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("pJf4");var s=a("q1tI"),r=a.n(s),n=a("TJpk"),l=a.n(n),o=a("7oih"),i=a("lZQB");t.default=function(e){var t=e.data,a=t.wordpressWpUsers,s=a.authored_wordpress__POST,n=a.name,c=s&&s.length||0,m=t.site.siteMetadata.title,p=c+" post"+(1===c?"":"s")+" by "+n,u=s.map((function(e){return{node:e}}));return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:n+" - "+m}),r.a.createElement(i.a,{posts:u,title:p}))};var c="2070313414"},lZQB:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("sC2a"),a("pJf4");var s=a("q1tI"),r=a.n(s),n=a("Wbzz"),l=a("NF+W");var o=function(e){var t,a;function s(){return e.apply(this,arguments)||this}return a=e,(t=s).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,s.prototype.render=function(){var e=this.props,t=e.posts,a=e.path,s=e.title;return r.a.createElement("section",{className:"section"},"/"!==a&&void 0!==s&&r.a.createElement("p",{className:"post-list__section-title"},s),r.a.createElement("div",{className:"post-list"},t.map((function(e){var t=e.node,a=new Date(t.dateObject),s="/"+Object(l.getPathFromDate)(a)+"/"+decodeURIComponent(t.slug)+"/",o="/img/mobalab-logo.jpg",i=0;try{o=t.featured_media.media_details.sizes.medium.source_url;var c=t.featured_media.media_details.sizes.medium,m=c.height;i=c.width/m}catch(u){}var p={backgroundImage:"url("+o+")",backgroundSize:i>2?"contain":"cover"};return r.a.createElement("div",{className:"post-list__item-wrapper"},r.a.createElement(n.a,{className:"post-list__item",key:t.id,to:s},r.a.createElement("div",{className:"post-list__thumbnail",style:p}),r.a.createElement("div",{className:"post-list__main-area"},r.a.createElement("h4",{className:"post-list__title"},t.title),r.a.createElement("p",{className:"post-list__small"},t.date),r.a.createElement("p",{className:"post-list__small"},"posted by"," ",r.a.createElement(n.a,{to:"/author/"+t.author.slug},t.author.name)),r.a.createElement("div",{className:"post-list__excerpt",dangerouslySetInnerHTML:{__html:t.excerpt.replace(/<p class="link-more.*/,"").replace("[&hellip;]","...")}}),r.a.createElement("div",{className:"post-list__button-area"},r.a.createElement(n.a,{className:"button button--small",to:s},"続きを読む →")))))}))))},s}(r.a.Component)}}]);
//# sourceMappingURL=component---src-templates-author-js-96473aa85a451f46bba7.js.map