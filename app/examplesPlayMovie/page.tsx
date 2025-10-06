'use client';

import type { ReactNode, MouseEventHandler } from 'react';

// 1) Reusable Button component (typed props)
type ButtonProps = {
  // If your handler doesn't use the event, () => void is simplest:
  // onClick: () => void;
  // If you want full DOM typing, use MouseEventHandler:
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

function Button({ onClick, children }: ButtonProps) {
  return (
    <button 
        onClick={onClick}
        className="px-3 py-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
    >
      {children}
    </button>
  );
}

// 2) Play button (receives data as prop, passes handler as prop)
type PlayButtonProps = { movieName: string };

function PlayButton({ movieName }: PlayButtonProps) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }
  return (
    <Button onClick={handlePlayClick}>
      Play “{movieName}”
    </Button>
  );
}

// 3) Upload button (inline handler)
function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

// 4) Toolbar that composes both
export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}