!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),o=r(2);Object(o.registerBlockType)("fremen/logo-showcase",{title:"Logo Showcase",icon:"images-alt",category:"layout",attributes:{images:{type:"array",source:"query",selector:"a",default:[],query:{class:{type:"string",source:"attribute",selector:"img",attribute:"class"},href:{type:"string",source:"attribute",attribute:"href"},src:{type:"string",source:"attribute",selector:"img",attribute:"src"}}}},edit:function(e){var t=e.attributes,r=e.setAttributes,o=t.images.map((function(e){return{id:e.class.match(/wp-image-(\d+)/)[1]}}));return Object(n.createElement)("div",{style:{border:"1px solid"}},Object(n.createElement)(c.MediaPlaceholder,{labels:{title:"Logo Showcase",instructions:'\n            Choose the logos you want to display in the Logo Showcase.\n            To link the logo to a website, put the link in the description prefixed with "//".\n            For example "//www.google.com".'},multiple:!0,value:o,onSelect:function(e){r({images:e.map((function(e){var t=e.id,r=e.url,n=e.description;return{class:"wp-image-".concat(t),href:n,src:r}}))})}}),Object(n.createElement)("div",{style:{padding:20,paddingTop:0}},Object(n.createElement)("h4",{style:{marginBototm:0,marginTop:0}},"Selected logos:"),t.images.map((function(e){return Object(n.createElement)("img",{class:e.class,src:e.src,style:{height:40,padding:5}})}))))},save:function(e){var t=e.attributes;return Object(n.createElement)("div",{class:"fls-wrapper"},Object(n.createElement)("div",{class:"fls-controls"},Object(n.createElement)("div",{class:"fls-controls-prev"}),Object(n.createElement)("div",{class:"fls-controls-next"})),Object(n.createElement)("div",{class:"fls-container"},t.images.map((function(e){var t=Object(n.createElement)("img",{class:e.class,src:e.src});return Object(n.createElement)("div",null,Object(n.createElement)("div",{class:"fls-image-wrapper"},e.href&&e.href.startsWith("//")?Object(n.createElement)("a",{href:e.href,target:"_blank"},t):t))}))))}})}]);