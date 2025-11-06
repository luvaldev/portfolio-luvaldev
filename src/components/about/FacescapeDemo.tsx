'use client';
import { Facescape } from '@/components/ui/facescape';

export default function FacescapeDemo() {
  const skills = [
    {
      src: 'https://cdn.simpleicons.org/java/E76F00',
      alt: 'Java',
      fallback: 'Java',
      name: 'Java',
    },
    {
      src: 'https://cdn.simpleicons.org/bun/FBF0DF',
      alt: 'Bun',
      fallback: 'Bun',
      name: 'Bun',
    },
    {
      src: 'https://cdn.simpleicons.org/cplusplus/649AD2',
      alt: 'C++',
      fallback: 'C++',
      name: 'C++',
    },
    {
      src: 'https://cdn.simpleicons.org/astro/FF5D01',
      alt: 'Astro',
      fallback: 'As',
      name: 'Astro',
    },
    {
      src: 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
      alt: 'VSCode',
      fallback: 'VS',
      name: 'VSCode',
    },
    {
      src: 'https://cdn.simpleicons.org/figma/F24E1E',
      alt: 'Figma',
      fallback: 'Fg',
      name: 'Figma',
    },
    {
      src: 'https://cdn.simpleicons.org/obsidian/9B82F6',
      alt: 'Obsidian',
      fallback: 'Ob',
      name: 'Obsidian',
    },
    {
      src: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF',
      alt: 'Photoshop',
      fallback: 'Ps',
      name: 'Photoshop',
    },
    {
      src: 'https://cdn.simpleicons.org/adobexd/FF61F6',
      alt: 'Adobe XD',
      fallback: 'Xd',
      name: 'Adobe XD',
    },
    {
      src: 'https://cdn.simpleicons.org/html5/E34F26',
      alt: 'HTML',
      fallback: 'H5',
      name: 'HTML',
    },
    {
      src: 'https://cdn.simpleicons.org/css3/1572B6',
      alt: 'CSS',
      fallback: 'C3',
      name: 'CSS',
    },
    {
      src: 'https://cdn.simpleicons.org/javascript/F0DB4F',
      alt: 'JavaScript',
      fallback: 'JS',
      name: 'JavaScript',
    },
    {
      src: 'https://cdn.simpleicons.org/nodedotjs/539E43',
      alt: 'Node.js',
      fallback: 'N',
      name: 'Node.js',
    },
    {
      src: 'https://cdn.simpleicons.org/docker/2496ED',
      alt: 'Docker',
      fallback: 'Dc',
      name: 'Docker',
    },
    {
      src: 'https://cdn.simpleicons.org/wireshark/1679A7',
      alt: 'Wireshark',
      fallback: 'Ws',
      name: 'Wireshark',
    },
    {
      src: 'https://cdn.simpleicons.org/flutter/02569B',
      alt: 'Flutter',
      fallback: 'Fl',
      name: 'Flutter',
    },
    {
      src: 'https://cdn.simpleicons.org/androidstudio/3DDC84',
      alt: 'Android Studio',
      fallback: 'AS',
      name: 'Android Studio',
    },
  ];


  const avatars = [...skills];

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      {}
      <Facescape variant="squircle" avatars={avatars} colorDuration={3000} />
    </div>
  );
}
