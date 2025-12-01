import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

const loadingStates = [
  {
    text: "Welcome to my portfolio...",
  },
  {
    text: "Perfecting pixel alignment... ",
  },
  {
    text: "Explaining why it works on my machine...",
  },
  {
    text: "Refactoring code I just wrote",
  },
  {
    text: "Installing one more npm package...",
  },
  {
    text: "Pretending dark mode makes me code better.",
  },
  {
    text: "Debugging the debugger.",
  },
  {
    text: "Whispering to the terminal like it’s alive.",
  },
  {
    text: "Wondering if AI will replace me... or just help.",
  },
];

export function MultiStepLoader() {
  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center px-4">
      <Loader loadingStates={loadingStates} duration={1000} loading={true} />
    </div>
  );
}
