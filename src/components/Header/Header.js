import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Logo />
          <ActionGroup>
            <Button>Subscribe</Button>
            <Link href="/">Already a member?</Link>
          </ActionGroup>
        </Row>
      </MainHeader>
    </header>
  );
};

const Link = styled.a`
  font-style: italic;
  text-decoration: underline;
  font-size: calc(14/16rem);
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-bottom: 72px;
  }
  
  @media (${QUERIES.laptopAndUp}) {
    margin-bottom: 83px;
    margin-top: 16px;
  }
  
  ${Row} {
    justify-content: center;
    padding: 0;

    @media (${QUERIES.laptopAndUp}) {
      justify-content: space-between;
    }
  }

  ${ActionGroup} {
    display: none;

    @media (${QUERIES.laptopAndUp}) {
      display: flex;

      &:last-of-type {
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
      }
    }
  }
`;

export default Header;
