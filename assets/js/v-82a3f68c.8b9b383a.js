(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6421],{4341:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-82a3f68c",path:"/leetcode/GenerateTrees.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"95.不同的二叉搜索树",slug:"_95-不同的二叉搜索树",children:[{level:3,title:"思路：",slug:"思路",children:[]},{level:3,title:"思路2：",slug:"思路2",children:[]}]}],filePathRelative:"leetcode/GenerateTrees.md",git:{updatedTime:1622450691e3,contributors:[]}}},6057:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_95-不同的二叉搜索树"><a class="header-anchor" href="#_95-不同的二叉搜索树">#</a> 95.不同的二叉搜索树</h2><h3 id="思路"><a class="header-anchor" href="#思路">#</a> 思路：</h3><p>因为是二叉搜索树，故左节点比右节点小。可以用这个规则递归的生成二叉树。由<code>[0,n]</code>的整数生成的二叉树，在当前选择 根节点为<code>i</code> 时，左子树为<code>[0,i]</code> 右子树为<code>[i+1,n]</code> 分别递归这两个区间。生成不同的二叉树。</p><p><a href="GeneratTree.java">代码</a></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> <span class="token function">generateTrees</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token function">generateTrees</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> <span class="token function">generateTrees</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> left <span class="token operator">=</span> <span class="token function">generateTrees</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> righ <span class="token operator">=</span> <span class="token function">generateTrees</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> treeNode <span class="token operator">:</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> treeNode2 <span class="token operator">:</span> righ<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token class-name">TreeNode</span> tem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    tem<span class="token punctuation">.</span>left <span class="token operator">=</span> treeNode<span class="token punctuation">;</span>\n                    tem<span class="token punctuation">.</span>right <span class="token operator">=</span> treeNode2<span class="token punctuation">;</span>\n                    res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tem<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="思路2"><a class="header-anchor" href="#思路2">#</a> 思路2：</h3><p>观察由增长整数二叉树搜索树的生成发现，其实当树只有两个节点时 只用两种状态。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\t1        \t\t2\t\t\t\t5\t\t\t6\n\t \\\t\t\t   /\t\t\t\t \\\t\t   /\n   \t  2\t\t  \t  1\t\t\t\t\t  6\t\t  5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>利用这个特点，每次新节点都作为root ，或者作为 上一个树的 叶子节点的右节点。</p><p><a href="GeneratTree.java">代码</a></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\t<span class="token doc-comment comment">/**\n     * 0 &lt;= n &lt;= 8 搜索二叉树\n     * \n     * <span class="token keyword">@param</span> <span class="token parameter">n</span>\n     * <span class="token keyword">@return</span> List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span><span class="token punctuation">&gt;</span></span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> <span class="token function">generateTrees</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 添加null 增加list长度，以便第一次循环</span>\n        res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> treeNode <span class="token operator">:</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">// 获取之前所以的子树，并把当前的n 设置为root 节点</span>\n                <span class="token comment">// System.out.println(treeNode);</span>\n                <span class="token comment">// System.out.println(i);</span>\n                <span class="token class-name">TreeNode</span> iNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                iNode<span class="token punctuation">.</span>left <span class="token operator">=</span> treeNode<span class="token punctuation">;</span>\n                temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>iNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token comment">// 插入右子树</span>\n                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token class-name">TreeNode</span> cNode <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token class-name">TreeNode</span> rNode <span class="token operator">=</span> cNode<span class="token punctuation">;</span>\n                    <span class="token comment">// 插入右子树的右子树的右</span>\n                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">if</span> <span class="token punctuation">(</span>rNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                            <span class="token keyword">break</span><span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span>\n                        rNode <span class="token operator">=</span> rNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                    <span class="token comment">// 跳出循环，为null 无意义</span>\n                    <span class="token keyword">if</span> <span class="token punctuation">(</span>rNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">break</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                    <span class="token class-name">TreeNode</span> rTreeNode <span class="token operator">=</span> rNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>\n                    iNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    rNode<span class="token punctuation">.</span>right <span class="token operator">=</span> iNode<span class="token punctuation">;</span>\n                    iNode<span class="token punctuation">.</span>left <span class="token operator">=</span> rTreeNode<span class="token punctuation">;</span>\n                    temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            res <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * \n     * <span class="token keyword">@param</span> <span class="token parameter">root</span> TreeNode\n     * <span class="token keyword">@return</span> new TreeNode\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">TreeNode</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> node<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div>',11),e={render:function(n,s){return p}}}}]);