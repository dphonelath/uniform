<template>
    <view>
        <text>Another screen</text>
        <button title="go back" :on-press="() => navigation.goBack()" />
    </view>
</template>

<script>
    export default {
        props: {
            navigation: {
                type: Object
        }
    },
}
</script>