import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const FormLabel = styled.label`
  font-size: ${prop => prop.$fontSize || '16px'};
  font-weight: ${prop => prop.$fontWeight || '400'};
  line-height: calc(20 / ${prop => parseInt(prop.$fontSize, 10) || '16'});
  color: ${theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
export const InputSettingEdit = styled.input`
  font-family: inherit;
  font-size: 16px;
  line-height: calc(20 / 16);
  padding: 11px 10px;
  color: ${theme.colors.primaryAccent};
  border: 1px solid ${theme.colors.secondaryLightBlue};
  border-radius: 6px;
  width: 100%;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.secondaryBlue};
  }
  &:not(:placeholder-shown):invalid {
    color: ${theme.colors.secondaryRed};
    border-color: ${theme.colors.secondaryRed};
  }
  ${props =>
    props.$error
      ? {
          color: 'red',
          borderColor: 'red',
          '&::placeholder': { color: 'red' },
        }
      : null}

  color: ${theme.colors.secondaryBlue};
  opacity: 0.6;

  &:focus,
  &:active {
    color: ${theme.colors.primaryAccent};
    opacity: 1;
  }
`;

export const InputError = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${theme.colors.secondaryRed};
`;

export const UseProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  /* margin-bottom: 20px; */
`;

export const UserProfileTitle = styled.p`
  font-size: 24px;
`;
export const UseProfileWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const UseProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 50%;
`;

export const UseProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 50%;
`;
