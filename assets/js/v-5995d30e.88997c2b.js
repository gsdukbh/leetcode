(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[428],{1262:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-5995d30e",path:"/leetcode/Fives.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"最长回文字串",slug:"最长回文字串",children:[]}],filePathRelative:"leetcode/Fives.md",git:{updatedTime:1622450691e3,contributors:[]}}},6510:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>k});var p=a(6252);const t=(0,p.uE)('<h2 id="最长回文字串"><a class="header-anchor" href="#最长回文字串">#</a> 最长回文字串</h2><h5 id="思路一"><a class="header-anchor" href="#思路一">#</a> 思路一：</h5><p>遍历匹配方法。</p><p><a href="../../../leetcode/app/src/main/java/top/werls/leetcode/Fives.java">代码</a></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> k <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> temp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                temp <span class="token operator">=</span> temp <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token comment">// 反转字符串</span>\n                <span class="token class-name">String</span> fz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>fz<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    k <span class="token operator">=</span> k<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> temp<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> k <span class="token operator">:</span> temp<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            temp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> k<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h5 id="思路二"><a class="header-anchor" href="#思路二">#</a> 思路二；</h5><p>动态规划，当前字符位置为<code>i</code> ,那么子问题为，当<code>i - 1 = i + 1 </code> 说明是回文，则接着向两边探测。记录下最大的两边扩展值。</p><p>代码：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>\n            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> len1 <span class="token operator">=</span> <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">int</span> len2 <span class="token operator">=</span> <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>len1<span class="token punctuation">,</span> len2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;</span> end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                start <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n                end <span class="token operator">=</span> i <span class="token operator">+</span> len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> <span class="token class-name">L</span> <span class="token operator">=</span> left<span class="token punctuation">,</span> <span class="token class-name">R</span> <span class="token operator">=</span> right<span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token class-name">L</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">R</span> <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token class-name">L</span><span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">L</span><span class="token operator">--</span><span class="token punctuation">;</span>\n            <span class="token class-name">R</span><span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token class-name">R</span> <span class="token operator">-</span> <span class="token class-name">L</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h5 id="思路三"><a class="header-anchor" href="#思路三">#</a> 思路三：</h5>',10),o={href:"https://zh.wikipedia.org/wiki/%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2#Manacher%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},e=(0,p.Uk)("Manacher"),c=(0,p.Uk)("算法。在字符串里插入相隔插入一个字符"),l=(0,p.Wm)("code",null,"#",-1),u=(0,p.Uk)(" ，在利用动态规划的方法求最大回文串。"),r=(0,p.uE)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> s<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> charArr <span class="token operator">=</span> <span class="token function">manacherStringString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> <span class="token class-name">C</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> <span class="token class-name">R</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>charArr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> charArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            pArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">R</span> <span class="token operator">&gt;</span> i <span class="token operator">?</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>pArr<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token class-name">C</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name">R</span> <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token keyword">int</span> left <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> pArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">int</span> right <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> pArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// 检查边界</span>\n            <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> charArr<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> charArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> charArr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                pArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>\n                left<span class="token operator">--</span><span class="token punctuation">;</span>\n                right<span class="token operator">++</span><span class="token punctuation">;</span>\n\n            <span class="token punctuation">}</span>\n            <span class="token comment">// 如果大于R, 那更新回文右边界和中心点</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">+</span> pArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token class-name">R</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token class-name">R</span> <span class="token operator">=</span> i <span class="token operator">+</span> pArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token class-name">C</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment">// 如果需要, 则更新max</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>pArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                max <span class="token operator">=</span> pArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                start <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> max<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> start <span class="token operator">+</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * 辅助数组\n     * \n     * <span class="token keyword">@param</span> <span class="token parameter">str</span>\n     * <span class="token keyword">@return</span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">manacherStringString</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>c<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> res<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 两个一样效果, 填充符号&quot;#&quot;</span>\n            res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">:</span> c<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token comment">// res[i] = (i &amp; 1) == 0 ? &#39;#&#39; : c[index++];</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>',1),k={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[(0,p.Wm)("a",o,[e,(0,p.Wm)(a)]),c,l,u]),r],64)}}}}]);