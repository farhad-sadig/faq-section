"use client";
import { useState } from "react";
import ExpandIcon from "./ExpandIcon";
import CollapseIcon from "./CollapseIcon";

const AccordionSection = ({ title, content, id }) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSection = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex gap-4 rounded-xl">
			<div className="flex flex-col gap-2">
				<button
					type="button"
					role="button"
					className="flex self-stretch justify-between"
					onClick={toggleSection}
					aria-expanded={isOpen.toString()}
					aria-controls={`faq-${id}`}
				>
					<span className="font-medium text-lg text-neutral-900">{title}</span>
					{isOpen ? <CollapseIcon /> : <ExpandIcon />}
				</button>

				<p
					className={`font-normal text-base text-neutral-600 ${
						isOpen ? "" : "hidden"
					}`}
					id={`faq-${id}`}
				>
					{content}
				</p>
			</div>
		</div>
	);
};

export default AccordionSection;
