"use strict";

// 'catching the dom'
const btn = document.querySelectorAll(".button");
const body = document.querySelector(".body");
const storyTime = document.querySelector(".storytime");
const butts = document.querySelector(".buttons");
const butty = document.querySelector(".bottom-buttons");
const contain = document.querySelector(".container");
const typeStory = document.querySelector(".story");
const horrorBtn = document.getElementById("horror");
const loveBtn = document.getElementById("love");
const shakesBtn = document.getElementById("shakes");
const searchBtn = document.getElementById("search");
const trillBtn = document.getElementById("thrillers");
const title = document.querySelector(".title");
const Add = document.getElementById("add");
const Minus = document.getElementById("minus");
const Reset = document.getElementById("reset");
const mode = document.getElementById("mode");
const entrance = document.querySelector(".search-select");
const search = document.querySelector(".search-input");

// 'stories'
const horror = [
  {
    title: "the cabin in the woods",
    story: [
      "A group of friends decided to take a weekend trip to a secluded cabin in the woods. They were all excited to spend some time away from the city, but as they got closer to the cabin, they started to feel uneasy.",
      "The cabin was old and dilapidated, with weeds growing up around the sides. The front porch was sagging, and there were broken windows that had been boarded up. But they had already paid for the trip, so they decided to go in and make the best of it.",
      "As soon as they stepped inside the cabin, they knew something was wrong. There was an overwhelming smell of decay, and the air was thick with dust. But they tried to ignore it and unpack their bags.",
      "That's when they found the journal. It was an old, leather-bound book that had been left on a table in the living room. They opened it up, and they found entries dating back decades. The entries were all from previous guests at the cabin, and they all had one thing in common - they were all terrified of something they had seen in the woods.",
      "The group was skeptical at first, but as the weekend wore on, they started to see things too. They saw dark shapes moving through the trees, and they heard strange whispers in the night. And then, on the final night of their trip, they saw something that made them all run for their lives.",
      "It was a creature, tall and thin, with skin as black as night. Its eyes glowed red in the darkness, and it moved with a strange, jerky gait. They could hear its bones cracking as it moved, and they knew they had to get out of there.",
      "They ran for the car, but the creature was right behind them. They could feel its breath on their necks as they fumbled with the keys. Finally, they got the car started, and they sped away from the cabin as fast as they could.",
      "They never went back to that cabin in the woods, but they all knew that the creature was still out there, waiting for its next victim.",
    ],
  },
  {
    title: "the doll",
    story: [
      "There was a young girl who loved playing with dolls. She had a collection of them in her room, and she would spend hours dressing them up and making up stories about them.",
      "But there was one doll that she loved more than all the others. It was an old doll that had belonged to her grandmother, and it had been passed down through the family for generations.",
      "The doll was beautiful, with long blonde hair and bright blue eyes. But there was something about it that made the girl uneasy. Whenever she looked into the doll's eyes, she felt like they were staring back at her with malice.",
      "One night, the girl woke up to find the doll sitting at the foot of her bed. Its eyes seemed to be glowing in the dark, and she could hear it whispering to her in a voice that was not quite human.",
      "The girl was terrified, but she tried to convince herself that it was just her imagination. She put the doll back on the shelf and went back to sleep.",
      "But the next night, the doll was back. And the night after that. Every night, the girl would wake up to find the doll sitting at the foot of her bed, whispering to her in that same strange voice.",
      "Finally, the girl's parents found her dead in her bed. The doll was sitting nextto her, its eyes still glowing in the dark. The police could find no signs of forced entry or foul play, but the doll was gone.",
      "Years later, a new family moved into the house. They found the old doll in a box in the attic, and they gave it to their daughter to play with. And every night, the girl would wake up to find the doll sitting at the foot of her bed, whispering to her in that same strange voice.",
    ],
  },
  {
    title: "the abandoned hospital",
    story: [
      "There was an old hospital on the outskirts of town that had been abandoned for years. No one knew why it had closed down, but there were rumors of strange experiments and unethical practices.",
      "A group of teenagers decided to explore the hospital one night. They had heard the stories and wanted to see if they were true. As they made their way through the darkened hallways, they heard strange noises and saw things moving in the shadows.",
      "They found a room filled with old medical equipment, and one of the boys decided to try on a pair of surgical gloves. But as soon as he put them on, he felt a strange sensation in his hands. They started to swell up, and he couldn't get the gloves off.",
      "The other kids tried to help him, but the gloves seemed to be fused to his skin. And then they heard footsteps coming down the hallway. They hid in a nearby room, but they could hear someone or something coming closer and closer.",
      "And then the door burst open. In the dim light, they could see a figure in a lab coat, with a face that was twisted and distorted. It lunged at them, and they all ran for their lives.",
      "They never spoke of the incident again, but the boy with the swollen hands was never the same. He had nightmares every night, and his hands remained swollen and painful for the rest of his life. And every time he looked at them, he could hear the sound of footsteps coming down the hallway of that abandoned hospital.",
    ],
  },
  {
    title: "the haunted house",
    story: [
      "There was a house in the neighborhood that everyone said was haunted. It had been abandoned for years, and there were rumors of strange noises and eerie lights coming from the windows at night.",
      "One Halloween, a group of kids dared each other to go inside the haunted house. They were all nervous, but they didn't want to show any fear in front of their friends.",
      "As soon as they stepped inside, they knew something was wrong. The air was thick with dust and cobwebs, and there was a musty smell that made their eyes water.",
      "They made their way through the darkened rooms, and they heard strange noises coming from the walls. They saw shadows moving in the corners of their eyes, and they felt a cold breeze blowing through the halls.",
      "And then they saw her - a woman in a white dress, with long black hair and pale skin. She was standing at the end of the hallway, staring at them with empty eyes.",
      "The kids were terrified, but they tried to run past her. But as they got closer, they realized that she wasn't real - she was just a ghostly apparition.",
      "They finally made it out of the house and ran back to their own homes, never speaking of the incident again. But every Halloween after that, they could see the ghostly figure in the window of that haunted house, beckoning them to come back inside.",
    ],
  },

  {
    title: "the haunted mansion",
    story: [
      "The old mansion had been abandoned for years, but the young couple who bought it thought they could fix it up and turn it into their dream home. But as soon as they moved in, strange things began to happen. Doors would slam shut on their own, footsteps could be heard echoing through the empty halls, and objects would move without explanation.",
      "The couple tried to ignore the strange occurrences at first, but things only got worse. They would wake up in the middle of the night to find their furniture rearranged or broken, and sometimes they would find strange symbols etched into the walls or floors. They began to feel like they were being watched at all times, even when they were alone.",
      "As the weeks went on, the couple started to experience terrifying visions and nightmares. They would see ghosts and other supernatural entities lurking in the shadows, and sometimes they would even feel as if they were being physically attacked by something they couldn't see.",
      "Finally, they decided to seek the help of a paranormal investigator. The investigator confirmed that the mansion was indeed haunted by several entities, including the ghost of a former owner who had died in a tragic accident.",
      "The couple realized that they could never live in the mansion safely, so they abandoned it and moved away. But they could never forget the horrors they had experienced, and they always wondered if the entities that haunted the mansion were still there, waiting for their next victims.",
    ],
  },
  {
    title: "the cursed doll",
    story: [
      "When the family found the old porcelain doll in the attic, they had no idea that it was cursed. At first, they thought it was a beautiful antique, but as soon as they brought it into their home, strange things began to happen. They would hear the doll's voice in the middle of the night, and sometimes they would find it in different parts of the house, as if it had moved on its own.",
      "The family soon realized that the doll was possessed by an evil spirit, and they tried to get rid of it. But no matter what they did, the doll always found its way back to them, as if it was trying to exact revenge on them for disturbing it.",
      "As the months went on, the family's health began to deteriorate. They would suffer from nightmares and hallucinations, and sometimes they would wake up with unexplained bruises and scratches on their bodies. They knew that the doll was to blame, but they didn't know how to get rid of it.",
      "One day, a paranormal investigator came to their home and offered to help them. He performed a ritual to cleanse the house of evil spirits, and finally the doll disappeared, never to be seen again.",
      "The family was relieved, but they could never forget the terror they had experienced at the hands of the cursed doll.",
    ],
  },
  {
    title: "the abandoned hospital",
    story: [
      "The old hospital had been abandoned for years, but a group of teenagers decided to explore it one night. At first, they thought it was just a spooky adventure, but as soon as they entered the building, they realized that they were not alone.",
      "Strange noises could be heard coming from the dark corners of the hospital, and sometimes they would see shadows moving in the distance. The teenagers tried to leave, but they found that the doors were locked, trapping them inside.",
      "As the night went on, the teenagers started to disappear one by one. Some were found with strange symbols etched into their skin, while others simply vanished . The remaining teenagers were terrified and tried to find a way out, but they were met with more supernatural occurrences at every turn. They could hear screams and moans echoing through the empty halls, and sometimes they would see ghosts or other entities lurking in the shadows.",
      "Finally, they stumbled upon an old laboratory, where they found a diary belonging to a mad scientist who had conducted terrible experiments on patients at the hospital. The scientist had been trying to create an elixir of eternal life, but instead he had created a curse that had trapped the spirits of the patients inside the hospital forever.",
      "The teenagers realized that they had to break the curse if they wanted to escape alive. They followed the instructions in the diary and performed a ritual to banish the spirits from the hospital. The curse was finally broken, and the doors of the hospital opened, allowing the teenagers to escape.",
      "But they could never forget the horrors they had witnessed inside the abandoned hospital, and they knew that they would carry the memories with them for the rest of their lives.",
    ],
  },
  {
    title: "the demon possessed house",
    story: [
      "When the family moved into the old house, they had no idea that it was possessed by a demon. At first, they thought it was just a series of strange occurrences, but as time went on, the demon's presence became more and more evident.",
      "The family would hear strange noises in the middle of the night, and sometimes they would see objects moving on their own. They tried to ignore it, but things only got worse. The demon began to torment them, causing the family members to suffer from terrible nightmares and hallucinations.",
      "Finally, they sought the help of a priest, who performed an exorcism on the house. But the demon fought back, and the exorcism turned into a terrifying battle between good and evil. The family watched in horror as the demon possessed their bodies and caused them to do terrible things.",
      "Just when it seemed like all was lost, the priest was able to banish the demon back to hell. The family was relieved, but they could never forget the horrors they had experienced. They knew that the house would always be a place of evil, and they never returned there again.",
      "But the memory of the demon possessed house haunted them for the rest of their lives, and they always wondered if the demon was still out there, waiting for its next victims.",
    ],
  },
  {
    title: "the witch's curse",
    story: [
      "The small town had always been peaceful, until a new resident moved in. She was an old woman, rumored to be a witch, and the townspeople quickly became afraid of her. But the woman didn't seem to care about their fear, and she continued to live in her small cottage on the edge of town.",
      "As time went on, strange things began to happen in the town. Crops failed, animals died, and people fell ill. The townspeople blamed the witch, and they decided to take matters into their own hands.",
      "One night, a group of men stormed the witch's cottage and burned it to the ground. But before she died, the witch put a curse on the town, promising that they would suffer for what they had done.",
      "The curse began to take effect immediately. Strange creatures began to appear in the town, and people started to disappear without a trace. The townspeople were terrified, and they realized that they had made a terrible mistake.",
      "Finally, a brave woman decided to face the witch's curse head-on. She traveled to the ruins of the witch's cottage and performed a ritual to break the curse. The curse was lifted, and the strange occurrences in the town stopped.",
      "The townspeople were grateful to the brave woman who had saved them, but they could never forget the horrors they had experienced. They knew that they had been foolish to fear the witch, and they vowed to never let fear drive them to such extreme actions again.",
      "Years later, a new resident moved into the small town. She was an old woman, with kind eyes and a gentle smile. The townspeople welcomed her with open arms, and they soon realized that she was not a witch, but a healer. She had come to the town to help the sick and the wounded, and she became a beloved member of the community.",
      "The memory of the witch's curse still lingered in the town, but the people had learned from their mistakes. They had learned to confront their fears instead of letting them control their actions, and they had learned to accept those who were different from them. And so, the small town continued to thrive, free from the curse that had once threatened to destroy it.",
    ],
  },
];
const mystery = [
  {
    title: "the chase",
    story: [
      "As soon as the bank robber stepped out of the building with the bag of cash, the police officers were hot on his heels. The robber sprinted down the street, weaving in and out of pedestrians, with the cops in close pursuit.",
      "The robber turned a corner and saw a parked motorcycle with the keys still in the ignition. Without hesitation, he hopped on the bike and roared off down the alley. The cops were now chasing him on foot, but he was too fast for them.",
      "Suddenly, the robber saw a police cruiser blocking the end of the alley. He swerved the motorcycle to the side and jumped off, just as the cruiser smashed into the bike. The robber ran to the left, darting into a small alleyway between two buildings.",
      "As the police officers approached, they split up to try and catch the robber. One of them turned into the alley, but was immediately ambushed by the robber, who had hidden behind a dumpster. The robber quickly overpowered the officer and took his gun.",
      "Now armed, the robber continued his escape, running down the alley and into a busy street. The cops were still hot on his heels, but the robber managed to dodge them, sprinting through crowds of people and leaping over obstacles.",
      "Finally, the robber reached a nearby parking garage. He raced up the levels of the garage, until he reached the roof. There, he found a helicopter waiting for him, with the rotors already spinning.",
      "The robber leaped into the helicopter and lifted off, just as the police arrived on the roof. But it was too late - the robber was gone, with the cash and his freedom.",
    ],
  },
  {
    title: "the disappearance of the hotel guests",
    story: [
      "The guests at the luxurious Grand Hotel had all checked in on the same day, but now, three days later, they were all missing. The hotel staff had no idea where they had gone, and the local police were stumped. There were no signs of a struggle or foul play, and all of the guests' personal belongings were still in their rooms. As the investigation progressed, a mysterious figure was spotted lurking around the hotel, leading the detectives to believe that perhaps the guests were not the only ones who had disappeared...",
    ],
  },
  {
    title: "the vanishing jewelry store",
    story: [
      "One morning, the owners of a local jewelry store arrived to open up, only to find that the entire store was empty - all of the jewelry had been stolen. The security footage showed no sign of a break-in or any intruders, and the store's alarm system had not been triggered. As the police investigated, they discovered a series of unusual clues that seemed to point to an inside job. But who could have pulled off such a brazen theft, and how did they manage to evade detection?",
    ],
  },
  {
    title: "the case of the missing heirloom",
    story: [
      "When a priceless family heirloom goes missing from the home of the wealthy DuPont family, the patriarch hires a private investigator to track it down. The investigation leads the detective down a twisting path of secrets and lies, as he uncovers a web of family rivalries, hidden agendas, and long-buried grudges. As he gets closer to the truth, he realizes that the heirloom may be more than just a valuable piece of jewelry - it could hold the key to unlocking a decades-old mystery.",
    ],
  },
  {
    title: "the secret of the abandoned mansion",
    story: [
      "The crumbling mansion on the outskirts of town had long been rumored to be haunted, but when a group of teenagers decided to explore it one night, they discovered something even more terrifying. Inside, they found a hidden room filled with strange artifacts and cryptic symbols, as well as a journal that hinted at a dark and mysterious past. As they delved deeper into the mansion's secrets, they realized that they were not alone - and that whatever had been hiding in the shadows was now hunting them.",
    ],
  },
  {
    title: "the unexplained disappearance of the research team",
    story: [
      "A team of scientists had been sent to a remote research station in the Arctic to study the effects of climate change, but after several weeks of radio silence, a rescue team was sent to investigate. When they arrived, they found the station deserted, with no sign of the scientists or their equipment. As the search continued, the rescuers began to uncover a series of strange clues that suggested that the disappearance was not simply a matter of scientific research gone wrong - there was something much more sinister at play.",
    ],
  },
  {
    title: "the disappearance of olivia johnson",
    story: [
      "Olivia Johnson was a successful businesswoman with a promising career ahead of her. But one day, she disappeared without a trace. The police were baffled by the case - there were no signs of a struggle, and no one had seen anything suspicious.As the days turned into weeks, the police began to suspect foul play. They questioned everyone who knew Olivia, but no one had any information that could help. It was as if she had vanished into thin air.Then, one day, a hiker stumbled upon a shallow grave in a remote area outside of town. The body was badly decomposed, but the police were able to identify it as Olivia Johnson. An autopsy revealed that she had been strangled.The investigation continued, but leads were scarce. However, one witness came forward with a crucial piece of information. He had seen a man leaving the area where Olivia's body was found, carrying a shovel and covered in dirt. The police were able to use this information to track down the suspect, who was eventually arrested and charged with murder.",
    ],
  },
  {
    title: "the mysterious painting",
    story: [
      "A priceless painting went missing from a museum one night, and the police were stumped. The painting had been on display in a heavily guarded room, with alarms and security cameras, but there was no sign of forced entry.The investigation led nowhere, until one day, a man walked into the museum and claimed to have information about the missing painting. He was a known art thief, and the police were suspicious of his motives, but they decided to hear him out.The man claimed that he knew where the painting was, and that he could recover it for a fee. The police were hesitant, but they didn't have any other leads, so they agreed to the deal. The man led them to a small apartment in a run-down part of town, where the painting was hidden behind a false wall.But as soon as the police recovered the painting, they realized that something was off. It was a perfect replica - the original had been swapped with a fake. The man who had led them to the apartment had disappeared, and the police were back to square one.It wasn't until months later that the truth was uncovered. The museum's security guard had been in on the heist, and had swapped the real painting with a fake in the middle of the night. He had then sold the original to a wealthy collector, who had no idea that it was stolen. The guard was eventually caught and charged with theft, but the painting was never recovered.",
    ],
  },
  {
    title: "the lost city",
    story: [
      "As the group of adventurers made their way through the dense jungle, they couldn't help but feel a sense of excitement and apprehension. They had heard rumors of a lost city, hidden deep within the jungle, filled with untold treasures and secrets.After weeks of grueling travel, they finally reached the edge of the jungle and set up camp. The next day, they set out on foot, following a winding river that was said to lead to the city.As they journeyed deeper into the jungle, the terrain grew more treacherous, and they encountered all sorts of dangers, from venomous snakes to deadly traps. But they pressed on, driven by the promise of the lost city.Finally, they came upon a massive stone archway, overgrown with vines and moss. It was a sign that they were getting close. They pushed through the thick vegetation and soon found themselves standing before the entrance to the city.It was a sight to behold - towering stone structures, intricate carvings, and hidden passageways. They explored every corner of the city, finding hidden treasure troves and mysterious artifacts.But as they delved deeper into the city, they began to realize that they were not alone. There were others there - dangerous, treacherous people who would stop at nothing to keep the secrets of the lost city hidden.The adventurers found themselves in a race against time, fighting off their enemies and uncovering the secrets of the city before it was too late. In the end, they emerged victorious, with untold riches and knowledge that would change the world.",
    ],
  },
  {
    title: "the mysterious mansion",
    story: [
      "The mansion was said to be cursed - a place where terrible things had happened and evil lurked around every corner. But when a group of friends stumbled upon it on a dare, they could not resist exploring its shadowy halls.As they wandered through the mansion, they began to experience strange phenomena - doors that opened and closed on their own, eerie whispers in the darkness, and inexplicable chills. But they pressed on, driven by curiosity and a desire for adventure.Soon, they discovered a hidden passageway, leading deep into the bowels of the mansion. As they descended further into the darkness, they began to realize that they were not alone. Something was down there with them - something that wanted them dead.They fought for their lives, battling monsters and facing their deepest fears. But as they drew closer to the heart of the mansion, they began to unravel the secrets of its past.They learned that the mansion had once been the home of a powerful sorcerer, who had used his dark magic to enslave and torment innocent people. They discovered his hidden chamber, filled with forbidden artifacts and ancient tomes.In the end, they destroyed the sorcerer and his cursed mansion, freeing the souls that he had trapped within its walls. But they knew that they would never forget the horrors that they had faced - and that they would always be drawn to the mysteries and terrors of the unknown.",
    ],
  },
];

