<template>
    <!--begin::Authentication Layout -->
    <div class="d-flex flex-column flex-column-fluid flex-lg-row"
         :style="`
          background-image: url('${getAssetPath('media/auth/bg12.jpg')}');
           background-size: cover;` ">

        <!--begin::Body-->
        <div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20" style="margin:auto;">
            <!--begin::Card-->
            <div class="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
                <!--begin::Wrapper-->
                <div class="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 ">
                    <router-view></router-view>
                </div>
                <!--end::Wrapper-->
                <!--begin::Footer-->
                <div class="d-flex flex-stack px-lg-10">
                    <!--begin::Languages-->
                    <div class="me-0">
                        <!--begin::Toggle-->

                        <button class="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base " data-kt-menu-trigger="hover" data-kt-menu-placement="bottom-start">
                            <img class="w-20px h-20px rounded me-3" 
                                 :src="currentLangugeLocale.flag" alt="" />
                            <span data-kt-element="current-lang-name" class="me-1">{{ currentLangugeLocale.name }}</span>
                            <i class="ki-duotone ki-down fs-5 text-muted rotate-180 m-0"></i>
                        </button>
                        <!--end::Toggle-->
                        <!--begin::Menu-->
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7" data-kt-menu="true">
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                                <a @click="setLang('fa')" href="#" class="menu-link d-flex px-5" data-kt-lang="فارسی">
                                    <span class="symbol symbol-20px me-4">
                                        <img data-kt-element="lang-flag" class="rounded-1" :src="getAssetPath('media/flags/iran.svg')" alt="" />
                                    </span>
                                    <span data-kt-element="lang-name">فارسی</span>
                                </a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->

                            <div class="menu-item px-3">
                                <a @click="setLang('en')" href="#" class="menu-link d-flex px-5" data-kt-lang="English">
                                    <span class="symbol symbol-20px me-4">
                                        <img data-kt-element="lang-flag" class="rounded-1" :src="getAssetPath('media/flags/united-states.svg')" alt="" />
                                    </span>
                                    <span data-kt-element="lang-name">English</span>
                                </a>
                            </div>
                            <!--end::Menu item-->



                        </div>
                        <!--end::Menu-->
                    </div>
                    <!--end::Languages-->
                    <!--begin::Links-->
                    <div class="d-flex fw-semibold text-primary fs-base gap-5">
                        <router-link to="/contact" class="link-primary fw-bold"> {{translate("contactUs")}} </router-link>
                    </div>
                    <!--end::Links-->
                </div>
                <!--end::Footer-->
            </div>
            <!--end::Card-->
        </div>
        <!--end::Body-->
    </div>
    <!--end::Authentication Layout -->
</template>

<script lang="ts">
    import { getAssetPath } from "@/core/helpers/assets";
    import { defineComponent, onMounted, nextTick, computed } from "vue";
    import LayoutService from "@/core/services/LayoutService";
    import { useBodyStore } from "@/stores/body";
    import { reinitializeComponents } from "@/core/plugins/keenthemes";
    import { useI18n } from "vue-i18n";

    export default defineComponent({
        name: "auth-layout",
        components: {
        },
        setup() {
            const store = useBodyStore();
           
            const i18n = useI18n();

            onMounted(() => {
                LayoutService.emptyElementClassesAndAttributes(document.body);

                store.addBodyClassname("app-blank");
                store.addBodyClassname("bg-body");
                nextTick(() => {
                    reinitializeComponents();
                });
            });
            const countries = {
                en: {
                    flag: getAssetPath("media/flags/united-states.svg"),
                    name: "English"
                },
                fa: {
                    flag: getAssetPath("media/flags/iran.svg"),
                    name: "فارسی"
                }
            };

            const setLang = (lang: string) => {
                localStorage.setItem("lang", lang);
                i18n.locale.value = lang;
            };

            const currentLangugeLocale = computed(() => {
                return countries[i18n.locale.value as keyof typeof countries];
            });

           
            const translate = (text: string) => {
                if (i18n.te(text)) {
                    return i18n.t(text);
                } else {
                    return text;
                }
            };
            return {
                getAssetPath,
                setLang,
                translate,
                currentLangugeLocale
            };
        },
    });
</script>
