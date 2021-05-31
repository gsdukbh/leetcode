(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5970],{7439:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-7e87b923",path:"/leetcode/MininumTotal.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"120. 三角形最小路径和",slug:"_120-三角形最小路径和",children:[]}],filePathRelative:"leetcode/MininumTotal.md",git:{updatedTime:1622450691e3,contributors:[{name:"JiaWei Lee",email:"gsdukbh@gmail.com",commits:1}]}}},2428:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t={id:"_120-三角形最小路径和"},e=(0,p.Wm)("a",{class:"header-anchor",href:"#_120-三角形最小路径和"},"#",-1),o=(0,p.Uk)(),c={href:"https://leetcode-cn.com/problems/triangle/",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("120. 三角形最小路径和"),u=(0,p.uE)('<p>思路；</p><p>按照题目例子：</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>[\n[2],\n[3],[4],\n[6],[5],[7],\n[4],[1],[8],[3]\n]\n下一步相邻的结点。即，x+1,y ,和,x+1,y+1;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>路径总值函数：f（x，y）=min（f（x-1,y），f（x-1,y-1））+triangle[x] [y].</p><p>这利用了贪心算法，每次选择最优的选择，可以自低向上来解决</p><p><a href="../../../leetcode/app/src/main/java/top/werls/leetcode/MininumTotal.java">代码</a></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MininumTotal</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minimumTotal</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> triangle<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token doc-comment comment">/**\n         * f(x,y)=min(f(x+1,y+1),f(x+1,y)) + triangle[x][y] 自低向上\n         */</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>triangle<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>triangle<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> triangle<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> triangle<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> res<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> triangle<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',7),i={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[(0,p.Wm)("h2",t,[e,o,(0,p.Wm)("a",c,[l,(0,p.Wm)(a)])]),u],64)}}}}]);