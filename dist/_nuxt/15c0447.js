(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{276:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZTt9LmNscy0ye2ZpbGw6IzY3NzdlZjtzdHJva2U6bm9uZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MzBweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnN0aXNsYS1maWxsPC90aXRsZT48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjUwMCIgY3k9IjUwMCIgcj0iNTAwIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDg2LjUsNTY0LjIxUzM3NS4yOCw0NjguNSwzNTYsNDM5LjE0cy0yOS01OC42NC0yOS04Ny44NnEwLTYzLjI1LDQ4LjIyLTEwOC41M3QxMTktNDUuMjdhMTg3Ljc3LDE4Ny43NywwLDAsMSw4Ni43MywyMS4wOGMyMCwxMC4yNCw4Ni43MSw3Mi4xMiwxMzMuODQsMTE5LjM2YTU2LjE2LDU2LjE2LDAsMCwxLTIuNTUsODEuOGgwYTU2LjE1LDU2LjE1LDAsMCwxLTc3LjI4LTIuODVjLTQ2Ljg4LTQ3LjgyLTExOS0xMDguNTktMTQyLjUtMTA4LjU5cS0yMi43OSwwLTM3LjI4LDEyLjJUNDQwLjY3LDM0OHEwLDE1LjMsMTAuMzUsMjguOTVjOS4zOSwxMi4xMyw4NC45MSw4MC4yOCw4NC45MSw4MC4yOHM4OC43OSw3NC4zLDEwOC4xMiwxMDMuNjYsMjksNTguNjQsMjksODcuODZxMCw2My4yNS00OC4yMiwxMDguNTN0LTExOSw0NS4yN2ExODcuNzcsMTg3Ljc3LDAsMCwxLTg2LjczLTIxLjA4Yy0yMC0xMC4yNC04Ni43MS03Mi4xMi0xMzMuODQtMTE5LjM2YTU2LjE2LDU2LjE2LDAsMCwxLDIuNTUtODEuOGgwYTU2LjE1LDU2LjE1LDAsMCwxLDc3LjI4LDIuODVDNDExLjk0LDYzMSw0ODQsNjkxLjcyLDUwNy41Niw2OTEuNzJxMjIuNzksMCwzNy4yOC0xMi4yVDU1OS4zMyw2NTJxMC0xNS4zLTEwLjM1LTI4Ljk1QzUzOS41OSw2MTEsNDg2LjUsNTY0LjIxLDQ4Ni41LDU2NC4yMVoiLz48L3N2Zz4="},293:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-brand"},[e("img",{staticClass:"shadow-light rounded-circle",attrs:{src:r(276),alt:"Login Logo",width:"100"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",[this._v("Login")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-block"},[e("label",{staticClass:"control-label",attrs:{for:"password"}},[this._v("Password")]),this._v(" "),e("div",{staticClass:"float-right"},[e("a",{staticClass:"text-small",attrs:{href:"auth-forgot-password.html"}},[this._v("\n                                    Forgot Password?\n                                    ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",name:"remember",tabindex:"3",id:"remember-me"}}),this._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"remember-me"}},[this._v("Remember Me")])])])}],o=r(9),l={middleware:function(t){var e=t.store,r=t.redirect;if(1==e.state.user.is_login)return r("/")},setup:function(){var t=Object(o.i)({username:"admin",password:"admin"}),e=Object(o.i)({username:!0,password:!0});return{login_info:t,validation:e,loginFunc:function(){if(e.username=!0,e.password=!0,"admin"!=t.username&&(e.username=!1),"admin"!=t.password&&(e.password=!1),!e.username||!e.password)return!1;this.$store.dispatch("user/setUserdata",t),this.$store.dispatch("user/setLogin",1),this.$router.push("/")}}}},c=r(24),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("section",{staticClass:"section"},[r("div",{staticClass:"container mt-5"},[r("div",{staticClass:"col-12 col-sm-8 offset-sm-2 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"},[t._m(0),t._v(" "),r("div",{staticClass:"card card-primary"},[t._m(1),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login_info.username,expression:"login_info.username"}],class:t.validation.username?"form-control":"form-control is-invalid",attrs:{id:"username",type:"username",name:"username",tabindex:"1",required:"",autofocus:""},domProps:{value:t.login_info.username},on:{input:function(e){e.target.composing||t.$set(t.login_info,"username",e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Wrong username\n                            ")])]),t._v(" "),r("div",{staticClass:"form-group"},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login_info.password,expression:"login_info.password"}],class:t.validation.password?"form-control":"form-control is-invalid",attrs:{id:"password",type:"password",name:"password",tabindex:"2",required:""},domProps:{value:t.login_info.password},on:{input:function(e){e.target.composing||t.$set(t.login_info,"password",e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Wrong password\n                            ")])]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit",tabindex:"4"},on:{click:t.loginFunc}},[t._v("\n                                Login\n                            ")])])])]),t._v(" "),r("div",{staticClass:"mt-5 text-muted text-center"},[t._v("\n                    Don't have an account? "),r("nuxt-link",{attrs:{to:"/register"}},[t._v("Create One")])],1),t._v(" "),r("div",{staticClass:"simple-footer"},[t._v("\n                    Copyright © Nuxt-Stisla 2020\n                ")])])])])])}),n,!1,null,"0f9d7042",null);e.default=component.exports}}]);