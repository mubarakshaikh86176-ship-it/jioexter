export default function PlatformHeader({ coinBalance }: { coinBalance: number }) {
  return (
    <header className="bg-[#111111] border-b border-[#222] px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">JioExter</h1>
      <div className="text-[#00D4FF] font-semibold">
        Coins: {coinBalance}
      </div>
    </header>
  );
}
