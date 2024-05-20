"use strict";(self.webpackChunkmas_doc=self.webpackChunkmas_doc||[]).push([[190],{313:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(4848),s=t(8453);const i={sidebar_position:4},a="Audit Category",d={id:"services/audit-trail/audit-category",title:"Audit Category",description:"Get Category list",source:"@site/docs/services/audit-trail/audit-category.md",sourceDirName:"services/audit-trail",slug:"/services/audit-trail/audit-category",permalink:"/services/audit-trail/audit-category",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Audit Trail",permalink:"/services/audit-trail/"},next:{title:"Audit Tags",permalink:"/services/audit-trail/audit-tags"}},c={},l=[{value:"Get Category list",id:"get-category-list",level:2},{value:"HEADERS",id:"headers",level:4},{value:"Get Category by ID",id:"get-category-by-id",level:2},{value:"HEADERS",id:"headers-1",level:4},{value:"Create Category",id:"create-category",level:2},{value:"HEADERS",id:"headers-2",level:4},{value:"BODY",id:"body",level:4},{value:"Update Category",id:"update-category",level:2},{value:"HEADERS",id:"headers-3",level:4},{value:"BODY",id:"body-1",level:4},{value:"Activate Category",id:"activate-category",level:2},{value:"HEADERS",id:"headers-4",level:4},{value:"Deactivate Category",id:"deactivate-category",level:2},{value:"HEADERS",id:"headers-5",level:4},{value:"Delete Category",id:"delete-category",level:2},{value:"HEADERS",id:"headers-6",level:4}];function o(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"audit-category",children:"Audit Category"}),"\n",(0,r.jsx)(n.h2,{id:"get-category-list",children:"Get Category list"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all category records for an organization from the database."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"GET"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"API_URL/api/audit/category\n"})}),"\n",(0,r.jsx)(n.h4,{id:"headers",children:"HEADERS"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": [\r\n        {\r\n            "id": 1,\r\n            "organisation_id": 1,\r\n            "name": "test Izz",\r\n            "is_active": 1,\r\n            "created_at": "2024-03-01T06:54:15.000000Z",\r\n            "updated_at": "2024-03-01T06:54:15.000000Z",\r\n            "deleted_at": null\r\n        },\r\n        {\r\n            "id": 2,\r\n            "organisation_id": 1,\r\n            "name": "test Izz",\r\n            "is_active": 1,\r\n            "created_at": "2024-03-01T06:54:28.000000Z",\r\n            "updated_at": "2024-03-01T06:54:28.000000Z",\r\n            "deleted_at": null\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"get-category-by-id",children:"Get Category by ID"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves a specific organisation category record by its ID from the database."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"GET"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"API_URL/api/audit/category/{id}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"headers-1",children:"HEADERS"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": {\r\n        "id": 1,\r\n        "organisation_id": 1,\r\n        "name": "test Izz",\r\n        "is_active": 1,\r\n        "created_at": "2024-03-01T06:54:15.000000Z",\r\n        "updated_at": "2024-03-01T06:54:15.000000Z",\r\n        "deleted_at": null\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"create-category",children:"Create Category"}),"\n",(0,r.jsx)(n.p,{children:"Creates a category by organisation id and storing it in MasChain."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"POST"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"API_URL/api/audit/category\n"})}),"\n",(0,r.jsx)(n.h4,{id:"headers-2",children:"HEADERS"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"content-type \u2003 application/json"})}),"\n",(0,r.jsx)(n.h4,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"name"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample request"',children:'{\r\n          "name":"test Izz"\r\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": {\r\n        "organisation_id": 1,\r\n        "name": "test Izz",\r\n        "updated_at": "2024-03-01T06:54:28.000000Z",\r\n        "created_at": "2024-03-01T06:54:28.000000Z",\r\n        "id": 2\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"update-category",children:"Update Category"}),"\n",(0,r.jsx)(n.p,{children:"Update category by id and store to db."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"API_URL/api/audit/category/{id}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"headers-3",children:"HEADERS"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"content-type \u2003 application/json"})}),"\n",(0,r.jsx)(n.h4,{id:"body-1",children:"BODY"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"name"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample request"',children:'{\r\n    "name":"Jason Izz"\r\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": {\r\n        "organisation_id": 1,\r\n        "name": "Jason Izz",\r\n        "updated_at": "2024-03-01T06:54:28.000000Z",\r\n        "created_at": "2024-03-01T06:54:28.000000Z",\r\n        "id": 2\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"activate-category",children:"Activate Category"}),"\n",(0,r.jsx)(n.p,{children:"Activate category by id."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"API_URL/api/audit/activate-category/{id}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"headers-4",children:"HEADERS"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": {\r\n        "id": 2,\r\n        "organisation_id": 1,\r\n        "name": "Jason Izz",\r\n        "is_active": 1,\r\n        "created_at": "2024-03-01T06:54:28.000000Z",\r\n        "updated_at": "2024-03-01T06:56:26.000000Z",\r\n        "deleted_at": null\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"deactivate-category",children:"Deactivate Category"}),"\n",(0,r.jsx)(n.p,{children:"Deactivate category by id."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"API_URL/api/audit/deactivate-category/{id}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"headers-5",children:"HEADERS"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": {\r\n        "id": 2,\r\n        "organisation_id": 1,\r\n        "name": "Jason Izz",\r\n        "is_active": 0,\r\n        "created_at": "2024-03-01T06:54:28.000000Z",\r\n        "updated_at": "2024-03-01T06:56:26.000000Z",\r\n        "deleted_at": null\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"delete-category",children:"Delete Category"}),"\n",(0,r.jsx)(n.p,{children:"Delete category by id."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"DELETE"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"API_URL/api/audit/delete-category/{id}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"headers-6",children:"HEADERS"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": "Success"\r\n}\n'})}),"\n",(0,r.jsx)("br",{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);