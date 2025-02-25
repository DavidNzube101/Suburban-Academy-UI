import { useRouter } from 'vue-router'

export function useAuth() {
  const router = useRouter()

  const logout = () => {
    // Remove auth token
    localStorage.removeItem('auth_token')
    // Redirect to login
    router.push('/login')
  }

  return {
    logout
  }
}