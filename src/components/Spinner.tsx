import styled, { keyframes } from "styled-components";
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    margin: 16px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid var(--light);
    border-right: 2px solid var(--light);
    border-bottom: 2px solid var(--light);
    border-left: 4px solid var(--primary);
    background: transparent;
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

export default function CustomLoader() {
    return (
        <div className="p2">
            <Spinner />
            <h6 className="text-center">loading...</h6>
        </div>
    );
}
