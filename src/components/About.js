import { Link } from "react-router-dom";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Btn from "./Btn";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows 
`;

export default function About() {
    return (
      <div className="bg-[#112242] dark min-h-screen">
          <div className='w-full h-full bg-[#112e42] px-[2rem] sm:px-[8rem] py-[15%] flex flex-col items-center justify-center gap-5'>
            <h2 className="text-pink-300 text-3xl sm:text-5xl font-bold italic">About iNoteBook</h2>
            <TextGenerateEffect words={words} />;
        </div>
         <div className="dark p-20">
         <Link to="/home"><Btn /></Link>
     </div>
      </div>
    )

}
