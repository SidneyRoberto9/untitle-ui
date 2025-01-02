import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface GridContainerProps {
  children: ReactNode
  className?: string
}

const GridContainer = ({ children, className }: GridContainerProps) => {
  return (
    <div className={twMerge("max-w-container mx-auto w-full px-3", className)}>
      {children}
    </div>
  )
}

export default GridContainer
