import React from 'react'

interface Props {
  content: string
}

export const TypescriptComponent = ({ content }: Props) => (
  <blockquote>{content}</blockquote>
)
