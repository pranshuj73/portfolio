export default function Scaffold(props: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center -mt-[4rem]">
      {props.children}
    </main>
  )
}