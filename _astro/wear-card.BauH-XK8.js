import{c as e}from"./astro-component.DIh9Wi00.js";import{g as p,p as a,u as o}from"./hoisted.ClCS5NlP.js";import"./astro/assets-service.jDRrhE25.js";import"./config.7_d3ayKu.js";const t=`<p>适用于能开通<strong>空白门卡</strong>的，带<strong>NFC</strong>功能的手表/手环模拟门卡/饭卡</p>
<p>本教程适用于能开通<strong>空白门卡</strong>的，带<strong>NFC</strong>功能的手表/手环模拟门卡/饭卡</p>
<p>先上成品图（以<strong>小米手表</strong>为例）</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/4e6e2d22b8dc64ad333724ae7c413c7f.webp" alt=""></p>
<p>在开始模拟<strong>饭卡</strong>前，请确认以下几点，否则可能会导致模拟/刷卡失败</p>
<ul>
<li>确保为<strong>联网</strong>卡，即卡中的金额等数据储存在云端，使用手表刷卡时，实体卡中的金额也会<strong>同步</strong>变化。（被请喝茶了**概不负责
** :) ）</li>
<li>确保读卡器不会读取卡片的<strong>0扇区</strong>（含厂商信息），因为大部分卡片模拟无法写入</li>
<li>可以先用<strong>Mifare</strong>读取下卡片的标签信息，如果是SAK08基本可以模拟（国产半加密卡几乎无解，详见下方<strong>补充</strong>）</li>
</ul>
<h2 id="准备">准备</h2>
<p>1.<strong>PN532</strong>套件，淘宝价格30元左右，需要USB转TTL，记得让卖家<strong>焊接</strong>好</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/05a4ce64ed6c26bfd188633c913ec4bc.webp" alt=""></p>
<p>2.Windows平台电脑（此处仅提供windows平台套件）</p>
<p>3.全功能NFC手机一台（以<strong>小米8</strong>为例），安装好<a href="https://www.icaria.de/mct/releases/">Mifare Classic Tool</a>（建议最新版本）</p>
<p>4.驱动程序 下载地址：<a href="https://jmzzz.lanzout.com/iiQ7Alkh6ba">https://jmzzz.lanzout.com/iiQ7Alkh6ba</a> （2022/01/24更新）</p>
<p>5.操作程序 下载地址：<a href="https://jmzzz.lanzout.com/iLYV6lkxi9g">https://jmzzz.lanzout.com/iLYV6lkxi9g</a>（2022/01/24更新）</p>
<h2 id="开始破解">开始破解</h2>
<p>1.安装好驱动后，将PN532模块连接到PC，打开<strong>设备管理器</strong>，记录下<strong>端口</strong></p>
<p><img src="https://blog-cdn.jaze.top/2023/11/989c94594a793c1fda19b1a7ffd18700.webp" alt=""></p>
<p>2.用<strong>记事本</strong>打开532破解全加密\\破解\\libnfc.conf，修改成对应的<strong>端口</strong></p>
<p><img src="https://blog-cdn.jaze.top/2023/11/96c7eb8fa6bbdd88bc94a5a1eb98e60d.webp" alt=""></p>
<p>3.将饭卡放置在PN532模块上，打开破解内的.exe程序，点击<strong>全加密卡破解密钥</strong>，直到连续出现<strong>3次</strong>及以上的密钥（Key
A）并复制下来，并关闭CMD窗口</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/a07ca19d6995f456320c575587d2f9a1.webp" alt=""></p>
<p><img src="https://blog-cdn.jaze.top/2023/11/b165ba29b3cbfd5b1e63a3b978023d36.webp" alt=""></p>
<p>4.将Key A使用已知密钥读取，跑Key B（大概几分钟就能搞定）</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/d459c6deb59aef32e1d58ea69e332167.webp" alt=""></p>
<p>成功之后会在该目录下生成<strong>key.dump</strong></p>
<p><img src="https://blog-cdn.jaze.top/2023/11/adee036bcff76041d7729487e41a054e.webp" alt=""></p>
<h2 id="提取密钥">提取密钥</h2>
<p>手表无法直接模拟全加密的饭卡，因此还需要提取饭卡的密钥</p>
<p>1.打开532破解全加密\\数据\\Dump2Text.exe，将刚刚得到的key.dump转换为.txt文本</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/0863d5238bfb0a2b0f844cc8f638ebf3.webp" alt=""></p>
<p>2.打开key.dump.txt，将里面的16组密钥复制出来到另一个新建的.txt文档（全为F的可以省略）</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/c0640564ea47db6ac2ed06fd01beb7f0.webp" alt=""></p>
<h2 id="模拟饭卡">模拟饭卡</h2>
<p>1.手机上打开打开NFC功能，打开<a href="https://www.icaria.de/mct/releases/">Mifare Classic Tool</a>
，选择编辑/新建密钥文件→新建文件→将密钥写入→保存（如果不能一次性写入的话，可以一行一行写入）</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/ff1b6a78e818a49aa3e867d99c614289.webp" alt=""></p>
<p>全部写入之后保存</p>
<p>2.选择读标签→将你刚刚的密钥勾上→将饭卡放在手机NFC的读取区域→开始映射及读取标签</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/c342fe60d035bd17c682875d4c4df4e5.webp" alt=""></p>
<p>3.将读取出来的数据保存（所有扇区都能读取出来才算成功哦）</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/d85bcdd3372406f05e06accb22551810.webp" alt=""></p>
<p>4.打开<strong>小米穿戴</strong>→我的→卡包→添加新门卡→空白门卡</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/b3ae09e12cfe2761867a9ba61e345432.webp" alt=""></p>
<p>5.回到Mifare，选择写标签→选择转储→选所有扇区→选刚刚你保存的转储文件→将手表放在手机NFC读取区域→写入</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/f26054a0df6965e512ae111b966691bc.webp" alt=""></p>
<p><img src="https://blog-cdn.jaze.top/2023/11/7c5d37aec03a0d17dcd173f7168c7670.webp" alt=""></p>
<h2 id="完成">完成</h2>
<p>接下来你就能拿着你的手环/手表去食堂/商店刷卡了ヾ(•ω•\`)o</p>
<p>亲测在食堂/商店/热水处可以使用息屏支付，且不会被查水表，充值时可以使用网上充值和原饭卡现金充值</p>
<h2 id="排障">排障</h2>
<p>如果遇到该驱动问题，可以右键-属性-驱动程序-更新驱动程序-浏览我的电脑以查找驱动程序-从列表中获取-选2008年的安装即可</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/da2c4eaa77abf35152b3f16e2758c5d3.webp" alt=""></p>
<p><img src="https://blog-cdn.jaze.top/2023/11/831060f3503afd7b2375c8cfe97300de.webp" alt=""></p>
<h2 id="补充21102">补充（21.10.2）</h2>
<p>关于<strong>国产半加密卡</strong>，因为没有漏洞，用pn532的话只能暴力解卡，费时费力，只能碰碰运气</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/bcd588562353adaabc7bba59378e11e1.webp" alt=""></p>
<p>使用默认密钥读取结果</p>
<p><img src="https://blog-cdn.jaze.top/2023/11/c3413886b68bc7472195d0d44ae8b0e6.webp" alt=""></p>
<p>全加密破解时卡住</p>
<h2 id="结尾">结尾</h2>
<p>部分内容参考自酷安@赵s哥等人的动态，感谢</p>
<p>驱动及操作程序来自网络，仅供交流学习使用</p>
<p>本教程还有存在有不完善的地方，欢迎在评论区补充</p>`,c={title:"腕上饭卡—手表模拟全加密卡",description:"适用于能开通空白门卡的，带NFC功能的手表/手环模拟门卡/饭卡",pubDate:"2021-02-12T00:00:00.000Z",heroImage:"https://blog-cdn.jaze.top/2023/11/4e6e2d22b8dc64ad333724ae7c413c7f.webp",lastModified:"2024-07-30T17:35:12+08:00"},b="/home/runner/work/astro-blur/astro-blur/src/content/posts/wear-card.md",d=void 0;function m(){return`
适用于能开通**空白门卡**的，带**NFC**功能的手表/手环模拟门卡/饭卡

本教程适用于能开通**空白门卡**的，带**NFC**功能的手表/手环模拟门卡/饭卡

先上成品图（以**小米手表**为例）

![](https://blog-cdn.jaze.top/2023/11/4e6e2d22b8dc64ad333724ae7c413c7f.webp)

在开始模拟**饭卡**前，请确认以下几点，否则可能会导致模拟/刷卡失败

* 确保为**联网**卡，即卡中的金额等数据储存在云端，使用手表刷卡时，实体卡中的金额也会**同步**变化。（被请喝茶了**概不负责
  ** :) ）
* 确保读卡器不会读取卡片的**0扇区**（含厂商信息），因为大部分卡片模拟无法写入
* 可以先用**Mifare**读取下卡片的标签信息，如果是SAK08基本可以模拟（国产半加密卡几乎无解，详见下方**补充**）

## 准备

1.**PN532**套件，淘宝价格30元左右，需要USB转TTL，记得让卖家**焊接**好

![](https://blog-cdn.jaze.top/2023/11/05a4ce64ed6c26bfd188633c913ec4bc.webp)

2.Windows平台电脑（此处仅提供windows平台套件）

3.全功能NFC手机一台（以**小米8**为例），安装好[Mifare Classic Tool](https://www.icaria.de/mct/releases/)（建议最新版本）

4.驱动程序 下载地址：[https://jmzzz.lanzout.com/iiQ7Alkh6ba](https://jmzzz.lanzout.com/iiQ7Alkh6ba) （2022/01/24更新）

5.操作程序 下载地址：[https://jmzzz.lanzout.com/iLYV6lkxi9g](https://jmzzz.lanzout.com/iLYV6lkxi9g)（2022/01/24更新）

## 开始破解

1.安装好驱动后，将PN532模块连接到PC，打开**设备管理器**，记录下**端口**

![](https://blog-cdn.jaze.top/2023/11/989c94594a793c1fda19b1a7ffd18700.webp)

2.用**记事本**打开532破解全加密\\\\破解\\\\libnfc.conf，修改成对应的**端口**

![](https://blog-cdn.jaze.top/2023/11/96c7eb8fa6bbdd88bc94a5a1eb98e60d.webp)

3.将饭卡放置在PN532模块上，打开破解内的.exe程序，点击**全加密卡破解密钥**，直到连续出现**3次**及以上的密钥（Key
A）并复制下来，并关闭CMD窗口

![](https://blog-cdn.jaze.top/2023/11/a07ca19d6995f456320c575587d2f9a1.webp)

![](https://blog-cdn.jaze.top/2023/11/b165ba29b3cbfd5b1e63a3b978023d36.webp)

4.将Key A使用已知密钥读取，跑Key B（大概几分钟就能搞定）

![](https://blog-cdn.jaze.top/2023/11/d459c6deb59aef32e1d58ea69e332167.webp)

成功之后会在该目录下生成**key.dump**

![](https://blog-cdn.jaze.top/2023/11/adee036bcff76041d7729487e41a054e.webp)

## 提取密钥

手表无法直接模拟全加密的饭卡，因此还需要提取饭卡的密钥

1.打开532破解全加密\\\\数据\\\\Dump2Text.exe，将刚刚得到的key.dump转换为.txt文本

![](https://blog-cdn.jaze.top/2023/11/0863d5238bfb0a2b0f844cc8f638ebf3.webp)

2.打开key.dump.txt，将里面的16组密钥复制出来到另一个新建的.txt文档（全为F的可以省略）

![](https://blog-cdn.jaze.top/2023/11/c0640564ea47db6ac2ed06fd01beb7f0.webp)

## 模拟饭卡

1.手机上打开打开NFC功能，打开[Mifare Classic Tool](https://www.icaria.de/mct/releases/)
，选择编辑/新建密钥文件→新建文件→将密钥写入→保存（如果不能一次性写入的话，可以一行一行写入）

![](https://blog-cdn.jaze.top/2023/11/ff1b6a78e818a49aa3e867d99c614289.webp)

全部写入之后保存

2.选择读标签→将你刚刚的密钥勾上→将饭卡放在手机NFC的读取区域→开始映射及读取标签

![](https://blog-cdn.jaze.top/2023/11/c342fe60d035bd17c682875d4c4df4e5.webp)

3.将读取出来的数据保存（所有扇区都能读取出来才算成功哦）

![](https://blog-cdn.jaze.top/2023/11/d85bcdd3372406f05e06accb22551810.webp)

4.打开**小米穿戴**→我的→卡包→添加新门卡→空白门卡

![](https://blog-cdn.jaze.top/2023/11/b3ae09e12cfe2761867a9ba61e345432.webp)

5.回到Mifare，选择写标签→选择转储→选所有扇区→选刚刚你保存的转储文件→将手表放在手机NFC读取区域→写入

![](https://blog-cdn.jaze.top/2023/11/f26054a0df6965e512ae111b966691bc.webp)

![](https://blog-cdn.jaze.top/2023/11/7c5d37aec03a0d17dcd173f7168c7670.webp)

## 完成

接下来你就能拿着你的手环/手表去食堂/商店刷卡了ヾ(•ω•\\\`)o

亲测在食堂/商店/热水处可以使用息屏支付，且不会被查水表，充值时可以使用网上充值和原饭卡现金充值

## 排障

如果遇到该驱动问题，可以右键-属性-驱动程序-更新驱动程序-浏览我的电脑以查找驱动程序-从列表中获取-选2008年的安装即可

![](https://blog-cdn.jaze.top/2023/11/da2c4eaa77abf35152b3f16e2758c5d3.webp)

![](https://blog-cdn.jaze.top/2023/11/831060f3503afd7b2375c8cfe97300de.webp)

## 补充（21.10.2）

关于**国产半加密卡**，因为没有漏洞，用pn532的话只能暴力解卡，费时费力，只能碰碰运气

![](https://blog-cdn.jaze.top/2023/11/bcd588562353adaabc7bba59378e11e1.webp)

使用默认密钥读取结果

![](https://blog-cdn.jaze.top/2023/11/c3413886b68bc7472195d0d44ae8b0e6.webp)

全加密破解时卡住

## 结尾

部分内容参考自酷安@赵s哥等人的动态，感谢

驱动及操作程序来自网络，仅供交流学习使用

本教程还有存在有不完善的地方，欢迎在评论区补充`}function w(){return t}function j(){return[{depth:2,slug:"准备",text:"准备"},{depth:2,slug:"开始破解",text:"开始破解"},{depth:2,slug:"提取密钥",text:"提取密钥"},{depth:2,slug:"模拟饭卡",text:"模拟饭卡"},{depth:2,slug:"完成",text:"完成"},{depth:2,slug:"排障",text:"排障"},{depth:2,slug:"补充21102",text:"补充（21.10.2）"},{depth:2,slug:"结尾",text:"结尾"}]}const u=e((s,r,g)=>{const{layout:l,...n}=c;return n.file=b,n.url=d,p`${a()}${o(t)}`});export{u as Content,w as compiledContent,u as default,b as file,c as frontmatter,j as getHeadings,m as rawContent,d as url};
