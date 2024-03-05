"use strict";(self.webpackChunkmas_doc=self.webpackChunkmas_doc||[]).push([[159],{5669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(4848),r=n(8453);const i={sidebar_position:2},d="Audit Trail",s={id:"audit-trail/audit-trail",title:"Audit Trail",description:"Get Audit Trails list",source:"@site/docs/audit-trail/audit-trail.md",sourceDirName:"audit-trail",slug:"/audit-trail/",permalink:"/masverse-portal-docs/audit-trail/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/masverse-portal-docs/audit-trail/overview"},next:{title:"Category",permalink:"/masverse-portal-docs/audit-trail/audit-category"}},l={},c=[{value:"Get Audit Trails list",id:"get-audit-trails-list",level:2},{value:"HEADERS",id:"headers",level:4},{value:"Get Audit Trial by ID",id:"get-audit-trial-by-id",level:2},{value:"HEADERS",id:"headers-1",level:4},{value:"Create Audit Trail",id:"create-audit-trail",level:2},{value:"HEADERS",id:"headers-2",level:4},{value:"BODY",id:"body",level:4},{value:"Get Audit Trail Metadata",id:"get-audit-trail-metadata",level:2},{value:"HEADERS",id:"headers-3",level:4},{value:"BODY",id:"body-1",level:4}];function o(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"audit-trail",children:"Audit Trail"}),"\n",(0,a.jsx)(t.h2,{id:"get-audit-trails-list",children:"Get Audit Trails list"}),"\n",(0,a.jsx)(t.p,{children:"Retrieves all audit trail records for an organization from the database."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"GET"})}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"{{base_url}}/get-all-audit\n"})}),"\n",(0,a.jsx)(t.h4,{id:"headers",children:"HEADERS"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": [\r\n        {\r\n            "id": 14,\r\n            "organisation_id": 1,\r\n            "metadata": "{\\"name\\":\\"xxxxxxxx\\",\\"data\\":\\"yyyyyyyy\\",\\"entity_id\\":\\"zzzzzzzzz\\",\\"content\\":\\"wwwwwwwwwwww\\"}",\r\n            "file": "file",\r\n            "metadatahash": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi",\r\n            "transactionhashId": "0x53943ca80435fff4f155b0d0beef17808c9b10c9d5ac88756cbb67abede48486",\r\n            "created_at": "2024-03-01T03:34:32.000000Z",\r\n            "updated_at": "2024-03-01T03:34:32.000000Z",\r\n            "deleted_at": null\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h2,{id:"get-audit-trial-by-id",children:"Get Audit Trial by ID"}),"\n",(0,a.jsx)(t.p,{children:"Retrieves a specific audit trail record by its ID from the database."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"GET"})}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"{{base_url}}/get-audit/{id}\n"})}),"\n",(0,a.jsx)(t.h4,{id:"headers-1",children:"HEADERS"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": {\r\n        "id": 14,\r\n        "organisation_id": 1,\r\n        "metadata": "{\\"name\\":\\"xxxxxxxx\\",\\"data\\":\\"yyyyyyyy\\",\\"entity_id\\":\\"zzzzzzzzz\\",\\"content\\":\\"wwwwwwwwwwww\\"}",\r\n        "file": "file",\r\n        "metadatahash": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi",\r\n        "transactionhashId": "0x53943ca80435fff4f155b0d0beef17808c9b10c9d5ac88756cbb67abede48486",\r\n        "created_at": "2024-03-01T03:34:32.000000Z",\r\n        "updated_at": "2024-03-01T03:34:32.000000Z",\r\n        "deleted_at": null\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h2,{id:"create-audit-trail",children:"Create Audit Trail"}),"\n",(0,a.jsx)(t.p,{children:"Creates an audit trail with category and tags, storing it in MasChain."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"POST"})}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"{{base_url}}/post-audit\n"})}),"\n",(0,a.jsx)(t.h4,{id:"headers-2",children:"HEADERS"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,a.jsx)(t.h4,{id:"body",children:"BODY"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{\r\n    "category_id":[1,5],\r\n    "tag_id":[2,3],\r\n    "metadata":{"name" : "xxxxxxxx","data" : "yyyyyyyy","entity_id" : "zzzzzzzzz","content" : "wwwwwwwwwwww"},\r\n    "wallet_address":"0x147f20a28739da15419AdC04e61fd83e60962683",\r\n    "file":"file",\r\n    "callbackUrl": "https://postman-echo.com/post?"\r\n}\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": {\r\n        "organisation_id": 1,\r\n        "metadata": "{\\"name\\":\\"xxxxxxxx\\",\\"data\\":\\"yyyyyyyy\\",\\"entity_id\\":\\"zzzzzzzzz\\",\\"content\\":\\"wwwwwwwwwwww\\"}",\r\n        "metadatahash": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi",\r\n        "transactionhashId": "0x53943ca80435fff4f155b0d0beef17808c9b10c9d5ac88756cbb67abede48486",\r\n        "file": "file",\r\n        "updated_at": "2024-03-01T03:34:32.000000Z",\r\n        "created_at": "2024-03-01T03:34:32.000000Z",\r\n        "id": 14\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h2,{id:"get-audit-trail-metadata",children:"Get Audit Trail Metadata"}),"\n",(0,a.jsx)(t.p,{children:"Reads metadata from MasChain."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"GET"})}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"{{base_url}}/get-audit-tx\n"})}),"\n",(0,a.jsx)(t.h4,{id:"headers-3",children:"HEADERS"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"client_id \u2003 9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"client_secret \u2003 sk_9b16ae5638534ae1961fb370f874b6cc"}),"*"]}),"\n",(0,a.jsx)(t.h4,{id:"body-1",children:"BODY"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{\r\n    "transactionhashId":"0x53943ca80435fff4f155b0d0beef17808c9b10c9d5ac88756cbb67abede48486"\r\n}\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="Sample result"',children:'{\r\n    "status": 200,\r\n    "result": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi"\r\n}\n'})}),"\n",(0,a.jsx)("br",{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var a=n(6540);const r={},i=a.createContext(r);function d(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);