import { HTMLAttributes } from 'react'

interface TextProps extends HTMLAttributes<HTMLSpanElement> {}

export function Text(props: TextProps) {
    return <span {...props} />
}