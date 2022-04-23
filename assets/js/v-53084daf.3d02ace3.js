"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[235],{6553:(e,a,l)=>{l.r(a),l.d(a,{data:()=>n});const n={key:"v-53084daf",path:"/JavaSE/Java%20Reflection.html",title:"Java Reflection",lang:"zh-CN",frontmatter:{date:"2022/2/10 20:08",sticky:!1,description:"Java的反射",title:"Java Reflection",tag:["JavaSE"]},excerpt:"",headers:[{level:2,title:"Java的反射「Reflection」",slug:"java的反射「reflection」",children:[{level:3,title:"概念",slug:"概念",children:[]},{level:3,title:"功能",slug:"功能",children:[]},{level:3,title:"优缺点",slug:"优缺点",children:[]},{level:3,title:"代码例子：",slug:"代码例子",children:[]}]}],git:{}}},7675:(e,a,l)=>{l.r(a),l.d(a,{default:()=>i});const n=(0,l(6252).uE)('<h2 id="java的反射「reflection」" tabindex="-1"><a class="header-anchor" href="#java的反射「reflection」" aria-hidden="true">#</a> Java的反射「Reflection」</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>  反射「Reflection」是Java被视为动态语言的关键，反射机制允许程序在执行期间借助Reflection API取得任何类的内部信息，并能直接操作任意对象内部属性及方法，如</p><blockquote><p>Class c = Class.forName(&quot;java.lang.String&quot;)<br> Class c = 类名.class  (常用)</p></blockquote><p>  加载完类以后，在堆内存的方法区中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。这个对象就像是一面镜子，透过这个镜子可以看到类的结构，所以称之为反射。</p><ul><li>正常方式； 引入需要的包类名称 -&gt; 通过new实例化 -&gt; 取得实例化对象</li><li>反射方式：实例化对象 -&gt; getClass()方法 -&gt; 得到完整的包类名称</li></ul><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3><ul><li>在运行时判断任意一个对象所属的类</li><li>在运行时构造任意一个类的对象</li><li>在运行时判断任意一个类所具有的成员变量和方法</li><li>在运行时获取泛型信息</li><li>在运行时调用任意一个对象的成员变量和方法</li><li>在运行时处理注解</li><li>生成动态代理（AOP）</li></ul><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3><ul><li>优点:</li><li>可以实现动态创建对象和编译，体现出很大的灵活性</li><li>缺点:</li><li>对性能有影响，使用反射基本上是一种解释操作，这类操作总是安于直接执行相同的操作，速度上的差距大概是几十倍</li></ul><h3 id="代码例子" tabindex="-1"><a class="header-anchor" href="#代码例子" aria-hidden="true">#</a> 代码例子：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static void main(String[] args) throws ClassNotFoundException {\n    // 通过反射获取类的class对象\n    Class c1 = Class.forName(&quot;reflection.User&quot;);\n    Class c2 = Class.forName(&quot;reflection.User&quot;);\n    System.out.println(c1);\n    System.out.println(c1.hashCode());\n    System.out.println(c2.hashCode());\n    // 一个类在内存中只有一个Class对象\n    // 一个类被加载后，类的整个结构都会被封装在Class对象中\n    System.out.println(c1 == c2);   //输出true\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',12),s={},i=(0,l(3744).Z)(s,[["render",function(e,a){return n}]])}}]);