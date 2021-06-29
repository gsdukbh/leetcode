(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6685],{3416:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-726443d9",path:"/leetcode/MaxDepth.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"二叉树最大深度",slug:"二叉树最大深度",children:[]}],filePathRelative:"leetcode/MaxDepth.md",git:{updatedTime:1622450691e3,contributors:[]}}},9849:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="二叉树最大深度"><a class="header-anchor" href="#二叉树最大深度">#</a> 二叉树最大深度</h2><p>思路：</p><p>利用深度优先遍历获取树的深度。</p><p><a href="../../../leetcode/app/src/main/java/top/werls/leetcode/MaxDepth.java">代码</a></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',5),t={render:function(n,s){return p}}}}]);