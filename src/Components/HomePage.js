import React from 'react';
import { FaArrowRight, FaSearch, FaHotjar, FaUsers, FaRegClock, FaRegHeart, FaExpandArrowsAlt } from 'react-icons/fa';

const HomePage =()=>{
return(
    <div className="main-wrapper">
     
      <main>
          <section className="content-wrap"> 
            <div className='overlay'></div>
            <div className="slidingImage">
              <article className="search-content">
              <div className="search-desc">
                <h2 className="title-heading">
                  Find <b><i>Adventures</i></b>, you
                <br/> want to talk about
              </h2>		
              </div>
              <div className="search-field">
                <FaArrowRight className='search-arrow'/>
                <input type="text" name="Search Tour" placeholder="Search Tour" className="" 
                autocomplete="off"/>
                <FaSearch className='input-searchIcon'/>
              </div>
            </article>
              <div className="bg-buttonWrap">
                <span>How it Works  </span>
                <FaArrowRight className='arrow-right'/>
              </div>
            </div>
            <section className="inner-content">
            <div className="heading-imag"><b><i>Required</i></b> to Visit</div>
              <aside className="content-lhs">
                <div className="lft-image"> </div>
              </aside>
              <div className="content-rhs">
                  <div className="card-wrap">
                      <figure className="cardItem col1"></figure>
                      <div className="card-content">
                        <h3> <FaHotjar className='fire-icon'/> Car Tour Africa 10<br/>Days</h3>
                        <div className="store-label lbl">Store</div>
                        <div className="p-label lbl"><FaUsers className="users-icon"/>4 People</div>
                        <div className="tour-label lbl"> <FaRegClock className="clock-icon"/>10 Days</div>
                    </div>
                    <div className='card-footer'>
                        <div className='f-left'>
                          <FaRegHeart className='heart-icon'/>
                          <FaExpandArrowsAlt className='share-icon'/>
                        </div>
                        <span className='f-right'>$606.76</span>

                    </div>

                  </div>
                  <div className="card-wrap">
                    <figure className="cardItem col2"></figure>
                    <div className="card-content">
                      <h3> <FaHotjar className='fire-icon'/>Cappadocia Turkey <br/>Scenic Tour</h3>
                        <div className="store-label lbl">Store</div>
                        <div className="p-label lbl"> <FaUsers className="users-icon"/> Couples</div>
                        <div className="tour-label lbl"><FaRegClock className="clock-icon"/> 3 Days Tour</div>
                      </div>
                      <div className='card-footer'>
                      <div className='f-left'>
                          <FaRegHeart className='heart-icon'/>
                          <FaExpandArrowsAlt className='share-icon'/>
                        </div>
                        <span className='f-right'>From: $606.76</span>

                    </div>
                </div>
                <div className="card-wrap">
                    <figure className="cardItem col3"></figure>
                    <div className="card-content">
                      <h3> <FaHotjar className='fire-icon'/> New Zealand Hiking <br/>Tour</h3>
                      <div className="store-label lbl">Store</div>
                      <div className="p-label lbl"> <FaUsers className="users-icon"/> 4 People</div>
                      <div className="tour-label lbl"><FaRegClock className="clock-icon"/> 3 Days Tour</div>
                    </div>
                    <div className='card-footer'>
                    <div className='f-left'>
                          <FaRegHeart className='heart-icon'/>
                          <FaExpandArrowsAlt className='share-icon'/>
                        </div>
                        <span className='f-right'>From: $606.76</span>

                    </div>
                </div>
                  
                </div>
              </section>
        </section>
      </main> 
    </div>
    );
}
export default HomePage;