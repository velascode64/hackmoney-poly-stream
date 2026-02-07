import { Navbar } from '@/components/navbar';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Users,
  Radio,
  Shield,
  Clock,
  Layers,
  PlayCircle,
} from 'lucide-react';
import { MarketCard } from '@/components/market-card';

export default function ProductOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-12 lg:px-12">
        <section className="border border-gray-800 bg-gray-900 p-8 lg:p-12">

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] relative">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
                Built for Twitch communities
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Live prediction markets for gamers.
              </h1>
              <p className="mt-5 text-lg text-gray-300">
                StreamBet turns live Twitch moments into fast, social bets that
                feel native to the stream. The adrenaline of a clutch play becomes
                a market in seconds.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/markets"
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
                >
                  Explore Markets
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white"
                >
                  Watch Live Streams
                  <PlayCircle className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
                Live market example
              </div>
              <MarketCard
                id="demo-market"
                question="Will the streamer hit 10k viewers tonight?"
                description="Created from chat momentum and real-time audience spikes."
                yesPrice={62}
                noPrice={38}
                volume={128000}
                endDate={new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString()}
              />
            </div>
          </div>
        </section>
        <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-gray-800 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold">The story</h2>
            <p className="mt-4 text-gray-300">
              Live streams move in seconds, but crypto betting doesn’t. We built
              StreamBet to capture that momentum without slowing the experience.
            </p>
            <div className="mt-6 space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-purple-300" />
                <span>On-chain latency and gas kill the thrill of live betting.</span>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-4 w-4 text-purple-300" />
                <span>We needed a system that feels instant and gamer-native.</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 text-purple-300" />
                <span>Streamers need engagement that feels like chat, not finance.</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold">How we operate</h2>
            <p className="mt-4 text-gray-300">
              StreamBet is a standalone Polymarket-style app powered by Twitch
              data and Yellow settlement. We surface live streams, create markets
              around real moments, and settle fast.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-gray-300">
              {[
                'Live streams feed into instant market creation.',
                'Community bets drive odds in real time.',
                'Yellow settles off-chain for speed and cost.',
                'Markets resolve clearly with streamer evidence.',
              ].map((item) => (
                <div
                  key={item}
                  className="border border-gray-800 bg-gray-950 px-4 py-3 rounded-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-16">
          <div>
            <h2 className="text-3xl font-semibold">Why we built with Yellow</h2>
            <p className="mt-4 text-lg text-gray-300">
              Live markets need instant feedback. Yellow lets us process bets
              off-chain with near‑zero latency so the stream never slows down.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              {['No gas spikes', 'Instant bet feedback', 'Real-time UX'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-1"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: <Radio className="h-5 w-5 text-purple-300" />,
              title: 'Live-first',
              body: 'Markets appear and resolve at the speed of the stream.',
            },
            {
              icon: <Users className="h-5 w-5 text-purple-300" />,
              title: 'Community driven',
              body: 'Built for chat momentum and social bragging rights.',
            },
            {
              icon: <Shield className="h-5 w-5 text-purple-300" />,
              title: 'Clear resolution',
              body: 'Straightforward rules and fast settlement.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-800 bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                {item.icon}
                {item.title}
              </div>
              <p className="mt-3 text-sm text-gray-300">{item.body}</p>
            </div>
          ))}
        </section>

        

       

        
        <section className="mt-16 border border-purple-500/30 bg-gray-900 p-10 text-center rounded-lg">
          <h2 className="text-3xl font-semibold">Ready to bet the moment?</h2>
          <p className="mt-3 text-gray-300">
            Explore live markets or jump into a stream.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/markets"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
            >
              Explore Markets
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white"
            >
              Watch Live Streams
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
