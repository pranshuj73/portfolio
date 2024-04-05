export default function Base({children}: {children: React.ReactNode}) {
  return (
    <section className="min-h-[80vh] mt-[15vh] border-2 border-red-300 max-w-screen-xl m-auto bg-[#121314] rounded-2xl p-10">
      {children}
    </section>
  )
}