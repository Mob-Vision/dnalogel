import { ref, onBeforeUnmount } from "vue";

function useWindowDimensions() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  function setSize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  window.addEventListener("resize", setSize, false);
  onBeforeUnmount(() => {
    window.removeEventListener("resize", setSize, false);
  });
  return { width, height };
}

export { useWindowDimensions };