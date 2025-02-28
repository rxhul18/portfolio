import { NextResponse } from "next/server";

type WakatimeRes = {
  data: {
    grand_total: {
      decimal: string;
      digital: string;
      hours: number;
      minutes: number;
      text: string;
      total_seconds: number;
    };
    range: {
      text: string;
      timezone: string;
    };
  };
};

export const GET = async () => {
  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/status_bar/today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY!).toString(
            "base64"
          )}`
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: `HTTP error! status: ${res.status}` }, { status: res.status });
    }

    const data = await res.json() as WakatimeRes;

    return NextResponse.json({
      total_hours:data.data?.grand_total?.hours ?? 0,
      total_mintues:data.data?.grand_total?.minutes ?? 0,
      total_seconds: data.data?.grand_total?.total_seconds ?? 0,
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};
