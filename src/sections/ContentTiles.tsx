'use client';
import { Container } from '@/components/Container';
import { FadeUp } from '@/components/FadeUp';
import React from 'react';

interface Tile {
  title: string;
  text: string;
  icon: JSX.Element;
}

interface ContentTilesProps {
  heading: string,
  tiles: Tile[],
}

export const ContentTiles = ({ heading, tiles }: ContentTilesProps) => {
  return (
    <section className="py-[2.75rem] lg:py-[7rem] bg-darkGreen text-white text-center">
      <Container>
        <div>
          {heading && (
            <FadeUp>
              <h2 className="text-brightGreen text-[2.25rem] mb-[3.75rem] lg:text-[2.875rem] lg:mb-[8.125rem] font-[300]">
                {heading}
              </h2>
            </FadeUp>
          )}
          <div className="grid gap-[7.75rem] lg:gap-[10.375rem]">
            {tiles.map((tile, index) => {
              const isEven = (index + 1) % 2 === 0;
              return (
                <div
                  className={`grid gap-[3rem] lg:grid-cols-2 lg:gap-[17.125rem] text-left items-center`}
                  key={index}
                >
                  <div className="flex justify-center lg:justify-left">
                    {tile.icon}
                  </div>
                  <div className={`${isEven ? 'lg:-order-1' : ''}`}>
                    <FadeUp>
                      <h2 className="text-brightGreen uppercase text-[1.625rem] mb-[0.625rem]">{tile.title}</h2>
                    </FadeUp>
                    <FadeUp delay={100}>
                      <p className="text-[1.25rem]">{tile.text}</p>
                    </FadeUp>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};