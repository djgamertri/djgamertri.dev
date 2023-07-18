import Screen from '../Components/Screen'
import Cube from '../assets/Cube.png'
import { Titles, Aboutme } from '../Components/DataEn'

function AboutMe () {
  return (
    <Screen>
        <div className='AboutMe'>
            <div className='AboutMeText'>
                <h1>{ Titles.Aboutme }</h1>
                <p>{ Aboutme.text }</p>
            </div>
            <img src={Cube} alt="Minecraft-Cube" />
        </div>
    </Screen>
  )
}

export default AboutMe
