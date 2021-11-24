"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[4718],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8982:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s={},l="Operations procedures",i={unversionedId:"v2/OPERATIONS",id:"v2/OPERATIONS",isDocsHomePage:!1,title:"Operations procedures",description:"Revoking a strategy with normal migration",source:"@site/docs/developers/v2/OPERATIONS.md",sourceDirName:"v2",slug:"/v2/OPERATIONS",permalink:"/yearn-devdocs/developers/v2/OPERATIONS",tags:[],version:"current",lastUpdatedBy:"Steffel",lastUpdatedAt:1623404620,formattedLastUpdatedAt:"6/11/2021",frontMatter:{},sidebar:"mySidebar",previous:{title:"Deploying a Vault and Strategy V2",permalink:"/yearn-devdocs/developers/v2/DEPLOYMENT"},next:{title:"Emergency Procedures for Yearn Finance",permalink:"/yearn-devdocs/developers/v2/EMERGENCY"}},u=[{value:"Revoking a strategy with normal migration",id:"revoking-a-strategy-with-normal-migration",children:[{value:"From the vault",id:"from-the-vault",children:[]},{value:"From the strategy",id:"from-the-strategy",children:[]}]},{value:"Emergency Procedures",id:"emergency-procedures",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operations-procedures"},"Operations procedures"),(0,o.kt)("h2",{id:"revoking-a-strategy-with-normal-migration"},"Revoking a strategy with normal migration"),(0,o.kt)("p",null,"Let's say we found a problem in one of the strategies and we want to return all funds. There are two ways of doing it."),(0,o.kt)("p",null,"The scripts below use the HEGIC vault as an example."),(0,o.kt)("h3",{id:"from-the-vault"},"From the vault"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Grab the gov account\ngov = accounts.at(vault.governance(), force=True)\n\n# The cream strategy is the first in the withdrawal queue\ns1 = Contract(vault.withdrawalQueue(0))\n\n# Revoke msg should be sent from gov or guardian\nvault.revokeStrategy(s1, {"from": gov})\n')),(0,o.kt)("p",null,"After running the command you will notice:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"vault.strategies(s1).dict()['debtRatio'] == 0\n")),(0,o.kt)("p",null,"Last step is running a ",(0,o.kt)("inlineCode",{parentName:"p"},"harvest")," to return funds to vault:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'s1.harvest({"from": gov})\n>>> hegic.balanceOf(s1)\n0\n>>> hegic.balanceOf(vault)/1e18\n291731.2666932462\n')),(0,o.kt)("h3",{id:"from-the-strategy"},"From the strategy"),(0,o.kt)("p",null,"From the strategy itself we can turn on emergency mode.\nTo do it we need to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Grab the strategist account\nstrategist = accounts.at(s1.strategist(), force=True)\n\n# Turn on the emergency exit\ns1.setEmergencyExit({'from': strategist})\n\n# Harvest to move funds to the vault\ns1.harvest({'from': strategist})\n")),(0,o.kt)("p",null,"We should also see the strategy's ",(0,o.kt)("inlineCode",{parentName:"p"},"debtRatio")," going to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and funds returning to the vault."),(0,o.kt)("h2",{id:"emergency-procedures"},"Emergency Procedures"),(0,o.kt)("p",null,"We can also shutdown the vault to return assets as soon as possible. To do that we will need a guardian or governance account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Sound the alarm\nvault.setEmergencyShutdown(true, {'from': gov})\n\n# Harvest all strategies\ns1.harvest({'from': gov})\ns2.harvest({'from': gov})\ns3.harvest({'from': gov})\n\n# Check all the tokens are back in the vault\n>>> hegic.balanceOf(vault) == vault.totalAssets()\nTrue\n")),(0,o.kt)("p",null,"You will notice that this procedure doesn't change the debt ratio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},">>> vault.strategies(s1).dict()['debtRatio']\n1600\n")),(0,o.kt)("p",null,"It drops the credit to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},">>> vault.creditAvailable(s1)\n0\n")))}p.isMDXComponent=!0}}]);