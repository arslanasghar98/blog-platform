import supabase from "../config/supabaseClient";

export const login = async (payload) => {
  const response = await supabase.auth.signInWithPassword({
    email: payload?.email,
    password: payload?.password,
  });
  return response;
};

export const signup = async (payload) => {
  const response = await supabase.auth.signUp({
    email: payload?.email,
    password: payload?.password,
    options: {
      data: {
        first_name: "John",
        age: 27,
      },
    },
  });
  return response;
};

export const insertUser = async (payload) => {
  const response = await supabase.from("Users").insert([payload]).select();
  return response;
};

export const insertBlog = async (payload) => {
  const response = await supabase.from("blogs").insert([payload]).select();
  return response;
};

export const getBlogs = async (payload) => {
  const response = await supabase
    .from("blogs")
    .select(payload, { count: "exact" });
  return response;
};
