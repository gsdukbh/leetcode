(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7590],{4916:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-7f06d45a",path:"/leetcode/%E8%BF%9E%E7%BB%AD%E6%95%B0%E7%BB%84.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"连续数组",slug:"连续数组",children:[]}],filePathRelative:"leetcode/连续数组.md",git:{updatedTime:1622726609e3,contributors:[]}}},5329:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t={id:"连续数组"},e=(0,p.Wm)("a",{class:"header-anchor",href:"#连续数组"},"#",-1),o=(0,p.Uk)(),c={href:"https://leetcode-cn.com/problems/contiguous-array/",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("连续数组"),u=(0,p.uE)('<blockquote><p>给定一个二进制数组 <code>nums</code> , 找到含有相同数量的 <code>0</code> 和 <code>1</code> 的最长连续子数组，并返回该子数组的长度。</p></blockquote><h5 id="思路"><a class="header-anchor" href="#思路">#</a> 思路</h5><ol><li>相同的 1 和 0 ，可以把<code>0</code>换为 <code>-1</code> ，那么就是 <code>连续的 1和-1 的和为 0 的子数组的长度</code></li><li>是一个前缀和问题</li><li>先计算任意前缀和的值，并利用哈希表记录下标和值。</li><li>遍历数组。碰到<code>1</code>时 sum<code>+1</code>，碰到<code>0</code> 时 sum<code>-1</code>。</li><li>判断sum值是否出现在哈希表上，如果是，比较当前下标和哈希表记录的下标的差与最大长度，取最大值。</li><li>哈希表中没有，记录。</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContiguousArray</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">findMaxLength</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> h <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        h<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                sum<span class="token operator">++</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                sum<span class="token operator">--</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>h<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> i <span class="token operator">-</span> h<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                h<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> max<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">findMaxLength</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h6 id="思路2"><a class="header-anchor" href="#思路2">#</a> 思路2</h6><ol><li>因为是求连续相同的子数组最长的的长度，还可以用朴素的二次遍历的方法。</li><li><s>思考过滑动窗口，但是并不知道</s>行不通。</li></ol>',6),i={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[(0,p.Wm)("h3",t,[e,o,(0,p.Wm)("a",c,[l,(0,p.Wm)(a)])]),u],64)}}}}]);