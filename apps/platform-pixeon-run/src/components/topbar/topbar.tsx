import { Logo } from "@/icons"
import { Text } from "harmony-theme"
import {twMerge} from "tailwind-merge"

export type TopbarPorps = {
    title?: string
    version?:  string
    subtitle?: string
    children: React.ReactNode
    className?: string | undefined
}

function Topbar({title, subtitle, version,className, children}: TopbarPorps){
    return (
        <div className={twMerge('flex h-[4.5rem] w-screen justify-between items-center box-border bg-neutral-1 py-[0.75rem] px-[2rem] shadow', className)}>
            <div className="flex items-end gap-1">
                <Logo/>
                {version && <Text typography="caption">{version}</Text>}
                <Text typography="h4" className="bg-neutral-10">{title}</Text>                                              
            </div>
            <div className="flex items-center gap-[1.25rem]">
                {children}
            </div>
        </div>
    )
}

export default Topbar