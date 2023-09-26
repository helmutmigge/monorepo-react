import {Topbar}  from '@/components/topbar'
import { GoQuestionIcon } from '@/icons'
import {getAppInfo} from '@/lib/appInfo'

import { Tooltip, IconToolbarButton } from 'harmony-theme'
import HelpToolbarButton from './components/HelpToolbarButton'


export default function Run() {
  const { version } = getAppInfo()
  return (
      <Topbar className='dark:bg-purple-800' version={version}>
        <HelpToolbarButton/>
      </Topbar>      
  )
}
