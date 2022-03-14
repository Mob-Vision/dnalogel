import { ModelChassisCompassPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useWindowDimensions } from "./useWindowDimensions";
import { work } from '../mockData'
import { parseWork } from "@realsee/five";
import ModelChassisCompassPluginUse from "./ModelChassisCompassPluginUse";
import { Box } from "@mui/material";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      ModelChassisCompassPlugin,
      'modelChassisCompassPlugin',
      {}
    ]
  ]
});

const App: FC = () => {
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, {$five: ref?.five})}>
    <FiveCanvas {...size} />
    <ModelChassisCompassPluginUse />
  </FiveProvider>;
};

export default App ;
