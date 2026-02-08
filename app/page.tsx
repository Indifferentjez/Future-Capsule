import { Hero } from "@/components/landing/Hero";
import { QuickPicks } from "@/components/landing/QuickPicks";
import { SignInPrompt } from "@/components/landing/SignInPrompt";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <QuickPicks />
      <SignInPrompt />
    </main>
  );
}
