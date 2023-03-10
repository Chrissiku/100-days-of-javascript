import './styles/main.scss';

const header = document.querySelector('#header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImage = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');
const animatedBackground = document.querySelectorAll('.animated-bg');
const animatedBackgroundTexts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
  header.innerHTML = '<img src="https://media.istockphoto.com/id/1350595566/photo/cyber-security-firewall-interface-protection-concept-businesswoman-protecting-herself-from.jpg?b=1&s=170667a&w=0&k=20&c=wS9GoTWBNfsZVdO3FXZjogi9YrRRdBH_sqe6NjJrJ2U=" alt="post image" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
  profileImage.innerHTML = '<img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" alt="avatar" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'December 28, 2022';
  animatedBackground.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBackgroundTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
};

setTimeout(getData, 2500);
