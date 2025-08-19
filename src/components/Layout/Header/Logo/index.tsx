import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
	return (
		<Link href="/">
			<Image
				src="/traders_circle_logo.svg"
				alt="logo"
				width={80}
				height={80}
				// style={{ width: "auto", height: "auto" }}
				quality={100}
				className="w-18 h-15"
			/>
		</Link>
	);
};

export default Logo;
