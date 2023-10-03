import { Topbar } from '@/components/topbar'
import { getAppInfo } from '@/lib/appInfo'
import HelpToolbarButton from './components/HelpToolbarButton'

export default function Run() {
  const { version } = getAppInfo()
  return (
    <Topbar className="dark:bg-purple-800" version={version}>
      <HelpToolbarButton />
    </Topbar>
  )
}
