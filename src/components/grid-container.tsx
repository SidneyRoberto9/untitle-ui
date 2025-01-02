import { ReactNode } from "react"

interface GridContainerProps {
  children: ReactNode
  className?: string
}

const GridContainer = ({ children, className }: GridContainerProps) => {
  return <div className="max-w-container mx-auto w-full px-4">{children}</div>
}

export default GridContainer
