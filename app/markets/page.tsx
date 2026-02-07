import { createServerClient } from '@/lib/supabase/server';
import { Navbar } from '@/components/navbar';
import { MarketsExplorer } from '@/components/markets-explorer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getMarkets() {
  const supabase = createServerClient();
  const { data: markets, error } = await supabase
    .from('markets')
    .select('*, streamers(*)')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching markets:', error);
    return [];
  }

  return markets || [];
}

export default async function MarketsPage() {
  const markets = await getMarkets();

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <MarketsExplorer markets={markets} />
      </main>
    </div>
  );
}
