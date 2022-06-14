<template>
  <div ref=box  @click="() => setFiveState({mode: 'Topview'})" id="box"></div>
</template>
<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useFiveState, unsafe__useFiveInject, useFiveModelReadyState } from "@realsee/five/vue";
export default defineComponent({
  name: "ModelViewPluginUse",
  setup() {
    const box = ref(null)
    const [_, setFiveState] = useFiveState();
    const five = unsafe__useFiveInject();
    const modelState = useFiveModelReadyState();

    watch(modelState, (newState, oldState) => {
      if(newState && newState === "Loaded") {
        console.log(five)
        five.plugins.modelViewPlugin.appendTo(box.value)
      }
    })

    return {
      box,
      setFiveState
    }
  }

})

</script>
<style scoped>

#box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 20px;
  padding: 10px;
  width: 90px;
  height: 120px;
  background-color: rgba(0, 0, 0, .2);

}
</style>




