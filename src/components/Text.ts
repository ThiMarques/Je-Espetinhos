import styled from 'styled-components';
interface TextProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.text<TextProps>`
  font-family: ${({ weight }) => weight ? `GenrealSans-${weight}` : 'GenrealSans-400'};
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
`;
