(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6815],{6179:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-0aa456ee",path:"/leetcode/CountSubstrings.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"回文子串",slug:"回文子串",children:[]}],filePathRelative:"leetcode/CountSubstrings.md",git:{updatedTime:1622450691e3,contributors:[{name:"JiaWei Lee",email:"gsdukbh@gmail.com",commits:1}]}}},1301:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t=(0,p.Wm)("h2",{id:"回文子串"},[(0,p.Wm)("a",{class:"header-anchor",href:"#回文子串"},"#"),(0,p.Uk)(" 回文子串")],-1),e=(0,p.Wm)("p",null,"思路：",-1),o=(0,p.Wm)("p",null,"动态规划，中心扩展的方式",-1),c=(0,p.Uk)("参考"),l=(0,p.Uk)(" 其中的"),r=(0,p.Wm)("code",null,"2n-1",-1),u=(0,p.Uk)("是为了防止字符串的长度出现奇偶，中间字符一个或两个的问题。"),k=(0,p.uE)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">countSubstrings</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">*</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> <span class="token class-name">L</span> <span class="token operator">=</span> i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">R</span> <span class="token operator">=</span> i <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> i <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">;</span>\n            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token class-name">L</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">R</span> <span class="token operator">&lt;</span> length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token class-name">L</span><span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token class-name">L</span><span class="token operator">--</span><span class="token punctuation">;</span>\n                <span class="token class-name">R</span><span class="token operator">++</span><span class="token punctuation">;</span>\n                res<span class="token operator">++</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',1),i={render:function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,e,o,(0,p.Wm)("p",null,[(0,p.Wm)(a,{to:"/leetcode/docs/leetcode/Fives.html"},{default:(0,p.w5)((()=>[c])),_:1}),l,r,u]),k],64)}}}}]);