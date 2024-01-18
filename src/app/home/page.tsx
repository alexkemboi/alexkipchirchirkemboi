import Navbar from "@/components/Navbar";
import Home from "../../components/Home";
import Link from "next/link";
import Footer from "@/components/Footer";
const page = () => {
	return (
		<div className="flex flex-col min-h-screen bg-sky-950 ">
			<main className="flex-1 bg-sky-950 m-4">
				<Home />
			</main>
		</div>
	);
};
export default page;
