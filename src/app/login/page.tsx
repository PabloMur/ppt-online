import { LoginForm } from "@/components/forms/LoginForm";
export default function Login() {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center">
      <h2 className="text-black">Login</h2>
      <LoginForm></LoginForm>
    </div>
  );
}
