import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
	return (
		<Link href="/">
			<Image
				src="/traders_circle_logo.svg"
				alt="logo"
				width={116}
				height={116}
				// style={{ width: "auto", height: "auto" }}
				quality={100}
				className=""
			/>
		</Link>
	);
};

export default Logo;
