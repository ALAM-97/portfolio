<template>
    <div class="toggle-wrapper">
        <label class="toggle">
            <input type="checkbox" :checked="(mode === 'dark') ? 'checked' : false " @change="$emit('toggle')"/>
            <span class="toggler round"></span>
        </label>
    </div>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
    .toggle {
        position: relative;
        display: inline-block;
        width: 3.75rem;
        height: 2.125rem;
        input {
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
    .toggler {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $purpleColor;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        &:before {
            position: absolute;
            content: "";
            height: 1.625rem;
            width: 1.625rem;
            left: .25rem;
            bottom: .25rem;
            background: #fff;
            -webkit-transition: 0.4s;
            transition: 0.4s;
        }
        &.round {
            border-radius: 34px;
            &:before {
                border-radius: 50%;
            }
        }
    }
    input:checked + .toggler {
        background: $azureColor;
    }
    input:focus + toggler {
        box-shadow: 0 0 2px $azureColor;
    }
    input:checked + .toggler:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
</style>