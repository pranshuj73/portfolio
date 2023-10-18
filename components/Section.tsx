export default function Section(props: { children: React.ReactNode, className?: string }) {
  return (
    <section className={'min-h-screen w-full max-w-full md:max-w-screen-2xl flex flex-col items-center justify-center relative p-6 xs:p-10 ' + props.className}>
      {props.children}
    </section>
  )
}