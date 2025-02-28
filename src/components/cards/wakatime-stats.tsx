import { LogosVisualStudioCode } from "@/components/icons/vscode";
import { Code2 } from "lucide-react";
import useSWR from "swr";
import { Spinner } from "@/components/spinner"; // Untuk menampilkan spinner loading

// Improved fetcher with error handling
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const WakatimeStats = () => {
  const { data, error, isLoading } = useSWR("/api/wakatime", fetcher, {
    refreshInterval: 5 * 60 * 1000, // Refresh every 5 minutes
    revalidateOnFocus: false, // Don't revalidate on window focus
    dedupingInterval: 60 * 1000, // Dedupe requests within 1 minute
  });

  console.log(data,"data")

  if (isLoading) {
    return (
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        <Spinner className="w-8 h-8 border-4 border-t-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        <p>Error fetching data!</p>
      </div>
    );
  }

  // Safely access total_seconds with fallback to 0
  const totalHours = Math.round((data?.total_seconds ?? 0) / 3600);
  console.log(data,"data")
  return (
    <a
      href="https://wakatime.com/@c8ea4cc6-93d4-472d-b908-8c78f064aa9f"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-95 duration-500 transform-gpu"
    >
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        <LogosVisualStudioCode className="absolute blur-sm text-[60px] top-0 left-0 -rotate-45 brightness-50" />
        <span className="font-semibold items-center font-mono text-3xl -rotate-2">
          <Code2 className="inline-block mr-1 -mt-[0.15rem]" size={18} />
          {totalHours}h
          {/* {data.} */}
        </span>
        <span className="text-sm">coding stats</span>
        <span className="text-[10px]">(wakatime)</span>
      </div>
    </a>
  );
};
