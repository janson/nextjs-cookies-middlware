/* eslint-disable no-console */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();
  if (!request.cookies.has('experiments')) {
    console.log('***** Setting cookie: experiments *****');
    response.cookies.set('experiments', 'true');
  }
  return response;
};

export const config = {
  matcher: '/demo',
};
