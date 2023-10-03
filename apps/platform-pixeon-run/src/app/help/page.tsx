import { Topbar } from '@/components/topbar'
import { HelpLogo } from '@/icons'
import { getAppInfo } from '@/lib/appInfo'

import { Text } from 'harmony-theme'
import BackButton from './components/BackButton'

export default function Run() {
  const { version } = getAppInfo()
  return (
    <>
      <Topbar version={version}></Topbar>
      <div className="pl-6 pt-6 min-w-full">
        <BackButton />
      </div>
      <div className="min-w-full flex-1 flex flex-col items-center justify-center text-center">
        <HelpLogo />
        <div>
          <Text typography="h4">
            Está com dúvidas sobre como usar a nossa Plataforma?
          </Text>
        </div>
        <div>
          <Text typography="body2">
            Entre em contato com nosso suporte para que possamos ajudar.
            <br />
            loremipsum@pixeon.com
          </Text>
        </div>
      </div>
    </>
  )
}
