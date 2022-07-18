const Logo = () => {
  return (
    <div className='fixed block z-auto right-5 bottom-5 rounded-lg bg-amber-400 p-3 shadow-md transition duration-500 hover:scale-125 hover:bg-amber-100'>
      <a
        href='https://www.zhibo8.cc'
        target='_blank'
        className=' inline-block text-center align-middle cursor-pointer'
        rel='noreferrer'>
        直播吧
        <img
          src='/zhibo8.wrapper.logo.png'
          alt='zhibo8.wrapper'
          className='w-12'
        />
      </a>
    </div>
  )
}

export default Logo
