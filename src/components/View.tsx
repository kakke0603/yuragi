"use client";
import React, { useState } from "react";
import { ArrowBack } from "./icons/ArrowBack";
import { ArrowForward } from "./icons/ArrowForward";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

const contents = [
  <p key={1}>
    この二三日真黒なシマキ雲が時々海の方から吹き上げられて来て、すさまじい突風と共に霰となつて私達を脅かす。一しきりそれが過ぎ去ると、頭の上の空の一ところがケロリと晴れた青空と日の光を見せるのであるが、すぐに又真黒な雲が吹き上げられて来る。いよ／＼冬がやつて来たのだ。
  </p>,
  <p key={2}>僅の晴間に二階の窓から山の方を見ると、すぐそこまでもう真白になつてゐる。山奥の村々はとうにもう雪に見舞はれてゐることであらう。</p>,
  <p key={3}>
    私の庭では淡紅色の山茶花がいつの間にか散つてしまつて、花片が濡れた地面に泥まみれになつてあちこちに散らばつてゐる。玄関脇の八ツ手の花も苞をぬいでゐる。小池の金魚も鯉も深いところにちゞこまつてゐると見えて姿を見せない。
  </p>,
  <p key={4}>
    庭一めんに散らばつた柘榴や、萩や、楓の黄葉の上に、ハラ／＼と音を立てゝ霰の降る風情はさびしいうちにも何となくなつかしみがある。寒くなつて来ると、隣人達との挨拶も急に親しみを増したやうに感じられる。
  </p>,
  <p key={5}>
    自然のかうしたさびしい光景の中に、私達の町ではこゝの駅を起点としていつかは表日本へ通ずる予定の鉄道がいよ／＼一部開通することになり、その歓びにわき返つてゐる。
  </p>,
  <p key={6}>
    南の空には白馬ヶ岳をはじめとして大山高嶽が屏風を立てたやうに立ちふさがつてゐる。そしてそれらの山々はもう一ヶ月以上前から真白に雪を被つてゐる。「あの山越えて南へ！」のあこがれは、冬になるとこの土地の人々の遠い昔から持ちつゞけて来たところであつた。
  </p>,
  <p key={7}>
    それが今や鉄道によつて充たさるべき時代に到着したのである。その鉄道の開通によつて自分達の町が経済的に如何なる影響を将来に於て受けるであらうかといふやうな現実生活上の重大問題などはそつちのけにして、人々が今の場合ひたすら歓喜にのぼせてゐるのも、あながち笑ふべきでない。
  </p>,
  <p key={8}>
    開通する線路の長さは、ほんの三哩ほどでしかない。しかしそんなことは今の場合問題ではない。ながい／＼間のあこがれであつた南の明るい方への新たな道が、兎に角開かれかけたのだ。希望がその実現の曙光を見せたのだ。
  </p>,
  <p key={9}>「しかすがに心明るし……」の感は、私なんかのやうな引込思案の者にすら時ならぬ胸のときめきを覚えさせずには措かない。</p>,
  <p key={10}>みすゞかる信濃の国の安曇野へ越ゆる山ぬき道ひらくてふ</p>,
  <p key={11}>岩を破るハッパの音も聞き慣れて安けくはゐむ山の子等さへ</p>,
  <p key={12}>
    私はこの頃二階の窓から信濃境の、しかも新たに鉄道が開かれて行くといふあたりの山々を眺めながら、これまでとは異つた想像を描くやうになつた。かなり親しみ深い姫川谿谷の風景を汽車の窓から眺めながら、やがて幾つかのトンネルをくゞる。そこにはもう日本アルプス山麓の安曇高原が展開されてゐる。空が急にカラリと晴れて、壮大神厳な山容が車窓に迫つてゐる。暗い国から急に明るい国に出たので、堪へられないほどの眩しさである。やがて大町から松本へ……そして一路直ちに表日本へ、又東京へ……。私の夢は果しなく明るい。
  </p>,
  <p key={13}>
    ひとり二階の書斎にこもつてそのやうな埒もない夢を描いてゐるところへ、読売新聞の特派員Ｎ――君が訪ねて来て、私に鉄道開通の喜びを詠んだ歌を色紙か何かに書けとのことだと取次いで来た。私の夢は忽然として消えて、否応なしに現実に引きもどされてしまつた。
  </p>,
  <p key={14}>やがて少時間その人と面会してとりとめもない会話を五こと六こと取交はした後で、大急ぎで歌を一首まとめ、それを色紙に書いて渡した。</p>,
  <p key={15}>しかすがに心明るしやすらけく新たなる道のひらくるおもへば</p>,
  <p key={16}>まことに坐談平語を一歩も出てゐない有りのまゝの歌に過ぎない。</p>,
  <p key={17}>
    しかし、これは敢へてこの度の鉄道開通にのみ限らず、総じて新たな道の（たとひ二歩か三歩の短距離に過ぎなくとも）開かれることは「しかすがに心明るし」の外はない。況んやそれは暗い方から明るい方へ向つてに於てをやである。
  </p>,
  <p key={18}>
    昼もなほ電灯を要するほどの暗い家の中で私はそれを書いた。又一しきり荒れるのであらう。黒い密雲が空一めんにひろがり、突風が家をゆるがしてゐる。霰の音もすさまじい。
  </p>,
];

const videoes = [
  <iframe
    src="https://www.youtube.com/embed/kmythL1LppA?autoplay=1&mute=1&controls=0&rel=0&loop=1"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className="absolute w-[100dvw] h-[100dvh] border-none"
    key={1}
  ></iframe>,
  <iframe
    src="https://www.youtube.com/embed/64eIdY9GQN4?autoplay=1&mute=1&controls=0&rel=0&loop=1"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className="absolute w-[100dvw] h-[100dvh] border-none"
    key={2}
  ></iframe>,
  <iframe
    src="https://www.youtube.com/embed/SgEQrUIKJ6Y?autoplay=1&mute=1&controls=0&rel=0&loop=1"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className="absolute w-[100dvw] h-[100dvh] border-none"
    key={3}
  ></iframe>,
];

export const View = () => {
  const [index, setIndex] = useState(0);
  const [type, setType] = useState("fire");
  return (
    <div className="">
      <div className="relative w-full h-full">
        <div className="absolute top-0 text-center w-[100dvw] h-full py-10 backdrop-filter text-white z-40 flex">
          <div className="text-[22px] flex text-center items-center flex-col justify-between px-2">
            <button className="z-50" onClick={() => setIndex((prev) => prev - 1)}>
              <ArrowForward />
            </button>
            {contents[index]}
            <button className="z-50" onClick={() => setIndex((prev) => prev + 1)}>
              <ArrowBack />
            </button>
          </div>
        </div>
        {videoes[type === "fire" ? 0 : type === "water" ? 1 : type === "leaf" ? 2 : 0]}
      </div>
      <div className="fixed z-50 bg-white">
        <div>
          <input type="radio" id="fire" name="drone" checked={type === "fire"} onClick={() => setType("fire")} />
          <label htmlFor="fire">火</label>
        </div>
        <div>
          <input type="radio" id="water" name="drone" checked={type === "water"} onClick={() => setType("water")} />
          <label htmlFor="water">水</label>
        </div>
        <div>
          <input type="radio" id="leaf" name="drone" checked={type === "leaf"} onClick={() => setType("leaf")} />
          <label htmlFor="leaf">草</label>
        </div>
      </div>
    </div>
  );
};
