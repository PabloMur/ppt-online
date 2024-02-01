import { useRouter } from "next/navigation";
export const useGoTo = () => {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
};
