export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cream dark:bg-[#1a1612]"
      role="status"
      aria-label="Učitavanje stranice"
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-beige dark:border-sand" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold" />
        <span className="font-heading text-lg font-medium text-espresso dark:text-cream">
          G
        </span>
      </div>
      <p className="mt-6 font-heading text-sm tracking-[0.3em] text-muted uppercase">
        Slastičarna Gala
      </p>
    </div>
  );
}
