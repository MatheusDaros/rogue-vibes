import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white font-sans">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center gap-8 px-4 pt-16 pb-8 text-center">
        <Image src="/logo.png" alt="Rogue Vibes Logo" width={120} height={120} className="mx-auto mb-4" />
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2 drop-shadow-lg">
          Enter the World of Rogue Vibes
        </h1>
        <p className="text-lg sm:text-2xl max-w-2xl mx-auto mb-6 text-slate-200">
          The ultimate online social RPG where every decision shapes your destiny. Team up, outsmart rivals, and climb the ranks in a world that never sleeps. Are you ready to play your story?
        </p>
        <Link href="/signup" className="inline-block bg-pink-600 hover:bg-pink-700 transition-colors px-8 py-4 rounded-full text-xl font-bold shadow-lg animate-bounce">
          Create Your Account & Start Playing
        </Link>
      </section>

      {/* Game Features Section */}
      <section className="bg-[#1e293b]/80 py-12 px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why You'll Love Rogue Vibes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="bg-[#334155]/80 rounded-xl p-6 shadow-md flex flex-col items-center">
            <span className="text-pink-400 text-3xl mb-2">🎮</span>
            <h3 className="font-semibold text-lg mb-2">Dynamic Social Gameplay</h3>
            <p className="text-slate-300">Form alliances, betray rivals, and shape your journey in an ever-evolving world.</p>
          </div>
          <div className="bg-[#334155]/80 rounded-xl p-6 shadow-md flex flex-col items-center">
            <span className="text-yellow-300 text-3xl mb-2">🏆</span>
            <h3 className="font-semibold text-lg mb-2">Rise to the Top</h3>
            <p className="text-slate-300">Compete in thrilling challenges and climb the leaderboards to earn exclusive rewards.</p>
          </div>
          <div className="bg-[#334155]/80 rounded-xl p-6 shadow-md flex flex-col items-center">
            <span className="text-green-400 text-3xl mb-2">🌎</span>
            <h3 className="font-semibold text-lg mb-2">A World That Grows</h3>
            <p className="text-slate-300">New quests, characters, and surprises await you every week. Your adventure never ends!</p>
          </div>
        </div>
      </section>

      {/* About the Game Section */}
      <section className="py-12 px-4 flex flex-col items-center bg-[#0f172a]/90">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">What is Rogue Vibes?</h2>
        <p className="max-w-3xl text-lg text-slate-200 mb-6 text-center">
          Rogue Vibes is a unique social RPG where your choices matter. Build your character, forge friendships and rivalries, and immerse yourself in a living world full of mystery and excitement. Whether you love strategy, storytelling, or competition, Rogue Vibes offers endless possibilities for every gamer.
        </p>
        <Link href="/signup" className="inline-block bg-pink-600 hover:bg-pink-700 transition-colors px-8 py-4 rounded-full text-lg font-bold shadow-md">
          Join Now & Shape Your Destiny
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm bg-[#1e293b]">
        &copy; {new Date().getFullYear()} Rogue Vibes. All rights reserved.
      </footer>
    </div>
  );
}