interface GenderButtonProps {
  gender: string;
  onSelection: any;
}

export function GenderButton({
  gender,
  onSelection,
}: GenderButtonProps): JSX.Element {
  return <button onClick={onSelection}>{gender}</button>;
}
