import { StartButton } from "@/components/buttons/StartButton";
import { HandsContainer } from "@/components/ui/HandsContainer";
import { WelcomeTitle } from "@/components/ui/WelcomeTitle";
export default function Home() {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
      <WelcomeTitle></WelcomeTitle>
      <HandsContainer></HandsContainer>
      <StartButton></StartButton>
    </div>
  );
}
