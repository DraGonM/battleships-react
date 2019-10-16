import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexColumn)`
  align-items: center;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormColumn = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FormLabel = styled.label`
    font-size: 20px;
    margin: ${props => props.theme.padding};
`

export const FormError = styled(ErrorMessage)`
  background-color: ${props => props.theme.colors.input};
  color: ${props => props.theme.colors.error};
  font-size: 16px;
  font-weight: 600;
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  border: 1px solid ${props => props.theme.colors.error};
  border-radius: ${props => props.theme.borderRadius};
`

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem;
`

export const PrimaryButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonFont};
  font-size: 16px;
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  text-align: center;
  text-decoration: none;

  &:disabled {
      filter: brightness(75%);
  }
`;

