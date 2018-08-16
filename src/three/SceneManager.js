import * as THREE from 'three'
import StarField from './sceneSubjects/StarField'

export default canvas => {
  const clock = new THREE.Clock()

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height
  }

  const mousePosition = {
    x: 0,
    y: 0
  }

  const scene = buildScene()
  const renderer = buildRender(screenDimensions)
  const camera = buildCamera(screenDimensions)
  const sceneSubjects = createSceneSubjects(scene)
  const initCameraTarget = {
    x: 0, 
    y: 0,
    z: 0 
  }


  function buildScene () {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#111111')

    return scene
  }

  function buildRender ({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    })
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1
    renderer.setPixelRatio(DPR)
    renderer.setSize(width, height)

    renderer.gammaInput = true
    renderer.gammaOutput = true

    return renderer
  }

  function buildCamera ({ width, height }) {
    const aspectRatio = width / height
    const fieldOfView = 60
    const nearPlane = 0.1
    const farPlane = 1000
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    )

    camera.position.z = 40

    return camera
  }

  function createSceneSubjects (scene) {
    const sceneSubjects = [new StarField(scene)]

    return sceneSubjects
  }

  function update () {
    const elapsedTime = clock.getElapsedTime()

    for (let i = 0; i < sceneSubjects.length; i++) {
      sceneSubjects[i].update(elapsedTime)
    }

    camera.position.x += (mousePosition.x - camera.position.x) * 0.05
    camera.position.y += (-mousePosition.y - camera.position.y) * 0.05
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }

  function onWindowResize () {
    const { width, height } = canvas

    screenDimensions.width = width
    screenDimensions.height = height

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  function onMouseMove (x, y) {
    mousePosition.x = x
    mousePosition.y = y
  }

  function onDocumentMouseMove (event) {
    mousePosition.x = event.clientX
    mousePosition.y = event.clientY
  }

  document.addEventListener('mousemove', onDocumentMouseMove, false)

  return {
    update,
    onWindowResize,
    onMouseMove
  }
}
