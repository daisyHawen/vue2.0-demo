/*定义模板，可以从其他地方引进来啊*/
var Foo = {
	template: '<div>foo</div>'
}
var Bar = {
	template: '<div>bar</div>'
}
var routes = [{
	path: '/foo',
	component: Foo
}, {
	path: '/bar',
	component: Bar
}]
var router = new VueRouter({
	routes: routes
})
var app = new Vue({
	router
}).$mount('#app');