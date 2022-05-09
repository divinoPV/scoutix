import React from 'react';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import style from './Disconnect.module.scss';

import List from '../../../../Molecules/Global/Container/List';
import Container from '../../../../Atoms/Container/Container';

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Disconnect: React.FC<{
  afterSwiper?: React.ReactElement;
  afterNews?: React.ReactElement;
  afterBackground?: React.ReactElement;
  afterEvent?: React.ReactElement;
  classNameLastChild?: string;
}> = (
  {
    afterSwiper = null,
    afterNews = null,
    afterBackground = null,
    afterEvent = null,
    classNameLastChild = '',
  }
) => {
  return <>
    <Swiper
      centeredSlides={ true }
      className={ `${ style['Disconnect__swiper'] }` }
      coverflowEffect={ {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      } }
      grabCursor={ true }
      effect="fade"
      fadeEffect={ {
        crossFade: true,
      } }
      navigation
      pagination={ true }
      slidesPerView={ 1 }
    >
      {
        [
          {
            alt: 'Est aliquid labore sit',
            content: 'Ut voluptatem iusto hic veritatis galisum' +
              ' ut nihil aliquam aut reiciendis officiis sed unde' +
              ' natus in esse consequatur. 33 eligendi sint et' +
              ' saepe porro et alias exercitationem et dicta fuga' +
              ' ut corporis fugit ut maxime quia. Sed animi voluptatem' +
              ' sit dolorem obcaecati eum sint repellendus hic inventore' +
              ' recusandae a quae sapiente aut Quis sunt. Eos nulla' +
              ' voluptates aut pariatur doloribus ex maxime nobis' +
              ' est accusamus eligendi.',
            id: 1,
            legend: 'Non alias quidem',
            src: 'carousel-1.jpg'
          },
          {
            alt: 'Quasi quis et quasi aspernatur ',
            content: 'Quo odit illo qui expedita soluta qui velit' +
              ' cupiditate qui velit ipsam. Aut reiciendis internos' +
              ' et reprehenderit voluptatem sit corporis ipsum. Et' +
              ' dolore quam quo veritatis porro ea ipsa vero quo' +
              ' voluptate quasi. Est obcaecati cupiditate At temporibus' +
              ' voluptatum rem esse ipsum est deserunt totam id' +
              ' neque inventore?',
            id: 2,
            legend: 'Sed rerum praesentium',
            src: 'carousel-2.jpg'
          },
          {
            alt: 'Corrupti odit qui',
            content: 'In esse excepturi eos galisum totam sit' +
              ' molestiae voluptatem aut recusandae numquam sit' +
              ' voluptatibus consequuntur ad enim pariatur ut velit' +
              ' corporis? Et eligendi esse ut doloribus commodi et' +
              ' molestias officiis et enim illo nam illo quas? Aut' +
              ' quod ipsum in quod suscipit ut fuga eius.',
            id: 3,
            legend: 'At reiciendis assumenda',
            src: 'carousel-3.jpg'
          },
          {
            alt: 'Itaque et porro ',
            content: 'Qui facilis galisum ex quas similique et' +
              ' veniam nemo! Sed sapiente blanditiis eum rerum' +
              ' ullam At veritatis ducimus. Et omnis galisum ut' +
              ' distinctio nulla aut deleniti voluptas et molestias' +
              ' exercitationem sed nihil molestiae sit facilis provident.',
            id: 4,
            legend: 'Ex illum molestiae ',
            src: 'carousel-4.jpg'
          },
          {
            alt: 'Ab enim ratione',
            content: 'Et rerum veniam et voluptate quia et molestiae' +
              ' magnam et deleniti quo voluptatem atque aut sunt nihil.' +
              ' Et internos maxime est quae dicta qui deleniti natus est' +
              ' maiores cum explicabo sunt aut excepturi excepturi? Et' +
              ' aliquid quia sit galisum amet sed consequatur molestias' +
              ' At culpa nihil. Non maxime ipsa qui facere architecto' +
              ' ut praesentium magnam ut amet enim.',
            id: 5,
            legend: 'Et quisquam minima',
            src: 'carousel-5.jpg'
          },
          {
            alt: 'In voluptas dicta',
            content: 'Et Quis excepturi aut dolorem totam qui aliquam' +
              ' velit eos itaque vitae aut magni alias in magnam doloremque?' +
              ' Ea eaque cupiditate ea ipsam nihil in odio repellat eum' +
              ' commodi voluptatem ut odit molestiae et molestiae error?' +
              ' Et architecto sint cum quaerat aliquam aut quia voluptate' +
              ' ex nulla omnis sed reprehenderit maxime. Qui repellendus' +
              ' deserunt non cumque explicabo sit facere corrupti' +
              ' non excepturi illo.',
            id: 6,
            legend: 'Eum autem perferendis',
            src: 'carousel-6.jpg'
          },
          {
            alt: 'Et rerum veniam et',
            content: 'Ut obcaecati galisum ex veritatis commodi aut quibusdam' +
              ' sequi sed dolore exercitationem aut dicta magnam.' +
              ' Eum suscipit esse qui autem tempora hic error ' +
              'neque et magni accusantium.',
            id: 7,
            legend: 'Eum autem perferendis',
            src: 'carousel-7.jpg'
          },
          {
            alt: 'Qui consequatur sunt',
            content: '33 debitis quia et delectus obcaecati et repellendus' +
              ' galisum et autem temporibus! Ex quidem error At' +
              ' tempore perferendis eos delectus facere.',
            id: 8,
            legend: 'Eum autem perferendis',
            src: 'carousel-8.jpg'
          },
          {
            alt: 'Ab facilis velit vel',
            content: 'Sit laborum explicabo ut provident repudiandae sit' +
              ' nisi minima ea officia aliquam eos tempore aspernatur. Quo' +
              'eaque labore et quam autem in provident ipsa in placeat minima' +
              ' sed quia porro est laborum officia.',
            id: 9,
            legend: 'Est consequatur adipisci ut voluptas itaque sit nostrum' +
              ' nostrum vel ducimus facere? Sit molestiae natus et voluptas' +
              ' inventore nam eligendi beatae non veritatis praesentium.',
            src: 'carousel-9.jpg'
          },
        ].map(({ alt, content, id, legend, src }) => <SwiperSlide
          className={ `${ style['Disconnect__swiper__slide'] }` }
          key={ id }
        >
          <img
            alt={ `${ alt } background` }
            className={ `${ style['Disconnect__swiper__slide__background'] }` }
            src={ `media/img/${ src }` }
          />
          <img alt={ alt } src={ `media/img/${ src }` } />
          <div className={ `${ style['Disconnect__swiper__slide__text'] }` }>
            <strong>{ legend }</strong>
            <p>{ content }</p>
          </div>
        </SwiperSlide>)
      }
    </Swiper>
    { afterSwiper && afterSwiper }
    <Container>
      <List
        classNameContainer={ `${ style['Disconnect__list'] }` }
        data={
          [
            {
              description: 'Vel odio quidem ut soluta unde At quia expedita' +
                ' ut temporibus quidem et dolor quod sit' +
                ' voluptatem voluptatem.',
              leading: 'Vel odio quidem ut - 30 avril 2022',
              id: 1,
              image: 'media/img/news-1.jpg',
              title: 'Ex amet nobis est soluta',
            },
            {
              description: 'Qui esse aspernatur sed harum fugiat sint' +
                ' error ut quia delectus in consequatur ipsa' +
                ' qui vero perspiciatis? In quis doloribus et' +
                ' minus aliquid vel voluptas fugiat.',
              leading: 'Sed harum fugiat - 14 avril 2022',
              id: 2,
              image: 'media/img/news-2.jpg',
              title: 'Eos sint quia est quia laboriosam',
            },
            {
              description: 'Quis suscipit sed dicta maxime' +
                ' ea consequatur sunt in eaque vitae' +
                ' sit laudantium molestias. ',
              leading: 'At suscipit - 27 mars 2022',
              id: 3,
              image: 'media/img/news-3.jpg',
              title: 'Et quae asperiores qui',
            },
            {
              description: 'Quis suscipit sed dicta maxime ea' +
                ' consequatur sunt in eaque vitae sit laudantium molestias. ',
              leading: 'Suscipit docclean - 12 mars 2022',
              id: 4,
              image: 'media/img/news-4.jpg',
              title: 'Et quae asperiores qui',
            },
            {
              description: 'Quis suscipit sed dicta maxime ea' +
                ' consequatur sunt in eaque vitae sit laudantium molestias. ',
              leading: 'Suscipit docclean - 16 février 2022',
              id: 5,
              image: 'media/img/news-5.jpg',
              title: 'Et quae asperiores qui',
            },
            {
              description: 'Dicta maxime ea' +
                ' consequatur sit molestias. ',
              leading: 'Proloty virium - 21 janvier 2022',
              id: 6,
              image: 'media/img/news-6.jpg',
              title: 'Utinam quisquam',
            },
          ]
        }
        title={ 'Nos derniers articles' }
      />
    </Container>
    { afterNews && afterNews }
    <div className={ `${ style['Disconnect__background'] }` }>
      <img
        alt="Image de fond"
        src="/media/img/background-1.jpg"
      />
    </div>
    { afterBackground && afterBackground }
    <Container>
      <List
        classNameContainer={ `
          ${ style['Disconnect__list'] }
          ${ style['Disconnect__list--last'] }
          ${ classNameLastChild }
        ` }
        data={
          [
            {
              description: 'Quis suscipit sed dicta maxime ea consequatur' +
                ' sunt in eaque vitae sit laudantium molestias. ',
              leading: 'Suscipit docclean - 12 mars 2022',
              id: 1,
              image: 'media/img/news-4.jpg',
              title: 'Et quae asperiores qui',
            },
            {
              description: 'Vel odio quidem ut soluta unde At quia expedita' +
                ' ut temporibus quidem et dolor quod sit' +
                ' voluptatem voluptatem.',
              leading: 'Vel odio quidem ut - 30 avril 2022',
              id: 2,
              image: 'media/img/news-1.jpg',
              title: 'Ex amet nobis est soluta',
            },
            {
              description: 'Quis suscipit sed dicta maxime' +
                ' ea consequatur sunt in eaque ' +
                'vitae sit laudantium molestias. ',
              leading: 'Suscipit docclean - 16 février 2022',
              id: 3,
              image: 'media/img/news-5.jpg',
              title: 'Et quae asperiores qui',
            },
            {
              description: 'Quis suscipit sed dicta maxime' +
                ' ea consequatur sunt in eaque vitae' +
                ' sit laudantium molestias. ',
              leading: 'At suscipit - 27 mars 2022',
              id: 4,
              image: 'media/img/news-3.jpg',
              title: 'Et quae asperiores qui',
            },
            {
              description: 'Qui esse aspernatur sed' +
                ' harum fugiat sint error ut quia delectus' +
                ' in consequatur ipsa qui vero perspiciatis?' +
                ' In quis doloribus et minus aliquid vel voluptas fugiat.',
              leading: 'Sed harum fugiat - 14 avril 2022',
              id: 5,
              image: 'media/img/news-2.jpg',
              title: 'Eos sint quia est quia laboriosam',
            },
          ]
        }
        title={ 'Nos derniers événements' }
      />
    </Container>
    { afterEvent && afterEvent }
  </>;
};

export default Disconnect;
