(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{294:function(t,e,l){"use strict";l.r(e);var o=l(9),r={middleware:"notAuthenticate",layout:"dashboard",nuxtI18n:{paths:{id:"/profil",en:"/profile"}},setup:function(){var t=Object(o.i)({first_name:"Zucc",last_name:"",email:"zucc@example.com",phone:"081234567890",bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged.",job:"Full-Stack Web Developer"});return Object(o.g)((function(){})),{profile:t}}},n=l(24),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section"},[o("div",{staticClass:"section-header"},[o("h1",[t._v(t._s(t.$t("profile.section_header")))])]),t._v(" "),o("div",{staticClass:"section-body"},[o("div",{staticClass:"row mt-sm-4"},[o("div",{staticClass:"col-12 col-md-12 col-lg-5"},[o("div",{staticClass:"card profile-widget"},[o("div",{staticClass:"profile-widget-header"},[o("img",{staticClass:"rounded-circle profile-widget-picture",attrs:{src:l(96),alt:"Profile Pict."}}),t._v(" "),o("div",{staticClass:"profile-widget-items"},[o("div",{staticClass:"profile-widget-item"},[o("div",{staticClass:"profile-widget-item-label"},[t._v(t._s(t.$t("profile.post")))]),t._v(" "),o("div",{staticClass:"profile-widget-item-value"},[t._v("999")])]),t._v(" "),o("div",{staticClass:"profile-widget-item"},[o("div",{staticClass:"profile-widget-item-label"},[t._v(t._s(t.$t("profile.follower")))]),t._v(" "),o("div",{staticClass:"profile-widget-item-value"},[t._v("999M")])]),t._v(" "),o("div",{staticClass:"profile-widget-item"},[o("div",{staticClass:"profile-widget-item-label"},[t._v(t._s(t.$t("profile.following")))]),t._v(" "),o("div",{staticClass:"profile-widget-item-value"},[t._v("0")])])])]),t._v(" "),o("div",{staticClass:"profile-widget-description"},[o("div",{staticClass:"profile-widget-name"},[t._v(" "+t._s(t.profile.first_name)+" "),o("div",{staticClass:"text-muted d-inline font-weight-normal"},[o("div",{staticClass:"slash"}),t._v(" "+t._s(t.profile.job))])]),t._v("\n                        "+t._s(t.profile.bio)+"\n                    ")]),t._v(" "),o("div",{staticClass:"card-footer text-center"},[o("div",{staticClass:"font-weight-bold mb-2"},[t._v(t._s(t.$t("profile.follow"))+" "+t._s(t.profile.first_name)+" "+t._s(t.$t("profile.follow_on")))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])]),t._v(" "),o("div",{staticClass:"col-12 col-md-12 col-lg-7"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[o("h4",[t._v(t._s(t.$t("profile.edit.title")))])]),t._v(" "),o("div",{staticClass:"card-body"},[o("div",{staticClass:"row"},[o("div",{staticClass:"form-group col-md-6 col-12"},[o("label",[t._v(t._s(t.$t("profile.edit.first_name")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.first_name,expression:"profile.first_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.profile.first_name},on:{input:function(e){e.target.composing||t.$set(t.profile,"first_name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-md-6 col-12"},[o("label",[t._v(t._s(t.$t("profile.edit.last_name")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.last_name,expression:"profile.last_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.profile.last_name},on:{input:function(e){e.target.composing||t.$set(t.profile,"last_name",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"form-group col-md-7 col-12"},[o("label",[t._v(t._s(t.$t("profile.edit.email")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.email,expression:"profile.email"}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.profile.email},on:{input:function(e){e.target.composing||t.$set(t.profile,"email",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-md-5 col-12"},[o("label",[t._v(t._s(t.$t("profile.edit.phone")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.phone,expression:"profile.phone"}],staticClass:"form-control",attrs:{type:"tel"},domProps:{value:t.profile.phone},on:{input:function(e){e.target.composing||t.$set(t.profile,"phone",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"form-group col-12"},[o("label",[t._v(t._s(t.$t("profile.edit.bio")))]),t._v(" "),o("vue-editor",{ref:"toastuiEditor",attrs:{initialValue:t.profile.bio,initialEditType:"wysiwyg"}})],1)]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"form-group mb-0 col-12"},[o("div",{staticClass:"custom-control custom-checkbox"},[o("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",name:"remember",id:"newsletter"}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"newsletter"}},[t._v(t._s(t.$t("profile.edit.subs")))]),t._v(" "),o("div",{staticClass:"text-muted form-text"},[t._v("\n                                        "+t._s(t.$t("profile.edit.subs_info"))+"\n                                    ")])])])])]),t._v(" "),o("div",{staticClass:"card-footer text-right"},[o("button",{staticClass:"btn btn-primary"},[t._v(t._s(t.$t("button.update")))])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-icon btn-dark mr-1",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-f"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-icon btn-dark mr-1",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-icon btn-dark mr-1",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-github"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-icon btn-dark",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram"})])}],!1,null,"3d4408fb",null);e.default=component.exports}}]);