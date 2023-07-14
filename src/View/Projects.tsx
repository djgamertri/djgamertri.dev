import { useState } from 'react';
import Screen from '../Components/Screen'
import Button from '../Components/Button'
import Code from '../assets/Code'
import Computer from '../assets/Computer';

function Projects() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const SliderItem = [
    {
        title: 'Barbershop 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda cum ipsa ipsam maxime, magni qui nulla aspernatur inventore quos quo incidunt unde placeat expedita harum et! Perferendis, dolores possimus.',
        img: 'https://p4.wallpaperbetter.com/wallpaper/339/998/542/space-landscape-planet-1920-x-1080-wallpaper-preview.jpg',
        github: '',
        live: ''
    },
    {
        title: 'Barbershop 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda cum ipsa ipsam maxime, magni qui nulla aspernatur inventore quos quo incidunt unde placeat expedita harum et! Perferendis, dolores possimus.',
        img: 'https://p4.wallpaperbetter.com/wallpaper/339/998/542/space-landscape-planet-1920-x-1080-wallpaper-preview.jpg',
        github: '',
        live: ''
    },
    {
        title: 'Barbershop 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda cum ipsa ipsam maxime, magni qui nulla aspernatur inventore quos quo incidunt unde placeat expedita harum et! Perferendis, dolores possimus.',
        img: 'https://p4.wallpaperbetter.com/wallpaper/339/998/542/space-landscape-planet-1920-x-1080-wallpaper-preview.jpg',
        github: '',
        live: ''
    }
  ]

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === SliderItem.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? SliderItem.length - 1 : prevSlide - 1));
  };

  return (
    <Screen>
        <div className='Projects'>
            <h1 style={{ marginTop: 50}}>Projects</h1>
            <div className='ProjectsSlider'>
                {SliderItem.map((Item,Index) => (
                    <div key={Index} className={`ProjectItem ${Index === currentSlide ? 'active' : ''}`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <img src={Item.img}/>
                    <div className='ProjectText'>
                        <h1>{Item.title}</h1>
                        <p>{Item.text}</p>
                        <div className='ProjectButton'>
                            <Button Img={<Code Color='none'/>} Text={'Code'} Link={Item.github}/>
                            <Button Img={<Computer Color='none'/>} Text={'Live View'} Class={'live'} Link={Item.live}/>
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