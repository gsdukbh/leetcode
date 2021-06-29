(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3015],{9556:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-d04435e0",path:"/leetcode/ConstructMaximumBinaryTree.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"最大二叉树",slug:"最大二叉树",children:[]}],filePathRelative:"leetcode/ConstructMaximumBinaryTree.md",git:{updatedTime:1623134222e3,contributors:[]}}},3832:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="最大二叉树"><a class="header-anchor" href="#最大二叉树">#</a> 最大二叉树</h2><p>###代码</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConstructMaximumBinaryTree</span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * 654 最大二叉树\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> val<span class="token punctuation">;</span>\n        <span class="token class-name">TreeNode</span> left<span class="token punctuation">;</span><span class="token class-name">TreeNode</span> right<span class="token punctuation">;</span>\n        <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> val <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n     <span class="token keyword">return</span> <span class="token function">c</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span><span class="token keyword">int</span> left<span class="token punctuation">,</span><span class="token keyword">int</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token operator">&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>right<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">/*找到最大值的下标*/</span>\n        <span class="token keyword">int</span> index<span class="token operator">=</span>left<span class="token punctuation">,</span><span class="token class-name">Max</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>right<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token class-name">Max</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">Max</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                index<span class="token operator">=</span>i<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">/*划分 ，左边，[left，index) index 为根 右边 ，(index,right]*/</span>\n        <span class="token class-name">TreeNode</span> treeNode<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token class-name">Max</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        treeNode<span class="token punctuation">.</span>left<span class="token operator">=</span><span class="token function">c</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>left<span class="token punctuation">,</span>index <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        treeNode<span class="token punctuation">.</span>right<span class="token operator">=</span><span class="token function">c</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> treeNode<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>',3),t={render:function(n,s){return p}}}}]);