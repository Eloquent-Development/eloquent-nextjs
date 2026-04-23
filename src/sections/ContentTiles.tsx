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
    <section className="py-11 lg:py-28 bg-darkGreen text-white text-center">
      <Container>
        <div>
          {heading && (
            <FadeUp>
              <h2 className="text-brightGreen text-4xl mb-16 lg:text-5xl lg:mb-32 font-light">
                {heading}
              </h2>
            </FadeUp>
          )}
          <div className="grid gap-32 lg:gap-40">
            {tiles.map((tile, index) => {
              const isEven = (index + 1) % 2 === 0;
              return (
                <div
                  className={`grid gap-12 lg:grid-cols-2 lg:gap-72 text-left items-center`}
                  key={index}
                >
                  <div className="flex justify-center lg:justify-left">
                    {tile.icon}
                  </div>
                  <div className={`${isEven ? 'lg:-order-1' : ''}`}>
                    <FadeUp>
                      <h2 className="text-brightGreen uppercase text-2xl mb-2.5">{tile.title}</h2>
                    </FadeUp>
                    <FadeUp delay={100}>
                      <p className="text-xl">{tile.text}</p>
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