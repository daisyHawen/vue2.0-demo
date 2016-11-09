const User = {
	template: '<div>User{{$route.params.id}}</div>'
}
const router = new VueRouter({
	routes: [{
		//动态路径参数
		path: '/user/:id',
		components: User
	}]
})