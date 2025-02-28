// src/app/api/gh-stats/route.ts
import { NextResponse } from 'next/server';
import { getGHStats } from '@/lib/get-gh-stats';

export async function GET() {
  const data = await getGHStats();
  return NextResponse.json(data);
}
