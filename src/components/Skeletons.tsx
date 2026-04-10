"use client";

export function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#DBE2EF] dark:border-[#374151]/50 bg-white/60 dark:bg-[#1F2937]/60">
      <div className="h-48 skeleton" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <div className="h-5 w-40 rounded-lg skeleton" />
          <div className="h-5 w-20 rounded-lg skeleton" />
        </div>
        <div className="h-4 w-full rounded-lg skeleton" />
        <div className="h-4 w-3/4 rounded-lg skeleton" />
        <div className="flex gap-2 pt-1">
          <div className="h-6 w-16 rounded-lg skeleton" />
          <div className="h-6 w-20 rounded-lg skeleton" />
          <div className="h-6 w-14 rounded-lg skeleton" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-4">
        <div className="h-8 w-48 rounded-full skeleton" />
        <div className="h-20 w-full rounded-2xl skeleton" />
        <div className="h-5 w-full rounded-lg skeleton" />
        <div className="h-5 w-3/4 rounded-lg skeleton" />
        <div className="flex gap-3 pt-2">
          <div className="h-12 w-36 rounded-2xl skeleton" />
          <div className="h-12 w-36 rounded-2xl skeleton" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-72 rounded-full skeleton" />
      </div>
    </div>
  );
}

export function SkeletonTimeline() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="relative pl-12">
          <div className="absolute left-0 top-0 w-8 h-8 rounded-full skeleton" />
          <div className="p-5 rounded-2xl border border-[#DBE2EF] dark:border-[#374151]/50 bg-white/60 dark:bg-[#1F2937]/60 space-y-3">
            <div className="flex justify-between">
              <div className="h-5 w-40 rounded-lg skeleton" />
              <div className="h-5 w-24 rounded-lg skeleton" />
            </div>
            <div className="h-4 w-32 rounded-lg skeleton" />
            <div className="h-4 w-full rounded-lg skeleton" />
            <div className="h-4 w-4/5 rounded-lg skeleton" />
          </div>
        </div>
      ))}
    </div>
  );
}
