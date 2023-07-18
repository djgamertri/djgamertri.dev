import { useState } from 'react'
import Screen from '../Components/Screen'
import Button from '../Components/Button'
import Code from '../assets/Code'
import Computer from '../assets/Computer'
import { Titles, SliderItem } from '../Components/DataEs'

function Projects () {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === SliderItem.length - 1 ? 0 : prevSlide + 1))
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? SliderItem.length - 1 : prevSlide - 1))
  }

  return (
    <Screen>
        <div className='Projects'>
            <h1 style={{ marginTop: 50 }}>{Titles.Projects}</h1>
            <div className='ProjectsSlider'>
                {SliderItem.map((Item, Index) => (
                    <div key={Index} className={`ProjectItem ${Index === currentSlide ? 'active' : ''}`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <img src={Item.img} alt='image-project-web'/>
                    <div className='ProjectText'>
                        <h1>{Item.title}</h1>
                        <p>{Item.text}</p>
                        <div className='ProjectButton'>
                          {Item.github === '' ? null : <Button Img={<Code Color='none'/>} Text={'Code'} Link={Item.github}/>}
                          {Item.live === '' ? null : <Button Img={<Computer Color='none'/>} Text={'Live View'} Link={Item.live}/>}

                        </div>
                    </div>
                </div>
                ))}
                <button className="prev-button" onClick={goToPrevSlide}>{'<'}</button>
                <button className="next-button" onClick={goToNextSlide}>{'>'}</button>
            </div>
        </div>
    </Screen>
  )
}

export default Projects
