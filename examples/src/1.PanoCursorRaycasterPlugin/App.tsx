import { PanoCursorRaycasterPlugin } from "@realsee/dnalogel";
// import { CSS3DRenderPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC, useEffect } from "react";
import { useFetchWork } from "./useFetchWork";
import { useWindowDimensions } from "./useWindowDimensions";

/** work.json 的数据 URL */
const workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";

const FiveProvider = createFiveProvider({
  plugins: [
    [PanoCursorRaycasterPlugin, 'panoCursorRaycasterPlugin']
    // [CSS3DRenderPlugin, 'cSS3DRenderPlugin']
  ]
});

const App: FC = () => {
  const work = useFetchWork(workURL);
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={work}>
    <div style={{position: 'absolute', width: '100%', height: '100%'}}><FiveCanvas {...size}/></div>

  </FiveProvider>;
};

export default App ;
