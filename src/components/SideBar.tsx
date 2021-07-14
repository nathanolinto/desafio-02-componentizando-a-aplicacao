import { useState } from "react";

import { Button } from '../components/Button';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[];
  onGenreClickButton: (id:number) => void;
  genrenSelectedId: number;
}

export function SideBar(props: GenreResponseProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.onGenreClickButton(genre.id)}
              selected={props.genrenSelectedId === genre.id}
            />
          ))}
        </div>

      </nav>
    )
}