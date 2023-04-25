import{_ as s,c as l,o as a,V as n}from"./chunks/framework.9928bc23.js";const m=JSON.parse('{"title":"html5","description":"","frontmatter":{"layout":"doc","lastUpdated":true},"headers":[],"relativePath":"web-study/studynotes/htmlnotes/html02.md","lastUpdated":null}'),p={name:"web-study/studynotes/htmlnotes/html02.md"},t=n(`<h1 id="html5" tabindex="-1">html5 <a class="header-anchor" href="#html5" aria-label="Permalink to &quot;html5&quot;">​</a></h1><h2 id="_1-什么是html5" tabindex="-1">1.什么是html5 <a class="header-anchor" href="#_1-什么是html5" aria-label="Permalink to &quot;1.什么是html5&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定。</p><p>HTML5的设计目的是为了在移动设备上支持多媒体。</p></div><div class="tip custom-block"><p class="custom-block-title">html5</p><p>html5是下一代标准</p><p>HTML5 是 W3C 与 WHATWG(Web Hypertext Application Technology Working Group) 合作的结果</p><p>WHATWG 致力于 web 表单和应用程序，而 W3C 专注于 XHTML 2.0</p><p>在 2006 年，双方决定进行合作，来创建一个新版本的 HTML。</p></div><blockquote><p>html5中新增的一些新特性：</p><ul><li>用于绘画的 canvas 元素</li><li>用于媒介回放的 video 和 audio 元素</li><li>对本地离线存储的更好的支持</li><li>新的特殊内容元素，比如 article、footer、header、nav、section</li><li>新的表单控件，比如 calendar、date、time、email、url、search</li></ul></blockquote><p>html5的骨架</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">文档标题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		文档内容......</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_2-html5相比于html4多了哪些东西" tabindex="-1">2.html5相比于html4多了哪些东西 <a class="header-anchor" href="#_2-html5相比于html4多了哪些东西" aria-label="Permalink to &quot;2.html5相比于html4多了哪些东西&quot;">​</a></h2><blockquote><p>1.html5 支持多媒体</p><blockquote><p>video 视频</p><p>audio 音频</p></blockquote><p>2.html5 支持开发应用</p><blockquote><p>XHTMLHttpRequest 2</p><p>本地数据存储</p><p>访问本地文件</p><p>本地 SQL 数据</p><p>缓存引用</p><p>Javascript 工作者</p></blockquote><p>3.html5 支持图形</p><blockquote><p>使用 canvas 元素</p><p>使用内联 svg</p><p>使用 <a href="https://www.runoob.com/css3/css3-2dtransforms.html" target="_blank" rel="noreferrer">CSS3 2D 转换</a>、<a href="https://www.runoob.com/css3/css3-3dtransforms.html" target="_blank" rel="noreferrer">CSS3 3D 转换</a></p></blockquote><p>4.html5 全面支持css3</p><blockquote><ul><li>新选择器</li><li>新属性</li><li>动画</li><li>2D/3D 转换</li><li>圆角</li><li>阴影效果</li><li>可下载的字体</li></ul></blockquote><p>5.html5 增加了很多语义标签</p><blockquote><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   定义了文档的头部区域</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">         定义导航链接的部分</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">aside</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">aside</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 	定义页面的侧边栏内容</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">article</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">article</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 定义页面独立的内容区域</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   定义 section 或 document 的页脚</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 定义文档中的节（section、区段）</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">progress</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">progress</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">定义任何类型的任务的进度</span></span></code></pre></div></blockquote><p>6.html5 表单添加了新表单元素, 新属性，新输入类型，自动验证</p><p>7.html5 删除了一些无用的标签</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">acronym</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">applet</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">basefont</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">big</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">center</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dir</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">font</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">frame</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">frameset</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">noframes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">strike</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></blockquote><h2 id="_3-浏览器的支持" tabindex="-1">3.浏览器的支持 <a class="header-anchor" href="#_3-浏览器的支持" aria-label="Permalink to &quot;3.浏览器的支持&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">html5对于浏览器的支持</p><p>对于现在大部分的浏览器都得到很好的支持</p><p>但是 像 IE9 以下的都不支持了</p></div><h2 id="_4-canvas标签" tabindex="-1">4.canvas标签 <a class="header-anchor" href="#_4-canvas标签" aria-label="Permalink to &quot;4.canvas标签&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">canvas标签</p><p>定义图形的，但是要靠js脚本来绘制图形</p><p>简而言之，这个标签是个画布，js脚本是画笔</p><p>具体的玩法请查阅<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API" target="_blank" rel="noreferrer">mdn</a>进行学习</p></div><h2 id="_5-svg矢量图" tabindex="-1">5.SVG矢量图 <a class="header-anchor" href="#_5-svg矢量图" aria-label="Permalink to &quot;5.SVG矢量图&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">SVG矢量图</p><p>可以使用svg标签定义可缩放矢量图形</p></div><blockquote><p>优势:</p><ul><li>SVG 图像可通过文本编辑器来创建和修改</li><li>SVG 图像可被搜索、索引、脚本化或压缩</li><li>SVG 是可伸缩的</li><li>SVG 图像可在任何的分辨率下被高质量地打印</li><li>SVG 可在图像质量不下降的情况下被放大</li></ul></blockquote><p>SVG 与 canvas 的区别:</p><blockquote><p>SVG 是一种使用 XML 描述 2D 图形的语言。</p><p>Canvas 通过 JavaScript 来绘制 2D 图形。</p><p>SVG 不依赖分辨率，而 canvas依赖</p><p>SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素添加 JavaScript 事件处理 canvas不行</p></blockquote><p>详细去<a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG" target="_blank" rel="noreferrer">mdn</a>了解</p>`,19),o=[t];function e(c,r,D,F,i,y){return a(),l("div",null,o)}const d=s(p,[["render",e]]);export{m as __pageData,d as default};
