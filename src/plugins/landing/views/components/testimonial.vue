<template>
  <section>
    <b-carousel
      :animated="true"
      :has-drag="true"
      :autoplay="true"
      :pause-hover="false"
      :pause-info="false"
      :pause-info-type="'is-primary'"
      :interval="3000"
      :repeat="true"
      :indicator="true"
      :indicator-background="false"
      :indicator-inside="true"
      :indicator-mode="'hover'"
      :indicator-position="'is-bottom'"
      :indicator-style="'is-lines'"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section class="hero is-medium is-white is-bold">
          <div class="hero-body">
            <div class="columns is-multiline">
              <div class="column is-half is-offset-one-quarter">
                <div class="content has-text-centered has-padding-left-80 has-padding-right-80">
                  <figure class="image is-96x96 is-inline-block">
                    <img class="is-rounded" :src="`/img/testimony/${carousel.avatar}`" />
                  </figure>
                  <p>
                    " {{ carousel.excerpt }}
                    <a v-if="carousel.text !== ''" @click="readMore(carousel)" class="is-link"
                      >...read more</a
                    >
                    "
                  </p>
                  <h5 class="title has-text-primary">{{ carousel.name }}</h5>
                  <p class="subtitle is-size-7 has-text-grey-light">{{ carousel.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
    <div class="modal" :class="{ 'is-active': modal }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ currentTestimonial.name }}</p>
          <button @click="modal = false" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="content has-text-centered">
            <figure class="image is-96x96 is-inline-block">
              <img class="is-rounded" :src="`/img/testimony/${currentTestimonial.avatar}`" />
            </figure>
            <div class="has-text-justified" v-html="currentTestimonial.text" />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
  data: function() {
    return {
      modal: false,
      currentTestimonial: {}
    };
  },
  computed: {
    carousels() {
      return [
        {
          excerpt:
            "Dr. John Polis obedience to God’s call not only has it changed leaders but also transforming the believers and ultimately the world",
          text:
            "<p>Since 1998 when Eldoret Bible College was founded by Apostle Dr.  John Polis, the college has transformed thousands of leaders from Kenya and the neighboring countries. His obedience to God’s call not only has it changed leaders but also transforming the believers and ultimately the world. As the college founder and president, Dr. John has been in the fore front in ensuring the student get an impartational training by leading the teachings himself. The college curriculum is Holy Spirit designed to meet the current needs of the students in the ministry field. The lecturers respond to the Holy Spirit guidance rather than on their own human wisdom or need to keep a career.EBC curriculum addresses three major areas that are relevant to Christian leaders such as Theology, leadership and Psychology. Our curriculum is not only relevant to gospel ministers but also Christian leaders, young leaders from universities, colleges and business persons who have the desire to instill Christian values in the market places. It is time Christian leaders take their rightful place in the market place rather than being on the receiving end. Romans 12:2 Challenge the believer not to be conformed to this world, but to be transformed by the renewing of our mind, so that to prove what is good and acceptable and perfect  will of God.Un-renewned mind to God’s will cannot achieve God’s will hence the importance of the church leaders to seek transformation. EBC curriculum is Christ and Bible centered to impart God’s mind into the student.</p><p>Eldoret Bible College success has been our rich output demonstrated by our Alumni across the globe. Majority have reached new souls for Christ through planting new churches , outreaches  and systematic  discipling of believers using notes and materials acquired at EBC.Others are pastoring their congregations and taking up the role of leadership to a higher level. Students who didn’t have clear call in ministry ultimately responded to the call and now serving in Christ vine yard. Currently our training ministry has expanded into Nairobi in partnership with Joe Kayo school of ministry and now serving students in the capital and more opportunities  increasingly  open up in Mombasa,Kisumu , South Africa just to mention a few. Our heartfelt gratitude to our college President and founder for responding to God’s call which has changed many lives, families and ministries, and to our alumni for trusting and believing in God to change the world together and our staff for their tireless effort they put in to ensure EBC is going on, all our partners who have given their time and resources in different ways and to God Himself who is the author, sustainer, provider everlasting Father of all creation.</p><p>To our prospective students ,Eldoret Bible College is the place to study for ministry and to our alumni come back and encourage the ongoing students through your time, resources ,experience ,testimonies and many more. Be ⅟ 10 of Luke 17:11-17 who came back to give thanks to Jesus. Alumni are the backbone of institutions. For this reason Apostle Paul  wrote to the Ephesians church saying ; For this cause I bow my knees unto the Father of our Lord Jesus Christ of whom the whole family in heaven and earth is named , That He would grant you, according to the riches of His glory, to be strengthened with might by His Spirit in the inner man; that Christ  may dwell in your hearts by faith that you , being rooted and grounded in love, may be able to comprehend with all saints what is the width, and length, and depth, and height ; And to know the love of Christ , which passes knowledge, that you may be filled with all fullness of God. Now to Him that is able to do exceeding abundantly above all that we ask or think, according to the power that works in us, to him be the glory in the church by Christ Jesus to all generation forever, and ever AMEN.  Ephesians 3:14-20</p><p>For more information on how you can partner with us through your generous donation to train more church leaders.</p>",
          name: "Ben Ambani",
          avatar: "ambani.jpg",
          title: "DD, MDiv, MPA"
        },
        {
          excerpt:
            "We cannot summarize without talking about boundaries; my perception was before I joined EBC was different. I used to hear friends using the word NO and I thought",
          text:
            "<p>My names are Susan Wangare Bitock, married to Rev. Mike Bitock and we are blessed with two children, a boy called Chapman and a girl by the name Imma.</p><p>We pastor a church by the name Now International Family Church in Eldoret, Kenya. By the grace of God I am serving under my pastor who is my mentor and role model.</p><p>I joined EBC back in the year 2007 and after 3 years I graduated with a B.A. some of the topics that we  did transformed my life, family and ministry.</p><p>I was thought excellence in ministry and for sure, the process of transformation took me to a higher level.</p><p>I also learnt leadership and discovered that, leaders are always a head, you cannot lead from behind.</p><p>Leadership is influence. The difference between leaders and followers is perspective.</p><p>Many leaders talk about their positive part of life, I used to be there but when I went through a course that talks about the dark side of a leader, my ministry shifted from one level to another. This is because people relate with what we go through. That course was unique and powerful.</p><p>I came across this other powerful topic about evangelism, my God, my ministry and passion for souls was ignited and I began a group in church known as church growth; this group has men, women and young people who have a passion for souls and through the impartation that I received in EBC our church has grown and increased in number.</p><p>We cannot summarize without talking about boundaries; my perception was before I joined EBC was different. I used to hear friends using the word NO and I thought they were proud, not until I did my project and went through the course and learned. Boundaries have become my lifestyle, I always:</p><ul><li>Talk about it</li><li>Walk like it</li><li>Dress like it</li></ul><p>A parson who has boundaries is in charge of her/his life, it shows accountability and responsibility of one’s value.</p><p>A person who has boundaries shapes his/her life.</p><p>I have taught boundaries in the church and through ladies ministry by the name Destiny carriers, I have reached to more than twenty counties within our country.</p><p>In the year 2016, I joined a master’s programme and now this was another level in my leadership.</p><p>I was taught about confidence; and through this topic my ministry towards women has gone to another level.</p><p>Women are now walking with their shoulders high because they have discovered their potential and position in God.</p><p>I was taught that understanding brings outstanding.</p><p>I was taught about LQ, leadership is influence, we empower others, we develop them, equip them and finally they manifest.</p><p>A leader without a successor is a failure.</p><p>The life of a pacesetter, I discovered that I should initiate something and become a pacesetter and leave a legacy behind.</p><p>I learnt that, everyone communicates but few people connect. I have been using the Samaritan principle in reaching out this is how Jesus connected with the Samaritan woman and changed her city “what a word”.</p><p>What can we say, when I remember the topic “who is holding your ladder”; the qualities of ladder holders has become a yardstick to look for people in my inner core. We need faithful stewards.</p><h4>Conclusion</h4><p>Out of what I have learned in have written three books:</p><ol><li>Don’t loose God in the wilderness</li><li>The journey of a pastors wife</li><li>leadership</li></ol><p>EBC has promoted my excellence and Christ like character in my walk with God.</p><p>My gratitude goes to Dr John Polis, founder and president of EBC and his wife Rebecca Polis, for their vision and leadership spirit towards EBC.</p><p>To our college director Dr Ben Ambani, thanks for your effort and sacrifice towards EBC.</p><p>I finish by saying EBC is the best college to be, a place where leaders are changed, to change Christians and finally to change the world.</p><p>A place we all come to connect with vision, receive an impartation and finally manifest.</p><p>Thanks</p>Bishop Susan Bitock<p></p>Now International Family Church<p></p>Eldoret-Kenya<p></p>",
          name: "Bishop Susan Bitock",
          avatar: "Bishop Susan Bitock.JPG",
          title: "Alumni"
        },
        {
          excerpt:
            "With EBC, there is a REVELATION of the God's word, an IMPARTATION of an annointing from the seasoned ministers of the Gospel which leads to the TRANSFORMATION of the students",
          text: "",
          name: "Rev Jeremiah Kibet",
          avatar: "jeremiah.jpg",
          title: "Alumni"
        },
        {
          excerpt:
            "Having undergone training in this institution I have come to a conclusive and firm discernment that a person needs to be equipped in order to lead and dominate in their assignment...",
          text: "",
          name: "Adelyne Nawire Shimuli",
          avatar: "ebc.jpg",
          title: "Student Leader"
        },
        {
          excerpt:
            "One of the many aspects of EBC that I greatly appreciate was the fact that the professors are a diverse blend of world class leaders who are experienced, skilled and",
          text: "",
          name: "HELLEN KARIUKI, THIKA.",
          avatar: "ebc.jpg",
          title: "Alumni"
        },
        {
          excerpt:
            "EBC has tremendously changed my life. Before I joined the school I knew I was called into ministry, not necessarily as a pastor. After joining EBC my purpose became",
          text: "",
          name: "NELLY AMDANY, NAKURU",
          avatar: "ebc.jpg",
          title: "Alumni"
        },
        {
          excerpt:
            "The teachings at EBC are anointed not just knowledge that fills the mind. The aspect of anointing has transformed my life, without the anointing we are not different from",
          text: "",
          name: "PHELGONA AWUOR, KILIFI",
          avatar: "ebc.jpg",
          title: "Student"
        },
        {
          excerpt:
            "Through EBC courses I am discovering myself, knowing how to live well, creating ambiance environment in me that I may have peace and harmony with my maker, family and others.",
          text: "",
          name: "JOSEPH MLOMBI, NAIROBI",
          avatar: "ebc.jpg",
          title: "Student"
        },
        {
          excerpt:
            "I do conduct Bible Studies at a local Church. I would like to testify that after taking EBC courses my Bible Study teaching improved remarkably. I have been liberated from",
          text: "",
          name: "EDWIN NYAWADE, NAIROBI",
          avatar: "ebc.jpg",
          title: "Student"
        },
        {
          excerpt:
            "Personally, I have benefited from EBC spiritual and emotional impartation. The courses are real and applicable in day to day ministry and life.",
          text: "",
          name: "GIDEON RONO, BOMET",
          avatar: "ebc.jpg",
          title: "Alumni"
        }
      ];
    }
  },
  methods: {
    readMore: function(more) {
      this.currentTestimonial = more;
      this.modal = true;
    }
  }
};
</script>

<style scoped></style>
