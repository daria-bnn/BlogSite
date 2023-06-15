import { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import Avatar from '../../atoms/Avatar/Avatar'

interface UserProfileProps {
  nameUser: string
  widthAvatar: number
  fontSize: number
}

const UserProfile: FC<UserProfileProps> = ({
  nameUser,
  widthAvatar,
  fontSize,
}) => (
  <Row className="pb-3">
    <Col xs="auto">
      <Avatar width={widthAvatar} />
    </Col>
    <Col
      xs="auto"
      className="m-0"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <p className={`fs-${fontSize} m-0`}> {nameUser}</p>
    </Col>
  </Row>
)

export default UserProfile
