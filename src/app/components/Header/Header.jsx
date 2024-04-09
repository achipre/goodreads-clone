import Link from "next/link";
import { Raleway } from "next/font/google";
import { Poppins } from "next/font/google";
import { Logo } from "@/assets/Icons";

const ralewayLigth = Raleway({ subsets: ["latin"], weight: "100" });
const ralewayBold = Raleway({ subsets: ["latin"], weight: "500" });
const poppisLight = Poppins({ subsets: ["latin"], weight: "200" });

export const Header = () => {
	return (
		<nav className="flex justify-between items-center py-4 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-9 min-w-72">
			<Link href={'/'} className="w-8 xs:w-9 sm:w-10 md:w-11 lg:w-12">
        <Logo />
      </Link>
			<h1
				className={`${ralewayLigth.className} hidden cursor-default sm:block text-4xl [letter-spacing:-2px] sm:[letter-spacing:-3px] text-millbrook-900`}
			>
				good
				<span
					className={`${ralewayBold.className} text-millbrook-900 [letter-spacing:-2px] sm:[letter-spacing:-3px]`}
				>
					reads
				</span>
			</h1>
			<div className="flex gap-2 items-center">
				<span className={`${poppisLight.className} text-millbrook-900 text-xl sm:text-2xl`}>
					|
				</span>
				<p
					className={`${poppisLight.className} cursor-pointer text-millbrook-900 text-nowrap text-md xs:text-lg sm:text-xl md:text-2xl text-center px-4 py-1 hover:bg-millbrook-100`}
				>
					Log In
				</p>
				<Link
					href="/sign-up"
					className={`${poppisLight.className} cursor-pointer bg-millbrook-900 hover:bg-millbrook-700 px-3 py-1 text-millbrook-50 text-nowrap text-md xs:text-lg sm:text-xl md:text-2xl `}
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
};
