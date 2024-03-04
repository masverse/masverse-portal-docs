"use strict";(self.webpackChunkmas_doc=self.webpackChunkmas_doc||[]).push([[193],{7556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=s(4848),a=s(8453);const i={sidebar_position:4},r="Tags",d={id:"audit-trail/audit-tags",title:"Tags",description:"Get Tags list",source:"@site/docs/audit-trail/audit-tags.md",sourceDirName:"audit-trail",slug:"/audit-trail/audit-tags",permalink:"/masverse-portal-docs/audit-trail/audit-tags",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Category",permalink:"/masverse-portal-docs/audit-trail/audit-category"},next:{title:"Token Management",permalink:"/masverse-portal-docs/category/token-management"}},l={},c=[{value:"Get Tags list",id:"get-tags-list",level:2},{value:"HEADERS",id:"headers",level:4},{value:"Get Tags by ID",id:"get-tags-by-id",level:2},{value:"HEADERS",id:"headers-1",level:4},{value:"Create Tags",id:"create-tags",level:2},{value:"HEADERS",id:"headers-2",level:4},{value:"BODY",id:"body",level:4},{value:"Update Tags by ID",id:"update-tags-by-id",level:2},{value:"HEADERS",id:"headers-3",level:4},{value:"BODY",id:"body-1",level:4},{value:"Activate Tags by ID",id:"activate-tags-by-id",level:2},{value:"HEADERS",id:"headers-4",level:4},{value:"Deactivate Tags by ID",id:"deactivate-tags-by-id",level:2},{value:"HEADERS",id:"headers-5",level:4},{value:"Delete Tags by ID",id:"delete-tags-by-id",level:2},{value:"HEADERS",id:"headers-6",level:4}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tags",children:"Tags"}),"\n",(0,t.jsx)(n.h2,{id:"get-tags-list",children:"Get Tags list"}),"\n",(0,t.jsx)(n.p,{children:"Retrieves all tags records for an organization from the database."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"GET"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{{base_url}}/tags\n"})}),"\n",(0,t.jsx)(n.h4,{id:"headers",children:"HEADERS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": [\n        {\n            "id": 1,\n            "organisation_id": 1,\n            "name": "sying tester tag",\n            "is_active": 1,\n            "created_at": "2024-03-01T06:58:43.000000Z",\n            "updated_at": "2024-03-01T06:58:43.000000Z",\n            "deleted_at": null\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"get-tags-by-id",children:"Get Tags by ID"}),"\n",(0,t.jsx)(n.p,{children:"Retrieves a specific organisation tags record by its ID from the database."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"GET"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{{base_url}}/tags/{id}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"headers-1",children:"HEADERS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "id": 1,\n        "organisation_id": 1,\n        "name": "sying tester tag",\n        "is_active": 1,\n        "created_at": "2024-03-01T06:58:43.000000Z",\n        "updated_at": "2024-03-01T06:58:43.000000Z",\n        "deleted_at": null\n    }\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"create-tags",children:"Create Tags"}),"\n",(0,t.jsx)(n.p,{children:"Creates a tag by organisation id and storing it in MasChain."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"POST"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{{base_url}}/tags\n"})}),"\n",(0,t.jsx)(n.h4,{id:"headers-2",children:"HEADERS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsx)(n.h4,{id:"body",children:"BODY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "name":"tester tag"\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "organisation_id": 1,\n        "name": "tester tag",\n        "updated_at": "2024-03-01T06:58:43.000000Z",\n        "created_at": "2024-03-01T06:58:43.000000Z",\n        "id": 1\n    }\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"update-tags-by-id",children:"Update Tags by ID"}),"\n",(0,t.jsx)(n.p,{children:"Update tags by id and store to db."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{{base_url}}/tags/{id}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"headers-3",children:"HEADERS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsx)(n.h4,{id:"body-1",children:"BODY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "name":"Update test"\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "id": 1,\n        "organisation_id": 1,\n        "name": "Update test",\n        "is_active": 1,\n        "created_at": "2024-03-01T06:58:43.000000Z",\n        "updated_at": "2024-03-01T07:00:07.000000Z",\n        "deleted_at": null\n    }\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"activate-tags-by-id",children:"Activate Tags by ID"}),"\n",(0,t.jsx)(n.p,{children:"Activate tags by id."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{{base_url}}/tags/{id}/activate\n"})}),"\n",(0,t.jsx)(n.h4,{id:"headers-4",children:"HEADERS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "id": 1,\n        "organisation_id": 1,\n        "name": "Test",\n        "is_active": 1,\n        "created_at": "2024-03-01T06:58:43.000000Z",\n        "updated_at": "2024-03-01T07:00:07.000000Z",\n        "deleted_at": null\n    }\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"deactivate-tags-by-id",children:"Deactivate Tags by ID"}),"\n",(0,t.jsx)(n.p,{children:"Deactivate tags by id."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"PUT"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{{base_url}}/tags/{id}/deactivate\n"})}),"\n",(0,t.jsx)(n.h4,{id:"headers-5",children:"HEADERS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": {\n        "id": 1,\n        "organisation_id": 1,\n        "name": "Test",\n        "is_active": 0,\n        "created_at": "2024-03-01T06:58:43.000000Z",\n        "updated_at": "2024-03-01T07:00:07.000000Z",\n        "deleted_at": null\n    }\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"delete-tags-by-id",children:"Delete Tags by ID"}),"\n",(0,t.jsx)(n.p,{children:"Delete tags by id."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"DELETE"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{{base_url}}/tags/{id}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"headers-6",children:"HEADERS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Sample result"',children:'{\n    "status": 200,\n    "result": "Success"\n}\n'})}),"\n",(0,t.jsx)("br",{})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(6540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);