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
		<div className="flex gap-4 rounded-xl w-full">
			<div className="flex flex-col w-full gap-2">
				<button
					type="button"
					role="button"
					className="flex justify-between w-full"
					onClick={toggleSection}
					aria-expanded={isOpen.toString()}
					aria-controls={`faq-${id}`}
				>
					<span className="font-medium text-lg text-neutral-900">{title}</span>
					{isOpen ? <CollapseIcon /> : <ExpandIcon />}
				</button>

				<p
					className={`text-base text-neutral-600 ${isOpen ? "" : "hidden"}`}
					id={`faq-${id}`}
				>
					{content}
				</p>
			</div>
		</div>
	);
};

export default AccordionSection;
