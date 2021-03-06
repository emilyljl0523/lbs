define(["text!../module/sidebar/sidebar.tpl"],function(tpl){
	var SideBarView=Backbone.View.extend({
		el:".side-bar",
		initialize:function(){
			var data={menu:[{text:"用户数据1",url:"http://www/baidu.com"},{text:"用户数据2",url:"http://www/baidu.com"}],text:"1"};
			var render=template.compile(tpl);
			var html=render(data);
			this.$el.html(html); 
		},
		events:{
			"click .bar-item":"onOpenTab"
		},
		onOpenTab:function(e){
			var target=e.target;
			alert($(target).html());
			$('.content').html(2);
			e.preventDefault();
		}
	});
	return {
		sidebar:new SideBarView()
	};
})