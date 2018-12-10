(function(){
	
	window.WordCloud = function(){


	};


	window.WordCloud.prototype = {

		constructor: window.WordCloud,

		generateId: function(word){

			return "word-" + md5(word);
		}

		// 添加新的词
		add: function(word){

			var id = this.generateId();

			this.fallIntoCloud(id, $("<span class='word' id='"+ id +"'></span>"));
		},

		// 删除某个词
		remove : function(word){

			$("#WordCloud .container").find("#"+ this.generateId() ).remove();
		},

		// 新的dom标签掉落到云中
		fallIntoCloud: function(id, dom){


		}

	};

})();