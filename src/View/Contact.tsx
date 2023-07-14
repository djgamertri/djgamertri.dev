import Screen from '../Components/Screen'
import Button from '../Components/Button'
import PaperPlane from '../assets/Paperplane'

function Contact() {
  return (
    <Screen>
        <form action="https://formbold.com/s/3A2LR" method='POST' className='Form'>
            <h1>Contact</h1>
            <div className='FormContent'>
                <label htmlFor="Name">Full Name</label>
                <input type="text" id='Name' placeholder='Full Name'/>
                <label htmlFor="Email">Email Addres</label>
                <input type="text" id='Email' name="email" placeholder='Example@domain.com'/>
                <label htmlFor="Subject">Subject</label>
                <input type="text" id='Subject' placeholder='Enter your subject'/>
                <label htmlFor="Message">Message</label>
                <textarea name="message" id="Message" placeholder='Type your message'></textarea>
                <Button Img={<PaperPlane Color='none'/>} Text={'Submit'} Link=''/>
            </div>
        </form>
    </Screen>
  )
}

export default Contact