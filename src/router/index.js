import VueRouter from "vue-router";
import StuMana from'../pages/StuMana';
import AllSco from'../pages/AllSco';
import ClaCho from'../pages/ClaCho';
import Code from'../pages/Code';
import CorWor from'../pages/CorWor';
import MyQue from'../pages/MyQue';
import MyWor from'../pages/MyWor';
import TesMana from'../pages/TesMana';
import AddMess from'../pages/AddMess';

export default new VueRouter({
	routes:[
    {
      path:'/AllSco',
      component:AllSco
    },
    {
      path:'/ClaCho',
      component:ClaCho,
    },
    {
      path:'/AddMess',
      component:AddMess
    },
    {
      path:'/Code',
      component:Code
    },
    {
      path:'/CorWor',
      component:CorWor
    },
    {
      path:'/MyQue',
      name: 'MQ',
      component:MyQue
    },
    {
      path:'/MyWor',
      component:MyWor
    },
    {
      path:'/TesMana',
      component:TesMana
    },
    {
      path:'/StuMana',
      component:StuMana
    },
    {
      path:'/',
      component:ClaCho
    }
	]
})
