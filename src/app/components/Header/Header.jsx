import Link from "next/link";
import { Raleway } from "next/font/google";
import { Poppins } from "next/font/google";
import { Logo } from "@/assets/Icons";
import { ButtonPrimary } from "../Buttons/buttonPrimary";
import { ButtonSecondary } from "../Buttons/buttonSecondary";

const ralewayLigth = Raleway({ subsets: ["latin"], weight: "100" });
const ralewayBold = Raleway({ subsets: ["latin"], weight: "500" });
const poppisLight = Poppins({ subsets: ["latin"], weight: "200" });

export const Header = () => {
	return (
		<nav className="relative flex justify-between items-center py-4 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-9 min-w-72">
			<Link href={'/'} className="w-8 xs:w-9 sm:w-10 md:w-11 lg:w-12">
        <Logo />
      </Link>
			<h1
				className={`${ralewayLigth.className} hidden absolute right-1/2 translate-x-1/2 cursor-default sm:block text-4xl [letter-spacing:-2px] sm:[letter-spacing:-3px] text-millbrook-900`}
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
				<Link href='/log-in'
				>
					<ButtonSecondary title='Log In' />
				</Link>
				<Link
					href="/sign-up"
				>
					<ButtonPrimary>Sign Up</ButtonPrimary>
				</Link>
			</div>
		</nav>
	);
};
