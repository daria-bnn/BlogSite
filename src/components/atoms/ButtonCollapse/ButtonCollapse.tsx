import React, { FC, ReactNode, useCallback } from 'react'
import Button from 'react-bootstrap/Button'

interface ButtonCollapse {
  children: ReactNode
  isOpen: boolean
  ariaControls: string
  onClick: (value: boolean) => void
}

const ButtonCollapse: FC<ButtonCollapse> = ({
  children,
  isOpen,
  onClick,
  ariaControls,
}) => {
  const clickHandler = useCallback(() => onClick(!isOpen), [isOpen, onClick])

  return (
    <Button
      onClick={clickHandler}
      aria-controls={ariaControls}
      aria-expanded={isOpen}
      variant="link"
      className="px-0 py-2"
    >
      {children}
    </Button>
  )
}

export default ButtonCollapse
