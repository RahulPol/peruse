import React from 'react';
import styled from 'styled-components/native';

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space.sm};
`;

const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space.md};
`;

const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space.lg};
`;

const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space.sm};
`;

const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space.md};
`;

const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space.lg};
`;

const BottomSmall = styled.View`
  margin-bottom: ${(props) => props.theme.space.sm};
`;

export const Spacer = ({ variant }: { variant: string }) => {
  if (variant === 'top.medium') {
    return <TopMedium />;
  }
  if (variant === 'top.large') {
    return <TopLarge />;
  }
  if (variant === 'left.small') {
    return <LeftSmall />;
  }
  if (variant === 'left.medium') {
    return <LeftMedium />;
  }
  if (variant === 'left.large') {
    return <LeftLarge />;
  }
  if (variant === 'bottom.small') {
    return <BottomSmall />;
  }
  return <TopSmall />;
};
