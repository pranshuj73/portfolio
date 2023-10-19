import Section from "@/components/Section";
import { Link } from "@nextui-org/link";

export default function Contact() {
	return (
		<Section id="contact">
			<h1 className="text-6xl font-semibold mb-3 uppercase flex flex-col items-center">
				<span className="my-2">Got something in mind?</span>
				<span className="my-2">Let's Talk.</span>
			</h1>
			<h3 className="mt-4 mb-2">Drop me an email:</h3>
			<Link className="text-xl font-medium border-b-large border-dashed border-black border-opacity-30 hover:border-opacity-80 duration-400 transition-all ease-in-out" href="mailto:hello@pranshujha.com" color="foreground" isExternal showAnchorIcon>
				<span className="mt-1 mr-1">hello@pranshujha.com</span>
			</Link>
		</Section>
	)
}