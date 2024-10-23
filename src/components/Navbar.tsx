"use client";

export default function Navbar({ hideAbout = false }: { hideAbout?: boolean }) {
  return (
    <header
      className={`responsive-padding header-wrapper p-4 relative sticky top-0 z-50 bg-gray-800 text-white`}
    >
      <div className="flex justify-between items-center mx-auto w-100">
        <a
          href="/"
          className="block text-white text-2xl  text-center font-bold"
        >
          Binary Bulletin
        </a>
        {!hideAbout && (
          <div>
            <a href="/about">About </a>
          </div>
        )}
      </div>
    </header>
  );
}
