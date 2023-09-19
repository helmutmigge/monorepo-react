import {Topbar}  from '@/components/topbar'
import { GoQuestionIcon } from '@/icons'
import {getAppInfo} from '@/lib/appInfo'

import { Tooltip, IconToolbarButton } from 'harmony-theme'


export default function Run() {
  const { version } = getAppInfo()
  return (
      <Topbar version={version}>
        <Tooltip multiline content={'Tooltip test'}>
          <IconToolbarButton variant='Secondary-Small'><GoQuestionIcon /></IconToolbarButton>
        </Tooltip>      
        <Tooltip multiline variant='OnColor' content={'Tooltip test'}>
          <IconToolbarButton variant='Secondary-Small'><GoQuestionIcon /></IconToolbarButton>
        </Tooltip>  

      </Topbar>      
  )
}
