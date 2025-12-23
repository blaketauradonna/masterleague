import { serialize } from 'cookie';

export async function POST() {
  // Clear the session cookie by setting it to expire immediately
  const cookie = serialize('session', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0, // immediately expires
  });

  return new Response(JSON.stringify({ message: 'Logged out' }), {
    status: 200,
    headers: { 'Set-Cookie': cookie },
  });
}
