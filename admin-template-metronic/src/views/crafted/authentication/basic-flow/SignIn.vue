<template>
  <!--begin::Wrapper-->
    <div class="w-lg-500px p-10">
        <!--begin::Form-->
        <VForm class="form w-100"
               id="kt_login_signin_form"
               @submit="onSubmitLogin"
               :validation-schema="login"
               :initial-values="{ email: 'admin@demo.com', password: 'demo' }">
            <!--begin::Heading-->
            <div class="text-center mb-11">
                <!--begin::Title-->
                <h1 class="text-dark fw-bolder mb-3">{{translate("signIn")}}</h1>
                <!--end::Title-->
                <!--begin::Subtitle-->
                <div class="text-gray-500 fw-semibold fs-6">{{translate("yourSocialCampaigns")}}</div>
                <!--end::Subtitle=-->
            </div>
            <!--begin::Heading-->
            <!--begin::Login options-->
            <div class="row g-3 mb-9">
                <!--begin::Col-->
                <div class="col-md-6">
                    <!--begin::Google link=-->
                    <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo" :src="getAssetPath('media/svg/brand-logos/google-icon.svg')" class="h-15px me-3" />{{translate("continueWithGoogle")}}
                    </a>
                    <!--end::Google link=-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6">
                    <!--begin::Google link=-->
                    <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo" :src="getAssetPath('media/svg/brand-logos/apple-black.svg')" class="theme-light-show h-15px me-3" />
                        <img alt="Logo" :src="getAssetPath('media/svg/brand-logos/apple-black-dark.svg')" class="theme-dark-show h-15px me-3" />{{translate("continueWithApple")}}
                    </a>
                    <!--end::Google link=-->
                </div>
                <!--end::Col-->
            </div>
            <!--end::Login options-->
            <!--begin::Separator-->
            <div class="separator separator-content my-14">
                <span class="w-125px text-gray-500 fw-semibold fs-7">{{translate("orWithEmail")}}</span>
            </div>
            <!--end::Separator-->
          

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bold text-gray-900">{{translate("email")}}</label>
                <!--end::Label-->
                <!--begin::Input-->
                <Field tabindex="1"
                       class="form-control form-control-lg form-control-solid"
                       type="text"
                       name="email"
                       autocomplete="off" />
                <!--end::Input-->
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack mb-2">
                    <!--begin::Label-->
                    <label class="form-label fw-bold text-gray-900 fs-6 mb-0">{{translate("password")}}</label>
                    <!--end::Label-->

                </div>
                <!--end::Wrapper-->
                <!--begin::Input-->
                <Field tabindex="2"
                       class="form-control form-control-lg form-control-solid"
                       type="password"
                       name="password"
                       autocomplete="off" />
                <!--end::Input-->
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="password" />
                    </div>
                </div>
            </div>
            <!--end::Input group-->
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div></div>
                <router-link to="/password-reset" class="link-primary fs-6 ">
                    {{translate("forgotPassword")}}
                </router-link>
            </div>
            <!--end::Wrapper-->
            <!--begin::ارسال button-->
            <div class="text-center">
                <!--begin::Submit button-->
                <button tabindex="3"
                        type="submit"
                        ref="submitButton"
                        id="kt_sign_in_submit"
                        class="btn btn-lg btn-primary w-100 mb-5">
                    <span class="indicator-label"> {{translate("continue")}} </span>

                    <span class="indicator-progress">
                        {{translate("pleaseWait")}}
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                </button>
                <!--end::Submit button-->
            
               
            </div>
            <!--end::ارسال button-->
            <!--begin::ثبت نام-->
            <div class="text-gray-500 text-center fw-semibold fs-6">
                {{translate("newHere")}}
                <router-link to="/sign-up" class="link-primary fw-bold"> {{translate("createAnAccount")}}</router-link>
            </div>
            <!--end::ثبت نام-->
        </VForm>
            <!--end::Form-->

    </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
    import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

      const { t, te } = useI18n();
      const translate = (text: string) => {
          if (te(text)) {
              return t(text);
          } else {
              return text;
          }
      };
    
    

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Send login request
      await store.login(values);
      const error = Object.values(store.errors);

      if (error.length === 0) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-primary"
          }
        }).then(() => {
          // Go to page after successfully login
          router.push({ name: "dashboard" });
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-danger"
          }
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
        submitButton.value!.disabled = false;
    };


    return {
      onSubmitLogin,
      submitButton,
      getAssetPath,
      translate, t
    };
    },
    computed: {
        login() {
            //Create form validation object
            const login =
                Yup.object().shape({
                    email: Yup.string().email(this.t('errorEmail')).required(this.t('errorRequired')).label(this.translate("email")),
                    password: Yup.string().min(4, this.t('errorMin')).required(this.t('errorRequired')).label(this.translate("password"))

                });
            return login;
        },
    },
});
</script>
