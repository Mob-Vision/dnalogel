import * as React from "react";
import {unsafe__useFiveInstance, useFiveState} from "@realsee/five/react";
import { Box } from '@mui/material'
import { floorplanServerData, newData } from "../mockData";
import { Five } from "@realsee/five";

const PanoFloorplanRadarPanel: React.FC = () => {
    const [fiveState, setFiveState] = useFiveState();
    const five = unsafe__useFiveInstance()
    const panoFloorplanRadarPanelRef = React.useRef<HTMLDivElement>(null)
    const [visible, setVisible] = React.useState<boolean>(false)
    const [data, setData] = React.useState(floorplanServerData)

    React.useEffect(() => {
        if (!panoFloorplanRadarPanelRef.current || fiveState.mode !== Five.Mode.Panorama) return
        five.plugins.panoFloorplanRadarPlugin.appendTo(panoFloorplanRadarPanelRef.current)
        // five.plugins.panoFloorplanRadarPlugin.load(floorplanServerData)
    }, [])

    React.useEffect(() => {
        if (!panoFloorplanRadarPanelRef.current || fiveState.mode !== Five.Mode.Panorama) return
        five.plugins.panoFloorplanRadarPlugin.load(data)
    }, [data])

    React.useEffect(() => {
        if (fiveState.mode === Five.Mode.Panorama) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }

    }, [fiveState.mode])

    const changeData = () => {
        console.log('new data')
        // @ts-ignore
        setData(newData)
    }

    return (
        <>
            <Box
                onClick={() => setFiveState({ mode: Five.Mode.Floorplan })}
                sx={{
                    display: `${visible ? 'flex' : 'none'}`,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: "absolute",
                    top: '60px',
                    right: '20px',
                    padding: '10px',
                    width: '90px',
                    height: '120px',
                    backgroundColor: 'rgba(0, 0, 0, .2)',
                }}
                ref={panoFloorplanRadarPanelRef}
            />
            <div onClick={changeData} style={{
                position: 'absolute',
                top: 100,
                left: 200,
                cursor: 'pointer'
            }}>修改data</div>
        </>
    )
}

export default PanoFloorplanRadarPanel
