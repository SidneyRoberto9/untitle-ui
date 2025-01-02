"use client"

import { useState } from "react"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

interface QuestionProps {
  title: string
  response: string
  isOpen?: boolean
}

const Question = ({ response, title, isOpen = false }: QuestionProps) => {
  const [open, setOpen] = useState<boolean>(isOpen)

  const handleOpenQuestion = () => setOpen(!open)

  const Icon = open ? FiMinusCircle : FiPlusCircle

  return (
    <div className="w-full pb-8 pt-6 first:pt-0 last:pb-0">
      <button className="flex w-full items-center justify-between">
        <h3 className="text-lg/normal font-semibold text-gray-900">{title}</h3>
        <Icon
          size={25}
          className="text-brand-600"
          onClick={handleOpenQuestion}
        />
      </button>
      {open && (
        <p className="mt-2 pr-12 leading-normal text-gray-600">{response}</p>
      )}
    </div>
  )
}

export default Question
