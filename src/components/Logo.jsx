import LogoPng from '@/app/logo.png'
import Image from 'next/image'
export function Logomark(props) {
  return (
    <Image src={LogoPng} className='w-8' />
  )
}

export function Logo(props) {
  return (
    <Image src={LogoPng} className='w-8' />
  )
}
