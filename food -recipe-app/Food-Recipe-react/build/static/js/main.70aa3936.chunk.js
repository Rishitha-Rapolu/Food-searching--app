(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=a(3),o=a.n(l),u=a(14),s=a(2),m=a(15),p=a.n(m),f=(a(40),a(42)),b=function(e){return e.ingredients.map((function(e){return r.a.createElement("ul",{key:Object(f.a)(),className:"ingredient-list"},r.a.createElement("li",{className:"ingredient-text"},e.text),r.a.createElement("li",{className:"ingredient-weight"},"weight-",e.weight))}))},d=function(e){var t=e.recipe.recipe,a=t.label,c=t.image,i=t.url,l=t.ingredients,o=Object(n.useState)(!1),u=Object(s.a)(o,2),m=u[0],p=u[1];return r.a.createElement("div",{className:"recipe"},r.a.createElement("h2",null,a),r.a.createElement("img",{src:c,alt:a}),r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"URL"),r.a.createElement("button",{onClick:function(){p(!m)}},"Ingredients"),m&&r.a.createElement(b,{ingredients:l}))},h=function(e){var t=e.alert;return r.a.createElement("div",{className:"alert"},r.a.createElement("h3",null,t))};document.title="food recipe";var E=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),l=Object(s.a)(i,2),m=l[0],b=l[1],E=Object(n.useState)(""),g=Object(s.a)(E,2),v=g[0],j=g[1],k="https://api.edamam.com/search?q=".concat(a,"&app_id=").concat("26652b7f","&app_key=").concat("3a09f6b5f4754784592b5c40f1f147ef"),O=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a){e.next=12;break}return e.next=3,p.a.get(k);case 3:if((t=e.sent).data.more){e.next=6;break}return e.abrupt("return",j("No Food With Such Name"));case 6:b(t.data.hits),console.log(t),c(""),j(""),e.next=13;break;case 12:j("Please Fill the Form");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Food Searching App"),r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),O()}},""!==v&&r.a.createElement(h,{alert:v}),r.a.createElement("input",{type:"text",placeholder:"Search Food",value:a,autoComplete:"off",onChange:function(e){c(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"search"})),r.a.createElement("div",{className:"recipes"},m!==[]&&m.map((function(e){return r.a.createElement(d,{key:Object(f.a)(),recipe:e})}))))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.70aa3936.chunk.js.map