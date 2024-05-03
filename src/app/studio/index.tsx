'use client'

export default function Studio({ children }: { children: any; }) {
    return (
        <div className="fixed z-20 w-screen h-screen top-0">    
            {children}
        </div>
    )

}