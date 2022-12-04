import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='portfolio'>
        <h1>Portfolio</h1>
        <h3>Kipyegon Denis </h3>
        <img class='profile' src='https://res.cloudinary.com/dnzyg4nux/image/upload/v1670157827/Delaki/kipyegon_denis_profile_g9p5gi.jpg' alt='profile pic' />
       <p class='profession'>Professional Web Developer</p>
       <h2> Services </h2>
        <div id='services'>
          <div class='frontend'>
          <h3>Front-end web development </h3>
          <h4>Languages</h4>
          <ol>
            <li>Javascript
              <ol>
                <li>ReactJs</li>
                <li>Angular</li>
              </ol>
            </li>
            <li>HTML</li>
            <li> CSS
              <ol>
                <li>Boostrap</li>
                <li>TailwindCSS</li>
                <li>SASS</li>
              </ol>
            </li>
          </ol>
          </div>
          <div class='backend'>
            <h3>Backend Web Development </h3>
            <h4>Languages</h4>
            <ol>
              <li>Ruby on Rails </li>
              <li>NodeJs</li>

            </ol>
          </div>
          <div class='design'>
            <h3>Web UX/UI Design </h3>
            <h3>Tools</h3>

            <ol>
              <li>Figma</li>
              <li>Sketch</li>
            </ol>
          </div>
          <div class='writing'>
            <h3>Technical Writing</h3>
            <ol>
              <li>Blogs</li>
              <li>Academic Writings</li>
            </ol>
          </div>
    <div id='contact'>
        <p><a href='https://github.com/denisdelaki/'>Github</a></p>
        <p><a href='https://www.linkedin.com/in/denis-kipyegon-95997123a/'>LinkedIn</a></p>
        <p><i>email</i>denisdelaki@gmail.com</p>
    </div>
    </div>
    </div>
  );
}

export default App;
