import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store'
import {TimePicker,Row,Col,Menu,Submenu,
  Button,TableColumn,Table,Pagination,MessageBox,
  Form,FormItem,Input,Select,Option,DatePicker,
  Switch,Checkbox,CheckboxGroup,Radio,RadioGroup
} from 'element-ui';
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = MessageBox;
Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(Button);
Vue.use(TimePicker);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(TableColumn);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);

new Vue({
  router,
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus=this
  }   //全局事件
}).$mount('#app')
