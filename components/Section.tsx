export default function Section(props: { children: React.ReactNode }) {
  return (
    <section className='min-h-screen max-w-screen-2xl flex flex-col items-center justify-center relative p-10'>
      {props.children}
    </section>
  )
}