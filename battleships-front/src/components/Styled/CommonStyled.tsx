import { ErrorMessage, Form } from 'formik';
import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexColumn)`
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderContainer = styled(FlexRow)`
  justify-content: space-between;
`;

export const FormColumn = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: ${props => props.theme.colors.input};
  font-size: 20px;
  margin: ${props => props.theme.padding};
`;

export const FormLabel = styled(Label)`
  color: ${props => props.theme.colors.inputFont};
`;

export const FormError = styled(ErrorMessage)`
  background-color: ${props => props.theme.colors.input};
  color: ${props => props.theme.colors.error};
  font-size: 16px;
  font-weight: 600;
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  border: 1px solid ${props => props.theme.colors.error};
  border-radius: ${props => props.theme.borderRadius};
`;

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: ${props => props.theme.padding};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(85%);
  }

  &:disabled {
    filter: brightness(75%);
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.input};
  border: 1px solid ${props => props.theme.colors.darkPrimary};
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.input};
`;
