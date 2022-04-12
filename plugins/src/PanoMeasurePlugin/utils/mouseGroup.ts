import * as THREE from 'three'
import {
  CurvePath,
  DoubleSide,
  Group,
  LineCurve3,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  SphereGeometry,
  sRGBEncoding,
  TextureLoader,
  TubeGeometry,
  Vector3,
} from 'three'

const planTextureUrl = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjoAAAI6CAMAAAAZlhLyAAACB1BMVEUAAAD+/v6qqqqgoKCLi4t7e3u4uLhvb29MTExZWVlCQkJgYGBqamo4ODi9vb3///9FRUXPz887Ozv///9QUFBWVlZdXV38/Pzj4+Pn5+f8/Pz5+fn9/f329vZoaGje3t78/Pz////x8fH8/Pzs7OyBgYHd3d39/f319fX+/v79/f2Kior6+vr////+/v76+vr+/v7////8/Pz9/f3+/v7m5ub7+/v+/v7+/v7j4+P////+/v79/f3d3d3h4eH4+Pj+/v79/f12dnbc3Nz9/f3w8PD9/f34+Pj9/f3+/v5jY2P8/Pz9/f2ioqJubm7v7+/+/v76+vr5+fnv7+/09PSDg4P////t7e3+/v7+/v7+/v7///+ZmZl7e3v7+/vy8vL+/v7+/v7p6en19fX////s7Oz+/v6lpaX+/v7r6+vg4OD9/f3q6ur///////+UlJTt7e329vbz8/Pg4OD///+wsLCdnZ2QkJDe3t77+/vz8/Pw8PD+/v7c3Nyqqqrw8PD4+Pj+/v7////4+Pj////s7Oyurq7f39/p6en8/Pz////8/Pz19fVycnK0tLT////q6ure3t7o6Oj////s7Oz39/fd3d3h4eH+/v7j4+P////+/v7n5+f///////////////+ysrLe3t7////////8/PzHx8fl5eX////39/fv7+/d3d3///8S/hbOAAAArHRSTlMAzhATFhkNGyEfIx4dJQ/OKwoozS4wMh3Uy4SPbjs34kJ9EAkGP+8Snk1nRRo5JYl2eDQiA88wY3PXRDYN6dyTX0s751SxPJdhPjRdV1M4ti0XFa+pQiq5aShQSE09IKJwWMilWr9SVzLC3wvFwplKvKKY9spfUEjge6yqnexaLpqQakgBtVz1wQe9i4s6ZaG788fGKIXx95TZzKbSuKu1s2LlsJb7dqiu/cSWYhzVwQAALl1JREFUeNrs0jFqalEUheE9C9ugAQloCg0WmuIJIbxHUsQUQhQEQUTINNI463fvqU2xT3G5xfetNYQ/+M3PT7SDfDo/T0/SIe+pCJAOt0mHvrgvAqRDUn061/vrNSDrOhqNpEOFURGQNfqWDlW+i4CadJ6lQ95zESAdbpMOfTEcPg+Hw4CsphvpUGM4bsoZB2SNW9JB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`

export function getMouseGroup() {
  const group = new Group()
  const planGeometry = new PlaneGeometry(0.3, 0.3)
  const planTexture = new TextureLoader().load(planTextureUrl)
  planTexture.encoding = sRGBEncoding
  const planMaterial = new MeshBasicMaterial({ map: planTexture, transparent: true, depthTest: false })
  const planMesh = new Mesh(planGeometry, planMaterial)

  const zPath = new CurvePath<Vector3>()
  zPath.add(new LineCurve3(new Vector3(0, 0, 0), new Vector3(0, 0, 0.1)))
  const zGeometry = new TubeGeometry(zPath, 10, 0.005)
  const zMaterial = new MeshBasicMaterial({ color: 0x33f1ef, depthTest: false, side: DoubleSide })
  const zMesh = new Mesh(zGeometry, zMaterial)

  const ballGeometry = new SphereGeometry(0.01, 32, 32)
  const ballMesh = new Mesh(ballGeometry, zMaterial)
  ballMesh.position.set(0, 0, 0.1)

  group.name = 'mouse-current'
  group.add(planMesh, zMesh, ballMesh)
  return group
}