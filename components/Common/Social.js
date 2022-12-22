import Link from 'next/link'
import BLOG from '@/blog.config'

const Social = () => {
  return (
    <div className='flex gap-4'>
      <Link href={`${BLOG.socialLink.youtube}`} scroll={false}>
        <a
          target='_blank'
          aria-label='Youtube'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='48'
            height='48'
            id='Layer_1'
            version='1.0'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
          >
            <path
              fill='#FF3D00'
              d='M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z'
            ></path>
            <path fill='#FFF' d='M20 31L20 17 32 24z'></path>
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.twitter}`} scroll={false}>
        <a
          target='_blank'
          aria-label='Twitter'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#03A9F4'
              d='M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429'
            ></path>
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.twitch}`} scroll={false}>
        <a
          target='_blank'
          aria-label='Youtube'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='48'
            height='48'
            id='Layer_1'
            version='1.0'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
          >
            <path
              fill='#7e57c2'
              d='M42,27.676c-3,3.441-6,6.882-9,10.324c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c-1,0-2,0-3,0	c0-2,0-4,0-6c-3.333,0-6.667,0-10,0c0-7.431,0-14.863,0-22.294C7.455,12.804,8.909,9.902,10.364,7C20.909,7,31.455,7,42,7	C42,13.892,42,20.784,42,27.676z'
            ></path>
            <path
              fill='#fafafa'
              d='M39,26.369c-1.667,1.877-3.333,3.754-5,5.631c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c0-2,0-4,0-6	c-2.667-0.008-5.333-0.016-8-0.024c0-7.326,0-14.651,0-21.976c9,0,18,0,27,0C39,15.456,39,20.912,39,26.369z'
            ></path>
            <rect width='3' height='10' x='21' y='16' fill='#7e57c2'></rect>
            <rect width='3' height='10' x='30' y='16' fill='#7e57c2'></rect>
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.discord}`} scroll={false}>
        <a
          target='_blank'
          aria-label='Twitter'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#8c9eff'
              d='M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z'
            ></path>
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.linkedin}`} scroll={false}>
        <a
          target='_blank'
          aria-label='Twitter'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#0288D1'
              d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'
            ></path>
            <path
              fill='#FFF'
              d='M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z'
            ></path>
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.github}`} scroll={false}>
        <a
          target='_blank'
          aria-label='Github'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z' />
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.telegram}`} scroll={false}>
        <a
          target='_blank'
          aria-label='Telegram'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z' />
          </svg>
        </a>
      </Link>
    </div>
  )
}

export default Social
