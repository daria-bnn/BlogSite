import { FC } from 'react'
import { Image } from 'react-bootstrap'

interface AvatarProps {
  width: number
}

const Avatar: FC<AvatarProps> = ({ width }) => (
  <Image src="avatar.svg" width={width} />
)

export default Avatar
