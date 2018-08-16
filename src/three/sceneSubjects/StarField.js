import Stars from './Stars'
import Light from './Light'

export default scene => {
  const subjectsToUpdate = []

  // Setup starfield
  subjectsToUpdate.push(new Stars(scene))
  subjectsToUpdate.push(new Light(scene))

  function update (time) {
    subjectsToUpdate.forEach(subject => {
      subject.update(time)
    })
  }

  return {
    update
  }
}
