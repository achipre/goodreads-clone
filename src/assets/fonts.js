import { Raleway, Poppins, Maitree } from "next/font/google";

export const ralewayLigth = Raleway({ subsets: ["latin"], weight: "100" });
export const ralewayBold = Raleway({ subsets: ["latin"], weight: "500" });
export const poppisLight = Poppins({ subsets: ["latin"], weight: "200" });
export const poppisBold = Poppins({ subsets: ["latin"], weight: "500", display:'swap' });
export const maitreeBold = Maitree({ subsets: ["latin"], weight: "300", display:'swap' });
