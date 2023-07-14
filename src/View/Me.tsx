import Screen from '../Components/Screen'
import Button from '../Components/Button'
import Avatar from '../assets/Proile.png'
import Github from '../assets/Github'

function Me() {
  return (
    <Screen>
        <div className='Me'>
            <img src={Avatar} alt="" />
            <div className='MeText'>
                <h1>Dj<span>gamertri</span></h1>
                <Button Img={<Github Color='none'/>} Text={'Github'} Link='https://github.com/djgamertri'/>
            </div>
        </div>
    </Screen>
  )
}

export default Me