import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import styled from "styled-components";
import { device } from "@/utils/mediaQueries";
import HomeContent from "@/components/Home/HomeContent";

export default function Home() {
  const router = useRouter();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push({ pathname: "/survey" });
    }
  }, [isConnected]);

  return (
    <HomeContainer>
      <HomeContent />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 24px 24px;
  }
`;
