"use strict";(self.webpackChunkcineverse=self.webpackChunkcineverse||[]).push([[842],{247:(e,s,a)=>{a.d(s,{Z:()=>r});a(791);var i=a(87),t=a(184);const r=e=>{let{movie:s}=e;return(0,t.jsx)("div",{children:(0,t.jsx)(i.OL,{to:"/details/".concat(null===s||void 0===s?void 0:s.id),style:{textDecoration:"none",color:"white"},children:(0,t.jsx)("div",{className:"cards",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{className:"cards__img",src:"https://image.tmdb.org/t/p/original".concat(s&&s.poster_path?s.poster_path:""),alt:"media image"}),(0,t.jsxs)("div",{className:"cards__overlay",children:[(0,t.jsx)("div",{className:"card__title",children:s?s.original_title:""}),(0,t.jsxs)("div",{className:"card__runtime",children:[s?s.release_date:"",(0,t.jsxs)("span",{className:"card__rating",children:["\u2b50",s?s.vote_average:""]})]}),(0,t.jsx)("div",{className:"card__description",children:s?s.overview.slice(0,118)+"...":""})]})]})})})})}},842:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var i=a(791),t=a(247),r=a(294),c=(a(955),a(184));const d=()=>{const[e,s]=(0,i.useState)([]);return(0,i.useEffect)((()=>{r.Z.get("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63").then((e=>{s(e.data.results)})).catch((e=>{console.error("Error fetching top rated movies:",e)}))}),[]),(0,c.jsxs)("div",{className:"media__list",children:[(0,c.jsx)("h2",{className:"list__title",children:"Top rated"}),(0,c.jsx)("div",{className:"list__cards",children:e.map((e=>(0,c.jsx)(t.Z,{movie:e},e.id)))})]})}},955:()=>{}}]);
//# sourceMappingURL=842.ee544dec.chunk.js.map