const love = [
  {
    title: "The Library Book",
    story:
      "During a trip to the library, Sarah noticed a man reading her favorite book. She couldn't resist striking up a conversation and soon found herself in a deep conversation about literature. His name was Jack, and he was charming, witty, and incredibly intelligent. They exchanged numbers and met up for a coffee later that week. As they talked, they discovered they had more in common than just a love for books. They both loved art, travel, and good food. Over the next few months, they went on several dates and fell deeply in love. They often returned to the library together and would sit in the same corner and read books to each other. When they got married, they chose the library as the location for their wedding ceremony and reception. It was a beautiful day filled with love, books, and literary references.",
  },
  {
    title: "The Coffee Shop",
    story:
      "Emma was a regular at the coffee shop down the street from her office. One day, she struck up a conversation with the barista, Jack, who was new to the shop. They bonded over their shared love for coffee and soon started meeting up outside of work hours. They talked about their lives, their dreams, and their passions. Jack was charming, funny, and always knew how to make her laugh. As they got to know each other better, their relationship deepened into a passionate romance. They continued to meet at the coffee shop, but now it held a special place in their hearts. Jack eventually proposed to Emma at the coffee shop, with a ring hidden in her favorite latte. She was surprised and overjoyed, and they hugged and kissed as the other customers cheered.",
  },
  {
    title: "the beach date",
    story:
      "John and Emily had been dating for a few weeks when they decided to go on a romantic date to the beach. They packed a picnic and set out to watch the sunset. As they talked and got to know each other better, they realized how much they had in common. They shared a love of adventure, good food, and travel. John was thoughtful, kind, and always knew how to make Emily feel special. They went for a walk along the beach and as they watched the waves crashing on the shore, they shared their first kiss. It was magical and they both felt like they had found the missing piece of their puzzle. They continued to date and travel together, exploring new places and creating new memories. Eventually, John proposed to Emily on the same beach where they had shared their first kiss, with a ring hidden in a seashell. Emily said yes, and they hugged and kissed as the waves crashed behind them.",
  },
  {
    title: "the proposal",
    story:
      "Tom and Sarah had been dating for years and Tom knew he wanted to spend the rest of his life with her. He decided to propose to her on a hike up their favorite mountain. They set out early in the morning and as they hiked, Tom reminisced about all the adventures they had been on together. He talked about the time they went camping in the mountains and saw a shooting star, the time they went on a road trip to the coast and watched the sunrise, and all the other moments that had brought them closer together. When they reached the top of the mountain, Tom got down on one knee and asked Sarah to marry him. She said yes, and they hugged as the sun set behind them. They got married the following year in a small ceremony on the same mountain top. It was a beautiful day filled with love, laughter, and breathtaking views.",
  },
  {
    title: "the wedding singer",
    story:
      "When Jameswas asked to be the wedding singer at his friend's wedding, he had no idea he would meet the love of his life. As he performed, he noticed a beautiful woman in the audience singing along to every word. Her name was Lily, and she had a stunning voice herself. After the performance, James introduced himself and they hit it off right away. They talked about their love for music and discovered they both played guitar. Over the next few weeks, they started playing music together and writing their own songs. As they created music together, their bond grew stronger and deeper. They performed at open mic nights together and eventually started a band. James knew he was in love with Lily and decided to ask her to marry him during one of their gigs. As they played their last song, he got down on one knee and asked her to be his wife. She said yes, and they hugged as the crowd cheered. They got married a year later and continued to make beautiful music together as husband and wife.",
  },

  {
    title: "the coffee shop connection",
    story:
      "Samantha had always been a regular at the local coffee shop, but she never expected to find love there. One day, as she was waiting for her order, she struck up a conversation with a handsome stranger. They talked about their favorite books and music and found they had a lot in common. Samantha was surprised at how easy it was to talk to him and the connection they shared. They exchanged numbers and started going on coffee dates every week. As they got to know each other more, they realized they had found something special. They fell in love over lattes and cappuccinos and eventually got engaged right in the same coffee shop where they first met. The coffee shop became a symbol of their love story and they continued to go there for their weekly coffee dates even after they got married.",
  },

  {
    title: "the lost locket",
    story:
      "As a little girl, Emily had a special locket that her mother gave her. She wore it every day and it made her feel close to her mother, who had passed away. But one day, while she was playing at the park, she lost it. Emily searched high and low for the locket, but it was nowhere to be found. Years went by and Emily grew up, but she never forgot about the locket. It held so many memories and feelings for her. One day, she was browsing in an antique store and saw a locket that looked just like the one she lost. She bought it and wore it every day, but she still felt like something was missing. One day, while she was walking in the park, she bumped into a man who was walking his dog. As they struck up a conversation, Emily noticed that he was wearing a necklace with a locket that matched hers perfectly. It turned out that he had found her lost locket all those years ago and had been wearing it ever since. Emily was amazed and overjoyed. As they got to know each other more, they fell in love and decided to combine their lockets into one necklace that they both wore. It became a symbol of their shared love and a reminder that sometimes the things we lose can come back to us in unexpected ways.",
  },

  {
    title: "the language of love",
    story:
      "Anna was an American student studying abroad in Italy. She didn't speak much Italian, but she was determined to immerse herself in the language and culture. One day, while she was exploring the city, she got lost and couldn't find her way back to her apartment. She asked a passerby for directions, but he didn't speak English. As they gestured and tried to communicate with each other, they both started laughing. Despite the language barrier, they felt a connection. They started seeing each other every day and would try to teach each other their respective languages. As they learned more about each other, they fell in love. When Anna had to return to the United States, they promised to stay in touch and visit each other. They eventually got married and now speak both English and Italian fluently. Their love story became a beautiful example of how language and cultural differences can bring people together and create something special.",
  },

  {
    title: "the wedding planner's surprise",
    story:
      "Olivia had always dreamed of being a wedding planner. She loved making people's special day perfect. When she was hired to plan her high school crush's wedding, she was excited to help make his day perfect too. But she was surprised to find out that he was still single. As they worked together to planthe wedding, Olivia found herself falling for him all over again. She tried to ignore her feelings and focus on her job, but it was hard when they were spending so much time together. One day, while they were taste-testing cakes, he told her that he had always had a crush on her in high school but was too shy to say anything. Olivia couldn't believe it. She had been too afraid to confess her own feelings back then. As they got closer and closer, Olivia knew that she had to tell him how she felt. On the day of the wedding, after everything was set up and the guests had arrived, Olivia pulled him aside and confessed her feelings. To her surprise, he felt the same way. They shared their first kiss surrounded by flowers and happy guests. The wedding planner had become the bride and they lived happily ever after.",
  },

  {
    title: "the unexpected love letter",
    story:
      "Sophie had always been a hopeless romantic. She loved the idea of love letters and would often daydream about receiving one. One day, as she was walking to class, she noticed a letter sticking out of her backpack. She opened it and was surprised to find a heartfelt love letter from a secret admirer. The letter was full of compliments and sweet words. Sophie was over the moon. She had never felt so special before. She started looking around to see if she could spot her secret admirer, but no one seemed to stand out. Every day, she would check her backpack, hoping for another letter. After a few weeks, the letters stopped coming and Sophie was disappointed. She had never found out who her secret admirer was. But one day, as she was walking through the park, she saw a man sitting on a bench, holding a pen and a piece of paper. As she got closer, she realized that it was him. He had been the one writing the letters all along. They struck up a conversation and started dating. Sophie was overjoyed. She had always dreamed of a fairytale romance and this unexpected love letter had brought it to life.",
  },
  {
    title: "the bookstore encounter",
    story:
      "Julia was an avid reader and spent most of her weekends browsing the shelves at her favorite bookstore. One Saturday, she noticed a man browsing in the same section as her. They struck up a conversation about their favorite authors and soon found themselves lost in a passionate debate about the merits of classic literature versus modern bestsellers. As the store closed, they exchanged numbers and promised to meet up again soon. Over the next few months, they explored the city together, trying out new cafes, attending book readings, and discussing their shared love of literature. They fell deeply in love and, one day, the man proposed in the very same bookstore where they had first met. They were married surrounded by books, with their favorite authors as witnesses.",
  },
  {
    title: "the summer fling",
    story:
      "Jessica had just finished her freshman year of college and was looking forward to a summer of freedom before heading back to campus. She met a guy named Ryan at a beach party and they hit it off immediately. Over the next few weeks, they spent all their time together, exploring the town and lounging on the beach. Jessica knew that their relationship was only meant to last for the summer, but she couldn't help falling for Ryan. As the summer drew to a close, they promised to stay in touch but both knew that long distance rarely worked out. However, a few months later, Ryan surprised Jessica by showing up at her college. He had transferred to her school so they could be together. They've been inseparable ever since, and even though their love story started as a summer fling, it turned into a lifelong romance.",
  },
  {
    title: "the cafe crush",
    story:
      "Katie loved spending her mornings at the same local cafe, sipping coffee and reading a book. She noticed a handsome stranger sitting across from her one day and couldn't resist striking up a conversation. They talked for hours and discovered they had a lot in common. As the weeks went by, they started meeting up more and more often, always at the same cafe. They fell in love over lattes and pastries, and eventually, the man proposed right there in the cafe where they had first met. They got married in a small ceremony with only their closest friends and family, and they still go back to the cafe on their anniversary every year to relive that magical day.",
  },
  {
    title: "the beach wedding",
    story:
      "Alex and Sarah had always dreamed of a beach wedding, so when they got engaged, they knew exactly where to tie the knot. They invited all their family and friends to join them on the sand for a beautiful sunset ceremony. But as the wedding day approached, the forecast called for rain. They were devastated. But on the day of the wedding, the skies cleared up just in time for the ceremony. The sun shone brightly as they said their vows with the sound of waves crashing in the background. It was the perfect day. They danced the night away under the stars, surrounded by the people they loved most. As they left the beach, hand in hand, they knew that their love was stronger than any storm.",
  },
  {
    title: "the unexpected reunion",
    story:
      "Abby had always regretted breaking up with her high school sweetheart, Jack. They had gone their separate ways after graduation and Abby had never been able to find someone who made her feel the same way Jack had. One day, she was walking through the park and saw a man sitting on a bench. She didn't recognize himat first, but as she got closer, she realized it was Jack. They hugged and caught up on each other's lives, and Abby felt that old spark reignite. They started seeing each other again, and it felt like no time had passed at all. They went on romantic dates and talked about their future together. Eventually, Jack proposed to Abby in the same park where they had reunited. They got married a year later in a beautiful ceremony surrounded by their loved ones. Abby knew that she had made the right choice in reuniting with Jack, and they've been happily married ever since.",
  },
  {
    title: "a second chance",
    story:
      "Sophie and Ben had dated in college, but they broke up after graduation when Ben moved across the country for work. They lost touch, but Sophie never forgot about him. Years later, she was visiting a friend in a new city and ran into Ben on the street. They caught up over coffee, and Sophie couldn't help but feel that old spark reignite. They started seeing each other again and eventually got married. Sophie knew that taking a chance on Ben for the second time was the best decision she ever made.",
  },
  {
    title: "a summer romance",
    story:
      "Rachel and David met on a beach vacation in the Caribbean. They spent two weeks together, laughing and exploring the island. When it was time to go home, they exchanged phone numbers and promised to keep in touch. They talked every day and eventually started a long-distance relationship. They visited each other as often as they could, and after a year of dating, David moved to Rachel's city. They've been together ever since and still love reminiscing about that magical summer they spent together.",
  },
  {
    title: "a second time around",
    story:
      "Alex and Jamie had dated briefly in college, but they broke up when Jamie decided to travel the world for a year. They stayed friends, but both dated other people over the years. When Jamie moved back to town, they ran into each other at a coffee shop and started catching up. Before they knew it, they were spending all their free time together. They realized that the timing just hadn't been right in college, but now they were both ready for a serious relationship. They've been together ever since and are grateful for their second chance at love.",
  },
  {
    title: "a love across the ocean",
    story:
      "Carla and Miguel met while studying abroad in Europe. They were both from different countries, but they bonded over their shared love of travel and adventure. They spent six months together, exploring new cities and making unforgettable memories. When it was time to go home, they promised to keep in touch. They talked on the phone every day and visited each other as often as they could. After two years of long-distance dating, Miguel proposed to Carla in a romantic candlelit dinner in Paris. They got married in Carla's hometown, with both of their families there to celebrate their love.",
  },
];
const shakeSpeare = [
  {
    title: "the tragedy of romeo and juliet",
    story:
      "Romeo and Juliet is a tragic love story set in Verona, Italy. The story follows the lives of two young lovers, Romeo and Juliet, who come from feuding families. Despite their families' ongoing feud, Romeo and Juliet fall in love and secretly marry. However, when Romeo is banished from Verona for killing Juliet's cousin, Tybalt, their plans for a happy life together are shattered. In a desperate attempt to be with Juliet, Romeo returns to Verona and takes his own life when he believes Juliet to be dead. When Juliet wakes up and finds Romeo dead, she too takes her own life. The tragic end to their story ultimately brings the two families together in grief and reconciliation.",
  },
  {
    title: "the comedy of errors",
    story:
      "The Comedy of Errors is a lighthearted play that follows two sets of identical twins who were separated at birth. Antipholus of Syracuse and his servant, Dromio of Syracuse, arrive in Ephesus, not realizing that their long-lost twins, Antipholus of Ephesus and Dromio of Ephesus, live there. As the play unfolds, the characters experience a series of misunderstandings and mistaken identities, leading to comedic chaos. Eventually, the two sets of twins are reunited, and all is set right in the end.",
  },
  {
    title: "macbeth",
    story:
      "Macbeth is a tragedy about the rise and fall of a Scottish general, Macbeth, who receives a prophecy from three witches that he will become King of Scotland. Driven by his ambition and encouraged by his wife, Lady Macbeth, Macbeth murders King Duncan and takes the throne for himself. However, as Macbeth becomes increasingly paranoid and ruthless, his reign becomes plagued by murder and deception. Lady Macbeth, wracked with guilt, ultimately takes her own life, and Macbeth meets his own bloody end when he is killed in battle by Macduff, a nobleman seeking revenge for the murder of his family. The play explores themes of ambition, power, and the consequences of unchecked desire.",
  },
  {
    title: "a midsummer night's dream",
    story:
      "A Midsummer Night's Dream is a whimsical comedy that takes place in an enchanted forest. The play follows the adventures of four young lovers who become entangled in a dispute between the fairy king and queen, Oberon and Titania. Meanwhile, a group of amateur actors rehearse a play for the Duke's wedding, but their antics are interrupted by mischievous fairies who cause chaos in the forest. In the end, the lovers are reunited, and the fairies reconcile their differences, leaving the humans to wonder if it was all just a dream.",
  },
  {
    title: "the merchant of venice",
    story:
      "The Merchant of Venice is a complex play that explores themes of love, justice, and mercy. The story follows the merchant Antonio, who borrows money from the Jewish moneylender Shylock in order to help his friend Bassanio woo the wealthy heiress Portia. When Antonio is unable to repay the loan, Shylock demands a pound of his flesh as payment, leading to a dramatic court case. Meanwhile, Portia disguises herself as a lawyer and helps Antonio defend himself against Shylock's claims. In the end, justice is served, but the play raises questions about the nature of mercy and forgiveness.",
  },

  {
    title: "the merchant of venice",
    story:
      "Antonio, a wealthy merchant of Venice, borrows a sum of money from Shylock, a Jewish moneylender, to help his friend Bassanio marry Portia, a wealthy heiress. Shylock hates Antonio for his anti-Semitic behavior and agrees to lend the money only if Antonio agrees to forfeit a pound of his own flesh as penalty for defaulting on the loan. Antonio agrees, and Bassanio successfully wins Portia's hand in marriage. However, Antonio's ships are lost at sea, and he is unable to repay the loan. In court, Portia disguises herself as a lawyer and argues that Shylock is only entitled to the sum of money he lent and not Antonio's flesh. Shylock is forced to convert to Christianity and loses his wealth.",
  },
  {
    title: "hamlet",
    story:
      "Prince Hamlet of Denmark is grieving the death of his father, King Hamlet, and is disturbed by the hasty marriage of his mother, Queen Gertrude, to his uncle, King Claudius, who has now taken the throne. Hamlet's father's ghost appears and reveals that he was murdered by Claudius, who poured poison into his ear. Hamlet plots to avenge his father's death by pretending to be mad and staging a play that reenacts the murder. Claudius is disturbed by the play and confesses to the crime, but Hamlet is hesitant to kill him when he is praying, believing that he will go to heaven. In the end, Hamlet kills Claudius and dies himself, along with many others, in a tragic ending.",
  },
  {
    title: "macbeth",
    story:
      "Macbeth, a Scottish general, receives a prophecy from three witches that he will become king. His wife, Lady Macbeth, convinces him to murder King Duncan and take the throne. Macbeth becomes consumed by guilt and paranoia and orders the murder of his friend Banquo, who is also prophesied to father a line of kings. Macbeth is haunted by Banquo's ghost and begins to see visions, leading him to commit more murders. Lady Macbeth also descends into madness and commits suicide. In the end, Macduff, a rival general, kills Macbeth and becomes the new king of Scotland.",
  },
  {
    title: "romeo and juliet",
    story:
      "Romeo and Juliet, from two feuding families, fall in love and secretly marry. Their happiness is short-lived as Romeo kills Juliet's cousin in a fight and is banished from Verona. Juliet's father forces her to marry another man, but she fakes her death with a sleeping potion in order to be with Romeo. However, Romeo believes Juliet is dead and kills himself. Juliet wakes up to find Romeo dead and also kills herself, leading the families to reconcile in grief.",
  },
  {
    title: "othello",
    story:
      "Othello, a Moorish general in Venice, marries Desdemona, a young white woman. His jealous ensign, Iago, convinces him that Desdemona has been unfaithful and manipulates him into killing her. Othello is horrified when he learns the truth and kills himself in grief. Iago is exposed and punished for his treachery.",
  },
  {
    title: "king lear",
    story:
      "King Lear, an aging monarch, decides to divide his kingdom among his three daughters based on their expressions of love for him...Goneril and Regan soon turn against Lear, and he becomes a homeless wanderer. Meanwhile, Gloucester, a nobleman, is betrayed by his illegitimate son, Edmund, who convinces his brother, Edgar, that their father is a traitor. Edgar goes into hiding and disguises himself as a madman, while Gloucester is blinded by Regan's husband, Cornwall. Eventually, Lear and Gloucester meet on the heath and bond over their shared suffering. However, tragedy strikes as Cordelia is executed and Lear dies of grief. Goneril and Regan also die, leaving the kingdom in chaos",
  },
];

