import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='portfolio'>
        <h1>Portfolio</h1>
        <h3>Kipyegon Denis </h3>
        <img src='' alt='profile pic' />
       <h1> Services </h1>
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
        <p><i>facebook</i></p>
        <p><i>LinkedIn</i></p>
        <p><i>email</i></p>
    </div>
    </div>
    </div>
  );
}

export default App;
