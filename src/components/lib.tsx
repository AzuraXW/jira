import styled from "@emotion/styled";

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  > * {
    font-size: 18px;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) => (props.gap ? props.gap + "rem" : "")};
  }
`;
