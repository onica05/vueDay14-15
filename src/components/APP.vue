<!--这里用于定义vue组件的模板内容-->
<template >
    
    <div>
        <h1>这是APP根组件</h1>
    </div>
</template>

<!--这里用于定于VUE组件的业务逻辑-->
<script>
export default {
    data() {
        return {}
    }, // 私有数据
    methods: {} //处理函数
    // ...其他业务逻辑
}
</script>

<style scoped>
/* scoped表示防止组件样式冲突问题 */
/* 这里用于定义组件的样式 */
h1 {
    color: red;
}
</style>