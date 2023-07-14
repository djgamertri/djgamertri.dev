import Screen from '../Components/Screen'
import Cube from '../assets/Cube'

function AboutMe() {
  return (
    <Screen>
        <div className='AboutMe'>
            <div className='AboutMeText'>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sed rerum laborum beatae dolores, accusamus neque veniam cupiditate praesentium quasi. Quidem quia quibusdam, doloribus eveniet dolorum beatae aliquid nam vel.</p>
            </div>
            <Cube />
        </div>
    </Screen>
  )
}

export default AboutMe