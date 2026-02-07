import Link from 'next/link';
import Image from 'next/image';
import { Gamepad2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-800 bg-gray-950/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-purple-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                StreamBet
              </span>
            </div>
            <span className="hidden md:inline text-xs text-gray-500">
              Prediction markets for live gaming streams.
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Powered by</span>
              <Image
                src="/assets/yellow-icon.jpeg"
                alt="Yellow"
                width={20}
                height={20}
                className="rounded"
              />
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-2 text-[11px] text-gray-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} StreamBet. All rights reserved.</span>
          <span>Built for the ETH hackathon.</span>
        </div>
      </div>
    </footer>
  );
}
