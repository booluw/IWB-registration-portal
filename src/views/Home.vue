<template>
  <section>
    <app-jumbotron @clicked="reg = true" />
    <section class="section section--center py-3 mt-md-5">
      <h2 class="section__heading">
        More about<img src="@/assets/Ci2O.png" class="section__logo" alt="Ci2O's logo" />
      </h2>
      <div class="row m-0 justify-content-center">
        <p class="section__paragraph col-md-9">
          <b>Connecting Ideas to Opportunities</b>
          <br />
          A campus event that brings young intellectuals from neighboring campuses to find solutions to global problems and financial freedom. Holding at the Federal University of Technology, Minna - Nigeria.
          Featuring exhibitions of innovative products/projects, pitching of viable business ideas, practical lessons and presentations on digital monetization, global opportunities, business and career development, value networking and varieties.
        </p>
      </div>
    </section>
    <section class="section pb-2">
      <div class="row m-0">
        <div class="col-md-5">
          <img src="@/assets/img/girl-asking-a-question.jpg" class="section__img" alt="What to expect from #Ci2O" />
          <br /> <br />         
          <img src="@/assets/img/modal.jpg" class="section__img" alt="What to expect from #Ci2O" />
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-6 p-md-0">
          <h3 class="section__heading d-block">
            What to <span>expect</span>
          </h3>
          <ul class="list">
            <li class="list__item">
              <h3 class="list__heading">Financial Opportunities</h3>
              <p class="list__paragraph">
                Leverage on the digital economy, get positioned for multiple active and passive income ideas in the 21st century.
              </p>
            </li>
            <li class="list__item">
              <h3 class="list__heading">Value Networking</h3>
              <p class="list__paragraph">
                Connect with mentors, experts and youngsters who share like passion from various parts of the globe.
              </p>
            </li>
            <li class="list__item">
              <h3 class="list__heading">Business and Career Secrets</h3>
              <p class="list__paragraph">
                Access amazing business hacks and career development tips for exploits in your marketplace.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section section--center pt-0">
      <h2 class="section__heading">About <img src="@/assets/IWB Logo.png" class="section__logo" alt="IWB's logo"/> </h2>
      <div class="row m-0 justify-content-center">
        <p class="section__paragraph col-md-9">
          Ideas Worth Billions is driven towards Africa's development and continental building. We provide key opportunities, and equip youngsters and working professionals with the requisite knowledge on how to mind their business,
          dominate their marketplace, land their dream jobs, facilitate wealth creation and relevance in the 21st Century.
          <br /><br />
          IWB seeks to change the African narrative by exposing youngsters to reputable value creation, sustainable solutions and global opportunities.
        </p>
      </div>
      <h2 class="section__heading mt-5">Management <span class="px-3">Team</span></h2>
      <div class="row mt-5 justify-content-center">
        <div class="col-md-3">
          <div class="card">
            <img src="@/assets/img/akodi-peterson.jpg" alt="Akodi Peterson's Image" class="card__img" />
            <div class="card__content">
              <h3 class="card__heading">
                Akodi <span>Peterson</span>
              </h3>
              <h4 class="card__heading--small">Founder / CEO</h4>
              <p class="card__paragraph">
                 A contemporary and inclusive leader, process engineer and digital artist. Peterson is a good writer, inspiring teacher and orator, passionate about youth advocacy, technology and wealth creation. Peterson has volunteered at International Model United Nations Programs. He consults for start-ups and sits on the Board of Reference for leading firms and organisations. Peterson currently serves as the CEO of LegacyEA - a Digital Arts and Infotech Company in Nigeria.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img src="@/assets/img/Able-Ejiofor.jpg" alt="Akodi Peterson's Image" class="card__img" />
            <div class="card__content">
              <h3 class="card__heading">
                Ejiofor <span>Able</span> (Max)
              </h3>
              <h4 class="card__heading--small">Director, IWB Schools Tour</h4>
              <p class="card__paragraph">
                Max is a Leadership and Human Capacity Development Expert. He has a knack towards impact and value creation especially amongst young people.
                Over the years he has served and still serves in different capacity development programs. Max is a fellow at StudentBuild Africa and sits as the Director of HR at Diatheke Empire.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 mx-md-5 justify-content-between">
        <div class="col-md-3">
          <div class="card">
            <img src="@/assets/img/fortune-obi.jpg" alt="Obi Fortune's Image" class="card__img" />
            <div class="card__content">
              <h3 class="card__heading">Obi Fortune</h3>
              <h4 class="card__heading--small">Head of Operations / COO</h4>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img src="@/assets/img/patience-ukange.jpeg" alt="Godwin Okoko's Image" class="card__img" />
            <div class="card__content">
              <h3 class="card__heading">Ukange Patience</h3>
              <h4 class="card__heading--small">Head of Finance / CFO</h4>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img src="@/assets/img/adiel-dankano.jpg" alt="Adiel Dankano's Image" class="card__img" />
            <div class="card__content">
              <h3 class="card__heading">Adiel Dankano</h3>
              <h4 class="card__heading--small">Lead Admin, IWB Schools Tour</h4>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img src="@/assets/img/godwin-okoko.jpeg" alt="Godwin Okoko's Image" class="card__img" />
            <div class="card__content">
              <h3 class="card__heading">Godwin Okoko</h3>
              <h4 class="card__heading--small">Secretary, IWB Schools Tour</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-modal v-if="reg" @close="reg = !reg"/>
  </section>
</template>

<script>
import AppJumbotronVue from '../components/AppJumbotron.vue'
import AppModalVue from '../components/AppModal.vue'

export default {
  name: 'Home',
  components: {
    'app-jumbotron': AppJumbotronVue,
    'app-modal': AppModalVue
  },
  data() {
    return {
      reg: false
    }
  },
  metaInfo: {
    title: 'Connecting Ideas To Opportunities | Ideas Worth Billions',
    meta: [
      {
        name: 'description',
        content: 'The first of its kind in Africa, an event that connects over 20,000 youngsters to sustainable solutions and global opportunities.'
      },
      {
        name: 'keyword',
        content: 'IWB, Ci2O, Akodi Peterson, Able Ejiofor, Ukange Patience, Adiel Dankano, Africa, Ideas Worth Billions'
      }
    ]
  }
}
</script>
