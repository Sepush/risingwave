(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{6165:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streaming_graph",function(){return e(87756)}])},87756:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return O}});var n=e(47568),i=e(34051),o=e.n(i),a=e(85893),l=e(66479),c=e(40639),u=e(47741),s=e(96486),f=e(9008),d=e.n(f),h=e(41664),p=e.n(h),x=e(11163),v=e(67294),y=e(41799),m=e(99534),g=e(53812),b=e(79855),w=e(14293);var j=100;function S(t){var r=t.nodes,e=t.selectedId,n=(0,v.useRef)(),i=(0,v.useCallback)((function(){var t=(0,w.rE)(r,50,200,10).map((function(t){var r=t.x,e=t.y,n=(0,m.Z)(t,["x","y"]);return(0,y.Z)({x:r+j,y:e+j},n)})),e=(0,w._P)(t),n=function(t,r){var e=0,n=0,i=!0,o=!1,a=void 0;try{for(var l,c=t[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var u=l.value,s=u.x,f=u.y;u.data,e=Math.max(e,s+r),n=Math.max(n,f+r)}}catch(d){o=!0,a=d}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{width:e,height:n}}(t,10);return{layoutMap:t,links:e,width:n.width+200+200,height:n.height+50+200}}),[r]),o=i(),l=o.layoutMap,c=o.width,u=o.height,s=o.links;return(0,v.useEffect)((function(){var t=n.current,r=b.Ys(t),i=b.ak_,o=b.jvg().curve(i).x((function(t){return t.x})).y((function(t){return t.y})),a=r.select(".edges").selectAll(".edge").data(s),c=function(t){return t===e},u=function(t){return t.attr("d",(function(t){var r=t.points;return o(r)})).attr("fill","none").attr("stroke-width",1).attr("stroke-width",(function(t){return c(t.source)||c(t.target)?2:1})).attr("opacity",(function(t){return c(t.source)||c(t.target)?1:.5})).attr("stroke",(function(t){return c(t.source)||c(t.target)?g.rS.colors.teal[500]:g.rS.colors.gray[300]}))};a.exit().remove(),a.enter().call((function(t){return t.append("path").attr("class","edge").call(u)})),a.call(u);var f=function(t){t.attr("transform",(function(t){var r=t.x,e=t.y;return"translate(".concat(r,",").concat(e,")")}));var r=t.select("circle");r.empty()&&(r=t.append("circle")),r.attr("r",10).style("cursor","pointer").attr("fill",(function(t){var r=t.id;return c(r)?g.rS.colors.teal[500]:g.rS.colors.gray[500]}));var e=t.select("text");return e.empty()&&(e=t.append("text")),e.attr("fill","black").text((function(t){return t.data.name})).attr("font-family","inherit").attr("text-anchor","middle").attr("dy",20).attr("fill","black").attr("font-size",12).attr("transform","rotate(-8)"),t},d=r.select(".boxes").selectAll(".node").data(l);d.enter().call((function(t){return t.append("g").attr("class","node").call(f)})),d.call(f),d.exit().remove()}),[l,s,e]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("svg",{ref:n,width:"".concat(c,"px"),height:"".concat(u,"px"),children:[(0,a.jsx)("g",{className:"edges"}),(0,a.jsx)("g",{className:"boxes"})]})})}var k=e(5330),_=e(16640);function O(){var t=(0,l.pm)(),r=(0,v.useState)(),e=r[0],i=r[1];(0,v.useEffect)((function(){function r(){return(r=(0,n.Z)(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.t0=i,r.next=4,(0,_.H4)();case 4:r.t1=r.sent,(0,r.t0)(r.t1),r.next=12;break;case 8:r.prev=8,r.t2=r.catch(0),t({title:"Error Occurred",description:r.t2.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(r.t2);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){}}),[t]);var f=(0,v.useCallback)((function(){return e?function(t){var r=[],e=new Set(t.map((function(t){return t.id}))),n=!0,i=!1,o=void 0;try{for(var a,l=(0,s.reverse)((0,s.sortBy)(t,"id"))[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var c=a.value;r.push({id:c.id.toString(),name:c.name,parentIds:(0,_.vx)(c)?c.dependentRelations.filter((function(t){return e.has(t)})).map((function(t){return t.toString()})):[],order:c.id})}}catch(u){i=!0,o=u}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r}(e):void 0}),[e])(),h=(0,x.useRouter)(),y=(0,a.jsxs)(c.kC,{p:3,height:"calc(100vh - 20px)",flexDirection:"column",children:[(0,a.jsx)(k.Z,{children:"Streaming Graph"}),(0,a.jsxs)(c.kC,{flexDirection:"row",height:"full",children:[(0,a.jsxs)(c.kC,{width:"200px",height:"full",maxHeight:"full",mr:3,alignItems:"flex-start",flexDirection:"column",children:[(0,a.jsx)(c.xv,{fontWeight:"semibold",mb:3,children:"All Nodes"}),(0,a.jsx)(c.xu,{flex:1,overflowY:"scroll",children:(0,a.jsx)(c.gC,{width:"full",spacing:1,children:null===e||void 0===e?void 0:e.map((function(t){var r=h.query.id===t.id.toString();return(0,a.jsx)(p(),{href:"?id=".concat(t.id),children:(0,a.jsx)(u.zx,{colorScheme:r?"teal":"gray",color:r?"teal.600":"gray.500",variant:r?"outline":"ghost",width:"full",py:0,height:8,justifyContent:"flex-start",children:t.name})},t.id)}))})})]}),(0,a.jsxs)(c.xu,{flex:1,height:"full",ml:3,overflowX:"scroll",overflowY:"scroll",children:[(0,a.jsx)(c.xv,{fontWeight:"semibold",children:"Graph"}),f&&(0,a.jsx)(S,{nodes:f,selectedId:h.query.id})]})]})]});return(0,a.jsxs)(v.Fragment,{children:[(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"Streaming Graph"})}),y]})}},20943:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,{Z:function(){return n}})},13375:function(t,r,e){"use strict";function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e.d(r,{Z:function(){return n}})},99534:function(t,r,e){"use strict";function n(t,r){if(null==t)return{};var e,n,i=function(t,r){if(null==t)return{};var e,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],r.indexOf(e)>=0||(i[e]=t[e]);return i}(t,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}e.d(r,{Z:function(){return n}})},828:function(t,r,e){"use strict";e.d(r,{Z:function(){return o}});var n=e(13375);var i=e(91566);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||(0,n.Z)(t,r)||(0,i.Z)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(t,r,e){"use strict";e.d(r,{Z:function(){return i}});var n=e(20943);function i(t,r){if(t){if("string"===typeof t)return(0,n.Z)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.Z)(t,r):void 0}}}},function(t){t.O(0,[662,482,591,855,836,640,293,774,888,179],(function(){return r=6165,t(t.s=r);var r}));var r=t.O();_N_E=r}]);