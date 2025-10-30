import './Home.css';
import SportsElement from '../../components/SportsElement/SportsElement';
import UpdatesElement from '../../components/UpdatesElement/UpdatesElement';
import Connect from '../../components/Connect/Connect';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
  return (
    <div>
      <section>
        <HeroSection/>
      </section>
      <section id='sports' className='section'>
        <SportsElement/>  
      </section>
      <section id='updates' className='section'>
        <UpdatesElement/>   
      </section>
       <section id='connect' className='section'>
        <Connect/>   
      </section>
    </div>
    
  );
}

export default Home;
