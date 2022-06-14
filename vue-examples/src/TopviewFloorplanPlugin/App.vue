<script setup lang="ts">
import ModelViewPlugin from "@realsee/dnalogel/libs/ModelViewPlugin"
import TopviewFloorplanPlugin from "@realsee/dnalogel/libs/floorplan/TopviewFloorplanPlugin"
import { useWindowDimensions } from "../components/useWindowDimensions"

import { parseWork } from "@realsee/five";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";

import ModelViewPluginUse from './ModelViewPluginUse.vue';
import TopviewFloorplanPluginUse from './TopviewFloorplanPluginUse.vue';

import { work } from "../../../examples/open-works/virtual/81gmMq5a7zbF9leWMk/work";

const { width, height } = useWindowDimensions()

const fiveInitArgs = {
  plugins: [
    [
      ModelViewPlugin,
      'modelViewPlugin'
    ],
    [
      TopviewFloorplanPlugin,
      'topviewFloorplanPlugin',
      {
        selector: '.plugin-full-screen-container'
      }
    ]
  ]
}

</script>

<template>
  <FiveProvider :work="work" :fiveInitArgs="fiveInitArgs">
    <FiveCanvas :width="width" :height="height" />
    <ModelViewPluginUse />
    <TopviewFloorplanPluginUse />
  </FiveProvider>
</template>

