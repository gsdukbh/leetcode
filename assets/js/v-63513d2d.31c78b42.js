(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9117],{8616:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-63513d2d",path:"/leetcode/FindSubsequences.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"递增子序列",slug:"递增子序列",children:[]}],filePathRelative:"leetcode/FindSubsequences.md",git:{updatedTime:1622450691e3,contributors:[]}}},5156:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="递增子序列"><a class="header-anchor" href="#递增子序列">#</a> 递增子序列</h2><h5 id="思路-递归搜索"><a class="header-anchor" href="#思路-递归搜索">#</a> 思路：递归搜索</h5><p>从第一个数字开始，把第一个数字放进缓存中，</p><p>然后遍历数组，并与缓存中的最后的数比较，把大于的数放进缓存，</p><p>当指针遍历到结尾时，判断当前缓存数组中的长度是否大于2，把结果加入答案中。</p><p>然后移除缓存中最后一个，完成回溯，在判断当前指针与缓存数组最后一个是否相同，去重。</p><p>在进行递归，</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FindSubsequences</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> tem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">findSubsequences</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MIN_VALUE<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>tem<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>tem<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            tem<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//            加</span>\n            <span class="token function">dfs</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//            去</span>\n            tem<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>tem<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n<span class="token comment">//去重</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">!=</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">dfs</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>',8),t={render:function(n,s){return p}}}}]);