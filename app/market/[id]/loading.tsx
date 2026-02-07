export default function MarketLoading() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="h-6 w-40 bg-gray-800 rounded animate-pulse" />
        <div className="space-y-3">
          <div className="h-10 w-3/4 bg-gray-800 rounded animate-pulse" />
          <div className="h-5 w-full bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-24 bg-gray-900 border border-gray-800 rounded animate-pulse" />
          ))}
        </div>
        <div className="h-64 bg-gray-900 border border-gray-800 rounded animate-pulse" />
      </div>
    </div>
  );
}
