import { api } from '@/src/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  // redireciona o usuário para a rota root da url da aplicação
  const redirectURL = redirectTo ?? new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectURL, {
    headers: {
      // criação de cookie
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`, // o Path=/ significa que o cookie estará disponível em toda aplicação
    },
  })
}
