import styled from "styled-components";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      type="button"
      size={size}
      mode={primary?'primary':'secondary'}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{
  mode: "primary" | "secondary";
  size: "small" | "medium" | "large";
}>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${({ mode }) =>
    mode === "primary"
      ? `
      color: white;
      background-color: #1ea7fd;`
      : `
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;`}
  ${({ size }) => {
    switch (size) {
      case "large":
        return `font-size: 16px;
        padding: 12px 24px;`;
      case "small":
        return `font-size: 12px;
          padding: 10px 16px;`;
      case "medium":
      default:
        return `font-size: 14px;
            padding: 11px 20px;`;
    }
  }}
`;
