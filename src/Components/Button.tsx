import { type ReactNode } from 'react'

interface Props {
  Img?: ReactNode
  Text: string
  Class?: string
  Link: string
}

function Button ({ Img, Text, Class, Link }: Props) {
  return (
    <a href={Link} className={`Button ${Class ?? ''}`}>{Img}{Text}</a>
  )
}

export default Button
