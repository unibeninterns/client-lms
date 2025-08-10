export default function PlainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-[100svh] bg-gradient-to-br from-pink-50 to-purple-50 grid place-items-center px-4">
      <div className="w-full max-w-3xl">
        {children}
      </div>
    </main>
  )
}
