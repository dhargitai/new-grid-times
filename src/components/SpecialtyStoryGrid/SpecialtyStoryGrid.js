import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
    return (
        <Wrapper>
            <MarketsSection>
                <SectionTitle
                    cornerLink={{
                        href: "/markets",
                        content: "Visit Markets data »",
                    }}
                >
                    Markets
                </SectionTitle>
                <MarketCards>
                    {MARKET_DATA.map((data) => (
                        <MarketCard key={data.tickerSymbol} {...data} />
                    ))}
                </MarketCards>
            </MarketsSection>
            <SportsSection>
                <SectionTitle
                    cornerLink={{
                        href: "/sports",
                        content: "Visit Sports page »",
                    }}
                >
                    Sports
                </SectionTitle>
                <SportsStories>
                    {SPORTS_STORIES.map((data) => (
                        <MiniStoryWrapper key={data.id}>
                            <MiniStory {...data} />
                        </MiniStoryWrapper>
                    ))}
                </SportsStories>
            </SportsSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    gap: calc(var(--gap-size) * 3);

    @media (${QUERIES.laptopAndUp}) {
        gap: var(--gap-size);
        grid-template-columns: 1fr 1fr;
    }
`;

const MarketsSection = styled.section`
    @media (${QUERIES.laptopAndUp}) {
        border-right: 1px solid var(--color-gray-300);
        padding-right: var(--gap-size);
    }
`;

const MarketCards = styled.div`
    display: grid;
    gap: var(--gap-size);
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
`;

const SportsSection = styled.section`
    @media (${QUERIES.tabletAndUp}) {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
    }
`;

const MiniStoryWrapper = styled.div`
    @media (${QUERIES.tabletAndUp}) {
        flex: 1;
        min-width: 220px;
    }
`;

const SportsStories = styled.div`
    display: grid;
    gap: var(--gap-size);
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));

    @media (${QUERIES.tabletAndUp}) {
        display: flex;
        overflow: auto;
        min-width: 100%;
    }
`;

export default SpecialtyStoryGrid;
