import { StoriesStyle } from './stylem.js'
import { NavLink } from 'react-router-dom'

 const Stories = () => {

    return (
     
      
        <> 
           <StoriesStyle>
              <div className='body'>
              <div className='containers'>
                  
                  <h1> Share your amazing story!</h1>
 <label>Upload your Picture </label>
                  <input type='text' className='innput'
                        
                            required
                          ></input>
                          <svg width="12"  className='innput8' height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.44 11.0499L11.25 20.2399C10.1242 21.3658 8.59723 21.9983 7.00505 21.9983C5.41286 21.9983 3.88589 21.3658 2.76005 20.2399C1.6342 19.1141 1.00171 17.5871 1.00171 15.9949C1.00171 14.4027 1.6342 12.8758 2.76005 11.7499L11.95 2.55992C12.7006 1.80936 13.7186 1.3877 14.78 1.3877C15.8415 1.3877 16.8595 1.80936 17.61 2.55992C18.3606 3.31048 18.7823 4.32846 18.7823 5.38992C18.7823 6.45138 18.3606 7.46936 17.61 8.21992L8.41005 17.4099C8.03476 17.7852 7.52577 17.996 6.99505 17.996C6.46432 17.996 5.95533 17.7852 5.58005 17.4099C5.20476 17.0346 4.99393 16.5256 4.99393 15.9949C4.99393 15.4642 5.20476 14.9552 5.58005 14.5799L14.07 6.09992" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                          
<div className='name1'>
    
<div className='name'>
      
        <div className='labb'>  First Name </div>
                        <input type='text' className='innput2'
                              
                                  required
                                ></input>
      </div>
      
<div className='name'>
      
        <div className='labb1'>  Last Name </div>
                        <input type='text' className='innput1'
                              
                                  required
                                ></input>
      </div>
      
                               
      <div className='labb4'>   Share your story</div>
      <input type='text' className='innput5'
                              
                              required
                            ></input>
      <div className='lab6'>   <input type="radio" ></input> Coustumer</div>
      <div className='lab7'>   <input type="radio" ></input> Vendor</div>
      <div className='lab5'>   What did you interact with Vasiti as? </div>
     
</div>


               
                <NavLink to='/finish'>
                <button className='discord'>Share a  Storie!</button>
              </NavLink>
             
            

</div>
 </div>
          </StoriesStyle>
</> 
    )
}

export default Stories
