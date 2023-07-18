import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.div`
  font-size: ${({ size }) => (size ? "16px" : "2220px")};
  color: #fff;
`;

export default ({ href, children }) => {
  return (
    <Link href={href}>
      <StyledLink size>{children}</StyledLink>
    </Link>
  );
};
