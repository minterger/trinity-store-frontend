import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();

  const user = reactive({
    username: "",
    email: "",
    uuid: "",
    avatar: "",
    admin: false,
    token: "",
  });

  const loading = ref(false);

  const setToken = (token) => {
    localStorage.setItem("auth", token);
    user.token = token;
  };

  const getToken = () => {
    const token = localStorage.getItem("auth");
    user.token = token;
  };

  const removeToken = () => {
    localStorage.removeItem("auth");
    user.token = "";
  };

  const login = async (dataUser) => {
    loading.value = true;
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });
      const data = await res.json();
      if (data.token) {
        setToken(data.token);
        getUser();
      }
      loading.value = false;
      return data;
    } catch (error) {
      loading.value = false;
      console.log(error.message);
      return error;
    }
  };

  const register = async (dataUser) => {
    loading.value = true;
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });
      const data = await res.json();
      if (data.token) {
        setToken(data.token);
        getUser();
      }
      loading.value = false;
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const getUser = async () => {
    if (!user.token) {
      getToken();
    }
    if (user.token) {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + "/user", {
          headers: {
            authorization: user.token,
          },
        });
        if (res.ok) {
          const data = await res.json();

          user.admin = data.admin;
          user.avatar = data.avatar;
          user.email = data.email;
          user.username = data.username;
          user.uuid = data.uuid;
        } else {
          closeSession();
        }
      } catch (error) {
        closeSession();
      }
    }
  };

  const closeSession = () => {
    user.admin = false;
    user.avatar = "";
    user.email = "";
    user.username = "";
    user.uuid = "";

    removeToken();

    router.push("/login");
  };

  return { loading, user, login, register, getUser, closeSession };
});
