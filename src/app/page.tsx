export default function Home() {
  const arr = [
    "驛傳馬車",
    "アーヴィング",
    "高垣松雄訳",
    "いざ、これより樂しまむ、",
    "仕置を受くる憂なく、",
    "遊びたのしむ時ぞ來ぬ、",
    "時ぞ來ぬれば、いちはやく、",
    "讀本などは投げ捨てて行く。",
  ];
  return (
    <main className="">
      <div>
        <div className="relative w-full h-full">
          <div className="absolute w-[100dvw] h-[100dvh] text-center top-[30dvh] bg-transparent text-white z-50">
            {arr.map((v, i) => (
              <div key={i} className="text-[100px] text-white text-fill-black">
                {v}
              </div>
            ))}
          </div>
          <iframe
            src="https://www.youtube.com/embed/kmythL1LppA?autoplay=1&mute=1&controls=0&rel=0&loop=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute w-[100dvw] h-[100dvh] border-none"
          ></iframe>
          <div>
            <button className="">←</button>
            <button className="">→</button>
          </div>
        </div>
      </div>
    </main>
  );
}
