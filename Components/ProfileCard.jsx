import Image from 'next/image'
import bannerImage from '../public/banner.png'
import avatarImage from '../public/avatar.png'
const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <Image src={bannerImage} alt="Banner" className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <Image src={avatarImage} alt="Avatar" className="h-full w-full rounded-full" />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            Adela Parkson
          </h4>
          <p className="text-base font-normal text-gray-600">Product Manager</p>
        </div>
        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
            <p className="text-sm font-normal text-gray-600">Posts</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              9.7K
            </p>
            <p className="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              434
            </p>
            <p className="text-sm font-normal text-gray-600">Following</p>
          </div>
        </div>
      </div>
      <p className="font-normal text-navy-700 mt-20 mx-auto w-max">
        Profile Card component from{' '}
        <a
          href="https://horizon-ui.com?ref=tailwindcomponents.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 font-bold"
        >
          Horizon UI Tailwind React
        </a>
      </p>
    </div>
  )
}
export default ProfileCard