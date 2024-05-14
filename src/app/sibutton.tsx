'use client';

import { signIn } from '@/auth';

export function SignIn() {
  const handleSubmit = async () => {
    await signIn('google');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Signin with Google</button>
    </form>
  );
}
