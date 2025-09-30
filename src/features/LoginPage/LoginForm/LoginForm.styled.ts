import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
    max-width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: #ef4444;
  margin-top: -0.25rem;
`

export const Alert = styled.div`
  padding: 0.875rem 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #991b1b;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

export const TestCredentials = styled.div`
  margin-top: 2rem;
  padding: 1.25rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`



export const TestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const TestItem = styled.div`
  font-size: 0.8125rem;
  color: #6b7280;
  font-family: var(--font-roboto-mono),sans-serif;
  padding: 0.5rem;
  background: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #374151;
  }

  strong {
    color: #1f2937;
    font-weight: 600;
  }
`