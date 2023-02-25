import{_ as e,c as a,o as s,a as o}from"./app.1de793c8.js";const g=JSON.parse('{"title":"Spawn","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"relativePath":"0.1.x/util/spawn.md"}'),t={name:"0.1.x/util/spawn.md"},n=o(`<h1 id="spawn" tabindex="-1">Spawn <a class="header-anchor" href="#spawn" aria-hidden="true">#</a></h1><p><code>task.spawn</code> is amazing. This is the greatest feature to ever grace the roblox update page. Not really, but it is a good feature, but it has some limitations. When spawning a large number of threads, it can use a lot of memory and be somewhat slow. As well as this, the only reason to use it is if we will be doing some asynchronous operation or if we don&#39;t trust the code to not error.</p><p><code>Spawn</code> solves this through thread reuse. As long as a given function doesn&#39;t error or yield, the thread will be reused. At scale, this can be a huge performance boost.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Red.</span><span style="color:#82AAFF;">Spawn</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,5),l=[n];function r(p,i,c,d,h,u){return s(),a("div",null,l)}const y=e(t,[["render",r]]);export{g as __pageData,y as default};