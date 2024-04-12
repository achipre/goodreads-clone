import Image from 'next/image'
import data from '../assets/data.json'
import { maitreeBold, poppisLight, ralewayBold } from '@/assets/fonts'
import { Tag } from './components/Tag/tag'
import { Category } from './components/Category/category'
import { IconArrow } from '@/assets/Icons'

export default function Home () {
  return (
    <main className='px-3 sm:px-4 md:px-6 lg:px-8 xl:px-9'>
      <section className='flex flex-col md:flex-row gap-6 my-6 justify-center'>
        { data.map(article => article.Id === 1 && (
          <article key={article.Id} className='md:flex md:flex-col sm:gap-2 lg:max-w-3xl w-full'>
            <Image className='aspect-video object-cover w-full max-w-3xl' src={article.Image} width={100} height={100} alt={article.Title} />
            <section className='flex flex-col sm:px-0'>
              <div className='flex gap-2 xs:gap-3 items-center'>
                <Category>{article.Category}</Category>
                <Tag>{article.Tag}</Tag>
                <p className={`${ralewayBold.className} inline-block text-xs xs:text-sm text-millbrook-900`}>{article.Date}</p>
              </div>
              <h1 className={`${maitreeBold.className} text-lg xs:text-xl sm:text-2xl md:text-3xl leading-5 py-1 text-millbrook-900`}>{article.Title}</h1>
              <p className={`${poppisLight.className} text-sm xs:text-md text-millbrook-900`}>Author: {article.Author}</p>
              <span className={`${maitreeBold.className} my-4 xs:my-3 sm:my-4 text-millbrook-900 cursor-pointer hover:underline`} >Read More <IconArrow className='inline' /></span>
            </section>
          </article>
        ))}
        <section className='flex flex-col gap-6 lg:max-w-lg w-full'>
          { data.map(article => (article.Id > 1 && article.Id < 5) && (
            <article key={article.Id} className='sm:flex sm:gap-2'>
              <Image className='aspect-video object-cover w-full sm:pr-0' src={article.Image} width={100} height={100} alt={article.Title} />
              <section className='flex flex-col xs:px-3 sm:px-0 sm:pr-0'>
                <div className='flex gap-2 xs:gap-3 items-center'>
                  <Category className='sm:text-xs text-nowrap'>{article.Category}</Category>
                  <Tag className='sm:text-xs text-nowrap'>{article.Tag}</Tag>
                  <p className={`${ralewayBold.className} inline-block text-xs xs:text-sm sm:hidden`}>{article.Date}</p>
                </div>
                <h1 className={`${maitreeBold.className} text-lg xs:text-xl sm:text-2xl leading-5 py-1 md:text-sm lg:text-xl`}>{article.Title}</h1>
                <p className={`${poppisLight.className} text-sm xs:text-md sm:text-xs lg:text-sm`}>Author: {article.Author}</p>
                <span className={`${maitreeBold.className} my-4 xs:my-3 sm:my-4 text-millbrook-900 cursor-pointer`} >Read More <IconArrow className='inline' /></span>
              </section>
            </article>
          ))}
        </section>
      </section>
      <section className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1307px] justify-between mx-auto gap-4'>
        { data.map(article => (article.Id > 5 && article.Id < 12) && (
          <article key={article.Id} className='sm:flex sm:gap-2 md:flex-col lg:max-w-[426px]'>
            <Image className='aspect-video object-cover w-full xs:px-3 sm:px-0' src={article.Image} width={100} height={100} alt={article.Title} />
            <section className='flex flex-col justify-between xs:px-3 sm:pl-0'>
              <div className='flex gap-2 xs:gap-3 items-center'>
                <Category>{article.Category}</Category>
                <Tag>{article.Tag}</Tag>
                <p className={`${ralewayBold.className} inline-block text-xs xs:text-sm text-millbrook-900`}>{article.Date}</p>
              </div>
              <h1 className={`${maitreeBold.className} text-lg xs:text-xl sm:text-2xl leading-5 py-1 md:text-xl lg:text-2xl text-millbrook-900`}>{article.Title}</h1>
              <p className={`${poppisLight.className} text-sm xs:text-md text-millbrook-900`}>Author: {article.Author}</p>
              <span className={`${maitreeBold.className} my-4 xs:my-3 sm:my-4 text-millbrook-900 cursor-pointer`} >Read More <IconArrow className='inline' /></span>
            </section>
          </article>
        ))}
      </section>
    </main>
  )
}
