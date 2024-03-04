"use strict";(self.webpackChunkmas_doc=self.webpackChunkmas_doc||[]).push([[145],{4890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var l=t(4848),a=t(8453);const r={sidebar_position:3},s="Wallet Category",i={id:"wallet-management/wallet-category",title:"Wallet Category",description:"Get Wallet Category list",source:"@site/docs/wallet-management/wallet-category.md",sourceDirName:"wallet-management",slug:"/wallet-management/wallet-category",permalink:"/masverse-portal-docs/wallet-management/wallet-category",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Wallet",permalink:"/masverse-portal-docs/wallet-management/wallet"},next:{title:"Entity",permalink:"/masverse-portal-docs/wallet-management/wallet-entity"}},c={},d=[{value:"Get Wallet Category list",id:"get-wallet-category-list",level:2},{value:"HEADERS",id:"headers",level:4},{value:"Get Wallet Category by ID",id:"get-wallet-category-by-id",level:2},{value:"HEADERS",id:"headers-1",level:4},{value:"Create Wallet Category",id:"create-wallet-category",level:2},{value:"HEADERS",id:"headers-2",level:4},{value:"BODY",id:"body",level:4},{value:"Update Wallet Category by ID",id:"update-wallet-category-by-id",level:2},{value:"HEADERS",id:"headers-3",level:4},{value:"BODY",id:"body-1",level:4},{value:"Activate Wallet Category by ID",id:"activate-wallet-category-by-id",level:2},{value:"HEADERS",id:"headers-4",level:4},{value:"Deactivate Wallet Category by ID",id:"deactivate-wallet-category-by-id",level:2},{value:"HEADERS",id:"headers-5",level:4},{value:"Delete Wallet Category by ID",id:"delete-wallet-category-by-id",level:2},{value:"HEADERS",id:"headers-6",level:4}];function o(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"wallet-category",children:"Wallet Category"}),"\n",(0,l.jsx)(n.h2,{id:"get-wallet-category-list",children:"Get Wallet Category list"}),"\n",(0,l.jsx)(n.p,{children:"Retrieves all wallet category records for an organization from the database."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"GET"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{{base_url}}/walletcategory\n"})}),"\n",(0,l.jsx)(n.h4,{id:"headers",children:"HEADERS"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": [\n        {\n            "id": 1,\n            "organisation_id": 1,\n            "name": "Johnathan 456",\n            "subcategory_id": null,\n            "is_active": 1,\n            "created_at": "2024-03-01T03:36:37.000000Z",\n            "updated_at": "2024-03-01T03:36:37.000000Z",\n            "deleted_at": null\n        }\n    ]\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"get-wallet-category-by-id",children:"Get Wallet Category by ID"}),"\n",(0,l.jsx)(n.p,{children:"Retrieves a specific wallet category record by its ID from the database."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"GET"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{{base_url}}/walletcategory/{id}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"headers-1",children:"HEADERS"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "id": 1,\n        "organisation_id": 1,\n        "name": "Johnathan 456",\n        "subcategory_id": null,\n        "is_active": 1,\n        "created_at": "2024-03-01T03:36:37.000000Z",\n        "updated_at": "2024-03-01T03:36:37.000000Z",\n        "deleted_at": null\n    }\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"create-wallet-category",children:"Create Wallet Category"}),"\n",(0,l.jsx)(n.p,{children:"Creates an wallet category by organisation id and storing it in MasChain."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"POST"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{{base_url}}/walletcategory\n"})}),"\n",(0,l.jsx)(n.h4,{id:"headers-2",children:"HEADERS"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsx)(n.h4,{id:"body",children:"BODY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "name":"test 456",\n    "subcategory_id":"1"\n}\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "organisation_id": 1,\n        "name": "test 456",\n        "subcategory_id": 1,\n        "updated_at": "2024-03-01T03:36:41.000000Z",\n        "created_at": "2024-03-01T03:36:41.000000Z",\n        "id": 3\n    }\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"update-wallet-category-by-id",children:"Update Wallet Category by ID"}),"\n",(0,l.jsx)(n.p,{children:"Update wallet category by id and store to db."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{{base_url}}/walletcategory/{id}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"headers-3",children:"HEADERS"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsx)(n.h4,{id:"body-1",children:"BODY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "name":"test",\n    "subcategory_id":"1"\n}\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "organisation_id": 1,\n        "name": "test",\n        "subcategory_id": 1,\n        "updated_at": "2024-03-01T03:36:41.000000Z",\n        "created_at": "2024-03-01T03:36:41.000000Z",\n        "id": 3\n    }\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"activate-wallet-category-by-id",children:"Activate Wallet Category by ID"}),"\n",(0,l.jsx)(n.p,{children:"Activate wallet category by id."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{{base_url}}/walletcategory/{id}/activate\n"})}),"\n",(0,l.jsx)(n.h4,{id:"headers-4",children:"HEADERS"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "id": 1,\n        "organisation_id": 1,\n        "name": "test",\n        "subcategory_id": 3,\n        "is_active": 1,\n        "created_at": "2024-03-01T03:36:37.000000Z",\n        "updated_at": "2024-03-01T03:38:07.000000Z",\n        "deleted_at": null\n    }\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"deactivate-wallet-category-by-id",children:"Deactivate Wallet Category by ID"}),"\n",(0,l.jsx)(n.p,{children:"Deactivate wallet category by id."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{{base_url}}/walletcategory/{id}/deactivate\n"})}),"\n",(0,l.jsx)(n.h4,{id:"headers-5",children:"HEADERS"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "id": 1,\n        "organisation_id": 1,\n        "name": "test",\n        "subcategory_id": 3,\n        "is_active": 0,\n        "created_at": "2024-03-01T03:36:37.000000Z",\n        "updated_at": "2024-03-01T03:38:07.000000Z",\n        "deleted_at": null\n    }\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"delete-wallet-category-by-id",children:"Delete Wallet Category by ID"}),"\n",(0,l.jsx)(n.p,{children:"Delete wallet category by id."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"DELETE"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{{base_url}}/walletcategory/{id}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"headers-6",children:"HEADERS"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": "Success"\n}\n'})}),"\n",(0,l.jsx)("br",{})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var l=t(6540);const a={},r=l.createContext(a);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);