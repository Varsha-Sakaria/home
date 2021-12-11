import cookie from 'cookie'

export async function handle({ request, resolve }) {
  const cookies = cookie.parse(request.headers.cookie || { user: null })

  // do some stuff before
  request.locals.user = cookies.user

  const response = await resolve(request)
  var date = new Date();
  date.setTime(date.getTime() + (60 * 1000));
  // do some stuff after
  response.headers['set-cookie'] = `user=${request.locals.user || ''}; path=/; HttpOnly`

  return response
}

export async function getSession(request) {
  return {
    user: request.locals.user
  }
} 