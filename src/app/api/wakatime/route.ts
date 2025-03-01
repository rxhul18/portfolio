import { NextResponse } from "next/server";

type WakatimeRes = {
  data: {
    categories: Array<{
      decimal: string;
      digital: string;
      hours: number;
      minutes: number;
      name: string;
      percent: number;
      text: string;
      total_seconds: number;
    }>;
    daily_average: {
      hours: number;
      minutes: number;
      text: string;
      total_seconds: number;
    };
    total_seconds: number;
    human_readable_total: string;
    range: string;
  };
};

export const GET = async () => {
  try {
    // Get today's date in YYYY-MM-DD format for local timezone
    const today = new Date();
    const startDate = today.toISOString().split('T')[0];
    
    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/summaries?start=${startDate}&end=${startDate}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY!).toString(
            "base64"
          )}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Wakatime API Error:', {
        status: res.status,
        statusText: res.statusText,
        body: errorText,
      });
      return NextResponse.json({ 
        error: `HTTP error! status: ${res.status}`,
        details: errorText
      }, { status: res.status });
    }

    const data = await res.json();

    // Get the first (and only) summary for today
    const todaySummary = data.data?.[0] || { grand_total: { total_seconds: 0 } };
    const totalSeconds = todaySummary.grand_total?.total_seconds ?? 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return NextResponse.json({
      total_hours: hours,
      total_minutes: minutes,
      total_seconds: totalSeconds,
      human_readable_total: todaySummary.grand_total?.text ?? "0 mins",
    });
  } catch (error) {
    throw new Error
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};
