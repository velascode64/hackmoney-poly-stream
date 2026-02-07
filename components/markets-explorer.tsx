'use client';

import { useMemo, useState } from 'react';
import { MarketCard } from '@/components/market-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface Market {
  id: string;
  question: string;
  description: string | null;
  yes_price: number;
  no_price: number;
  volume: number;
  end_date: string | null;
  status: string;
  streamers?: {
    id: string;
    name: string;
    slug: string;
  } | null;
}

interface MarketsExplorerProps {
  markets: Market[];
}

export function MarketsExplorer({ markets }: MarketsExplorerProps) {
  const [query, setQuery] = useState('');

  const filteredMarkets = useMemo(() => {
    if (!query.trim()) return markets;
    const normalized = query.trim().toLowerCase();
    return markets.filter((market) => {
      const question = market.question.toLowerCase();
      const streamer = market.streamers?.name.toLowerCase() || '';
      return question.includes(normalized) || streamer.includes(normalized);
    });
  }, [markets, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Markets</h1>
          <p className="text-gray-400 text-lg">
            Browse all active prediction markets.
          </p>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search markets or streamers..."
            className="w-full pl-9 bg-gray-900 border-gray-800 text-white"
          />
        </div>
      </div>

      {filteredMarkets.length === 0 ? (
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-10 text-center">
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            No markets found
          </h3>
          <p className="text-gray-500">
            Try a different search or check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMarkets.map((market) => (
            <MarketCard
              key={market.id}
              id={market.id}
              question={market.question}
              description={market.description}
              yesPrice={Number(market.yes_price)}
              noPrice={Number(market.no_price)}
              volume={Number(market.volume)}
              endDate={market.end_date}
            />
          ))}
        </div>
      )}
    </div>
  );
}
