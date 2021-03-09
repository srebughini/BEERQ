import { VectorUtils } from "./utils.js"

let quoteListEng = [
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
    { quote: "There’s alcohol in plant and tree. It must be nature’s plan that there should be in fair degree some alcohol in man.", author: "Sir Alan Patrick Herber" },
    { quote: "Ale, man, ale’s the stuff to drink for fellows whom it hurts to think.", author: "Alfred Edward Housman" },
    { quote: "Sober or blotto, this is your motto: keep muddling through.", author: "Sir Pelham Grenville Wodehouse" },
    { quote: "Drink is the feast of reason and the flow of soul.", author: "Alexander Pope" },
    { quote: "I have taken more out of alcohol than alcohol has taken out of me.", author: "Winston Churchill" },
    { quote: "The problem with the world is that everyone is a few drinks behind.", author: "Humphrey Bogart" },
    { quote: "When I’m drunk, I bite.", author: "Bette Midler" },
    { quote: "It takes only one drink to get me drunk. The trouble is, I can’t remember if it’s the thirteenth or the fourteenth.", author: "George Burns" },
    { quote: "Abstainer: a weak person who yields to the temptation of denying himself a pleasure.", author: "Ambrose Bierce" },
    { quote: "Drink what you want; drink what you’re able. If you are drinking with me, you’ll be under the table.", author: "Anonymous" },
    { quote: "May your glass be ever full, may the roof over your head be always strong, and may you be in heaven half an hour before the devil knows you’re dead.", author: "Irish toast" },
    { quote: "What harm in drinking can there be, since punch and life so well agree?", author: "Thomas Blacklock" },
    { quote: "Drinking is a way of ending the day.", author: "Ernest Hemingway" },
    { quote: "Health – what my friends are always drinking to before they fall down.", author: "Phyllis Diller" },
    { quote: "Man, being reasonable, must get drunk; the best of life is but intoxication.", author: "Lord Byron" },
    { quote: "You have to drink, otherwise you’d go stark staring sober.", author: "Keith Waterhouse" },
    { quote: "Alcohol is a misunderstood vitamin.", author: "Sir Pelham Grenville Wodehouse" },
    { quote: "Woman first tempted man to eat; he took to drinking of his own accord.", author: "John R. Kemble" },
    { quote: "If I had to live my life over, I’d live over a saloon.", author: "W. C. Fields" },
    { quote: "Topping beer off with wine – that’s fine!", author: "German proverb" },
    { quote: "What’s drinking?A mere pause from thinking!", author: "Lord Byron" },
    { quote: "Here’s to alcohol,the rose-coloured glasses of life.", author: "F. Scott Fitzgerald" },
    { quote: "Milk is for babies, when you grown up you have to drink beer.", author: "Arnold Schwarzenegger" },
    { quote: "He was a wise man who invented beer.", author: "Plato" },
    { quote: "What two ideas are more inseparable than beer and britannia?", author: "Sydney Smith" },
    { quote: "You can’t be a real country unless you have a beer and an airline.", author: "Frank Zappa" },
    { quote: "Beauty is in the eye of the beer holder.", author: "Kinky Friedman" },
    { quote: "Beer, it’s the best damn drink in the world.", author: "Jack Nicholson" },
    { quote: "There is no such thing as a bad beer. It’s that some taste better than others.", author: "Billy Carter" },
    { quote: "I’m gaining weight the right way: I’m drinking beer.", author: "Johnny Damon" },
    { quote: "I have respect for beer.", author: "Russell Crowe" },
    { quote: "Let a man walk ten miles steadily on a hot summer’s day along a dusty english road, and he will soon discover why beer was invented.", author: "Gilbert Keith Chesterton" },
    { quote: "Not all chemical are bad. Without chemicals such as hydrogen and oxygen for example,  there would be no way to make water, a vital ingredient in beer.", author: "Dave Barry" },
    { quote: "Ah, drink again this river that is the taker-away of pain, and the giver-back of beauty!", author: "Edna St. Vincent Millay" },
    { quote: "Give me a woman who loves beer and I will conquer the world.", author: "Kaiser Wilhelm II" },
    { quote: "No animal ever invented anything so bad as drunkenness – or so good as drink.", author: "Gilbert Keith Chesterton" },
    { quote: "Beer is not a good cocktail-party drink, especially in a home where you don’t know where the bathroom is.", author: "Billy Carter" },
    { quote: "Beer makes you feel the way you ought to feel without beer.", author: "Henry Lawson" },
    { quote: "Alcohol may be man’s worst enemy, but the bible says love your enemy.", author: "Frank Sinatra" },
    { quote: "The sacred pint alone can unbind the tongue.", author: "James Joyce" },
    { quote: "I’ve never been thrown out of a pub, but I’ve fallen into quite a few.", author: "Benny Bellamacina" },
    { quote: "Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes health.", author: "Thomas Jefferson" },
    { quote: "I only take a drink on two occasions – when I’m thirsty and when I’m not.", author: "Brendan Behan" },
    { quote: "Teetotallers lack the sympathy and generosity of men that drink.", author: "William Henry Davies" },
    { quote: "A man who lies about beer makes enemies.", author: "Stephen King" },
    { quote: "For a quart of ale is a dish for a king.", author: "William Shakespeare" },
    { quote: "Without question, the greatest invention in the history of mankind is beer.", author: "Dave Barry" },
    { quote: "A man ought to get drunk at least twice a year...so he won’t let himself get snotty about it.", author: "Raymond Chandler" },
    { quote: "You’re not drunk if you can lie on the floor without holding on.", author: "Dean Martin" },
    { quote: "A woman drove me to drink and I didn’t even have the decency to thank her.", author: "W. C. Fields" },
    { quote: "Always do sober what you said you’d do drunk. That will teach you to keep your mouth shut.", author: "Ernest Hemingway" },
    { quote: "Twenty-four hours in a day, 24 beers in a case. Coincidence?", author: "Steven Wright" },
    { quote: "Time is never wasted when you’re wasted all the time.", author: "Catherine Zandonella" },
    { quote: "A fine beer may be judged with only one sip, but it’s better to be thoroughly sure.", author: "Czech proverb" },
    { quote: "A man can hide all things, excepting twain – that he is drunk, and that he is in love.", author: "Antiphanes" },
    { quote: "I fear the man who drinks water and so remembers this morning what the rest of us said last night.", author: "Greek proverb" },
    { quote: "Too much work and no vacation, deserves at least a small libation.", author: "Oscar Wilde" },
    { quote: "He that drinketh strong beer and goes to bed tight mellow, lives as he ought to live and dies a hearty fellow.", author: "Traditional toast" },
    { quote: "Give my people plenty of beer, good beer, and cheap beer, and you will have no  revolution among them.", author: "Queen Victoria" },
    { quote: "If you ever reach total enlightenment while drinking beer, I bet it makes beer shoot out your nose.", author: "Jack Handey" },
    { quote: "It takes beer to make thirst worthwhile.", author: "German proverb" },
    { quote: "Beer...A high and mighty liquor.", author: "Julius Caesar" },
    { quote: "He is not deserving the name of englishman who speaketh against ale, that is, good ale.", author: "George Borrow" },
    { quote: "’ere’s to english women an’ a quart of english beer.", author: "Rudyard Kipling" },
    { quote: "No poems can live long or please that are written by water-drinkers.", author: "Horace" },
    { quote: "Alcohol may not solve your problems, but neither will water or milk.", author: "Anonymous" },
    { quote: "Beer needs baseball, and baseball needs beer – it has always been thus.", author: "Peter Richmond" },
    { quote: "I never met a pub I didn’t like.", author: "Pete Slosberg" },
    { quote: "Fermentation may have been a greater discovery than fire.", author: "David Rains Wallace" },
    { quote: "Who does not love beer, wine, women and song remains a fool his whole life long.", author: "Carl Worner" },
    { quote: "I envy people who drink – at least they know what to blame everything on.", author: "Oscar Levant" },
    { quote: "Oh, you hate your job?...There’s a support group for that. It’s called everybody, and they meet at the bar.", author: "Drew Carey" },
    { quote: "Drink because you are happy, but never because you are miserable.", author: "Gilbert Keith Chesterton" },
    { quote: "Of course, I just said I was a writer.", author: "Stephen King on being asked if he drank" },
    { quote: "I would give all my fame for a pot of ale, and safety.", author: "William Shakespeare" },
    { quote: "Ninety-nine per cent of all problems can be solved by money – and for the other 1 per cent there’s alcohol.", author: "Quentin R. Bufogle" },
    { quote: "Ignorance is a lot like alcohol: the more you have of it, the less you are able to see its effect on you.", author: "Jay M. Bylsma" },
    { quote: "Those who drink beer will think beer.", author: "Washington Irving" },
    { quote: "I’m a drinker with writing problems.", author: "Brendan Behan" },
    { quote: "When you stop drinking, you have to deal with this marvellous personality that started you drinking in the first place.", author: "Jimmy Breslin" },
    { quote: "I never drink while I’m working, but after a few glasses I get ideas that would never have occurred to me dead sober.", author: "Irwin Shaw" },
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
    { quote: "One more drink and I’d have been under the host!", author: "Dorothy Parker" },
    { quote: "My grandmother is over 80 and still doesn’t need glasses. Drinks right out the bottle.", author: "Henny Youngman" },
    { quote: "Drink the first. Sip the second slowly. Skip the third.", author: "Knute Rockne" },
    { quote: "A little bit of beer is divine medicine.", author: "Paracelsus" },
    { quote: "I distrust camels, and anyone else who can go a week without a drink.", author: "Joe E. Lewis" },
    { quote: "Most people hate the taste of beer to begin with. It is, however, a prejudice that many people have been able to overcome.", author: "Winston Churchill" },
    { quote: "But if at church they would give us some ale...we’d sing and we’d pray all the live-long day.", author: "William Blake" },
    { quote: "When you’re thirsty and it seems that you could drink the entire ocean, that’s faith; when you start to drink and finish only a glass or two, that’s science.", author: "Anton Chekhov" },
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
    { quote: "I’m not a heavy drinker, I can sometimes go for hours without touching a drop.", author: "Noel Coward" },
    { quote: "Beer...An intoxicating golder brew that re-emerges virtually unchanged an hour later.", author: "Rick Bayan" },
    { quote: "There is nothing which has been yet contrived by man, by which so much happiness is produced as by a good tavern or inn.", author: "Samuel Johnson" },
    { quote: "How much of our literature, our political life, our friendships and love affairs, depend on being able to talk peacefully in a bar!", author: "John Wain" },
    { quote: "The pub is the internet. It’s where information is gathered, collated and addressed.", author: "Rhys Ifans" },
    { quote: "Shoulder the sky, my lad, and drink you ale.", author: "Alfred Edward Housman" }

]

export function quotes(language) {
    let _quoteListEng = quoteListEng;
    if ( language == "eng")
    {
        return _quoteListEng;
    }
    else
    {
        return _quoteListEng;   
    }
}