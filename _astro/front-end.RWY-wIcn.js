import{c as a}from"./astro-component.DIh9Wi00.js";import{g as l,p as i,u as r}from"./hoisted.LAvukIez.js";import"./astro/assets-service.jDRrhE25.js";import"./config.7_d3ayKu.js";const n=`<h2 id="js">JS</h2>
<h3 id="prototype">prototype</h3>
<ul>
<li>每个函数都有一个prototype属性，指向一个对象，这个对象的所有属性和方法，都会被构造函数的实例继承</li>
<li>每个对象都有一个<code>__proto__</code>属性，指向它的原型对象(构造函数的prototype)</li>
</ul>
<h3 id="原型链">原型链</h3>
<ul>
<li>每个对象都有一个<code>__proto__</code>属性，指向它的原型对象</li>
<li>原型对象也是对象，也有<code>__proto__</code>属性，指向它的原型对象</li>
<li>一直往上找，直到<code>__proto__</code>为null</li>
</ul>
<h3 id="事件循环">事件循环</h3>
<ul>
<li>JS是单线程的，异步任务会被放到任务队列中，等待执行</li>
<li>任务队列分为宏任务和微任务</li>
<li>宏任务：宿主环境提供的任务，如<code>setTimeout</code> <code>setInterval</code> <code>setImmediate</code> <code>requestAnimationFrame</code> <code>I/O</code> <code>UI rendering</code></li>
<li>微任务：JS引擎提供的任务，如<code>Promise.then</code> <code>MutationObserver</code> <code>process.nextTick</code></li>
<li>执行同步代码 -> 执行所有微任务 -> 执行一个宏任务 -> 执行所有微任务 -> …</li>
</ul>
<h3 id="闭包">闭包</h3>
<ul>
<li>闭包是指有权访问另一个函数作用域中的变量的函数</li>
<li>作用：保护变量不被污染，保存变量</li>
</ul>
<h3 id="this">this</h3>
<ul>
<li>默认绑定：直接调用函数，this指向全局对象</li>
<li>隐式绑定：函数作为对象的方法调用，this指向对象</li>
<li>显示绑定：<code>call</code> <code>apply</code> <code>bind</code>，this指向指定对象</li>
<li>new绑定：构造函数调用，this指向实例对象</li>
<li>箭头函数：this指向定义时所在的对象</li>
</ul>
<h3 id="objectmapweakmap">Object/Map/WeakMap</h3>
<ul>
<li>Object：键为字符串/符号，键值对无序</li>
<li>Map：键可以为任意类型，键值对有序（插入顺序），size属性</li>
<li>WeakMap：键只能为对象，无序不可遍历，键所指向的对象可以被垃圾回收（弱引用）</li>
</ul>
<h3 id="数组去重">数组去重</h3>
<h4 id="set">Set</h4>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> unique</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">arr</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#A626A4;--shiki-dark:#C678DD">new</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> Set</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">arr</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)]</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h4 id="indexof">indexOf</h4>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> unique</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">arr</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#383A42;--shiki-dark:#E5C07B"> arr</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">filter</span><span style="color:#383A42;--shiki-dark:#ABB2BF">((</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">item</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">index</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">=></span><span style="color:#383A42;--shiki-dark:#E5C07B"> arr</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">indexOf</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">item</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#0184BC;--shiki-dark:#56B6C2">===</span><span style="color:#383A42;--shiki-dark:#E06C75"> index</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="forofforin">for…of/for…in</h3>
<ul>
<li>for…of：遍历可迭代对象，如数组/字符串/Map/Set的值</li>
<li>for…in：遍历对象的可枚举属性，包括原型链上的属性</li>
</ul>
<h2 id="browser">Browser</h2>
<h3 id="重绘重排">重绘/重排</h3>
<ul>
<li>重绘：元素样式改变，不影响布局</li>
<li>重排：元素位置改变，影响布局</li>
</ul>
<h3 id="bfc">BFC</h3>
<ul>
<li>块级格式化上下文，是一个独立的渲染区域，内部元素不会影响外部元素</li>
<li>元素在垂直方向一个接一个排列，水平方向占满父元素</li>
<li>触发：根元素/浮动元素/绝对定位元素/display为<code>inline-block</code> <code>flex</code> <code>grid</code>等/overflow不为visible</li>
<li>作用：清除浮动/防止margin重叠</li>
</ul>
<h3 id="mpaspa">MPA/SPA</h3>
<ul>
<li>MPA：多页面应用，每次跳转都会请求新的页面，首屏快，SEO好，页面切换慢</li>
<li>SPA：单页面应用，只有一个页面，通过路由切换，只请求数据</li>
</ul>
<h3 id="css计算过程">CSS计算过程</h3>
<ul>
<li>确定声明值</li>
<li>层叠</li>
<li>继承</li>
<li>使用默认值</li>
</ul>
<h2 id="性能优化">性能优化</h2>
<ul>
<li>http缓存（强缓存/协商缓存）</li>
<li>CDN</li>
<li>动态加载（路由/组件/图片懒加载）</li>
<li>合并请求</li>
<li>骨架屏</li>
<li>SSR（prerender）</li>
<li>service worker</li>
<li>http2/quic</li>
<li>gzip/br</li>
<li>webp</li>
<li>async/defer</li>
<li>防抖/节流</li>
<li>事件委托</li>
</ul>
<h3 id="缓存">缓存</h3>
<p>强缓存：浏览器直接从本地缓存中读取资源，不会发请求，状态码为200</p>
<p><code>Cache-Control: max-age=31536000</code> <code>Expires: Wed, 21 Oct 2020 07:28:00 GMT</code></p>
<p>协商缓存：过期，客户端和服务端协商资源是否更新，没有更新，返回304</p>
<p>响应<code>Last-Modified: Wed, 21 Oct 2020 07:28:00 GMT</code> <code>Etag: "5f8f2a80-2b"</code></p>
<p>请求<code>If-Modified-Since: Wed, 21 Oct 2020 07:28:00 GMT</code> <code>If-None-Match: "5f8f2a80-2b"</code></p>
<h3 id="防抖节流">防抖/节流</h3>
<p>防抖：事件触发前，n秒内没有再次触发，则执行事件，n秒内再次触发，则重新计时</p>
<p>节流：事件触发后，n秒内只执行一次事件</p>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> debounce</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">delay</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> timer</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#986801;--shiki-dark:#D19A66"> null</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#A626A4;--shiki-dark:#C678DD"> function</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> () {</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">        clearTimeout</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">timer</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">        timer</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> setTimeout</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="color:#A626A4;--shiki-dark:#C678DD">=></span><span style="color:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E5C07B">            fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">apply</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#E45649;--shiki-dark:#E5C07B">this</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#E45649;--shiki-dark:#E5C07B">arguments</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">        }, </span><span style="color:#383A42;--shiki-dark:#E06C75">delay</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> throttle</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">delay</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> timer</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#986801;--shiki-dark:#D19A66"> null</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#A626A4;--shiki-dark:#C678DD"> function</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> () {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E06C75">timer</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">return</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">        timer</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> setTimeout</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="color:#A626A4;--shiki-dark:#C678DD">=></span><span style="color:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E5C07B">            fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">apply</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#E45649;--shiki-dark:#E5C07B">this</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#E45649;--shiki-dark:#E5C07B">arguments</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">            timer</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#986801;--shiki-dark:#D19A66"> null</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">        }, </span><span style="color:#383A42;--shiki-dark:#E06C75">delay</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h2 id="网络">网络</h2>
<h3 id="tls">TLS</h3>
<ol>
<li>->ClientHello，版本号，随机数，加密算法</li>
<li>&#x3C;-ServerHello，版本号，随机数，加密算法</li>
<li>&#x3C;-证书(验证)</li>
<li>->公钥加密的pre-master secret</li>
<li>双方随机数+PMSec生成会话密钥</li>
<li>&#x3C;->ChangeCipherSpec+Finished</li>
</ol>
<h3 id="http2">HTTP2</h3>
<ul>
<li>多路复用/二进制分帧/首部压缩/服务端推送/流量控制</li>
</ul>
<h2 id="安全">安全</h2>
<h3 id="xss">XSS</h3>
<ul>
<li>跨站脚本攻击，向页面注入恶意脚本</li>
<li>防范：转义/过滤/限制cookie</li>
</ul>
<h3 id="csrf">CSRF</h3>
<ul>
<li>跨站请求伪造，利用用户登录状态发起恶意请求</li>
<li>防范：验证referer/验证token</li>
</ul>
<h2 id="手写">手写</h2>
<h3 id="promiseall">Promise.all</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#C18401;--shiki-dark:#E5C07B">Promise</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">all</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#A626A4;--shiki-dark:#C678DD"> function</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">promises</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#A626A4;--shiki-dark:#C678DD"> new</span><span style="color:#C18401;--shiki-dark:#E5C07B"> Promise</span><span style="color:#383A42;--shiki-dark:#ABB2BF">((</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">resolve</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">reject</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">=></span><span style="color:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        let</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> []</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        let</span><span style="color:#383A42;--shiki-dark:#E06C75"> count</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        for</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#A626A4;--shiki-dark:#C678DD">let</span><span style="color:#383A42;--shiki-dark:#E06C75"> i</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#986801;--shiki-dark:#D19A66"> 0</span><span style="color:#383A42;--shiki-dark:#ABB2BF">; </span><span style="color:#383A42;--shiki-dark:#E06C75">i</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> &#x3C;</span><span style="color:#383A42;--shiki-dark:#E5C07B"> promises</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">length</span><span style="color:#383A42;--shiki-dark:#ABB2BF">; </span><span style="color:#383A42;--shiki-dark:#E06C75">i</span><span style="color:#0184BC;--shiki-dark:#56B6C2">++</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">            promises</span><span style="color:#383A42;--shiki-dark:#ABB2BF">[</span><span style="color:#383A42;--shiki-dark:#E06C75">i</span><span style="color:#383A42;--shiki-dark:#ABB2BF">].</span><span style="color:#4078F2;--shiki-dark:#61AFEF">then</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">res</span><span style="color:#A626A4;--shiki-dark:#C678DD"> =></span><span style="color:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">                result</span><span style="color:#383A42;--shiki-dark:#ABB2BF">[</span><span style="color:#383A42;--shiki-dark:#E06C75">i</span><span style="color:#383A42;--shiki-dark:#ABB2BF">] </span><span style="color:#0184BC;--shiki-dark:#56B6C2">=</span><span style="color:#383A42;--shiki-dark:#E06C75"> res</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">                count</span><span style="color:#0184BC;--shiki-dark:#56B6C2">++</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">                if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E06C75">count</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="color:#383A42;--shiki-dark:#E5C07B"> promises</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">length</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">                    resolve</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">result</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">                }</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">            }, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">err</span><span style="color:#A626A4;--shiki-dark:#C678DD"> =></span><span style="color:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">                reject</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">err</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">            })</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="promisify">promisify</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> promisify</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#A626A4;--shiki-dark:#C678DD"> function</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">args</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        return</span><span style="color:#A626A4;--shiki-dark:#C678DD"> new</span><span style="color:#C18401;--shiki-dark:#E5C07B"> Promise</span><span style="color:#383A42;--shiki-dark:#ABB2BF">((</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">resolve</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">reject</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">=></span><span style="color:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">            fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75">args</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, (</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">err</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">res</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">=></span><span style="color:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">                if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E06C75">err</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#4078F2;--shiki-dark:#61AFEF">reject</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">err</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">                resolve</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">res</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">            })</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">        })</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="vue3响应式">Vue3响应式</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> reactive</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">obj</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    const</span><span style="color:#986801;--shiki-dark:#E5C07B"> handler</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">        get</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">target</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">key</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">receiver</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">            track</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">target</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">key</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">            return</span><span style="color:#383A42;--shiki-dark:#E5C07B"> Reflect</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">get</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">target</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">key</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">receiver</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">        set</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">target</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">key</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">value</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">receiver</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">            const</span><span style="color:#986801;--shiki-dark:#E5C07B"> oldValue</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E06C75"> target</span><span style="color:#383A42;--shiki-dark:#ABB2BF">[</span><span style="color:#383A42;--shiki-dark:#E06C75">key</span><span style="color:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">            const</span><span style="color:#986801;--shiki-dark:#E5C07B"> result</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E5C07B"> Reflect</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">set</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">target</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">key</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">value</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">receiver</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">            if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> !==</span><span style="color:#383A42;--shiki-dark:#E06C75"> value</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">                trigger</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">target</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">key</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">            return</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#A626A4;--shiki-dark:#C678DD"> new</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> Proxy</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">obj</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">handler</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="call">call</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#C18401;--shiki-dark:#E5C07B">Function</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">prototype</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">call</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#A626A4;--shiki-dark:#C678DD"> function</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">context</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">args</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">    context</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E06C75"> context</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> ||</span><span style="color:#383A42;--shiki-dark:#E06C75"> window</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E5C07B">    context</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">fn</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#E45649;--shiki-dark:#E5C07B"> this</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    const</span><span style="color:#986801;--shiki-dark:#E5C07B"> result</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E5C07B"> context</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75">args</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#0184BC;--shiki-dark:#C678DD">    delete</span><span style="color:#383A42;--shiki-dark:#E5C07B"> context</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">fn</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="bind">bind</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#C18401;--shiki-dark:#E5C07B">Function</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">prototype</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">bind</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#A626A4;--shiki-dark:#C678DD"> function</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">context</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">args</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    const</span><span style="color:#986801;--shiki-dark:#E5C07B"> fn</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#E45649;--shiki-dark:#E5C07B"> this</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#A626A4;--shiki-dark:#C678DD"> function</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">args2</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        return</span><span style="color:#383A42;--shiki-dark:#E5C07B"> fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">call</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">context</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75">args</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75">args2</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="new">new</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> myNew</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">args</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    const</span><span style="color:#986801;--shiki-dark:#E5C07B"> obj</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E5C07B"> Object</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">create</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#C18401;--shiki-dark:#E5C07B">fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">prototype</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    const</span><span style="color:#986801;--shiki-dark:#E5C07B"> result</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E5C07B"> fn</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">call</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">obj</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="color:#383A42;--shiki-dark:#E06C75">args</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span><span style="color:#A626A4;--shiki-dark:#C678DD"> instanceof</span><span style="color:#C18401;--shiki-dark:#E5C07B"> Object</span><span style="color:#0184BC;--shiki-dark:#C678DD"> ?</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span><span style="color:#0184BC;--shiki-dark:#C678DD"> :</span><span style="color:#383A42;--shiki-dark:#E06C75"> obj</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h2 id="算法">算法</h2>
<h3 id="反转链表">反转链表</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> reverseList</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">head</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> prev</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#986801;--shiki-dark:#D19A66"> null</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> curr</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E06C75"> head</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    while</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E06C75">curr</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        let</span><span style="color:#383A42;--shiki-dark:#E06C75"> next</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E5C07B"> curr</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">next</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E5C07B">        curr</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">next</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E06C75"> prev</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">        prev</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E06C75"> curr</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E06C75">        curr</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E06C75"> next</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#383A42;--shiki-dark:#E06C75"> prev</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="二叉树遍历">二叉树遍历</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> preorderTraversal</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> traversal</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#0184BC;--shiki-dark:#56B6C2">!</span><span style="color:#383A42;--shiki-dark:#E06C75">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">return</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E5C07B">        result</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">push</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E5C07B">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">val</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">        traversal</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E5C07B">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">left</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">        traversal</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E5C07B">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">right</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;--shiki-dark:#61AFEF">    traversal</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="二叉树的最近公共祖先">二叉树的最近公共祖先</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> lowestCommonAncestor</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">p</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">q</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#0184BC;--shiki-dark:#56B6C2">!</span><span style="color:#383A42;--shiki-dark:#E06C75">root</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> ||</span><span style="color:#383A42;--shiki-dark:#E06C75"> root</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="color:#383A42;--shiki-dark:#E06C75"> p</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> ||</span><span style="color:#383A42;--shiki-dark:#E06C75"> root</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="color:#383A42;--shiki-dark:#E06C75"> q</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">return</span><span style="color:#383A42;--shiki-dark:#E06C75"> root</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> left</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> lowestCommonAncestor</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E5C07B">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">left</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">p</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">q</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> right</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> lowestCommonAncestor</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E5C07B">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">right</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">p</span><span style="color:#383A42;--shiki-dark:#ABB2BF">, </span><span style="color:#383A42;--shiki-dark:#E06C75">q</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#0184BC;--shiki-dark:#56B6C2">!</span><span style="color:#383A42;--shiki-dark:#E06C75">left</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">return</span><span style="color:#383A42;--shiki-dark:#E06C75"> right</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#0184BC;--shiki-dark:#56B6C2">!</span><span style="color:#383A42;--shiki-dark:#E06C75">right</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#A626A4;--shiki-dark:#C678DD">return</span><span style="color:#383A42;--shiki-dark:#E06C75"> left</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#383A42;--shiki-dark:#E06C75"> root</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>
<h3 id="bfs">BFS</h3>
<pre class="astro-code astro-code-themes one-light one-dark-pro" style="background-color:#FAFAFA;--shiki-dark-bg:#282c34;color:#383A42;--shiki-dark:#abb2bf; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">function</span><span style="color:#4078F2;--shiki-dark:#61AFEF"> bfs</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> []</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    let</span><span style="color:#383A42;--shiki-dark:#E06C75"> queue</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="color:#383A42;--shiki-dark:#E06C75">root</span><span style="color:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    while</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E5C07B">queue</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">length</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        let</span><span style="color:#383A42;--shiki-dark:#E06C75"> node</span><span style="color:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="color:#383A42;--shiki-dark:#E5C07B"> queue</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">shift</span><span style="color:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#E5C07B">        result</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">push</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E5C07B">node</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">val</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E5C07B">node</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">left</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#383A42;--shiki-dark:#E5C07B">queue</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">push</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E5C07B">node</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">left</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">        if</span><span style="color:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="color:#383A42;--shiki-dark:#E5C07B">node</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">right</span><span style="color:#383A42;--shiki-dark:#ABB2BF">) </span><span style="color:#383A42;--shiki-dark:#E5C07B">queue</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#4078F2;--shiki-dark:#61AFEF">push</span><span style="color:#383A42;--shiki-dark:#ABB2BF">(</span><span style="color:#383A42;--shiki-dark:#E5C07B">node</span><span style="color:#383A42;--shiki-dark:#ABB2BF">.</span><span style="color:#E45649;--shiki-dark:#E06C75">right</span><span style="color:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#A626A4;--shiki-dark:#C678DD">    return</span><span style="color:#383A42;--shiki-dark:#E06C75"> result</span></span>
<span class="line"><span style="color:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>`,o={title:"前端八股",description:"前端八股",pubDate:"2023-11-09T00:00:00.000Z",isDraft:!0,lastModified:"2024-07-31T19:58:26+08:00"},e="/home/runner/work/astro-blur/astro-blur/src/content/posts/front-end.md",p=void 0;function F(){return`
## JS

### prototype

- 每个函数都有一个prototype属性，指向一个对象，这个对象的所有属性和方法，都会被构造函数的实例继承
- 每个对象都有一个\`__proto__\`属性，指向它的原型对象(构造函数的prototype)

### 原型链

- 每个对象都有一个\`__proto__\`属性，指向它的原型对象
- 原型对象也是对象，也有\`__proto__\`属性，指向它的原型对象
- 一直往上找，直到\`__proto__\`为null

### 事件循环

- JS是单线程的，异步任务会被放到任务队列中，等待执行
- 任务队列分为宏任务和微任务
- 宏任务：宿主环境提供的任务，如\`setTimeout\` \`setInterval\` \`setImmediate\` \`requestAnimationFrame\` \`I/O\` \`UI rendering\`
- 微任务：JS引擎提供的任务，如\`Promise.then\` \`MutationObserver\` \`process.nextTick\`
- 执行同步代码 -> 执行所有微任务 -> 执行一个宏任务 -> 执行所有微任务 -> ...

### 闭包

- 闭包是指有权访问另一个函数作用域中的变量的函数
- 作用：保护变量不被污染，保存变量

### this

- 默认绑定：直接调用函数，this指向全局对象
- 隐式绑定：函数作为对象的方法调用，this指向对象
- 显示绑定：\`call\` \`apply\` \`bind\`，this指向指定对象
- new绑定：构造函数调用，this指向实例对象
- 箭头函数：this指向定义时所在的对象

### Object/Map/WeakMap

- Object：键为字符串/符号，键值对无序
- Map：键可以为任意类型，键值对有序（插入顺序），size属性
- WeakMap：键只能为对象，无序不可遍历，键所指向的对象可以被垃圾回收（弱引用）

### 数组去重

#### Set

\`\`\`js
function unique(arr) {
    return [...new Set(arr)]
}
\`\`\`

#### indexOf

\`\`\`js
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}
\`\`\`

### for...of/for...in

- for...of：遍历可迭代对象，如数组/字符串/Map/Set的值
- for...in：遍历对象的可枚举属性，包括原型链上的属性

## Browser

### 重绘/重排

- 重绘：元素样式改变，不影响布局
- 重排：元素位置改变，影响布局

### BFC

- 块级格式化上下文，是一个独立的渲染区域，内部元素不会影响外部元素
- 元素在垂直方向一个接一个排列，水平方向占满父元素
- 触发：根元素/浮动元素/绝对定位元素/display为\`inline-block\` \`flex\` \`grid\`等/overflow不为visible
- 作用：清除浮动/防止margin重叠

### MPA/SPA

- MPA：多页面应用，每次跳转都会请求新的页面，首屏快，SEO好，页面切换慢
- SPA：单页面应用，只有一个页面，通过路由切换，只请求数据

### CSS计算过程

- 确定声明值
- 层叠
- 继承
- 使用默认值

## 性能优化

- http缓存（强缓存/协商缓存）
- CDN
- 动态加载（路由/组件/图片懒加载）
- 合并请求
- 骨架屏
- SSR（prerender）
- service worker
- http2/quic
- gzip/br
- webp
- async/defer
- 防抖/节流
- 事件委托

### 缓存

强缓存：浏览器直接从本地缓存中读取资源，不会发请求，状态码为200

\`Cache-Control: max-age=31536000\` \`Expires: Wed, 21 Oct 2020 07:28:00 GMT\`

协商缓存：过期，客户端和服务端协商资源是否更新，没有更新，返回304

响应\`Last-Modified: Wed, 21 Oct 2020 07:28:00 GMT\` \`Etag: "5f8f2a80-2b"\`

请求\`If-Modified-Since: Wed, 21 Oct 2020 07:28:00 GMT\` \`If-None-Match: "5f8f2a80-2b"\`

### 防抖/节流

防抖：事件触发前，n秒内没有再次触发，则执行事件，n秒内再次触发，则重新计时

节流：事件触发后，n秒内只执行一次事件

\`\`\`js
function debounce(fn, delay) {
    let timer = null
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}
\`\`\`

\`\`\`js
function throttle(fn, delay) {
    let timer = null
    return function () {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
\`\`\`

## 网络

### TLS

1. ->ClientHello，版本号，随机数，加密算法
2. <-ServerHello，版本号，随机数，加密算法
3. <-证书(验证)
4. ->公钥加密的pre-master secret
5. 双方随机数+PMSec生成会话密钥
6. <->ChangeCipherSpec+Finished

### HTTP2

- 多路复用/二进制分帧/首部压缩/服务端推送/流量控制

## 安全

### XSS

- 跨站脚本攻击，向页面注入恶意脚本
- 防范：转义/过滤/限制cookie

### CSRF

- 跨站请求伪造，利用用户登录状态发起恶意请求
- 防范：验证referer/验证token

## 手写

### Promise.all

\`\`\`js
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                result[i] = res
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        }
    })
}
\`\`\`

### promisify

\`\`\`js
function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
    }
}
\`\`\`

### Vue3响应式

\`\`\`js
function reactive(obj) {
    const handler = {
        get(target, key, receiver) {
            track(target, key)
            return Reflect.get(target, key, receiver)
        },
        set(target, key, value, receiver) {
            const oldValue = target[key]
            const result = Reflect.set(target, key, value, receiver)
            if (oldValue !== value) {
                trigger(target, key)
            }
            return result
        }
    }
    return new Proxy(obj, handler)
}
\`\`\`

### call

\`\`\`js
Function.prototype.call = function (context, ...args) {
    context = context || window
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}
\`\`\`

### bind

\`\`\`js
Function.prototype.bind = function (context, ...args) {
    const fn = this
    return function (...args2) {
        return fn.call(context, ...args, ...args2)
    }
}
\`\`\`

### new

\`\`\`js
function myNew(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const result = fn.call(obj, ...args)
    return result instanceof Object ? result : obj
}
\`\`\`

## 算法

### 反转链表

\`\`\`js
function reverseList(head) {
    let prev = null
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
\`\`\`

### 二叉树遍历

\`\`\`js
function preorderTraversal(root) {
    let result = []

    function traversal(root) {
        if (!root) return
        result.push(root.val)
        traversal(root.left)
        traversal(root.right)
    }

    traversal(root)
    return result
}
\`\`\`

### 二叉树的最近公共祖先

\`\`\`js
function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (!left) return right
    if (!right) return left
    return root
}
\`\`\`

### BFS

\`\`\`js
function bfs(root) {
    let result = []
    let queue = [root]
    while (queue.length) {
        let node = queue.shift()
        result.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return result
}
\`\`\`
`}function C(){return n}function u(){return[{depth:2,slug:"js",text:"JS"},{depth:3,slug:"prototype",text:"prototype"},{depth:3,slug:"原型链",text:"原型链"},{depth:3,slug:"事件循环",text:"事件循环"},{depth:3,slug:"闭包",text:"闭包"},{depth:3,slug:"this",text:"this"},{depth:3,slug:"objectmapweakmap",text:"Object/Map/WeakMap"},{depth:3,slug:"数组去重",text:"数组去重"},{depth:4,slug:"set",text:"Set"},{depth:4,slug:"indexof",text:"indexOf"},{depth:3,slug:"forofforin",text:"for…of/for…in"},{depth:2,slug:"browser",text:"Browser"},{depth:3,slug:"重绘重排",text:"重绘/重排"},{depth:3,slug:"bfc",text:"BFC"},{depth:3,slug:"mpaspa",text:"MPA/SPA"},{depth:3,slug:"css计算过程",text:"CSS计算过程"},{depth:2,slug:"性能优化",text:"性能优化"},{depth:3,slug:"缓存",text:"缓存"},{depth:3,slug:"防抖节流",text:"防抖/节流"},{depth:2,slug:"网络",text:"网络"},{depth:3,slug:"tls",text:"TLS"},{depth:3,slug:"http2",text:"HTTP2"},{depth:2,slug:"安全",text:"安全"},{depth:3,slug:"xss",text:"XSS"},{depth:3,slug:"csrf",text:"CSRF"},{depth:2,slug:"手写",text:"手写"},{depth:3,slug:"promiseall",text:"Promise.all"},{depth:3,slug:"promisify",text:"promisify"},{depth:3,slug:"vue3响应式",text:"Vue3响应式"},{depth:3,slug:"call",text:"call"},{depth:3,slug:"bind",text:"bind"},{depth:3,slug:"new",text:"new"},{depth:2,slug:"算法",text:"算法"},{depth:3,slug:"反转链表",text:"反转链表"},{depth:3,slug:"二叉树遍历",text:"二叉树遍历"},{depth:3,slug:"二叉树的最近公共祖先",text:"二叉树的最近公共祖先"},{depth:3,slug:"bfs",text:"BFS"}]}const f=a((t,k,c)=>{const{layout:d,...s}=o;return s.file=e,s.url=p,l`${i()}${r(n)}`});export{f as Content,C as compiledContent,f as default,e as file,o as frontmatter,u as getHeadings,F as rawContent,p as url};
