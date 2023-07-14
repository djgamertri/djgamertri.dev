import {ReactNode} from 'react'

interface Props{
    Img?: ReactNode,
    Text: string,
    Class?: string,
    Link: string
}

function Button({Img, Text, Class, Link}:Props) {
  return (
    <a href={Link}><button className={`Button ${Class || ''}`}>{Img}{Text}</button></a>
  )
}

export default Button