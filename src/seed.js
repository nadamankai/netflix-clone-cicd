export function seedDatabase(firebase) {
  function getUUID() {
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */
  const seriesData = [
    {
      title: 'Tiger King',
      description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
    },
    {
      title: 'Amanda Knox',
      description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'amanda-knox',
    },
    {
      title: 'Citizenfour',
      description:
        'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'citizenfour',
    },
    {
      title: 'Super Size Me',
      description:
        "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'super-size-me',
    },
    {
      title: 'Man on Wire',
      description:
        "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'man-on-wire',
    },
    {
      title: 'The Office',
      description:
        'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
      genre: 'comedies',
      maturity: '15',
      slug: 'the-office',
    },
    {
      title: 'Arrested Development',
      description:
        'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
      genre: 'comedies',
      maturity: '15',
      slug: 'arrested-development',
    },
    {
      title: 'Curb Your Enthusiasm',
      description:
        'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
      genre: 'comedies',
      maturity: '15',
      slug: 'curb-your-enthusiasm',
    },
    {
      title: 'Family Guy',
      description:
        'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
      genre: 'comedies',
      maturity: '15',
      slug: 'family-guy',
    },
    {
      title: 'South Park',
      description:
        'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
      genre: 'comedies',
      maturity: '15',
      slug: 'south-park',
    },
    {
      title: 'Peppa Pig',
      description:
        'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
      genre: 'children',
      maturity: '0',
      slug: 'peppa-pig',
    },
    {
      title: 'Dora The Explorer',
      description:
        'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
      genre: 'children',
      maturity: '0',
      slug: 'dora-the-explorer',
    },
    {
      title: 'PAW Patrol',
      description:
        'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
      genre: 'children',
      maturity: '0',
      slug: 'paw-patrol',
    },
    {
      title: 'Arthur',
      description:
        'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
      genre: 'children',
      maturity: '0',
      slug: 'arthur',
    },
    {
      title: 'SpongeBob',
      description:
        'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean.',
      genre: 'children',
      maturity: '0',
      slug: 'spongebob',
    },
    {
      title: 'Making a Murderer',
      description:
        'Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.',
      genre: 'crime',
      maturity: '18',
      slug: 'making-a-murderer',
    },
    {
      title: 'Long Shot',
      description:
        'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
      genre: 'crime',
      maturity: '18',
      slug: 'long-shot',
    },
    {
      title: 'The Confession Killer',
      description:
        'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-confession-killer',
    },
    {
      title: 'The Innocent Man',
      description:
        'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-innocent-man',
    },
    {
      title: 'The Staircase',
      description:
        "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon.",
      genre: 'crime',
      maturity: '18',
      slug: 'the-staircase',
    },
    {
      title: 'Good Will Hunting',
      description:
        'Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'good-will-hunting',
    },
    {
      title: 'Forrest Gump',
      description:
        'Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'forrest-gump',
    },
    {
      title: 'Juno',
      description:
        "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'juno',
    },
    {
      title: 'Midnight In Paris',
      description:
        'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'midnight-in-paris',
    },
    {
      title: 'School of Rock',
      description:
        "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'school-of-rock',
    },
  ];

  seriesData.forEach((series) => {
    firebase
      .firestore()
      .collection('series')
      .add({
        id: getUUID(),
        ...series,
      });
  });

  /* Films
    ============================================ */
  const filmsData = [
    {
      title: 'The Prestige',
      description:
        'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    },
    {
      title: 'Fight Club',
      description:
        'A depressed man meets an insomniac soap maker, and they form an underground fight club that evolves into much more.',
      genre: 'drama',
      maturity: '18',
      slug: 'fight-club',
    },
    {
      title: 'Memento',
      description: "A man suffering from short-term memory loss attempts to track down his wife's murderer.",
      genre: 'drama',
      maturity: '15',
      slug: 'memento',
    },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      description:
        'A man erases his memories of a woman after a painful breakup, but later realizes he still loves her.',
      genre: 'drama',
      maturity: '12',
      slug: 'eternal-sunshine-of-the-spotless-mind',
    },
    {
      title: 'Interstellar',
      description: "A team of explorers travels through a wormhole in space to ensure humanity's survival.",
      genre: 'sci-fi',
      maturity: '12',
      slug: 'interstellar',
    },
    {
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-shawshank-redemption',
    },
    {
      title: 'Pulp Fiction',
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      genre: 'crime',
      maturity: '18',
      slug: 'pulp-fiction',
    },
    {
      title: 'The Godfather',
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      genre: 'crime',
      maturity: '18',
      slug: 'the-godfather',
    },
    {
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      genre: 'sci-fi',
      maturity: '12',
      slug: 'inception',
    },
    {
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      genre: 'action',
      maturity: '15',
      slug: 'the-dark-knight',
    },
    {
      title: 'The Matrix',
      description:
        'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      genre: 'sci-fi',
      maturity: '12',
      slug: 'the-matrix',
    },
    {
      title: 'Casablanca',
      description:
        'In Casablanca in December 1941, a cynical American expatriate encounters a former lover, with unforeseen complications.',
      genre: 'romance',
      maturity: '12',
      slug: 'casablanca',
    },
    {
      title: '12 Angry Men',
      description:
        'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
      genre: 'drama',
      maturity: '12',
      slug: '12-angry-men',
    },
    {
      title: 'The Silence of the Lambs',
      description:
        'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
      genre: 'thriller',
      maturity: '18',
      slug: 'the-silence-of-the-lambs',
    },
    {
      title: 'The Good, the Bad and the Ugly',
      description:
        'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
      genre: 'western',
      maturity: '15',
      slug: 'the-good-the-bad-and-the-ugly',
    },
    {
      title: 'The Lion King',
      description:
        'A lion cub flees his kingdom after the death of his father, but returns as an adult to reclaim his throne.',
      genre: 'animation',
      maturity: '0',
      slug: 'the-lion-king',
    },
    {
      title: 'Finding Nemo',
      description:
        'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.',
      genre: 'animation',
      maturity: '0',
      slug: 'finding-nemo',
    },
    {
      title: 'Up',
      description:
        'A retired balloon salesman fulfills his dream of a lifelong adventure by tying thousands of balloons to his house and flying to South America.',
      genre: 'animation',
      maturity: '0',
      slug: 'up',
    },
    {
      title: 'Inside Out',
      description:
        'After a girl moves to a new city, her emotions—Joy, Fear, Anger, Disgust, and Sadness—conflict on how to navigate a new life.',
      genre: 'animation',
      maturity: '0',
      slug: 'inside-out',
    },
    {
      title: 'WALL-E',
      description:
        'In a distant future where mankind has abandoned Earth, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
      genre: 'animation',
      maturity: '0',
      slug: 'wall-e',
    },
  ];

  filmsData.forEach((film) => {
    firebase
      .firestore()
      .collection('films')
      .add({
        id: getUUID(),
        ...film,
      });
  });
}
