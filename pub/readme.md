## d3-Olympics

### About Olympics
The modern Olympic Games or Olympics are leading international sporting events featuring summer and winter sports competitions in which thousands of athletes from around the world participate in a variety of competitions. Their creation was inspired by the ancient Olympic Games, which were held in Olympia, Greece, from the 8th century BC to the 4th century AD. The Olympic Games are considered the world's foremost sports competition with more than 200 nations participating. Baron Pierre de Coubertin founded the International Olympic Committee (IOC) in 1894. The IOC is the governing body of the Olympic Movement, with the Olympic Charter defining its structure and authority. The Olympic Games are held every four years, with the Summer and Winter Games alternating by occurring every four years but two years apart.<br/><br/>HomePage: https://www.olympic.org/.

### Data collection
Before I even started searching online, I already had an idea in my head about the data that I wanted to play with <i>d3 + Graph Theory + Olympics</i>; all medal winners since the very first Olympic Games in 1896. Thankfully the Guardian had created exactly [this dataset](https://www.theguardian.com/sport/datablog/2012/jun/25/olympic-medal-winner-list-data) right before the 2012 Olympics in London, because there wasn't any other place that had the data as nicely structured as the one from the Guardian (The Olympic site itself is quite a hassle where you have to select the edition, sport and event before you see any results).

Then I "only" needed to add the results for 2012 and create a dummy start for all of the events at 2016 that I could then start filling in while the games are being held. Again the Guardian helped out by supplying [a dataset](https://www.theguardian.com/sport/datablog/2012/aug/10/olympics-2012-list-medal-winners) with all of the medallists from 2012.

### Raw Data Preparation
I have collected the "2012 Summer Olympics medal winners" data.

The 2012 Summer Olympics, formally the Games of the XXX Olympiad and commonly known as London 2012, was a major international multi-sport event celebrated in the tradition of the Olympic Games, as governed by the International Olympic Committee (IOC). It took place in London and to a lesser extent across the United Kingdom from 25 July to 12 August 2012.

| Motto	| Inspire a Generation |
| ---- | ---- |
| Nations participating	| 204 |
| Athletes participating | 10,768 (5,992 men, 4,776 women) |
| Events | 302 in 26 sports |
| Opening ceremony | 27 July |
| Closing ceremony | 12 August |
| Officially opened by | Queen Elizabeth II |

<br/>
<b>Missing medals in the 2012 dataset</b>
<br/><br/>
Thinking I had two nice datasets I started by combining them. I decided to make two choices to downsize the data to something more manageable; only look at the gold medal winners, and for teams (such as basketball) to lose the separate team members' names. In essence to make it unique on each Olympic edition - sporting discipline - gender - event - winner. While working through the 2012 dataset I started to notice that it did not contain all the medal winners, many team games such as hockey were missing, but also many diving medals weren't in there. These descrepancies forced me to check each and every of the 41 disciplines to see if my dataset contained the same number of medals as the number of events held at London. Due to the number of missing medals, I decided to strip the Guardian data down to the gold medal winners and add missing athlete names / teams and countries, not focusing on the silver or bronze medals.
