export default function Section(props: { children: React.ReactNode, className?: string, id: string }) {
  return (
    <section id={props.id} className={'min-h-dynamic transition-all duration-300 ease-in-out w-full max-w-full md:max-w-screen-2xl flex flex-col items-center justify-center relative p-6 xs:p-10 my-8 ' + props.className}>
      {props.children}
    </section>
  )
}