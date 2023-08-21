import styled from "styled-components";

export const LabelGroup = styled.label`
  background: #fff;
  box-shadow: 0 0.2rem 0.8rem 0 #0000001a;
  border-radius: 0.4rem;

  height: inherit;

  display: flex;
  align-items: center;
  padding-inline: 1.6rem;

  > svg {
    position: relative;
    font-size: 1.8rem;
    color: var(--text-3);
    margin-right: 0.8rem;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: inherit;
  background: transparent;
  font-size: 1.4rem;
  font-weight: 400;

  border: 0;
  outline: 0;

  padding-block: 1.6rem;
  box-shadow: 0 0.2rem 0.4rem 0 #0000000d;
  text-overflow: ellipsis;

  &::placeholder {
    color: var(--text-3);
  }
`;
