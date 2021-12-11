export async function get(request) {
  console.log(request);
    request.locals.user = null
  
    return {
      status: 302,
      headers: {
        location: '/',
       }
    }
  } 