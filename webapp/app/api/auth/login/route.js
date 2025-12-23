import bcrypt from 'bcryptjs';
import { openDb } from '@/lib/db';
import { serialize } from 'cookie';

export async function POST(req) {
  const { email, password } = await req.json();
  const db = await openDb();

  const user = await db.get('SELECT * FROM users WHERE email = ?', email);
  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  if(!user.password_hash){
    throw new Error('Password hash is missing for the user');
  }
  
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
  }

  // Create a session cookie
  const cookie = serialize('session', user.id.toString(), {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });

  return new Response(JSON.stringify({ message: 'Login successful' }), {
    status: 200,
    headers: { 'Set-Cookie': cookie },
  });
}
