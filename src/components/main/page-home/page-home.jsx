import { AboutFond } from "./about-fond";
import { News } from "./news";
import { WhoHelped } from "./who-helped";
import { GetHelp } from "./get-help";
import { Programs } from "./programs";
import { JustHelped } from "./just-helped";

export function PageHome() {
  return (
    <div>
      <AboutFond />

      <Programs />

      <News />

      <JustHelped />

      <GetHelp />

      <WhoHelped />
    </div>
  );
}
