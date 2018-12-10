# WordCloud

<p align="left">
<img src="https://img.shields.io/badge/language-JavaScript-red.svg">
<img src="https://img.shields.io/badge/license-MIT-black.svg">
</p>

原生JavaScript实现词云特效（Implementing Word Cloud  Special Effects By JavaScript Without Libraries）.

## ✎ 摘要( Synopsis )

<img src="https://github.com/Lvsi-China/WordCloud/raw/master/extra/images/logo.gif">

## ♨ 介绍( Introduction )

在写我的 [EnglishKeeper](https://github.com/Lvsi-China/EnglishKeeper) 项目的时候，需要有词云功能，于是就单独先把这个 [WordCloud](https://github.com/Lvsi-China/WordCloud) 项目抽离出来了。由于是自己学习记忆单词时使用的词云工具，不对外公开，所以，我也没在样式上花费时间，特效简陋请见谅。不过大家可以自己修改源码创作自己喜欢的特效。

## ✣ 说明

此项目是附属于 [EnglishKeeper](https://github.com/Lvsi-China/EnglishKeeper) 项目的，目的都只是为了方便自己学习英文。因此，在学习过程中，我会根据自身的需求，来不定时的更新这两个项目、

## ➤ 代码

核心代码都在```src/js/WordCloud.js```文件中，WordCloud 对象负责所有的交互，部分代码如下 : 

```
window.WordCloud = function(){


};

window.WordCloud.prototype = {

	constructor: window.WordCloud,

	color: [ "#8A2BE2", "#FF69B4", "#FF0000" , "#7B68EE", "#228B22", "#98F898", "#00BFFF", "#008B8B", "#483D8B", "#32CD32" ],
	fontSize:[13,14,15,16,17,18,19,20,21,22],

	wordDatabase: [],

	init: function(){

		this.eventsRegister();
	},

	eventsRegister: function(){

		this.listenAddWordEvent();
		this.listenuploadWorsEvent();
	},
};
``` 

JavaScript负责特效的部分代码如下：
```
fallIntoCloud: function(id, dom){

	$("#WordCloud .body .container .word").removeClass("large").last().css({

		"font-size":this.generateFontSize(),
		"margin-left": window.WordCloud.prototype.generateLocation("marginLeft"), 
		"margin-top": window.WordCloud.prototype.generateLocation("marginTop")
	});
	
	$("#WordCloud .body .container").append(dom).addClass("animate");
	
	$("#"+id).css({
		
		"font-size": 50,
		"color": window.WordCloud.prototype.generateColor(),
		
		"margin-left":0,
		"margin-top":130,
	}).addClass("large");		
		
	setTimeout(function(){

		$("#WordCloud .body .container").removeClass("animate")
	},100);
}
```
