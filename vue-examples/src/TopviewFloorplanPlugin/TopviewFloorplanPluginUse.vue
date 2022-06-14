<template>
    <div ref=box  :class="['plugin-full-screen-container', 'box']"></div>
</template>
<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useFiveState, unsafe__useFiveInject, useFiveModelReadyState } from "@realsee/five/vue";
import { floorplanServerData } from "../../../examples/open-works/virtual/81gmMq5a7zbF9leWMk/floorplanServerData";

export default defineComponent({
    name: "TopviewFloorplanPluginUse",
    setup() {
        const [_, setFiveState] = useFiveState();
        const five = unsafe__useFiveInject();
        const modelState = useFiveModelReadyState();
        const topviewFloorplanPlugin = five.plugins.topviewFloorplanPlugin;

      watch(modelState, (cur, pre) => {
        if(cur === 'Loaded') topviewFloorplanPlugin.load(floorplanServerData);


      })

        return {
            setFiveState
        }
    }
})

</script>
<style scoped>

    .box {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background-color: transparent;
    }
</style>




