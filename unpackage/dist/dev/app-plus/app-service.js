if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$p = {
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleAgree() {
        this.$emit("agree");
      },
      handleDisagree() {
        this.$emit("disagree");
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "view",
      { class: "popup-wrapper" },
      [
        vue.createElementVNode("view", { class: "popup-content" }, [
          vue.createElementVNode("scroll-view", {
            class: "content",
            "scroll-y": ""
          }, [
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Nullam bibendum sapien vitae lorem finibus, vitae scelerisque nulla aliquam.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Phasellus consectetur sem id velit egestas, ut laoreet nisl cursus.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Proin pharetra nunc at nisi tristique, nec consequat neque tristique.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Aenean sed tortor nec nisl vestibulum placerat.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Curabitur eget urna in mi dignissim ultricies.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Nullam bibendum sapien vitae lorem finibus, vitae scelerisque nulla aliquam.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Phasellus consectetur sem id velit egestas, ut laoreet nisl cursus.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Proin pharetra nunc at nisi tristique, nec consequat neque tristique.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Aenean sed tortor nec nisl vestibulum placerat.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Curabitur eget urna in mi dignissim ultricies.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Nullam bibendum sapien vitae lorem finibus, vitae scelerisque nulla aliquam.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Phasellus consectetur sem id velit egestas, ut laoreet nisl cursus.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Proin pharetra nunc at nisi tristique, nec consequat neque tristique.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Aenean sed tortor nec nisl vestibulum placerat.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Curabitur eget urna in mi dignissim ultricies.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Nullam bibendum sapien vitae lorem finibus, vitae scelerisque nulla aliquam.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Phasellus consectetur sem id velit egestas, ut laoreet nisl cursus.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Proin pharetra nunc at nisi tristique, nec consequat neque tristique.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Aenean sed tortor nec nisl vestibulum placerat.")
            ]),
            vue.createElementVNode("view", { class: "text-section" }, [
              vue.createElementVNode("text", null, "Curabitur eget urna in mi dignissim ultricies.")
            ])
          ]),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("button", {
              class: "agree-button",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.handleAgree && $options.handleAgree(...args))
            }, "Agree"),
            vue.createElementVNode("button", {
              class: "disagree-button",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.handleDisagree && $options.handleDisagree(...args))
            }, "Disagree")
          ])
        ])
      ],
      512
      /* NEED_PATCH */
    )), [
      [vue.vShow, $props.visible]
    ]);
  }
  const popup = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-20ac90ec"], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/components/popup.vue"]]);
  const _sfc_main$o = {
    components: {
      popup
    },
    data() {
      return {
        currentTab: 0,
        gridData: [
          [
            {
              imageSrc: "/static/operation/1_1_refund.png",
              title: this.$t("loan")
            },
            {
              imageSrc: "/static/operation/1_2_pay.png",
              title: this.$t("repayment")
            },
            {
              imageSrc: "/static/operation/1_3_increase_amount.png",
              title: this.$t("increase.amount")
            },
            {
              imageSrc: "/static/operation/1_4_point.png",
              title: this.$t("points.discount")
            }
          ],
          [
            {
              imageSrc: "/static/operation/2_1_his_order.png",
              title: this.$t("history.loan")
            },
            {
              imageSrc: "/static/operation/2_2_me.png",
              title: this.$t("material")
            },
            {
              imageSrc: "/static/operation/2_3_bank_card.png",
              title: this.$t("bank.card")
            },
            {
              imageSrc: "/static/operation/2_4_faq.png",
              title: "FAQ"
            }
          ],
          [
            {
              imageSrc: "/static/operation/3_1_about_us.png",
              title: this.$t("about.us")
            },
            {
              imageSrc: "/static/operation/3_2_version.png",
              title: this.$t("version.update")
            },
            {
              imageSrc: "/static/operation/3_3_policy.png",
              title: this.$t("privacy.policy")
            },
            {
              imageSrc: "/static/operation/3_4_logout.png",
              title: this.$t("logout")
            }
          ]
        ],
        policyUrl: "",
        faqUrl: "https://hl.hotlending.net/hotlending/application/views/h5/faq?app_name=Hot Lending",
        aboutUsUrl: "https://hl.hotlending.net/hotlending/application/views/h5/aboutUs?app_name=Hot Lending",
        agreementUrl: "",
        phone: "",
        showPopup: false
      };
    },
    onLoad() {
      try {
        const isFirstTime = uni.getStorageSync("isFirstTime");
        if (!isFirstTime) {
          this.showPopup = true;
          uni.setStorageSync("isFirstTime", true);
        }
      } catch (e) {
      }
      uni.getStorage({
        key: "phone",
        success: (res) => {
          if (typeof res.data !== "" && typeof res.data !== "undefined") {
            this.phone = res.data.replace(/(\d{2})\d{4}(\d{2})/, "$1****$2");
          }
        }
      });
      uni.getSystemInfo({
        success: function(res) {
          var language = res.language.includes("en") ? "en" : "es";
          uni.setLocale(language);
        }
      });
    },
    methods: {
      //skipToLogin() {
      //	uni.navigateTo({
      //		url: '/pages/account/login/login'
      //	});
      //},
      loginCheck() {
        if (!this.isLogin) {
          uni.navigateTo({
            url: "/pages/account/login/login"
          });
          return true;
        }
        return false;
      },
      appHome() {
        this.$H.post("/app/home111").then((res) => {
          formatAppLog("log", "at pages/index/index.vue:215", res);
        }).catch((err) => {
          formatAppLog("log", "at pages/index/index.vue:217", err);
        });
      },
      switchTab(index) {
        this.currentTab = index;
      },
      skipMessagePage() {
        if (!this.loginCheck()) {
          uni.navigateTo({
            url: "/pages/message/message"
          });
        }
      },
      handleAgree() {
        this.showPopup = false;
      },
      handleDisagree() {
        uni.exit();
      },
      operate(rowIndex, columnIndex) {
        switch (rowIndex.toString() + columnIndex.toString()) {
          case "00":
            if (!this.loginCheck()) {
              uni.navigateTo({
                url: "/pages/information/premise-agree/premise-agree"
              });
            }
            break;
          case "01":
            if (!this.loginCheck()) {
              uni.navigateTo({
                url: "/pages/repay/repay"
              });
            }
            break;
          case "02":
            if (!this.loginCheck()) {
              uni.navigateTo({
                url: "/pages/increase-amount/increase-amount"
              });
            }
            break;
          case "03":
            if (!this.loginCheck()) {
              uni.navigateTo({
                url: "/pages/coupons/my-coupons/my-coupons"
              });
            }
            break;
          case "10":
            if (!this.loginCheck()) {
              uni.navigateTo({
                url: "/pages/history-loan/history-loan"
              });
            }
            break;
          case "11":
            if (!this.loginCheck()) {
              uni.setStorage({
                key: "flag",
                data: "onlyReview",
                success: function() {
                  uni.navigateTo({
                    url: "/pages/information/info-basic/info-basic"
                  });
                }
              });
            }
            break;
          case "12":
            if (!this.loginCheck()) {
              uni.setStorage({
                key: "flag",
                data: "onlyReview",
                success: function() {
                  uni.navigateTo({
                    url: "/pages/information/info-bank/info-bank"
                  });
                }
              });
            }
            break;
          case "13":
            uni.navigateTo({
              url: `/pages/web-view/web-view?url=${this.faqUrl}`
            });
            break;
          case "20":
            uni.navigateTo({
              url: `/pages/web-view/web-view?url=${this.aboutUsUrl}`
            });
            break;
          case "21":
            plus.nativeUI.confirm(
              this.$t("app.update.tips"),
              function(e) {
              }
            );
            break;
          case "22":
            uni.navigateTo({
              url: `/pages/web-view/web-view?url=${this.policyUrl}`
            });
            break;
          case "23":
            if (!this.isLogin) {
              uni.showToast({
                title: this.$t("not.login.tips"),
                position: "bottom"
              });
              return;
            }
            var self2 = this;
            plus.nativeUI.confirm(
              this.$t("logout.tips"),
              function(e) {
                if (e.index === 0) {
                  self2.setLoginStatus(false);
                  self2.phone = "";
                  try {
                    uni.removeStorageSync("phone");
                    uni.removeStorageSync("token");
                  } catch (e2) {
                  }
                  uni.navigateTo({
                    url: "/pages/account/login/login"
                  });
                }
              }
            );
            break;
        }
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_popup = vue.resolveComponent("popup");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_status_bar),
      vue.createElementVNode("view", {
        style: { "width": "100%", "height": "116rpx", "background": "linear-gradient(to bottom, #FFFFFE, #B6BEBA)" },
        class: "flex align-center"
      }, [
        vue.createElementVNode("view", {
          class: "flex align-center justify-center",
          style: { "width": "100%" }
        }, [
          vue.createCommentVNode(" padding-left: 104rpx; "),
          vue.createElementVNode("image", {
            src: "/static/icon/logo_top.png",
            style: { "width": "306rpx", "height": "80rpx" },
            mode: "aspectFit"
          })
        ]),
        vue.createCommentVNode(' <view class="flex align-center justify-end">\r\n				<image src="/static/icon/refresh.png"\r\n					style="width: 44rpx; height: 44rpx; padding-top: 36rpx; padding-bottom: 36rpx;" class="px-30"\r\n					mode="aspectFit"></image>\r\n			</view> ')
      ]),
      vue.createElementVNode("view", { style: { "background-color": "#A2227F" } }, [
        vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between" } }, [
          vue.createElementVNode("view", {
            style: { "display": "flex", "flex": "1", "flex-direction": "column", "align-items": "center" },
            onClick: _cache[0] || (_cache[0] = ($event) => $options.switchTab(0))
          }, [
            vue.createElementVNode("image", {
              src: "/static/tabbar/tab_home.png",
              style: { "width": "54rpx", "height": "54rpx", "margin-top": "15rpx" }
            }),
            vue.createElementVNode(
              "text",
              {
                style: vue.normalizeStyle([{ "font-size": "22rpx", "color": "white", "font-weight": "500", "margin-top": "4rpx", "margin-bottom": "11rpx" }, $data.currentTab === 0 ? "margin-bottom: 11rpx;" : "margin-bottom: 15rpx;"])
              },
              vue.toDisplayString(_ctx.$t("tab.home")),
              5
              /* TEXT, STYLE */
            ),
            $data.currentTab === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              style: { "height": "4rpx", "width": "100%", "background-color": "white" }
            })) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", {
            style: { "display": "flex", "flex": "1", "flex-direction": "column", "align-items": "center" },
            onClick: _cache[1] || (_cache[1] = (...args) => $options.skipMessagePage && $options.skipMessagePage(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/tabbar/tab_msg.png",
              style: { "width": "54rpx", "height": "54rpx", "margin-top": "15rpx" }
            }),
            vue.createElementVNode(
              "text",
              {
                style: vue.normalizeStyle([{ "font-size": "22rpx", "color": "white", "font-weight": "500", "margin-top": "4rpx", "margin-bottom": "11rpx" }, $data.currentTab === 1 ? "margin-bottom: 11rpx;" : "margin-bottom: 15rpx;"])
              },
              vue.toDisplayString(_ctx.$t("tab.message")),
              5
              /* TEXT, STYLE */
            ),
            $data.currentTab === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              style: { "height": "4rpx", "width": "100%", "background-color": "white" }
            })) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        style: { "width": "100%", "height": "171rpx", "background-color": "#10162C", "justify-content": "space-between" },
        class: "flex flex-row align-center"
      }, [
        $data.phone !== "" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "flex flex-column pl-30"
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "26rpx", "font-weight": "500", "color": "white" } },
            vue.toDisplayString(_ctx.$t("my.account")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { style: { "height": "5rpx" } }),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "font-weight": "500", "color": "white" } },
            vue.toDisplayString($data.phone),
            1
            /* TEXT */
          )
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "flex flex-column pl-30"
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "26rpx", "font-weight": "500", "color": "white" } },
            vue.toDisplayString(_ctx.$t("welcome")),
            1
            /* TEXT */
          )
        ])),
        vue.createElementVNode("view", { class: "flex flex-column pr-30" }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "26rpx", "font-weight": "500", "color": "white", "text-align": "right" } },
            vue.toDisplayString(_ctx.$t("show.max")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { style: { "height": "5rpx" } }),
          vue.createElementVNode("text", { style: { "font-size": "30rpx", "font-weight": "500", "color": "white", "text-align": "right" } }, "Bs. 10000")
        ])
      ]),
      vue.createElementVNode("view", { style: { "width": "100%", "height": "230rpx", "background-color": "#A2227F" } }),
      vue.createElementVNode("view", { style: { "margin-top": "5rpx", "display": "flex", "justify-content": "center" } }, [
        vue.createElementVNode("view", { style: { "display": "flex", "flex-wrap": "wrap" } }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.gridData, (row, rowIndex) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                style: { "display": "flex", "width": "100%" },
                key: rowIndex
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(row, (item, itemIndex) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "border-login",
                      style: { "height": "296rpx", "width": "100%", "display": "flex", "flex-direction": "column", "align-items": "center" },
                      key: itemIndex,
                      onClick: ($event) => $options.operate(rowIndex, itemIndex)
                    }, [
                      vue.createElementVNode("image", {
                        style: { "width": "112rpx", "height": "112rpx", "margin-top": "55rpx" },
                        src: item.imageSrc
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        { style: { "margin-top": "45rpx", "text-align": "center", "font-size": "30rpx", "color": "black" } },
                        vue.toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 第一次安装的弹框 "),
      vue.createVNode(_component_popup, {
        visible: $data.showPopup,
        onAgree: $options.handleAgree,
        onDisagree: $options.handleDisagree
      }, null, 8, ["visible", "onAgree", "onDisagree"])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/index/index.vue"]]);
  const _sfc_main$n = {
    data() {
      return {
        phone: "",
        password: "",
        isPassword: true
      };
    },
    computed: {
      isButtonDisabled() {
        return this.phone === "" || this.password === "";
      }
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      changePasswordVisiable() {
        this.isPassword = !this.isPassword;
      },
      register() {
        uni.navigateTo({
          url: "/pages/account/register/register"
        });
      },
      toForgetPage() {
        uni.navigateTo({
          url: "/pages/account/forget-password/forget-password"
        });
      },
      login() {
        let data = {
          "phone": this.phone,
          "password": btoa(this.password)
        };
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        this.$H.post("/user/login_by_pwd", data).then((res) => {
          uni.hideLoading();
          this.setLoginStatus(true);
          uni.setStorage({
            key: "phone",
            data: this.phone
          });
          uni.setStorageSync("token", res.token);
          uni.reLaunch({
            url: "/pages/index/index?phone=" + this.phone
          });
        }).catch((err) => {
          uni.hideLoading();
        });
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex p-31" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/close.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        })
      ]),
      vue.createElementVNode("view", { class: "flex align-center justify-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/logo_top.png",
          style: { "width": "560rpx", "height": "186rpx", "margin-top": "16rpx" }
        })
      ]),
      vue.createElementVNode("view", {
        style: { "margin-top": "22rpx", "background": "linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF)", "box-shadow": "0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16)" },
        class: "mx-30 px-24 flex flex-column align-center rounded-20"
      }, [
        vue.createElementVNode(
          "text",
          {
            style: { "font-size": "36rpx", "font-weight": "bolder", "color": "#A2227F", "height": "96rpx" },
            class: "flex justify-center align-center"
          },
          vue.toDisplayString(_ctx.$t("login")),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "flex align-center",
          style: { "background-color": "#DCE3DC", "width": "100%" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/phone_tag.png",
            style: { "width": "46rpx", "height": "46rpx", "margin-left": "16rpx", "margin-right": "36rpx" },
            mode: "aspectFit"
          }),
          vue.createCommentVNode('<text style="font-size: 30rpx; color: #060518; margin-right: 12rpx;">+591</text>'),
          vue.withDirectives(vue.createElementVNode("input", {
            type: "number",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.phone = $event),
            class: "flex-1",
            placeholder: _ctx.$t("phone.number"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx" }
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.phone]
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex align-center w_fill",
          style: { "margin-top": "20rpx", "background-color": "#DCE3DC" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/password_tag.png",
            style: { "width": "46rpx", "height": "46rpx", "margin-left": "16rpx", "margin-right": "36rpx" },
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode("input", {
            type: $data.isPassword ? "password" : "text",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.password = $event),
            class: "flex-1",
            placeholder: _ctx.$t("password"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx" }
          }, null, 8, ["type", "placeholder"]), [
            [vue.vModelDynamic, $data.password]
          ]),
          vue.createElementVNode("view", {
            class: "px-20 flex align-center justify-center",
            style: { "height": "90rpx" },
            onClick: _cache[3] || (_cache[3] = (...args) => $options.changePasswordVisiable && $options.changePasswordVisiable(...args))
          }, [
            vue.createElementVNode("image", {
              src: $data.isPassword ? "/static/icon/hide_password.png" : "/static/icon/show_password.png",
              style: { "width": "46rpx", "height": "46rpx" },
              mode: "aspectFit"
            }, null, 8, ["src"])
          ])
        ]),
        vue.createElementVNode("view", { class: "w_fill mt-20" }, [
          vue.createElementVNode("button", {
            type: "primary",
            disabled: $options.isButtonDisabled,
            style: vue.normalizeStyle({ backgroundColor: $options.isButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
            class: "rounded-10",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.login && $options.login(...args))
          }, vue.toDisplayString(_ctx.$t("login")), 13, ["disabled"])
        ]),
        vue.createElementVNode("view", { class: "flex justify-end w_fill" }, [
          vue.createElementVNode(
            "text",
            {
              style: { "font-size": "26rpx", "color": "#9B284A", "padding-top": "27rpx", "padding-bottom": "27rpx" },
              onClick: _cache[5] || (_cache[5] = (...args) => $options.toForgetPage && $options.toForgetPage(...args))
            },
            vue.toDisplayString(_ctx.$t("forget.password")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "height": "30rpx" } })
      ]),
      vue.createElementVNode("view", {
        style: { "margin-top": "41rpx" },
        class: "flex justify-center align-center"
      }, [
        vue.createElementVNode(
          "text",
          { style: { "font-size": "26rpx", "color": "#A2227F" } },
          vue.toDisplayString(_ctx.$t("no.account")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        style: { "margin-top": "43rpx" },
        class: "w_fill flex justify-center align-center"
      }, [
        vue.createElementVNode(
          "button",
          {
            type: "primary",
            style: { "height": "100rpx", "width": "471rpx", "background": "linear-gradient(to bottom left, #E6EBE5, #ECEFE9, #F5FBF4)", "color": "#A2227F", "font-size": "30rpx", "box-shadow": "0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16)" },
            class: "rounded-8 flex justify-center align-center",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.register && $options.register(...args))
          },
          vue.toDisplayString(_ctx.$t("register")),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const PagesAccountLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/account/login/login.vue"]]);
  const _sfc_main$m = {
    data() {
      return {
        scrollH: 1e3,
        firstName: "",
        lastName: "",
        nationalIdCardNumber: "",
        phone: "",
        email: "",
        dayRange: [],
        monthRange: [],
        yearRange: [],
        selectedDay: "",
        selectedMonth: "",
        selectedYear: "",
        gender: "0",
        isChecked: true
      };
    },
    onLoad() {
      uni.getSystemInfo({
        success: (res) => {
          this.scrollH = res.windowHeight - res.statusBarHeight - uni.upx2px(140);
        }
      });
      const dayRange = [];
      for (let day2 = 1; day2 <= 31; day2++) {
        dayRange.push(day2);
      }
      this.dayRange = dayRange;
      const monthRange = [];
      for (let month2 = 1; month2 <= 12; month2++) {
        monthRange.push(month2);
      }
      this.monthRange = monthRange;
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      const yearRange = [];
      for (let year2 = 1900; year2 <= currentYear; year2++) {
        yearRange.push(year2);
      }
      this.yearRange = yearRange;
    },
    computed: {
      isButtonDisabled() {
        return this.firstName === "" || this.lastName === "" || this.nationalIdCardNumber === "" || this.phone === "" || this.email === "" || this.selectedDay === "" || this.selectedMonth === "" || this.selectedYear === "" || this.isChecked === false;
      }
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      onPickerChangeDay(event) {
        const selectedIndex = event.detail.value;
        this.selectedDay = this.dayRange[selectedIndex];
      },
      onPickerChangeMonth(event) {
        const selectedIndex = event.detail.value;
        this.selectedMonth = this.monthRange[selectedIndex];
      },
      onPickerChangeYear(event) {
        const selectedIndex = event.detail.value;
        this.selectedYear = this.yearRange[selectedIndex];
      },
      onChange(event) {
        this.gender = event.detail.value;
      },
      skipToPolicy() {
        formatAppLog("log", "at pages/account/register/register.vue:229", "aaaaaaa");
      },
      validateDate() {
        let month2 = this.selectedMonth.toString().length === 1 ? "0" + this.selectedMonth : this.selectedMonth;
        let day2 = this.selectedDay.toString().length === 1 ? "0" + this.selectedDay : this.selectedDay;
        let dateString = this.selectedYear + "-" + month2 + "-" + day2;
        const date = new Date(dateString);
        return date.toString() !== "Invalid Date" && date.toISOString().slice(0, 10) === dateString;
      },
      handleCheckboxClick() {
        this.isChecked = !this.isChecked;
      },
      register() {
        if (!this.validateDate()) {
          uni.showToast({
            title: this.$t("date.error.tips"),
            position: "bottom"
          });
          return;
        }
        let month2 = this.selectedMonth.toString().length === 1 ? "0" + this.selectedMonth : this.selectedMonth;
        let day2 = this.selectedDay.toString().length === 1 ? "0" + this.selectedDay : this.selectedDay;
        let data = {
          "first_name": this.firstName,
          "last_name": this.lastName,
          "nic": this.nationalIdCardNumber,
          "phone": this.phone,
          "email": this.email,
          "birth": this.selectedYear + "-" + month2 + "-" + day2,
          "gender": parseInt(this.gender)
        };
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        this.$H.post("/user/register", data).then((res) => {
          formatAppLog("log", "at pages/account/register/register.vue:274", res);
          uni.hideLoading();
          let name2 = this.firstName + " " + this.lastName;
          let idNumber = this.nationalIdCardNumber;
          try {
            uni.setStorageSync("name", name2);
            uni.setStorageSync("nationalIdNumber", idNumber);
          } catch (e) {
          }
          uni.navigateTo({
            url: "/pages/account/finish-register/finish-register?phone=" + this.phone
          });
        }).catch((err) => {
          uni.hideLoading();
          if (err === "ya registrado" || err === "already registered") {
            uni.navigateTo({
              url: "/pages/account/already-register/already-register"
            });
          }
          formatAppLog("log", "at pages/account/register/register.vue:298", err);
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("register")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle([{ "margin-left": "30rpx", "margin-right": "30rpx", "margin-bottom": "32rpx", "background-color": "white" }, "height:" + $data.scrollH + "px;"]),
          class: "px-30"
        },
        [
          vue.createElementVNode(
            "scroll-view",
            {
              "scroll-y": "true",
              style: vue.normalizeStyle("height:" + $data.scrollH + "px;")
            },
            [
              vue.createElementVNode(
                "view",
                {
                  style: { "height": "85rpx", "background-color": "#F3F6F3", "margin-top": "64rpx", "color": "#A2227F", "font-size": "26rpx", "font-weight": "bolder" },
                  class: "flex align-center justify-center"
                },
                vue.toDisplayString(_ctx.$t("data.secure")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { style: { "margin-top": "45rpx" } }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.firstName = $event),
                  class: "border-bottom",
                  placeholder: _ctx.$t("first.name"),
                  "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
                  style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
                }, null, 8, ["placeholder"]), [
                  [vue.vModelText, $data.firstName]
                ])
              ]),
              vue.createElementVNode("view", { style: { "margin-top": "25rpx" } }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.lastName = $event),
                  class: "border-bottom",
                  placeholder: _ctx.$t("last.name"),
                  "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
                  style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
                }, null, 8, ["placeholder"]), [
                  [vue.vModelText, $data.lastName]
                ])
              ]),
              vue.createElementVNode("view", { style: { "margin-top": "25rpx" } }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "number",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.nationalIdCardNumber = $event),
                  class: "border-bottom",
                  placeholder: _ctx.$t("id.number"),
                  "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
                  style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
                }, null, 8, ["placeholder"]), [
                  [vue.vModelText, $data.nationalIdCardNumber]
                ])
              ]),
              vue.createElementVNode("view", { style: { "margin-top": "25rpx" } }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "number",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.phone = $event),
                  class: "border-bottom",
                  placeholder: _ctx.$t("phone"),
                  "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
                  style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
                }, null, 8, ["placeholder"]), [
                  [vue.vModelText, $data.phone]
                ])
              ]),
              vue.createElementVNode("view", { style: { "margin-top": "25rpx" } }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.email = $event),
                  class: "border-bottom",
                  placeholder: _ctx.$t("e.mail"),
                  "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
                  style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
                }, null, 8, ["placeholder"]), [
                  [vue.vModelText, $data.email]
                ])
              ]),
              vue.createElementVNode("view", {
                class: "flex flex-column",
                style: { "margin-top": "36rpx" }
              }, [
                vue.createElementVNode(
                  "text",
                  { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
                  vue.toDisplayString(_ctx.$t("birth")),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", {
                  class: "flex flex-row",
                  style: { "margin-top": "30rpx" }
                }, [
                  vue.createElementVNode("view", {
                    class: "flex align-center justify-end flex-1 border-bottom",
                    style: { "position": "relative" }
                  }, [
                    vue.createElementVNode("picker", {
                      class: "flex-1",
                      mode: "selector",
                      range: $data.dayRange,
                      onChange: _cache[6] || (_cache[6] = (...args) => $options.onPickerChangeDay && $options.onPickerChangeDay(...args))
                    }, [
                      vue.createElementVNode("view", {
                        class: "flex align-center justify-center",
                        style: { "height": "80rpx", "text-align": "center" }
                      }, [
                        $data.selectedDay === "" ? (vue.openBlock(), vue.createElementBlock(
                          "text",
                          {
                            key: 0,
                            style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                          },
                          vue.toDisplayString(_ctx.$t("day")),
                          1
                          /* TEXT */
                        )) : (vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: 1 },
                          [
                            vue.createTextVNode(
                              vue.toDisplayString($data.selectedDay),
                              1
                              /* TEXT */
                            )
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ])
                    ], 40, ["range"]),
                    vue.createElementVNode("image", {
                      src: "/static/icon/spinner_tag.png",
                      style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
                      mode: "aspectFit"
                    })
                  ]),
                  vue.createElementVNode("view", {
                    class: "flex align-center justify-end flex-1 border-bottom",
                    style: { "position": "relative" }
                  }, [
                    vue.createElementVNode("picker", {
                      class: "flex-1",
                      mode: "selector",
                      range: $data.monthRange,
                      onChange: _cache[7] || (_cache[7] = (...args) => $options.onPickerChangeMonth && $options.onPickerChangeMonth(...args))
                    }, [
                      vue.createElementVNode("view", {
                        class: "flex align-center justify-center",
                        style: { "height": "80rpx", "text-align": "center" }
                      }, [
                        $data.selectedMonth === "" ? (vue.openBlock(), vue.createElementBlock(
                          "text",
                          {
                            key: 0,
                            style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                          },
                          vue.toDisplayString(_ctx.$t("month")),
                          1
                          /* TEXT */
                        )) : (vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: 1 },
                          [
                            vue.createTextVNode(
                              vue.toDisplayString($data.selectedMonth),
                              1
                              /* TEXT */
                            )
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ])
                    ], 40, ["range"]),
                    vue.createElementVNode("image", {
                      src: "/static/icon/spinner_tag.png",
                      style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
                      mode: "aspectFit"
                    })
                  ]),
                  vue.createElementVNode("view", {
                    class: "flex align-center justify-end flex-1 border-bottom",
                    style: { "position": "relative" }
                  }, [
                    vue.createElementVNode("picker", {
                      class: "flex-1",
                      mode: "selector",
                      range: $data.yearRange,
                      onChange: _cache[8] || (_cache[8] = (...args) => $options.onPickerChangeYear && $options.onPickerChangeYear(...args))
                    }, [
                      vue.createElementVNode("view", {
                        class: "flex align-center justify-center",
                        style: { "height": "80rpx", "text-align": "center" }
                      }, [
                        $data.selectedYear === "" ? (vue.openBlock(), vue.createElementBlock(
                          "text",
                          {
                            key: 0,
                            style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                          },
                          vue.toDisplayString(_ctx.$t("year")),
                          1
                          /* TEXT */
                        )) : (vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: 1 },
                          [
                            vue.createTextVNode(
                              vue.toDisplayString($data.selectedYear),
                              1
                              /* TEXT */
                            )
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ])
                    ], 40, ["range"]),
                    vue.createElementVNode("image", {
                      src: "/static/icon/spinner_tag.png",
                      style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
                      mode: "aspectFit"
                    })
                  ])
                ])
              ]),
              vue.createElementVNode("view", {
                style: { "margin-top": "36rpx" },
                class: "border-bottom"
              }, [
                vue.createElementVNode(
                  "text",
                  { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
                  vue.toDisplayString(_ctx.$t("gender")),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { style: { "margin-top": "36rpx" } }, [
                  vue.createElementVNode(
                    "radio-group",
                    {
                      class: "flex flex-row",
                      onChange: _cache[9] || (_cache[9] = (...args) => $options.onChange && $options.onChange(...args))
                    },
                    [
                      vue.createElementVNode("radio", {
                        value: "0",
                        checked: $data.gender === "0",
                        style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" },
                        "active-background-color": "#B41949",
                        "border-color": "#B41949"
                      }, vue.toDisplayString(_ctx.$t("male")), 9, ["checked"]),
                      vue.createElementVNode("view", { style: { "width": "100rpx" } }),
                      vue.createElementVNode("radio", {
                        value: "1",
                        checked: $data.gender === "1",
                        style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" },
                        "active-background-color": "#B41949",
                        "border-color": "#B41949"
                      }, vue.toDisplayString(_ctx.$t("female")), 9, ["checked"])
                    ],
                    32
                    /* NEED_HYDRATION */
                  )
                ]),
                vue.createElementVNode("view", { style: { "height": "24rpx" } })
              ]),
              vue.createElementVNode("view", {
                class: "flex flex-row align-center",
                style: { "margin-top": "36rpx" }
              }, [
                vue.createElementVNode("checkbox", {
                  "border-color": "#B41949",
                  "active-background-color": "#B41949",
                  "icon-color": "white",
                  checked: $data.isChecked === true ? "true" : "false",
                  onClick: _cache[10] || (_cache[10] = (...args) => $options.handleCheckboxClick && $options.handleCheckboxClick(...args))
                }, null, 8, ["checked"]),
                vue.createElementVNode("text", { style: { "margin-left": "12rpx", "color": "#4F4F4F", "font-size": "26rpx" } }, [
                  vue.createTextVNode(
                    vue.toDisplayString(_ctx.$t("policy.first")) + " ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    {
                      style: { "color": "#9B284A" },
                      onClick: _cache[11] || (_cache[11] = (...args) => $options.skipToPolicy && $options.skipToPolicy(...args))
                    },
                    vue.toDisplayString(_ctx.$t("privacy.policy")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "45rpx" } }, [
                vue.createElementVNode("button", {
                  type: "primary",
                  disabled: $options.isButtonDisabled,
                  style: vue.normalizeStyle({ backgroundColor: $options.isButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
                  class: "rounded-10",
                  onClick: _cache[12] || (_cache[12] = (...args) => $options.register && $options.register(...args))
                }, vue.toDisplayString(_ctx.$t("register")), 13, ["disabled"])
              ])
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const PagesAccountRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/account/register/register.vue"]]);
  const _sfc_main$l = {
    data() {
      return {
        phone: "",
        code: "",
        password: "",
        passwordRepeat: "",
        isPassword: true,
        isRepearPassword: true
      };
    },
    computed: {
      isButtonDisabled() {
        return this.password === "" || this.passwordRepeat === "" || this.password.length < 6 || this.passwordRepeat.length < 6 || this.password !== this.passwordRepeat;
      }
    },
    onLoad(option) {
      this.phone = option.phone;
      this.code = option.code;
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      changePasswordVisiable() {
        this.isPassword = !this.isPassword;
      },
      changeRepeatPasswordVisiable() {
        this.isRepearPassword = !this.isRepearPassword;
      },
      verify() {
        let data = {
          "phone": this.phone,
          "code": this.code,
          "password": this.password
        };
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        this.$H.post("/user/set_pwd", data).then((res) => {
          uni.hideLoading();
          formatAppLog("log", "at pages/account/set-password/set-password.vue:124", res);
          uni.setStorageSync("token", res.token);
          uni.navigateTo({
            url: "/pages/account/login/login"
          });
        }).catch((err) => {
          uni.hideLoading();
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("set.password")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        style: { "margin-top": "225rpx", "background": "linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF)", "box-shadow": "0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16)" },
        class: "mx-30 px-30 flex flex-column align-center rounded-20"
      }, [
        vue.createElementVNode(
          "text",
          {
            style: { "font-size": "34rpx", "font-weight": "500", "color": "#A2227F", "margin-top": "58rpx", "text-align": "center" },
            class: "flex justify-center align-center"
          },
          vue.toDisplayString(_ctx.$t("set.password.tips")),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "flex align-center border-bottom",
          style: { "width": "100%", "margin-top": "30rpx" }
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: $data.isPassword ? "password" : "text",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event),
            class: "flex-1",
            placeholder: _ctx.$t("password"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["type", "placeholder"]), [
            [vue.vModelDynamic, $data.password]
          ]),
          vue.createElementVNode("view", {
            class: "px-20 flex align-center justify-center",
            style: { "height": "90rpx" },
            onClick: _cache[2] || (_cache[2] = (...args) => $options.changePasswordVisiable && $options.changePasswordVisiable(...args))
          }, [
            vue.createElementVNode("image", {
              src: $data.isPassword ? "/static/icon/hide_password.png" : "/static/icon/show_password.png",
              style: { "width": "46rpx", "height": "46rpx" },
              mode: "aspectFit"
            }, null, 8, ["src"])
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex align-center w_fill border-bottom",
          style: { "margin-top": "25rpx" }
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: $data.isRepearPassword ? "password" : "text",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.passwordRepeat = $event),
            class: "flex-1",
            placeholder: _ctx.$t("repeat.password"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["type", "placeholder"]), [
            [vue.vModelDynamic, $data.passwordRepeat]
          ]),
          vue.createElementVNode("view", {
            class: "px-20 flex align-center justify-center",
            style: { "height": "90rpx" },
            onClick: _cache[4] || (_cache[4] = (...args) => $options.changeRepeatPasswordVisiable && $options.changeRepeatPasswordVisiable(...args))
          }, [
            vue.createElementVNode("image", {
              src: $data.isRepearPassword ? "/static/icon/hide_password.png" : "/static/icon/show_password.png",
              style: { "width": "46rpx", "height": "46rpx" },
              mode: "aspectFit"
            }, null, 8, ["src"])
          ])
        ]),
        $data.password !== "" ? (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 0 },
          [
            $data.password !== $data.passwordRepeat ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                style: { "margin-top": "24rpx", "color": "#EA1E1E", "font-size": "30rpx", "font-weight": "500", "text-align": "center" }
              },
              vue.toDisplayString(_ctx.$t("set.password.tips2")),
              1
              /* TEXT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                $data.password.toString().length < 6 ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "margin-top": "24rpx", "color": "#EA1E1E", "font-size": "30rpx", "font-weight": "500", "text-align": "center" }
                  },
                  vue.toDisplayString(_ctx.$t("set.password.tips3")),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    $data.password.toString().length > 12 ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 0,
                        style: { "margin-top": "24rpx", "color": "#EA1E1E", "font-size": "30rpx", "font-weight": "500", "text-align": "center" }
                      },
                      vue.toDisplayString(_ctx.$t("set.password.tips4")),
                      1
                      /* TEXT */
                    )) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      style: { "height": "66rpx" }
                    }))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          style: { "height": "66rpx" }
        })),
        vue.createElementVNode("view", {
          class: "w_fill",
          style: { "margin-top": "18rpx" }
        }, [
          vue.createElementVNode("button", {
            type: "primary",
            disabled: $options.isButtonDisabled,
            style: vue.normalizeStyle({ backgroundColor: $options.isButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
            class: "rounded-10",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.verify && $options.verify(...args))
          }, vue.toDisplayString(_ctx.$t("verify")), 13, ["disabled"])
        ]),
        vue.createElementVNode("view", { style: { "height": "23rpx" } })
      ])
    ]);
  }
  const PagesAccountSetPasswordSetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/account/set-password/set-password.vue"]]);
  const _sfc_main$k = {
    data() {
      return {};
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      login() {
        uni.navigateTo({
          url: "/pages/account/login/login"
        });
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("register")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        style: { "margin-top": "225rpx", "background": "linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF)", "box-shadow": "0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16)" },
        class: "mx-30 px-24 flex flex-column align-center rounded-20"
      }, [
        vue.createElementVNode(
          "text",
          {
            style: { "font-size": "34rpx", "font-weight": "500", "color": "#060518", "margin-top": "177rpx", "text-align": "center" },
            class: "flex justify-center align-center"
          },
          vue.toDisplayString(_ctx.$t("already.login.tips")),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "w_fill",
          style: { "margin-top": "84rpx" }
        }, [
          vue.createElementVNode(
            "button",
            {
              type: "primary",
              style: { "background-color": "#A2227F", "height": "98rpx" },
              class: "rounded-10",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.login && $options.login(...args))
            },
            vue.toDisplayString(_ctx.$t("login")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "height": "124rpx" } })
      ])
    ]);
  }
  const PagesAccountAlreadyRegisterAlreadyRegister = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/account/already-register/already-register.vue"]]);
  let timer$1 = null;
  const _sfc_main$j = {
    data() {
      return {
        code: "",
        countdown: 120,
        phone: "",
        inProgress: false
      };
    },
    computed: {
      isButtonDisabled() {
        return this.code === "";
      }
    },
    //mounted() {
    //	this.startCountdown();
    //},
    onLoad(option) {
      this.phone = option.phone;
      this.getCode();
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      getCode() {
        if (this.inProgress)
          return;
        let data = {
          "phone": this.phone
        };
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        this.$H.post("/user/get_code", data).then((res) => {
          this.startCountdown();
          uni.hideLoading();
        }).catch((err) => {
          uni.hideLoading();
        });
      },
      startCountdown() {
        this.inProgress = true;
        timer$1 = setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          } else {
            this.stopCountdown();
          }
        }, 1e3);
      },
      stopCountdown() {
        clearInterval(timer$1);
        this.countdown = 120;
        timer$1 = null;
        this.inProgress = false;
      },
      confirm() {
        if (this.inProgress) {
          this.stopCountdown(timer$1);
        }
        uni.navigateTo({
          url: "/pages/account/set-password/set-password?phone=" + this.phone + "&code=" + this.code
        });
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("finish.register")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        style: { "margin-top": "225rpx", "background": "linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF)", "box-shadow": "0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16)" },
        class: "mx-30 px-24 flex flex-column align-center rounded-20"
      }, [
        vue.createElementVNode(
          "text",
          {
            style: { "font-size": "36rpx", "font-weight": "bolder", "color": "#A2227F", "margin-top": "58rpx", "text-align": "center" },
            class: "flex justify-center align-center"
          },
          vue.toDisplayString(_ctx.$t("verify.code.tips")) + " " + vue.toDisplayString($data.phone),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "flex align-center w_fill border-bottom",
          style: { "margin-top": "50rpx" }
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "number",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.code = $event),
            class: "flex-1",
            placeholder: _ctx.$t("verify.code"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.code]
          ]),
          vue.createElementVNode("view", {
            class: "flex align-center justify-center",
            style: { "height": "90rpx" },
            onClick: _cache[2] || (_cache[2] = (...args) => $options.getCode && $options.getCode(...args))
          }, [
            !$data.inProgress ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                style: { "color": "#A2227F", "font-size": "30rpx", "font-weight": "500" }
              },
              vue.toDisplayString(_ctx.$t("resend")),
              1
              /* TEXT */
            )) : (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 1,
                style: { "color": "#B4B4B4", "font-size": "30rpx", "font-weight": "500" }
              },
              vue.toDisplayString($data.countdown) + "s",
              1
              /* TEXT */
            ))
          ])
        ]),
        vue.createElementVNode("view", {
          class: "w_fill",
          style: { "margin-top": "64rpx" }
        }, [
          vue.createElementVNode("button", {
            type: "primary",
            disabled: $options.isButtonDisabled,
            style: vue.normalizeStyle({ backgroundColor: $options.isButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
            class: "rounded-10",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.confirm && $options.confirm(...args))
          }, vue.toDisplayString(_ctx.$t("confirm")), 13, ["disabled"])
        ]),
        vue.createElementVNode("view", { style: { "height": "51rpx" } })
      ])
    ]);
  }
  const PagesAccountFinishRegisterFinishRegister = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/account/finish-register/finish-register.vue"]]);
  const _sfc_main$i = {
    data() {
      return {
        value: 2e3,
        loanTerm: 0,
        xLoanAmount: "2000",
        xLoanTerm: "91"
      };
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      onSliderChange(event) {
        this.value = event.detail.value;
        this.xLoanAmount = this.value;
      },
      changeLoanTerm(e) {
        this.loanTerm = e;
        if (this.loanTerm === 0) {
          this.xLoanTerm = "91";
        } else if (this.loanTerm === 1) {
          this.xLoanTerm = "120";
        } else {
          this.xLoanTerm = "180";
        }
      },
      confirm() {
        uni.navigateTo({
          url: "/pages/refund/loan-information/loan-information?loanAmount=" + this.xLoanAmount + "&loanTerm=" + this.xLoanTerm
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#060518" }
          },
          vue.toDisplayString(_ctx.$t("loan.application")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        class: "mx-30 px-30",
        style: { "margin-top": "20rpx", "background-color": "white" }
      }, [
        vue.createElementVNode("view", {
          class: "flex align-center justify-center",
          style: { "color": "#A2227F", "font-size": "40rpx", "font-weight": "500", "padding-top": "88rpx" }
        }, [
          vue.createTextVNode(
            vue.toDisplayString(_ctx.$t("congratulations")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("text", { style: { "font-size": "30rpx", "color": "#00C15D", "font-weight": "500" } }, ",")
        ]),
        vue.createElementVNode(
          "view",
          { style: { "margin-top": "30rpx", "text-align": "center", "font-size": "30rpx", "color": "#333333", "font-weight": "500" } },
          vue.toDisplayString(_ctx.$t("loan.application.tips")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "view",
          {
            class: "flex align-center justify-center",
            style: { "margin-top": "95rpx", "font-size": "30rpx", "color": "#666666" }
          },
          vue.toDisplayString(_ctx.$t("select.amount")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "view",
          {
            class: "flex align-center justify-center",
            style: { "margin-top": "50rpx", "font-size": "90rpx", "color": "black", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("currency.unit")) + vue.toDisplayString($data.value),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("slider", {
            value: $data.value,
            onChange: _cache[1] || (_cache[1] = (...args) => $options.onSliderChange && $options.onSliderChange(...args)),
            min: "2000",
            max: "10000",
            step: "2000",
            "active-color": "#A2227F",
            "background-color": "#CCCCCC"
          }, null, 40, ["value"]),
          vue.createElementVNode("view", {
            class: "flex flex-row",
            style: { "justify-content": "space-between" }
          }, [
            vue.createElementVNode("text", { style: { "font-size": "30rpx", "color": "#666666" } }, "2000"),
            vue.createElementVNode("text", { style: { "font-size": "30rpx", "color": "#666666" } }, "10000")
          ])
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "115rpx" } }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("loan.term")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "flex flex-row",
            style: { "margin-top": "35rpx", "justify-content": "space-between" }
          }, [
            vue.createElementVNode(
              "radio-group",
              {
                onChange: _cache[2] || (_cache[2] = ($event) => $options.changeLoanTerm(0))
              },
              [
                vue.createElementVNode("label", null, [
                  vue.createElementVNode("radio", {
                    value: "91_days",
                    checked: $data.loanTerm === 0,
                    style: { "font-size": "28rpx", "color": "#B4B4B4", "font-weight": "500" },
                    "active-background-color": "#B41949",
                    "border-color": "#B41949"
                  }, vue.toDisplayString(_ctx.$t("91.days")), 9, ["checked"])
                ])
              ],
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode(
              "radio-group",
              {
                onChange: _cache[3] || (_cache[3] = ($event) => $options.changeLoanTerm(1))
              },
              [
                vue.createElementVNode("label", null, [
                  vue.createElementVNode("radio", {
                    value: "120_days",
                    checked: $data.loanTerm === 1,
                    style: { "font-size": "28rpx", "color": "#B4B4B4", "font-weight": "500" },
                    "active-background-color": "#B41949",
                    "border-color": "#B41949"
                  }, vue.toDisplayString(_ctx.$t("120.days")), 9, ["checked"])
                ])
              ],
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode(
              "radio-group",
              {
                onChange: _cache[4] || (_cache[4] = ($event) => $options.changeLoanTerm(2))
              },
              [
                vue.createElementVNode("label", null, [
                  vue.createElementVNode("radio", {
                    value: "180_days",
                    checked: $data.loanTerm === 2,
                    style: { "font-size": "28rpx", "color": "#B4B4B4", "font-weight": "500" },
                    "active-background-color": "#B41949",
                    "border-color": "#B41949"
                  }, vue.toDisplayString(_ctx.$t("180.days")), 9, ["checked"])
                ])
              ],
              32
              /* NEED_HYDRATION */
            )
          ]),
          vue.createElementVNode("view", { style: { "height": "2rpx", "background-color": "#B8B8B8", "margin-top": "22rpx" } })
        ]),
        vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "35rpx" } }, [
          vue.createElementVNode(
            "button",
            {
              type: "primary",
              style: { "backgroundColor": "#A2227F", "height": "98rpx" },
              class: "rounded-10",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.confirm && $options.confirm(...args))
            },
            vue.toDisplayString(_ctx.$t("confirm")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "height": "60rpx" } })
      ]),
      vue.createElementVNode("view", { style: { "height": "40rpx" } })
    ]);
  }
  const PagesRefundLoanApplicationLoanApplication = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/refund/loan-application/loan-application.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        loanAmount: "",
        loanTerm: "",
        apr: "",
        interest: "",
        repaymentDate: "",
        repaymentAmount: "",
        isChecked: true
      };
    },
    onLoad(option) {
      this.loanAmount = option.loanAmount;
      this.loanTerm = option.loanTerm;
      this.calcuShowData(this.loanAmount, this.loanTerm);
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      skipTpLoanAgreement() {
        uni.navigateTo({
          url: "/pages/refund/loan-agreement/loan-agreement?loanAmount=" + this.loanAmount + "&loanTerm=" + this.loanTerm + "&apr=" + this.apr + "&interest=" + this.interest + "&repaymentDate=" + this.repaymentDate + "&repaymentAmount=" + this.repaymentAmount
        });
      },
      changeChecked() {
        this.isChecked = !this.isChecked;
      },
      calcuShowData(loanAmount, loanTerm) {
        this.apr = uni.getStorageSync("apr");
        if (this.apr === "" || typeof this.apr === "undefined") {
          const min = 20;
          const max = 30;
          const randomPercentage = (Math.random() * (max - min) + min).toFixed(2);
          this.apr = randomPercentage;
          uni.setStorageSync("apr", this.apr);
        }
        const loanAmountFloat = parseFloat(loanAmount);
        const aprFloat = parseFloat(this.apr);
        const loanTermInt = parseInt(loanTerm);
        this.interest = (loanAmountFloat * aprFloat / 100 / 365 * loanTermInt).toFixed(2);
        const today = /* @__PURE__ */ new Date();
        today.setDate(today.getDate() + parseInt(loanTerm));
        this.repaymentDate = today.toISOString().split("T")[0];
        this.repaymentAmount = (loanAmountFloat + parseFloat(this.interest)).toString();
      },
      getLoan() {
        if (!this.isChecked) {
          uni.showToast({
            title: this.$t("loan.agreement.not.checked.tips"),
            position: "bottom"
          });
          return;
        }
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        setTimeout(function() {
          uni.hideLoading();
          uni.navigateTo({
            url: "/pages/refund/loan-result/loan-result"
          });
        }, 2e3);
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#060518" }
          },
          vue.toDisplayString(_ctx.$t("loan.information")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        class: "mx-30 px-30",
        style: { "background-color": "white" }
      }, [
        vue.createElementVNode("view", { style: { "height": "30rpx" } }),
        vue.createElementVNode("view", {
          class: "flex flex-row justify-between align-center",
          style: { "height": "100rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#666666" } },
            vue.toDisplayString(_ctx.$t("loan.amount")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "34rpx", "color": "#333333", "font-weight": "bolder" } },
            vue.toDisplayString(_ctx.$t("currency.unit")) + vue.toDisplayString($data.loanAmount),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-row justify-between align-center",
          style: { "height": "100rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#666666" } },
            vue.toDisplayString(_ctx.$t("loan.term")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "34rpx", "color": "#333333", "font-weight": "bolder" } },
            vue.toDisplayString($data.loanTerm) + " Days",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-row justify-between align-center",
          style: { "height": "100rpx" }
        }, [
          vue.createElementVNode("view", { class: "flex flex-column" }, [
            vue.createElementVNode(
              "text",
              { style: { "font-size": "30rpx", "color": "#666666" } },
              vue.toDisplayString(_ctx.$t("interest")),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { style: { "font-size": "26rpx", "color": "#999999" } },
              "(APR = " + vue.toDisplayString($data.apr) + "%)",
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "34rpx", "color": "#333333", "font-weight": "bolder" } },
            vue.toDisplayString(_ctx.$t("currency.unit")) + vue.toDisplayString($data.interest),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-row justify-between align-center",
          style: { "height": "100rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#666666" } },
            vue.toDisplayString(_ctx.$t("repayment.date")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "34rpx", "color": "#333333", "font-weight": "bolder" } },
            vue.toDisplayString($data.repaymentDate),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "16rpx" } }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "28rpx", "font-weight": "500", "color": "red" } },
            vue.toDisplayString(_ctx.$t("loan.information.tips1")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-row justify-between align-center",
          style: { "height": "100rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#666666" } },
            vue.toDisplayString(_ctx.$t("repayment.amount")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "34rpx", "color": "#333333", "font-weight": "bolder" } },
            vue.toDisplayString(_ctx.$t("currency.unit")) + vue.toDisplayString($data.repaymentAmount),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "16rpx" } }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "28rpx", "font-weight": "500", "color": "red" } },
            vue.toDisplayString(_ctx.$t("loan.information.tips2")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "32rpx" } }, [
          vue.createElementVNode(
            "button",
            {
              type: "primary",
              style: { "backgroundColor": "#A2227F", "height": "98rpx" },
              class: "rounded-10",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.getLoan && $options.getLoan(...args))
            },
            vue.toDisplayString(_ctx.$t("get.the.loan")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-row align-center",
          style: { "margin-top": "36rpx" }
        }, [
          vue.createElementVNode("checkbox", {
            "border-color": "#B41949",
            "active-background-color": "#B41949",
            "icon-color": "white",
            checked: $data.isChecked === true ? "true" : "false",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.changeChecked && $options.changeChecked(...args))
          }, null, 8, ["checked"]),
          vue.createElementVNode("text", { style: { "margin-left": "12rpx", "color": "#4F4F4F", "font-size": "26rpx" } }, [
            vue.createTextVNode(
              vue.toDisplayString(_ctx.$t("policy.first")) + " ",
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              {
                style: { "color": "#9B284A" },
                onClick: _cache[3] || (_cache[3] = (...args) => $options.skipTpLoanAgreement && $options.skipTpLoanAgreement(...args))
              },
              vue.toDisplayString(_ctx.$t("loan.agreement")),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { style: { "height": "60rpx" } })
      ])
    ]);
  }
  const PagesRefundLoanInformationLoanInformation = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/refund/loan-information/loan-information.vue"]]);
  const _sfc_main$g = {
    data() {
      return {};
    },
    onLoad() {
      setTimeout(function() {
        uni.navigateTo({
          url: "/pages/information/loan-status/loan-status"
        });
      }, 5e3);
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      confirm() {
        uni.navigateTo({
          url: "/pages/information/loan-status/loan-status"
        });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#060518" }
          },
          vue.toDisplayString(_ctx.$t("application.result")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        style: { "margin-top": "225rpx", "background-color": "#FBFFFA", "box-shadow": "0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16)", "height": "500rpx" },
        class: "mx-30 px-24 flex flex-column align-center rounded-20"
      }, [
        vue.createElementVNode(
          "text",
          {
            style: { "font-size": "36rpx", "font-weight": "bolder", "color": "#A2227F", "margin-top": "80rpx" },
            class: "flex justify-center align-center"
          },
          vue.toDisplayString(_ctx.$t("successful.application")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          {
            style: { "font-size": "28rpx", "color": "#999999", "text-align": "center", "margin-top": "20rpx", "line-height": "1.5" },
            class: "mx-10"
          },
          vue.toDisplayString(_ctx.$t("application.result.tips")),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "60rpx" } }, [
          vue.createElementVNode(
            "button",
            {
              type: "primary",
              style: { "backgroundColor": "#A2227F", "height": "98rpx" },
              class: "rounded-10",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args))
            },
            vue.toDisplayString(_ctx.$t("confirm")),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const PagesRefundLoanResultLoanResult = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/refund/loan-result/loan-result.vue"]]);
  const _sfc_main$f = {
    data() {
      return {};
    },
    methods: {
      back() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "background-color": "#3F3F3F" }
      }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", {
          class: "flex flex-row p-31 align-center",
          style: { "background-color": "#A2227F" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/back_white.png",
            style: { "width": "45rpx", "height": "45rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          }),
          vue.createElementVNode(
            "text",
            {
              class: "w_fill",
              style: { "text-align": "center", "font-size": "36rpx", "color": "white" }
            },
            vue.toDisplayString(_ctx.$t("my.coupons")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", {
        class: "flex align-center justify-center",
        style: { "margin-top": "383rpx" }
      }, [
        vue.createElementVNode("image", {
          src: "/static/icon/empty_box.png",
          mode: "aspectFit",
          style: { "width": "265rpx", "height": "265rpx" }
        })
      ]),
      vue.createElementVNode("view", {
        class: "flex align-center justify-center",
        style: { "margin-top": "67rpx" }
      }, [
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#666666" } },
          vue.toDisplayString(_ctx.$t("my.coupons.tips")),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const PagesCouponsMyCouponsMyCoupons = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/coupons/my-coupons/my-coupons.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        facebook: "",
        whatsapp: "",
        twitter: "",
        phone: ""
      };
    },
    computed: {
      isButtonDisabled() {
        return this.facebook === "" || this.whatsapp === "" || this.twitter === "" || this.phone === "";
      }
    },
    onLoad() {
      try {
        this.facebook = uni.getStorageSync("facebook");
        this.whatsapp = uni.getStorageSync("whatsapp");
        this.twitter = uni.getStorageSync("twitter");
        this.phone = uni.getStorageSync("rPhone");
      } catch (e) {
      }
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      save() {
        try {
          uni.setStorageSync("facebook", this.facebook);
          uni.setStorageSync("whatsapp", this.whatsapp);
          uni.setStorageSync("twitter", this.twitter);
          uni.setStorageSync("rPhone", this.phone);
        } catch (e) {
        }
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        var self2 = this;
        setTimeout(function() {
          uni.hideLoading();
          uni.showToast({
            title: self2.$t("increase.amount.tips2"),
            position: "bottom"
          });
          setTimeout(function() {
            uni.navigateBack();
          }, 2e3);
        }, 1e3);
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "background-color": "#3F3F3F" }
      }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", {
          class: "flex flex-row p-31 align-center",
          style: { "background-color": "#A2227F" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/back_white.png",
            style: { "width": "45rpx", "height": "45rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          }),
          vue.createElementVNode(
            "text",
            {
              class: "w_fill",
              style: { "text-align": "center", "font-size": "36rpx", "color": "white" }
            },
            vue.toDisplayString(_ctx.$t("increase.amount")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", {
        class: "mx-30 px-30",
        style: { "background-color": "white", "margin-top": "49rpx" }
      }, [
        vue.createElementVNode("view", { style: { "height": "25rpx" } }),
        vue.createElementVNode(
          "view",
          {
            style: { "height": "100rpx", "background-color": "#F3F6F3", "color": "#A2227F", "font-size": "26rpx", "font-weight": "bolder" },
            class: "flex align-center justify-center px-30"
          },
          vue.toDisplayString(_ctx.$t("increase.amount.tips")),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { style: { "margin-top": "45rpx" } }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "number",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.facebook = $event),
              class: "border-bottom",
              placeholder: "Facebook",
              "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
              style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.facebook]
          ])
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "25rpx" } }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "number",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.whatsapp = $event),
              class: "border-bottom",
              placeholder: "Whatsapp",
              "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
              style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.whatsapp]
          ])
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "25rpx" } }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "number",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.twitter = $event),
              class: "border-bottom",
              placeholder: "Twitter",
              "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
              style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.twitter]
          ])
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "25rpx" } }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "number",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.phone = $event),
            class: "border-bottom",
            placeholder: _ctx.$t("recommender.phone.number"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.phone]
          ])
        ]),
        vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "50rpx" } }, [
          vue.createElementVNode("button", {
            type: "primary",
            disabled: $options.isButtonDisabled,
            style: vue.normalizeStyle({ backgroundColor: $options.isButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
            class: "rounded-10",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.save && $options.save(...args))
          }, vue.toDisplayString(_ctx.$t("save")), 13, ["disabled"])
        ]),
        vue.createElementVNode("view", { style: { "height": "45rpx" } })
      ])
    ]);
  }
  const PagesIncreaseAmountIncreaseAmount = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/increase-amount/increase-amount.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        url: ""
      };
    },
    onLoad(option) {
      this.setWebviewHeight();
      this.url = option.url;
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      setWebviewHeight() {
        let height = 0;
        let statusBar2 = 0;
        uni.getSystemInfo({
          success: (sysinfo) => {
            height = sysinfo.windowHeight - 47;
            statusBar2 = sysinfo.statusBarHeight;
          }
        });
        const currentWebview = this.$scope.$getAppWebview();
        setTimeout(function() {
          const wv = currentWebview.children()[0];
          wv.setStyle({
            top: uni.upx2px(105) + statusBar2,
            // 设置 web-view 距离顶部的距离以及自己的高度，单位为 px
            height
          });
        }, 1e3);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createElementVNode("web-view", { src: $data.url }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "background-color": "#3F3F3F" }
      }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", {
          class: "flex flex-row p-30 align-center",
          style: { "background-color": "white" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/back.png",
            style: { "width": "45rpx", "height": "45rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          })
        ])
      ])
    ]);
  }
  const PagesWebViewWebView = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/web-view/web-view.vue"]]);
  const _sfc_main$c = {
    components: {},
    data() {
      return {
        loanPurpose: "",
        loanPurposeRange: [
          "Education expenses",
          "Home renovation",
          "Debt consolidation",
          "Medical expenses",
          "Travel plans"
        ],
        educationalQualifications: "",
        educationalQualificationsRange: [
          "Bachelor's degree",
          "Master's degree",
          "Doctorate degree",
          "High school diploma",
          "Vocational skill certificate",
          "Associate degree"
        ],
        employmentType: "",
        employmentTypeRange: [
          "Administrative staff",
          "Sales representative",
          "Teacher",
          "Technical support engineer",
          "Nurse",
          "Engineer",
          "Accountant",
          "Business consultant"
        ],
        incomeType: 0,
        monthlySalary: "",
        revenueCycle: "",
        revenueCycleRange: [
          "Once a month",
          "Twice a month"
        ],
        revenueCycleIndex: -1,
        payDay1: "",
        payDay2: "",
        endDate: ""
      };
    },
    onLoad(option) {
      this.endDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      uni.showLoading({
        title: this.$t("waiting"),
        mask: true
      });
      this.$H.post("/app/get_income_info").then((res) => {
        uni.hideLoading();
        formatAppLog("log", "at pages/information/info-basic/info-basic.vue:296", res);
        if (typeof res.loanPurpose === "undefined")
          return;
        if (res.incomeType == 0) {
          this.loanPurpose = res.loanPurpose;
          this.educationalQualifications = res.educationalQualifications;
          this.employmentType = res.employmentType;
          this.incomeType = res.incomeType;
        } else {
          this.loanPurpose = res.loanPurpose;
          this.educationalQualifications = res.educationalQualifications;
          this.employmentType = res.employmentType;
          this.incomeType = res.incomeType;
          this.monthlySalary = res.monthlySalary;
          this.revenueCycleIndex = res.revenueCycleIndex;
          this.revenueCycle = res.revenueCycle;
          if (this.revenueCycleIndex == 0) {
            this.payDay1 = res.payDay1;
          } else {
            this.payDay1 = res.payDay1;
            this.payDay2 = res.payDay2;
          }
        }
      }).catch((err) => {
        uni.hideLoading();
      });
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      changeIncomeType(t) {
        this.incomeType = t;
      },
      onPickerChangeLoanPurpose(event) {
        const selectedIndex = event.detail.value;
        this.loanPurpose = this.loanPurposeRange[selectedIndex];
      },
      onPickerChangeEducation(event) {
        const selectedIndex = event.detail.value;
        this.educationalQualifications = this.educationalQualificationsRange[selectedIndex];
      },
      onPickerChangeEmployment(event) {
        const selectedIndex = event.detail.value;
        this.employmentType = this.employmentTypeRange[selectedIndex];
      },
      onPickerChangeRevenueCycle(event) {
        const selectedIndex = event.detail.value;
        this.revenueCycleIndex = selectedIndex;
        this.revenueCycle = this.revenueCycleRange[selectedIndex];
      },
      selectPayDay1(event) {
        this.payDay1 = event.detail.value;
      },
      selectPayDay2(event) {
        this.payDay2 = event.detail.value;
      },
      confirm() {
        let data = {
          loanPurpose: this.loanPurpose,
          loanPurposeRange: [
            "Education expenses",
            "Home renovation",
            "Debt consolidation",
            "Medical expenses",
            "Travel plans"
          ],
          educationalQualifications: this.educationalQualifications,
          educationalQualificationsRange: [
            "Bachelor's degree",
            "Master's degree",
            "Doctorate degree",
            "High school diploma",
            "Vocational skill certificate",
            "Associate degree"
          ],
          employmentType: this.employmentType,
          employmentTypeRange: [
            "Administrative staff",
            "Sales representative",
            "Teacher",
            "Technical support engineer",
            "Nurse",
            "Engineer",
            "Accountant",
            "Business consultant"
          ],
          incomeType: this.incomeType
        };
        this.request(data);
      },
      save() {
        let data = {
          loanPurpose: this.loanPurpose,
          loanPurposeRange: [
            "Education expenses",
            "Home renovation",
            "Debt consolidation",
            "Medical expenses",
            "Travel plans"
          ],
          educationalQualifications: this.educationalQualifications,
          educationalQualificationsRange: [
            "Bachelor's degree",
            "Master's degree",
            "Doctorate degree",
            "High school diploma",
            "Vocational skill certificate",
            "Associate degree"
          ],
          employmentType: this.employmentType,
          employmentTypeRange: [
            "Administrative staff",
            "Sales representative",
            "Teacher",
            "Technical support engineer",
            "Nurse",
            "Engineer",
            "Accountant",
            "Business consultant"
          ],
          incomeType: this.incomeType,
          monthlySalary: this.monthlySalary,
          revenueCycle: this.revenueCycle,
          revenueCycleRange: [
            "Once a month",
            "Twice a month"
          ],
          revenueCycleIndex: this.revenueCycleIndex,
          payDay1: this.payDay1,
          payDay2: this.payDay2
        };
        this.request(data);
      },
      request(data = {}) {
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        this.$H.post("/app/save_income_info", data).then((res) => {
          uni.hideLoading();
          uni.navigateTo({
            url: "/pages/information/info-upload/info-upload"
          });
        }).catch((err) => {
          uni.hideLoading();
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("income")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        class: "mx-30",
        style: { "padding-left": "42rpx", "padding-right": "42rpx", "margin-top": "20rpx", "background-color": "white" }
      }, [
        vue.createElementVNode("view", { style: { "height": "35rpx" } }),
        vue.createElementVNode("view", {
          class: "flex align-center justify-center",
          style: { "background-color": "#F3F6F3", "height": "100rpx" }
        }, [
          vue.createElementVNode(
            "text",
            {
              style: { "font-size": "26rpx", "color": "#A2227F", "font-weight": "bolder", "line-height": "1.5" },
              class: "px-20"
            },
            vue.toDisplayString(_ctx.$t("income.tips")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-column",
          style: { "margin-top": "33rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("loan.purpose")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "flex align-center justify-end flex-1 border-bottom",
            style: { "position": "relative", "margin-top": "30rpx" }
          }, [
            vue.createElementVNode("picker", {
              class: "flex-1",
              mode: "selector",
              range: $data.loanPurposeRange,
              onChange: _cache[1] || (_cache[1] = (...args) => $options.onPickerChangeLoanPurpose && $options.onPickerChangeLoanPurpose(...args))
            }, [
              vue.createElementVNode("view", {
                class: "flex align-center justify-center",
                style: { "height": "80rpx", "text-align": "center" }
              }, [
                $data.loanPurpose === "" ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                  },
                  vue.toDisplayString(_ctx.$t("loan.purpose")),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString($data.loanPurpose),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ], 40, ["range"]),
            vue.createElementVNode("image", {
              src: "/static/icon/spinner_tag.png",
              style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
              mode: "aspectFit"
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-column",
          style: { "margin-top": "30rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("educational.qualifications")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "flex align-center justify-end flex-1 border-bottom",
            style: { "position": "relative", "margin-top": "30rpx" }
          }, [
            vue.createElementVNode("picker", {
              class: "flex-1",
              mode: "selector",
              range: $data.educationalQualificationsRange,
              onChange: _cache[2] || (_cache[2] = (...args) => $options.onPickerChangeEducation && $options.onPickerChangeEducation(...args))
            }, [
              vue.createElementVNode("view", {
                class: "flex align-center justify-center",
                style: { "height": "80rpx", "text-align": "center" }
              }, [
                $data.educationalQualifications === "" ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                  },
                  vue.toDisplayString(_ctx.$t("educational.qualifications")),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString($data.educationalQualifications),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ], 40, ["range"]),
            vue.createElementVNode("image", {
              src: "/static/icon/spinner_tag.png",
              style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
              mode: "aspectFit"
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-column",
          style: { "margin-top": "30rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("employment.type")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "flex align-center justify-end flex-1 border-bottom",
            style: { "position": "relative", "margin-top": "30rpx" }
          }, [
            vue.createElementVNode("picker", {
              class: "flex-1",
              mode: "selector",
              range: $data.employmentTypeRange,
              onChange: _cache[3] || (_cache[3] = (...args) => $options.onPickerChangeEmployment && $options.onPickerChangeEmployment(...args))
            }, [
              vue.createElementVNode("view", {
                class: "flex align-center justify-center",
                style: { "height": "80rpx", "text-align": "center" }
              }, [
                $data.employmentType === "" ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                  },
                  vue.toDisplayString(_ctx.$t("employment.type")),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString($data.employmentType),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ], 40, ["range"]),
            vue.createElementVNode("image", {
              src: "/static/icon/spinner_tag.png",
              style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
              mode: "aspectFit"
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-column",
          style: { "margin-top": "30rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500", "padding-top": "5rpx" } },
            vue.toDisplayString(_ctx.$t("income.type")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "checkbox-group",
            {
              onChange: _cache[4] || (_cache[4] = ($event) => $options.changeIncomeType(0)),
              style: { "margin-top": "50rpx" }
            },
            [
              vue.createElementVNode("label", null, [
                vue.createElementVNode("checkbox", {
                  checked: $data.incomeType === 0,
                  style: { "font-size": "28rpx", "color": "#B4B4B4", "font-weight": "500" },
                  "active-background-color": "#B41949",
                  "border-color": "#B41949",
                  "icon-color": "white"
                }, vue.toDisplayString(_ctx.$t("no.income")), 9, ["checked"])
              ])
            ],
            32
            /* NEED_HYDRATION */
          ),
          vue.createElementVNode(
            "checkbox-group",
            {
              onChange: _cache[5] || (_cache[5] = ($event) => $options.changeIncomeType(1)),
              style: { "margin-top": "50rpx" }
            },
            [
              vue.createElementVNode("label", null, [
                vue.createElementVNode("checkbox", {
                  checked: $data.incomeType === 1,
                  style: { "font-size": "28rpx", "color": "#B4B4B4", "font-weight": "500" },
                  "active-background-color": "#B41949",
                  "border-color": "#B41949",
                  "icon-color": "white"
                }, vue.toDisplayString(_ctx.$t("variable.income")), 9, ["checked"])
              ])
            ],
            32
            /* NEED_HYDRATION */
          ),
          vue.createElementVNode(
            "checkbox-group",
            {
              onChange: _cache[6] || (_cache[6] = ($event) => $options.changeIncomeType(2)),
              style: { "margin-top": "50rpx" }
            },
            [
              vue.createElementVNode("label", null, [
                vue.createElementVNode("checkbox", {
                  checked: $data.incomeType === 2,
                  style: { "font-size": "28rpx", "color": "#B4B4B4", "font-weight": "500" },
                  "active-background-color": "#B41949",
                  "border-color": "#B41949",
                  "icon-color": "white"
                }, vue.toDisplayString(_ctx.$t("fixed.income")), 9, ["checked"])
              ])
            ],
            32
            /* NEED_HYDRATION */
          )
        ]),
        $data.incomeType === 0 ? (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 0 },
          [
            vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "30rpx" } }, [
              vue.createElementVNode(
                "button",
                {
                  type: "primary",
                  style: { "backgroundColor": "#A2227F", "height": "98rpx" },
                  class: "rounded-10",
                  onClick: _cache[7] || (_cache[7] = (...args) => $options.confirm && $options.confirm(...args))
                },
                vue.toDisplayString(_ctx.$t("save")),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { style: { "height": "50rpx" } })
          ],
          64
          /* STABLE_FRAGMENT */
        )) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "flex flex-column"
        }, [
          vue.createElementVNode("view", { style: { "margin-top": "30rpx" } }, [
            vue.withDirectives(vue.createElementVNode("input", {
              type: "number",
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.monthlySalary = $event),
              class: "border-bottom",
              placeholder: _ctx.$t("monthly.salary"),
              "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
              style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
            }, null, 8, ["placeholder"]), [
              [vue.vModelText, $data.monthlySalary]
            ])
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-column",
            style: { "margin-top": "30rpx" }
          }, [
            vue.createElementVNode(
              "text",
              { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
              vue.toDisplayString(_ctx.$t("revenue.cycle")),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", {
              class: "flex align-center justify-end flex-1 border-bottom",
              style: { "position": "relative", "margin-top": "30rpx" }
            }, [
              vue.createElementVNode("picker", {
                class: "flex-1",
                mode: "selector",
                range: $data.revenueCycleRange,
                onChange: _cache[9] || (_cache[9] = (...args) => $options.onPickerChangeRevenueCycle && $options.onPickerChangeRevenueCycle(...args))
              }, [
                vue.createElementVNode("view", {
                  class: "flex align-center justify-center",
                  style: { "height": "80rpx", "text-align": "center" }
                }, [
                  $data.revenueCycle === "" ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                    },
                    vue.toDisplayString(_ctx.$t("revenue.cycle")),
                    1
                    /* TEXT */
                  )) : (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 1 },
                    [
                      vue.createTextVNode(
                        vue.toDisplayString($data.revenueCycle),
                        1
                        /* TEXT */
                      )
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ], 40, ["range"]),
              vue.createElementVNode("image", {
                src: "/static/icon/spinner_tag.png",
                style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
                mode: "aspectFit"
              })
            ])
          ]),
          $data.revenueCycleIndex === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "flex align-center justify-end flex-1 border-bottom",
            style: { "position": "relative", "margin-top": "30rpx" }
          }, [
            vue.createElementVNode("picker", {
              class: "flex-1",
              mode: "date",
              onChange: _cache[10] || (_cache[10] = (...args) => $options.selectPayDay1 && $options.selectPayDay1(...args)),
              end: $data.endDate
            }, [
              vue.createElementVNode("view", {
                class: "flex align-center justify-center",
                style: { "height": "80rpx", "text-align": "center" }
              }, [
                $data.payDay1 === "" ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                  },
                  vue.toDisplayString(_ctx.$t("pay.day")),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString($data.payDay1),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ], 40, ["end"]),
            vue.createElementVNode("image", {
              src: "/static/icon/spinner_tag.png",
              style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
              mode: "aspectFit"
            })
          ])) : $data.revenueCycleIndex === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "flex flex-column"
          }, [
            vue.createElementVNode("view", {
              class: "flex align-center justify-end flex-1 border-bottom",
              style: { "position": "relative", "margin-top": "30rpx" }
            }, [
              vue.createElementVNode("picker", {
                class: "flex-1",
                mode: "date",
                onChange: _cache[11] || (_cache[11] = (...args) => $options.selectPayDay1 && $options.selectPayDay1(...args)),
                end: $data.endDate
              }, [
                vue.createElementVNode("view", {
                  class: "flex align-center justify-center",
                  style: { "height": "80rpx", "text-align": "center" }
                }, [
                  $data.payDay1 === "" ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                    },
                    vue.toDisplayString(_ctx.$t("pay.day")),
                    1
                    /* TEXT */
                  )) : (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 1 },
                    [
                      vue.createTextVNode(
                        vue.toDisplayString($data.payDay1),
                        1
                        /* TEXT */
                      )
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ], 40, ["end"]),
              vue.createElementVNode("image", {
                src: "/static/icon/spinner_tag.png",
                style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
                mode: "aspectFit"
              })
            ]),
            vue.createElementVNode("view", {
              class: "flex align-center justify-end flex-1 border-bottom",
              style: { "position": "relative", "margin-top": "30rpx" }
            }, [
              vue.createElementVNode("picker", {
                class: "flex-1",
                mode: "date",
                onChange: _cache[12] || (_cache[12] = (...args) => $options.selectPayDay2 && $options.selectPayDay2(...args)),
                end: $data.endDate
              }, [
                vue.createElementVNode("view", {
                  class: "flex align-center justify-center",
                  style: { "height": "80rpx", "text-align": "center" }
                }, [
                  $data.payDay2 === "" ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                    },
                    vue.toDisplayString(_ctx.$t("pay.day")),
                    1
                    /* TEXT */
                  )) : (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 1 },
                    [
                      vue.createTextVNode(
                        vue.toDisplayString($data.payDay2),
                        1
                        /* TEXT */
                      )
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ], 40, ["end"]),
              vue.createElementVNode("image", {
                src: "/static/icon/spinner_tag.png",
                style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
                mode: "aspectFit"
              })
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "30rpx" } }, [
            vue.createElementVNode("button", {
              type: "primary",
              style: { "backgroundColor": "#A2227F", "height": "98rpx" },
              class: "rounded-10",
              onClick: _cache[13] || (_cache[13] = (...args) => $options.save && $options.save(...args))
            }, "Save")
          ]),
          vue.createElementVNode("view", { style: { "height": "50rpx" } })
        ]))
      ])
    ]);
  }
  const PagesInformationInfoBasicInfoBasic = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/information/info-basic/info-basic.vue"]]);
  const _sfc_main$b = {
    data() {
      return {};
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      confirm() {
        uni.setStorage({
          key: "flag",
          data: "edit",
          success: function() {
            uni.navigateTo({
              url: "/pages/information/info-basic/info-basic"
            });
          }
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "background-color": "#3F3F3F" }
      }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", {
          class: "flex flex-row px-30 py-20 align-center",
          style: { "background-color": "#A2227F" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/back_white.png",
            style: { "width": "45rpx", "height": "45rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          }),
          vue.createElementVNode(
            "text",
            {
              class: "w_fill",
              style: { "text-align": "center", "font-size": "36rpx", "color": "white", "font-weight": "500" }
            },
            vue.toDisplayString(_ctx.$t("loan")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "margin-top": "32rpx", "margin-left": "60rpx", "margin-right": "60rpx", "background-color": "#F3F6F3", "height": "212rpx" }
      }, [
        vue.createElementVNode("view", { class: "flex justify-center" }, [
          vue.createElementVNode("image", {
            src: "/static/icon/logo_top.png",
            style: { "width": "242rpx", "height": "64rpx", "margin-top": "39rpx" },
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-row align-center",
          style: { "margin-top": "17rpx" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/safe.png",
            style: { "width": "40rpx", "height": "40rpx", "margin-left": "27rpx" },
            mode: "aspectFit"
          }),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "26rpx", "color": "#A2227F", "font-weight": "bolder", "margin-left": "11rpx", "margin-right": "27rpx" } },
            vue.toDisplayString(_ctx.$t("premise.tips")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { style: { "margin-top": "49rpx", "margin-left": "66rpx", "margin-right": "66rpx" } }, [
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#A2227F" } },
          vue.toDisplayString(_ctx.$t("premise.tips2")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { style: { "margin-top": "24rpx", "margin-left": "66rpx", "margin-right": "66rpx" } }, [
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#666666" } },
          vue.toDisplayString(_ctx.$t("premise.tips3")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "margin-top": "53rpx", "margin-left": "66rpx" }
      }, [
        vue.createCommentVNode(` <view class="flex flex-row align-center">\r
				<image src="/static/icon/device_data.png" style="width: 101rpx; height: 101rpx;"\r
					mode="aspectFit"></image>\r
				<text style="font-size: 26rpx; color: #3E3E3E; font-weight: bolder; margin-left: 16rpx;">{{ $t('device.information') }}</text>\r
			</view>\r
\r
			<view class="flex flex-row align-center" style="margin-top: 53rpx;">\r
				<image src="/static/icon/app_list.png" style="width: 101rpx; height: 101rpx;" mode="aspectFit">\r
				</image>\r
				<text style="font-size: 26rpx; color: #3E3E3E; font-weight: bolder; margin-left: 16rpx;">{{ $t('app.list') }}</text>\r
			</view> `),
        vue.createElementVNode("view", {
          class: "flex flex-row align-center",
          style: { "margin-top": "53rpx" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/camera_permission.png",
            style: { "width": "101rpx", "height": "101rpx" },
            mode: "aspectFit"
          }),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "26rpx", "color": "#3E3E3E", "font-weight": "bolder", "margin-left": "16rpx" } },
            vue.toDisplayString(_ctx.$t("camera.permission")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { style: { "margin-top": "108rpx", "margin-left": "35rpx", "margin-right": "35rpx" } }, [
        vue.createElementVNode("text", { style: { "font-size": "30rpx", "color": "#666666" } }, [
          vue.createTextVNode(
            vue.toDisplayString(_ctx.$t("premise.text1")) + " ",
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#A2227F" } },
            vue.toDisplayString(_ctx.$t("premise.text2")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString(_ctx.$t("premise.text3")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { style: { "margin-top": "35rpx", "margin-left": "25rpx", "margin-right": "25rpx" } }, [
        vue.createElementVNode(
          "button",
          {
            type: "primary",
            style: { "backgroundColor": "#A2227F", "height": "98rpx" },
            class: "rounded-10",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args))
          },
          vue.toDisplayString(_ctx.$t("confirm")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { style: { "height": "60rpx" } })
    ]);
  }
  const PagesInformationPremiseAgreePremiseAgree = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/information/premise-agree/premise-agree.vue"]]);
  function pathToBase64(path) {
    return new Promise(function(resolve, reject) {
      if (typeof plus === "object") {
        plus.io.resolveLocalFileSystemURL(path, function(entry) {
          entry.file(function(file) {
            var fileReader = new plus.io.FileReader();
            fileReader.onload = function(evt) {
              resolve(evt.target.result);
            };
            fileReader.onerror = function(error) {
              reject(error);
            };
            fileReader.readAsDataURL(file);
          }, function(error) {
            reject(error);
          });
        }, function(error) {
          reject(error);
        });
        return;
      }
      if (typeof wx === "object" && wx.canIUse("getFileSystemManager")) {
        wx.getFileSystemManager().readFile({
          filePath: path,
          encoding: "base64",
          success: function(res) {
            resolve("data:image/png;base64," + res.data);
          },
          fail: function(error) {
            reject(error);
          }
        });
        return;
      }
      reject(new Error("not support"));
    });
  }
  const _sfc_main$a = {
    data() {
      return {
        name: "",
        nationalIdCardNumber: "",
        type: 0,
        nicOssPath: "",
        nicOssPath2: ""
      };
    },
    onLoad() {
      try {
        this.name = uni.getStorageSync("name");
        this.nationalIdCardNumber = uni.getStorageSync("nationalIdNumber");
      } catch (e) {
      }
      uni.showLoading({
        title: this.$t("waiting"),
        mask: true
      });
      this.$H.post("/app/get_image").then((res) => {
        uni.hideLoading();
        formatAppLog("log", "at pages/information/info-upload/info-upload.vue:114", res.nic_oss_path);
        this.nicOssPath = res.nic_oss_path;
        this.nicOssPath2 = res.nic_oss_path2;
      }).catch((err) => {
        uni.hideLoading();
        formatAppLog("log", "at pages/information/info-upload/info-upload.vue:119", err);
      });
    },
    computed: {
      isButtonDisabled() {
        return this.nicOssPath === "" || this.nicOssPath2 === "" || this.name === "" || this.nationalIdCardNumber === "";
      }
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      takePhoto(e) {
        uni.chooseImage({
          count: 1,
          sourceType: ["camera"],
          sizeType: ["compressed"],
          success: (res) => {
            this.type = e;
            const tempFilePaths = res.tempFilePaths;
            this.uploadPhoto(tempFilePaths[0]);
          }
        });
      },
      uploadPhoto(tempFilePath) {
        pathToBase64(tempFilePath).then((base64) => {
          if (this.type === 1) {
            this.uploadFront(base64);
          } else {
            this.uploadBack(base64);
          }
        }).catch((error) => {
          formatAppLog("error", "at pages/information/info-upload/info-upload.vue:154", error);
        });
      },
      uploadFront(imageContent) {
        const data = {
          "image_content": imageContent,
          "image_content2": "",
          "image_type": 8
        };
        this.upload(data, 1);
      },
      uploadBack(imageContent) {
        const data = {
          "image_content": "",
          "image_content2": imageContent,
          "image_type": 8
        };
        this.upload(data, 2);
      },
      upload(data, type) {
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        this.$H.post("/app/upload_image", data).then((res) => {
          uni.hideLoading();
          if (type === 1) {
            this.nicOssPath = res.image_oss_path;
          } else {
            this.nicOssPath2 = res.image_oss_path2;
          }
        }).catch((err) => {
          uni.hideLoading();
          formatAppLog("log", "at pages/information/info-upload/info-upload.vue:192", err);
        });
      },
      submit() {
        try {
          uni.setStorageSync("name", this.name);
          uni.setStorageSync("nationalIdNumber", this.nationalIdCardNumber);
        } catch (e) {
        }
        uni.navigateTo({
          url: "/pages/information/info-bank/info-bank"
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("authentication")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        class: "mx-30",
        style: { "padding-left": "42rpx", "padding-right": "42rpx", "margin-top": "26rpx", "background-color": "white" }
      }, [
        vue.createElementVNode("view", { style: { "height": "29rpx" } }),
        vue.createCommentVNode(` <view class="flex flex-column justify-center"\r
				style="background-color: #F3F6F3; height: 182rpx; padding-left: 37rpx;">\r
				<text style="font-size: 34rpx; color: #444444; font-weight: 500;">{{ $t('name') }}: {{name}}</text>\r
				<text\r
					style="font-size: 34rpx; color: #444444; font-weight: 500; margin-top: 20rpx;">{{ $t('id.number') }}:\r
					{{idNumber}}</text>\r
			</view> `),
        vue.createElementVNode("view", { style: { "margin-top": "45rpx" } }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.name = $event),
            class: "border-bottom",
            placeholder: _ctx.$t("name"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.name]
          ])
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "25rpx" } }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "number",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.nationalIdCardNumber = $event),
            class: "border-bottom",
            placeholder: _ctx.$t("id.number"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.nationalIdCardNumber]
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex align-center border-bottom",
          style: { "background-color": "white", "width": "100%", "margin-top": "36rpx" },
          onClick: _cache[3] || (_cache[3] = ($event) => $options.takePhoto(1))
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/take_photo_tag.png	",
            style: { "width": "44rpx", "height": "44rpx", "margin-left": "16rpx", "margin-right": "36rpx" },
            mode: "aspectFit"
          }),
          $data.nicOssPath === "" ? (vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            class: "flex-1",
            disabled: "true",
            placeholder: _ctx.$t("front.card"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500;",
            style: { "height": "90rpx" }
          }, null, 8, ["placeholder"])) : (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            [
              vue.createElementVNode("image", {
                src: $data.nicOssPath,
                mode: "aspectFit",
                style: { "width": "100rpx", "height": "100rpx" }
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "text",
                {
                  class: "flex flex-1 align-center justify-center",
                  style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" }
                },
                vue.toDisplayString(_ctx.$t("front.success")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("image", {
                src: "/static/icon/upload_success.png",
                mode: "aspectFit",
                style: { "width": "30rpx", "height": "30rpx" }
              })
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", {
          class: "flex align-center border-bottom",
          style: { "background-color": "white", "width": "100%", "margin-top": "36rpx" },
          onClick: _cache[4] || (_cache[4] = ($event) => $options.takePhoto(2))
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/take_photo_tag.png	",
            style: { "width": "44rpx", "height": "44rpx", "margin-left": "16rpx", "margin-right": "36rpx" },
            mode: "aspectFit"
          }),
          $data.nicOssPath2 === "" ? (vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            class: "flex-1",
            disabled: "true",
            placeholder: _ctx.$t("back.card"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500;",
            style: { "height": "90rpx" }
          }, null, 8, ["placeholder"])) : (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            [
              vue.createElementVNode("image", {
                src: $data.nicOssPath2,
                mode: "aspectFit",
                style: { "width": "100rpx", "height": "100rpx" }
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "text",
                {
                  class: "flex flex-1 align-center justify-center",
                  style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" }
                },
                vue.toDisplayString(_ctx.$t("back.success")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("image", {
                src: "/static/icon/upload_success.png",
                mode: "aspectFit",
                style: { "width": "30rpx", "height": "30rpx" }
              })
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "36rpx" } }, [
          vue.createElementVNode("button", {
            type: "primary",
            disabled: $options.isButtonDisabled,
            style: vue.normalizeStyle({ backgroundColor: $options.isButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
            class: "rounded-10",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.submit && $options.submit(...args))
          }, vue.toDisplayString(_ctx.$t("submit")), 13, ["disabled"])
        ]),
        vue.createElementVNode("view", { style: { "height": "45rpx" } })
      ])
    ]);
  }
  const PagesInformationInfoUploadInfoUpload = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/information/info-upload/info-upload.vue"]]);
  let timer = null;
  const _sfc_main$9 = {
    data() {
      return {
        phone: "",
        countdown: 120,
        code: "",
        inProgress: false,
        isGetCodeSuccess: false
      };
    },
    computed: {
      isGetCodeButtonDisabled() {
        return this.phone === "";
      },
      isConfirmButtonDisabled() {
        return this.phone === "" || this.code === "";
      }
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      startCountdown() {
        this.inProgress = true;
        timer = setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          } else {
            this.stopCountdown();
          }
        }, 1e3);
      },
      stopCountdown() {
        formatAppLog("log", "at pages/account/forget-password/forget-password.vue:95", "====");
        clearInterval(timer);
        this.countdown = 120;
        timer = null;
        this.inProgress = false;
      },
      getCode() {
        if (this.inProgress)
          return;
        let data = {
          "phone": this.phone
        };
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        this.$H.post("/user/get_code", data).then((res) => {
          this.isGetCodeSuccess = true;
          this.startCountdown();
          uni.hideLoading();
        }).catch((err) => {
          uni.hideLoading();
        });
      },
      confirm() {
        if (this.inProgress) {
          this.stopCountdown(timer);
        }
        uni.navigateTo({
          url: "/pages/account/set-password/set-password?phone=" + this.phone + "&code=" + this.code
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_Button = vue.resolveComponent("Button");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("forget.password2")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        style: { "margin-top": "225rpx", "background": "linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF)", "box-shadow": "0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16)" },
        class: "mx-30 px-30 flex flex-column align-center rounded-20"
      }, [
        $data.isGetCodeSuccess ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            style: { "font-size": "36rpx", "font-weight": "bolder", "color": "#A2227F", "margin-top": "58rpx", "text-align": "center" },
            class: "flex justify-center align-center"
          },
          vue.toDisplayString(_ctx.$t("verify.code.tips")) + " " + vue.toDisplayString($data.phone),
          1
          /* TEXT */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "flex align-center border-bottom",
          style: { "width": "100%", "margin-top": "30rpx" }
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "number",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.phone = $event),
            class: "flex-1",
            placeholder: _ctx.$t("phone"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.phone]
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex align-center w_fill border-bottom",
          style: { "margin-top": "25rpx" }
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "number",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.code = $event),
            class: "flex-1",
            placeholder: _ctx.$t("code"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.code]
          ]),
          vue.createElementVNode("view", {
            class: "flex align-center justify-center",
            style: { "height": "90rpx" }
          }, [
            vue.createVNode(_component_Button, {
              type: "primary",
              disabled: $options.isGetCodeButtonDisabled,
              style: vue.normalizeStyle({ backgroundColor: $options.isGetCodeButtonDisabled ? "#CCCCCC" : $data.inProgress ? "#CCCCCC" : "#A2227F" }),
              class: "rounded-10",
              onClick: $options.getCode
            }, {
              default: vue.withCtx(() => [
                !$data.inProgress ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString(_ctx.$t("get.code")),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString($data.countdown) + "s ",
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled", "style", "onClick"])
          ])
        ]),
        vue.createElementVNode("view", {
          class: "w_fill",
          style: { "margin-top": "45rpx" }
        }, [
          vue.createElementVNode("button", {
            type: "primary",
            disabled: $options.isConfirmButtonDisabled,
            style: vue.normalizeStyle({ backgroundColor: $options.isConfirmButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
            class: "rounded-10",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.confirm && $options.confirm(...args))
          }, vue.toDisplayString(_ctx.$t("confirm")), 13, ["disabled"])
        ]),
        vue.createElementVNode("view", { style: { "height": "45rpx" } })
      ])
    ]);
  }
  const PagesAccountForgetPasswordForgetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/account/forget-password/forget-password.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        bankCardCount: -1,
        bankCardRange: [
          1,
          2,
          3,
          4,
          5
        ],
        creditCardCount: -1,
        creditCardRange: [
          1,
          2,
          3,
          4,
          5
        ],
        bindBankName: "",
        bindBankAccount: "",
        bankNameRange: [
          "Banco Nacional de Bolivia",
          "Banco de Crédito de Bolivia",
          "Banco Mercantil Santa Cruz ",
          "Banco FIE",
          "Banco Ganadero"
        ]
      };
    },
    computed: {
      isButtonDisabled() {
        return this.bankCardCount === -1 || this.creditCardCount === -1 || this.bindBankName === "" || this.bindBankAccount === "";
      }
    },
    onLoad() {
      uni.$on("dataFromNextPage", (data) => {
        this.bindBankName = data.bankName;
        this.bindBankAccount = data.accountNumber;
      });
      uni.showLoading({
        title: this.$t("waiting"),
        mask: true
      });
      this.$H.post("/app/get_bank_data").then((res) => {
        uni.hideLoading();
        if (typeof res.bankCardCount === "undefined")
          return;
        this.bankCardCount = res.bankCardCount;
        this.creditCardCount = res.creditCardCount;
        this.bindBankName = res.bindBankName;
        this.bindBankAccount = res.bindBankAccount;
      }).catch((err) => {
        uni.hideLoading();
      });
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      onPickerChangeBankNum(event) {
        const selectedIndex = event.detail.value;
        this.bankCardCount = this.bankCardRange[selectedIndex];
      },
      onPickerChangeCreditNum(event) {
        const selectedIndex = event.detail.value;
        this.creditCardCount = this.creditCardRange[selectedIndex];
      },
      addBank() {
        uni.navigateTo({
          url: "/pages/information/add-bank/add-bank"
        });
      },
      confirm() {
        let data = {
          bankCardCount: this.bankCardCount,
          bankCardRange: [
            1,
            2,
            3,
            4,
            5
          ],
          creditCardCount: this.creditCardCount,
          creditCardRange: [
            1,
            2,
            3,
            4,
            5
          ],
          bindBankName: this.bindBankName,
          bindBankAccount: this.bindBankAccount,
          bankNameRange: [
            "Banco Nacional de Bolivia",
            "Banco de Crédito de Bolivia",
            "Banco Mercantil Santa Cruz ",
            "Banco FIE",
            "Banco Ganadero"
          ]
        };
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        this.$H.post("/app/save_bank_data", data).then((res) => {
          uni.hideLoading();
          uni.getStorage({
            key: "flag",
            success: function(res2) {
              if (res2.data === "onlyReview") {
                uni.reLaunch({
                  url: "/pages/index/index"
                });
              } else {
                uni.navigateTo({
                  url: "/pages/refund/loan-application/loan-application"
                });
              }
            }
          });
        }).catch((err) => {
          uni.hideLoading();
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("bank.information")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        class: "mx-30",
        style: { "padding-left": "42rpx", "padding-right": "42rpx", "margin-top": "20rpx", "background-color": "white" }
      }, [
        vue.createElementVNode("view", { style: { "height": "59rpx" } }),
        vue.createElementVNode("view", { class: "flex flex-column" }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("bank.card.tips")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "flex align-center justify-end flex-1 border-bottom",
            style: { "position": "relative", "margin-top": "30rpx" }
          }, [
            vue.createElementVNode("picker", {
              class: "flex-1",
              mode: "selector",
              range: $data.bankCardRange,
              onChange: _cache[1] || (_cache[1] = (...args) => $options.onPickerChangeBankNum && $options.onPickerChangeBankNum(...args))
            }, [
              vue.createElementVNode("view", {
                class: "flex align-center justify-center",
                style: { "height": "80rpx", "text-align": "center" }
              }, [
                $data.bankCardCount === -1 ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                  },
                  vue.toDisplayString(_ctx.$t("select.card.tips")),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString($data.bankCardCount),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ], 40, ["range"]),
            vue.createElementVNode("image", {
              src: "/static/icon/spinner_tag.png",
              style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
              mode: "aspectFit"
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-column",
          style: { "margin-top": "36rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("credit.card.tips")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "flex align-center justify-end flex-1 border-bottom",
            style: { "position": "relative", "margin-top": "30rpx" }
          }, [
            vue.createElementVNode("picker", {
              class: "flex-1",
              mode: "selector",
              range: $data.creditCardRange,
              onChange: _cache[2] || (_cache[2] = (...args) => $options.onPickerChangeCreditNum && $options.onPickerChangeCreditNum(...args))
            }, [
              vue.createElementVNode("view", {
                class: "flex align-center justify-center",
                style: { "height": "80rpx", "text-align": "center" }
              }, [
                $data.creditCardCount === -1 ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                  },
                  vue.toDisplayString(_ctx.$t("select.card.tips")),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString($data.creditCardCount),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ], 40, ["range"]),
            vue.createElementVNode("image", {
              src: "/static/icon/spinner_tag.png",
              style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
              mode: "aspectFit"
            })
          ])
        ]),
        $data.bindBankName === "" || $data.bindBankAccount === "" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "flex flex-column",
          style: { "margin-top": "36rpx" },
          onClick: _cache[3] || (_cache[3] = (...args) => $options.addBank && $options.addBank(...args))
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("add.bank.card")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "flex align-center justify-center",
            style: { "margin-top": "36rpx" }
          }, [
            vue.createElementVNode("view", {
              style: { "width": "436rpx", "height": "248rpx", "background-color": "#EFEFEF" },
              class: "flex align-center justify-center"
            }, [
              vue.createElementVNode("image", {
                src: "/static/icon/add_bank.png",
                style: { "width": "88rpx", "height": "88rpx" },
                mode: "aspectFit"
              })
            ])
          ])
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "flex flex-column",
          style: { "margin-top": "36rpx" }
        }, [
          vue.createElementVNode("view", { class: "flex flex-row justify-between" }, [
            vue.createElementVNode(
              "text",
              { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
              vue.toDisplayString(_ctx.$t("bound.bank.card")),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              {
                style: { "font-size": "30rpx", "color": "#A2227F", "font-weight": "500" },
                onClick: _cache[4] || (_cache[4] = (...args) => $options.addBank && $options.addBank(...args))
              },
              vue.toDisplayString(_ctx.$t("change")),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", {
            style: { "margin-top": "25rpx", "height": "248rpx", "padding-left": "36rpx", "padding-top": "30rpx" },
            class: "border-bank flex flex-column"
          }, [
            vue.createElementVNode(
              "text",
              { style: { "font-size": "34rpx", "color": "#444444", "font-weight": "500" } },
              vue.toDisplayString($data.bindBankName),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { style: { "font-size": "34rpx", "color": "#444444", "font-weight": "500", "margin-top": "26rpx" } },
              vue.toDisplayString($data.bindBankAccount),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "flex justify-end" }, [
              vue.createElementVNode("image", {
                src: "/static/icon/logo_top.png",
                style: { "width": "256rpx", "height": "85rpx" },
                mode: "aspectFit"
              })
            ])
          ])
        ])),
        vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "36rpx" } }, [
          vue.createElementVNode("button", {
            type: "primary",
            disabled: $options.isButtonDisabled,
            style: vue.normalizeStyle({ backgroundColor: $options.isButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
            class: "rounded-10",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.confirm && $options.confirm(...args))
          }, vue.toDisplayString(_ctx.$t("confirm")), 13, ["disabled"])
        ]),
        vue.createElementVNode("view", { style: { "height": "50rpx" } })
      ])
    ]);
  }
  const PagesInformationInfoBankInfoBank = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/information/info-bank/info-bank.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        bankName: "",
        bankNameRange: [
          "Banco Nacional de Bolivia",
          "Banco de Crédito de Bolivia",
          "Banco Mercantil Santa Cruz ",
          "Banco FIE",
          "Banco Ganadero"
        ],
        account: ""
      };
    },
    computed: {
      isButtonDisabled() {
        return this.bankName === "" || this.account === "";
      }
    },
    methods: {
      back() {
        uni.navigateBack();
      },
      onPickerChangeBankName(event) {
        const selectedIndex = event.detail.value;
        this.bankName = this.bankNameRange[selectedIndex];
      },
      confirm() {
        const data = {
          bankName: this.bankName,
          accountNumber: this.account
        };
        uni.$emit("dataFromNextPage", data);
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "background-color": "#3F3F3F" }
      }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", {
          class: "flex flex-row p-31 align-center",
          style: { "background-color": "#A2227F" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/back_white.png",
            style: { "width": "45rpx", "height": "45rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          }),
          vue.createElementVNode(
            "text",
            {
              class: "w_fill",
              style: { "text-align": "center", "font-size": "36rpx", "color": "white" }
            },
            vue.toDisplayString(_ctx.$t("add.bank.card")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", {
        class: "mx-30",
        style: { "padding-left": "42rpx", "padding-right": "42rpx", "background-color": "white", "margin-top": "49rpx" }
      }, [
        vue.createElementVNode("view", { style: { "height": "25rpx" } }),
        vue.createElementVNode(
          "view",
          {
            style: { "height": "100rpx", "background-color": "#F3F6F3", "color": "#A2227F", "font-size": "26rpx", "font-weight": "bolder" },
            class: "flex align-center justify-center px-30"
          },
          vue.toDisplayString(_ctx.$t("add.bank.tips")),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "flex flex-column",
          style: { "margin-top": "54rpx" }
        }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#444444", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("bank.name")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "flex align-center justify-end flex-1 border-bottom",
            style: { "position": "relative", "margin-top": "30rpx" }
          }, [
            vue.createElementVNode("picker", {
              class: "flex-1",
              mode: "selector",
              range: $data.bankNameRange,
              onChange: _cache[1] || (_cache[1] = (...args) => $options.onPickerChangeBankName && $options.onPickerChangeBankName(...args))
            }, [
              vue.createElementVNode("view", {
                class: "flex align-center justify-center",
                style: { "height": "80rpx", "text-align": "center" }
              }, [
                $data.bankName === "" ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" }
                  },
                  vue.toDisplayString(_ctx.$t("bank.name")),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString($data.bankName),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ], 40, ["range"]),
            vue.createElementVNode("image", {
              src: "/static/icon/spinner_tag.png",
              style: { "width": "23rpx", "height": "23rpx", "position": "absolute", "bottom": "12rpx" },
              mode: "aspectFit"
            })
          ])
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "60rpx" } }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "number",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.account = $event),
            class: "border-bottom",
            placeholder: _ctx.$t("account.number"),
            "placeholder-style": "color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;",
            style: { "height": "90rpx", "color": "#444444", "font-weight": "500", "font-size": "30rpx", "text-align": "center" }
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.account]
          ])
        ]),
        vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "36rpx" } }, [
          vue.createElementVNode("button", {
            type: "primary",
            disabled: $options.isButtonDisabled,
            style: vue.normalizeStyle({ backgroundColor: $options.isButtonDisabled ? "#CCCCCC" : "#A2227F", height: "98rpx" }),
            class: "rounded-10",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.confirm && $options.confirm(...args))
          }, vue.toDisplayString(_ctx.$t("confirm")), 13, ["disabled"])
        ]),
        vue.createElementVNode("view", { style: { "height": "50rpx" } })
      ])
    ]);
  }
  const PagesInformationAddBankAddBank = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/information/add-bank/add-bank.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {
      back() {
        uni.reLaunch({
          url: "/pages/index/index"
        });
      },
      checkStatus() {
        uni.showLoading({
          title: this.$t("waiting"),
          mask: true
        });
        setTimeout(function() {
          uni.hideLoading();
        }, 1e3);
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#060518" }
          },
          vue.toDisplayString(_ctx.$t("loan.status")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        class: "mx-30 px-30",
        style: { "background-color": "white" }
      }, [
        vue.createElementVNode("view", { style: { "height": "59rpx" } }),
        vue.createElementVNode("view", null, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "30rpx", "color": "#606265" } },
            vue.toDisplayString(_ctx.$t("available.credit.upto")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "33rpx" } }, [
          vue.createElementVNode("text", { style: { "font-size": "60rpx", "color": "#303030", "font-weight": "bold" } }, "Bs.10000")
        ]),
        vue.createElementVNode("view", { style: { "height": "1rpx", "background-color": "#BDBDBD", "margin-top": "48rpx" } }),
        vue.createElementVNode("view", { style: { "margin-top": "48rpx" } }, [
          vue.createElementVNode(
            "text",
            { style: { "font-size": "36rpx", "color": "#333333", "font-weight": "500" } },
            vue.toDisplayString(_ctx.$t("application.submitted")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "margin-top": "20rpx" } }, [
          vue.createElementVNode("text", { style: { "font-size": "26rpx", "color": "#333333" } }, [
            vue.createTextVNode(
              vue.toDisplayString(_ctx.$t("loan.status.text1")),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { style: { "color": "#FF4F04", "font-size": "26rpx", "font-weight": "500" } },
              vue.toDisplayString(_ctx.$t("loan.status.text2")),
              1
              /* TEXT */
            ),
            vue.createTextVNode(
              vue.toDisplayString(_ctx.$t("loan.status.text3")),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { style: { "width": "100%", "margin-top": "36rpx" } }, [
          vue.createElementVNode(
            "button",
            {
              type: "primary",
              style: { "backgroundColor": "#A2227F", "height": "98rpx" },
              class: "rounded-10",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.checkStatus && $options.checkStatus(...args))
            },
            vue.toDisplayString(_ctx.$t("check.result")),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "height": "50rpx" } })
      ])
    ]);
  }
  const PagesInformationLoanStatusLoanStatus = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/information/loan-status/loan-status.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {
      back() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "background-color": "#3F3F3F" }
      }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", {
          class: "flex flex-row p-31 align-center",
          style: { "background-color": "#A2227F" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/back_white.png",
            style: { "width": "45rpx", "height": "45rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          }),
          vue.createElementVNode(
            "text",
            {
              class: "w_fill",
              style: { "text-align": "center", "font-size": "36rpx", "color": "white" }
            },
            vue.toDisplayString(_ctx.$t("repayment")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", {
        class: "flex align-center justify-center",
        style: { "margin-top": "383rpx" }
      }, [
        vue.createElementVNode("image", {
          src: "/static/icon/empty_box.png",
          mode: "aspectFit",
          style: { "width": "265rpx", "height": "265rpx" }
        })
      ]),
      vue.createElementVNode("view", {
        class: "flex align-center justify-center",
        style: { "margin-top": "67rpx" }
      }, [
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#666666" } },
          vue.toDisplayString(_ctx.$t("repayment.tips")),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const PagesRepayRepay = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/repay/repay.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        list: []
      };
    },
    onLoad() {
      uni.showLoading({
        title: this.$t("waiting"),
        mask: true
      });
      this.$H.post("/user/get_order_list").then((res) => {
        uni.hideLoading();
        this.list = res.list;
      }).catch((err) => {
        uni.hideLoading();
      });
    },
    methods: {
      back() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_status_bar)
      ]),
      vue.createElementVNode("view", { class: "flex flex-row p-31 align-center" }, [
        vue.createElementVNode("image", {
          src: "/static/icon/back.png",
          style: { "width": "45rpx", "height": "45rpx" },
          onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args)),
          mode: "aspectFit"
        }),
        vue.createElementVNode(
          "text",
          {
            class: "w_fill",
            style: { "text-align": "center", "font-size": "36rpx", "color": "#3C3C3C", "font-weight": "bolder" }
          },
          vue.toDisplayString(_ctx.$t("history.loan")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { style: { "height": "20rpx" } }),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: index },
            [
              vue.createElementVNode("view", {
                class: "mx-30",
                style: { "height": "350rpx", "background-color": "white", "padding-left": "42rpx", "padding-right": "42rpx" }
              }, [
                vue.createElementVNode("view", { style: { "height": "42rpx" } }),
                vue.createElementVNode("view", { class: "flex flex-row justify-between" }, [
                  vue.createElementVNode(
                    "text",
                    { style: { "font-size": "30rpx", "color": "#666666" } },
                    vue.toDisplayString(_ctx.$t("borrowing.time")),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "500" } },
                    vue.toDisplayString(item.borrowing_time),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", {
                  class: "flex flex-row justify-between",
                  style: { "margin-top": "20rpx" }
                }, [
                  vue.createElementVNode(
                    "text",
                    { style: { "font-size": "30rpx", "color": "#666666" } },
                    vue.toDisplayString(_ctx.$t("loan.term")),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "500" } },
                    vue.toDisplayString(item.loan_term) + " " + vue.toDisplayString(_ctx.$t("days")),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", {
                  class: "dashed-line",
                  style: { "margin-top": "20rpx" }
                }),
                vue.createElementVNode("view", {
                  class: "flex flex-row justify-between align-center",
                  style: { "margin-top": "31rpx" }
                }, [
                  vue.createElementVNode("view", { class: "flex flex-column" }, [
                    vue.createElementVNode(
                      "text",
                      { style: { "font-size": "58rpx", "color": "#22232B", "font-weight": "bolder" } },
                      vue.toDisplayString(_ctx.$t("currency.unit")) + vue.toDisplayString(item.loan_amount),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { style: { "font-size": "30rpx", "color": "#666666", "margin-top": "7rpx" } },
                      vue.toDisplayString(_ctx.$t("loan.amount")),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "text",
                    {
                      style: vue.normalizeStyle([{ "font-size": "32rpx", "font-weight": "bolder" }, item.loan_status === "Cleared" ? "color: #A2227F;" : "color: #2C3643;"])
                    },
                    vue.toDisplayString(item.loan_status),
                    5
                    /* TEXT, STYLE */
                  )
                ])
              ]),
              vue.createElementVNode("view", { style: { "height": "30rpx" } })
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesHistoryLoanHistoryLoan = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/history-loan/history-loan.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {
      back() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "background-color": "#3F3F3F" }
      }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", {
          class: "flex flex-row p-31 align-center",
          style: { "background-color": "#A2227F" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/back_white.png",
            style: { "width": "45rpx", "height": "45rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          }),
          vue.createElementVNode(
            "text",
            {
              class: "w_fill",
              style: { "text-align": "center", "font-size": "36rpx", "color": "white" }
            },
            vue.toDisplayString(_ctx.$t("notify")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", {
        class: "flex flex-column border-bottom mx-30",
        style: { "margin-top": "33rpx" }
      }, [
        vue.createElementVNode("view", { class: "flex flex-row align-center" }, [
          vue.createElementVNode("image", {
            src: "/static/icon/notify.png",
            style: { "width": "92rpx", "height": "92rpx" },
            mode: "aspectFit"
          }),
          vue.createElementVNode("view", {
            class: "flex flex-column",
            style: { "margin-left": "36rpx" }
          }, [
            vue.createElementVNode(
              "text",
              { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "500" } },
              vue.toDisplayString(_ctx.$t("notify.tips")),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", {
              class: "flex flex-row justify-between align-center",
              style: { "margin-top": "10rpx", "width": "562rpx" }
            }, [
              vue.createElementVNode(
                "text",
                { style: { "font-size": "26rpx", "color": "#B4B4B4", "font-weight": "500" } },
                vue.toDisplayString(_ctx.$t("register.success")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", { style: { "font-size": "30rpx", "color": "#B4B4B4", "font-weight": "500" } }, "2024-05-22")
            ])
          ])
        ]),
        vue.createElementVNode("view", { style: { "height": "35rpx" } })
      ])
    ]);
  }
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/message/message.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        name: "",
        idNumber: "",
        phone: "",
        loanAmount: "",
        loanTerm: "",
        apr: "",
        interest: "",
        repaymentDate: "",
        repaymentAmount: ""
      };
    },
    onLoad(option) {
      try {
        this.name = uni.getStorageSync("name");
        this.idNumber = uni.getStorageSync("nationalIdNumber");
        this.phone = uni.getStorageSync("phone");
      } catch (e) {
      }
      this.loanAmount = option.loanAmount;
      this.loanTerm = option.loanTerm;
      this.apr = option.apr;
      this.interest = option.interest;
      this.repaymentDate = option.repaymentDate;
      this.repaymentAmount = option.repaymentAmount;
    },
    methods: {
      back() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "flex flex-column",
        style: { "background-color": "#3F3F3F" }
      }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", {
          class: "flex flex-row p-31 align-center",
          style: { "background-color": "#A2227F" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/icon/back_white.png",
            style: { "width": "45rpx", "height": "45rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          }),
          vue.createElementVNode(
            "text",
            {
              class: "w_fill",
              style: { "text-align": "center", "font-size": "36rpx", "color": "white" }
            },
            vue.toDisplayString(_ctx.$t("loan.agreement2")),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "flex flex-column px-30" }, [
        vue.createElementVNode("view", { style: { "height": "16rpx" } }),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "28rpx", "color": "#666666", "line-height": "1.5" } },
          vue.toDisplayString(_ctx.$t("loan.agreement.tips1")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "32rpx" } },
          vue.toDisplayString(_ctx.$t("name")) + ": " + vue.toDisplayString($data.name),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "16rpx" } },
          vue.toDisplayString(_ctx.$t("id.number")) + ": " + vue.toDisplayString($data.idNumber),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "16rpx" } },
          vue.toDisplayString(_ctx.$t("phone")) + ": " + vue.toDisplayString($data.phone),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "28rpx", "color": "#666666", "margin-top": "32rpx" } },
          vue.toDisplayString(_ctx.$t("loan.agreement.tips2")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "32rpx" } },
          vue.toDisplayString(_ctx.$t("loan.amount")) + ": " + vue.toDisplayString(_ctx.$t("currency.unit")) + vue.toDisplayString($data.loanAmount),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "16rpx" } },
          vue.toDisplayString(_ctx.$t("loan.term")) + ": " + vue.toDisplayString($data.loanTerm) + " " + vue.toDisplayString(_ctx.$t("days")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "16rpx" } },
          vue.toDisplayString(_ctx.$t("annual.interest.rate")) + ": " + vue.toDisplayString($data.apr) + "%",
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "16rpx" } },
          vue.toDisplayString(_ctx.$t("interest")) + ": " + vue.toDisplayString(_ctx.$t("currency.unit")) + vue.toDisplayString($data.interest),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "16rpx" } },
          vue.toDisplayString(_ctx.$t("repayment.date")) + ": " + vue.toDisplayString($data.repaymentDate),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "30rpx", "color": "#333333", "font-weight": "bold", "margin-top": "16rpx" } },
          vue.toDisplayString(_ctx.$t("repayment.amount")) + ": " + vue.toDisplayString(_ctx.$t("currency.unit")) + vue.toDisplayString($data.repaymentAmount),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "28rpx", "color": "#666666", "margin-top": "32rpx", "line-height": "1.5" } },
          vue.toDisplayString(_ctx.$t("loan.agreement.tips3")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "26rpx", "color": "#999999", "margin-top": "32rpx", "line-height": "1.5" } },
          vue.toDisplayString(_ctx.$t("loan.agreement.tips4")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "26rpx", "color": "#999999", "margin-top": "32rpx", "line-height": "1.5" } },
          vue.toDisplayString(_ctx.$t("loan.agreement.tips5")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "26rpx", "color": "#999999", "margin-top": "32rpx", "line-height": "1.5" } },
          vue.toDisplayString(_ctx.$t("loan.agreement.tips6")),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "26rpx", "color": "#999999", "margin-top": "32rpx", "line-height": "1.5" } },
          vue.toDisplayString(_ctx.$t("loan.agreement.tips7")),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { style: { "height": "60rpx" } })
      ])
    ]);
  }
  const PagesRefundLoanAgreementLoanAgreement = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/pages/refund/loan-agreement/loan-agreement.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/account/login/login", PagesAccountLoginLogin);
  __definePage("pages/account/register/register", PagesAccountRegisterRegister);
  __definePage("pages/account/set-password/set-password", PagesAccountSetPasswordSetPassword);
  __definePage("pages/account/already-register/already-register", PagesAccountAlreadyRegisterAlreadyRegister);
  __definePage("pages/account/finish-register/finish-register", PagesAccountFinishRegisterFinishRegister);
  __definePage("pages/refund/loan-application/loan-application", PagesRefundLoanApplicationLoanApplication);
  __definePage("pages/refund/loan-information/loan-information", PagesRefundLoanInformationLoanInformation);
  __definePage("pages/refund/loan-result/loan-result", PagesRefundLoanResultLoanResult);
  __definePage("pages/coupons/my-coupons/my-coupons", PagesCouponsMyCouponsMyCoupons);
  __definePage("pages/increase-amount/increase-amount", PagesIncreaseAmountIncreaseAmount);
  __definePage("pages/web-view/web-view", PagesWebViewWebView);
  __definePage("pages/information/info-basic/info-basic", PagesInformationInfoBasicInfoBasic);
  __definePage("pages/information/premise-agree/premise-agree", PagesInformationPremiseAgreePremiseAgree);
  __definePage("pages/information/info-upload/info-upload", PagesInformationInfoUploadInfoUpload);
  __definePage("pages/account/forget-password/forget-password", PagesAccountForgetPasswordForgetPassword);
  __definePage("pages/information/info-bank/info-bank", PagesInformationInfoBankInfoBank);
  __definePage("pages/information/add-bank/add-bank", PagesInformationAddBankAddBank);
  __definePage("pages/information/loan-status/loan-status", PagesInformationLoanStatusLoanStatus);
  __definePage("pages/repay/repay", PagesRepayRepay);
  __definePage("pages/history-loan/history-loan", PagesHistoryLoanHistoryLoan);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/refund/loan-agreement/loan-agreement", PagesRefundLoanAgreementLoanAgreement);
  const _sfc_main$1 = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/App.vue"]]);
  const login$1 = "Login";
  const register$1 = "Register";
  const password$1 = "Password";
  const name$1 = "Name";
  const phone$1 = "Phone";
  const birth$1 = "Date of birth";
  const day$1 = "Day";
  const month$1 = "Month";
  const year$1 = "Year";
  const gender$1 = "Gender";
  const male$1 = "Male";
  const female$1 = "Female";
  const confirm$1 = "Confirm";
  const verify$1 = "Verify";
  const loan$1 = "Loan";
  const repayment$1 = "Repayment";
  const logout$1 = "Logout";
  const interest$1 = "Interest";
  const waiting$1 = "Waiting...";
  const welcome$1 = "Welcome";
  const save$1 = "Save";
  const code$1 = "Code";
  const income$1 = "Income";
  const resend$1 = "Resend";
  const authentication$1 = "Authentication";
  const material$1 = "Material";
  const change$1 = "Change";
  const submit$1 = "Submit";
  const congratulations$1 = "Congratulations";
  const days$1 = "Days";
  const notify$1 = "Notify";
  const en = {
    "locale.auto": "Hello",
    "tab.home": "Home",
    "tab.message": "Message",
    "tab.loan": "My loan",
    "tab.profile": "Profile",
    login: login$1,
    "phone.number": "Phone number",
    register: register$1,
    "no.account": "No account?",
    "forget.password": "Forget password?",
    password: password$1,
    "data.secure": "Keep collected data secure",
    name: name$1,
    phone: phone$1,
    "e.mail": "Email",
    birth: birth$1,
    day: day$1,
    month: month$1,
    year: year$1,
    gender: gender$1,
    male: male$1,
    female: female$1,
    "policy.first": "I have read and agree to the",
    "privacy.policy": "Privacy Policy",
    "finish.register": "Finish register",
    "verify.code.tips": "Verification code has been sent to",
    confirm: confirm$1,
    "verify.code": "Verification code",
    "set.password": "Set password",
    "set.password.tips": "Password must be 6-12 letters or numbers",
    "repeat.password": "Repeat password",
    "set.password.tips2": "Password do not match, please re-enter!",
    "set.password.tips3": "Password length must be greater than 6!",
    "set.password.tips4": "Password length must be less than 12!",
    verify: verify$1,
    "already.login.tips": "This mobile phone number has been registered, please log in",
    "date.error.tips": "Please enter a valid date",
    "my.account": "My account",
    "show.max": "Show max",
    loan: loan$1,
    repayment: repayment$1,
    "increase.amount": "Increase amount",
    "points.discount": "Points",
    "historical.borrowing": "Historical borrowing",
    "bank.card": "Bank card",
    "about.us": "About us",
    "version.update": "Version update",
    logout: logout$1,
    "currency.unit": "Bs. ",
    "loan.application": "Loan application",
    "loan.application.tips": "You have completed all the information certification, please choose your quota!",
    "select.amount": "Please select the amount",
    "loan.term": "Loan term",
    "91.days": "91 Days",
    "120.days": "120 Days",
    "180.days": "180 Days",
    "loan.information": "Loan information",
    "loan.amount": "Loan amount",
    interest: interest$1,
    "repayment.date": "Repayment date",
    "loan.information.tips1": "The actual repayment date may be delayed and will be calculated from the time the loan is successfully paid.",
    "loan.information.tips2": "Loan reminder: after the loan is approved, please check the status, please pay attention to your repayment date, and please repay on time to avoid product overdue fees.",
    "repayment.amount": "Repayment amount",
    "loan.agreement": "loan agreement",
    "get.the.loan": "Get the loan",
    "application.result": "Application result",
    "successful.application": "Successful application",
    "application.result.tips": "We will immediately review the page and automatically jump to the front page after 5s...",
    "increase.amount.tips": "Fill in the supplementary information to increase the limit by up to 10000.",
    "recommender.phone.number": "Recommender’s phone number",
    "first.name": "First name",
    "last.name": "Last name",
    "id.number": "ID number",
    waiting: waiting$1,
    welcome: welcome$1,
    save: save$1,
    "forget.password2": "Forget password",
    "get.code": "Get code",
    code: code$1,
    income: income$1,
    "income.tips": "Please complete the application information, the maximum credit limit is 10000.",
    "loan.purpose": "Loan purpose",
    "educational.qualifications": "Educational qualifications",
    "employment.type": "Employment type",
    "income.type": "Income type",
    "no.income": "No income",
    "variable.income": "Variable income",
    "fixed.income": "Fixed income",
    "monthly.salary": "Monthly salary",
    "revenue.cycle": "Revenue cycle",
    "pay.day": "Pay day",
    "premise.tips": "Hot Lending keeps the data collected safe",
    "premise.tips2": "In order to provide our services and process your loan application, we require your consent to collect, process and store information.",
    "premise.tips3": "Please review our Privacy Policy for more details.",
    "device.information": "Device information",
    "app.list": "App list",
    "camera.permission": "Camera permission",
    "premise.text1": "In accordance with the terms and conditions of the ",
    "premise.text2": "《Privacy Policy》",
    "premise.text3": ", I consent to the collection, processing, data transfer and storage of the personal information described above.",
    "my.coupons": "My coupons",
    "my.coupons.tips": "You have no coupons yet",
    resend: resend$1,
    authentication: authentication$1,
    material: material$1,
    "bank.information": "Bank information",
    "bank.card.tips": "How many bank cards do you have?",
    "select.card.tips": "Select the number of sheets",
    "credit.card.tips": "How many credit cards do you have?",
    "add.bank.card": "Add bank card",
    "bound.bank.card": "Bound bank card",
    change: change$1,
    "add.bank.tips": "Please check your card number carefully to avoid failure of payment.",
    "bank.name": "Bank name",
    "account.number": "Account number",
    "front.card": "Front of ID card",
    "back.card": "Back of ID card",
    "front.success": "Front upload success",
    "back.success": "Back upload success",
    submit: submit$1,
    "loan.status": "Loan status",
    "available.credit.upto": "Available credit upto",
    "application.submitted": "Application submitted",
    "loan.status.text1": "We will complete the audit in ",
    "loan.status.text2": "3 minutes.",
    "loan.status.text3": " Please click the button to check the review result.",
    "check.result": "Check the review result",
    "increase.amount.tips2": "Your application is being reviewed...",
    congratulations: congratulations$1,
    "app.update.tips": "Your app version is already the latest",
    "not.login.tips": "Please login first!",
    "logout.tips": "Are you sure you want to logout?",
    "repayment.tips": "You have no orders to repay",
    days: days$1,
    "history.loan": "History loan",
    "borrowing.time": "Borrowing time",
    notify: notify$1,
    "notify.tips": "Welcome to Hot Lending",
    "register.success": "Register success",
    "loan.agreement2": "Loan agreement",
    "loan.agreement.tips1": "We, the managers of Hot Lending, hereby agree to provide loans to the following individuals:",
    "loan.agreement.tips2": "The following loan terms and conditions:",
    "loan.agreement.tips3": "The failure or delay in issuing any overdue payment notice by the lender or financing institution shall not affect the borrower's obligation to pay the required amount on time and in full. Upon the occurrence of anEvent of Default, the Lender may, at its sole discretion or through the Loan Mechanism decide without any notice or requirement and without limiting the Lender's rights under applicable law or this Agreement:",
    "loan.agreement.tips4": "1. The right to disclose the identity of the Borrower,including other relevant information necessary to execute this Agreement and collect all amounts due and unpaid in connection with the Loan,and the Borrower hereby expressly expressly and irrevocably agrees to disclose to the Lender,its agents Disclosure of this information to persons and/or representatives and,if necessary, further use of this information and disclosure to other third parties;",
    "loan.agreement.tips5": "2. Declares that this Agreement,including all charges,fees,penalties and accrued and unpaid interest,is immediately due and payable without show,demand,protest or further notice of any kind,and Borrower hereby expressly waives all such rights;",
    "loan.agreement.tips6": "3. In addition to interest,in accordance with the provisions on late payment penalties,late payment penalties and daily late payment penalty interest will be levied on the borrower from the due date/repayment date until the unpaid balance is paid in full;",
    "loan.agreement.tips7": "4. Sell, transfer or assign any of its rights and obligations under this Agreement to any person without affecting the penalty for late payment.",
    "annual.interest.rate": "Annual interest rate",
    "loan.agreement.not.checked.tips": "Please read and agree to the loan agreement"
  };
  const login = "Acceso";
  const register = "Registro";
  const password = "Contraseña";
  const name = "Nombre";
  const phone = "Teléfono";
  const birth = "Fecha de nacimiento";
  const day = "Día";
  const month = "Mes";
  const year = "Año";
  const gender = "Género";
  const male = "Masculino";
  const female = "Femenino";
  const confirm = "Confirmar";
  const verify = "Verificar";
  const loan = "Préstamo";
  const repayment = "Reembolso";
  const logout = "Cerrar sesión";
  const interest = "Interés";
  const waiting = "Espera...";
  const welcome = "Bienvenido";
  const save = "Ahorrar";
  const code = "Código";
  const income = "Ingreso";
  const resend = "Reenviar";
  const authentication = "Autenticación";
  const material = "Material";
  const change = "Cambiar";
  const submit = "Entregar";
  const congratulations = "Felicidades";
  const days = "Días";
  const notify = "Notificar";
  const es = {
    "locale.auto": "Hola",
    "tab.home": "Hogar",
    "tab.message": "Mensaje",
    "tab.loan": "Mi préstamo",
    "tab.profile": "Perfil",
    login,
    "phone.number": "Número de teléfono",
    register,
    "no.account": "¿Sin cuenta?",
    "forget.password": "¿Contraseña olvidada?",
    password,
    "data.secure": "Mantenga seguros los datos recopilados",
    name,
    phone,
    "e.mail": "Correo electrónico",
    birth,
    day,
    month,
    year,
    gender,
    male,
    female,
    "policy.first": "He leído y estoy de acuerdo con",
    "privacy.policy": "Política de privacidad",
    "finish.register": "Finalizar registro",
    "verify.code.tips": "El código de verificación ha sido enviado a",
    confirm,
    "verify.code": "Código de verificación",
    "set.password": "Configurar la clave",
    "set.password.tips": "La contraseña debe tener entre 6 y 12 letras o números",
    "repeat.password": "Repita la contraseña",
    "set.password.tips2": "La contraseña no coincide, ¡vuelve a ingresarla!",
    "set.password.tips3": "¡La longitud de la contraseña debe ser mayor que 6!",
    "set.password.tips4": "¡La longitud de la contraseña debe ser inferior a 12!",
    verify,
    "already.login.tips": "Este número de teléfono móvil ha sido registrado, inicie sesión",
    "date.error.tips": "Por favor introduzca una fecha valida",
    "my.account": "Mi cuenta",
    "show.max": "Mostrar máximo",
    loan,
    repayment,
    "increase.amount": "Aumentar cantidad",
    "points.discount": "Puntos",
    "historical.borrowing": "Orden de la historia",
    "bank.card": "Tarjeta bancaria",
    "about.us": "Sobre nosotros",
    "version.update": "Actualización de versión",
    logout,
    "currency.unit": "Bs. ",
    "loan.application": "Solicitud de préstamo",
    "loan.application.tips": "Ha completado toda la certificación de información, ¡elija su cuota!",
    "select.amount": "Por favor seleccione la cantidad",
    "loan.term": "Plazo del préstamo",
    "91.days": "91 Días",
    "120.days": "120 Días",
    "180.days": "180 Días",
    "loan.information": "Información del préstamo",
    "loan.amount": "Monto del préstamo",
    interest,
    "repayment.date": "Fecha de amortización",
    "loan.information.tips1": "La fecha de pago real puede retrasarse y se calculará a partir del momento en que se pague exitosamente el préstamo.",
    "loan.information.tips2": "Recordatorio de préstamo: una vez aprobado el préstamo, verifique el estado, preste atención a la fecha de pago y pague a tiempo para evitar cargos por productos vencidos.",
    "repayment.amount": "Monto del reembolso",
    "loan.agreement": "acuerdo de prestamo",
    "get.the.loan": "Obtener el préstamo",
    "application.result": "Resultado de la aplicación",
    "successful.application": "Solicitud exitosa",
    "application.result.tips": "Revisaremos inmediatamente la página y saltaremos automáticamente a la página principal después de 5 segundos...",
    "increase.amount.tips": "Complete la información complementaria para aumentar el límite hasta 10000.",
    "recommender.phone.number": "Número de teléfono del recomendador",
    "first.name": "Nombre de pila",
    "last.name": "Apellido",
    "id.number": "Número de identificación",
    waiting,
    welcome,
    save,
    "forget.password2": "Contraseña olvidada",
    "get.code": "Obtener código",
    code,
    income,
    "income.tips": "Complete la información de la solicitud, el límite de crédito máximo es 10000.",
    "loan.purpose": "Propósito del prestamo",
    "educational.qualifications": "Preparación académica",
    "employment.type": "Tipo de empleo",
    "income.type": "Tipo de ingreso",
    "no.income": "Sin ingresos",
    "variable.income": "Renta variable",
    "fixed.income": "Fixed income",
    "monthly.salary": "Salario mensual",
    "revenue.cycle": "Ciclo de ingresos",
    "pay.day": "Dia de pago",
    "premise.tips": "Hot Lending mantiene seguros los datos recopilados",
    "premise.tips2": "Para brindar nuestros servicios y procesar su solicitud de préstamo, necesitamos su consentimiento para recopilar, procesar y almacenar información.",
    "premise.tips3": "Revise nuestra Política de privacidad para obtener más detalles.",
    "device.information": "Información del dispositivo",
    "app.list": "Lista de aplicaciones",
    "camera.permission": "Permiso de cámara",
    "premise.text1": "De acuerdo con los términos y condiciones del ",
    "premise.text2": '"Política de privacidad"',
    "premise.text3": ", Doy mi consentimiento para la recopilación, procesamiento, transferencia de datos y almacenamiento de la información personal descrita anteriormente.",
    "my.coupons": "Mis cupones",
    "my.coupons.tips": "Aún no tienes cupones",
    resend,
    authentication,
    material,
    "bank.information": "Información bancaria",
    "bank.card.tips": "¿Cuántas tarjetas bancarias tienes?",
    "select.card.tips": "Seleccione el número de hojas",
    "credit.card.tips": "¿Cuántas tarjetas de crédito tienes?",
    "add.bank.card": "Añadir tarjeta bancaria",
    "bound.bank.card": "Tarjeta bancaria vinculada",
    change,
    "add.bank.tips": "Por favor verifique su número de tarjeta cuidadosamente para evitar fallas en el pago.",
    "bank.name": "Nombre del banco",
    "account.number": "Número de cuenta",
    "front.card": "Delantero",
    "back.card": "Atrás",
    "front.success": "Carga frontal exitosa",
    "back.success": "Subida exitosa",
    submit,
    "loan.status": "Estado del préstamo",
    "available.credit.upto": "Crédito disponible hasta",
    "application.submitted": "Solicitud presentada",
    "loan.status.text1": "Completaremos la auditoría en ",
    "loan.status.text2": "3 minutos.",
    "loan.status.text3": " Haga clic en el botón para comprobar el resultado de la revisión.",
    "check.result": "Verifique el resultado de la revisión",
    "increase.amount.tips2": "Su solicitud está siendo revisada...",
    congratulations,
    "app.update.tips": "La versión de tu aplicación ya es la más reciente",
    "not.login.tips": "¡Por favor ingresa primero!",
    "logout.tips": "¿Estás seguro de que quieres cerrar sesión?",
    "repayment.tips": "No tienes órdenes que devolver",
    days,
    "history.loan": "Préstamo histórico",
    "borrowing.time": "Tiempo de préstamo",
    notify,
    "notify.tips": "Bienvenido a Hot Lending",
    "register.success": "Registro exitoso",
    "loan.agreement2": "Acuerdo de prestamo",
    "loan.agreement.tips1": "Nosotros, los administradores de Hot Lending, por la presente acordamos otorgar préstamos a las siguientes personas:",
    "loan.agreement.tips2": "Los siguientes términos y condiciones del préstamo:",
    "loan.agreement.tips3": "La falta o demora en la emisión de cualquier aviso de pago vencido por parte del prestamista o institución financiera no afectará la obligación del prestatario de pagar el monto requerido a tiempo y en su totalidad. Al ocurrir un Evento de Incumplimiento, el Prestamista puede, a su entera discreción o a través del Mecanismo de Préstamo, decidir sin ningún aviso o requisito y sin limitar los derechos del Prestamista bajo la ley aplicable o este Acuerdo:",
    "loan.agreement.tips4": "1. El derecho a revelar la identidad del Prestatario, incluida otra información relevante necesaria para ejecutar este Acuerdo y cobrar todos los montos adeudados y no pagados en relación con el Préstamo, y el Prestatario por la presente acepta expresamente, expresa e irrevocablemente revelar al Prestamista y a sus agentes Divulgación de esta información a personas y/o representantes y, si es necesario, uso posterior de esta información y divulgación a otros terceros;",
    "loan.agreement.tips5": "2. Declara que este Acuerdo, incluidos todos los cargos, tarifas, sanciones e intereses acumulados y no pagados, vence y es pagadero inmediatamente sin presentación, demanda, protesta o aviso adicional de ningún tipo, y el Prestatario por la presente renuncia expresamente a todos esos derechos;",
    "loan.agreement.tips6": "3. Además de los intereses, de acuerdo con las disposiciones sobre multas por pago atrasado, las multas por pago atrasado y la multa por pago atrasado diario se cobrarán al prestatario desde la fecha de vencimiento/fecha de pago hasta que el saldo impago se pague en su totalidad;",
    "loan.agreement.tips7": "4. Vender, transferir o ceder cualquiera de sus derechos y obligaciones bajo este Acuerdo a cualquier persona sin afectar la penalización por pago tardío.",
    "annual.interest.rate": "Tasa de interés anual",
    "loan.agreement.not.checked.tips": "Por favor, lea y acepte el contrato de préstamo."
  };
  const messages = {
    en,
    es
  };
  const _sfc_main = {
    data() {
      return {
        statusBarHeight: 0
      };
    },
    created() {
      this.getStatusBarHeight();
    },
    methods: {
      getStatusBarHeight() {
        try {
          const res = uni.getSystemInfoSync();
          this.statusBarHeight = res.statusBarHeight || 0;
        } catch (e) {
          formatAppLog("log", "at components/status-bar.vue:21", e.message);
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle(`padding-top: ${$data.statusBarHeight}px;`)
      },
      null,
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/ToWin/WebProjects/bolivia_h5/bolivia_h5/components/status-bar.vue"]]);
  const $C = {
    baseUrl: "https://hl.hotlending.net/hotlending",
    appName: "Hot Lending"
  };
  const $H = {
    headers: {
      "language": "en",
      "app-name": $C.appName,
      "version": "1.0.0",
      "version-code": "1",
      "content-type": "application/json"
    },
    request(options = {}) {
      options.url = $C.baseUrl + options.url;
      options.method = "POST";
      let token = uni.getStorageSync("token");
      this.headers["token"] = token;
      options.header = this.headers;
      return new Promise((res, rej) => {
        uni.request({
          ...options,
          success: (result) => {
            if (typeof result.data.msg !== "undefined") {
              uni.showToast({
                title: result.data.msg,
                position: "bottom"
              });
              return rej(result.data.msg);
            }
            res(result.data.ret);
          },
          fail: (error) => {
            uni.showToast({
              title: error.errMsg,
              position: "bottom"
            });
            return rej();
          }
        });
      });
    },
    post(url, data = {}, options = {}) {
      options.url = url;
      options.data = data;
      return this.request(options);
    }
  };
  const loginMixin = {
    data() {
      return {
        isLogin: false
        // 初始登录状态为false
      };
    },
    methods: {
      setLoginStatus(status) {
        this.isLogin = status;
        uni.setStorage({
          key: "isLogin",
          data: status
        });
      }
    },
    created() {
      uni.getStorage({
        key: "isLogin",
        success: (res) => {
          this.isLogin = res.data;
        }
      });
    }
  };
  /*!
    * @intlify/shared v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const inBrowser = typeof window !== "undefined";
  let mark;
  let measure;
  {
    const perf = inBrowser && window.performance;
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = (tag) => perf.mark(tag);
      measure = (name2, startTag, endTag) => {
        perf.measure(name2, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
      };
    }
  }
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject$1(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const makeSymbol = (name2) => hasSymbol ? Symbol(name2) : name2;
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  function hasOwn$1(obj, key) {
    return hasOwnProperty$1.call(obj, key);
  }
  const isArray = Array.isArray;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isObject$1 = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function createEmitter() {
    const events = /* @__PURE__ */ new Map();
    const emitter = {
      events,
      on(event, handler) {
        const handlers = events.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events.get(event) || []).slice().map((handler) => handler(payload));
        (events.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  /*!
    * @intlify/message-resolver v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isObject = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const pathStateMachine = [];
  pathStateMachine[
    0
    /* BEFORE_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      0
      /* BEFORE_PATH */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    1
    /* IN_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      1
      /* IN_PATH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    2
    /* BEFORE_IDENT */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    3
    /* IN_IDENT */
  ] = {
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "w"
      /* WORKSPACE */
    ]: [
      1,
      1
      /* PUSH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2,
      1
      /* PUSH */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      1
      /* PUSH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7,
      1
      /* PUSH */
    ]
  };
  pathStateMachine[
    4
    /* IN_SUB_PATH */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      5,
      0
      /* APPEND */
    ],
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      6,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      2
      /* INC_SUB_PATH_DEPTH */
    ],
    [
      "]"
      /* RIGHT_BRACKET */
    ]: [
      1,
      3
      /* PUSH_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      4,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    5
    /* IN_SINGLE_QUOTE */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      5,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    6
    /* IN_DOUBLE_QUOTE */
  ] = {
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      6,
      0
      /* APPEND */
    ]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code2 = ch.charCodeAt(0);
    switch (code2) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[
      0
      /* APPEND */
    ] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[
      1
      /* PUSH */
    ] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions[
      2
      /* INC_SUB_PATH_DEPTH */
    ] = () => {
      actions[
        0
        /* APPEND */
      ]();
      subPathDepth++;
    };
    actions[
      3
      /* PUSH_SUB_PATH */
    ] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions[
          0
          /* APPEND */
        ]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[
            1
            /* PUSH */
          ]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions[
          0
          /* APPEND */
        ]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap[
        "l"
        /* ELSE */
      ] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveValue(obj, path) {
    if (!isObject(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
      const val = last[hit[i]];
      if (val === void 0) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  function handleFlatJson(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    for (const key in obj) {
      if (!hasOwn(obj, key)) {
        continue;
      }
      if (!key.includes(
        "."
        /* DOT */
      )) {
        if (isObject(obj[key])) {
          handleFlatJson(obj[key]);
        }
      } else {
        const subKeys = key.split(
          "."
          /* DOT */
        );
        const lastIndex = subKeys.length - 1;
        let currentObj = obj;
        for (let i = 0; i < lastIndex; i++) {
          if (!(subKeys[i] in currentObj)) {
            currentObj[subKeys[i]] = {};
          }
          currentObj = currentObj[subKeys[i]];
        }
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
        if (isObject(currentObj[subKeys[lastIndex]])) {
          handleFlatJson(currentObj[subKeys[lastIndex]]);
        }
      }
    }
    return obj;
  }
  /*!
    * @intlify/runtime v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
  const DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages2) => messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = isFunction(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name2) => options.modifiers ? options.modifiers[name2] : DEFAULT_MODIFIER;
    const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const ctx = {
      [
        "list"
        /* LIST */
      ]: list,
      [
        "named"
        /* NAMED */
      ]: named,
      [
        "plural"
        /* PLURAL */
      ]: plural,
      [
        "linked"
        /* LINKED */
      ]: (key, modifier) => {
        const msg = message(key)(ctx);
        return isString(modifier) ? _modifier(modifier)(msg) : msg;
      },
      [
        "message"
        /* MESSAGE */
      ]: message,
      [
        "type"
        /* TYPE */
      ]: type,
      [
        "interpolate"
        /* INTERPOLATE */
      ]: interpolate,
      [
        "normalize"
        /* NORMALIZE */
      ]: normalize
    };
    return ctx;
  }
  /*!
    * @intlify/message-compiler v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const errorMessages$2 = {
    // tokenizer error messages
    [
      0
      /* EXPECTED_TOKEN */
    ]: `Expected token: '{0}'`,
    [
      1
      /* INVALID_TOKEN_IN_PLACEHOLDER */
    ]: `Invalid token in placeholder: '{0}'`,
    [
      2
      /* UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER */
    ]: `Unterminated single quote in placeholder`,
    [
      3
      /* UNKNOWN_ESCAPE_SEQUENCE */
    ]: `Unknown escape sequence: \\{0}`,
    [
      4
      /* INVALID_UNICODE_ESCAPE_SEQUENCE */
    ]: `Invalid unicode escape sequence: {0}`,
    [
      5
      /* UNBALANCED_CLOSING_BRACE */
    ]: `Unbalanced closing brace`,
    [
      6
      /* UNTERMINATED_CLOSING_BRACE */
    ]: `Unterminated closing brace`,
    [
      7
      /* EMPTY_PLACEHOLDER */
    ]: `Empty placeholder`,
    [
      8
      /* NOT_ALLOW_NEST_PLACEHOLDER */
    ]: `Not allowed nest placeholder`,
    [
      9
      /* INVALID_LINKED_FORMAT */
    ]: `Invalid linked format`,
    // parser error messages
    [
      10
      /* MUST_HAVE_MESSAGES_IN_PLURAL */
    ]: `Plural must have messages`,
    [
      11
      /* UNEXPECTED_EMPTY_LINKED_MODIFIER */
    ]: `Unexpected empty linked modifier`,
    [
      12
      /* UNEXPECTED_EMPTY_LINKED_KEY */
    ]: `Unexpected empty linked key`,
    [
      13
      /* UNEXPECTED_LEXICAL_ANALYSIS */
    ]: `Unexpected lexical analysis in token: '{0}'`
  };
  function createCompileError(code2, loc, options = {}) {
    const { domain, messages: messages2, args } = options;
    const msg = format((messages2 || errorMessages$2)[code2] || "", ...args || []);
    const error = new SyntaxError(String(msg));
    error.code = code2;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  /*!
    * @intlify/devtools-if v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const IntlifyDevToolsHooks = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  /*!
    * @intlify/core-base v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function initI18nDevTools(i18n2, version, meta) {
    devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: i18n2,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const warnMessages$1 = {
    [
      0
      /* NOT_FOUND_KEY */
    ]: `Not found '{key}' key in '{locale}' locale messages.`,
    [
      1
      /* FALLBACK_TO_TRANSLATE */
    ]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [
      2
      /* CANNOT_FORMAT_NUMBER */
    ]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [
      3
      /* FALLBACK_TO_NUMBER_FORMAT */
    ]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [
      4
      /* CANNOT_FORMAT_DATE */
    ]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [
      5
      /* FALLBACK_TO_DATE_FORMAT */
    ]: `Fall back to datetime format '{key}' key with '{target}' locale.`
  };
  function getWarnMessage$1(code2, ...args) {
    return format(warnMessages$1[code2], ...args);
  }
  const VERSION$1 = "9.1.9";
  const NOT_REOSLVED = -1;
  const MISSING_RESOLVE_VALUE = "";
  function getDefaultLinkedModifiers() {
    return {
      upper: (val) => isString(val) ? val.toUpperCase() : val,
      lower: (val) => isString(val) ? val.toLowerCase() : val,
      // prettier-ignore
      capitalize: (val) => isString(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
    };
  }
  let _compiler;
  let _additionalMeta = null;
  const setAdditionalMeta = (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = () => _additionalMeta;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const version = isString(options.version) ? options.version : VERSION$1;
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const messages2 = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
    const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
    const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
    const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    const processor = isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
    const internalOptions = options;
    const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages: messages2,
      datetimeFormats,
      numberFormats,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler,
      onWarn,
      __datetimeFormatters,
      __numberFormatters,
      __meta
    };
    {
      context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
    }
    {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("missing", {
          locale,
          key,
          type,
          groupId: `${type}:${key}`
        });
      }
    }
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return isString(ret) ? ret : key;
    } else {
      if (isTranslateMissingWarn(missingWarn, key)) {
        onWarn(getWarnMessage$1(0, { key, locale }));
      }
      return key;
    }
  }
  function getLocaleChain(ctx, fallback, start) {
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(start);
    if (!chain) {
      chain = [];
      let block = [start];
      while (isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      const defaults = isArray(fallback) ? fallback : isPlainObject(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
      block = isString(defaults) ? [defaults] : defaults;
      if (isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(start, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && isBoolean(follow); i++) {
      const locale = block[i];
      if (isString(locale)) {
        follow = appendLocaleToChain(chain, block[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    getLocaleChain(ctx, fallback, locale);
  }
  function createCoreError(code2) {
    return createCompileError(code2, null, { messages: errorMessages$1 });
  }
  const errorMessages$1 = {
    [
      14
      /* INVALID_ARGUMENT */
    ]: "Invalid arguments",
    [
      15
      /* INVALID_DATE_ARGUMENT */
    ]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [
      16
      /* INVALID_ISO_DATE_ARGUMENT */
    ]: "The argument provided is not a valid ISO date string"
  };
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => isFunction(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages: messages2 } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = isString(options.locale) ? options.locale : context.locale;
    escapeParameter && escapeParams(options);
    let [format2, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages2[locale] || {}
    ];
    let cacheBaseKey = key;
    if (!resolvedMessage && !(isString(format2) || isMessageFunction(format2))) {
      if (enableDefaultMsg) {
        format2 = defaultMsgOrKey;
        cacheBaseKey = format2;
      }
    }
    if (!resolvedMessage && (!(isString(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    if (isString(format2) && context.messageCompiler == null) {
      warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
      return key;
    }
    let occurred = false;
    const errorDetector = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
    if (occurred) {
      return format2;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged) : messaged;
    {
      const payloads = {
        timestamp: Date.now(),
        key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
        locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
        format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
        message: ret
      };
      payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (isArray(options.list)) {
      options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
    } else if (isObject$1(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (isString(options.named[key])) {
          options.named[key] = escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages: messages2, onWarn } = context;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "translate";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(1, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      message = messages2[targetLocale] || {};
      let start = null;
      let startTag;
      let endTag;
      if (inBrowser) {
        start = window.performance.now();
        startTag = "intlify-message-resolve-start";
        endTag = "intlify-message-resolve-end";
        mark && mark(startTag);
      }
      if ((format2 = resolveValue(message, key)) === null) {
        format2 = message[key];
      }
      if (inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start && format2) {
          emitter.emit("message-resolve", {
            type: "message-resolve",
            key,
            message: format2,
            time: end - start,
            groupId: `${type}:${key}`
          });
        }
        if (startTag && endTag && mark && measure) {
          mark(endTag);
          measure("intlify message resolve", startTag, endTag);
        }
      }
      if (isString(format2) || isFunction(format2))
        break;
      const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format2 = missingRet;
      }
      from = to;
    }
    return [format2, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format2)) {
      const msg2 = format2;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-compilation-start";
      endTag = "intlify-message-compilation-end";
      mark && mark(startTag);
    }
    const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-compilation", {
          type: "message-compilation",
          message: format2,
          time: end - start,
          groupId: `${"translate"}:${key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message compilation", startTag, endTag);
      }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format2;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-evaluation-start";
      endTag = "intlify-message-evaluation-end";
      mark && mark(startTag);
    }
    const messaged = msg(msgCtx);
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-evaluation", {
          type: "message-evaluation",
          value: messaged,
          time: end - start,
          groupId: `${"translate"}:${msg.key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message evaluation", startTag, endTag);
      }
    }
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (isNumber(arg2)) {
      options.plural = arg2;
    } else if (isString(arg2)) {
      options.default = arg2;
    } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (isArray(arg2)) {
      options.list = arg2;
    }
    if (isNumber(arg3)) {
      options.plural = arg3;
    } else if (isString(arg3)) {
      options.default = arg3;
    } else if (isPlainObject(arg3)) {
      assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage,
      onError: (err) => {
        errorDetector && errorDetector(err);
        {
          const message = `Message compilation error: ${err.message}`;
          const codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
          const emitter = context.__v_emitter;
          if (emitter) {
            emitter.emit("compile-error", {
              message: source,
              error: err.message,
              start: err.location && err.location.start.offset,
              end: err.location && err.location.end.offset,
              groupId: `${"translate"}:${key}`
            });
          }
          console.error(codeFrame ? `${message}
${codeFrame}` : message);
        }
      },
      onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules } = context;
    const resolveMessage = (key) => {
      const val = resolveValue(message, key);
      if (isString(val)) {
        let occurred = false;
        const errorDetector = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  const intlDefined = typeof Intl !== "undefined";
  const Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
    numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
  };
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __datetimeFormatters } = context;
    if (!Availabilities.dateTimeFormat) {
      onWarn(getWarnMessage$1(
        4
        /* CANNOT_FORMAT_DATE */
      ));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.DateTimeFormat(locale).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "datetime format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(5, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format2 = datetimeFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    let value;
    if (isString(arg1)) {
      if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
        throw createCoreError(
          16
          /* INVALID_ISO_DATE_ARGUMENT */
        );
      }
      value = new Date(arg1);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(
          16
          /* INVALID_ISO_DATE_ARGUMENT */
        );
      }
    } else if (isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(
          15
          /* INVALID_DATE_ARGUMENT */
        );
      }
      value = arg1;
    } else if (isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __numberFormatters } = context;
    if (!Availabilities.numberFormat) {
      onWarn(getWarnMessage$1(
        2
        /* CANNOT_FORMAT_NUMBER */
      ));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.NumberFormat(locale).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "number format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(3, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      numberFormat = numberFormats[targetLocale] || {};
      format2 = numberFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    if (!isNumber(arg1)) {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    const value = arg1;
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * @intlify/vue-devtools v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VueDevToolsLabels = {
    [
      "vue-devtools-plugin-vue-i18n"
      /* PLUGIN */
    ]: "Vue I18n devtools",
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "I18n Resources",
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: "Vue I18n"
  };
  const VueDevToolsPlaceholders = {
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "Search for scopes ..."
  };
  const VueDevToolsTimelineColors = {
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: 16764185
  };
  /*!
    * vue-i18n v9.1.9
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VERSION = "9.1.9";
  function initFeatureFlags() {
    let needWarn = false;
    {
      needWarn = true;
    }
    if (needWarn) {
      console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.`);
    }
  }
  const warnMessages = {
    [
      6
      /* FALLBACK_TO_ROOT */
    ]: `Fall back to {type} '{key}' with root locale.`,
    [
      7
      /* NOT_SUPPORTED_PRESERVE */
    ]: `Not supported 'preserve'.`,
    [
      8
      /* NOT_SUPPORTED_FORMATTER */
    ]: `Not supported 'formatter'.`,
    [
      9
      /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
    ]: `Not supported 'preserveDirectiveContent'.`,
    [
      10
      /* NOT_SUPPORTED_GET_CHOICE_INDEX */
    ]: `Not supported 'getChoiceIndex'.`,
    [
      11
      /* COMPONENT_NAME_LEGACY_COMPATIBLE */
    ]: `Component name legacy compatible: '{name}' -> 'i18n'`,
    [
      12
      /* NOT_FOUND_PARENT_SCOPE */
    ]: `Not found parent scope. use the global scope.`
  };
  function getWarnMessage(code2, ...args) {
    return format(warnMessages[code2], ...args);
  }
  function createI18nError(code2, ...args) {
    return createCompileError(code2, null, { messages: errorMessages, args });
  }
  const errorMessages = {
    [
      14
      /* UNEXPECTED_RETURN_TYPE */
    ]: "Unexpected return type in composer",
    [
      15
      /* INVALID_ARGUMENT */
    ]: "Invalid argument",
    [
      16
      /* MUST_BE_CALL_SETUP_TOP */
    ]: "Must be called at the top of a `setup` function",
    [
      17
      /* NOT_INSLALLED */
    ]: "Need to install with `app.use` function",
    [
      22
      /* UNEXPECTED_ERROR */
    ]: "Unexpected error",
    [
      18
      /* NOT_AVAILABLE_IN_LEGACY_MODE */
    ]: "Not available in legacy mode",
    [
      19
      /* REQUIRED_VALUE */
    ]: `Required in value: {0}`,
    [
      20
      /* INVALID_VALUE */
    ]: `Invalid value`,
    [
      21
      /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
    ]: `Cannot setup vue-devtools plugin`
  };
  const DEVTOOLS_META = "__INTLIFY_META__";
  const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
  const DatetimePartsSymbol = makeSymbol("__datetimeParts");
  const NumberPartsSymbol = makeSymbol("__numberParts");
  const EnableEmitter = makeSymbol("__enableEmitter");
  const DisableEmitter = makeSymbol("__disableEmitter");
  const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
  const InejctWithOption = makeSymbol("__injectWithOption");
  let composerID = 0;
  function defineCoreMissingHandler(missing) {
    return (ctx, locale, key, type) => {
      return missing(locale, key, vue.getCurrentInstance() || void 0, type);
    };
  }
  function getLocaleMessages(locale, options) {
    const { messages: messages2, __i18n } = options;
    const ret = isPlainObject(messages2) ? messages2 : isArray(__i18n) ? {} : { [locale]: {} };
    if (isArray(__i18n)) {
      __i18n.forEach(({ locale: locale2, resource }) => {
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      });
    }
    if (options.flatJson) {
      for (const key in ret) {
        if (hasOwn$1(ret, key)) {
          handleFlatJson(ret[key]);
        }
      }
    }
    return ret;
  }
  const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
  function deepCopy(src, des) {
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
      throw createI18nError(
        20
        /* INVALID_VALUE */
      );
    }
    for (const key in src) {
      if (hasOwn$1(src, key)) {
        if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
          des[key] = src[key];
        } else {
          deepCopy(src[key], des[key]);
        }
      }
    }
  }
  const getMetaInfo = () => {
    const instance = vue.getCurrentInstance();
    return instance && instance.type[DEVTOOLS_META] ? { [DEVTOOLS_META]: instance.type[DEVTOOLS_META] } : null;
  };
  function createComposer(options = {}) {
    const { __root } = options;
    const _isGlobal = __root === void 0;
    let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
    const _locale = vue.ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : "en-US"
    );
    const _fallbackLocale = vue.ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
    );
    const _messages = vue.ref(getLocaleMessages(_locale.value, options));
    const _datetimeFormats = vue.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
    const _numberFormats = vue.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
    let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    let _fallbackFormat = !!options.fallbackFormat;
    let _missing = isFunction(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
    let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    let _escapeParameter = !!options.escapeParameter;
    const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
    let _pluralRules = options.pluralRules || __root && __root.pluralRules;
    let _context;
    function getCoreContext() {
      return createCoreContext({
        version: VERSION,
        locale: _locale.value,
        fallbackLocale: _fallbackLocale.value,
        messages: _messages.value,
        messageCompiler: function compileToFunction(source) {
          return (ctx) => {
            return ctx.normalize([source]);
          };
        },
        datetimeFormats: _datetimeFormats.value,
        numberFormats: _numberFormats.value,
        modifiers: _modifiers,
        pluralRules: _pluralRules,
        missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
        missingWarn: _missingWarn,
        fallbackWarn: _fallbackWarn,
        fallbackFormat: _fallbackFormat,
        unresolving: true,
        postTranslation: _postTranslation === null ? void 0 : _postTranslation,
        warnHtmlMessage: _warnHtmlMessage,
        escapeParameter: _escapeParameter,
        __datetimeFormatters: isPlainObject(_context) ? _context.__datetimeFormatters : void 0,
        __numberFormatters: isPlainObject(_context) ? _context.__numberFormatters : void 0,
        __v_emitter: isPlainObject(_context) ? _context.__v_emitter : void 0,
        __meta: { framework: "vue" }
      });
    }
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    function trackReactivityValues() {
      return [
        _locale.value,
        _fallbackLocale.value,
        _messages.value,
        _datetimeFormats.value,
        _numberFormats.value
      ];
    }
    const locale = vue.computed({
      get: () => _locale.value,
      set: (val) => {
        _locale.value = val;
        _context.locale = _locale.value;
      }
    });
    const fallbackLocale = vue.computed({
      get: () => _fallbackLocale.value,
      set: (val) => {
        _fallbackLocale.value = val;
        _context.fallbackLocale = _fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, val);
      }
    });
    const messages2 = vue.computed(() => _messages.value);
    const datetimeFormats = vue.computed(() => _datetimeFormats.value);
    const numberFormats = vue.computed(() => _numberFormats.value);
    function getPostTranslationHandler() {
      return isFunction(_postTranslation) ? _postTranslation : null;
    }
    function setPostTranslationHandler(handler) {
      _postTranslation = handler;
      _context.postTranslation = handler;
    }
    function getMissingHandler() {
      return _missing;
    }
    function setMissingHandler(handler) {
      if (handler !== null) {
        _runtimeMissing = defineCoreMissingHandler(handler);
      }
      _missing = handler;
      _context.missing = _runtimeMissing;
    }
    function isResolvedTranslateMessage(type, arg) {
      return type !== "translate" || !!arg.resolvedMessage === false;
    }
    function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
      trackReactivityValues();
      let ret;
      {
        try {
          setAdditionalMeta(getMetaInfo());
          ret = fn(_context);
        } finally {
          setAdditionalMeta(null);
        }
      }
      if (isNumber(ret) && ret === NOT_REOSLVED) {
        const [key, arg2] = argumentParser();
        if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
          if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
            warn(getWarnMessage(6, {
              key,
              type: warnType
            }));
          }
          {
            const { __v_emitter: emitter } = _context;
            if (emitter && _fallbackRoot) {
              emitter.emit("fallback", {
                type: warnType,
                key,
                to: "global",
                groupId: `${warnType}:${key}`
              });
            }
          }
        }
        return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
      } else if (successCondition(ret)) {
        return ret;
      } else {
        throw createI18nError(
          14
          /* UNEXPECTED_RETURN_TYPE */
        );
      }
    }
    function t(...args) {
      return wrapWithDeps((context) => translate(context, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key) => key, (val) => isString(val));
    }
    function rt(...args) {
      const [arg1, arg2, arg3] = args;
      if (arg3 && !isObject$1(arg3)) {
        throw createI18nError(
          15
          /* INVALID_ARGUMENT */
        );
      }
      return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
    }
    function d(...args) {
      return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function n(...args) {
      return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function normalize(values) {
      return values.map((val) => isString(val) ? vue.createVNode(vue.Text, null, val, 0) : val);
    }
    const interpolate = (val) => val;
    const processor = {
      normalize,
      interpolate,
      type: "vnode"
    };
    function transrateVNode(...args) {
      return wrapWithDeps(
        (context) => {
          let ret;
          const _context2 = context;
          try {
            _context2.processor = processor;
            ret = translate(_context2, ...args);
          } finally {
            _context2.processor = null;
          }
          return ret;
        },
        () => parseTranslateArgs(...args),
        "translate",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[TransrateVNodeSymbol](...args),
        (key) => [vue.createVNode(vue.Text, null, key, 0)],
        (val) => isArray(val)
      );
    }
    function numberParts(...args) {
      return wrapWithDeps(
        (context) => number(context, ...args),
        () => parseNumberArgs(...args),
        "number format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[NumberPartsSymbol](...args),
        () => [],
        (val) => isString(val) || isArray(val)
      );
    }
    function datetimeParts(...args) {
      return wrapWithDeps(
        (context) => datetime(context, ...args),
        () => parseDateTimeArgs(...args),
        "datetime format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[DatetimePartsSymbol](...args),
        () => [],
        (val) => isString(val) || isArray(val)
      );
    }
    function setPluralRules(rules) {
      _pluralRules = rules;
      _context.pluralRules = _pluralRules;
    }
    function te(key, locale2) {
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      return resolveValue(message, key) !== null;
    }
    function resolveMessages(key) {
      let messages22 = null;
      const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
      for (let i = 0; i < locales.length; i++) {
        const targetLocaleMessages = _messages.value[locales[i]] || {};
        const messageValue = resolveValue(targetLocaleMessages, key);
        if (messageValue != null) {
          messages22 = messageValue;
          break;
        }
      }
      return messages22;
    }
    function tm(key) {
      const messages22 = resolveMessages(key);
      return messages22 != null ? messages22 : __root ? __root.tm(key) || {} : {};
    }
    function getLocaleMessage(locale2) {
      return _messages.value[locale2] || {};
    }
    function setLocaleMessage(locale2, message) {
      _messages.value[locale2] = message;
      _context.messages = _messages.value;
    }
    function mergeLocaleMessage(locale2, message) {
      _messages.value[locale2] = _messages.value[locale2] || {};
      deepCopy(message, _messages.value[locale2]);
      _context.messages = _messages.value;
    }
    function getDateTimeFormat(locale2) {
      return _datetimeFormats.value[locale2] || {};
    }
    function setDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = format2;
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function mergeDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function getNumberFormat(locale2) {
      return _numberFormats.value[locale2] || {};
    }
    function setNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = format2;
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    function mergeNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    composerID++;
    if (__root) {
      vue.watch(__root.locale, (val) => {
        if (_inheritLocale) {
          _locale.value = val;
          _context.locale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
      vue.watch(__root.fallbackLocale, (val) => {
        if (_inheritLocale) {
          _fallbackLocale.value = val;
          _context.fallbackLocale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
    }
    const composer = {
      id: composerID,
      locale,
      fallbackLocale,
      get inheritLocale() {
        return _inheritLocale;
      },
      set inheritLocale(val) {
        _inheritLocale = val;
        if (val && __root) {
          _locale.value = __root.locale.value;
          _fallbackLocale.value = __root.fallbackLocale.value;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      },
      get availableLocales() {
        return Object.keys(_messages.value).sort();
      },
      messages: messages2,
      datetimeFormats,
      numberFormats,
      get modifiers() {
        return _modifiers;
      },
      get pluralRules() {
        return _pluralRules || {};
      },
      get isGlobal() {
        return _isGlobal;
      },
      get missingWarn() {
        return _missingWarn;
      },
      set missingWarn(val) {
        _missingWarn = val;
        _context.missingWarn = _missingWarn;
      },
      get fallbackWarn() {
        return _fallbackWarn;
      },
      set fallbackWarn(val) {
        _fallbackWarn = val;
        _context.fallbackWarn = _fallbackWarn;
      },
      get fallbackRoot() {
        return _fallbackRoot;
      },
      set fallbackRoot(val) {
        _fallbackRoot = val;
      },
      get fallbackFormat() {
        return _fallbackFormat;
      },
      set fallbackFormat(val) {
        _fallbackFormat = val;
        _context.fallbackFormat = _fallbackFormat;
      },
      get warnHtmlMessage() {
        return _warnHtmlMessage;
      },
      set warnHtmlMessage(val) {
        _warnHtmlMessage = val;
        _context.warnHtmlMessage = val;
      },
      get escapeParameter() {
        return _escapeParameter;
      },
      set escapeParameter(val) {
        _escapeParameter = val;
        _context.escapeParameter = val;
      },
      t,
      rt,
      d,
      n,
      te,
      tm,
      getLocaleMessage,
      setLocaleMessage,
      mergeLocaleMessage,
      getDateTimeFormat,
      setDateTimeFormat,
      mergeDateTimeFormat,
      getNumberFormat,
      setNumberFormat,
      mergeNumberFormat,
      getPostTranslationHandler,
      setPostTranslationHandler,
      getMissingHandler,
      setMissingHandler,
      [TransrateVNodeSymbol]: transrateVNode,
      [NumberPartsSymbol]: numberParts,
      [DatetimePartsSymbol]: datetimeParts,
      [SetPluralRulesSymbol]: setPluralRules,
      [InejctWithOption]: options.__injectWithOption
      // eslint-disable-line @typescript-eslint/no-explicit-any
    };
    {
      composer[EnableEmitter] = (emitter) => {
        _context.__v_emitter = emitter;
      };
      composer[DisableEmitter] = () => {
        _context.__v_emitter = void 0;
      };
    }
    return composer;
  }
  function convertComposerOptions(options) {
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const missing = isFunction(options.missing) ? options.missing : void 0;
    const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
    const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
    const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    const fallbackFormat = !!options.formatFallbackMessages;
    const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
    const pluralizationRules = options.pluralizationRules;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
    const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
    const escapeParameter = !!options.escapeParameterHtml;
    const inheritLocale = isBoolean(options.sync) ? options.sync : true;
    if (options.formatter) {
      warn(getWarnMessage(
        8
        /* NOT_SUPPORTED_FORMATTER */
      ));
    }
    if (options.preserveDirectiveContent) {
      warn(getWarnMessage(
        9
        /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
      ));
    }
    let messages2 = options.messages;
    if (isPlainObject(options.sharedMessages)) {
      const sharedMessages = options.sharedMessages;
      const locales = Object.keys(sharedMessages);
      messages2 = locales.reduce((messages22, locale2) => {
        const message = messages22[locale2] || (messages22[locale2] = {});
        assign(message, sharedMessages[locale2]);
        return messages22;
      }, messages2 || {});
    }
    const { __i18n, __root, __injectWithOption } = options;
    const datetimeFormats = options.datetimeFormats;
    const numberFormats = options.numberFormats;
    const flatJson = options.flatJson;
    return {
      locale,
      fallbackLocale,
      messages: messages2,
      flatJson,
      datetimeFormats,
      numberFormats,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackRoot,
      fallbackFormat,
      modifiers,
      pluralRules: pluralizationRules,
      postTranslation,
      warnHtmlMessage,
      escapeParameter,
      inheritLocale,
      __i18n,
      __root,
      __injectWithOption
    };
  }
  function createVueI18n(options = {}) {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      // id
      id: composer.id,
      // locale
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      // fallbackLocale
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      // messages
      get messages() {
        return composer.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return composer.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return composer.availableLocales;
      },
      // formatter
      get formatter() {
        warn(getWarnMessage(
          8
          /* NOT_SUPPORTED_FORMATTER */
        ));
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
        warn(getWarnMessage(
          8
          /* NOT_SUPPORTED_FORMATTER */
        ));
      },
      // missing
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      // modifiers
      get modifiers() {
        return composer.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      // postTranslation
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      // sync
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        warn(getWarnMessage(
          9
          /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
        ));
        return true;
      },
      set preserveDirectiveContent(val) {
        warn(getWarnMessage(
          9
          /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
        ));
      },
      // pluralizationRules
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      // for internal
      __composer: composer,
      // t
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(
            15
            /* INVALID_ARGUMENT */
          );
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      rt(...args) {
        return composer.rt(...args);
      },
      // tc
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(
            15
            /* INVALID_ARGUMENT */
          );
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      // te
      te(key, locale) {
        return composer.te(key, locale);
      },
      // tm
      tm(key) {
        return composer.tm(key);
      },
      // getLocaleMessage
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      // setLocaleMessage
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      // d
      d(...args) {
        return composer.d(...args);
      },
      // getDateTimeFormat
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      // setDateTimeFormat
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      // n
      n(...args) {
        return composer.n(...args);
      },
      // getNumberFormat
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      // setNumberFormat
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      // mergeNumberFormat
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(choice, choicesLength) {
        warn(getWarnMessage(
          10
          /* NOT_SUPPORTED_GET_CHOICE_INDEX */
        ));
        return -1;
      },
      // for internal
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    {
      vueI18n.__enableEmitter = (emitter) => {
        const __composer = composer;
        __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
      };
      vueI18n.__disableEmitter = () => {
        const __composer = composer;
        __composer[DisableEmitter] && __composer[DisableEmitter]();
      };
    }
    return vueI18n;
  }
  const baseFormatProps = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      validator: (val) => val === "parent" || val === "global",
      default: "parent"
    },
    i18n: {
      type: Object
    }
  };
  const Translation = {
    /* eslint-disable */
    name: "i18n-t",
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: (val) => isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const { slots, attrs } = context;
      const i18n2 = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      const keys = Object.keys(slots).filter((key) => key !== "_");
      return () => {
        const options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== void 0) {
          options.plural = isString(props.plural) ? +props.plural : props.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
        const assignedAttrs = assign({}, attrs);
        return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
      };
    }
  };
  function getInterpolateArg({ slots }, keys) {
    if (keys.length === 1 && keys[0] === "default") {
      return slots.default ? slots.default() : [];
    } else {
      return keys.reduce((arg, key) => {
        const slot = slots[key];
        if (slot) {
          arg[key] = slot();
        }
        return arg;
      }, {});
    }
  }
  function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
      const options = { part: true };
      let overrides = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (isString(props.format)) {
        options.key = props.format;
      } else if (isObject$1(props.format)) {
        if (isString(props.format.key)) {
          options.key = props.format.key;
        }
        overrides = Object.keys(props.format).reduce((options2, prop) => {
          return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
        }, {});
      }
      const parts = partFormatter(...[props.value, options, overrides]);
      let children = [options.key];
      if (isArray(parts)) {
        children = parts.map((part, index) => {
          const slot = slots[part.type];
          return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        });
      } else if (isString(parts)) {
        children = [parts];
      }
      const assignedAttrs = assign({}, attrs);
      return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
    };
  }
  const NUMBER_FORMAT_KEYS = [
    "localeMatcher",
    "style",
    "unit",
    "unitDisplay",
    "currency",
    "currencyDisplay",
    "useGrouping",
    "numberingSystem",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "notation",
    "formatMatcher"
  ];
  const NumberFormat = {
    /* eslint-disable */
    name: "i18n-n",
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[NumberPartsSymbol](...args)
      ));
    }
  };
  const DATETIME_FORMAT_KEYS = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "localeMatcher",
    "timeZone",
    "hour12",
    "hourCycle",
    "formatMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  const DatetimeFormat = {
    /* eslint-disable */
    name: "i18n-d",
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[DatetimePartsSymbol](...args)
      ));
    }
  };
  function getComposer$2(i18n2, instance) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      return i18nInternal.__getInstance(instance) || i18n2.global;
    } else {
      const vueI18n = i18nInternal.__getInstance(instance);
      return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
    }
  }
  function vTDirective(i18n2) {
    const bind = (el, { instance, value, modifiers }) => {
      if (!instance || !instance.$) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const composer = getComposer$2(i18n2, instance.$);
      if (modifiers.preserve) {
        warn(getWarnMessage(
          7
          /* NOT_SUPPORTED_PRESERVE */
        ));
      }
      const parsedValue = parseValue(value);
      el.textContent = composer.t(...makeParams(parsedValue));
    };
    return {
      beforeMount: bind,
      beforeUpdate: bind
    };
  }
  function parseValue(value) {
    if (isString(value)) {
      return { path: value };
    } else if (isPlainObject(value)) {
      if (!("path" in value)) {
        throw createI18nError(19, "path");
      }
      return value;
    } else {
      throw createI18nError(
        20
        /* INVALID_VALUE */
      );
    }
  }
  function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString(locale)) {
      options.locale = locale;
    }
    if (isNumber(choice)) {
      options.plural = choice;
    }
    if (isNumber(plural)) {
      options.plural = plural;
    }
    return [path, named, options];
  }
  function apply(app, i18n2, ...options) {
    const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
    if (globalInstall && useI18nComponentName) {
      warn(getWarnMessage(11, {
        name: Translation.name
      }));
    }
    if (globalInstall) {
      app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
      app.component(NumberFormat.name, NumberFormat);
      app.component(DatetimeFormat.name, DatetimeFormat);
    }
    app.directive("t", vTDirective(i18n2));
  }
  const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
  let devtoolsApi;
  async function enableDevTools(app, i18n2) {
    return new Promise((resolve, reject) => {
      try {
        setupDevtoolsPlugin({
          id: "vue-devtools-plugin-vue-i18n",
          label: VueDevToolsLabels[
            "vue-devtools-plugin-vue-i18n"
            /* PLUGIN */
          ],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
          app
        }, (api) => {
          devtoolsApi = api;
          api.on.visitComponentTree(({ componentInstance, treeNode }) => {
            updateComponentTreeTags(componentInstance, treeNode, i18n2);
          });
          api.on.inspectComponent(({ componentInstance, instanceData }) => {
            if (componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
              if (i18n2.mode === "legacy") {
                if (componentInstance.vnode.el.__VUE_I18N__ !== i18n2.global.__composer) {
                  inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                }
              } else {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            }
          });
          api.addInspector({
            id: "vue-i18n-resource-inspector",
            label: VueDevToolsLabels[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ],
            icon: "language",
            treeFilterPlaceholder: VueDevToolsPlaceholders[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ]
          });
          api.on.getInspectorTree((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              registerScope(payload, i18n2);
            }
          });
          api.on.getInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              inspectScope(payload, i18n2);
            }
          });
          api.on.editInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              editScope(payload, i18n2);
            }
          });
          api.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: VueDevToolsLabels[
              "vue-i18n-timeline"
              /* TIMELINE */
            ],
            color: VueDevToolsTimelineColors[
              "vue-i18n-timeline"
              /* TIMELINE */
            ]
          });
          resolve(true);
        });
      } catch (e) {
        console.error(e);
        reject(false);
      }
    });
  }
  function updateComponentTreeTags(instance, treeNode, i18n2) {
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    if (instance && instance.vnode.el.__VUE_I18N__) {
      if (instance.vnode.el.__VUE_I18N__ !== global2) {
        const label = instance.type.name || instance.type.displayName || instance.type.__file;
        const tag = {
          label: `i18n (${label} Scope)`,
          textColor: 0,
          backgroundColor: 16764185
        };
        treeNode.tags.push(tag);
      }
    }
  }
  function inspectComposer(instanceData, composer) {
    const type = VUE_I18N_COMPONENT_TYPES;
    instanceData.state.push({
      type,
      key: "locale",
      editable: true,
      value: composer.locale.value
    });
    instanceData.state.push({
      type,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    });
    instanceData.state.push({
      type,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    });
    instanceData.state.push({
      type,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    });
    instanceData.state.push({
      type,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    });
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
  function getLocaleMessageValue(messages2) {
    const value = {};
    Object.keys(messages2).forEach((key) => {
      const v = messages2[key];
      if (isFunction(v) && "source" in v) {
        value[key] = getMessageFunctionDetails(v);
      } else if (isObject$1(v)) {
        value[key] = getLocaleMessageValue(v);
      } else {
        value[key] = v;
      }
    });
    return value;
  }
  const ESC = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;"
  };
  function escape(s) {
    return s.replace(/[<>"&]/g, escapeChar);
  }
  function escapeChar(a) {
    return ESC[a] || a;
  }
  function getMessageFunctionDetails(func) {
    const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
    return {
      _custom: {
        type: "function",
        display: `<span>ƒ</span> ${argString}`
      }
    };
  }
  function registerScope(payload, i18n2) {
    payload.rootNodes.push({
      id: "global",
      label: "Global Scope"
    });
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    for (const [keyInstance, instance] of i18n2.__instances) {
      const composer = i18n2.mode === "composition" ? instance : instance.__composer;
      if (global2 === composer) {
        continue;
      }
      const label = keyInstance.type.name || keyInstance.type.displayName || keyInstance.type.__file;
      payload.rootNodes.push({
        id: composer.id.toString(),
        label: `${label} Scope`
      });
    }
  }
  function getComposer$1(nodeId, i18n2) {
    if (nodeId === "global") {
      return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    } else {
      const instance = Array.from(i18n2.__instances.values()).find((item) => item.id.toString() === nodeId);
      if (instance) {
        return i18n2.mode === "composition" ? instance : instance.__composer;
      } else {
        return null;
      }
    }
  }
  function inspectScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      payload.state = makeScopeInspectState(composer);
    }
  }
  function makeScopeInspectState(composer) {
    const state = {};
    const localeType = "Locale related info";
    const localeStates = [
      {
        type: localeType,
        key: "locale",
        editable: true,
        value: composer.locale.value
      },
      {
        type: localeType,
        key: "fallbackLocale",
        editable: true,
        value: composer.fallbackLocale.value
      },
      {
        type: localeType,
        key: "availableLocales",
        editable: false,
        value: composer.availableLocales
      },
      {
        type: localeType,
        key: "inheritLocale",
        editable: true,
        value: composer.inheritLocale
      }
    ];
    state[localeType] = localeStates;
    const localeMessagesType = "Locale messages info";
    const localeMessagesStates = [
      {
        type: localeMessagesType,
        key: "messages",
        editable: false,
        value: getLocaleMessageValue(composer.messages.value)
      }
    ];
    state[localeMessagesType] = localeMessagesStates;
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
    return state;
  }
  function addTimelineEvent(event, payload) {
    if (devtoolsApi) {
      let groupId;
      if (payload && "groupId" in payload) {
        groupId = payload.groupId;
        delete payload.groupId;
      }
      devtoolsApi.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: event,
          groupId,
          time: Date.now(),
          meta: {},
          data: payload || {},
          logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
        }
      });
    }
  }
  function editScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      const [field] = payload.path;
      if (field === "locale" && isString(payload.state.value)) {
        composer.locale.value = payload.state.value;
      } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject$1(payload.state.value))) {
        composer.fallbackLocale.value = payload.state.value;
      } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
        composer.inheritLocale = payload.state.value;
      }
    }
  }
  function defineMixin(vuei18n, composer, i18n2) {
    return {
      beforeCreate() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(
            22
            /* UNEXPECTED_ERROR */
          );
        }
        const options = this.$options;
        if (options.i18n) {
          const optionsI18n = options.i18n;
          if (options.__i18n) {
            optionsI18n.__i18n = options.__i18n;
          }
          optionsI18n.__root = composer;
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, optionsI18n);
          } else {
            optionsI18n.__injectWithOption = true;
            this.$i18n = createVueI18n(optionsI18n);
          }
        } else if (options.__i18n) {
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, options);
          } else {
            this.$i18n = createVueI18n({
              __i18n: options.__i18n,
              __injectWithOption: true,
              __root: composer
            });
          }
        } else {
          this.$i18n = vuei18n;
        }
        vuei18n.__onComponentInstanceCreated(this.$i18n);
        i18n2.__setInstance(instance, this.$i18n);
        this.$t = (...args) => this.$i18n.t(...args);
        this.$rt = (...args) => this.$i18n.rt(...args);
        this.$tc = (...args) => this.$i18n.tc(...args);
        this.$te = (key, locale) => this.$i18n.te(key, locale);
        this.$d = (...args) => this.$i18n.d(...args);
        this.$n = (...args) => this.$i18n.n(...args);
        this.$tm = (key) => this.$i18n.tm(key);
      },
      mounted() {
        {
          this.$el.__VUE_I18N__ = this.$i18n.__composer;
          const emitter = this.__v_emitter = createEmitter();
          const _vueI18n = this.$i18n;
          _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          emitter.on("*", addTimelineEvent);
        }
      },
      beforeUnmount() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(
            22
            /* UNEXPECTED_ERROR */
          );
        }
        {
          if (this.__v_emitter) {
            this.__v_emitter.off("*", addTimelineEvent);
            delete this.__v_emitter;
          }
          const _vueI18n = this.$i18n;
          _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
          delete this.$el.__VUE_I18N__;
        }
        delete this.$t;
        delete this.$rt;
        delete this.$tc;
        delete this.$te;
        delete this.$d;
        delete this.$n;
        delete this.$tm;
        i18n2.__deleteInstance(instance);
        delete this.$i18n;
      }
    };
  }
  function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    const messages2 = getLocaleMessages(root.locale, {
      messages: options.messages,
      __i18n: options.__i18n
    });
    Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
    if (options.datetimeFormats) {
      Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
    }
    if (options.numberFormats) {
      Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
    }
    return root;
  }
  function createI18n(options = {}) {
    const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
    const __globalInjection = !!options.globalInjection;
    const __instances = /* @__PURE__ */ new Map();
    const __global = __legacyMode ? createVueI18n(options) : createComposer(options);
    const symbol = makeSymbol("vue-i18n");
    const i18n2 = {
      // mode
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      // install plugin
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n2;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n2.global);
        }
        {
          apply(app, i18n2, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n2));
        }
        {
          const ret = await enableDevTools(app, i18n2);
          if (!ret) {
            throw createI18nError(
              21
              /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
            );
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      // @internal
      __instances,
      // @internal
      __getInstance(component) {
        return __instances.get(component) || null;
      },
      // @internal
      __setInstance(component, instance) {
        __instances.set(component, instance);
      },
      // @internal
      __deleteInstance(component) {
        __instances.delete(component);
      }
    };
    return i18n2;
  }
  function useI18n(options = {}) {
    const instance = vue.getCurrentInstance();
    if (instance == null) {
      throw createI18nError(
        16
        /* MUST_BE_CALL_SETUP_TOP */
      );
    }
    if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
      throw createI18nError(
        17
        /* NOT_INSLALLED */
      );
    }
    const i18n2 = vue.inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
    if (!i18n2) {
      throw createI18nError(
        22
        /* UNEXPECTED_ERROR */
      );
    }
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
    if (scope === "global") {
      let messages2 = isObject$1(options.messages) ? options.messages : {};
      if ("__i18nGlobal" in instance.type) {
        messages2 = getLocaleMessages(global2.locale.value, {
          messages: messages2,
          __i18n: instance.type.__i18nGlobal
        });
      }
      const locales = Object.keys(messages2);
      if (locales.length) {
        locales.forEach((locale) => {
          global2.mergeLocaleMessage(locale, messages2[locale]);
        });
      }
      if (isObject$1(options.datetimeFormats)) {
        const locales2 = Object.keys(options.datetimeFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
          });
        }
      }
      if (isObject$1(options.numberFormats)) {
        const locales2 = Object.keys(options.numberFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeNumberFormat(locale, options.numberFormats[locale]);
          });
        }
      }
      return global2;
    }
    if (scope === "parent") {
      let composer2 = getComposer(i18n2, instance, options.__useComponent);
      if (composer2 == null) {
        {
          warn(getWarnMessage(
            12
            /* NOT_FOUND_PARENT_SCOPE */
          ));
        }
        composer2 = global2;
      }
      return composer2;
    }
    if (i18n2.mode === "legacy") {
      throw createI18nError(
        18
        /* NOT_AVAILABLE_IN_LEGACY_MODE */
      );
    }
    const i18nInternal = i18n2;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
      const type = instance.type;
      const composerOptions = assign({}, options);
      if (type.__i18n) {
        composerOptions.__i18n = type.__i18n;
      }
      if (global2) {
        composerOptions.__root = global2;
      }
      composer = createComposer(composerOptions);
      setupLifeCycle(i18nInternal, instance, composer);
      i18nInternal.__setInstance(instance, composer);
    }
    return composer;
  }
  function getComposer(i18n2, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
      const i18nInternal = i18n2;
      if (i18n2.mode === "composition") {
        composer = i18nInternal.__getInstance(current);
      } else {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
        }
        if (useComponent && composer && !composer[InejctWithOption]) {
          composer = null;
        }
      }
      if (composer != null) {
        break;
      }
      if (root === current) {
        break;
      }
      current = current.parent;
    }
    return composer;
  }
  function setupLifeCycle(i18n2, target, composer) {
    let emitter = null;
    vue.onMounted(() => {
      if (target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on("*", addTimelineEvent);
      }
    }, target);
    vue.onUnmounted(() => {
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off("*", addTimelineEvent);
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n2.__deleteInstance(target);
    }, target);
  }
  const globalExportProps = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ];
  const globalExportMethods = ["t", "rt", "d", "n", "tm"];
  function injectGlobalFields(app, composer) {
    const i18n2 = /* @__PURE__ */ Object.create(null);
    globalExportProps.forEach((prop) => {
      const desc = Object.getOwnPropertyDescriptor(composer, prop);
      if (!desc) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const wrap = vue.isRef(desc.value) ? {
        get() {
          return desc.value.value;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        set(val) {
          desc.value.value = val;
        }
      } : {
        get() {
          return desc.get && desc.get();
        }
      };
      Object.defineProperty(i18n2, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n2;
    globalExportMethods.forEach((method) => {
      const desc = Object.getOwnPropertyDescriptor(composer, method);
      if (!desc || !desc.value) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
  }
  {
    initFeatureFlags();
  }
  {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  let i18nConfig = {
    locale: uni.getLocale(),
    messages
  };
  const i18n = createI18n(i18nConfig);
  function createApp() {
    const app = vue.createVueApp(App);
    app.config.globalProperties.$H = $H;
    app.use(i18n);
    app.component("status-bar", statusBar);
    app.mixin(loginMixin);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
