import * as React from "react";
import { unsafe__useFiveInstance, useFiveModelReadyState, useFiveState } from "@realsee/five/react";
import { BottomNavigation, BottomNavigationAction, Box, Button, Paper } from '@mui/material'
import { Five, Mode } from '@realsee/five'
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { works } from './App'

const MiniModelPanel: React.FC = () => {
    const [fiveState, setFiveState] = useFiveState();
    const five = unsafe__useFiveInstance()
    const miniModeRef = React.useRef<HTMLDivElement>(null)
    const fiveModeReadyState = useFiveModelReadyState()

    React.useEffect(() => {
        if (!miniModeRef.current || fiveState.mode !== Five.Mode.Panorama) return
        five.plugins.modelViewPlugin.appendTo(miniModeRef.current, { width: 90, height: 120 })
    }, [fiveState.mode, fiveModeReadyState])

    if (fiveState.mode !== Five.Mode.Panorama) return null
    if (fiveModeReadyState !== 'Loaded') return null
    return (
        <>
            <Box
                onClick={() => setFiveState({ mode: "Floorplan" })}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: "absolute",
                    top: '60px',
                    right: '20px',
                    padding: '10px', // 注意: 插件内部无法获知 padding 值，如有需要，请务必传入 size
                    width: '110px',
                    height: '140px',
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(0, 0, 0, .2)',
                }}
                ref={miniModeRef}
            />
            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}>
                <Button onClick={() => {
                    five.load(works[0].data, { panoIndex: 2 })
                }}>work1</Button>
                <Button onClick={() => {
                    five.load(works[1].data, { panoIndex: 100 })
                }}
                >work2</Button>
            </Paper>
        </>
    )
}

export default MiniModelPanel
