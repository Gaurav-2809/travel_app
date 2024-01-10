import React,{useState} from 'react'
import "../homepage/homepage.css"
import logo from "./images/logo.jpg"
import logo1 from "./images/activity-1.jpg"
import logo2 from "./images/activity-2.jpg"
import logo3 from "./images/activity-3.jpg"
import logo4 from "./images/destination-1.jpg"
import logo5 from "./images/destination-2.jpg"
import logo6 from "./images/destination-3.jpg"
import logo7 from "./images/hero.jpg"
import logo8 from "./images/hotel-1.jpg"
import logo9 from "./images/hotel-2.jpg"
import logo10 from "./images/hotel-3.jpg"
import logo11 from "./images/team-member-1.jpg"
import logo12 from "./images/team-member-2.jpg"
import logo13 from "./images/team-member-3.jpg"
import axios from "axios"
import { useNavigate  } from 'react-router-dom'
const Homepage =()=>{
    const navigate=useNavigate()

    const [user, setUser]=useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = e=>{
        const {name, value} = e.target
        console.log(name, value);
        setUser({
            ...user,
            [name]:value
        })
    }

    const submitt =()=>{
        const {name, email, message}= user
        if(name && email && message){
            // alert("posted")
           axios.post("http://localhost:9002/", user)
           .then(function(response) {
                alert(response.data.message)
                //window.location.reload();
            })
          .catch(function(error) {
            console.log(error);
          });
        }else{
            alert("inavlid")
        }
    }
    return(
    <>
        
    
        <div class="logo">
          <a href="#"><img src={logo} alt="logo" /></a>
        </div>
        <nav class="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#hotels">Hotels</a></li>
            <li><a href="#activites">Activities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
    
    <main>
      <section class="hero">
        <div class="hero-image">
          <img src={logo7} alt="Hero image" />
        </div>
        <div class="hero-content">
          <h1>Welcome to Our Travel Website</h1>
          <p>Discover amazing destinations and book your next trip with us.</p>
          <a href="#" class="hero-button">Book Now</a>
        </div>
      </section>
      <section id="destinations" class="destinations">
        <h2>Popular Destinations</h2>
        <div class="destination-grid">
          <div class="destination-item">
            <img src={logo4} alt="" />
            <h3>New York City</h3>
            <p>
              Visit the city that never sleeps and discover its iconic
              landmarks, world-class museums, and diverse neighborhoods.
            </p>
          </div>
          <div class="destination-item">
            <img src={logo5} alt="" />
            <h3>Paris</h3>
            <p>
              Experience the romance and culture of the City of Lights, from the
              Eiffel Tower to the Louvre Museum.
            </p>
          </div>
          <div class="destination-item">
            <img src={logo6} alt="" />
            <h3>Tokyo</h3>
            <p>
              Explore the vibrant city of Tokyo and immerse yourself in its
              unique blend of ancient traditions and modern technology.
            </p>
          </div>
        </div>
      </section>
      <section id="hotels" class="destinations">
        <h2>Featured Hotels</h2>
        <div class="destination-grid">
          <div class="destination-item">
            <img src={logo8} alt="" />
            <h3>The Ritz Carlton</h3>
            <p>
              Experience luxury accommodations and impeccable service at The
              Ritz Carlton, located in the heart of the city.
            </p>
          </div>
          <div class="destination-item">
            <img src={logo9} alt="" />
            <h3>The Four Seasons</h3>
            <p>
              Relax in style at The Four Seasons, featuring breathtaking views,
              an award-winning spa, and gourmet dining options.
            </p>
          </div>
          <div class="destination-item">
            <img src={logo10} alt="" />
            <h3>The Waldorf Astoria</h3>
            <p>
              Indulge in luxury at The Waldorf Astoria, a historic landmark
              hotel renowned for its elegance and sophistication.
            </p>
          </div>
        </div>
      </section>
      <section id="activites" class="destinations">
        <h2>Featured Activities</h2>
        <div class="destination-grid">
          <div class="destination-item">
            <img src={logo1} alt="" />
            <h3>The Ritz Carlton</h3>
            <p>
              Experience luxury accommodations and impeccable service at The
              Ritz Carlton, located in the heart of the city.
            </p>
          </div>
          <div class="destination-item">
            <img src={logo2} alt="" />
            <h3>The Four Seasons</h3>
            <p>
              Relax in style at The Four Seasons, featuring breathtaking views,
              an award-winning spa, and gourmet dining options.
            </p>
          </div>
          <div class="destination-item">
            <img src={logo4} alt="" />
            <h3>The Waldorf Astoria</h3>
            <p>
              Indulge in luxury at The Waldorf Astoria, a historic landmark
              hotel renowned for its elegance and sophistication.
            </p>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <h3>About Us</h3>
        <p>
          Our company is dedicated to providing the best travel experiences to
          our customers. We specialize in creating custom itineraries that cater
          to each individual's interests and preferences.
        </p>
        <div class="team-members">
          <div class="team-member">
            <img src={logo11} alt="" />
            <h4>John Smith</h4>
            <p>Founder & CEO</p>
          </div>
          <div class="team-member">
            <img src={logo12} alt="" />
            <h4>Jane Doe</h4>
            <p>Head of Operations</p>
          </div>
          <div class="team-member">
            <img src={logo13} alt="" />
            <h4>David Lee</h4>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>
      <section id="contact" class="contact">
        <h3>Contact Us</h3>
        <div class="contact-info">
          <p>
            If you have any questions or would like to book a trip, please fill
            out the form below or contact us using the information provided.
          </p>
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i>123 Main St, Anytown USA
            </li>
            <li>
              <i class="fas fa-envelope"></i
              ><a href="mailto:info@travelcompany.com"
                >info@travelcompany.com</a
              >
            </li>
            <li>
              <i class="fas fa-phone-alt"></i
              ><a href="tel:555-123-4567">555-123-4567</a>
            </li>
          </ul>
        </div>
        <form action="#" class="form">
          <div class="form-group">
            <input
              type="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
            />
          </div>
          <div class="form-group">
            <input 
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>
          <div class="form-group">
            <textarea
              name="message"
              value={user.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div onClick={submitt} className='btn btn-primary'>Send Message</div>
        </form>
      </section>
      <footer>
        <div class="social-icons">
          <a href="https://www.facebook.com/" target="_blank"
            ><i class="fab fa-facebook"></i
          ></a>
          <a href="https://www.twitter.com/" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="https://www.instagram.com/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
        <p>&copy; 2023 Your Travel Website. All Rights Reserved.</p>
      </footer>
    </main>
        </>
        
    )
}
export default Homepage;