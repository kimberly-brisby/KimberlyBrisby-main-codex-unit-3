import { Avatar } from "./Avatar";
import { Slides } from "./Slides";

export function Main(){
    return(
        <main>
            <p>To render TW Elements one most install version 3, then use the className attribute and make sure to write the code camelCased in style and stroke instead of hyphenated that is writen in JavaScript object instead of a string.</p>
            <Slides />
            <Avatar />
        </main>
    );
}