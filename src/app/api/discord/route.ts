import { NextResponse } from "next/server";

enum status {
  online,
  idle,
  dnd,
  offline,
}

export type LanyardResponse = {
  data: {
    discord_user: {
      id: string;
      username: string;
      discriminator: string;
      avatar: string;
    };
    discord_status: "online" | "dnd" | "idle" | "offline";
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    spotify?: {
      track_id: string;
      song: string;
      artist: string;
      album_art_url: string;
    };
    activities: {
      id: string;
      name: string;
      type: number;
      state: string;
      timestamps: {
        end: number;
      };
      emoji: {
        name: string;
      };
      created_at: number;
    }[];
    success: boolean;
  };
};

export const dynamic = "force-dynamic";

export const GET = async () => {
  const ID = '1186974166906306622';

  const res = await fetch(
    `https://api.lanyard.rest/v1/users/${ID}`,
    {
      headers: {
        "Content-Type": "application/json",
        "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    }
  );

  return NextResponse.json<LanyardResponse>(await res.json());
};
