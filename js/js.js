const HomeComponent = Vue.component('home',{
template:`
<div>
<p>T-shirt Design...</p>
<p>Price: $5.00</p>

</div>`,
});
 
const ReportingX = Vue.component('Reporting',{ //the naming within component doesn't matter much, just don't name it same as others
template:`
<div>
<p>Reporting info</p>
</div>`,
});

const ProductsX = Vue.component('Products', {
template:`
<div>
<p>Products w/sub-component and timer</p>
<sub-component ref="mySubComponent"></sub-component>
</div>`,

beforeRouteLeave: function(to, from, next){
console.log("In beforeRouteLeave of AnotherComponent")
this.$refs.mySubComponent.prepareToExit();
next();
}
});

const SubComponent = Vue.component('sub-component',{
template:`
<div>
<p>xxxSub-component w/timer</p>
</div>`,

data: function(){
return {
counter:0,
twoSecondsTimerEvents:null
}
},

methods:{
prepareToExit: function(){
console.log("Prep to exit sub comp, stopping 2secondTimerEvents")
clearInterval(this.twoSecondsTimerEvents)
}
}
});

const ROUTES = new VueRouter({
routes: [
{
path:'/',
redirect: '/home'
},{

name: 'home',
path: '/home',
component: HomeComponent
},{

name: 'Products',
path: '/products',
component: ProductsX
},{

name: 'Reporting', //this MUST match ALL router-link above
path: '/reporting', //this is url path
component: ReportingX //this MUST match const
}
]
});

new Vue({
el: '#topNavContainer',
  data: {
    message: 'Home 2!'
  },
router: ROUTES,
});