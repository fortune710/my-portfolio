import { twMerge } from "tailwind-merge";

interface ContainerProps {
    children?: React.ReactNode;
    className?: string
}

export default function Container({ children, className }: ContainerProps) {

    const classes = twMerge("w-full bg-dark border border-dark-muted rounded-[40px] px-8 py-10", className)
    
    return (
        <div className={classes}>
            {children} 
        </div>
    )
}