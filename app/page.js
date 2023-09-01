import Image from 'next/image'
import image1 from 'public/1.png'
import image2 from 'public/2.png'
import image3 from 'public/3.png'
import image4 from 'public/4.png'
import image5 from 'public/5.png'
import image6 from 'public/6.png'


const Home = () => {
  return (
    <section className='wrapper'>
      <h2>Next.js Image Loading Guide</h2>
      <div className='div-wrapper'>
        <Image
          src={image1}
          alt='Image 1'
          width={600}
          height={500}
          priority 
        />
        <Image
          src={image2}
          alt='Image 2'
          width={600}
          height={500}
          priority 
        />
        
        <Image
          src={image3}
          alt='Image 3'
          width={600}
          height={500}
          loading='lazy'
        />
        
        <Image
          src={image4}
          alt='Image 4'
          width={600}
          height={500}
          loading='lazy'

        />
        <Image
          src={image5}
          alt='Image 5'
          width={600}
          height={500}
          loading='lazy'

        />
        <Image
          src={image6}
          alt='Image 6'
          width={600}
          height={500}
          loading='lazy'

        />
      </div>
    </section>
  )
}

export default Home