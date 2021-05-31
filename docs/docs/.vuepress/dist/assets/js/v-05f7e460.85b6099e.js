(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2684],{3316:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-05f7e460",path:"/leetcode/Twenty_one.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"合并两个有序链表",slug:"合并两个有序链表",children:[]}],filePathRelative:"leetcode/Twenty_one.md",git:{updatedTime:1622450691e3,contributors:[{name:"JiaWei Lee",email:"gsdukbh@gmail.com",commits:1}]}}},9259:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="合并两个有序链表"><a class="header-anchor" href="#合并两个有序链表">#</a> 合并两个有序链表</h2><p>将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的</p><ul><li><a href="../../../leetcode/app/src/main/java/top/werls/leetcode/Twenty_one.java">代码</a></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\n<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token class-name">ListNode</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">//遍历两个list ，依次判断两个的大小，把前指针指向小的数。</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                pr<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>\n                l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                pr<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>\n                l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            pr <span class="token operator">=</span> pr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        pr<span class="token punctuation">.</span>next <span class="token operator">=</span> l1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> l2 <span class="token operator">:</span> l1<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',4),e={render:function(n,s){return p}}}}]);