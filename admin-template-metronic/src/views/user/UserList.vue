<template>
    <div class="card mb-5 mb-xxl-8">
        <div class="card-body pt-9 pb-0">
            لیست کاربران
        </div>
    </div>
    <button type="button"
            class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end">
        <KTIcon icon-name="category" icon-class="fs-3 text-primary" />
    </button>

    <Dropdown3></Dropdown3>
</template>

<script lang="ts">

    import { defineComponent } from "vue";
    import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
    export default defineComponent({
        name: "user-list",
        components: {
            Dropdown3
        },
        setup() {
            return {
            };
        }
    });
</script>
