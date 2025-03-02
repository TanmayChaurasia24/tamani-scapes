export interface typeUseWallpaper {
  url: string;
  name: string;
}

interface fullwallpaper extends typeUseWallpaper {
  liked: Boolean;
  suggested: Boolean;
  library: boolean;
}

export const useSuggestedWallpaper = () => {
  const wallpapers = usewallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.suggested);
}
export const useLikedWallpaper = () => {
  const wallpapers = usewallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.liked);
}
export const uselibraryWallpaper = () => {
  const wallpapers = usewallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.library);
}

export function usewallpapers(): fullwallpaper[] {
  return [
    {
      name: "image 1",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/rXUv9c6gTgWqdctcA_yyog",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      name: "image 2",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/z7_H3IZ7TuiYtwA08vT7fw",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      name: "image 3",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/fclgnXKRSo2lj_G9F2IUZQ",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      name: "image 4",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/0AoDd-zsT-yCp6clFSBJeg",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      name: "image 5",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Oq96n85aSNS0npqfr9O51w",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      name: "image 6",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ArhA8xCARXug9W5LvB8KuQ",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      name: "image 7",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/1ITMHeI-SN22q5w37lQ1TA",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      name: "image 8",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/9t6b0p5CSEuSZqZjhxvuIQ",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      name: "image 9",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/4OHXX9ZBRQ69GILn8Iqj3g",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      name: "image 10",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/gTq2FVVmRDeZUkagSH0c7Q",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      name: "image 11",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/OWwPHUmDTBCF_ZFiWymYjw",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      name: "image 12",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/WiQF-YufQae2QWVevD7FuQ",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      name: "image 13",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/CLXfRmhVTkSSubffQ-rEbA",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      name: "image 14",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/hkodyZCAT2uYbR16RkTjOw",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      name: "image 15",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/sYpqMrkMSH-Ao4f0nD00pQ",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      name: "image 16",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/JsLhh4xNRlmGDnXaRK8ayA",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      name: "image 17",
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/HEAhOOXdQcu8gR7RCJ17sw",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      name: "image 18",
      url: "https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
      liked: false,
      suggested: true,
      library: true,
    },
  ];
}
