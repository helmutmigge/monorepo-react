'use client'
import { ArrowBackIcon } from '@/icons'
import { BaseButton, Text } from 'harmony-theme'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <BaseButton variant="Compact" onClick={() => router.back()}>
      <ArrowBackIcon width="1.5rem" height="1.5rem" />
      <Text typography="button">Voltar</Text>
    </BaseButton>
  )
}
