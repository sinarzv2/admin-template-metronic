<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      @submit="onSubmitForgotPassword"
      id="kt_login_password_reset_form"
      :validation-schema="forgotPassword"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-gray-900 mb-3">{{ translate("forgotPassword") }}</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-500 fw-semibold fs-4">
          {{ translate("enterYourEmailToResetYourPassword") }}
        </div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <Field
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
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="d-flex flex-wrap justify-content-center pb-lg-0">
        <button
          type="submit"
          ref="submitButton"
          id="kt_password_reset_submit"
          class="btn btn-lg btn-primary fw-bold me-4"
        >
          <span class="indicator-label"> {{ translate("submit") }} </span>
          <span class="indicator-progress">
            {{ translate("pleaseWait") }}
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>

        <router-link to="/sign-up" class="btn btn-lg btn-light-primary fw-bold">{{
          translate("cancel")
        }}</router-link>
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore } from "@/stores/auth";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "password-reset",
  components: {
    Field,
    VForm,
    ErrorMessage
  },
  setup() {
    const store = useAuthStore();
    const { t, te } = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    const submitButton = ref<HTMLButtonElement | null>(null);

    //Form submit function
    const onSubmitForgotPassword = async (values: any) => {
      values = values as string;

      // eslint-disable-next-line
      submitButton.value!.disabled = true;
      // Activate loading indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // dummy delay
      // Send login request
      await store.forgotPassword(values);

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
      onSubmitForgotPassword,
      submitButton,
      translate
    };
  },
  computed: {
    forgotPassword() {
      //Create form validation object
      return Yup.object().shape({
        email: Yup.string()
          .email(this.translate("errorEmail"))
          .required(this.translate("errorRequired"))
          .label(this.translate("email"))
      });
    }
  }
});
</script>
