(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e){e.exports=[{name:"American Red Cross",info:"The American Red Cross, also known as The American National Red Cross, is a humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education in the United States.",image:"./img/americanredcross.jpg",website:"https://www.redcross.org/"},{name:"International Rescue Committee",info:"The International Rescue Committee is a global humanitarian aid, relief, and development nongovernmental organization.",image:"./img/1200px-International_Rescue_Committee_Logo.svg.png",website:"https://www.rescue.org/"},{name:"Direct Relief",info:"Direct Relief is a nonprofit, nonpartisan organization with a stated mission to \u201cimprove the health and lives of people affected by poverty or emergency situations by mobilizing and providing essential medical resources needed for their care.",image:"./img/Direct-Relief-Square.png",website:"https://www.directrelief.org/"},{name:"World Relief",info:"World Relief is an international nonprofit organization aiming to help vulnerable people",image:"./img/0.png",website:"https://worldrelief.org/"},{name:"Americares",info:"Americares is a global non-profit organization focused on health and development that respond to individuals affected by poverty, disaster, or crisis.",image:"./img/15395657_640x640.jpg",website:"https://www.americares.org/"},{name:"United Nations Office for Disaster Risk Reduction (UNDRR)",info:"As the United Nations Office for Disaster Risk Reduction, UNDRR brings governments, partners and communities together reduce disaster risk and losses to ensure a safer, sustainable future.",image:"./img/banner-logo-nuevo-english.png",website:"https://www.undrr.org/"},{name:"Care International",info:"Care International is a major international humanitarian agency delivering emergency relief and long-term international development projects. ",image:"./img/unnamed.jpg",website:"https://www.care-international.org/"},{name:"Mercy Corps",info:"Mercy Corps is a global non-governmental, humanitarian aid organization operating in transitional contexts that have undergone, or have been undergoing, various forms of economic, environmental, social and political instabilities.",image:"./img/220px-Mercy_Corps_Logo-e1551237651171.png",website:"https://www.mercycorps.org/"},{name:"Catholic Relief Services",info:"Catholic Relief Services is the international humanitarian agency of the Catholic community in the United States.",image:"./img/download.png",website:"https://www.crs.org/"},{name:"All Hands and Hearts \u2013 Smart Response",info:"All Hands And Hearts is a volunteer-powered disaster relief organization that addresses the immediate and long-term needs of communities impacted by natural disasters.",image:"./img/220px-All_Hands_And_Hearts_-_Smart_Response_new_logo_(2018).png",website:"https://www.allhandsandhearts.org/"}]},55:function(e,t,r){e.exports=r(92)},60:function(e,t,r){},92:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(49),i=r.n(o),c=(r(60),r(93)),s=r(94),l=r(95),u=r(96),f=r(97);function h(){return a.a.createElement(c.a,{color:"white",light:!0,expand:"md"},a.a.createElement("div",{className:"container"},a.a.createElement("img",{id:"projectLogo",src:"./img/proj_logo.png",alt:"logo with red connection"}),a.a.createElement(s.a,{to:"/"},"Disaster Live"),a.a.createElement(l.a,{className:"ml-auto",navbar:!0},a.a.createElement(u.a,null,a.a.createElement(f.a,{to:"/about"},"About")),a.a.createElement(u.a,null,a.a.createElement(f.a,{to:"/donate"},"Donate")))))}var p=r(21),d=r(22),m=r(25),g=r(23),v=r(26),y=r(98),w=r(99),b=r(100),E=r(101),j=r(102),x=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.organization;return a.a.createElement("a",{target:"_blank",href:e.website,rel:"noopener noreferrer"},a.a.createElement(y.a,{id:e.name,className:"org-card","aria-label":e.name+" card: click to visit their website"},a.a.createElement(w.a,{src:e.image,alt:e.name+" Logo"}),a.a.createElement(b.a,null,a.a.createElement(E.a,null,e.name),a.a.createElement(j.a,null,e.info))))}}]),t}(a.a.Component),O=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.organizations.map(function(e){return a.a.createElement(x,{key:e.name,organization:e})});return a.a.createElement("div",{id:"organization-list",className:"container","aria-label":"list of organizations for donation"},e)}}]),t}(a.a.Component),L=r(50),_=r(27),k=r(12),N=r(103),S=r(104),C=r(106),A=r(105),T=r(20),R=r(51),z=r.n(R);function D(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(e){var t,r=e.disasters,o=Object(n.useState)(0),i=Object(k.a)(o,2),c=i[0],s=i[1],l=[],u=D(r);try{var f=function(){var e=t.value;e.disasters.forEach(function(t){l.push(a.a.createElement(I,{key:t.id,country:e.country,disaster:t}))})};for(u.s();!(t=u.n()).done;)f()}catch(g){u.e(g)}finally{u.f()}var h=l.length/4,p=4*c,d=p+4,m=[];return m=r.length>4?l.slice(p,d):l,a.a.createElement("div",{className:"card-list-container"},a.a.createElement("div",{id:"card-container"},m),a.a.createElement(z.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:h,marginPagesDisplayed:1,pageRangeDisplayed:1,forcePage:c,onPageChange:function(e){s(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",initialPage:c}))}function I(e){var t=e.country,r=e.disaster;return a.a.createElement(T.b,{to:"/articles/"+t+"-"+r.disasterType+"-"+r.id},a.a.createElement("div",{className:"card","aria-label":r.disasterType+"in"+t},a.a.createElement("h1",null,r.disasterType),a.a.createElement("h2",null,t)))}var F=r(18),W=function(e){var t=e.countries,r=Object(n.useState)([]),o=Object(k.a)(r,2),i=o[0],c=o[1];return Object(n.useEffect)(function(){var e;e=t.map(function(e){var t=e.toLowerCase();return"republic of congo"===t?"republic of the congo":"dr congo"===t?"democratic republic of the congo":t}),c(e)},[t]),a.a.createElement(F.ComposableMap,{projectionConfig:{rotate:[-10,0,0],scale:147}},a.a.createElement(F.Sphere,{stroke:"#E4E5E6",strokeWidth:.5}),a.a.createElement(F.Graticule,{stroke:"#E4E5E6",strokeWidth:.5}),a.a.createElement(F.Geographies,{geography:"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"},function(e){return e.geographies.map(function(e){var t=i.includes(e.properties.name.toLowerCase());return a.a.createElement(F.Geography,{key:e.rsmKey,geography:e,stroke:"#FFF",fill:t?"#ff6961":"#D6D6DA"})})}))};function U(){U=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(N){s=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var f={};function h(){}function p(){}function d(){}var m={};s(m,o,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(_([])));v&&v!==t&&r.call(v,o)&&(m=v);var y=d.prototype=h.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,c)})}c(s.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function j(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),s(y,c,"Generator"),s(y,o,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var H="https://api.reliefweb.int/v1/disasters?appname=project2&limit=1000&filter[field]=status&filter[value]=current";function M(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)([]),c=Object(k.a)(i,2),s=c[0],l=c[1],u=Object(n.useState)([]),f=Object(k.a)(u,2),h=f[0],p=f[1],d=Object(n.useState)(!1),m=Object(k.a)(d,2),g=m[0],v=m[1],y=Object(n.useState)("World"),w=Object(k.a)(y,2),b=w[0],E=w[1];Object(n.useEffect)(function(){(function(){var e=Object(_.a)(U().mark(function e(){var t,r;return U().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,r=t.map(function(e){return e.country}),p(r),o(t),l(t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var j=h.map(function(e){return a.a.createElement(N.a,{key:e,onClick:function(e){var t=r.filter(function(t){return t.country===e.target.textContent});l(t),E(e.target.textContent)}},e)});return a.a.createElement("div",{className:"container center"},a.a.createElement(W,{countries:h}),a.a.createElement(S.a,{isOpen:g,toggle:function(){return v(function(e){return!e})}},a.a.createElement(C.a,{caret:!0},b),a.a.createElement(A.a,null,a.a.createElement(N.a,{onClick:function(){l(r),E("World")}},"World"),j)),a.a.createElement(P,{disasters:s}))}function Y(){return fetch(H).then(function(e){return e.json()}).then(function(e){var t=[];return e.data.forEach(function(e){var r=e.fields.name,n=e.id,a=r.indexOf(":"),o=r.indexOf("-");if(-1!==a){var i=r.substring(0,a),c=i.indexOf("/"),s=r.substring(a+2,o-1);if(-1===c)if(0===t.length)t.push({country:i,disasters:[{disasterType:s,id:n}]});else{var l=!0;t.forEach(function(e){e.country===i&&(e.disasters.push({disasterType:s,id:n}),l=!1)}),l&&t.push({country:i,disasters:[{disasterType:s,id:n}]})}else i.split("/").forEach(function(e){if(0===t.length)t.push({country:e,disasters:[{disasterType:s,id:n}]});else{var r=!0;t.forEach(function(t){t.country===e&&(t.disasters.push({disasterType:s,id:n}),r=!1)}),r&&t.push({country:e,disasters:[{disasterType:s,id:n}]})}})}}),t}).catch(function(e){return console.log(e)})}function K(){K=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(N){s=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var f={};function h(){}function p(){}function d(){}var m={};s(m,o,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(_([])));v&&v!==t&&r.call(v,o)&&(m=v);var y=d.prototype=h.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,c)})}c(s.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function j(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),s(y,c,"Generator"),s(y,o,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function J(e){var t=e.match.params.data,r=t.substring(0,t.indexOf("-")),o=(t=t.substring(t.indexOf("-")+1,t.length)).substring(0,t.indexOf("-")),i=t=t.substring(t.indexOf("-")+1,t.length),c=Object(n.useState)([]),s=Object(k.a)(c,2),l=s[0],u=s[1];return Object(n.useEffect)(function(){(function(){var e=Object(_.a)(K().mark(function e(){var t;return K().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(i);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()}),a.a.createElement("div",{id:"disaster-details",className:"container"},a.a.createElement("h1",null,o),a.a.createElement("h3",null,r),a.a.createElement("section",{dangerouslySetInnerHTML:{__html:l}}))}function B(e){var t=fetch("https://api.reliefweb.int/v1/disasters/"+e).then(function(e){return e.json()}).then(function(e){return t=e.data[0].fields.profile["overview-html"]}).catch(function(e){return console.log(e)});return t}var X=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container containerText"},a.a.createElement("section",null,a.a.createElement("h1",null,"About"),a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{className:"map-img",src:"./img/simple_map.png",alt:"world map with red dots"})),a.a.createElement("p",null,"Disaster Live is a web application designed by University of Washington students to inform users of world disasters. We created this project as a source of information for users who currently reside in disaster-struck areas or for those travellers planning ahead."),a.a.createElement("p",null,"The Disaster Live webpage contains information on ongoing worldwide disaster, disaster-related news, and global disaster relief organizations. Users may find relevant and current information by using the drop-down menus on the main landing page."),a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{className:"donation-webpage",src:"./img/donationpage.png",alt:"donation webpage"})),a.a.createElement("p",null,'For those who wish to support the organizations listed, the user simply needs to click the "donate" menu from the landing page. From there, the UI will guide them as they select which organization they wish to support. With the simplicity and user-friendly interface of Disaster Live, users have an all-in-one solution for researching and supporting their favorite organizations.'),a.a.createElement("h1",null,"About Team"),a.a.createElement("p",null,"Eric Kim, Jisu Kim, Sharon Lin, and Xi Yan")))}}]),t}(a.a.Component),$=r(5);function q(){return a.a.createElement("footer",null,a.a.createElement("p",null,"\xa9 2020 Eric Kim, Sharon Lin, Jisu Kim, Xi Yan"),a.a.createElement("p",null,"Disaster API: https://reliefweb.int/help/api"),a.a.createElement("p",null,"Organization Details from Wikipedia"))}var Q=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null),a.a.createElement($.c,null,a.a.createElement($.a,{exact:!0,path:"/",component:M}),a.a.createElement($.a,{path:"/articles/:data",component:J}),a.a.createElement($.a,{path:"/donate"},a.a.createElement(O,{organizations:L})),a.a.createElement($.a,{path:"/about",component:X})),a.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(88);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T.a,{basename:"/"},a.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[55,2,1]]]);
//# sourceMappingURL=main.79c96bd9.chunk.js.map