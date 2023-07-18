import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Screen ({ children }: Props) {
  return (
    <div className='Screen'>
        {children}
    </div>
  )
}

export default Screen