const allStories = [horror, mystery, love, shakeSpeare];
const all = allStories.flat();

// 'display stories'
const tellStory = (genre) => {
  let index = Math.trunc(Math.random() * genre.length);
  const story = genre[index];
  document.querySelector(".title").textContent = story.title;
  // const text =story.story.toString()
  typeStory.textContent = story.story.toString();
  document.querySelector(".storymovediv").style.display = "none";
  // let i = -1;

  // function typeWriter() {
  //   if (i < text.length) {
  //     typeStory.textContent += text.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, 10);
  //   }
  // }
  // typeWriter(text);
};
// function changeBackground(url) {
//   document.body.style.backgroundImage = `url(${url})`;
// }

let j = 15;
Add.addEventListener("click", function () {
  typeStory.style.fontSize = `${(j += 1)}px`;
});
Minus.addEventListener("click", function () {
  typeStory.style.fontSize = `${(j -= 1)}px`;
});
Reset.addEventListener("click", function () {
  typeStory.style.fontSize = `${(j = 15)}px`;
});
horrorBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tellStory(horror);
  // changeBackground(
  //   "https://c4.wallpaperflare.com/wallpaper/263/452/41/creepy-shark-horror-piranha-3d-piranha-3dd-monochrome-wallpaper-preview.jpg"
  // );
});
loveBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tellStory(love);
});
trillBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tellStory(mystery);
});
shakesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tellStory(shakeSpeare);
});

// 'display options'
for (let i = 0; i < all.length; i++) {
  const content = all[i].title;
  // const content2 = mystery[i].title;
  const html = `
  <option>${content}</option>
  `;
  entrance.insertAdjacentHTML("beforeend", html);
}

// 'find feauture'
let currentStory;
const finding = (genre, location) => {
  const currentStory = genre.find(function (story) {
    return (story = story.title === location.value.toLowerCase());
  });
  title.textContent = currentStory.title;
  typeStory.textContent = currentStory.story.toString();
};

entrance.addEventListener("change", function () {
  search.value = entrance.value;
  finding(all, entrance);
  entrance.value = "";
  entrance.blur();
  document.querySelector(".storymovediv").style.display = "none";
});
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  finding(all, search);
});

// 'dark mode'
mode.addEventListener("click", function () {
  body.classList.toggle("modal");
  typeStory.classList.toggle("mode");
  title.classList.toggle("mode");
  contain.classList.toggle("mode");
  butts.classList.toggle("modal");
  butty.classList.toggle("modal");
});
