import React from 'react';

type Person = {
  name: string;
  imageId: string;
};

type AvatarProps = {
  person: Person;
  size: number;
};

function getImageUrl(person: Person): string {
  return `https://i.imgur.com/${person.imageId}.jpg`;
}

function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}