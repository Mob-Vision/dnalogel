export interface LineCompletelyJson {
  id: string
  points: PointJson[]
}

export interface PolylineCompletelyJson {
  id: string
  points: PointJson[]
  lines: LineCompletelyJson[]
}

export interface LineJson {
  id: string
  points: string[]
}

export interface PolylineJson {
  id: string
  points: string[]
  lines: string[]
}

export interface PointJson {
  id: string
  lines: string[]
  position: number[]
}

export interface PluginData {
  lines: LineJson[]
  points: PointJson[]
  polylines: PolylineJson[]
}
