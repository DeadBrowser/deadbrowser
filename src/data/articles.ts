// MrBeast article data for blog with YouTube links and Ryan Higa-style content
export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image: string;
    youtubeUrl?: string;
    category: string;
    readTime: string;
}

export const articles: Article[] = [
    // ===== НОВЫЕ СТАТЬИ В СТИЛЕ RYAN HIGA =====
    {
        slug: 'i-built-willy-wonka-chocolate-factory',
        title: 'I Built Willy Wonka\'s Chocolate Factory — It\'s Real And It\'s INSANE',
        excerpt: 'MrBeast actually built a REAL chocolate factory. With a chocolate river. And Oompa Loompas. I have so many questions.',
        content: `
            <p>You know how in Willy Wonka there's that magical chocolate factory that seems completely impossible? Well, MrBeast said "hold my chocolate bar" and ACTUALLY BUILT ONE.</p>
            
            <h2>What They Actually Built</h2>
            <ul>
                <li>A REAL chocolate river. With real, edible chocolate. Flowing. Like water. But chocolate.</li>
                <li>Edible wallpaper (yes, you can lick it)</li>
                <li>Giant gummy bears the size of actual bears</li>
                <li>A room entirely made of candy</li>
                <li>Oompa Loompas (okay, they were actors, but STILL)</li>
            </ul>
            
            <h2>The Golden Ticket Hunt</h2>
            <p>Just like in the movie, they hid golden tickets in Feastables bars. The winners got to tour the factory AND win prizes. Someone won a lifetime supply of chocolate. Their dentist is CRYING.</p>
            
            <h2>The Budget Was HOW MUCH?</h2>
            <p>Let's just say you could buy several houses. Or one chocolate factory apparently. The production value was insane — this wasn't some janky set, it was a FULL Wonka experience.</p>
            
            <p><strong>Watch this video if you want to feel like a kid again. Or if you just really like chocolate. Both valid reasons.</strong></p>
        `,
        date: 'February 5, 2026',
        image: 'https://i.ytimg.com/vi/Hwybp38GnZw/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=Hwybp38GnZw',
        category: 'CHALLENGE',
        readTime: '5 min read'
    },
    {
        slug: 'worlds-most-dangerous-escape-room',
        title: 'World\'s Most Dangerous Escape Room — Someone Almost DIED',
        excerpt: 'MrBeast created an escape room so intense that contestants were genuinely fearing for their lives. Entertainment!',
        content: `
            <p>Escape rooms are fun, right? You solve puzzles, you escape, everyone laughs. MrBeast took that concept and said "what if we added MORTAL PERIL?"</p>
            
            <h2>The "Danger" Levels</h2>
            <ul>
                <li><strong>Room 1:</strong> Filling with water. Solve puzzles while drowning. Casual.</li>
                <li><strong>Room 2:</strong> Complete darkness with things MOVING. Sleep paralysis demon vibes.</li>
                <li><strong>Room 3:</strong> The floor is literally disappearing. Like, falling away.</li>
                <li><strong>Room 4:</strong> I can't even describe it. Just watch.</li>
            </ul>
            
            <h2>The Prize</h2>
            <p>$100,000 for escaping. Sounds worth it until you're in a room filling with water questioning your life choices.</p>
            
            <h2>Did Anyone Actually Get Hurt?</h2>
            <p>Surprisingly, no permanent damage. Lots of screaming though. SO much screaming. The editors had to work overtime on the bleeping.</p>
            
            <p><a href="https://www.youtube.com/watch?v=zoN1r6nWFIg" target="_blank" rel="noopener">📺 Watch the terror unfold on YouTube</a></p>
        `,
        date: 'February 5, 2026',
        image: 'https://i.ytimg.com/vi/zoN1r6nWFIg/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=zoN1r6nWFIg',
        category: 'CHALLENGE',
        readTime: '4 min read'
    },
    {
        slug: 'i-gave-strangers-1000000-but-they-have-24-hours',
        title: 'I Gave Strangers $1,000,000 But They Only Have 24 Hours To Spend It',
        excerpt: 'MrBeast gave random people a MILLION DOLLARS each but they had to spend it ALL in 24 hours or lose everything.',
        content: `
            <p>Imagine someone walks up to you and hands you a million dollars. Amazing, right? Now imagine they say "spend it all by tomorrow or it's GONE." Panic.</p>
            
            <h2>The Rules</h2>
            <ul>
                <li>$1,000,000 cash, right now, in your hands</li>
                <li>You have exactly 24 hours to spend EVERY PENNY</li>
                <li>You can't just give it away (that's too easy)</li>
                <li>You have to actually BUY things</li>
                <li>Whatever you buy, you keep</li>
            </ul>
            
            <h2>What People Actually Bought</h2>
            <p>One person bought like 15 cars. Not because they needed 15 cars, but because WHAT ELSE DO YOU BUY IN 24 HOURS? Someone bought a house. Someone bought a boat AND a house. One person panic-bought a horse ranch at 3 AM.</p>
            
            <h2>The Stress Was REAL</h2>
            <p>Watching people with a million dollars STRESSED is wild. Rich people problems, literally. "Oh no, I only have $50,000 left and 2 hours to spend it!" Sir, that's more than most people make in a year.</p>
            
            <p><strong>This video will make you think about what YOU would buy. Start planning now, just in case.</strong></p>
        `,
        date: 'February 4, 2026',
        image: 'https://i.ytimg.com/vi/bs0SWXbty18/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=bs0SWXbty18',
        category: 'GIVEAWAY',
        readTime: '5 min read'
    },
    {
        slug: 'last-to-leave-private-jet-wins-it',
        title: 'Last To Leave Private Jet Wins It — Yes, THE ACTUAL JET',
        excerpt: 'MrBeast put people on a private jet. The last person to leave wins the jet. The jet costs more than my entire existence.',
        content: `
            <p>Private jets cost like $50 million. MrBeast just said "eh, let's give one away." To whoever can sit in it the longest. Capitalism is weird.</p>
            
            <h2>The Challenge Setup</h2>
            <p>Multiple contestants board a luxurious private jet. They can do anything — sleep, eat, watch movies. BUT they cannot leave. Last person on the jet wins the jet.</p>
            
            <h2>Sounds Easy? WRONG.</h2>
            <ul>
                <li>Day 1: "This is amazing! Free food! Luxury!"</li>
                <li>Day 3: "I haven't seen the sun in 72 hours."</li>
                <li>Day 5: "If I eat one more shrimp cocktail I will scream."</li>
                <li>Day 7: "I've memorized every inch of this jet. The leather haunts me."</li>
            </ul>
            
            <h2>The Winner's Reaction</h2>
            <p>After suffering for over a week, the winner walked off that jet with the keys. They now own a PRIVATE JET. They went from "I hope I can afford rent" to "where should I fly my jet today?"</p>
            
            <p><a href="https://www.youtube.com/watch?v=1WEAJ-DFkHE" target="_blank" rel="noopener">📺 Watch jet-lag on YouTube</a></p>
        `,
        date: 'February 3, 2026',
        image: 'https://i.ytimg.com/vi/1WEAJ-DFkHE/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=1WEAJ-DFkHE',
        category: 'CHALLENGE',
        readTime: '5 min read'
    },
    {
        slug: 'i-opened-free-car-dealership',
        title: 'I Opened A FREE Car Dealership — Every Car Is $0',
        excerpt: 'MrBeast opened a car dealership where every car is completely free. People literally drove away with new cars.',
        content: `
            <p>You walk into a car dealership. You see Teslas, trucks, sports cars. You ask the price. The salesperson says "free." You wake up because this must be a dream. EXCEPT IT WASN'T.</p>
            
            <h2>The Setup</h2>
            <p>MrBeast rented out an entire car lot, filled it with brand new vehicles, and just... gave them away. To random people. Who walked in expecting to pay money. And left with FREE CARS.</p>
            
            <h2>The Reactions Were PRICELESS</h2>
            <ul>
                <li>A single mom cried for literally 10 minutes straight</li>
                <li>One guy thought it was a scam and almost left</li>
                <li>Someone asked "can I take two?" (No. But respect for asking.)</li>
                <li>Multiple people called their families while screaming</li>
            </ul>
            
            <h2>Total Cars Given Away</h2>
            <p>We're talking HUNDREDS of vehicles. Hundreds. The paperwork alone must have been a nightmare. But everyone left with a new car and renewed faith in humanity.</p>
            
            <p><strong>This is the kind of content that makes you happy to be alive. And also jealous you weren't there.</strong></p>
        `,
        date: 'February 2, 2026',
        image: 'https://i.ytimg.com/vi/3LLnjRLrvLU/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=3LLnjRLrvLU',
        category: 'PHILANTHROPY',
        readTime: '4 min read'
    },
    {
        slug: 'world-largest-game-of-tag',
        title: 'World\'s Largest Game Of Tag With 1000 People — Pure Mayhem',
        excerpt: 'MrBeast organized the biggest game of tag ever. 1000 players. One winner. Absolute chaos.',
        content: `
            <p>Remember playing tag as a kid? Simple game, right? Now imagine 1000 people, a massive arena, and whoever is NOT tagged at the end wins $500,000. That's not tag. That's WAR.</p>
            
            <h2>The Arena</h2>
            <p>They built a MASSIVE obstacle course specifically for this game. Hiding spots, tunnels, towers — basically a playground designed by someone who really loves chaos.</p>
            
            <h2>The Strategy</h2>
            <ul>
                <li>Some people formed alliances (they all got tagged anyway)</li>
                <li>Some people just HID for hours (valid strategy)</li>
                <li>One person dressed in camouflage (they still got tagged)</li>
                <li>The athletes were eliminated FIRST because everyone targeted them</li>
            </ul>
            
            <h2>The Final Showdown</h2>
            <p>After hours of running, hiding, and betrayal, it came down to a handful of survivors. The final tag was INTENSE. Like, movie-level dramatic.</p>
            
            <p><a href="https://www.youtube.com/watch?v=n51sHfcP8tk" target="_blank" rel="noopener">📺 Watch the chaos on YouTube</a></p>
        `,
        date: 'February 1, 2026',
        image: 'https://i.ytimg.com/vi/WcwGleN38zE/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=WcwGleN38zE',
        category: 'CHALLENGE',
        readTime: '4 min read'
    },
    {
        slug: 'i-survived-on-deserted-island-7-days',
        title: 'I Survived On A Deserted Island For 7 Days — Almost Didn\'t Make It',
        excerpt: 'MrBeast dropped himself on an empty island with NOTHING. 7 days. No food. No shelter. Just vibes (and suffering).',
        content: `
            <p>Survivor the TV show is cool and all, but they have camera crews and medical teams nearby. MrBeast said "what if we did it for REAL?" and got dropped on an actual deserted island.</p>
            
            <h2>What He Started With</h2>
            <ul>
                <li>The clothes on his back</li>
                <li>A knife</li>
                <li>That's it. That's the list.</li>
            </ul>
            
            <h2>Day-By-Day Breakdown</h2>
            <ul>
                <li><strong>Day 1:</strong> "This will be fun!" Spoiler: It was not fun.</li>
                <li><strong>Day 2:</strong> First meal: a coconut. It took 3 hours to open.</li>
                <li><strong>Day 3:</strong> Built a shelter. It collapsed. Built another one.</li>
                <li><strong>Day 4:</strong> Didn't eat. Regret setting in.</li>
                <li><strong>Day 5:</strong> Caught a fish! Celebration! Raw fish is... an experience.</li>
                <li><strong>Day 6:</strong> Hallucinating? Maybe. Talking to crabs? Definitely.</li>
                <li><strong>Day 7:</strong> FREEDOM. Lost 15 pounds. Gained a new appreciation for pizza.</li>
            </ul>
            
            <p><strong>This video will make you grateful for your refrigerator.</strong></p>
        `,
        date: 'January 31, 2026',
        image: 'https://i.ytimg.com/vi/U_LlX4t0A9I/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=U_LlX4t0A9I',
        category: 'SURVIVAL',
        readTime: '5 min read'
    },
    {
        slug: 'every-country-food-24-hours',
        title: 'I Ate Food From EVERY Country In 24 Hours — My Stomach Regrets',
        excerpt: 'MrBeast attempted to eat food from 195 countries in a single day. Spoiler: The human body was not designed for this.',
        content: `
            <p>There are 195 countries in the world. MrBeast decided to eat food from ALL of them. In ONE DAY. Mathematically, that's eating something every 7 minutes for 24 hours straight.</p>
            
            <h2>The Setup</h2>
            <p>They flew in dishes from around the world, set up 195 stations, and Jimmy just... kept eating. Like a competitive eater but worse because it's not just hot dogs, it's EVERYTHING.</p>
            
            <h2>Memorable Moments</h2>
            <ul>
                <li>Italian food: "This is great!" (Hour 1, still energetic)</li>
                <li>Korean food: "Still going strong!" (Hour 6, less energetic)</li>
                <li>Icelandic fermented shark: "Why does this exist?" (Hour 12, questioning life)</li>
                <li>Country 150: Just silent chewing. No commentary. The soul has left.</li>
            </ul>
            
            <h2>Did He Make It?</h2>
            <p>Against all odds... yes. 195 countries. 24 hours. One very full human being. The doctors were on standby.</p>
            
            <p><a href="https://www.youtube.com/watch?v=9bqk6ZUsKyA" target="_blank" rel="noopener">📺 Watch the food marathon on YouTube</a></p>
        `,
        date: 'January 30, 2026',
        image: 'https://i.ytimg.com/vi/9bqk6ZUsKyA/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=9bqk6ZUsKyA',
        category: 'CHALLENGE',
        readTime: '4 min read'
    },
    {
        slug: 'hide-and-seek-100-million-dollar-mansion',
        title: 'Hide And Seek In $100,000,000 Mansion — I\'m Still Lost',
        excerpt: 'MrBeast played hide and seek in the most expensive mansion ever. It has 50 rooms. FIFTY. Some people were never found.',
        content: `
            <p>When you played hide and seek as a kid, your house probably had like... 5 rooms? Maybe 7 if you were fancy? This mansion has FIFTY. And secret passages. And a panic room. Basically a small village.</p>
            
            <h2>The Mansion Features</h2>
            <ul>
                <li>50+ rooms (some weren't even discovered during filming)</li>
                <li>Multiple secret passages and hidden doors</li>
                <li>A basement that's bigger than most people's houses</li>
                <li>An outdoor area the size of a park</li>
                <li>Rooms inside rooms inside rooms (Inception vibes)</li>
            </ul>
            
            <h2>The Hide And Seek Rules</h2>
            <p>One seeker. Multiple hiders. Last person found wins $100,000. Sounds simple until you realize someone could hide for DAYS in this place.</p>
            
            <h2>The Craziest Hiding Spots</h2>
            <ul>
                <li>Inside a secret bookcase door (classic)</li>
                <li>In the ceiling (HOW?)</li>
                <li>Behind a waterfall (yes, there's an indoor waterfall)</li>
                <li>Someone literally dug into the garden (committed)</li>
            </ul>
            
            <p><strong>This video will make you want a bigger house. And also want to play hide and seek.</strong></p>
        `,
        date: 'January 29, 2026',
        image: 'https://i.ytimg.com/vi/00NgUctWoLQ/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=00NgUctWoLQ',
        category: 'CHALLENGE',
        readTime: '4 min read'
    },

    {
        slug: 'ages-1-100-decide-who-wins-250000',
        title: 'Ages 1-100 Decide Who Wins $250,000 — Pure Chaos',
        excerpt: 'MrBeast gathered 100 people of EVERY AGE from 1 to 100 and let them vote on who gets a quarter million. Spoiler: democracy is wild.',
        content: `
            <p>Okay, so imagine this: MrBeast literally finds ONE person for EVERY.SINGLE.AGE. from 1 to 100. That's a newborn baby, a 47-year-old accountant named Steve, a 99-year-old grandma who's seen some things, and everyone in between. And they ALL get to vote on who wins $250,000.</p>
            
            <h2>The Premise (AKA "This Is Gonna Get Weird")</h2>
            <p>So here's the deal — each round, the 100 people vote to eliminate someone. Last one standing wins a quarter million dollars. Simple, right? WRONG. Because guess what? A 5-year-old doesn't vote based on strategy. They vote based on who has the coolest shoes. Meanwhile the 73-year-old is forming political alliances like it's Game of Thrones.</p>
            
            <h2>Highlight Moments That Made Me Question Humanity</h2>
            <ul>
                <li>The 3-year-old voted out someone because "they look like my mean babysitter."</li>
                <li>A full-on alliance formed between ages 40-55. They literally called themselves "The Boomers" (they weren't boomers but okay).</li>
                <li>The 99-year-old just... kept surviving. Nobody wanted to be the person who voted out the centenarian. Respect.</li>
                <li>The teenager was eliminated INSTANTLY because apparently nobody trusts Gen Z. Fair, honestly.</li>
            </ul>
            
            <h2>Who Actually Won?</h2>
            <p>I won't spoil it, but let's just say the winner was NOT who you'd expect. It wasn't the oldest, it wasn't the youngest, and it definitely wasn't the guy who tried to bribe everyone with candy.</p>
            
            <p><strong>Watch the full video to see pure democratic chaos unfold.</strong> Also, shoutout to Jimmy for somehow convincing a literal baby to participate in a voting experiment.</p>
        `,
        date: 'February 4, 2026',
        image: 'https://i.ytimg.com/vi/l-nMKJ5J3Uc/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=l-nMKJ5J3Uc',
        category: 'CHALLENGE',
        readTime: '5 min read'
    },
    {
        slug: 'survive-100-days-in-circle-500000',
        title: 'Survive 100 Days In Circle, Win $500,000 — How Is This Legal?',
        excerpt: 'MrBeast trapped people in a circle for 100 DAYS. They couldn\'t leave. At all. For three months. For money.',
        content: `
            <p>Remember when you were a kid and played "the floor is lava"? Now imagine that game, but the floor outside a tiny circle is POVERTY and you're playing for half a million dollars for a hundred days straight.</p>
            
            <h2>The Rules (Are Cruel)</h2>
            <p>Step out of the circle? You lose. Sleep in the circle. Eat in the circle. EXIST in the circle. For 100 days. That's over THREE MONTHS of your life in a circle. My attention span can barely handle a 30-minute YouTube video, and these people committed to MONTHS in a circle.</p>
            
            <h2>What Went Down</h2>
            <ul>
                <li>Day 1: Everyone's optimistic. "This will be easy!" Oh honey, no.</li>
                <li>Day 14: Two people literally became best friends and swore a blood oath to split the money. (They didn't.)</li>
                <li>Day 30: The first mental breakdown. Someone cried over spilled milk. Literally. Actual milk.</li>
                <li>Day 67: Someone tried to dig a tunnel OUT of the circle. Technically staying in the circle? The judges said no.</li>
                <li>Day 99: Only two remained. The tension was THICK.</li>
            </ul>
            
            <h2>The Winner</h2>
            <p>After 100 days — 2,400 HOURS — of standing, sitting, sleeping, and slowly losing their minds in a circle, we had a winner. And honestly? They earned every single dollar of that $500,000. I can barely commit to a Netflix series.</p>
            
            <p><a href="https://www.youtube.com/watch?v=gHzuabZUd6c" target="_blank" rel="noopener">📺 Watch the full insanity on YouTube</a></p>
        `,
        date: 'February 3, 2026',
        image: 'https://i.ytimg.com/vi/gHzuabZUd6c/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=gHzuabZUd6c',
        category: 'CHALLENGE',
        readTime: '6 min read'
    },
    {
        slug: 'i-built-100-wells-in-africa',
        title: 'I Built 100 Wells In Africa — And No, This Isn\'t Clickbait',
        excerpt: 'MrBeast actually built 100 FUNCTIONING wells across Africa. This man is out here doing more than entire governments.',
        content: `
            <p>Okay, can we just take a moment to appreciate that while most YouTubers are doing "I Ate Only McDonald's for 24 Hours" challenges, MrBeast is out here LITERALLY PROVIDING CLEAN WATER TO THOUSANDS OF PEOPLE?</p>
            
            <h2>The Numbers Are INSANE</h2>
            <ul>
                <li>100 wells built across multiple African countries</li>
                <li>Over 500,000 people now have access to clean water</li>
                <li>Teams worked for MONTHS drilling, building, and installing water systems</li>
                <li>This wasn't cheap — we're talking millions of dollars of infrastructure</li>
            </ul>
            
            <h2>Why This Actually Matters</h2>
            <p>Fun fact: about 785 million people globally don't have access to clean water. That's more than TWICE the population of the United States. And this dude with a YouTube channel just... decided to do something about it. While filming entertaining content. What have I done today? I scrolled Twitter for 3 hours.</p>
            
            <h2>The Reactions Hit DIFFERENT</h2>
            <p>There's something about watching a community that's walked 5 miles daily for water seeing clean water flow from a well for the first time. I'm not crying, YOU'RE crying. Okay fine, we're all crying.</p>
            
            <h2>Beast Philanthropy Continues</h2>
            <p>This is just one of many projects from Beast Philanthropy, which is basically MrBeast using his YouTube powers for good. The man turned subscribers into wells. If that's not modern alchemy, I don't know what is.</p>
            
            <p><a href="https://www.youtube.com/watch?v=mwKJfNYwvm8" target="_blank" rel="noopener">📺 Watch the full video — bring tissues</a></p>
        `,
        date: 'February 2, 2026',
        image: 'https://i.ytimg.com/vi/mwKJfNYwvm8/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=mwKJfNYwvm8',
        category: 'PHILANTHROPY',
        readTime: '5 min read'
    },
    {
        slug: 'i-spent-7-days-buried-alive',
        title: 'I Spent 7 Days Buried Alive — Yes, Really. Underground. For a Week.',
        excerpt: 'MrBeast buried himself alive for 7 DAYS in a coffin underground. At what point is this not a YouTube video but a hostage situation?',
        content: `
            <p>So apparently "pushing the limits of content creation" now means BURYING YOURSELF UNDERGROUND FOR A WEEK. Cool. Normal. Totally sane behavior from everyone's favorite philanthropist man-child.</p>
            
            <h2>The Setup (Or: "How Did This Get Approved?")</h2>
            <p>Jimmy gets into a custom coffin (with air supply, cameras, and supplies, calm down) and gets BURIED UNDERGROUND for 7 days. No escape. No sunlight. Limited contact with the outside world. Just him, his thoughts, and the crushing weight of the earth above him. Fun!</p>
            
            <h2>Day-by-Day Breakdown</h2>
            <ul>
                <li><strong>Day 1:</strong> "This is fine. I've got snacks." (Narrator: It was not fine.)</li>
                <li><strong>Day 2:</strong> The loneliness kicks in. Jimmy starts talking to a Feastables bar like it's Wilson from Cast Away.</li>
                <li><strong>Day 3:</strong> Sleep deprivation + confined space = philosophical Jimmy. He starts questioning everything.</li>
                <li><strong>Day 4:</strong> The halfway point breakdown. Tears were shed. We don't judge.</li>
                <li><strong>Day 5-6:</strong> A weird calm sets in. He's accepted his subterranean fate.</li>
                <li><strong>Day 7:</strong> FREEDOM. He emerges like a mole person reborn.</li>
            </ul>
            
            <h2>Why Though?</h2>
            <p>Valid question. The answer is content. The answer is always content. Also probably sponsorships. But mostly content. And honestly? It made for incredible viewing. The psychological journey from "this is fun" to "I'm having existential thoughts about dirt" was captivating.</p>
            
            <p><a href="https://www.youtube.com/watch?v=7dYTw-jAYkY" target="_blank" rel="noopener">📺 Watch the claustrophobia on YouTube</a></p>
        `,
        date: 'February 1, 2026',
        image: 'https://i.ytimg.com/vi/7dYTw-jAYkY/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=7dYTw-jAYkY',
        category: 'CHALLENGE',
        readTime: '6 min read'
    },
    {
        slug: 'lamborghini-vs-shredder',
        title: 'Lamborghini vs World\'s Largest Shredder — RIP $300,000',
        excerpt: 'MrBeast fed a Lamborghini to a giant shredder. Just... watch a luxury car become confetti.',
        content: `
            <p>You know what's a good use of $300,000? Putting a kid through college. Buying a house. Investing in your future. You know what MrBeast did instead? FED A LAMBORGHINI TO A GIANT SHREDDER.</p>
            
            <h2>Context (That Doesn't Make It Better)</h2>
            <p>So there's this shredder, right? It's massive. It shreds EVERYTHING. Refrigerators? Like butter. Cars? Easy. Common sense? Absolutely obliterated.</p>
            
            <h2>The Destruction Lineup</h2>
            <ul>
                <li>Started with smaller items — TVs, furniture, normal stuff</li>
                <li>Then a regular car (RIP Honda Civic, gone but not forgotten)</li>
                <li>A BOAT. An entire boat. Just yeeted into the shred zone.</li>
                <li>And finally... the Lambo. A beautiful, innocent Lamborghini.</li>
            </ul>
            
            <h2>The Actual Shredding</h2>
            <p>Watching that Lamborghini get eaten by rotating metal teeth was like watching a nature documentary, if the lion was industrial machinery and the gazelle cost more than my entire life savings. It took maybe 30 seconds. Thirty seconds. That's faster than I can parallel park.</p>
            
            <h2>Was This Necessary?</h2>
            <p>No. Absolutely not. Did I watch the whole thing? Yes. Twice. Did I feel something? Also yes. I don't know what emotion it was, but it was SOMETHING.</p>
            
            <p><a href="https://www.youtube.com/watch?v=vBpQ1SlfVtU" target="_blank" rel="noopener">📺 Watch the carnage on YouTube</a></p>
        `,
        date: 'January 30, 2026',
        image: 'https://i.ytimg.com/vi/vBpQ1SlfVtU/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=vBpQ1SlfVtU',
        category: 'DESTRUCTION',
        readTime: '4 min read'
    },
    {
        slug: '1000-blind-people-see-first-time',
        title: '1,000 Blind People See For The First Time — I\'m Sobbing',
        excerpt: 'MrBeast funded cataract surgeries for 1,000 people. This is the most beautiful thing on the internet.',
        content: `
            <p>Okay, put down whatever you're doing, grab tissues, and prepare to have your faith in humanity restored. Because MrBeast just helped 1,000 blind people SEE for the first time.</p>
            
            <h2>The Mission</h2>
            <p>Millions of people worldwide suffer from curable blindness — conditions like cataracts that can be fixed with a simple surgery. Simple surgery that many can't afford. Enter: Jimmy and his army of subscribers.</p>
            
            <h2>What Went Down</h2>
            <ul>
                <li>Partnered with eye doctors across multiple countries</li>
                <li>Identified people with curable blindness who couldn't afford treatment</li>
                <li>Funded surgeries. Documented the process. Made us all cry.</li>
            </ul>
            
            <h2>The Reactions Are Everything</h2>
            <p>There's something indescribable about watching someone see their family's faces for the first time. Parents seeing their children. Elderly people seeing the world after decades of darkness. One guy saw colors for the first time and just started CRYING at a flower. A FLOWER. I can't handle this.</p>
            
            <h2>The Bigger Picture</h2>
            <p>This video proved that relatively small amounts of money (small by charity standards) can literally change lives. Each surgery cost a few hundred dollars. That's it. That's the price of seeing again. And MrBeast just... did it. A thousand times.</p>
            
            <p>If you ever feel bad about humanity, just watch this video. It's the antidote to doom scrolling.</p>
            
            <p><a href="https://www.youtube.com/watch?v=TJ2ifmkGGus" target="_blank" rel="noopener">📺 Watch and cry on YouTube</a></p>
        `,
        date: 'January 28, 2026',
        image: 'https://i.ytimg.com/vi/TJ2ifmkGGus/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=TJ2ifmkGGus',
        category: 'PHILANTHROPY',
        readTime: '5 min read'
    },
    {
        slug: 'last-to-leave-haunted-house-wins',
        title: 'Last To Leave Haunted House Wins $500,000 — Pure Terror',
        excerpt: 'MrBeast locked people in a legitimately terrifying haunted house. Sleep paralysis demons have NOTHING on this.',
        content: `
            <p>So you know how haunted houses are fun for like... 15 minutes? MrBeast said "what if we made it A COMPETITION" and kept people there until only one remains. Healthy!</p>
            
            <h2>The House (A.K.A. Nightmare Fuel)</h2>
            <p>This wasn't your typical Halloween pop-up haunted house with teenagers in zombie makeup. No. This was a PROFESSIONALLY DESIGNED terror factory with:</p>
            <ul>
                <li>Actors who could appear ANYWHERE at ANY TIME</li>
                <li>Rooms that morphed and changed overnight</li>
                <li>Sound design that made you paranoid of silence</li>
                <li>And they had to SLEEP there. In the HAUNTED HOUSE. With SCARE ACTORS.</li>
            </ul>
            
            <h2>The Psychological Breakdown Speedrun</h2>
            <ul>
                <li><strong>Hour 1:</strong> Laughter. Bravado. "This isn't that scary!"</li>
                <li><strong>Hour 6:</strong> Nervous laughter. Constant head-on-a-swivel behavior.</li>
                <li><strong>Hour 12:</strong> First person quits after a scare actor appeared IN THEIR BED.</li>
                <li><strong>Hour 24:</strong> The survivors have bonded through trauma. Beautiful, really.</li>
                <li><strong>Hour 48+:</strong> It's just two people huddled together, sleep-deprived and traumatized.</li>
            </ul>
            
            <h2>Who Won?</h2>
            <p>I won't spoil it, but let's just say the winner EARNED that money. Therapy bills not included.</p>
            
            <p><a href="https://www.youtube.com/watch?v=YyhKdOCwD7s" target="_blank" rel="noopener">📺 Watch the trauma on YouTube</a></p>
        `,
        date: 'January 26, 2026',
        image: 'https://i.ytimg.com/vi/YyhKdOCwD7s/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=YyhKdOCwD7s',
        category: 'CHALLENGE',
        readTime: '5 min read'
    },
    {
        slug: 'i-gave-my-100000000th-subscriber-island',
        title: 'I Gave My 100,000,000th Subscriber An Island — Just Island Things',
        excerpt: 'When MrBeast hit 100 MILLION subscribers, he gave someone a literal island. A whole island. With palm trees.',
        content: `
            <p>When I hit 100 followers on Instagram, I got excited. When MrBeast hit 100 MILLION subscribers, he gave someone AN ENTIRE ISLAND. We are not the same.</p>
            
            <h2>The Subscriber Journey</h2>
            <p>Let's take a moment to appreciate that 100 million people — more than the population of Germany, Vietnam, or Egypt — decided to click "Subscribe" on this dude's channel. That's insane. That's an army. That's a small country of MrBeast watchers.</p>
            
            <h2>The Island</h2>
            <ul>
                <li>A REAL island. Not a metaphorical island. Actual land surrounded by water.</li>
                <li>Tropical location with beaches, palm trees, the whole vibe</li>
                <li>Basically, someone won a vacation destination as a casual prize</li>
            </ul>
            
            <h2>How It Went Down</h2>
            <p>The 100 millionth subscriber was actually contacted. They thought it was a scam (fair). Then they realized IT WAS REAL. Then they received deed to AN ISLAND. Casual Tuesday.</p>
            
            <h2>Perspective Check</h2>
            <p>Most YouTubers thank their subscribers with a "Hey guys, thanks for watching!" MrBeast thanks his subscribers with real estate. It's not even a competition at this point.</p>
            
            <p><a href="https://www.youtube.com/watch?v=2isYuQZMbdU" target="_blank" rel="noopener">📺 Watch island generosity on YouTube</a></p>
        `,
        date: 'January 24, 2026',
        image: 'https://i.ytimg.com/vi/2isYuQZMbdU/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=2isYuQZMbdU',
        category: 'MILESTONE',
        readTime: '4 min read'
    },
    {
        slug: 'train-vs-giant-pit',
        title: 'Train Vs Giant Pit — Physics Teachers Are Screaming',
        excerpt: 'MrBeast drove a train into a massive pit. For science? For content? Who knows. It was glorious.',
        content: `
            <p>You ever wonder what happens when you drive a literal train into a giant hole? No? Well, MrBeast wondered, and now we all have the answer whether we wanted it or not.</p>
            
            <h2>The Setup</h2>
            <p>Step 1: Get a train. (Casual. Just acquire a train.) Step 2: Dig a massive pit. Step 3: Full speed ahead into gravity's embrace.</p>
            
            <h2>The Expectations vs Reality</h2>
            <p>What we expected: Cool crash, some metal bending, maybe a fire.<br />What we got: COMPLETE AND UTTER CHAOS. The train didn't just fall into the pit. It TRANSFORMED. Metal became modern art. Physics said "I quit."</p>
            
            <h2>The Slow-Mo Replay</h2>
            <p>They filmed this with high-speed cameras, and watching a train crumple in slow motion is oddly beautiful. Like a nature documentary, if nature was made of steel and bad decisions.</p>
            
            <h2>Why Do We Watch This?</h2>
            <p>Honestly? Because we'll never do this ourselves. We vicariously live through MrBeast's destruction budget. He destroys so we don't have to.</p>
            
            <p><a href="https://www.youtube.com/watch?v=fuhE6PYnRMc" target="_blank" rel="noopener">📺 Watch rails go rails on YouTube</a></p>
        `,
        date: 'January 22, 2026',
        image: 'https://i.ytimg.com/vi/fuhE6PYnRMc/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=fuhE6PYnRMc',
        category: 'DESTRUCTION',
        readTime: '4 min read'
    },
    {
        slug: '1-dollar-vs-250-million-private-island',
        title: '$1 vs $250,000,000 Private Island — The Ultimate Comparison',
        excerpt: 'MrBeast compared a literal dollar store vacation to a quarter-billion dollar island experience. The gap is... significant.',
        content: `
            <p>We all know there's a difference between rich and poor vacations. But until you see a $1 vacation versus a $250,000,000 vacation side by side, you don't REALLY understand the gap.</p>
            
            <h2>The $1 Experience</h2>
            <ul>
                <li>Dollar store snacks (off-brand everything)</li>
                <li>Sleeping on the ground (with a $1 tarp for luxury)</li>
                <li>Entertainment: staring at nature (free)</li>
                <li>Vibes: camping but worse</li>
            </ul>
            
            <h2>The $250,000,000 Experience</h2>
            <ul>
                <li>Private island with staff waiting on you</li>
                <li>A literal MANSION on the ISLAND</li>
                <li>Private chef, unlimited everything, golf carts, boats</li>
                <li>The island has its own airport. AN AIRPORT.</li>
                <li>Vibes: being a billionaire for a day</li>
            </ul>
            
            <h2>The Lesson</h2>
            <p>Money can't buy happiness, but it can definitely buy a better vacation. The guys on the $1 experience were miserable after day one. The guys on the island were doing water sports on gold-plated jet skis (okay, I made that up, but basically).</p>
            
            <p><a href="https://www.youtube.com/watch?v=iogcY_4xGjo" target="_blank" rel="noopener">📺 Watch inequality in action on YouTube</a></p>
        `,
        date: 'January 20, 2026',
        image: 'https://i.ytimg.com/vi/iogcY_4xGjo/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=iogcY_4xGjo',
        category: 'COMPARISON',
        readTime: '5 min read'
    },

    // ===== ОРИГИНАЛЬНЫЕ СТАТЬИ (ОБНОВЛЁННЫЕ) =====
    {
        slug: 'mrbeast-uk-tour-2026-announcement',
        title: 'MrBeast Goes International — Epic Global Challenges Announced!',
        excerpt: 'MrBeast is expanding his legendary challenges across the globe! Here\'s everything we know about the upcoming international events.',
        content: `
            <p><strong>HUGE NEWS!</strong> MrBeast has officially announced that he's taking his legendary challenge videos to an international scale. Multiple countries, massive productions, and the most ambitious content yet!</p>
            
            <h2>What We Know So Far</h2>
            <ul>
                <li><strong>Location:</strong> Multiple countries across Europe and beyond</li>
                <li><strong>Scale:</strong> Biggest production crew ever assembled</li>
                <li><strong>Contestants:</strong> Thousands of participants from around the world</li>
                <li><strong>Filming:</strong> Already in progress throughout 2026</li>
            </ul>
            
            <h2>Why This Is Massive</h2>
            <p>MrBeast has never done anything at this scale before. We're talking about coordinating film crews in multiple time zones, challenges that span entire cities, and content that will break YouTube records.</p>
            
            <h2>Fan Community Response</h2>
            <ul>
                <li>Social media is going absolutely WILD</li>
                <li>Fan meetups being organized globally</li>
                <li>MrBeast merchandise selling out everywhere</li>
                <li>The Beast Philanthropy team is also expanding operations</li>
            </ul>
            
            <p><strong>🌍 Stay tuned for more updates on this incredible journey! 🌍</strong></p>
        `,
        date: 'January 18, 2026',
        image: 'https://i.ytimg.com/vi/erLbbextvlY/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=erLbbextvlY',
        category: 'NEWS',
        readTime: '3 min read'
    },
    {
        slug: 'how-to-apply-mrbeast-challenge-2026',
        title: 'Ultimate Guide: How To Apply For a MrBeast Challenge in 2026',
        excerpt: 'Complete guide on how to apply, what to expect, and insider tips to boost your chances of being selected.',
        content: `
            <p>So you want to be in a MrBeast video? Join the club — literally millions of people apply. But don't worry, I've got the ultimate guide to help you stand out from the crowd.</p>
            
            <h2>Basic Requirements (The Boring But Necessary Stuff)</h2>
            <ul>
                <li>Must be 18 years or older (sorry kids, blame legal)</li>
                <li>Valid ID required (they gotta make sure you're real)</li>
                <li>Willing to sign an NDA (spoilers are not allowed)</li>
                <li>Available for filming dates (clear your schedule)</li>
                <li>Can travel if needed</li>
            </ul>
            
            <h2>How to Actually Stand Out</h2>
            <p>Here's the tea — MrBeast's team reviews MILLIONS of applications. Literally. So here's how to not be background noise:</p>
            <ul>
                <li><strong>Tell a story:</strong> Don't just list facts about yourself. TELL THEM something memorable.</li>
                <li><strong>Be specific:</strong> Why MrBeast? Why this challenge? Why YOU?</li>
                <li><strong>Show personality:</strong> If there's a video component, BE ENERGETIC. Don't be boring.</li>
                <li><strong>Be honest:</strong> They can smell fake from a mile away.</li>
                <li><strong>Follow instructions:</strong> You'd be shocked how many people don't.</li>
            </ul>
            
            <h2>What NOT To Do</h2>
            <ul>
                <li>Don't beg. It's desperate and not entertaining.</li>
                <li>Don't lie about your situation.</li>
                <li>Don't spam multiple applications.</li>
                <li>Don't show up uninvited (yes, people try this).</li>
            </ul>
            
            <p><strong>Now go apply! What are you waiting for?</strong></p>
        `,
        date: 'January 16, 2026',
        image: 'https://i.ytimg.com/vi/r7zJ8srwwjk/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=r7zJ8srwwjk',
        category: 'GUIDE',
        readTime: '6 min read'
    },
    {
        slug: 'squid-game-the-challenge-aftermath',
        title: 'Squid Game: The Challenge Winner — Where Are They Now?',
        excerpt: 'The winner of MrBeast\'s real-life Squid Game walked away with $4.56 MILLION. Here\'s what happened next.',
        content: `
            <p>Remember when MrBeast recreated Squid Game with 456 real contestants and gave away $4.56 MILLION to the winner? Yeah, that actually happened. Let's catch up on the aftermath.</p>
            
            <h2>A Quick Recap</h2>
            <p>MrBeast built a MASSIVE set recreating the famous Squid Game games. 456 contestants entered. One winner left with life-changing money. It was the most ambitious YouTube project ever, and honestly, it delivered.</p>
            
            <h2>The Games</h2>
            <ul>
                <li>Red Light, Green Light (iconic, terrifying, iconic)</li>
                <li>Honeycomb/Dalgona challenge (carving stress)</li>
                <li>Tug of War (actual athletic competition)</li>
                <li>Marbles (trust issues developed)</li>
                <li>Glass Bridge (pure anxiety)</li>
                <li>Final games (no spoilers!)</li>
            </ul>
            
            <h2>The Winner's Journey</h2>
            <p>From random applicant to millionaire. The winner has since paid off debts, helped family, and started investing in their future. Classic "money well spent" story.</p>
            
            <h2>What We Learned</h2>
            <p>That MrBeast can literally do ANYTHING. Also that we would all probably lose at Red Light, Green Light because we can't stand still.</p>
            
            <p><a href="https://www.youtube.com/watch?v=0e3GPea1Tyg" target="_blank" rel="noopener">📺 Watch the madness on YouTube</a></p>
        `,
        date: 'January 14, 2026',
        image: 'https://i.ytimg.com/vi/0e3GPea1Tyg/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=0e3GPea1Tyg',
        category: 'INTERVIEW',
        readTime: '7 min read'
    },
    {
        slug: 'biggest-video-ever-teaser-2026',
        title: 'MrBeast Teases His "Biggest Video EVER" — What Is He Planning?',
        excerpt: 'Jimmy just dropped hints about an upcoming video that\'s apparently bigger than anything he\'s ever done. The internet is SPIRALING.',
        content: `
            <p>MrBeast tweeted "biggest video ever" and the internet immediately went into detective mode. What could possibly top Beast Games? Or the Squid Game recreation? Let's speculate wildly.</p>
            
            <h2>The Hints We've Gotten</h2>
            <ul>
                <li><strong>Budget:</strong> Rumored to be over $10 MILLION (that's more than most movie budgets)</li>
                <li><strong>Location:</strong> Multiple countries involved (international chaos)</li>
                <li><strong>Contestants:</strong> Potentially over 1,000 participants</li>
                <li><strong>Timeline:</strong> Expected sometime February 2026</li>
            </ul>
            
            <h2>Fan Theories (Some Reasonable, Some Unhinged)</h2>
            <ul>
                <li>Beast Games Season 2? The Amazon show was MASSIVE</li>
                <li>A competition across multiple continents?</li>
                <li>Buying an entire town and rebuilding it?</li>
                <li>Space video? (He HAS talked about it...)</li>
                <li>World's largest treasure hunt?</li>
            </ul>
            
            <h2>Why We're Hyped</h2>
            <p>Every time MrBeast says "biggest ever," he delivers. The man doesn't know the word "exaggeration." When he says big, he means BIG. From Beast Games to world records, Jimmy always exceeds expectations.</p>
            
            <p><strong>Stay tuned. Subscribe. Set notifications. This is going to be insane.</strong></p>
        `,
        date: 'January 12, 2026',
        image: 'https://i.ytimg.com/vi/3jS_yEK8qVI/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=3jS_yEK8qVI',
        category: 'ANNOUNCEMENT',
        readTime: '4 min read'
    }
];

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find(a => a.slug === slug);
}

export function getAllArticles(): Article[] {
    return articles;
}
