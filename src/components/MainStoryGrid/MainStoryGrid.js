import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <StoryListElement key={story.id}>
                            <SecondaryStory {...story} />
                        </StoryListElement>
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <StoryList>
                    {OPINION_STORIES.map((story, index) => (
                        <StoryListElement key={story.id}>
                            <OpinionStory {...story} />
                        </StoryListElement>
                    ))}
                </StoryList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        "main-story"
        "secondary-stories"
        "opinion-stories"
        "advertisement";
    gap: calc(var(--gap-size) * 3);
    margin-bottom: calc(var(--gap-size) * 3);

    @media (${QUERIES.tabletAndUp}) {
        grid-template-areas:
            "main-story secondary-stories"
            "advertisement advertisement"
            "opinion-stories opinion-stories";
        grid-template-columns: 1fr 268px;
        column-gap: var(--gap-size);
    }

    @media (${QUERIES.laptopAndUp}) {
        grid-template-areas:
            "main-story secondary-stories opinion-stories"
            "main-story advertisement advertisement";
        grid-template-columns: 1fr 403px 273px;
        gap: var(--gap-size);
        margin-bottom: calc((var(--gap-size) * 3) + 12px);
    }
`;

const MainStorySection = styled.section`
    grid-area: main-story;
    @media (${QUERIES.tabletAndUp}) {
        border-right: 1px solid var(--color-gray-300);
        padding-right: var(--gap-size);
    }
`;

const SecondaryStorySection = styled.section`
    grid-area: secondary-stories;

    @media (${QUERIES.laptopAndUp}) {
      border-right: 1px solid var(--color-gray-300);
      padding-right: var(--gap-size);
    }
`;

const StoryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-size);

    @media (${QUERIES.tabletAndUp}) {
    }
`;

const OpinionSection = styled.section`
    grid-area: opinion-stories;

    ${StoryList} {
        @media (${QUERIES.tabletOnly}) {
            flex-direction: row;
            gap: calc(var(--gap-size) * 2);
        }
    }
`;

const StoryListElement = styled.div`
    flex: 1;

    &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-gray-300);
        padding-bottom: var(--gap-size);
    }

    @media (${QUERIES.tabletOnly}) {
        ${OpinionSection} &:not(:last-of-type) {
            border-bottom: 0;
            padding-bottom: 0;
        }
    }
`;

const AdvertisementSection = styled.section`
    grid-area: advertisement;

    @media (${QUERIES.laptopAndUp}) {
        border-top: 1px solid var(--color-gray-300);
        padding-top: var(--gap-size);
    }
`;

export default MainStoryGrid;
