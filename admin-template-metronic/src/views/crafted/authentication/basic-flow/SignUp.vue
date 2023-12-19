<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      novalidate
      @submit="onSubmitRegister"
      id="kt_login_signup_form"
      :validation-schema="registration"
    >
      <!--begin::Heading-->
      <div class="text-center mb-11">
        <!--begin::Title-->
        <h1 class="text-dark fw-bolder mb-3">{{ translate("signUp") }}</h1>
        <!--end::Title-->
        <!--begin::Subtitle-->
        <div class="text-gray-500 fw-semibold fs-6">{{ translate("yourSocialCampaigns") }}</div>
        <!--end::Subtitle=-->
      </div>
      <!--begin::Heading-->
      <!--begin::Login options-->
      <div class="row g-3 mb-9">
        <!--begin::Col-->
        <div class="col-md-6">
          <!--begin::Google link=-->
          <a
            href="#"
            class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
          >
            <img
              alt="Logo"
              :src="getAssetPath('media/svg/brand-logos/google-icon.svg')"
              class="h-15px me-3"
            />{{ translate("continueWithGoogle") }}
          </a>
          <!--end::Google link=-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-md-6">
          <!--begin::Google link=-->
          <a
            href="#"
            class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
          >
            <img
              alt="Logo"
              :src="getAssetPath('media/svg/brand-logos/apple-black.svg')"
              class="theme-light-show h-15px me-3"
            />
            <img
              alt="Logo"
              :src="getAssetPath('media/svg/brand-logos/apple-black-dark.svg')"
              class="theme-dark-show h-15px me-3"
            />{{ translate("continueWithApple") }}
          </a>
          <!--end::Google link=-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Login options-->
      <!--begin::Separator-->
      <div class="separator separator-content my-14">
        <span class="w-125px text-gray-500 fw-semibold fs-7">{{ translate("orWithEmail") }}</span>
      </div>
      <!--end::Separator-->
      <!--begin::Input group=-->
      <div class="fv-row mb-8">
        <!--begin::Email-->
        <Field
          tabindex="1"
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="email"
          autocomplete="off"
          :placeholder="translate('email')"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
        <!--end::Email-->
      </div>
      <!--begin::Input group-->
      <div class="fv-row mb-8" data-kt-password-meter="true">
        <!--begin::Wrapper-->
        <div class="mb-1">
          <!--begin::Input wrapper-->
          <div class="position-relative mb-3">
            <Field
              tabindex="2"
              class="form-control form-control-lg form-control-solid"
              type="password"
              name="password"
              autocomplete="off"
              :placeholder="translate('password')"
            />

            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
          </div>
          <!--end::Input wrapper-->
          <!--begin::Meter-->
          <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
          </div>
          <!--end::Meter-->
        </div>
        <!--end::Wrapper-->
        <!--begin::Hint-->
        <div class="text-muted">
          {{ translate("use8OrMoreCharacterSwithAMixOfLettersNumbersSymbols") }}
        </div>
        <!--end::Hint-->
      </div>
      <!--end::Input group=-->
      <!--end::Input group=-->
      <div class="fv-row mb-8">
        <!--begin::تکرار رمز عبور-->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="password"
          :placeholder="translate('confirmPassword')"
          name="password_confirmation"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password_confirmation" />
          </div>
        </div>
        <!--end::تکرار رمز عبور-->
      </div>
      <!--end::Input group=-->
      <!--begin::Accept-->
      <div class="fv-row mb-8">
        <label class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" name="toc" value="1" />
          <span
            class="form-check-label fw-semibold text-gray-700 fs-base ms-1"
            v-html="translate('termsAndConditions')"
          >
          </span>
        </label>
      </div>
      <!--end::Accept-->
      <!--begin::ارسال button-->
      <div class="d-grid mb-10">
        <button
          id="kt_sign_up_submit"
          ref="submitButton"
          type="submit"
          class="btn btn-lg btn-primary"
        >
          <!--begin::Indicator label-->
          <span class="indicator-label">{{ translate("signIn") }} </span>
          <!--end::Indicator label-->
          <!--begin::Indicator progress-->
          <span class="indicator-progress">
            {{ translate("pleaseWait") }}
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
          <!--end::Indicator progress-->
        </button>
      </div>
      <!--end::ارسال button-->
      <!--begin::ثبت نام-->
      <div class="text-gray-500 text-center fw-semibold fs-6">
        {{ translate("alreadyHaveAnAccount") }}
        <router-link to="/sign-in" class="link-primary fw-bold">
          {{ translate("signInHere") }}
        </router-link>
      </div>
      <!--end::ثبت نام-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, nextTick, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import { PasswordMeterComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "sign-up",
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

    onMounted(() => {
      nextTick(() => {
        PasswordMeterComponent.bootstrap();
      });
    });

    const onSubmitRegister = async (values: any) => {
      values = values as User;

      // Clear existing errors
      store.logout();

      // eslint-disable-next-line
                submitButton.value!.disabled = true;

      // Activate indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Send login request
      await store.register(values);

      const error = Object.values(store.errors);

      if (!error) {
        Swal.fire({
          text: translate("youHaveSuccessfullyLoggedIn"),
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: translate("okGotIt"),
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-primary"
          }
        }).then(function () {
          // Go to page after successfully login
          router.push({ name: "dashboard" });
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: translate("tryAgain"),
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-danger"
          }
        });
      }

      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
                submitButton.value!.disabled = false;
    };

    return {
      onSubmitRegister,
      submitButton,
      getAssetPath,
      translate
    };
  },
  computed: {
    registration() {
      const registration = Yup.object().shape({
        email: Yup.string()
          .email(this.translate("errorEmail"))
          .required(this.translate("errorRequired"))
          .label(this.translate("email")),
        password: Yup.string()
          .min(4, this.translate("errorMin"))
          .required(this.translate("errorRequired"))
          .label(this.translate("password")),
        password_confirmation: Yup.string()
          .required()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .label("Password Confirmation")
      });
      return registration;
    }
  }
});
</script>
