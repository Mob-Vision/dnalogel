<script setup lang="ts">
import ModelViewPlugin from "@realsee/dnalogel/libs/ModelViewPlugin"
import TopviewFloorplanPlugin from "@realsee/dnalogel/libs/floorplan/TopviewFloorplanPlugin"
import { useWindowDimensions } from "../components/useWindowDimensions"

import { parseWork } from "@realsee/five";

import ModelViewPluginUse from './ModelViewPluginUse.vue';
import TopviewFloorplanPluginUse from './TopviewFloorplanPluginUse.vue';

import { work } from "../../../open-works/virtual/81gmMq5a7zbF9leWMk/work";

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
      {}
    ]

  ]
}

</script>

<template>
  <FiveProvider :work="work" :fiveInitArgs="fiveInitArgs">
    <FiveCanvas :width="width" :height="height"></FiveCanvas>
    <ModelViewPluginUse />
<!--    <TopviewFloorplanPluginUse />-->
  </FiveProvider>
</template>

