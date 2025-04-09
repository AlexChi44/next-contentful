export default function Home() {
  return (
    <div className="p-10">
      <main>
        <div
          className="antialiased"
          style={{
            fontFamily: "var(--font-play_n)",
          }}
        >
          Text Example
        </div>
        <div className="shadow text-3xl font-bold text-indigo-500">main</div>

        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />

        <div className="p-3 shadow">hello</div>
      </main>
      <div className="bg-test-red text-10">Должен быть красным text-10</div>
      <br />
      <div className="bg-test-red text-h1">Test Heading H-1</div>
      <div className="bg-test-red text-h2">Test Heading H-2</div>
      <div className="bg-test-red text-h3">Test Heading H-3</div>
      <div className="bg-test-red text-h4">Test Heading H-4</div>

      <footer className="mt-20 ml-10 bg-custom-blue">foter</footer>
    </div>
  );
}
