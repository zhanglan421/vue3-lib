<template>
    <div class="my-lib-button-wrapper">
        {{ wellcome }}
        <button class="my-lib-button" @click="onClickLibButton">
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const wellcome = 'hello, this is your first vue lib! just try click this button';

        const onClickLibButton = () => {
            alert('you click it!')
        }

        return {
            wellcome,
            onClickLibButton
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';
</style>