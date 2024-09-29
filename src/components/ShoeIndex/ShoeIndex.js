import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';
import { QUERIES } from '../../constants';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <Breadcrumbs>
              <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale/shoes">
                Shoes
              </Breadcrumbs.Crumb>
            </Breadcrumbs>
            <Title>Running</Title>
          </div>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletMax} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & nav {
    display: none;
  }

  @media ${QUERIES.tabletMax} {
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;


      nav {
        display: flex;
      }
    }
  }

  @media ${QUERIES.phoneMax} {
    & > label {
      display: none;
    }
  }
`;


export default ShoeIndex;
