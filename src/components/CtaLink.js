import { Link } from '@reach/router';
import styled from 'styled-components';

const CtaLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin-bottom: 3rem;
  border-radius: 4px;
  padding: 1rem 3rem;
  text-decoration: none;
  color: #ffffff;
  background-color: #000000;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid #ffffff;
    border-radius: 2px;
  }
`;

export { CtaLink };
