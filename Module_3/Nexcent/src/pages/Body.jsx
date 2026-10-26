import * as Images from '../assets/img';
import '../styles/Body.scss';
// будем чисто на scss


function Body() {
 return (
   <div className='main-body'>
      <section className='Unlock'>
          <img src={Images.Unlock} alt="Unlock" />
          <div className='container'>
          <div className='text-container'>
            <h2 className='Unlock__title'>The unseen of spending three ㅤㅤㅤyears at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          </div>
          <button className='Learn_button'>Learn More</button>
          </div>
      </section>

      <section className='Achievements'>
        <div className='Achievements_text_container'>
          <h2 className='Achievements__title'>Helping a local</h2>
          <span>business reinvent itself</span>
          <p>We reached here with our hard work and dedication</p>
        </div>

        <div className='gap4'>
          
          <div className='Achievements__members'>
            <img src={Images.Members} alt="Members" />
            <div>
              <p className='h3'>2,245,341</p>
              <p className='r2'>Members</p>
            </div>
          </div>

          <div className='Achievements__members'>
             <img src={Images.Clubs} alt="Clubs" /> {/*//через svg только одна рука была и заменил его на png но качество ужасная */}
            <div>
              <p className='h3'>46,328</p>
              <p className='r2'>Clubs</p>
            </div>
          </div>

          <div className='Achievements__members'>
            <img src={Images.EventBookings} alt="Event Bookings" />
            <div>
              <p className='h3'>828,867</p>
              <p className='r2'>Event Bookings</p>
            </div>
          </div>

          <div className='Achievements__members'>
            <img src={Images.Payments} alt="Payments" />
            <div>
              <p className='h3'>1,926,436</p>
              <p className='r2'>Payments</p>
            </div>
          </div>
        </div>
      </section>

      <section className='Unlock'>
          <img src={Images.Pana} alt="Unlock" />
          <div className='container'>
          <div className='text-container'>
            <h2 className='Unlock__title'>How to design your site footer like ㅤㅤwe did</h2>
            <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          </div>
          <button className='Learn_button'>Learn More</button>
          </div>
      </section>

      <section className='customers'>
        <img src={Images.Tesla} alt="Tesla Logo" />

        <div className='container'>

          <div className='content'>
            <p className='content-text'>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna
            </p>
            <div className='author-container'>
              <p className='author'>Tim Smith</p>
              <p className='r2'>British Dragon Boat Racing Association</p>
            </div>
          </div>


          <div className='footer-logos'>
          <div className='logos'>
            <img src={Images.Logo1} alt="Logo 1" />
            <img src={Images.Logo2} alt="Logo 2" />
            <img src={Images.Logo3} alt="Logo 3" />
            <img src={Images.Logo4} alt="Logo 4" />
            <img src={Images.Logo5} alt="Logo 5" />
            <img src={Images.Logo6} alt="Logo 6" />
          </div>
          <div className='Text-btn'>
            <p>Meet all customers</p>
            <img src={Images.Right_green} alt="Right Arrow" />
          </div>
          </div>

        </div>

      </section>



      <section className="blog">
      <div className="blog_head">
        <h1 className="blog_title">Caring is the new marketing</h1>
        <p className="blog_subtitle">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>
      </div>

      <article className='blog_grid'>
        
        <div className="blog_card">
          <img src={Images.Image1} alt="Blog Post 1" />
          <div className='blog_card_text'>
          <p className="blog_card_title">Creating Streamlined Safeguarding Processes with OneRen</p>
          <div className='readmore'>
          <span>Readmore</span> <img className='right-arrow' src={Images.Right_green} alt="Right Arrow" />
          </div>
          </div>
        </div>

        <div className="blog_card">
          <img src={Images.Image2} alt="Blog Post 2" />
          <div className='blog_card_text'>
          <p className="blog_card_title">What are your safeguarding responsibilities and how can you manage them?</p>
          <div className='readmore'>
          <span>Readmore</span> <img className='right-arrow' src={Images.Right_green} alt="Right Arrow" />
          </div>
          </div>
        </div>

        <div className="blog_card">
          <img src={Images.Image3} alt="Blog Post 3" />
          <div className='blog_card_text'>
          <p className="blog_card_title">Revamping the Membership Model with Triathlon Australia</p>
          <div className='readmore'>
          <span>Readmore</span> <img className='right-arrow' src={Images.Right_green} alt="Right Arrow" />
          </div>
          </div>
        </div>
      </article>
    </section>
   </div>
 );
}

export default Body;