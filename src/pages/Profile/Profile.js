import '../../layouts/Profile/Profile.scss';
import { ProfileLayout } from '../../layouts/Profile/ProfileLayout';
import { AnimatedPage } from '../../components/AnimatedPage';

export const Profile = () => {
  const content = (
    <AnimatedPage>
      <div className="profile-container">

        <div className="profile-info">
          <h1 className="profile-info__title">Ольга Малюга</h1>
          <div className="profile-info__loyalty">
            <p>Программа лояльности</p>
            <p>№32542552</p>
          </div>
          <div className="profile-info__discount">
            <p>Скидка по программе</p>
            <p>-5%</p>
          </div>
        </div>

        <div className="profile-news">
          <h1 className="profile-news__title">Новостная рассылка</h1>
          <p className="profile-news__description">
            Получайте новости об актуальный акциях <br />и специальных коллекциях бренда Ivolga</p>
        </div>

        <div className="profile-subscribe">
          <div className="profile-subscribe__agreement">
            <input
              type="checkbox"
              id="agreement"
              name="agreement" />
            <label htmlFor="agreement">
              <span>Я хочу получать новостную рассылку от магазина Ivolga</span>
            </label>
          </div>
          <button className="profile-subscribe__button">Отписаться</button>
        </div>

      </div>
    </AnimatedPage>
  );

  return (
    <ProfileLayout content={content} />
  );
};
