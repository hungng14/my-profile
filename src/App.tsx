import { createEffect } from 'solid-js';
// @ts-ignore
import SnowFall from 'solid-snowfall';
import { Howl } from 'howler';

function App() {
  createEffect(() => {
    new Howl({
      src: ['we-wish-you-a-merry-christmas.mp3'],
      html5: true,
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
  });

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'NextJs',
    'Nodejs',
    'NestJs',
    'Express',
    'PostgreSQL',
    'MySQL',
  ];

  const hobbies = ['Traveling', 'Reading', 'Football', 'Running', 'Cycling'];

  const colorBadges = [
    { textColor: '#fff', bgColor: '#6a0979' },
    { textColor: '#fff', bgColor: '#095679' },
    { textColor: '#fff', bgColor: '#09794c' },
    { textColor: '#fff', bgColor: '#447909' },
    { textColor: '#fff', bgColor: '#947b1b' },
    { textColor: '#fff', bgColor: '#735ff4' },
    { textColor: '#fff', bgColor: '#eb7f7f' },
    { textColor: '#fff', bgColor: '#7c8579' },
    { textColor: '#fff', bgColor: '#e99e24' },
    { textColor: '#fff', bgColor: '#5167ad' },
    { textColor: '#fff', bgColor: '#51ad8c' },
    { textColor: '#fff', bgColor: '#32423d' },
    { textColor: '#fff', bgColor: '#acc704' },
    { textColor: '#fff', bgColor: '#c168e7' },
  ];

  const mapSkillToColor = skills.map((skill) => {
    const indexRandom = Math.floor(Math.random() * colorBadges.length);
    const color = colorBadges[indexRandom] || colorBadges[0];

    return {
      skill,
      color,
    };
  });

  const mapHobbyToColor = hobbies.map((hobby) => {
    const indexRandom = Math.floor(Math.random() * colorBadges.length);
    const color = colorBadges[indexRandom] || colorBadges[0];

    return {
      hobby,
      color,
    };
  });

  return (
    <>
      <SnowFall // The color of the snowflake, can be any valid CSS color.
        color='#fff'
        // Applied to the canvas element.
        style={{ position: 'fixed', top: 0, bottom: 0, right: 0, left: 0 }}
        // Controls the number of snowflakes that are created (defaults to 150).
        snowflakeCount={200}
      />
      <div class='min-h-screen flex items-center justify-center p-4'>
        <div class='bg-gray-600/90 shadow-lg rounded-lg max-w-md w-full p-6'>
          <div class='flex justify-center'>
            <img
              class='w-32 h-32 rounded-full border-4 border-blue-500'
              src='https://avatars.githubusercontent.com/u/28539708?v=4'
              alt='Avatar'
            />
          </div>

          <div class='text-center mt-4'>
            <h1 class='text-2xl font-bold text-white mb-2'>Hung Nguyen</h1>
            <div class='max-w-[80%] m-auto'>
              <div class='grid grid-cols-[20px,1fr] items-center text-white'>
                <i class='fas fa-envelope text-white mr-2'></i>
                <span>vanhung@coderpush.com</span>
              </div>
              <div class='grid grid-cols-[20px,1fr] items-center text-white'>
                <i class='fas fa-envelope text-white mr-2'></i>
                <span>hung.nuro0@gmail.com</span>
              </div>
              <div class='grid grid-cols-[20px,1fr] items-center text-white'>
                <i class='fa-brands fa-github text-white mr-2'></i>
                <a
                  href='https://github.com/hungng14'
                  class='text-white hover:text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://github.com/hungng14
                </a>
              </div>
            </div>
          </div>

          <div class='mt-6'>
            <h2 class='text-lg font-semibold text-white mb-2'>
              Technical Skills
            </h2>
            <div class='flex flex-wrap gap-2'>
              {mapSkillToColor.map((skill) => (
                <span
                  class=' text-xs font-medium me-2 px-4 py-2 rounded'
                  style={{
                    color: skill.color.textColor,
                    background: skill.color.bgColor,
                  }}
                >
                  {skill.skill}
                </span>
              ))}
            </div>
          </div>

          <div class='mt-6'>
            <h2 class='text-lg font-semibold text-white'>Hobbies</h2>
            <div class='flex flex-wrap gap-2'>
              {mapHobbyToColor.map((hobby) => (
                <span
                  class=' text-xs font-medium me-2 px-4 py-2 rounded '
                  style={{
                    color: hobby.color.textColor,
                    background: hobby.color.bgColor,
                  }}
                >
                  {hobby.hobby}
                </span>
              ))}
            </div>
          </div>

          <div class='mt-6'>
            <h2 class='text-lg font-semibold text-white'>Description</h2>
            <p class='text-gray-200 mt-2'>
              I am a passionate software web developer who loves building
              scalable and efficient applications. I enjoy solving complex
              problems and learning new technologies to keep improving my craft.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
