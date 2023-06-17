import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // redireciona o usuário para a rota root da url da aplicação
  const redirectUrl = new URL('/', request.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      // criação de cookie
      'Set-Cookie': 'token=; Path=/; max-age=0', // o Path=/ significa que o cookie estará disponível em toda aplicação. No max-age=0 apaga o cookie de dentro do navegador
    },
  })
}
