---
layout: layout-2020
header_title: <h1>Dat Conference 2020</h1>
splash_img: /assets/dat-bg-2020_small.png
splash_text: |
  Virtual peer to peer event about local-first tech and meetup space for everyone interested in the decentralized web. [#datconf2020][datconf2020]

  ## July 30-31<br />Online

  <div id="about-countdown"></div>

  [Join!][how-to-join] {.submission-link-btn}

  [how-to-join]: /2020/how-to-join/
  [datconf2020]: https://twitter.com/hashtag/datconf2020
site_scripts: true
---

[Dat](https://dat.foundation) is a community ecosystem of peer-to-peer projects. They build on a shared set of technologies called the [Hypercore protocol](https://hypercore-protocol.org). 

In this first, virtual Dat conference, we want to connect people involved in the community and in the surrounding space. We’ll provide the infrastructure, a website and a schedule, and we’ll try to assist with technical needs for special sessions.

---

To facilitate collaboration we chose [Big Blue Button][bbb] _(BBB)_ as meeting platform. It allows for shared documents, Q&A and gives other controls to the presenter which should be great for the workshops in particular. After signing-up for the conference you will receive a link to join us. For each event the presenters have the option to record it, which we will announce at the beginning of each event. The recorded events will be shared through [an online stream][stream].

---

However, filling this space will be up to all of you, the participants! If you want to do introductions and presentations there will be a channel dedicated just for showing looped, pre-recorded videos. For the actual conference, we’re looking for all kinds of ideas such as sessions on how to foster collaboration, inclusiveness and knowledge sharing, thoughts on experimentation and other discussions. Potential formats could include workshops, technical deep dives, VR meetups, collaborative livecoding - be creative!

Let’s share our approaches and talk about the present and the future of local-first technology and applications.

If you have any questions or want to discuss your ideas in advance, please just come by [at a comm-comm meeting](https://github.com/datproject/comm-comm/issues?q=is%3Aissue+is%3Aopen+label%3Ameeting) or come to our [public chat channel](https://dat.foundation/community/chat/). For any other question, please [raise an issue here][ask-question].

---

* [Join!][how-to-join] {.submission-link-btn}
{.submission-list}

<script type="text/javascript">
const node = document.getElementById("about-countdown")
if(node) node.classList.add('relative-when')
node.dataset.start = "{{ 2020.talks | eventStartDateTime }}"
node.dataset.end = "{{ 2020.talks | eventFinishDateTime }}"
node.dataset.preStartText = "We are taking a break and starting again<br> in DURATION"
node.dataset.preEndText = "Now live, started DURATION ago"
node.dataset.postEndText = "Event finished DURATION ago, thanks everybody!"
</script>


 [bbb]: https://bigbluebutton.org/
 [stream]: /2020/stream/
 [late-submission]: https://conf.consento.org/dat-event-2020/cfp
 [ask-question]: https://github.com/datproject/public-events/issues/new?labels=question
 [how-to-join]: /2020/how-to-join/
