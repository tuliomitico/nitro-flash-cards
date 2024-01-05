import { ElementType, HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
    return (
        <button 
            className='py-3 px-5 flex items-center gap-3 font-bold text-sm bg-marine-500 rounded-md text-mirage-50 hover:bg-marine-400 transition-colors' {...props} 
        />
    )
}

export function ButtonText({ children } : { children?: ReactNode }) {
    return (
        <span>{children}</span>
    )
}

export function ButtonIcon({ icon: Icon } : { icon: ElementType }) {
    return <Icon className={"w-5 h-5"} />
}