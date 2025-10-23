# Battle Academy Pokémon Top Trumps
!!!!!Add website mock-ups here!

Battle Academy Pokémon Top Trumps is an interactive card game where the user competes against the computer using a Pokémon card. The website randomly selects a Pokémon from the first 898 in the [PokeAPi](https://pokeapi.co/), displaying their image and stats including ID, Speed, Attack, Defense, Height and Weight. The game tracks the score through 5 rounds, and at the end, asks the user if they would like to play again.

The site also features game instructions, social media buttons and a 404 page. However, this is only the first iteration of the Battle Academy Top Trumps website - additional sections including High Scores, Enter Name, on-Screen Winner, Loser or Draw animation, and Score continuation through rounds will be added in the future.

## [Live Website](https://sophielrt.github.io/Pokemon_Top_Trumps/)

## Code Institute - Milestone Two Project: Interactive Frontend Development

This website was developed for my Milestone Two project to showcase my ability to build and design a dynamic, interactive front-end site using HTML, CSS and JavaScript.

## Table of contents
1. [UX](#ux)
   - [Business Goals](#business-goals)
   - [Target Users](#target-users)
   - [User Stories](#user-stories)
   - [Design Choices](#design-choices)
   - [Wireframes](#wireframes)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Testing](#testing)
   - [Manual Testing](#manual-testing)
   - [Vaildator Testing](#vaildator-testing)
   - [Google Lighthouse Testing](#google-lighthouse-testing)
   - [Web Accessibility in mind Contrast Checker](#web-accessibility-in-mind-contrast-checker)
5. [Bugs](#bugs)
6. [Deployment](#deployment)
7. [Credit](#credit)

## UX
The user experience (UX) of Battle Academy Pokémon Top Trumps has been carefully designed to prioritise a simple, engaging and visually appealing gaming experience. The design draws inspiration from the original Pokémon games to create an authentic and nostalgic feel, ensuring a fun and memorable experience for users.

### Business Goals
1. Attracting Potential Users
   - Ensure relevant metadata is used for search engine Optimisation (SEO) to reach users searching for Pokémon Top Trump Games.

2. Engaging Potential Users
   - Create a user-friendly site that is easy to navigate.
   - Make instructions simple and easy to understand so users can quickly start the game.
   - Ensure the content is suitable for the target audience.
   - Include key information that the user needs to enjoy and understand the game.

3. Visual Design 
   - Use high-quality images to showcase Pokémon and enhance visual appeal.
   - Maintain a consistent Pokémon-inspired colour palette and typography throughout the website.
   - Include visual feedback on buttons (hover effect) to improve user experience.

4. Speed Optimisation
   - Ensure the website is fast-loading and fully responsive for a smooth user experience across all devices.

5. Engagement
   - Include a clear call to action "Start Game" button on the homepage to encourage immediate engagement.
   - Include a play again option on the end-of-game summary to increase replay value.


### Target Users
1. #### Pokémon fans
   - Fans who enjoy collecting Pokémon cards and comparing different Pokémon
   - Know Pokémon stats, types and evolution chains
   - Play different Pokémon games across different platfroms
   - Appreciate authenic Pokémon data and artwork
   - Competitive and enjoy testing their knowledge

2. #### Casual gamers
   - Plays games on various different devices
   - Enjoy games they can pick up and put down easily
   - Value quick enterainment over complex games
   - Don't want to commit to long gaming sessions
   - Pefers to play games that don't require long tutorials

3. #### Noatalgia seekers
   - Grew up playing up play physical Top Trump cards in the 80s, 90s or 2000s
   - Grew up collecting Pokémon cards
   - Appreciates retro games
   - Values authentic recreations of childhood experinces

### User Stories
1. As a Pokémon fan, I want to see design inspiration from original Pokémon games.
2. As a Pokémon fan, I want to see authentic and correct Pokémon data.
3. As a casual gamer, I want a game which works on different devices, so I can play at home or on the go.
4. As a casual gamer, I want a game which I can play quick rounds off.
5. As a casual gamer, I want simple rules that are easy to understand so I can quickly get into the game.
6. As a nostalgia seeker, I want the cards to flip so I can relive memories. 
7. As a nostalgia seeker, I want straight forward game play without all the complexities that typically come with modern gaming.


### Design Choices 
!!!!!!Add design choice image here!

1. Typography
   - The Pokémon font by FontGet was selected for the main headings on the website because it closely replicates the original Pokémon logo style. Using this font for headings creates a fun, colourful, and nostalgic aesthetic that immediately engages users. Its distinctive style makes headings stand out and it resonates with both past Pokémon and present Pokémon fans by evoking familiarity and nostalgia.
   - The Pokémon GB Font by Jackster Productions was chosen for buttons and headings because it replicates the font used in the original Pokémon Game Boy games. This choice reinforces the nostalgic feel of the website, connecting users to the classic Pokémon experience while maintaining a playful aesthetic.
   - Roboto has been selected as the primary font for the website's content due to its modern, clean, and friendly visual tone, making it well-suited for displaying large amounts of text. It offers excellent legibility and high accessibility, while also being widely supported across all major browsers. Roboto's balanced design complements the playful Pokémon replica fonts and colourful aesthetic of the Website.

2. Colour Palette
   - The colour palette was selected to align with the overall Pokémon theme of the website. 
   - These colours were inspired by Pokémon Go and Pokémon Unite. Additional colours have been used to indicate whether the user has won, drawn, or lost, which are not specific Pokémon Colours. 
   - The colour palette creates a visually recognisable and engaging experience for users. These vibrant tones reflect the playful and adventurous nature of the Pokémon universe while helping to create an exciting and immersive gaming environment.

3. Images
- All images were selected carefully to ensure they are high-quality.
- Images were chosen to match the theme of the website, maintaining consistency and visual appeal.

### Wireframes
I designed the wireframe using [Balsamiq](https://balsamiq.com/?gad_source=1&gad_campaignid=203404003&gbraid=0AAAAAD3BuzM2dIpvaCG11kLamcF5Q3KgV&gclid=CjwKCAjwpOfHBhAxEiwAm1SwEiPicpKTgCI5qsO_ClQq3fiPralCRYTT2TKyBPkgk5S44vDQfpmleRoCkLEQAvD_BwE).

This is only the first iteration of the Battle Academy Top Trumps website. The High scores, Name, and Game Results sections will be added in the future.

1. [Homepage](./assets/readmefile-assets/home-page-wireframe.png)
2. [How to Play](./assets/readmefile-assets/how-to-play-wireframe.png)
3. [High Scores](./assets/readmefile-assets/high-score-wireframe.png)
4. [Are you Ready to Battle your Opponent?](./assets/readmefile-assets/preparing-for-battle-wireframe.png)
5. [Name](./assets/readmefile-assets/name-wireframe.png)
6. [Game](./assets/readmefile-assets/game-wireframe.png)
7. [Game Results](./assets/readmefile-assets/game-results-wireframe.png)
8. [Results module](./assets/readmefile-assets/result-module-wireframe.png)

## Features



## Technologies
1. HTML5 - Markup language that provides the structure and semantic layout for the website's content, enabling it to be organised clearly and accessibly.
2. CSS - Used for styling, layout and the overall visual presentation and design of the website.
3. JavaScript - Adds interactivity and dynamic functionality to the website enhancing the user experince.
4. Bootstrap V5.3.3(https://getbootstrap.com/) - A front-end framework with pre-built components and a grid system, allowing you to create a responsive website across all screen sizes.
5. [PokeApi](https://pokeapi.co/) - An API that provides Pokémon data such as, images, names, stats. This data can be manipulated to select the information you wish to use.
6. [Google Fonts](https://fonts.google.com/) - Used to access a custom font to enhance the website's typography.
7. [Font Awesome](https://fontawesome.com/) - Provides a wide range of icons and symbols to improve UI/UX. 
8. [TinyPNG](https://tinypng.com/) - Reduces image file size without compromising quality, improving the website's loading speed and performance.

## Testing

### Manual Testing

#### 1. Homepage (index.html)

| **Test Description** | **Expected Result** | **Outcome** |
| ------------- | ------------- |:-----:|
|Click on the "Start Game" button|You should be taken to the ready-to-play.html page.| |
|Click on the "How to Play" button|You should be taken to the How to Play module pop-up.| |
|Use the scroll bar in the How to Play module|You should be able to freely scroll up and down in the How to Play module.| |
|Click on the "X" button in the How to Play module|You should be taken back to the homepage.| |
|In the inspect tab, check that the homepage is responsive|The homepage should be fully responsive on all devices.| |

#### 2. Are you ready to Battle your Opponent? (ready-to-play.html)

| **Test Description** | **Expected Result** | **Outcome** |
| ------------- | ------------- |:-----:|
|Click on the "Hell Yeah!" button|You should be taken to the game.| |
|Click on the "Hell No!" button|You should be taken to the homepage.| |
|In the inspect tab, check that the ready-to-play.html is responsive|The ready-to-play.html should be fully responsive on all devices.| |

#### 3. Game (game.html)

| **Test Description** | **Expected Result** | **Outcome** |
| ------------- | ------------- |:-----:|
|Click on the "Home Icon" button|You should be taken to the homepage.| |
|Click on the "Battle Academy Top Trumps" title|You should be taken to the homepage.| |
|Click on the "?" button|You should be taken to the How to Play module.| |
|Use the scroll bar in the How to Play module|You should be able to freely scroll up and down in the How to Play module.| |
|Click on the "X" button in the How to Play module|You should be taken back to the game.| |
|Click the "Start Game" button|The Pokémon Trainer's card should flip over so you can see the Pokémon image, name, and stats.| |
|Click on the stat you wish to use for this round|The opponent's card should flip over. The selected stat will change colour to indicate whether it was a win, draw or loss. The score should also change unless it was a draw.| |
|Click on the "Next Round" button|Both Pokémon cards should reset and be flipped back over so the back is displayed. Then the Pokémon Trainer's card should flip over so you can see the Pokémon image, name, and stats.| |
|The game plays for 5 rounds|After the 5 rounds, you should get a pop-up module with the results of the game. It will also ask, "Do you want to play another 5 rounds?"| |
|Click on the "Hell Yes!" button|Both Pokémon cards should be reset, the score should reset, and they should be flipped back so the back is displayed. Then the Pokémon Trainer's card should flip over so you can see the Pokémon image, name, and stats.| |
|Click on the "Hell No!" button|You should be taken to the homepage.| |
|Click on the "Facebook" button in the footer|Facebook should open in a separate tab.| |
|Click on the "Instagram" button in the footer|Instagram should open in a separate tab.| |
|Click on the "Twitch" button in the footer|You should be taken to the 404 page.| |
|Click on the "TikTok" button in the footer|TikTok should open in a separate tab.| |
|Click on the "X" button in the footer|X should open in a separate tab.| |
|In the inspect tab, check that the game page is responsive|The game page should be fully responsive on all devices.| |

#### 4. 404 Error Page (404.html)

| **Test Description** | **Expected Result** | **Outcome** |
| ------------- | ------------- |:-----:|
|Click on the "Return Home" button| You should be taken to the homepage.| |
|In the inspect tab, check that the 404 page is responsive|The 404 page should be fully responsive on all devices.| |

### Validator Testing

### Google Lighthouse Testing

### Web Accessibility in mind Contrast Checker
[Web Accessibility in mind contrast checker](https://webaim.org/resources/contrastchecker/?fcolor=02AFD0&bcolor=FFFF00)




## Bugs



## Deployment
This project was developed using [Visual Studio Code](https://code.visualstudio.com/), version-controlled with [Git](https://git-scm.com/), and pushed to [GitHub](https://github.com/) using Git's built-in  `git push` command.

To deploy the project from its [GitHub repository](https://github.com/sophielrt/Pokemon_Top_Trumps) to Github Pages, the following steps were taken:

1. Log in to your [GitHub account](https://github.com/login)
2. Navigate to the repositories, select **sophielrt/Pokemon_Top_Trumps**
3. Click the **Settings** tab located in the menu at the top of the repository page.
4. In the left sidebar, scroll down to the **Code and automation** section and select **Pages**.
5. Under **Build and deployment**, in the **Source** section, open the drop-down menu labeled **None** and select **main/master branch**.
6. Once you have selected **main/master branch**, the page will automatically refresh, indicating that the site has been successfully deployed.
7. Finally, scroll down to the **GitHub Pages** section to access the live link to the deployed site.

### How to run this project locally
To set up this project on your local IDE (such as VS Code, PyCharm, or another IDE), follow these steps:

1. Open the [project repository](https://github.com/sophielrt/Pokemon_Top_Trumps) on GitHub.
2. Click the **green Code button** in the top-right corner of the repository page.
3. Under the **Clone** section, copy the **HTTPS URL**.
4. In your preferred IDE, open the terminal.
5. **Change the directory** to the location where you want to store the project files.
6. Type the **git clone** command and paste the URL copied in step 3.
`git clone https://github.com/sophielrt/Pokemon_Top_Trumps.git`
7. Press **Enter** to clone the repository and create a local copy of the project.


## Credit

### Content
[Claude.ai](https://claude.ai/login?returnTo=%2F%3F)was used to help generate the text for the how to play game instructions.

### Media
- websitelogo-pokeball.png accessed via [pixabay](https://pixabay.com/vectors/pokemon-icon-design-symbol-sign-4657023/), photo by Hsaart
- homepage-background-image.jpg accessed via [unsplash](https://unsplash.com/photos/red-ceramic-mug-on-brown-wooden-table-KtTF68ZjBak), photo by Mick Haupt
- readytoplay-image.jpg accessed via [unsplash](https://unsplash.com/photos/a-pile-of-pokemon-trading-cards-sitting-on-top-of-each-other-I7ipAK_JggQ), photo by Giorgio Trovato
- pokeball-cardback.png acccessed via [Pixabay](https://pixabay.com/vectors/pokemon-pokeball-pokemon-go-1536849/), photo by Alanyadk
- snorlax.png [Chat GPT](), AI generated image

### Typography
- Pokemon.ttf accessed via [fontbolt](https://www.fontbolt.com/font/pokemon-font/), font by: FontGet
- PokemonGB-RAeo.ttf accessed via [fontspace](https://www.fontspace.com/pokemon-gb-font-f9621), font by: Jackster Productions

### Code
- Bootstrap V5.3.3
- W3schools
- Stack overflow
- Geeks for Geeks
- Fluent Support - Md. Ariful Basher (Title header border property)
- W3schools (Module)

### Inspiration
- [Dribble](https://dribbble.com/shots/8512308-Snorlax-404-Error-Page-Daily-UI-008) ImHighOnCoffee (404.html)

### Acknowledgements
- I would like to express my heartfelt gratitude to my New City College tutor, André Beckley, for his exceptional guidance, unwavering support, and encouragement throughout this project.
- Many thanks to my Code Institute mentor, Medale Oluwafemi, for their expert guidance and valuable insights during the course of this project.
- I would like to thank the Code Institute tutor team for their continued support throughout my studies.


