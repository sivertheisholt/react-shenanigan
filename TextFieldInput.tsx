import React, { useMemo } from "react"
import { createIdGenerator } from "../../Utils/createIdGenerator"

const idGenerator = createIdGenerator("textInput")

export interface TextFieldInputProps {
	value: string
	onChange: () => unknown
	label?: string
	labelPosition?: "top" | "bottom" | "left" | "right"
	placeholder?: string
	wrappers?: boolean
	labelWrapper?: (props: { children: React.ReactNode }) => JSX.Element
	inputWrapper?: (props: { children: React.ReactNode }) => JSX.Element
	mainWrapper?: (props: { children: React.ReactNode }) => JSX.Element
}

const TextFieldInputComponent = ({
	value,
	onChange,
	label = "",
	labelPosition = "left",
	placeholder = "",
	wrappers = false,
	labelWrapper = () => <React.Fragment></React.Fragment>,
	inputWrapper = () => <React.Fragment></React.Fragment>,
	mainWrapper = () => <React.Fragment></React.Fragment>,
}: TextFieldInputProps) => {
	// Generate unique ID
	const id = useMemo(idGenerator, [])

	const labelElement = (
		<label
			className={`${
				labelPosition === "top"
					? "pb-2"
					: labelPosition === "bottom"
					? "pt-2"
					: labelPosition === "right"
					? "ps-2"
					: "pe-2"
			}`}
			htmlFor={id}
		>
			{label}
		</label>
	)

	const inputElement = (
		<input
			placeholder={placeholder}
			id={id}
			type="text"
			value={value}
			onChange={onChange}
		/>
	)

	if (wrappers) {
		const LabelWrapper = labelWrapper
		const InputWrapper = inputWrapper
		const MainWrapper = mainWrapper
		return (
			<MainWrapper>
				<LabelWrapper>{labelElement}</LabelWrapper>
				<InputWrapper>{inputElement}</InputWrapper>
			</MainWrapper>
		)
	}
	return (
		<div
			className={`d-flex ${
				labelPosition === "top"
					? "flex-column"
					: labelPosition === "bottom"
					? "flex-column-reverse"
					: labelPosition === "right"
					? "flex-row-reverse"
					: "flex-row"
			}`}
		>
			{labelElement}
			{inputElement}
		</div>
	)
}

export const TextFieldInput = React.memo(TextFieldInputComponent)
