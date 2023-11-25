import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_APP_API_URL;

export async function PostLogin(cred: ILoginState) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cred)
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    localStorage.setItem('accessToken', data.data.token_access);
    localStorage.setItem('username', data.data.username);
    window.location.href = "/";
  } catch (err) {
    Swal.fire({
      title: "Failed to login",
      text: `${err}`,
      icon: "error",
    });
  }
}
