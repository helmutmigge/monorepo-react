'use client'

import { GoQuestionIcon } from "@/icons"
import { IconToolbarButton, Tooltip } from "harmony-theme"
import { useRouter } from 'next/navigation'

export default function HelpToolbarButton() {
    const router = useRouter()
    return (
        <Tooltip multiline content={'Ajuda'}>
            <IconToolbarButton variant='Secondary-Small' onClick={()=> router.push('/help')}><GoQuestionIcon /></IconToolbarButton>
        </Tooltip>
    )
  }