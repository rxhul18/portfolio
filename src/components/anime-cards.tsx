import { AnimeCard } from "@/components/anime-card";
import { Anime, AnimeData } from "@/data/anime";

export const AnimeCards = () => {
  return (
      <div className="grid md:grid-cols-2 gap-6 py-4">
        {AnimeData.map((anime: Anime) => (
          <AnimeCard
            key={anime.href}
            title={anime.title}
            altTitle={anime.altTitle}
            href={anime.href}
            imgName={anime.imgName}
            starred={anime.starred}
          />
        ))}
      </div>
  );
};
