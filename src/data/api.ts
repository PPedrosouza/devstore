import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  console.log('Fazendo requisição para:', url.toString())
  console.log('Configurações:', init)
  
  return fetch(url, init)
}