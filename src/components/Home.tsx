import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div``;

const Title = styled.h1`
  margin-top: 10px;
  padding: 20px 100px;
  font-size: 50px;
  border-radius: 15px;
  color: white;
  background-color: tomato;
  margin-bottom: 20px;
`;

const Items = styled.div``;

const Item = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #3498db;
  margin-bottom: 5px;
  border-radius: 20px;
  a {
    gap: 10px;
    display: flex;
    align-items: center;
    padding: 20px 150px;
    transition: color 0.2s ease-in;
    color: white;
    &:hover {
      color: tomato;
    }
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Home() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const getCoins = async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/coins");
    const json = await response.json();
    setCoins(json.slice(0, 100));
  };
  useEffect(() => {
    getCoins();
  }, []);
  return (
    <Wrapper>
      <Header>
        <Title>테스트 페이지</Title>
      </Header>
      <Items>
        {coins.map((coin) => (
          <Item key={coin.id}>
            <Link to={`/${coin.id}`}>
              <Img
                src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
              />
              {coin.name}({coin.symbol})
            </Link>
          </Item>
        ))}
      </Items>
    </Wrapper>
  );
}
export default Home;
