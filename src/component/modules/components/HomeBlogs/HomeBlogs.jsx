import React from 'react'
import Blog from '../../../ui/Blog/Blog'
import experiment from '../../../../assets/images/experiment.png'
import arrow from '../../../../assets/svg/arrow.svg';
import surgery from '../../../../assets/images/surgery.png';
import plastic from '../../../../assets/images/plastic.png';
import './index.css';

function HomeBlogs() {
  return (
    <div className='blogs'>
      <div className="blog_text">
        <div className="blog_blog">
        <h3>BLOG & NEWS</h3>
        </div>
        <div className="news">
        <h2>Follow Our Latest News</h2>
        </div>
      </div>
         <div className="blog_card">
     <Blog image={experiment} heading='Researchers discover several new diseases.' text='This research can lead to the documentation
of new inventions.' link='Read more' icon={arrow} ></Blog>
<Blog image={surgery} heading='Covid 19 vaccine trials: update.' text='Research presents series of plastic surgeries
performed.' link='Read more' icon={arrow} ></Blog>
<Blog image={plastic} heading='Why people are still doing plastic surgeries.' text='Research presents series of plastic surgeries
performed.' link='Read more' icon={arrow} ></Blog>
     
     </div>
    </div>
  )
}

export default HomeBlogs
