import { FooterStyle } from './styled';
import { NavLink } from 'react-router-dom';
import logo5 from '../../assets/logo5.png'
 const Footer = () => {
  return (
    <FooterStyle>
       <div className='flex-container'>
       <div className='flexer1'>
       <div ><img src={logo5} alt='Logo here'className='logosmall' /></div>


       </div>
       <div className='flexer1'>
                 <h1 className='ddd'>Be a  member
of our community 🎉 </h1>
                  <div className='texter1'> We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</div>
                  <form>
  <input placeholder='enter your email address' />
  <button>Subscribe</button>
</form>
</div>

       </div>
      <div className='flex-container'>
       
        <div className='flexer'>
          <h3>Important Links</h3>
          <ul className='kilimanjaro_links'>
            <li>
              <NavLink to='/'>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/'>Terms of Use</NavLink>
            </li>
            <li>
              <NavLink to='/'>Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to='/'>Press & Media</NavLink>
            </li>
            
          </ul>
        </div>
        <div className='flexer'>
          <h3> Products</h3>
          <ul className='kilimanjaro_links'>
            <li>
              <NavLink to='/'>Marketplace</NavLink>
            </li>
            <li>
              <NavLink to='/'> Magazine</NavLink>
            </li>
            <li>
              <NavLink to='/'>Seller</NavLink>
            </li>
            <li>
              <NavLink to='/'>Wholesale</NavLink>
            </li>
            <li>
              <NavLink to='/'>Services</NavLink>
            </li>
          </ul>
        </div>
        <div className='flexer'>
          <h3>Careers </h3>
          <ul className='kilimanjaro_links'>
            
            <li>
              <NavLink to='/'>Become a Campus Rep</NavLink>
            </li>
            <li>
              <NavLink to='/'>Become a vasiti Influencer</NavLink>
            </li>
            <li>
              <NavLink to='/'>Become a Campus writer</NavLink>
            </li>
            <li>
              <NavLink to='/'>Become an Affoliate</NavLink>
            </li>
          </ul>
        </div>
        <div className='flexer'>
          <h3>Get in tourch</h3>
          <ul className='kilimanjaro_links'>
            <li>
              <NavLink to='/'>Contact us </NavLink>
            </li>
            <li>
              <NavLink to='/'>Partner with us</NavLink>
            </li>
            <li>
              <NavLink to='/'>Advertise with us</NavLink>
            </li>
            <li>
              <NavLink to='/'>Help/FAQs</NavLink>
            </li>
            
          </ul>
        </div>
        <div className='flexer'>
         
         
          <div className='conta'>
            <h3>Join Our community</h3>
            <ul className='kilimanjaro_social_links'>
              <li>
                <a href='/' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-facebook'></i> Facebook
                </a>
              </li>
              <li>
                <a href='/' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-twitter'></i> Twitter
                </a>
              </li>
              <li>
                <a href='/' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-pinterest'></i> Pinterest
                </a>
              </li>
              <li>
                <a href='/' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-linkedin'></i> Linkedin
                </a>
              </li>
            </ul>
             <h3>Email Newsletter</h3>
          </div>
        </div>
      </div>
      
     
    </FooterStyle >
  )
}

export default Footer
