<template>
  <div class="d-flex flex-column flex-center flex-column-fluid">
    <!--begin::Content-->
    <div class="d-flex flex-column flex-center text-center p-10">
      <!--begin::Wrapper-->
      <div class="card card-flush w-lg-650px py-5">
        <div class="card-body py-15 py-lg-20">
          <!--begin::Title-->
          <h1 class="fw-bolder fs-2qx text-gray-900 mb-4">{{translate("systemError")}}</h1>
          <!--end::Title-->
          <!--begin::Text-->
          <div class="fw-semibold fs-6 text-gray-500 mb-7">
              {{translate("errorMessage500")}}
          </div>
          <!--end::Text-->
          <!--begin::Illustration-->
          <div class="mb-11">
            <img
              :src="getAssetPath('media/auth/500-error.png')"
              class="mw-100 mh-300px theme-light-show"
              alt=""
            />
            <img
              :src="getAssetPath('media/auth/500-error-dark.png')"
              class="mw-100 mh-300px theme-dark-show"
              alt=""
            />
          </div>
          <!--end::Illustration-->
          <!--begin::Link-->
          <div class="mb-0">
            <router-link to="/" class="btn btn-sm btn-primary">{{translate("returnHome")}}</router-link>
          </div>
          <!--end::Link-->
        </div>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import { useBodyStore } from "@/stores/body";
import LayoutService from "@/core/services/LayoutService";
import { themeMode } from "@/layouts/default-layout/config/helper";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "error-500",
  components: {},
  setup() {
    const bodyStore = useBodyStore();

    const bgImage =
      themeMode.value !== "dark"
        ? getAssetPath("media/auth/bg1.jpg")
        : getAssetPath("media/auth/bg1-dark.jpg");

    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);

      bodyStore.addBodyClassname("bg-body");
      bodyStore.addBodyAttribute({
        qualifiedName: "style",
        value: `background-image: url("${bgImage}")`
      });
    });

      const { t, te } = useI18n();
      const translate = (text: string) => {
          if (te(text)) {
              return t(text);
          } else {
              return text;
          }
      };
    return {
      getIllustrationsPath,
      bgImage,
      getAssetPath,
      translate
    };
  }
});
</script>
