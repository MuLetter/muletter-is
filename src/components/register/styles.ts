import styled from "styled-components";

export const RegisterCont = styled.form`
  width: 1280px;
  margin: 60px auto;
  height: calc(100vh - 120px);
  min-height: calc(440px + 120px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MailBoxWrap = styled.div`
  position: relative;

  width: 1280px;
  height: calc(100vh - 120px);
  min-height: 440px;
  max-height: 820px;

  & .mailbox-content {
    display: flex;
    flex-direction: column;
  }
`;
