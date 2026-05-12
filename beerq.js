var jasali = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/beerq.js
  var beerq_exports = {};
  __export(beerq_exports, {
    BeerQuote: () => BeerQuote
  });

  // src/utils.js
  function VectorUtils() {
    function getRandomIndex(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    function getAllIndexOf(array, value) {
      let indices = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
          indices.push(i);
        }
      }
      return indices;
    }
    function getUnique(array) {
      return array.filter((v, i, a) => a.indexOf(v) === i);
    }
    function getVectorofRandomIndices(min, max, length, unique) {
      let indices = new Array(length);
      if (max - min < length) {
        unique = false;
      }
      if (unique) {
        for (let i = 0; i < length; i++) {
          let index = this.getRandomIndex(min, max);
          while (indices.indexOf(index) > 0) {
            index = this.getRandomIndex(min, max);
          }
          indices[i] = index;
        }
      } else {
        for (let i = 0; i < length; i++) {
          indices[i] = this.getRandomIndex(min, max);
        }
      }
      return indices;
    }
    return {
      getRandomIndex,
      getAllIndexOf,
      getUnique,
      getVectorofRandomIndices
    };
  }

  // src/quotes.js
  var quoteListEng = [
    { quote: "Now is the time to drink!", author: "Horace" },
    { quote: "Beer is the proof that god loves us and wants us to be happy.", author: "Benjamin Franklin" },
    { quote: "Sobriety diminishes, discriminates and says no; drunkenness expands, unites and says yes.", author: "William James" },
    { quote: "Give a man a beer, waste an hour, teach a man to brew, and waste a lifetime!", author: "Bill Owen" },
    { quote: "A man's got to believe in something. I believe I'll have another drink.", author: "W. C. Fields" },
    { quote: "Beer seems like an even better idea after you've had some beer.", author: "Steven Hall" },
    { quote: "Alcohol is not the answer to life's question...at least it helps you forget the question.", author: "Vijay Mallya" },
    { quote: "God has a brown voice, as soft and full as beer.", author: "Anne Sexton" },
    { quote: "Come, landlord, fill a flowing bowl until it does run over; tonight we will all merry be - tomorrow we'll get sober.", author: "John Fletcher" },
    { quote: "Good people drink good beer.", author: "Hunter S. Thompson" },
    { quote: "Fermentation equals civilisation.", author: "John Ciardi" },
    { quote: "Stay with the beer. Beer is continuous blood. A continuous lover.", author: "Charles Bukowski" },
    { quote: "The drink you like the best should be the drink you drink the most.", author: "J. B. Burgess" },
    { quote: "All is fair in love and beer.", author: "Anonymous" },
    { quote: "Nothing ever tasted better than a cold beer on a beautifull afternoon with nothing to look forward to than more of the same.", author: "Hugh Hood" },
    { quote: "When I drink, I think; and when I think, I drink.", author: "Francois Rabelais" },
    { quote: "Quaintest thoughts - queerest fancies come to life and fade away; what care I how time advances?I am drinking today.", author: "Edgar Allan Poe" },
    { quote: "No soldier can fight unless he is properly fed on beef and beer.", author: "John Churchill" },
    { quote: "Keeping one's guest supplied with liquor is the first law of hospitality.", author: "Margaret Way" },
    { quote: "The church is near, but the road is icy. The bar is far, but I will walk carefully.", author: "Russian proverb" },
    { quote: "God made yeast, as well as dough, and loves fermantation just as dearly as he loves vegetation.", author: "Ralph Waldo Emerson" },
    { quote: "When I read about the evils of drinking, I gave up reading.", author: "Henny Youngman" },
    { quote: "In wine there is wisdom, in beer there is freedom, in water there is bacteria.", author: "Benjamin Franklin" },
    { quote: "If this dogs do you bite, soon as out of your bed, take a hair of the tail in the morning.", author: "Scottish proverb" },
    { quote: "Alcohol, taken in sufficient quantities, may produce all the effects of drunkenness.", author: "Oscar Wilde" },
    { quote: "Meet me down in the bar! We'll drink breakfast together.", author: "W. C. Fields" },
    { quote: "A drink a day keeps the shrink away.", author: "Edward Abbey" },
    { quote: "Sometimes too much to drink is barely enough.", author: "Mark Twain" },
    { quote: "I drink when I have occasion, and sometimes when I have no occasion.", author: "Miguel de Cervantes" },
    { quote: "Never trust a man who doesn't drink.", author: "James Crumley" },
    { quote: "The mouth of a perfectly happy man is filled with beer.", author: "Ancient Egyptian proverb" },
    { quote: "The worse you are at thinking, the better you are at drinking.", author: "Terry Goodkind" },
    { quote: "But I'm not so think as you drunk I am.", author: "Sir John Collings Squire" },
    { quote: "There\u2019s alcohol in plant and tree. It must be nature\u2019s plan that there should be in fair degree some alcohol in man.", author: "Sir Alan Patrick Herber" },
    { quote: "Ale, man, ale\u2019s the stuff to drink for fellows whom it hurts to think.", author: "Alfred Edward Housman" },
    { quote: "Sober or blotto, this is your motto: keep muddling through.", author: "Sir Pelham Grenville Wodehouse" },
    { quote: "Drink is the feast of reason and the flow of soul.", author: "Alexander Pope" },
    { quote: "I have taken more out of alcohol than alcohol has taken out of me.", author: "Winston Churchill" },
    { quote: "The problem with the world is that everyone is a few drinks behind.", author: "Humphrey Bogart" },
    { quote: "When I\u2019m drunk, I bite.", author: "Bette Midler" },
    { quote: "It takes only one drink to get me drunk. The trouble is, I can\u2019t remember if it\u2019s the thirteenth or the fourteenth.", author: "George Burns" },
    { quote: "Abstainer: a weak person who yields to the temptation of denying himself a pleasure.", author: "Ambrose Bierce" },
    { quote: "Drink what you want; drink what you\u2019re able. If you are drinking with me, you\u2019ll be under the table.", author: "Anonymous" },
    { quote: "May your glass be ever full, may the roof over your head be always strong, and may you be in heaven half an hour before the devil knows you\u2019re dead.", author: "Irish toast" },
    { quote: "What harm in drinking can there be, since punch and life so well agree?", author: "Thomas Blacklock" },
    { quote: "Drinking is a way of ending the day.", author: "Ernest Hemingway" },
    { quote: "Health \u2013 what my friends are always drinking to before they fall down.", author: "Phyllis Diller" },
    { quote: "Man, being reasonable, must get drunk; the best of life is but intoxication.", author: "Lord Byron" },
    { quote: "You have to drink, otherwise you\u2019d go stark staring sober.", author: "Keith Waterhouse" },
    { quote: "Alcohol is a misunderstood vitamin.", author: "Sir Pelham Grenville Wodehouse" },
    { quote: "Woman first tempted man to eat; he took to drinking of his own accord.", author: "John R. Kemble" },
    { quote: "If I had to live my life over, I\u2019d live over a saloon.", author: "W. C. Fields" },
    { quote: "Topping beer off with wine \u2013 that\u2019s fine!", author: "German proverb" },
    { quote: "What\u2019s drinking?A mere pause from thinking!", author: "Lord Byron" },
    { quote: "Here\u2019s to alcohol,the rose-coloured glasses of life.", author: "F. Scott Fitzgerald" },
    { quote: "Milk is for babies, when you grown up you have to drink beer.", author: "Arnold Schwarzenegger" },
    { quote: "He was a wise man who invented beer.", author: "Plato" },
    { quote: "What two ideas are more inseparable than beer and britannia?", author: "Sydney Smith" },
    { quote: "You can\u2019t be a real country unless you have a beer and an airline.", author: "Frank Zappa" },
    { quote: "Beauty is in the eye of the beer holder.", author: "Kinky Friedman" },
    { quote: "Beer, it\u2019s the best damn drink in the world.", author: "Jack Nicholson" },
    { quote: "There is no such thing as a bad beer. It\u2019s that some taste better than others.", author: "Billy Carter" },
    { quote: "I\u2019m gaining weight the right way: I\u2019m drinking beer.", author: "Johnny Damon" },
    { quote: "I have respect for beer.", author: "Russell Crowe" },
    { quote: "Let a man walk ten miles steadily on a hot summer\u2019s day along a dusty english road, and he will soon discover why beer was invented.", author: "Gilbert Keith Chesterton" },
    { quote: "Not all chemical are bad. Without chemicals such as hydrogen and oxygen for example,  there would be no way to make water, a vital ingredient in beer.", author: "Dave Barry" },
    { quote: "Ah, drink again this river that is the taker-away of pain, and the giver-back of beauty!", author: "Edna St. Vincent Millay" },
    { quote: "Give me a woman who loves beer and I will conquer the world.", author: "Kaiser Wilhelm II" },
    { quote: "No animal ever invented anything so bad as drunkenness \u2013 or so good as drink.", author: "Gilbert Keith Chesterton" },
    { quote: "Beer is not a good cocktail-party drink, especially in a home where you don\u2019t know where the bathroom is.", author: "Billy Carter" },
    { quote: "Beer makes you feel the way you ought to feel without beer.", author: "Henry Lawson" },
    { quote: "Alcohol may be man\u2019s worst enemy, but the bible says love your enemy.", author: "Frank Sinatra" },
    { quote: "The sacred pint alone can unbind the tongue.", author: "James Joyce" },
    { quote: "I\u2019ve never been thrown out of a pub, but I\u2019ve fallen into quite a few.", author: "Benny Bellamacina" },
    { quote: "Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes health.", author: "Thomas Jefferson" },
    { quote: "I only take a drink on two occasions \u2013 when I\u2019m thirsty and when I\u2019m not.", author: "Brendan Behan" },
    { quote: "Teetotallers lack the sympathy and generosity of men that drink.", author: "William Henry Davies" },
    { quote: "A man who lies about beer makes enemies.", author: "Stephen King" },
    { quote: "For a quart of ale is a dish for a king.", author: "William Shakespeare" },
    { quote: "Without question, the greatest invention in the history of mankind is beer.", author: "Dave Barry" },
    { quote: "A man ought to get drunk at least twice a year...so he won\u2019t let himself get snotty about it.", author: "Raymond Chandler" },
    { quote: "You\u2019re not drunk if you can lie on the floor without holding on.", author: "Dean Martin" },
    { quote: "A woman drove me to drink and I didn\u2019t even have the decency to thank her.", author: "W. C. Fields" },
    { quote: "Always do sober what you said you\u2019d do drunk. That will teach you to keep your mouth shut.", author: "Ernest Hemingway" },
    { quote: "Twenty-four hours in a day, 24 beers in a case. Coincidence?", author: "Steven Wright" },
    { quote: "Time is never wasted when you\u2019re wasted all the time.", author: "Catherine Zandonella" },
    { quote: "A fine beer may be judged with only one sip, but it\u2019s better to be thoroughly sure.", author: "Czech proverb" },
    { quote: "A man can hide all things, excepting twain \u2013 that he is drunk, and that he is in love.", author: "Antiphanes" },
    { quote: "I fear the man who drinks water and so remembers this morning what the rest of us said last night.", author: "Greek proverb" },
    { quote: "Too much work and no vacation, deserves at least a small libation.", author: "Oscar Wilde" },
    { quote: "He that drinketh strong beer and goes to bed tight mellow, lives as he ought to live and dies a hearty fellow.", author: "Traditional toast" },
    { quote: "Give my people plenty of beer, good beer, and cheap beer, and you will have no  revolution among them.", author: "Queen Victoria" },
    { quote: "If you ever reach total enlightenment while drinking beer, I bet it makes beer shoot out your nose.", author: "Jack Handey" },
    { quote: "It takes beer to make thirst worthwhile.", author: "German proverb" },
    { quote: "Beer...A high and mighty liquor.", author: "Julius Caesar" },
    { quote: "He is not deserving the name of englishman who speaketh against ale, that is, good ale.", author: "George Borrow" },
    { quote: "\u2019ere\u2019s to english women an\u2019 a quart of english beer.", author: "Rudyard Kipling" },
    { quote: "No poems can live long or please that are written by water-drinkers.", author: "Horace" },
    { quote: "Alcohol may not solve your problems, but neither will water or milk.", author: "Anonymous" },
    { quote: "Beer needs baseball, and baseball needs beer \u2013 it has always been thus.", author: "Peter Richmond" },
    { quote: "I never met a pub I didn\u2019t like.", author: "Pete Slosberg" },
    { quote: "Fermentation may have been a greater discovery than fire.", author: "David Rains Wallace" },
    { quote: "Who does not love beer, wine, women and song remains a fool his whole life long.", author: "Carl Worner" },
    { quote: "I envy people who drink \u2013 at least they know what to blame everything on.", author: "Oscar Levant" },
    { quote: "Oh, you hate your job?...There\u2019s a support group for that. It\u2019s called everybody, and they meet at the bar.", author: "Drew Carey" },
    { quote: "Drink because you are happy, but never because you are miserable.", author: "Gilbert Keith Chesterton" },
    { quote: "Of course, I just said I was a writer.", author: "Stephen King on being asked if he drank" },
    { quote: "I would give all my fame for a pot of ale, and safety.", author: "William Shakespeare" },
    { quote: "Ninety-nine per cent of all problems can be solved by money \u2013 and for the other 1 per cent there\u2019s alcohol.", author: "Quentin R. Bufogle" },
    { quote: "Ignorance is a lot like alcohol: the more you have of it, the less you are able to see its effect on you.", author: "Jay M. Bylsma" },
    { quote: "Those who drink beer will think beer.", author: "Washington Irving" },
    { quote: "I\u2019m a drinker with writing problems.", author: "Brendan Behan" },
    { quote: "When you stop drinking, you have to deal with this marvellous personality that started you drinking in the first place.", author: "Jimmy Breslin" },
    { quote: "I never drink while I\u2019m working, but after a few glasses I get ideas that would never have occurred to me dead sober.", author: "Irwin Shaw" },
    { quote: "The only cure for a real hangover is death.", author: "Robert Benchley" },
    { quote: "I have fed purely upon ale; I have eat my ale, drank my ale, and I always sleep upon ale.", author: "George Farquhar" },
    { quote: "Nothing gives a sensation better than a beer!Nothing builds a relation better than a beer!", author: "Anshul Dubey" },
    { quote: "Alcohol is like love. The first kiss is magic, the second is intimate, the third is routine.", author: "Raymond Chandler" },
    { quote: "Alcohol is the anesthesia by which we endure the operation of life.", author: "George Bernard Shaw" },
    { quote: "Alcohol is necessary for a man so that he can have a good opinion of himself, undisturbed by the facts.", author: "Finley Peter Dunne" },
    { quote: "I drink to make other people more interesting.", author: "Ernest Hemingway" },
    { quote: "Even though a number of people have tried, no one has yet found a way to drink for a living.", author: "Jean Kerr" },
    { quote: "Bacchus, n. a. convenient deity invented by the ancients as an excuse for getting drunk.", author: "Ambrose Bierce" },
    { quote: "The worst thing about some men is that when they are not drunk they are sober.", author: "William Butler Yeats" },
    { quote: "I drink exactly as much as I want, and one drink more.", author: "Henry Louis Mencken" },
    { quote: "The drunk mind speaks the sober heart.", author: "Anonymous" },
    { quote: "Know thyself, especially thyself after a couple of drinks.", author: "Robert Brault" },
    { quote: "Drunkenness is nothing but voluntary madness.", author: "Seneca the Younger" },
    { quote: "One more drink and I\u2019d have been under the host!", author: "Dorothy Parker" },
    { quote: "My grandmother is over 80 and still doesn\u2019t need glasses. Drinks right out the bottle.", author: "Henny Youngman" },
    { quote: "Drink the first. Sip the second slowly. Skip the third.", author: "Knute Rockne" },
    { quote: "A little bit of beer is divine medicine.", author: "Paracelsus" },
    { quote: "I distrust camels, and anyone else who can go a week without a drink.", author: "Joe E. Lewis" },
    { quote: "Most people hate the taste of beer to begin with. It is, however, a prejudice that many people have been able to overcome.", author: "Winston Churchill" },
    { quote: "But if at church they would give us some ale...we\u2019d sing and we\u2019d pray all the live-long day.", author: "William Blake" },
    { quote: "When you\u2019re thirsty and it seems that you could drink the entire ocean, that\u2019s faith; when you start to drink and finish only a glass or two, that\u2019s science.", author: "Anton Chekhov" },
    { quote: "By the time a bartender knows what drink a man will have before he orders, there is little else about him worth knowing.", author: "Don Marquis" },
    { quote: "Fishing, with me, has always been an excuse to drink in the daytime.", author: "Jimmy Cannon" },
    { quote: "I have two ambitions in life: one is to drink every pub dry, the other is to sleep with every woman on earth.", author: "Oliver Reed" },
    { quote: "Did your mother never tell you not to drink on an empty head?", author: "Billy Connolly" },
    { quote: "The best way to judge a pub is by the albums on its jukebox.", author: "Ned Beauman" },
    { quote: "Of course one should not drink much, but often.", author: "Henri de Toulouse-Lautrec" },
    { quote: "Drink not the third glass, which thou canst not tame, when once it is within theen.", author: "George Herbert" },
    { quote: "It is not how much we have,but how much we enjoy, that makes happiness.", author: "Charles Spurgeon" },
    { quote: "Simply enjoy life and the great pleasures that come with it.", author: "Karolina Kurkova" },
    { quote: "I have a theory that the secret of martial happiness is simple: drink in different pubs to your other half.", author: "Jilly Cooper" },
    { quote: "Beer speaks. People mumble.", author: "Tony Magee" },
    { quote: "Love makes the world go round?Not at all. Whisky makes it go round twice as fast.", author: "Compton Mackenzie" },
    { quote: "There is nothing for a case of nerves like a case of beer.", author: "Joan Goldstein" },
    { quote: "The difference between a drunk and an alcoholic is that a drunk doesn/t have to attend all those meetings.", author: "Arthur Lewis" },
    { quote: "I\u2019m not a heavy drinker, I can sometimes go for hours without touching a drop.", author: "Noel Coward" },
    { quote: "Beer...An intoxicating golder brew that re-emerges virtually unchanged an hour later.", author: "Rick Bayan" },
    { quote: "There is nothing which has been yet contrived by man, by which so much happiness is produced as by a good tavern or inn.", author: "Samuel Johnson" },
    { quote: "How much of our literature, our political life, our friendships and love affairs, depend on being able to talk peacefully in a bar!", author: "John Wain" },
    { quote: "The pub is the internet. It\u2019s where information is gathered, collated and addressed.", author: "Rhys Ifans" },
    { quote: "Shoulder the sky, my lad, and drink you ale.", author: "Alfred Edward Housman" },
    { quote: "Two beer or not two beer: that is the passion.", author: "Homer Simpson" },
    { quote: "A beer a day, keeps the worries away", author: "ChatGPT" },
    { quote: "Life is too short to drink bad beer", author: "ChatGPT" },
    { quote: "Raise a glass of beer, to good friends and good cheer", author: "ChatGPT" },
    { quote: "Beer is liquid happiness in a glass", author: "ChatGPT" },
    { quote: "A cold beer on a hot day, is all one needs to say", author: "ChatGPT" },
    { quote: "Beer is a conversation starter, and a friendship creator", author: "ChatGPT" },
    { quote: "Beer is not just a drink, it's a way of life", author: "ChatGPT" },
    { quote: "If life gives you lemons, grab a beer and make lemonade", author: "ChatGPT" },
    { quote: "Beer is the answer, but I can't remember the question", author: "ChatGPT" },
    { quote: "Beer may not solve all problems, but it sure makes them taste better", author: "ChatGPT" },
    { quote: "Beer is not just a drink, it's a journey of self-discovery", author: "ChatGPT" },
    { quote: "Beer is the proof that even the simplest things in life can bring great joy", author: "ChatGPT" },
    { quote: "Beer is a reminder that sometimes the most profound truths can be found in the simplest things", author: "ChatGPT" },
    { quote: "Beer is a celebration of life, a toast to the present and a hope for the future", author: "ChatGPT" },
    { quote: "Beer is a symbol of unity, bringing people together in good times and in bad", author: "ChatGPT" },
    { quote: "Beer is the embodiment of the human spirit, a reflection of our desires and aspirations", author: "ChatGPT" },
    { quote: "Beer is a reminder that in the midst of chaos and uncertainty, there is always something to be grateful for", author: "ChatGPT" },
    { quote: "Beer is a metaphor for life, a reminder that the journey is just as important as the destination", author: "ChatGPT" },
    { quote: "Beer is a symbol of freedom, a reminder that in the face of adversity, we can always find the strength to persevere", author: "ChatGPT" },
    { quote: "Beer is a reminder that in the end, all that truly matters is the company we keep and the memories we create", author: "ChatGPT" }
  ];
  var quoteListIta = [
    { quote: "I teologi pensano di sapere le domande.Gli scienziati pensano di sapere le risposte.Io penso che sia ora di bere un\u2019altra birra.", author: "Anonimo" },
    { quote: "Tutti noi abbiamo bisogno di credere in qualcosa: io credo che tra poco mi far\xF2 una birra.", author: "Homer Simpson" },
    { quote: "Come ci si pu\xF2 divertire in una festa in cui le birre sono calde e le donne sono fredde?", author: "Groucho Marx" },
    { quote: "Quando morir\xF2, seppellitemi in una cassa. Di birra.", author: "Anonimo" },
    { quote: "Andr\xE0 tutto come deve andare, quindi apriti una birra e goditi la vita.", author: "Fabrizio Caramagna" },
    { quote: "Sarebbe un mondo migliore se la birra gonfiasse le tette anzich\xE9 la pancia.", author: "Anonimo" },
    { quote: "La gente porta rancore, la notte porta consiglio, la mamma porta pazienza, io porto le birre.", author: "Anonimo" },
    { quote: "Verba volant. Scripta manent. Birra Tennent\u2019s", author: "Anonimo" },
    { quote: "Mi godo il sollievo di questa breve brezza, e provo a convincermi che la realt\xE0 sia questa: leggera, ilare e schiumosa di birra.", author: "Fabrizio Caramagna" },
    { quote: "Quando bevi una birra da solo, non sei veramente solo. La birra \xE8 l\xEC con te. Ti ascolta, ti ama, ti abbraccia e non ti giudica.", author: "Anonimo" },
    { quote: "Metti da parte i tuoi doveri. Prendi un bottiglia di birra, assapora l\u2019aria della sera, respira e sorridi, e ama le parole di chi ti sta intorno.", author: "Fabrizio Caramagna" },
    { quote: "Amo il gusto della birra, la sua schiuma bianca, viva, la sua profondit\xE0 ramata, il mondo che sorge all\u2019improvviso attraverso le pareti brune e umide del vetro...la spuma negli angoli.", author: "Dylan Thomas" },
    { quote: "Senza ombra di dubbio, la pi\xF9 grande invenzione nella storia dell\u2019umanit\xE0 \xE8 la birra. Oh, certo, sicuramente anche la ruota \xE8 stata una gran bella invenzione, ma vi assicuro che la ruota non va altrettanto bene con la pizza.", author: "Anonimo" },
    { quote: "Se Adamo avesse saputo fare la birra, giammai Eva avrebbe potuto tentarlo, con la sua mela.", author: "Marcel Gocar" },
    { quote: "Nella mia vita mi sono innamorato solo di una bottiglia di birra e di uno specchio.", author: "Anne Sexton" },
    { quote: "Dio ha una voce bionda, morbida e piena, come la birra.", author: "Sid Vicious" },
    { quote: "Ci sono giornate che vanno affrontate con un sorriso, altre con una birra.", author: "Fabrizio Caramagna" },
    { quote: "Se non hanno mai dato il premio nobel a quello che ha inventato la birra non sono credibili.", author: "Anonimo" },
    { quote: "Tu porta una cassa di birra e di pensieri sognanti e un paio di sorrisi giusti. Al resto ci penso io.", author: "Fabrizio Caramagna" },
    { quote: "Non \xE8 la birra una santa libagione di sincerit\xE0? La pozione che dissipa ogni ipocrisia, ogni sciarada di belle maniere? Una bevanda che non fa altro che incitare i suoi seguaci a urinare in tutta innocenza, ad aumentare di peso in tutta franchezza.", author: "Milan Kundera" },
    { quote: "Mi siedo qui e bevo la mia buona birra Wittenbergische e il regno di Dio viene da s\xE9.", author: "Martin Lutero" },
    { quote: "Una pinta di birra \xE8 un pasto da re.", author: "William Shakespeare" },
    { quote: "La birra ha un buon sapore in gola, freddo e amaro, ed i tre ragazzi e la birra e la gratuit\xE0 della situazione mi fanno sentire bene e ridere sempre. Rido, e il mio rossetto lascia una macchia rossa come una falce di luna insanguinata sulla parte superiore della lattina di birra.", author: "Sylvia Plath" },
    { quote: "Esistono bionde intelligenti? Si, le birre.", author: "Anonimo" },
    { quote: "Un pub conosce tanti segreti quanti ne conosce una chiesa.", author: "Joyce Carey" },
    { quote: "La birra non \xE8 la soluzione ai problemi ma alcool + malto + luppolo + lievito \xE8 una soluzione perfetta.", author: "Fabrizio Caramagna" },
    { quote: "L\u2019acqua pu\xF2 diventare anche una buona bevanda,se mescolata con malto e luppolo!", author: "Proverbio tedesco" },
    { quote: "Quanta birra c\u2019\xE8 nell\u2019intelligenza tedesca?", author: "Friedrich Nietzsche" },
    { quote: "Bere una birra \xE8 come fare sesso. Se lo fai in due \xE8 meglio.", author: "Anonimo" },
    { quote: "Come quelle risate che partono cos\xEC, squillanti e meravigliosamente scomposte, tra una fetta di pizza e un bicchiere di birra.", author: "Fabrizio Caramagna" },
    { quote: "Ho un sacco di problemi. Posalo nell\u2019angolo che ci facciamo una birra.", author: "Anonimo" },
    { quote: "Quand\u2019ero giovane e ordinavo una birra te la davano dopo 30 secondi. Adesso dopo 30 secondi ti arriva il cameriere tatuato che ti racconta le origini e il processo di preparazione di ogni singola birra del men\xF9 che quando ha finito ti ricoverano in ospedale per disidratazione.", author: "Anonimo" },
    { quote: "Date a un uomo una birra e ci perder\xE0 un\u2019ora. Insegnategli a farsela da se e ci perder\xE0 una vita intera.", author: "The Home Brew Company" },
    { quote: "Chi beve birra, si addormenta pi\xF9 velocemente; chi dorme pi\xF9 a lungo, non pecca; chi non pecca, entra in Paradiso! Beviamo birra!", author: "Martin Lutero" },
    { quote: "La bocca di un uomo completamente felice \xE8 piena di birra.", author: "Massima dell\u2019antico Egitto" },
    { quote: "Basta una birra a colazione e le ragnatele se ne vanno, la voce ti si alza di due ottave e ti sorge un bel sole dentro.", author: "Robert De Niro" },
    { quote: "In Belgio, il magistrato ha la dignit\xE0 di un principe, ma per Bacco, \xE8 altrettanto vero che il birraio \xE8 un re.", author: "Emile Verhaeren" },
    { quote: " Una birra, per favore. Signore, questa \xE8 una gelateria. Ah, ok. In cono grande, allora...", author: "Anonimo" },
    { quote: "24 ore in un giorno, 24 birre in una cassa. Una coincidenza?", author: "Stephen Wright" },
    { quote: "Tenetevi le vostre biblioteche, tenetevi le vostre istituzioni penali, tenetevi le vostre scuole dementi e dateci della birra. Credete che l\u2019uomo abbia bisogno di regole, ma egli vuole della birra. L\u2019umanit\xE0 non ha bisogno delle vostra morale, vuole della birra. Non ha bisogno delle vostre letture o della vostra carit\xE0. Lo spirito dell\u2019uomo \xE8 stato nutrito di cose indigeste, e adesso questo spirito vuole fare buon uso della birra.", author: "Henri Miller" },
    { quote: "Resta con la tua birra, la birra \xE8 un flusso continuo di sangue, un\u2019amante continua.", author: "Charles Bukowski" },
    { quote: "Il pane \xE8 l\u2019energia della vita, ma la birra \xE8 la vita stessa.", author: "Proverbio inglese" },
    { quote: "La fermentazione e la civilizzazione sono inseparabili. ", author: "John Ciardi" },
    { quote: "Non ci sono cattive birre. Alcune hanno semplicemente un gusto migliore di altre.", author: "Billy Carter" },
    { quote: "Ho 29 anni. Per i 18enni sono un vecchio. Per i 40enni sono un giovane. Per i 60enni sono un ragazzo. Per me, una birra. Fredda. Grazie.", author: "Anonimo" },
    { quote: "E\u2019 un buon vento quello che ha spinto gli uomini verso la birra.", author: "Washington Irving" },
    { quote: "L\u2019eternit\xE0 \xE8 fatta dei primi sorsi di birra.", author: "Proverbio tedesco" },
    { quote: "Se uno non ha amici veri, con cui farsi una birra e porsi domande senza risposta, qualcosa ha sbagliato.", author: "Anonimo" },
    { quote: "Chiunque produrr\xE0 birra di cattiva qualit\xE0 sar\xE0 preso con la forza e gettato nel letame.", author: "Editto della citt\xE0 di Danzica, XI secolo" },
    { quote: "Chi siamo? Da dove veniamo? Dove stiamo andando?Perch\xE9 la birra al limone?", author: "Anonimo" },
    { quote: "Quando la bevo sto benissimo: l\u2019umore \xE8 allegro, il cuore contento e il fegato felice.", author: "Tavoletta sumera, 3600 a.C." },
    { quote: "Era un uomo saggio chi ha inventato la birra.", author: "Platone" },
    { quote: "La birra, al contrario del vino, non ha bisogno di sole per maturare: la luna le \xE8 ampiamente sufficiente.", author: "Jacques Josse" },
    { quote: "Chi acquista un terreno, acquista delle pietre. Chi acquista della carne, acquista degli ossi. Chi acquista delle uova, acquista dei gusci.Ma chi acquista una buona birra,fa un affare.", author: "Proverbio inglese" },
    { quote: "Com\u2019\xE8 gradevole il tiglio nelle sere di Giugno! L\u2019aria \xE8 si dolce che a palpebre chiuse annusi il vento che risuona; la citt\xE0 \xE8 vicina e porta aromi di birra e di vino.", author: "Arthur Rimbaud" },
    { quote: "La fermentazione della birra potrebbe essere stata una scoperta pi\xF9 grande del fuoco.", author: "David Wallace" },
    { quote: "Quando morir\xF2, voglio decompormi in un barile di birra ed essere servito in tutti i pub di Dublino.", author: "JpDonleavy" },
    { quote: "Il bello della birra \xE8 che si pu\xF2 bere dalle undici del mattino fino a colazione.", author: "Klaus Augenthaler" },
    { quote: "E\u2019 vero, c\u2019\xE8 birra gratis nel paradiso irlandese.", author: "Kevin Hearne" },
    { quote: "Bere birra analcolica e\u2019 come ascoltare un film porno alla radio.", author: "Anonimo" },
    { quote: "Assetato port\xF2 la pinta alle labbra, e, come il suo fresco ristoro cominci\xF2 a lenire la gola, ringrazi\xF2 il cielo che in un mondo cos\xEC pieno di malvagit\xE0 ci fosse ancora una cosa buona come la birra.", author: "Rafael Sabatini" },
    { quote: "Non tutta la chimica \xE8 cattiva. Senza la chimica, come l\u2019idrogeno e l\u2019ossigeno per esempio, non ci sarebbe modo di fare l\u2019acqua, un ingrediente fondamentale della birra.", author: "Dave Barry" },
    { quote: "La cucina inglese: se \xE8 fredda, c\u2019\xE8 della zuppa. Se \xE8 calda, c\u2019\xE8 della birra.", author: "Proverbio" },
    { quote: "La perfezione? Una bella donna nuda che spina birra dai capezzoli.", author: "Paolo Burini" },
    { quote: "Chi beve birra light non ama il gusto della birra, gli piace soltanto pisciare parecchio.", author: "Anonimo" },
    { quote: "Se ne vanno sempre i migliori e mai quelli che bevono la birra nei bicchieri di plastica.", author: "Anonimo" },
    { quote: "Nel vino c\u2019\xE8 la saggezza, nella birra c\u2019\xE8 la forza, nell\u2019acqua ci sono i batteri.", author: "Proverbio tedesco" },
    { quote: "Buona birra \xE8 cibo, bevanda e vestito.", author: "Proverbio tedesco" },
    { quote: "Mostratemi una donna che ami davvero il gusto sulla birra, e io conquister\xF2 il mondo.", author: "Guglielmo II di Prussia" },
    { quote: "La birra si abbina all\u2019idea del viaggio. In tutti i paesi c\u2019\xE8 sempre una birra da scoprire, la birra locale \xE8 una costante universale, per l\u2019intima soddisfazione di degustarla alla fine della giornata.", author: "Serge Joncour" },
    { quote: "La birra \xE8 tra le bevande pi\xF9 utili, tra i cibi pi\xF9 gustosi e tra i farmaci pi\xF9 piacevoli.", author: "Anonimo" },
    { quote: "Si pu\xF2 giudicare un popolo dal suo caff\xE8, le sue sigarette, la sua birra.", author: "Michel Beaulieu" },
    { quote: "Filosofia e birra sono la stessa cosa, consumate, modificano tutte le percezioni che avevamo del mondo.", author: "Dominique-Jo\xEBl Beaupr\xE9" },
    { quote: "Perch\xE9 una birra e\u2019 meglio di una donna? perch\xE9 e\u2019 sempre bagnata, perch\xE9 dopo che te ne sei fatta una bionda te ne puoi fare subito una rossa, perch\xE9 non si lamenta se te ne fai subito un\u2019altra.", author: "Anonimo" },
    { quote: "La birra contiene sicuramente degli ormoni femminili\u2026 infatti quando si beve molta birra non si riesce a guidare la macchina e si dicono un sacco di cretinate\u2026 e si \xE8 costretti a pisciare seduti!", author: "Anonimo" },
    { quote: "Una birra forte, un tabacco profumato e una donna, questo \xE8 piacere.", author: "Johann Wolfgang Goethe" },
    { quote: "Conoscere i luoghi, vicino o lontani, non vale la pena, non \xE8 che teoria; saper dove meglio si spini la birra, \xE8 pratica vera, \xE8 geografia.", author: "Johann Wolfgang Goethe" },
    { quote: "La birra \xE8 la prova che Dio ci ama e vuole che siamo felici.", author: "Benjamin Franklin" },
    { quote: "Se uomo ama donna pi\xF9 di birra gelata davanti a tv con finale champions forse vero amore, ma non vero uomo.", author: "Vujadin Boskov" },
    { quote: "C\u2019e\u2019 gente che ha l\u2019iPhone, chi ha l\u2019iPad. Io ho l\u2019iNeken.", author: "Anonimo" },
    { quote: "Vorrei il solito. Una birra, qualche sigaretta. Un \u2018mi manchi\u2019, un bacio o un \u2018dov\u2019eri?\u2019. E poi vorrei un\u2019altra birra. Che non si sa mai.", author: "Anonimo" },
    { quote: "Tutta questa birra e solo una bocca", author: "Anonimo" },
    { quote: "La birra \xE8 un simbolo della libert\xE0, un ricordo che di fronte all'adversit\xE0, possiamo sempre trovare la forza per perseverare", author: "ChatGPT" },
    { quote: "La birra \xE8 una metafora per la vita, un promemoria che il viaggio \xE8 altrettanto importante come la destinazione", author: "ChatGPT" },
    { quote: "La birra \xE8 una celebrazione della vita, un brindisi al presente e una speranza per il futuro", author: "ChatGPT" },
    { quote: "La birra \xE8 un simbolo di unit\xE0, unendo le persone in momenti felici e in quelli difficili", author: "ChatGPT" },
    { quote: "La birra \xE8 la prova che anche le cose pi\xF9 semplici della vita possono portare grande gioia", author: "ChatGPT" },
    { quote: "La birra \xE8 un invito a godersi il presente e a non preoccuparsi troppo del futuro", author: "ChatGPT" },
    { quote: "La birra \xE8 un ricordo che, a volte, le verit\xE0 pi\xF9 profonde si possono trovare nelle cose pi\xF9 semplici", author: "ChatGPT" },
    { quote: "La birra \xE8 una celebrazione della creativit\xE0 umana e della capacit\xE0 di trasformare gli ingredienti semplici in qualcosa di straordinario", author: "ChatGPT" },
    { quote: "La birra \xE8 un promemoria che in mezzo al caos e all'incertezza, c'\xE8 sempre qualcosa per cui essere grati", author: "ChatGPT" },
    { quote: "La birra \xE8 un simbolo della fratellanza umana, unendo le persone attraverso la condivisione di un bicchiere", author: "ChatGPT" },
    { quote: "La birra \xE8 una rappresentazione della bellezza della semplicit\xE0, dimostrando che a volte meno \xE8 di pi\xF9", author: "ChatGPT" },
    { quote: "La birra \xE8 un simbolo dell'armonia, unendo sapori e aromi per creare un'esperienza unica", author: "ChatGPT" },
    { quote: "La birra \xE8 una celebrazione della diversit\xE0, dimostrando che la differenza \xE8 ci\xF2 che rende la vita interessante", author: "ChatGPT" },
    { quote: "La birra \xE8 un promemoria che la felicit\xE0 \xE8 spesso nascosta in piccole cose", author: "ChatGPT" },
    { quote: "La birra \xE8 una rappresentazione della resilienza umana, dimostrando che anche nei momenti pi\xF9 difficili, possiamo sempre trovare la forza per andare avanti", author: "ChatGPT" },
    { quote: "La birra \xE8 un simbolo della speranza, un invito a guardare sempre avanti e a non perdere mai la fede", author: "ChatGPT" },
    { quote: "La birra \xE8 una celebrazione dell'umanit\xE0, unendo le persone attraverso la condivisione di un'antica tradizione", author: "ChatGPT" },
    { quote: "La birra \xE8 un promemoria che la vita \xE8 preziosa e va vissuta al massimo", author: "ChatGPT" }
  ];
  var quoteDict = {
    "eng": quoteListEng,
    "ita": quoteListIta
  };
  function languages() {
    return Object.keys(quoteDict);
  }
  function quotes(language) {
    let _languagesList = languages();
    if (language == void 0) {
      let _quoteList = [];
      for (let i = 0; i < _languagesList.length; i++) {
        _quoteList = _quoteList.concat(quoteDict[_languagesList[i]]);
      }
      return _quoteList;
    } else {
      let _quoteList = [];
      if (_languagesList.includes(language)) {
        _quoteList = quoteDict[language];
      }
      return _quoteList;
    }
  }

  // src/beerq.js
  function BeerQuote(language) {
    let _quoteDictList = quotes(language);
    let _languagesList = languages();
    let _numberOfQuotes = _quoteDictList.length;
    let _authorList = _quoteDictList.map((quoteDict2) => quoteDict2.author);
    let _quoteList = _quoteDictList.map((quoteDict2) => quoteDict2.quote);
    let _vectorUtils = VectorUtils();
    function getLanguagesList() {
      return _languagesList;
    }
    function getAuthorList() {
      return _vectorUtils.getUnique(_authorList);
    }
    function getAllQuotes() {
      return _quoteDictList;
    }
    function getRandomQuotes(numberOfQuotes) {
      let quoteIndeces = _vectorUtils.getVectorofRandomIndices(0, _numberOfQuotes, numberOfQuotes, true);
      return quoteIndeces.map((quoteIndex) => _quoteDictList[quoteIndex]);
    }
    function getQuotesFromIndices(quoteIndeces) {
      return quoteIndeces.map((quoteIndex) => _quoteDictList[quoteIndex]);
    }
    function getQuotesFromAuthor(authorName) {
      let quoteIndeces = _vectorUtils.getAllIndexOf(_authorList, authorName);
      return quoteIndeces.map((quoteIndex) => _quoteDictList[quoteIndex]);
    }
    function getRandomQuote() {
      let quoteIndex = _vectorUtils.getRandomIndex(0, _numberOfQuotes);
      return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] };
    }
    function getQuoteFromIndex(quoteIndex) {
      return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] };
    }
    function getRandomQuoteFromAuthor(authorName) {
      let quoteIndeces = _vectorUtils.getAllIndexOf(_authorList, authorName);
      let randomIndex = _vectorUtils.getRandomIndex(0, quoteIndeces.length);
      let quoteIndex = quoteIndeces[randomIndex];
      return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] };
    }
    return {
      getLanguagesList,
      getAuthorList,
      getAllQuotes,
      getRandomQuotes,
      getQuotesFromIndices,
      getQuotesFromAuthor,
      getRandomQuote,
      getQuoteFromIndex,
      getRandomQuoteFromAuthor
    };
  }
  return __toCommonJS(beerq_exports);
})();
