import { v4 as uuidv4 } from "uuid";
import AccordionSection from "@/components/AccordionSection";
import FAQsections from "@/FAQsections";

export default function Home() {
	return (
		<div className="flex bg-gradient-to-b from-gray-50 to-[#d2d6db] p-4">
			<div className="flex flex-col bg-white rounded gap-7 p-4 py-12 tablet:rounded-md tablet:py-16 tablet:gap-16 desktop:p-24">
				<h1 className="font-semibold text-3xl text-center text-neutral-900 tablet:text-5xl">
					Frequently asked questions
				</h1>
				<div className="font-normal text-lg text-center text-neutral-600 mb-2 tablet:text-xl">
					Choose any questions you need
				</div>

				<div className="flex flex-col gap-7">
					{FAQsections.map((section, index) => (
						<>
							<AccordionSection
								key={uuidv4()}
								title={section.title}
								content={section.content}
								id={index}
							/>
							{index < FAQsections.length - 1 && (
								<hr className="flex h-px bg-neutral-300 self-stretch" />
							)}
						</>
					))}
				</div>
				<div className="flex flex-col justify-center gap-4 self-stretch p-4 rounded-lg border border-solid border-neutral-200 tablet:flex-row tablet:justify-between tablet:p-8">
					<div className="flex flex-col justify-center gap-2">
						<span className="font-semibold text-xl text-neutral-900">
							Can’t find the answer you’re looking for?
						</span>
						<span className="font-normal text-base">
							Reach out to our&nbsp;
							<span className="text-indigo-700">
								<a href="/">customer support&nbsp;</a>
							</span>
							team.
						</span>
					</div>

					<button className="btn-indigo flex justify-center items-center self-stretch font-normal text-base text-white bg-indigo-700 px-5 py-3 rounded hover:bg-indigo-800 focus:bg-indigo-800">
						Get in touch
					</button>
				</div>
			</div>

			<div className="credits">
				A challenge by&nbsp;
				<a
					href="https://www.greatfrontend.com/projects?ref=challenges"
					target="_blank"
				>
					GreatFrontEnd Projects
				</a>
				. Built by&nbsp;
				<a
					href="https://www.greatfrontend.com/projects/u/farhads"
					target="_blank"
				>
					Farhad Sadig Zada
				</a>
				.
			</div>
		</div>
	);
}
