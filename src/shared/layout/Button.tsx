import React from "react";
import styled, { css } from "styled-components";
interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  secondary?: boolean;
  onClick?: (e: any) => void;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  if (props.secondary) {
    return (
      <StyledButton bgColor={props.bgColor} secondary={props.secondary} href={props.href} onClick={props.onClick}>
        {props.children}
      </StyledButton>
    );
  }
  return (
    <StyledButton bgColor={props.bgColor} onClick={props.onClick} href={props.href}>
      {props.children}
    </StyledButton>
  )
}

const clickerStyles = css`
	appearance: none;
	-moz-appearance: none;
  -webkit-appearance: none;
	/* background-color: var(--tBase); */
	color: var(--white);
	display: inline-flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	height: 5rem;
	width: 15rem;
	margin: 1rem;
	white-space: nowrap;
	line-height: normal;
	text-decoration: none;
	font-size: 1.6rem;
	outline: none;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	&:hover {
		transition-duration: 0;
		cursor: pointer;
		background-color: var(--tDark);
	}
	&:active {
		transition-duration: 0;
		background-color: var(--tDarker);
	}
`;

const secondaryClickerStyles = css`
	background-color: var(--pLight);
	color: var(--pText);
	&:hover {
		transition-duration: 0;
		cursor: pointer;
		background-color: var(--pBase);
	}
	&:active {
		transition-duration: 0;
		background-color: var(--pDark);
	}
`;

export const generalClickerStyles = css<ButtonProps>`
  background-color: ${props => props.bgColor ?? "var(--tBase)"};
  ${clickerStyles};
	${props => {
    return (props.secondary && secondaryClickerStyles)
  }};
`;

const StyledButton = styled.a`
	${generalClickerStyles};
`;

export default Button;