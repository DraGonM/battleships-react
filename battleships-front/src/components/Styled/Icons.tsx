import styled from 'styled-components';

interface IconProps {
  icon: React.ReactNode;
  size?: number;
}

export const Icon: React.SFC<IconProps> = ({ icon: IconCmp, size = 1 }) => {
  return styled(IconCmp)`
    display: inline-flex;
    align-self: baseline;
    margin-right: 0.2rem;
    height: ${size}rem;
    width: ${size}rem;
  `;
};
