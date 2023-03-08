import React from "react";

interface ButtonTestProps {
	/**
	 * the content of the button
	 */
	content: string;
}

export const ButtonTest = ({ content }: ButtonTestProps) => {
	return <button>{content}</button>;
};
