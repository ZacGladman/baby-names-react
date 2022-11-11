import { AllBabyEntries } from "./AllBabyElements";
import { SearchBar } from "./SearchBar";

export function MainContent(): JSX.Element {
  return (
    <main>
        <SearchBar />
      <AllBabyEntries />
    </main>
  );
}
