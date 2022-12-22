// https://react-svgr.com/playground/
import * as React from 'react'
import anisayariImage from '../../public/anisayari-tall.png'
import Image from 'next/image'

const NotionAvatar = (props) => (
    <Image src={anisayariImage} alt="Anis AYARI" />
)

export default NotionAvatar
