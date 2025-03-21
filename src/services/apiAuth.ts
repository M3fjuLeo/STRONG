import { SignUpProps } from "../authentication/useSignup";
import supabase from "./supabase";

export interface LoginProps {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginProps) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signup({ fullName, email, password }: SignUpProps) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function updateUser({ fullName, email, password }: SignUpProps) {
  console.log(password);
  const { data, error } = await supabase.auth.updateUser({
    email,
    password,
    data: { fullName },
  });

  if (error) throw new Error(error.message);
  console.log(data);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
